(function () {
  const { $, esc } = MT, N = MT_NOTES;
  let cls = +(location.hash.match(/class-(\d+)/) || [0, 10])[1], sub = "All", term = "";
  const root = $("#notes-root");
  function draw() {
    $("#f-class").innerHTML = [10, 9, 8].map((c) => `<button class="pill ${c === cls ? "on" : ""}" data-c="${c}">Class ${c}</button>`).join("");
    $("#f-sub").innerHTML = ["All", "Maths", "Science"].map((s) => `<button class="pill ${s === sub ? "on" : ""}" data-s="${s}">${s}</button>`).join("");
    const books = N.books.filter((b) => b.cls === cls && (sub === "All" || b.subject === sub));
    let html = "";
    books.forEach((b) => {
      const rows = b.chapters.map((ch, i) => ({ t: typeof ch === "string" ? ch : ch.title, file: ch.file, n: i + 1 })).filter((r) => r.t.toLowerCase().includes(term));
      if (!rows.length) return;
      html += `<h3 style="margin-top:22px"><span class="tag ${b.subject === "Maths" ? "m" : "s"}">${b.subject}</span> ${esc(b.book)}</h3>` + rows.map((r) => {
        const quick = N.quick[r.t], test = N.test[r.t];
        return `<div class="note"><span class="n">${r.n}</span><span class="t">${esc(r.t)}</span><span class="act">
          ${quick ? `<button class="btn sm" data-read="${esc(r.t)}">📖 Quick notes</button>` : ""}
          ${r.file ? `<a class="btn sm gold" href="${esc(r.file)}" target="_blank" rel="noopener">⬇ PDF</a>` : ""}
          ${test ? `<a class="btn sm ghost" href="exam.html#${test}">📝 Test</a>` : ""}
          ${!quick && !r.file ? '<span class="tag">Coming soon</span>' : ""}</span></div>`;
      }).join("");
    });
    root.innerHTML = html || '<p class="muted">No chapters found.</p>';
  }
  document.addEventListener("click", (e) => {
    const c = e.target.closest("[data-c]"), s = e.target.closest("[data-s]"), r = e.target.closest("[data-read]");
    if (c) { cls = +c.dataset.c; draw(); } if (s) { sub = s.dataset.s; draw(); }
    if (r) { const t = r.dataset.read;
      MT.modal(`<div class="reader"><span class="tag gold">Quick revision</span><h2 style="margin-top:8px">${esc(t)}</h2>${N.quick[t]}
        <div class="cta no-print"><button class="btn" id="print-btn">🖨 Print</button><button class="btn ghost" data-close>Close</button></div></div>`);
      $("#print-btn").onclick = () => { try { window.print(); } catch (err) { MT.toast("Printing is not available here"); } }; }
  });
  $("#search").addEventListener("input", (e) => { term = e.target.value.trim().toLowerCase(); draw(); });
  draw();
})();
