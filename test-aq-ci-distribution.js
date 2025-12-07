// ============================================================
// AQ and Ci Formula Distribution Audit
// Run with: node test-aq-ci-distribution.js
// ============================================================

// FIXED AQ Formula (gentler constraint penalty)
function calculateAQ(e, s, o, c) {
  // Geometric mean of positives (1-10 scale)
  const positiveGeo = Math.pow(e * s * o, 1/3);
  // Constraint penalty: gentle, only significant at high constraint
  // c=1 → 1.0 (no penalty), c=5 → 1.068 (6.8%), c=10 → 1.153 (15.3%)
  const constraintFactor = 1 + (c - 1) * 0.017;
  const aq = positiveGeo / constraintFactor;
  return Math.round(Math.min(10, Math.max(1, aq)) * 10) / 10;
}

// Current Ci Formula (unchanged - it's fine)
function calculateCi(f, ev, r, ad, d, st) {
  // Normalize flow/admin/distraction from 1-60 to 1-10 scale
  const flowNorm = 1 + (f - 1) * 9 / 59;
  const adminNorm = 1 + (ad - 1) * 9 / 59;
  const distractNorm = 1 + (d - 1) * 9 / 59;

  // Geometric mean of fuel (all on 1-10 scale)
  const fuelGeo = Math.pow(flowNorm * ev * r, 1/3);

  // Geometric mean of drag (all on 1-10 scale)
  const dragGeo = Math.pow(adminNorm * distractNorm * st, 1/3);

  // Drag factor: low drag = 1.0, high drag = 2.0
  const dragFactor = 1 + (dragGeo - 1) / 9;

  const ci = fuelGeo / dragFactor;
  return Math.round(Math.min(10, Math.max(1, ci)) * 10) / 10;
}

console.log('============================================================');
console.log('AQ AND Ci FORMULA DISTRIBUTION AUDIT (POST-FIX)');
console.log('============================================================\n');

// ============================================================
// AQ TESTS
// ============================================================

console.log('FIXED AQ FORMULA:');
console.log('  positiveGeo = ∛(e × s × o)');
console.log('  constraintFactor = 1 + (c - 1) × 0.017');
console.log('    c=1 → 1.0 (no penalty)');
console.log('    c=5 → 1.068 (6.8% penalty)');
console.log('    c=10 → 1.153 (15.3% penalty)');
console.log('  AQ = positiveGeo / constraintFactor');
console.log('');

const aqTests = [
  { e: 3, s: 3, o: 3, c: 5, label: "Low (3,3,3), mid constraint", expected: "2-4" },
  { e: 5, s: 5, o: 5, c: 5, label: "Middle (5,5,5), mid constraint", expected: "4-6" },
  { e: 5, s: 5, o: 5, c: 8, label: "Middle, high constraint", expected: "4-5" },
  { e: 5, s: 5, o: 5, c: 2, label: "Middle, low constraint", expected: "4.5-6" },
  { e: 8, s: 8, o: 8, c: 5, label: "High (8,8,8), mid constraint", expected: "7-8" },
  { e: 8, s: 8, o: 8, c: 2, label: "High, low constraint", expected: "7-9" },
  { e: 10, s: 10, o: 10, c: 1, label: "Perfect, no constraint", expected: "10-10" },
  { e: 10, s: 10, o: 10, c: 10, label: "Perfect, max constraint", expected: "8-9" },
];

console.log('AQ TEST RESULTS:');
console.log('─'.repeat(80));
console.log('| E  | S  | O  | C  | Result | Expected | Status | Label');
console.log('─'.repeat(80));

let aqPassed = 0;
let aqFailed = 0;

aqTests.forEach(t => {
  const result = calculateAQ(t.e, t.s, t.o, t.c);
  const [min, max] = t.expected.split('-').map(Number);
  const inRange = result >= min && result <= max;
  const status = inRange ? '✅' : '⚠️';
  if (inRange) aqPassed++; else aqFailed++;
  console.log(`| ${t.e.toString().padStart(2)} | ${t.s.toString().padStart(2)} | ${t.o.toString().padStart(2)} | ${t.c.toString().padStart(2)} | ${result.toFixed(1).padStart(6)} | ${t.expected.padStart(8)} | ${status}     | ${t.label}`);
});
console.log('─'.repeat(80));
console.log(`AQ Tests: ${aqPassed}/${aqPassed + aqFailed} passed`);
console.log('');

// Show the math for middle case
console.log('AQ CALCULATION BREAKDOWN (middle case 5,5,5,5):');
const e5 = 5, s5 = 5, o5 = 5, c5 = 5;
const posGeo5 = Math.pow(e5 * s5 * o5, 1/3);
const consFactor5 = 1 + (c5 - 1) * 0.017;
const aq5 = posGeo5 / consFactor5;
console.log(`  positiveGeo = ∛(5 × 5 × 5) = ∛125 = ${posGeo5.toFixed(2)}`);
console.log(`  constraintFactor = 1 + (5 - 1) × 0.017 = 1 + 0.068 = ${consFactor5.toFixed(3)}`);
console.log(`  AQ = ${posGeo5.toFixed(2)} / ${consFactor5.toFixed(3)} = ${aq5.toFixed(2)}`);
console.log('');

// ============================================================
// Ci TESTS (unchanged - verifying it's still good)
// ============================================================

console.log('Ci FORMULA (UNCHANGED):');
console.log('  fuelGeo = ∛(flowNorm × ev × r)');
console.log('  dragGeo = ∛(adminNorm × distractNorm × st)');
console.log('  dragFactor = 1 + (dragGeo - 1) / 9');
console.log('  Ci = fuelGeo / dragFactor');
console.log('');

const ciTests = [
  { f: 15, ev: 3, r: 3, a: 15, d: 15, st: 5, label: "Low fuel, balanced drag", expected: "2-4" },
  { f: 30, ev: 5, r: 5, a: 15, d: 15, st: 5, label: "Middle fuel, balanced drag", expected: "4-6" },
  { f: 30, ev: 5, r: 5, a: 30, d: 30, st: 7, label: "Middle fuel, high drag", expected: "3-5" },
  { f: 30, ev: 5, r: 5, a: 5, d: 5, st: 2, label: "Middle fuel, low drag", expected: "4-7" },
  { f: 45, ev: 8, r: 8, a: 10, d: 10, st: 3, label: "High fuel, low drag", expected: "6-9" },
  { f: 60, ev: 10, r: 10, a: 1, d: 1, st: 1, label: "Perfect fuel, minimal drag", expected: "9-10" },
  { f: 60, ev: 10, r: 10, a: 30, d: 30, st: 8, label: "Perfect fuel, high drag", expected: "5-7" },
];

console.log('Ci TEST RESULTS:');
console.log('─'.repeat(100));
console.log('| F  | Ev | R  | Ad | D  | St | Result | Expected | Status | Label');
console.log('─'.repeat(100));

let ciPassed = 0;
let ciFailed = 0;

ciTests.forEach(t => {
  const result = calculateCi(t.f, t.ev, t.r, t.a, t.d, t.st);
  const [min, max] = t.expected.split('-').map(Number);
  const inRange = result >= min && result <= max;
  const status = inRange ? '✅' : '⚠️';
  if (inRange) ciPassed++; else ciFailed++;
  console.log(`| ${t.f.toString().padStart(2)} | ${t.ev.toString().padStart(2)} | ${t.r.toString().padStart(2)} | ${t.a.toString().padStart(2)} | ${t.d.toString().padStart(2)} | ${t.st.toString().padStart(2)} | ${result.toFixed(1).padStart(6)} | ${t.expected.padStart(8)} | ${status}     | ${t.label}`);
});
console.log('─'.repeat(100));
console.log(`Ci Tests: ${ciPassed}/${ciPassed + ciFailed} passed`);
console.log('');

// ============================================================
// FINAL SUMMARY
// ============================================================

console.log('============================================================');
console.log('SUMMARY');
console.log('============================================================');

const aqMiddle = calculateAQ(5, 5, 5, 5);
const ciMiddle = calculateCi(30, 5, 5, 15, 15, 5);

console.log(`\nAQ middle (5,5,5,5): ${aqMiddle} ${aqMiddle >= 4 && aqMiddle <= 6 ? '✅' : '⚠️'}`);
console.log(`Ci middle: ${ciMiddle} ${ciMiddle >= 4 && ciMiddle <= 6 ? '✅' : '⚠️'}`);

if (aqPassed === aqTests.length && ciPassed === ciTests.length) {
  console.log('\n✅ ALL TESTS PASSED - Both formulas have good distribution');
} else {
  console.log(`\n⚠️ Some tests failed: AQ ${aqFailed} failed, Ci ${ciFailed} failed`);
}
console.log('============================================================');
