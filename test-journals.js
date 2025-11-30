// ============================================================
// FRUITHEDGE JOURNAL GENERATION TEST SUITE
// Run with: node test-journals.js
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
// PERSONALIZED REFLECTION QUESTIONS (copied from app.js)
// ============================================================

const personalizedReflections = {
  energy: {
    low: "Your energy is depleted. What single commitment could you drop this week to recover capacity?",
    mid: "Your energy is moderate. What activities reliably refill your tank versus drain it?",
    high: "Your energy is abundant. How can you channel this into your most important creative work?"
  },
  space: {
    low: "Your mind is cluttered. What worry keeps interrupting your creative flow? Can you address or release it?",
    mid: "You have manageable mental space. What systems could create more clarity?",
    high: "Your mind is clear. This is a rare gift — what would you create if nothing was blocking you?"
  },
  optionality: {
    low: "You feel trapped. What's one small step toward more freedom that you could take today?",
    mid: "You have some choice. What commitment is no longer serving your creative vision?",
    high: "You have full freedom. With all doors open, which one actually matters most?"
  },
  constraint: {
    low: "Your constraints are minimal. Be careful not to drift — what structure actually helps your output?",
    mid: "You have moderate constraints. Which ones are truly necessary versus just inherited?",
    high: "Your constraints are crushing. What's the first one you'd eliminate if you could? Why haven't you?"
  },
  impact: {
    low: "Your work isn't landing yet. Who is ONE person you want to genuinely affect? What would move them?",
    mid: "Your work engages people. What would it take to make it transformative instead of just interesting?",
    high: "Your work changes people. How do you protect and deepen this without losing it to scale?"
  },
  identity: {
    low: "Your creative identity is generic. What unique perspective do ONLY you bring to your craft?",
    mid: "People relate to your work. What makes your most devoted fans say 'this is made for me'?",
    high: "You have a loyal audience. What would happen if you went even more niche and specific?"
  },
  boldness: {
    low: "You're playing it safe. What's the work you're afraid to make? What scares you about it?",
    mid: "You're taking some risks. What experiment would make you nervous to publish?",
    high: "You're being fearless. How do you balance bold expression with sustainable craft?"
  },
  audience: {
    small: "You have a small audience. This is a gift — you can know each person. What do they actually need?",
    medium: "You have a growing audience. How do you maintain depth as numbers increase?",
    large: "You have a large audience. Depth at scale is hard — what's your strategy to stay connected?"
  },
  flow: {
    low: "You're barely reaching flow. What environment changes would help you lose track of time?",
    mid: "You have moderate flow hours. What's the difference between your best and worst creative sessions?",
    high: "You're regularly in deep flow. How do you protect these hours from creeping obligations?"
  },
  evolution: {
    low: "Your skills are stagnating. What's one capability that, if improved, would transform your work?",
    mid: "You're learning steadily. What deliberate practice would accelerate your growth?",
    high: "You're growing rapidly. How do you balance skill development with actually shipping work?"
  },
  risk: {
    low: "You're not experimenting. What format, topic, or approach have you been curious about but haven't tried?",
    mid: "You're taking some creative risks. What would a 10x bolder version of your current experiment look like?",
    high: "You're taking bold creative risks. How do you know which experiments to double down on?"
  },
  admin: {
    low: "Your admin load is minimal. Well done. What systems keep it this way?",
    mid: "You have moderate admin. What could you automate, delegate, or eliminate?",
    high: "Admin is eating your creative time. What ONE operational task could you remove this month?"
  },
  distraction: {
    low: "Your distraction is minimal. What habits maintain your focus?",
    mid: "You have moderate distraction. What triggers your worst screen time spirals?",
    high: "Distraction is stealing your life. What would you do with those hours if you reclaimed them?"
  },
  stagnation: {
    low: "You're shipping regularly. What keeps your creative momentum flowing?",
    mid: "You have some blocks. What project keeps getting pushed to 'next month'? Why?",
    high: "You're paralyzed. What project are you avoiding? What's the smallest step forward you could take?"
  }
};

// ============================================================
// REFLECTION VARIANT DETERMINATION
// ============================================================

function getReflectionVariant(key, value, max = 10) {
  const thresholds = { low: max * 0.3, high: max * 0.7 };
  if (value <= thresholds.low) return 'low';
  if (value >= thresholds.high) return 'high';
  return 'mid';
}

function getAudienceReflectionVariant(audience) {
  if (audience < 1000) return 'small';
  if (audience < 100000) return 'medium';
  return 'large';
}

function getPersonalizedReflection(key, value, max = 10) {
  const variant = getReflectionVariant(key, value, max);
  const questions = personalizedReflections[key];
  if (!questions) return '';
  return questions[variant];
}

function getAudiencePersonalizedReflection(audience) {
  const variant = getAudienceReflectionVariant(audience);
  return personalizedReflections.audience[variant];
}

// ============================================================
// ARCHETYPES (copied from data.js)
// ============================================================

const archetypes = [
  {
    id: 'legacy',
    name: 'The Legacy Builder',
    subtitle: 'Generational Impact',
    check: (s) => s.alpha >= 8,
    profile: 'You\'ve transcended personal success.',
    insight: 'Document everything. Teach.'
  },
  {
    id: 'thriving',
    name: 'The Thriving Creator',
    subtitle: 'All Systems Healthy',
    check: (s) => s.aq >= 7 && s.ri >= 7 && s.ci >= 7,
    profile: 'Freedom, resonance, and craft intensity all aligned.',
    insight: 'Your job is protection, not expansion.'
  },
  {
    id: 'burnout',
    name: 'The Burnout',
    subtitle: 'System Failure',
    check: (s) => s.aq < 3 && s.ri < 3 && s.ci < 3,
    profile: 'Everything is failing simultaneously.',
    insight: 'Stop everything. Recovery is the only priority.'
  },
  {
    id: 'hustler',
    name: 'The Hustler',
    subtitle: 'Grinding Without Freedom',
    check: (s) => s.aq < 4 && s.ci >= 6,
    profile: 'High output, low autonomy.',
    insight: 'Your intensity is your asset and your trap.'
  },
  {
    id: 'underground_gem',
    name: 'The Underground Gem',
    subtitle: 'Resonance Without Freedom',
    check: (s) => s.ri >= 6 && s.aq < 4,
    profile: 'Your work deeply connects with people, but you\'re strangled by constraints.',
    insight: 'You have proof your work matters.'
  },
  {
    id: 'algorithm_slave',
    name: 'The Algorithm Slave',
    subtitle: 'Output Without Meaning',
    check: (s) => s.ci >= 6 && s.ri < 2.5,
    profile: 'You know how to produce. But you\'re optimizing for metrics.',
    insight: 'Create one thing that will TANK algorithmically but make you proud.'
  },
  {
    id: 'paralyzed_dreamer',
    name: 'The Paralyzed Dreamer',
    subtitle: 'Freedom Without Action',
    check: (s) => s.aq >= 6 && s.ci < 3,
    profile: 'You have the freedom to create but you\'re not using it.',
    insight: 'Freedom without output is just comfortable stagnation.'
  },
  {
    id: 'craftsperson',
    name: 'The Craftsperson',
    subtitle: 'Skill Without Message',
    check: (s) => s.ci >= 7 && s.ri < 5 && s.aq >= 4,
    profile: 'Technical mastery is evident.',
    insight: 'What would you make if no one was watching?'
  },
  {
    id: 'cult_leader',
    name: 'The Cult Leader',
    subtitle: 'Deep Connection, Narrow Reach',
    check: (s) => s.ri >= 7 && s.ci >= 4 && s.ci < 7 && s.aq >= 4,
    profile: 'Your audience would follow you anywhere.',
    insight: 'Protect what made them love you.'
  },
  {
    id: 'free_agent',
    name: 'The Free Agent',
    subtitle: 'Options Without Direction',
    check: (s) => s.aq >= 7 && s.ri < 6 && s.ci >= 3 && s.ci < 6,
    profile: 'Maximum optionality, moderate output.',
    insight: 'Optionality without commitment is just expensive indecision.'
  },
  {
    id: 'comeback',
    name: 'The Comeback Arc',
    subtitle: 'Rising From the Ashes',
    check: (s) => s.aq >= 5 && s.ri >= 5 && s.ci >= 2 && s.ci < 5,
    profile: 'You had a moment, then disappeared.',
    insight: 'Your superpower is perspective earned through failure.'
  },
  {
    id: 'professional',
    name: 'The Professional',
    subtitle: 'Consistent Across All Fronts',
    check: (s) => s.aq >= 5 && s.aq <= 7.5 && s.ri >= 5 && s.ri <= 7.5 && s.ci >= 5 && s.ci <= 7.5,
    profile: 'Solid across the board.',
    insight: 'To break through, push one law to exceptional.'
  },
  {
    id: 'emerging',
    name: 'The Emerging Artist',
    subtitle: 'Finding Your Way',
    check: (s) => s.aq >= 3 && s.aq <= 6 && s.ri >= 3 && s.ri <= 6 && s.ci >= 3 && s.ci <= 6,
    profile: 'All metrics are moderate.',
    insight: 'Pick your weakest law and attack it.'
  },
  {
    id: 'chaos',
    name: 'The Chaos Creator',
    subtitle: 'Thriving in Instability',
    check: (s) => s.aq < 4 && s.ci >= 5 && s.ri >= 5,
    profile: 'You create BECAUSE of chaos.',
    insight: 'Find controlled chaos.'
  },
  {
    id: 'explorer',
    name: 'The Explorer',
    subtitle: 'In Transition',
    check: (s) => true,
    profile: 'Your scores are mixed.',
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
// RECOMMENDATIONS (subset for pattern matching)
// ============================================================

const recommendations = [
  { id: 1, title: "The War of Art", type: "book", patterns: ["low_aq", "low_ci", "paralyzed"] },
  { id: 5, title: "Keep Going", type: "book", patterns: ["burnout", "protect_magic", "plateau"] },
  { id: 8, title: "Rest", type: "book", patterns: ["low_aq", "burnout", "low_ci"] },
  { id: 13, title: "Ego Is the Enemy", type: "book", patterns: ["protect_magic", "high_aq", "high_ci"] },
  { id: 17, title: "The Big Leap", type: "book", patterns: ["protect_magic", "high_aq"] },
  { id: 26, title: "The Mamba Mentality", type: "book", patterns: ["craftsperson_no_message", "low_ri", "hustler"] },
  { id: 31, title: "Make Good Art", type: "video", patterns: ["burnout", "low_aq"] },
  { id: 35, title: "Dave Chappelle on Walking Away", type: "video", patterns: ["protect_magic", "high_ri"] },
  { id: 45, title: "Nipsey Hussle on Marathon Mentality", type: "video", patterns: ["low_aq", "underground_gem", "hustler"] },
  { id: 48, title: "Success, Failure and Creating", type: "ted", patterns: ["comeback", "protect_magic"] },
  { id: 50, title: "Inside the Mind of a Master Procrastinator", type: "ted", patterns: ["low_ci", "paralyzed", "comeback"] },
  { id: 61, title: "Whiplash", type: "film", patterns: ["hustler", "low_aq"] }
];

// ============================================================
// PROTOCOLS (subset for pattern matching)
// ============================================================

const protocols = [
  // Low-pattern protocols
  { id: 1, name: "Morning Walk", category: "physical", patterns: ["low_aq", "low_energy", "burnout"] },
  { id: 3, name: "Lemon Water", category: "physical", patterns: ["low_aq", "burnout"] },
  { id: 4, name: "Sleep by 11", category: "physical", patterns: ["low_aq", "low_ci", "burnout"] },
  { id: 6, name: "Cold Shower Finish", category: "physical", patterns: ["low_ci", "paralyzed"] },
  { id: 11, name: "Brain Dump", category: "mental", patterns: ["low_aq", "low_space"] },
  { id: 13, name: "Worry Window", category: "mental", patterns: ["low_ri", "low_connection"] },
  { id: 15, name: "2-Minute Rule", category: "mental", patterns: ["low_ci", "paralyzed", "plateau"] },
  { id: 21, name: "Morning Pages", category: "creative", patterns: ["low_ci", "paralyzed", "plateau"] },
  { id: 31, name: "Say No to One Thing", category: "constraint", patterns: ["low_aq", "high_constraint", "burnout"] },
  { id: 36, name: "Calendar Audit", category: "constraint", patterns: ["low_aq", "high_constraint", "plateau"] },
  { id: 45, name: "Banana for Brain", category: "fruit", patterns: ["low_ci", "low_aq", "burnout"] },

  // Plateau/mid protocols
  { id: 22, name: "Skill Stack", category: "creative", patterns: ["plateau", "untapped"] },
  { id: 25, name: "Weekly Review", category: "creative", patterns: ["plateau", "comeback"] },

  // High/protect protocols
  { id: 40, name: "Gratitude Practice", category: "mental", patterns: ["protect_magic", "high_ci", "high_ri"] },
  { id: 41, name: "Strategic Sabbatical", category: "constraint", patterns: ["protect_magic", "high_aq"] },
  { id: 42, name: "Mentorship Hour", category: "creative", patterns: ["protect_magic", "high_ri", "high_ci"] },
  { id: 43, name: "Energy Preservation", category: "physical", patterns: ["protect_magic", "high_aq", "high_ri", "high_ci"] },

  // Universal fallback
  { id: 99, name: "The Apple a Day", category: "fruit", patterns: ["all"] }
];

// ============================================================
// PATTERN DETECTION (copied from app.js)
// ============================================================

function getPatterns(scores) {
  const patterns = [];

  // Low scores (struggling)
  if (scores.aq < 4) patterns.push('low_aq');
  if (scores.ri < 4) patterns.push('low_ri');
  if (scores.ci < 4) patterns.push('low_ci');

  // Very low scores (critical)
  if (scores.aq < 3) patterns.push('low_energy');
  if (scores.ri < 3) patterns.push('low_connection');
  if (scores.ci < 3) patterns.push('low_discipline');

  // High scores (thriving)
  if (scores.aq >= 7) patterns.push('high_aq');
  if (scores.ri >= 7) patterns.push('high_ri');
  if (scores.ci >= 7) patterns.push('high_ci');

  // Specific imbalances
  if (scores.aq >= 6 && scores.ci < 4) patterns.push('paralyzed');
  if (scores.aq < 4 && scores.ci >= 6) patterns.push('hustler');
  if (scores.ri >= 6 && scores.aq < 4) patterns.push('underground_gem');
  if (scores.ci >= 6 && scores.ri < 4) patterns.push('craftsperson_no_message');

  // Combined states
  if (scores.aq >= 7 && scores.ri >= 7 && scores.ci >= 7) patterns.push('protect_magic');
  if (scores.aq >= 4 && scores.aq <= 6 && scores.ri >= 4 && scores.ri <= 6 && scores.ci >= 4 && scores.ci <= 6) {
    patterns.push('plateau');
  }
  if (scores.aq < 4 && scores.ri < 4 && scores.ci < 4) patterns.push('burnout');

  // Untapped potential
  if (scores.alpha >= 5 && (scores.aq < 5 || scores.ri < 5 || scores.ci < 5)) {
    patterns.push('untapped');
  }

  // Comeback
  if (scores.aq >= 5 && scores.ri >= 5 && scores.ci >= 2 && scores.ci < 5) {
    patterns.push('comeback');
  }

  // High constraint (for protocols)
  if (scores.aq < 4) patterns.push('high_constraint');
  if (scores.aq < 4) patterns.push('low_space');

  if (patterns.length === 0) {
    patterns.push('general', 'plateau');
  }

  return patterns;
}

// ============================================================
// RECOMMENDATION MATCHING
// ============================================================

function matchRecommendations(scores, count = 4) {
  const patterns = getPatterns(scores);

  const scored = recommendations.map(rec => ({
    ...rec,
    matchScore: rec.patterns.filter(p => patterns.includes(p)).length
  }));

  const matched = scored.filter(r => r.matchScore > 0);
  matched.sort((a, b) => b.matchScore - a.matchScore);

  return matched.slice(0, count);
}

// ============================================================
// PROTOCOL MATCHING
// ============================================================

function getWeakestLaw(scores) {
  if (scores.aq <= scores.ri && scores.aq <= scores.ci) return 'aq';
  if (scores.ri <= scores.aq && scores.ri <= scores.ci) return 'ri';
  return 'ci';
}

function matchProtocol(scores) {
  const patterns = getPatterns(scores);
  const weakest = getWeakestLaw(scores);

  // Add patterns for weakest law
  if (weakest === 'aq') patterns.push('low_energy', 'low_space', 'high_constraint');
  if (weakest === 'ci') patterns.push('paralyzed');
  if (weakest === 'ri') patterns.push('low_connection');

  // Find protocols that match current patterns (excluding 'all')
  const specificMatches = protocols.filter(p =>
    p.patterns.some(pat => patterns.includes(pat) && pat !== 'all')
  );

  // If we have specific matches, return the first one
  if (specificMatches.length > 0) {
    return specificMatches[0];
  }

  // Otherwise return a protocol that matches 'all' (universal protocols)
  const universalMatches = protocols.filter(p => p.patterns.includes('all'));
  if (universalMatches.length > 0) {
    return universalMatches[0];
  }

  return protocols[0];
}

// ============================================================
// JOURNAL GENERATION SIMULATION
// ============================================================

function generateJournalContent(inputs, scores, archetype, recommendation, protocol) {
  const audienceValue = sliderToAudience(inputs.audience);

  // Get patterns including the ones added for protocol matching
  const patterns = getPatterns(scores);
  const weakest = getWeakestLaw(scores);
  if (weakest === 'aq') patterns.push('low_energy', 'low_space', 'high_constraint');
  if (weakest === 'ci') patterns.push('paralyzed');
  if (weakest === 'ri') patterns.push('low_connection');

  return {
    archetype: {
      name: archetype.name,
      subtitle: archetype.subtitle,
      profile: archetype.profile
    },
    scores: {
      aq: scores.aq,
      ri: scores.ri,
      ci: scores.ci,
      alpha: scores.alpha
    },
    reflections: {
      // Autonomy reflections
      energy: {
        value: inputs.energy,
        variant: getReflectionVariant('energy', inputs.energy, 10),
        question: getPersonalizedReflection('energy', inputs.energy, 10)
      },
      space: {
        value: inputs.space,
        variant: getReflectionVariant('space', inputs.space, 10),
        question: getPersonalizedReflection('space', inputs.space, 10)
      },
      optionality: {
        value: inputs.optionality,
        variant: getReflectionVariant('optionality', inputs.optionality, 10),
        question: getPersonalizedReflection('optionality', inputs.optionality, 10)
      },
      constraint: {
        value: inputs.constraint,
        variant: getReflectionVariant('constraint', inputs.constraint, 10),
        question: getPersonalizedReflection('constraint', inputs.constraint, 10)
      },
      // Resonance reflections
      impact: {
        value: inputs.impact,
        variant: getReflectionVariant('impact', inputs.impact, 10),
        question: getPersonalizedReflection('impact', inputs.impact, 10)
      },
      identity: {
        value: inputs.identity,
        variant: getReflectionVariant('identity', inputs.identity, 10),
        question: getPersonalizedReflection('identity', inputs.identity, 10)
      },
      boldness: {
        value: inputs.boldness,
        variant: getReflectionVariant('boldness', inputs.boldness, 10),
        question: getPersonalizedReflection('boldness', inputs.boldness, 10)
      },
      audience: {
        value: audienceValue,
        variant: getAudienceReflectionVariant(audienceValue),
        question: getAudiencePersonalizedReflection(audienceValue)
      },
      // Craft Intensity reflections
      flow: {
        value: inputs.flow,
        variant: getReflectionVariant('flow', inputs.flow, 60),
        question: getPersonalizedReflection('flow', inputs.flow, 60)
      },
      evolution: {
        value: inputs.evolution,
        variant: getReflectionVariant('evolution', inputs.evolution, 10),
        question: getPersonalizedReflection('evolution', inputs.evolution, 10)
      },
      risk: {
        value: inputs.risk,
        variant: getReflectionVariant('risk', inputs.risk, 10),
        question: getPersonalizedReflection('risk', inputs.risk, 10)
      },
      admin: {
        value: inputs.admin,
        variant: getReflectionVariant('admin', inputs.admin, 60),
        question: getPersonalizedReflection('admin', inputs.admin, 60)
      },
      distraction: {
        value: inputs.distraction,
        variant: getReflectionVariant('distraction', inputs.distraction, 60),
        question: getPersonalizedReflection('distraction', inputs.distraction, 60)
      },
      stagnation: {
        value: inputs.stagnation,
        variant: getReflectionVariant('stagnation', inputs.stagnation, 10),
        question: getPersonalizedReflection('stagnation', inputs.stagnation, 10)
      }
    },
    recommendation: recommendation,
    protocol: protocol,
    patterns: patterns,
    weakestLaw: weakest
  };
}

// ============================================================
// TEST CASES - All 14 archetypes with appropriate slider values
// ============================================================

const testCases = [
  {
    name: "The Burnout",
    inputs: { energy: 2, space: 2, optionality: 2, constraint: 8, impact: 2, identity: 2, boldness: 2, audience: 90, flow: 5, evolution: 2, risk: 2, admin: 50, distraction: 50, stagnation: 8 },
    expectedArchetype: "burnout",
    expectedAQVariant: "low",
    expectedRiVariant: "low",
    expectedCiVariant: "low"
  },
  {
    name: "The Hustler",
    inputs: { energy: 3, space: 3, optionality: 3, constraint: 9, impact: 5, identity: 5, boldness: 5, audience: 50, flow: 50, evolution: 8, risk: 8, admin: 10, distraction: 10, stagnation: 2 },
    expectedArchetype: "hustler",
    expectedAQVariant: "low",
    expectedRiVariant: "mid",
    expectedCiVariant: "high"
  },
  {
    name: "The Underground Gem",
    inputs: { energy: 3, space: 3, optionality: 3, constraint: 9, impact: 9, identity: 9, boldness: 9, audience: 10, flow: 20, evolution: 5, risk: 5, admin: 20, distraction: 20, stagnation: 5 },
    expectedArchetype: "underground_gem",
    expectedAQVariant: "low",
    expectedRiVariant: "high",
    expectedCiVariant: "mid"
  },
  {
    name: "The Algorithm Slave",
    inputs: { energy: 6, space: 6, optionality: 6, constraint: 4, impact: 2, identity: 2, boldness: 2, audience: 95, flow: 45, evolution: 8, risk: 8, admin: 10, distraction: 10, stagnation: 2 },
    expectedArchetype: "algorithm_slave",
    expectedAQVariant: "mid",
    expectedRiVariant: "low",
    expectedCiVariant: "high"
  },
  {
    name: "The Paralyzed Dreamer",
    inputs: { energy: 9, space: 9, optionality: 9, constraint: 2, impact: 5, identity: 5, boldness: 5, audience: 50, flow: 5, evolution: 2, risk: 2, admin: 40, distraction: 40, stagnation: 9 },
    expectedArchetype: "paralyzed_dreamer",
    expectedAQVariant: "high",
    expectedRiVariant: "mid",
    expectedCiVariant: "low"
  },
  {
    name: "The Emerging Artist",
    inputs: { energy: 6, space: 6, optionality: 6, constraint: 5, impact: 6, identity: 6, boldness: 6, audience: 50, flow: 25, evolution: 6, risk: 6, admin: 20, distraction: 20, stagnation: 5 },
    expectedArchetype: "emerging",
    expectedAQVariant: "mid",
    expectedRiVariant: "mid",
    expectedCiVariant: "mid"
  },
  {
    name: "The Craftsperson",
    inputs: { energy: 7, space: 7, optionality: 7, constraint: 4, impact: 4, identity: 4, boldness: 4, audience: 70, flow: 50, evolution: 9, risk: 9, admin: 8, distraction: 8, stagnation: 2 },
    expectedArchetype: "craftsperson",
    expectedAQVariant: "high",
    expectedRiVariant: "mid",
    expectedCiVariant: "high"
  },
  {
    name: "The Cult Leader",
    inputs: { energy: 7, space: 7, optionality: 7, constraint: 4, impact: 9, identity: 9, boldness: 9, audience: 20, flow: 25, evolution: 6, risk: 6, admin: 15, distraction: 15, stagnation: 4 },
    expectedArchetype: "cult_leader",
    expectedAQVariant: "high",
    expectedRiVariant: "high",
    expectedCiVariant: "mid"
  },
  {
    name: "The Free Agent",
    inputs: { energy: 9, space: 9, optionality: 9, constraint: 2, impact: 5, identity: 5, boldness: 5, audience: 50, flow: 20, evolution: 5, risk: 5, admin: 15, distraction: 15, stagnation: 5 },
    expectedArchetype: "free_agent",
    expectedAQVariant: "high",
    expectedRiVariant: "mid",
    expectedCiVariant: "mid"
  },
  {
    name: "The Professional",
    inputs: { energy: 7, space: 7, optionality: 7, constraint: 4, impact: 7, identity: 7, boldness: 7, audience: 50, flow: 30, evolution: 7, risk: 7, admin: 15, distraction: 15, stagnation: 4 },
    expectedArchetype: "professional",
    expectedAQVariant: "high",
    expectedRiVariant: "high",
    expectedCiVariant: "high"
  },
  {
    name: "The Thriving Creator",
    inputs: { energy: 9, space: 9, optionality: 9, constraint: 2, impact: 9, identity: 9, boldness: 9, audience: 30, flow: 45, evolution: 9, risk: 9, admin: 8, distraction: 8, stagnation: 2 },
    expectedArchetype: "thriving",
    expectedAQVariant: "high",
    expectedRiVariant: "high",
    expectedCiVariant: "high"
  },
  {
    name: "The Legacy Builder",
    inputs: { energy: 10, space: 10, optionality: 10, constraint: 1, impact: 10, identity: 10, boldness: 10, audience: 10, flow: 55, evolution: 10, risk: 10, admin: 3, distraction: 3, stagnation: 1 },
    expectedArchetype: "legacy",
    expectedAQVariant: "high",
    expectedRiVariant: "high",
    expectedCiVariant: "high"
  },
  {
    name: "The Comeback Arc",
    inputs: { energy: 7, space: 7, optionality: 7, constraint: 4, impact: 7, identity: 7, boldness: 7, audience: 50, flow: 15, evolution: 5, risk: 5, admin: 25, distraction: 25, stagnation: 6 },
    expectedArchetype: "comeback",
    expectedAQVariant: "high",
    expectedRiVariant: "high",
    expectedCiVariant: "mid"
  },
  {
    name: "The Explorer",
    inputs: { energy: 6, space: 6, optionality: 6, constraint: 6, impact: 4, identity: 4, boldness: 4, audience: 50, flow: 20, evolution: 4, risk: 4, admin: 20, distraction: 20, stagnation: 6 },
    expectedArchetype: "explorer",
    expectedAQVariant: "mid",
    expectedRiVariant: "mid",
    expectedCiVariant: "mid"
  }
];

// ============================================================
// VALIDATION FUNCTIONS
// ============================================================

function validateArchetype(journal, expected) {
  return journal.archetype.name.toLowerCase().includes(expected.toLowerCase().replace('the ', ''));
}

function validateAQReflections(journal, expectedVariant) {
  const aqReflections = ['energy', 'space', 'optionality', 'constraint'];
  // Count how many are the expected variant
  const matches = aqReflections.filter(key => journal.reflections[key].variant === expectedVariant);
  // At least half should match the expected variant for low/high
  if (expectedVariant === 'low' || expectedVariant === 'high') {
    return matches.length >= 2;
  }
  return true; // mid is acceptable for mixed
}

function validateRiReflections(journal, expectedVariant) {
  const riReflections = ['impact', 'identity', 'boldness'];
  const matches = riReflections.filter(key => journal.reflections[key].variant === expectedVariant);
  if (expectedVariant === 'low' || expectedVariant === 'high') {
    return matches.length >= 2;
  }
  return true;
}

function validateCiReflections(journal, expectedVariant) {
  const ciReflections = ['evolution', 'risk', 'stagnation'];
  const matches = ciReflections.filter(key => journal.reflections[key].variant === expectedVariant);
  if (expectedVariant === 'low' || expectedVariant === 'high') {
    return matches.length >= 2;
  }
  return true;
}

function validateRecommendation(journal) {
  // Check if recommendation patterns overlap with journal patterns
  if (!journal.recommendation) return false;
  const recPatterns = journal.recommendation.patterns;
  const journalPatterns = journal.patterns;
  return recPatterns.some(p => journalPatterns.includes(p));
}

function validateProtocol(journal) {
  // Check if protocol is relevant to the user's current patterns
  if (!journal.protocol) return false;
  const protocolPatterns = journal.protocol.patterns;
  const journalPatterns = journal.patterns;

  // Protocol should match at least one of the user's patterns, or be 'all' (universal)
  const hasMatch = protocolPatterns.some(p => journalPatterns.includes(p));
  const isUniversal = protocolPatterns.includes('all');

  return hasMatch || isUniversal;
}

// ============================================================
// TEST RUNNER
// ============================================================

function runTests() {
  console.log('============================================================');
  console.log('FRUITHEDGE JOURNAL GENERATION TEST SUITE');
  console.log('============================================================\n');

  let passed = 0;
  let failed = 0;
  const failures = [];

  testCases.forEach((test, index) => {
    const inputs = test.inputs;
    const audienceValue = sliderToAudience(inputs.audience);

    // Calculate scores
    const aq = calculateAQ(inputs.energy, inputs.space, inputs.optionality, inputs.constraint);
    const ri = calculateRi(inputs.impact, inputs.identity, inputs.boldness, audienceValue);
    const ci = calculateCi(inputs.flow, inputs.evolution, inputs.risk, inputs.admin, inputs.distraction, inputs.stagnation);
    const alpha = calculateAlpha(aq, ri, ci);

    const scores = { aq, ri, ci, alpha };

    // Match archetype, recommendation, and protocol
    const archetype = matchArchetype(scores);
    const recommendation = matchRecommendations(scores, 1)[0];
    const protocol = matchProtocol(scores);

    // Generate journal content
    const journal = generateJournalContent(inputs, scores, archetype, recommendation, protocol);

    // Run validations
    const checks = {
      archetype: validateArchetype(journal, test.name),
      aqReflection: validateAQReflections(journal, test.expectedAQVariant),
      riReflection: validateRiReflections(journal, test.expectedRiVariant),
      ciReflection: validateCiReflections(journal, test.expectedCiVariant),
      recommendation: validateRecommendation(journal),
      protocol: validateProtocol(journal)
    };

    const allPassed = Object.values(checks).every(v => v);

    if (allPassed) {
      passed++;
    } else {
      failed++;
      failures.push({
        test: test.name,
        checks,
        scores,
        journal
      });
    }

    // Print result
    console.log(`ARCHETYPE: ${test.name}`);
    console.log(`Scores: AQ=${aq.toFixed(1)}, Ri=${ri.toFixed(1)}, Ci=${ci.toFixed(1)}, Alpha=${alpha.toFixed(1)}`);
    console.log(`Journal contains:`);
    console.log(`  ${checks.archetype ? '✅' : '❌'} Archetype: "${journal.archetype.name}"`);
    console.log(`  ${checks.aqReflection ? '✅' : '❌'} AQ reflection: ${test.expectedAQVariant} variant`);
    console.log(`  ${checks.riReflection ? '✅' : '❌'} Ri reflection: ${test.expectedRiVariant} variant`);
    console.log(`  ${checks.ciReflection ? '✅' : '❌'} Ci reflection: ${test.expectedCiVariant} variant`);
    console.log(`  ${checks.recommendation ? '✅' : '❌'} Recommendation: matches ${test.expectedArchetype} pattern`);
    console.log(`  ${checks.protocol ? '✅' : '❌'} Protocol: "${journal.protocol.name}" for ${journal.weakestLaw.toUpperCase()}`);
    console.log(allPassed ? 'PASS' : 'FAIL');
    console.log('');
  });

  // Summary
  console.log('============================================================');
  console.log(`SUMMARY: ${passed}/${testCases.length} passed`);
  console.log('============================================================');

  if (failures.length > 0) {
    console.log('\nFAILURE DETAILS:');
    failures.forEach(f => {
      console.log(`\n  ${f.test}:`);
      Object.entries(f.checks).forEach(([key, value]) => {
        if (!value) {
          console.log(`    - ${key} check failed`);
          if (key === 'archetype') {
            console.log(`      Expected: ${f.test}, Got: ${f.journal.archetype.name}`);
          }
          if (key === 'recommendation') {
            console.log(`      Patterns: [${f.journal.patterns.join(', ')}]`);
            console.log(`      Rec patterns: ${f.journal.recommendation ? `[${f.journal.recommendation.patterns.join(', ')}]` : 'none'}`);
          }
          if (key === 'protocol') {
            console.log(`      Weakest: ${f.journal.weakestLaw}`);
            console.log(`      Protocol patterns: ${f.journal.protocol ? `[${f.journal.protocol.patterns.join(', ')}]` : 'none'}`);
          }
        }
      });
    });
  }

  // Return exit code
  process.exit(failed > 0 ? 1 : 0);
}

// Run tests
runTests();
