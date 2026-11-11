/* Shows a notes PDF inside the site (viewer.html?file=notes/xyz.pdf).
   Only PDFs listed in data/notes.js can be opened. Pages are drawn with PDF.js
   (assets/vendor/pdfjs) as the reader scrolls, so phones load only what is seen. */
(function () {
  const { $, esc } = MT;
  const file = new URLSearchParams(location.search).get("file") || "";
  let entry = null, book = null;
  MT_NOTES.books.forEach((b) => b.chapters.forEach((ch) => { if (ch && ch.file === file) { entry = ch; book = b; } }));
  const msg = (t) => { $("#pdf-pages").innerHTML = `<p class="muted center">${t}</p>`; };
  if (!entry || /^https?:/i.test(file)) { $("#pdf-dl").remove(); return msg('These notes could not be found. <a href="notes.html">Go back to Notes</a>.'); }

  const name = entry.title + (entry.label ? " · " + entry.label : "");
  document.title = `${name} | Class ${book.cls} ${book.subject} Notes | MT Classes`;
  $("#pdf-title").textContent = name;
  $("#pdf-back").href = `notes.html#class-${book.cls}`;
  $("#pdf-dl").href = file;
  $("#pdf-dl").setAttribute("download", file.split("/").pop());
  if (!window.pdfjsLib) return msg(`The reader could not load. <a href="${esc(file)}">Open the PDF</a> instead.`);

  pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/vendor/pdfjs/pdf.worker.min.js";
  const root = $("#pdf-pages");
  pdfjsLib.getDocument(file).promise.then(async (pdf) => {
    $("#pdf-count").textContent = `${pdf.numPages} pages`;
    const first = await pdf.getPage(1), vp1 = first.getViewport({ scale: 1 });
    root.innerHTML = "";
    const boxes = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const d = document.createElement("div");
      d.className = "pdf-page"; d.dataset.p = i; d.style.aspectRatio = `${vp1.width} / ${vp1.height}`;
      d.setAttribute("aria-label", `Page ${i}`);
      root.appendChild(d); boxes.push(d);
    }
    const done = new Set();
    const draw = async (d) => {
      const n = +d.dataset.p; if (done.has(n)) return; done.add(n);
      const page = await pdf.getPage(n), base = page.getViewport({ scale: 1 });
      const scale = Math.min(3, (d.clientWidth * Math.min(window.devicePixelRatio || 1, 2.5)) / base.width);
      const vp = page.getViewport({ scale }), c = document.createElement("canvas");
      c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
      d.style.aspectRatio = `${base.width} / ${base.height}`;
      await page.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
      d.appendChild(c);
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); draw(e.target); } }), { rootMargin: "800px 0px" });
      boxes.forEach((b) => io.observe(b));
    } else boxes.forEach(draw);
  }).catch(() => msg(`The notes could not be opened here. <a href="${esc(file)}">Open the PDF</a> instead.`));
})();
