// ============================================================
// FRUITHEDGE PROTOCOL TIME/SEASON FILTER TEST
// Run with: node test-protocol-time-season.js
// ============================================================

const fs = require('fs');
const content = fs.readFileSync('/Users/fruithedge/fruithedge-portal/data.js', 'utf8');

// Extract protocols array
const match = content.match(/const protocols = (\[[\s\S]*?\n\];)/);
if (!match) {
  console.log('Could not find protocols array');
  process.exit(1);
}
const protocols = eval(match[1]);

// Helper functions
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

function getCurrentTimeAndSeason() {
  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth();

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

  let season;
  if (month >= 2 && month <= 4) {
    season = 'spring';
  } else if (month >= 5 && month <= 7) {
    season = 'summer';
  } else if (month >= 8 && month <= 10) {
    season = 'fall';
  } else {
    season = 'winter';
  }

  return { hour, timeOfDay, season, month };
}

function filterByTime(protocols, timeOfDay) {
  return protocols.filter(p => {
    if (p.validTimes.includes('anytime')) return true;
    if (p.validTimes.includes(timeOfDay)) return true;
    if (timeOfDay !== 'night' && p.validTimes.includes('daytime')) return true;
    return false;
  });
}

function filterBySeason(protocols, season) {
  return protocols.filter(p => {
    if (p.validSeasons.includes('all')) return true;
    if (p.validSeasons.includes(season)) return true;
    return false;
  });
}

function getSmartProtocol(scores, timeOfDay, season, patterns = null) {
  const timeFiltered = filterByTime(protocols, timeOfDay);
  const seasonFiltered = filterBySeason(timeFiltered, season);

  if (seasonFiltered.length === 0) {
    return null;
  }

  if (!patterns && scores) {
    patterns = getPatterns(scores);
  }

  const scored = seasonFiltered.map(p => {
    let score = 0;
    if (patterns && p.patterns) {
      const matches = p.patterns.filter(pat => patterns.includes(pat)).length;
      score = matches;
    }
    return { ...p, matchScore: score };
  });

  scored.sort((a, b) => b.matchScore - a.matchScore);

  const topScore = scored[0].matchScore;
  const topMatches = scored.filter(p => p.matchScore === topScore);
  const selected = topMatches[Math.floor(Math.random() * topMatches.length)];

  return {
    protocol: selected,
    timeOfDay,
    season,
    filteredCount: seasonFiltered.length,
    totalCount: protocols.length
  };
}

// ============================================================
// TESTS
// ============================================================

console.log('============================================================');
console.log('FRUITHEDGE PROTOCOL TIME/SEASON FILTER TEST');
console.log('============================================================\n');

let passed = 0;
let failed = 0;

// Test 1: Morning should NOT return evening-only protocols
console.log('=== TEST 1: Morning Filter ===');
const morningProtocols = filterByTime(protocols, 'morning');
const eveningOnlyInMorning = morningProtocols.filter(p =>
  p.validTimes.includes('evening') &&
  p.validTimes.includes('night') &&
  !p.validTimes.includes('morning') &&
  !p.validTimes.includes('anytime')
);
console.log('Morning protocols count:', morningProtocols.length);
console.log('Evening/night-only protocols in morning results:', eveningOnlyInMorning.length);
if (eveningOnlyInMorning.length === 0) {
  console.log('✅ PASS');
  passed++;
} else {
  console.log('❌ FAIL - Found:', eveningOnlyInMorning.map(p => p.name));
  failed++;
}
console.log('');

// Test 2: Night should NOT return morning-only protocols
console.log('=== TEST 2: Night Filter ===');
const nightProtocols = filterByTime(protocols, 'night');
const morningOnlyInNight = nightProtocols.filter(p =>
  p.validTimes.length === 1 && p.validTimes[0] === 'morning'
);
console.log('Night protocols count:', nightProtocols.length);
console.log('Morning-only protocols in night results:', morningOnlyInNight.length);
if (morningOnlyInNight.length === 0) {
  console.log('✅ PASS');
  passed++;
} else {
  console.log('❌ FAIL - Found:', morningOnlyInNight.map(p => p.name));
  failed++;
}
console.log('');

// Test 3: Winter should NOT return summer-only protocols
console.log('=== TEST 3: Winter Season Filter ===');
const winterProtocols = filterBySeason(protocols, 'winter');
const summerOnlyInWinter = winterProtocols.filter(p =>
  p.validSeasons.length === 1 && p.validSeasons[0] === 'summer'
);
console.log('Winter protocols count:', winterProtocols.length);
console.log('Summer-only protocols in winter results:', summerOnlyInWinter.length);
if (summerOnlyInWinter.length === 0) {
  console.log('✅ PASS');
  passed++;
} else {
  console.log('❌ FAIL - Found:', summerOnlyInWinter.map(p => p.name));
  failed++;
}
console.log('');

// Test 4: Summer should NOT return winter-only protocols
console.log('=== TEST 4: Summer Season Filter ===');
const summerProtocols = filterBySeason(protocols, 'summer');
const winterOnlyInSummer = summerProtocols.filter(p =>
  !p.validSeasons.includes('all') &&
  !p.validSeasons.includes('summer') &&
  (p.validSeasons.includes('winter'))
);
console.log('Summer protocols count:', summerProtocols.length);
console.log('Winter-only protocols in summer results:', winterOnlyInSummer.length);
if (winterOnlyInSummer.length === 0) {
  console.log('✅ PASS');
  passed++;
} else {
  console.log('❌ FAIL - Found:', winterOnlyInSummer.map(p => p.name));
  failed++;
}
console.log('');

// Test 5: Combined time + season filter
console.log('=== TEST 5: Combined Morning + Winter Filter ===');
const morningWinterProtocols = filterBySeason(filterByTime(protocols, 'morning'), 'winter');
// Should exclude: morning walk (spring/summer/fall only), berry snack (summer only), melon (summer only)
const invalidInMorningWinter = morningWinterProtocols.filter(p => {
  const hasValidTime = p.validTimes.includes('anytime') || p.validTimes.includes('morning');
  const hasValidSeason = p.validSeasons.includes('all') || p.validSeasons.includes('winter');
  return !hasValidTime || !hasValidSeason;
});
console.log('Morning+Winter protocols count:', morningWinterProtocols.length);
console.log('Invalid protocols in results:', invalidInMorningWinter.length);
if (invalidInMorningWinter.length === 0) {
  console.log('✅ PASS');
  passed++;
} else {
  console.log('❌ FAIL - Found:', invalidInMorningWinter.map(p => p.name));
  failed++;
}
console.log('');

// Test 6: Verify hard gates work in getSmartProtocol
console.log('=== TEST 6: Live Function Test ===');
const { timeOfDay, season } = getCurrentTimeAndSeason();
const result = getSmartProtocol({ aq: 4, ri: 5, ci: 5, alpha: 4.6 }, timeOfDay, season);
console.log('Current time:', timeOfDay);
console.log('Current season:', season);
console.log('Filtered protocols:', result.filteredCount, 'of', result.totalCount);
console.log('Selected:', result.protocol.name);
console.log('Valid times:', result.protocol.validTimes);
console.log('Valid seasons:', result.protocol.validSeasons);

const isValidTime = result.protocol.validTimes.includes('anytime') ||
                    result.protocol.validTimes.includes(timeOfDay) ||
                    (timeOfDay !== 'night' && result.protocol.validTimes.some(t => ['morning', 'afternoon', 'evening'].includes(t)));
const isValidSeason = result.protocol.validSeasons.includes('all') ||
                      result.protocol.validSeasons.includes(season);

if (isValidTime && isValidSeason) {
  console.log('✅ PASS - Protocol is valid for current time and season');
  passed++;
} else {
  console.log('❌ FAIL - Protocol invalid:', isValidTime ? '' : 'bad time', isValidSeason ? '' : 'bad season');
  failed++;
}
console.log('');

// Test 7: Test all time periods
console.log('=== TEST 7: All Time Periods ===');
const timePeriods = ['morning', 'afternoon', 'evening', 'night'];
let allPeriodsHaveProtocols = true;
timePeriods.forEach(period => {
  const filtered = filterByTime(protocols, period);
  console.log(`  ${period}: ${filtered.length} protocols`);
  if (filtered.length === 0) allPeriodsHaveProtocols = false;
});
if (allPeriodsHaveProtocols) {
  console.log('✅ PASS - All time periods have protocols');
  passed++;
} else {
  console.log('❌ FAIL - Some time periods have no protocols');
  failed++;
}
console.log('');

// Test 8: Test all seasons
console.log('=== TEST 8: All Seasons ===');
const seasons = ['spring', 'summer', 'fall', 'winter'];
let allSeasonsHaveProtocols = true;
seasons.forEach(s => {
  const filtered = filterBySeason(protocols, s);
  console.log(`  ${s}: ${filtered.length} protocols`);
  if (filtered.length === 0) allSeasonsHaveProtocols = false;
});
if (allSeasonsHaveProtocols) {
  console.log('✅ PASS - All seasons have protocols');
  passed++;
} else {
  console.log('❌ FAIL - Some seasons have no protocols');
  failed++;
}
console.log('');

// Summary
console.log('============================================================');
console.log('TEST SUMMARY');
console.log('============================================================');
console.log(`Passed: ${passed}/${passed + failed}`);
console.log(`Failed: ${failed}/${passed + failed}`);
console.log(failed === 0 ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED');
console.log('============================================================');
