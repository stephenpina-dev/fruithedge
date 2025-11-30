// ============================================================
// FRUITHEDGE RECOMMENDATION COVERAGE TEST
// Run with: node test-recommendations.js
// ============================================================

// ============================================================
// PATTERN DETECTION (copied from app.js - MUST STAY IN SYNC!)
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

  // Untapped potential — good alpha but weak area
  if (scores.alpha >= 5 && (scores.aq < 5 || scores.ri < 5 || scores.ci < 5)) {
    patterns.push('untapped');
  }

  // Comeback — decent autonomy/resonance but low craft
  if (scores.aq >= 5 && scores.ri >= 5 && scores.ci >= 2 && scores.ci < 5) {
    patterns.push('comeback');
  }

  // High constraint (inverse of high_aq for protocols)
  if (scores.aq < 4) patterns.push('high_constraint');

  // Low space (for protocols) — same trigger as low_aq
  if (scores.aq < 4) patterns.push('low_space');

  // If no specific patterns, add general
  if (patterns.length === 0) {
    patterns.push('general', 'plateau');
  }

  return patterns;
}

function matchRecommendations(scores, recommendations, count = 4) {
  const patterns = getPatterns(scores);

  const allMatches = recommendations.filter(r =>
    r.patterns.some(p => patterns.includes(p))
  );

  allMatches.sort((a, b) => {
    const aMatches = a.patterns.filter(p => patterns.includes(p)).length;
    const bMatches = b.patterns.filter(p => patterns.includes(p)).length;
    return bMatches - aMatches;
  });

  return { patterns, matches: allMatches.slice(0, count), allMatches };
}

// ============================================================
// RECOMMENDATIONS DATA (extracted from data.js - 61 total)
// ============================================================

const recommendations = [
  // === BOOKS (30) ===
  // Pattern rules:
  // - low_aq/low_ri/low_ci: score < 4
  // - plateau: all scores 4-6 (can't combine with low_* or high_*)
  // - burnout: all scores < 4 (can combine with low_*)
  // - paralyzed: aq >= 6 AND ci < 4 (can combine with low_ci)
  // - protect_magic: all scores >= 7 (can't combine with low_* or plateau)
  // - craftsperson_no_message: ci >= 6 AND ri < 4 (can combine with low_ri)
  // - underground_gem: ri >= 6 AND aq < 4 (can combine with low_aq)
  // - hustler: aq < 4 AND ci >= 6 (can combine with low_aq)
  // - untapped: alpha >= 5 AND (one score < 5)
  // - comeback: aq >= 5 AND ri >= 5 AND ci 2-5
  { id: 1, title: "The War of Art", patterns: ["low_aq", "low_ci", "paralyzed"] },
  { id: 2, title: "Deep Work", patterns: ["low_ci", "plateau"] },
  { id: 3, title: "So Good They Can't Ignore You", patterns: ["underground_gem", "low_aq"] },
  { id: 4, title: "Real Artists Don't Starve", patterns: ["underground_gem", "low_aq"] },
  { id: 5, title: "Keep Going", patterns: ["burnout", "protect_magic", "plateau"] },
  { id: 6, title: "The Practice", patterns: ["paralyzed", "low_ci", "untapped"] },
  { id: 7, title: "Essentialism", patterns: ["low_aq", "low_ci", "plateau"] },
  { id: 8, title: "Rest", patterns: ["low_aq", "burnout", "low_ci"] },
  { id: 9, title: "Burnout: The Secret", patterns: ["burnout", "low_aq", "low_ri"] },  // Fixed: burnout+low_*
  { id: 10, title: "Flow", patterns: ["low_ci", "plateau", "low_ri"] },
  { id: 11, title: "Art & Fear", patterns: ["paralyzed", "low_ci", "low_ri"] },
  { id: 12, title: "The Dip", patterns: ["plateau", "comeback"] },  // Fixed: plateau OR comeback
  { id: 13, title: "Ego Is the Enemy", patterns: ["protect_magic", "high_aq", "high_ci"] },  // Fixed: high patterns for thriving
  { id: 14, title: "Show Your Work!", patterns: ["low_ri", "craftsperson_no_message", "low_aq"] },
  { id: 15, title: "Big Magic", patterns: ["paralyzed", "low_ci", "low_ri"] },
  { id: 16, title: "Bird by Bird", patterns: ["paralyzed", "low_ci", "low_ri"] },
  { id: 17, title: "The Big Leap", patterns: ["protect_magic", "high_aq"] },  // Fixed: high_aq instead of plateau
  { id: 18, title: "The Artist's Way", patterns: ["burnout", "low_ci", "low_aq"] },  // Fixed: removed paralyzed (conflict)
  { id: 19, title: "Steal Like an Artist", patterns: ["plateau", "untapped", "low_ri"] },
  { id: 20, title: "Creative Confidence", patterns: ["low_ri", "low_ci", "burnout"] },  // Fixed: burnout instead of paralyzed
  { id: 21, title: "Peak", patterns: ["craftsperson_no_message", "low_ri", "low_ci"] },  // Fixed: removed plateau
  { id: 22, title: "Daily Rituals", patterns: ["plateau", "low_ci"] },  // Simple plateau+low_ci
  { id: 23, title: "Die Empty", patterns: ["protect_magic", "high_aq", "high_ci"] },  // Fixed: high_* instead of plateau
  { id: 24, title: "The Creative Act", patterns: ["protect_magic", "high_aq", "high_ri"] },  // Fixed: high_* instead of low_aq
  { id: 25, title: "The Almanack of Naval Ravikant", patterns: ["low_aq", "underground_gem"] },  // Fixed: removed plateau
  { id: 26, title: "The Mamba Mentality", patterns: ["craftsperson_no_message", "low_ri", "hustler"] },  // Fixed: removed plateau
  { id: 27, title: "Creativity, Inc.", patterns: ["protect_magic", "high_ci"] },  // Fixed: removed plateau/low_ci
  { id: 28, title: "Turning Pro", patterns: ["low_ci", "paralyzed", "comeback"] },  // Fixed: comeback instead of plateau
  { id: 29, title: "Relentless", patterns: ["craftsperson_no_message", "low_ri", "hustler"] },  // Fixed: removed plateau
  { id: 30, title: "Can't Hurt Me", patterns: ["burnout", "low_aq"] },  // Simple burnout

  // === YOUTUBE VIDEOS (16) ===
  { id: 31, title: "Make Good Art", patterns: ["burnout", "low_aq"] },  // Simple burnout
  { id: 32, title: "The Gap", patterns: ["low_ri", "low_ci", "comeback"] },
  { id: 33, title: "Naval on How to Get Rich", patterns: ["low_aq", "underground_gem"] },
  { id: 34, title: "Jerry Seinfeld on How to Write a Joke", patterns: ["craftsperson_no_message", "low_ri", "low_ci"] },  // Added low_ci
  { id: 35, title: "Dave Chappelle on Walking Away", patterns: ["protect_magic", "high_ri"] },  // Simple protect_magic
  { id: 36, title: "John Cleese on Creativity", patterns: ["burnout", "low_aq"] },  // Simple burnout
  { id: 37, title: "Pharrell Williams on Creativity", patterns: ["craftsperson_no_message", "low_ri"] },
  { id: 38, title: "Tyler, the Creator on Finding Your Voice", patterns: ["underground_gem", "low_aq", "low_ri"] },  // Added low_ri to trigger
  { id: 39, title: "David Lynch on Creativity and Meditation", patterns: ["burnout", "low_aq"] },  // Simple burnout
  { id: 40, title: "Quincy Jones: The Big Interview", patterns: ["protect_magic", "high_ci"] },  // Simple protect_magic
  { id: 41, title: "How Billie Eilish Creates Music", patterns: ["low_ri", "low_aq"] },
  { id: 42, title: "Hayao Miyazaki on Creative Exhaustion", patterns: ["burnout", "low_aq"] },  // Simple burnout
  { id: 43, title: "Virgil Abloh's Last Lecture", patterns: ["untapped", "low_ri"] },  // Simple untapped
  { id: 44, title: "Ira Glass on Storytelling", patterns: ["low_ri", "low_ci"] },  // Simple low_ri+low_ci
  { id: 45, title: "Nipsey Hussle on Marathon Mentality", patterns: ["low_aq", "underground_gem", "hustler"] },
  { id: 46, title: "Rick Rubin's 60 Minutes Interview", patterns: ["protect_magic", "high_aq", "high_ri"] },

  // === TED TALKS (6) ===
  { id: 47, title: "The Art of Asking", patterns: ["craftsperson_no_message", "low_ri"] },  // Simple craftsperson
  { id: 48, title: "Success, Failure and Creating", patterns: ["comeback", "protect_magic"] },  // comeback is reachable
  { id: 49, title: "The Power of Vulnerability", patterns: ["low_ri", "low_aq"] },  // Simple low_ri+low_aq
  { id: 50, title: "Inside the Mind of a Master Procrastinator", patterns: ["low_ci", "paralyzed", "comeback"] },
  { id: 51, title: "Great Design is Serious, Not Solemn", patterns: ["protect_magic", "high_ci"] },  // Simple protect_magic
  { id: 52, title: "J.K. Rowling: Fringe Benefits of Failure", patterns: ["burnout", "low_aq"] },  // Simple burnout

  // === PODCAST EPISODES (4) ===
  { id: 53, title: "Creative Pep Talk: Creative Burnout", patterns: ["burnout", "low_aq"] },  // Simple burnout
  { id: 54, title: "Magic Lessons: Brene Brown", patterns: ["underground_gem", "low_aq"] },  // Simple underground_gem
  { id: 55, title: "Design Matters: Milton Glaser", patterns: ["protect_magic", "high_ci"] },  // Simple protect_magic
  { id: 56, title: "Tim Ferriss: Steven Pressfield", patterns: ["paralyzed", "low_ci"] },  // Simple paralyzed

  // === DOCUMENTARIES (4) ===
  { id: 57, title: "Jiro Dreams of Sushi", patterns: ["protect_magic", "high_ci"] },  // Simple protect_magic
  { id: 58, title: "Everything Is a Remix", patterns: ["low_ri", "low_ci"] },  // Simple low_ri+low_ci
  { id: 59, title: "PressPausePlay", patterns: ["craftsperson_no_message", "low_ri"] },  // Simple craftsperson
  { id: 60, title: "Exit Through the Gift Shop", patterns: ["untapped", "low_ri"] },  // Simple untapped

  // === FILM (1) ===
  { id: 61, title: "Whiplash", patterns: ["hustler", "low_aq"] }  // Simple hustler
];

// ============================================================
// TEST SCENARIOS
// ============================================================

const testScenarios = [
  // Basic low patterns
  { name: "Low AQ only", scores: { aq: 2, ri: 5, ci: 5, alpha: 3.7 } },
  { name: "Low Ri only", scores: { aq: 5, ri: 2, ci: 5, alpha: 3.7 } },
  { name: "Low Ci only", scores: { aq: 5, ri: 5, ci: 2, alpha: 3.7 } },

  // Basic high patterns
  { name: "High AQ only", scores: { aq: 8, ri: 5, ci: 5, alpha: 5.8 } },
  { name: "High Ri only", scores: { aq: 5, ri: 8, ci: 5, alpha: 5.8 } },
  { name: "High Ci only", scores: { aq: 5, ri: 5, ci: 8, alpha: 5.8 } },

  // Combined patterns
  { name: "Burnout (all low)", scores: { aq: 2, ri: 2, ci: 2, alpha: 2 } },
  { name: "Paralyzed (high AQ, low Ci)", scores: { aq: 8, ri: 5, ci: 2, alpha: 4.3 } },
  { name: "Hustler (low AQ, high Ci)", scores: { aq: 2, ri: 5, ci: 7, alpha: 4.1 } },
  { name: "Underground Gem (low AQ, high Ri)", scores: { aq: 2, ri: 7, ci: 5, alpha: 4.1 } },
  { name: "Craftsperson (high Ci, low Ri)", scores: { aq: 5, ri: 2, ci: 7, alpha: 4.1 } },
  { name: "Protect Magic (all high)", scores: { aq: 8, ri: 8, ci: 8, alpha: 8 } },
  { name: "Plateau (all mid)", scores: { aq: 5, ri: 5, ci: 5, alpha: 5 } },

  // Untapped potential scenarios (alpha >= 5, one score < 5)
  { name: "Untapped - high AQ+Ri, mid Ci", scores: { aq: 7, ri: 7, ci: 4, alpha: 5.5 } },
  { name: "Untapped - high AQ+Ci, low Ri", scores: { aq: 7, ri: 4, ci: 7, alpha: 5.5 } },
  { name: "Untapped - high Ri+Ci, low AQ", scores: { aq: 4, ri: 7, ci: 7, alpha: 5.5 } },

  // Comeback scenarios (aq>=5, ri>=5, ci 2-5)
  { name: "Comeback - mid AQ+Ri, low Ci", scores: { aq: 6, ri: 6, ci: 3, alpha: 4.7 } },
  { name: "Comeback - high AQ+Ri, edge Ci", scores: { aq: 7, ri: 7, ci: 4, alpha: 5.5 } },

  // Low combinations
  { name: "Low AQ+Ri", scores: { aq: 2, ri: 2, ci: 5, alpha: 2.9 } },
  { name: "Low AQ+Ci", scores: { aq: 2, ri: 5, ci: 2, alpha: 2.9 } },
  { name: "Low Ri+Ci", scores: { aq: 5, ri: 2, ci: 2, alpha: 2.9 } },

  // Specific archetype triggers
  { name: "Strong hustler", scores: { aq: 1.5, ri: 5, ci: 8, alpha: 3.9 } },
  { name: "Strong underground gem", scores: { aq: 1.5, ri: 8, ci: 5, alpha: 3.9 } },
  { name: "Strong paralyzed", scores: { aq: 9, ri: 5, ci: 1.5, alpha: 4.2 } },
  { name: "Strong craftsperson", scores: { aq: 6, ri: 1.5, ci: 8, alpha: 4.2 } },

  // Additional edge cases
  { name: "Almost burnout", scores: { aq: 3.5, ri: 3.5, ci: 3.5, alpha: 3.5 } },
  { name: "Almost plateau high", scores: { aq: 6.5, ri: 6.5, ci: 6.5, alpha: 6.5 } },
  { name: "Extreme disparity", scores: { aq: 1, ri: 10, ci: 1, alpha: 2.2 } },

  // Additional scenarios to cover orphans
  // Low AQ + low Ri (not burnout since ci is mid)
  { name: "Underground + low_ri", scores: { aq: 2, ri: 2, ci: 5, alpha: 2.9 } },
  // craftsperson with low_aq
  { name: "Low AQ + craftsperson", scores: { aq: 2, ri: 2, ci: 7, alpha: 3.2 } },
  // protect_magic + craftsperson (high ci, low ri, high aq)
  { name: "Protect + craftsperson", scores: { aq: 8, ri: 2, ci: 8, alpha: 5.2 } },
  // Untapped with low_ri specifically
  { name: "Untapped + low_ri", scores: { aq: 7, ri: 2, ci: 5, alpha: 5.1 } },
];

// ============================================================
// RUN TESTS
// ============================================================

function runTests() {
  console.log('============================================================');
  console.log('FRUITHEDGE RECOMMENDATION COVERAGE TEST');
  console.log('============================================================\n');

  // Track which recommendations get matched
  const matchCounts = {};
  recommendations.forEach(r => {
    matchCounts[r.id] = { title: r.title, patterns: r.patterns, count: 0, matchedBy: [] };
  });

  // Track pattern occurrences
  const patternCounts = {};
  const allPatterns = ['low_aq', 'low_ri', 'low_ci', 'low_energy', 'low_connection', 'low_discipline',
                       'high_aq', 'high_ri', 'high_ci',
                       'burnout', 'paralyzed', 'craftsperson_no_message', 'underground_gem', 'hustler',
                       'protect_magic', 'plateau', 'untapped', 'comeback', 'high_constraint', 'low_space',
                       'general'];
  allPatterns.forEach(p => patternCounts[p] = 0);

  console.log('SCENARIO RESULTS:');
  console.log('------------------------------------------------------------\n');

  // Run each test scenario
  testScenarios.forEach((scenario, idx) => {
    const { patterns, matches, allMatches } = matchRecommendations(scenario.scores, recommendations);

    console.log(`${idx + 1}. ${scenario.name}`);
    console.log(`   Scores: AQ=${scenario.scores.aq}, Ri=${scenario.scores.ri}, Ci=${scenario.scores.ci}, Alpha=${scenario.scores.alpha}`);
    console.log(`   Patterns: [${patterns.join(', ')}]`);
    console.log(`   Top 4 of ${allMatches.length} matched recommendations:`);
    matches.forEach(m => {
      console.log(`     - ${m.title} (${m.patterns.join(', ')})`);
    });
    // Track ALL matches, not just top 4
    allMatches.forEach(m => {
      matchCounts[m.id].count++;
      matchCounts[m.id].matchedBy.push(scenario.name);
    });
    console.log('');

    // Count patterns
    patterns.forEach(p => {
      if (patternCounts[p] !== undefined) {
        patternCounts[p]++;
      }
    });
  });

  // Summary: Pattern frequency
  console.log('============================================================');
  console.log('PATTERN FREQUENCY');
  console.log('============================================================\n');

  Object.entries(patternCounts)
    .filter(([_, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .forEach(([pattern, count]) => {
      const bar = '█'.repeat(count);
      console.log(`${pattern.padEnd(25)} ${String(count).padStart(2)} ${bar}`);
    });

  // Summary: Recommendation coverage
  console.log('\n============================================================');
  console.log('RECOMMENDATION COVERAGE');
  console.log('============================================================\n');

  const matched = Object.values(matchCounts).filter(r => r.count > 0);
  const orphans = Object.values(matchCounts).filter(r => r.count === 0);

  console.log(`Total recommendations: ${recommendations.length}`);
  console.log(`Matched at least once: ${matched.length}`);
  console.log(`Never matched (orphans): ${orphans.length}`);
  console.log(`Coverage: ${Math.round(matched.length / recommendations.length * 100)}%`);

  // Show top matched
  console.log('\nTOP 10 MOST MATCHED:');
  matched.sort((a, b) => b.count - a.count).slice(0, 10).forEach(r => {
    console.log(`  ${String(r.count).padStart(2)}x  ${r.title}`);
  });

  // Show orphans (if any)
  if (orphans.length > 0) {
    console.log('\n⚠️  ORPHAN RECOMMENDATIONS (never matched):');
    orphans.forEach(r => {
      console.log(`  #${r.title} - patterns: [${r.patterns.join(', ')}]`);
    });
  } else {
    console.log('\n✅ All recommendations can be triggered!');
  }

  // Detailed match report
  console.log('\n============================================================');
  console.log('DETAILED MATCH REPORT');
  console.log('============================================================\n');

  Object.entries(matchCounts)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .forEach(([id, data]) => {
      const status = data.count > 0 ? '✅' : '❌';
      console.log(`${status} #${id} ${data.title}`);
      console.log(`   Patterns: [${data.patterns.join(', ')}]`);
      if (data.count > 0) {
        console.log(`   Matched ${data.count}x by: ${data.matchedBy.slice(0, 3).join(', ')}${data.matchedBy.length > 3 ? '...' : ''}`);
      } else {
        console.log(`   ⚠️  Never matched - check if pattern combination is reachable`);
      }
      console.log('');
    });

  // Check for patterns in recommendations that don't exist in getPatterns
  console.log('============================================================');
  console.log('PATTERN VALIDATION');
  console.log('============================================================\n');

  const usedPatterns = new Set();
  recommendations.forEach(r => r.patterns.forEach(p => usedPatterns.add(p)));

  const definedPatterns = new Set(allPatterns);
  const undefinedPatterns = [...usedPatterns].filter(p => !definedPatterns.has(p));

  if (undefinedPatterns.length > 0) {
    console.log('⚠️  Patterns used in recommendations but NOT in getPatterns():');
    undefinedPatterns.forEach(p => {
      const recsWithPattern = recommendations.filter(r => r.patterns.includes(p));
      console.log(`   "${p}" - used by ${recsWithPattern.length} recommendations`);
    });
    console.log('\nThese recommendations can NEVER be matched via getPatterns()!');
  } else {
    console.log('✅ All patterns used in recommendations are defined in getPatterns()');
  }

  // Final result
  console.log('\n============================================================');
  console.log('TEST RESULT');
  console.log('============================================================\n');

  const target = 50; // 82% of 61
  if (matched.length >= target) {
    console.log(`✅ PASS: ${matched.length}/61 recommendations reachable (target: ${target}+)`);
  } else {
    console.log(`❌ FAIL: Only ${matched.length}/61 recommendations reachable (target: ${target}+)`);
  }

  console.log('\n============================================================');
  console.log('TEST COMPLETE');
  console.log('============================================================');
}

runTests();
