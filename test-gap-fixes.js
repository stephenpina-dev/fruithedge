// ============================================================
// VERIFY ALL 3 GAP FIXES
// Run with: node test-gap-fixes.js
// ============================================================

const fs = require('fs');

// Load data.js
const dataContent = fs.readFileSync('/Users/fruithedge/fruithedge-portal/data.js', 'utf8');

function extractObject(content, startMarker) {
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return null;

  let braceCount = 0;
  let inString = false;
  let stringChar = '';
  let endIdx = startIdx;

  for (let i = startIdx; i < content.length; i++) {
    const char = content[i];

    if (!inString) {
      if (char === '"' || char === "'" || char === '`') {
        inString = true;
        stringChar = char;
      } else if (char === '{' || char === '[') {
        braceCount++;
      } else if (char === '}' || char === ']') {
        braceCount--;
        if (braceCount === 0) {
          endIdx = i + 1;
          break;
        }
      }
    } else {
      if (char === stringChar && content[i-1] !== '\\') {
        inString = false;
      }
    }
  }

  const objStr = content.substring(startIdx + startMarker.length - 1, endIdx);
  try {
    return eval('(' + objStr + ')');
  } catch (e) {
    console.error('Failed to parse:', startMarker, e.message);
    return null;
  }
}

const riPropheticMessages = extractObject(dataContent, 'const riPropheticMessages = ');
const ciPropheticMessages = extractObject(dataContent, 'const ciPropheticMessages = ');
const alphaPropheticMessages = extractObject(dataContent, 'const alphaPropheticMessages = ');

// ============================================================
// FIXED LOGIC (matches updated app.js)
// ============================================================

function detectRiPatternWithScaleCheck(inputs) {
  const { impact, identity, boldness, audience } = inputs;

  let intimacy;
  if (audience <= 100) intimacy = 10;
  else if (audience >= 10000000) intimacy = 1;
  else intimacy = Math.max(1, Math.min(10, 10 - (Math.log10(audience) - 2) * 1.5));

  const factors = [
    { name: 'impact', label: 'Emotional Depth', value: impact },
    { name: 'identity', label: 'Audience Fit', value: identity },
    { name: 'boldness', label: 'Artistic Boldness', value: boldness },
    { name: 'intimacy', label: 'Audience Intimacy', value: intimacy }
  ];

  const sorted = [...factors].sort((a, b) => a.value - b.value);
  const bottleneck = sorted[0];
  const strength = sorted[sorted.length - 1];

  const avg = factors.reduce((sum, f) => sum + f.value, 0) / factors.length;
  const spread = strength.value - bottleneck.value;

  let shape;
  if (avg >= 7 && spread < 3) shape = 'soaring';
  else if (avg >= 7 && spread >= 3) shape = 'lopsided_high';
  else if (avg >= 4 && avg < 7 && spread < 3) shape = 'plateau';
  else if (avg >= 4 && avg < 7 && spread >= 3) shape = 'lopsided_mid';
  else if (avg < 4 && spread < 3) shape = 'crashed';
  else if (avg < 4 && spread >= 3) shape = 'lopsided_low';
  else shape = 'mixed';

  const pattern = {
    bottleneck, strength, average: avg, spread, shape,
    isLargeAudience: audience >= 100000,
    isSmallAudience: audience < 1000,
    hasScaleAchievement: false,
    raw: { impact, identity, boldness, audience }
  };

  // FIXED: Check depth using raw inputs (not Ri score diluted by intimacy)
  const hasDepth = inputs.impact >= 7 && inputs.identity >= 7 && inputs.boldness >= 7;
  if (hasDepth && inputs.audience >= 1000000) {
    pattern.hasScaleAchievement = true;
  }

  return pattern;
}

function detectCiPattern(inputs) {
  const { flow, evolution, risk, admin, distraction, stagnation } = inputs;

  const flowNorm = Math.min(10, flow / 6);
  const adminNorm = Math.min(10, admin / 6);
  const distractionNorm = Math.min(10, distraction / 6);

  const fuel = [
    { name: 'flow', label: 'Flow Time', value: flowNorm },
    { name: 'evolution', label: 'Skill Growth', value: evolution },
    { name: 'risk', label: 'Creative Risk', value: risk }
  ];

  const drag = [
    { name: 'admin', label: 'Admin Load', value: adminNorm, inverted: 10 - adminNorm },
    { name: 'distraction', label: 'Distraction', value: distractionNorm, inverted: 10 - distractionNorm },
    { name: 'stagnation', label: 'Stagnation', value: stagnation, inverted: 10 - stagnation }
  ];

  const fuelSorted = [...fuel].sort((a, b) => a.value - b.value);
  const fuelBottleneck = fuelSorted[0];
  const fuelStrength = fuelSorted[fuelSorted.length - 1];
  const fuelAvg = fuel.reduce((sum, f) => sum + f.value, 0) / fuel.length;

  const dragSorted = [...drag].sort((a, b) => b.value - a.value);
  const worstDrag = dragSorted[0];
  const dragAvg = drag.reduce((sum, d) => sum + d.value, 0) / drag.length;

  let overallBottleneck;
  if (fuelBottleneck.value < worstDrag.inverted) {
    overallBottleneck = { ...fuelBottleneck, type: 'fuel' };
  } else {
    overallBottleneck = { ...worstDrag, type: 'drag' };
  }

  const combinedAvg = (fuelAvg + (10 - dragAvg)) / 2;

  let shape;
  if (fuelAvg >= 7 && dragAvg <= 3) shape = 'soaring';
  else if (fuelAvg >= 6 && dragAvg >= 6) shape = 'high_fuel_high_drag';
  else if (fuelAvg <= 4 && dragAvg <= 4) shape = 'low_fuel_low_drag';
  else if (fuelAvg <= 4 && dragAvg >= 5) shape = 'crashed';
  else if (combinedAvg >= 6) shape = 'functional_high';
  else if (combinedAvg >= 4) shape = 'plateau';
  else shape = 'struggling';

  return {
    bottleneck: overallBottleneck,
    fuelBottleneck, fuelStrength, worstDrag,
    fuelAvg, dragAvg, combinedAvg, shape,
    raw: { flow, evolution, risk, admin, distraction, stagnation }
  };
}

function findMatchedPattern(messages, pattern) {
  for (const [key, p] of Object.entries(messages)) {
    if (p.condition(pattern)) {
      return key;
    }
  }
  return Object.keys(messages)[Object.keys(messages).length - 1] + ' (fallback)';
}

function calculateAlpha(aq, ri, ci) {
  return Math.round(Math.pow(aq * ri * ci, 1/3) * 10) / 10;
}

console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║         VERIFY ALL 3 GAP FIXES                               ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

// ============================================================
// GAP 1: Ri scale_achievement (FIXED)
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('GAP 1: Ri scale_achievement (FIXED)');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');
console.log('NEW CONDITION:');
console.log('  hasDepth = impact >= 7 && identity >= 7 && boldness >= 7');
console.log('  hasScaleAchievement = hasDepth && audience >= 1M');
console.log('');

const riTests = [
  { impact: 8, identity: 8, boldness: 8, audience: 5000000, expected: 'scale_achievement', label: 'High depth + massive scale' },
  { impact: 8, identity: 8, boldness: 8, audience: 1000000, expected: 'scale_achievement', label: 'High depth + 1M scale' },
  { impact: 7, identity: 7, boldness: 7, audience: 1000000, expected: 'scale_achievement', label: 'Threshold depth + 1M scale' },
  { impact: 6, identity: 8, boldness: 8, audience: 5000000, expected: 'audience_dilution', label: 'Low impact + massive scale' },
  { impact: 5, identity: 5, boldness: 5, audience: 5000000, expected: 'audience_dilution', label: 'Mid depth + massive scale' },
  // At 100K, intimacy = 5.5, so bottleneck is likely intimacy since all others are 8
  // This correctly triggers audience_dilution (large audience with intimacy bottleneck)
  { impact: 8, identity: 8, boldness: 8, audience: 100000, expected: 'audience_dilution', label: 'High depth + 100K → audience_dilution (intimacy is bottleneck)' },
];

let gap1Passed = 0;
riTests.forEach(test => {
  const pattern = detectRiPatternWithScaleCheck(test);
  const match = findMatchedPattern(riPropheticMessages, pattern);
  const status = match === test.expected ? '✅' : '❌';
  if (match === test.expected) gap1Passed++;

  console.log(`${status} ${test.label}`);
  console.log(`   Input: impact=${test.impact}, identity=${test.identity}, boldness=${test.boldness}, audience=${test.audience.toLocaleString()}`);
  console.log(`   hasScaleAchievement: ${pattern.hasScaleAchievement}`);
  console.log(`   Expected: ${test.expected}, Got: ${match}`);
  console.log('');
});

console.log(`Gap 1 Result: ${gap1Passed}/${riTests.length} passed`);
console.log('');

// ============================================================
// GAP 2: Alpha all_aligned_high vs compounding (NO FIX NEEDED)
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('GAP 2: Alpha all_aligned_high vs compounding (NO FIX NEEDED)');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

const alphaTests = [
  { aq: 8, ri: 8, ci: 8, expected: 'all_aligned_high', label: 'All >= 7 → all_aligned_high' },
  { aq: 9, ri: 9, ci: 5, expected: 'compounding', label: 'Alpha >= 7 but ci < 7 → compounding' },
  { aq: 8, ri: 8, ci: 6, expected: 'compounding', label: 'Alpha >= 7 but ci < 7 → compounding' },
];

let gap2Passed = 0;
alphaTests.forEach(test => {
  const alpha = calculateAlpha(test.aq, test.ri, test.ci);
  const scores = { aq: test.aq, ri: test.ri, ci: test.ci, alpha };
  const match = findMatchedPattern(alphaPropheticMessages, scores);
  const status = match === test.expected ? '✅' : '❌';
  if (match === test.expected) gap2Passed++;

  console.log(`${status} ${test.label}`);
  console.log(`   Scores: aq=${test.aq}, ri=${test.ri}, ci=${test.ci}, alpha=${alpha}`);
  console.log(`   Expected: ${test.expected}, Got: ${match}`);
  console.log('');
});

console.log(`Gap 2 Result: ${gap2Passed}/${alphaTests.length} passed`);
console.log('');

// ============================================================
// GAP 3: Ci risk_bottleneck (NO FIX NEEDED)
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('GAP 3: Ci risk_bottleneck (NO FIX NEEDED)');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

const ciTests = [
  { flow: 30, evolution: 7, risk: 2, admin: 10, distraction: 10, stagnation: 3, expected: 'risk_bottleneck', label: 'High flow/evolution, low risk' },
  { flow: 40, evolution: 8, risk: 3, admin: 10, distraction: 10, stagnation: 3, expected: 'risk_bottleneck', label: 'Very high flow/evolution, low risk' },
  { flow: 10, evolution: 7, risk: 7, admin: 10, distraction: 10, stagnation: 3, expected: 'flow_bottleneck', label: 'Low flow (not risk_bottleneck)' },
];

let gap3Passed = 0;
ciTests.forEach(test => {
  const pattern = detectCiPattern(test);
  const match = findMatchedPattern(ciPropheticMessages, pattern);
  const status = match === test.expected ? '✅' : '❌';
  if (match === test.expected) gap3Passed++;

  console.log(`${status} ${test.label}`);
  console.log(`   fuelBottleneck: ${pattern.fuelBottleneck.name} (${pattern.fuelBottleneck.value.toFixed(1)})`);
  console.log(`   Expected: ${test.expected}, Got: ${match}`);
  console.log('');
});

console.log(`Gap 3 Result: ${gap3Passed}/${ciTests.length} passed`);
console.log('');

// ============================================================
// FINAL SUMMARY
// ============================================================

console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║         FINAL SUMMARY                                        ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

const totalTests = riTests.length + alphaTests.length + ciTests.length;
const totalPassed = gap1Passed + gap2Passed + gap3Passed;

console.log(`Gap 1 (Ri scale_achievement):    ${gap1Passed}/${riTests.length} ${gap1Passed === riTests.length ? '✅ FIXED' : '❌ NEEDS WORK'}`);
console.log(`Gap 2 (Alpha compounding):       ${gap2Passed}/${alphaTests.length} ${gap2Passed === alphaTests.length ? '✅ WORKING' : '❌ NEEDS WORK'}`);
console.log(`Gap 3 (Ci risk_bottleneck):      ${gap3Passed}/${ciTests.length} ${gap3Passed === ciTests.length ? '✅ WORKING' : '❌ NEEDS WORK'}`);
console.log('');
console.log(`TOTAL: ${totalPassed}/${totalTests} tests passed`);
console.log('');

if (totalPassed === totalTests) {
  console.log('✅ ALL 3 GAPS RESOLVED!');
} else {
  console.log('⚠️  Some gaps still need attention');
}
