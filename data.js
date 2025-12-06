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
    patterns: ["low_aq", "low_ci", "paralyzed", "ember"],
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
    patterns: ["paralyzed", "low_ci", "untapped", "ember", "grinder"],
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
    patterns: ["paralyzed", "low_ci", "low_ri"],
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
    patterns: ["paralyzed", "low_ci", "low_ri"],
    why: "Gilbert tackles the fear that often accompanies creativity (fear of rejection, of not being original) and gently dismantles it. You'll come away ready to live a creative life on your own terms."
  },
  {
    id: 16,
    title: "Bird by Bird",
    creator: "Anne Lamott",
    type: "book",
    link: "https://www.amazon.com/dp/0385480016",
    duration: "272 pages",
    patterns: ["paralyzed", "low_ci", "low_ri"],
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
    patterns: ["burnout", "low_ci", "low_aq"],
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
    id: "chaos",
    name: "The Chaos Creator",
    subtitle: "Thriving in Instability",
    check: (s) => s.aq < 4 && s.ci >= 5 && s.ri >= 5,
    profile: "You create BECAUSE of chaos, not despite it. Need pressure, constraints, urgency. Your best work comes from crisis. Sustainable? Questionable.",
    insight: "Find controlled chaos. Manufactured deadlines, artificial constraints. You can generate urgency from discipline instead of waiting for desperation."
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
    check: (s) => s.ri >= 7 && s.ci >= 4 && s.aq >= 4,
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
    id: "connector",
    name: "The Connector",
    subtitle: "Relationships Over Output",
    check: (s) => s.ri >= 5 && s.aq >= 4 && s.aq < 6 && s.ci >= 4 && s.ci < 6,
    profile: "Your superpower is connection. People respond to you. Your work resonates more than your output volume suggests. But you're not fully free, and your consistency is shaky.",
    insight: "Stop trying to out-produce people. Your edge is trust. Build one thing your audience actually asked for. Ship it. Then ask them what's next. Co-creation beats solo grinding."
  },
  {
    id: "ember",
    name: "The Ember",
    subtitle: "Potential Awaiting Fuel",
    check: (s) => s.aq >= 4 && s.aq <= 6 && s.ri >= 4 && s.ri <= 6 && s.ci >= 3 && s.ci < 5,
    profile: "The foundation is there. Decent freedom, some resonance, but you're not fully lit. You're an ember — warm, capable of fire, but not yet burning. Something's holding you back from going all-in.",
    insight: "You're one bold decision away from ignition. Not more planning. Not more preparation. One commitment. What would you do this month if you knew you couldn't fail?"
  },
  {
    id: "plateau_walker",
    name: "The Plateau Walker",
    subtitle: "Comfortable But Not Growing",
    check: (s) => s.aq >= 4 && s.aq <= 6 && s.ri >= 4 && s.ri <= 6 && s.ci >= 5 && s.ci <= 6,
    profile: "Nothing is broken. You're functional across the board. But nothing is exceptional either. You've reached a plateau — sustainable, comfortable, and quietly stagnant.",
    insight: "Plateaus feel safe because they are. Growth requires destabilization. Pick ONE law to push to 7+ this quarter. Let the others hold steady. Comfort is the enemy of your next level."
  },

  // === TIER 4: Balanced/positive states ===
  {
    id: "professional",
    name: "The Professional",
    subtitle: "Consistent Across All Fronts",
    check: (s) => s.aq >= 5 && s.aq <= 7.5 && s.ri >= 5 && s.ri <= 7.5 && s.ci >= 5 && s.ci <= 7.5,
    profile: "Solid across the board. No critical weaknesses, no exceptional strengths. Sustainable, competent, making a living. The question is whether you're satisfied here.",
    insight: "You're in the 'good enough' zone. To break through, you'll need to temporarily destabilize. Push one law to exceptional while maintaining the others."
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
    id: "legacy",
    name: "The Legacy Builder",
    subtitle: "Generational Impact",
    check: (s) => s.alpha >= 8,
    profile: "You've transcended personal success. Creating not for validation or money, but because you're the only one who can make THIS thing. Work that will outlast you.",
    insight: "Document everything. Teach. Build systems that can carry your vision forward. Your creativity is a public good now."
  },
  {
    id: "comeback",
    name: "The Comeback Arc",
    subtitle: "Rising From the Ashes",
    check: (s) => s.aq >= 5 && s.ri >= 5 && s.ci >= 2 && s.ci < 5,
    profile: "You had a moment, then disappeared. Now returning with more wisdom, clearer vision, and the freedom to create on your terms. The second act is forming.",
    insight: "Your superpower is perspective earned through failure. The comeback doesn't need to be bigger, just truer. Create from clarity, not desperation."
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
