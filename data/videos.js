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
   A video file hosted on this website (not YouTube) uses src instead:
     { src: "videos/file.mp4", poster: "videos/file.jpg", id: "short-name", cls: 9, ... }
   Newest videos go at the top. */
window.MT_VIDEOS = [
  // Class 10 · Ch 8 Heredity · animated lesson hosted on this site
  { src: "videos/class10-science-heredity.mp4", poster: "videos/class10-science-heredity.jpg", id: "heredity", cls: 10, subject: "Biology", chapter: "Heredity", title: "Heredity: variation, Mendel's experiments, genes and sex determination (animated lesson)" },
  // Class 10 · Ch 7 How do Organisms Reproduce? · animated lesson hosted on this site
  { src: "videos/class10-science-how-do-organisms-reproduce-ncert.mp4", poster: "videos/class10-science-how-do-organisms-reproduce-ncert.jpg", id: "how-do-organisms-reproduce", cls: 10, subject: "Biology", chapter: "How do Organisms Reproduce?", title: "How do Organisms Reproduce?: DNA copying, fission to flowers, and human reproduction (animated lesson)" },
  // Class 10 · Ch 6 Control and Coordination · animated lesson hosted on this site
  { src: "videos/class10-science-control-and-coordination.mp4", poster: "videos/class10-science-control-and-coordination.jpg", id: "control-and-coordination", cls: 10, subject: "Biology", chapter: "Control and Coordination", title: "Control and Coordination: neurons, reflex arc, brain, plant movements and hormones (animated lesson)" },
  // Class 10 · Ch 5 Life Processes · animated lesson hosted on this site
  { src: "videos/class10-science-life-processes.mp4", poster: "videos/class10-science-life-processes.jpg", id: "life-processes", cls: 10, subject: "Biology", chapter: "Life Processes", title: "Life Processes: nutrition, respiration, transport and excretion (animated lesson)" },
  // Class 8 · Ch 3 Health: The Ultimate Treasure · animated lesson hosted on this site
  { src: "videos/class8-science-health-ultimate-treasure.mp4", poster: "videos/class8-science-health-ultimate-treasure.jpg", id: "health-ultimate-treasure", cls: 8, subject: "Biology", chapter: "Health: The Ultimate Treasure", title: "Health: The Ultimate Treasure: healthy habits, germs and vectors, vaccines and antibiotics (animated lesson)" },
  // Class 9 · Ch 11 Reproduction: How Life Continues · animated lesson hosted on this site
  { src: "videos/class9-science-reproduction-how-life-continues.mp4", poster: "videos/class9-science-reproduction-how-life-continues.jpg", id: "reproduction-how-life-continues", cls: 9, subject: "Biology", chapter: "Reproduction: How Life Continues", title: "Reproduction: How Life Continues: budding, mitosis and meiosis, flowers, pollination and human reproduction (animated lesson)" },
  // Class 9 · Tissues in Action · animated lesson hosted on this site
  { src: "videos/class9-science-tissues-in-action.mp4", poster: "videos/class9-science-tissues-in-action.jpg", id: "tissues-in-action", cls: 9, subject: "Biology", chapter: "Tissues in Action", title: "Tissues in Action: meristems, xylem and phloem, blood, muscles, neurons and joints (animated lesson)" },

  // Class 8 · Ch 1 Exploring the Investigative World of Science · animated lesson hosted on this site
  { src: "videos/class8-science-investigative-world.mp4", poster: "videos/class8-science-investigative-world.jpg", id: "investigative-world", cls: 8, subject: "Science", chapter: "Investigative World of Science", title: "Exploring the Investigative World of Science: fair tests, variables and the Moon (animated lesson)" },

  // Class 8 · Ch 2 The Invisible Living World · animated lesson hosted on this site
  { src: "videos/class8-science-invisible-living-world.mp4", poster: "videos/class8-science-invisible-living-world.jpg", id: "invisible-living-world", cls: 8, subject: "Biology", chapter: "The Invisible Living World", title: "The Invisible Living World: cells, microbes, yeast, curd and Rhizobium (animated lesson)" },

  // Class 9 · Simple Machines · animated lesson hosted on this site
  { src: "videos/class9-science-simple-machines.mp4", poster: "videos/class9-science-simple-machines.jpg", id: "simple-machines", cls: 9, subject: "Physics", chapter: "Simple Machines", title: "Simple Machines: pulley, inclined plane and lever (animated lesson)" },

  // Class 9 · Inside the Atom · animated lesson hosted on this site
  { src: "videos/class9-science-journey-inside-the-atom.mp4", poster: "videos/class9-science-journey-inside-the-atom.jpg", id: "journey-inside-the-atom", cls: 9, subject: "Chemistry", chapter: "Journey Inside the Atom", title: "Journey Inside the Atom: atomic models, shells, valency and isotopes (animated lesson)" },

  // Class 9 · Atomic Foundations of Matter · animated lesson hosted on this site
  { src: "videos/class9-science-atomic-foundations-of-matter.mp4", poster: "videos/class9-science-atomic-foundations-of-matter.jpg", id: "atomic-foundations-of-matter", cls: 9, subject: "Chemistry", chapter: "Atomic Foundations of Matter", title: "Atomic Foundations of Matter: laws, bonds, formulae and molecular mass (animated lesson)" },

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
