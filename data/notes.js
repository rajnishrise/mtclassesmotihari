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
      "Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables", "Quadratic Equations",
      "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry",
      "Some Applications of Trigonometry", "Circles", "Areas Related to Circles", "Surface Areas and Volumes",
      "Statistics", "Probability" ] },
    { cls: 10, subject: "Science", book: "NCERT Science", chapters: [
      { title: "Chemical Reactions and Equations", label: "Handwritten notes", file: "notes/class10-science-chemical-reactions-equations.pdf" },
      { title: "Acids, Bases and Salts", label: "Handwritten notes", file: "notes/class10-science-acids-bases-salts.pdf" },
      { title: "Metals and Non-metals", label: "Extraction of Metals & Corrosion", file: "notes/class10-science-extraction-of-metals-and-corrosion.pdf" },
      { title: "Carbon and its Compounds", file: "notes/class10-science-carbon-and-its-compounds.pdf" },
      "Life Processes", "Control and Coordination",
      { title: "How do Organisms Reproduce?", file: "notes/class10-science-how-do-organisms-reproduce.pdf" }, "Heredity",
      "Light – Reflection and Refraction", "The Human Eye and the Colourful World",
      { title: "Electricity", label: "Handwritten notes", file: "notes/class10-science-electricity.pdf" },
      { title: "Magnetic Effects of Electric Current", label: "AC & DC Current and Household Circuits", file: "notes/class10-science-ac-dc-household-circuits.pdf" },
      "Our Environment" ] },
    // Class 9 has NEW NCERT books from 2026-27 (Ganita Manjari, Exploration).
    // Only topic names are listed here — replace with your chapter list.
    { cls: 9, subject: "Maths", book: "NCERT Ganita Manjari", chapters: [ "Number Systems",
      { title: "Circles", label: "Complete guide: notes, all 12 theorem proofs and solutions", file: "notes/class9-maths-circles.pdf" } ] },
    { cls: 9, subject: "Science", book: "NCERT Exploration", chapters: [ "Motion",
      { title: "Simple Machines", label: "Work, Energy and Simple Machines (Section 7.6)", file: "notes/class9-science-simple-machines.pdf" },
      { title: "Journey Inside the Atom", label: "Chapter 8: notes, diagrams and all NCERT answers", file: "notes/class9-science-journey-inside-the-atom.pdf", page: "notes/class9-science-journey-inside-the-atom.html" } ] },
    { cls: 8, subject: "Maths", book: "NCERT Ganita Prakash (Part 1 & 2)", chapters: [
      "A Square and a Cube", "Power Play", "A Story of Numbers", "Quadrilaterals", "Number Play",
      "We Distribute, Yet Things Multiply", "Proportional Reasoning – 1", "Fractions in Disguise",
      "The Baudhayana–Pythagoras Theorem", "Proportional Reasoning – 2", "Exploring Some Geometric Themes",
      "Tales by Dots and Lines", "Algebra Play", "Area" ] },
    { cls: 8, subject: "Science", book: "NCERT Curiosity", chapters: [ "Force and Pressure" ] }
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
