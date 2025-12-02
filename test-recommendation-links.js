// ============================================================
// FRUITHEDGE - Recommendation Link Audit Script
// Run with: node test-recommendation-links.js
// ============================================================

const fs = require('fs');

// Load data.js by extracting the recommendations array
const dataContent = fs.readFileSync('./data.js', 'utf8');

// Extract recommendations array using regex
const recommendationsMatch = dataContent.match(/const recommendations = \[([\s\S]*?)\];/);
if (!recommendationsMatch) {
  console.error('Could not find recommendations array in data.js');
  process.exit(1);
}

// Evaluate the recommendations array
let recommendations;
try {
  eval('recommendations = [' + recommendationsMatch[1] + ']');
} catch (e) {
  console.error('Error parsing recommendations:', e.message);
  process.exit(1);
}

// ============================================================
// LINK VALIDATION
// ============================================================

function validateLink(link, type) {
  if (!link) return { valid: false, reason: 'No link provided' };

  const url = link.toLowerCase();

  // Check for HTTPS
  const isHttps = url.startsWith('https://');

  // Check domain patterns
  const isAmazon = url.includes('amazon.com');
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  const isTED = url.includes('ted.com');
  const isSpotify = url.includes('spotify.com');
  const isPodcast = url.includes('podcasts.apple.com') || url.includes('spotify.com');

  // Validate based on type
  if (type === 'book') {
    if (isAmazon) return { valid: true, platform: 'Amazon', affiliate: false };
    return { valid: false, reason: 'Book should have Amazon link', platform: 'Other' };
  }

  if (type === 'video') {
    if (isYouTube) return { valid: true, platform: 'YouTube', affiliate: false };
    return { valid: false, reason: 'Video should have YouTube link', platform: 'Other' };
  }

  if (type === 'ted') {
    if (isTED) return { valid: true, platform: 'TED', affiliate: false };
    if (isYouTube) return { valid: true, platform: 'YouTube (TED)', affiliate: false };
    return { valid: false, reason: 'TED talk should have TED or YouTube link', platform: 'Other' };
  }

  if (type === 'podcast') {
    if (isPodcast || isSpotify) return { valid: true, platform: 'Podcast', affiliate: false };
    if (isYouTube) return { valid: true, platform: 'YouTube', affiliate: false };
    return { valid: false, reason: 'Podcast link format unclear', platform: 'Other' };
  }

  if (type === 'documentary') {
    if (isYouTube) return { valid: true, platform: 'YouTube', affiliate: false };
    if (isAmazon) return { valid: true, platform: 'Amazon', affiliate: false };
    return { valid: true, platform: 'Streaming', affiliate: false, needsReview: true };
  }

  // Default
  return { valid: true, platform: 'Unknown', affiliate: false, needsReview: true };
}

function getLinkDomain(link) {
  try {
    const url = new URL(link);
    return url.hostname.replace('www.', '');
  } catch {
    return 'invalid';
  }
}

// ============================================================
// AUDIT ALL RECOMMENDATIONS
// ============================================================

console.log('\n' + '='.repeat(80));
console.log('FRUITHEDGE RECOMMENDATION AUDIT');
console.log('='.repeat(80) + '\n');

const results = [];
const stats = {
  total: 0,
  byType: {},
  byPlatform: {},
  validLinks: 0,
  invalidLinks: 0,
  needsReview: 0,
  amazonLinks: 0,
  youtubeLinks: 0,
  tedLinks: 0,
  otherLinks: 0
};

recommendations.forEach((rec, index) => {
  stats.total++;

  // Count by type
  stats.byType[rec.type] = (stats.byType[rec.type] || 0) + 1;

  // Validate link
  const validation = validateLink(rec.link, rec.type);
  const domain = getLinkDomain(rec.link);

  if (validation.valid) {
    stats.validLinks++;
  } else {
    stats.invalidLinks++;
  }

  if (validation.needsReview) {
    stats.needsReview++;
  }

  // Count by platform
  if (domain.includes('amazon')) stats.amazonLinks++;
  else if (domain.includes('youtube') || domain.includes('youtu.be')) stats.youtubeLinks++;
  else if (domain.includes('ted.com')) stats.tedLinks++;
  else stats.otherLinks++;

  stats.byPlatform[validation.platform] = (stats.byPlatform[validation.platform] || 0) + 1;

  results.push({
    id: rec.id,
    title: rec.title,
    creator: rec.creator,
    type: rec.type,
    duration: rec.duration,
    patterns: rec.patterns.join(', '),
    why: rec.why,
    link: rec.link,
    domain: domain,
    linkValid: validation.valid ? 'Y' : 'N',
    platform: validation.platform,
    affiliateReady: 'N',
    needsReview: validation.needsReview || !validation.valid ? 'Y' : 'N',
    validationNote: validation.reason || ''
  });
});

// ============================================================
// CONSOLE OUTPUT - TABLE FORMAT
// ============================================================

console.log('RECOMMENDATION LINK AUDIT TABLE');
console.log('-'.repeat(120));
console.log(
  'ID'.padEnd(4) +
  'Title'.padEnd(35) +
  'Type'.padEnd(12) +
  'Patterns'.padEnd(30) +
  'Valid'.padEnd(6) +
  'Domain'
);
console.log('-'.repeat(120));

results.forEach(r => {
  const title = r.title.length > 33 ? r.title.substring(0, 30) + '...' : r.title;
  const patterns = r.patterns.length > 28 ? r.patterns.substring(0, 25) + '...' : r.patterns;

  console.log(
    String(r.id).padEnd(4) +
    title.padEnd(35) +
    r.type.padEnd(12) +
    patterns.padEnd(30) +
    r.linkValid.padEnd(6) +
    r.domain
  );
});

console.log('-'.repeat(120));

// ============================================================
// STATISTICS SUMMARY
// ============================================================

console.log('\n' + '='.repeat(80));
console.log('STATISTICS SUMMARY');
console.log('='.repeat(80) + '\n');

console.log(`Total Recommendations: ${stats.total}`);
console.log(`Valid Links: ${stats.validLinks}`);
console.log(`Invalid/Suspicious Links: ${stats.invalidLinks}`);
console.log(`Needs Manual Review: ${stats.needsReview}`);

console.log('\nBY TYPE:');
Object.entries(stats.byType).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
  console.log(`  ${type.padEnd(15)} ${count}`);
});

console.log('\nBY PLATFORM:');
Object.entries(stats.byPlatform).sort((a, b) => b[1] - a[1]).forEach(([platform, count]) => {
  console.log(`  ${platform.padEnd(15)} ${count}`);
});

console.log('\nLINK BREAKDOWN:');
console.log(`  Amazon links:  ${stats.amazonLinks}`);
console.log(`  YouTube links: ${stats.youtubeLinks}`);
console.log(`  TED links:     ${stats.tedLinks}`);
console.log(`  Other links:   ${stats.otherLinks}`);

// ============================================================
// IDENTIFY ISSUES
// ============================================================

const issues = results.filter(r => r.needsReview === 'Y');
if (issues.length > 0) {
  console.log('\n' + '='.repeat(80));
  console.log('ITEMS NEEDING REVIEW');
  console.log('='.repeat(80) + '\n');

  issues.forEach(r => {
    console.log(`ID ${r.id}: ${r.title}`);
    console.log(`  Type: ${r.type}, Platform: ${r.platform}`);
    console.log(`  Link: ${r.link}`);
    if (r.validationNote) console.log(`  Issue: ${r.validationNote}`);
    console.log('');
  });
}

// ============================================================
// GENERATE CSV
// ============================================================

const csvHeader = 'id,title,creator,type,duration,patterns,why_recommended,link_url,affiliate_ready,needs_review';
const csvRows = results.map(r => {
  // Escape CSV fields
  const escapeCSV = (str) => {
    if (!str) return '';
    const escaped = String(str).replace(/"/g, '""');
    return `"${escaped}"`;
  };

  return [
    r.id,
    escapeCSV(r.title),
    escapeCSV(r.creator),
    r.type,
    escapeCSV(r.duration),
    escapeCSV(r.patterns),
    escapeCSV(r.why),
    escapeCSV(r.link),
    r.affiliateReady,
    r.needsReview
  ].join(',');
});

const csvContent = csvHeader + '\n' + csvRows.join('\n');

fs.writeFileSync('./recommendation-matrix.csv', csvContent);
console.log('\n' + '='.repeat(80));
console.log('CSV EXPORT');
console.log('='.repeat(80));
console.log('\nGenerated: recommendation-matrix.csv');
console.log(`Rows: ${results.length}`);
console.log('Columns: id, title, creator, type, duration, patterns, why_recommended, link_url, affiliate_ready, needs_review');

// ============================================================
// FINAL SUMMARY
// ============================================================

console.log('\n' + '='.repeat(80));
console.log('AUDIT COMPLETE');
console.log('='.repeat(80));

const passRate = ((stats.validLinks / stats.total) * 100).toFixed(1);
console.log(`\nLink Validation Pass Rate: ${passRate}%`);

if (stats.invalidLinks === 0 && stats.needsReview === 0) {
  console.log('Status: ALL LINKS VALID');
} else {
  console.log(`Status: ${stats.invalidLinks} invalid, ${stats.needsReview} need review`);
}

console.log('\n');
