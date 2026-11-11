/* Shared code for every page: header, footer, helpers. */
(function () {
  const C = window.MT_CONFIG, D = window.MT_CONTENT || {};
  const MT = (window.MT = {});
  MT.$ = (s, r = document) => r.querySelector(s);
  MT.$$ = (s, r = document) => [...r.querySelectorAll(s)];
  MT.esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  MT.store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  };
  MT.wa = (text) => "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(text);
  MT.online = () => !!C.backendUrl;
  MT.today = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  MT.niceDate = (iso) => { const [y, m, d] = iso.split("-"); return d + " " + ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][m - 1] + " " + y; };

  // Talks to the Google Apps Script backend (text/plain avoids a CORS pre-flight).
  MT.api = async (payload) => {
    const res = await fetch(C.backendUrl, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) });
    const j = await res.json();
    if (!j.ok) throw new Error(j.error || "Server error");
    return j;
  };

  MT.toast = (msg) => {
    const t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.remove(), 3200);
  };
  // Simple modal. Returns a close() function.
  MT.modal = (html) => {
    const m = document.createElement("div"); m.className = "modal";
    m.innerHTML = '<div class="box" role="dialog" aria-modal="true">' + html + "</div>";
    m.addEventListener("click", (e) => { if (e.target === m || e.target.closest("[data-close]")) m.remove(); });
    document.body.appendChild(m); return () => m.remove();
  };
  MT.confirm = (title, text, yes = "Yes") => new Promise((ok) => {
    const m = document.createElement("div"); m.className = "modal";
    m.innerHTML = `<div class="box" role="dialog" aria-modal="true" style="max-width:420px"><h3>${MT.esc(title)}</h3><p class="muted">${MT.esc(text)}</p>
      <div class="cta"><button class="btn" data-y>${MT.esc(yes)}</button><button class="btn ghost" data-n>Cancel</button></div></div>`;
    m.addEventListener("click", (e) => { if (e.target.closest("[data-y]")) { m.remove(); ok(true); } else if (e.target === m || e.target.closest("[data-n]")) { m.remove(); ok(false); } });
    document.body.appendChild(m);
  });

  // ---------- header ----------
  const page = document.body.dataset.page;
  const nav = [["index.html", "Home", "home"], ["classes.html", "Classes", "classes"], ["notes.html", "Notes", "notes"], ["videos.html", "Videos", "videos"],
    ["exam.html", "Online Test", "exam"], ["attendance.html", "Attendance", "attendance"], ["contact.html", "Contact", "contact"]];
  const head = MT.$("#site-header");
  if (head) head.innerHTML =
    (D.announcement ? `<div class="topbar">📢 ${MT.esc(D.announcement)} · <a href="contact.html">Enquire</a></div>` : "") +
    `<header class="site"><div class="wrap nav">
      <a class="brand" href="index.html"><img src="assets/img/logo.png" alt="MT Classes logo" width="52" height="52"><span>${MT.esc(C.name)}<small>${MT.esc(C.city)} · Classes 8–10</small></span></a>
      <nav class="links" id="links" aria-label="Main">${nav.map((n) => `<a href="${n[0]}" class="${n[2] === page ? "on" : ""}">${n[1]}</a>`).join("")}</nav>
      <a class="btn gold sm" href="contact.html">Enroll</a>
      <button class="icon-btn" id="theme-btn" aria-label="Switch light or dark mode">🌙</button>
      <button class="icon-btn" id="menu-btn" aria-label="Open menu" aria-expanded="false">☰</button>
    </div></header>`;
  const menuBtn = MT.$("#menu-btn");
  if (menuBtn) menuBtn.onclick = () => { const o = MT.$("#links").classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); };
  const themeBtn = MT.$("#theme-btn");
  const setTheme = (t) => { document.documentElement.dataset.theme = t; if (themeBtn) themeBtn.textContent = t === "dark" ? "☀️" : "🌙"; };
  setTheme(MT.store.get("mt_theme", "light"));
  if (themeBtn) themeBtn.onclick = () => { const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; setTheme(t); MT.store.set("mt_theme", t); };

  // ---------- footer ----------
  const foot = MT.$("#site-footer");
  if (foot) foot.innerHTML = `<footer class="site"><div class="wrap"><div class="cols">
      <div><h4>${MT.esc(C.name)}, ${MT.esc(C.city)}</h4><p>${MT.esc(C.tagline)}</p></div>
      <div><h4>Quick links</h4>${nav.slice(1).map((n) => `<a href="${n[0]}">${n[1]}</a>`).join("")}</div>
      <div><h4>Contact</h4><p>📍 ${MT.esc(C.address)}<br>📞 <a style="display:inline" href="tel:${C.phone.replace(/\s/g, "")}">${MT.esc(C.phone)}</a>${C.email ? "<br>✉️ " + MT.esc(C.email) : ""}</p>
      ${C.youtubeChannel ? `<a href="${MT.esc(C.youtubeChannel)}" target="_blank" rel="noopener">▶ YouTube channel</a>` : ""}</div>
    </div><div class="copy">© ${new Date().getFullYear()} ${MT.esc(C.name)}, ${MT.esc(C.city)}. All rights reserved.</div></div></footer>
    <a class="fab" href="${MT.wa("Hello " + C.name + ", I want to know about admission.")}" target="_blank" rel="noopener">💬 WhatsApp</a>`;

  // reveal on scroll
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
    MT.observe = () => MT.$$(".reveal:not(.in)").forEach((el) => io.observe(el));
  } else MT.observe = () => MT.$$(".reveal").forEach((el) => el.classList.add("in"));
  window.addEventListener("load", MT.observe);

  // installable app (works on GitHub Pages / any https site)
  try { if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {}); } catch (e) {}
})();
