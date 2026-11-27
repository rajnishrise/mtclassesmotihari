/* NOTES.
   chapters: list of chapter names. To attach a PDF, write an object instead of a name:
     { title: "Real Numbers", file: "notes/class10-maths-real-numbers.pdf" }   (file in /notes folder)
     { title: "Real Numbers", file: "https://drive.google.com/..." }           (Google Drive link)
   Optional page: an HTML notes page in /notes; Read notes opens it instead of the PDF reader.
   Optional label: a line under the title, e.g. which part of the chapter the PDF covers.
   PDFs in /notes open in the site's own reader (viewer.html); Drive links open in a new tab.
   quick: short revision notes that open on the site itself (key = exact chapter title).
   test:  links a chapter to an online test id from data/questions.js. */
window.MT_NOTES = {
  books: [
    { cls: 10, subject: "Maths", book: "NCERT Mathematics", chapters: [
      { title: "Real Numbers", label: "Chapter 1: colourful CBSE notes with factor trees, HCF–LCM Venn machine, bells and runners lab, proof builder, an activity for every topic, 3 games, CBSE board questions 2023–2026 with step marks, A–E practice and all NCERT answers", file: "notes/class10-maths-real-numbers.pdf", page: "notes/class10-maths-real-numbers.html" },
      { title: "Polynomials", label: "Chapter 2: colourful CBSE notes with 20+ graphs, live parabola lab, build-a-polynomial and cubic labs, an activity for every topic, 3 games, CBSE board questions 2023–2026 with step marks, A–E practice and all NCERT answers", file: "notes/class10-maths-polynomials.pdf", page: "notes/class10-maths-polynomials.html" },
      { title: "Pair of Linear Equations in Two Variables", label: "Chapter 3: colourful CBSE notes with graphs of intersecting, parallel and coincident lines, the ratio test, substitution and elimination step by step, word problems, live two-line graph, elimination stepper and triangle labs, 3 games, CBSE board questions 2023–2026 with step marks, A–E practice and all NCERT answers", file: "notes/class10-maths-pair-of-linear-equations.pdf", page: "notes/class10-maths-pair-of-linear-equations.html" },
      { title: "Quadratic Equations", label: "Chapter 4: colourful CBSE notes on forming and solving quadratics, splitting the middle term, the quadratic formula, discriminant and nature of roots, word problems, middle-term splitter, live root and parabola lab, photo-frame lab, 3 games, CBSE board questions 2023–2026 with step marks, A–E practice and all NCERT answers", file: "notes/class10-maths-quadratic-equations.pdf", page: "notes/class10-maths-quadratic-equations.html" },
      { title: "Arithmetic Progressions", label: "Chapter 5: colourful CBSE notes on common difference, nth term, sum of n terms with the Gauss pairing proof, aₙ from Sₙ, word problems on salary, savings, logs and races, AP explorer, Gauss sum lab, log-stack lab, 3 games, CBSE board questions 2023–2026 with step marks, A–E practice and all NCERT answers", file: "notes/class10-maths-arithmetic-progressions.pdf", page: "notes/class10-maths-arithmetic-progressions.html" }, { title: "Triangles", label: "Chapter 6: colourful CBSE notes on similar figures, the Basic Proportionality Theorem with full proof and its converse, AA, SSS and SAS criteria, prove-that questions and shadow heights, live BPT lab, similarity checker, shadow-height lab, 3 games, CBSE board questions 2023–2026 with step marks, A–E practice and all NCERT answers", file: "notes/class10-maths-triangles.pdf", page: "notes/class10-maths-triangles.html" }, { title: "Coordinate Geometry", label: "Chapter 7: colourful CBSE notes on quadrants, the distance formula with proof, collinearity and shape tests (square, rhombus, rectangle, parallelogram), the section formula, mid-point, ratio by the axes, trisection and fourth vertex, distance lab, section-formula lab, shape detective, 3 games, CBSE board questions 2023–2026 with step marks, A–E practice and all NCERT answers", file: "notes/class10-maths-coordinate-geometry.pdf", page: "notes/class10-maths-coordinate-geometry.html" }, "Introduction to Trigonometry",
      "Some Applications of Trigonometry",
      { title: "Circles", label: "Chapter 10: CBSE exam notes with all NCERT figures, Tangent Explorer, 4 labs, 6 games, CBSE 2023–2026 questions with step marks, section-wise practice and all 17 NCERT answers", file: "notes/class10-maths-circles.pdf", page: "notes/class10-maths-circles.html" },
      { title: "Areas Related to Circles", label: "Chapter 11: CBSE exam notes with all NCERT figures, Sector and Segment Explorer, clock, grazing and design labs, 5 games, CBSE 2023–2026 questions, section-wise practice and all NCERT answers", file: "notes/class10-maths-areas-related-to-circles.pdf", page: "notes/class10-maths-areas-related-to-circles.html" },
      { title: "Surface Areas and Volumes", label: "Chapter 12: CBSE board-exam notes with exam blueprint, CBSE questions 2023–2026 with step marks, section-wise practice, all NCERT figures and answers, 3D Solid Builder and 4 games", file: "notes/class10-maths-surface-areas-and-volumes.pdf", page: "notes/class10-maths-surface-areas-and-volumes.html" },
      { title: "Statistics", label: "Chapter 13: notes with every NCERT table, 6 calculators, 8 games and puzzles, CBSE board questions 2023–2026 and all NCERT answers", file: "notes/class10-maths-statistics.pdf", page: "notes/class10-maths-statistics.html" },
      { title: "Probability", label: "Chapter 14: notes with all NCERT figures, die, deck, two-dice and spinner tools, CBSE board questions 2023–2026 and all NCERT answers", file: "notes/class10-maths-probability.pdf", page: "notes/class10-maths-probability.html" } ] },
    { cls: 10, subject: "Science", book: "NCERT Science", chapters: [
      { title: "Chemical Reactions and Equations", label: "Handwritten notes", file: "notes/class10-science-chemical-reactions-equations.pdf" },
      { title: "Acids, Bases and Salts", label: "Handwritten notes", file: "notes/class10-science-acids-bases-salts.pdf" },
      { title: "Metals and Non-metals", label: "Extraction of Metals & Corrosion", file: "notes/class10-science-extraction-of-metals-and-corrosion.pdf", page: "notes/class10-science-extraction-of-metals-and-corrosion.html" },
      { title: "Carbon and its Compounds", file: "notes/class10-science-carbon-and-its-compounds.pdf", page: "notes/class10-science-carbon-and-its-compounds.html" },
      { title: "Life Processes", label: "Chapter 5: notes with all NCERT diagrams, photosynthesis lab, heart and kidney tools, CBSE board questions 2023–2026 and all NCERT answers", file: "notes/class10-science-life-processes.pdf", page: "notes/class10-science-life-processes.html" },
      { title: "Control and Coordination", label: "Chapter 6: notes with all NCERT diagrams, reflex race, brain explorer, auxin lab, hormone tools, CBSE board questions 2023–2026 and all NCERT answers", file: "notes/class10-science-control-and-coordination.pdf", page: "notes/class10-science-control-and-coordination.html" },
      { title: "How do Organisms Reproduce?", label: "Chapter 7: notes with NCERT diagrams, CBSE board questions 2023–2026, tools and all NCERT answers", file: "notes/class10-science-how-do-organisms-reproduce-ncert.pdf", page: "notes/class10-science-how-do-organisms-reproduce-ncert.html" }, { title: "Heredity", label: "Chapter 8: notes with NCERT diagrams, Punnett square tool, CBSE board questions 2023–2026 and all NCERT answers", file: "notes/class10-science-heredity.pdf", page: "notes/class10-science-heredity.html" },
      { title: "Light – Reflection and Refraction", label: "Chapter 9: colourful CBSE notes with 50+ ray diagrams, mirror, lens and Snell's law labs, an activity for every topic, 3 games, CBSE board questions 2024–2026 with step marks, A–E practice and all NCERT answers", file: "notes/class10-science-light-reflection-refraction.pdf", page: "notes/class10-science-light-reflection-refraction.html" }, { title: "The Human Eye and the Colourful World", label: "Chapter 10: colourful CBSE notes with realistic eye diagrams, myopia and hypermetropia ray diagrams, focus, spectacles, prism, twinkle and sky labs, an activity for every topic, 3 games, CBSE board questions 2024–2026 with step marks, A–E practice and all NCERT answers", file: "notes/class10-science-human-eye-colourful-world.pdf", page: "notes/class10-science-human-eye-colourful-world.html" },
      { title: "Electricity", label: "Handwritten notes", file: "notes/class10-science-electricity.pdf" },
      { title: "Magnetic Effects of Electric Current", label: "AC & DC Current and Household Circuits", file: "notes/class10-science-ac-dc-household-circuits.pdf", page: "notes/class10-science-ac-dc-household-circuits.html" },
      "Our Environment" ] },
    // Class 9 has NEW NCERT books from 2026-27 (Ganita Manjari, Exploration).
    // Only topic names are listed here — replace with your chapter list.
    { cls: 9, subject: "Maths", book: "NCERT Ganita Manjari", chapters: [ "Number Systems",
      { title: "Circles", label: "Complete guide: notes, all 12 theorem proofs and solutions", file: "notes/class9-maths-circles.pdf", page: "notes/class9-maths-circles.html" },
      { title: "Measuring Space: Perimeter and Area", label: "Chapter 6: notes, textbook diagrams and all exercise solutions", file: "notes/class9-maths-perimeter-and-area.pdf", page: "notes/class9-maths-perimeter-and-area.html" },
      { title: "The Mathematics of Maybe: Probability", label: "Chapter 7: notes, coin and dice lab, tree diagrams and all solutions", file: "notes/class9-maths-probability.pdf", page: "notes/class9-maths-probability.html" },
      { title: "Predicting What Comes Next: Sequences and Progressions", label: "Chapter 8: notes, AP and GP explorer, fractal zoomer and all solutions", file: "notes/class9-maths-sequences-and-progressions.pdf", page: "notes/class9-maths-sequences-and-progressions.html" } ] },
    { cls: 9, subject: "Science", book: "NCERT Exploration", chapters: [
      { title: "Tissues in Action", label: "Chapter 3: notes, textbook diagrams, joint and tree-ring tools, all NCERT answers", file: "notes/class9-science-tissues-in-action.pdf", page: "notes/class9-science-tissues-in-action.html" },
      "Motion",
      { title: "Simple Machines", label: "Work, Energy and Simple Machines (Section 7.6)", file: "notes/class9-science-simple-machines.pdf", page: "notes/class9-science-simple-machines.html" },
      { title: "Journey Inside the Atom", label: "Chapter 8: notes, diagrams and all NCERT answers", file: "notes/class9-science-journey-inside-the-atom.pdf", page: "notes/class9-science-journey-inside-the-atom.html" },
      { title: "Atomic Foundations of Matter", label: "Chapter 9: notes, textbook diagrams and all NCERT answers", file: "notes/class9-science-atomic-foundations-of-matter.pdf", page: "notes/class9-science-atomic-foundations-of-matter.html" },
      { title: "Reproduction: How Life Continues", label: "Chapter 11: notes, textbook diagrams, meiosis bead lab, cycle and pollen tools, all NCERT answers", file: "notes/class9-science-reproduction-how-life-continues.pdf", page: "notes/class9-science-reproduction-how-life-continues.html" } ] },
    { cls: 8, subject: "Maths", book: "NCERT Ganita Prakash (Part 1 & 2)", chapters: [
      "A Square and a Cube", "Power Play", "A Story of Numbers", "Quadrilaterals", "Number Play",
      "We Distribute, Yet Things Multiply", "Proportional Reasoning – 1", "Fractions in Disguise",
      "The Baudhayana–Pythagoras Theorem", "Proportional Reasoning – 2", "Exploring Some Geometric Themes",
      "Tales by Dots and Lines", "Algebra Play", "Area" ] },
    { cls: 8, subject: "Science", book: "NCERT Curiosity", chapters: [
      { title: "Exploring the Investigative World of Science", label: "Chapter 1: kid-friendly notes with all textbook figures, 6 live labs (puri fair-test lab, Moon phase machine, investigation planner, sand vs stars counter), 8 games, 70 CBSE-style questions with answers, quiz and every textbook question answered", file: "notes/class8-science-investigative-world.pdf", page: "notes/class8-science-investigative-world.html" },
      { title: "The Invisible Living World: Beyond Our Naked Eye", label: "Chapter 2: kid-friendly notes on cells and microorganisms with all textbook figures, 7 live labs (virtual microscope, cell explorer, yeast balloon, curd maker, mould growth chamber), 8 games, 100 CBSE-style questions with answers, quiz and all NCERT answers", file: "notes/class8-science-invisible-living-world.pdf", page: "notes/class8-science-invisible-living-world.html" },
      { title: "Health: The Ultimate Treasure", label: "Chapter 3: colourful kid-friendly notes with all textbook figures, 7 live labs (germ spread simulator, handwash timer, AQI meter, dengue graph, immune memory, antibiotic resistance), 8 games, 100 CBSE-style questions with answers, quiz and all NCERT answers", file: "notes/class8-science-health-ultimate-treasure.pdf", page: "notes/class8-science-health-ultimate-treasure.html" },
      { title: "Nature of Matter: Elements, Compounds and Mixtures", label: "Chapter 8: kid-friendly notes with all textbook figures, particle, electrolysis, iron-sulfur and mixture labs, 7 games, 100 CBSE-style questions with answers, quiz and all NCERT answers", file: "notes/class8-science-nature-of-matter.pdf", page: "notes/class8-science-nature-of-matter.html" },
      { title: "The Amazing World of Solutes, Solvents, and Solutions", label: "Chapter 9: kid-friendly notes with all textbook figures, 8 live labs (dissolving, fish tank, float-or-sink, density detective, meniscus reader, hot air balloon), 8 games, 100 CBSE-style questions with answers, quiz and all NCERT answers", file: "notes/class8-science-solutes-solvents-solutions.pdf", page: "notes/class8-science-solutes-solvents-solutions.html" },
      "Force and Pressure" ] }
  ],

  test: {
    "Arithmetic Progressions": "c10-ap", "Introduction to Trigonometry": "c10-trig", "Electricity": "c10-elec",
    "Chemical Reactions and Equations": "c10-chem", "Number Systems": "c9-num", "Motion": "c9-motion",
    "A Square and a Cube": "c8-sq", "Force and Pressure": "c8-force"
  },

  quick: {
    "Arithmetic Progressions": `
      <p>An AP is a list of numbers where each term is obtained by adding a fixed number <b>d</b> (common difference) to the previous term.</p>
      <div class="formula">nth term: a<sub>n</sub> = a + (n − 1)d</div>
      <div class="formula">Sum of n terms: S<sub>n</sub> = n/2 [2a + (n − 1)d] = n/2 (a + l)</div>
      <ul><li>d = a<sub>2</sub> − a<sub>1</sub>; it can be positive, negative or zero.</li>
      <li>a, b, c are in AP when 2b = a + c.</li>
      <li>a<sub>n</sub> = S<sub>n</sub> − S<sub>n−1</sub>.</li>
      <li>Sum of first n natural numbers = n(n + 1)/2.</li>
      <li>Sum of first n odd numbers = n².</li></ul>`,
    "Introduction to Trigonometry": `
      <div class="formula">sin θ = P/H &nbsp; cos θ = B/H &nbsp; tan θ = P/B</div>
      <div class="formula">cosec θ = 1/sin θ &nbsp; sec θ = 1/cos θ &nbsp; cot θ = 1/tan θ</div>
      <div class="scroll"><table><tr><th>θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
      <tr><td>sin</td><td>0</td><td>1/2</td><td>1/√2</td><td>√3/2</td><td>1</td></tr>
      <tr><td>cos</td><td>1</td><td>√3/2</td><td>1/√2</td><td>1/2</td><td>0</td></tr>
      <tr><td>tan</td><td>0</td><td>1/√3</td><td>1</td><td>√3</td><td>not defined</td></tr></table></div>
      <h3>Identities</h3>
      <ul><li>sin²θ + cos²θ = 1</li><li>1 + tan²θ = sec²θ</li><li>1 + cot²θ = cosec²θ</li></ul>`,
    "Electricity": `
      <div class="formula">Current: I = Q/t (ampere) &nbsp;·&nbsp; Potential difference: V = W/Q (volt)</div>
      <div class="formula">Ohm's law: V = IR &nbsp;·&nbsp; Resistance: R = ρl/A (ohm)</div>
      <ul><li>Series: R = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (same current).</li>
      <li>Parallel: 1/R = 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub> (same voltage).</li>
      <li>Heating effect: H = I²Rt.</li>
      <li>Power: P = VI = I²R = V²/R (watt).</li>
      <li>1 kWh = 3.6 × 10<sup>6</sup> J (commercial unit of energy).</li>
      <li>Ammeter is connected in series; voltmeter in parallel.</li></ul>`,
    "Chemical Reactions and Equations": `
      <ul><li><b>Combination:</b> A + B → AB &nbsp; e.g. 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</li>
      <li><b>Decomposition:</b> AB → A + B &nbsp; e.g. CaCO<sub>3</sub> → CaO + CO<sub>2</sub> (on heating)</li>
      <li><b>Displacement:</b> Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</li>
      <li><b>Double displacement:</b> Na<sub>2</sub>SO<sub>4</sub> + BaCl<sub>2</sub> → BaSO<sub>4</sub>↓ + 2NaCl</li>
      <li><b>Oxidation:</b> gain of oxygen or loss of hydrogen. <b>Reduction:</b> the opposite.</li>
      <li>Exothermic reactions release heat; endothermic reactions absorb heat.</li>
      <li>Corrosion and rancidity are effects of oxidation in daily life.</li></ul>
      <p>A balanced equation has the same number of atoms of each element on both sides.</p>`,
    "Number Systems": `
      <ul><li>Rational number: can be written as p/q, where p and q are integers and q ≠ 0.</li>
      <li>Decimal form of a rational number is terminating or non-terminating recurring.</li>
      <li>Irrational number: non-terminating, non-recurring decimal (√2, √3, π).</li>
      <li>Rational and irrational numbers together make the real numbers.</li></ul>
      <div class="formula">(√a + √b)(√a − √b) = a − b</div>
      <div class="formula">a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup> &nbsp; (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup> &nbsp; a<sup>m</sup>/a<sup>n</sup> = a<sup>m−n</sup></div>
      <p>To rationalise 1/√a, multiply the numerator and denominator by √a.</p>`,
    "Motion": `
      <ul><li>Distance is the total path length; displacement is the shortest distance between start and end points.</li>
      <li>Speed = distance/time; velocity = displacement/time (SI unit m/s).</li>
      <li>Acceleration a = (v − u)/t (SI unit m/s²).</li></ul>
      <div class="formula">v = u + at</div><div class="formula">s = ut + ½at²</div><div class="formula">v² − u² = 2as</div>
      <ul><li>Slope of a distance–time graph gives speed.</li>
      <li>Slope of a velocity–time graph gives acceleration; area under it gives displacement.</li>
      <li>Uniform circular motion is accelerated because direction changes continuously.</li>
      <li>To convert km/h to m/s, multiply by 5/18.</li></ul>`,
    "A Square and a Cube": `
      <ul><li>A perfect square ends in 0, 1, 4, 5, 6 or 9 — never in 2, 3, 7 or 8.</li>
      <li>Square of an even number is even; square of an odd number is odd.</li>
      <li>Sum of first n odd numbers = n².</li>
      <li>Between n² and (n + 1)² there are 2n natural numbers.</li>
      <li>In prime factorisation of a perfect square, every prime occurs an even number of times.</li>
      <li>In prime factorisation of a perfect cube, every prime occurs in groups of three.</li>
      <li>Pythagorean triplet for m &gt; 1: 2m, m² − 1, m² + 1.</li></ul>`,
    "Force and Pressure": `
      <ul><li>A force is a push or a pull. SI unit: newton (N).</li>
      <li>A force can change the speed, direction of motion or shape of an object.</li>
      <li>Contact forces: muscular force, friction. Non-contact forces: magnetic, electrostatic, gravitational.</li></ul>
      <div class="formula">Pressure = Force / Area &nbsp; (SI unit: pascal, Pa = N/m²)</div>
      <ul><li>Smaller area gives larger pressure for the same force.</li>
      <li>Liquids and gases exert pressure in all directions; liquid pressure increases with depth.</li>
      <li>Air around us exerts atmospheric pressure.</li></ul>`
  }
};
