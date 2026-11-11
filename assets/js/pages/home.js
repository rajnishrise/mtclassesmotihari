(function () {
  const { $, esc } = MT, C = MT_CONFIG, D = MT_CONTENT;
  // countdown
  const be = C.boardExam, box = $("#countdown");
  if (be && box) {
    const days = Math.ceil((new Date(be.date + "T10:30:00") - new Date()) / 864e5);
    if (days > 0) {
      const w = Math.floor(days / 7);
      box.innerHTML = `<div><span class="tag gold">Countdown</span><h3 style="margin:8px 0 2px">${esc(be.label)}</h3><span class="muted">Starts ${MT.niceDate(be.date)}</span></div>
        <div class="count"><div><b>${days}</b><small>days left</small></div><div><b>${w}</b><small>weeks</small></div></div>
        <a class="btn sm" href="exam.html">Practise now</a>`;
    } else box.parentElement.classList.add("hide");
  }
  $("#courses").innerHTML = D.courses.map((c) => `<div class="card class-card reveal"><span class="tag gold">CBSE</span><h3 style="margin-top:10px">${esc(c.title)} · Maths & Science</h3>
    <ul>${c.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul><a class="btn sm" href="classes.html">Batch timings</a> <a class="btn sm ghost" href="notes.html#class-${c.cls}">Notes</a></div>`).join("");
  $("#notices").innerHTML = D.notices.map((n) => `<div class="notice"><time>${MT.niceDate(n.date).slice(0, 6)}</time><div>${esc(n.text)} ${n.isNew ? '<span class="tag new">NEW</span>' : ""}</div></div>`).join("");
  $("#founder").innerHTML = `<b>${esc(C.founder.name)}</b><br><span class="muted">${esc(C.founder.role)}${C.founder.qualification ? " · " + esc(C.founder.qualification) : ""}</span>`;
  $("#faqs").innerHTML = D.faqs.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");
  if (D.toppers.length) { $("#toppers-sec").classList.remove("hide");
    $("#toppers").innerHTML = D.toppers.map((t) => `<div class="card center"><div class="ico" style="margin:0 auto 10px">🏆</div><h3>${esc(t.name)}</h3><div class="muted">Class ${esc(t.cls)} · ${esc(t.year)}</div><b style="font-size:1.4rem">${esc(t.score)}</b></div>`).join(""); }
  if (D.testimonials.length) { $("#reviews-sec").classList.remove("hide");
    $("#reviews").innerHTML = D.testimonials.map((t) => `<div class="card"><p>“${esc(t.text)}”</p><b>— ${esc(t.name)}</b></div>`).join(""); }
  if (D.gallery && D.gallery.length) { $("#gallery-sec").classList.remove("hide");
    $("#gallery").innerHTML = D.gallery.map((g, i) => `<button data-g="${i}" class="reveal"><img loading="lazy" src="${esc(g.src)}" alt="${esc(g.caption)}"><span>${esc(g.caption)}</span></button>`).join("");
    $("#gallery").onclick = (e) => { const b = e.target.closest("[data-g]"); if (!b) return; const g = D.gallery[+b.dataset.g];
      MT.modal(`<div class="lightbox"><img src="${esc(g.src)}" alt="${esc(g.caption)}"><p style="margin:12px 0"><b>${esc(g.caption)}</b></p><button class="btn ghost sm" data-close>Close</button></div>`); }; }
  $("#demo-wa").href = MT.wa("Hello " + C.name + ", I want to book a free demo class.");
})();
