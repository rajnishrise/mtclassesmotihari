/* Video lessons: every video plays inside the site (no trip to YouTube),
   and every thumbnail is drawn by the site itself from data/videos.js. */
(function () {
  const { $, esc } = MT, C = MT_CONFIG;
  // Accept a bare id, a youtube.com/watch link, a youtu.be link or a /shorts/ link.
  const idOf = (s) => { s = String(s || "").trim(); const m = s.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/); return m ? m[1] : /^[\w-]{11}$/.test(s) ? s : ""; };
  const V = (window.MT_VIDEOS || []).map((v) => ({ ...v, id: idOf(v.id), subject: v.subject || "Science", chapter: v.chapter || "" })).filter((v) => v.id);
  const SUBJ = { Physics: "phy", Chemistry: "chem", Biology: "bio", Maths: "math", Science: "phy" };
  const ICON = { Physics: "⚡", Chemistry: "⚗️", Biology: "🌿", Maths: "📐", Science: "🔬" };
  let cls = 0, chap = "", q = "", list = [], cur = -1;

  const thumb = (v) => `<span class="vt ${SUBJ[v.subject] || "phy"}" aria-hidden="true">
      <span class="vt-top"><span class="vt-cls">Class ${v.cls}</span><img class="vt-logo" src="assets/img/logo.png" alt=""></span>
      <span class="vt-mid"><span class="vt-chap">${ICON[v.subject] || "▶"} ${esc(v.chapter || v.subject)}</span><span class="vt-title">${esc(v.title)}</span></span>
      <span class="vt-bot"><span>${v.part ? "Part " + esc(v.part) : esc(v.subject)}</span><span class="vt-brand">${esc(C.name)}</span></span>
      <span class="vt-play">▶</span></span>`;

  function filters() {
    const classes = [...new Set(V.map((v) => v.cls))].sort((a, b) => b - a);
    $("#f-class").innerHTML = [0, ...classes].map((c) => `<button class="pill ${c === cls ? "on" : ""}" data-c="${c}">${c ? "Class " + c : "All classes"}</button>`).join("");
    const chaps = [...new Set(V.filter((v) => !cls || v.cls === cls).map((v) => v.chapter).filter(Boolean))];
    if (chap && !chaps.includes(chap)) chap = "";
    $("#f-chap").innerHTML = chaps.length > 1 ? ["", ...chaps].map((c) => `<button class="pill sm ${c === chap ? "on" : ""}" data-ch="${esc(c)}">${c ? esc(c) : "All chapters"}</button>`).join("") : "";
  }
  function draw() {
    filters();
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    list = V.filter((v) => (!cls || v.cls === cls) && (!chap || v.chapter === chap) &&
      words.every((w) => `${v.title} ${v.chapter} ${v.subject} class ${v.cls}`.toLowerCase().includes(w)));
    $("#v-count").textContent = list.length + (list.length === 1 ? " video" : " videos");
    $("#videos").innerHTML = !V.length
      ? `<div class="card center" style="grid-column:1/-1"><div class="ico" style="margin:0 auto 12px">▶️</div><h3>Video lessons are coming soon</h3><p class="muted">Check back shortly.</p></div>`
      : !list.length ? `<div class="card center" style="grid-column:1/-1"><h3>No videos match</h3><p class="muted">Try another class, chapter or word.</p></div>`
      : list.map((v, i) => `<article class="card vcard">
          <button class="vbtn" data-i="${i}" aria-label="Play: ${esc(v.title)} (Class ${v.cls} ${esc(v.chapter)})">${thumb(v)}</button>
          <div class="vmeta"><span class="tag gold">Class ${v.cls}</span> <span class="tag ${v.subject === "Maths" ? "m" : "s"}">${esc(v.subject)}</span>${v.part ? ` <span class="tag">Part ${esc(v.part)}</span>` : ""}</div>
          <h3>${esc(v.title)}</h3><p class="muted small">${esc(v.chapter)}</p></article>`).join("");
  }

  // ---------- in-page player ----------
  const pl = document.createElement("div");
  pl.className = "player hide"; pl.setAttribute("role", "dialog"); pl.setAttribute("aria-modal", "true"); pl.setAttribute("aria-label", "Video player");
  pl.innerHTML = `<div class="pbox"><div class="pbar"><div class="ptitle"></div><button class="icon-btn pclose" data-x aria-label="Close video">✕</button></div>
    <div class="pframe"></div>
    <div class="pfoot"><button class="btn ghost sm" data-prev>← Previous</button><span class="muted small pidx"></span><button class="btn sm" data-next>Next →</button></div></div>`;
  document.body.appendChild(pl);
  let lastFocus = null;
  function open(i, push = true) {
    if (!list[i]) return;
    cur = i; const v = list[i];
    if (pl.classList.contains("hide")) lastFocus = document.activeElement;
    // youtube-nocookie + rel=0 keeps viewers on this site: related videos stay from this channel and no YouTube page opens.
    pl.querySelector(".pframe").innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3" title="${esc(v.title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    pl.querySelector(".ptitle").innerHTML = `<b>${esc(v.title)}</b><span class="muted small">Class ${v.cls} · ${esc(v.chapter || v.subject)}${v.part ? " · Part " + esc(v.part) : ""}</span>`;
    pl.querySelector(".pidx").textContent = `${i + 1} of ${list.length}`;
    pl.querySelector("[data-prev]").disabled = i === 0;
    pl.querySelector("[data-next]").disabled = i === list.length - 1;
    pl.classList.remove("hide"); document.documentElement.classList.add("noscroll");
    const h = "#watch=" + v.id;
    if (push && location.hash !== h) history[location.hash.startsWith("#watch=") ? "replaceState" : "pushState"](null, "", h);
    pl.querySelector("[data-x]").focus();
  }
  function close(fromHistory) {
    if (pl.classList.contains("hide")) return;
    pl.querySelector(".pframe").innerHTML = ""; // stops playback
    pl.classList.add("hide"); document.documentElement.classList.remove("noscroll");
    if (!fromHistory && location.hash.startsWith("#watch=")) history.back();
    if (lastFocus) lastFocus.focus();
  }
  function fromHash() {
    const id = (location.hash.match(/^#watch=([\w-]{11})/) || [])[1];
    if (!id) return close(true);
    let i = list.findIndex((v) => v.id === id);
    if (i < 0 && V.some((v) => v.id === id)) { cls = 0; chap = ""; q = ""; $("#v-search").value = ""; draw(); i = list.findIndex((v) => v.id === id); }
    if (i >= 0) open(i, false);
  }

  document.addEventListener("click", (e) => {
    const c = e.target.closest("[data-c]"), ch = e.target.closest("[data-ch]"), b = e.target.closest("[data-i]");
    if (c) { cls = +c.dataset.c; chap = ""; draw(); }
    else if (ch) { chap = ch.dataset.ch; draw(); }
    else if (b) open(+b.dataset.i);
    else if (e.target.closest("[data-x]") || e.target === pl) close();
    else if (e.target.closest("[data-prev]")) open(cur - 1);
    else if (e.target.closest("[data-next]")) open(cur + 1);
  });
  document.addEventListener("keydown", (e) => {
    if (pl.classList.contains("hide")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight" && e.target.tagName !== "INPUT") open(cur + 1);
    else if (e.key === "ArrowLeft" && e.target.tagName !== "INPUT") open(cur - 1);
  });
  window.addEventListener("popstate", fromHash);
  $("#v-search").addEventListener("input", (e) => { q = e.target.value; draw(); });
  draw();
  fromHash();
})();
