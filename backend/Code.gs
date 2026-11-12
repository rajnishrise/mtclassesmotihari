/**
 * MT CLASSES — Google Sheets backend (Google Apps Script)
 * Stores attendance, online-test results and enquiries in YOUR private Google Sheet.
 * Setup steps are in README.md (step 3).
 */
const SHEETS = {
  Students:   ["Roll", "Name", "Class", "Batch", "Code", "Phone"],
  Attendance: ["Date", "Batch", "Roll", "Name", "Status", "MarkedAt"],
  Results:    ["Time", "Name", "Roll", "Class", "Subject", "Test", "Score", "Total", "Percent", "Seconds"],
  Enquiries:  ["Time", "Name", "Class", "Subject", "Phone", "School", "Message"]
};

/** Run this ONCE from the editor: creates the sheets and sets the teacher PIN. */
function setup() {
  const ss = SpreadsheetApp.getActive();
  Object.keys(SHEETS).forEach(function (name) {
    const sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.getRange(1, 1, 1, SHEETS[name].length).setValues([SHEETS[name]]).setFontWeight("bold");
    sh.setFrozenRows(1);
    sh.getRange("A:F").setNumberFormat("@"); // keep dates, roll numbers and codes as plain text
  });
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty("TEACHER_PIN")) props.setProperty("TEACHER_PIN", "CHANGE-ME-123");
}

function doGet() { return json({ ok: true, message: "MT Classes backend is running" }); }

function doPost(e) {
  try {
    const b = JSON.parse(e.postData.contents);
    switch (b.action) {
      case "roster":         return json(roster(b));
      case "saveAttendance": return json(saveAttendance(b));
      case "report":         return json(report(b));
      case "student":        return json(student(b));
      case "saveResult":     return json(saveResult(b.result || {}));
      case "enquiry":        return json(enquiry(b.enquiry || {}));
      default: throw new Error("Unknown action");
    }
  } catch (err) { return json({ ok: false, error: String(err.message || err) }); }
}

// ---------- helpers ----------
function json(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function sheet(name) { return SpreadsheetApp.getActive().getSheetByName(name); }
function rows(name) { const v = sheet(name).getDataRange().getValues(); v.shift(); return v; }
function txt(v) { return v instanceof Date ? Utilities.formatDate(v, Session.getScriptTimeZone(), "yyyy-MM-dd") : String(v).trim(); }
function clip(v, n) { v = String(v == null ? "" : v).slice(0, n || 200); return /^[=+\-@]/.test(v) ? "'" + v : v; } // blocks spreadsheet formulas
function checkPin(pin) {
  const real = PropertiesService.getScriptProperties().getProperty("TEACHER_PIN");
  if (!real || String(pin) !== real) throw new Error("Wrong PIN");
}
function inBatch(cell, batch) { return txt(cell).split(",").map(function (s) { return s.trim(); }).indexOf(batch) > -1; }
function studentsOf(batch) {
  return rows("Students").filter(function (r) { return txt(r[0]) && inBatch(r[3], batch); })
    .map(function (r) { return { roll: txt(r[0]), name: txt(r[1]), phone: txt(r[5]) }; });
}

// ---------- teacher ----------
function roster(b) {
  checkPin(b.pin);
  const saved = {};
  rows("Attendance").forEach(function (r) { if (txt(r[0]) === b.date && txt(r[1]) === b.batch) saved[txt(r[2])] = txt(r[4]); });
  return { ok: true, students: studentsOf(b.batch), saved: saved };
}

function saveAttendance(b) {
  checkPin(b.pin);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.date)) throw new Error("Bad date");
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const sh = sheet("Attendance"), data = sh.getDataRange().getValues(), at = {};
    for (var i = 1; i < data.length; i++) at[txt(data[i][0]) + "|" + txt(data[i][1]) + "|" + txt(data[i][2])] = i + 1;
    const now = new Date().toISOString(), add = [];
    (b.records || []).forEach(function (s) {
      const status = s.status === "A" ? "A" : "P", row = at[b.date + "|" + b.batch + "|" + s.roll];
      if (row) sh.getRange(row, 5, 1, 2).setValues([[status, now]]);
      else add.push([b.date, b.batch, clip(s.roll, 20), clip(s.name, 60), status, now]);
    });
    if (add.length) sh.getRange(sh.getLastRow() + 1, 1, add.length, 6).setValues(add);
  } finally { lock.releaseLock(); }
  return { ok: true };
}

function report(b) {
  checkPin(b.pin);
  const count = {};
  rows("Attendance").forEach(function (r) {
    if (txt(r[1]) !== b.batch || txt(r[0]).slice(0, 7) !== b.month) return;
    const c = count[txt(r[2])] || (count[txt(r[2])] = { p: 0, a: 0 });
    txt(r[4]) === "P" ? c.p++ : c.a++;
  });
  return { ok: true, rows: studentsOf(b.batch).map(function (s) {
    const c = count[s.roll] || { p: 0, a: 0 }; return { roll: s.roll, name: s.name, present: c.p, absent: c.a };
  }) };
}

// ---------- student / parent ----------
function student(b) {
  const roll = String(b.roll || "").trim(), code = String(b.code || "").trim();
  const me = rows("Students").filter(function (r) { return txt(r[0]) === roll && txt(r[4]) && txt(r[4]) === code; })[0];
  if (!me) throw new Error("Roll number or code is not correct");
  const records = rows("Attendance").filter(function (r) { return txt(r[2]) === roll; })
    .map(function (r) { return { date: txt(r[0]), status: txt(r[4]) }; });
  return { ok: true, name: txt(me[1]), records: records };
}

// ---------- public forms ----------
function saveResult(r) {
  sheet("Results").appendRow([new Date(), clip(r.name, 60), clip(r.roll, 20), clip(r.cls, 4), clip(r.subject, 20), clip(r.title, 80),
    Number(r.score) || 0, Number(r.total) || 0, Number(r.pct) || 0, Number(r.secs) || 0]);
  return { ok: true };
}
function enquiry(q) {
  sheet("Enquiries").appendRow([new Date(), clip(q.name, 60), clip(q.cls, 4), clip(q.subject, 30), clip(q.phone, 15), clip(q.school, 80), clip(q.message, 400)]);
  return { ok: true };
}
