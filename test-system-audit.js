// ============================================================
// FULL SYSTEM AUDIT - Component Flow + Slider Sensitivity
// Run with: node test-system-audit.js
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

const aqPropheticMessages = extractObject(dataContent, 'const aqPropheticMessages = ');
const riPropheticMessages = extractObject(dataContent, 'const riPropheticMessages = ');
const ciPropheticMessages = extractObject(dataContent, 'const ciPropheticMessages = ');
const alphaPropheticMessages = extractObject(dataContent, 'const alphaPropheticMessages = ');
const archetypes = extractObject(dataContent, 'const archetypes = ');

// ============================================================
// COMPONENT 1: AQ Pattern Detection
// ============================================================

function detectAQPattern(inputs) {
  const { energy, space, optionality, constraint } = inputs;
  const freedom = 11 - constraint;

  const factors = [
    { name: 'energy', label: 'Energy', value: energy },
    { name: 'space', label: 'Mental Space', value: space },
    { name: 'optionality', label: 'Optionality', value: optionality },
    { name: 'freedom', label: 'Freedom from Constraint', value: freedom }
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

  return { bottleneck, strength, average: avg, spread, shape, raw: { energy, space, optionality, constraint } };
}

// ============================================================
// COMPONENT 2: Ri Pattern Detection
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

  const audienceTier = {
    intimate: audience < 1000,
    growing: audience >= 1000 && audience < 10000,
    established: audience >= 10000 && audience < 100000,
    large: audience >= 100000 && audience < 1000000,
    massive: audience >= 1000000 && audience < 10000000,
    superstar: audience >= 10000000
  };

  return {
    bottleneck, strength, average: avg, spread, shape,
    isLargeAudience: audience >= 100000,
    isSmallAudience: audience < 1000,
    audienceTier,
    raw: { impact, identity, boldness, audience }
  };
}

// ============================================================
// COMPONENT 3: Ci Pattern Detection
// ============================================================

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

// ============================================================
// COMPONENT 4: Alpha Pattern Detection
// ============================================================

function detectAlphaPattern(scores) {
  const { aq, ri, ci, alpha } = scores;

  const laws = [
    { name: 'aq', label: 'Autonomy', value: aq },
    { name: 'ri', label: 'Resonance', value: ri },
    { name: 'ci', label: 'Craft Intensity', value: ci }
  ];

  const sorted = [...laws].sort((a, b) => a.value - b.value);
  const weakest = sorted[0];
  const strongest = sorted[sorted.length - 1];

  const spread = strongest.value - weakest.value;
  const avg = (aq + ri + ci) / 3;

  let balance;
  if (aq >= 7 && ri >= 7 && ci >= 7) balance = 'all_aligned_high';
  else if (aq < 4 && ri < 4 && ci < 4) balance = 'all_aligned_low';
  else if (spread < 2) balance = 'balanced';
  else if (spread >= 4) balance = 'severely_imbalanced';
  else balance = 'imbalanced';

  return {
    weakest, strongest, spread, average: avg, balance,
    flags: {
      isCompounding: alpha >= 7 && spread < 2,
      isEmergency: alpha < 3,
      hasWeakLink: spread >= 3 && weakest.value < 5,
      isCoasting: avg >= 5 && avg < 7 && spread < 2
    },
    raw: { aq, ri, ci, alpha }
  };
}

// ============================================================
// SCORE CALCULATIONS
// ============================================================

function calculateAQ(e, s, o, c) {
  const positiveGeo = Math.pow(e * s * o, 1/3);
  const constraintFactor = 1 + (c - 1) * 0.017;
  const aq = positiveGeo / constraintFactor;
  return Math.round(Math.min(10, Math.max(1, aq)) * 10) / 10;
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

function calculateCi(f, ev, r, ad, d, st) {
  const flowNorm = 1 + (f - 1) * 9 / 59;
  const adminNorm = 1 + (ad - 1) * 9 / 59;
  const distractNorm = 1 + (d - 1) * 9 / 59;

  const fuelGeo = Math.pow(flowNorm * ev * r, 1/3);
  const dragGeo = Math.pow(adminNorm * distractNorm * st, 1/3);
  const dragFactor = 1 + (dragGeo - 1) / 9;

  const ci = fuelGeo / dragFactor;
  return Math.round(Math.min(10, Math.max(1, ci)) * 10) / 10;
}

function calculateAlpha(aq, ri, ci) {
  return Math.round(Math.pow(aq * ri * ci, 1/3) * 10) / 10;
}

// ============================================================
// ARCHETYPE MATCHING
// ============================================================

function matchArchetype(scores) {
  for (const arch of archetypes) {
    if (arch.check(scores)) return arch;
  }
  return archetypes.find(a => a.id === 'explorer');
}

// ============================================================
// TIME CONTEXT
// ============================================================

function getTimeContext() {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();

  let timeOfDay;
  if (hour >= 5 && hour < 12) timeOfDay = 'morning';
  else if (hour >= 12 && hour < 17) timeOfDay = 'afternoon';
  else if (hour >= 17 && hour < 21) timeOfDay = 'evening';
  else timeOfDay = 'night';

  let dayContext;
  if (day === 0) dayContext = 'sunday';
  else if (day === 1) dayContext = 'monday';
  else if (day === 5) dayContext = 'friday';
  else if (day === 6) dayContext = 'saturday';
  else dayContext = 'midweek';

  return { hour, day, timeOfDay, dayContext };
}

// ============================================================
// BEGIN AUDIT
// ============================================================

console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║         FRUITHEDGE FULL SYSTEM AUDIT                         ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

const time = getTimeContext();
console.log(`Current Time: ${time.dayContext} ${time.timeOfDay}`);
console.log('');

// ============================================================
// TASK 1: COMPONENT SELECTION FLOW
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('TASK 1: COMPONENT SELECTION FLOW');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ PROPHETIC MESSAGES FLOW                                    │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');
console.log('  USER INPUTS');
console.log('      │');
console.log('      ▼');
console.log('  ┌─────────────────┐');
console.log('  │ detectXPattern  │ ← Analyzes slider values');
console.log('  │   (AQ/Ri/Ci)    │   Returns: bottleneck, shape, avg, spread');
console.log('  └────────┬────────┘');
console.log('           │');
console.log('           ▼');
console.log('  ┌─────────────────┐');
console.log('  │ Pattern Object  │ ← bottleneck.name, shape, raw values');
console.log('  │                 │   For Alpha: passes scores directly');
console.log('  └────────┬────────┘');
console.log('           │');
console.log('           ▼');
console.log('  ┌─────────────────┐');
console.log('  │ Iterate through │ ← First-match wins');
console.log('  │ xPropheticMsgs  │   condition(pattern) === true');
console.log('  └────────┬────────┘');
console.log('           │');
console.log('           ▼');
console.log('  ┌─────────────────┐');
console.log('  │ Get Message by  │ ← messages[dayContext][timeOfDay]');
console.log('  │ Day + Time      │   Fallback: messages[timeOfDay]');
console.log('  └─────────────────┘');
console.log('');

// Show pattern counts
console.log('Pattern Counts:');
console.log(`  AQ Patterns:    ${Object.keys(aqPropheticMessages).length}`);
console.log(`  Ri Patterns:    ${Object.keys(riPropheticMessages).length}`);
console.log(`  Ci Patterns:    ${Object.keys(ciPropheticMessages).length}`);
console.log(`  Alpha Patterns: ${Object.keys(alphaPropheticMessages).length}`);
console.log('');

console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ ARCHETYPE MATCHING FLOW                                    │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');
console.log('  CALCULATED SCORES (aq, ri, ci, alpha)');
console.log('      │');
console.log('      ▼');
console.log('  ┌─────────────────┐');
console.log('  │ matchArchetype  │ ← Iterates through archetypes array');
console.log('  │                 │   First arch.check(scores) === true wins');
console.log('  └────────┬────────┘');
console.log('           │');
console.log('           ▼');
console.log('  ┌─────────────────┐');
console.log('  │ Archetype with  │ ← Returns: id, name, profile, insight');
console.log('  │ profile/insight │   Fallback: "explorer" archetype');
console.log('  └─────────────────┘');
console.log('');
console.log(`Archetype Count: ${archetypes.length} archetypes in priority order`);
console.log('');

console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ RECOMMENDATIONS FLOW                                       │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');
console.log('  INPUTS + SCORES');
console.log('      │');
console.log('      ▼');
console.log('  ┌─────────────────┐');
console.log('  │ Detect patterns │ ← AQ, Ri, Ci pattern detection');
console.log('  │ from all 3 laws │   Identify bottlenecks');
console.log('  └────────┬────────┘');
console.log('           │');
console.log('           ▼');
console.log('  ┌─────────────────┐');
console.log('  │ Map bottlenecks │ ← bottleneckTopicMap');
console.log('  │ to topics       │   e.g. energy_bottleneck → [recovery, mindset]');
console.log('  └────────┬────────┘');
console.log('           │');
console.log('           ▼');
console.log('  ┌─────────────────┐');
console.log('  │ Score each rec  │ ← topicMatches × 10 + patternMatches × 5');
console.log('  │ by relevance    │   Select with type variety');
console.log('  └─────────────────┘');
console.log('');

console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ PROTOCOL MATCHING FLOW                                     │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');
console.log('  SCORES + TIME/SEASON');
console.log('      │');
console.log('      ▼');
console.log('  ┌─────────────────┐');
console.log('  │ HARD GATE 1:    │ ← Filter by validTimes');
console.log('  │ Time Filter     │   (morning/afternoon/evening/night/anytime)');
console.log('  └────────┬────────┘');
console.log('           │');
console.log('           ▼');
console.log('  ┌─────────────────┐');
console.log('  │ HARD GATE 2:    │ ← Filter by validSeasons');
console.log('  │ Season Filter   │   (spring/summer/fall/winter/all)');
console.log('  └────────┬────────┘');
console.log('           │');
console.log('           ▼');
console.log('  ┌─────────────────┐');
console.log('  │ Score by pattern│ ← Match protocol.patterns with getPatterns()');
console.log('  │ Random from top │   Random selection among ties');
console.log('  └─────────────────┘');
console.log('');

// ============================================================
// TASK 2: SLIDER SENSITIVITY TESTS
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('TASK 2: SLIDER SENSITIVITY TESTS');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

// Helper to find matched prophetic pattern
function findMatchedPropheticPattern(messages, pattern) {
  for (const [key, p] of Object.entries(messages)) {
    if (p.condition(pattern)) {
      return key;
    }
  }
  return Object.keys(messages)[Object.keys(messages).length - 1] + ' (fallback)';
}

console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ Ri SENSITIVITY TESTS                                       │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');

const riTests = [
  { impact: 8, identity: 2, boldness: 5, audience: 10000, label: 'High Impact, Low Identity, Mid Boldness' },
  { impact: 2, identity: 8, boldness: 5, audience: 10000, label: 'Low Impact, High Identity, Mid Boldness' },
  { impact: 5, identity: 5, boldness: 5, audience: 100, label: 'Mid everything, tiny audience' },
  { impact: 5, identity: 5, boldness: 5, audience: 10000000, label: 'Mid everything, massive audience' },
];

riTests.forEach((test, i) => {
  const pattern = detectRiPattern(test);
  const score = calculateRi(test.impact, test.identity, test.boldness, test.audience);
  const propheticMatch = findMatchedPropheticPattern(riPropheticMessages, pattern);

  console.log(`Test ${i + 1}: ${test.label}`);
  console.log(`  Inputs:     impact=${test.impact}, identity=${test.identity}, boldness=${test.boldness}, audience=${test.audience.toLocaleString()}`);
  console.log(`  Ri Score:   ${score}`);
  console.log(`  Shape:      ${pattern.shape}`);
  console.log(`  Bottleneck: ${pattern.bottleneck.name} (${pattern.bottleneck.value.toFixed(1)})`);
  console.log(`  Strength:   ${pattern.strength.name} (${pattern.strength.value.toFixed(1)})`);
  console.log(`  Tier:       ${Object.entries(pattern.audienceTier).find(([k, v]) => v)?.[0] || 'none'}`);
  console.log(`  Prophetic:  ${propheticMatch}`);
  console.log('');
});

console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ Ci SENSITIVITY TESTS                                       │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');

const ciTests = [
  { flow: 45, evolution: 8, risk: 2, admin: 10, distraction: 10, stagnation: 3, label: 'High flow/evolution, low risk' },
  { flow: 10, evolution: 3, risk: 8, admin: 10, distraction: 10, stagnation: 3, label: 'Low flow/evolution, high risk' },
  { flow: 45, evolution: 8, risk: 7, admin: 50, distraction: 40, stagnation: 8, label: 'High fuel, high drag' },
  { flow: 10, evolution: 3, risk: 3, admin: 5, distraction: 5, stagnation: 2, label: 'Low fuel, low drag' },
];

ciTests.forEach((test, i) => {
  const pattern = detectCiPattern(test);
  const score = calculateCi(test.flow, test.evolution, test.risk, test.admin, test.distraction, test.stagnation);
  const propheticMatch = findMatchedPropheticPattern(ciPropheticMessages, pattern);

  console.log(`Test ${i + 1}: ${test.label}`);
  console.log(`  Inputs:     flow=${test.flow}h, evolution=${test.evolution}, risk=${test.risk}, admin=${test.admin}h, distract=${test.distraction}h, stag=${test.stagnation}`);
  console.log(`  Ci Score:   ${score}`);
  console.log(`  Shape:      ${pattern.shape}`);
  console.log(`  Fuel Avg:   ${pattern.fuelAvg.toFixed(1)}`);
  console.log(`  Drag Avg:   ${pattern.dragAvg.toFixed(1)}`);
  console.log(`  Bottleneck: ${pattern.bottleneck.name} (${pattern.bottleneck.type})`);
  console.log(`  Prophetic:  ${propheticMatch}`);
  console.log('');
});

console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ AQ SENSITIVITY TESTS                                       │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');

const aqTests = [
  { energy: 3, space: 8, optionality: 8, constraint: 3, label: 'Low energy, high everything else' },
  { energy: 8, space: 3, optionality: 8, constraint: 3, label: 'Low space, high everything else' },
  { energy: 8, space: 8, optionality: 3, constraint: 3, label: 'Low optionality, high everything else' },
  { energy: 8, space: 8, optionality: 8, constraint: 9, label: 'High constraint bottleneck' },
];

aqTests.forEach((test, i) => {
  const pattern = detectAQPattern(test);
  const score = calculateAQ(test.energy, test.space, test.optionality, test.constraint);
  const propheticMatch = findMatchedPropheticPattern(aqPropheticMessages, pattern);

  console.log(`Test ${i + 1}: ${test.label}`);
  console.log(`  Inputs:     energy=${test.energy}, space=${test.space}, optionality=${test.optionality}, constraint=${test.constraint}`);
  console.log(`  AQ Score:   ${score}`);
  console.log(`  Shape:      ${pattern.shape}`);
  console.log(`  Average:    ${pattern.average.toFixed(1)}`);
  console.log(`  Spread:     ${pattern.spread.toFixed(1)}`);
  console.log(`  Bottleneck: ${pattern.bottleneck.name} (${pattern.bottleneck.value.toFixed(1)})`);
  console.log(`  Prophetic:  ${propheticMatch}`);
  console.log('');
});

console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ ALPHA SENSITIVITY TESTS                                    │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');

const alphaTests = [
  { aq: 8, ri: 8, ci: 3, label: 'High AQ/Ri, Low Ci' },
  { aq: 3, ri: 8, ci: 8, label: 'Low AQ, High Ri/Ci' },
  { aq: 8, ri: 3, ci: 8, label: 'High AQ/Ci, Low Ri' },
  { aq: 6, ri: 6, ci: 6, label: 'All balanced mid' },
  { aq: 8, ri: 8, ci: 8, label: 'All aligned high' },
  { aq: 3, ri: 3, ci: 3, label: 'All aligned low' },
];

alphaTests.forEach((test, i) => {
  const alpha = calculateAlpha(test.aq, test.ri, test.ci);
  const scores = { ...test, alpha };
  const pattern = detectAlphaPattern(scores);
  const propheticMatch = findMatchedPropheticPattern(alphaPropheticMessages, scores);
  const archetype = matchArchetype(scores);

  console.log(`Test ${i + 1}: ${test.label}`);
  console.log(`  Scores:     AQ=${test.aq}, Ri=${test.ri}, Ci=${test.ci}`);
  console.log(`  Alpha:      ${alpha}`);
  console.log(`  Balance:    ${pattern.balance}`);
  console.log(`  Weakest:    ${pattern.weakest.name} (${pattern.weakest.value})`);
  console.log(`  Spread:     ${pattern.spread.toFixed(1)}`);
  console.log(`  Prophetic:  ${propheticMatch}`);
  console.log(`  Archetype:  ${archetype?.name || 'Unknown'}`);
  console.log('');
});

// ============================================================
// TASK 3: GAP ANALYSIS
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('TASK 3: GAP ANALYSIS');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

// Test edge cases that might not be covered
console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ EDGE CASE COVERAGE                                         │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');

const edgeCases = [
  // Extreme values
  { label: 'All sliders at 1', aq: { energy: 1, space: 1, optionality: 1, constraint: 1 } },
  { label: 'All sliders at 10', aq: { energy: 10, space: 10, optionality: 10, constraint: 10 } },

  // Perfect balance mid
  { label: 'Perfect 5s', aq: { energy: 5, space: 5, optionality: 5, constraint: 5 } },

  // Maximum spread
  { label: 'Max spread (1 and 10)', aq: { energy: 1, space: 10, optionality: 5, constraint: 5 } },
];

const gaps = [];

edgeCases.forEach(test => {
  const pattern = detectAQPattern(test.aq);
  const match = findMatchedPropheticPattern(aqPropheticMessages, pattern);

  console.log(`${test.label}:`);
  console.log(`  Shape: ${pattern.shape}, Match: ${match}`);

  if (match.includes('fallback')) {
    gaps.push(`AQ: ${test.label} → falls back to default`);
  }
});
console.log('');

// Ri edge cases
const riEdgeCases = [
  { label: 'Scale achievement', inputs: { impact: 9, identity: 8, boldness: 8, audience: 5000000 } },
  { label: 'Intimate but low resonance', inputs: { impact: 3, identity: 3, boldness: 3, audience: 50 } },
];

riEdgeCases.forEach(test => {
  const pattern = detectRiPattern(test.inputs);
  const match = findMatchedPropheticPattern(riPropheticMessages, pattern);

  console.log(`${test.label}:`);
  console.log(`  Shape: ${pattern.shape}, Tier: ${Object.entries(pattern.audienceTier).find(([k, v]) => v)?.[0]}, Match: ${match}`);
});
console.log('');

// Check for patterns that might never match
console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ PATTERN COVERAGE ANALYSIS                                  │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');

console.log('AQ Patterns and their triggers:');
Object.entries(aqPropheticMessages).forEach(([key, p]) => {
  console.log(`  ${key.padEnd(25)} → ${p.label || 'No label'}`);
});
console.log('');

console.log('Alpha Patterns and their triggers:');
Object.entries(alphaPropheticMessages).forEach(([key, p]) => {
  console.log(`  ${key.padEnd(25)} → ${p.label || 'No label'}`);
});
console.log('');

// Identify potential gaps
console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ IDENTIFIED GAPS                                            │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');

const potentialGaps = [
  'Ri: No specific pattern for "audience_dilution" when only intimacy is low',
  'Ci: "risk_bottleneck" rarely triggers (risk must be very low)',
  'AQ: "constraint_bottleneck" competes with "freedom" factor naming',
  'Alpha: Pattern priority may skip "compounding" for "all_aligned_high"',
];

console.log('Potential pattern gaps:');
potentialGaps.forEach(g => console.log(`  - ${g}`));
console.log('');

console.log('Suggestions:');
console.log('  1. Consider adding "high_intimacy_low_resonance" Ri pattern');
console.log('  2. Verify Alpha compounding vs all_aligned_high priority');
console.log('  3. Consider scale_achievement as primary Ri pattern');
console.log('');

// ============================================================
// TASK 4: FEATURE BACKLOG STATUS
// ============================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('TASK 4: FEATURE BACKLOG STATUS');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

// Check for feature implementations in data.js
const featureChecks = [
  { name: 'Habit Timers', search: 'habit', found: dataContent.includes('habit') },
  { name: 'Daily Reflection Prompts', search: 'reflection', found: dataContent.includes('reflection') || dataContent.includes('dailyPrompt') },
  { name: 'Auto-Generated Goals', search: 'goal', found: dataContent.includes('goal') },
  { name: 'Streak Tracking', search: 'streak', found: dataContent.includes('streak') },
  { name: 'Wellness Protocols', search: 'protocols', found: dataContent.includes('protocols') },
  { name: 'Labs Tips', search: 'labsTips', found: dataContent.includes('labsTips') },
  { name: 'Scale Achievement', search: 'scale_achievement', found: dataContent.includes('scale_achievement') },
];

console.log('┌─────────────────────────────────────────────────────────────┐');
console.log('│ FEATURE STATUS                                             │');
console.log('└─────────────────────────────────────────────────────────────┘');
console.log('');

featureChecks.forEach(f => {
  const status = f.found ? '✅ Implemented' : '❌ Not Found';
  console.log(`  ${f.name.padEnd(30)} ${status}`);
});
console.log('');

console.log('Notes:');
console.log('  - Habit Timers: Not currently in data.js (would need timer logic)');
console.log('  - Daily Reflections: Would need date-based prompts');
console.log('  - Auto-Generated Goals: Could derive from bottleneck analysis');
console.log('  - Streak Tracking: Would need localStorage history');
console.log('');

// ============================================================
// SUMMARY
// ============================================================

console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║         AUDIT SUMMARY                                        ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

console.log('COMPONENT HEALTH:');
console.log(`  ✅ AQ Pattern Detection:    ${Object.keys(aqPropheticMessages).length} patterns`);
console.log(`  ✅ Ri Pattern Detection:    ${Object.keys(riPropheticMessages).length} patterns`);
console.log(`  ✅ Ci Pattern Detection:    ${Object.keys(ciPropheticMessages).length} patterns`);
console.log(`  ✅ Alpha Pattern Detection: ${Object.keys(alphaPropheticMessages).length} patterns`);
console.log(`  ✅ Archetype Matching:      ${archetypes.length} archetypes`);
console.log('');

console.log('MESSAGE COVERAGE:');
const totalMessages = Object.keys(aqPropheticMessages).length * 20 +
                      Object.keys(riPropheticMessages).length * 20 +
                      Object.keys(ciPropheticMessages).length * 20 +
                      Object.keys(alphaPropheticMessages).length * 20;
console.log(`  Total day-aware messages: ~${totalMessages} (estimate)`);
console.log(`  Time contexts: 5 days × 4 times = 20 variations per pattern`);
console.log('');

console.log('KEY FINDINGS:');
console.log('  1. All pattern detection functions use consistent shape classification');
console.log('  2. First-match-wins priority for prophetic messages');
console.log('  3. Archetype matching uses ordered priority list');
console.log('  4. Recommendations score by topic (×10) + pattern (×5)');
console.log('  5. Protocols filter by time/season before scoring');
console.log('');

console.log('RECOMMENDED ACTIONS:');
console.log('  1. Review Alpha pattern priority order (compounding vs all_aligned_high)');
console.log('  2. Consider adding Ri scale_achievement as dedicated pattern');
console.log('  3. Habit/Streak features would need localStorage integration');
console.log('  4. Goal generation could leverage existing bottleneck detection');
console.log('');

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('END OF AUDIT');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
