// ============================================================
// TEST INCONSISTENCY DETECTION PATTERNS
// Run with: node test-inconsistencies.js
// ============================================================

const fs = require('fs');

// Load data.js
const dataContent = fs.readFileSync('/Users/fruithedge/fruithedge-portal/data.js', 'utf8');

// Extract inconsistencyPatterns
function extractArray(content, startMarker) {
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
      } else if (char === '[') {
        braceCount++;
      } else if (char === ']') {
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

  const arrStr = content.substring(startIdx + startMarker.length - 1, endIdx);
  try {
    return eval('(' + arrStr + ')');
  } catch (e) {
    console.error('Failed to parse:', startMarker, e.message);
    return null;
  }
}

const inconsistencyPatterns = extractArray(dataContent, 'const inconsistencyPatterns = ');

if (!inconsistencyPatterns) {
  console.error('❌ Failed to load inconsistencyPatterns from data.js');
  process.exit(1);
}

console.log(`✅ Loaded ${inconsistencyPatterns.length} inconsistency patterns\n`);

// Detection function (same as app.js)
function detectInconsistencies(inputs) {
  const found = [];

  for (const pattern of inconsistencyPatterns) {
    try {
      if (pattern.condition(inputs)) {
        found.push({
          id: pattern.id,
          name: pattern.name,
          severity: pattern.severity,
          message: pattern.message,
          affected: pattern.affected
        });
      }
    } catch (e) {
      console.warn('[Inconsistency] Error checking pattern:', pattern.id, e);
    }
  }

  // Sort by severity: critical first, then warning, then info
  const severityOrder = { critical: 0, warning: 1, info: 2 };
  found.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return found;
}

// Default baseline (no conflicts)
const baseline = {
  energy: 5, space: 5, optionality: 5, constraint: 5,
  impact: 5, identity: 5, boldness: 5, audience: 10000,
  flow: 30, evolution: 5, risk: 5,
  admin: 15, distraction: 15, stagnation: 5
};

// Test cases
const testCases = [
  {
    name: "Freedom Paradox",
    inputs: { ...baseline, constraint: 9, optionality: 9 },
    expected: "constraint_optionality_conflict"
  },
  {
    name: "Empty Tank Marathon",
    inputs: { ...baseline, energy: 2, flow: 45 },
    expected: "energy_flow_conflict"
  },
  {
    name: "Time Violation",
    inputs: { ...baseline, flow: 50, admin: 40, distraction: 30 },
    expected: "hours_overflow"
  },
  {
    name: "Frozen Flow",
    inputs: { ...baseline, stagnation: 8, flow: 40 },
    expected: "stagnation_flow_conflict"
  },
  {
    name: "Bold for Nobody",
    inputs: { ...baseline, boldness: 9, identity: 2 },
    expected: "boldness_identity_conflict"
  },
  {
    name: "Invisible Depth",
    inputs: { ...baseline, impact: 9, audience: 300 },
    expected: "impact_tiny_audience"
  },
  {
    name: "Perfect Aim, No Arrow",
    inputs: { ...baseline, identity: 9, boldness: 2 },
    expected: "identity_no_boldness"
  },
  {
    name: "Growing While Frozen",
    inputs: { ...baseline, evolution: 8, stagnation: 8 },
    expected: "evolution_stagnation_conflict"
  },
  {
    name: "Bold Bureaucrat",
    inputs: { ...baseline, risk: 9, admin: 45 },
    expected: "risk_admin_conflict"
  },
  {
    name: "Focused Scatter",
    inputs: { ...baseline, flow: 45, distraction: 35 },
    expected: "flow_distraction_conflict"
  },
  {
    name: "Clear Mind, Constant Noise",
    inputs: { ...baseline, space: 9, distraction: 35 },
    expected: "space_distraction_conflict"
  },
  {
    name: "Superhuman Schedule",
    inputs: { ...baseline, energy: 2, admin: 35, flow: 30 },
    expected: "energy_admin_flow_conflict"
  },
  {
    name: "Partial Freedom Paradox",
    inputs: { ...baseline, optionality: 8, constraint: 8 },
    expected: "optionality_constraint_moderate"
  },
  {
    name: "Suspicious Perfection",
    inputs: {
      energy: 10, space: 10, optionality: 10, constraint: 1,
      impact: 10, identity: 10, boldness: 10, audience: 10000,
      flow: 30, evolution: 10, risk: 10,
      admin: 10, distraction: 10, stagnation: 1
    },
    expected: "all_perfect"
  },
  {
    name: "Total Collapse",
    inputs: {
      energy: 1, space: 1, optionality: 1, constraint: 9,
      impact: 1, identity: 1, boldness: 1, audience: 100,
      flow: 5, evolution: 1, risk: 1,
      admin: 30, distraction: 30, stagnation: 9
    },
    expected: "all_terrible"
  },
  {
    name: "No Conflicts (baseline)",
    inputs: baseline,
    expected: null
  }
];

console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║         INCONSISTENCY DETECTION TESTS                        ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

let passed = 0;
let failed = 0;

testCases.forEach((test, idx) => {
  const results = detectInconsistencies(test.inputs);

  let success = false;
  if (test.expected === null) {
    success = results.length === 0;
  } else {
    success = results.some(r => r.id === test.expected);
  }

  const status = success ? '✅' : '❌';
  if (success) passed++;
  else failed++;

  console.log(`${status} Test ${idx + 1}: ${test.name}`);

  if (test.expected === null) {
    console.log(`   Expected: No conflicts`);
    console.log(`   Got:      ${results.length === 0 ? 'No conflicts' : results.map(r => r.id).join(', ')}`);
  } else {
    console.log(`   Expected: ${test.expected}`);
    const found = results.find(r => r.id === test.expected);
    if (found) {
      console.log(`   Got:      ${found.id} (${found.severity})`);
    } else {
      console.log(`   Got:      ${results.length > 0 ? results.map(r => r.id).join(', ') : 'NONE'}`);
    }
  }
  console.log('');
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`RESULTS: ${passed}/${testCases.length} passed`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

if (failed === 0) {
  console.log('');
  console.log('✅ ALL TESTS PASSED!');
} else {
  console.log('');
  console.log(`⚠️  ${failed} tests failed`);
  process.exit(1);
}

// Show pattern summary
console.log('');
console.log('PATTERN SUMMARY:');
console.log('─'.repeat(60));
const severityCounts = { critical: 0, warning: 0, info: 0 };
inconsistencyPatterns.forEach(p => severityCounts[p.severity]++);
console.log(`  Critical:  ${severityCounts.critical} patterns`);
console.log(`  Warning:   ${severityCounts.warning} patterns`);
console.log(`  Info:      ${severityCounts.info} patterns`);
console.log(`  TOTAL:     ${inconsistencyPatterns.length} patterns`);
