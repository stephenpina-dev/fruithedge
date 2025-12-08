// ============================================================
// FRUITHEDGE v3.0 - Application Logic
// Single-page scroll, per-law calculations, inline results
// ============================================================

(function() {
  'use strict';

  console.log('[FruitHedge] IIFE starting...');

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
    playbooks: [],
    streak: {
      current_streak: 0,
      longest_streak: 0,
      last_checkin_date: null,
      first_checkin_date: null,
      total_checkins: 0
    },
    badges: {
      first: false,      // First Check-in
      fire: false,       // On Fire (7 day streak)
      consistent: false, // Consistent (30 day streak)
      century: false,    // Century (100 check-ins)
      comeback: false    // Comeback (returned after 7+ day gap)
    },
    settings: {
      theme: 'dark',
      lastCalculated: null
    },
    records: {
      best: {
        aq: { value: null, date: null },
        ri: { value: null, date: null },
        ci: { value: null, date: null }
      },
      worst: {
        aq: { value: null, date: null },
        ri: { value: null, date: null },
        ci: { value: null, date: null }
      }
    },
    lastAutoSave: {
      timestamp: null,
      scores: null
    }
  };

  const PLAYBOOK_MAX_COUNT = 20;
  const AUTO_SAVE_COOLDOWN_MS = 60000; // 1 minute cooldown

  // Ensure no stale playbook reference from previous sessions
  window._currentViewedPlaybook = null;

  // ============================================================
  // iOS DETECTION
  // ============================================================

  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  // ============================================================
  // TOAST NOTIFICATIONS
  // ============================================================

  function showToast(message) {
    console.log('[FruitHedge] showToast called with:', message);
    const container = document.getElementById('toast-container');
    if (!container) {
      console.error('[FruitHedge] Toast container not found!');
      return;
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    console.log('[FruitHedge] Toast added to DOM');

    // Remove after animation completes (3s)
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3000);
  }

  // ============================================================
  // SAVE CONFIRMATION MODAL
  // ============================================================

  // Store pending save data when user needs to confirm replacement
  let pendingSaveData = null;

  function getTodayDateString() {
    const today = new Date();
    return today.toISOString().split('T')[0]; // YYYY-MM-DD
  }

  function findTodayPlaybook() {
    const todayStr = getTodayDateString();
    return state.playbooks.find(pb => {
      const pbDate = new Date(pb.date).toISOString().split('T')[0];
      return pbDate === todayStr;
    });
  }

  function showSaveConfirmModal() {
    const overlay = elements.saveConfirmOverlay;
    if (overlay) {
      overlay.classList.add('active');
      console.log('[FruitHedge] Save confirm modal shown');
    }
  }

  function hideSaveConfirmModal() {
    const overlay = elements.saveConfirmOverlay;
    if (overlay) {
      overlay.classList.remove('active');
      console.log('[FruitHedge] Save confirm modal hidden');
    }
    pendingSaveData = null;
  }

  function replaceTodayPlaybook() {
    if (!pendingSaveData) return;

    const todayPlaybook = findTodayPlaybook();

    if (todayPlaybook) {
      // Remove existing today's playbook
      const index = state.playbooks.findIndex(pb => pb.id === todayPlaybook.id);
      if (index !== -1) {
        state.playbooks.splice(index, 1);
      }

      // Also remove from history
      const todayStr = getTodayDateString();
      const historyIndex = state.history.findIndex(h => {
        const hDate = new Date(h.date).toISOString().split('T')[0];
        return hDate === todayStr;
      });
      if (historyIndex !== -1) {
        state.history.splice(historyIndex, 1);
      }
    }

    // Now save the new entry
    performAutoSave(pendingSaveData);
    hideSaveConfirmModal();
  }

  // ============================================================
  // AUTO-SAVE & RECORDS TRACKING
  // ============================================================

  function scoresAreEqual(scores1, scores2) {
    if (!scores1 || !scores2) return false;
    return scores1.aq === scores2.aq &&
           scores1.ri === scores2.ri &&
           scores1.ci === scores2.ci &&
           scores1.alpha === scores2.alpha;
  }

  function shouldAutoSave(scores) {
    const now = Date.now();
    const { timestamp, scores: lastScores } = state.lastAutoSave;

    // Don't save if scores are zero
    if (scores.alpha === 0) return false;

    // Don't save if identical scores
    if (scoresAreEqual(scores, lastScores)) return false;

    // Don't save if within cooldown period
    if (timestamp && (now - timestamp) < AUTO_SAVE_COOLDOWN_MS) return false;

    return true;
  }

  function autoSaveScores() {
    const scores = { ...state.scores };

    if (!shouldAutoSave(scores)) return;

    console.log('[FruitHedge] autoSaveScores: Starting auto-save...');

    // Prepare save data
    const inputs = state.inputs;
    const reflections = {
      energy: getPersonalizedReflection('energy', inputs.energy, 10),
      space: getPersonalizedReflection('space', inputs.space, 10),
      optionality: getPersonalizedReflection('optionality', inputs.optionality, 10),
      constraint: getPersonalizedReflection('constraint', inputs.constraint, 10),
      impact: getPersonalizedReflection('impact', inputs.impact, 10),
      identity: getPersonalizedReflection('identity', inputs.identity, 10),
      boldness: getPersonalizedReflection('boldness', inputs.boldness, 10),
      audience: getAudiencePersonalizedReflection(inputs.audience),
      flow: getPersonalizedReflection('flow', inputs.flow, 60),
      evolution: getPersonalizedReflection('evolution', inputs.evolution, 10),
      risk: getPersonalizedReflection('risk', inputs.risk, 10),
      admin: getPersonalizedReflection('admin', inputs.admin, 60),
      distraction: getPersonalizedReflection('distraction', inputs.distraction, 60),
      stagnation: getPersonalizedReflection('stagnation', inputs.stagnation, 10)
    };

    const saveData = {
      scores: scores,
      inputs: { ...inputs },
      reflections: reflections,
      archetype: state.archetype
    };

    // Always save - performAutoSave handles replacing today's entry
    performAutoSave(saveData);
  }

  function performAutoSave(saveData) {
    const { scores, inputs, reflections, archetype } = saveData;
    const todayStr = getTodayDateString();

    // Remove any existing entry for today (enforce one entry per day)
    state.playbooks = state.playbooks.filter(pb => {
      const pbDate = new Date(pb.date).toISOString().split('T')[0];
      return pbDate !== todayStr;
    });

    // Also remove today from history
    state.history = state.history.filter(h => {
      const hDate = new Date(h.date).toISOString().split('T')[0];
      return hDate !== todayStr;
    });

    // Create playbook entry
    const playbook = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      date: new Date().toISOString(),
      scores: {
        aq: scores.aq,
        ri: scores.ri,
        ci: scores.ci,
        alpha: scores.alpha
      },
      inputs: { ...state.inputs },
      archetype: archetype ? {
        name: archetype.name,
        subtitle: archetype.subtitle,
        profile: archetype.profile,
        insight: archetype.insight
      } : null,
      reflections: reflections
    };

    // Add to playbooks array
    state.playbooks.unshift(playbook);
    console.log('[FruitHedge] performAutoSave: Added/replaced playbook for today', playbook.id, 'Total:', state.playbooks.length);

    // Enforce max limit
    if (state.playbooks.length > PLAYBOOK_MAX_COUNT) {
      state.playbooks = state.playbooks.slice(0, PLAYBOOK_MAX_COUNT);
    }

    // Save to localStorage (fruithedge_journals)
    savePlaybooksToStorage();
    console.log('[FruitHedge] performAutoSave: Saved to localStorage (fruithedge_journals)');

    // Also save to history for dashboard charts
    const historyEntry = {
      id: generateId(),
      date: new Date().toISOString(),
      scores: scores,
      inputs: inputs,
      archetype: archetype ? archetype.id : null
    };
    state.history.unshift(historyEntry);
    saveHistory();
    console.log('[FruitHedge] performAutoSave: Also saved to history for dashboard');

    // Update records for best/worst tracking
    updateRecords(scores);

    // Update streak and badges
    updateStreakOnCheckin();

    // Update displays
    updatePlaybooksDisplay();
    updateHabitEngineDisplay();
    updateHistoryDisplay();
    updateDashboard();

    // Update lastAutoSave tracking
    state.lastAutoSave.timestamp = Date.now();
    state.lastAutoSave.scores = scores;

    console.log('[FruitHedge] performAutoSave: About to show toast');
    showToast('Saved to Playbooks ✓');
    console.log('[FruitHedge] performAutoSave: Complete');
  }

  function loadRecords() {
    try {
      const recordsData = localStorage.getItem('fruithedge_records');
      if (recordsData) {
        state.records = JSON.parse(recordsData);
      }
    } catch (e) {
      console.error('Error loading records:', e);
    }
  }

  function saveRecords() {
    try {
      localStorage.setItem('fruithedge_records', JSON.stringify(state.records));
    } catch (e) {
      console.error('Error saving records:', e);
    }
  }

  function updateRecords(scores) {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    const laws = ['aq', 'ri', 'ci'];

    laws.forEach(law => {
      const value = scores[law];

      // Update best
      if (state.records.best[law].value === null || value > state.records.best[law].value) {
        state.records.best[law] = { value, date: today };
      }

      // Update worst (only if we have a recorded best - first time counts as both)
      if (state.records.worst[law].value === null || value < state.records.worst[law].value) {
        state.records.worst[law] = { value, date: today };
      }
    });

    saveRecords();
  }

  // ============================================================
  // PERSONALIZED REFLECTION QUESTIONS (for PDF Journal)
  // ============================================================

  const personalizedReflections = {
    energy: {
      low: "You're running on empty. Not 'tired' but depleted. What specific thing drained you most this week? Name it. Now: what would it take to eliminate or reduce that by 50%?",
      mid: "You have enough energy to function, but not to thrive. Where is energy leaking? Identify one recurring drain you've been tolerating. What would you need to finally address it?",
      high: "Your energy is strong. This is rare so protect it. What conditions created this? Write them down. These are your non-negotiables."
    },
    space: {
      low: "Your mind is full. What thought keeps intruding? Name the thing you're avoiding thinking about clearly. Write it down. Just getting it out of your head creates space.",
      mid: "Some clarity, some noise. What reliably creates mental peace for you? When did you last do that? Schedule it this week. Not as a reward, but as a requirement.",
      high: "Clear head. This is leverage. What's the most important question you should be thinking about right now? Use this clarity before it gets cluttered again."
    },
    optionality: {
      low: "You feel trapped. But trapped by what exactly? Name the top constraint. Now ask: is this truly immovable, or have you just stopped looking for doors?",
      mid: "You have some options but aren't using them. What's one path available to you that you've been ignoring? Why? What would it take to explore it for just one week?",
      high: "Many paths are open. This is freedom but also potential paralysis. What are you NOT choosing by keeping all options open? Sometimes closing doors creates momentum."
    },
    constraint: {
      low: "Light obligations. This is rare and valuable. What would you do with your time if nothing changed? Don't waste this window. It won't last forever.",
      mid: "Moderate load. Some constraints are real, others are inherited habits. Name one obligation you've never questioned. Why does it still exist?",
      high: "Heavy constraints. Something has to give. If you could eliminate ONE obligation, consequences be damned, which would free up the most? What's actually stopping you?"
    },
    impact: {
      low: "Your work is being seen but not felt. When was the last time something you made gave someone chills, tears, or laughter? What was different about that piece? Do more of that.",
      mid: "Some work lands, some doesn't. Look at your last 5 pieces. Which one hit hardest? Why? What would happen if you only made work at that level?",
      high: "Your work moves people. The danger now is formula. Repeating what worked until it stops working. What's the version of your work that scares even you?"
    },
    identity: {
      low: "You're making work for 'everyone' which means no one feels like it's for THEM. Describe your ideal audience member in one sentence. Not demographics. Their secret frustration.",
      mid: "You have some sense of your audience. But could you describe them so specifically that they'd recognize themselves? Try: 'This is for people who ___ but secretly ___.'",
      high: "Your audience feels seen by you. They don't just like your work. They feel understood. What do you know about them that they haven't told anyone? That's your edge."
    },
    boldness: {
      low: "You're playing it safe. What would you make if you knew no one would judge you? Write it down. Now: what's actually stopping you from making that?",
      mid: "You take some risks, but there's something you're avoiding. What's the project you keep almost starting? The one that scares you? That's probably the one that matters.",
      high: "You're making bold moves. But bold isn't reckless. What's the risk you're most proud of taking? What made you brave enough? Remember that next time you hesitate."
    },
    audience: {
      small: "Small audience. This is intimate. You can know each person. Are you using that? What if you asked 5 of them what they actually need? Their answer might change everything.",
      medium: "Growing audience. You're in the danger zone. Too big to know everyone, too small for the work to spread itself. What would make your existing audience recruit for you?",
      large: "Mass audience. Do you actually know them anymore? When did you last have a real conversation with someone who follows you? Don't lose the connection that built this."
    },
    flow: {
      low: "Minimal flow time. What interrupts you most? Be specific. Is it notifications, people, your own distraction? You can't protect what you can't name.",
      mid: "Decent flow. Could you protect 2 more hours this week? What would you need to cancel, batch, or ignore? Those 2 hours might double your output.",
      high: "Deep immersion. You're doing the work. But are you also resting? Sustained intensity requires recovery. What does rest look like for you? Not just sleep, but restoration."
    },
    evolution: {
      low: "Your skills have stagnated. What's one capability that would change everything if you developed it over the next 90 days? Not a course. A practice. Daily reps.",
      mid: "You're growing. But where's your next edge? What's the skill that's just beyond your current reach? Stretch toward that. Comfort is the enemy of growth.",
      high: "Rapid evolution. Document what's working. You're learning faster than you realize. Write down the insights before they become invisible to you. Teach someone."
    },
    risk: {
      low: "Too safe. What experiment could you run this week where failure is okay? Not a bet the farm risk. Just something where you might look dumb. That's where growth lives.",
      mid: "Some experimentation. Push one boundary this week. What's the thing you've been 'thinking about trying'? Stop thinking. Run the experiment. Learn from the result.",
      high: "Bold moves. The risk now is all motion, no completion. What's one experiment you should STOP so you can finish something? Shipping beats starting."
    },
    admin: {
      low: "Lean operations. Your time goes to the craft. This is the goal. Protect it fiercely. What would it take to keep it this way as you scale?",
      mid: "Moderate admin. What single recurring task could you automate, batch, or delegate this week? Start there. Small wins compound.",
      high: "More admin than creating. This is a crisis. What would it cost in money or discomfort to hand off the three most draining tasks? Compare that to the cost of your time."
    },
    distraction: {
      low: "Focused. What boundaries protect this? Write them down. These are your rules. Enforce them even when you don't feel like it.",
      mid: "Some leakage. Check your screen time report. How much was intentional? Set one app limit this week. Not forever. Just to see what happens.",
      high: "Major distraction problem. Your phone is not neutral. It's an opponent. What would a week without your biggest time sink app look like? The resistance you feel is the answer."
    },
    stagnation: {
      low: "Shipping regularly. Momentum is real. But don't confuse motion with progress. Is what you're shipping actually building toward something?",
      mid: "Some paralysis. What's blocking the current project? Name the specific obstacle. Not 'I'm stuck' but 'I'm stuck because ___.' Clarity precedes action.",
      high: "Frozen. You've been avoiding something. Name the project. How long has it waited? What's the tiniest action you could take in the next 5 minutes? Do that. Then the next one."
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

    // 1. Action Plan section
    recsSection: document.getElementById('recs-section'),
    actionPlanContent: document.getElementById('action-plan-content'),

    // 2. Protocol section
    protocolSection: document.getElementById('protocol-section'),
    protocolContent: document.getElementById('protocol-content'),

    // Archetype
    archetypeName: document.getElementById('archetype-name'),
    archetypeSubtitle: document.getElementById('archetype-subtitle'),
    archetypeProfile: document.getElementById('archetype-profile'),
    archetypeInsight: document.getElementById('archetype-insight'),

    // Recommended Resources
    recommendedResources: document.getElementById('recommended-resources'),
    resourcesGrid: document.getElementById('resources-grid'),

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
    historyToggleBtn: document.getElementById('history-toggle-btn'),
    historyToggleText: document.querySelector('#history-toggle-btn .history-toggle-text'),
    historyContent: document.getElementById('history-content'),
    exportHistoryBtn: document.getElementById('export-history-btn'),
    clearHistoryBtn: document.getElementById('clear-history-btn'),
    historyTbody: document.getElementById('history-tbody'),
    historyEmpty: document.getElementById('history-empty'),

    // Export
    exportPdfBtn: document.getElementById('export-pdf-btn'),
    copyLinkBtn: document.getElementById('copy-link-btn'),
    shareTwitterBtn: document.getElementById('share-twitter-btn'),

    // Modal
    modalOverlay: document.getElementById('modal-overlay'),
    modalTitle: document.getElementById('modal-title'),
    modalMessage: document.getElementById('modal-message'),
    modalClose: document.getElementById('modal-close'),
    modalCancel: document.getElementById('modal-cancel'),
    modalConfirm: document.getElementById('modal-confirm'),

    // Playbooks
    playbooksSection: document.getElementById('playbooks-section'),
    playbooksCount: document.getElementById('playbooks-count-tab'),
    playbooksEmpty: document.getElementById('playbooks-empty-tab'),
    playbooksGrid: document.getElementById('playbooks-grid-tab'),
    playbookModalOverlay: document.getElementById('playbook-modal-overlay'),
    playbookModalTitle: document.getElementById('playbook-modal-title'),
    playbookModalContent: document.getElementById('playbook-modal-content'),
    playbookModalClose: document.getElementById('playbook-modal-close'),
    playbookModalSaveClose: document.getElementById('playbook-modal-save-close'),
    playbookModalPdf: document.getElementById('playbook-modal-pdf'),

    // Habit Engine
    returnBanner: document.getElementById('return-banner'),
    returnBannerText: document.getElementById('return-banner-text'),
    returnBannerClose: document.getElementById('return-banner-close'),
    streakDisplay: document.getElementById('streak-display'),
    streakFire: document.getElementById('streak-fire'),
    streakCount: document.getElementById('streak-count'),
    streakLongest: document.getElementById('streak-longest'),
    habitCheckins: document.getElementById('habit-checkins'),
    habitMemberSince: document.getElementById('habit-member-since'),
    habitBadgesCount: document.getElementById('habit-badges-count'),
    badgeFirst: document.getElementById('badge-first'),
    badgeFire: document.getElementById('badge-fire'),
    badgeConsistent: document.getElementById('badge-consistent'),
    badgeCentury: document.getElementById('badge-century'),
    badgeComeback: document.getElementById('badge-comeback'),

    // Info Modals (How It Works, About, Privacy)
    headerHowItWorks: document.getElementById('header-how-it-works'),
    headerAbout: document.getElementById('header-about'),
    headerPrivacy: document.getElementById('header-privacy'),
    howItWorksModal: document.getElementById('how-it-works-modal'),
    howItWorksClose: document.getElementById('how-it-works-close'),
    howItWorksGotIt: document.getElementById('how-it-works-got-it'),
    aboutModal: document.getElementById('about-modal'),
    aboutClose: document.getElementById('about-close'),

    // Privacy Modal
    privacyLink: document.getElementById('privacy-link'),
    privacyModal: document.getElementById('privacy-modal'),
    privacyClose: document.getElementById('privacy-close'),
    privacyGotIt: document.getElementById('privacy-got-it'),

    // Save Confirmation Modal
    saveConfirmOverlay: document.getElementById('save-confirm-overlay'),
    saveConfirmReplace: document.getElementById('save-confirm-replace'),
    saveConfirmCancel: document.getElementById('save-confirm-cancel')
  };

  // ============================================================
  // CALCULATION FUNCTIONS (Calibrated v2)
  // ============================================================

  /**
   * Calculate Autonomy Quotient
   * Geometric mean of positives with gentle constraint penalty
   *
   * Expected results:
   * - E=10, S=10, O=10, C=1 → AQ = 10.0
   * - E=10, S=10, O=10, C=10 → AQ = ~8.7 (15% penalty)
   * - E=5, S=5, O=5, C=5 → AQ = ~4.7
   * - E=8, S=8, O=8, C=5 → AQ = ~7.5
   * - E=1, S=1, O=1, C=10 → AQ = 1 (floored)
   */
  function calculateAQ(e, s, o, c) {
    // Geometric mean of positives (1-10 scale)
    const positiveGeo = Math.pow(e * s * o, 1/3);
    // Constraint penalty: gentle, only significant at high constraint
    // c=1 → 1.0 (no penalty), c=5 → 1.068 (6.8%), c=10 → 1.153 (15.3%)
    const constraintFactor = 1 + (c - 1) * 0.017;
    const aq = positiveGeo / constraintFactor;
    return Math.round(Math.min(10, Math.max(1, aq)) * 10) / 10;
  }

  /**
   * Calculate Resonance Index
   * Formula: Ri = ∛(I × Id × B) / [1 + log₁₀(A/1000) × 0.02]
   *
   * Expected results:
   * - I=10, Id=10, B=10, A=1K → Ri = 10.0 (no dilution)
   * - I=10, Id=10, B=10, A=10M → Ri = 9.3 (8% dilution)
   * - I=5, Id=5, B=5, A=1K → Ri = 5.0
   * - I=5, Id=5, B=5, A=10M → Ri = 4.6
   * - I=3, Id=3, B=3, A=10M → Ri = 2.8
   * - I=1, Id=1, B=1, A=any → Ri = 1 (floored)
   */
  function calculateRi(i, id, b, audienceValue) {
    // Geometric mean of depth factors (1-10 scale)
    const geoMean = Math.pow(i * id * b, 1/3);

    // Audience dilution: 2% per order of magnitude above 1K
    // 1K→1.0, 10K→1.02, 100K→1.04, 1M→1.06, 10M→1.08
    const logAudience = Math.log10(Math.max(1000, audienceValue) / 1000);
    const dilution = 1 + logAudience * 0.02;

    const ri = geoMean / dilution;
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
        explain: 'Full creative freedom. You have the rare gift of space, energy, and choice. Protect this state fiercely. It is the foundation of great work.',
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
      explain: 'Creative emergency. Obligations are crushing your capacity. Immediate intervention required: cancel non-essentials, protect your energy.',
      class: 'critical'
    };
  }

  /**
   * Get Ri status with emoji and explanation
   */
  function getRiStatus(score) {
    if (score >= 8) {
      return {
        label: '★ RESONANCE ACHIEVED',
        explain: 'Deep, lasting impact. Your work creates lifelong fans who would notice if you disappeared. This is real art: sustainable and meaningful.',
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
      explain: 'High dilution detected. Your content may be disposable, consumed and forgotten. Fundamental reset needed: create for 1 person, not 1 million.',
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
        explain: 'All three forces aligned. Your creative portfolio is generating alpha. Protect the conditions that made this possible. Your personalized journal captures the reflection questions that reveal what\'s working. Use it to document and replicate this state.'
      };
    }
    if (score >= 6) {
      return {
        label: 'POSITIVE MOMENTUM',
        explain: 'Strong position. You\'re outperforming. Now identify your weakest law and rebalance for maximum growth. Your personalized journal highlights the specific friction points to address next.'
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
        explain: 'Significant friction eating your returns. Audit ruthlessly. Something is bleeding your creative capital. Your personalized journal is designed to help you identify the leaks and plug them.'
      };
    }
    return {
      label: 'CREATIVE INSOLVENCY',
      explain: 'All systems underwater. Stop trading your creative capital. Recover your principal before making any new investments. We crafted a personalized journal for you. Use it to reflect and find your way back to baseline.'
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
  // AQ PATTERN DETECTION - Analyze autonomy slider patterns
  // ============================================================

  function detectAQPattern(inputs) {
    const { energy, space, optionality, constraint } = inputs;

    // Constraint is inverted (high = bad), so convert to "freedom" score
    const freedom = 11 - constraint;

    const factors = [
      { name: 'energy', label: 'Energy', value: energy },
      { name: 'space', label: 'Mental Space', value: space },
      { name: 'optionality', label: 'Optionality', value: optionality },
      { name: 'freedom', label: 'Freedom from Constraint', value: freedom }
    ];

    // Find bottleneck (lowest) and strength (highest)
    const sorted = [...factors].sort((a, b) => a.value - b.value);
    const bottleneck = sorted[0];
    const strength = sorted[sorted.length - 1];

    // Calculate average and spread
    const avg = factors.reduce((sum, f) => sum + f.value, 0) / factors.length;
    const spread = strength.value - bottleneck.value;

    // Determine shape
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

  // ============================================================
  // Ri PATTERN DETECTION - Analyze resonance slider patterns
  // ============================================================

  function detectRiPattern(inputs) {
    const { impact, identity, boldness, audience } = inputs;

    // Audience is logarithmic and inverts (larger = more dilution)
    // Convert to "intimacy" score: smaller audience = higher intimacy
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

    // Find bottleneck and strength
    const sorted = [...factors].sort((a, b) => a.value - b.value);
    const bottleneck = sorted[0];
    const strength = sorted[sorted.length - 1];

    // Calculate average and spread
    const avg = factors.reduce((sum, f) => sum + f.value, 0) / factors.length;
    const spread = strength.value - bottleneck.value;

    // Determine shape
    let shape;
    if (avg >= 7 && spread < 3) shape = 'soaring';
    else if (avg >= 7 && spread >= 3) shape = 'lopsided_high';
    else if (avg >= 4 && avg < 7 && spread < 3) shape = 'plateau';
    else if (avg >= 4 && avg < 7 && spread >= 3) shape = 'lopsided_mid';
    else if (avg < 4 && spread < 3) shape = 'crashed';
    else if (avg < 4 && spread >= 3) shape = 'lopsided_low';
    else shape = 'mixed';

    // Audience tier flags
    const audienceTier = {
      intimate: audience < 1000,           // < 1K - you know everyone
      growing: audience >= 1000 && audience < 10000,    // 1K-10K - building momentum
      established: audience >= 10000 && audience < 100000,  // 10K-100K - real traction
      large: audience >= 100000 && audience < 1000000,  // 100K-1M - scale challenges begin
      massive: audience >= 1000000 && audience < 10000000,  // 1M-10M - true scale
      superstar: audience >= 10000000      // 10M+ - global reach
    };

    // Keep legacy flags for backward compatibility
    const isLargeAudience = audience >= 100000;
    const isSmallAudience = audience < 1000;

    return {
      bottleneck,
      strength,
      average: avg,
      spread,
      shape,
      isLargeAudience,
      isSmallAudience,
      audienceTier,
      raw: { impact, identity, boldness, audience }
    };
  }

  // ============================================================
  // Ci PATTERN DETECTION - Analyze craft intensity slider patterns
  // ============================================================

  function detectCiPattern(inputs) {
    const { flow, evolution, risk, admin, distraction, stagnation } = inputs;

    // Normalize hour-based inputs to 1-10 scale
    const flowNorm = Math.min(10, flow / 6);
    const adminNorm = Math.min(10, admin / 6);
    const distractionNorm = Math.min(10, distraction / 6);

    // Fuel factors (high is good)
    const fuel = [
      { name: 'flow', label: 'Flow Time', value: flowNorm },
      { name: 'evolution', label: 'Skill Growth', value: evolution },
      { name: 'risk', label: 'Creative Risk', value: risk }
    ];

    // Drag factors (high is bad, so invert for comparison)
    const drag = [
      { name: 'admin', label: 'Admin Load', value: adminNorm, inverted: 10 - adminNorm },
      { name: 'distraction', label: 'Distraction', value: distractionNorm, inverted: 10 - distractionNorm },
      { name: 'stagnation', label: 'Stagnation', value: stagnation, inverted: 10 - stagnation }
    ];

    // Find fuel bottleneck and strength
    const fuelSorted = [...fuel].sort((a, b) => a.value - b.value);
    const fuelBottleneck = fuelSorted[0];
    const fuelStrength = fuelSorted[fuelSorted.length - 1];
    const fuelAvg = fuel.reduce((sum, f) => sum + f.value, 0) / fuel.length;

    // Find worst drag (highest raw value = most drag)
    const dragSorted = [...drag].sort((a, b) => b.value - a.value);
    const worstDrag = dragSorted[0];
    const dragAvg = drag.reduce((sum, d) => sum + d.value, 0) / drag.length;

    // Overall bottleneck: compare worst fuel to worst drag
    // If fuel bottleneck is lower than inverted drag, fuel is the problem
    // If drag is high (inverted is low), drag is the problem
    let overallBottleneck;
    if (fuelBottleneck.value < worstDrag.inverted) {
      overallBottleneck = { ...fuelBottleneck, type: 'fuel' };
    } else {
      overallBottleneck = { ...worstDrag, type: 'drag' };
    }

    // Calculate combined average (fuel contributes positively, drag negatively)
    const combinedAvg = (fuelAvg + (10 - dragAvg)) / 2;

    // Determine shape based on combined health
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

  // ============================================================
  // ALPHA PATTERN DETECTION - Analyze law balance patterns
  // ============================================================

  function detectAlphaPattern(scores, history = null) {
    const { aq, ri, ci, alpha } = scores;

    const laws = [
      { name: 'aq', label: 'Autonomy', value: aq },
      { name: 'ri', label: 'Resonance', value: ri },
      { name: 'ci', label: 'Craft Intensity', value: ci }
    ];

    // Find weakest and strongest law
    const sorted = [...laws].sort((a, b) => a.value - b.value);
    const weakest = sorted[0];
    const strongest = sorted[sorted.length - 1];

    // Calculate spread
    const spread = strongest.value - weakest.value;
    const avg = (aq + ri + ci) / 3;

    // Determine balance state
    let balance;
    if (aq >= 7 && ri >= 7 && ci >= 7) balance = 'all_aligned_high';
    else if (aq < 4 && ri < 4 && ci < 4) balance = 'all_aligned_low';
    else if (spread < 2) balance = 'balanced';
    else if (spread >= 4) balance = 'severely_imbalanced';
    else balance = 'imbalanced';

    // Detect trend if history exists
    let trend = null;
    if (history && typeof history.lastAlpha === 'number') {
      const diff = alpha - history.lastAlpha;
      if (diff > 0.5) trend = 'rising';
      else if (diff < -0.5) trend = 'falling';
      else trend = 'stable';
    }

    // Specific pattern flags
    const flags = {
      isCompounding: alpha >= 7 && spread < 2,
      isEmergency: alpha < 3,
      hasWeakLink: spread >= 3 && weakest.value < 5,
      isCoasting: avg >= 5 && avg < 7 && spread < 2
    };

    return {
      weakest,
      strongest,
      spread,
      average: avg,
      balance,
      trend,
      flags,
      raw: { aq, ri, ci, alpha }
    };
  }

  // ============================================================
  // TIME CONTEXT - For time-aware messaging
  // ============================================================

  function getTimeContext() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = Sunday

    // Time of day
    let timeOfDay;
    if (hour >= 5 && hour < 12) timeOfDay = 'morning';
    else if (hour >= 12 && hour < 17) timeOfDay = 'afternoon';
    else if (hour >= 17 && hour < 21) timeOfDay = 'evening';
    else timeOfDay = 'night';

    // Day context
    let dayContext;
    if (day === 0) dayContext = 'sunday';
    else if (day === 1) dayContext = 'monday';
    else if (day === 5) dayContext = 'friday';
    else if (day === 6) dayContext = 'saturday';
    else dayContext = 'midweek';

    // Week phase
    let weekPhase;
    if (day <= 1) weekPhase = 'start';
    else if (day <= 3) weekPhase = 'middle';
    else weekPhase = 'end';

    return { hour, day, timeOfDay, dayContext, weekPhase };
  }

  // ============================================================
  // PROPHETIC MESSAGE GENERATOR - Pattern-aware time-aware messaging
  // ============================================================

  function generatePropheticMessage(lawType, inputs, scores, history = null) {
    console.log('[Prophetic] Called for:', lawType);
    const time = getTimeContext();
    let pattern, messages;

    // Detect pattern and get message templates based on law type
    switch(lawType) {
      case 'aq':
        pattern = detectAQPattern(inputs);
        messages = aqPropheticMessages;
        break;
      case 'ri':
        pattern = detectRiPattern(inputs);
        messages = riPropheticMessages;

        // Check for scale achievement (depth at scale)
        // Use raw inputs for "depth" check since Ri score is diluted by intimacy penalty
        // Depth = impact, identity, boldness all >= 7 (strong resonance factors)
        // Scale = audience >= 1M
        const hasDepth = inputs.impact >= 7 && inputs.identity >= 7 && inputs.boldness >= 7;
        if (hasDepth && inputs.audience >= 1000000) {
          pattern.hasScaleAchievement = true;
        }
        break;
      case 'ci':
        pattern = detectCiPattern(inputs);
        messages = ciPropheticMessages;
        break;
      case 'alpha':
        pattern = scores; // Pass scores directly - conditions expect s.aq, s.ri, s.ci
        messages = alphaPropheticMessages;
        break;
      default:
        return null;
    }

    // Find first matching pattern
    let matchedPattern = null;
    for (const [key, p] of Object.entries(messages)) {
      if (p.condition(pattern)) {
        matchedPattern = { key, ...p };
        break;
      }
    }

    // Fallback if no pattern matched
    if (!matchedPattern) {
      // Use last pattern in each set as fallback
      const keys = Object.keys(messages);
      const fallbackKey = keys[keys.length - 1];
      matchedPattern = { key: fallbackKey, ...messages[fallbackKey] };
    }

    // Get time-appropriate message (supports day-aware and legacy formats)
    let message;
    if (matchedPattern.messages[time.dayContext]) {
      // New day-aware format
      message = matchedPattern.messages[time.dayContext][time.timeOfDay]
        || matchedPattern.messages[time.dayContext].morning
        || matchedPattern.messages.midweek[time.timeOfDay]
        || matchedPattern.messages.midweek.morning;
    } else {
      // Legacy format fallback
      message = matchedPattern.messages[time.timeOfDay] || matchedPattern.messages.morning;
    }

    return {
      label: matchedPattern.label,
      message: message,
      patternKey: matchedPattern.key,
      timeOfDay: time.timeOfDay,
      dayContext: time.dayContext
    };
  }

  // ============================================================
  // LABS TIPS - Science-backed micro-interventions
  // ============================================================

  function getLabsTips(sliderValues, scores, archetype) {
    console.log('[FruitHedge Labs] Slider values:', sliderValues);
    console.log('[FruitHedge Labs] Scores:', scores);
    console.log('[FruitHedge Labs] Archetype:', archetype);
    console.log('[FruitHedge Labs] Total tips available:', typeof labsTips !== 'undefined' ? labsTips.length : 'NOT FOUND');

    const triggers = [];

    // ============================================================
    // LOW RANGE TRIGGERS (struggling)
    // 1-10 scale sliders: energy, space, stagnation, boldness, identity, constraint, impact
    // ============================================================
    if (sliderValues.energy <= 4) {
      triggers.push("low_energy");
      console.log('[FruitHedge Labs] Triggered: low_energy (energy=' + sliderValues.energy + ' <= 4)');
    }
    if (sliderValues.space <= 4) {
      triggers.push("low_space");
      console.log('[FruitHedge Labs] Triggered: low_space (space=' + sliderValues.space + ' <= 4)');
    }
    if (sliderValues.flow <= 10) {
      triggers.push("low_flow");
      console.log('[FruitHedge Labs] Triggered: low_flow (flow=' + sliderValues.flow + ' <= 10 hours)');
    }
    if (sliderValues.boldness <= 4) {
      triggers.push("low_boldness");
      console.log('[FruitHedge Labs] Triggered: low_boldness (boldness=' + sliderValues.boldness + ' <= 4)');
    }
    if (sliderValues.identity <= 4) {
      triggers.push("low_identity");
      console.log('[FruitHedge Labs] Triggered: low_identity (identity=' + sliderValues.identity + ' <= 4)');
    }
    if (sliderValues.impact <= 4) {
      triggers.push("low_resonance");
      console.log('[FruitHedge Labs] Triggered: low_resonance (impact=' + sliderValues.impact + ' <= 4)');
    }

    // ============================================================
    // HIGH DRAG TRIGGERS (negative factors)
    // ============================================================
    if (sliderValues.distraction >= 30) {
      triggers.push("high_distraction");
      console.log('[FruitHedge Labs] Triggered: high_distraction (distraction=' + sliderValues.distraction + ' >= 30 hours)');
    }
    if (sliderValues.admin >= 30) {
      triggers.push("high_admin");
      console.log('[FruitHedge Labs] Triggered: high_admin (admin=' + sliderValues.admin + ' >= 30 hours)');
    }
    if (sliderValues.stagnation >= 6) {
      triggers.push("high_stagnation");
      console.log('[FruitHedge Labs] Triggered: high_stagnation (stagnation=' + sliderValues.stagnation + ' >= 6)');
    }
    if (sliderValues.constraint >= 7) {
      triggers.push("high_constraint");
      console.log('[FruitHedge Labs] Triggered: high_constraint (constraint=' + sliderValues.constraint + ' >= 7)');
    }

    // ============================================================
    // MID RANGE TRIGGERS (maintaining - scores 5-7)
    // ============================================================
    if (sliderValues.energy >= 5 && sliderValues.energy <= 7) {
      triggers.push("mid_energy");
      console.log('[FruitHedge Labs] Triggered: mid_energy (energy=' + sliderValues.energy + ' in 5-7)');
    }
    if (scores && scores.ri >= 5 && scores.ri <= 7) {
      triggers.push("mid_resonance");
      console.log('[FruitHedge Labs] Triggered: mid_resonance (Ri=' + scores.ri + ' in 5-7)');
    }
    if (scores && scores.ci >= 5 && scores.ci <= 7) {
      triggers.push("mid_intensity");
      console.log('[FruitHedge Labs] Triggered: mid_intensity (Ci=' + scores.ci + ' in 5-7)');
    }

    // ============================================================
    // HIGH PERFORMER TRIGGERS (optimizing - scores >= 7)
    // ============================================================
    if (scores && scores.alpha >= 7) {
      triggers.push("high_performer");
      console.log('[FruitHedge Labs] Triggered: high_performer (alpha=' + scores.alpha + ' >= 7)');
    }
    if (scores && scores.aq >= 7) {
      triggers.push("high_autonomy");
      console.log('[FruitHedge Labs] Triggered: high_autonomy (AQ=' + scores.aq + ' >= 7)');
    }
    if (scores && scores.ri >= 7) {
      triggers.push("high_resonance");
      console.log('[FruitHedge Labs] Triggered: high_resonance (Ri=' + scores.ri + ' >= 7)');
    }
    if (scores && scores.ci >= 7) {
      triggers.push("high_intensity");
      console.log('[FruitHedge Labs] Triggered: high_intensity (Ci=' + scores.ci + ' >= 7)');
    }

    // ============================================================
    // ARCHETYPE TRIGGERS
    // ============================================================
    if (archetype && archetype.name) {
      const archetypeTrigger = archetype.name.toLowerCase().replace(/\s+/g, '_');
      triggers.push(archetypeTrigger);
      console.log('[FruitHedge Labs] Triggered archetype:', archetypeTrigger);
    }

    // Always include "any" trigger for general science tips
    triggers.push("any");

    console.log('[FruitHedge Labs] All triggers:', triggers);

    // Find matching tips
    const matchedTips = labsTips.filter(tip => triggers.includes(tip.trigger));
    console.log('[FruitHedge Labs] Matched tips:', matchedTips.length, matchedTips.map(t => t.trigger));

    // If no matches, return from optimize or fruit categories
    if (matchedTips.length === 0) {
      console.log('[FruitHedge Labs] No matches, returning from optimize/fruit tips');
      const generalTips = labsTips.filter(t => t.category === "optimize" || t.category === "fruit");
      return generalTips.sort(() => 0.5 - Math.random()).slice(0, 2);
    }

    // Return up to 2 random matched tips
    const shuffled = matchedTips.sort(() => 0.5 - Math.random());
    const selectedTips = shuffled.slice(0, 2);
    console.log('[FruitHedge Labs] Selected 2 tips to display:', selectedTips.map(t => ({ id: t.id, trigger: t.trigger, tip: t.tip.substring(0, 50) + '...' })));
    return selectedTips;
  }

  function displayLabsTips() {
    console.log('[FruitHedge Labs Display] displayLabsTips() called');

    const labsTipsContainer = document.getElementById('labs-tips');
    console.log('[FruitHedge Labs Display] Container found:', !!labsTipsContainer);

    if (!labsTipsContainer) {
      console.log('[FruitHedge Labs Display] ERROR: No labs-tips container!');
      return;
    }

    // Get current slider values
    const sliderValues = {
      energy: parseInt(elements.sliders.energy?.value || 5),
      space: parseInt(elements.sliders.space?.value || 5),
      flow: parseInt(elements.sliders.flow?.value || 15),
      distraction: parseInt(elements.sliders.distraction?.value || 15),
      stagnation: parseInt(elements.sliders.stagnation?.value || 5),
      boldness: parseInt(elements.sliders.boldness?.value || 5),
      identity: parseInt(elements.sliders.identity?.value || 5),
      admin: parseInt(elements.sliders.admin?.value || 15),
      constraint: parseInt(elements.sliders.constraint?.value || 5),
      impact: parseInt(elements.sliders.impact?.value || 5)
    };

    // Pass scores and archetype for mid/high range triggers
    const tips = getLabsTips(sliderValues, state.scores, state.archetype);
    console.log('[FruitHedge Labs Display] Tips returned from getLabsTips:', tips);
    console.log('[FruitHedge Labs Display] Tips count:', tips ? tips.length : 'null/undefined');

    // Show the labs section
    const labsSection = document.getElementById('labs-section');
    console.log('[FruitHedge Labs Display] Labs section found:', !!labsSection);
    if (labsSection) {
      labsSection.classList.remove('hidden');
      console.log('[FruitHedge Labs Display] Labs section hidden class removed');
    }

    // Check if tips is valid
    if (!tips || !Array.isArray(tips) || tips.length === 0) {
      console.log('[FruitHedge Labs Display] ERROR: No valid tips to display!');
      labsTipsContainer.innerHTML = '<p class="labs-tip-text">No tips available</p>';
      return;
    }

    // Render tips
    const html = tips.map(tip => {
      console.log('[FruitHedge Labs Display] Rendering tip:', tip);
      if (!tip || !tip.tip) {
        console.log('[FruitHedge Labs Display] WARNING: Invalid tip object:', tip);
        return '';
      }
      return `
      <div class="labs-tip">
        <span class="labs-tip-icon">💡</span>
        <p class="labs-tip-text">"${tip.tip}"</p>
      </div>`;
    }).join('');

    console.log('[FruitHedge Labs Display] Generated HTML length:', html.length);
    labsTipsContainer.innerHTML = html;
    console.log('[FruitHedge Labs Display] Final container innerHTML:', labsTipsContainer.innerHTML.substring(0, 200) + '...');
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

    // Untapped potential: good alpha but weak area
    if (scores.alpha >= 5 && (scores.aq < 5 || scores.ri < 5 || scores.ci < 5)) {
      patterns.push('untapped');
    }

    // Comeback: decent autonomy/resonance but low craft
    if (scores.aq >= 5 && scores.ri >= 5 && scores.ci >= 2 && scores.ci < 5) {
      patterns.push('comeback');
    }

    // High constraint (inverse of high_aq for protocols)
    if (scores.aq < 4) patterns.push('high_constraint');

    // Low space (for protocols) - same trigger as low_aq
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

  function getSmartRecommendations(inputs, scores, count = 3) {
    // Step 1: Detect patterns from all three laws
    const aqPattern = detectAQPattern(inputs);
    const riPattern = detectRiPattern(inputs);
    const ciPattern = detectCiPattern(inputs);

    // Step 2: Identify the primary bottleneck (most relevant)
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
    // Check for scale achievement (depth at scale)
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

    // Step 3: Get recommended topics from bottlenecks
    const recommendedTopics = new Set();
    bottlenecks.forEach(b => {
      const topics = bottleneckTopicMap[b] || [];
      topics.forEach(t => recommendedTopics.add(t));
    });

    // If no specific bottlenecks, use general improvement topics
    if (recommendedTopics.size === 0) {
      recommendedTopics.add('mindset');
      recommendedTopics.add('craft');
    }

    // Step 4: Score each recommendation
    const scoredRecs = recommendations.map(rec => {
      let score = 0;

      // Topic match (highest weight)
      const topicMatches = rec.topics.filter(t => recommendedTopics.has(t)).length;
      score += topicMatches * 10;

      // Pattern match (existing logic, lower weight)
      const patterns = getPatterns(scores);
      const patternMatches = rec.patterns.filter(p => patterns.includes(p)).length;
      score += patternMatches * 5;

      // Variety bonus (prefer mixing types)
      // Will be applied in selection phase

      return { ...rec, matchScore: score, topicMatches, patternMatches };
    });

    // Step 5: Sort by score and select with variety
    scoredRecs.sort((a, b) => b.matchScore - a.matchScore);

    // Select top matches with type variety
    const selected = [];
    const usedTypes = new Set();

    for (const rec of scoredRecs) {
      if (selected.length >= count) break;

      // Prefer variety in first 3, allow duplicates after
      if (selected.length < 3 && usedTypes.has(rec.type)) {
        // Check if there's a close alternative of different type
        continue;
      }

      selected.push(rec);
      usedTypes.add(rec.type);
    }

    // If we didn't get enough due to variety constraint, fill with top scores
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
  // TIME/SEASON DETECTION
  // ============================================================

  function getCurrentTimeAndSeason() {
    const now = new Date();
    const hour = now.getHours();
    const month = now.getMonth(); // 0-11

    // Time of day (HARD BOUNDARIES)
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

    // Season (by month)
    let season;
    if (month >= 2 && month <= 4) {
      season = 'spring'; // Mar, Apr, May
    } else if (month >= 5 && month <= 7) {
      season = 'summer'; // Jun, Jul, Aug
    } else if (month >= 8 && month <= 10) {
      season = 'fall';   // Sep, Oct, Nov
    } else {
      season = 'winter'; // Dec, Jan, Feb
    }

    return { hour, timeOfDay, season, month };
  }

  // ============================================================
  // SMART PROTOCOL MATCHING (Time/Season Aware)
  // ============================================================

  function getSmartProtocol(scores, patterns = null) {
    const { timeOfDay, season } = getCurrentTimeAndSeason();

    // HARD GATE 1: Filter by valid time
    const timeFiltered = protocols.filter(p => {
      if (p.validTimes.includes('anytime')) return true;
      if (p.validTimes.includes(timeOfDay)) return true;
      // Check for daytime (morning + afternoon + evening)
      if (timeOfDay !== 'night' && p.validTimes.includes('daytime')) return true;
      return false;
    });

    // HARD GATE 2: Filter by valid season
    const seasonFiltered = timeFiltered.filter(p => {
      if (p.validSeasons.includes('all')) return true;
      if (p.validSeasons.includes(season)) return true;
      return false;
    });

    // If no protocols pass filters, return null with explanation
    if (seasonFiltered.length === 0) {
      console.warn('[Protocol] No protocols available for', timeOfDay, season);
      return null;
    }

    // Get patterns from scores if not provided
    if (!patterns && scores) {
      patterns = getPatterns(scores);
    }

    // Score remaining protocols by pattern match
    const scored = seasonFiltered.map(p => {
      let score = 0;
      if (patterns && p.patterns) {
        const matches = p.patterns.filter(pat => patterns.includes(pat)).length;
        score = matches;
      }
      return { ...p, matchScore: score };
    });

    // Sort by score
    scored.sort((a, b) => b.matchScore - a.matchScore);

    // If top matches are tied, pick randomly among them
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
  // PROTOCOL MATCHING (Legacy)
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

  function getResourceTypeIcon(type) {
    const icons = {
      book: '📚',
      video: '🎬',
      podcast: '🎧',
      ted: '🎤',
      documentary: '🎞️',
      article: '📝',
      course: '🎓'
    };
    return icons[type] || '📖';
  }

  /**
   * Display recommended resources based on score patterns
   */
  function showRecommendedResources() {
    if (!elements.recommendedResources || !elements.resourcesGrid) return;

    // Get smart recommendations with bottleneck-based topic matching
    const result = getSmartRecommendations(state.inputs, state.scores, 3);
    const selected = result.recommendations;

    if (selected.length === 0) {
      elements.recommendedResources.classList.add('hidden');
      return;
    }

    // Show the section
    elements.recommendedResources.classList.remove('hidden');

    // Build resource cards HTML
    elements.resourcesGrid.innerHTML = selected.map(rec => `
      <div class="resource-card">
        <div class="resource-header">
          <span class="resource-icon">${getResourceTypeIcon(rec.type)}</span>
          <span class="resource-title">${rec.title}</span>
        </div>
        <div class="resource-meta">${rec.creator} • ${rec.duration}</div>
        <p class="resource-why">${rec.why}</p>
        <a href="${rec.link}" target="_blank" rel="noopener noreferrer" class="resource-link">View Resource →</a>
      </div>
    `).join('');
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

    // Update status with prophetic message
    const aqInputs = {
      energy: state.inputs.energy,
      space: state.inputs.space,
      optionality: state.inputs.optionality,
      constraint: state.inputs.constraint
    };
    const aqProphetic = generatePropheticMessage('aq', aqInputs, state.scores, null);
    if (elements.aqResultStatus) {
      elements.aqResultStatus.textContent = aqProphetic.label;
      elements.aqResultStatus.className = `result-status`;
    }
    if (elements.aqResultExplain) {
      elements.aqResultExplain.textContent = aqProphetic.message;
    }

    // Animate bar (if exists)
    if (elements.aqBar) {
      setTimeout(() => {
        elements.aqBar.style.width = `${aq * 10}%`;
      }, 100);
    }

    // Trigger portal animation
    if (typeof Portal !== 'undefined') {
      Portal.animateScore('aq', aq);
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

    // Update status with prophetic message
    const riInputs = {
      impact: state.inputs.impact,
      identity: state.inputs.identity,
      boldness: state.inputs.boldness,
      audience: state.inputs.audience
    };
    const riProphetic = generatePropheticMessage('ri', riInputs, state.scores, null);
    if (elements.riResultStatus) {
      elements.riResultStatus.textContent = riProphetic.label;
      elements.riResultStatus.className = `result-status`;
    }
    if (elements.riResultExplain) {
      elements.riResultExplain.textContent = riProphetic.message;
    }

    // Animate bar (if exists)
    if (elements.riBar) {
      setTimeout(() => {
        elements.riBar.style.width = `${ri * 10}%`;
      }, 100);
    }

    // Trigger portal animation
    if (typeof Portal !== 'undefined') {
      Portal.animateScore('ri', ri);
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

    // Update status with prophetic message
    const ciInputs = {
      flow: state.inputs.flow,
      evolution: state.inputs.evolution,
      risk: state.inputs.risk,
      admin: state.inputs.admin,
      distraction: state.inputs.distraction,
      stagnation: state.inputs.stagnation
    };
    const ciProphetic = generatePropheticMessage('ci', ciInputs, state.scores, null);
    if (elements.ciResultStatus) {
      elements.ciResultStatus.textContent = ciProphetic.label;
      elements.ciResultStatus.className = `result-status`;
    }
    if (elements.ciResultExplain) {
      elements.ciResultExplain.textContent = ciProphetic.message;
    }

    // Animate bar (if exists)
    if (elements.ciBar) {
      setTimeout(() => {
        elements.ciBar.style.width = `${ci * 10}%`;
      }, 100);
    }

    // Trigger portal animation
    if (typeof Portal !== 'undefined') {
      Portal.animateScore('ci', ci);
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

      // Trigger portal animation for alpha
      if (typeof Portal !== 'undefined') {
        Portal.animateScore('alpha', state.scores.alpha);
      }

      // Update composite status with prophetic message
      const alphaHistory = state.history.length > 0 ? { lastAlpha: state.history[0].scores.alpha } : null;
      const alphaProphetic = generatePropheticMessage('alpha', null, state.scores, alphaHistory);
      if (elements.compositeStatus) {
        elements.compositeStatus.textContent = alphaProphetic.label + ': ' + alphaProphetic.message;
      }

      // Match archetype, recommendation, and protocol
      state.archetype = matchArchetype(state.scores);
      const smartRecs = getSmartRecommendations(state.inputs, state.scores, 4);
      state.recommendation = smartRecs.recommendations[0];
      const smartProtocol = getSmartProtocol(state.scores);
      state.protocol = smartProtocol.protocol;

      // Show archetype and recommendations
      showArchetypeCard();
      showRecommendedResources();
      showRecommendations();
      displayLabsTips();

      // Auto-save to history
      autoSaveScores();
    }
  }

  /**
   * Show archetype card with matched archetype data
   */
  function showArchetypeCard() {
    if (!state.archetype) {
      console.log('[FruitHedge] No archetype matched');
      return;
    }

    const arch = state.archetype;

    // Debug log
    console.log(`[FruitHedge] Matched archetype: ${arch.name}`);
    console.log(`[FruitHedge] Archetype details:`, {
      name: arch.name,
      subtitle: arch.subtitle || arch.sub,
      profile: arch.profile ? arch.profile.substring(0, 50) + '...' : 'none',
      insight: arch.insight ? arch.insight.substring(0, 50) + '...' : 'none'
    });

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
   * Get action plan based on score patterns and archetype
   * Returns the most relevant action plan from actionPlans data
   */
  function getActionPlan(scores, archetype) {
    // Check for specific patterns in priority order

    // Burnout: all scores critically low
    if (scores.aq < 3 && scores.ri < 3 && scores.ci < 3) {
      return actionPlans.burnout_risk;
    }

    // High performer: all scores high
    if (scores.aq >= 7 && scores.ri >= 7 && scores.ci >= 7) {
      return actionPlans.high_performer;
    }

    // Free agent archetype: high autonomy but lacks focus
    if (archetype && archetype.id === 'free_agent') {
      return actionPlans.free_agent;
    }

    // Rising cult: high resonance, moderate other scores
    if (scores.ri >= 6 && scores.aq >= 4 && scores.ci >= 4 && scores.ci < 7) {
      return actionPlans.rising_cult;
    }

    // Low boldness check (need slider value)
    const boldnessSlider = elements.sliders.boldness;
    if (boldnessSlider && parseInt(boldnessSlider.value) <= 3) {
      return actionPlans.low_boldness;
    }

    // High admin check (need slider value)
    const adminSlider = elements.sliders.admin;
    if (adminSlider && parseInt(adminSlider.value) >= 35) {
      return actionPlans.high_admin;
    }

    // Find weakest law and return appropriate plan
    const weakest = getWeakestLaw(scores);

    if (weakest === 'aq') {
      // Check if it's burnout risk (low energy + high constraint)
      const energySlider = elements.sliders.energy;
      const constraintSlider = elements.sliders.constraint;
      if (energySlider && constraintSlider) {
        const energy = parseInt(energySlider.value);
        const constraint = parseInt(constraintSlider.value);
        if (energy <= 3 && constraint >= 7) {
          return actionPlans.burnout_risk;
        }
      }
      return actionPlans.low_autonomy;
    }

    if (weakest === 'ri') {
      return actionPlans.low_resonance;
    }

    if (weakest === 'ci') {
      // Check if grinding without direction
      if (scores.aq >= 5 && scores.ri < 5) {
        return actionPlans.grinding_artist;
      }
      return actionPlans.low_intensity;
    }

    // Fallback: balanced/emerging
    if (scores.aq >= 4 && scores.aq <= 6 && scores.ri >= 4 && scores.ri <= 6 && scores.ci >= 4 && scores.ci <= 6) {
      return actionPlans.balanced;
    }

    return actionPlans.emerging_voice;
  }

  /**
   * Show the three recommendation sections:
   * 1. Personalized Action Plan - strategic diagnosis
   * 2. Daily Protocol - simple daily habit
   * 3. Labs Tips - science hacks (handled separately)
   */
  function showRecommendations() {
    if (!elements.recsSection) return;

    const scores = state.scores;
    const archetype = state.archetype;

    // ============================================================
    // 1. PERSONALIZED ACTION PLAN
    // Strategic diagnosis + 7-day action based on patterns
    // ============================================================
    const actionPlan = getActionPlan(scores, archetype);

    if (elements.actionPlanContent && actionPlan) {
      const actionHtml = `
        <div class="action-plan-card">
          <div class="action-plan-headline">${actionPlan.headline}</div>
          <p class="action-plan-diagnosis">${actionPlan.diagnosis}</p>
          <div class="action-plan-action"><strong>Next 7 Days:</strong> ${actionPlan.action}</div>
        </div>
      `;
      elements.actionPlanContent.innerHTML = actionHtml;
      elements.recsSection.classList.add('show');
    }

    // ============================================================
    // 2. FRUITHEDGE PROTOCOL
    // One simple daily habit targeting weakest law
    // ============================================================
    if (elements.protocolSection && elements.protocolContent && state.protocol) {
      const p = state.protocol;
      const weakest = getWeakestLaw(scores);
      const targetLabel = weakest === 'aq' ? 'Low Energy / Autonomy Quotient' :
                          weakest === 'ri' ? 'Low Connection / Resonance Index' :
                          'Low Focus / Craft Intensity';

      const protocolHtml = `
        <div class="protocol-card">
          <div class="protocol-name">${p.name}</div>
          <div class="protocol-prescription">${p.prescription}</div>
          <div class="protocol-target"><strong>Targets:</strong> ${targetLabel}</div>
        </div>
      `;
      elements.protocolContent.innerHTML = protocolHtml;
      elements.protocolSection.classList.remove('hidden');
      elements.protocolSection.classList.add('show');
    }

    // Note: Labs Tips (section 3) are displayed via displayLabsTips()
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
        let history = JSON.parse(historyData);

        // Clean up duplicates - keep only latest entry per day
        const beforeCount = history.length;
        history = cleanupDuplicateHistory(history);

        if (history.length !== beforeCount) {
          console.log('[FruitHedge] Cleaned up duplicate history:', beforeCount, '->', history.length);
          localStorage.setItem('fruithedge_history', JSON.stringify(history));
        }

        state.history = history;
      }

      const settingsData = localStorage.getItem('fruithedge_settings');
      if (settingsData) {
        state.settings = { ...state.settings, ...JSON.parse(settingsData) };
      }

      // Load records for best/worst tracking
      loadRecords();
    } catch (e) {
      console.error('Error loading from localStorage:', e);
    }
  }

  /**
   * Clean up duplicate same-day entries in history, keeping only the latest per day
   */
  function cleanupDuplicateHistory(history) {
    const byDate = {};

    history.forEach(h => {
      const day = new Date(h.date).toISOString().split('T')[0];
      if (!byDate[day] || new Date(h.date) > new Date(byDate[day].date)) {
        byDate[day] = h;
      }
    });

    return Object.values(byDate).sort((a, b) => new Date(b.date) - new Date(a.date));
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
    updateDashboard();
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
    updateDashboard();
  }

  function clearHistory() {
    showModal('Clear History', 'Are you sure you want to delete all history? This cannot be undone.', () => {
      state.history = [];
      saveHistory();
      updateHistoryDisplay();
      updateDashboard();
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

  function toggleHistorySection() {
    const btn = elements.historyToggleBtn;
    const content = elements.historyContent;
    const text = elements.historyToggleText;

    if (!btn || !content) return;

    const isExpanded = content.classList.contains('expanded');

    if (isExpanded) {
      // Collapse
      content.classList.remove('expanded');
      content.classList.add('collapsed');
      btn.classList.remove('expanded');
      if (text) text.textContent = 'View History';
    } else {
      // Expand
      content.classList.remove('collapsed');
      content.classList.add('expanded');
      btn.classList.add('expanded');
      if (text) text.textContent = 'Hide History';
    }
  }

  // ============================================================
  // EXPORT FUNCTIONS
  // ============================================================

  /**
   * Generate playbook and save to localStorage (NO PDF - that's a separate action)
   */
  function generatePDFJournal() {
    if (state.scores.alpha === 0) {
      alert('Please calculate your scores first.');
      return;
    }

    // Find today's playbook (auto-saved on calculation)
    const todayPlaybook = findTodayPlaybook();

    if (!todayPlaybook) {
      // No playbook for today - shouldn't happen if they calculated, but handle gracefully
      alert('No playbook found for today. Please calculate your scores first.');
      return;
    }

    // Scroll to playbooks section
    scrollToSection('playbooks');

    // Open today's playbook after a short delay for smooth transition
    setTimeout(() => {
      viewPlaybook(todayPlaybook.id);
      // Focus on first reflection textarea
      setTimeout(() => {
        const firstTextarea = document.querySelector('.pm-reflection-answer');
        if (firstTextarea) {
          firstTextarea.focus();
        }
      }, 100);
    }, 300);
  }

  // ============================================================
  // PLAYBOOKS MANAGEMENT
  // ============================================================

  /**
   * Load playbooks from localStorage and clean up duplicates
   */
  function loadPlaybooksFromStorage() {
    try {
      const stored = localStorage.getItem('fruithedge_journals');
      if (stored) {
        let playbooks = JSON.parse(stored);

        // Clean up duplicates - keep only latest entry per day
        const beforeCount = playbooks.length;
        playbooks = cleanupDuplicatePlaybooks(playbooks);

        if (playbooks.length !== beforeCount) {
          console.log('[FruitHedge] Cleaned up duplicate playbooks:', beforeCount, '->', playbooks.length);
          // Save cleaned data back
          localStorage.setItem('fruithedge_journals', JSON.stringify(playbooks));
        }

        state.playbooks = playbooks;

        // Sync playbooks to history if history is missing entries
        syncPlaybooksToHistory();
      }
    } catch (e) {
      console.error('[FruitHedge] Error loading playbooks:', e);
      state.playbooks = [];
    }
  }

  /**
   * Sync playbooks to history - ensures dashboard has data if playbooks exist
   */
  function syncPlaybooksToHistory() {
    if (state.playbooks.length === 0) return;

    // Get existing history dates
    const historyDates = new Set(state.history.map(h => {
      return new Date(h.date).toISOString().split('T')[0];
    }));

    let added = 0;

    // Add missing playbooks to history
    state.playbooks.forEach(pb => {
      const pbDate = new Date(pb.date).toISOString().split('T')[0];
      if (!historyDates.has(pbDate) && pb.scores) {
        state.history.push({
          id: pb.id || generateId(),
          date: pb.date,
          scores: pb.scores,
          inputs: pb.inputs || {},
          archetype: pb.archetype || null
        });
        historyDates.add(pbDate);
        added++;
      }
    });

    if (added > 0) {
      // Sort history by date descending
      state.history.sort((a, b) => new Date(b.date) - new Date(a.date));
      saveHistory();
      console.log('[FruitHedge] Synced', added, 'playbooks to history for dashboard');
    }
  }

  /**
   * Clean up duplicate same-day entries, keeping only the latest per day
   */
  function cleanupDuplicatePlaybooks(playbooks) {
    const byDate = {};

    playbooks.forEach(p => {
      const day = new Date(p.date).toISOString().split('T')[0];
      // Keep the latest entry for each day
      if (!byDate[day] || new Date(p.date) > new Date(byDate[day].date)) {
        byDate[day] = p;
      }
    });

    // Convert back to array, sorted by date (newest first)
    return Object.values(byDate).sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  /**
   * Save playbooks to localStorage
   */
  function savePlaybooksToStorage() {
    try {
      localStorage.setItem('fruithedge_journals', JSON.stringify(state.playbooks));
    } catch (e) {
      console.error('[FruitHedge] Error saving playbooks:', e);
    }
  }

  /**
   * Update playbooks display
   */
  function updatePlaybooksDisplay() {
    console.log('[FruitHedge] updatePlaybooksDisplay called, playbooksGrid exists:', !!elements.playbooksGrid);
    if (!elements.playbooksGrid) {
      console.log('[FruitHedge] WARNING: playbooksGrid element not found!');
      return;
    }

    const count = state.playbooks.length;
    console.log('[FruitHedge] updatePlaybooksDisplay: Rendering', count, 'playbooks');

    // Update count
    if (elements.playbooksCount) {
      elements.playbooksCount.textContent = `${count} of ${PLAYBOOK_MAX_COUNT} saved`;
    }

    // Show/hide empty state
    if (elements.playbooksEmpty) {
      elements.playbooksEmpty.style.display = count === 0 ? 'block' : 'none';
    }

    // Clear and rebuild grid
    elements.playbooksGrid.innerHTML = '';

    if (count === 0) return;

    state.playbooks.forEach(playbook => {
      console.log('[FruitHedge] Creating card for playbook:', playbook.id);
      const card = createPlaybookCard(playbook);
      elements.playbooksGrid.appendChild(card);
    });
  }

  /**
   * Create a playbook card element
   */
  function createPlaybookCard(playbook) {
    const card = document.createElement('div');
    card.className = 'playbook-card';
    card.dataset.id = playbook.id;

    const date = new Date(playbook.date);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    card.innerHTML = `
      <div class="playbook-card-date">${formattedDate}</div>
      <div class="playbook-card-alpha">${playbook.scores.alpha.toFixed(1)}</div>
      <div class="playbook-card-alpha-label">Alpha</div>
      <div class="playbook-card-archetype">${playbook.archetype ? playbook.archetype.name : 'Unknown'}</div>
      <div class="playbook-card-subtitle">${playbook.archetype ? playbook.archetype.subtitle : ''}</div>
      <div class="playbook-card-scores">
        <div class="playbook-card-score">
          <span class="playbook-card-score-value aq">${playbook.scores.aq.toFixed(1)}</span>
          <span class="playbook-card-score-label">AQ</span>
        </div>
        <div class="playbook-card-score">
          <span class="playbook-card-score-value ri">${playbook.scores.ri.toFixed(1)}</span>
          <span class="playbook-card-score-label">Ri</span>
        </div>
        <div class="playbook-card-score">
          <span class="playbook-card-score-value ci">${playbook.scores.ci.toFixed(1)}</span>
          <span class="playbook-card-score-label">Ci</span>
        </div>
      </div>
      <div class="playbook-card-actions">
        <button class="playbook-card-btn playbook-card-btn--view" onclick="FruitHedge.viewPlaybook('${playbook.id}')">View</button>
        <button class="playbook-card-btn playbook-card-btn--delete" onclick="FruitHedge.deletePlaybook('${playbook.id}')">Delete</button>
      </div>
    `;

    return card;
  }

  /**
   * View a saved playbook in modal
   */
  function viewPlaybook(id) {
    const playbook = state.playbooks.find(p => p.id === id);
    if (!playbook) return;

    // Store current playbook for PDF generation
    window._currentViewedPlaybook = playbook;

    const date = new Date(playbook.date);
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    // Build modal content
    let content = `
      <div class="pm-alpha">
        <div class="pm-alpha-value">${playbook.scores.alpha.toFixed(1)}</div>
        <div class="pm-alpha-label">Creative Alpha Index</div>
      </div>

      <div class="pm-scores">
        <div class="pm-score">
          <div class="pm-score-value aq">${playbook.scores.aq.toFixed(1)}</div>
          <div class="pm-score-label">Autonomy</div>
        </div>
        <div class="pm-score">
          <div class="pm-score-value ri">${playbook.scores.ri.toFixed(1)}</div>
          <div class="pm-score-label">Resonance</div>
        </div>
        <div class="pm-score">
          <div class="pm-score-value ci">${playbook.scores.ci.toFixed(1)}</div>
          <div class="pm-score-label">Intensity</div>
        </div>
      </div>
    `;

    // Archetype section
    if (playbook.archetype) {
      content += `
        <div class="pm-section">
          <div class="pm-section-title">Your Archetype</div>
          <div class="pm-archetype">
            <div class="pm-archetype-name">${playbook.archetype.name}</div>
            <div class="pm-archetype-subtitle">${playbook.archetype.subtitle}</div>
            <p class="pm-archetype-profile">${playbook.archetype.profile}</p>
          </div>
          ${playbook.archetype.insight ? `
            <div class="pm-protocol">
              <div class="pm-protocol-name">Strategic Insight</div>
              <p class="pm-protocol-why">${playbook.archetype.insight}</p>
            </div>
          ` : ''}
        </div>
      `;
    }

    // Reflection questions section
    if (playbook.reflections) {
      const reflectionLabels = {
        energy: 'Energy Surplus',
        space: 'Mental Space',
        optionality: 'Optionality',
        constraint: 'Constraint Load',
        impact: 'Emotional Impact',
        identity: 'Identity Fit',
        boldness: 'Artistic Boldness',
        audience: 'Audience Size',
        flow: 'Flow Hours',
        evolution: 'Skill Evolution',
        risk: 'Creative Risk',
        admin: 'Admin Load',
        distraction: 'Distraction',
        stagnation: 'Stagnation Level'
      };

      // Helper to format input score display
      const formatInputScore = (key, value) => {
        if (value === undefined || value === null) return '';
        if (key === 'audience') {
          return `Your score: ${value.toLocaleString()} followers`;
        } else if (key === 'flow' || key === 'admin' || key === 'distraction') {
          return `Your score: ${value} hours/week`;
        } else {
          return `Your score: ${value}/10`;
        }
      };

      // Get existing answers or empty object
      const answers = playbook.reflection_answers || {};
      const inputs = playbook.inputs || {};

      content += `
        <div class="pm-section">
          <div class="pm-section-title">Reflection Questions</div>
          <div class="pm-save-indicator" id="pm-save-indicator">Saved</div>
          ${Object.entries(playbook.reflections).map(([key, question]) => `
            <div class="pm-reflection-item">
              <div class="pm-reflection-label">${reflectionLabels[key] || key}</div>
              <p class="pm-reflection-question">${question}</p>
              ${inputs[key] !== undefined ? `<p class="question-score">${formatInputScore(key, inputs[key])}</p>` : ''}
              <textarea
                class="pm-reflection-answer"
                data-key="${key}"
                placeholder="Write your reflection here..."
                rows="3"
              >${answers[key] || ''}</textarea>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Update modal
    if (elements.playbookModalTitle) {
      elements.playbookModalTitle.textContent = `Playbook: ${formattedDate}`;
    }
    if (elements.playbookModalContent) {
      elements.playbookModalContent.innerHTML = content;
    }

    // Initialize auto-expanding textareas and auto-save
    initReflectionTextareas(playbook.id);

    // Show modal
    if (elements.playbookModalOverlay) {
      elements.playbookModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  // Debounce timer for auto-save
  let reflectionSaveTimer = null;

  /**
   * Initialize reflection textareas with auto-expand and auto-save
   */
  function initReflectionTextareas(playbookId) {
    const textareas = document.querySelectorAll('.pm-reflection-answer');
    const saveIndicator = document.getElementById('pm-save-indicator');

    textareas.forEach(textarea => {
      // Auto-expand on input
      textarea.addEventListener('input', function() {
        autoExpandTextarea(this);
        scheduleReflectionSave(playbookId, saveIndicator);
      });

      // Initial auto-expand for existing content
      autoExpandTextarea(textarea);
    });
  }

  /**
   * Auto-expand textarea based on content
   */
  function autoExpandTextarea(textarea) {
    textarea.style.height = 'auto';
    const minHeight = 72; // ~3 rows
    const newHeight = Math.max(minHeight, textarea.scrollHeight);
    textarea.style.height = newHeight + 'px';
  }

  /**
   * Schedule auto-save with debounce
   */
  function scheduleReflectionSave(playbookId, saveIndicator) {
    // Hide saved indicator while typing
    if (saveIndicator) {
      saveIndicator.classList.remove('visible');
    }

    // Clear existing timer
    if (reflectionSaveTimer) {
      clearTimeout(reflectionSaveTimer);
    }

    // Set new timer for 1 second
    reflectionSaveTimer = setTimeout(() => {
      saveReflectionAnswers(playbookId, saveIndicator);
    }, 1000);
  }

  /**
   * Save reflection answers to localStorage
   */
  function saveReflectionAnswers(playbookId, saveIndicator) {
    const textareas = document.querySelectorAll('.pm-reflection-answer');
    const answers = {};

    textareas.forEach(textarea => {
      const key = textarea.dataset.key;
      const value = textarea.value.trim();
      if (value) {
        answers[key] = value;
      }
    });

    // Find and update the playbook
    const playbookIndex = state.playbooks.findIndex(p => p.id === playbookId);
    if (playbookIndex !== -1) {
      state.playbooks[playbookIndex].reflection_answers = answers;
      savePlaybooksToStorage();

      // Show saved indicator
      if (saveIndicator) {
        saveIndicator.classList.add('visible');
        // Hide after 2 seconds
        setTimeout(() => {
          saveIndicator.classList.remove('visible');
        }, 2000);
      }
    }
  }

  /**
   * Delete a saved playbook
   */
  function deletePlaybook(id) {
    showModal(
      'Delete Playbook',
      'Are you sure you want to delete this playbook? This cannot be undone.',
      () => {
        state.playbooks = state.playbooks.filter(p => p.id !== id);
        savePlaybooksToStorage();
        updatePlaybooksDisplay();
        hideModal();
      }
    );
  }

  /**
   * Close playbook modal
   */
  function closePlaybookModal() {
    if (elements.playbookModalOverlay) {
      elements.playbookModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    window._currentViewedPlaybook = null;
  }

  /**
   * Save any pending reflection answers and close the playbook modal with confirmation
   */
  function saveAndClosePlaybook() {
    const playbook = window._currentViewedPlaybook;
    console.log('[FruitHedge] saveAndClosePlaybook called, playbook:', playbook ? playbook.id : 'none');

    if (playbook) {
      // Force save any pending reflection answers immediately
      const textareas = document.querySelectorAll('.pm-reflection-answer');
      const answers = {};

      textareas.forEach(textarea => {
        const key = textarea.dataset.key;
        const value = textarea.value.trim();
        if (value) {
          answers[key] = value;
        }
      });

      // Find and update the playbook
      const playbookIndex = state.playbooks.findIndex(p => p.id === playbook.id);
      console.log('[FruitHedge] Found playbook at index:', playbookIndex, 'Total playbooks:', state.playbooks.length);

      if (playbookIndex !== -1) {
        state.playbooks[playbookIndex].reflection_answers = answers;
        savePlaybooksToStorage();
        console.log('[FruitHedge] Saved to localStorage key: fruithedge_journals');
      } else {
        console.log('[FruitHedge] WARNING: Playbook not found in state.playbooks!');
      }
    }

    // Close the modal
    closePlaybookModal();

    // Refresh the playbooks display to ensure list is up to date
    updatePlaybooksDisplay();
    console.log('[FruitHedge] Called updatePlaybooksDisplay()');

    // Show confirmation toast
    showSaveConfirmation();
  }

  /**
   * Show a brief "Playbook saved" confirmation toast
   */
  function showSaveConfirmation() {
    // Create toast element if it doesn't exist
    let toast = document.getElementById('save-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'save-toast';
      toast.className = 'save-toast';
      document.body.appendChild(toast);
    }

    // Set content and show
    toast.textContent = 'Playbook saved';
    toast.classList.add('visible');

    // Hide after 2 seconds
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 2000);
  }

  /**
   * Download PDF from viewed playbook - ONLY triggered by explicit button click
   */
  function downloadPlaybookPdf() {
    console.log('[FruitHedge] downloadPlaybookPdf called');

    // iOS-specific handling
    if (isIOS()) {
      const iosMessage = "To save as PDF on iPhone:\n\n" +
        "1. Tap the Share button (square with arrow)\n" +
        "2. Select 'Print'\n" +
        "3. Pinch outward on the preview to open as PDF\n" +
        "4. Tap Share again\n" +
        "5. Choose 'Save to Files'";
      alert(iosMessage);
      setTimeout(function() { window.print(); }, 500);
      return;
    }

    const playbook = window._currentViewedPlaybook;
    if (!playbook) {
      console.log('[FruitHedge] No playbook to download - aborting');
      return;
    }

    // Safety check: Only proceed if modal is actually visible
    if (!elements.playbookModalOverlay || !elements.playbookModalOverlay.classList.contains('active')) {
      console.log('[FruitHedge] Modal not visible - aborting PDF generation');
      return;
    }

    console.log('[FruitHedge] Generating PDF for playbook:', playbook.id);

    // Generate HTML content similar to generatePDFJournal but from stored data
    const date = new Date(playbook.date);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

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
        <div class="header-meta">Generated on ${formattedDate} at ${formattedTime}</div>

        <div class="alpha">${playbook.scores.alpha.toFixed(1)}</div>
        <div class="alpha-label">Creative Alpha Index</div>

        <div class="scores-header">
          <div class="score">
            <div class="score-value" style="color: #2d5016;">${playbook.scores.aq.toFixed(1)}</div>
            <div class="score-label">Autonomy</div>
          </div>
          <div class="score">
            <div class="score-value" style="color: #c45a2c;">${playbook.scores.ri.toFixed(1)}</div>
            <div class="score-label">Resonance</div>
          </div>
          <div class="score">
            <div class="score-value" style="color: #8b2d5c;">${playbook.scores.ci.toFixed(1)}</div>
            <div class="score-label">Intensity</div>
          </div>
        </div>

        ${playbook.archetype ? `
        <div class="archetype-section">
          <div class="archetype-name">${playbook.archetype.name}</div>
          <div class="archetype-subtitle">${playbook.archetype.subtitle}</div>
          <p class="archetype-profile">${playbook.archetype.profile}</p>
        </div>
        ` : ''}

        ${playbook.archetype && playbook.archetype.insight ? `
        <h2>Key Insight</h2>
        <div class="section">
          <p style="font-size: 16px; line-height: 1.8;">${playbook.archetype.insight}</p>
        </div>
        ` : ''}

        ${playbook.reflections ? generateReflectionsPdfHtml(playbook) : ''}

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

  /**
   * Generate HTML for reflections section in PDF
   */
  function generateReflectionsPdfHtml(playbook) {
    const reflectionLabels = {
      energy: 'Energy Surplus',
      space: 'Mental Space',
      optionality: 'Optionality',
      constraint: 'Constraint Load',
      impact: 'Emotional Impact',
      identity: 'Identity Fit',
      boldness: 'Artistic Boldness',
      audience: 'Audience Size',
      flow: 'Flow Hours',
      evolution: 'Skill Evolution',
      risk: 'Creative Risk',
      admin: 'Admin Load',
      distraction: 'Distraction',
      stagnation: 'Stagnation Level'
    };

    // Helper to format input score display for PDF
    const formatInputScore = (key, value) => {
      if (value === undefined || value === null) return '';
      if (key === 'audience') {
        return `Your score: ${value.toLocaleString()} followers`;
      } else if (key === 'flow' || key === 'admin' || key === 'distraction') {
        return `Your score: ${value} hours/week`;
      } else {
        return `Your score: ${value}/10`;
      }
    };

    const answers = playbook.reflection_answers || {};
    const inputs = playbook.inputs || {};

    return `
      <h2>Reflections</h2>
      ${Object.entries(playbook.reflections).map(([key, question]) => `
        <div class="section" style="border-left: 3px solid #2d5016;">
          <p style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
            ${reflectionLabels[key] || key}
          </p>
          <p style="font-style: italic; color: #444; margin-bottom: 8px;">${question}</p>
          ${inputs[key] !== undefined ? `
            <p style="font-size: 12px; color: #2d5016; font-family: monospace; margin-bottom: 10px;">
              ${formatInputScore(key, inputs[key])}
            </p>
          ` : ''}
          ${answers[key] ? `
            <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-top: 10px;">
              <p style="margin: 0; white-space: pre-wrap;">${answers[key]}</p>
            </div>
          ` : `
            <div style="border: 1px dashed #ccc; padding: 20px; border-radius: 4px; min-height: 60px; margin-top: 10px;">
              <span style="color: #999; font-size: 11px;">Your thoughts:</span>
            </div>
          `}
        </div>
      `).join('')}
    `;
  }

  // ============================================================
  // HABIT ENGINE - Streak & Badges
  // ============================================================

  /**
   * Get today's date as YYYY-MM-DD string
   */
  function getTodayDateString() {
    return new Date().toISOString().split('T')[0];
  }

  /**
   * Calculate days between two date strings
   */
  function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Load streak and badges from localStorage
   */
  function loadHabitEngineFromStorage() {
    try {
      const streakData = localStorage.getItem('fruithedge_streak');
      if (streakData) {
        const parsed = JSON.parse(streakData);
        state.streak = { ...state.streak, ...parsed };
      }

      const badgesData = localStorage.getItem('fruithedge_badges');
      if (badgesData) {
        const parsed = JSON.parse(badgesData);
        state.badges = { ...state.badges, ...parsed };
      }
    } catch (e) {
      console.error('[FruitHedge] Error loading habit engine data:', e);
    }
  }

  /**
   * Save streak and badges to localStorage
   */
  function saveHabitEngineToStorage() {
    try {
      localStorage.setItem('fruithedge_streak', JSON.stringify(state.streak));
      localStorage.setItem('fruithedge_badges', JSON.stringify(state.badges));
    } catch (e) {
      console.error('[FruitHedge] Error saving habit engine data:', e);
    }
  }

  /**
   * Update streak when user saves a playbook
   */
  function updateStreakOnCheckin() {
    const today = getTodayDateString();
    const lastCheckin = state.streak.last_checkin_date;

    // Check if this is a comeback (7+ day gap)
    let isComeback = false;
    if (lastCheckin) {
      const daysSinceLastCheckin = daysBetween(lastCheckin, today);
      if (daysSinceLastCheckin >= 7) {
        isComeback = true;
      }
    }

    // If same day, don't double count but still allow the check-in
    if (lastCheckin === today) {
      // Already checked in today, no streak change
      return;
    }

    // Increment total check-ins
    state.streak.total_checkins++;

    // Set first check-in date if not set
    if (!state.streak.first_checkin_date) {
      state.streak.first_checkin_date = today;
    }

    // Calculate streak
    if (!lastCheckin) {
      // First ever check-in
      state.streak.current_streak = 1;
    } else {
      const daysSinceLastCheckin = daysBetween(lastCheckin, today);
      if (daysSinceLastCheckin === 1) {
        // Consecutive day - streak continues
        state.streak.current_streak++;
      } else if (daysSinceLastCheckin === 0) {
        // Same day - shouldn't happen but handle it
        // Streak stays the same
      } else {
        // Missed days - streak resets
        state.streak.current_streak = 1;
      }
    }

    // Update last check-in date
    state.streak.last_checkin_date = today;

    // Update longest streak
    if (state.streak.current_streak > state.streak.longest_streak) {
      state.streak.longest_streak = state.streak.current_streak;
    }

    // Check and award badges
    checkAndAwardBadges(isComeback);

    // Save to localStorage
    saveHabitEngineToStorage();
  }

  /**
   * Check and award badges based on current state
   */
  function checkAndAwardBadges(isComeback = false) {
    const newBadges = [];

    // First Check-in badge
    if (!state.badges.first && state.streak.total_checkins >= 1) {
      state.badges.first = true;
      newBadges.push('first');
    }

    // On Fire badge (7 day streak)
    if (!state.badges.fire && state.streak.current_streak >= 7) {
      state.badges.fire = true;
      newBadges.push('fire');
    }

    // Consistent badge (30 day streak)
    if (!state.badges.consistent && state.streak.current_streak >= 30) {
      state.badges.consistent = true;
      newBadges.push('consistent');
    }

    // Century badge (100 check-ins)
    if (!state.badges.century && state.streak.total_checkins >= 100) {
      state.badges.century = true;
      newBadges.push('century');
    }

    // Comeback badge (returned after 7+ day gap)
    if (!state.badges.comeback && isComeback) {
      state.badges.comeback = true;
      newBadges.push('comeback');
    }

    // Animate newly earned badges
    if (newBadges.length > 0) {
      setTimeout(() => {
        newBadges.forEach(badge => {
          const badgeEl = document.getElementById(`badge-${badge}`);
          if (badgeEl) {
            badgeEl.classList.add('badge--new');
            setTimeout(() => badgeEl.classList.remove('badge--new'), 600);
          }
        });
      }, 100);
    }
  }

  /**
   * Update habit engine display (streak, stats, badges)
   */
  function updateHabitEngineDisplay() {
    // Update streak count
    if (elements.streakCount) {
      elements.streakCount.textContent = state.streak.current_streak;
    }

    // Update longest streak
    if (elements.streakLongest) {
      elements.streakLongest.textContent = `${state.streak.longest_streak} days`;
    }

    // Add fire effect if streak >= 7
    if (elements.streakDisplay) {
      if (state.streak.current_streak >= 7) {
        elements.streakDisplay.classList.add('on-fire');
      } else {
        elements.streakDisplay.classList.remove('on-fire');
      }
    }

    // Update total check-ins
    if (elements.habitCheckins) {
      elements.habitCheckins.textContent = state.streak.total_checkins;
    }

    // Update member since
    if (elements.habitMemberSince) {
      if (state.streak.first_checkin_date) {
        const date = new Date(state.streak.first_checkin_date);
        elements.habitMemberSince.textContent = date.toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric'
        });
      } else {
        elements.habitMemberSince.textContent = '-';
      }
    }

    // Update badges earned count
    const badgesEarned = Object.values(state.badges).filter(b => b).length;
    if (elements.habitBadgesCount) {
      elements.habitBadgesCount.textContent = `${badgesEarned}/5`;
    }

    // Update badge display states
    const badgeElements = {
      first: elements.badgeFirst,
      fire: elements.badgeFire,
      consistent: elements.badgeConsistent,
      century: elements.badgeCentury,
      comeback: elements.badgeComeback
    };

    Object.entries(badgeElements).forEach(([key, el]) => {
      if (el) {
        if (state.badges[key]) {
          el.classList.remove('badge--locked');
          el.classList.add('badge--unlocked');
        } else {
          el.classList.add('badge--locked');
          el.classList.remove('badge--unlocked');
        }
      }
    });
  }

  /**
   * Show return prompt banner based on last check-in
   */
  function showReturnBannerIfNeeded() {
    if (!elements.returnBanner || !elements.returnBannerText) return;

    const lastCheckin = state.streak.last_checkin_date;
    if (!lastCheckin) return; // No previous check-in

    const today = getTodayDateString();
    const daysSince = daysBetween(lastCheckin, today);

    let message = '';
    let icon = '👋';

    if (daysSince === 0) {
      // Already checked in today, no banner
      return;
    } else if (daysSince >= 1 && daysSince <= 2) {
      message = "Welcome back! Keep the streak alive.";
      icon = '🔥';
    } else if (daysSince >= 3 && daysSince <= 6) {
      message = "It's been a few days. Your creativity misses you.";
      icon = '💭';
    } else if (daysSince >= 7) {
      message = "Time for a creative audit. Let's see where you're at.";
      icon = '🎯';
    }

    if (message) {
      elements.returnBannerText.textContent = message;
      const iconEl = elements.returnBanner.querySelector('.return-banner-icon');
      if (iconEl) iconEl.textContent = icon;
      elements.returnBanner.style.display = 'flex';
    }
  }

  /**
   * Dismiss return banner
   */
  function dismissReturnBanner() {
    if (elements.returnBanner) {
      elements.returnBanner.style.display = 'none';
    }
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
      `My Creative Alpha: ${state.scores.alpha.toFixed(1)} - I'm ${archetypeName}. Measured with FruitHedge.`
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

    // Update inline result statuses with prophetic messages
    const aqInputs = {
      energy: state.inputs.energy,
      space: state.inputs.space,
      optionality: state.inputs.optionality,
      constraint: state.inputs.constraint
    };
    const riInputs = {
      impact: state.inputs.impact,
      identity: state.inputs.identity,
      boldness: state.inputs.boldness,
      audience: state.inputs.audience
    };
    const ciInputs = {
      flow: state.inputs.flow,
      evolution: state.inputs.evolution,
      risk: state.inputs.risk,
      admin: state.inputs.admin,
      distraction: state.inputs.distraction,
      stagnation: state.inputs.stagnation
    };

    const aqProphetic = generatePropheticMessage('aq', aqInputs, state.scores, null);
    const riProphetic = generatePropheticMessage('ri', riInputs, state.scores, null);
    const ciProphetic = generatePropheticMessage('ci', ciInputs, state.scores, null);

    if (elements.aqResultStatus) {
      elements.aqResultStatus.textContent = aqProphetic.label;
      elements.aqResultStatus.className = 'result-status';
    }
    if (elements.aqResultExplain) elements.aqResultExplain.textContent = aqProphetic.message;

    if (elements.riResultStatus) {
      elements.riResultStatus.textContent = riProphetic.label;
      elements.riResultStatus.className = 'result-status';
    }
    if (elements.riResultExplain) elements.riResultExplain.textContent = riProphetic.message;

    if (elements.ciResultStatus) {
      elements.ciResultStatus.textContent = ciProphetic.label;
      elements.ciResultStatus.className = 'result-status';
    }
    if (elements.ciResultExplain) elements.ciResultExplain.textContent = ciProphetic.message;

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

    // Update composite status with prophetic message
    const alphaHistory = state.history.length > 0 ? { lastAlpha: state.history[0].scores.alpha } : null;
    const alphaProphetic = generatePropheticMessage('alpha', null, state.scores, alphaHistory);
    if (elements.compositeStatus) {
      elements.compositeStatus.textContent = alphaProphetic.label + ': ' + alphaProphetic.message;
    }

    // Show archetype card
    showArchetypeCard();

    // Show recommended resources
    showRecommendedResources();

    // Show recommendations
    showRecommendations();

    // Show Labs tips
    displayLabsTips();
  }

  // ============================================================
  // EVENT LISTENERS
  // ============================================================

  function initEventListeners() {
    console.log('[FruitHedge] initEventListeners() starting...');
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

    // History toggle (collapsible)
    if (elements.historyToggleBtn) {
      elements.historyToggleBtn.addEventListener('click', toggleHistorySection);
    }

    // History actions
    if (elements.exportHistoryBtn) {
      elements.exportHistoryBtn.addEventListener('click', exportHistory);
    }
    if (elements.clearHistoryBtn) {
      elements.clearHistoryBtn.addEventListener('click', clearHistory);
    }

    // Export actions
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

    // Playbook modal
    if (elements.playbookModalClose) {
      elements.playbookModalClose.addEventListener('click', closePlaybookModal);
    }
    if (elements.playbookModalSaveClose) {
      elements.playbookModalSaveClose.addEventListener('click', saveAndClosePlaybook);
    }
    if (elements.playbookModalPdf) {
      elements.playbookModalPdf.addEventListener('click', downloadPlaybookPdf);
    }
    if (elements.playbookModalOverlay) {
      elements.playbookModalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.playbookModalOverlay) closePlaybookModal();
      });
    }

    // Save confirmation modal
    if (elements.saveConfirmReplace) {
      elements.saveConfirmReplace.addEventListener('click', replaceTodayPlaybook);
    }
    if (elements.saveConfirmCancel) {
      elements.saveConfirmCancel.addEventListener('click', hideSaveConfirmModal);
    }
    if (elements.saveConfirmOverlay) {
      elements.saveConfirmOverlay.addEventListener('click', (e) => {
        if (e.target === elements.saveConfirmOverlay) hideSaveConfirmModal();
      });
    }

    // Return banner close
    if (elements.returnBannerClose) {
      elements.returnBannerClose.addEventListener('click', dismissReturnBanner);
    }

    // Equity chart metric tabs
    const equityTabs = document.querySelectorAll('.equity-tab');
    equityTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const metric = tab.dataset.metric;
        if (metric === currentEquityMetric) return;

        // Update active state
        equityTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update current metric and redraw
        currentEquityMetric = metric;
        if (state.history.length >= 2) {
          drawEquityCurve(state.history, currentEquityMetric);
        }
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (elements.playbookModalOverlay && elements.playbookModalOverlay.classList.contains('active')) {
          closePlaybookModal();
        } else if (elements.modalOverlay && elements.modalOverlay.classList.contains('active')) {
          hideModal();
        }
      }

      // Shift+D to seed demo data (when on dashboard section)
      if (e.shiftKey && e.key === 'D') {
        const dashboardSection = document.getElementById('dashboard-section');
        if (dashboardSection) {
          const rect = dashboardSection.getBoundingClientRect();
          // Check if dashboard is visible in viewport
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            seedDemoHistory();
          }
        }
      }
    });
    console.log('[FruitHedge] initEventListeners() completed');
  }

  // ============================================================
  // PERFORMANCE DASHBOARD
  // ============================================================

  const dashboardElements = {
    empty: document.getElementById('dashboard-empty'),
    content: document.getElementById('dashboard-content'),
    equityChart: document.getElementById('equity-chart'),
    equityChartTitle: document.getElementById('equity-chart-title'),
    equityTooltip: document.getElementById('equity-tooltip'),
    radarChart: document.getElementById('radar-chart'),
    radarTooltip: document.getElementById('radar-tooltip'),
    statATH: document.getElementById('stat-ath'),
    statStreak: document.getElementById('stat-streak'),
    statCheckins: document.getElementById('stat-checkins'),
    statAvg: document.getElementById('stat-avg'),
    statDrawdown: document.getElementById('stat-drawdown'),
    statBest: document.getElementById('stat-best'),
    statWeakest: document.getElementById('stat-weakest'),
    trendAQ: document.getElementById('trend-aq'),
    trendAQArrow: document.getElementById('trend-aq-arrow'),
    trendRi: document.getElementById('trend-ri'),
    trendRiArrow: document.getElementById('trend-ri-arrow'),
    trendCi: document.getElementById('trend-ci'),
    trendCiArrow: document.getElementById('trend-ci-arrow'),
    trendAlpha: document.getElementById('trend-alpha'),
    trendAlphaArrow: document.getElementById('trend-alpha-arrow')
  };

  // Chart data points for hover detection
  let equityDataPoints = [];

  // Current equity chart metric
  let currentEquityMetric = 'alpha';

  // Metric configuration for equity chart
  const equityMetricConfig = {
    alpha: { label: 'Creative Alpha Over Time', color: '#ffffff', key: 'alpha' },
    aq: { label: 'Autonomy Quotient Over Time', color: '#c4ff61', key: 'aq' },
    ri: { label: 'Resonance Index Over Time', color: '#ffb380', key: 'ri' },
    ci: { label: 'Craft Intensity Over Time', color: '#ff6b9d', key: 'ci' }
  };

  function updateDashboard() {
    const history = state.history;

    if (history.length < 2) {
      if (dashboardElements.empty) dashboardElements.empty.style.display = 'block';
      if (dashboardElements.content) dashboardElements.content.style.display = 'none';
      return;
    }

    if (dashboardElements.empty) dashboardElements.empty.style.display = 'none';
    if (dashboardElements.content) dashboardElements.content.style.display = 'block';

    // Draw charts
    drawEquityCurve(history, currentEquityMetric);
    drawRadarChart();

    // Update stats
    updateStats(history);

    // Update trends
    updateTrends(history);
  }

  function drawEquityCurve(history, metric = 'alpha') {
    const canvas = dashboardElements.equityChart;
    if (!canvas) return;

    const config = equityMetricConfig[metric] || equityMetricConfig.alpha;
    const scoreKey = config.key;
    const lineColor = config.color;

    // Update chart title
    if (dashboardElements.equityChartTitle) {
      dashboardElements.equityChartTitle.textContent = config.label;
    }

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;

    // Set canvas size for high DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Reverse history for chronological order
    const data = [...history].reverse();

    // Get min/max for Y axis (always 0-10 for consistency)
    const minScore = 0;
    const maxScore = 10;

    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding.top + (chartHeight * i / 5);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      // Y-axis labels
      const value = maxScore - ((maxScore - minScore) * i / 5);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.textAlign = 'right';
      ctx.fillText(value.toFixed(1), padding.left - 10, y + 4);
    }

    // Draw the line with metric-specific color
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    // Create gradient fill based on line color
    // Convert hex to rgba for gradient (with fallback)
    const hexToRgba = (hex, alpha) => {
      // Fallback to lime if hex is invalid
      if (!hex || typeof hex !== 'string' || !hex.startsWith('#') || hex.length < 7) {
        return `rgba(196, 255, 97, ${alpha})`;
      }
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      // Check for NaN
      if (isNaN(r) || isNaN(g) || isNaN(b)) {
        return `rgba(196, 255, 97, ${alpha})`;
      }
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const gradientFill = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    gradientFill.addColorStop(0, hexToRgba(lineColor, 0.3));
    gradientFill.addColorStop(1, hexToRgba(lineColor, 0));

    // Store data points for hover
    equityDataPoints = [];

    ctx.beginPath();
    data.forEach((entry, i) => {
      const scoreValue = entry.scores[scoreKey];
      const x = padding.left + (chartWidth * i / (data.length - 1));
      const y = padding.top + chartHeight * (1 - (scoreValue - minScore) / (maxScore - minScore));

      equityDataPoints.push({
        x, y,
        date: new Date(entry.date).toLocaleDateString(),
        value: scoreValue,
        metric: metric
      });

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Fill area under the curve
    ctx.lineTo(padding.left + chartWidth, height - padding.bottom);
    ctx.lineTo(padding.left, height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = gradientFill;
    ctx.fill();

    // Draw data points
    equityDataPoints.forEach((point, i) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = lineColor;
      ctx.fill();
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Draw X-axis labels (show first, last, and middle)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';

    if (data.length > 0) {
      // First date
      ctx.fillText(new Date(data[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        padding.left, height - 10);
      // Last date
      ctx.fillText(new Date(data[data.length - 1].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        width - padding.right, height - 10);
      // Middle date if more than 2 entries
      if (data.length > 2) {
        const midIndex = Math.floor(data.length / 2);
        ctx.fillText(new Date(data[midIndex].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          padding.left + chartWidth / 2, height - 10);
      }
    }

    // Setup hover listener
    canvas.onmousemove = function(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Find closest point
      let closest = null;
      let minDist = Infinity;

      equityDataPoints.forEach(point => {
        const dist = Math.sqrt(Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2));
        if (dist < minDist && dist < 30) {
          minDist = dist;
          closest = point;
        }
      });

      const tooltip = dashboardElements.equityTooltip;
      if (closest && tooltip) {
        tooltip.style.display = 'block';
        tooltip.innerHTML = `<strong>${closest.value.toFixed(1)}</strong><br>${closest.date}`;
        tooltip.style.left = (closest.x - 40) + 'px';
        tooltip.style.top = (closest.y - 50) + 'px';
      } else if (tooltip) {
        tooltip.style.display = 'none';
      }
    };

    canvas.onmouseleave = function() {
      if (dashboardElements.equityTooltip) {
        dashboardElements.equityTooltip.style.display = 'none';
      }
    };
  }

  // Radar chart state for hover detection
  const radarState = {
    points: [], // Stores {x, y, score, name, fullName, status} for each vertex
    hasData: false
  };

  function drawRadarChart() {
    const canvas = dashboardElements.radarChart;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) / 2 - 40; // Leave room for labels

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Get current scores or use last history entry
    let aq, ri, ci, alpha;
    if (state.scores.alpha > 0) {
      aq = state.scores.aq;
      ri = state.scores.ri;
      ci = state.scores.ci;
      alpha = state.scores.alpha;
    } else if (state.history.length > 0) {
      const latest = state.history[0];
      aq = latest.scores.aq;
      ri = latest.scores.ri;
      ci = latest.scores.ci;
      alpha = latest.scores.alpha;
    } else {
      // Empty state
      radarState.hasData = false;
      drawRadarEmpty(ctx, centerX, centerY, maxRadius);
      return;
    }

    radarState.hasData = true;

    // Angles for 3 axes (AQ at top, Ri bottom-left, Ci bottom-right)
    const angles = [
      -Math.PI / 2,           // AQ: top (270°)
      -Math.PI / 2 + (2 * Math.PI / 3),  // Ri: bottom-left (150°)
      -Math.PI / 2 + (4 * Math.PI / 3)   // Ci: bottom-right (30°)
    ];

    // Colors
    const gridColor = 'rgba(128, 128, 128, 0.2)';
    const axisColor = 'rgba(128, 128, 128, 0.4)';
    const lime = '#c4ff61';
    const peach = '#ff9b71';
    const berry = '#d46a9e';
    const textColor = '#e0e0e0';
    const mutedColor = '#888888';

    // Draw grid circles (at 2, 4, 6, 8, 10)
    for (let level = 2; level <= 10; level += 2) {
      const r = (level / 10) * maxRadius;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, 0, 2 * Math.PI);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axis lines
    angles.forEach(angle => {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * maxRadius,
        centerY + Math.sin(angle) * maxRadius
      );
      ctx.strokeStyle = axisColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Calculate vertex positions based on scores
    const scores = [aq, ri, ci];
    const names = ['AQ', 'Ri', 'Ci'];
    const fullNames = ['Autonomy Quotient', 'Resonance Index', 'Creative Intensity'];
    const colors = [lime, peach, berry];
    const vertices = [];

    radarState.points = []; // Reset hover points

    scores.forEach((score, i) => {
      const normalizedScore = Math.min(score, 10) / 10;
      const x = centerX + Math.cos(angles[i]) * normalizedScore * maxRadius;
      const y = centerY + Math.sin(angles[i]) * normalizedScore * maxRadius;
      vertices.push({ x, y });

      // Store for hover detection
      radarState.points.push({
        x,
        y,
        score,
        name: names[i],
        fullName: fullNames[i],
        color: colors[i],
        status: getScoreStatus(names[i], score)
      });
    });

    // Draw filled shape with gradient
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y);
    vertices.forEach((v, i) => {
      if (i > 0) ctx.lineTo(v.x, v.y);
    });
    ctx.closePath();

    // Create gradient fill
    const gradient = ctx.createLinearGradient(
      vertices[0].x, vertices[0].y,
      (vertices[1].x + vertices[2].x) / 2,
      (vertices[1].y + vertices[2].y) / 2
    );
    gradient.addColorStop(0, 'rgba(196, 255, 97, 0.3)');   // lime
    gradient.addColorStop(0.5, 'rgba(255, 155, 113, 0.3)'); // peach
    gradient.addColorStop(1, 'rgba(212, 106, 158, 0.3)');  // berry

    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw shape border
    ctx.strokeStyle = lime;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw vertex points with glow
    vertices.forEach((v, i) => {
      // Glow
      ctx.beginPath();
      ctx.arc(v.x, v.y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = colors[i].replace(')', ', 0.3)').replace('rgb', 'rgba').replace('#', '');
      // Convert hex to rgba for glow
      const glowColor = hexToRgba(colors[i], 0.3);
      ctx.fillStyle = glowColor;
      ctx.fill();

      // Solid point
      ctx.beginPath();
      ctx.arc(v.x, v.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = colors[i];
      ctx.fill();
    });

    // Draw labels at each axis end
    const labelOffset = 25;
    scores.forEach((score, i) => {
      const labelX = centerX + Math.cos(angles[i]) * (maxRadius + labelOffset);
      const labelY = centerY + Math.sin(angles[i]) * (maxRadius + labelOffset);

      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Name and score
      ctx.fillStyle = colors[i];
      ctx.fillText(`${names[i]}: ${score.toFixed(1)}`, labelX, labelY);
    });

    // Draw center alpha
    ctx.font = 'bold 20px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Alpha symbol
    ctx.fillStyle = mutedColor;
    ctx.font = '14px monospace';
    ctx.fillText('α', centerX, centerY - 10);

    // Alpha value with gradient effect (approximate with solid color)
    ctx.fillStyle = lime;
    ctx.font = 'bold 18px monospace';
    ctx.fillText(alpha.toFixed(1), centerX, centerY + 8);

    // Setup hover listener if not already done
    setupRadarHover(canvas);
  }

  function drawRadarEmpty(ctx, centerX, centerY, maxRadius) {
    // Colors
    const gridColor = 'rgba(128, 128, 128, 0.15)';
    const axisColor = 'rgba(128, 128, 128, 0.3)';
    const mutedColor = '#666666';

    // Angles for 3 axes
    const angles = [
      -Math.PI / 2,
      -Math.PI / 2 + (2 * Math.PI / 3),
      -Math.PI / 2 + (4 * Math.PI / 3)
    ];

    // Draw grid circles
    for (let level = 2; level <= 10; level += 2) {
      const r = (level / 10) * maxRadius;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, 0, 2 * Math.PI);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axis lines
    const names = ['AQ', 'Ri', 'Ci'];
    angles.forEach((angle, i) => {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * maxRadius,
        centerY + Math.sin(angle) * maxRadius
      );
      ctx.strokeStyle = axisColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw axis labels
      const labelX = centerX + Math.cos(angle) * (maxRadius + 20);
      const labelY = centerY + Math.sin(angle) * (maxRadius + 20);
      ctx.font = '11px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = mutedColor;
      ctx.fillText(names[i], labelX, labelY);
    });

    // Center text
    ctx.font = '11px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = mutedColor;
    ctx.fillText('Calculate scores', centerX, centerY - 8);
    ctx.fillText('to see your shape', centerX, centerY + 8);
  }

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function getScoreStatus(name, score) {
    const labels = {
      AQ: { low: 'LOW AUTONOMY', mid: 'MODERATE AUTONOMY', high: 'HIGH AUTONOMY' },
      Ri: { low: 'LOW RESONANCE', mid: 'MODERATE RESONANCE', high: 'HIGH RESONANCE' },
      Ci: { low: 'LOW INTENSITY', mid: 'MODERATE INTENSITY', high: 'HIGH INTENSITY' }
    };

    const icons = { low: '⚠️', mid: '⚡', high: '🔥' };
    let level;
    if (score < 4) level = 'low';
    else if (score < 7) level = 'mid';
    else level = 'high';

    return `${icons[level]} ${labels[name][level]}`;
  }

  function setupRadarHover(canvas) {
    if (canvas._radarHoverSetup) return;
    canvas._radarHoverSetup = true;

    const tooltip = dashboardElements.radarTooltip;
    if (!tooltip) return;

    canvas.addEventListener('mousemove', (e) => {
      if (!radarState.hasData) {
        tooltip.classList.remove('visible');
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      // Check proximity to each vertex point
      let hoveredPoint = null;
      const hitRadius = 20;

      for (const point of radarState.points) {
        const dist = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
        if (dist < hitRadius) {
          hoveredPoint = point;
          break;
        }
      }

      if (hoveredPoint) {
        tooltip.innerHTML = `
          <div class="radar-tooltip-title">${hoveredPoint.fullName}</div>
          <div class="radar-tooltip-score">${hoveredPoint.score.toFixed(1)} / 10</div>
          <div class="radar-tooltip-status">${hoveredPoint.status}</div>
        `;
        tooltip.style.left = `${e.clientX - rect.left + 15}px`;
        tooltip.style.top = `${e.clientY - rect.top - 10}px`;
        tooltip.classList.add('visible');
        canvas.style.cursor = 'pointer';
      } else {
        tooltip.classList.remove('visible');
        canvas.style.cursor = 'default';
      }
    });

    canvas.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
      canvas.style.cursor = 'default';
    });
  }

  function updateStats(history) {
    // All-Time High Alpha
    const alphas = history.map(h => h.scores.alpha);
    const ath = Math.max(...alphas);
    if (dashboardElements.statATH) {
      dashboardElements.statATH.textContent = ath.toFixed(1);
    }

    // Total Check-ins
    if (dashboardElements.statCheckins) {
      dashboardElements.statCheckins.textContent = history.length;
    }

    // Average Alpha
    const avgAlpha = alphas.reduce((a, b) => a + b, 0) / alphas.length;
    if (dashboardElements.statAvg) {
      dashboardElements.statAvg.textContent = avgAlpha.toFixed(1);
    }

    // Biggest Drawdown (largest drop between consecutive sessions)
    let maxDrawdown = 0;
    for (let i = 0; i < history.length - 1; i++) {
      // History is newest first, so we compare backwards
      const current = history[i].scores.alpha;
      const previous = history[i + 1].scores.alpha;
      const drop = previous - current;
      if (drop > maxDrawdown) {
        maxDrawdown = drop;
      }
    }
    if (dashboardElements.statDrawdown) {
      dashboardElements.statDrawdown.textContent = maxDrawdown > 0 ? `-${maxDrawdown.toFixed(1)}` : '0.0';
    }

    // Current Streak (consecutive days with entries)
    let streak = 1;
    const sortedByDate = [...history].sort((a, b) => new Date(b.date) - new Date(a.date));
    for (let i = 0; i < sortedByDate.length - 1; i++) {
      const current = new Date(sortedByDate[i].date);
      const next = new Date(sortedByDate[i + 1].date);
      const diffDays = Math.floor((current - next) / (1000 * 60 * 60 * 24));
      if (diffDays <= 1) {
        streak++;
      } else {
        break;
      }
    }
    if (dashboardElements.statStreak) {
      dashboardElements.statStreak.textContent = streak + ' days';
    }

    // Best and Weakest Law (based on records with dates)
    const formatRecordDate = (dateStr) => {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    // Find best law (highest recorded value)
    const bestRecords = [
      { name: 'AQ', value: state.records.best.aq.value, date: state.records.best.aq.date },
      { name: 'Ri', value: state.records.best.ri.value, date: state.records.best.ri.date },
      { name: 'Ci', value: state.records.best.ci.value, date: state.records.best.ci.date }
    ].filter(r => r.value !== null);

    // Find weakest law (lowest recorded value)
    const worstRecords = [
      { name: 'AQ', value: state.records.worst.aq.value, date: state.records.worst.aq.date },
      { name: 'Ri', value: state.records.worst.ri.value, date: state.records.worst.ri.date },
      { name: 'Ci', value: state.records.worst.ci.value, date: state.records.worst.ci.date }
    ].filter(r => r.value !== null);

    if (dashboardElements.statBest) {
      if (bestRecords.length > 0) {
        bestRecords.sort((a, b) => b.value - a.value);
        const best = bestRecords[0];
        const dateStr = best.date ? ` (${formatRecordDate(best.date)})` : '';
        dashboardElements.statBest.textContent = `${best.name} (${best.value.toFixed(1)})${dateStr}`;
      } else {
        dashboardElements.statBest.textContent = '-';
      }
    }

    if (dashboardElements.statWeakest) {
      if (worstRecords.length > 0) {
        worstRecords.sort((a, b) => a.value - b.value);
        const weakest = worstRecords[0];
        const dateStr = weakest.date ? ` (${formatRecordDate(weakest.date)})` : '';
        dashboardElements.statWeakest.textContent = `${weakest.name} (${weakest.value.toFixed(1)})${dateStr}`;
      } else {
        dashboardElements.statWeakest.textContent = '-';
      }
    }
  }

  function updateTrends(history) {
    // Compare current to average of last 3 sessions
    if (history.length < 2) return;

    const current = history[0].scores;
    const recentCount = Math.min(3, history.length - 1);
    const recent = history.slice(1, recentCount + 1);

    const avgRecent = {
      aq: recent.reduce((sum, h) => sum + h.scores.aq, 0) / recent.length,
      ri: recent.reduce((sum, h) => sum + h.scores.ri, 0) / recent.length,
      ci: recent.reduce((sum, h) => sum + h.scores.ci, 0) / recent.length,
      alpha: recent.reduce((sum, h) => sum + h.scores.alpha, 0) / recent.length
    };

    function getTrend(current, avg) {
      const diff = current - avg;
      const threshold = 0.3; // Tolerance for "flat"
      if (diff > threshold) return { arrow: '↑', class: 'trend-arrow--up' };
      if (diff < -threshold) return { arrow: '↓', class: 'trend-arrow--down' };
      return { arrow: '→', class: 'trend-arrow--flat' };
    }

    // Update AQ trend
    const aqTrend = getTrend(current.aq, avgRecent.aq);
    if (dashboardElements.trendAQ) {
      dashboardElements.trendAQ.textContent = current.aq.toFixed(1);
    }
    if (dashboardElements.trendAQArrow) {
      dashboardElements.trendAQArrow.textContent = aqTrend.arrow;
      dashboardElements.trendAQArrow.className = 'trend-arrow ' + aqTrend.class;
    }

    // Update Ri trend
    const riTrend = getTrend(current.ri, avgRecent.ri);
    if (dashboardElements.trendRi) {
      dashboardElements.trendRi.textContent = current.ri.toFixed(1);
    }
    if (dashboardElements.trendRiArrow) {
      dashboardElements.trendRiArrow.textContent = riTrend.arrow;
      dashboardElements.trendRiArrow.className = 'trend-arrow ' + riTrend.class;
    }

    // Update Ci trend
    const ciTrend = getTrend(current.ci, avgRecent.ci);
    if (dashboardElements.trendCi) {
      dashboardElements.trendCi.textContent = current.ci.toFixed(1);
    }
    if (dashboardElements.trendCiArrow) {
      dashboardElements.trendCiArrow.textContent = ciTrend.arrow;
      dashboardElements.trendCiArrow.className = 'trend-arrow ' + ciTrend.class;
    }

    // Update Alpha trend
    const alphaTrend = getTrend(current.alpha, avgRecent.alpha);
    if (dashboardElements.trendAlpha) {
      dashboardElements.trendAlpha.textContent = current.alpha.toFixed(1);
    }
    if (dashboardElements.trendAlphaArrow) {
      dashboardElements.trendAlphaArrow.textContent = alphaTrend.arrow;
      dashboardElements.trendAlphaArrow.className = 'trend-arrow ' + alphaTrend.class;
    }
  }

  // ============================================================
  // DEMO DATA SEEDER
  // ============================================================

  function seedDemoHistory() {
    // Clear existing history
    state.history = [];

    const archetypeIds = [
      'burnout', 'stuck_artist', 'free_agent', 'professional', 'explorer',
      'virtuoso', 'rising_star', 'underground_legend', 'beloved_amateur',
      'raw_talent', 'cult_figure', 'master', 'prodigy', 'icon'
    ];

    // Generate ~30 entries over 90 days
    const entries = [];
    const now = new Date();
    const startDate = new Date(now.getTime() - (90 * 24 * 60 * 60 * 1000)); // 90 days ago

    // Simulate a journey: starting rough, improving over time with variance
    // Starting scores around 2-4, ending around 6-8
    const numEntries = 30;

    for (let i = 0; i < numEntries; i++) {
      // Calculate date (spread across 90 days with some randomness)
      const dayOffset = Math.floor((i / numEntries) * 90) + Math.floor(Math.random() * 3);
      const entryDate = new Date(startDate.getTime() + (dayOffset * 24 * 60 * 60 * 1000));

      // Progress factor (0 at start, 1 at end)
      const progress = i / (numEntries - 1);

      // Base improvement curve (sigmoid-ish for realistic growth)
      const baseImprovement = Math.pow(progress, 0.7);

      // Add variance and occasional drawdowns
      const variance = (Math.random() - 0.5) * 1.5;
      const drawdown = (Math.random() < 0.15) ? -1.5 : 0; // 15% chance of drawdown

      // Calculate individual scores
      // AQ: Starts low (2-3), ends higher (6-8)
      let aq = 2 + (baseImprovement * 5) + variance * 0.8 + drawdown * 0.7;
      aq = Math.max(1, Math.min(10, aq));

      // Ri: Similar pattern but different variance
      let ri = 2.5 + (baseImprovement * 4.5) + (Math.random() - 0.5) * 1.2 + drawdown * 0.5;
      ri = Math.max(1, Math.min(10, ri));

      // Ci: Starts slightly higher, grows steadier
      let ci = 3 + (baseImprovement * 4) + (Math.random() - 0.5) * 1 + drawdown * 0.8;
      ci = Math.max(1, Math.min(10, ci));

      // Round to 1 decimal
      aq = Math.round(aq * 10) / 10;
      ri = Math.round(ri * 10) / 10;
      ci = Math.round(ci * 10) / 10;

      // Calculate alpha (geometric mean)
      const alpha = Math.round(Math.pow(aq * ri * ci, 1/3) * 10) / 10;

      // Pick archetype based on scores (simplified logic)
      let archetypeIndex;
      if (alpha < 3) archetypeIndex = Math.floor(Math.random() * 3); // burnout, stuck, free_agent
      else if (alpha < 5) archetypeIndex = 3 + Math.floor(Math.random() * 3); // professional, explorer, virtuoso
      else if (alpha < 7) archetypeIndex = 6 + Math.floor(Math.random() * 4); // rising_star to raw_talent
      else archetypeIndex = 10 + Math.floor(Math.random() * 4); // cult_figure to icon

      entries.push({
        id: generateId(),
        date: entryDate.toISOString(),
        scores: { aq, ri, ci, alpha },
        inputs: {
          energy: Math.round(aq * 0.8 + Math.random() * 2),
          space: Math.round(aq * 0.7 + Math.random() * 3),
          optionality: Math.round(aq * 0.9 + Math.random() * 1),
          constraint: Math.round((10 - aq) * 0.6 + Math.random() * 2),
          impact: Math.round(ri * 0.8 + Math.random() * 2),
          identity: Math.round(ri * 0.9 + Math.random() * 1),
          boldness: Math.round(ri * 0.7 + Math.random() * 3),
          audience: Math.pow(10, 2 + ri * 0.4),
          flow: Math.round(ci * 2 + Math.random() * 5),
          evolution: Math.round(ci * 0.8 + Math.random() * 2),
          risk: Math.round(ci * 0.7 + Math.random() * 3),
          admin: Math.round((10 - ci) * 1.5 + Math.random() * 5),
          distraction: Math.round((10 - ci) * 1.5 + Math.random() * 5),
          stagnation: Math.round((10 - ci) * 0.5 + Math.random() * 2)
        },
        archetype: archetypeIds[Math.min(archetypeIndex, archetypeIds.length - 1)]
      });
    }

    // Sort by date (oldest first for history array which shows newest first)
    entries.sort((a, b) => new Date(b.date) - new Date(a.date));

    state.history = entries;
    saveHistory();
    updateHistoryDisplay();
    updateDashboard();

    console.log(`%c[FruitHedge] Demo data seeded: ${entries.length} entries over 90 days`, 'color: #c4ff61; font-weight: bold;');
    console.log(`%c  - All-Time High: ${Math.max(...entries.map(e => e.scores.alpha)).toFixed(1)}`, 'color: #c4ff61;');
    console.log(`%c  - Starting Alpha: ${entries[entries.length - 1].scores.alpha.toFixed(1)}`, 'color: #c4ff61;');
    console.log(`%c  - Current Alpha: ${entries[0].scores.alpha.toFixed(1)}`, 'color: #c4ff61;');
  }

  // ============================================================
  // TAB NAVIGATION
  // ============================================================

  const TAB_STORAGE_KEY = 'fruithedge_active_tab';
  const VALID_SECTIONS = ['calculator', 'dashboard', 'playbooks'];

  // Intersection Observer for active tab highlighting
  let sectionObserver = null;

  function initNavigation() {
    console.log('[FruitHedge] initNavigation() starting...');
    const tabButtons = document.querySelectorAll('.tab-btn');

    if (tabButtons.length === 0) {
      console.warn('[FruitHedge] No tab buttons found, skipping navigation init');
      return;
    }

    // Add click handlers for smooth scroll
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = btn.dataset.tab;
        console.log('[FruitHedge] Tab button clicked, scrolling to:', sectionId);
        scrollToSection(sectionId);
      });
    });
    console.log('[FruitHedge] Tab click handlers attached');

    // Set up Intersection Observer for active tab highlighting
    setupScrollObserver();

    // Handle URL hash on load
    const hash = window.location.hash.slice(1);
    if (hash && VALID_SECTIONS.includes(hash)) {
      // Small delay to let page render first
      setTimeout(() => scrollToSection(hash), 100);
    }
  }

  function scrollToSection(sectionId) {
    const sectionMap = {
      'calculator': 'calculator-section',
      'dashboard': 'dashboard-section',
      'playbooks': 'playbooks-section'
    };

    const targetId = sectionMap[sectionId] || sectionId + '-section';
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      // Update URL hash
      history.replaceState(null, '', '#' + sectionId);

      // Update active tab
      updateActiveTab(sectionId);

      // Refresh content if needed
      if (sectionId === 'playbooks') {
        updatePlaybooksDisplay();
      }
      if (sectionId === 'dashboard') {
        updateDashboard();
      }
    }
  }

  function updateActiveTab(sectionId) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
      if (btn.dataset.tab === sectionId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function setupScrollObserver() {
    const sections = document.querySelectorAll('.page-section');

    if (sections.length === 0) {
      console.warn('[FruitHedge] No page sections found for observer');
      return;
    }

    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in middle-ish of viewport
      threshold: 0
    };

    sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Extract section name from ID (e.g., 'calculator-section' -> 'calculator')
          const sectionId = entry.target.id.replace('-section', '');
          console.log('[FruitHedge] Section in view:', sectionId);
          updateActiveTab(sectionId);

          // Update URL hash without scrolling
          if (window.location.hash.slice(1) !== sectionId) {
            history.replaceState(null, '', '#' + sectionId);
          }
        }
      });
    }, options);

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    console.log('[FruitHedge] Scroll observer set up for', sections.length, 'sections');
  }

  // Special function for CTA button - scrolls to calculator
  function beginAudit() {
    scrollToSection('calculator');
  }

  // ============================================================
  // INITIALIZATION
  // ============================================================

  function init() {
    console.log('[FruitHedge] init() starting...');
    // Load saved data
    loadFromStorage();

    // Load playbooks
    loadPlaybooksFromStorage();

    // Load habit engine data (streak, badges)
    loadHabitEngineFromStorage();

    // Apply theme
    setTheme(state.settings.theme);

    // Initialize event listeners
    initEventListeners();

    // Update history display
    updateHistoryDisplay();

    // Update playbooks display
    updatePlaybooksDisplay();

    // Update habit engine display
    updateHabitEngineDisplay();

    // Show return banner if needed
    showReturnBannerIfNeeded();

    // Update dashboard
    updateDashboard();

    // Check for URL params
    loadFromURL();

    // Initialize tab navigation
    console.log('[FruitHedge] About to call initNavigation()...');
    initNavigation();
    console.log('[FruitHedge] initNavigation() completed');

    // Initialize info modals
    console.log('[FruitHedge] About to call initInfoModals()...');
    initInfoModals();
    console.log('[FruitHedge] initInfoModals() completed');

    // Initialize help tooltips
    initHelpTooltips();
  }

  // ============================================================
  // INFO MODALS (How It Works, About)
  // ============================================================

  function initInfoModals() {
    // How It Works modal
    if (elements.headerHowItWorks) {
      elements.headerHowItWorks.addEventListener('click', () => {
        openInfoModal(elements.howItWorksModal);
      });
    }

    if (elements.howItWorksClose) {
      elements.howItWorksClose.addEventListener('click', () => {
        closeInfoModal(elements.howItWorksModal);
      });
    }

    if (elements.howItWorksGotIt) {
      elements.howItWorksGotIt.addEventListener('click', () => {
        closeInfoModal(elements.howItWorksModal);
      });
    }

    if (elements.howItWorksModal) {
      elements.howItWorksModal.addEventListener('click', (e) => {
        if (e.target === elements.howItWorksModal) {
          closeInfoModal(elements.howItWorksModal);
        }
      });
    }

    // About modal
    if (elements.headerAbout) {
      elements.headerAbout.addEventListener('click', () => {
        openInfoModal(elements.aboutModal);
      });
    }

    if (elements.aboutClose) {
      elements.aboutClose.addEventListener('click', () => {
        closeInfoModal(elements.aboutModal);
      });
    }

    if (elements.aboutModal) {
      elements.aboutModal.addEventListener('click', (e) => {
        if (e.target === elements.aboutModal) {
          closeInfoModal(elements.aboutModal);
        }
      });
    }

    // Privacy modal (header button)
    if (elements.headerPrivacy) {
      elements.headerPrivacy.addEventListener('click', () => {
        openInfoModal(elements.privacyModal);
      });
    }

    // Privacy modal (footer link)
    if (elements.privacyLink) {
      elements.privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        openInfoModal(elements.privacyModal);
      });
    }

    if (elements.privacyClose) {
      elements.privacyClose.addEventListener('click', () => {
        closeInfoModal(elements.privacyModal);
      });
    }

    if (elements.privacyGotIt) {
      elements.privacyGotIt.addEventListener('click', () => {
        closeInfoModal(elements.privacyModal);
      });
    }

    if (elements.privacyModal) {
      elements.privacyModal.addEventListener('click', (e) => {
        if (e.target === elements.privacyModal) {
          closeInfoModal(elements.privacyModal);
        }
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (elements.howItWorksModal && elements.howItWorksModal.classList.contains('active')) {
          closeInfoModal(elements.howItWorksModal);
        }
        if (elements.aboutModal && elements.aboutModal.classList.contains('active')) {
          closeInfoModal(elements.aboutModal);
        }
        if (elements.privacyModal && elements.privacyModal.classList.contains('active')) {
          closeInfoModal(elements.privacyModal);
        }
      }
    });
  }

  function openInfoModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeInfoModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    // Only restore scroll if no other modals are open
    const anyModalOpen =
      (elements.howItWorksModal && elements.howItWorksModal.classList.contains('active')) ||
      (elements.aboutModal && elements.aboutModal.classList.contains('active')) ||
      (elements.privacyModal && elements.privacyModal.classList.contains('active')) ||
      (elements.playbookModalOverlay && elements.playbookModalOverlay.classList.contains('active')) ||
      (elements.modalOverlay && elements.modalOverlay.classList.contains('active'));
    if (!anyModalOpen) {
      document.body.style.overflow = '';
    }
  }

  // ============================================================
  // CONTEXTUAL HELP TOOLTIPS
  // ============================================================

  function initHelpTooltips() {
    const triggers = document.querySelectorAll('.help-tooltip-trigger');

    triggers.forEach(trigger => {
      const tooltipId = trigger.dataset.tooltip;
      const tooltip = document.getElementById('tooltip-' + tooltipId);

      if (!tooltip) return;

      // Toggle on click
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Close all other tooltips first
        document.querySelectorAll('.help-tooltip.visible').forEach(t => {
          if (t !== tooltip) t.classList.remove('visible');
        });

        tooltip.classList.toggle('visible');
      });
    });

    // Close tooltips when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.help-tooltip-trigger') && !e.target.closest('.help-tooltip')) {
        document.querySelectorAll('.help-tooltip.visible').forEach(t => {
          t.classList.remove('visible');
        });
      }
    });

    // Close tooltips on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.help-tooltip.visible').forEach(t => {
          t.classList.remove('visible');
        });
      }
    });
  }

  // ============================================================
  // PUBLIC API (for inline onclick handlers)
  // ============================================================

  window.FruitHedge = {
    viewEntry,
    deleteEntry,
    viewPlaybook,
    deletePlaybook,
    scrollToSection,
    beginAudit
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
