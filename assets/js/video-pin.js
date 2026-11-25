/* Video downloads need the PIN from MT Classes.
   Any <a data-pin-dl="file.mp4"> opens a small PIN box; the PIN is checked on the server (api/video-pin.js). */
(function () {
  document.querySelectorAll("video").forEach(function (v) {
    v.setAttribute("controlsList", "nodownload");
    v.addEventListener("contextmenu", function (e) { e.preventDefault(); });
  });
  var links = document.querySelectorAll("a[data-pin-dl]");
  if (!links.length) return;
  var css = document.createElement("style");
  css.textContent = ".pin-dlg{border:0;border-radius:16px;padding:22px;max-width:340px;width:calc(100% - 32px);box-shadow:0 20px 60px -10px rgba(0,0,0,.45);font:16px/1.4 Mukta,system-ui,sans-serif;color:#0f172a;background:#fff}.pin-dlg::backdrop{background:rgba(15,23,42,.55)}.pin-dlg h3{margin:0 0 6px;font:800 20px 'Baloo 2',system-ui,sans-serif}.pin-dlg p{margin:0 0 12px;color:#475569;font-size:14px}.pin-dlg input{width:100%;box-sizing:border-box;font:700 22px system-ui;letter-spacing:6px;text-align:center;padding:10px;border:2px solid #cbd5e1;border-radius:10px}.pin-dlg input:focus{outline:0;border-color:#2563eb}.pin-dlg .pin-err{color:#dc2626;font-weight:700;min-height:20px;margin:8px 0 0;font-size:14px}.pin-dlg .pin-row{display:flex;gap:10px;margin-top:12px}.pin-dlg button{flex:1;font:800 16px system-ui;padding:10px;border-radius:10px;border:0;cursor:pointer}.pin-dlg .pin-ok{background:#1d4ed8;color:#fff}.pin-dlg .pin-x{background:#e2e8f0;color:#0f172a}.pin-dlg button:disabled{opacity:.6}";
  document.head.appendChild(css);
  var d = document.createElement("dialog");
  d.className = "pin-dlg";
  d.innerHTML = '<form method="dialog"><h3>🔒 Enter download PIN</h3><p>Downloading needs the PIN from MT Classes. You can watch the video here without it.</p><input type="password" inputmode="numeric" autocomplete="off" aria-label="Download PIN" required><div class="pin-err" role="alert"></div><div class="pin-row"><button type="button" class="pin-x">Cancel</button><button type="submit" class="pin-ok">Download</button></div></form>';
  document.body.appendChild(d);
  var inp = d.querySelector("input"), err = d.querySelector(".pin-err"), ok = d.querySelector(".pin-ok"), file = "";
  d.querySelector(".pin-x").onclick = function () { d.close(); };
  d.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    ok.disabled = true; err.textContent = "Checking…";
    fetch("/api/video-pin", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ pin: inp.value, file: file }) })
      .then(function (r) { return r.json().catch(function () { return { error: "Could not check the PIN. Try again." }; }); })
      .then(function (j) {
        ok.disabled = false;
        if (!j.url) { err.textContent = j.error || "Wrong PIN"; inp.select(); return; }
        err.textContent = ""; d.close();
        var a = document.createElement("a"); a.href = j.url; a.download = file; document.body.appendChild(a); a.click(); a.remove();
      })
      .catch(function () { ok.disabled = false; err.textContent = "No internet connection. Try again."; });
  });
  links.forEach(function (l) {
    l.addEventListener("click", function (e) {
      e.preventDefault(); file = l.getAttribute("data-pin-dl"); inp.value = ""; err.textContent = "";
      if (d.showModal) d.showModal(); else d.setAttribute("open", "");
      inp.focus();
    });
  });
})();
