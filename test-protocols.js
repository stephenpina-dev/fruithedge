// ============================================================
// FRUITHEDGE - Protocol Coverage Test
// Run with: node test-protocols.js
// ============================================================

const fs = require('fs');

// Load data.js by extracting the protocols array
const dataContent = fs.readFileSync('./data.js', 'utf8');

// Extract protocols array using regex
const protocolsMatch = dataContent.match(/const protocols = \[([\s\S]*?)\];/);
if (!protocolsMatch) {
  console.error('Could not find protocols array in data.js');
  process.exit(1);
}

// Evaluate the protocols array
let protocols;
try {
  eval('protocols = [' + protocolsMatch[1] + ']');
} catch (e) {
  console.error('Error parsing protocols:', e.message);
  process.exit(1);
}

// ============================================================
// PATTERN GENERATION (matches app.js logic)
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

  // High constraint
  if (scores.aq < 4) patterns.push('high_constraint');

  // Low space
  if (scores.aq < 4) patterns.push('low_space');

  // If no specific patterns, add general
  if (patterns.length === 0) {
    patterns.push('general', 'plateau');
  }

  return patterns;
}

function getWeakestLaw(scores) {
  if (scores.aq <= scores.ri && scores.aq <= scores.ci) return 'aq';
  if (scores.ri <= scores.aq && scores.ri <= scores.ci) return 'ri';
  return 'ci';
}

function getMatchingProtocols(scores) {
  const patterns = getPatterns(scores);

  const weakest = getWeakestLaw(scores);
  if (weakest === 'aq') patterns.push('low_energy', 'low_space', 'high_constraint');
  if (weakest === 'ci') patterns.push('paralyzed');

  const matches = protocols.filter(p =>
    p.patterns.some(pat => patterns.includes(pat) || pat === 'all')
  );

  return matches;
}

// ============================================================
// TEST ALL SCORE COMBINATIONS
// ============================================================

console.log('\n' + '='.repeat(80));
console.log('FRUITHEDGE PROTOCOL COVERAGE TEST');
console.log('='.repeat(80) + '\n');

// Track which protocols get matched
const protocolMatches = {};
protocols.forEach(p => {
  protocolMatches[p.id] = { name: p.name, category: p.category, patterns: p.patterns, count: 0 };
});

// Fruit protocols to track specifically
const fruitProtocols = protocols.filter(p => p.category === 'fruit');
const fruitMatchCounts = {};
fruitProtocols.forEach(p => {
  fruitMatchCounts[p.name] = 0;
});

// Generate all score combinations (0-10 in steps of 1)
let totalCombinations = 0;
let combinationsWithMatches = 0;

// Test score ranges from 1 to 10 in increments of 0.5
for (let aq = 1; aq <= 10; aq += 0.5) {
  for (let ri = 1; ri <= 10; ri += 0.5) {
    for (let ci = 1; ci <= 10; ci += 0.5) {
      totalCombinations++;

      const alpha = Math.pow(aq * ri * ci, 1/3);
      const scores = { aq, ri, ci, alpha };

      const matches = getMatchingProtocols(scores);

      if (matches.length > 0) {
        combinationsWithMatches++;

        // Count each matched protocol
        matches.forEach(p => {
          protocolMatches[p.id].count++;

          // Track fruit protocols
          if (p.category === 'fruit') {
            fruitMatchCounts[p.name]++;
          }
        });
      }
    }
  }
}

// ============================================================
// RESULTS
// ============================================================

console.log('SUMMARY');
console.log('-'.repeat(80));
console.log(`Total protocols in data.js: ${protocols.length}`);
console.log(`Total score combinations tested: ${totalCombinations}`);
console.log(`Combinations with at least one match: ${combinationsWithMatches}`);

// Count protocols matched at least once
const matchedProtocols = Object.values(protocolMatches).filter(p => p.count > 0);
const orphanProtocols = Object.values(protocolMatches).filter(p => p.count === 0);

console.log(`\nProtocols matched at least once: ${matchedProtocols.length}/${protocols.length}`);

// ============================================================
// FRUIT PROTOCOL ANALYSIS
// ============================================================

console.log('\n' + '='.repeat(80));
console.log('FRUIT PROTOCOL ANALYSIS');
console.log('='.repeat(80) + '\n');

fruitProtocols.forEach(p => {
  const count = fruitMatchCounts[p.name];
  const status = count > 0 ? '✓ REACHABLE' : '✗ ORPHAN';
  console.log(`${status}  ${p.name}`);
  console.log(`  Patterns: ${p.patterns.join(', ')}`);
  console.log(`  Trigger count: ${count}`);
  console.log('');
});

// ============================================================
// ORPHAN PROTOCOLS (never matched)
// ============================================================

if (orphanProtocols.length > 0) {
  console.log('\n' + '='.repeat(80));
  console.log('ORPHAN PROTOCOLS (never matched)');
  console.log('='.repeat(80) + '\n');

  orphanProtocols.forEach(p => {
    console.log(`ID ${p.name} (${p.category})`);
    console.log(`  Patterns: ${p.patterns.join(', ')}`);
    console.log('');
  });
} else {
  console.log('\n' + '='.repeat(80));
  console.log('NO ORPHAN PROTOCOLS - All protocols are reachable!');
  console.log('='.repeat(80));
}

// ============================================================
// PROTOCOL MATCH FREQUENCY
// ============================================================

console.log('\n' + '='.repeat(80));
console.log('PROTOCOL MATCH FREQUENCY (sorted by count)');
console.log('='.repeat(80) + '\n');

const sortedProtocols = Object.entries(protocolMatches)
  .sort((a, b) => b[1].count - a[1].count);

console.log('ID'.padEnd(4) + 'Name'.padEnd(30) + 'Category'.padEnd(12) + 'Count');
console.log('-'.repeat(60));

sortedProtocols.forEach(([id, p]) => {
  const name = p.name.length > 28 ? p.name.substring(0, 25) + '...' : p.name;
  console.log(
    String(id).padEnd(4) +
    name.padEnd(30) +
    p.category.padEnd(12) +
    String(p.count)
  );
});

// ============================================================
// PATTERN COVERAGE
// ============================================================

console.log('\n' + '='.repeat(80));
console.log('PATTERN USAGE IN PROTOCOLS');
console.log('='.repeat(80) + '\n');

const patternUsage = {};
protocols.forEach(p => {
  p.patterns.forEach(pat => {
    patternUsage[pat] = (patternUsage[pat] || 0) + 1;
  });
});

Object.entries(patternUsage)
  .sort((a, b) => b[1] - a[1])
  .forEach(([pattern, count]) => {
    console.log(`  ${pattern.padEnd(25)} ${count} protocols`);
  });

// ============================================================
// FINAL STATUS
// ============================================================

console.log('\n' + '='.repeat(80));
console.log('TEST COMPLETE');
console.log('='.repeat(80));

const allFruitReachable = fruitProtocols.every(p => fruitMatchCounts[p.name] > 0);
const coveragePercent = ((matchedProtocols.length / protocols.length) * 100).toFixed(1);

console.log(`\nCoverage: ${coveragePercent}%`);
console.log(`All fruit protocols reachable: ${allFruitReachable ? 'YES ✓' : 'NO ✗'}`);

if (orphanProtocols.length === 0 && allFruitReachable) {
  console.log('\n✓ ALL TESTS PASSED\n');
} else {
  console.log('\n✗ SOME PROTOCOLS ARE UNREACHABLE\n');
  process.exit(1);
}
