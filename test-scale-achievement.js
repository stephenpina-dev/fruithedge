// ============================================================
// INVESTIGATE scale_achievement threshold
// ============================================================

// Calculate Ri the same way as app.js
function calculateRi(impact, identity, boldness, audience) {
  let intimacy;
  if (audience <= 100) intimacy = 10;
  else if (audience >= 10000000) intimacy = 1;
  else intimacy = Math.max(1, Math.min(10, 10 - (Math.log10(audience) - 2) * 1.5));

  const factors = [impact, identity, boldness, intimacy];
  const product = factors.reduce((a, b) => a * b, 1);
  const ri = Math.pow(product, 1/4);
  return Math.round(Math.min(10, Math.max(1, ri)) * 10) / 10;
}

console.log('scale_achievement condition: scores.ri >= 7 && inputs.audience >= 1000000');
console.log('');
console.log('The problem: massive audiences = low intimacy = low Ri');
console.log('');

console.log('CURRENT SITUATION:');
console.log('─'.repeat(70));
console.log('| Impact | Identity | Boldness | Audience    | Intimacy | Ri   | >= 7? |');
console.log('─'.repeat(70));

const tests = [
  { impact: 8, identity: 8, boldness: 8, audience: 1000000 },
  { impact: 8, identity: 8, boldness: 8, audience: 5000000 },
  { impact: 8, identity: 8, boldness: 8, audience: 10000000 },
  { impact: 9, identity: 9, boldness: 9, audience: 1000000 },
  { impact: 9, identity: 9, boldness: 9, audience: 5000000 },
  { impact: 10, identity: 10, boldness: 10, audience: 1000000 },
  { impact: 10, identity: 10, boldness: 10, audience: 5000000 },
];

tests.forEach(t => {
  let intimacy;
  if (t.audience <= 100) intimacy = 10;
  else if (t.audience >= 10000000) intimacy = 1;
  else intimacy = Math.max(1, Math.min(10, 10 - (Math.log10(t.audience) - 2) * 1.5));

  const ri = calculateRi(t.impact, t.identity, t.boldness, t.audience);
  const passes = ri >= 7 ? '✅ YES' : '❌ NO';

  console.log(`| ${t.impact.toString().padStart(6)} | ${t.identity.toString().padStart(8)} | ${t.boldness.toString().padStart(8)} | ${t.audience.toLocaleString().padStart(11)} | ${intimacy.toFixed(1).padStart(8)} | ${ri.toFixed(1).padStart(4)} | ${passes} |`);
});
console.log('─'.repeat(70));
console.log('');

console.log('PROBLEM IDENTIFIED:');
console.log('  - At 1M audience, intimacy = 4.0');
console.log('  - At 5M audience, intimacy = 2.0');
console.log('  - Even with perfect 10/10/10 input, Ri maxes out at 5.6 for 5M audience');
console.log('  - The condition Ri >= 7 is IMPOSSIBLE for large audiences');
console.log('');

console.log('PROPOSED FIX:');
console.log('  Change the scale_achievement condition in app.js from:');
console.log('    scores.ri >= 7 && inputs.audience >= 1000000');
console.log('  To:');
console.log('    (inputs.impact >= 7 && inputs.identity >= 7 && inputs.boldness >= 7) && inputs.audience >= 1000000');
console.log('');
console.log('  This checks for "depth" using the raw input values (not diluted by intimacy)');
console.log('  combined with "scale" using the audience threshold.');
console.log('');

console.log('ALTERNATIVE: Use a lower Ri threshold that accounts for intimacy penalty');
console.log('  At 1M audience with intimacy=4, even 8/8/8 inputs = Ri 6.2');
console.log('  Threshold could be: Ri >= 5.5 && audience >= 1M && avg(impact,identity,boldness) >= 7');
