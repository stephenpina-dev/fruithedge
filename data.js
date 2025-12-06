// ============================================================
// FRUITHEDGE DATA FILE v3.0
// All recommendations, wellness protocols, archetypes, questions
// ============================================================

// ============================================================
// RECOMMENDATIONS (48 total - Books + YouTube Videos + Amazon Films)
// ============================================================

const recommendations = [
  // === BOOKS (30) ===
  {
    id: 1,
    title: "The War of Art",
    creator: "Steven Pressfield",
    type: "book",
    link: "https://www.amazon.com/dp/1936891026",
    duration: "190 pages",
    patterns: ["low_aq", "low_ci", "paralyzed", "paralyzed_dreamer", "ember"],
    why: "\"Resistance\" is Pressfield's name for the force that keeps you from doing your work. If you're feeling burned out or blocked every time you sit down to create, this short kick-in-the-pants book will help you conquer procrastination and self-doubt."
  },
  {
    id: 2,
    title: "Deep Work",
    creator: "Cal Newport",
    type: "book",
    link: "https://www.amazon.com/dp/1455586692",
    duration: "304 pages",
    patterns: ["low_ci", "plateau", "grinder"],
    why: "You're grinding hard but scatter your energy on emails and social media. Newport shows you how to reclaim your focus and build periods of intense, undistracted creation into your routine."
  },
  {
    id: 3,
    title: "So Good They Can't Ignore You",
    creator: "Cal Newport",
    type: "book",
    link: "https://www.amazon.com/dp/1455509124",
    duration: "304 pages",
    patterns: ["underground_gem", "low_aq"],
    why: "If your work deeply touches people but you're struggling with freedom or finances, Newport's research-backed approach will guide you to focus on building rare skills that grant you more options and autonomy."
  },
  {
    id: 4,
    title: "Real Artists Don't Starve",
    creator: "Jeff Goins",
    type: "book",
    link: "https://www.amazon.com/dp/0718086260",
    duration: "240 pages",
    patterns: ["underground_gem", "low_aq"],
    why: "You've created something special and resonant, but the \"starving artist\" myth haunts you. Goins debunks that myth and offers practical strategies to turn your creative passions into a sustainable living."
  },
  {
    id: 5,
    title: "Keep Going",
    creator: "Austin Kleon",
    type: "book",
    link: "https://www.amazon.com/dp/0525537832",
    duration: "224 pages",
    patterns: ["burnout", "protect_magic", "plateau"],
    why: "Whether you're burned out, starting out, or wildly successful, this illustrated guide dishes out 10 simple, playful practices to help you maintain your creative spark."
  },
  {
    id: 6,
    title: "The Practice: Shipping Creative Work",
    creator: "Seth Godin",
    type: "book",
    link: "https://www.amazon.com/dp/0593328972",
    duration: "272 pages",
    patterns: ["paralyzed", "paralyzed_dreamer", "low_ci", "untapped", "ember", "grinder"],
    why: "If you have trouble finishing and sharing your work, whether from fear or perfectionism, The Practice will nudge you to start shipping your art regularly."
  },
  {
    id: 7,
    title: "Essentialism",
    creator: "Greg McKeown",
    type: "book",
    link: "https://www.amazon.com/dp/0804137382",
    duration: "272 pages",
    patterns: ["low_aq", "low_ci", "plateau"],
    why: "If your Autonomy score is low because you say \"yes\" to everything and feel stretched in a million directions, this book will teach you to set boundaries and simplify your commitments."
  },
  {
    id: 8,
    title: "Rest: Why You Get More Done When You Work Less",
    creator: "Alex Soojung-Kim Pang",
    type: "book",
    link: "https://www.amazon.com/dp/0465074871",
    duration: "352 pages",
    patterns: ["low_aq", "burnout", "low_ci"],
    why: "Counterintuitive but true: working ever harder isn't the answer when you're depleted. This book shows that deliberate rest is part of doing great work, not the opposite of it."
  },
  {
    id: 9,
    title: "Burnout: The Secret to Unlocking the Stress Cycle",
    creator: "Emily Nagoski & Amelia Nagoski",
    type: "book",
    link: "https://www.amazon.com/dp/1984818324",
    duration: "304 pages",
    patterns: ["burnout", "low_aq", "low_ri"],
    why: "If you've felt overwhelmed and exhausted by everything you have to do, yet still worried you weren't doing enough, this book will help you complete the stress cycle and regain energy."
  },
  {
    id: 10,
    title: "Flow: The Psychology of Optimal Experience",
    creator: "Mihaly Csikszentmihalyi",
    type: "book",
    link: "https://www.amazon.com/dp/0061339202",
    duration: "336 pages",
    patterns: ["low_ci", "plateau", "low_ri"],
    why: "If you've been feeling disengaged or distracted, this classic can help you redesign your work process to invite more flow. That magical state where time flies and you do your best work."
  },
  {
    id: 11,
    title: "Art & Fear",
    creator: "David Bayles & Ted Orland",
    type: "book",
    link: "https://www.amazon.com/dp/0961454733",
    duration: "122 pages",
    patterns: ["paralyzed", "paralyzed_dreamer", "low_ci", "low_ri"],
    why: "This slim, compassionate book explores the difficulties that cause so many artists to give up along the way. If you have plenty of freedom but find yourself not using it because you're scared, this is the gentle kick you need."
  },
  {
    id: 12,
    title: "The Dip",
    creator: "Seth Godin",
    type: "book",
    link: "https://www.amazon.com/dp/1591841666",
    duration: "80 pages",
    patterns: ["plateau", "comeback", "plateau_walker"],
    why: "Ever hit that monotonous middle of a project where progress stalls? This ultra-short read helps you identify whether you're in a Dip worth pushing through, or a cul-de-sac you should quit."
  },
  {
    id: 13,
    title: "Ego Is the Enemy",
    creator: "Ryan Holiday",
    type: "book",
    link: "https://www.amazon.com/dp/1591847818",
    duration: "256 pages",
    patterns: ["protect_magic", "high_aq", "high_ci"],
    why: "Sometimes the biggest threat to a creative career is your own ego. If you've been doing great and want to ensure you don't sabotage it, this book will inspire humility and continuous learning."
  },
  {
    id: 14,
    title: "Show Your Work!",
    creator: "Austin Kleon",
    type: "book",
    link: "https://www.amazon.com/dp/076117897X",
    duration: "224 pages",
    patterns: ["low_ri", "craftsperson_no_message", "low_aq", "monk", "connector"],
    why: "If you're putting out work that no one seems to notice, or holding back because you're shy, this book will nudge you into the light and show you how to build an audience by sharing your process."
  },
  {
    id: 15,
    title: "Big Magic",
    creator: "Elizabeth Gilbert",
    type: "book",
    link: "https://www.amazon.com/dp/1594634718",
    duration: "288 pages",
    patterns: ["paralyzed", "paralyzed_dreamer", "low_ci", "low_ri"],
    why: "Gilbert tackles the fear that often accompanies creativity (fear of rejection, of not being original) and gently dismantles it. You'll come away ready to live a creative life on your own terms."
  },
  {
    id: 16,
    title: "Bird by Bird",
    creator: "Anne Lamott",
    type: "book",
    link: "https://www.amazon.com/dp/0385480016",
    duration: "272 pages",
    patterns: ["paralyzed", "paralyzed_dreamer", "low_ci", "low_ri"],
    why: "Lamott hilariously eviscerates perfectionism and gives you permission to create something imperfect and honest. Which is better than nothing at all."
  },
  {
    id: 17,
    title: "The Big Leap",
    creator: "Gay Hendricks",
    type: "book",
    link: "https://www.amazon.com/dp/0061735361",
    duration: "224 pages",
    patterns: ["protect_magic", "high_aq", "plateau_walker"],
    why: "When you're thriving, often you unconsciously pull back or create drama. Hendricks calls this the 'Upper Limit Problem' and shows you how to break through self-imposed limits."
  },
  {
    id: 18,
    title: "The Artist's Way",
    creator: "Julia Cameron",
    type: "book",
    link: "https://www.amazon.com/dp/0143129252",
    duration: "222 pages",
    patterns: ["burnout", "low_ci", "low_aq", "paralyzed_dreamer"],
    why: "This legendary 12-week course in book form has unblocked millions of creatives. If you aren't creating at all due to perfectionism or fear, this is a nurturing, structured way to get moving again."
  },
  {
    id: 19,
    title: "Steal Like an Artist",
    creator: "Austin Kleon",
    type: "book",
    link: "https://www.amazon.com/dp/0761169253",
    duration: "160 pages",
    patterns: ["plateau", "untapped", "low_ri"],
    why: "This modern classic will free you from the myth of originality. By following your interests and learning from others, you'll inject more YOU into your art."
  },
  {
    id: 20,
    title: "Creative Confidence",
    creator: "Tom Kelley & David Kelley",
    type: "book",
    link: "https://www.amazon.com/dp/038534936X",
    duration: "304 pages",
    patterns: ["low_ri", "low_ci", "burnout"],
    why: "Written by the founders of IDEO, this book helps you rebuild your creative self-esteem and recover the fearless creativity you had as a child."
  },
  {
    id: 21,
    title: "Peak: Secrets from the New Science of Expertise",
    creator: "Anders Ericsson & Robert Pool",
    type: "book",
    link: "https://www.amazon.com/dp/0544456238",
    duration: "336 pages",
    patterns: ["craftsperson_no_message", "low_ri", "low_ci"],
    why: "Ever feel like you're putting in hours but not getting better? This book reveals how deliberate practice can break you out of plateaus. It's not about practicing more, but practicing better."
  },
  {
    id: 22,
    title: "Daily Rituals: How Artists Work",
    creator: "Mason Currey",
    type: "book",
    link: "https://www.amazon.com/dp/0307273601",
    duration: "304 pages",
    patterns: ["plateau", "low_ci"],
    why: "161 famous creatives' daily routines, from Kafka to Maya Angelou. You'll realize there's no one 'right' way, and struggling with balance and discipline is totally normal."
  },
  {
    id: 23,
    title: "Die Empty",
    creator: "Todd Henry",
    type: "book",
    link: "https://www.amazon.com/dp/1591846994",
    duration: "240 pages",
    patterns: ["protect_magic", "high_aq", "high_ci"],
    why: "Don't go to your grave with your best ideas still in you. If you have a nagging feeling you're capable of more, this book is the shove you need to make today the day."
  },
  {
    id: 24,
    title: "The Creative Act: A Way of Being",
    creator: "Rick Rubin",
    type: "book",
    link: "https://www.amazon.com/dp/0593652886",
    duration: "432 pages",
    patterns: ["protect_magic", "high_aq", "high_ri"],
    why: "Like sitting around a cosmic campfire with Rick Rubin. This spiritual guide to cultivating a creative state of mind will help you sustain your Creative Alpha by grounding it in something deeper than metrics."
  },
  {
    id: 25,
    title: "The Almanack of Naval Ravikant",
    creator: "Eric Jorgenson (compiling Naval Ravikant)",
    type: "book",
    link: "https://www.amazon.com/dp/1544514212",
    duration: "244 pages",
    patterns: ["low_aq", "underground_gem"],
    why: "Naval's philosophy on building wealth without selling your time is essential for any creative feeling financially trapped. His concept of 'specific knowledge' reframes how to monetize creativity without burnout."
  },
  {
    id: 26,
    title: "The Mamba Mentality",
    creator: "Kobe Bryant",
    type: "book",
    link: "https://www.amazon.com/dp/0374201234",
    duration: "208 pages",
    patterns: ["craftsperson_no_message", "low_ri", "hustler"],
    why: "Kobe's obsessive approach to mastery is both inspiring and cautionary. If your Craft Intensity is low because you lack structure or discipline, this is a blueprint for relentless improvement."
  },
  {
    id: 27,
    title: "Creativity, Inc.",
    creator: "Ed Catmull",
    type: "book",
    link: "https://www.amazon.com/dp/0812993012",
    duration: "368 pages",
    patterns: ["protect_magic", "high_ci"],
    why: "Ed Catmull built Pixar into the most consistently excellent creative studio in history. Essential reading for anyone who wants to sustain creative excellence over decades."
  },
  {
    id: 28,
    title: "Turning Pro",
    creator: "Steven Pressfield",
    type: "book",
    link: "https://www.amazon.com/dp/1936891034",
    duration: "146 pages",
    patterns: ["low_ci", "paralyzed", "comeback"],
    why: "The sequel to The War of Art focuses on what happens after you beat Resistance: you turn pro. If you're talented but inconsistent, this book will call you out and show you the path."
  },
  {
    id: 29,
    title: "Relentless",
    creator: "Tim Grover",
    type: "book",
    link: "https://www.amazon.com/dp/1476714207",
    duration: "256 pages",
    patterns: ["craftsperson_no_message", "low_ri", "hustler"],
    why: "Tim Grover trained Michael Jordan and Kobe Bryant. If your Craft Intensity is low because you're soft on yourself, this book will either wake you up or piss you off."
  },
  {
    id: 30,
    title: "Can't Hurt Me",
    creator: "David Goggins",
    type: "book",
    link: "https://www.amazon.com/dp/1544512287",
    duration: "364 pages",
    patterns: ["burnout", "low_aq"],
    why: "Goggins' message is brutal: you're probably operating at 40% of your capacity. If you've been coddling yourself and you know it, this will shatter your comfort zone."
  },

  // === YOUTUBE VIDEOS (16) ===
  {
    id: 31,
    title: "Make Good Art",
    creator: "Neil Gaiman",
    type: "video",
    link: "https://www.youtube.com/watch?v=ikAb-NYkseI",
    duration: "19 min",
    patterns: ["burnout", "low_aq"],
    why: "The ultimate creative pep talk for hard times. Gaiman's refrain, 'Make good art,' lands like a gentle command from the universe: no matter what happens, use it as fuel."
  },
  {
    id: 32,
    title: "The Gap",
    creator: "Ira Glass",
    type: "video",
    link: "https://www.youtube.com/watch?v=91FQKciKfHI",
    duration: "2 min",
    patterns: ["low_ri", "low_ci", "comeback"],
    why: "Only a couple minutes long, but life-changing. Ira Glass explains why your output doesn't yet live up to your taste. The only way to close the gap is to keep creating."
  },
  {
    id: 33,
    title: "Naval Ravikant on How to Get Rich",
    creator: "Naval Ravikant",
    type: "video",
    link: "https://www.youtube.com/watch?v=1-TZqOsVCNM",
    duration: "2 hr 17 min",
    patterns: ["low_aq", "underground_gem"],
    why: "Naval explains leverage, equity, and why 'productizing yourself' is the path to freedom. Essential for any creative who wants their art to fund their life, not consume it."
  },
  {
    id: 34,
    title: "Jerry Seinfeld on How to Write a Joke",
    creator: "Tim Ferriss Show",
    type: "video",
    link: "https://www.youtube.com/watch?v=yNTmFORn3xQ",
    duration: "1 hr 30 min",
    patterns: ["craftsperson_no_message", "low_ri", "low_ci"],
    why: "Seinfeld's approach to comedy writing is surgical. If your work feels sloppy or you lack a consistent creative process, Jerry's discipline is a masterclass."
  },
  {
    id: 35,
    title: "Dave Chappelle on Walking Away from $50 Million",
    creator: "Inside the Actors Studio",
    type: "video",
    link: "https://www.youtube.com/watch?v=hzlvDV3mpZw",
    duration: "45 min",
    patterns: ["protect_magic", "high_ri"],
    why: "Chappelle walked away from the biggest deal in comedy history because it was toxic to his creativity. A masterclass in protecting your artistic soul when the industry wants to own it."
  },
  {
    id: 36,
    title: "John Cleese on Creativity in Management",
    creator: "John Cleese",
    type: "video",
    link: "https://www.youtube.com/watch?v=Pb5oIIPO62g",
    duration: "36 min",
    patterns: ["burnout", "low_aq"],
    why: "Cleese explains 'open mode' (playful, creative) vs 'closed mode' (anxious, executive). If you can't seem to access flow, this framework gives you practical methods."
  },
  {
    id: 37,
    title: "Pharrell Williams on Creativity and Collaboration",
    creator: "Various",
    type: "video",
    link: "https://www.youtube.com/watch?v=GhCXAiNz9Jo",
    duration: "20 min",
    patterns: ["craftsperson_no_message", "low_ri"],
    why: "Pharrell's approach is pure feeling over formula. If your work is technically proficient but doesn't move people, his philosophy might unlock what's missing."
  },
  {
    id: 38,
    title: "Tyler, the Creator on Finding Your Voice",
    creator: "Tyler, the Creator",
    type: "video",
    link: "https://www.youtube.com/watch?v=DVuYSWp5ISO",
    duration: "15 min",
    patterns: ["underground_gem", "low_aq", "low_ri"],
    why: "Tyler went from banned provocateur to Grammy winner without compromising his weirdness. Proof that radical authenticity finds its audience."
  },
  {
    id: 39,
    title: "David Lynch on Creativity and Meditation",
    creator: "David Lynch",
    type: "video",
    link: "https://www.youtube.com/watch?v=KVwVR_0F5eg",
    duration: "20 min",
    patterns: ["burnout", "low_aq"],
    why: "Lynch credits Transcendental Meditation with everything in his creative life. If your mental space is cluttered or you can't access deep creative states, his calm conviction might inspire you."
  },
  {
    id: 40,
    title: "Quincy Jones: The Big Interview",
    creator: "Various",
    type: "video",
    link: "https://www.youtube.com/watch?v=bh8R9bRz50c",
    duration: "45 min",
    patterns: ["protect_magic", "high_ci"],
    why: "70 years of wisdom from someone who worked with Sinatra to Michael Jackson. If you want perspective on building a career that lasts decades, Quincy's insights are irreplaceable."
  },
  {
    id: 41,
    title: "How Billie Eilish Creates Music",
    creator: "Billie Eilish & Finneas",
    type: "video",
    link: "https://www.youtube.com/watch?v=kpxBGJBOQSE",
    duration: "15 min",
    patterns: ["low_ri", "low_aq"],
    why: "They made a Grammy-winning album in a bedroom. If your Autonomy is low because you think you need more resources, watch this. Constraints breed creativity."
  },
  {
    id: 42,
    title: "Hayao Miyazaki on Creative Exhaustion",
    creator: "Studio Ghibli",
    type: "video",
    link: "https://www.youtube.com/watch?v=tqVqU3RGBqg",
    duration: "20 min",
    patterns: ["burnout", "low_aq"],
    why: "Miyazaki pours his entire soul into every frame, then collapses from exhaustion. Beautiful and terrifying. A powerful mirror for anyone who takes their craft seriously."
  },
  {
    id: 43,
    title: "Virgil Abloh's Last Lecture",
    creator: "Virgil Abloh",
    type: "video",
    link: "https://www.youtube.com/watch?v=biFlrzTJets",
    duration: "1 hr 30 min",
    patterns: ["untapped", "low_ri"],
    why: "Virgil's '3% rule' and frameworks for sampling and remixing are essential for any creative feeling stuck or derivative. How to honor influences while creating something undeniably yours."
  },
  {
    id: 44,
    title: "Ira Glass on Storytelling (Full 4-Part Series)",
    creator: "Ira Glass",
    type: "video",
    link: "https://www.youtube.com/watch?v=5pFI9UuC_fc",
    duration: "20 min",
    patterns: ["low_ri", "low_ci"],
    why: "The two building blocks of storytelling: the anecdote and the moment of reflection. Simple framework, profound impact. Required viewing for anyone who communicates through narrative."
  },
  {
    id: 45,
    title: "Nipsey Hussle on Marathon Mentality",
    creator: "Nipsey Hussle",
    type: "video",
    link: "https://www.youtube.com/watch?v=7_7Rd9urT0Y",
    duration: "25 min",
    patterns: ["low_aq", "underground_gem", "hustler"],
    why: "Nipsey spent a decade grinding independently before mainstream success. If you're impatient, his philosophy, 'the marathon continues,' is a reminder that sustainable success is built brick by brick."
  },
  {
    id: 46,
    title: "Rick Rubin's 60 Minutes Interview",
    creator: "Rick Rubin / CBS",
    type: "video",
    link: "https://www.youtube.com/watch?v=sE1teB5bN-w",
    duration: "13 min",
    patterns: ["protect_magic", "high_aq", "high_ri"],
    why: "Rubin emphasizes intuition, listening, and getting out of the way of the art. If you're doing great but fear overthinking might ruin it, this will remind you to trust the process."
  },

  // === AMAZON FILMS (2) ===
  {
    id: 47,
    title: "Exit Through the Gift Shop",
    creator: "Banksy",
    type: "documentary",
    link: "https://www.amazon.com/Exit-Through-Gift-Shop-Banksy/dp/B004C04P9E",
    duration: "1 hr 27 min",
    patterns: ["untapped", "low_ri"],
    why: "A wild cautionary tale about art and authenticity. If your Resonance is low because you've been focusing on style over substance, this film will hit you in the gut."
  },
];

// ============================================================
// WELLNESS PROTOCOLS (45 total)
// ============================================================

const protocols = [
  // === PHYSICAL / ENERGY (10) ===
  {
    id: 1,
    name: "Morning Walk",
    category: "physical",
    prescription: "15-minute walk within 1 hour of waking. No phone.",
    why: "Movement clears mental fog and builds energy before demands hit.",
    patterns: ["low_aq", "low_energy", "burnout"]
  },
  {
    id: 2,
    name: "Step Tracking",
    category: "physical",
    prescription: "Aim for 7,000 steps daily. Track it.",
    why: "What gets measured gets managed. Movement compounds into energy.",
    patterns: ["low_aq", "low_ci", "plateau"]
  },
  {
    id: 3,
    name: "Lemon Water",
    category: "physical",
    prescription: "Warm water with half a lemon, first thing.",
    why: "Hydration + vitamin C before caffeine. Your liver will thank you.",
    patterns: ["low_aq", "burnout"]
  },
  {
    id: 4,
    name: "Sleep by 11",
    category: "physical",
    prescription: "Non-negotiable lights-out by 11pm.",
    why: "Every hour before midnight is worth two after. Protect your sleep.",
    patterns: ["low_aq", "low_ci", "burnout"]
  },
  {
    id: 5,
    name: "No Screens After 9pm",
    category: "physical",
    prescription: "All screens off by 9pm. Read, stretch, or talk.",
    why: "Blue light kills melatonin. Your sleep quality affects tomorrow's creativity.",
    patterns: ["low_aq", "low_ci"]
  },
  {
    id: 6,
    name: "Cold Shower Finish",
    category: "physical",
    prescription: "Last 30 seconds of shower on cold.",
    why: "Builds stress tolerance. If you can handle this, you can handle creative discomfort.",
    patterns: ["low_ci", "paralyzed"]
  },
  {
    id: 7,
    name: "Stretch for 5",
    category: "physical",
    prescription: "5 minutes of stretching before deep work.",
    why: "Body tension becomes mental tension. Release it first.",
    patterns: ["low_ci", "low_aq"]
  },
  {
    id: 8,
    name: "Hydration Check",
    category: "physical",
    prescription: "8 glasses of water minimum. Track it.",
    why: "Dehydration causes brain fog. Most creatives are chronically dehydrated.",
    patterns: ["low_ci", "low_aq", "plateau"]
  },
  {
    id: 9,
    name: "Sunlight in Eyes",
    category: "physical",
    prescription: "10 minutes of outdoor light within 1 hour of waking.",
    why: "Sets your circadian rhythm. Energy begets energy.",
    patterns: ["low_aq", "burnout"]
  },
  {
    id: 10,
    name: "Movement Snack",
    category: "physical",
    prescription: "2 minutes of movement every hour. Set a timer.",
    why: "Sitting is the new smoking. Brief movement resets focus.",
    patterns: ["low_ci", "plateau"]
  },

  // === MENTAL SPACE (10) ===
  {
    id: 11,
    name: "Brain Dump",
    category: "mental",
    prescription: "Write everything in your head onto paper. Empty the RAM.",
    why: "Your mind is for having ideas, not holding them. Get them out.",
    patterns: ["low_aq", "low_space"]
  },
  {
    id: 12,
    name: "One Task Tomorrow",
    category: "mental",
    prescription: "Before bed, write the ONE thing for tomorrow.",
    why: "Decision fatigue kills mornings. Decide tonight.",
    patterns: ["low_ci", "low_aq"]
  },
  {
    id: 13,
    name: "2-Minute Meditation",
    category: "mental",
    prescription: "Not 20 minutes. Just 2. Breathe.",
    why: "The best meditation is the one you'll actually do.",
    patterns: ["low_aq", "low_space", "burnout"]
  },
  {
    id: 14,
    name: "No Phone First Hour",
    category: "mental",
    prescription: "Wake up, don't check anything for 60 minutes.",
    why: "Your morning sets your day. Don't give it to other people's priorities.",
    patterns: ["low_aq", "low_ci"]
  },
  {
    id: 15,
    name: "Weekly Review",
    category: "mental",
    prescription: "30 minutes Sunday to review the week and plan the next.",
    why: "Reflection is how you compound learning. Don't skip it.",
    patterns: ["plateau", "low_ci"]
  },
  {
    id: 16,
    name: "Gratitude Note",
    category: "mental",
    prescription: "Write one thing you're grateful for. Daily.",
    why: "Gratitude shifts focus from scarcity to abundance. Creativity follows.",
    patterns: ["low_aq", "burnout", "low_ri"]
  },
  {
    id: 17,
    name: "Inbox Zero Session",
    category: "mental",
    prescription: "30 minutes to clear email completely. Then close it.",
    why: "Email is other people's to-do list. Process it, then protect your time.",
    patterns: ["low_aq", "low_ci"]
  },
  {
    id: 18,
    name: "Unsubscribe Purge",
    category: "mental",
    prescription: "Unsubscribe from 10 emails today.",
    why: "Every unnecessary input is a decision drain. Reduce the noise.",
    patterns: ["low_aq", "low_space"]
  },
  {
    id: 19,
    name: "App Delete",
    category: "mental",
    prescription: "Remove one time-wasting app from your phone.",
    why: "The app will survive without you. Will your creativity survive with it?",
    patterns: ["low_ci", "plateau"]
  },
  {
    id: 20,
    name: "Notification Audit",
    category: "mental",
    prescription: "Turn off all non-essential notifications.",
    why: "Every buzz is a broken thought. Protect your attention.",
    patterns: ["low_ci", "low_aq"]
  },

  // === CREATIVE PRACTICE (10) ===
  {
    id: 21,
    name: "15 Minutes of Play",
    category: "creative",
    prescription: "Create something with zero stakes. No publishing.",
    why: "Play is where creativity lives. No pressure, no performance.",
    patterns: ["low_ri", "low_ci", "paralyzed"]
  },
  {
    id: 22,
    name: "Consume Intentionally",
    category: "creative",
    prescription: "Watch/read ONE thing fully. No multitasking.",
    why: "Fragmented consumption creates fragmented output. Go deep.",
    patterns: ["low_ri", "plateau"]
  },
  {
    id: 23,
    name: "Copy Work",
    category: "creative",
    prescription: "Hand-copy a piece of writing or art you admire.",
    why: "Copying teaches what reading can't. Feel how the masters work.",
    patterns: ["low_ci", "plateau", "low_ri"]
  },
  {
    id: 24,
    name: "Analog Hour",
    category: "creative",
    prescription: "One hour of creative work with no digital tools.",
    why: "Screens enable, but they also distract. Try creating without them.",
    patterns: ["low_ci", "paralyzed"]
  },
  {
    id: 25,
    name: "Ship Something Small",
    category: "creative",
    prescription: "Publish one tiny thing this week. Imperfect is fine.",
    why: "Shipping is a muscle. Train it with small reps.",
    patterns: ["low_ci", "paralyzed", "low_ri"]
  },
  {
    id: 26,
    name: "Call a Creative Friend",
    category: "creative",
    prescription: "15-minute voice call with another creative. Not text.",
    why: "Isolation breeds stagnation. Connection breeds ideas.",
    patterns: ["low_ri", "burnout", "plateau"]
  },
  {
    id: 27,
    name: "Visit a Museum or Park",
    category: "creative",
    prescription: "Change your visual input. Go somewhere that feeds you.",
    why: "You can't pour from an empty cup. Fill it with beauty.",
    patterns: ["low_ri", "burnout", "plateau"]
  },
  {
    id: 28,
    name: "Read 20 Pages",
    category: "creative",
    prescription: "Physical book. No Kindle. 20 pages minimum.",
    why: "Books are concentrated thought. Absorb someone else's perspective.",
    patterns: ["low_ri", "plateau", "low_ci"]
  },
  {
    id: 29,
    name: "Learn One New Thing",
    category: "creative",
    prescription: "Watch a tutorial on a skill adjacent to yours.",
    why: "Cross-pollination is where innovation lives.",
    patterns: ["plateau", "low_ci"]
  },
  {
    id: 30,
    name: "Document Your Process",
    category: "creative",
    prescription: "Take photos or notes of your work-in-progress.",
    why: "Documentation forces reflection. Share it or keep it, but capture it.",
    patterns: ["low_ri", "plateau"]
  },

  // === CONSTRAINT REDUCTION (10) ===
  {
    id: 31,
    name: "Say No Once",
    category: "constraint",
    prescription: "Decline one request this week.",
    why: "Every yes is a no to something else. Protect your creative time.",
    patterns: ["low_aq", "high_constraint"]
  },
  {
    id: 32,
    name: "Cancel One Thing",
    category: "constraint",
    prescription: "Remove one commitment from your calendar.",
    why: "Subtraction creates space. What can you eliminate?",
    patterns: ["low_aq", "burnout"]
  },
  {
    id: 33,
    name: "Automate One Task",
    category: "constraint",
    prescription: "Bill pay, email filter, recurring order. Anything.",
    why: "Every automated task is a freed decision. Compound the savings.",
    patterns: ["low_aq", "low_ci"]
  },
  {
    id: 34,
    name: "Delegate One Task",
    category: "constraint",
    prescription: "Pay someone to do something you hate.",
    why: "Your time has value. Spend it on what only you can do.",
    patterns: ["low_aq", "hustler"]
  },
  {
    id: 35,
    name: "Batch Your Admin",
    category: "constraint",
    prescription: "All emails/calls in one 2-hour block. Not scattered.",
    why: "Context switching kills creativity. Batch the boring stuff.",
    patterns: ["low_ci", "low_aq"]
  },
  {
    id: 36,
    name: "Set Office Hours",
    category: "constraint",
    prescription: "Tell people when you're available. Stick to it.",
    why: "Availability on demand kills deep work. Set boundaries.",
    patterns: ["low_aq", "low_ci"]
  },
  {
    id: 37,
    name: "Financial Check",
    category: "constraint",
    prescription: "15 minutes reviewing your money situation.",
    why: "Financial anxiety drains creative energy. Face it to free yourself.",
    patterns: ["low_aq", "underground_gem"]
  },
  {
    id: 38,
    name: "Eliminate One Subscription",
    category: "constraint",
    prescription: "Cancel something you don't use.",
    why: "Subscriptions are tiny energy leaks. Plug them.",
    patterns: ["low_aq", "plateau"]
  },
  {
    id: 39,
    name: "Clean One Space",
    category: "constraint",
    prescription: "Desk, room, or digital folder. Just one.",
    why: "External order creates internal clarity.",
    patterns: ["low_aq", "low_space", "low_ci"]
  },
  {
    id: 40,
    name: "Set a Boundary",
    category: "constraint",
    prescription: "Tell someone what you need from them.",
    why: "Unspoken needs become resentment. Speak up.",
    patterns: ["low_aq", "burnout"]
  },

  // === FRUIT PROTOCOLS (5) ===
  {
    id: 41,
    name: "Apple Baseline",
    category: "fruit",
    prescription: "Eat an apple. Sometimes the answer is simple.",
    why: "Before optimizing, try the basics. Nutrition affects cognition.",
    patterns: ["all"]
  },
  {
    id: 42,
    name: "Banana Before Flow",
    category: "fruit",
    prescription: "Eat a banana before deep work session.",
    why: "Potassium for focus. Quick energy without the crash.",
    patterns: ["low_ci"]
  },
  {
    id: 43,
    name: "Citrus Morning",
    category: "fruit",
    prescription: "Orange or grapefruit with breakfast.",
    why: "Vitamin C, hydration, and a sensory wake-up call.",
    patterns: ["low_aq", "burnout"]
  },
  {
    id: 44,
    name: "Berry Snack",
    category: "fruit",
    prescription: "Handful of blueberries in the afternoon.",
    why: "Brain food. Antioxidants for cognitive function.",
    patterns: ["low_ci", "plateau"]
  },
  {
    id: 45,
    name: "Melon Hydration",
    category: "fruit",
    prescription: "Watermelon when you've been grinding.",
    why: "92% water. When you're too busy to drink, eat your hydration.",
    patterns: ["hustler", "burnout"]
  }
];

// ============================================================
// ARCHETYPES (19 total) - Ordered from MOST SPECIFIC to LEAST SPECIFIC
// First match wins, so order matters!
// ============================================================

const archetypes = [
  // === TIER 1: Crisis states ===
  {
    id: "burnout",
    name: "The Burnout",
    subtitle: "System Failure",
    check: (s) => s.aq < 3 && s.ri < 3 && s.ci < 3,
    profile: "Everything is failing simultaneously. You're depleted, disconnected, and not producing meaningful work. This isn't a productivity problem. It's a crisis.",
    insight: "Stop everything. Recovery is the only priority. No new projects, no commitments, no optimization. Rest, then rebuild one law at a time."
  },

  // === TIER 2: Specific imbalance patterns ===
  {
    id: "chaos",
    name: "The Chaos Creator",
    subtitle: "Thriving in Instability",
    check: (s) => s.aq < 4 && s.ci >= 5 && s.ri >= 5,
    profile: "You create BECAUSE of chaos, not despite it. Need pressure, constraints, urgency. Your best work comes from crisis. Sustainable? Questionable.",
    insight: "Find controlled chaos. Manufactured deadlines, artificial constraints. You can generate urgency from discipline instead of waiting for desperation."
  },
  {
    id: "hustler",
    name: "The Hustler",
    subtitle: "Grinding Without Freedom",
    check: (s) => s.aq < 4 && s.ci >= 6,
    profile: "High output, low autonomy. You're producing constantly but feel trapped by clients, money, obligations, or your own standards. The work is happening, but at what cost?",
    insight: "Your intensity is your asset and your trap. The next move isn't more output. It's strategic reduction. What one constraint could you eliminate this month?"
  },
  {
    id: "underground_gem",
    name: "The Underground Gem",
    subtitle: "Resonance Without Freedom",
    check: (s) => s.ri >= 6 && s.aq < 4,
    profile: "Your work deeply connects with people, but you're strangled by constraints. Financial pressure, obligations, or external demands prevent you from fully capitalizing on your resonance.",
    insight: "You have proof your work matters. Now monetize that proof. Study leverage, build systems, or find partners who can convert your resonance into autonomy."
  },
  {
    id: "algorithm_slave",
    name: "The Algorithm Slave",
    subtitle: "Output Without Meaning",
    check: (s) => s.ci >= 6 && s.ri < 2.5,
    profile: "You know how to produce. Prolific, consistent, technically competent. But you're optimizing for metrics at the expense of soul. High output, low impact.",
    insight: "Create one thing this month that will TANK algorithmically but make you proud in 10 years. The anti-viral piece. Find what you're avoiding saying."
  },
  {
    id: "paralyzed_dreamer",
    name: "The Paralyzed Dreamer",
    subtitle: "Freedom Without Action",
    check: (s) => s.aq >= 6 && s.ci < 3,
    profile: "You have the freedom to create (time, resources, optionality) but you're not using it. Perfectionism, fear, or endless preparation keeps you from actually shipping work.",
    insight: "Freedom without output is just comfortable stagnation. Start with the smallest possible action. Ship something embarrassingly small. Motion creates clarity."
  },
  {
    id: "craftsperson",
    name: "The Craftsperson",
    subtitle: "Skill Without Message",
    check: (s) => s.ci >= 7 && s.ri < 5 && s.aq >= 4,
    profile: "Technical mastery is evident. You can execute at a high level. But the work lacks distinctive voice, emotional depth, or clear perspective. Competent, not compelling.",
    insight: "What would you make if no one was watching? The skills are there. Now add the vulnerability. Your next evolution is personal, not technical."
  },
  {
    id: "tribe_builder",
    name: "The Tribe Builder",
    subtitle: "Deep Connection, Narrow Reach",
    check: (s) => s.ri >= 7 && s.ci >= 4 && s.aq >= 4 && !(s.aq >= 7 && s.ci >= 7) && s.alpha < 8,
    profile: "Your audience would follow you anywhere. Deep loyalty, strong identity fit, genuine impact. You've solved for resonance. Now the question is scale without dilution.",
    insight: "Protect what made them love you in the first place. Scale slowly. Every expansion should deepen the core, not water it down."
  },
  {
    id: "free_agent",
    name: "The Free Agent",
    subtitle: "Options Without Direction",
    check: (s) => s.aq >= 7 && s.ri < 6 && s.ci >= 3 && s.ci < 6,
    profile: "Maximum optionality, moderate output and impact. You could do anything, so you're not fully committing to something. Freedom is your asset and your excuse.",
    insight: "Optionality without commitment is just expensive indecision. Pick a direction, go deep for 6 months, evaluate. You can always pivot, but first, commit."
  },

  // === TIER 3: New archetypes ===
  {
    id: "monk",
    name: "The Monk",
    subtitle: "Mastery in Solitude",
    check: (s) => s.ri < 4 && ((s.aq >= 5 && s.ci >= 5) || (s.aq >= 6) || (s.ci >= 6)),
    profile: "You have freedom. You're doing the work. But nobody knows. Whether by choice or neglect, your craft lives in isolation. The world isn't seeing what you're building.",
    insight: "At some point, invisible mastery becomes self-indulgent. You don't need to become a performer — but someone needs to see this. Who specifically would benefit from your work? Tell them it exists."
  },
  {
    id: "grinder",
    name: "The Grinder",
    subtitle: "Effort Without Leverage",
    check: (s) => s.ci >= 5 && s.aq < 5 && s.ri < 5,
    profile: "You're putting in the hours. The work is happening. But it's not translating to freedom or impact. You're on a treadmill — running hard, going nowhere. Effort alone isn't the answer.",
    insight: "Before doing more, ask: what would create leverage? One piece that compounds beats a hundred that disappear. Find the 10% of your work that could carry the other 90%."
  },
  {
    id: "comeback",
    name: "The Comeback Arc",
    subtitle: "Rising From the Ashes",
    check: (s) => s.aq >= 5 && s.ri >= 5 && s.ci >= 2 && s.ci < 5,
    profile: "You had a moment, then disappeared. Now returning with more wisdom, clearer vision, and the freedom to create on your terms. The second act is forming.",
    insight: "Your superpower is perspective earned through failure. The comeback doesn't need to be bigger, just truer. Create from clarity, not desperation."
  },
  {
    id: "connector",
    name: "The Connector",
    subtitle: "Relationships Over Output",
    check: (s) => s.ri >= 5 && s.ri > s.aq && s.ri > s.ci && s.aq >= 4 && s.ci >= 4,
    profile: "Your superpower is connection. People respond to you. Your work resonates more than your output volume suggests. But you're not fully free, and your consistency is shaky.",
    insight: "Stop trying to out-produce people. Your edge is trust. Build one thing your audience actually asked for. Ship it. Then ask them what's next. Co-creation beats solo grinding."
  },
  {
    id: "ember",
    name: "The Ember",
    subtitle: "Potential Awaiting Fuel",
    check: (s) => s.aq >= 4 && s.aq <= 6 && s.ri >= 4 && s.ri < 6 && s.ci >= 3 && s.ci < 5 && (s.aq >= 5 || s.ri >= 5),
    profile: "The foundation is there. Decent freedom, some resonance, but you're not fully lit. You're an ember — warm, capable of fire, but not yet burning. Something's holding you back from going all-in.",
    insight: "You're one bold decision away from ignition. Not more planning. Not more preparation. One commitment. What would you do this month if you knew you couldn't fail?"
  },
  {
    id: "plateau_walker",
    name: "The Plateau Walker",
    subtitle: "Comfortable But Not Growing",
    check: (s) => s.aq >= 4 && s.aq < 6 && s.ri >= 4 && s.ri < 6 && s.ci >= 5 && s.ci < 6 && !(s.ri > s.aq && s.ri > s.ci),
    profile: "Nothing is broken. You're functional across the board. But nothing is exceptional either. You've reached a plateau — sustainable, comfortable, and quietly stagnant.",
    insight: "Plateaus feel safe because they are. Growth requires destabilization. Pick ONE law to push to 7+ this quarter. Let the others hold steady. Comfort is the enemy of your next level."
  },

  // === TIER 4: Balanced/positive states ===
  {
    id: "legacy",
    name: "The Legacy Builder",
    subtitle: "Generational Impact",
    check: (s) => s.alpha >= 8,
    profile: "You've transcended personal success. Creating not for validation or money, but because you're the only one who can make THIS thing. Work that will outlast you.",
    insight: "Document everything. Teach. Build systems that can carry your vision forward. Your creativity is a public good now."
  },
  {
    id: "thriving",
    name: "The Thriving Creator",
    subtitle: "All Systems Healthy",
    check: (s) => s.aq >= 7 && s.ri >= 7 && s.ci >= 7,
    profile: "Freedom, resonance, and craft intensity all aligned. This is rare. You're in the compounding phase where creative returns build on themselves.",
    insight: "Your job is protection, not expansion. Say no more than yes. Guard your time, your energy, and the conditions that created this state."
  },
  {
    id: "professional",
    name: "The Professional",
    subtitle: "Consistent Across All Fronts",
    check: (s) => s.aq >= 5 && s.aq <= 7.5 && s.ri >= 5 && s.ri <= 7.5 && s.ci >= 5 && s.ci <= 7.5,
    profile: "Solid across the board. No critical weaknesses, no exceptional strengths. Sustainable, competent, making a living. The question is whether you're satisfied here.",
    insight: "You're in the 'good enough' zone. To break through, you'll need to temporarily destabilize. Push one law to exceptional while maintaining the others."
  },

  // === TIER 5: Fallback ===
  {
    id: "explorer",
    name: "The Explorer",
    subtitle: "In Transition",
    check: (s) => true,
    profile: "Your scores are mixed. You're experimenting, learning, finding your way. Some things work, others don't. You haven't settled into a pattern yet.",
    insight: "Track what energizes versus drains you. The Explorer becomes The Professional when you start saying no to experiments that don't serve you."
  }
];

// ============================================================
// REFLECTION QUESTIONS
// ============================================================

const reflectionQuestions = {
  energy: {
    low: "You're running on fumes. What's draining you most?",
    mid: "Functional but not thriving. Where does energy leak?",
    high: "Strong reserves. How do you protect this?"
  },
  space: {
    low: "Your mind is full. What thought keeps intruding?",
    mid: "Some clarity, some noise. What creates peace?",
    high: "Clear head. What practices maintain this?"
  },
  optionality: {
    low: "Feeling trapped. What door could you open?",
    mid: "Some options. Which unused option matters most?",
    high: "Many paths available. Are you using this freedom?"
  },
  constraint: {
    low: "Light obligations. Protect this fiercely.",
    mid: "Moderate load. What's non-essential?",
    high: "Heavy constraints. What must change first?"
  },
  impact: {
    low: "Forgettable work. When did you last move someone?",
    mid: "Some impact. What made your best work hit?",
    high: "Deep resonance. How do you maintain authenticity at scale?"
  },
  identity: {
    low: "Generic appeal. Who specifically needs YOUR work?",
    mid: "Some specificity. Could you niche down further?",
    high: "Perfect fit. Your audience feels seen."
  },
  boldness: {
    low: "Playing safe. What would you make if no one judged?",
    mid: "Some risks. What's the scary project you're avoiding?",
    high: "Fearless. Remember why you started taking risks."
  },
  audience: {
    small: "Intimate audience. Depth over breadth.",
    medium: "Growing reach. Maintain connection as you scale.",
    large: "Mass audience. How do you stay personal at scale?"
  },
  flow: {
    low: "Minimal flow. What interrupts you most?",
    mid: "Decent focus. Could you protect 2 more hours?",
    high: "Deep immersion. Are you also resting?"
  },
  evolution: {
    low: "Stagnant. What skill would change everything?",
    mid: "Growing. Where's your next edge?",
    high: "Rapid evolution. Document what's working."
  },
  risk: {
    low: "Too safe. What experiment could you run?",
    mid: "Some experimentation. Push one boundary this week.",
    high: "Bold moves. Balance risk with completion."
  },
  admin: {
    low: "Lean operations. Keep it this way.",
    mid: "Moderate admin. What could you automate?",
    high: "Drowning in logistics. Hire help or cut scope."
  },
  distraction: {
    low: "Focused. What boundaries protect this?",
    mid: "Some leakage. Check your screen time report.",
    high: "Major distraction problem. Your phone is the enemy."
  },
  stagnation: {
    low: "Shipping regularly. Momentum is your friend.",
    mid: "Some paralysis. What's blocking the current project?",
    high: "Frozen. Start with the smallest possible action."
  }
};

// ============================================================
// SCORE INTERPRETATIONS
// ============================================================

const scoreInterpretations = {
  critical: { min: 0, max: 1.9, label: "Critical", color: "#ff6b6b", description: "Emergency. Address immediately." },
  struggling: { min: 2, max: 3.9, label: "Struggling", color: "#ff9b71", description: "Significant intervention needed." },
  functional: { min: 4, max: 5.9, label: "Functional", color: "#ffd93d", description: "Working, but with friction." },
  healthy: { min: 6, max: 7.9, label: "Healthy", color: "#6bcf7f", description: "Sustainable. Room for growth." },
  excellent: { min: 8, max: 10, label: "Excellent", color: "#c4ff61", description: "Rare and precious. Protect this." }
};

// ============================================================
// TYPE ICONS (for display)
// ============================================================

const typeIcons = {
  book: "📚",
  video: "🎬",
  podcast: "🎧",
  ted: "🎤",
  essay: "📝",
  documentary: "🎞️",
  film: "🎬"
};

// ============================================================
// LABS TIPS - Science-backed micro-interventions ONLY
// These are quirky, research-based quick hacks - NOT strategic advice
// ============================================================

const labsTips = [
  // ENERGY - Science hacks
  { id: 1, tip: "Watch 2 minutes of salsa dancing. Mirror neurons activate energy without you moving a muscle.", trigger: "low_energy", category: "energy" },
  { id: 2, tip: "Splash cold water on your face. Triggers the mammalian dive reflex for instant alertness.", trigger: "low_energy", category: "energy" },
  { id: 3, tip: "Smell a lemon. Citrus scent increases norepinephrine by 30%. Your brain thinks it's morning.", trigger: "low_energy", category: "energy" },
  { id: 4, tip: "Stand up and shake your hands vigorously for 10 seconds. Resets your nervous system.", trigger: "low_energy", category: "energy" },
  { id: 5, tip: "Look at photos of vast landscapes. Studies show 'awe' images restore mental energy faster than rest.", trigger: "low_energy", category: "energy" },
  { id: 6, tip: "Do 10 jumping jacks. Increases blood flow to brain by 15% for the next hour.", trigger: "low_energy", category: "energy" },
  { id: 7, tip: "Expose yourself to bright light for 5 minutes. Suppresses melatonin, signals 'wake up' to your brain.", trigger: "low_energy", category: "energy" },

  // MENTAL SPACE - Science hacks
  { id: 8, tip: "Write down every open loop in your head. The brain relaxes once it knows nothing will be forgotten.", trigger: "low_space", category: "space" },
  { id: 9, tip: "Stare at a candle flame for 60 seconds. Ancient focus hack that still works.", trigger: "low_space", category: "space" },
  { id: 10, tip: "Hum a single note for 30 seconds. Activates the vagus nerve. Instant calm.", trigger: "low_space", category: "space" },
  { id: 11, tip: "Name 5 things you can see, 4 you can hear, 3 you can touch. Grounds you in the present.", trigger: "low_space", category: "space" },
  { id: 12, tip: "Box breathe: 4 seconds in, 4 hold, 4 out, 4 hold. Navy SEALs use this to stay calm under fire.", trigger: "low_space", category: "space" },
  { id: 13, tip: "Clench your fists tight for 5 seconds, then release. Progressive relaxation tricks your body into calm.", trigger: "low_space", category: "space" },

  // FLOW / FOCUS - Science hacks
  { id: 14, tip: "Put your phone in a different room. Physical distance beats willpower every time.", trigger: "high_distraction", category: "flow" },
  { id: 15, tip: "Set a timer for 25 minutes. The deadline creates urgency. You won't want to stop.", trigger: "low_flow", category: "flow" },
  { id: 16, tip: "Listen to video game soundtracks. Designed to keep you focused without distracting you.", trigger: "low_flow", category: "flow" },
  { id: 17, tip: "Work with your back to the door. Reduces subconscious alertness to your environment.", trigger: "high_distraction", category: "flow" },
  { id: 18, tip: "Chew gum while working. Studies show it increases focus by up to 10%.", trigger: "low_flow", category: "flow" },
  { id: 19, tip: "Lower your room temperature to 68°F. Slightly cold environments increase alertness.", trigger: "low_flow", category: "flow" },
  { id: 20, tip: "Use brown noise or pink noise. More effective than white noise for sustained concentration.", trigger: "high_distraction", category: "flow" },

  // CREATIVITY / STAGNATION - Science hacks
  { id: 21, tip: "Draw something with your non-dominant hand for 60 seconds. Breaks neural patterns. Unlocks creativity.", trigger: "high_stagnation", category: "creativity" },
  { id: 22, tip: "Take a 6-minute walk. Stanford study: walking increases creative output by 60%.", trigger: "high_stagnation", category: "creativity" },
  { id: 23, tip: "Learn one word in a language you don't speak. Novel input = novel output.", trigger: "high_stagnation", category: "creativity" },
  { id: 24, tip: "Take a different route to somewhere familiar. Small novelty triggers big creativity.", trigger: "high_stagnation", category: "creativity" },
  { id: 25, tip: "Shower or do dishes. Boring tasks activate the default mode network, where insights happen.", trigger: "high_stagnation", category: "creativity" },
  { id: 26, tip: "Lie down flat for 5 minutes. Horizontal position increases blood flow to prefrontal cortex.", trigger: "high_stagnation", category: "creativity" },

  // FRUIT-SPECIFIC - Science hacks
  { id: 27, tip: "Eat an apple before deep work. Slow-release glucose keeps focus stable longer than coffee.", trigger: "low_flow", category: "fruit" },
  { id: 28, tip: "Freeze grapes and eat them during creative sessions. Cold + sweet = sustained attention.", trigger: "low_flow", category: "fruit" },
  { id: 29, tip: "Smell an orange peel. Limonene reduces stress hormones. Instant creative reset.", trigger: "low_space", category: "fruit" },
  { id: 30, tip: "Drink lemon water first thing in the morning. Hydration + citrus = mental clarity.", trigger: "low_energy", category: "fruit" },
  { id: 31, tip: "Keep a banana at your desk. Potassium prevents the mental fog that comes from low electrolytes.", trigger: "low_energy", category: "fruit" },
  { id: 32, tip: "Eat blueberries. Studies link them to improved memory and cognitive function within hours.", trigger: "low_space", category: "fruit" },

  // HIGH PERFORMER - Science hacks (even top performers need quirky tips)
  { id: 33, tip: "Take a 20-minute nap. NASA found it improves performance by 34% and alertness by 54%.", trigger: "high_performer", category: "optimize" },
  { id: 34, tip: "Spend 2 minutes in the sun. Vitamin D synthesis plus serotonin boost. Nature's performance drug.", trigger: "high_performer", category: "optimize" },
  { id: 35, tip: "Write by hand for 5 minutes. Activates different brain regions than typing. Unlocks new thinking.", trigger: "high_performer", category: "optimize" },
  { id: 36, tip: "Stand on one leg while brushing teeth. Proprioception training improves focus and body awareness.", trigger: "high_performer", category: "optimize" },

  // GENERAL / ANY STATE - Science hacks
  { id: 37, tip: "Look at the color green for 30 seconds. Studies show it enhances creative thinking.", trigger: "any", category: "general" },
  { id: 38, tip: "Drink a glass of water right now. Even 2% dehydration impairs cognitive performance.", trigger: "any", category: "general" },
  { id: 39, tip: "Stretch your hip flexors. Sitting compresses them, which triggers stress hormones.", trigger: "any", category: "general" },
  { id: 40, tip: "Look at something 20 feet away for 20 seconds. The 20-20-20 rule prevents mental fatigue.", trigger: "any", category: "general" }
];

// ============================================================
// ACTION PLANS - Strategic advice based on score patterns
// These are coaching diagnoses, NOT quick hacks
// ============================================================

const actionPlans = {
  low_autonomy: {
    headline: "Freedom First",
    diagnosis: "Your constraints are eating your creative capacity. You cannot create under duress. High obligation + low energy = diminishing returns.",
    action: "Identify the ONE obligation draining you most. Eliminate, delegate, or renegotiate it this week."
  },
  low_resonance: {
    headline: "Depth Over Reach",
    diagnosis: "You may be optimizing for vanity metrics. High reach plus low resonance means disposable content that doesn't stick.",
    action: "Create one piece for an audience of ONE. Impossibly specific, weird, true. Quality compounds."
  },
  low_intensity: {
    headline: "Craft Needs Attention",
    diagnosis: "Your practice has stalled. Distraction and admin are stealing your flow hours. You're maintaining, not growing.",
    action: "Block 2 hours this week for deep work. Phone off. Door closed. One project only."
  },
  high_performer: {
    headline: "Protect The Compound",
    diagnosis: "You are in a rare state. Most creators never reach sustained high scores. Your edge is consistency, not innovation.",
    action: "Document exactly what is working right now. Routine, inputs, environment. Replicate it ruthlessly."
  },
  burnout_risk: {
    headline: "Recovery Mode Required",
    diagnosis: "Your system is depleted. High constraint + low energy = creative bankruptcy. Pushing harder will make it worse.",
    action: "Cancel one commitment. Sleep 8 hours. Do zero creative work for 48 hours. Rest is not optional."
  },
  free_agent: {
    headline: "Commitment Required",
    diagnosis: "You have options but no direction. Freedom without focus is just expensive indecision. Optionality is overrated.",
    action: "Pick ONE project. Say no to everything else for 30 days. Depth beats breadth."
  },
  balanced: {
    headline: "Steady Growth Mode",
    diagnosis: "Your scores are balanced. No crisis, but no breakthrough either. You're stable but plateauing.",
    action: "Identify which law excites you most. Push that one to 8+ this month. Imbalance drives growth."
  },
  rising_cult: {
    headline: "Double Down On Weird",
    diagnosis: "You have a small but devoted following. They love you for what makes you different, not what makes you safe.",
    action: "Make the thing only YOU can make. The weirder, the stickier. Your superfans will spread it."
  },
  grinding_artist: {
    headline: "Aim Before You Fire",
    diagnosis: "Your work ethic is solid but intensity without direction is just exhaustion. Effort is not the same as progress.",
    action: "Pause the grind. Ask: is this the right mountain? If yes, continue. If unsure, stop and reassess."
  },
  emerging_voice: {
    headline: "Consistency Over Perfection",
    diagnosis: "You're in the early game. The goal is not greatness yet. It's showing up. Volume precedes quality.",
    action: "Publish something imperfect this week. Your 100th piece will be better than your 10th. Start counting."
  },
  low_boldness: {
    headline: "Risk Required",
    diagnosis: "You're playing it safe. Safe content gets safe results. Your audience can feel the hesitation.",
    action: "Do one thing this week that makes you slightly uncomfortable. Send the pitch. Post the take. Ship ugly."
  },
  high_admin: {
    headline: "Reclaim Your Time",
    diagnosis: "Admin is eating your creative hours. Every hour on logistics is an hour not on craft. Death by a thousand emails.",
    action: "Batch all admin into one 90-minute block. Automate one task. Cancel one meeting. Protect the rest."
  }
};

// ============================================================
// AQ PROPHETIC MESSAGES - Autonomy pattern-based messaging
// ============================================================

const aqPropheticMessages = {
  // BOTTLENECK: Energy
  energy_bottleneck: {
    condition: (p) => p.bottleneck.name === 'energy' && p.raw.energy <= 4,
    label: "⚡ ENERGY CRISIS",
    messages: {
      morning: "You're running on empty and the day hasn't even started. This isn't about motivation. Your tank is dry. Before anything else, ask yourself: what would restore even 10% of your energy today? A walk? Real food? Canceling one thing? Do that first. Not after email. First. You can't create from depletion.",
      afternoon: "You're grinding through the afternoon on fumes. This isn't sustainable and you know it. What drained you this morning? Name it specifically. A person? A task? A decision? That thing needs to change or disappear. You're trading your creative capacity for something that isn't worth it.",
      evening: "You gave more than you had today. The deficit is real. Tomorrow morning, protect your first two hours like they're sacred. No meetings. No requests. No 'quick questions.' Just recovery and your most important work. The world can wait. Your energy can't.",
      night: "You're checking this late because you couldn't during the day. That's not discipline. That's a system failure. Sleep is not optional. It's not a reward for finishing. It's the foundation everything else rests on. Close this. Rest. Rebuild tomorrow."
    }
  },

  // BOTTLENECK: Mental Space
  space_bottleneck: {
    condition: (p) => p.bottleneck.name === 'space' && p.raw.space <= 4,
    label: "🌫 MENTAL OVERLOAD",
    messages: {
      morning: "Your mind is already full and the day just started. Thoughts are competing for attention like tabs in a browser. Before you add more inputs, get the current ones out. Write down the three things consuming your mental space. Just writing them creates room. Then pick one to address today. Just one.",
      afternoon: "Mental clutter is eating your afternoon alive. Your brain is full of open loops and half-processed worries. Step outside for 10 minutes right now. No phone. Let your mind defragment. Sometimes clarity comes from subtraction, not addition.",
      evening: "Your head is noisy with unfinished thoughts and unnamed anxieties. Before tomorrow, do a complete brain dump. Every open loop. Every worry. Every 'I should.' Write it all down somewhere. Your mind is for having ideas, not holding them. Empty the RAM.",
      night: "Racing thoughts at night mean unprocessed days. Your brain is trying to solve problems while you're trying to rest. Tomorrow, schedule 15 minutes of deliberate nothing. Stare at a wall. Let yourself be bored. Your brain needs idle time to consolidate and clear."
    }
  },

  // BOTTLENECK: Optionality
  optionality_bottleneck: {
    condition: (p) => p.bottleneck.name === 'optionality' && p.raw.optionality <= 4,
    label: "🔒 TRAPPED",
    messages: {
      morning: "You feel trapped. Stuck. Locked into a path you didn't fully choose. But are you really? Write down what's actually stopping you from changing direction. Is it real or imagined? Financial? Social? Habitual? Most prisons are made of assumptions, not bars. Question one assumption today.",
      afternoon: "Low optionality means someone or something else controls your calendar and your choices. That's not sustainable for creative work. What's one boundary you could set this week? One small reclamation of your autonomy? Start there. Options are created, not found.",
      evening: "Feeling stuck is often feeling obligated to paths that no longer serve you. What commitment are you honoring out of inertia rather than intention? You're allowed to change your mind. You're allowed to want something different. What would you choose if you gave yourself permission?",
      night: "You're thinking about options you don't have. But options aren't discovered. They're built. What's one door you could construct over the next 30 days? Not a dramatic escape. A small expansion of possibility. Write it down. Start building tomorrow."
    }
  },

  // BOTTLENECK: Freedom (high constraint)
  constraint_bottleneck: {
    condition: (p) => p.bottleneck.name === 'freedom' && p.raw.constraint >= 7,
    label: "⛓ OBLIGATION OVERLOAD",
    messages: {
      morning: "Heavy obligations are pressing on you before the day even begins. Before they consume everything, protect one hour for yourself. Put it on the calendar right now. Label it 'unavailable.' Guard it like your creative life depends on it. Because it does.",
      afternoon: "Your constraints are real. Not imagined. Real. But are all of them truly non-negotiable? Name one obligation you've never questioned. Why does it still exist? Who benefits from it? Sometimes we carry weights we picked up years ago and forgot to put down.",
      evening: "You gave the day to your obligations and they took everything. Did you give any of it to yourself? Tomorrow, take something back. Not a lot. Just something. One hour. One boundary. One 'no' to something that doesn't serve you.",
      night: "Your life belongs to others right now. Contracts, caregiving, debts, dependencies. That's not a character flaw. But it's also not sustainable forever. Something must change. What would you drop if you had permission? You might have more permission than you think."
    }
  },

  // STRENGTH: Energy (but still limited by something else)
  energy_strength: {
    condition: (p) => p.strength.name === 'energy' && p.raw.energy >= 7 && p.average < 7,
    label: "⚡ UNTAPPED POWER",
    messages: {
      morning: "You have energy but something else is blocking you. That energy is a finite resource that refreshes daily. Don't waste it on low-value tasks or other people's priorities. Identify your ONE most important creative task and attack it while the power is there.",
      afternoon: "Strong energy being consumed by constraints or mental clutter. You have fuel but it's burning on friction. Channel it into your single highest priority before it dissipates into busywork. What's the one thing that would make today count?",
      evening: "You had energy today. Did you use it on what mattered? Or did it get absorbed by obligations and noise? Tomorrow, direct your energy before others claim it. First hour: your most important work. No negotiation.",
      night: "Energy without direction is just restlessness. You have the fuel. You need the focus. Before you sleep, decide: what will receive your best energy tomorrow morning? Write it down. Make it specific. Wake up and execute."
    }
  },

  // SHAPE: Soaring (all high)
  soaring: {
    condition: (p) => p.shape === 'soaring',
    label: "✓ FULL AUTONOMY",
    messages: {
      morning: "All systems green. Energy, space, options, freedom—all aligned. This is rare. Don't waste it on maintenance. Use today for your most important creative work. The work that requires your best self. The work that moves the needle. Everything else can wait.",
      afternoon: "You're operating with full autonomy. This is the state everyone's chasing and you have it right now. Protect it fiercely. Say no to anything that would disrupt this. You can be helpful tomorrow. Today, be excellent.",
      evening: "Strong autonomy day. Everything working together. Before you close out, document what made this possible. What did you protect? What did you eliminate? What did you prioritize? These conditions are your formula. Write them down. Replicate them.",
      night: "Peak autonomy achieved. This is what freedom feels like. Don't take it for granted—it's fragile and rare. What could threaten this state? Guard against it. What maintains it? Double down. Sleep well. Protect this."
    }
  },

  // SHAPE: Crashed (all low)
  crashed: {
    condition: (p) => p.shape === 'crashed',
    label: "✗ SYSTEM FAILURE",
    messages: {
      morning: "Everything is low. Energy depleted. Mind cluttered. Options limited. Constraints heavy. This isn't a productivity problem. This is a life problem. Don't try to optimize your way out. Today is about one thing: recovery. What do you need? Give it to yourself.",
      afternoon: "Multiple systems are failing simultaneously. Pushing through isn't brave. It's counterproductive. What's the minimum you can do today? Do only that. Protect whatever remains. This is about survival now, not thriving. Thriving comes after stability.",
      evening: "You're depleted on all fronts and the day is ending. Tomorrow is not about output. It's about restoration. Lower every expectation. Focus on one thing: rebuilding your baseline. The work will still be there when you're ready. You won't be ready until you recover.",
      night: "When everything is low, rest is the only work that matters. Close this. Sleep. Don't set ambitious goals for tomorrow. Set recovery goals. Rebuild the foundation before you build anything else. The creative work can wait. Your health can't."
    }
  },

  // SHAPE: Plateau (mid, balanced)
  plateau: {
    condition: (p) => p.shape === 'plateau',
    label: "⚖ HOLDING STEADY",
    messages: {
      morning: "Stable but not growing. You have enough autonomy to function, but not enough to flourish. What one lever could you push today to break the pattern? More energy? More space? Fewer constraints? Pick one. Push it. Plateaus don't break themselves.",
      afternoon: "You're maintaining, which is better than declining. But maintaining isn't growing. Where's your next edge? What would move you from functional to thriving? That thing deserves your attention today. Not the urgent stuff. The important stuff.",
      evening: "Balanced at the middle is still the middle. You're not in crisis, but you're not in flow either. What would make tomorrow a 7 instead of a 5? Not a massive change. A small lever that compounds. Identify it now. Pull it tomorrow.",
      night: "Plateaus feel safe because they are. No crisis, no breakthrough. Just... fine. But fine doesn't compound. Fine doesn't build legacy. What bold move are you avoiding because the plateau is comfortable? Name it. Consider it. Maybe it's time."
    }
  },

  // SHAPE: Lopsided (fallback)
  lopsided: {
    condition: (p) => p.shape.startsWith('lopsided'),
    label: "⚖ IMBALANCED",
    messages: {
      morning: "Your autonomy is uneven. Strong in some areas, weak in others. That imbalance creates stress and limits output. Today, focus on your weakest link. Not your strength. Your weakness. That's where the leverage is. Shore it up before it collapses everything else.",
      afternoon: "Imbalanced systems create friction even when parts are working well. Your strength can't compensate forever for your weakness. What's draining you that your advantages can't offset? That's the thing to fix. Not optimize around. Fix.",
      evening: "Lopsided days are exhausting because you're constantly compensating. Tomorrow, shore up your weak spot before leveraging your strength. Sustainable autonomy is balanced autonomy. What's the one thing you could do to even out the equation?",
      night: "You're strong somewhere and weak somewhere else. That's normal. But ignoring the weakness doesn't make it go away. It makes it grow. What's your Achilles heel right now? Energy? Space? Options? Constraints? Name it. Plan to address it. Soon."
    }
  }
};

// ============================================================
// Ri PROPHETIC MESSAGES - Resonance pattern-based messaging
// ============================================================

const riPropheticMessages = {
  // BOTTLENECK: Impact
  impact_bottleneck: {
    condition: (p) => p.bottleneck.name === 'impact' && p.raw.impact <= 4,
    label: "👁 SEEN NOT FELT",
    messages: {
      morning: "Your work is being seen but not felt. People scroll past, nod, forget. That's not resonance. That's noise. Today, make something that moves YOU first. Something that scares you a little. If it doesn't move you, it won't move them. What truth have you been avoiding?",
      afternoon: "Low emotional impact means forgettable work. When did you last create something that gave someone chills? Tears? Laughter? That memory holds the key. What was different about that piece? Do more of whatever that was. Stop polishing. Start feeling.",
      evening: "People are scrolling past your work because it's safe. Competent but safe. What would make them stop? Not tricks. Not hooks. Truth. Your truth. The thing you've been circling around but not saying. Say it tomorrow. See what happens.",
      night: "Impact requires vulnerability and you've been protecting yourself. Understandable. But protected work doesn't resonate. What are you hiding that you should be revealing? Not everything. Just one thing. The thing that scares you to share. That's probably the one that matters."
    }
  },

  // BOTTLENECK: Identity
  identity_bottleneck: {
    condition: (p) => p.bottleneck.name === 'identity' && p.raw.identity <= 4,
    label: "🎯 NO TARGET",
    messages: {
      morning: "You're creating for everyone, which means no one feels like it's for THEM. Generic appeal is no appeal. Today, describe your ideal audience member in one sentence. Not demographics. Their secret frustration. Their hidden dream. Now make something specifically for that person.",
      afternoon: "Your work lacks specificity and it shows. Could you describe your audience so precisely that they'd recognize themselves? Try this: 'This is for people who ____ but secretly ____.' Fill in those blanks. That's your target. Aim there.",
      evening: "What if you made something that only 100 people would love—but they'd love it completely? That's more valuable than 10,000 lukewarm reactions. Who are your 100? What do they need that no one else is making? Make that tomorrow.",
      night: "The riches are in the niches. Who would genuinely mourn if you stopped creating? Not politely miss. Mourn. Those people are your audience. Make for them. Speak to them. Everyone else is a bonus. But those people are the core. Know them. Serve them."
    }
  },

  // BOTTLENECK: Boldness
  boldness_bottleneck: {
    condition: (p) => p.bottleneck.name === 'boldness' && p.raw.boldness <= 4,
    label: "🛡 PLAYING SAFE",
    messages: {
      morning: "You're playing it safe and the work shows it. Competent but careful. What would you make today if no one would judge you? If failure was impossible? If your reputation couldn't be damaged? That thing you just thought of—start it. The fear is a compass pointing toward what matters.",
      afternoon: "Low boldness means high conformity. You're making what's expected instead of what's true. What opinion do you hold that others in your space don't? What would you say if you weren't worried about the reaction? That's your edge. Use it or lose it.",
      evening: "Safe work is forgettable work. It doesn't offend. It also doesn't matter. What's the project you keep talking yourself out of? The one that feels too weird, too personal, too risky? That's probably the one. Tomorrow, start it. Imperfect is fine. Safe is not.",
      night: "The fear you feel about sharing something is usually proportional to its importance. What are you afraid to put out there? Write it down. Look at it. The resistance you feel is information. Lean into it. That's where your best work lives."
    }
  },

  // BOTTLENECK: Intimacy (large audience dilution)
  audience_dilution: {
    condition: (p) => p.isLargeAudience && p.bottleneck.name === 'intimacy',
    label: "📢 SCALE VS SOUL",
    messages: {
      morning: "Large audience, but connection is thinning. You're reaching more people and touching fewer. Today, create like you have 100 followers. Forget the metrics. What would you say if it wasn't going to go viral? That's probably more important than what will.",
      afternoon: "Scale can kill soul if you let it. When did you last have a real conversation with someone who follows you? Not a broadcast. A conversation. Pick one person today. Reach out. Remember why you started. They're not a number. They're a person who chose you.",
      evening: "You're reaching many but moving few. That's the trap of scale. Depth beats breadth. Always. What would your day-one fans want from you? Not your current audience. The originals. They knew you before the algorithm did. Make something for them.",
      night: "Mass audience is a blessing and a trap. The blessing: reach. The trap: losing the intimacy that built this. Don't optimize for growth. Optimize for depth. The numbers will follow the meaning. They always do. But meaning has to come first."
    }
  },

  // STRENGTH: Small audience advantage
  small_audience_strength: {
    condition: (p) => p.isSmallAudience && p.raw.impact >= 6,
    label: "💎 INTIMATE POWER",
    messages: {
      morning: "Small audience, real impact. This is the sweet spot that large creators envy. You can know each person. You can respond to everyone. That's not a limitation. That's a superpower. Use it. What if you asked 5 followers today what they actually need? Their answers might change everything.",
      afternoon: "Intimacy is your edge. Don't wish it away chasing scale. What you have right now—genuine connection with people who care—is worth more than millions of passive followers. Deepen before you widen. The depth creates the foundation for sustainable growth.",
      evening: "You're not chasing scale and that's probably wise. You're building depth. Real connection. Actual impact. That's rare and valuable. Keep going. The numbers will come when they come. The relationships you're building now will outlast any algorithm change.",
      night: "Your audience is small but they feel you. They chose you out of infinite options. That's not nothing. That's everything. One hundred true fans beats ten thousand casual scrollers. Always. You're building something real. Protect that. Nurture that."
    }
  },

  // STRENGTH: High boldness
  boldness_strength: {
    condition: (p) => p.strength.name === 'boldness' && p.raw.boldness >= 7 && p.average < 7,
    label: "🔥 BOLD BUT UNHEARD",
    messages: {
      morning: "You're taking risks but they're not landing. Bold work that doesn't connect is still missing something. The craft is there. The courage is there. But who needs to hear this? Get specific about your audience today. Aim the boldness. Don't just fire into the void.",
      afternoon: "Fearless work that doesn't resonate is just noise. You have the bravery. Now you need the targeting. What truth are you telling? Who specifically needs that truth? Where do they gather? How do they find you? Courage without strategy is just chaos.",
      evening: "You're brave and that matters. But brave and invisible doesn't change anything. Tomorrow, combine your boldness with specificity. Make something daring AND targeted. Bold AND clear about who it's for. That combination is unstoppable.",
      night: "Your courage is an asset most creators lack. Don't waste it on untargeted shots. Tomorrow, aim your boldness. Pick a specific audience. A specific problem. A specific truth. Then be as fearless as you are. Directed courage moves mountains."
    }
  },

  // AUDIENCE TIER: Intimate (<1K)
  tier_intimate: {
    condition: (p) => p.audienceTier && p.audienceTier.intimate && p.average >= 5,
    label: "💎 INTIMATE CIRCLE",
    messages: {
      morning: "You have fewer than 1,000 people, but they chose you. That's not a limitation—it's a superpower. You can reply to everyone. You can know their names. You can ask them directly what they need. Today, reach out to 3 followers personally. Not to promote. To connect. To learn. This intimacy is your unfair advantage. Use it before it scales away.",
      afternoon: "Small audience, real connection. Most creators would kill for what you have—people who actually care. Don't wish for scale yet. Deepen first. What if you created something specifically because one follower asked for it? That's the move. That's how movements start. One person at a time.",
      evening: "Under 1K followers means you're still in the relationship-building phase. Every person who joins now is a founding member of something. Treat them that way. Tomorrow, share something you'd only share with friends. See who responds. Those are your people.",
      night: "Intimate audiences are laboratories. You can experiment, fail, and adjust without the world watching. That's freedom most creators lose and never get back. Use this phase wisely. Test your boldest ideas now. Find what resonates. Then scale what works."
    }
  },

  // AUDIENCE TIER: Growing (1K-10K)
  tier_growing: {
    condition: (p) => p.audienceTier && p.audienceTier.growing && p.average >= 5,
    label: "🌱 BUILDING MOMENTUM",
    messages: {
      morning: "You're in the 1K-10K zone—past hobby, not yet career. This is the crucial phase where your creative identity solidifies. What you do now becomes what you're known for. Today, double down on what's working. Not what you wish was working. What's actually resonating. More of that.",
      afternoon: "Building momentum means you've found something that connects. Don't pivot away from it chasing novelty. Go deeper. What's the version of your current work that's 10x more YOU? That's the path. Depth now creates the foundation for sustainable scale later.",
      evening: "The 1K-10K phase is where most creators stall—too small to feel successful, too big to ignore. Keep going. You're not stuck. You're building. Tomorrow, create the thing that only you could make. The weird thing. The specific thing. That's what breaks you through.",
      night: "You have traction. Not massive. Real. People are showing up for what you make. That's validation. Now the question is: can you be consistent long enough for compound growth to kick in? The answer is yes if you protect your energy and stay true to what's working."
    }
  },

  // AUDIENCE TIER: Established (10K-100K)
  tier_established: {
    condition: (p) => p.audienceTier && p.audienceTier.established && p.average >= 5,
    label: "🏛 ESTABLISHED PRESENCE",
    messages: {
      morning: "10K-100K is the proving ground. You have real traction. People recognize your name. But the algorithm is starting to pressure you toward optimization over authenticity. Today, resist. Make something that serves your audience, not the metrics. The audience that matters will notice.",
      afternoon: "You're established enough to feel the pull of scale but not so big you've lost yourself. This is the fork in the road. One path leads to hollow growth. The other leads to sustainable depth. Every piece you make now is a vote for which path you're taking. Choose wisely.",
      evening: "Established presence means you have something worth protecting. The voice that got you here—guard it. The temptation to broaden and soften is real. Don't. Tomorrow, make something that might lose casual followers but will deepen the committed ones. That's the trade that pays.",
      night: "The 10K-100K range is where creative careers are built or broken. You have enough audience to matter. The question is whether you'll stay true to what made them follow. Before you sleep, remember why you started. That's still the point. The numbers are just evidence."
    }
  },

  // AUDIENCE TIER: Large (100K-1M)
  tier_large: {
    condition: (p) => p.audienceTier && p.audienceTier.large && p.average >= 5,
    label: "📡 SCALE CHALLENGES",
    messages: {
      morning: "100K-1M followers means you're operating at real scale. People are watching who you've never met. The intimacy is harder to maintain. Today, find one way to make it feel smaller. Reply to someone. Make something niche. Remember that behind every number is a human who chose to pay attention to you.",
      afternoon: "Large scale brings large pressure. The algorithm wants you to optimize. Your team wants you to grow. Everyone has opinions about what you should make. But your audience followed YOU, not a strategy. What would you make today if the metrics didn't exist? Make that.",
      evening: "At 100K-1M, you have influence. What you say matters to a lot of people. That's a responsibility. Tomorrow, use it intentionally. Not to grow. To serve. What does your audience need to hear that no one else is telling them? Say that.",
      night: "Scale challenges are real. You can't reply to everyone anymore. You can't know each person. But you can still create like you're talking to one person. The best large creators never lose that intimacy in their work, even when they lose it in their DMs. Protect your voice."
    }
  },

  // AUDIENCE TIER: Massive (1M-10M)
  tier_massive: {
    condition: (p) => p.audienceTier && p.audienceTier.massive && p.average >= 5,
    label: "🌊 TRUE SCALE",
    messages: {
      morning: "1M-10M is a different game. You're not just a creator anymore—you're a small media company whether you want to be or not. The challenge now isn't growth. It's meaning. Does your work still matter to you? Does it still serve the people who built this? Today, make something that proves it does.",
      afternoon: "At this scale, everything is a signal. Millions are watching. That's power and that's pressure. Most creators this size slowly become brands instead of humans. Don't. The thing that got you here—authenticity, risk, truth—double down on that. Your audience can smell the difference.",
      evening: "Massive scale means massive opportunity to coast. You could phone it in and still get views. But you'd know. And eventually, they'd know. Tomorrow, make something that scares you again. Something that reminds you why you started. The numbers can't be the point anymore. Meaning has to be.",
      night: "1M-10M followers is a level most creators never reach. You reached it. The question now is: what will you do with it? Not for growth. For legacy. What do you want to be known for? What would you regret not making? That's what matters at this scale."
    }
  },

  // AUDIENCE TIER: Superstar (10M+)
  tier_superstar: {
    condition: (p) => p.audienceTier && p.audienceTier.superstar && p.average >= 5,
    label: "⭐ GLOBAL REACH",
    messages: {
      morning: "10M+ means you've achieved something extremely rare. Global reach. Cultural influence. But with that comes the hardest question: now what? Today, ignore the machine. Make something that would make your younger self proud. Not your metrics. Your younger self. They're the one who got you here.",
      afternoon: "At superstar scale, you can move markets, shift conversations, launch movements. That's not hyperbole. It's responsibility. What are you doing with it? Not what does it earn—what does it mean? The people with the biggest platforms owe the most to using them well.",
      evening: "Global reach means nothing if it's empty. Most creators at this level are trapped by their own success—too big to experiment, too optimized to be authentic. You don't have to be. Tomorrow, make something weird. Something risky. Something that reminds you and everyone else that you're still an artist, not just a brand.",
      night: "10M+ followers means you've won a game most people don't even get to play. The scores don't matter anymore. Impact does. Legacy does. What will you leave behind? What will people remember? The answer to that question is the only score that matters at this level."
    }
  },

  // SHAPE: Soaring
  soaring: {
    condition: (p) => p.shape === 'soaring',
    label: "★ RESONANCE ACHIEVED",
    messages: {
      morning: "Deep resonance achieved. Impact, identity, boldness, intimacy—all aligned. Your work matters to people who matter. This is rare. Protect it. Don't chase scale for its own sake. Don't dilute what's working. Guard this connection like the precious thing it is.",
      afternoon: "You've solved for connection. People feel your work. They remember it. They share it because it moved them. The question now is: how do you maintain this without manufacturing it? Authenticity can't be automated. Stay true to what created this magic.",
      evening: "Real impact. Real audience. Real boldness. This is the rarest combination in creative work. Most people never find it. You have it. Document what created it. Understand it. Because you'll want to recreate it and you'll need to know how.",
      night: "Resonance is your gift right now. Not everyone gets this. Not everyone keeps it. Don't take it for granted. Don't optimize it to death. The magic is fragile. Protect the conditions that created it. Sleep well. Make more tomorrow."
    }
  },

  // SHAPE: Crashed
  crashed: {
    condition: (p) => p.shape === 'crashed',
    label: "⊘ SIGNAL LOST",
    messages: {
      morning: "Your work isn't landing. Impact low. Targeting vague. Playing safe. The signal is lost in the noise. Before creating more, stop and ask: who is this for and what do they need to feel? Answer that first. Then make something that delivers exactly that.",
      afternoon: "Low resonance across the board. Nothing is connecting. Here's a radical idea: stop publishing for a week. Study what moves YOU. What makes you stop scrolling? What do you save? What do you share? That's the standard. Now make work that meets it.",
      evening: "Nothing connected today. That's data, not failure. What's the gap between what you're making and what you believe? Between who you are and what you're showing? That gap is where the resonance died. Close it tomorrow.",
      night: "When resonance is gone, technique won't save you. Only truth will. What truth are you avoiding? What are you not saying that you should be saying? What audience are you not serving that you should be serving? The answers are in the questions you don't want to ask."
    }
  },

  // SHAPE: Plateau
  plateau: {
    condition: (p) => p.shape === 'plateau',
    label: "📡 SIGNAL STEADY",
    messages: {
      morning: "Moderate resonance. You're connecting but not deeply. The work lands but doesn't stick. What would make your work unmissable? Not louder. Not more frequent. Unmissable. The kind of thing people have to tell someone about. Think about that today.",
      afternoon: "Some things land, some don't. Study the difference. What makes your best work hit? What's present when it works and absent when it doesn't? Find that variable. It's probably truth. It's usually truth. Lean into it.",
      evening: "Stable connection but room to grow. You're not failing but you're not breaking through either. Tomorrow, say something you've been holding back. Take one more step toward the edge. The plateau is comfortable. The edge is where growth lives.",
      night: "Your signal is consistent but not powerful. Reliable but not remarkable. What would amplify it? More vulnerability? Better targeting? Bigger swings? Something needs to change to break through. Identify it tonight. Try it tomorrow."
    }
  },

  // SHAPE: Lopsided (fallback)
  lopsided: {
    condition: (p) => p.shape.startsWith('lopsided'),
    label: "📡 UNEVEN SIGNAL",
    messages: {
      morning: "Your resonance is unbalanced. Strong in some dimensions, weak in others. Maybe bold but untargeted. Maybe targeted but safe. Maybe impactful but too broad. Which weakness matters most? That's your focus today. Fix the gap.",
      afternoon: "Lopsided resonance creates inconsistent results. Some work lands, some disappears, and you're not sure why. The answer is in the imbalance. Are you too broad? Too safe? Too shallow? Identify it. Address it. Balance creates consistency.",
      evening: "Some parts of your resonance are working beautifully. Others are failing. The system is uneven. Tomorrow, stop leading with your strength. Lead with improving your weakness. That's where the leverage is. That's where the breakthrough lives.",
      night: "Imbalanced connection is frustrating because you can taste success but not hold it. Something is working. Something isn't. Get specific about what's missing. Is it impact? Targeting? Courage? Intimacy? Name it. Then fix it."
    }
  }
};

// ============================================================
// Ci PROPHETIC MESSAGES - Craft Intensity pattern-based messaging
// ============================================================

const ciPropheticMessages = {
  // BOTTLENECK: Flow (fuel)
  flow_bottleneck: {
    condition: (p) => p.fuelBottleneck.name === 'flow' && p.raw.flow <= 12,
    label: "🌀 NO DEPTH",
    messages: {
      morning: "You're skimming the surface. Deep work isn't happening. Before you check anything today, set a timer for 25 minutes and create something. No notifications. No switching. Just depth. This is the most important thing you'll do today.",
      afternoon: "Half the day gone, no real depth yet. Your craft is starving. Right now, close every tab except one. Work on that one thing for 45 minutes. Everything else can wait. Your future self will thank you.",
      evening: "Another day without entering the zone. The shallow work is eating your life. Tomorrow morning, block 90 minutes before checking anything. Put your phone in another room. Protect this time like your career depends on it. Because it does.",
      night: "No flow today means no growth today. That's not neutral. That's falling behind. Before you sleep, decide: what will you create in your first focused hour tomorrow? Write it down. Make it specific. Make it sacred."
    }
  },

  // BOTTLENECK: Evolution (fuel)
  evolution_bottleneck: {
    condition: (p) => p.fuelBottleneck.name === 'evolution' && p.raw.evolution <= 4,
    label: "📉 SKILL STAGNATION",
    messages: {
      morning: "Your skills are frozen in time while the world moves forward. That's not stability. That's slow irrelevance. Today, spend 30 minutes learning one thing adjacent to your craft. Not consuming content. Practicing something new. Growth requires discomfort.",
      afternoon: "Stagnation is a choice you make every day you don't stretch. What skill would change everything if you mastered it in 90 days? Name it. Find a tutorial. Start today. Not tomorrow. Today.",
      evening: "You're repeating what you already know instead of reaching for what you don't. That felt safe. It isn't. Tomorrow, identify one skill gap that's holding you back. Commit to 20 minutes of deliberate practice on it. Daily. For one month.",
      night: "Your craft is where it was six months ago. The market doesn't care about your comfort. Pick one skill. Just one. Write down how you'll practice it tomorrow. Make it specific: what, when, where. Then sleep. Then do it."
    }
  },

  // BOTTLENECK: Risk (fuel)
  risk_bottleneck: {
    condition: (p) => p.fuelBottleneck.name === 'risk' && p.raw.risk <= 4,
    label: "🔄 REPETITION LOOP",
    messages: {
      morning: "You're playing the greatest hits on repeat. Comfortable. Safe. Dying. Today, start one project where failure is possible. Not reckless. Just uncertain. That's where growth lives. What would you try if you weren't afraid of looking stupid?",
      afternoon: "Playing safe is playing small. Your best work scared you a little when you made it. What are you avoiding making because it might not work? That's probably the thing. Start it today. Imperfect is fine. Start it.",
      evening: "Another day of polished mediocrity. The work was fine. Just fine. Tomorrow, break something on purpose. Try a style you've never tried. Say something you've never said. Risk looking foolish. Your audience is bored of safe. So are you.",
      night: "Repetition feels like productivity but it's actually decay. Before you sleep, write down one creative experiment you'll run this week. Something that might fail. Something that excites you. If it doesn't scare you a little, pick something scarier."
    }
  },

  // BOTTLENECK: Admin (drag)
  admin_bottleneck: {
    condition: (p) => p.worstDrag.name === 'admin' && p.raw.admin >= 25,
    label: "📋 ADMIN OVERLOAD",
    messages: {
      morning: "You're drowning in logistics while your craft suffocates. Before you open email, answer this: what's your ONE creative priority today? Do that first. Not after the emails. First. The emails will wait. Your creativity won't.",
      afternoon: "More managing than making. That's not a creative life. That's a manager's life with creative pretensions. What would it cost to hand off 5 hours of admin per week? $100? $200? Compare that to the cost of your stalled creative output. Hire help or kill tasks.",
      evening: "You spent today on operations while your real work gathered dust. This is a slow emergency. Make a list: what 3 admin tasks drain you most? For each one: automate, delegate, or delete. Pick one to fix this week.",
      night: "That many hours of admin is a part-time job of not-creating. Something has to give. Tomorrow, batch all admin into one 2-hour block. Protect the rest. Your creative work is not what happens after the admin. It's the priority. Treat it like one."
    }
  },

  // BOTTLENECK: Distraction (drag)
  distraction_bottleneck: {
    condition: (p) => p.worstDrag.name === 'distraction' && p.raw.distraction >= 20,
    label: "📱 ATTENTION LEAK",
    messages: {
      morning: "Your attention is bleeding out through your phone. Check your screen time right now. That number is hours stolen from your craft. Today, put your phone in another room during creative work. Not on silent. In another room. Watch what happens to your focus.",
      afternoon: "You've already given hours to distraction today. Not breaks. Not rest. Avoidance. Right now, check your screen time. Be honest with yourself. Then set one app limit. Just one. See if you can beat it tomorrow.",
      evening: "The hours you lost to scrolling aren't coming back. What would you have built with that time? Don't answer defensively. Answer honestly. Tomorrow, delete one app for one week. The resistance you feel is proof you should do it.",
      night: "Your phone isn't neutral. It's an adversary with a billion-dollar algorithm designed to steal your attention. What would a week without your biggest time-sink app look like? The resistance you feel right now is the answer. Try it."
    }
  },

  // BOTTLENECK: Stagnation (drag)
  stagnation_bottleneck: {
    condition: (p) => p.worstDrag.name === 'stagnation' && p.raw.stagnation >= 7,
    label: "🧊 FROZEN",
    messages: {
      morning: "You're frozen. Paralyzed. Stuck. The big project feels impossible. Forget the big project. What's the smallest possible action you could take in 5 minutes? Not 'think about it.' A physical action. Write one sentence. Sketch one shape. Send one message. Do that now.",
      afternoon: "Something is stuck and you've been avoiding looking at it directly. Name the project. Say it out loud. How long has it waited? What's the real fear underneath? Not 'I'm busy.' The real one. Face it, then take one tiny step toward it.",
      evening: "Another day of avoidance. Tomorrow, ship something embarrassing. Lower the bar until you can clear it. Publish a draft. Share a work-in-progress. Done is better than perfect. And perfect isn't coming anyway.",
      night: "Paralysis thrives in darkness and vagueness. Right now, write down the project you're avoiding. Then write the single smallest physical action that would move it forward. Put that paper where you'll see it first thing tomorrow. Do only that action. Then the next one."
    }
  },

  // SHAPE: Soaring (high fuel, low drag)
  soaring: {
    condition: (p) => p.shape === 'soaring',
    label: "◆ DEEP WORK MODE",
    messages: {
      morning: "Everything is aligned. Fuel high, friction low. This is rare. This is the compound zone. Protect this day at all costs. Cancel anything that would interrupt. Say no to everything that isn't your most important work. This is what you've been building toward.",
      afternoon: "You're in the zone. Deep work is happening. Keep going. Don't check anything. Don't reward yourself with a break yet. Push deeper. The world can wait. You're doing the thing. Stay in it as long as you can.",
      evening: "Powerful creative day. The kind that compounds into something real. Before you close out, document what enabled it. What did you do differently? What did you protect? These are your success conditions. Write them down. Replicate them.",
      night: "Deep craft intensity today. This is what flow feels like. This is what mastery is built from. Sleep well. Protect your recovery so you can do it again tomorrow. Remember this feeling when the hard days come. This is proof of what's possible."
    }
  },

  // SHAPE: High fuel, high drag (fighting friction)
  high_fuel_high_drag: {
    condition: (p) => p.shape === 'high_fuel_high_drag',
    label: "🔥 FIGHTING FRICTION",
    messages: {
      morning: "You have the fuel but you're burning it on friction. Skills are sharp. Motivation is there. But admin, distraction, or stagnation is eating your output. Identify your biggest drag. Just one. What would it take to cut it in half this week? Do that.",
      afternoon: "You're driving with the parking brake on. The engine is powerful but something is creating resistance. What's the friction? Admin? Distraction? Paralysis? Name it specifically. Then attack it specifically. You're too capable for this drag.",
      evening: "High effort, high resistance. That's exhausting and unsustainable. You have what it takes. You're just fighting unnecessary friction. Tomorrow, fix one source of drag before you try to create. Clear the path, then walk it.",
      night: "You're working hard against forces you could eliminate. That's not noble. That's inefficient. Pick your worst source of drag. Commit to reducing it by half. The goal isn't more effort. It's less resistance. Clear the runway."
    }
  },

  // SHAPE: Crashed (low fuel, high drag)
  crashed: {
    condition: (p) => p.shape === 'crashed',
    label: "○ CREATIVE DROUGHT",
    messages: {
      morning: "Craft intensity has crashed. Low fuel, high drag. This isn't laziness. This is a signal. Don't force it today. Go for a walk. Change the inputs. Read something inspiring. Sometimes away is forward. Listen to what the crash is telling you.",
      afternoon: "All creative systems are down. Pushing harder won't help. Something deeper is wrong. What do you need that you're not getting? Rest? Clarity? Permission? Give it to yourself today. The work will still be there when you're ready.",
      evening: "Creative drought. You didn't make what you wanted to make. That's okay. But too many days like this and the skill atrophies. Tomorrow isn't about output. It's about showing up. Even 15 minutes. Just show up.",
      night: "When everything is low, ambition is the enemy. Don't set big goals for tomorrow. Set tiny ones. One small creative act. That's it. Rebuild the habit before you rebuild the output. Rest now. Show up tomorrow. Start small."
    }
  },

  // SHAPE: Plateau
  plateau: {
    condition: (p) => p.shape === 'plateau' || p.shape === 'functional_high',
    label: "△ STEADY CRAFT",
    messages: {
      morning: "Steady craft intensity. You're working, but not at your edge. That's sustainable but it's not growth. Where could you push harder today? What would make this session memorable instead of routine? Find that edge. Touch it.",
      afternoon: "Functional but not exceptional. The work is happening. But is it the work that matters? What would you need to do to make today count? Not just check boxes. Actually count. Push for that in your next session.",
      evening: "Solid work day. Not exceptional, not bad. Consistent. The question is: consistent at what level? Are you satisfied here? If not, identify one lever to push tomorrow. Small improvements compound. But you have to make them.",
      night: "Steady state. The craft is alive but not thriving. You're maintaining, not growing. Before you sleep, ask: what would I need to change to level up? Write one answer. Try it tomorrow. Plateaus are comfortable. They're also where careers go to coast."
    }
  },

  // SHAPE: Struggling (low fuel, low drag but still not working)
  struggling: {
    condition: (p) => p.shape === 'struggling' || p.shape === 'low_fuel_low_drag',
    label: "⚠ LOW OUTPUT",
    messages: {
      morning: "Low output but also low friction. You're not blocked. You're just not moving. The issue isn't obstacles. It's ignition. What would spark you today? Not more planning. More starting. Open the project and make one mark. That's how you start.",
      afternoon: "You're not distracted, not overwhelmed. Just stalled. Sometimes the problem is too little pressure, not too much. Create a deadline. Tell someone what you'll ship. Add stakes. The friction might actually help.",
      evening: "Neither creating nor distracted. Just... stalled. What would make tomorrow feel urgent? Not fake urgency. Real stakes. A deadline. A promise. A bet. Sometimes you need to manufacture pressure to move.",
      night: "Low intensity, low friction. You're coasting in neutral. Is that what you want? If not, decide right now: what will you create tomorrow? Make it specific. Make it small. Make it non-negotiable. Then do it."
    }
  }
};

// ============================================================
// ALPHA PROPHETIC MESSAGES - Composite pattern-based messaging
// ============================================================

const alphaPropheticMessages = {
  // WEAKEST: Autonomy
  aq_weakest: {
    condition: (p) => p.weakest.name === 'aq' && p.spread >= 2,
    label: "🔓 FREEDOM BOTTLENECK",
    messages: {
      morning: "Your weakest link is autonomy. You have the skill. You have the audience. But you don't have the freedom to use them. Today, don't try to create more. Try to create space. Protect one hour. Cancel one thing. Say no to one request. Your bottleneck isn't talent. It's freedom.",
      afternoon: "Alpha held back by constraints. The craft is there. The connection is there. But there's no room to deploy them. What would buy you more freedom? Money? Boundaries? Fewer obligations? Get specific. Then start building toward that. Today if possible.",
      evening: "Resonance and craft are strong but autonomy is strangling them. What would change if you had 10 more free hours per week? That's not a fantasy question. It's a planning question. How would you get those hours? What would you sacrifice? Start there.",
      night: "You can do the work. People want the work. But you don't have room to do it. That's the problem to solve. Not better craft. Not better marketing. More freedom. Write down the top three things stealing your autonomy. That's your hit list."
    }
  },

  // WEAKEST: Resonance
  ri_weakest: {
    condition: (p) => p.weakest.name === 'ri' && p.spread >= 2,
    label: "📡 CONNECTION BOTTLENECK",
    messages: {
      morning: "Your weakest link is resonance. You have the freedom to create. You have the skills to execute. But the work isn't connecting with people. Today, don't make more. Study what moves people. What makes them stop, save, share? Learn that. Then apply it.",
      afternoon: "Alpha held back by connection. You're doing the work but it's not landing. Something is missing between your output and their hearts. Is it vulnerability? Specificity? Boldness? Identify the gap. That gap is your highest-leverage problem to solve.",
      evening: "Freedom and craft are strong but resonance is the limiter. Before creating more, spend time understanding your audience. Not demographics. Their fears. Their dreams. Their secret frustrations. Make for that. Not for algorithms. For humans.",
      night: "You have the space. You have the skill. But no one is feeling it. That's the gap. What truth are you not telling? What audience are you not serving? What vulnerability are you protecting? Somewhere in those questions is your answer."
    }
  },

  // WEAKEST: Craft Intensity
  ci_weakest: {
    condition: (p) => p.weakest.name === 'ci' && p.spread >= 2,
    label: "🔨 OUTPUT BOTTLENECK",
    messages: {
      morning: "Your weakest link is craft intensity. You have freedom. You have an audience waiting. But the output isn't there. Today is about shipping, not strategizing. What could you finish and release before tonight? Pick one thing. Make it real. Put it in the world.",
      afternoon: "Alpha held back by execution. Your audience is waiting. Your calendar has space. But the work isn't happening. What's actually stopping you? Not the excuse. The real thing. Is it fear? Perfectionism? Distraction? Name it, then defeat it.",
      evening: "Freedom and resonance are strong but craft is the limiter. You have room to work and people who want your work. The only thing missing is the work itself. Tomorrow, create before consuming anything. First hour: make something. No exceptions.",
      night: "You have room to work. People want what you make. But you're not making enough. Why? Be honest with yourself. The answer is probably uncomfortable. It's probably about fear or avoidance. Face it. Then tomorrow, do the thing anyway."
    }
  },

  // BALANCE: All aligned high
  all_aligned_high: {
    condition: (p) => p.balance === 'all_aligned_high',
    label: "⚡ COMPOUNDING RETURNS",
    messages: {
      morning: "All three laws aligned above 7. Autonomy, resonance, and craft intensity—all working together. This is the compound zone. Your job today is not to push harder. It's to protect this state. Say no to everything that doesn't serve it. This is rare. Guard it.",
      afternoon: "Peak creative alpha. Freedom to work, audience to serve, craft to execute. Everything is flowing. Say no to anything that would disrupt this. You can be generous tomorrow. Today, be excellent. The world benefits more from your best work than from your scattered attention.",
      evening: "Rare territory today. Everything working together. All systems aligned. Before you close out, document what created this. What did you protect? What did you prioritize? What did you decline? These are your success conditions. Write them down. Repeat them.",
      night: "Alpha above 7 with all laws aligned. This is what you've been building toward. Enjoy it. Protect it. Extend it. Sleep well tonight—you earned it. Wake up tomorrow ready to do it again. This is the rhythm of mastery."
    }
  },

  // BALANCE: All aligned low
  all_aligned_low: {
    condition: (p) => p.balance === 'all_aligned_low',
    label: "🚨 CREATIVE EMERGENCY",
    messages: {
      morning: "Everything is struggling. Autonomy, resonance, and craft—all underwater. This isn't a work problem. This is a life problem. Don't try to optimize. Don't try to push through. Ask yourself: what do I need that I'm not getting? Start there. The work comes after the human.",
      afternoon: "Creative insolvency. All systems failing. Stop trying to produce. Start trying to survive and recover. What would help? Not the work. You. Do you need rest? Connection? Clarity? Permission? Give it to yourself. The work will still be there when you're ready.",
      evening: "All systems underwater. Tomorrow isn't about creating. It's about stabilizing. Lower every expectation. Focus on one thing: rebuilding your baseline. Not excellence. Baseline. The creative work can wait. Your foundation can't.",
      night: "When everything is low, ambition is the enemy. Don't set goals for tomorrow. Set survival conditions. Sleep. Eat. Move. Connect with one person. Rebuild the basics. The creative work comes after the human is okay. Be okay first."
    }
  },

  // BALANCE: Severely imbalanced
  severely_imbalanced: {
    condition: (p) => p.balance === 'severely_imbalanced',
    label: "⚖ SEVERE IMBALANCE",
    messages: {
      morning: "One law is thriving while another is failing. That gap is unsustainable. Your strength can't compensate forever. Today, ignore your strength entirely. Focus only on your weakest score. That's where the leverage is. That's where the system is breaking.",
      afternoon: "Major imbalance in your creative portfolio. The spread between your laws is dangerous. Strengths don't matter if one weakness collapses the whole system. What's your weak link? Autonomy? Resonance? Craft? All your energy goes there today.",
      evening: "The gap between your best and worst law is too wide. You're propping up a broken system with one strong leg. That works short-term. It fails long-term. Tomorrow, stop optimizing your strength. Start rescuing your weakness. Urgently.",
      night: "Severely imbalanced alpha creates unstable success. You might be doing great in one dimension and terrible in another. That's not sustainable. Write down your weakest law. Write down three specific actions to improve it. Start tomorrow. Not next week. Tomorrow."
    }
  },

  // FLAGS: Compounding
  compounding: {
    condition: (p) => p.flags.isCompounding,
    label: "📈 COMPOUNDING",
    messages: {
      morning: "You're in the compound zone. Every day builds on the last. Protect the routine that created this. Don't experiment right now. Don't optimize. Just keep doing what's working. Consistency is the multiplier. Guard your system. It's producing.",
      afternoon: "Compounding returns active. This is the zone where good becomes great becomes exceptional. Don't change what's working. Double down on your system. Small improvements, consistent execution. The magic is in the repetition. Stay the course.",
      evening: "Momentum is real and you're riding it. Sleep well tonight. Recover fully. Wake up ready to continue the streak. Compounding requires consistency. One broken day doesn't ruin it. But many will. Protect your rhythm.",
      night: "When everything compounds, rest is part of the strategy. Recovery isn't a break from the work. It's part of the work. Protect your sleep. Protect your health. The compound effect needs you at full capacity. Tomorrow, continue the streak."
    }
  },

  // FLAGS: Emergency
  emergency: {
    condition: (p) => p.flags.isEmergency,
    label: "🆘 EMERGENCY",
    messages: {
      morning: "Alpha below 3 is a crisis. This is not a productivity problem. Something is deeply wrong. Do not push through. Do not optimize. Reach out to someone today. A friend. A professional. Anyone. You need support right now, not strategy.",
      afternoon: "Emergency levels. This is not about your creative output. This is about you. What support do you need right now? Not to be more productive. To be okay. Find one person to talk to today. Not text. Talk. Connection is the priority.",
      evening: "Creative alpha this low means life alpha is struggling. Tomorrow is not about work. It's not about output. It's about survival and recovery. Be extremely gentle with yourself. Lower every bar. Ask for help if you haven't already.",
      night: "When alpha is this low, sleep is medicine. Close everything. All of it. Rest is not earned. It's necessary. Tomorrow, your only job is to find one person to connect with. Not about work. Just human connection. That's the first step back."
    }
  },

  // FLAGS: Coasting
  coasting: {
    condition: (p) => p.flags.isCoasting,
    label: "🛶 COASTING",
    messages: {
      morning: "Comfortable middle. Nothing is broken, nothing is great. You're coasting. That's not wrong. But is it what you want? What would make you uncomfortable in a good way? What stretch goal are you avoiding because the plateau is easy? Today, consider taking a risk.",
      afternoon: "You're coasting. Safe, stable, sustainable. Also: not growing. The middle is fine if you want the middle. But if you want more, something has to change. What would disrupt your comfortable pattern? What edge are you avoiding?",
      evening: "Stable but stagnant. Not failing, not thriving. The plateau feels like balance but might be fear of pushing. Which is it for you? Be honest. If it's fear, name what you're afraid of. If it's contentment, own that too. But know which it is.",
      night: "Coasting is comfortable. It's also where ambition goes to sleep. You're not in crisis. But you're not in growth either. Before tomorrow, ask yourself: is this where I want to stay? If not, what one thing would push me to the next level?"
    }
  },

  // TREND: Rising
  rising: {
    condition: (p) => p.trend === 'rising',
    label: "📈 ASCENDING",
    messages: {
      morning: "Alpha trending upward. You're building momentum. Don't change what's working. This is not the time to experiment or optimize. It's the time to execute. Whatever you did last time, do it again. Keep the streak alive. Momentum is fragile. Protect it.",
      afternoon: "You're ascending. Each calculation shows improvement. What changed? What created this upward trend? Identify it specifically. Because you'll want to replicate it. And you can't replicate what you don't understand. Study your own success.",
      evening: "Rising alpha. Something is working and you should know what it is. Before you close out today, write down what you think created the improvement. Conditions, habits, decisions. Document it. This is your playbook for growth.",
      night: "Upward trend in progress. Sleep well. Recover fully. Tomorrow, continue what you started. The goal isn't to spike higher. It's to keep rising consistently. Small gains compound. Trust the process. Protect the trajectory."
    }
  },

  // TREND: Falling
  falling: {
    condition: (p) => p.trend === 'falling',
    label: "📉 DECLINING",
    messages: {
      morning: "Alpha declining. The trend is downward and you should pay attention. Somewhere a leak opened. Audit your last week specifically. What changed? What got worse? What did you start or stop doing? The answer is in the details. Find it.",
      afternoon: "Downward trend. Not a crisis yet, but a warning. What's draining your creative reserves? Is it one big thing or many small things? Sometimes decline is one bad decision. Sometimes it's a thousand paper cuts. Figure out which before it gets worse.",
      evening: "Falling alpha. The trajectory is wrong. Before it becomes a pattern, identify the cause. Was it one event? Accumulated neglect? A change in circumstances? Diagnosis before treatment. You can't fix what you haven't identified.",
      night: "Decline in progress. Don't panic, but don't ignore it. Tomorrow, find the leak. One specific thing that's gotten worse. One specific change you'll make to reverse it. Get granular. 'Be better' doesn't work. Specific actions work. Pick one."
    }
  },

  // BALANCED (fallback for moderate spread)
  balanced: {
    condition: (p) => p.balance === 'balanced' || p.balance === 'imbalanced',
    label: "⚖ IN MOTION",
    messages: {
      morning: "Your three laws are reasonably balanced. No critical weakness. No exceptional strength. Solid foundation. Now push. What's the highest-leverage action you could take today? Which law could you push toward exceptional? Pick one. Move it.",
      afternoon: "Balanced alpha. Everything is working okay. Nothing is broken. The question is: okay or excellent? If you want excellent, one law needs to break away from the pack. Which one? Autonomy? Resonance? Craft? Pick and push.",
      evening: "Stable across the board. Good foundation. Tomorrow, pick one law to level up. Not all three. One. Focus creates breakthroughs. Scattered effort creates plateaus. Where will you concentrate your energy this week?",
      night: "Balance is the foundation. You have it. Now build on it. Before sleeping, choose which law deserves your focused attention this week. Write it down. Make a specific plan. Balanced is good. Balanced and improving is better."
    }
  }
};
