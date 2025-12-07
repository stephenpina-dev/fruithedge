// ============================================================
// Test Day-Aware Prophetic Messages
// Run with: node test-day-aware-messages.js
// ============================================================

const fs = require('fs');

// Read data.js content
const content = fs.readFileSync('/Users/fruithedge/fruithedge-portal/data.js', 'utf8');

// Find aqPropheticMessages section (between line markers)
const startMarker = 'const aqPropheticMessages = {';
const endMarker = '\n// ============================================================\n// Ri PROPHETIC MESSAGES';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.log('Could not find aqPropheticMessages boundaries');
  console.log('startIdx:', startIdx, 'endIdx:', endIdx);
  process.exit(1);
}

// Extract just aqPropheticMessages (including the closing };)
let aqSection = content.substring(startIdx, endIdx).trim();
// Remove 'const aqPropheticMessages = ' prefix
aqSection = aqSection.replace('const aqPropheticMessages = ', '');
// Remove trailing semicolon if present (};  ->  })
aqSection = aqSection.replace(/;\s*$/, '');

// Evaluate
const aqPropheticMessages = eval('(' + aqSection + ')');

// Get time context (similar to app.js)
function getTimeContext() {
  const now = new Date();
  const hour = now.getHours();
  const dayOfWeek = now.getDay();

  let timeOfDay;
  if (hour >= 5 && hour < 12) {
    timeOfDay = 'morning';
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = 'afternoon';
  } else if (hour >= 17 && hour < 21) {
    timeOfDay = 'evening';
  } else {
    timeOfDay = 'night';
  }

  let dayContext;
  if (dayOfWeek === 0) {
    dayContext = 'sunday';
  } else if (dayOfWeek === 1) {
    dayContext = 'monday';
  } else if (dayOfWeek === 5) {
    dayContext = 'friday';
  } else if (dayOfWeek === 6) {
    dayContext = 'saturday';
  } else {
    dayContext = 'midweek';
  }

  return { timeOfDay, dayContext, hour, dayOfWeek };
}

console.log('============================================================');
console.log('DAY-AWARE PROPHETIC MESSAGES TEST');
console.log('============================================================\n');

const time = getTimeContext();
console.log('Current context:', time.dayContext, time.timeOfDay);
console.log('Hour:', time.hour, '| Day of week:', time.dayOfWeek);
console.log('');

// Test energy_bottleneck
console.log('=== TEST 1: energy_bottleneck (day-aware) ===');
const energyPattern = aqPropheticMessages.energy_bottleneck;
console.log('Label:', energyPattern.label);

// Check structure
const hasDayAware = energyPattern.messages[time.dayContext] !== undefined;
console.log('Has day-aware structure:', hasDayAware ? '✅ YES' : '❌ NO');

if (hasDayAware) {
  const msg = energyPattern.messages[time.dayContext][time.timeOfDay];
  console.log('Message found:', msg ? '✅ YES' : '❌ NO');
  if (msg) {
    console.log('Message preview:', msg.substring(0, 80) + '...');
  }
}

// Test all day/time combinations
console.log('\nChecking all combinations:');
const days = ['monday', 'friday', 'saturday', 'sunday', 'midweek'];
const times = ['morning', 'afternoon', 'evening', 'night'];
let allFound = true;

for (const day of days) {
  for (const t of times) {
    const msg = energyPattern.messages[day]?.[t];
    if (!msg) {
      console.log(`  ❌ Missing: ${day}/${t}`);
      allFound = false;
    }
  }
}
if (allFound) {
  console.log('  ✅ All 20 day/time combinations present');
}

console.log('');

// Test space_bottleneck
console.log('=== TEST 2: space_bottleneck (day-aware) ===');
const spacePattern = aqPropheticMessages.space_bottleneck;
console.log('Label:', spacePattern.label);

const spaceHasDayAware = spacePattern.messages[time.dayContext] !== undefined;
console.log('Has day-aware structure:', spaceHasDayAware ? '✅ YES' : '❌ NO');

if (spaceHasDayAware) {
  const msg = spacePattern.messages[time.dayContext][time.timeOfDay];
  console.log('Message found:', msg ? '✅ YES' : '❌ NO');
  if (msg) {
    console.log('Message preview:', msg.substring(0, 80) + '...');
  }
}

// Check all combinations for space
let spaceAllFound = true;
for (const day of days) {
  for (const t of times) {
    const msg = spacePattern.messages[day]?.[t];
    if (!msg) {
      console.log(`  ❌ Missing: ${day}/${t}`);
      spaceAllFound = false;
    }
  }
}
if (spaceAllFound) {
  console.log('  ✅ All 20 day/time combinations present');
}

console.log('');

// Test optionality_bottleneck (day-aware)
console.log('=== TEST 3: optionality_bottleneck (day-aware) ===');
const optionalityPattern = aqPropheticMessages.optionality_bottleneck;
console.log('Label:', optionalityPattern.label);

const optHasDayAware = optionalityPattern.messages[time.dayContext] !== undefined;
console.log('Has day-aware structure:', optHasDayAware ? '✅ YES' : '❌ NO');

if (optHasDayAware) {
  const msg = optionalityPattern.messages[time.dayContext][time.timeOfDay];
  console.log('Message found:', msg ? '✅ YES' : '❌ NO');
  if (msg) {
    console.log('Message preview:', msg.substring(0, 80) + '...');
  }
}

// Check all combinations for optionality
let optAllFound = true;
for (const day of days) {
  for (const t of times) {
    const msg = optionalityPattern.messages[day]?.[t];
    if (!msg) {
      console.log(`  ❌ Missing: ${day}/${t}`);
      optAllFound = false;
    }
  }
}
if (optAllFound) {
  console.log('  ✅ All 20 day/time combinations present');
}

console.log('');

// Test constraint_bottleneck (day-aware)
console.log('=== TEST 4: constraint_bottleneck (day-aware) ===');
const constraintPattern = aqPropheticMessages.constraint_bottleneck;
console.log('Label:', constraintPattern.label);

const conHasDayAware = constraintPattern.messages[time.dayContext] !== undefined;
console.log('Has day-aware structure:', conHasDayAware ? '✅ YES' : '❌ NO');

if (conHasDayAware) {
  const msg = constraintPattern.messages[time.dayContext][time.timeOfDay];
  console.log('Message found:', msg ? '✅ YES' : '❌ NO');
  if (msg) {
    console.log('Message preview:', msg.substring(0, 80) + '...');
  }
}

// Check all combinations for constraint
let conAllFound = true;
for (const day of days) {
  for (const t of times) {
    const msg = constraintPattern.messages[day]?.[t];
    if (!msg) {
      console.log(`  ❌ Missing: ${day}/${t}`);
      conAllFound = false;
    }
  }
}
if (conAllFound) {
  console.log('  ✅ All 20 day/time combinations present');
}

console.log('');

// Test energy_strength (day-aware)
console.log('=== TEST 5: energy_strength (day-aware) ===');
const energyStrengthPattern = aqPropheticMessages.energy_strength;
console.log('Label:', energyStrengthPattern.label);

const esHasDayAware = energyStrengthPattern.messages[time.dayContext] !== undefined;
console.log('Has day-aware structure:', esHasDayAware ? '✅ YES' : '❌ NO');

if (esHasDayAware) {
  const msg = energyStrengthPattern.messages[time.dayContext][time.timeOfDay];
  console.log('Message found:', msg ? '✅ YES' : '❌ NO');
  if (msg) {
    console.log('Message preview:', msg.substring(0, 80) + '...');
  }
}

let esAllFound = true;
for (const day of days) {
  for (const t of times) {
    const msg = energyStrengthPattern.messages[day]?.[t];
    if (!msg) {
      console.log(`  ❌ Missing: ${day}/${t}`);
      esAllFound = false;
    }
  }
}
if (esAllFound) {
  console.log('  ✅ All 20 day/time combinations present');
}

console.log('');

// Test soaring (day-aware)
console.log('=== TEST 6: soaring (day-aware) ===');
const soaringPattern = aqPropheticMessages.soaring;
console.log('Label:', soaringPattern.label);

const soarHasDayAware = soaringPattern.messages[time.dayContext] !== undefined;
console.log('Has day-aware structure:', soarHasDayAware ? '✅ YES' : '❌ NO');

if (soarHasDayAware) {
  const msg = soaringPattern.messages[time.dayContext][time.timeOfDay];
  console.log('Message found:', msg ? '✅ YES' : '❌ NO');
  if (msg) {
    console.log('Message preview:', msg.substring(0, 80) + '...');
  }
}

let soarAllFound = true;
for (const day of days) {
  for (const t of times) {
    const msg = soaringPattern.messages[day]?.[t];
    if (!msg) {
      console.log(`  ❌ Missing: ${day}/${t}`);
      soarAllFound = false;
    }
  }
}
if (soarAllFound) {
  console.log('  ✅ All 20 day/time combinations present');
}

console.log('');

// Test crashed (day-aware)
console.log('=== TEST 7: crashed (day-aware) ===');
const crashedPattern = aqPropheticMessages.crashed;
console.log('Label:', crashedPattern.label);

const crashHasDayAware = crashedPattern.messages[time.dayContext] !== undefined;
console.log('Has day-aware structure:', crashHasDayAware ? '✅ YES' : '❌ NO');

if (crashHasDayAware) {
  const msg = crashedPattern.messages[time.dayContext][time.timeOfDay];
  console.log('Message found:', msg ? '✅ YES' : '❌ NO');
  if (msg) {
    console.log('Message preview:', msg.substring(0, 80) + '...');
  }
}

let crashAllFound = true;
for (const day of days) {
  for (const t of times) {
    const msg = crashedPattern.messages[day]?.[t];
    if (!msg) {
      console.log(`  ❌ Missing: ${day}/${t}`);
      crashAllFound = false;
    }
  }
}
if (crashAllFound) {
  console.log('  ✅ All 20 day/time combinations present');
}

console.log('');

// Test plateau (day-aware)
console.log('=== TEST 8: plateau (day-aware) ===');
const plateauPattern = aqPropheticMessages.plateau;
console.log('Label:', plateauPattern.label);

const platHasDayAware = plateauPattern.messages[time.dayContext] !== undefined;
console.log('Has day-aware structure:', platHasDayAware ? '✅ YES' : '❌ NO');

if (platHasDayAware) {
  const msg = plateauPattern.messages[time.dayContext][time.timeOfDay];
  console.log('Message found:', msg ? '✅ YES' : '❌ NO');
  if (msg) {
    console.log('Message preview:', msg.substring(0, 80) + '...');
  }
}

let platAllFound = true;
for (const day of days) {
  for (const t of times) {
    const msg = plateauPattern.messages[day]?.[t];
    if (!msg) {
      console.log(`  ❌ Missing: ${day}/${t}`);
      platAllFound = false;
    }
  }
}
if (platAllFound) {
  console.log('  ✅ All 20 day/time combinations present');
}

console.log('');

// Test lopsided (day-aware)
console.log('=== TEST 9: lopsided (day-aware) ===');
const lopsidedPattern = aqPropheticMessages.lopsided;
console.log('Label:', lopsidedPattern.label);

const lopHasDayAware = lopsidedPattern.messages[time.dayContext] !== undefined;
console.log('Has day-aware structure:', lopHasDayAware ? '✅ YES' : '❌ NO');

if (lopHasDayAware) {
  const msg = lopsidedPattern.messages[time.dayContext][time.timeOfDay];
  console.log('Message found:', msg ? '✅ YES' : '❌ NO');
  if (msg) {
    console.log('Message preview:', msg.substring(0, 80) + '...');
  }
}

let lopAllFound = true;
for (const day of days) {
  for (const t of times) {
    const msg = lopsidedPattern.messages[day]?.[t];
    if (!msg) {
      console.log(`  ❌ Missing: ${day}/${t}`);
      lopAllFound = false;
    }
  }
}
if (lopAllFound) {
  console.log('  ✅ All 20 day/time combinations present');
}

console.log('');
console.log('============================================================');
console.log('AQ PATTERNS SUMMARY (ALL 9)');
console.log('============================================================');
console.log('1. energy_bottleneck:', hasDayAware && allFound ? '✅ PASS' : '❌ FAIL');
console.log('2. space_bottleneck:', spaceHasDayAware && spaceAllFound ? '✅ PASS' : '❌ FAIL');
console.log('3. optionality_bottleneck:', optHasDayAware && optAllFound ? '✅ PASS' : '❌ FAIL');
console.log('4. constraint_bottleneck:', conHasDayAware && conAllFound ? '✅ PASS' : '❌ FAIL');
console.log('5. energy_strength:', esHasDayAware && esAllFound ? '✅ PASS' : '❌ FAIL');
console.log('6. soaring:', soarHasDayAware && soarAllFound ? '✅ PASS' : '❌ FAIL');
console.log('7. crashed:', crashHasDayAware && crashAllFound ? '✅ PASS' : '❌ FAIL');
console.log('8. plateau:', platHasDayAware && platAllFound ? '✅ PASS' : '❌ FAIL');
console.log('9. lopsided:', lopHasDayAware && lopAllFound ? '✅ PASS' : '❌ FAIL');

const allAqPass = (hasDayAware && allFound) && (spaceHasDayAware && spaceAllFound) &&
  (optHasDayAware && optAllFound) && (conHasDayAware && conAllFound) &&
  (esHasDayAware && esAllFound) && (soarHasDayAware && soarAllFound) &&
  (crashHasDayAware && crashAllFound) && (platHasDayAware && platAllFound) &&
  (lopHasDayAware && lopAllFound);

console.log('');
console.log('Total messages: 9 patterns × 5 days × 4 times = 180 unique messages');
console.log(allAqPass ? '✅ ALL AQ PATTERNS COMPLETE!' : '❌ Some patterns missing');
console.log('============================================================');
