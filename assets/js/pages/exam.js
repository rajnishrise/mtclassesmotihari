/* Online test engine. Question bank: data/questions.js */
(function () {
  const { $, esc } = MT, T = MT_TESTS, C = MT_CONFIG, root = $("#exam-root");
  let cls = 0, S = null, timer = null;
  const fmt = (s) => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  const subTag = (t) => `<span class="tag gold">Class ${t.cls}</span> <span class="tag ${t.subject === "Maths" ? "m" : "s"}">${t.subject}</span>`;

  function list() {
    S = null; clearInterval(timer);
    const hist = MT.store.get("mt_results", []);
    root.innerHTML = `<div class="filters">${[0, 10, 9, 8].map((c) => `<button class="pill ${c === cls ? "on" : ""}" data-c="${c}">${c ? "Class " + c : "All"}</button>`).join("")}</div>
      <div class="grid3">${T.filter((t) => !cls || t.cls === cls).map((t) => `<div class="card">${subTag(t)}<h3 style="margin:10px 0 4px">${esc(t.title)}</h3>
        <p class="muted">📝 ${t.questions.length} questions · ⏱ ${t.minutes} min</p><button class="btn block" data-open="${t.id}">Start test</button></div>`).join("")}</div>
      ${hist.length ? `<h3 style="margin-top:34px">Your recent results (this device)</h3><div class="card scroll"><table><tr><th>Date</th><th>Test</th><th>Score</th></tr>
        ${hist.slice(0, 8).map((h) => `<tr><td>${MT.niceDate(h.date)}</td><td>Class ${h.cls} · ${esc(h.title)}</td><td><b>${h.score}/${h.total}</b></td></tr>`).join("")}</table></div>` : ""}`;
  }

  function intro(t) {
    const me = MT.store.get("mt_student", {});
    root.innerHTML = `<div class="card" style="max-width:560px;margin:0 auto">${subTag(t)}<h2 style="margin-top:10px">${esc(t.title)}</h2>
      <ul class="muted"><li>${t.questions.length} multiple-choice questions, 1 mark each, no negative marking.</li><li>Time allowed: ${t.minutes} minutes. The test submits itself when time is over.</li><li>You can move between questions and change answers before submitting.</li></ul>
      <form id="start"><label for="nm">Your name</label><input id="nm" required maxlength="60" value="${esc(me.name || "")}" autocomplete="name">
      <label for="rl">Roll number (optional)</label><input id="rl" maxlength="20" value="${esc(me.roll || "")}" inputmode="numeric">
      <div class="cta"><button class="btn gold">Start test</button><button type="button" class="btn ghost" data-back>Back</button></div></form></div>`;
    $("#start").onsubmit = (e) => { e.preventDefault(); const name = $("#nm").value.trim(), roll = $("#rl").value.trim();
      if (!name) return; MT.store.set("mt_student", { name, roll }); begin(t, name, roll); };
  }

  function begin(t, name, roll) {
    S = { t, name, roll, i: 0, ans: t.questions.map(() => null), mark: {}, t0: Date.now(), end: Date.now() + t.minutes * 60000 };
    timer = setInterval(tick, 500); draw(); window.scrollTo(0, 0);
  }
  function tick() {
    const left = Math.max(0, Math.round((S.end - Date.now()) / 1000)), el = $("#timer");
    if (el) { el.textContent = fmt(left); el.classList.toggle("low", left <= 60); }
    if (left <= 0) finish();
  }
  function draw() {
    const t = S.t, q = t.questions[S.i], n = t.questions.length, done = S.ans.filter((a) => a !== null).length;
    root.innerHTML = `<div class="exam-top"><div><b>${esc(t.title)}</b><br><small class="muted">Answered ${done} of ${n}</small></div><span class="timer" id="timer" aria-label="Time left"></span></div>
      <div class="prog"><i style="width:${(done / n) * 100}%"></i></div>
      <div class="card"><span class="tag">Question ${S.i + 1} of ${n}</span>${S.mark[S.i] ? ' <span class="tag" style="background:#ede4ff;color:#5b21b6">Marked for review</span>' : ""}
        <p class="q">${q.q}</p>${q.o.map((o, k) => `<button class="opt ${S.ans[S.i] === k ? "sel" : ""}" data-pick="${k}"><b>${"ABCD"[k]}</b><span>${o}</span></button>`).join("")}
        <div class="cta"><button class="btn ghost sm" data-go="${S.i - 1}" ${S.i === 0 ? "disabled" : ""}>← Previous</button>
          <button class="btn ghost sm" data-mark>${S.mark[S.i] ? "Unmark" : "Mark for review"}</button>
          ${S.i < n - 1 ? `<button class="btn sm" data-go="${S.i + 1}">Next →</button>` : ""}
          <button class="btn gold sm" data-submit style="margin-left:auto">Submit test</button></div></div>
      <div class="card" style="margin-top:16px"><b>All questions</b> <small class="muted">· green = answered · purple = marked</small>
        <div class="pal">${t.questions.map((_, k) => `<button class="${S.ans[k] !== null ? "a" : ""} ${S.mark[k] ? "m" : ""} ${k === S.i ? "c" : ""}" data-go="${k}" aria-label="Question ${k + 1}">${k + 1}</button>`).join("")}</div></div>`;
    tick();
  }

  function finish() {
    clearInterval(timer);
    const t = S.t, total = t.questions.length;
    let right = 0, wrong = 0;
    t.questions.forEach((q, k) => { if (S.ans[k] === null) return; S.ans[k] === q.a ? right++ : wrong++; });
    const secs = Math.min(t.minutes * 60, Math.round((Date.now() - S.t0) / 1000)), pct = Math.round((right / total) * 100);
    const rec = { date: MT.today(), id: t.id, cls: t.cls, subject: t.subject, title: t.title, score: right, total, pct, secs, name: S.name, roll: S.roll };
    const hist = MT.store.get("mt_results", []); hist.unshift(rec); MT.store.set("mt_results", hist.slice(0, 30));
    if (MT.online()) MT.api({ action: "saveResult", result: rec }).then(() => MT.toast("Result sent to your teacher")).catch(() => MT.toast("Could not send the result online"));
    const msg = pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good — revise the wrong ones." : "Keep practising. Read the notes and try again.";
    const R = 70, circ = 2 * Math.PI * R, ans = S.ans; S = null;
    root.innerHTML = `<div class="card center" style="max-width:620px;margin:0 auto"><h2>${esc(rec.name)}, your result</h2><p class="muted">Class ${t.cls} · ${esc(t.title)}</p>
      <div class="ring"><svg width="170" height="170"><circle cx="85" cy="85" r="${R}" fill="none" stroke="var(--line)" stroke-width="14"/><circle cx="85" cy="85" r="${R}" fill="none" stroke="${pct >= 50 ? "var(--ok)" : "var(--bad)"}" stroke-width="14" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - pct / 100)}"/></svg><div>${pct}%</div></div>
      <h3>${right} out of ${total} · ${msg}</h3>
      <div class="stats"><div><b style="color:var(--ok)">${right}</b><small>Correct</small></div><div><b style="color:var(--bad)">${wrong}</b><small>Wrong</small></div><div><b>${total - right - wrong}</b><small>Skipped</small></div><div><b>${fmt(secs)}</b><small>Time</small></div></div>
      <div class="cta" style="justify-content:center"><button class="btn" data-open="${t.id}">Try again</button>
        <a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(`I scored ${right}/${total} (${pct}%) in "${t.title}" (Class ${t.cls}) on ${C.name} online test.`)}">Share on WhatsApp</a>
        <button class="btn ghost" data-back>All tests</button></div></div>
      <h3 style="margin-top:30px">Solutions</h3>${t.questions.map((q, k) => `<div class="card" style="margin-bottom:12px"><span class="tag ${ans[k] === q.a ? "s" : "new"}">${ans[k] === null ? "Skipped" : ans[k] === q.a ? "Correct" : "Wrong"}</span>
        <p class="q">${k + 1}. ${q.q}</p>${q.o.map((o, j) => `<div class="opt ${j === q.a ? "right" : j === ans[k] ? "wrong" : ""}" style="cursor:default"><b>${"ABCD"[j]}</b><span>${o}${j === q.a ? " ✓" : j === ans[k] ? " ✗ (your answer)" : ""}</span></div>`).join("")}
        <p class="muted" style="margin:0"><b>Why:</b> ${q.e}</p></div>`).join("")}`;
    window.scrollTo(0, 0);
  }

  root.addEventListener("click", async (e) => {
    const b = (s) => e.target.closest(s); let x;
    if ((x = b("[data-c]"))) { cls = +x.dataset.c; list(); }
    else if ((x = b("[data-open]"))) intro(T.find((t) => t.id === x.dataset.open));
    else if (b("[data-back]")) list();
    else if (!S) return;
    else if ((x = b("[data-pick]"))) { const k = +x.dataset.pick; S.ans[S.i] = S.ans[S.i] === k ? null : k; draw(); }
    else if ((x = b("[data-go]"))) { S.i = +x.dataset.go; draw(); }
    else if (b("[data-mark]")) { S.mark[S.i] = !S.mark[S.i]; draw(); }
    else if (b("[data-submit]")) { const left = S.ans.filter((a) => a === null).length;
      if (await MT.confirm("Submit the test?", left ? left + " question(s) are not answered yet." : "You have answered all questions.", "Submit") && S) finish(); }
  });
  window.addEventListener("beforeunload", (e) => { if (S) { e.preventDefault(); e.returnValue = ""; } });
  const direct = T.find((t) => t.id === location.hash.slice(1));
  direct ? intro(direct) : list();
})();
