// ============================================================
// FRUITHEDGE v3.0 — Application Logic
// Single-page scroll, per-law calculations, inline results
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // STATE
  // ============================================================

  const state = {
    scores: {
      aq: 0,
      ri: 0,
      ci: 0,
      alpha: 0
    },
    inputs: {
      energy: 5,
      space: 5,
      optionality: 5,
      constraint: 5,
      impact: 5,
      identity: 5,
      boldness: 5,
      audience: 31623, // Corresponds to slider value 50 (logarithmic midpoint)
      flow: 15,
      evolution: 5,
      risk: 5,
      admin: 15,
      distraction: 15,
      stagnation: 5
    },
    calculated: {
      aq: false,
      ri: false,
      ci: false
    },
    archetype: null,
    recommendation: null,
    protocol: null,
    history: [],
    settings: {
      theme: 'dark',
      lastCalculated: null
    }
  };

  // ============================================================
  // PERSONALIZED REFLECTION QUESTIONS (for PDF Journal)
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
  // DOM ELEMENTS
  // ============================================================

  const elements = {
    // Theme
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.querySelector('.theme-icon'),

    // Sliders
    sliders: {
      energy: document.getElementById('slider-energy'),
      space: document.getElementById('slider-space'),
      optionality: document.getElementById('slider-optionality'),
      constraint: document.getElementById('slider-constraint'),
      impact: document.getElementById('slider-impact'),
      identity: document.getElementById('slider-identity'),
      boldness: document.getElementById('slider-boldness'),
      audience: document.getElementById('slider-audience'),
      flow: document.getElementById('slider-flow'),
      evolution: document.getElementById('slider-evolution'),
      risk: document.getElementById('slider-risk'),
      admin: document.getElementById('slider-admin'),
      distraction: document.getElementById('slider-distraction'),
      stagnation: document.getElementById('slider-stagnation')
    },

    // Slider values display
    values: {
      energy: document.getElementById('value-energy'),
      space: document.getElementById('value-space'),
      optionality: document.getElementById('value-optionality'),
      constraint: document.getElementById('value-constraint'),
      impact: document.getElementById('value-impact'),
      identity: document.getElementById('value-identity'),
      boldness: document.getElementById('value-boldness'),
      audience: document.getElementById('value-audience'),
      flow: document.getElementById('value-flow'),
      evolution: document.getElementById('value-evolution'),
      risk: document.getElementById('value-risk'),
      admin: document.getElementById('value-admin'),
      distraction: document.getElementById('value-distraction'),
      stagnation: document.getElementById('value-stagnation')
    },

    // Law scores in header of each card
    lawScores: {
      aq: document.getElementById('aq-box'),
      ri: document.getElementById('ri-box'),
      ci: document.getElementById('ci-box')
    },

    // Per-law calculate buttons
    calculateAqBtn: document.getElementById('calculate-aq-btn'),
    calculateRiBtn: document.getElementById('calculate-ri-btn'),
    calculateCiBtn: document.getElementById('calculate-ci-btn'),

    // Inline results containers
    aqResult: document.getElementById('aq-result'),
    riResult: document.getElementById('ri-result'),
    ciResult: document.getElementById('ci-result'),

    // Inline result values
    aqResultValue: document.getElementById('aq-num'),
    riResultValue: document.getElementById('ri-num'),
    ciResultValue: document.getElementById('ci-num'),

    // Inline result status
    aqResultStatus: document.getElementById('aq-status'),
    riResultStatus: document.getElementById('ri-status'),
    ciResultStatus: document.getElementById('ci-status'),

    // Inline result explanations
    aqResultExplain: document.getElementById('aq-explain'),
    riResultExplain: document.getElementById('ri-explain'),
    ciResultExplain: document.getElementById('ci-explain'),

    // Inline result bars (optional)
    aqBar: document.getElementById('aq-bar'),
    riBar: document.getElementById('ri-bar'),
    ciBar: document.getElementById('ci-bar'),

    // Composite/Synthesis section
    compositeNum: document.getElementById('composite-num'),
    compositeStatus: document.getElementById('composite-status'),

    // Archetype card
    archetypeCard: document.getElementById('archetype-card'),

    // Recommendations section
    recsSection: document.getElementById('recs-section'),
    recsContent: document.getElementById('recs-content'),

    // Archetype
    archetypeName: document.getElementById('archetype-name'),
    archetypeSubtitle: document.getElementById('archetype-subtitle'),
    archetypeProfile: document.getElementById('archetype-profile'),
    archetypeInsight: document.getElementById('archetype-insight'),

    // Recommendation
    recIcon: document.getElementById('rec-icon'),
    recTitle: document.getElementById('rec-title'),
    recCreator: document.getElementById('rec-creator'),
    recType: document.getElementById('rec-type'),
    recDuration: document.getElementById('rec-duration'),
    recWhy: document.getElementById('rec-why'),
    recLink: document.getElementById('rec-link'),
    secondaryRecs: document.getElementById('secondary-recommendations'),

    // Wellness
    wellnessIcon: document.getElementById('wellness-icon'),
    wellnessName: document.getElementById('wellness-name'),
    wellnessCategory: document.getElementById('wellness-category'),
    wellnessPrescription: document.getElementById('wellness-prescription'),
    wellnessWhy: document.getElementById('wellness-why'),

    // History
    saveScoresBtn: document.getElementById('save-scores-btn'),
    exportHistoryBtn: document.getElementById('export-history-btn'),
    clearHistoryBtn: document.getElementById('clear-history-btn'),
    historyTbody: document.getElementById('history-tbody'),
    historyEmpty: document.getElementById('history-empty'),

    // Export
    exportImageBtn: document.getElementById('export-image-btn'),
    exportPdfBtn: document.getElementById('export-pdf-btn'),
    copyLinkBtn: document.getElementById('copy-link-btn'),
    shareTwitterBtn: document.getElementById('share-twitter-btn'),
    exportCanvas: document.getElementById('export-canvas'),

    // Modal
    modalOverlay: document.getElementById('modal-overlay'),
    modalTitle: document.getElementById('modal-title'),
    modalMessage: document.getElementById('modal-message'),
    modalClose: document.getElementById('modal-close'),
    modalCancel: document.getElementById('modal-cancel'),
    modalConfirm: document.getElementById('modal-confirm')
  };

  // ============================================================
  // CALCULATION FUNCTIONS (Calibrated v2)
  // ============================================================

  /**
   * Calculate Autonomy Quotient
   * Geometric mean of positives divided by constraint factor
   *
   * Expected results:
   * - E=10, S=10, O=10, C=1 → AQ = 10
   * - E=10, S=10, O=10, C=10 → AQ = 5
   * - E=5, S=5, O=5, C=5 → AQ = ~3.5
   * - E=1, S=1, O=1, C=10 → AQ = 1 (floored)
   */
  function calculateAQ(e, s, o, c) {
    // Geometric mean of positives (1-10 scale)
    const positiveGeo = Math.pow(e * s * o, 1/3);
    // Constraint factor: C=1 → 1.0, C=10 → 2.0
    const constraintFactor = 1 + (c - 1) / 9;
    const aq = positiveGeo / constraintFactor;
    return Math.round(Math.min(10, Math.max(1, aq)) * 10) / 10;
  }

  /**
   * Calculate Resonance Index
   * Geometric mean of depth factors divided by audience dilution
   *
   * Expected results:
   * - I=10, Id=10, B=10, A=small → Ri = 10
   * - I=10, Id=10, B=10, A=large → Ri = ~5-6
   * - I=5, Id=5, B=5, A=medium → Ri = ~5
   * - I=1, Id=1, B=1, A=large → Ri = 1 (floored)
   */
  function calculateRi(i, id, b, audienceValue) {
    // Geometric mean of depth factors (1-10 scale)
    const depthGeo = Math.pow(i * id * b, 1/3);
    // Audience dilution: 1K→1.0, 10M→1.75
    const dilution = 1 + Math.log10(audienceValue / 1000) / 4;
    const dilutionClamped = Math.max(0.5, Math.min(2, dilution));
    const ri = depthGeo / dilutionClamped;
    return Math.round(Math.min(10, Math.max(1, ri)) * 10) / 10;
  }

  /**
   * Calculate Craft Intensity
   * Geometric mean of fuel divided by drag factor
   *
   * Expected results:
   * - F=60, Ev=10, R=10, Ad=1, D=1, St=1 → Ci = 10
   * - F=30, Ev=5, R=5, Ad=15, D=15, St=5 → Ci = ~5
   * - F=1, Ev=1, R=1, Ad=60, D=60, St=10 → Ci = 1 (floored)
   */
  function calculateCi(f, ev, r, ad, d, st) {
    // Normalize flow/admin/distraction from 1-60 to 1-10 scale
    const flowNorm = 1 + (f - 1) * 9 / 59;
    const adminNorm = 1 + (ad - 1) * 9 / 59;
    const distractNorm = 1 + (d - 1) * 9 / 59;

    // Geometric mean of fuel (all on 1-10 scale)
    const fuelGeo = Math.pow(flowNorm * ev * r, 1/3);

    // Geometric mean of drag (all on 1-10 scale)
    const dragGeo = Math.pow(adminNorm * distractNorm * st, 1/3);

    // Drag factor: low drag = 1.0, high drag = 2.0
    const dragFactor = 1 + (dragGeo - 1) / 9;

    const ci = fuelGeo / dragFactor;
    return Math.round(Math.min(10, Math.max(1, ci)) * 10) / 10;
  }

  /**
   * Calculate Creative Alpha Index
   * α = ∛(AQ × Ri × Ci)
   */
  function calculateAlpha(aq, ri, ci) {
    const alpha = Math.pow(aq * ri * ci, 1/3);
    return Math.round(alpha * 10) / 10;
  }

  /**
   * Get AQ status with emoji and explanation
   */
  function getAQStatus(score) {
    if (score >= 8) {
      return {
        label: '✓ AUTONOMY ACHIEVED',
        explain: 'Full creative freedom. You have the rare gift of space, energy, and choice. Protect this state fiercely—it is the foundation of great work.',
        class: 'excellent'
      };
    }
    if (score >= 5) {
      return {
        label: '⚡ MODERATE AUTONOMY',
        explain: 'Functional but with friction. You can create, but constraints are limiting your potential. Identify your top energy drain and eliminate it.',
        class: 'functional'
      };
    }
    if (score >= 3) {
      return {
        label: '⚠ CONSTRAINED',
        explain: 'Significant limitations on your creative capacity. You are spending too much energy on survival. Strategic restructuring needed.',
        class: 'struggling'
      };
    }
    return {
      label: '✗ DISTRESSED ASSET',
      explain: 'Creative emergency. Obligations are crushing your capacity. Immediate intervention required—cancel non-essentials, protect your energy.',
      class: 'critical'
    };
  }

  /**
   * Get Ri status with emoji and explanation
   */
  function getRiStatus(score) {
    if (score >= 8) {
      return {
        label: '★ CULT CLASSIC',
        explain: 'Deep, lasting impact. Your work creates lifelong fans who would notice if you disappeared. This is real art—sustainable and meaningful.',
        class: 'excellent'
      };
    }
    if (score >= 5) {
      return {
        label: '⚡ SOLID RESONANCE',
        explain: 'Meaningful connection with your audience. Room to deepen impact through more boldness or specificity. You are on the right path.',
        class: 'functional'
      };
    }
    if (score >= 3) {
      return {
        label: '⚠ DILUTED',
        explain: 'Reach may be exceeding depth. You might be optimizing for vanity metrics. Consider narrowing focus and increasing authenticity.',
        class: 'struggling'
      };
    }
    return {
      label: '⊘ ALGORITHM NOISE',
      explain: 'High dilution detected. Your content may be disposable—consumed and forgotten. Fundamental reset needed: create for 1 person, not 1 million.',
      class: 'critical'
    };
  }

  /**
   * Get Ci status with emoji and explanation
   */
  function getCiStatus(score) {
    if (score >= 8) {
      return {
        label: '◆ EXPONENTIAL GROWTH',
        explain: 'You are mastering your craft. High flow, continuous evolution, bold experimentation. This is the path to legendary status.',
        class: 'excellent'
      };
    }
    if (score >= 5) {
      return {
        label: '△ STEADY PROGRESS',
        explain: 'You are developing skills, but operational drag or comfort zone is limiting velocity. Push harder on evolution and risk.',
        class: 'functional'
      };
    }
    if (score >= 3) {
      return {
        label: '⚠ STAGNATION WARNING',
        explain: 'More drag than fuel. Admin, distraction, or fear is eating your creative capacity. Audit your time ruthlessly.',
        class: 'struggling'
      };
    }
    return {
      label: '○ CREATIVE ATROPHY',
      explain: 'Your craft is dying from neglect. Too much friction, too little flow. Emergency reset: block 3 hours of zero-interruption time this week.',
      class: 'critical'
    };
  }

  /**
   * Get generic score status (used by calculateAllScores)
   */
  function getScoreStatus(score) {
    if (score >= 8) {
      return { label: 'Excellent', class: 'excellent' };
    }
    if (score >= 5) {
      return { label: 'Functional', class: 'functional' };
    }
    if (score >= 3) {
      return { label: 'Struggling', class: 'struggling' };
    }
    return { label: 'Critical', class: 'critical' };
  }

  /**
   * Get Alpha status with emoji and explanation
   */
  function getAlphaStatus(score) {
    if (score >= 8) {
      return {
        label: 'COMPOUNDING RETURNS',
        explain: 'All three forces aligned. Your creative portfolio is generating alpha. Protect the conditions that made this possible. Your personalized journal captures the reflection questions that reveal what\'s working — use it to document and replicate this state.'
      };
    }
    if (score >= 6) {
      return {
        label: 'POSITIVE MOMENTUM',
        explain: 'Strong position. You\'re outperforming — now identify your weakest law and rebalance for maximum growth. Your personalized journal highlights the specific friction points to address next.'
      };
    }
    if (score >= 4) {
      return {
        label: 'HOLDING PATTERN',
        explain: 'Stable but not growing. You\'re maintaining, not compounding. One strategic move could unlock the next level. Your personalized journal contains the questions that will reveal exactly where you\'re stuck.'
      };
    }
    if (score >= 2) {
      return {
        label: 'PORTFOLIO DRAG',
        explain: 'Significant friction eating your returns. Audit ruthlessly — something is bleeding your creative capital. Your personalized journal is designed to help you identify the leaks and plug them.'
      };
    }
    return {
      label: 'CREATIVE INSOLVENCY',
      explain: 'All systems underwater. Stop trading your creative capital. Recover your principal before making any new investments. We crafted a personalized journal for you — use it to reflect and find your way back to baseline.'
    };
  }

  // ============================================================
  // AUDIENCE SLIDER CONVERSION (Logarithmic)
  // ============================================================

  function sliderToAudience(sliderValue) {
    const minAudience = 100;
    const maxAudience = 10000000;
    const minLog = Math.log10(minAudience);
    const maxLog = Math.log10(maxAudience);
    const logValue = minLog + (sliderValue / 100) * (maxLog - minLog);
    return Math.round(Math.pow(10, logValue));
  }

  function audienceToSlider(audience) {
    const minAudience = 100;
    const maxAudience = 10000000;
    const minLog = Math.log10(minAudience);
    const maxLog = Math.log10(maxAudience);
    const logValue = Math.log10(audience);
    return Math.round(((logValue - minLog) / (maxLog - minLog)) * 100);
  }

  function formatAudience(audience) {
    if (audience >= 1000000) return (audience / 1000000).toFixed(1) + 'M';
    if (audience >= 1000) return (audience / 1000).toFixed(0) + 'K';
    return audience.toString();
  }

  // ============================================================
  // PERSONALIZED REFLECTION GENERATION (for PDF Journal)
  // ============================================================

  function getPersonalizedReflection(key, value, max = 10) {
    const thresholds = { low: max * 0.3, high: max * 0.7 };
    const questions = personalizedReflections[key];
    if (!questions) return '';

    if (value <= thresholds.low) return questions.low;
    if (value >= thresholds.high) return questions.high;
    return questions.mid;
  }

  function getAudiencePersonalizedReflection(audience) {
    if (audience < 1000) return personalizedReflections.audience.small;
    if (audience < 100000) return personalizedReflections.audience.medium;
    return personalizedReflections.audience.large;
  }

  // ============================================================
  // ARCHETYPE MATCHING
  // ============================================================

  function matchArchetype(scores) {
    for (const arch of archetypes) {
      if (arch.check(scores)) {
        return arch;
      }
    }
    return archetypes.find(a => a.id === 'explorer');
  }

  // ============================================================
  // RECOMMENDATION MATCHING
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

  function matchRecommendations(scores, count = 4) {
    const patterns = getPatterns(scores);

    // Score each recommendation by pattern matches
    const scored = recommendations.map(rec => ({
      ...rec,
      matchScore: rec.patterns.filter(p => patterns.includes(p)).length
    }));

    // Filter to only those with at least 1 match
    const matched = scored.filter(r => r.matchScore > 0);

    // Sort by match score (descending)
    matched.sort((a, b) => b.matchScore - a.matchScore);

    // Get variety of types if possible
    const result = [];
    const usedTypes = new Set();

    // First pass: get top match of each type for variety
    for (const rec of matched) {
      if (result.length >= count) break;
      if (!usedTypes.has(rec.type) || result.length < 2) {
        result.push(rec);
        usedTypes.add(rec.type);
      }
    }

    // Second pass: fill remaining slots with best remaining matches
    for (const rec of matched) {
      if (result.length >= count) break;
      if (!result.includes(rec)) {
        result.push(rec);
      }
    }

    // Fallback if no matches
    if (result.length === 0) {
      return recommendations.slice(0, count);
    }

    return result;
  }

  // ============================================================
  // PROTOCOL MATCHING
  // ============================================================

  function matchProtocol(scores) {
    const patterns = getPatterns(scores);

    const weakest = getWeakestLaw(scores);
    if (weakest === 'aq') patterns.push('low_energy', 'low_space', 'high_constraint');
    if (weakest === 'ci') patterns.push('paralyzed');

    const matches = protocols.filter(p =>
      p.patterns.some(pat => patterns.includes(pat) || pat === 'all')
    );

    if (matches.length > 0) {
      return matches[Math.floor(Math.random() * matches.length)];
    }

    return protocols[0];
  }

  function getWeakestLaw(scores) {
    if (scores.aq <= scores.ri && scores.aq <= scores.ci) return 'aq';
    if (scores.ri <= scores.aq && scores.ri <= scores.ci) return 'ri';
    return 'ci';
  }

  function getCategoryIcon(category) {
    const icons = {
      physical: '🏃',
      mental: '🧠',
      creative: '🎨',
      constraint: '🔓',
      fruit: '🍎'
    };
    return icons[category] || '✨';
  }

  // ============================================================
  // UI UPDATES - Per-Law Calculation
  // ============================================================

  /**
   * Calculate and display AQ score inline
   */
  function calculateAndShowAQ() {
    const inputs = state.inputs;
    const aq = calculateAQ(inputs.energy, inputs.space, inputs.optionality, inputs.constraint);
    state.scores.aq = aq;
    state.calculated.aq = true;

    // Update law card header score
    if (elements.lawScores.aq) {
      elements.lawScores.aq.textContent = aq.toFixed(1);
    }

    // Show inline result
    if (elements.aqResult) {
      elements.aqResult.classList.remove('hidden');
      elements.aqResult.classList.add('show');
    }
    if (elements.aqResultValue) {
      animateValue(elements.aqResultValue, 0, aq, 800);
    }

    // Update status with emoji and explanation
    const status = getAQStatus(aq);
    if (elements.aqResultStatus) {
      elements.aqResultStatus.textContent = status.label;
      elements.aqResultStatus.className = `result-status`;
    }
    if (elements.aqResultExplain) {
      elements.aqResultExplain.textContent = status.explain;
    }

    // Animate bar (if exists)
    if (elements.aqBar) {
      setTimeout(() => {
        elements.aqBar.style.width = `${aq * 10}%`;
      }, 100);
    }

    // Update alpha if all calculated
    updateAlphaIfReady();
  }

  /**
   * Calculate and display Ri score inline
   */
  function calculateAndShowRi() {
    const inputs = state.inputs;
    const ri = calculateRi(inputs.impact, inputs.identity, inputs.boldness, inputs.audience);
    state.scores.ri = ri;
    state.calculated.ri = true;

    // Update law card header score
    if (elements.lawScores.ri) {
      elements.lawScores.ri.textContent = ri.toFixed(1);
    }

    // Show inline result
    if (elements.riResult) {
      elements.riResult.classList.remove('hidden');
      elements.riResult.classList.add('show');
    }
    if (elements.riResultValue) {
      animateValue(elements.riResultValue, 0, ri, 800);
    }

    // Update status with emoji and explanation
    const status = getRiStatus(ri);
    if (elements.riResultStatus) {
      elements.riResultStatus.textContent = status.label;
      elements.riResultStatus.className = `result-status`;
    }
    if (elements.riResultExplain) {
      elements.riResultExplain.textContent = status.explain;
    }

    // Animate bar (if exists)
    if (elements.riBar) {
      setTimeout(() => {
        elements.riBar.style.width = `${ri * 10}%`;
      }, 100);
    }

    // Update alpha if all calculated
    updateAlphaIfReady();
  }

  /**
   * Calculate and display Ci score inline
   */
  function calculateAndShowCi() {
    const inputs = state.inputs;
    const ci = calculateCi(inputs.flow, inputs.evolution, inputs.risk, inputs.admin, inputs.distraction, inputs.stagnation);
    state.scores.ci = ci;
    state.calculated.ci = true;

    // Update law card header score
    if (elements.lawScores.ci) {
      elements.lawScores.ci.textContent = ci.toFixed(1);
    }

    // Show inline result
    if (elements.ciResult) {
      elements.ciResult.classList.remove('hidden');
      elements.ciResult.classList.add('show');
    }
    if (elements.ciResultValue) {
      animateValue(elements.ciResultValue, 0, ci, 800);
    }

    // Update status with emoji and explanation
    const status = getCiStatus(ci);
    if (elements.ciResultStatus) {
      elements.ciResultStatus.textContent = status.label;
      elements.ciResultStatus.className = `result-status`;
    }
    if (elements.ciResultExplain) {
      elements.ciResultExplain.textContent = status.explain;
    }

    // Animate bar (if exists)
    if (elements.ciBar) {
      setTimeout(() => {
        elements.ciBar.style.width = `${ci * 10}%`;
      }, 100);
    }

    // Update alpha if all calculated
    updateAlphaIfReady();
  }

  /**
   * Update alpha if all three laws are calculated
   */
  function updateAlphaIfReady() {
    if (state.calculated.aq && state.calculated.ri && state.calculated.ci) {
      state.scores.alpha = calculateAlpha(state.scores.aq, state.scores.ri, state.scores.ci);

      // Update composite display
      if (elements.compositeNum) {
        animateValue(elements.compositeNum, 0, state.scores.alpha, 1000);
      }

      // Update composite status
      const alphaStatus = getAlphaStatus(state.scores.alpha);
      if (elements.compositeStatus) {
        elements.compositeStatus.textContent = alphaStatus.label + ' — ' + alphaStatus.explain;
      }

      // Match archetype, recommendation, and protocol
      state.archetype = matchArchetype(state.scores);
      const recs = matchRecommendations(state.scores, 4);
      state.recommendation = recs[0];
      state.protocol = matchProtocol(state.scores);

      // Show archetype and recommendations
      showArchetypeCard();
      showRecommendations();
    }
  }

  /**
   * Show archetype card with matched archetype data
   */
  function showArchetypeCard() {
    if (!state.archetype) return;

    const arch = state.archetype;

    // Show the card
    if (elements.archetypeCard) {
      elements.archetypeCard.classList.add('show');
    }

    // Update archetype info
    if (elements.archetypeName) {
      elements.archetypeName.textContent = arch.name;
    }
    if (elements.archetypeSubtitle) {
      elements.archetypeSubtitle.textContent = arch.subtitle || arch.sub;
    }
    if (elements.archetypeProfile) {
      elements.archetypeProfile.textContent = arch.profile;
    }
    if (elements.archetypeInsight) {
      elements.archetypeInsight.textContent = arch.insight;
    }
  }

  /**
   * Show recommendations based on weakest law
   */
  function showRecommendations() {
    if (!elements.recsSection || !elements.recsContent) return;

    const scores = state.scores;

    // Find weakest law
    const weakest = getWeakestLaw(scores);

    const recs = {
      aq: {
        title: 'Autonomy Deficit Detected',
        content: 'Your creative freedom is strangled. Without autonomy, all other metrics are meaningless.',
        action: 'Next 7 Days: Identify your top 3 energy drains. Ruthlessly eliminate ONE of them.'
      },
      ri: {
        title: 'Depth Over Reach Required',
        content: 'You may be optimizing for vanity metrics. High reach + low resonance = disposable content.',
        action: 'Next 7 Days: Create one piece for an audience of ONE. Impossibly specific, weird, true.'
      },
      ci: {
        title: 'Flow State Deficit',
        content: 'Your craft is dying from operational drag. Without deep flow, you cannot evolve.',
        action: 'Next 7 Days: Block 3 hours for ZERO interruption work. Phone off. Internet off.'
      }
    };

    const r = recs[weakest];
    let html = `<div class="rec-card">
      <div class="rec-tier">TIER 1: CRITICAL FOCUS</div>
      <div class="rec-title">${r.title}</div>
      <p class="rec-content">${r.content}</p>
      <div class="rec-action">${r.action}</div>
    </div>`;

    // FruitHedge Protocol (formerly Wellness)
    if (state.protocol) {
      const p = state.protocol;
      const icon = getCategoryIcon(p.category);
      html += `<div class="rec-card wellness">
        <div class="rec-tier">${icon} FRUITHEDGE PROTOCOL</div>
        <div class="rec-title">${p.name}</div>
        <p class="rec-content"><strong>Prescription:</strong> ${p.prescription}</p>
        <div class="rec-action">${p.why}</div>
      </div>`;
    }

    elements.recsContent.innerHTML = html;
    elements.recsSection.classList.add('show');
  }

  // ============================================================
  // UI UPDATES - Full Results
  // ============================================================

  /**
   * Update full results section
   */
  function updateFullResults() {
    const scores = state.scores;

    // Update alpha with animation
    animateValue(elements.alphaResult, 0, scores.alpha, 1200);

    // Update summary scores
    elements.summaryAq.textContent = scores.aq.toFixed(1);
    elements.summaryRi.textContent = scores.ri.toFixed(1);
    elements.summaryCi.textContent = scores.ci.toFixed(1);

    // Update archetype
    const archetype = state.archetype;
    elements.archetypeName.textContent = archetype.name;
    elements.archetypeSubtitle.textContent = archetype.subtitle;
    elements.archetypeProfile.textContent = archetype.profile;
    elements.archetypeInsight.textContent = archetype.insight;

    // Update primary recommendation
    const rec = state.recommendation;
    elements.recIcon.textContent = typeIcons[rec.type] || '📚';
    elements.recTitle.textContent = rec.title;
    elements.recCreator.textContent = `by ${rec.creator}`;
    elements.recType.textContent = rec.type.charAt(0).toUpperCase() + rec.type.slice(1);
    elements.recDuration.textContent = rec.duration;
    elements.recWhy.textContent = rec.why;
    elements.recLink.href = rec.link;

    // Update secondary recommendations
    const secondaryRecs = matchRecommendations(scores, 4).slice(1, 4);
    elements.secondaryRecs.innerHTML = secondaryRecs.map(rec => `
      <a href="${rec.link}" target="_blank" rel="noopener noreferrer" class="secondary-rec-card">
        <div class="secondary-rec-header">
          <span class="secondary-rec-icon">${typeIcons[rec.type] || '📚'}</span>
          <span class="secondary-rec-title">${rec.title}</span>
        </div>
        <span class="secondary-rec-creator">${rec.creator}</span>
      </a>
    `).join('');

    // Update wellness protocol
    const protocol = state.protocol;
    elements.wellnessIcon.textContent = getCategoryIcon(protocol.category);
    elements.wellnessName.textContent = protocol.name;
    elements.wellnessCategory.textContent = protocol.category.charAt(0).toUpperCase() + protocol.category.slice(1);
    elements.wellnessPrescription.textContent = protocol.prescription;
    elements.wellnessWhy.textContent = protocol.why;
  }

  /**
   * Animate number value
   */
  function animateValue(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOut;

      element.textContent = current.toFixed(1);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ============================================================
  // THEME
  // ============================================================

  function setTheme(theme) {
    state.settings.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    elements.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    saveSettings();
  }

  function toggleTheme() {
    const newTheme = state.settings.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // ============================================================
  // LOCAL STORAGE
  // ============================================================

  function loadFromStorage() {
    try {
      const historyData = localStorage.getItem('fruithedge_history');
      if (historyData) {
        state.history = JSON.parse(historyData);
      }

      const settingsData = localStorage.getItem('fruithedge_settings');
      if (settingsData) {
        state.settings = { ...state.settings, ...JSON.parse(settingsData) };
      }
    } catch (e) {
      console.error('Error loading from localStorage:', e);
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem('fruithedge_history', JSON.stringify(state.history));
    } catch (e) {
      console.error('Error saving history:', e);
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem('fruithedge_settings', JSON.stringify(state.settings));
    } catch (e) {
      console.error('Error saving settings:', e);
    }
  }

  // ============================================================
  // HISTORY
  // ============================================================

  function saveCurrentScores() {
    if (state.scores.alpha === 0) {
      alert('Please calculate your scores first.');
      return;
    }

    const entry = {
      id: generateId(),
      date: new Date().toISOString(),
      scores: { ...state.scores },
      inputs: { ...state.inputs },
      archetype: state.archetype ? state.archetype.id : null
    };

    state.history.unshift(entry);
    saveHistory();
    updateHistoryDisplay();
    alert('Scores saved to history!');
  }

  function generateId() {
    return 'xxxx-xxxx-xxxx'.replace(/x/g, () => {
      return Math.floor(Math.random() * 16).toString(16);
    });
  }

  function updateHistoryDisplay() {
    const history = state.history;
    const tableWrapper = document.querySelector('.history-table-wrapper');

    if (history.length === 0) {
      elements.historyTbody.innerHTML = '';
      elements.historyEmpty.classList.remove('hidden');
      if (tableWrapper) tableWrapper.classList.add('hidden');
    } else {
      elements.historyEmpty.classList.add('hidden');
      if (tableWrapper) tableWrapper.classList.remove('hidden');

      elements.historyTbody.innerHTML = history.map((entry, index) => {
        const prev = history[index + 1];
        const date = new Date(entry.date).toLocaleDateString();

        const getDelta = (current, previous, key) => {
          if (!previous) return '';
          const diff = current - previous.scores[key];
          if (diff === 0) return '';
          const sign = diff > 0 ? '+' : '';
          const className = diff > 0 ? 'delta--positive' : 'delta--negative';
          return `<span class="delta ${className}">${sign}${diff.toFixed(1)}</span>`;
        };

        return `
          <tr>
            <td>${date}</td>
            <td>${entry.scores.aq.toFixed(1)} ${getDelta(entry.scores.aq, prev, 'aq')}</td>
            <td>${entry.scores.ri.toFixed(1)} ${getDelta(entry.scores.ri, prev, 'ri')}</td>
            <td>${entry.scores.ci.toFixed(1)} ${getDelta(entry.scores.ci, prev, 'ci')}</td>
            <td>${entry.scores.alpha.toFixed(1)} ${getDelta(entry.scores.alpha, prev, 'alpha')}</td>
            <td class="history-actions-cell">
              <button class="history-action-btn" onclick="FruitHedge.viewEntry('${entry.id}')">View</button>
              <button class="history-action-btn" onclick="FruitHedge.deleteEntry('${entry.id}')">Delete</button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  function viewEntry(id) {
    const entry = state.history.find(e => e.id === id);
    if (!entry) return;

    // Load the inputs
    Object.keys(entry.inputs).forEach(key => {
      state.inputs[key] = entry.inputs[key];
      if (elements.sliders[key]) {
        if (key === 'audience') {
          elements.sliders[key].value = audienceToSlider(entry.inputs[key]);
          elements.values[key].textContent = formatAudience(entry.inputs[key]);
        } else {
          elements.sliders[key].value = entry.inputs[key];
          elements.values[key].textContent = entry.inputs[key];
        }
      }
    });

    // Recalculate all scores
    calculateAllScores();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function deleteEntry(id) {
    state.history = state.history.filter(e => e.id !== id);
    saveHistory();
    updateHistoryDisplay();
  }

  function clearHistory() {
    showModal('Clear History', 'Are you sure you want to delete all history? This cannot be undone.', () => {
      state.history = [];
      saveHistory();
      updateHistoryDisplay();
      hideModal();
    });
  }

  function exportHistory() {
    if (state.history.length === 0) {
      alert('No history to export. Save some scores first.');
      return;
    }
    const data = JSON.stringify(state.history, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fruithedge-history.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  // ============================================================
  // EXPORT FUNCTIONS
  // ============================================================

  function generateImage() {
    if (state.scores.alpha === 0) {
      alert('Please calculate your scores first.');
      return;
    }

    const canvas = elements.exportCanvas;
    const ctx = canvas.getContext('2d');

    canvas.width = 1200;
    canvas.height = 630;

    // Background
    ctx.fillStyle = '#0a0e14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grain effect
    ctx.globalAlpha = 0.03;
    for (let i = 0; i < 5000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#fff' : '#000';
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
    }
    ctx.globalAlpha = 1;

    // Logo
    ctx.font = 'bold 48px Playfair Display, serif';
    const gradient = ctx.createLinearGradient(50, 50, 300, 50);
    gradient.addColorStop(0, '#c4ff61');
    gradient.addColorStop(0.5, '#ff9b71');
    gradient.addColorStop(1, '#ff6b9d');
    ctx.fillStyle = gradient;
    ctx.textAlign = 'left';
    ctx.fillText('FruitHedge', 50, 80);

    // Tagline
    ctx.font = '16px IBM Plex Sans, sans-serif';
    ctx.fillStyle = '#8b949e';
    ctx.fillText('Creative Portfolio Manager', 50, 110);

    // Alpha score
    ctx.font = 'bold 180px Playfair Display, serif';
    const alphaGradient = ctx.createLinearGradient(400, 200, 800, 400);
    alphaGradient.addColorStop(0, '#c4ff61');
    alphaGradient.addColorStop(0.5, '#ff9b71');
    alphaGradient.addColorStop(1, '#ff6b9d');
    ctx.fillStyle = alphaGradient;
    ctx.textAlign = 'center';
    ctx.fillText(state.scores.alpha.toFixed(1), canvas.width / 2, 320);

    // Alpha label
    ctx.font = '24px IBM Plex Sans, sans-serif';
    ctx.fillStyle = '#8b949e';
    ctx.fillText('Creative Alpha Index', canvas.width / 2, 360);

    // Three scores
    const scores = [
      { label: 'Autonomy', value: state.scores.aq, color: '#c4ff61' },
      { label: 'Resonance', value: state.scores.ri, color: '#ff9b71' },
      { label: 'Craft Intensity', value: state.scores.ci, color: '#ff6b9d' }
    ];

    scores.forEach((score, i) => {
      const x = 200 + i * 300;
      const y = 450;

      ctx.font = 'bold 48px JetBrains Mono, monospace';
      ctx.fillStyle = score.color;
      ctx.fillText(score.value.toFixed(1), x, y);

      ctx.font = '16px IBM Plex Sans, sans-serif';
      ctx.fillStyle = '#8b949e';
      ctx.fillText(score.label, x, y + 30);
    });

    // Archetype
    ctx.font = '20px IBM Plex Sans, sans-serif';
    ctx.fillStyle = '#e6edf3';
    ctx.fillText(state.archetype ? state.archetype.name : 'Creative', canvas.width / 2, 550);

    ctx.font = '14px IBM Plex Sans, sans-serif';
    ctx.fillStyle = '#484f58';
    ctx.fillText(state.archetype ? state.archetype.subtitle : '', canvas.width / 2, 580);

    // Date
    ctx.textAlign = 'right';
    ctx.font = '14px JetBrains Mono, monospace';
    ctx.fillStyle = '#484f58';
    ctx.fillText(new Date().toLocaleDateString(), canvas.width - 50, canvas.height - 30);

    // Download
    const link = document.createElement('a');
    link.download = 'fruithedge-results.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  /**
   * Generate PDF Journal with personalized reflection questions
   */
  function generatePDFJournal() {
    if (state.scores.alpha === 0) {
      alert('Please calculate your scores first.');
      return;
    }

    const inputs = state.inputs;

    // Generate personalized reflections based on current scores
    const reflections = {
      // Autonomy
      energy: getPersonalizedReflection('energy', inputs.energy, 10),
      space: getPersonalizedReflection('space', inputs.space, 10),
      optionality: getPersonalizedReflection('optionality', inputs.optionality, 10),
      constraint: getPersonalizedReflection('constraint', inputs.constraint, 10),
      // Resonance
      impact: getPersonalizedReflection('impact', inputs.impact, 10),
      identity: getPersonalizedReflection('identity', inputs.identity, 10),
      boldness: getPersonalizedReflection('boldness', inputs.boldness, 10),
      audience: getAudiencePersonalizedReflection(inputs.audience),
      // Craft Intensity
      flow: getPersonalizedReflection('flow', inputs.flow, 60),
      evolution: getPersonalizedReflection('evolution', inputs.evolution, 10),
      risk: getPersonalizedReflection('risk', inputs.risk, 10),
      admin: getPersonalizedReflection('admin', inputs.admin, 60),
      distraction: getPersonalizedReflection('distraction', inputs.distraction, 60),
      stagnation: getPersonalizedReflection('stagnation', inputs.stagnation, 10)
    };

    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>FruitHedge Creative Journal</title>
        <style>
          @page { margin: 1in; }
          body {
            font-family: 'IBM Plex Sans', -apple-system, sans-serif;
            padding: 0;
            max-width: 100%;
            margin: 0 auto;
            line-height: 1.6;
            color: #1a1a1a;
          }
          h1 {
            color: #2d5016;
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 28px;
            margin-bottom: 5px;
          }
          h2 {
            color: #333;
            margin-top: 30px;
            font-size: 18px;
            border-bottom: 2px solid #eee;
            padding-bottom: 8px;
          }
          h3 {
            font-size: 14px;
            color: #444;
            margin: 20px 0 10px 0;
          }
          .header-meta {
            color: #666;
            font-size: 12px;
            margin-bottom: 30px;
          }
          .scores-header {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin: 30px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
          }
          .score {
            flex: 1;
            text-align: center;
          }
          .score-value {
            font-size: 36px;
            font-weight: bold;
            font-family: 'JetBrains Mono', monospace;
          }
          .score-label {
            color: #666;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .alpha {
            text-align: center;
            font-size: 72px;
            font-weight: bold;
            margin: 20px 0;
            background: linear-gradient(135deg, #2d5016, #c45a2c, #8b2d5c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .alpha-label {
            text-align: center;
            color: #666;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 30px;
          }
          .section {
            margin: 25px 0;
            padding: 20px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background: #fff;
          }
          .section--autonomy { border-left: 4px solid #2d5016; }
          .section--resonance { border-left: 4px solid #c45a2c; }
          .section--intensity { border-left: 4px solid #8b2d5c; }
          .reflection-item {
            margin: 15px 0;
            padding: 15px;
            background: #fafafa;
            border-radius: 6px;
          }
          .reflection-label {
            font-weight: 600;
            font-size: 13px;
            color: #333;
            margin-bottom: 5px;
          }
          .reflection-value {
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            color: #666;
            margin-bottom: 8px;
          }
          .reflection-question {
            font-style: italic;
            color: #444;
            font-size: 14px;
            line-height: 1.5;
          }
          .journal-space {
            margin-top: 15px;
            padding: 20px;
            border: 1px dashed #ccc;
            border-radius: 4px;
            min-height: 80px;
            background: #fff;
          }
          .journal-space::before {
            content: 'Your thoughts:';
            font-size: 11px;
            color: #999;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .archetype-section {
            text-align: center;
            padding: 30px;
            background: linear-gradient(135deg, #f8f9fa, #fff);
            border-radius: 8px;
            margin: 30px 0;
          }
          .archetype-name {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 24px;
            color: #1a1a1a;
            margin-bottom: 5px;
          }
          .archetype-subtitle {
            color: #666;
            font-style: italic;
            margin-bottom: 15px;
          }
          .archetype-profile {
            max-width: 500px;
            margin: 0 auto;
            color: #444;
          }
          .footer {
            margin-top: 40px;
            text-align: center;
            color: #999;
            font-size: 11px;
            padding-top: 20px;
            border-top: 1px solid #eee;
          }
          @media print {
            .section { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <h1>FruitHedge Creative Journal</h1>
        <div class="header-meta">Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</div>

        <div class="alpha">${state.scores.alpha.toFixed(1)}</div>
        <div class="alpha-label">Creative Alpha Index</div>

        <div class="scores-header">
          <div class="score">
            <div class="score-value" style="color: #2d5016;">${state.scores.aq.toFixed(1)}</div>
            <div class="score-label">Autonomy</div>
          </div>
          <div class="score">
            <div class="score-value" style="color: #c45a2c;">${state.scores.ri.toFixed(1)}</div>
            <div class="score-label">Resonance</div>
          </div>
          <div class="score">
            <div class="score-value" style="color: #8b2d5c;">${state.scores.ci.toFixed(1)}</div>
            <div class="score-label">Intensity</div>
          </div>
        </div>

        <div class="archetype-section">
          <div class="archetype-name">${state.archetype ? state.archetype.name : 'Your Archetype'}</div>
          <div class="archetype-subtitle">${state.archetype ? state.archetype.subtitle : ''}</div>
          <p class="archetype-profile">${state.archetype ? state.archetype.profile : 'Complete all calculations to see your creative archetype.'}</p>
        </div>

        <h2>Law I: Autonomy Quotient — Reflection Questions</h2>
        <div class="section section--autonomy">
          <div class="reflection-item">
            <div class="reflection-label">Energy Surplus</div>
            <div class="reflection-value">Score: ${inputs.energy}/10</div>
            <div class="reflection-question">${reflections.energy}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Mental Space</div>
            <div class="reflection-value">Score: ${inputs.space}/10</div>
            <div class="reflection-question">${reflections.space}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Optionality</div>
            <div class="reflection-value">Score: ${inputs.optionality}/10</div>
            <div class="reflection-question">${reflections.optionality}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Constraint Load</div>
            <div class="reflection-value">Score: ${inputs.constraint}/10</div>
            <div class="reflection-question">${reflections.constraint}</div>
            <div class="journal-space"></div>
          </div>
        </div>

        <h2>Law II: Resonance Index — Reflection Questions</h2>
        <div class="section section--resonance">
          <div class="reflection-item">
            <div class="reflection-label">Emotional Impact</div>
            <div class="reflection-value">Score: ${inputs.impact}/10</div>
            <div class="reflection-question">${reflections.impact}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Identity Fit</div>
            <div class="reflection-value">Score: ${inputs.identity}/10</div>
            <div class="reflection-question">${reflections.identity}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Artistic Boldness</div>
            <div class="reflection-value">Score: ${inputs.boldness}/10</div>
            <div class="reflection-question">${reflections.boldness}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Audience Size</div>
            <div class="reflection-value">Audience: ${formatAudience(inputs.audience)}</div>
            <div class="reflection-question">${reflections.audience}</div>
            <div class="journal-space"></div>
          </div>
        </div>

        <h2>Law III: Craft Intensity — Reflection Questions</h2>
        <div class="section section--intensity">
          <h3>Creative Fuel</h3>
          <div class="reflection-item">
            <div class="reflection-label">Flow Hours (weekly)</div>
            <div class="reflection-value">${inputs.flow} hours/week</div>
            <div class="reflection-question">${reflections.flow}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Skill Evolution</div>
            <div class="reflection-value">Score: ${inputs.evolution}/10</div>
            <div class="reflection-question">${reflections.evolution}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Creative Risk</div>
            <div class="reflection-value">Score: ${inputs.risk}/10</div>
            <div class="reflection-question">${reflections.risk}</div>
            <div class="journal-space"></div>
          </div>

          <h3>Creative Drag</h3>
          <div class="reflection-item">
            <div class="reflection-label">Admin Load (weekly)</div>
            <div class="reflection-value">${inputs.admin} hours/week</div>
            <div class="reflection-question">${reflections.admin}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Distraction (weekly)</div>
            <div class="reflection-value">${inputs.distraction} hours/week</div>
            <div class="reflection-question">${reflections.distraction}</div>
            <div class="journal-space"></div>
          </div>
          <div class="reflection-item">
            <div class="reflection-label">Stagnation Level</div>
            <div class="reflection-value">Score: ${inputs.stagnation}/10</div>
            <div class="reflection-question">${reflections.stagnation}</div>
            <div class="journal-space"></div>
          </div>
        </div>

        <h2>Key Insight</h2>
        <div class="section">
          <p style="font-size: 16px; line-height: 1.8;">${state.archetype ? state.archetype.insight : 'Complete all calculations to receive your personalized insight.'}</p>
          <div class="journal-space" style="min-height: 120px;"></div>
        </div>

        ${state.recommendation ? `
        <h2>Recommended: ${state.recommendation.title}</h2>
        <div class="section">
          <p><strong>${state.recommendation.creator}</strong> • ${state.recommendation.type} • ${state.recommendation.duration}</p>
          <p>${state.recommendation.why}</p>
        </div>
        ` : ''}

        ${state.protocol ? `
        <h2>FruitHedge Protocol: ${state.protocol.name}</h2>
        <div class="section">
          <p><strong>${state.protocol.prescription}</strong></p>
          <p>${state.protocol.why}</p>
        </div>
        ` : ''}

        <div class="footer">
          <p>FruitHedge Research Team • v3.0 • fruithedge.com</p>
          <p>This journal is for personal reflection. Your answers help you understand your creative patterns.</p>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  }

  function copyLink() {
    if (state.scores.alpha === 0) {
      alert('Please calculate your scores first.');
      return;
    }

    const params = new URLSearchParams();
    Object.keys(state.inputs).forEach(key => {
      params.set(key, state.inputs[key]);
    });

    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Link copied to clipboard!');
    });
  }

  function shareTwitter() {
    if (state.scores.alpha === 0) {
      alert('Please calculate your scores first.');
      return;
    }

    const archetypeName = state.archetype ? state.archetype.name : 'Creative';
    const text = encodeURIComponent(
      `My Creative Alpha: ${state.scores.alpha.toFixed(1)} — I'm ${archetypeName}. Measured with FruitHedge.`
    );
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank');
  }

  // ============================================================
  // MODAL
  // ============================================================

  let modalCallback = null;

  function showModal(title, message, onConfirm) {
    if (!elements.modalOverlay) {
      // Fallback to confirm dialog if modal doesn't exist
      if (confirm(message)) {
        onConfirm();
      }
      return;
    }
    if (elements.modalTitle) elements.modalTitle.textContent = title;
    if (elements.modalMessage) elements.modalMessage.textContent = message;
    modalCallback = onConfirm;
    elements.modalOverlay.classList.add('active');
  }

  function hideModal() {
    if (elements.modalOverlay) {
      elements.modalOverlay.classList.remove('active');
    }
    modalCallback = null;
  }

  // ============================================================
  // URL PARAMS
  // ============================================================

  function loadFromURL() {
    const params = new URLSearchParams(window.location.search);

    if (params.has('energy')) {
      Object.keys(state.inputs).forEach(key => {
        if (params.has(key)) {
          const value = parseFloat(params.get(key));
          if (!isNaN(value)) {
            state.inputs[key] = value;

            if (elements.sliders[key]) {
              if (key === 'audience') {
                elements.sliders[key].value = audienceToSlider(value);
                elements.values[key].textContent = formatAudience(value);
              } else {
                elements.sliders[key].value = value;
                elements.values[key].textContent = value;
              }
            }
          }
        }
      });

      // Auto-calculate if we loaded from URL
      calculateAllScores();
    }
  }

  // ============================================================
  // MAIN CALCULATION
  // ============================================================

  /**
   * Calculate all scores and show full results
   */
  function calculateAllScores() {
    const inputs = state.inputs;

    // Calculate all three laws
    state.scores.aq = calculateAQ(inputs.energy, inputs.space, inputs.optionality, inputs.constraint);
    state.scores.ri = calculateRi(inputs.impact, inputs.identity, inputs.boldness, inputs.audience);
    state.scores.ci = calculateCi(inputs.flow, inputs.evolution, inputs.risk, inputs.admin, inputs.distraction, inputs.stagnation);
    state.scores.alpha = calculateAlpha(state.scores.aq, state.scores.ri, state.scores.ci);

    // Mark all as calculated
    state.calculated.aq = true;
    state.calculated.ri = true;
    state.calculated.ci = true;

    // Update law card headers
    if (elements.lawScores.aq) elements.lawScores.aq.textContent = state.scores.aq.toFixed(1);
    if (elements.lawScores.ri) elements.lawScores.ri.textContent = state.scores.ri.toFixed(1);
    if (elements.lawScores.ci) elements.lawScores.ci.textContent = state.scores.ci.toFixed(1);

    // Show all inline results
    if (elements.aqResult) {
      elements.aqResult.classList.remove('hidden');
      elements.aqResult.classList.add('show');
    }
    if (elements.riResult) {
      elements.riResult.classList.remove('hidden');
      elements.riResult.classList.add('show');
    }
    if (elements.ciResult) {
      elements.ciResult.classList.remove('hidden');
      elements.ciResult.classList.add('show');
    }

    // Update inline result values
    if (elements.aqResultValue) elements.aqResultValue.textContent = state.scores.aq.toFixed(1);
    if (elements.riResultValue) elements.riResultValue.textContent = state.scores.ri.toFixed(1);
    if (elements.ciResultValue) elements.ciResultValue.textContent = state.scores.ci.toFixed(1);

    // Update inline result statuses
    const aqStatus = getAQStatus(state.scores.aq);
    const riStatus = getRiStatus(state.scores.ri);
    const ciStatus = getCiStatus(state.scores.ci);

    if (elements.aqResultStatus) {
      elements.aqResultStatus.textContent = aqStatus.label;
      elements.aqResultStatus.className = 'result-status';
    }
    if (elements.aqResultExplain) elements.aqResultExplain.textContent = aqStatus.explain;

    if (elements.riResultStatus) {
      elements.riResultStatus.textContent = riStatus.label;
      elements.riResultStatus.className = 'result-status';
    }
    if (elements.riResultExplain) elements.riResultExplain.textContent = riStatus.explain;

    if (elements.ciResultStatus) {
      elements.ciResultStatus.textContent = ciStatus.label;
      elements.ciResultStatus.className = 'result-status';
    }
    if (elements.ciResultExplain) elements.ciResultExplain.textContent = ciStatus.explain;

    // Update bars
    if (elements.aqBar) elements.aqBar.style.width = `${state.scores.aq * 10}%`;
    if (elements.riBar) elements.riBar.style.width = `${state.scores.ri * 10}%`;
    if (elements.ciBar) elements.ciBar.style.width = `${state.scores.ci * 10}%`;

    // Match archetype, recommendation, protocol
    state.archetype = matchArchetype(state.scores);
    const recs = matchRecommendations(state.scores, 4);
    state.recommendation = recs[0];
    state.protocol = matchProtocol(state.scores);

    // Update settings
    state.settings.lastCalculated = new Date().toISOString();
    saveSettings();

    // Show results section (if exists)
    if (elements.resultsSection) {
      elements.resultsSection.classList.remove('hidden');
    }

    // Update composite display
    if (elements.compositeNum) {
      animateValue(elements.compositeNum, 0, state.scores.alpha, 1000);
    }

    // Update composite status
    const alphaStatus = getAlphaStatus(state.scores.alpha);
    if (elements.compositeStatus) {
      elements.compositeStatus.textContent = alphaStatus.label + ' — ' + alphaStatus.explain;
    }

    // Show archetype card
    showArchetypeCard();

    // Show recommendations
    showRecommendations();
  }

  // ============================================================
  // EVENT LISTENERS
  // ============================================================

  function initEventListeners() {
    // Theme toggle
    if (elements.themeToggle) {
      elements.themeToggle.addEventListener('click', toggleTheme);
    }

    // Sliders - update value display on input
    Object.keys(elements.sliders).forEach(key => {
      const slider = elements.sliders[key];
      if (!slider) return;

      slider.addEventListener('input', () => {
        let value;

        if (key === 'audience') {
          value = sliderToAudience(parseInt(slider.value));
          elements.values[key].textContent = formatAudience(value);
          state.inputs[key] = value;
        } else {
          value = parseInt(slider.value);
          elements.values[key].textContent = value;
          state.inputs[key] = value;
        }
      });
    });

    // Per-law calculate buttons
    if (elements.calculateAqBtn) {
      elements.calculateAqBtn.addEventListener('click', calculateAndShowAQ);
    }
    if (elements.calculateRiBtn) {
      elements.calculateRiBtn.addEventListener('click', calculateAndShowRi);
    }
    if (elements.calculateCiBtn) {
      elements.calculateCiBtn.addEventListener('click', calculateAndShowCi);
    }

    // History actions
    if (elements.saveScoresBtn) {
      elements.saveScoresBtn.addEventListener('click', saveCurrentScores);
    }
    if (elements.exportHistoryBtn) {
      elements.exportHistoryBtn.addEventListener('click', exportHistory);
    }
    if (elements.clearHistoryBtn) {
      elements.clearHistoryBtn.addEventListener('click', clearHistory);
    }

    // Export actions
    if (elements.exportImageBtn) {
      elements.exportImageBtn.addEventListener('click', generateImage);
    }
    if (elements.exportPdfBtn) {
      elements.exportPdfBtn.addEventListener('click', generatePDFJournal);
    }
    if (elements.copyLinkBtn) {
      elements.copyLinkBtn.addEventListener('click', copyLink);
    }
    if (elements.shareTwitterBtn) {
      elements.shareTwitterBtn.addEventListener('click', shareTwitter);
    }

    // Modal
    if (elements.modalClose) {
      elements.modalClose.addEventListener('click', hideModal);
    }
    if (elements.modalCancel) {
      elements.modalCancel.addEventListener('click', hideModal);
    }
    if (elements.modalConfirm) {
      elements.modalConfirm.addEventListener('click', () => {
        if (modalCallback) modalCallback();
      });
    }
    if (elements.modalOverlay) {
      elements.modalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.modalOverlay) hideModal();
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.modalOverlay && elements.modalOverlay.classList.contains('active')) {
        hideModal();
      }
    });
  }

  // ============================================================
  // INITIALIZATION
  // ============================================================

  function init() {
    // Load saved data
    loadFromStorage();

    // Apply theme
    setTheme(state.settings.theme);

    // Initialize event listeners
    initEventListeners();

    // Update history display
    updateHistoryDisplay();

    // Check for URL params
    loadFromURL();
  }

  // ============================================================
  // PUBLIC API (for inline onclick handlers)
  // ============================================================

  window.FruitHedge = {
    viewEntry,
    deleteEntry
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
