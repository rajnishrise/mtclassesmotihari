/* ONLINE TEST QUESTION BANK.
   To add a test, copy one block and change it.
   q = question, o = four options, a = position of the right option (0 = first), e = explanation.
   You may use <sup>2</sup> and <sub>2</sub> for powers and chemical formulas. */
window.MT_TESTS = [
{ id: "c10-ap", cls: 10, subject: "Maths", title: "Arithmetic Progressions", minutes: 12, questions: [
 { q: "The common difference of the AP 3, 7, 11, 15, … is", o: ["3", "4", "5", "7"], a: 1, e: "d = 7 − 3 = 4." },
 { q: "The 10th term of the AP 2, 7, 12, … is", o: ["45", "47", "50", "52"], a: 1, e: "a = 2, d = 5. a₁₀ = 2 + 9 × 5 = 47." },
 { q: "Which term of the AP 21, 18, 15, … is −81?", o: ["33rd", "34th", "35th", "36th"], a: 2, e: "21 + (n − 1)(−3) = −81 gives n − 1 = 34, so n = 35." },
 { q: "The sum of the first 20 terms of the AP 1, 3, 5, … is", o: ["200", "380", "400", "420"], a: 2, e: "S = 20/2 [2 × 1 + 19 × 2] = 10 × 40 = 400." },
 { q: "If k, 2k − 1 and 2k + 1 are in AP, then k =", o: ["1", "2", "3", "4"], a: 2, e: "2(2k − 1) = k + (2k + 1) gives 4k − 2 = 3k + 1, so k = 3." },
 { q: "The nth term of an AP is 3n + 2. Its common difference is", o: ["2", "3", "5", "6"], a: 1, e: "aₙ − aₙ₋₁ = 3n + 2 − [3(n − 1) + 2] = 3." },
 { q: "How many two-digit numbers are divisible by 3?", o: ["29", "30", "31", "33"], a: 1, e: "AP: 12, 15, …, 99. n = (99 − 12)/3 + 1 = 30." },
 { q: "The sum of the first 100 natural numbers is", o: ["5000", "5050", "5100", "10100"], a: 1, e: "n(n + 1)/2 = 100 × 101/2 = 5050." },
 { q: "The 30th term of the AP 10, 7, 4, … is", o: ["97", "77", "−77", "−87"], a: 2, e: "a = 10, d = −3. a₃₀ = 10 + 29 × (−3) = −77." },
 { q: "If S<sub>n</sub> = 2n² + 3n, the common difference of the AP is", o: ["2", "3", "4", "5"], a: 2, e: "a₁ = S₁ = 5, a₂ = S₂ − S₁ = 14 − 5 = 9, so d = 4." }
]},
{ id: "c10-trig", cls: 10, subject: "Maths", title: "Introduction to Trigonometry", minutes: 12, questions: [
 { q: "sin 30° =", o: ["1/2", "√3/2", "1/√2", "1"], a: 0, e: "Standard value: sin 30° = 1/2." },
 { q: "tan 45° =", o: ["0", "1/√3", "1", "√3"], a: 2, e: "Standard value: tan 45° = 1." },
 { q: "The value of sin² 60° + cos² 60° is", o: ["0", "1/2", "1", "√3"], a: 2, e: "sin²θ + cos²θ = 1 for every angle θ." },
 { q: "If sin A = 3/5 and A is acute, then cos A =", o: ["3/4", "4/5", "5/4", "4/3"], a: 1, e: "cos A = √(1 − 9/25) = √(16/25) = 4/5." },
 { q: "cosec θ is the reciprocal of", o: ["cos θ", "tan θ", "sec θ", "sin θ"], a: 3, e: "cosec θ = 1/sin θ." },
 { q: "1 + tan² A is equal to", o: ["sec² A", "cosec² A", "cot² A", "cos² A"], a: 0, e: "Identity: 1 + tan²A = sec²A." },
 { q: "(2 tan 30°) / (1 + tan² 30°) is equal to", o: ["sin 60°", "cos 60°", "tan 60°", "sin 30°"], a: 0, e: "(2/√3) ÷ (4/3) = √3/2 = sin 60°." },
 { q: "If sec A = 2, then A =", o: ["30°", "45°", "60°", "90°"], a: 2, e: "cos A = 1/2, so A = 60°." },
 { q: "tan 90° is", o: ["0", "1", "√3", "not defined"], a: 3, e: "tan 90° = sin 90°/cos 90° = 1/0, which is not defined." },
 { q: "(1 − cos² A) cosec² A =", o: ["0", "1", "sin² A", "cos² A"], a: 1, e: "1 − cos²A = sin²A and sin²A × cosec²A = 1." }
]},
{ id: "c10-elec", cls: 10, subject: "Science", title: "Electricity", minutes: 12, questions: [
 { q: "The SI unit of electric current is", o: ["volt", "ampere", "ohm", "coulomb"], a: 1, e: "Current is measured in ampere (A)." },
 { q: "A 12 V battery is connected across a 4 Ω resistor. The current is", o: ["48 A", "16 A", "3 A", "0.33 A"], a: 2, e: "I = V/R = 12/4 = 3 A." },
 { q: "If the length of a wire is doubled (same material and thickness), its resistance becomes", o: ["half", "the same", "double", "four times"], a: 2, e: "R = ρl/A, so R is directly proportional to length." },
 { q: "Resistors of 2 Ω, 3 Ω and 5 Ω are joined in series. The total resistance is", o: ["10 Ω", "30 Ω", "1 Ω", "0.97 Ω"], a: 0, e: "In series, R = 2 + 3 + 5 = 10 Ω." },
 { q: "Two 6 Ω resistors are joined in parallel. The equivalent resistance is", o: ["12 Ω", "6 Ω", "3 Ω", "36 Ω"], a: 2, e: "1/R = 1/6 + 1/6 = 1/3, so R = 3 Ω." },
 { q: "A bulb is rated 220 V, 100 W. The current it draws is about", o: ["0.45 A", "2.2 A", "4.5 A", "22 A"], a: 0, e: "I = P/V = 100/220 ≈ 0.45 A." },
 { q: "1 kWh is equal to", o: ["3.6 × 10³ J", "3.6 × 10⁵ J", "3.6 × 10⁶ J", "1000 J"], a: 2, e: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J." },
 { q: "Potential difference across a component is measured by", o: ["an ammeter in series", "a voltmeter in parallel", "a voltmeter in series", "an ammeter in parallel"], a: 1, e: "A voltmeter is always connected in parallel across the component." },
 { q: "The heat produced when 2 A flows through a 10 Ω resistor for 5 s is", o: ["100 J", "200 J", "20 J", "1000 J"], a: 1, e: "H = I²Rt = 4 × 10 × 5 = 200 J." },
 { q: "Household appliances are connected in parallel so that", o: ["the total resistance increases", "less wire is used", "each gets the same voltage and works independently", "the current stays the same in all"], a: 2, e: "In parallel, each appliance gets the full supply voltage and has its own switch." }
]},
{ id: "c10-chem", cls: 10, subject: "Science", title: "Chemical Reactions and Equations", minutes: 12, questions: [
 { q: "2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O is a", o: ["decomposition reaction", "combination reaction", "displacement reaction", "double displacement reaction"], a: 1, e: "Two substances combine to form a single product." },
 { q: "CaCO<sub>3</sub> → CaO + CO<sub>2</sub> (on heating) is a", o: ["combination reaction", "displacement reaction", "decomposition reaction", "double displacement reaction"], a: 2, e: "One compound breaks into two simpler substances on heating (thermal decomposition)." },
 { q: "Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu is a", o: ["combination reaction", "decomposition reaction", "double displacement reaction", "displacement reaction"], a: 3, e: "Iron is more reactive and displaces copper from copper sulphate." },
 { q: "Na<sub>2</sub>SO<sub>4</sub> + BaCl<sub>2</sub> → BaSO<sub>4</sub> + 2NaCl is a", o: ["double displacement reaction", "displacement reaction", "combination reaction", "decomposition reaction"], a: 0, e: "The two compounds exchange ions; white BaSO₄ precipitates." },
 { q: "When an iron nail is kept in copper sulphate solution, the colour of the solution changes from", o: ["green to blue", "blue to light green", "colourless to blue", "blue to colourless"], a: 1, e: "Blue CuSO₄ changes to light green FeSO₄." },
 { q: "Oxidation is the", o: ["gain of hydrogen", "loss of oxygen", "gain of oxygen", "addition of water"], a: 2, e: "Oxidation is gain of oxygen or loss of hydrogen." },
 { q: "In CuO + H<sub>2</sub> → Cu + H<sub>2</sub>O, the substance oxidised is", o: ["CuO", "H<sub>2</sub>", "Cu", "H<sub>2</sub>O"], a: 1, e: "H₂ gains oxygen to form H₂O, so it is oxidised." },
 { q: "Chips packets are flushed with which gas to prevent rancidity?", o: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"], a: 3, e: "Nitrogen keeps oxygen away so the oil does not get oxidised." },
 { q: "In the balanced equation aFe + bH<sub>2</sub>O → Fe<sub>3</sub>O<sub>4</sub> + cH<sub>2</sub>, the values of a, b, c are", o: ["3, 4, 4", "3, 3, 4", "1, 4, 4", "3, 4, 3"], a: 0, e: "3Fe + 4H₂O → Fe₃O₄ + 4H₂." },
 { q: "Silver chloride turns grey in sunlight because it decomposes into", o: ["silver and oxygen", "silver and chlorine", "silver oxide", "silver and hydrogen"], a: 1, e: "2AgCl → 2Ag + Cl₂ in sunlight." }
]},
{ id: "c9-num", cls: 9, subject: "Maths", title: "Number Systems", minutes: 12, questions: [
 { q: "Which of these is irrational?", o: ["√16", "22/7", "√3", "0.333…"], a: 2, e: "√16 = 4, 22/7 and 0.333… = 1/3 are rational. √3 is irrational." },
 { q: "The decimal expansion of a rational number is", o: ["always terminating", "always non-terminating", "terminating or non-terminating recurring", "non-terminating and non-recurring"], a: 2, e: "Rational numbers have terminating or recurring decimals." },
 { q: "0.333… (3 repeating) expressed as p/q is", o: ["3/10", "1/3", "3/100", "33/100"], a: 1, e: "Let x = 0.333…; 10x = 3.333…; 9x = 3; x = 1/3." },
 { q: "On rationalising the denominator, 1/√2 becomes", o: ["√2/2", "√2", "2√2", "1/2"], a: 0, e: "Multiply top and bottom by √2: √2/2." },
 { q: "(√3 + √2)(√3 − √2) =", o: ["5", "1", "√6", "6"], a: 1, e: "(a + b)(a − b) = a² − b² = 3 − 2 = 1." },
 { q: "The value of 27<sup>2/3</sup> is", o: ["3", "6", "9", "18"], a: 2, e: "27^(1/3) = 3 and 3² = 9." },
 { q: "2<sup>2/3</sup> × 2<sup>1/3</sup> =", o: ["2", "4", "2<sup>2/9</sup>", "2<sup>1/3</sup>"], a: 0, e: "Add the powers: 2/3 + 1/3 = 1, so the answer is 2." },
 { q: "A rational number between 1/3 and 1/2 is", o: ["1/4", "2/5", "3/5", "2/3"], a: 1, e: "1/3 ≈ 0.333, 1/2 = 0.5 and 2/5 = 0.4 lies between them." },
 { q: "The number 0.101001000100001… is", o: ["rational", "an integer", "irrational", "a natural number"], a: 2, e: "It is non-terminating and non-recurring, so it is irrational." },
 { q: "√50 is equal to", o: ["5√2", "25√2", "2√5", "10√5"], a: 0, e: "√50 = √(25 × 2) = 5√2." }
]},
{ id: "c9-motion", cls: 9, subject: "Science", title: "Motion", minutes: 12, questions: [
 { q: "The SI unit of velocity is", o: ["m/s", "m/s²", "km/h", "m"], a: 0, e: "Velocity is measured in metre per second." },
 { q: "The slope of a distance–time graph gives", o: ["acceleration", "speed", "displacement", "force"], a: 1, e: "Slope = distance/time = speed." },
 { q: "The area under a velocity–time graph gives", o: ["acceleration", "speed", "displacement", "force"], a: 2, e: "Area = velocity × time = displacement." },
 { q: "A car goes from rest to 20 m/s in 5 s. Its acceleration is", o: ["100 m/s²", "5 m/s²", "0.25 m/s²", "4 m/s²"], a: 3, e: "a = (v − u)/t = 20/5 = 4 m/s²." },
 { q: "An athlete completes one full round of a circular track of radius r. The displacement is", o: ["2πr", "πr", "2r", "zero"], a: 3, e: "Start and end points are the same, so displacement is zero." },
 { q: "Uniform circular motion is accelerated because", o: ["the speed keeps changing", "the direction of velocity keeps changing", "the distance is zero", "no force acts"], a: 1, e: "Velocity changes when direction changes, even at constant speed." },
 { q: "A bus starts from rest with acceleration 0.1 m/s². Its speed after 2 minutes is", o: ["0.2 m/s", "1.2 m/s", "12 m/s", "120 m/s"], a: 2, e: "v = u + at = 0 + 0.1 × 120 = 12 m/s." },
 { q: "The distance covered by that bus in 2 minutes is", o: ["72 m", "360 m", "720 m", "1440 m"], a: 2, e: "s = ½at² = ½ × 0.1 × 120² = 720 m." },
 { q: "72 km/h is equal to", o: ["7.2 m/s", "20 m/s", "36 m/s", "72 m/s"], a: 1, e: "72 × 5/18 = 20 m/s." },
 { q: "A car moving at 20 m/s stops in 4 s after braking. Its acceleration is", o: ["5 m/s²", "−5 m/s²", "−80 m/s²", "0.2 m/s²"], a: 1, e: "a = (0 − 20)/4 = −5 m/s² (retardation)." }
]},
{ id: "c8-sq", cls: 8, subject: "Maths", title: "A Square and a Cube (squares & square roots)", minutes: 12, questions: [
 { q: "Which of these is a perfect square?", o: ["1057", "2061", "7928", "1024"], a: 3, e: "1024 = 32². Numbers ending in 7 or 8 are never squares, and 2061 lies between 45² and 46²." },
 { q: "The square of an odd number is always", o: ["even", "odd", "prime", "a multiple of 4"], a: 1, e: "Odd × odd = odd." },
 { q: "How many natural numbers lie between 12² and 13²?", o: ["12", "24", "25", "26"], a: 1, e: "Between n² and (n + 1)² there are 2n numbers: 2 × 12 = 24." },
 { q: "√1764 =", o: ["38", "42", "44", "48"], a: 1, e: "42 × 42 = 1764." },
 { q: "The smallest number by which 180 must be multiplied to get a perfect square is", o: ["2", "3", "5", "6"], a: 2, e: "180 = 2² × 3² × 5. The 5 is unpaired, so multiply by 5." },
 { q: "The units digit of the square of 4567 is", o: ["1", "3", "7", "9"], a: 3, e: "7 × 7 = 49, so the units digit is 9." },
 { q: "1 + 3 + 5 + 7 + … + 19 =", o: ["81", "99", "100", "121"], a: 2, e: "This is the sum of the first 10 odd numbers = 10² = 100." },
 { q: "Which of these is a Pythagorean triplet?", o: ["6, 7, 9", "6, 8, 10", "6, 9, 12", "6, 10, 12"], a: 1, e: "6² + 8² = 36 + 64 = 100 = 10²." },
 { q: "√0.0016 =", o: ["0.4", "0.04", "0.004", "0.16"], a: 1, e: "0.04 × 0.04 = 0.0016." },
 { q: "The cube of 5 is", o: ["15", "25", "125", "625"], a: 2, e: "5 × 5 × 5 = 125." }
]},
{ id: "c8-force", cls: 8, subject: "Science", title: "Force and Pressure", minutes: 12, questions: [
 { q: "The SI unit of force is", o: ["joule", "newton", "pascal", "watt"], a: 1, e: "Force is measured in newton (N)." },
 { q: "The SI unit of pressure is", o: ["newton", "kilogram", "pascal", "joule"], a: 2, e: "Pressure is measured in pascal (Pa)." },
 { q: "Pressure is defined as", o: ["force × area", "force per unit area", "area per unit force", "mass per unit volume"], a: 1, e: "Pressure = force/area." },
 { q: "Which of these is a non-contact force?", o: ["Friction", "Muscular force", "Magnetic force", "A push by hand"], a: 2, e: "A magnet can attract iron without touching it." },
 { q: "School bags have wide straps because wide straps", o: ["look attractive", "increase the pressure on the shoulders", "reduce the pressure by spreading the force over a larger area", "reduce the weight of the bag"], a: 2, e: "Larger area means smaller pressure for the same force." },
 { q: "The pressure exerted by a liquid", o: ["increases with depth", "decreases with depth", "stays the same at all depths", "is zero at the bottom"], a: 0, e: "Liquid pressure increases as depth increases." },
 { q: "A force of 100 N acts on an area of 2 m². The pressure is", o: ["200 Pa", "102 Pa", "98 Pa", "50 Pa"], a: 3, e: "P = F/A = 100/2 = 50 Pa." },
 { q: "The force that pulls every object towards the Earth is", o: ["magnetic force", "electrostatic force", "frictional force", "gravitational force"], a: 3, e: "The Earth attracts objects by the force of gravity." },
 { q: "We are not crushed by atmospheric pressure because", o: ["atmospheric pressure is very small", "air has no weight", "the pressure inside our body balances it", "gravity cancels it"], a: 2, e: "The pressure inside our body is equal to the atmospheric pressure outside." },
 { q: "A force cannot change an object's", o: ["speed", "direction of motion", "shape", "mass"], a: 3, e: "A force can change speed, direction and shape, but not mass." }
]}
];
