/* Video lessons from the M T CLASSES YouTube channel (@MTClassesMotihari).
   Every video plays inside the website and gets its own thumbnail made by the site.

   To add a video, copy one line and change it:
     id      = the 11 characters after "v=" in the YouTube link
               e.g. https://www.youtube.com/watch?v=AbCdEfGhIjK  ->  "AbCdEfGhIjK"
               (a full YouTube link or youtu.be link also works)
     cls     = 8, 9 or 10
     subject = "Physics", "Chemistry", "Biology" or "Maths"
     chapter = chapter name (used for the chapter filter and the thumbnail)
     title   = what the lesson is about (shown big on the thumbnail)
     part    = optional, e.g. 3  ->  shows "Part 3" on the thumbnail
   Newest videos go at the top. */
window.MT_VIDEOS = [
  // Class 9 · Motion · NCERT Exemplar
  { id: "eXg2PoaHYAs", cls: 9,  subject: "Physics", chapter: "Motion", title: "NCERT Exemplar solutions", part: 4 },
  { id: "-ETVQ3KBGIE", cls: 9,  subject: "Physics", chapter: "Motion", title: "NCERT Exemplar solutions", part: 3 },
  { id: "VWLhKsY3Ttk", cls: 9,  subject: "Physics", chapter: "Motion", title: "NCERT Exemplar solutions", part: 2 },
  { id: "QkIanr2q7cw", cls: 9,  subject: "Physics", chapter: "Motion", title: "NCERT Exemplar solutions", part: 1 },

  // Class 10 · Arithmetic Progressions
  { id: "Het8DOQ7TB4", cls: 10, subject: "Maths", chapter: "Arithmetic Progressions", title: "Sum of n terms of an AP" },
  { id: "OH8_0XE-yJY", cls: 10, subject: "Maths", chapter: "Arithmetic Progressions", title: "Important questions on the nth term" },
  { id: "YyxokB3DVOU", cls: 10, subject: "Maths", chapter: "Arithmetic Progressions", title: "nth term of an AP" },
  { id: "RKEE41-R-Zc", cls: 10, subject: "Maths", chapter: "Arithmetic Progressions", title: "Introduction to Arithmetic Progressions" },

  // Class 10 · Life Processes
  { id: "9SN5I8dxW38", cls: 10, subject: "Biology", chapter: "Life Processes", title: "Photosynthesis" },

  // Class 10 · Light: Reflection and Refraction
  { id: "D1WBOjzm8BU", cls: 10, subject: "Physics", chapter: "Light", title: "Image formation by a concave lens" },
  { id: "xd4rlp3xGJg", cls: 10, subject: "Physics", chapter: "Light", title: "Image formation by a convex lens" },
  { id: "Z-woo_0jwcU", cls: 10, subject: "Physics", chapter: "Light", title: "Rules of image formation by a lens" },
  { id: "GfxeaAEnY1A", cls: 10, subject: "Physics", chapter: "Light", title: "Lenses: the basics" },
  { id: "C4LUvGXrYdY", cls: 10, subject: "Physics", chapter: "Light", title: "Refractive index: numericals" },
  { id: "gCVO_J9UzA0", cls: 10, subject: "Physics", chapter: "Light", title: "Refractive index" },
  { id: "rWruyBsl_CI", cls: 10, subject: "Physics", chapter: "Light", title: "Effects of refraction of light" },
  { id: "-HTRDeK_JLU", cls: 10, subject: "Physics", chapter: "Light", title: "Refraction of light: the basics" },
  { id: "fb45iS8Gk6M", cls: 10, subject: "Physics", chapter: "Light", title: "Refraction of light", part: 10 },

  // Class 9 · Motion
  { id: "rW-24bdpC1o", cls: 9,  subject: "Physics", chapter: "Motion", title: "Uniform circular motion" },
  { id: "9-VbsSX8rQY", cls: 9,  subject: "Physics", chapter: "Motion", title: "Direction of motion from a velocity–time graph" },
  { id: "Mxqn35Pg-V4", cls: 9,  subject: "Physics", chapter: "Motion", title: "Numericals on displacement and velocity–time graphs" },
  { id: "ePe0bwQYBA4", cls: 9,  subject: "Physics", chapter: "Motion", title: "Equations of motion: graphical method" },

  // Class 10 · Light
  { id: "t-fxeF1fFJs", cls: 10, subject: "Physics", chapter: "Light", title: "NCERT numericals on reflection of light" },

  // Class 9 · Motion
  { id: "fEY1u5VVgHE", cls: 9,  subject: "Physics", chapter: "Motion", title: "Graphical representation of motion" },
  { id: "sL72ETp88fg", cls: 9,  subject: "Physics", chapter: "Motion", title: "Displacement in the nth second" },
  { id: "xxGhPrO7XB0", cls: 9,  subject: "Physics", chapter: "Motion", title: "Equations of motion: algebraic method" },
  { id: "BHhEYR9zJMY", cls: 9,  subject: "Physics", chapter: "Motion", title: "Acceleration explained" },

  // Class 10 · Light
  { id: "z4iuxhUI-3s", cls: 10, subject: "Physics", chapter: "Light", title: "How to solve numericals on reflection", part: 8 },

  // Class 9 · Motion
  { id: "DKUc8YdTazU", cls: 9,  subject: "Physics", chapter: "Motion", title: "Speed and velocity" },

  // Class 10 · Light
  { id: "-BqpCNinhZY", cls: 10, subject: "Physics", chapter: "Light", title: "Mirror formula and magnification" },

  // Class 9 · Motion
  { id: "-jc2RTQQm_Y", cls: 9,  subject: "Physics", chapter: "Motion", title: "Introduction to motion", part: 1 },

  // Class 10 · Light
  { id: "A9KWC8e1e88", cls: 10, subject: "Physics", chapter: "Light", title: "Sign convention for spherical mirrors", part: 6 },
  { id: "h3WztqSxAg8", cls: 10, subject: "Physics", chapter: "Light", title: "Uses of concave and convex mirrors", part: 5 },
  { id: "YZGaYOqfA6k", cls: 10, subject: "Physics", chapter: "Light", title: "Image formation by a convex mirror", part: 4 },
  { id: "ARSFrIO4aUo", cls: 10, subject: "Physics", chapter: "Light", title: "Image formation by a concave mirror", part: 3 },
  { id: "ZUJoEb1pA1k", cls: 10, subject: "Physics", chapter: "Light", title: "Spherical mirrors", part: 2 },
  { id: "AKqUPjwraQk", cls: 10, subject: "Physics", chapter: "Light", title: "Reflection of light: introduction", part: 1 },

  // Class 10 · Magnetic Effects of Electric Current (revision)
  { id: "6oYQOJH5148", cls: 10, subject: "Physics", chapter: "Magnetic Effects", title: "AC vs DC: alternating and direct current" },
  { id: "9iWcymREWIg", cls: 10, subject: "Physics", chapter: "Magnetic Effects", title: "Domestic electric circuits (revision)" },
  { id: "gK2eEPAhfkc", cls: 10, subject: "Physics", chapter: "Magnetic Effects", title: "Force on a current-carrying conductor (revision)" },
  { id: "k3YfdnZ45P0", cls: 10, subject: "Physics", chapter: "Magnetic Effects", title: "Solenoid and electromagnet (revision)" },
  { id: "Ix9BXjYz57s", cls: 10, subject: "Physics", chapter: "Magnetic Effects", title: "Oersted's experiment (revision)" },
  { id: "poH3qn6-_xI", cls: 10, subject: "Physics", chapter: "Magnetic Effects", title: "Magnetic field lines (revision)", part: 1 },

  // Class 10 · Electricity (revision)
  { id: "VZrLEO7sPDU", cls: 10, subject: "Physics", chapter: "Electricity", title: "Heating effect of electric current (revision)" },
  { id: "WxMVihzRfJ4", cls: 10, subject: "Physics", chapter: "Electricity", title: "Mixed combination of resistances (revision)" },
  { id: "eIp0-qbvo7Y", cls: 10, subject: "Physics", chapter: "Electricity", title: "Series and parallel combination (revision)" },
  { id: "KmEm3Pyx6Pg", cls: 10, subject: "Physics", chapter: "Electricity", title: "Resistance and resistivity" },
  { id: "Pet5TWnfMKY", cls: 10, subject: "Physics", chapter: "Electricity", title: "Electricity revision", part: 1 }
];
