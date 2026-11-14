/* Children's Day (14 November) theme for the homepage hero.
   Shows only when the date in India (IST) is 14 Nov, so it switches itself on at
   midnight IST and off again the next midnight. No need to remove this file.
   Preview on any day with  index.html?theme=childrensday  */
(function () {
  const ist = new Date(Date.now() + 5.5 * 36e5); // shift to IST, then read UTC fields
  const isDay = ist.getUTCMonth() === 10 && ist.getUTCDate() === 14;
  const preview = /[?&]theme=childrensday\b/.test(location.search);
  const hero = document.querySelector(".hero");
  if (!hero || !(isDay || preview)) return;

  const css = `
  .hero.cd{background:radial-gradient(700px 360px at 90% -10%,rgba(255,214,102,.55) 0,transparent 60%),radial-gradient(600px 400px at -5% 110%,rgba(56,189,248,.55) 0,transparent 60%),linear-gradient(135deg,#ff5f8f 0%,#a855f7 45%,#3b82f6 100%)}
  .hero.cd h1 span{color:#fff36b;text-shadow:0 2px 0 rgba(0,0,0,.15)}
  .hero.cd p.lead{color:#fff}
  .hero.cd .hi{color:#fff36b}
  .hero.cd .wrap{position:relative;z-index:2}
  .cd-banner{display:inline-flex;align-items:center;gap:10px;flex-wrap:wrap;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.45);backdrop-filter:blur(6px);border-radius:99px;padding:8px 16px;margin-bottom:14px;font:700 1rem Poppins,sans-serif;color:#fff;box-shadow:0 8px 22px rgba(0,0,0,.18)}
  .cd-banner em{font-style:normal;color:#fff36b}
  .cd-note{margin-top:14px;font-size:.95rem;color:#fff;opacity:.95;max-width:540px}
  .hero.cd .art .glass{background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.5)}
  .hero.cd .art small{color:#fff}
  .hero.cd .bar i{background:#fff36b}
  .hero.cd .fx{color:rgba(255,255,255,.35)}
  .hero.cd .chip{background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.45);color:#fff}
  .cd-sky{position:absolute;inset:0;pointer-events:none;z-index:1;overflow:hidden}
  .cd-sky span{position:absolute;bottom:-60px;font-size:2rem;animation:cdRise linear infinite;opacity:.7}
  .cd-sky i{position:absolute;top:-12px;width:8px;height:14px;border-radius:2px;animation:cdFall linear infinite;opacity:.85}
  @keyframes cdRise{to{transform:translateY(-120vh) rotate(8deg)}}
  @keyframes cdFall{to{transform:translateY(110vh) rotate(540deg)}}
  @media(max-width:860px){.cd-sky span{font-size:1.5rem}.cd-banner{font-size:.92rem}.cd-date{display:none}}
  @media(prefers-reduced-motion:reduce){.cd-sky{display:none}}
  `;
  const st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);
  hero.classList.add("cd");

  const hi = hero.querySelector(".hi");
  if (hi) {
    hi.textContent = "बाल दिवस की हार्दिक शुभकामनाएँ! 🎈";
    const b = document.createElement("div");
    b.className = "cd-banner";
    b.innerHTML = "🎉 Happy <em>Children's Day</em><span class=\"cd-date\">🌹 14 November</span>";
    hi.parentNode.insertBefore(b, hi);
  }
  const cta = hero.querySelector(".cta");
  if (cta) {
    const n = document.createElement("p");
    n.className = "cd-note";
    n.textContent = "🌹 Remembering Chacha Nehru on his birthday. Every child is a bright future — keep learning, keep smiling!";
    cta.parentNode.insertBefore(n, cta);
  }

  // balloons rising and confetti falling (decorative only)
  const sky = document.createElement("div");
  sky.className = "cd-sky";
  sky.setAttribute("aria-hidden", "true");
  const icons = ["🎈", "🎈", "🎈", "⭐", "🪁", "🎈", "🌟", "🎈"];
  const colors = ["#fff36b", "#ffffff", "#34d399", "#f472b6", "#38bdf8", "#fb923c"];
  let html = "";
  icons.forEach((ic, i) => {
    html += `<span style="left:${5 + i * 12}%;animation-duration:${11 + (i % 4) * 3}s;animation-delay:-${i * 2.3}s">${ic}</span>`;
  });
  for (let i = 0; i < 18; i++) {
    html += `<i style="left:${(i * 37) % 100}%;background:${colors[i % colors.length]};animation-duration:${6 + (i % 5)}s;animation-delay:-${(i * 1.7) % 8}s"></i>`;
  }
  sky.innerHTML = html;
  hero.insertBefore(sky, hero.firstChild);
})();
