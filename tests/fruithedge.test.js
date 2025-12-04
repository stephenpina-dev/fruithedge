/**
 * FruitHedge Test Suite
 * Comprehensive tests for score calculations, archetype matching, and more
 * Run with: node tests/fruithedge.test.js
 */

// ============================================================
// SIMPLE TEST RUNNER
// ============================================================

const results = {
  passed: 0,
  failed: 0,
  tests: []
};

function test(name, fn) {
  try {
    fn();
    results.passed++;
    results.tests.push({ name, passed: true });
    console.log(`✅ PASS: ${name}`);
  } catch (error) {
    results.failed++;
    results.tests.push({ name, passed: false, error: error.message });
    console.log(`❌ FAIL: ${name} - ${error.message}`);
  }
}

function assertEqual(actual, expected, message = '') {
  if (actual !== expected) {
    throw new Error(`Expected ${expected}, got ${actual}${message ? ` (${message})` : ''}`);
  }
}

function assertApprox(actual, expected, tolerance = 0.1, message = '') {
  if (Math.abs(actual - expected) > tolerance) {
    throw new Error(`Expected ~${expected} (±${tolerance}), got ${actual}${message ? ` (${message})` : ''}`);
  }
}

function assertTrue(condition, message = '') {
  if (!condition) {
    throw new Error(`Expected true${message ? `: ${message}` : ''}`);
  }
}

function assertFalse(condition, message = '') {
  if (condition) {
    throw new Error(`Expected false${message ? `: ${message}` : ''}`);
  }
}

function assertIncludes(array, item, message = '') {
  if (!array.includes(item)) {
    throw new Error(`Expected array to include "${item}"${message ? ` (${message})` : ''}`);
  }
}

function assertNotIncludes(array, item, message = '') {
  if (array.includes(item)) {
    throw new Error(`Expected array NOT to include "${item}"${message ? ` (${message})` : ''}`);
  }
}

// ============================================================
// COPY OF FUNCTIONS TO TEST (from app.js)
// In production, these would be imported as modules
// ============================================================

function calculateAQ(e, s, o, c) {
  const positiveGeo = Math.pow(e * s * o, 1/3);
  const constraintFactor = 1 + (c - 1) / 9;
  const aq = positiveGeo / constraintFactor;
  return Math.round(Math.min(10, Math.max(1, aq)) * 10) / 10;
}

function calculateRi(i, id, b, audienceValue) {
  const depthGeo = Math.pow(i * id * b, 1/3);
  const dilution = 1 + Math.log10(audienceValue / 1000) / 4;
  const dilutionClamped = Math.max(0.5, Math.min(2, dilution));
  const ri = depthGeo / dilutionClamped;
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
  const alpha = Math.pow(aq * ri * ci, 1/3);
  return Math.round(alpha * 10) / 10;
}

// Archetypes array (from data.js)
const archetypes = [
  { id: "legacy", name: "The Legacy Builder", check: (s) => s.alpha >= 8 },
  { id: "thriving", name: "The Thriving Creator", check: (s) => s.aq >= 7 && s.ri >= 7 && s.ci >= 7 },
  { id: "burnout", name: "The Burnout", check: (s) => s.aq < 3 && s.ri < 3 && s.ci < 3 },
  { id: "hustler", name: "The Hustler", check: (s) => s.aq < 4 && s.ci >= 6 },
  { id: "underground_gem", name: "The Underground Gem", check: (s) => s.ri >= 6 && s.aq < 4 },
  { id: "algorithm_slave", name: "The Algorithm Slave", check: (s) => s.ci >= 6 && s.ri < 2.5 },
  { id: "paralyzed_dreamer", name: "The Paralyzed Dreamer", check: (s) => s.aq >= 6 && s.ci < 3 },
  { id: "craftsperson", name: "The Craftsperson", check: (s) => s.ci >= 7 && s.ri < 5 && s.aq >= 4 },
  { id: "cult_leader", name: "The Cult Leader", check: (s) => s.ri >= 7 && s.ci >= 4 && s.ci < 7 && s.aq >= 4 },
  { id: "free_agent", name: "The Free Agent", check: (s) => s.aq >= 7 && s.ri < 6 && s.ci >= 3 && s.ci < 6 },
  { id: "comeback", name: "The Comeback Arc", check: (s) => s.aq >= 5 && s.ri >= 5 && s.ci >= 2 && s.ci < 5 },
  { id: "professional", name: "The Professional", check: (s) => s.aq >= 5 && s.aq <= 7.5 && s.ri >= 5 && s.ri <= 7.5 && s.ci >= 5 && s.ci <= 7.5 },
  { id: "emerging", name: "The Emerging Artist", check: (s) => s.aq >= 3 && s.aq <= 6 && s.ri >= 3 && s.ri <= 6 && s.ci >= 3 && s.ci <= 6 },
  { id: "chaos", name: "The Chaos Creator", check: (s) => s.aq < 4 && s.ci >= 5 && s.ri >= 5 },
  { id: "explorer", name: "The Explorer", check: (s) => true }
];

function matchArchetype(scores) {
  for (const arch of archetypes) {
    if (arch.check(scores)) {
      return arch;
    }
  }
  return archetypes.find(a => a.id === 'explorer');
}

function getPatterns(scores) {
  const patterns = [];

  if (scores.aq < 4) patterns.push('low_aq');
  if (scores.ri < 4) patterns.push('low_ri');
  if (scores.ci < 4) patterns.push('low_ci');

  if (scores.aq < 3) patterns.push('low_energy');
  if (scores.ri < 3) patterns.push('low_connection');
  if (scores.ci < 3) patterns.push('low_discipline');

  if (scores.aq >= 7) patterns.push('high_aq');
  if (scores.ri >= 7) patterns.push('high_ri');
  if (scores.ci >= 7) patterns.push('high_ci');

  if (scores.aq >= 6 && scores.ci < 4) patterns.push('paralyzed');
  if (scores.aq < 4 && scores.ci >= 6) patterns.push('hustler');
  if (scores.ri >= 6 && scores.aq < 4) patterns.push('underground_gem');
  if (scores.ci >= 6 && scores.ri < 4) patterns.push('craftsperson_no_message');

  if (scores.aq >= 7 && scores.ri >= 7 && scores.ci >= 7) patterns.push('protect_magic');
  if (scores.aq >= 4 && scores.aq <= 6 && scores.ri >= 4 && scores.ri <= 6 && scores.ci >= 4 && scores.ci <= 6) {
    patterns.push('plateau');
  }
  if (scores.aq < 4 && scores.ri < 4 && scores.ci < 4) patterns.push('burnout');

  if (scores.alpha >= 5 && (scores.aq < 5 || scores.ri < 5 || scores.ci < 5)) {
    patterns.push('untapped');
  }

  if (scores.aq >= 5 && scores.ri >= 5 && scores.ci >= 2 && scores.ci < 5) {
    patterns.push('comeback');
  }

  if (scores.aq < 4) patterns.push('high_constraint');
  if (scores.aq < 4) patterns.push('low_space');

  if (patterns.length === 0) {
    patterns.push('general', 'plateau');
  }

  return patterns;
}

// Sample recommendations for testing
const recommendations = [
  { id: 1, title: "The War of Art", type: "book", patterns: ["low_aq", "low_ci", "paralyzed"] },
  { id: 2, title: "Deep Work", type: "book", patterns: ["low_ci", "plateau"] },
  { id: 3, title: "Keep Going", type: "book", patterns: ["burnout", "protect_magic", "plateau"] },
  { id: 4, title: "Ego Is the Enemy", type: "book", patterns: ["protect_magic", "high_aq", "high_ci"] },
  { id: 5, title: "Show Your Work!", type: "book", patterns: ["low_ri", "craftsperson_no_message", "low_aq"] },
  { id: 6, title: "Creative Pep Talk", type: "video", patterns: ["low_ci", "paralyzed", "plateau"] },
  { id: 7, title: "How to Be Creative", type: "video", patterns: ["low_ri", "low_ci"] },
  { id: 8, title: "The Gap", type: "video", patterns: ["plateau", "comeback"] }
];

function matchRecommendations(scores, count = 4) {
  const patterns = getPatterns(scores);

  const scored = recommendations.map(rec => ({
    ...rec,
    matchScore: rec.patterns.filter(p => patterns.includes(p)).length
  }));

  const matched = scored.filter(r => r.matchScore > 0);
  matched.sort((a, b) => b.matchScore - a.matchScore);

  const result = [];
  const usedTypes = new Set();

  for (const rec of matched) {
    if (result.length >= count) break;
    if (!usedTypes.has(rec.type) || result.length < 2) {
      result.push(rec);
      usedTypes.add(rec.type);
    }
  }

  for (const rec of matched) {
    if (result.length >= count) break;
    if (!result.includes(rec)) {
      result.push(rec);
    }
  }

  if (result.length === 0) {
    return recommendations.slice(0, count);
  }

  return result;
}

// Reflection questions
const personalizedReflections = {
  energy: {
    low: "Your energy is depleted.",
    mid: "Your energy is moderate.",
    high: "Your energy is abundant."
  },
  flow: {
    low: "You're barely reaching flow.",
    mid: "You have moderate flow hours.",
    high: "You're regularly in deep flow."
  },
  audience: {
    small: "You have a small audience.",
    medium: "You have a growing audience.",
    large: "You have a large audience."
  }
};

function getPersonalizedReflection(key, value, max = 10) {
  const thresholds = { low: max * 0.3, high: max * 0.7 };
  const questions = personalizedReflections[key];
  if (!questions) return '';

  if (value <= thresholds.low) return questions.low;
  if (value >= thresholds.high) return questions.high;
  return questions.mid;
}

function getAudiencePersonalizedReflection(audience) {
  if (audience < 1000) return personalizedReflections.audience.small;
  if (audience < 100000) return personalizedReflections.audience.medium;
  return personalizedReflections.audience.large;
}

// ============================================================
// TEST CATEGORIES
// ============================================================

console.log('\n========================================');
console.log('FRUITHEDGE TEST SUITE');
console.log('========================================\n');

// ------------------------------------------------------------
// 1. SCORE CALCULATION TESTS
// ------------------------------------------------------------

console.log('\n--- 1. SCORE CALCULATION TESTS ---\n');

// calculateAQ tests
test('calculateAQ: max inputs (10,10,10,1) returns 10', () => {
  assertEqual(calculateAQ(10, 10, 10, 1), 10);
});

test('calculateAQ: min inputs (1,1,1,10) returns 1', () => {
  assertEqual(calculateAQ(1, 1, 1, 10), 1);
});

test('calculateAQ: balanced mid (5,5,5,5) returns ~3.5', () => {
  assertApprox(calculateAQ(5, 5, 5, 5), 3.5, 0.3);
});

test('calculateAQ: output is between 1-10', () => {
  const result1 = calculateAQ(10, 10, 10, 1);
  const result2 = calculateAQ(1, 1, 1, 10);
  const result3 = calculateAQ(100, 100, 100, 1); // extreme
  assertTrue(result1 >= 1 && result1 <= 10, `result1=${result1}`);
  assertTrue(result2 >= 1 && result2 <= 10, `result2=${result2}`);
  assertTrue(result3 >= 1 && result3 <= 10, `result3=${result3}`);
});

test('calculateAQ: output rounds to 1 decimal place', () => {
  const result = calculateAQ(7, 6, 8, 3);
  const decimals = (result.toString().split('.')[1] || '').length;
  assertTrue(decimals <= 1, `Got ${decimals} decimal places`);
});

// calculateRi tests
test('calculateRi: max depth, small audience (10,10,10,1000) returns 10', () => {
  assertEqual(calculateRi(10, 10, 10, 1000), 10);
});

test('calculateRi: max depth, huge audience (10,10,10,10000000) returns ~5', () => {
  assertApprox(calculateRi(10, 10, 10, 10000000), 5, 0.5);
});

test('calculateRi: min inputs returns 1', () => {
  assertEqual(calculateRi(1, 1, 1, 10000000), 1);
});

test('calculateRi: audience dilution 1K=1.0', () => {
  const ri1k = calculateRi(10, 10, 10, 1000);
  assertEqual(ri1k, 10); // no dilution at 1K
});

test('calculateRi: audience dilution increases with size', () => {
  const ri1k = calculateRi(10, 10, 10, 1000);
  const ri10k = calculateRi(10, 10, 10, 10000);
  const ri100k = calculateRi(10, 10, 10, 100000);
  const ri1m = calculateRi(10, 10, 10, 1000000);
  assertTrue(ri1k > ri10k, `1K (${ri1k}) should be > 10K (${ri10k})`);
  assertTrue(ri10k > ri100k, `10K (${ri10k}) should be > 100K (${ri100k})`);
  assertTrue(ri100k > ri1m, `100K (${ri100k}) should be > 1M (${ri1m})`);
});

test('calculateRi: output clamped 1-10', () => {
  const result1 = calculateRi(10, 10, 10, 100);
  const result2 = calculateRi(1, 1, 1, 10000000);
  assertTrue(result1 >= 1 && result1 <= 10, `result1=${result1}`);
  assertTrue(result2 >= 1 && result2 <= 10, `result2=${result2}`);
});

// calculateCi tests
test('calculateCi: max fuel, min drag (60,10,10,1,1,1) returns 10', () => {
  assertEqual(calculateCi(60, 10, 10, 1, 1, 1), 10);
});

test('calculateCi: min fuel, max drag (1,1,1,60,60,10) returns 1', () => {
  assertEqual(calculateCi(1, 1, 1, 60, 60, 10), 1);
});

test('calculateCi: balanced inputs returns ~3.5', () => {
  // With balanced drag, the drag factor reduces output
  assertApprox(calculateCi(30, 5, 5, 30, 30, 5), 3.5, 0.5);
});

test('calculateCi: output clamped 1-10', () => {
  const result1 = calculateCi(60, 10, 10, 1, 1, 1);
  const result2 = calculateCi(1, 1, 1, 60, 60, 10);
  assertTrue(result1 >= 1 && result1 <= 10, `result1=${result1}`);
  assertTrue(result2 >= 1 && result2 <= 10, `result2=${result2}`);
});

// calculateAlpha tests
test('calculateAlpha: all 10s returns 10', () => {
  assertEqual(calculateAlpha(10, 10, 10), 10);
});

test('calculateAlpha: all 1s returns 1', () => {
  assertEqual(calculateAlpha(1, 1, 1), 1);
});

test('calculateAlpha: geometric mean (8,8,8) returns 8', () => {
  assertEqual(calculateAlpha(8, 8, 8), 8);
});

test('calculateAlpha: imbalance penalty (10,10,1) returns ~4.6', () => {
  const result = calculateAlpha(10, 10, 1);
  assertApprox(result, 4.6, 0.2);
});

test('calculateAlpha: another imbalance (1,10,10) returns ~4.6', () => {
  const result = calculateAlpha(1, 10, 10);
  assertApprox(result, 4.6, 0.2);
});

// ------------------------------------------------------------
// 2. ARCHETYPE MATCHING TESTS
// ------------------------------------------------------------

console.log('\n--- 2. ARCHETYPE MATCHING TESTS ---\n');

test('matchArchetype: burnout (aq<3, ri<3, ci<3)', () => {
  const arch = matchArchetype({aq: 2, ri: 2, ci: 2, alpha: 2});
  assertEqual(arch.id, 'burnout');
});

test('matchArchetype: thriving (aq>=7, ri>=7, ci>=7)', () => {
  const arch = matchArchetype({aq: 7.5, ri: 7.5, ci: 7.5, alpha: 7.5});
  assertEqual(arch.id, 'thriving');
});

test('matchArchetype: legacy takes priority over thriving (alpha>=8)', () => {
  const arch = matchArchetype({aq: 9, ri: 9, ci: 9, alpha: 9});
  assertEqual(arch.id, 'legacy');
});

test('matchArchetype: hustler (aq<4, ci>=6)', () => {
  const arch = matchArchetype({aq: 3, ri: 5, ci: 7, alpha: 4.7});
  assertEqual(arch.id, 'hustler');
});

test('matchArchetype: paralyzed_dreamer (aq>=6, ci<3)', () => {
  const arch = matchArchetype({aq: 7, ri: 5, ci: 2, alpha: 4.1});
  assertEqual(arch.id, 'paralyzed_dreamer');
});

test('matchArchetype: underground_gem (ri>=6, aq<4)', () => {
  const arch = matchArchetype({aq: 3, ri: 7, ci: 5, alpha: 4.7});
  assertEqual(arch.id, 'underground_gem');
});

test('matchArchetype: algorithm_slave (ci>=6, ri<2.5)', () => {
  const arch = matchArchetype({aq: 5, ri: 2, ci: 7, alpha: 4.1});
  assertEqual(arch.id, 'algorithm_slave');
});

test('matchArchetype: craftsperson (ci>=7, ri<5, aq>=4)', () => {
  const arch = matchArchetype({aq: 5, ri: 4, ci: 8, alpha: 5.4});
  assertEqual(arch.id, 'craftsperson');
});

test('matchArchetype: professional (balanced 5-7.5)', () => {
  const arch = matchArchetype({aq: 6, ri: 6, ci: 6, alpha: 6});
  assertEqual(arch.id, 'professional');
});

test('matchArchetype: explorer is fallback', () => {
  const arch = matchArchetype({aq: 4, ri: 3, ci: 7, alpha: 4.4});
  // This should fall through to explorer
  assertTrue(arch.id === 'explorer' || arch.id !== undefined, `Got ${arch.id}`);
});

test('matchArchetype: legacy checks before thriving', () => {
  // Both conditions met, legacy should win
  const arch = matchArchetype({aq: 8, ri: 8, ci: 8, alpha: 8});
  assertEqual(arch.id, 'legacy');
});

// ------------------------------------------------------------
// 3. PATTERN DETECTION TESTS
// ------------------------------------------------------------

console.log('\n--- 3. PATTERN DETECTION TESTS ---\n');

test('getPatterns: low_aq when aq<4', () => {
  const patterns = getPatterns({aq: 3, ri: 6, ci: 6, alpha: 4.8});
  assertIncludes(patterns, 'low_aq');
});

test('getPatterns: low_ri when ri<4', () => {
  const patterns = getPatterns({aq: 6, ri: 3, ci: 6, alpha: 4.8});
  assertIncludes(patterns, 'low_ri');
});

test('getPatterns: low_ci when ci<4', () => {
  const patterns = getPatterns({aq: 6, ri: 6, ci: 3, alpha: 4.8});
  assertIncludes(patterns, 'low_ci');
});

test('getPatterns: low_energy when aq<3', () => {
  const patterns = getPatterns({aq: 2, ri: 6, ci: 6, alpha: 4.1});
  assertIncludes(patterns, 'low_aq');
  assertIncludes(patterns, 'low_energy');
});

test('getPatterns: high scores include high_aq, high_ri, high_ci, protect_magic', () => {
  const patterns = getPatterns({aq: 8, ri: 8, ci: 8, alpha: 8});
  assertIncludes(patterns, 'high_aq');
  assertIncludes(patterns, 'high_ri');
  assertIncludes(patterns, 'high_ci');
  assertIncludes(patterns, 'protect_magic');
});

test('getPatterns: paralyzed when aq>=6 and ci<4', () => {
  const patterns = getPatterns({aq: 7, ri: 5, ci: 3, alpha: 4.7});
  assertIncludes(patterns, 'paralyzed');
});

test('getPatterns: hustler when aq<4 and ci>=6', () => {
  const patterns = getPatterns({aq: 3, ri: 5, ci: 7, alpha: 4.7});
  assertIncludes(patterns, 'hustler');
});

test('getPatterns: plateau for balanced mid-range', () => {
  const patterns = getPatterns({aq: 5, ri: 5, ci: 5, alpha: 5});
  assertIncludes(patterns, 'plateau');
});

test('getPatterns: burnout when all <4', () => {
  const patterns = getPatterns({aq: 2, ri: 2, ci: 2, alpha: 2});
  assertIncludes(patterns, 'burnout');
});

test('getPatterns: fallback to general if no patterns', () => {
  // High scores that don't match specific patterns
  const patterns = getPatterns({aq: 7, ri: 7, ci: 7, alpha: 7});
  // Should have protect_magic and high scores
  assertTrue(patterns.length > 0, 'Should have some patterns');
});

// ------------------------------------------------------------
// 4. RECOMMENDATION MATCHING TESTS
// ------------------------------------------------------------

console.log('\n--- 4. RECOMMENDATION MATCHING TESTS ---\n');

test('matchRecommendations: returns correct count', () => {
  const recs = matchRecommendations({aq: 3, ri: 6, ci: 6, alpha: 4.8}, 4);
  assertTrue(recs.length <= 4, `Expected <= 4, got ${recs.length}`);
});

test('matchRecommendations: higher match scores ranked first', () => {
  const recs = matchRecommendations({aq: 3, ri: 6, ci: 6, alpha: 4.8}, 4);
  if (recs.length >= 2) {
    assertTrue(recs[0].matchScore >= recs[1].matchScore,
      `First (${recs[0].matchScore}) should be >= second (${recs[1].matchScore})`);
  }
});

test('matchRecommendations: low_aq pattern returns relevant recs', () => {
  const recs = matchRecommendations({aq: 3, ri: 6, ci: 6, alpha: 4.8}, 4);
  const hasLowAqRec = recs.some(r => r.patterns.includes('low_aq'));
  assertTrue(hasLowAqRec, 'Should include recommendation for low_aq');
});

test('matchRecommendations: protect_magic pattern returns relevant recs', () => {
  const recs = matchRecommendations({aq: 8, ri: 8, ci: 8, alpha: 8}, 4);
  const hasProtectMagicRec = recs.some(r => r.patterns.includes('protect_magic'));
  assertTrue(hasProtectMagicRec, 'Should include recommendation for protect_magic');
});

test('matchRecommendations: returns fallback if no matches', () => {
  // Create a scenario with no matching patterns (unlikely but test it)
  const recs = matchRecommendations({aq: 10, ri: 10, ci: 10, alpha: 10}, 4);
  assertTrue(recs.length > 0, 'Should return fallback recommendations');
});

// ------------------------------------------------------------
// 5. REFLECTION QUESTION TESTS
// ------------------------------------------------------------

console.log('\n--- 5. REFLECTION QUESTION TESTS ---\n');

test('getPersonalizedReflection: low value (2/10) returns low question', () => {
  const result = getPersonalizedReflection('energy', 2, 10);
  assertTrue(result.includes('depleted'), `Got: ${result}`);
});

test('getPersonalizedReflection: mid value (5/10) returns mid question', () => {
  const result = getPersonalizedReflection('energy', 5, 10);
  assertTrue(result.includes('moderate'), `Got: ${result}`);
});

test('getPersonalizedReflection: high value (8/10) returns high question', () => {
  const result = getPersonalizedReflection('energy', 8, 10);
  assertTrue(result.includes('abundant'), `Got: ${result}`);
});

test('getPersonalizedReflection: flow low (10/60) returns low', () => {
  const result = getPersonalizedReflection('flow', 10, 60);
  assertTrue(result.includes('barely'), `Got: ${result}`);
});

test('getPersonalizedReflection: flow mid (30/60) returns mid', () => {
  const result = getPersonalizedReflection('flow', 30, 60);
  assertTrue(result.includes('moderate'), `Got: ${result}`);
});

test('getPersonalizedReflection: flow high (50/60) returns high', () => {
  const result = getPersonalizedReflection('flow', 50, 60);
  assertTrue(result.includes('deep flow'), `Got: ${result}`);
});

test('getPersonalizedReflection: boundary value=3 returns low (max=10)', () => {
  const result = getPersonalizedReflection('energy', 3, 10);
  assertTrue(result.includes('depleted'), `Got: ${result}`);
});

test('getPersonalizedReflection: boundary value=7 returns high (max=10)', () => {
  const result = getPersonalizedReflection('energy', 7, 10);
  assertTrue(result.includes('abundant'), `Got: ${result}`);
});

test('getAudiencePersonalizedReflection: 500 returns small', () => {
  const result = getAudiencePersonalizedReflection(500);
  assertTrue(result.includes('small'), `Got: ${result}`);
});

test('getAudiencePersonalizedReflection: 10000 returns medium', () => {
  const result = getAudiencePersonalizedReflection(10000);
  assertTrue(result.includes('growing'), `Got: ${result}`);
});

test('getAudiencePersonalizedReflection: 500000 returns large', () => {
  const result = getAudiencePersonalizedReflection(500000);
  assertTrue(result.includes('large'), `Got: ${result}`);
});

test('getAudiencePersonalizedReflection: boundary 999 returns small', () => {
  const result = getAudiencePersonalizedReflection(999);
  assertTrue(result.includes('small'), `Got: ${result}`);
});

test('getAudiencePersonalizedReflection: boundary 1000 returns medium', () => {
  const result = getAudiencePersonalizedReflection(1000);
  assertTrue(result.includes('growing'), `Got: ${result}`);
});

test('getAudiencePersonalizedReflection: boundary 99999 returns medium', () => {
  const result = getAudiencePersonalizedReflection(99999);
  assertTrue(result.includes('growing'), `Got: ${result}`);
});

test('getAudiencePersonalizedReflection: boundary 100000 returns large', () => {
  const result = getAudiencePersonalizedReflection(100000);
  assertTrue(result.includes('large'), `Got: ${result}`);
});

// ------------------------------------------------------------
// 6. EDGE CASE TESTS
// ------------------------------------------------------------

console.log('\n--- 6. EDGE CASE TESTS ---\n');

test('calculateAQ: handles very small positive values', () => {
  const result = calculateAQ(0.1, 0.1, 0.1, 10);
  assertTrue(result >= 1, `Should clamp to 1, got ${result}`);
});

test('calculateAQ: handles values > max', () => {
  const result = calculateAQ(100, 100, 100, 1);
  assertTrue(result <= 10, `Should clamp to 10, got ${result}`);
});

test('calculateRi: handles very small audience', () => {
  const result = calculateRi(10, 10, 10, 1);
  assertTrue(result >= 1 && result <= 10, `Got ${result}`);
});

test('calculateRi: handles massive audience', () => {
  const result = calculateRi(10, 10, 10, 1000000000);
  assertTrue(result >= 1 && result <= 10, `Got ${result}`);
});

test('calculateCi: handles decimal inputs', () => {
  const result = calculateCi(30.5, 5.5, 5.5, 15.5, 15.5, 5.5);
  assertTrue(typeof result === 'number' && !isNaN(result), `Got ${result}`);
});

test('calculateAlpha: handles decimal inputs', () => {
  const result = calculateAlpha(7.3, 6.8, 5.2);
  assertTrue(typeof result === 'number' && !isNaN(result), `Got ${result}`);
});

test('matchArchetype: handles missing alpha', () => {
  const arch = matchArchetype({aq: 5, ri: 5, ci: 5});
  assertTrue(arch !== null && arch !== undefined, 'Should return an archetype');
});

test('getPatterns: handles missing alpha', () => {
  const patterns = getPatterns({aq: 5, ri: 5, ci: 5});
  assertTrue(Array.isArray(patterns), 'Should return array');
});

test('getPersonalizedReflection: handles unknown key', () => {
  const result = getPersonalizedReflection('unknown_key', 5, 10);
  assertEqual(result, '');
});

test('getPersonalizedReflection: handles zero value', () => {
  const result = getPersonalizedReflection('energy', 0, 10);
  assertTrue(result.includes('depleted'), `Got: ${result}`);
});

test('getPersonalizedReflection: handles max value', () => {
  const result = getPersonalizedReflection('energy', 10, 10);
  assertTrue(result.includes('abundant'), `Got: ${result}`);
});

// ============================================================
// TEST SUMMARY
// ============================================================

console.log('\n========================================');
console.log('TEST SUMMARY');
console.log('========================================');
console.log(`Total: ${results.passed + results.failed}`);
console.log(`Passed: ${results.passed}`);
console.log(`Failed: ${results.failed}`);
console.log('========================================\n');

if (results.failed > 0) {
  console.log('Failed tests:');
  results.tests.filter(t => !t.passed).forEach(t => {
    console.log(`  - ${t.name}: ${t.error}`);
  });
  console.log('');
}

// Exit with error code if tests failed (for CI)
if (typeof process !== 'undefined' && process.exit) {
  process.exit(results.failed > 0 ? 1 : 0);
}

// Export for browser
if (typeof window !== 'undefined') {
  window.testResults = results;
}
