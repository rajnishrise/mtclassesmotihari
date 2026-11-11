(function () {
  const { $, esc } = MT, C = MT_CONFIG, D = MT_CONTENT;
  $("#batches").innerHTML = D.batches.map((b) => `<div class="card class-card"><span class="tag gold">Class ${b.cls}</span><h3 style="margin-top:10px">${esc(b.name)}</h3>
    <p class="muted">🗓 ${esc(b.days)}<br>⏰ ${esc(b.time)}</p><a class="btn sm" href="contact.html?class=${b.cls}">Enroll in this batch</a></div>`).join("");
  $("#timetable").innerHTML = "<tr><th>Batch</th><th>Days</th><th>Time</th></tr>" + D.batches.map((b) => `<tr><td><b>${esc(b.name)}</b></td><td>${esc(b.days)}</td><td>${esc(b.time)}</td></tr>`).join("");
  $("#live").innerHTML = C.liveClassLink
    ? `<a class="btn gold" href="${esc(C.liveClassLink)}" target="_blank" rel="noopener">▶ Join live class</a>`
    : `<p class="muted" style="margin:0">The class link is shared in the batch WhatsApp group before each online class.</p>`;
})();
