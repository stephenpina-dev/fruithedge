// ============================================================
// PROPHETIC ENGINE DEBUG DIAGNOSTIC
// Run with: node test-prophetic-debug.js
// ============================================================

const fs = require('fs');

// Load data.js
const dataContent = fs.readFileSync('/Users/fruithedge/fruithedge-portal/data.js', 'utf8');

// Extract message objects
function extractObject(content, startMarker) {
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return null;

  // Find matching closing brace
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
      } else if (char === '{') {
        braceCount++;
      } else if (char === '}') {
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

// ============================================================
// FORMULA CALCULATIONS (from data.js)
// ============================================================

function calculateAQ(e, s, o, c) {
  const positiveGeo = Math.pow(e * s * o, 1/3);
  const constraintFactor = 1 + (c - 1) * 0.017;
  const aq = positiveGeo / constraintFactor;
  return Math.round(Math.min(10, Math.max(1, aq)) * 10) / 10;
}

function calculateRi(i, id, b, a) {
  let intimacy;
  if (a <= 100) intimacy = 10;
  else if (a >= 10000000) intimacy = 1;
  else intimacy = Math.max(1, Math.min(10, 10 - (Math.log10(a) - 2) * 1.5));

  const qualityGeo = Math.pow(i * id * b, 1/3);
  const scaleFactor = Math.pow(intimacy, 0.3);
  const ri = qualityGeo * scaleFactor / Math.pow(10, 0.3);
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
// PATTERN DETECTION (from app.js)
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

  return {
    bottleneck,
    strength,
    average: avg,
    spread,
    shape,
    raw: { energy, space, optionality, constraint }
  };
}

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
    bottleneck,
    strength,
    average: avg,
    spread,
    shape,
    isLargeAudience: audience >= 100000,
    isSmallAudience: audience < 1000,
    audienceTier,
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
    fuelBottleneck,
    fuelStrength,
    worstDrag,
    fuelAvg,
    dragAvg,
    combinedAvg,
    shape,
    raw: { flow, evolution, risk, admin, distraction, stagnation }
  };
}

function detectAlphaPattern(scores, history = null) {
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

  let trend = null;
  if (history && typeof history.lastAlpha === 'number') {
    const diff = alpha - history.lastAlpha;
    if (diff > 0.5) trend = 'rising';
    else if (diff < -0.5) trend = 'falling';
    else trend = 'stable';
  }

  const flags = {
    isCompounding: alpha >= 7 && spread < 2,
    isEmergency: alpha < 3,
    hasWeakLink: spread >= 3 && weakest.value < 5,
    isCoasting: avg >= 5 && avg < 7 && spread < 2
  };

  return {
    weakest,
    strongest,
    spread,
    average: avg,
    balance,
    trend,
    flags,
    raw: { aq, ri, ci, alpha }
  };
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
// DIAGNOSTIC FUNCTIONS
// ============================================================

function findMatchingPattern(messages, pattern) {
  for (const [key, p] of Object.entries(messages)) {
    try {
      if (p.condition(pattern)) {
        return { key, ...p };
      }
    } catch (e) {
      // Skip patterns with errors
    }
  }
  return null;
}

function getMessage(matchedPattern, time) {
  if (!matchedPattern) return null;

  if (matchedPattern.messages[time.dayContext]) {
    return matchedPattern.messages[time.dayContext][time.timeOfDay]
      || matchedPattern.messages[time.dayContext].morning
      || matchedPattern.messages.midweek[time.timeOfDay]
      || matchedPattern.messages.midweek.morning;
  } else {
    return matchedPattern.messages[time.timeOfDay] || matchedPattern.messages.morning;
  }
}

// ============================================================
// TESTS
// ============================================================

console.log('============================================================');
console.log('PROPHETIC ENGINE DEBUG DIAGNOSTIC');
console.log('============================================================\n');

const time = getTimeContext();
console.log('Current Time Context:', time);
console.log('');

// ============================================================
// TEST 1: DEFAULT SLIDER VALUES
// ============================================================

console.log('============================================================');
console.log('TEST 1: DEFAULT SLIDER VALUES (all 5s, audience 10K)');
console.log('============================================================\n');

const defaultInputs = {
  energy: 5, space: 5, optionality: 5, constraint: 5,
  impact: 5, identity: 5, boldness: 5, audience: 10000,
  flow: 30, evolution: 5, risk: 5, admin: 15, distraction: 15, stagnation: 5
};

const defaultScores = {
  aq: calculateAQ(5, 5, 5, 5),
  ri: calculateRi(5, 5, 5, 10000),
  ci: calculateCi(30, 5, 5, 15, 15, 5),
  alpha: 0
};
defaultScores.alpha = calculateAlpha(defaultScores.aq, defaultScores.ri, defaultScores.ci);

console.log('SCORES:', defaultScores);
console.log('');

// AQ Pattern
const aqPattern = detectAQPattern(defaultInputs);
const aqMatched = findMatchingPattern(aqPropheticMessages, aqPattern);
console.log('AQ PATTERN:');
console.log('  - Detected pattern:', aqPattern.shape);
console.log('  - Bottleneck:', aqPattern.bottleneck.name, '=', aqPattern.bottleneck.value);
console.log('  - Strength:', aqPattern.strength.name, '=', aqPattern.strength.value);
console.log('  - Matched key:', aqMatched?.key || 'NONE (fallback)');
console.log('  - Label:', aqMatched?.label);
const aqMsg = getMessage(aqMatched, time);
console.log('  - Message length:', aqMsg?.length || 0);
console.log('');

// Ri Pattern
const riPattern = detectRiPattern(defaultInputs);
const riMatched = findMatchingPattern(riPropheticMessages, riPattern);
console.log('Ri PATTERN:');
console.log('  - Detected pattern:', riPattern.shape);
console.log('  - Bottleneck:', riPattern.bottleneck.name, '=', riPattern.bottleneck.value);
console.log('  - Strength:', riPattern.strength.name, '=', riPattern.strength.value);
console.log('  - Matched key:', riMatched?.key || 'NONE (fallback)');
console.log('  - Label:', riMatched?.label);
const riMsg = getMessage(riMatched, time);
console.log('  - Message length:', riMsg?.length || 0);
console.log('');

// Ci Pattern
const ciPattern = detectCiPattern(defaultInputs);
const ciMatched = findMatchingPattern(ciPropheticMessages, ciPattern);
console.log('Ci PATTERN:');
console.log('  - Detected pattern:', ciPattern.shape);
console.log('  - Fuel bottleneck:', ciPattern.fuelBottleneck.name, '=', ciPattern.fuelBottleneck.value);
console.log('  - Worst drag:', ciPattern.worstDrag.name, '=', ciPattern.worstDrag.value);
console.log('  - Fuel avg:', ciPattern.fuelAvg.toFixed(2), '| Drag avg:', ciPattern.dragAvg.toFixed(2));
console.log('  - Matched key:', ciMatched?.key || 'NONE (fallback)');
console.log('  - Label:', ciMatched?.label);
const ciMsg = getMessage(ciMatched, time);
console.log('  - Message length:', ciMsg?.length || 0);
console.log('');

// Alpha Pattern - THIS IS WHERE THE BUG IS
const alphaPattern = detectAlphaPattern(defaultScores);
console.log('ALPHA PATTERN:');
console.log('  - Detected balance:', alphaPattern.balance);
console.log('  - Weakest:', alphaPattern.weakest.name, '=', alphaPattern.weakest.value);
console.log('  - Strongest:', alphaPattern.strongest.name, '=', alphaPattern.strongest.value);
console.log('  - Spread:', alphaPattern.spread);
console.log('  - Flags:', JSON.stringify(alphaPattern.flags));
console.log('');

console.log('  ⚠️  CRITICAL BUG ANALYSIS:');
console.log('  The Alpha conditions in data.js use: s.aq, s.ri, s.ci');
console.log('  But detectAlphaPattern returns: s.raw.aq, s.raw.ri, s.raw.ci');
console.log('  Pattern object has:', Object.keys(alphaPattern).join(', '));
console.log('  Does pattern.aq exist?', alphaPattern.aq !== undefined ? 'YES' : 'NO ❌');
console.log('  Does pattern.raw.aq exist?', alphaPattern.raw?.aq !== undefined ? 'YES ✅' : 'NO');
console.log('');

// Test what the conditions actually see
console.log('  What conditions see when checking:');
console.log('    s.aq:', alphaPattern.aq, '(undefined = always falsy!)');
console.log('    s.ri:', alphaPattern.ri, '(undefined = always falsy!)');
console.log('    s.ci:', alphaPattern.ci, '(undefined = always falsy!)');
console.log('    s.raw.aq:', alphaPattern.raw.aq);
console.log('    s.raw.ri:', alphaPattern.raw.ri);
console.log('    s.raw.ci:', alphaPattern.raw.ci);
console.log('');

// Manually test conditions
console.log('  Testing Alpha conditions manually:');
const alphaConditions = [
  { key: 'freedom_bottleneck', cond: (s) => s.aq < s.ri && s.aq < s.ci && s.aq < 5 },
  { key: 'connection_bottleneck', cond: (s) => s.ri < s.aq && s.ri < s.ci && s.ri < 5 },
  { key: 'output_bottleneck', cond: (s) => s.ci < s.aq && s.ci < s.ri && s.ci < 5 },
  { key: 'all_aligned_high', cond: (s) => s.aq >= 7 && s.ri >= 7 && s.ci >= 7 },
  { key: 'all_aligned_low', cond: (s) => s.aq < 4 && s.ri < 4 && s.ci < 4 },
  { key: 'severe_imbalance', cond: (s) => Math.max(s.aq, s.ri, s.ci) - Math.min(s.aq, s.ri, s.ci) > 4 },
  { key: 'balanced', cond: (s) => Math.max(s.aq, s.ri, s.ci) - Math.min(s.aq, s.ri, s.ci) <= 1.5 && s.alpha >= 5 }
];

alphaConditions.forEach(({ key, cond }) => {
  const resultWithPattern = cond(alphaPattern);
  const resultWithScores = cond(defaultScores);
  console.log(`    ${key}:`);
  console.log(`      - with pattern object (current): ${resultWithPattern}`);
  console.log(`      - with scores directly (correct): ${resultWithScores}`);
});

const alphaMatched = findMatchingPattern(alphaPropheticMessages, alphaPattern);
console.log('');
console.log('  ACTUAL RESULT:');
console.log('  - Matched key:', alphaMatched?.key || 'NONE (fallback to last = balanced)');
console.log('  - Label:', alphaMatched?.label);

// ============================================================
// TEST 2: LOW CI SCENARIO
// ============================================================

console.log('\n============================================================');
console.log('TEST 2: LOW CI SCENARIO (should show output_bottleneck)');
console.log('============================================================\n');

const lowCiInputs = {
  energy: 7, space: 7, optionality: 7, constraint: 3,
  impact: 7, identity: 7, boldness: 7, audience: 10000,
  flow: 10, evolution: 3, risk: 3, admin: 30, distraction: 30, stagnation: 7
};

const lowCiScores = {
  aq: calculateAQ(7, 7, 7, 3),
  ri: calculateRi(7, 7, 7, 10000),
  ci: calculateCi(10, 3, 3, 30, 30, 7),
  alpha: 0
};
lowCiScores.alpha = calculateAlpha(lowCiScores.aq, lowCiScores.ri, lowCiScores.ci);

console.log('SCORES:', lowCiScores);
console.log('');

const lowCiAlphaPattern = detectAlphaPattern(lowCiScores);
console.log('ALPHA PATTERN (Low Ci):');
console.log('  - Weakest:', lowCiAlphaPattern.weakest.name, '=', lowCiAlphaPattern.weakest.value);
console.log('  - Balance:', lowCiAlphaPattern.balance);
console.log('');

console.log('  Expected: output_bottleneck (Ci is weakest and < 5)');
console.log('  Checking output_bottleneck condition:');
console.log('    s.ci < s.aq:', lowCiScores.ci, '<', lowCiScores.aq, '=', lowCiScores.ci < lowCiScores.aq);
console.log('    s.ci < s.ri:', lowCiScores.ci, '<', lowCiScores.ri, '=', lowCiScores.ci < lowCiScores.ri);
console.log('    s.ci < 5:', lowCiScores.ci, '< 5 =', lowCiScores.ci < 5);
console.log('    All conditions met:', lowCiScores.ci < lowCiScores.aq && lowCiScores.ci < lowCiScores.ri && lowCiScores.ci < 5);
console.log('');

const lowCiAlphaMatched = findMatchingPattern(alphaPropheticMessages, lowCiAlphaPattern);
console.log('  ACTUAL RESULT:');
console.log('  - Matched key:', lowCiAlphaMatched?.key || 'NONE (fallback)');
console.log('  - Label:', lowCiAlphaMatched?.label);
console.log('  - BUG CONFIRMED:', lowCiAlphaMatched?.key !== 'output_bottleneck' ? '❌ YES - wrong pattern detected!' : '✅ NO - correct pattern');

// ============================================================
// TEST 3: ALPHA PATTERN ORDER
// ============================================================

console.log('\n============================================================');
console.log('TEST 3: ALPHA PATTERN ORDER (first match wins)');
console.log('============================================================\n');

console.log('Current order in alphaPropheticMessages:');
let idx = 1;
for (const [key, p] of Object.entries(alphaPropheticMessages)) {
  console.log(`  ${idx}. ${key}`);
  console.log(`      Label: ${p.label}`);
  console.log(`      Condition: ${p.condition.toString().substring(0, 80)}...`);
  console.log('');
  idx++;
}

// ============================================================
// TEST 4: MESSAGE LENGTH CHECK
// ============================================================

console.log('============================================================');
console.log('TEST 4: MESSAGE LENGTH CHECK (flag < 200 chars)');
console.log('============================================================\n');

const allMessages = [
  { name: 'AQ', messages: aqPropheticMessages },
  { name: 'Ri', messages: riPropheticMessages },
  { name: 'Ci', messages: ciPropheticMessages },
  { name: 'Alpha', messages: alphaPropheticMessages }
];

let shortMessages = [];

allMessages.forEach(({ name, messages }) => {
  console.log(`${name} PATTERNS:`);
  for (const [key, p] of Object.entries(messages)) {
    const msg = getMessage({ ...p, key }, time);
    const len = msg?.length || 0;
    const flag = len < 200 ? ' ⚠️  SHORT!' : '';
    console.log(`  ${key}: ${len} chars${flag}`);
    if (len < 200) {
      shortMessages.push({ law: name, key, length: len, preview: msg?.substring(0, 50) + '...' });
    }
  }
  console.log('');
});

if (shortMessages.length > 0) {
  console.log('⚠️  SHORT MESSAGES FOUND:');
  shortMessages.forEach(m => {
    console.log(`  ${m.law}.${m.key}: ${m.length} chars`);
    console.log(`    "${m.preview}"`);
  });
}

// ============================================================
// DIAGNOSTIC REPORT
// ============================================================

console.log('\n============================================================');
console.log('DIAGNOSTIC REPORT');
console.log('============================================================\n');

console.log('🔴 CRITICAL BUG FOUND:');
console.log('');
console.log('The Alpha pattern conditions use s.aq, s.ri, s.ci directly,');
console.log('but generatePropheticMessage passes detectAlphaPattern() result');
console.log('which stores scores in s.raw.aq, s.raw.ri, s.raw.ci');
console.log('');
console.log('This means:');
console.log('  - All Alpha conditions see undefined for aq, ri, ci');
console.log('  - No conditions ever match (all evaluate to false)');
console.log('  - System falls back to LAST pattern (balanced)');
console.log('');
console.log('RECOMMENDED FIX (choose one):');
console.log('');
console.log('Option 1: Update app.js generatePropheticMessage()');
console.log('  Change line 1218 from:');
console.log('    pattern = detectAlphaPattern(scores, history);');
console.log('  To:');
console.log('    pattern = scores; // Pass scores directly to Alpha conditions');
console.log('');
console.log('Option 2: Update all Alpha conditions in data.js');
console.log('  Change from: (s) => s.aq < s.ri...');
console.log('  To: (s) => s.raw.aq < s.raw.ri...');
console.log('');
console.log('Option 1 is simpler and maintains consistency.');
console.log('');
console.log('============================================================');
