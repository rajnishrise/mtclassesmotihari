(function () {
  const { $, esc } = MT, V = MT_VIDEOS, C = MT_CONFIG;
  let cls = 0;
  const valid = (id) => /^[\w-]{11}$/.test(id || "");
  function draw() {
    $("#f-class").innerHTML = [0, 10, 9, 8].map((c) => `<button class="pill ${c === cls ? "on" : ""}" data-c="${c}">${c ? "Class " + c : "All"}</button>`).join("");
    const show = V.filter((v) => valid(v.id) && (!cls || v.cls === cls));
    $("#f-class").classList.toggle("hide", !V.some((v) => valid(v.id)));
    $("#videos").innerHTML = !show.length
      ? `<div class="card center" style="grid-column:1/-1"><div class="ico" style="margin:0 auto 12px">▶️</div><h3>Watch our lessons on YouTube</h3><p class="muted">All video lessons are on the ${esc(C.name)} YouTube channel.</p>${C.youtubeChannel ? `<a class="btn gold" href="${esc(C.youtubeChannel)}" target="_blank" rel="noopener">Open YouTube channel</a>` : ""}</div>`
      : show.map((v) => `<div class="card">
      <button class="thumb" data-v="${v.id}" aria-label="Play ${esc(v.title)}"><img loading="lazy" alt="" src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg"><span class="play">▶</span></button>
      <div style="margin-top:12px"><span class="tag gold">Class ${v.cls}</span> <span class="tag ${v.subject === "Maths" ? "m" : "s"}">${v.subject}</span></div>
      <h3 style="margin:8px 0 0">${esc(v.title)}</h3></div>`).join("");
  }
  document.addEventListener("click", (e) => {
    const c = e.target.closest("[data-c]"), v = e.target.closest("[data-v]");
    if (c) { cls = +c.dataset.c; draw(); }
    if (v) v.outerHTML = `<div class="thumb"><iframe src="https://www.youtube-nocookie.com/embed/${v.dataset.v}?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
  });
  $("#channel").innerHTML = C.youtubeChannel && V.some((v) => valid(v.id)) ? `<a class="btn gold" href="${esc(C.youtubeChannel)}" target="_blank" rel="noopener">▶ Subscribe on YouTube</a>` : "";
  draw();
})();
