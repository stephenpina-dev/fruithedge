/**
 * FruitHedge Engine Test Suite
 * Comprehensive tests for formulas, archetypes, edge cases, and coverage
 * Run with: node tests/engine-test.js
 */

// ============================================================
// FORMULA IMPLEMENTATIONS (from app.js)
// ============================================================

function calculateAQ(energy, space, optionality, constraint) {
  const numerator = energy * space * optionality;
  const denominator = constraint * 100;
  const raw = 10 * Math.cbrt(numerator / denominator);
  return Math.max(1, Math.min(10, Math.round(raw * 10) / 10));
}

function calculateRi(impact, identity, boldness, audience) {
  const numerator = impact * identity * boldness;
  const dilutionFactor = 1 + Math.log(Math.max(audience, 100) / 1000);
  const raw = numerator / (10 * Math.max(dilutionFactor, 0.1));
  return Math.max(1, Math.min(10, Math.round(raw * 10) / 10));
}

function calculateCi(flow, evolution, risk, admin, distraction, stagnation) {
  const flowNorm = flow / 6;
  const adminNorm = admin / 6;
  const distractNorm = distraction / 6;
  const numerator = flowNorm * evolution * risk;
  const denominator = adminNorm * distractNorm * stagnation;
  const raw = 10 * Math.cbrt(numerator / Math.max(denominator, 0.1));
  return Math.max(1, Math.min(10, Math.round(raw * 10) / 10));
}

function calculateAlpha(aq, ri, ci) {
  const raw = Math.cbrt(aq * ri * ci);
  return Math.round(raw * 10) / 10;
}

// ============================================================
// ARCHETYPES (from data.js - updated version)
// ============================================================

const archetypes = [
  // TIER 1: Crisis states
  { id: "burnout", name: "The Burnout", check: (s) => s.aq < 3 && s.ri < 3 && s.ci < 3 },
  // TIER 2: Specific imbalance patterns
  { id: "chaos", name: "The Chaos Creator", check: (s) => s.aq < 4 && s.ci >= 5 && s.ri >= 5 },
  { id: "hustler", name: "The Hustler", check: (s) => s.aq < 4 && s.ci >= 6 },
  { id: "underground_gem", name: "The Underground Gem", check: (s) => s.ri >= 6 && s.aq < 4 },
  { id: "algorithm_slave", name: "The Algorithm Slave", check: (s) => s.ci >= 6 && s.ri < 2.5 },
  { id: "paralyzed_dreamer", name: "The Paralyzed Dreamer", check: (s) => s.aq >= 6 && s.ci < 3 },
  { id: "craftsperson", name: "The Craftsperson", check: (s) => s.ci >= 7 && s.ri < 5 && s.aq >= 4 },
  { id: "tribe_builder", name: "The Tribe Builder", check: (s) => s.ri >= 7 && s.ci >= 4 && s.aq >= 4 && !(s.aq >= 7 && s.ci >= 7) && s.alpha < 8 },
  { id: "free_agent", name: "The Free Agent", check: (s) => s.aq >= 7 && s.ri < 6 && s.ci >= 3 && s.ci < 6 },
  // TIER 3: New archetypes
  { id: "monk", name: "The Monk", check: (s) => s.ri < 4 && ((s.aq >= 5 && s.ci >= 5) || (s.aq >= 6) || (s.ci >= 6)) },
  { id: "grinder", name: "The Grinder", check: (s) => s.ci >= 5 && s.aq < 5 && s.ri < 5 },
  { id: "comeback", name: "The Comeback Arc", check: (s) => s.aq >= 5 && s.ri >= 5 && s.ci >= 2 && s.ci < 5 },
  { id: "connector", name: "The Connector", check: (s) => s.ri >= 5 && s.ri > s.aq && s.ri > s.ci && s.aq >= 4 && s.ci >= 4 },
  { id: "ember", name: "The Ember", check: (s) => s.aq >= 4 && s.aq <= 6 && s.ri >= 4 && s.ri < 6 && s.ci >= 3 && s.ci < 5 && (s.aq >= 5 || s.ri >= 5) },
  { id: "plateau_walker", name: "The Plateau Walker", check: (s) => s.aq >= 4 && s.aq < 6 && s.ri >= 4 && s.ri < 6 && s.ci >= 5 && s.ci < 6 && !(s.ri > s.aq && s.ri > s.ci) },
  // TIER 4: Balanced/positive states
  { id: "legacy", name: "The Legacy Builder", check: (s) => s.alpha >= 8 },
  { id: "thriving", name: "The Thriving Creator", check: (s) => s.aq >= 7 && s.ri >= 7 && s.ci >= 7 },
  { id: "professional", name: "The Professional", check: (s) => s.aq >= 5 && s.aq <= 7.5 && s.ri >= 5 && s.ri <= 7.5 && s.ci >= 5 && s.ci <= 7.5 },
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

// ============================================================
// PERSONALIZED REFLECTIONS (from app.js)
// ============================================================

const personalizedReflections = {
  energy: {
    low: "You're running on empty...",
    mid: "You have enough energy to function...",
    high: "Your energy is strong..."
  },
  space: {
    low: "Your mind is full...",
    mid: "Some clarity, some noise...",
    high: "Clear head..."
  },
  optionality: {
    low: "You feel trapped...",
    mid: "You have some options...",
    high: "Many paths are open..."
  },
  constraint: {
    low: "Light obligations...",
    mid: "Moderate load...",
    high: "Heavy constraints..."
  },
  impact: {
    low: "Your work is being seen but not felt...",
    mid: "Some work lands...",
    high: "Your work moves people..."
  },
  identity: {
    low: "You're making work for 'everyone'...",
    mid: "You have some sense of your audience...",
    high: "Your audience feels seen by you..."
  },
  boldness: {
    low: "You're playing it safe...",
    mid: "You take some risks...",
    high: "You're making bold moves..."
  },
  audience: {
    small: "Small audience...",
    medium: "Growing audience...",
    large: "Mass audience..."
  },
  flow: {
    low: "Minimal flow time...",
    mid: "Decent flow...",
    high: "Deep immersion..."
  },
  evolution: {
    low: "Your skills have stagnated...",
    mid: "You're growing...",
    high: "Rapid evolution..."
  },
  risk: {
    low: "Too safe...",
    mid: "Some experimentation...",
    high: "Bold moves..."
  },
  admin: {
    low: "Lean operations...",
    mid: "Moderate admin...",
    high: "More admin than creating..."
  },
  distraction: {
    low: "Focused...",
    mid: "Some leakage...",
    high: "Major distraction problem..."
  },
  stagnation: {
    low: "Shipping regularly...",
    mid: "Some paralysis...",
    high: "Frozen..."
  }
};

// ============================================================
// RECOMMENDATIONS (simplified for testing)
// ============================================================

const recommendations = [
  { id: 1, title: "The War of Art", patterns: ["low_aq", "low_ci", "paralyzed", "paralyzed_dreamer", "ember"] },
  { id: 2, title: "Deep Work", patterns: ["low_ci", "plateau", "grinder"] },
  { id: 3, title: "Steal Like an Artist", patterns: ["low_ri", "explorer", "ember"] },
  { id: 4, title: "Show Your Work", patterns: ["monk", "underground_gem", "low_ri"] },
  { id: 5, title: "The Creative Act", patterns: ["protect_magic", "thriving", "legacy"] },
  { id: 6, title: "Atomic Habits", patterns: ["low_ci", "stagnation", "grinder", "plateau_walker"] },
  { id: 7, title: "Range", patterns: ["craftsperson", "algorithm_slave", "monk"] },
  { id: 8, title: "Essentialism", patterns: ["hustler", "burnout", "high_admin"] },
  { id: 9, title: "The Practice", patterns: ["paralyzed", "paralyzed_dreamer", "ember", "plateau_walker"] },
  { id: 10, title: "Tribe", patterns: ["tribe_builder", "connector", "underground_gem"] },
  { id: 11, title: "Company of One", patterns: ["free_agent", "professional", "monk"] },
  { id: 12, title: "Die with Zero", patterns: ["hustler", "burnout", "high_constraint"] },
  { id: 13, title: "Anything You Want", patterns: ["chaos", "free_agent", "tribe_builder"] },
  { id: 14, title: "Bird by Bird", patterns: ["paralyzed", "paralyzed_dreamer", "stagnation", "ember"] },
  { id: 15, title: "Big Magic", patterns: ["low_boldness", "paralyzed_dreamer", "explorer", "comeback"] },
];

// ============================================================
// TEST RESULTS TRACKING
// ============================================================

const results = {
  formula: { passed: 0, failed: 0, failures: [] },
  archetype: { passed: 0, failed: 0, failures: [] },
  edge: { passed: 0, failed: 0, failures: [] },
  distribution: {},
  coverage: { playbook: [], recommendations: [] }
};

// ============================================================
// 1. FORMULA BOUNDARY TESTS
// ============================================================

console.log("=== FRUITHEDGE ENGINE TEST RESULTS ===\n");

const formulaTests = [
  // AQ Formula: 10 × ∛[(E × S × O) / (C × 100)]
  { name: "AQ: All minimum (1,1,1,10)", inputs: { e: 1, s: 1, o: 1, c: 10 }, expected: { min: 1, max: 2 }, formula: "aq" },
  { name: "AQ: All maximum (10,10,10,1)", inputs: { e: 10, s: 10, o: 10, c: 1 }, expected: { min: 9, max: 10 }, formula: "aq" },
  { name: "AQ: Realistic good (7,7,7,3)", inputs: { e: 7, s: 7, o: 7, c: 3 }, expected: { min: 6, max: 8 }, formula: "aq" },
  { name: "AQ: Realistic struggling (4,4,4,7)", inputs: { e: 4, s: 4, o: 4, c: 7 }, expected: { min: 2, max: 4 }, formula: "aq" },
  { name: "AQ: High constraint kills score (8,8,8,9)", inputs: { e: 8, s: 8, o: 8, c: 9 }, expected: { min: 3, max: 5 }, formula: "aq" },

  // Ri Formula: (I × Id × B) / [10 × (1 + ln(A / 1000))]
  { name: "Ri: Small audience boost (7,7,7,100)", inputs: { i: 7, id: 7, b: 7, a: 100 }, expected: { min: 7, max: 10 }, formula: "ri" },
  { name: "Ri: Large audience dilution (7,7,7,1000000)", inputs: { i: 7, id: 7, b: 7, a: 1000000 }, expected: { min: 3, max: 5 }, formula: "ri" },
  { name: "Ri: All max, small audience (10,10,10,100)", inputs: { i: 10, id: 10, b: 10, a: 100 }, expected: { min: 10, max: 10 }, formula: "ri" },
  { name: "Ri: All max, huge audience (10,10,10,10000000)", inputs: { i: 10, id: 10, b: 10, a: 10000000 }, expected: { min: 4, max: 7 }, formula: "ri" },
  { name: "Ri: 1K audience neutral (7,7,7,1000)", inputs: { i: 7, id: 7, b: 7, a: 1000 }, expected: { min: 5, max: 7 }, formula: "ri" },

  // Ci Formula: 10 × ∛[(F/6 × Ev × R) / (A/6 × D/6 × St)]
  { name: "Ci: Max flow, min drag (60,10,10,1,1,1)", inputs: { f: 60, ev: 10, r: 10, a: 1, d: 1, st: 1 }, expected: { min: 10, max: 10 }, formula: "ci" },
  { name: "Ci: Min flow, max drag (1,1,1,60,60,10)", inputs: { f: 1, ev: 1, r: 1, a: 60, d: 60, st: 10 }, expected: { min: 1, max: 2 }, formula: "ci" },
  { name: "Ci: Realistic 40h flow (40,7,7,10,10,3)", inputs: { f: 40, ev: 7, r: 7, a: 10, d: 10, st: 3 }, expected: { min: 6, max: 9 }, formula: "ci" },
  { name: "Ci: Realistic grinder (30,5,5,30,20,5)", inputs: { f: 30, ev: 5, r: 5, a: 30, d: 20, st: 5 }, expected: { min: 3, max: 6 }, formula: "ci" },
  { name: "Ci: High distraction penalty (40,7,7,5,40,3)", inputs: { f: 40, ev: 7, r: 7, a: 5, d: 40, st: 3 }, expected: { min: 4, max: 7 }, formula: "ci" },
];

console.log("--- FORMULA TESTS ---\n");

formulaTests.forEach(test => {
  let actual;
  if (test.formula === "aq") {
    actual = calculateAQ(test.inputs.e, test.inputs.s, test.inputs.o, test.inputs.c);
  } else if (test.formula === "ri") {
    actual = calculateRi(test.inputs.i, test.inputs.id, test.inputs.b, test.inputs.a);
  } else if (test.formula === "ci") {
    actual = calculateCi(test.inputs.f, test.inputs.ev, test.inputs.r, test.inputs.a, test.inputs.d, test.inputs.st);
  }

  const passed = actual >= test.expected.min && actual <= test.expected.max;

  if (passed) {
    results.formula.passed++;
    console.log(`✅ ${test.name}: ${actual} (expected ${test.expected.min}-${test.expected.max})`);
  } else {
    results.formula.failed++;
    results.formula.failures.push({ test: test.name, actual, expected: test.expected });
    console.log(`❌ ${test.name}: ${actual} (expected ${test.expected.min}-${test.expected.max})`);
  }
});

console.log(`\nFORMULA TESTS: ${results.formula.passed}/${results.formula.passed + results.formula.failed} passed\n`);

// ============================================================
// 2. ARCHETYPE COVERAGE TESTS
// ============================================================

const archetypeTests = [
  { name: "burnout", scores: { aq: 2.5, ri: 2.5, ci: 2.5, alpha: 2.5 }, shouldMatch: "burnout" },
  { name: "hustler", scores: { aq: 3, ri: 4, ci: 7, alpha: 4.4 }, shouldMatch: "hustler" },
  { name: "underground_gem", scores: { aq: 3, ri: 7, ci: 4, alpha: 4.4 }, shouldMatch: "underground_gem" },
  { name: "algorithm_slave", scores: { aq: 5, ri: 2, ci: 7, alpha: 4.1 }, shouldMatch: "algorithm_slave" },
  { name: "paralyzed_dreamer", scores: { aq: 7, ri: 5, ci: 2.5, alpha: 4.4 }, shouldMatch: "paralyzed_dreamer" },
  { name: "chaos", scores: { aq: 3, ri: 6, ci: 6, alpha: 4.8 }, shouldMatch: "chaos" },
  { name: "craftsperson", scores: { aq: 5, ri: 4, ci: 8, alpha: 5.4 }, shouldMatch: "craftsperson" },
  { name: "tribe_builder", scores: { aq: 5, ri: 8, ci: 5, alpha: 5.8 }, shouldMatch: "tribe_builder" },
  { name: "free_agent", scores: { aq: 8, ri: 5, ci: 4, alpha: 5.4 }, shouldMatch: "free_agent" },
  { name: "monk", scores: { aq: 6, ri: 3, ci: 6, alpha: 4.8 }, shouldMatch: "monk" },
  { name: "grinder", scores: { aq: 4, ri: 4, ci: 6, alpha: 4.6 }, shouldMatch: "grinder" },
  { name: "connector", scores: { aq: 4, ri: 6, ci: 5, alpha: 4.9 }, shouldMatch: "connector" },
  { name: "ember", scores: { aq: 5, ri: 4.5, ci: 4, alpha: 4.5 }, shouldMatch: "ember" },
  { name: "plateau_walker", scores: { aq: 5, ri: 5, ci: 5.5, alpha: 5.2 }, shouldMatch: "plateau_walker" },
  { name: "professional", scores: { aq: 6, ri: 6, ci: 6, alpha: 6 }, shouldMatch: "professional" },
  { name: "thriving", scores: { aq: 7.5, ri: 7.5, ci: 7.5, alpha: 7.5 }, shouldMatch: "thriving" },
  { name: "legacy", scores: { aq: 9, ri: 9, ci: 9, alpha: 9 }, shouldMatch: "legacy" },
  { name: "comeback", scores: { aq: 6, ri: 6, ci: 4, alpha: 5.2 }, shouldMatch: "comeback" },
];

console.log("--- ARCHETYPE COVERAGE TESTS ---\n");

archetypeTests.forEach(test => {
  const matched = matchArchetype(test.scores);
  const passed = matched.id === test.shouldMatch;

  if (passed) {
    results.archetype.passed++;
    console.log(`✅ ${test.name}: matched correctly`);
  } else {
    results.archetype.failed++;
    results.archetype.failures.push({
      test: test.name,
      scores: test.scores,
      expected: test.shouldMatch,
      actual: matched.id
    });
    console.log(`❌ ${test.name}: expected ${test.shouldMatch}, got ${matched.id}`);
  }
});

console.log(`\nARCHETYPE TESTS: ${results.archetype.passed}/${results.archetype.passed + results.archetype.failed} passed\n`);

// ============================================================
// 3. EDGE CASE TESTS
// ============================================================

const edgeCaseTests = [
  {
    name: "All zeros should not crash",
    test: () => {
      try {
        const aq = calculateAQ(0, 0, 0, 0);
        const ri = calculateRi(0, 0, 0, 0);
        const ci = calculateCi(0, 0, 0, 0, 0, 0);
        return !isNaN(aq) && !isNaN(ri) && !isNaN(ci);
      } catch (e) {
        return false;
      }
    }
  },
  {
    name: "All ones (minimum) produces valid scores",
    test: () => {
      const aq = calculateAQ(1, 1, 1, 1);
      const ri = calculateRi(1, 1, 1, 100);
      const ci = calculateCi(1, 1, 1, 1, 1, 1);
      return aq >= 1 && aq <= 10 && ri >= 1 && ri <= 10 && ci >= 1 && ci <= 10;
    }
  },
  {
    name: "All max caps at 10",
    test: () => {
      const aq = calculateAQ(10, 10, 10, 1);
      const ri = calculateRi(10, 10, 10, 100);
      const ci = calculateCi(60, 10, 10, 1, 1, 1);
      return aq === 10 && ri === 10 && ci === 10;
    }
  },
  {
    name: "Audience at 100 amplifies Ri",
    test: () => {
      const ri100 = calculateRi(7, 7, 7, 100);
      const ri10000 = calculateRi(7, 7, 7, 10000);
      return ri100 > ri10000;
    }
  },
  {
    name: "Audience at 10M dilutes Ri",
    test: () => {
      const ri1000 = calculateRi(7, 7, 7, 1000);
      const ri10M = calculateRi(7, 7, 7, 10000000);
      return ri1000 > ri10M;
    }
  },
  {
    name: "Flow 40h can achieve Ci >= 7",
    test: () => {
      const ci = calculateCi(40, 7, 7, 5, 5, 2);
      return ci >= 7;
    }
  },
  {
    name: "All mid-range (5s) does not return Explorer",
    test: () => {
      const scores = { aq: 5, ri: 5, ci: 5, alpha: 5 };
      const arch = matchArchetype(scores);
      return arch.id !== "explorer";
    }
  },
  {
    name: "Negative inputs handled gracefully",
    test: () => {
      try {
        const aq = calculateAQ(-5, -5, -5, -5);
        return !isNaN(aq);
      } catch (e) {
        return false;
      }
    }
  },
  {
    name: "Very large inputs handled",
    test: () => {
      try {
        const aq = calculateAQ(1000, 1000, 1000, 1);
        return aq === 10; // Should cap at 10
      } catch (e) {
        return false;
      }
    }
  },
  {
    name: "Alpha calculation is geometric mean",
    test: () => {
      const alpha = calculateAlpha(8, 8, 8);
      return alpha === 8;
    }
  }
];

console.log("--- EDGE CASE TESTS ---\n");

edgeCaseTests.forEach(test => {
  const passed = test.test();

  if (passed) {
    results.edge.passed++;
    console.log(`✅ ${test.name}`);
  } else {
    results.edge.failed++;
    results.edge.failures.push({ test: test.name });
    console.log(`❌ ${test.name}`);
  }
});

console.log(`\nEDGE CASES: ${results.edge.passed}/${results.edge.passed + results.edge.failed} passed\n`);

// ============================================================
// 4. ARCHETYPE DISTRIBUTION TEST (1000 random samples)
// ============================================================

console.log("--- ARCHETYPE DISTRIBUTION (1000 random samples) ---\n");

const distribution = {};
archetypes.forEach(a => distribution[a.id] = 0);

for (let i = 0; i < 1000; i++) {
  // Generate realistic random scores (weighted toward middle, 2-8 range)
  const aq = Math.random() * 6 + 2;
  const ri = Math.random() * 6 + 2;
  const ci = Math.random() * 6 + 2;
  const alpha = calculateAlpha(aq, ri, ci);

  const arch = matchArchetype({ aq, ri, ci, alpha });
  distribution[arch.id]++;
}

// Sort by count descending
const sortedDist = Object.entries(distribution).sort((a, b) => b[1] - a[1]);

const warnings = [];
sortedDist.forEach(([id, count]) => {
  const pct = (count / 10).toFixed(1);
  let flag = "";
  if (count === 0) {
    flag = " ⚠️ NEVER TRIGGERED";
    warnings.push(`${id} was never triggered in 1000 samples`);
  } else if (count > 200) {
    flag = " ⚠️ OVER-REPRESENTED";
    warnings.push(`${id} is over-represented at ${pct}%`);
  }
  console.log(`  ${id}: ${pct}%${flag}`);
});

results.distribution = distribution;

if (warnings.length > 0) {
  console.log("\n⚠️ DISTRIBUTION WARNINGS:");
  warnings.forEach(w => console.log(`  - ${w}`));
}

// ============================================================
// 5. PLAYBOOK QUESTION COVERAGE TEST
// ============================================================

console.log("\n--- PLAYBOOK QUESTION COVERAGE ---\n");

const requiredKeys = ['energy', 'space', 'optionality', 'constraint', 'impact', 'identity', 'boldness', 'audience', 'flow', 'evolution', 'risk', 'admin', 'distraction', 'stagnation'];
const requiredTiers = {
  normal: ['low', 'mid', 'high'],
  audience: ['small', 'medium', 'large']
};

const missingPlaybook = [];

requiredKeys.forEach(key => {
  if (!personalizedReflections[key]) {
    missingPlaybook.push(`Missing key: ${key}`);
  } else {
    const tiers = key === 'audience' ? requiredTiers.audience : requiredTiers.normal;
    tiers.forEach(tier => {
      if (!personalizedReflections[key][tier]) {
        missingPlaybook.push(`Missing ${key}.${tier}`);
      }
    });
  }
});

if (missingPlaybook.length === 0) {
  console.log("✅ All playbook questions present for all 14 sliders");
} else {
  console.log("❌ Missing playbook questions:");
  missingPlaybook.forEach(m => console.log(`  - ${m}`));
}

results.coverage.playbook = missingPlaybook;

// ============================================================
// 6. RECOMMENDATION PATTERN COVERAGE TEST
// ============================================================

console.log("\n--- RECOMMENDATION COVERAGE ---\n");

const allPatterns = new Set(recommendations.flatMap(r => r.patterns));
const archetypeIds = archetypes.map(a => a.id);

const missingRecs = [];
const coveredArchetypes = [];

archetypeIds.forEach(id => {
  // Check if archetype id appears in any recommendation's patterns
  const hasCoverage = recommendations.some(r => r.patterns.includes(id));
  if (hasCoverage) {
    coveredArchetypes.push(id);
  } else {
    missingRecs.push(id);
  }
});

console.log(`Archetypes with recommendations: ${coveredArchetypes.length}/${archetypeIds.length}`);

if (missingRecs.length > 0) {
  console.log("⚠️ Archetypes missing dedicated recommendations:");
  missingRecs.forEach(m => console.log(`  - ${m}`));
}

results.coverage.recommendations = missingRecs;

// ============================================================
// FINAL SUMMARY
// ============================================================

console.log("\n" + "=".repeat(50));
console.log("FINAL SUMMARY");
console.log("=".repeat(50) + "\n");

const totalPassed = results.formula.passed + results.archetype.passed + results.edge.passed;
const totalFailed = results.formula.failed + results.archetype.failed + results.edge.failed;

console.log(`TOTAL TESTS: ${totalPassed}/${totalPassed + totalFailed} passed\n`);

if (results.formula.failures.length > 0) {
  console.log("Formula Failures:");
  results.formula.failures.forEach(f => {
    console.log(`  - ${f.test}: got ${f.actual}, expected ${f.expected.min}-${f.expected.max}`);
  });
}

if (results.archetype.failures.length > 0) {
  console.log("\nArchetype Failures:");
  results.archetype.failures.forEach(f => {
    console.log(`  - ${f.test}: got "${f.actual}", expected "${f.expected}"`);
    console.log(`    Scores: aq=${f.scores.aq}, ri=${f.scores.ri}, ci=${f.scores.ci}, alpha=${f.scores.alpha}`);
  });
}

if (results.edge.failures.length > 0) {
  console.log("\nEdge Case Failures:");
  results.edge.failures.forEach(f => {
    console.log(`  - ${f.test}`);
  });
}

// ============================================================
// SUGGESTIONS
// ============================================================

console.log("\n" + "=".repeat(50));
console.log("SUGGESTIONS");
console.log("=".repeat(50) + "\n");

const suggestions = [];

// Based on distribution
if (distribution.explorer > 100) {
  suggestions.push(`Explorer is catching ${(distribution.explorer/10).toFixed(1)}% of cases. Consider tightening other archetype checks or adding more specific archetypes for edge cases.`);
}

if (distribution.professional > 200) {
  suggestions.push(`Professional is over-represented at ${(distribution.professional/10).toFixed(1)}%. Consider narrowing its range or adding more specific mid-range archetypes.`);
}

// Check for never-triggered archetypes
Object.entries(distribution).forEach(([id, count]) => {
  if (count === 0) {
    suggestions.push(`${id} was never triggered in 1000 random samples. Its conditions may be too narrow or impossible to reach.`);
  }
});

// Based on failures
if (results.archetype.failures.length > 0) {
  suggestions.push(`${results.archetype.failures.length} archetype test(s) failed. Review the check conditions for: ${results.archetype.failures.map(f => f.expected).join(', ')}`);
}

// Based on coverage
if (missingRecs.length > 0) {
  suggestions.push(`Add recommendation patterns for: ${missingRecs.join(', ')}`);
}

// Formula-specific suggestions
if (results.formula.failures.some(f => f.test.includes("Ri"))) {
  suggestions.push("Ri formula may need adjustment. Check audience dilution factor.");
}

if (suggestions.length === 0) {
  suggestions.push("All tests passed! Engine appears healthy.");
}

suggestions.forEach((s, i) => {
  console.log(`${i + 1}. ${s}`);
});

console.log("\n" + "=".repeat(50));
console.log("TEST COMPLETE");
console.log("=".repeat(50));
