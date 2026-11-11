/* Home page & Classes page content. All values below are SAMPLES — edit them. */
window.MT_CONTENT = {
  announcement: "Admissions open for Classes 8, 9 & 10 — book a free demo class",

  // Batches (id is used by the attendance system — keep ids short and unique)
  batches: [
    { id: "C8",  cls: 8,  name: "Class 8 — Maths & Science",  days: "Mon – Sat", time: "5:30 – 6:30 PM" },
    { id: "C9",  cls: 9,  name: "Class 9 — Maths & Science",  days: "Mon – Sat", time: "4:30 – 5:30 PM" },
    { id: "C10", cls: 10, name: "Class 10 — Maths & Science", days: "Mon – Sat", time: "6:30 – 8:00 AM" }
  ],

  courses: [
    { cls: 8,  title: "Class 8",  points: ["New NCERT books: Ganita Prakash & Curiosity", "Concept building with activities", "Chapter-wise tests"] },
    { cls: 9,  title: "Class 9",  points: ["New NCERT books: Ganita Manjari & Exploration", "Strong base for Class 10 boards", "Numericals & proofs practice"] },
    { cls: 10, title: "Class 10", points: ["Complete CBSE board syllabus", "Board-pattern tests & sample papers", "Revision notes for every chapter"] }
  ],

  notices: [
    { date: "2026-11-06", text: "CBSE Class 10 date sheet released: Maths on 17 Feb 2027, Science on 22 Feb 2027.", isNew: true },
    { date: "2026-11-01", text: "New online practice tests added for Classes 8, 9 and 10.", isNew: true },
    { date: "2026-10-25", text: "Parents can now check attendance online with roll number and code." }
  ],

  // Photo gallery. Put photos in assets/img/gallery/ and list them here.
  gallery: [
    { src: "assets/img/gallery/celebration-1.jpg", caption: "Celebrations at MT Classes" },
    { src: "assets/img/gallery/celebration-2.jpg", caption: "Our classroom in S.K. Nagar, Motihari" }
  ],

  // Add REAL results and reviews only. Sections stay hidden while these are empty.
  // toppers:      { name: "Student name", cls: 10, score: "95%", year: 2026 }
  // testimonials: { name: "Parent / student name", text: "Their own words" }
  toppers: [],
  testimonials: [],

  faqs: [
    { q: "Which classes and subjects are taught?", a: "Maths and Science for Classes 8, 9 and 10 (CBSE)." },
    { q: "How do I take an online test?", a: "Open the Online Test page, choose your class and chapter, enter your name and start. You get your score and solutions immediately." },
    { q: "How can parents check attendance?", a: "Open the Attendance page, choose 'Student / Parent' and enter the roll number and code given by the institute." },
    { q: "Where do I get notes?", a: "The Notes page has chapter-wise notes for each class. Quick-revision notes can be read online and printed." },
    { q: "How do I join?", a: "Fill the enquiry form on the Contact page or message us on WhatsApp to book a free demo class." }
  ]
};
