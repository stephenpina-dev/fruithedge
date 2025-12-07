// ============================================================
// ALPHA FIX VERIFICATION + MESSAGE LENGTH AUDIT
// Run with: node test-alpha-fix-audit.js
// ============================================================

const fs = require('fs');

// Load data.js
const dataContent = fs.readFileSync('/Users/fruithedge/fruithedge-portal/data.js', 'utf8');

// Extract message objects
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

// Time context
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

const time = getTimeContext();

console.log('============================================================');
console.log('ALPHA FIX VERIFICATION + MESSAGE LENGTH AUDIT');
console.log('============================================================');
console.log('Time Context:', time.dayContext, time.timeOfDay);
console.log('');

// ============================================================
// TASK 2: VERIFY ALPHA FIX
// ============================================================

console.log('============================================================');
console.log('TASK 2: VERIFY ALPHA FIX');
console.log('============================================================\n');

// Test scenarios - Updated to match correct priority order
const testScenarios = [
  {
    name: 'Low Ci with severe gap (severe_imbalance)',
    scores: { aq: 6.8, ri: 6.3, ci: 1.8, alpha: 3.9 },
    expected: 'severe_imbalance' // gap of 5.0 triggers severe_imbalance first
  },
  {
    name: 'Low Ci moderate gap (output_bottleneck)',
    scores: { aq: 5.5, ri: 5.0, ci: 2.0, alpha: 3.8 },
    expected: 'output_bottleneck' // gap of 3.5 doesn't trigger severe_imbalance
  },
  {
    name: 'Low AQ (freedom_bottleneck)',
    scores: { aq: 2.5, ri: 6.0, ci: 6.0, alpha: 4.2 },
    expected: 'freedom_bottleneck'
  },
  {
    name: 'Low Ri (connection_bottleneck)',
    scores: { aq: 7.0, ri: 3.0, ci: 6.5, alpha: 5.0 },
    expected: 'connection_bottleneck'
  },
  {
    name: 'All High (all_aligned_high)',
    scores: { aq: 8.0, ri: 7.5, ci: 7.2, alpha: 7.5 },
    expected: 'all_aligned_high'
  },
  {
    name: 'All Low (all_aligned_low)',
    scores: { aq: 3.0, ri: 2.5, ci: 3.5, alpha: 3.0 },
    expected: 'all_aligned_low'
  },
  {
    name: 'Severe Imbalance',
    scores: { aq: 8.5, ri: 3.0, ci: 7.0, alpha: 5.5 },
    expected: 'severe_imbalance'
  },
  {
    name: 'Compounding (all >= 7 triggers all_aligned_high)',
    scores: { aq: 7.5, ri: 7.2, ci: 7.8, alpha: 7.5 },
    expected: 'all_aligned_high' // all_aligned_high is more specific when all >= 7
  },
  {
    name: 'Emergency (all < 4 triggers all_aligned_low)',
    scores: { aq: 2.0, ri: 2.5, ci: 2.0, alpha: 2.2 },
    expected: 'all_aligned_low' // all_aligned_low is more specific when all < 4
  },
  {
    name: 'Default sliders (output_bottleneck)',
    scores: { aq: 4.7, ri: 4.5, ci: 4.0, alpha: 4.4 },
    expected: 'output_bottleneck' // ci is lowest and < 5
  }
];

let passed = 0;
let failed = 0;

testScenarios.forEach(scenario => {
  const matchedPattern = Object.keys(alphaPropheticMessages).find(key => {
    const p = alphaPropheticMessages[key];
    return p.condition && p.condition(scenario.scores);
  });

  const status = matchedPattern === scenario.expected ? '✅' : '❌';
  if (matchedPattern === scenario.expected) passed++;
  else failed++;

  console.log(`${status} ${scenario.name}`);
  console.log(`   Expected: ${scenario.expected}`);
  console.log(`   Actual:   ${matchedPattern || 'NONE (fallback)'}`);
  console.log(`   Scores:   AQ=${scenario.scores.aq}, Ri=${scenario.scores.ri}, Ci=${scenario.scores.ci}, Alpha=${scenario.scores.alpha}`);
  console.log('');
});

console.log(`Alpha Fix Results: ${passed}/${passed + failed} scenarios correct`);
console.log(failed === 0 ? '✅ ALPHA FIX VERIFIED!' : '⚠️  Some scenarios still failing');
console.log('');

// ============================================================
// TASK 3: AUDIT ALL MESSAGE LENGTHS
// ============================================================

console.log('============================================================');
console.log('TASK 3: MESSAGE LENGTH AUDIT (flag < 250 chars)');
console.log('============================================================\n');

const report = [];

function getMessage(p, time) {
  if (p.messages?.[time.dayContext]?.[time.timeOfDay]) {
    return p.messages[time.dayContext][time.timeOfDay];
  }
  if (p.messages?.[time.timeOfDay]) {
    return p.messages[time.timeOfDay];
  }
  return null;
}

// Check all AQ messages
Object.entries(aqPropheticMessages).forEach(([key, p]) => {
  const msg = getMessage(p, time);
  if (msg) {
    report.push({
      law: 'AQ',
      pattern: key,
      length: msg.length,
      preview: msg.substring(0, 50) + '...',
      fullMessage: msg
    });
  }
});

// Check all Ri messages
Object.entries(riPropheticMessages).forEach(([key, p]) => {
  const msg = getMessage(p, time);
  if (msg) {
    report.push({
      law: 'Ri',
      pattern: key,
      length: msg.length,
      preview: msg.substring(0, 50) + '...',
      fullMessage: msg
    });
  }
});

// Check all Ci messages
Object.entries(ciPropheticMessages).forEach(([key, p]) => {
  const msg = getMessage(p, time);
  if (msg) {
    report.push({
      law: 'Ci',
      pattern: key,
      length: msg.length,
      preview: msg.substring(0, 50) + '...',
      fullMessage: msg
    });
  }
});

// Check all Alpha messages
Object.entries(alphaPropheticMessages).forEach(([key, p]) => {
  const msg = getMessage(p, time);
  if (msg) {
    report.push({
      law: 'Alpha',
      pattern: key,
      length: msg.length,
      preview: msg.substring(0, 50) + '...',
      fullMessage: msg
    });
  }
});

// Sort by length
report.sort((a, b) => a.length - b.length);

// Show short messages (< 250 chars)
const shortMessages = report.filter(r => r.length < 250);

console.log('MESSAGES UNDER 250 CHARS:');
console.log('─'.repeat(80));
console.log('| Law   | Pattern                  | Length | Preview');
console.log('─'.repeat(80));
shortMessages.forEach(r => {
  console.log(`| ${r.law.padEnd(5)} | ${r.pattern.padEnd(24)} | ${r.length.toString().padStart(6)} | ${r.preview.substring(0, 40)}`);
});
console.log('─'.repeat(80));
console.log(`Total short messages: ${shortMessages.length} of ${report.length}`);
console.log('');

// Summary by law
console.log('SUMMARY BY LAW:');
const lawSummary = {};
report.forEach(r => {
  if (!lawSummary[r.law]) {
    lawSummary[r.law] = { total: 0, short: 0, avgLength: 0, totalLength: 0 };
  }
  lawSummary[r.law].total++;
  lawSummary[r.law].totalLength += r.length;
  if (r.length < 250) lawSummary[r.law].short++;
});

Object.entries(lawSummary).forEach(([law, stats]) => {
  stats.avgLength = Math.round(stats.totalLength / stats.total);
  console.log(`  ${law}: ${stats.short}/${stats.total} short (avg ${stats.avgLength} chars)`);
});
console.log('');

// ============================================================
// TASK 4: 10 SHORTEST MESSAGES WITH FULL TEXT
// ============================================================

console.log('============================================================');
console.log('TASK 4: 10 SHORTEST MESSAGES (full text)');
console.log('============================================================\n');

const shortest10 = report.slice(0, 10);

shortest10.forEach((r, idx) => {
  console.log(`${idx + 1}. ${r.law}.${r.pattern} (${r.length} chars)`);
  console.log('─'.repeat(60));
  console.log(r.fullMessage);
  console.log('');
});

// ============================================================
// RECOMMENDATIONS
// ============================================================

console.log('============================================================');
console.log('RECOMMENDATIONS');
console.log('============================================================\n');

console.log('PRIORITY 1 - All Alpha messages (user noticed these):');
const alphaShort = shortMessages.filter(r => r.law === 'Alpha');
alphaShort.forEach(r => {
  console.log(`  - ${r.pattern}: ${r.length} chars`);
});
console.log('');

console.log('PRIORITY 2 - Ci messages (user noticed shorter):');
const ciShort = shortMessages.filter(r => r.law === 'Ci');
ciShort.forEach(r => {
  console.log(`  - ${r.pattern}: ${r.length} chars`);
});
console.log('');

console.log('PRIORITY 3 - Ri tier messages (frequently seen):');
const riTierShort = shortMessages.filter(r => r.law === 'Ri' && r.pattern.startsWith('tier_'));
riTierShort.forEach(r => {
  console.log(`  - ${r.pattern}: ${r.length} chars`);
});
console.log('');

console.log('Target: All messages should be 250-350 chars for consistent depth.');
console.log('============================================================');
