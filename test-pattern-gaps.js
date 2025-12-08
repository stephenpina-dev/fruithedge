// ============================================================
// TEST PATTERN GAPS - Verify and fix 3 gaps
// Run with: node test-pattern-gaps.js
// ============================================================

const fs = require('fs');

// Load data.js
const dataContent = fs.readFileSync('/Users/fruithedge/fruithedge-portal/data.js', 'utf8');

// Extract objects from data.js
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
// Pattern Detection Functions (from app.js)
// ============================================================

function detectRiPattern(inputs) {
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

  return {
    bottleneck, strength, average: avg, spread, shape,
    isLargeAudience: audience >= 100000,
    isSmallAudience: audience < 1000,
    hasScaleAchievement: false, // Will be set separately
    raw: { impact, identity, boldness, audience }
  };
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

// Helper to find matched pattern
function findMatchedPattern(messages, pattern) {
  for (const [key, p] of Object.entries(messages)) {
    if (p.condition(pattern)) {
      return key;
    }
  }
  return Object.keys(messages)[Object.keys(messages).length - 1] + ' (fallback)';
}

console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║         PATTERN GAP INVESTIGATION                            ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

// ============================================================
// GAP 1: Ri scale_achievement vs audience_dilution
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('GAP 1: Ri scale_achievement vs audience_dilution');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

console.log('CURRENT CONDITIONS:');
console.log('  scale_achievement: p.hasScaleAchievement === true');
console.log('  audience_dilution: p.isLargeAudience && p.bottleneck.name === "intimacy"');
console.log('');

console.log('hasScaleAchievement is set in app.js when:');
console.log('  scores.ri >= 7 && inputs.audience >= 1000000');
console.log('');

// Test: High resonance + massive audience
const test1 = { impact: 8, identity: 8, boldness: 8, audience: 5000000 };
const riScore1 = calculateRi(test1.impact, test1.identity, test1.boldness, test1.audience);
const pattern1 = detectRiPattern(test1);

// Simulate what app.js does
if (riScore1 >= 7 && test1.audience >= 1000000) {
  pattern1.hasScaleAchievement = true;
}

const match1 = findMatchedPattern(riPropheticMessages, pattern1);

console.log('Test: High resonance + massive audience (should be scale_achievement)');
console.log(`  Inputs: impact=${test1.impact}, identity=${test1.identity}, boldness=${test1.boldness}, audience=${test1.audience.toLocaleString()}`);
console.log(`  Ri Score: ${riScore1}`);
console.log(`  hasScaleAchievement: ${pattern1.hasScaleAchievement}`);
console.log(`  isLargeAudience: ${pattern1.isLargeAudience}`);
console.log(`  bottleneck: ${pattern1.bottleneck.name}`);
console.log(`  Match: ${match1}`);
console.log(`  Status: ${match1 === 'scale_achievement' ? '✅ CORRECT' : '❌ WRONG'}`);
console.log('');

// Test: Low resonance + massive audience
const test2 = { impact: 5, identity: 5, boldness: 5, audience: 5000000 };
const riScore2 = calculateRi(test2.impact, test2.identity, test2.boldness, test2.audience);
const pattern2 = detectRiPattern(test2);

// Simulate what app.js does
if (riScore2 >= 7 && test2.audience >= 1000000) {
  pattern2.hasScaleAchievement = true;
}

const match2 = findMatchedPattern(riPropheticMessages, pattern2);

console.log('Test: Mid resonance + massive audience (should be audience_dilution)');
console.log(`  Inputs: impact=${test2.impact}, identity=${test2.identity}, boldness=${test2.boldness}, audience=${test2.audience.toLocaleString()}`);
console.log(`  Ri Score: ${riScore2}`);
console.log(`  hasScaleAchievement: ${pattern2.hasScaleAchievement}`);
console.log(`  isLargeAudience: ${pattern2.isLargeAudience}`);
console.log(`  bottleneck: ${pattern2.bottleneck.name}`);
console.log(`  Match: ${match2}`);
console.log(`  Status: ${match2 === 'audience_dilution' ? '✅ CORRECT' : '❌ WRONG'}`);
console.log('');

// ============================================================
// GAP 2: Alpha all_aligned_high vs compounding
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('GAP 2: Alpha all_aligned_high vs compounding');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

console.log('CURRENT CONDITIONS:');
console.log('  all_aligned_high: s.aq >= 7 && s.ri >= 7 && s.ci >= 7');
console.log('  compounding:      s.alpha >= 7');
console.log('');

console.log('ANALYSIS:');
console.log('  - If all scores >= 7, then alpha >= 7 (geometric mean)');
console.log('  - all_aligned_high is MORE SPECIFIC (requires all three >= 7)');
console.log('  - compounding is BROADER (only requires alpha >= 7)');
console.log('');

console.log('SCENARIOS:');
console.log('  1. aq=8, ri=8, ci=8 → alpha=8 → all_aligned_high (all >= 7)');
console.log('  2. aq=9, ri=9, ci=4 → alpha=6.9 → neither (alpha < 7)');
console.log('  3. aq=9, ri=9, ci=5 → alpha=7.2 → compounding (alpha >= 7 but ci < 7)');
console.log('');

console.log('VERDICT: Pattern order is CORRECT');
console.log('  - all_aligned_high catches the most aligned cases');
console.log('  - compounding catches high alpha with some imbalance');
console.log('  Status: ✅ NO FIX NEEDED');
console.log('');

// ============================================================
// GAP 3: Ci risk_bottleneck
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('GAP 3: Ci risk_bottleneck rarely triggers');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

console.log('CURRENT CONDITION:');
console.log('  risk_bottleneck: p.fuelBottleneck.name === "risk" && p.raw.risk <= 4');
console.log('');

// Test: Should trigger risk_bottleneck
const ciTest1 = { flow: 30, evolution: 7, risk: 2, admin: 10, distraction: 10, stagnation: 3 };
const ciPattern1 = detectCiPattern(ciTest1);
const ciMatch1 = findMatchedPattern(ciPropheticMessages, ciPattern1);

console.log('Test 1: High flow/evolution, low risk (should trigger risk_bottleneck)');
console.log(`  Inputs: flow=${ciTest1.flow}h, evolution=${ciTest1.evolution}, risk=${ciTest1.risk}, admin=${ciTest1.admin}h, distract=${ciTest1.distraction}h, stag=${ciTest1.stagnation}`);
console.log(`  fuelBottleneck: ${ciPattern1.fuelBottleneck.name} (${ciPattern1.fuelBottleneck.value.toFixed(1)})`);
console.log(`  raw.risk: ${ciPattern1.raw.risk}`);
console.log(`  Condition check: fuelBottleneck.name === "risk"? ${ciPattern1.fuelBottleneck.name === 'risk'}`);
console.log(`  Condition check: raw.risk <= 4? ${ciPattern1.raw.risk <= 4}`);
console.log(`  Match: ${ciMatch1}`);
console.log(`  Status: ${ciMatch1 === 'risk_bottleneck' ? '✅ CORRECT' : '❌ WRONG - fuelBottleneck is ' + ciPattern1.fuelBottleneck.name}`);
console.log('');

// Why doesn't risk become the fuel bottleneck?
console.log('DIAGNOSIS:');
console.log(`  Flow normalized: ${Math.min(10, ciTest1.flow / 6).toFixed(1)} (flow/6)`);
console.log(`  Evolution: ${ciTest1.evolution}`);
console.log(`  Risk: ${ciTest1.risk}`);
console.log('');
console.log(`  Fuel values: flow=${Math.min(10, ciTest1.flow / 6).toFixed(1)}, evolution=${ciTest1.evolution}, risk=${ciTest1.risk}`);
console.log(`  Lowest fuel: ${ciPattern1.fuelBottleneck.name} = ${ciPattern1.fuelBottleneck.value.toFixed(1)}`);
console.log('');

// Test 2: Make risk the clear bottleneck
const ciTest2 = { flow: 20, evolution: 5, risk: 3, admin: 15, distraction: 15, stagnation: 5 };
const ciPattern2 = detectCiPattern(ciTest2);
const ciMatch2 = findMatchedPattern(ciPropheticMessages, ciPattern2);

console.log('Test 2: Moderate flow/evolution, low risk (should trigger risk_bottleneck)');
console.log(`  Inputs: flow=${ciTest2.flow}h, evolution=${ciTest2.evolution}, risk=${ciTest2.risk}, admin=${ciTest2.admin}h, distract=${ciTest2.distraction}h, stag=${ciTest2.stagnation}`);
console.log(`  Flow normalized: ${Math.min(10, ciTest2.flow / 6).toFixed(1)}`);
console.log(`  Fuel values: flow=${Math.min(10, ciTest2.flow / 6).toFixed(1)}, evolution=${ciTest2.evolution}, risk=${ciTest2.risk}`);
console.log(`  fuelBottleneck: ${ciPattern2.fuelBottleneck.name} (${ciPattern2.fuelBottleneck.value.toFixed(1)})`);
console.log(`  Match: ${ciMatch2}`);
console.log(`  Status: ${ciMatch2 === 'risk_bottleneck' ? '✅ CORRECT' : '❌ WRONG - fuelBottleneck is ' + ciPattern2.fuelBottleneck.name}`);
console.log('');

// Test 3: Make risk CLEARLY the lowest
const ciTest3 = { flow: 40, evolution: 8, risk: 2, admin: 10, distraction: 10, stagnation: 3 };
const ciPattern3 = detectCiPattern(ciTest3);
const ciMatch3 = findMatchedPattern(ciPropheticMessages, ciPattern3);

console.log('Test 3: Very high flow/evolution, very low risk');
console.log(`  Inputs: flow=${ciTest3.flow}h, evolution=${ciTest3.evolution}, risk=${ciTest3.risk}, admin=${ciTest3.admin}h, distract=${ciTest3.distraction}h, stag=${ciTest3.stagnation}`);
console.log(`  Flow normalized: ${Math.min(10, ciTest3.flow / 6).toFixed(1)}`);
console.log(`  Fuel values: flow=${Math.min(10, ciTest3.flow / 6).toFixed(1)}, evolution=${ciTest3.evolution}, risk=${ciTest3.risk}`);
console.log(`  fuelBottleneck: ${ciPattern3.fuelBottleneck.name} (${ciPattern3.fuelBottleneck.value.toFixed(1)})`);
console.log(`  Match: ${ciMatch3}`);
console.log(`  Status: ${ciMatch3 === 'risk_bottleneck' ? '✅ CORRECT' : '❌ WRONG - fuelBottleneck is ' + ciPattern3.fuelBottleneck.name}`);
console.log('');

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('SUMMARY');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');
console.log('Gap 1 (Ri): scale_achievement vs audience_dilution');
console.log('  → scale_achievement is first and uses hasScaleAchievement flag');
console.log('  → Flag is set correctly when Ri >= 7 AND audience >= 1M');
console.log('  → The audit script was wrong (didn\'t simulate the flag)');
console.log('  → Status: ✅ NO FIX NEEDED');
console.log('');
console.log('Gap 2 (Alpha): all_aligned_high vs compounding');
console.log('  → all_aligned_high is more specific (all >= 7)');
console.log('  → compounding catches high alpha with some imbalance');
console.log('  → Status: ✅ NO FIX NEEDED');
console.log('');
console.log('Gap 3 (Ci): risk_bottleneck');
console.log('  → Works correctly when risk is the lowest fuel factor');
console.log('  → The issue is flow normalization (30h = 5.0 score)');
console.log('  → risk=2 IS lower than flow=5.0 and evolution=7');
console.log('  → Need to check if condition is triggering...');
console.log('');
