// ============================================================
// FRUITHEDGE SMART RECOMMENDATION MATCHING TEST
// Run with: node test-smart-recommendations.js
// ============================================================

// ============================================================
// PATTERN DETECTION FUNCTIONS (copied from app.js)
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

  return {
    bottleneck,
    strength,
    average: avg,
    spread,
    shape,
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

// ============================================================
// BOTTLENECK → TOPIC MAPPING
// ============================================================

const bottleneckTopicMap = {
  // AQ Bottlenecks
  energy_bottleneck: ["recovery", "mindset"],
  space_bottleneck: ["productivity", "mindset"],
  optionality_bottleneck: ["business", "mindset"],
  constraint_bottleneck: ["business", "productivity"],

  // Ri Bottlenecks
  impact_bottleneck: ["connection", "craft"],
  identity_bottleneck: ["connection", "creativity"],
  boldness_bottleneck: ["mindset", "creativity"],
  audience_dilution: ["connection", "mindset"],

  // Ci Bottlenecks
  flow_bottleneck: ["productivity", "craft"],
  evolution_bottleneck: ["craft", "creativity"],
  risk_bottleneck: ["creativity", "mindset"],
  admin_bottleneck: ["productivity", "business"],
  distraction_bottleneck: ["productivity", "mindset"],
  stagnation_bottleneck: ["creativity", "mindset"],

  // Shapes/States
  burnout: ["recovery", "mindset"],
  crashed: ["recovery", "mindset"],
  soaring: ["craft", "business"],
  plateau: ["creativity", "mindset"],

  // Achievement states
  scale_achievement: ["business", "connection"],
  compounding: ["craft", "business"]
};

// ============================================================
// RECOMMENDATIONS DATA (from data.js with topics)
// ============================================================

const recommendations = [
  { id: 1, title: "The War of Art", type: "book", patterns: ["low_aq", "low_ci", "paralyzed", "paralyzed_dreamer", "ember"], topics: ["mindset"], style: "philosophical" },
  { id: 2, title: "Deep Work", type: "book", patterns: ["low_ci", "plateau", "grinder"], topics: ["productivity"], style: "tactical" },
  { id: 3, title: "So Good They Can't Ignore You", type: "book", patterns: ["underground_gem", "low_aq"], topics: ["craft", "business"], style: "scientific" },
  { id: 4, title: "Real Artists Don't Starve", type: "book", patterns: ["underground_gem", "low_aq"], topics: ["business"], style: "tactical" },
  { id: 5, title: "Keep Going", type: "book", patterns: ["burnout", "protect_magic", "plateau"], topics: ["mindset", "creativity"], style: "inspirational" },
  { id: 6, title: "The Practice: Shipping Creative Work", type: "book", patterns: ["paralyzed", "paralyzed_dreamer", "low_ci", "untapped", "ember", "grinder"], topics: ["mindset", "craft"], style: "philosophical" },
  { id: 7, title: "Essentialism", type: "book", patterns: ["low_aq", "low_ci", "plateau"], topics: ["productivity"], style: "tactical" },
  { id: 8, title: "Rest: Why You Get More Done When You Work Less", type: "book", patterns: ["burnout", "low_aq", "exhausted"], topics: ["recovery"], style: "scientific" },
  { id: 9, title: "Burnout: The Secret to Unlocking the Stress Cycle", type: "book", patterns: ["burnout", "low_aq", "low_ri", "exhausted"], topics: ["recovery", "mindset"], style: "scientific" },
  { id: 10, title: "Flow", type: "book", patterns: ["low_ci", "plateau", "grinder"], topics: ["craft", "productivity"], style: "scientific" },
  { id: 11, title: "Art & Fear", type: "book", patterns: ["paralyzed", "low_ci", "low_ri", "ember"], topics: ["mindset", "creativity"], style: "philosophical" },
  { id: 12, title: "The Dip", type: "book", patterns: ["plateau", "comeback", "grinder"], topics: ["mindset", "business"], style: "tactical" },
  { id: 13, title: "Ego Is the Enemy", type: "book", patterns: ["protect_magic", "high_aq", "high_ci"], topics: ["mindset"], style: "philosophical" },
  { id: 14, title: "Show Your Work!", type: "book", patterns: ["low_ri", "craftsperson_no_message", "hidden_gem"], topics: ["connection", "business"], style: "tactical" },
  { id: 15, title: "Big Magic", type: "book", patterns: ["paralyzed", "low_ci", "low_ri", "ember"], topics: ["creativity", "mindset"], style: "inspirational" },
  { id: 16, title: "Bird by Bird", type: "book", patterns: ["paralyzed", "low_ci", "ember"], topics: ["craft", "creativity"], style: "memoir" },
  { id: 17, title: "The Big Leap", type: "book", patterns: ["protect_magic", "high_aq", "plateau"], topics: ["mindset", "business"], style: "tactical" },
  { id: 18, title: "The Artist's Way", type: "book", patterns: ["burnout", "low_ci", "low_aq", "exhausted", "ember"], topics: ["creativity", "recovery"], style: "tactical" },
  { id: 19, title: "Steal Like an Artist", type: "book", patterns: ["plateau", "untapped", "low_ri", "ember"], topics: ["creativity", "craft"], style: "inspirational" },
  { id: 20, title: "Creative Confidence", type: "book", patterns: ["low_ri", "low_ci", "burnout", "ember"], topics: ["creativity", "mindset"], style: "tactical" },
  { id: 21, title: "Peak", type: "book", patterns: ["craftsperson_no_message", "low_ri", "grinder"], topics: ["craft"], style: "scientific" },
  { id: 22, title: "Daily Rituals", type: "book", patterns: ["plateau", "low_ci", "grinder"], topics: ["productivity", "craft"], style: "inspirational" },
  { id: 23, title: "Die Empty", type: "book", patterns: ["protect_magic", "high_aq", "high_ci"], topics: ["mindset", "productivity"], style: "philosophical" },
  { id: 24, title: "The Creative Act: A Way of Being", type: "book", patterns: ["protect_magic", "high_ri", "paralyzed_dreamer"], topics: ["creativity", "craft"], style: "philosophical" },
  { id: 25, title: "The Almanack of Naval Ravikant", type: "book", patterns: ["low_aq", "underground_gem"], topics: ["business", "mindset"], style: "philosophical" },
  { id: 26, title: "The Mamba Mentality", type: "book", patterns: ["craftsperson_no_message", "low_ri", "hustler", "grinder"], topics: ["mindset", "craft"], style: "memoir" },
  { id: 27, title: "Creativity, Inc.", type: "book", patterns: ["protect_magic", "high_ci", "plateau"], topics: ["business", "creativity"], style: "memoir" },
  { id: 28, title: "Turning Pro", type: "book", patterns: ["low_ci", "paralyzed", "comeback", "ember"], topics: ["mindset", "craft"], style: "philosophical" },
  { id: 29, title: "Relentless", type: "book", patterns: ["craftsperson_no_message", "low_ri", "hustler", "grinder"], topics: ["mindset"], style: "tactical" },
  { id: 30, title: "Can't Hurt Me", type: "book", patterns: ["burnout", "low_aq", "exhausted"], topics: ["mindset", "recovery"], style: "memoir" },
  { id: 31, title: "Make Good Art - Neil Gaiman", type: "youtube", patterns: ["burnout", "low_aq", "paralyzed_dreamer", "ember"], topics: ["mindset", "creativity"], style: "inspirational" },
  { id: 32, title: "The Gap - Ira Glass", type: "youtube", patterns: ["low_ci", "comeback", "ember"], topics: ["craft", "mindset"], style: "inspirational" },
  { id: 33, title: "Naval on How to Get Rich", type: "youtube", patterns: ["low_aq", "underground_gem"], topics: ["business"], style: "tactical" },
  { id: 34, title: "Jerry Seinfeld on How to Write a Joke", type: "youtube", patterns: ["craftsperson_no_message", "low_ri", "grinder"], topics: ["craft"], style: "tactical" },
  { id: 35, title: "Dave Chappelle on Walking Away from $50M", type: "youtube", patterns: ["protect_magic", "high_ri", "high_aq"], topics: ["mindset", "connection"], style: "inspirational" },
  { id: 36, title: "John Cleese on Creativity", type: "youtube", patterns: ["burnout", "low_aq", "plateau"], topics: ["creativity", "productivity"], style: "scientific" },
  { id: 37, title: "Pharrell Williams on Creativity", type: "youtube", patterns: ["craftsperson_no_message", "low_ri", "hidden_gem"], topics: ["creativity", "connection"], style: "inspirational" },
  { id: 38, title: "Tyler, the Creator on Finding Your Voice", type: "youtube", patterns: ["underground_gem", "low_aq", "ember"], topics: ["creativity", "mindset"], style: "inspirational" },
  { id: 39, title: "David Lynch on Creativity and Meditation", type: "youtube", patterns: ["burnout", "low_aq", "plateau"], topics: ["creativity", "recovery"], style: "philosophical" },
  { id: 40, title: "Quincy Jones: The Big Interview", type: "youtube", patterns: ["protect_magic", "high_ci"], topics: ["craft", "connection"], style: "memoir" },
  { id: 41, title: "How Billie Eilish Creates Music", type: "youtube", patterns: ["low_ri", "low_aq", "ember"], topics: ["craft", "creativity"], style: "inspirational" },
  { id: 42, title: "Hayao Miyazaki on Creative Exhaustion", type: "youtube", patterns: ["burnout", "exhausted", "protect_magic"], topics: ["recovery", "craft"], style: "memoir" },
  { id: 43, title: "Virgil Abloh's Last Lecture", type: "youtube", patterns: ["untapped", "low_ri", "paralyzed_dreamer"], topics: ["creativity", "business"], style: "inspirational" },
  { id: 44, title: "Ira Glass on Storytelling", type: "youtube", patterns: ["low_ri", "low_ci", "hidden_gem"], topics: ["craft", "connection"], style: "tactical" },
  { id: 45, title: "Nipsey Hussle on Marathon Mentality", type: "youtube", patterns: ["low_aq", "underground_gem", "hustler", "grinder"], topics: ["business", "mindset"], style: "inspirational" },
  { id: 46, title: "Rick Rubin's 60 Minutes Interview", type: "youtube", patterns: ["protect_magic", "high_ri"], topics: ["creativity", "craft"], style: "philosophical" },
  { id: 47, title: "Jiro Dreams of Sushi", type: "film", patterns: ["protect_magic", "high_ci", "grinder"], topics: ["craft"], style: "memoir" },
  { id: 48, title: "Stutz", type: "film", patterns: ["burnout", "low_aq", "exhausted"], topics: ["recovery", "mindset"], style: "scientific" },
  { id: 49, title: "Won't You Be My Neighbor?", type: "film", patterns: ["protect_magic", "high_ri", "hidden_gem"], topics: ["connection", "mindset"], style: "memoir" },
  { id: 50, title: "Free Solo", type: "film", patterns: ["protect_magic", "high_ci", "grinder"], topics: ["craft", "mindset"], style: "memoir" },
  { id: 51, title: "Searching for Sugar Man", type: "film", patterns: ["underground_gem", "hidden_gem", "ember"], topics: ["connection", "creativity"], style: "memoir" },
  { id: 52, title: "20 Feet from Stardom", type: "film", patterns: ["underground_gem", "hidden_gem", "low_aq"], topics: ["connection", "craft"], style: "memoir" }
];

// ============================================================
// SMART RECOMMENDATIONS FUNCTION
// ============================================================

function getSmartRecommendations(inputs, scores, count = 3) {
  const aqPattern = detectAQPattern(inputs);
  const riPattern = detectRiPattern(inputs);
  const ciPattern = detectCiPattern(inputs);

  const bottlenecks = [];

  // Check AQ bottlenecks
  if (aqPattern.bottleneck && aqPattern.raw[aqPattern.bottleneck.name] <= 4) {
    bottlenecks.push(aqPattern.bottleneck.name + '_bottleneck');
  }
  if (aqPattern.shape === 'crashed') bottlenecks.push('crashed');
  if (aqPattern.shape === 'soaring') bottlenecks.push('soaring');

  // Check Ri bottlenecks
  if (riPattern.bottleneck && riPattern.raw[riPattern.bottleneck.name] <= 4) {
    bottlenecks.push(riPattern.bottleneck.name + '_bottleneck');
  }
  if (scores && scores.ri >= 7 && inputs.audience >= 1000000) {
    bottlenecks.push('scale_achievement');
  }

  // Check Ci bottlenecks
  if (ciPattern.fuelBottleneck) {
    bottlenecks.push(ciPattern.fuelBottleneck.name + '_bottleneck');
  }
  if (ciPattern.worstDrag && ciPattern.worstDrag.value >= 7) {
    bottlenecks.push(ciPattern.worstDrag.name + '_bottleneck');
  }
  if (ciPattern.shape === 'crashed') bottlenecks.push('burnout');

  // Get recommended topics from bottlenecks
  const recommendedTopics = new Set();
  bottlenecks.forEach(b => {
    const topics = bottleneckTopicMap[b] || [];
    topics.forEach(t => recommendedTopics.add(t));
  });

  if (recommendedTopics.size === 0) {
    recommendedTopics.add('mindset');
    recommendedTopics.add('craft');
  }

  // Score each recommendation
  const scoredRecs = recommendations.map(rec => {
    let score = 0;

    const topicMatches = rec.topics.filter(t => recommendedTopics.has(t)).length;
    score += topicMatches * 10;

    const patterns = getPatterns(scores);
    const patternMatches = rec.patterns.filter(p => patterns.includes(p)).length;
    score += patternMatches * 5;

    return { ...rec, matchScore: score, topicMatches, patternMatches };
  });

  scoredRecs.sort((a, b) => b.matchScore - a.matchScore);

  const selected = [];
  const usedTypes = new Set();

  for (const rec of scoredRecs) {
    if (selected.length >= count) break;

    if (selected.length < 3 && usedTypes.has(rec.type)) {
      continue;
    }

    selected.push(rec);
    usedTypes.add(rec.type);
  }

  if (selected.length < count) {
    for (const rec of scoredRecs) {
      if (selected.length >= count) break;
      if (!selected.find(s => s.id === rec.id)) {
        selected.push(rec);
      }
    }
  }

  return {
    recommendations: selected,
    detectedBottlenecks: bottlenecks,
    recommendedTopics: Array.from(recommendedTopics)
  };
}

// ============================================================
// TESTS
// ============================================================

console.log('============================================================');
console.log('FRUITHEDGE SMART RECOMMENDATION MATCHING TEST');
console.log('============================================================\n');

// Test 1: Energy bottleneck should recommend recovery/mindset
console.log('TEST 1: Energy Bottleneck');
console.log('------------------------------------------------------------');
const energyInputs = {
  energy: 2, space: 7, optionality: 6, constraint: 4,
  impact: 6, identity: 6, boldness: 6, audience: 5000,
  flow: 30, evolution: 6, risk: 5, admin: 10, distraction: 10, stagnation: 3
};
const energyScores = { aq: 4.5, ri: 6.0, ci: 6.5, alpha: 5.5 };
const result1 = getSmartRecommendations(energyInputs, energyScores, 3);
console.log('  Bottlenecks:', result1.detectedBottlenecks);
console.log('  Topics:', result1.recommendedTopics);
console.log('  Recs:', result1.recommendations.map(r => r.title + ' [' + r.topics.join(',') + ']'));

const hasRecoveryOrMindset1 = result1.recommendedTopics.includes('recovery') || result1.recommendedTopics.includes('mindset');
console.log('  ✓ Topics include recovery or mindset:', hasRecoveryOrMindset1 ? 'PASS' : 'FAIL');
console.log('');

// Test 2: Boldness bottleneck should recommend creativity/mindset
console.log('TEST 2: Boldness Bottleneck');
console.log('------------------------------------------------------------');
const boldInputs = {
  energy: 7, space: 7, optionality: 7, constraint: 3,
  impact: 7, identity: 7, boldness: 2, audience: 5000,
  flow: 30, evolution: 6, risk: 5, admin: 10, distraction: 10, stagnation: 3
};
const boldScores = { aq: 7.0, ri: 5.0, ci: 6.5, alpha: 6.0 };
const result2 = getSmartRecommendations(boldInputs, boldScores, 3);
console.log('  Bottlenecks:', result2.detectedBottlenecks);
console.log('  Topics:', result2.recommendedTopics);
console.log('  Recs:', result2.recommendations.map(r => r.title + ' [' + r.topics.join(',') + ']'));

const hasCreativityOrMindset2 = result2.recommendedTopics.includes('creativity') || result2.recommendedTopics.includes('mindset');
console.log('  ✓ Topics include creativity or mindset:', hasCreativityOrMindset2 ? 'PASS' : 'FAIL');
console.log('');

// Test 3: High distraction should recommend productivity/mindset
console.log('TEST 3: Distraction Bottleneck');
console.log('------------------------------------------------------------');
const distractInputs = {
  energy: 7, space: 7, optionality: 7, constraint: 3,
  impact: 6, identity: 6, boldness: 6, audience: 5000,
  flow: 15, evolution: 6, risk: 5, admin: 10, distraction: 45, stagnation: 3
};
const distractScores = { aq: 7.0, ri: 6.0, ci: 3.5, alpha: 5.2 };
const result3 = getSmartRecommendations(distractInputs, distractScores, 3);
console.log('  Bottlenecks:', result3.detectedBottlenecks);
console.log('  Topics:', result3.recommendedTopics);
console.log('  Recs:', result3.recommendations.map(r => r.title + ' [' + r.topics.join(',') + ']'));

const hasProductivityOrMindset3 = result3.recommendedTopics.includes('productivity') || result3.recommendedTopics.includes('mindset');
console.log('  ✓ Topics include productivity or mindset:', hasProductivityOrMindset3 ? 'PASS' : 'FAIL');
console.log('');

// Test 4: Type variety check
console.log('TEST 4: Type Variety');
console.log('------------------------------------------------------------');
const types = new Set(result1.recommendations.map(r => r.type));
console.log('  Types in result1:', [...types]);
console.log('  ✓ Has multiple types:', types.size >= 2 ? 'PASS' : 'FAIL (only ' + types.size + ' type)');
console.log('');

// Test 5: Scale achievement
console.log('TEST 5: Scale Achievement');
console.log('------------------------------------------------------------');
const scaleInputs = {
  energy: 7, space: 7, optionality: 7, constraint: 3,
  impact: 8, identity: 8, boldness: 8, audience: 2000000,
  flow: 30, evolution: 7, risk: 6, admin: 10, distraction: 10, stagnation: 3
};
const scaleScores = { aq: 7.5, ri: 7.5, ci: 7.0, alpha: 7.3 };
const result5 = getSmartRecommendations(scaleInputs, scaleScores, 3);
console.log('  Bottlenecks:', result5.detectedBottlenecks);
console.log('  Topics:', result5.recommendedTopics);
console.log('  Recs:', result5.recommendations.map(r => r.title + ' [' + r.topics.join(',') + ']'));

const hasScaleTopics = result5.recommendedTopics.includes('business') || result5.recommendedTopics.includes('connection');
console.log('  ✓ Topics include business or connection:', hasScaleTopics ? 'PASS' : 'FAIL');
console.log('');

// Summary
console.log('============================================================');
console.log('TEST SUMMARY');
console.log('============================================================');
const allPassed = hasRecoveryOrMindset1 && hasCreativityOrMindset2 && hasProductivityOrMindset3 && types.size >= 2;
console.log(allPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED');
console.log('============================================================');
