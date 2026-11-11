/* Online attendance.
   Demo mode  (backendUrl empty): saved on this device only, demo students.
   Online mode (backendUrl set):  saved in your private Google Sheet. */
(function () {
  const { $, esc } = MT, C = MT_CONFIG, B = MT_CONTENT.batches, root = $("#att-root");
  const ON = MT.online(), KEY = "mt_attendance";
  let tab = "student", T = null; // T = teacher session {pin,batch,date,list:[{roll,name,status}]}
  const local = () => MT.store.get(KEY, {});
  const demoRoster = (batch) => MT_DEMO_STUDENTS.filter((s) => s.batch === batch);
  const pct = (p, a) => (p + a ? Math.round((p / (p + a)) * 100) : 0);

  function shell(inner) {
    root.innerHTML = `${ON ? "" : `<div class="alert">Demo mode: attendance is saved only on this device, with demo students (teacher PIN ${esc(C.demoTeacherPin)}, student roll 1001, code 1111). Connect Google Sheets to make it online — see README.</div>`}
      <div class="filters"><button class="pill ${tab === "student" ? "on" : ""}" data-tab="student">👨‍👩‍👦 Student / Parent</button><button class="pill ${tab === "teacher" ? "on" : ""}" data-tab="teacher">👩‍🏫 Teacher</button></div>${inner}`;
  }

  // ---------- student / parent ----------
  function student(result) {
    shell(`<div class="grid2"><div class="card"><h3>Check attendance</h3><form id="chk"><label for="roll">Roll number</label><input id="roll" required inputmode="numeric" maxlength="20">
      <label for="code">Code (given by the institute)</label><input id="code" required type="password" maxlength="20" autocomplete="off"><button class="btn block">Show attendance</button></form></div>
      <div class="card" id="out">${result || '<p class="muted">Enter the roll number and code to see present and absent days.</p>'}</div></div>`);
    $("#chk").onsubmit = async (e) => {
      e.preventDefault(); const roll = $("#roll").value.trim(), code = $("#code").value.trim(), out = $("#out");
      out.innerHTML = '<p class="muted">Loading…</p>';
      try {
        let name, recs;
        if (ON) { const r = await MT.api({ action: "student", roll, code }); name = r.name; recs = r.records; }
        else { const s = MT_DEMO_STUDENTS.find((x) => x.roll === roll && x.code === code); if (!s) throw new Error("Roll number or code is not correct");
          name = s.name; recs = Object.entries(local()).filter(([k, v]) => k.startsWith(s.batch + "|") && v[roll]).map(([k, v]) => ({ date: k.split("|")[1], status: v[roll] })); }
        recs.sort((a, b) => (a.date < b.date ? 1 : -1));
        const p = recs.filter((r) => r.status === "P").length, a = recs.length - p;
        out.innerHTML = `<h3>${esc(name)} <small class="muted">· Roll ${esc(roll)}</small></h3>
          <div class="stats" style="grid-template-columns:repeat(3,1fr)"><div><b>${pct(p, a)}%</b><small>Attendance</small></div><div><b style="color:var(--ok)">${p}</b><small>Present</small></div><div><b style="color:var(--bad)">${a}</b><small>Absent</small></div></div>
          ${recs.length ? `<b>Recent classes</b><div class="days" style="margin-top:8px">${recs.slice(0, 40).map((r) => `<span class="${r.status}">${MT.niceDate(r.date).slice(0, 6)} · ${r.status}</span>`).join("")}</div>` : '<p class="muted">No attendance has been marked yet.</p>'}`;
      } catch (err) { out.innerHTML = `<div class="alert bad">${esc(err.message)}</div>`; }
    };
  }

  // ---------- teacher ----------
  function teacherLogin(msg) {
    shell(`<div class="card" style="max-width:520px"><h3>Mark attendance</h3>${msg ? `<div class="alert bad">${esc(msg)}</div>` : ""}<form id="tl">
      <label for="pin">Teacher PIN</label><input id="pin" type="password" required autocomplete="off" maxlength="30" value="${esc(T ? T.pin : "")}">
      <div class="row"><div><label for="batch">Batch</label><select id="batch">${B.map((b) => `<option value="${b.id}">${esc(b.name)}</option>`).join("")}</select></div>
      <div><label for="date">Date</label><input id="date" type="date" required value="${MT.today()}" max="${MT.today()}"></div></div>
      <div class="cta"><button class="btn" name="go" value="mark">Open register</button><button class="btn ghost" name="go" value="report">Monthly report</button></div></form></div>`);
    $("#tl").onsubmit = async (e) => {
      e.preventDefault(); const pin = $("#pin").value.trim(), batch = $("#batch").value, date = $("#date").value, mode = e.submitter ? e.submitter.value : "mark";
      try {
        if (!ON && pin !== C.demoTeacherPin) throw new Error("Wrong PIN");
        T = { pin, batch, date };
        if (mode === "report") return report();
        let list, saved;
        if (ON) { const r = await MT.api({ action: "roster", pin, batch, date }); list = r.students; saved = r.saved || {}; }
        else { list = demoRoster(batch); saved = local()[batch + "|" + date] || {}; }
        T.list = list.map((s) => ({ roll: String(s.roll), name: s.name, status: saved[s.roll] || "P" }));
        T.edit = Object.keys(saved).length > 0; register();
      } catch (err) { teacherLogin(err.message); }
    };
  }
  function register() {
    const b = B.find((x) => x.id === T.batch), p = T.list.filter((s) => s.status === "P").length;
    shell(`<div class="card"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center"><div><h3 style="margin:0">${esc(b.name)}</h3><span class="muted">${MT.niceDate(T.date)} ${T.edit ? "· already marked, you are editing" : ""}</span></div>
      <div><span class="tag s">Present ${p}</span> <span class="tag new">Absent ${T.list.length - p}</span></div></div>
      <p class="muted" style="margin:12px 0">Everyone starts as Present. Tap the button to change a student to Absent.</p>
      ${T.list.length ? T.list.map((s, i) => `<div class="stu"><span class="nm">${esc(s.name)} <small>· ${esc(s.roll)}</small></span><button class="tog ${s.status}" data-i="${i}" aria-label="${esc(s.name)} is ${s.status === "P" ? "present" : "absent"}">${s.status === "P" ? "Present" : "Absent"}</button></div>`).join("") : '<div class="alert">No students found in this batch.</div>'}
      <div class="cta"><button class="btn gold" id="save" ${T.list.length ? "" : "disabled"}>Save attendance</button><button class="btn ghost" data-tlogin>Back</button></div></div>`);
    $("#save").onclick = async () => {
      const btn = $("#save"); btn.disabled = true; btn.textContent = "Saving…";
      try {
        if (ON) await MT.api({ action: "saveAttendance", pin: T.pin, batch: T.batch, date: T.date, records: T.list });
        else { const all = local(), day = {}; T.list.forEach((s) => (day[s.roll] = s.status)); all[T.batch + "|" + T.date] = day; if (!MT.store.set(KEY, all)) throw new Error("Could not save on this device"); }
        T.edit = true; MT.toast("Attendance saved ✓"); register();
      } catch (err) { MT.toast(err.message); btn.disabled = false; btn.textContent = "Save attendance"; }
    };
  }
  async function report() {
    const month = T.date.slice(0, 7), b = B.find((x) => x.id === T.batch);
    try {
      let rows;
      if (ON) rows = (await MT.api({ action: "report", pin: T.pin, batch: T.batch, month })).rows;
      else { const all = local(); rows = demoRoster(T.batch).map((s) => { let p = 0, a = 0;
        Object.entries(all).forEach(([k, v]) => { if (k.startsWith(T.batch + "|" + month) && v[s.roll]) v[s.roll] === "P" ? p++ : a++; }); return { roll: s.roll, name: s.name, present: p, absent: a }; }); }
      T.rows = rows;
      shell(`<div class="card"><h3>${esc(b.name)} — report for ${MT.niceDate(month + "-01").slice(3)}</h3><div class="scroll"><table><tr><th>Roll</th><th>Name</th><th>Present</th><th>Absent</th><th>%</th></tr>
        ${rows.map((r) => `<tr><td>${esc(r.roll)}</td><td>${esc(r.name)}</td><td>${r.present}</td><td>${r.absent}</td><td><b>${pct(r.present, r.absent)}%</b></td></tr>`).join("")}</table></div>
        <div class="cta"><button class="btn" id="csv">⬇ Download CSV</button><button class="btn ghost" data-tlogin>Back</button></div></div>`);
      $("#csv").onclick = () => { try {
        const csv = "Roll,Name,Present,Absent,Percent\n" + T.rows.map((r) => [r.roll, '"' + String(r.name).replace(/"/g, '""') + '"', r.present, r.absent, pct(r.present, r.absent)].join(",")).join("\n");
        const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); a.download = `attendance-${T.batch}-${month}.csv`; a.click();
      } catch (err) { MT.toast("Download is not available here"); } };
    } catch (err) { teacherLogin(err.message); }
  }

  root.addEventListener("click", (e) => {
    const t = e.target.closest("[data-tab]"), g = e.target.closest("[data-i]");
    if (t) { tab = t.dataset.tab; tab === "student" ? student() : teacherLogin(); }
    else if (g) { const s = T.list[+g.dataset.i]; s.status = s.status === "P" ? "A" : "P"; register(); }
    else if (e.target.closest("[data-tlogin]")) teacherLogin();
  });
  student();
})();
