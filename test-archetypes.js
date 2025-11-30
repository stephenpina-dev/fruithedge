// ============================================================
// FRUITHEDGE ARCHETYPE TEST SUITE
// Run with: node test-archetypes.js
// ============================================================

// ============================================================
// CALCULATION FUNCTIONS (copied from app.js)
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

// Audience slider conversion (0-100 → 100 to 10M)
function sliderToAudience(sliderValue) {
  const minAudience = 100;
  const maxAudience = 10000000;
  const minLog = Math.log10(minAudience);
  const maxLog = Math.log10(maxAudience);
  const logValue = minLog + (sliderValue / 100) * (maxLog - minLog);
  return Math.round(Math.pow(10, logValue));
}

// ============================================================
// ARCHETYPES (copied from data.js) - Ordered MOST SPECIFIC to LEAST SPECIFIC
// ============================================================

const archetypes = [
  // === TIER 1: Check exceptional states first ===
  {
    id: 'legacy',
    name: 'The Legacy Builder',
    subtitle: 'Generational Impact',
    check: (s) => s.alpha >= 8,
    profile: 'You\'ve transcended personal success. Creating not for validation or money, but because you\'re the only one who can make THIS thing.',
    insight: 'Document everything. Teach. Build systems that can carry your vision forward.'
  },
  {
    id: 'thriving',
    name: 'The Thriving Creator',
    subtitle: 'All Systems Healthy',
    check: (s) => s.aq >= 7 && s.ri >= 7 && s.ci >= 7,
    profile: 'Freedom, resonance, and craft intensity all aligned. This is rare.',
    insight: 'Your job is protection, not expansion. Say no more than yes.'
  },

  // === TIER 2: Check specific imbalance patterns ===
  {
    id: 'burnout',
    name: 'The Burnout',
    subtitle: 'System Failure',
    check: (s) => s.aq < 3 && s.ri < 3 && s.ci < 3,
    profile: 'Everything is failing simultaneously. This isn\'t a productivity problem – it\'s a crisis.',
    insight: 'Stop everything. Recovery is the only priority.'
  },
  {
    id: 'hustler',
    name: 'The Hustler',
    subtitle: 'Grinding Without Freedom',
    check: (s) => s.aq < 4 && s.ci >= 6,
    profile: 'High output, low autonomy. You\'re producing constantly but feel trapped.',
    insight: 'Your intensity is your asset and your trap. What one constraint could you eliminate?'
  },
  {
    id: 'underground_gem',
    name: 'The Underground Gem',
    subtitle: 'Resonance Without Freedom',
    check: (s) => s.ri >= 6 && s.aq < 4,
    profile: 'Your work deeply connects with people, but you\'re strangled by constraints.',
    insight: 'You have proof your work matters. Now monetize that proof.'
  },
  {
    id: 'algorithm_slave',
    name: 'The Algorithm Slave',
    subtitle: 'Output Without Meaning',
    check: (s) => s.ci >= 6 && s.ri < 2.5,
    profile: 'You know how to produce. But you\'re optimizing for metrics at the expense of soul.',
    insight: 'Create one thing this month that will TANK algorithmically but make you proud in 10 years.'
  },
  {
    id: 'paralyzed_dreamer',
    name: 'The Paralyzed Dreamer',
    subtitle: 'Freedom Without Action',
    check: (s) => s.aq >= 6 && s.ci < 3,
    profile: 'You have the freedom to create but you\'re not using it.',
    insight: 'Freedom without output is just comfortable stagnation. Ship something embarrassingly small.'
  },
  {
    id: 'craftsperson',
    name: 'The Craftsperson',
    subtitle: 'Skill Without Message',
    check: (s) => s.ci >= 7 && s.ri < 5 && s.aq >= 4,
    profile: 'Technical mastery is evident. But the work lacks distinctive voice or emotional depth.',
    insight: 'What would you make if no one was watching? Add the vulnerability.'
  },
  {
    id: 'cult_leader',
    name: 'The Cult Leader',
    subtitle: 'Deep Connection, Narrow Reach',
    check: (s) => s.ri >= 7 && s.ci >= 4 && s.ci < 7 && s.aq >= 4,
    profile: 'Your audience would follow you anywhere. Deep loyalty, strong identity fit.',
    insight: 'Protect what made them love you in the first place. Scale slowly.'
  },
  {
    id: 'free_agent',
    name: 'The Free Agent',
    subtitle: 'Options Without Direction',
    check: (s) => s.aq >= 7 && s.ri < 6 && s.ci >= 3 && s.ci < 6,
    profile: 'Maximum optionality, moderate output and impact. Freedom is your asset and your excuse.',
    insight: 'Optionality without commitment is just expensive indecision. Pick a direction.'
  },

  // === TIER 3: Check range-based patterns ===
  {
    id: 'comeback',
    name: 'The Comeback Arc',
    subtitle: 'Rising From the Ashes',
    check: (s) => s.aq >= 5 && s.ri >= 5 && s.ci >= 2 && s.ci < 5,
    profile: 'You had a moment, then disappeared. Now returning with more wisdom.',
    insight: 'Your superpower is perspective earned through failure.'
  },
  {
    id: 'professional',
    name: 'The Professional',
    subtitle: 'Consistent Across All Fronts',
    check: (s) => s.aq >= 5 && s.aq <= 7.5 && s.ri >= 5 && s.ri <= 7.5 && s.ci >= 5 && s.ci <= 7.5,
    profile: 'Solid across the board. No critical weaknesses, no exceptional strengths.',
    insight: 'You\'re in the \'good enough\' zone. To break through, push one law to exceptional.'
  },
  {
    id: 'emerging',
    name: 'The Emerging Artist',
    subtitle: 'Finding Your Way',
    check: (s) => s.aq >= 3 && s.aq <= 6 && s.ri >= 3 && s.ri <= 6 && s.ci >= 3 && s.ci <= 6,
    profile: 'All metrics are moderate – you\'re in the messy middle of creative development.',
    insight: 'This is the plateau before the breakthrough. Pick your weakest law and attack it.'
  },
  {
    id: 'chaos',
    name: 'The Chaos Creator',
    subtitle: 'Thriving in Instability',
    check: (s) => s.aq < 4 && s.ci >= 5 && s.ri >= 5,
    profile: 'You create BECAUSE of chaos, not despite it.',
    insight: 'Find controlled chaos. Manufactured deadlines, artificial constraints.'
  },

  // === TIER 4: Fallback ===
  {
    id: 'explorer',
    name: 'The Explorer',
    subtitle: 'In Transition',
    check: (s) => true,
    profile: 'Your scores are mixed. You\'re experimenting, learning, finding your way.',
    insight: 'Track what energizes versus drains you.'
  }
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
// TEST CASES
// ============================================================

const testCases = [
  {
    name: "The Burnout",
    inputs: { E: 2, S: 2, O: 2, C: 8, I: 2, Id: 2, B: 2, audience: 90, F: 5, Ev: 2, R: 2, Ad: 50, D: 50, St: 8 },
    expectedArchetype: "burnout",
    expectedScores: { aq: "<4", ri: "<4", ci: "<4" }
  },
  {
    name: "The Hustler",
    inputs: { E: 3, S: 3, O: 3, C: 9, I: 5, Id: 5, B: 5, audience: 50, F: 50, Ev: 8, R: 8, Ad: 10, D: 10, St: 2 },
    expectedArchetype: "hustler",
    expectedScores: { aq: "<4", ci: ">=6" }
  },
  {
    name: "The Underground Gem",
    inputs: { E: 3, S: 3, O: 3, C: 9, I: 9, Id: 9, B: 9, audience: 10, F: 20, Ev: 5, R: 5, Ad: 20, D: 20, St: 5 },
    expectedArchetype: "underground_gem",
    expectedScores: { aq: "<4", ri: ">=6" }
  },
  {
    name: "The Algorithm Slave",
    inputs: { E: 6, S: 6, O: 6, C: 4, I: 2, Id: 2, B: 2, audience: 95, F: 45, Ev: 8, R: 8, Ad: 10, D: 10, St: 2 },
    expectedArchetype: "algorithm_slave",
    expectedScores: { ci: ">=6", ri: "<4" }
  },
  {
    name: "The Paralyzed Dreamer",
    inputs: { E: 9, S: 9, O: 9, C: 2, I: 5, Id: 5, B: 5, audience: 50, F: 5, Ev: 2, R: 2, Ad: 40, D: 40, St: 9 },
    expectedArchetype: "paralyzed_dreamer",
    expectedScores: { aq: ">=6", ci: "<4" }
  },
  {
    name: "The Emerging Artist",
    inputs: { E: 6, S: 6, O: 6, C: 5, I: 6, Id: 6, B: 6, audience: 50, F: 25, Ev: 6, R: 6, Ad: 20, D: 20, St: 5 },
    expectedArchetype: "emerging",
    expectedScores: { aq: "4-6", ri: "4-6", ci: "4-6" }
  },
  {
    name: "The Craftsperson",
    inputs: { E: 7, S: 7, O: 7, C: 4, I: 4, Id: 4, B: 4, audience: 70, F: 50, Ev: 9, R: 9, Ad: 8, D: 8, St: 2 },
    expectedArchetype: "craftsperson",
    expectedScores: { ci: ">=7", ri: "<5", aq: ">=4" }
  },
  {
    name: "The Cult Leader",
    inputs: { E: 7, S: 7, O: 7, C: 4, I: 9, Id: 9, B: 9, audience: 20, F: 25, Ev: 6, R: 6, Ad: 15, D: 15, St: 4 },
    expectedArchetype: "cult_leader",
    expectedScores: { ri: ">=7", ci: ">=4", aq: ">=4" }
  },
  {
    name: "The Free Agent",
    inputs: { E: 9, S: 9, O: 9, C: 2, I: 5, Id: 5, B: 5, audience: 50, F: 20, Ev: 5, R: 5, Ad: 15, D: 15, St: 5 },
    expectedArchetype: "free_agent",
    expectedScores: { aq: ">=7", ri: "<6", ci: "<6" }
  },
  {
    name: "The Professional",
    inputs: { E: 7, S: 7, O: 7, C: 4, I: 7, Id: 7, B: 7, audience: 50, F: 30, Ev: 7, R: 7, Ad: 15, D: 15, St: 4 },
    expectedArchetype: "professional",
    expectedScores: { aq: "5-7", ri: "5-7", ci: "5-7" }
  },
  {
    name: "The Thriving Creator",
    inputs: { E: 9, S: 9, O: 9, C: 2, I: 9, Id: 9, B: 9, audience: 30, F: 45, Ev: 9, R: 9, Ad: 8, D: 8, St: 2 },
    expectedArchetype: "thriving",
    expectedScores: { aq: ">=7", ri: ">=7", ci: ">=7" }
  },
  {
    name: "The Legacy Builder",
    inputs: { E: 10, S: 10, O: 10, C: 1, I: 10, Id: 10, B: 10, audience: 10, F: 55, Ev: 10, R: 10, Ad: 3, D: 3, St: 1 },
    expectedArchetype: "legacy",
    expectedScores: { alpha: ">=8" }
  },
  {
    name: "The Comeback Arc",
    inputs: { E: 7, S: 7, O: 7, C: 4, I: 7, Id: 7, B: 7, audience: 50, F: 15, Ev: 5, R: 5, Ad: 25, D: 25, St: 6 },
    expectedArchetype: "comeback",
    expectedScores: { aq: ">=5", ri: ">=5", ci: "3-5" }
  },
  {
    name: "The Explorer",
    inputs: { E: 6, S: 6, O: 6, C: 6, I: 4, Id: 4, B: 4, audience: 50, F: 20, Ev: 4, R: 4, Ad: 20, D: 20, St: 6 },
    expectedArchetype: "explorer",
    expectedScores: { note: "fallback - mixed scores" }
  }
];

// ============================================================
// TEST RUNNER
// ============================================================

function runTests() {
  console.log('============================================================');
  console.log('FRUITHEDGE ARCHETYPE TEST SUITE');
  console.log('============================================================\n');

  let passed = 0;
  let failed = 0;
  const failures = [];

  testCases.forEach((test, index) => {
    const { E, S, O, C, I, Id, B, audience, F, Ev, R, Ad, D, St } = test.inputs;

    // Convert audience slider to actual value
    const audienceValue = sliderToAudience(audience);

    // Calculate scores
    const aq = calculateAQ(E, S, O, C);
    const ri = calculateRi(I, Id, B, audienceValue);
    const ci = calculateCi(F, Ev, R, Ad, D, St);
    const alpha = calculateAlpha(aq, ri, ci);

    const scores = { aq, ri, ci, alpha };

    // Match archetype
    const archetype = matchArchetype(scores);
    const gotArchetype = archetype.id;
    const expectedArchetype = test.expectedArchetype;

    // Check if pass
    const isPass = gotArchetype === expectedArchetype;

    if (isPass) {
      passed++;
    } else {
      failed++;
      failures.push({
        test: test.name,
        expected: expectedArchetype,
        got: gotArchetype,
        scores
      });
    }

    // Format audience for display
    const audienceDisplay = audienceValue >= 1000000
      ? (audienceValue / 1000000).toFixed(1) + 'M'
      : audienceValue >= 1000
        ? Math.round(audienceValue / 1000) + 'K'
        : audienceValue;

    // Print result
    console.log(`TEST ${index + 1}: ${test.name}`);
    console.log(`  Inputs: E=${E}, S=${S}, O=${O}, C=${C}, I=${I}, Id=${Id}, B=${B}, A=${audience} (${audienceDisplay}), F=${F}, Ev=${Ev}, R=${R}, Ad=${Ad}, D=${D}, St=${St}`);
    console.log(`  Scores: AQ=${aq}, Ri=${ri}, Ci=${ci}, Alpha=${alpha}`);
    console.log(`  Expected: ${expectedArchetype}`);
    console.log(`  Got: ${gotArchetype}`);
    console.log(`  ${isPass ? '✅ PASS' : '❌ FAIL'}`);
    console.log('');
  });

  // Summary
  console.log('============================================================');
  console.log(`SUMMARY: ${passed}/${testCases.length} passed`);
  console.log('============================================================');

  if (failures.length > 0) {
    console.log('\nFAILURES:');
    failures.forEach(f => {
      console.log(`  - ${f.test}: expected "${f.expected}", got "${f.got}"`);
      console.log(`    Scores: AQ=${f.scores.aq}, Ri=${f.scores.ri}, Ci=${f.scores.ci}, Alpha=${f.scores.alpha}`);
    });
  }

  // Return exit code
  process.exit(failed > 0 ? 1 : 0);
}

// Run tests
runTests();
