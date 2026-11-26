/* SEO + AEO builder for the MT Classes website.
   Run after adding or changing pages, notes or videos:   node tools/seo.mjs
   It (re)writes, from the data/ files and the pages themselves:
     - the block between <!-- SEO:START --> and <!-- SEO:END --> in every page's <head>
       (canonical link, Open Graph / Twitter tags and JSON-LD structured data)
     - sitemap.xml, robots.txt and llms.txt
   Safe to run again and again: it only replaces its own blocks. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SITE = "https://www.mtclassesmotihari.com";
const ORG_ID = SITE + "/#organization";

// ---- load data/*.js (they set window.MT_*) ----
const win = {};
for (const f of ["config", "content", "notes", "videos"]) {
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "data", f + ".js"), "utf8"), { window: win });
}
const C = win.MT_CONFIG, CONTENT = win.MT_CONTENT, NOTES = win.MT_NOTES, VIDEOS = win.MT_VIDEOS;

const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const write = (p, s) => fs.writeFileSync(path.join(ROOT, p), s);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const unesc = (s) => String(s).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&amp;/g, "&");
const url = (p) => SITE + "/" + (p === "index.html" ? "" : p);
const gitDate = (p) => {
  try { return execFileSync("git", ["log", "-1", "--format=%cI", "--", p], { cwd: ROOT }).toString().trim(); } catch { return ""; }
};
const today = new Date().toISOString();
const lastmod = (p) => (gitDate(p) || today).slice(0, 10);
const tagOf = (html, re) => { const m = html.match(re); return m ? unesc(m[1].trim()) : ""; };
const pageTitle = (html) => tagOf(html, /<title>([\s\S]*?)<\/title>/i);
const pageDesc = (html) => tagOf(html, /<meta name="description" content="([^"]*)"/i);
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
const breadcrumb = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: url(p) }))
});

// ---- the institute ----
const org = {
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": ORG_ID,
  name: "MT Classes Motihari",
  alternateName: ["MT Classes", "M T Classes"],
  url: SITE + "/",
  logo: SITE + "/assets/img/logo-512.png",
  image: SITE + "/assets/img/logo-512.png",
  description: "CBSE Maths and Science coaching for Classes 8, 9 and 10 in S.K. Nagar, Motihari, Bihar, with chapter-wise notes, animated video lessons, online tests and online attendance.",
  slogan: C.hindiLine,
  telephone: C.phone.replace(/\s+/g, ""),
  email: C.email || undefined,
  priceRange: "₹",
  address: { "@type": "PostalAddress", streetAddress: "S.K. Nagar", addressLocality: "Motihari", addressRegion: "Bihar", addressCountry: "IN" },
  areaServed: [{ "@type": "City", name: "Motihari" }, { "@type": "AdministrativeArea", name: "East Champaran" }],
  founder: { "@type": "Person", name: C.founder.name, jobTitle: C.founder.role },
  sameAs: [C.youtubeChannel].filter(Boolean),
  knowsAbout: ["CBSE Class 10 Maths", "CBSE Class 10 Science", "Class 9 Maths", "Class 9 Science", "Class 8 Maths", "Class 8 Science", "NCERT solutions"],
  contactPoint: { "@type": "ContactPoint", telephone: C.phone.replace(/\s+/g, ""), contactType: "admissions", areaServed: "IN", availableLanguage: ["Hindi", "English"] },
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Coaching batches",
    itemListElement: CONTENT.batches.map((b) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Course", name: `Class ${b.cls} Maths and Science coaching (CBSE)`, description: `${b.name} batch, ${b.days}, ${b.time}, at MT Classes, S.K. Nagar, Motihari.`, provider: { "@id": ORG_ID } }
    }))
  }
};
const website = { "@type": "WebSite", "@id": SITE + "/#website", url: SITE + "/", name: "MT Classes Motihari", inLanguage: "en-IN", publisher: { "@id": ORG_ID } };

// ---- notes ----
const chapters = [];
for (const b of NOTES.books) for (const ch of b.chapters) {
  if (typeof ch === "object" && ch.page) chapters.push({ ...ch, cls: b.cls, subject: b.subject, book: b.book });
}
const noteMeta = (ch) => {
  const html = read(ch.page);
  return { title: pageTitle(html), desc: pageDesc(html) };
};
const learningResource = (ch) => {
  const m = noteMeta(ch);
  return {
    "@type": "LearningResource",
    "@id": url(ch.page) + "#notes",
    name: `${ch.title}: Class ${ch.cls} ${ch.subject} notes`,
    headline: m.title,
    description: m.desc || ch.label || "",
    url: url(ch.page),
    learningResourceType: ["Notes", "Interactive resource", "Practice questions"],
    educationalLevel: `Class ${ch.cls}`,
    educationalAlignment: { "@type": "AlignmentObject", alignmentType: "educationalSubject", educationalFramework: "CBSE / NCERT", targetName: `${ch.subject}, ${ch.book}` },
    about: { "@type": "Thing", name: ch.title },
    teaches: ch.title,
    isBasedOn: { "@type": "Book", name: ch.book, publisher: { "@type": "Organization", name: "NCERT" } },
    inLanguage: "en",
    isAccessibleForFree: true,
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    dateModified: gitDate(ch.page) || undefined,
    provider: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(ch.file ? { encoding: { "@type": "MediaObject", contentUrl: url(ch.file), encodingFormat: "application/pdf" } } : {})
  };
};

// ---- videos (only the ones hosted on this site; YouTube already indexes its own) ----
const siteVideos = VIDEOS.filter((v) => v.src && fs.existsSync(path.join(ROOT, v.src)));
const videoObject = (v) => ({
  "@type": "VideoObject",
  "@id": url("videos.html") + "#watch=" + v.id,
  name: `${v.chapter} | Class ${v.cls} ${v.subject} animated lesson`,
  description: v.title,
  thumbnailUrl: v.poster ? url(v.poster) : SITE + "/assets/img/logo-512.png",
  uploadDate: gitDate(v.src) || today,
  contentUrl: url(v.src),
  embedUrl: url("videos.html") + "#watch=" + v.id,
  inLanguage: "hi",
  isFamilyFriendly: true,
  isAccessibleForFree: true,
  educationalLevel: `Class ${v.cls}`,
  publisher: { "@id": ORG_ID }
});

// ---- pages ----
const PAGES = [
  { p: "index.html", crumbs: null },
  { p: "notes.html", crumbs: "Notes" },
  { p: "videos.html", crumbs: "Video lessons" },
  { p: "exam.html", crumbs: "Online test" },
  { p: "classes.html", crumbs: "Classes and timings" },
  { p: "contact.html", crumbs: "Contact and admission" },
  { p: "attendance.html", crumbs: "Attendance" },
  { p: "viewer.html", noindex: true },
  { p: "404.html", noindex: true }
];

const headBlock = ({ p, title, desc, type = "website", image, noindex, graph }) => {
  const lines = ["<!-- SEO:START (made by tools/seo.mjs, do not edit by hand) -->"];
  if (noindex) lines.push('<meta name="robots" content="noindex, follow">');
  else {
    lines.push(`<link rel="canonical" href="${url(p)}">`);
    lines.push('<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">');
    lines.push(`<meta property="og:url" content="${url(p)}">`);
  }
  lines.push(`<meta property="og:type" content="${type}">`);
  lines.push('<meta property="og:site_name" content="MT Classes Motihari">');
  lines.push('<meta property="og:locale" content="en_IN">');
  lines.push(`<meta property="og:image" content="${image || SITE + "/assets/img/logo-512.png"}">`);
  lines.push('<meta name="twitter:card" content="summary">');
  lines.push(`<meta name="twitter:title" content="${esc(title)}">`);
  lines.push(`<meta name="twitter:description" content="${esc(desc)}">`);
  if (graph && !noindex) lines.push(ld({ "@context": "https://schema.org", "@graph": graph }));
  lines.push("<!-- SEO:END -->");
  return lines.join("\n");
};
const inject = (html, block) => {
  const re = /<!-- SEO:START[\s\S]*?<!-- SEO:END -->\n?/;
  if (re.test(html)) return html.replace(re, block + "\n");
  return html.replace(/<\/head>/i, block + "\n</head>");
};
const ensureOg = (html, title, desc) => {
  // Notes pages were written without og:title / og:description: add them next to the description.
  if (!/property="og:title"/.test(html)) html = html.replace(/(<meta name="description"[^>]*>)/i, `$1\n<meta property="og:title" content="${esc(title)}">\n<meta property="og:description" content="${esc(desc)}">`);
  return html;
};

for (const pg of PAGES) {
  let html = read(pg.p);
  const title = pageTitle(html), desc = pageDesc(html);
  const graph = [];
  if (pg.p === "index.html") {
    graph.push(org, website, { "@type": "WebPage", "@id": url(pg.p) + "#webpage", url: url(pg.p), name: title, description: desc, isPartOf: { "@id": SITE + "/#website" }, about: { "@id": ORG_ID } });
    graph.push({ "@type": "FAQPage", "@id": url(pg.p) + "#faq", mainEntity: CONTENT.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  } else {
    graph.push({ "@type": "WebPage", "@id": url(pg.p) + "#webpage", url: url(pg.p), name: title, description: desc, isPartOf: { "@id": SITE + "/#website" }, publisher: { "@id": ORG_ID } });
    if (pg.crumbs) graph.push(breadcrumb([["Home", "index.html"], [pg.crumbs, pg.p]]));
  }
  if (pg.p === "notes.html") graph.push({ "@type": "ItemList", name: "Chapter-wise notes for Class 8, 9 and 10 Maths and Science", itemListElement: chapters.map((ch, i) => ({ "@type": "ListItem", position: i + 1, url: url(ch.page), name: `Class ${ch.cls} ${ch.subject}: ${ch.title}` })) });
  if (pg.p === "videos.html") graph.push({ "@type": "ItemList", name: "Animated video lessons", itemListElement: siteVideos.map((v, i) => ({ "@type": "ListItem", position: i + 1, item: videoObject(v) })) });
  if (pg.p === "contact.html" || pg.p === "classes.html") graph.push({ "@id": ORG_ID, "@type": org["@type"], name: org.name, url: org.url, telephone: org.telephone, address: org.address });
  write(pg.p, inject(html, headBlock({ ...pg, title, desc, graph })));
}

for (const ch of chapters) {
  let html = read(ch.page);
  const title = pageTitle(html), desc = pageDesc(html);
  html = ensureOg(html, title, desc);
  const vid = siteVideos.find((v) => ch.page.includes(v.src.replace(/^videos\/|\.mp4$/g, "")));
  const graph = [
    learningResource(ch),
    breadcrumb([["Home", "index.html"], ["Notes", "notes.html"], [`Class ${ch.cls} ${ch.subject}: ${ch.title}`, ch.page]])
  ];
  if (vid) graph[0].video = videoObject(vid);
  write(ch.page, inject(html, headBlock({ p: ch.page, title, desc, type: "article", graph })));
}

// ---- sitemap.xml ----
const indexable = PAGES.filter((p) => !p.noindex).map((p) => p.p).concat(chapters.map((c) => c.page));
const prio = (p) => (p === "index.html" ? "1.0" : p.startsWith("notes/") ? "0.8" : p === "notes.html" || p === "videos.html" ? "0.9" : "0.6");
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${url(p)}</loc><lastmod>${lastmod(p)}</lastmod><priority>${prio(p)}</priority></url>`).join("\n")}
</urlset>
`);

// ---- robots.txt ----
write("robots.txt", `# MT Classes Motihari: all study pages are open to search engines and AI answer engines.
User-agent: *
Allow: /
Disallow: /api/
Disallow: /viewer.html

Sitemap: ${SITE}/sitemap.xml
`);

// ---- llms.txt (a plain summary that AI assistants can read) ----
const byClass = {};
for (const ch of chapters) (byClass[ch.cls] ||= []).push(ch);
write("llms.txt", `# MT Classes Motihari

> MT Classes is a coaching institute in S.K. Nagar, Motihari (East Champaran, Bihar, India) that teaches CBSE Maths and Science to students of Classes 8, 9 and 10. Director: ${C.founder.name}. The website has free chapter-wise notes with NCERT answers and CBSE board questions, animated video lessons, free online MCQ tests and online attendance for parents.

- Phone / WhatsApp: ${C.phone}
- Email: ${C.email}
- Address: ${C.address}
- Batches: ${CONTENT.batches.map((b) => `${b.name} (${b.days}, ${b.time})`).join("; ")}
- YouTube: ${C.youtubeChannel}

## Main pages

- [Home](${url("index.html")}): about the institute, courses and FAQ
- [Notes](${url("notes.html")}): chapter-wise notes for Class 8, 9 and 10 Maths and Science
- [Video lessons](${url("videos.html")}): animated chapter lessons
- [Online test](${url("exam.html")}): free timed MCQ tests with instant results and solutions
- [Classes and timings](${url("classes.html")})
- [Contact and admission](${url("contact.html")})

${Object.keys(byClass).sort((a, b) => b - a).map((cls) => `## Class ${cls} notes

${byClass[cls].map((ch) => `- [${ch.subject}: ${ch.title}](${url(ch.page)}): ${noteMeta(ch).desc || ch.label || ""}`).join("\n")}
`).join("\n")}
## FAQ

${CONTENT.faqs.map((f) => `- **${f.q}** ${f.a}`).join("\n")}
`);

console.log(`SEO updated: ${PAGES.length} site pages, ${chapters.length} notes pages, ${siteVideos.length} videos, ${indexable.length} URLs in sitemap.xml`);
