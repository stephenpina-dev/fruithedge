// ============================================================
// FRUITHEDGE DATA FILE v3.0
// All recommendations, wellness protocols, archetypes, questions
// ============================================================

// ============================================================
// RECOMMENDATIONS (52 total - Books + YouTube Videos + Amazon Films)
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
    topics: ["mindset"],
    style: "philosophical",
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
    topics: ["productivity"],
    style: "tactical",
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
    topics: ["craft", "business"],
    style: "scientific",
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
    topics: ["business"],
    style: "tactical",
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
    topics: ["mindset", "creativity"],
    style: "inspirational",
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
    topics: ["mindset", "craft"],
    style: "philosophical",
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
    topics: ["productivity"],
    style: "tactical",
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
    topics: ["recovery"],
    style: "scientific",
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
    topics: ["recovery"],
    style: "scientific",
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
    topics: ["craft", "productivity"],
    style: "scientific",
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
    topics: ["mindset", "creativity"],
    style: "philosophical",
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
    topics: ["mindset"],
    style: "tactical",
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
    topics: ["mindset"],
    style: "philosophical",
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
    topics: ["connection"],
    style: "tactical",
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
    topics: ["mindset", "creativity"],
    style: "inspirational",
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
    topics: ["craft", "creativity"],
    style: "memoir",
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
    topics: ["mindset"],
    style: "tactical",
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
    topics: ["creativity", "recovery"],
    style: "tactical",
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
    topics: ["creativity"],
    style: "inspirational",
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
    topics: ["creativity", "mindset"],
    style: "tactical",
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
    topics: ["craft"],
    style: "scientific",
    why: "Ever feel like you're putting in hours but not getting better? This book reveals how deliberate practice can break you out of plateaus. It's not about practicing more, but practicing better."
  },
  {
    id: 22,
    title: "Atomic Habits",
    creator: "James Clear",
    type: "book",
    link: "https://www.amazon.com/dp/0735211299",
    duration: "320 pages",
    patterns: ["low_ci", "plateau", "plateau_walker", "grinder", "comeback"],
    topics: ["productivity"],
    style: "tactical",
    why: "If your craft intensity is low because you can't build consistent creative habits, this book provides the most actionable system for making small improvements stick. Clear's framework for habit stacking and identity-based change is essential for any creator who knows what to do but struggles to do it consistently."
  },
  {
    id: 23,
    title: "Die Empty",
    creator: "Todd Henry",
    type: "book",
    link: "https://www.amazon.com/dp/1591846994",
    duration: "240 pages",
    patterns: ["protect_magic", "high_aq", "high_ci"],
    topics: ["mindset"],
    style: "inspirational",
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
    topics: ["creativity", "mindset"],
    style: "philosophical",
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
    topics: ["business", "mindset"],
    style: "philosophical",
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
    topics: ["craft", "mindset"],
    style: "memoir",
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
    topics: ["creativity", "business"],
    style: "memoir",
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
    topics: ["mindset"],
    style: "philosophical",
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
    topics: ["mindset", "craft"],
    style: "inspirational",
    why: "Tim Grover trained Michael Jordan and Kobe Bryant. If your Craft Intensity is low because you're soft on yourself, this book will either wake you up or piss you off."
  },
  {
    id: 30,
    title: "Can't Hurt Me",
    creator: "David Goggins",
    type: "book",
    link: "https://www.amazon.com/dp/1544512287",
    duration: "364 pages",
    patterns: ["low_ci", "paralyzed", "paralyzed_dreamer", "plateau_walker", "grinder"],
    topics: ["mindset"],
    style: "memoir",
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
    topics: ["mindset", "creativity"],
    style: "inspirational",
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
    topics: ["craft", "mindset"],
    style: "inspirational",
    why: "Only a couple minutes long, but life-changing. Ira Glass explains why your output doesn't yet live up to your taste. The only way to close the gap is to keep creating."
  },
  {
    id: 33,
    title: "How to Get Anything You Want",
    creator: "Alex Hormozi (Diary of a CEO)",
    type: "video",
    link: "https://www.youtube.com/watch?v=XatVNXwLrXo",
    duration: "2 hr 11 min",
    patterns: ["low_aq", "underground_gem", "plateau", "grinder"],
    topics: ["business"],
    style: "tactical",
    why: "Hormozi built $100M+ businesses and shares the tactical mindset shifts that create leverage. If you're grinding without progress or have talent without freedom, his framework for value creation and pricing will reshape how you think about converting creative skill into autonomy."
  },
  {
    id: 34,
    title: "Jerry Seinfeld on How to Write a Joke",
    creator: "Tim Ferriss Show",
    type: "video",
    link: "https://www.youtube.com/watch?v=yNTmFORn3xQ",
    duration: "1 hr 30 min",
    patterns: ["craftsperson_no_message", "low_ri", "low_ci"],
    topics: ["craft"],
    style: "tactical",
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
    topics: ["mindset", "business"],
    style: "memoir",
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
    topics: ["creativity", "productivity"],
    style: "scientific",
    why: "Cleese explains 'open mode' (playful, creative) vs 'closed mode' (anxious, executive). If you can't seem to access flow, this framework gives you practical methods."
  },
  {
    id: 37,
    title: "Creative Quest",
    creator: "Questlove",
    type: "book",
    link: "https://www.amazon.com/dp/0062670573",
    duration: "304 pages",
    patterns: ["low_ri", "craftsperson_no_message", "plateau", "connector"],
    topics: ["creativity", "connection"],
    style: "memoir",
    why: "Questlove has collaborated with everyone from D'Angelo to Hamilton. His meditation on creativity explores how to stay curious, embrace collaboration, and keep resonance alive across decades. Essential for craftspeople who need more soul in their work and connectors who want to understand creative chemistry."
  },
  {
    id: 38,
    title: "Tyler, the Creator on Finding Your Voice",
    creator: "Tyler, the Creator",
    type: "video",
    link: "https://www.youtube.com/watch?v=DVuYSWp5ISO",
    duration: "15 min",
    patterns: ["underground_gem", "low_aq", "low_ri"],
    topics: ["creativity", "connection"],
    style: "inspirational",
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
    topics: ["mindset", "creativity"],
    style: "philosophical",
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
    topics: ["craft", "connection"],
    style: "memoir",
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
    topics: ["craft", "creativity"],
    style: "inspirational",
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
    topics: ["recovery", "craft"],
    style: "memoir",
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
    topics: ["creativity", "craft"],
    style: "inspirational",
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
    topics: ["craft", "connection"],
    style: "tactical",
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
    topics: ["mindset", "business"],
    style: "inspirational",
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
    topics: ["creativity", "mindset"],
    style: "philosophical",
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
    topics: ["connection"],
    style: "inspirational",
    why: "A wild cautionary tale about art and authenticity. If your Resonance is low because you've been focusing on style over substance, this film will hit you in the gut."
  },
  {
    id: 48,
    title: "Perennial Seller",
    creator: "Ryan Holiday",
    type: "book",
    link: "https://www.amazon.com/dp/0143109014",
    duration: "256 pages",
    patterns: ["high_ri", "protect_magic", "plateau", "craftsperson_no_message"],
    topics: ["business", "craft"],
    style: "tactical",
    why: "You've built resonance. Now how do you make it last? Holiday studied works that endured for decades and extracted the principles. If you're protecting what's working or trying to create something timeless rather than viral, this book reframes success as longevity rather than spikes."
  },
  {
    id: 49,
    title: "Give and Take",
    creator: "Adam Grant",
    type: "book",
    link: "https://www.amazon.com/dp/0143124986",
    duration: "320 pages",
    patterns: ["connector", "low_ri", "underground_gem", "plateau"],
    topics: ["connection", "business"],
    style: "scientific",
    why: "Grant's research proves that givers—not takers or matchers—end up most successful. For connectors who build through relationships or underground gems struggling to convert resonance into opportunity, this reframes generosity as strategy and shows how to give without burning out."
  },
  {
    id: 50,
    title: "Digital Minimalism",
    creator: "Cal Newport",
    type: "book",
    link: "https://www.amazon.com/dp/0525536515",
    duration: "304 pages",
    patterns: ["monk", "low_aq", "low_ci", "high_distraction"],
    topics: ["productivity", "mindset"],
    style: "tactical",
    why: "Newport makes the case for intentional technology use. If you're a monk-type who craves deep focus but battles digital noise, or anyone whose autonomy and craft intensity suffer from attention leaks, this provides a philosophy and practical framework for reclaiming your mind."
  },
  {
    id: 51,
    title: "Peak Performance",
    creator: "Brad Stulberg & Steve Magness",
    type: "book",
    link: "https://www.amazon.com/dp/162336793X",
    duration: "240 pages",
    patterns: ["grinder", "hustler", "burnout", "high_ci"],
    topics: ["recovery", "productivity"],
    style: "scientific",
    why: "The science of sustainable excellence. If you're a grinder who pushes hard but risks collapse, or a hustler who needs to maintain intensity without burning out, this book balances the growth equation: stress + rest = growth. The missing manual for high performers."
  },
  {
    id: 52,
    title: "Mastery",
    creator: "Robert Greene",
    type: "book",
    link: "https://www.amazon.com/dp/014312417X",
    duration: "352 pages",
    patterns: ["monk", "grinder", "plateau", "craftsperson_no_message", "low_ci"],
    topics: ["craft", "mindset"],
    style: "philosophical",
    why: "Greene studied history's greatest masters—Darwin, Mozart, da Vinci—to extract the path to mastery. For monks pursuing depth, grinders seeking purpose in their intensity, or anyone plateaued in their craft, this book reveals the apprenticeship mindset and the 10,000 hour journey ahead."
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
    patterns: ["low_aq", "low_energy", "burnout"],
    validTimes: ["morning"],
    validSeasons: ["spring", "summer", "fall"]
  },
  {
    id: 2,
    name: "Step Tracking",
    category: "physical",
    prescription: "Aim for 7,000 steps daily. Track it.",
    why: "What gets measured gets managed. Movement compounds into energy.",
    patterns: ["low_aq", "low_ci", "plateau"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 3,
    name: "Lemon Water",
    category: "physical",
    prescription: "Warm water with half a lemon, first thing.",
    why: "Hydration + vitamin C before caffeine. Your liver will thank you.",
    patterns: ["low_aq", "burnout"],
    validTimes: ["morning"],
    validSeasons: ["all"]
  },
  {
    id: 4,
    name: "Sleep by 11",
    category: "physical",
    prescription: "Non-negotiable lights-out by 11pm.",
    why: "Every hour before midnight is worth two after. Protect your sleep.",
    patterns: ["low_aq", "low_ci", "burnout"],
    validTimes: ["evening", "night"],
    validSeasons: ["all"]
  },
  {
    id: 5,
    name: "No Screens After 9pm",
    category: "physical",
    prescription: "All screens off by 9pm. Read, stretch, or talk.",
    why: "Blue light kills melatonin. Your sleep quality affects tomorrow's creativity.",
    patterns: ["low_aq", "low_ci"],
    validTimes: ["evening", "night"],
    validSeasons: ["all"]
  },
  {
    id: 6,
    name: "Cold Shower Finish",
    category: "physical",
    prescription: "Last 30 seconds of shower on cold.",
    why: "Builds stress tolerance. If you can handle this, you can handle creative discomfort.",
    patterns: ["low_ci", "paralyzed"],
    validTimes: ["morning", "afternoon", "evening"],
    validSeasons: ["all"]
  },
  {
    id: 7,
    name: "Stretch for 5",
    category: "physical",
    prescription: "5 minutes of stretching before deep work.",
    why: "Body tension becomes mental tension. Release it first.",
    patterns: ["low_ci", "low_aq"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 8,
    name: "Hydration Check",
    category: "physical",
    prescription: "8 glasses of water minimum. Track it.",
    why: "Dehydration causes brain fog. Most creatives are chronically dehydrated.",
    patterns: ["low_ci", "low_aq", "plateau"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 9,
    name: "Sunlight in Eyes",
    category: "physical",
    prescription: "10 minutes of outdoor light within 1 hour of waking.",
    why: "Sets your circadian rhythm. Energy begets energy.",
    patterns: ["low_aq", "burnout"],
    validTimes: ["morning"],
    validSeasons: ["all"]
  },
  {
    id: 10,
    name: "Movement Snack",
    category: "physical",
    prescription: "2 minutes of movement every hour. Set a timer.",
    why: "Sitting is the new smoking. Brief movement resets focus.",
    patterns: ["low_ci", "plateau"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },

  // === MENTAL SPACE (10) ===
  {
    id: 11,
    name: "Brain Dump",
    category: "mental",
    prescription: "Write everything in your head onto paper. Empty the RAM.",
    why: "Your mind is for having ideas, not holding them. Get them out.",
    patterns: ["low_aq", "low_space"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 12,
    name: "One Task Tomorrow",
    category: "mental",
    prescription: "Before bed, write the ONE thing for tomorrow.",
    why: "Decision fatigue kills mornings. Decide tonight.",
    patterns: ["low_ci", "low_aq"],
    validTimes: ["evening", "night"],
    validSeasons: ["all"]
  },
  {
    id: 13,
    name: "2-Minute Meditation",
    category: "mental",
    prescription: "Not 20 minutes. Just 2. Breathe.",
    why: "The best meditation is the one you'll actually do.",
    patterns: ["low_aq", "low_space", "burnout"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 14,
    name: "No Phone First Hour",
    category: "mental",
    prescription: "Wake up, don't check anything for 60 minutes.",
    why: "Your morning sets your day. Don't give it to other people's priorities.",
    patterns: ["low_aq", "low_ci"],
    validTimes: ["morning"],
    validSeasons: ["all"]
  },
  {
    id: 15,
    name: "Weekly Review",
    category: "mental",
    prescription: "30 minutes Sunday to review the week and plan the next.",
    why: "Reflection is how you compound learning. Don't skip it.",
    patterns: ["plateau", "low_ci"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 16,
    name: "Gratitude Note",
    category: "mental",
    prescription: "Write one thing you're grateful for. Daily.",
    why: "Gratitude shifts focus from scarcity to abundance. Creativity follows.",
    patterns: ["low_aq", "burnout", "low_ri"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 17,
    name: "Inbox Zero Session",
    category: "mental",
    prescription: "30 minutes to clear email completely. Then close it.",
    why: "Email is other people's to-do list. Process it, then protect your time.",
    patterns: ["low_aq", "low_ci"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 18,
    name: "Unsubscribe Purge",
    category: "mental",
    prescription: "Unsubscribe from 10 emails today.",
    why: "Every unnecessary input is a decision drain. Reduce the noise.",
    patterns: ["low_aq", "low_space"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 19,
    name: "App Delete",
    category: "mental",
    prescription: "Remove one time-wasting app from your phone.",
    why: "The app will survive without you. Will your creativity survive with it?",
    patterns: ["low_ci", "plateau"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 20,
    name: "Notification Audit",
    category: "mental",
    prescription: "Turn off all non-essential notifications.",
    why: "Every buzz is a broken thought. Protect your attention.",
    patterns: ["low_ci", "low_aq"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },

  // === CREATIVE PRACTICE (10) ===
  {
    id: 21,
    name: "15 Minutes of Play",
    category: "creative",
    prescription: "Create something with zero stakes. No publishing.",
    why: "Play is where creativity lives. No pressure, no performance.",
    patterns: ["low_ri", "low_ci", "paralyzed"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 22,
    name: "Consume Intentionally",
    category: "creative",
    prescription: "Watch/read ONE thing fully. No multitasking.",
    why: "Fragmented consumption creates fragmented output. Go deep.",
    patterns: ["low_ri", "plateau"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 23,
    name: "Copy Work",
    category: "creative",
    prescription: "Hand-copy a piece of writing or art you admire.",
    why: "Copying teaches what reading can't. Feel how the masters work.",
    patterns: ["low_ci", "plateau", "low_ri"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 24,
    name: "Analog Hour",
    category: "creative",
    prescription: "One hour of creative work with no digital tools.",
    why: "Screens enable, but they also distract. Try creating without them.",
    patterns: ["low_ci", "paralyzed"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 25,
    name: "Ship Something Small",
    category: "creative",
    prescription: "Publish one tiny thing this week. Imperfect is fine.",
    why: "Shipping is a muscle. Train it with small reps.",
    patterns: ["low_ci", "paralyzed", "low_ri"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 26,
    name: "Call a Creative Friend",
    category: "creative",
    prescription: "15-minute voice call with another creative. Not text.",
    why: "Isolation breeds stagnation. Connection breeds ideas.",
    patterns: ["low_ri", "burnout", "plateau"],
    validTimes: ["morning", "afternoon", "evening"],
    validSeasons: ["all"]
  },
  {
    id: 27,
    name: "Visit a Museum or Park",
    category: "creative",
    prescription: "Change your visual input. Go somewhere that feeds you.",
    why: "You can't pour from an empty cup. Fill it with beauty.",
    patterns: ["low_ri", "burnout", "plateau"],
    validTimes: ["morning", "afternoon", "evening"],
    validSeasons: ["spring", "summer", "fall"]
  },
  {
    id: 28,
    name: "Read 20 Pages",
    category: "creative",
    prescription: "Physical book. No Kindle. 20 pages minimum.",
    why: "Books are concentrated thought. Absorb someone else's perspective.",
    patterns: ["low_ri", "plateau", "low_ci"],
    validTimes: ["morning", "afternoon", "evening"],
    validSeasons: ["all"]
  },
  {
    id: 29,
    name: "Learn One New Thing",
    category: "creative",
    prescription: "Watch a tutorial on a skill adjacent to yours.",
    why: "Cross-pollination is where innovation lives.",
    patterns: ["plateau", "low_ci"],
    validTimes: ["morning", "afternoon", "evening"],
    validSeasons: ["all"]
  },
  {
    id: 30,
    name: "Document Your Process",
    category: "creative",
    prescription: "Take photos or notes of your work-in-progress.",
    why: "Documentation forces reflection. Share it or keep it, but capture it.",
    patterns: ["low_ri", "plateau"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },

  // === CONSTRAINT REDUCTION (10) ===
  {
    id: 31,
    name: "Say No Once",
    category: "constraint",
    prescription: "Decline one request this week.",
    why: "Every yes is a no to something else. Protect your creative time.",
    patterns: ["low_aq", "high_constraint"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 32,
    name: "Cancel One Thing",
    category: "constraint",
    prescription: "Remove one commitment from your calendar.",
    why: "Subtraction creates space. What can you eliminate?",
    patterns: ["low_aq", "burnout"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 33,
    name: "Automate One Task",
    category: "constraint",
    prescription: "Bill pay, email filter, recurring order. Anything.",
    why: "Every automated task is a freed decision. Compound the savings.",
    patterns: ["low_aq", "low_ci"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 34,
    name: "Delegate One Task",
    category: "constraint",
    prescription: "Pay someone to do something you hate.",
    why: "Your time has value. Spend it on what only you can do.",
    patterns: ["low_aq", "hustler"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 35,
    name: "Batch Your Admin",
    category: "constraint",
    prescription: "All emails/calls in one 2-hour block. Not scattered.",
    why: "Context switching kills creativity. Batch the boring stuff.",
    patterns: ["low_ci", "low_aq"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 36,
    name: "Set Office Hours",
    category: "constraint",
    prescription: "Tell people when you're available. Stick to it.",
    why: "Availability on demand kills deep work. Set boundaries.",
    patterns: ["low_aq", "low_ci"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 37,
    name: "Financial Check",
    category: "constraint",
    prescription: "15 minutes reviewing your money situation.",
    why: "Financial anxiety drains creative energy. Face it to free yourself.",
    patterns: ["low_aq", "underground_gem"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 38,
    name: "Eliminate One Subscription",
    category: "constraint",
    prescription: "Cancel something you don't use.",
    why: "Subscriptions are tiny energy leaks. Plug them.",
    patterns: ["low_aq", "plateau"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 39,
    name: "Clean One Space",
    category: "constraint",
    prescription: "Desk, room, or digital folder. Just one.",
    why: "External order creates internal clarity.",
    patterns: ["low_aq", "low_space", "low_ci"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 40,
    name: "Set a Boundary",
    category: "constraint",
    prescription: "Tell someone what you need from them.",
    why: "Unspoken needs become resentment. Speak up.",
    patterns: ["low_aq", "burnout"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },

  // === FRUIT PROTOCOLS (5) ===
  {
    id: 41,
    name: "Apple Baseline",
    category: "fruit",
    prescription: "Eat an apple. Sometimes the answer is simple.",
    why: "Before optimizing, try the basics. Nutrition affects cognition.",
    patterns: ["all"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 42,
    name: "Banana Before Flow",
    category: "fruit",
    prescription: "Eat a banana before deep work session.",
    why: "Potassium for focus. Quick energy without the crash.",
    patterns: ["low_ci"],
    validTimes: ["anytime"],
    validSeasons: ["all"]
  },
  {
    id: 43,
    name: "Citrus Morning",
    category: "fruit",
    prescription: "Orange or grapefruit with breakfast.",
    why: "Vitamin C, hydration, and a sensory wake-up call.",
    patterns: ["low_aq", "burnout"],
    validTimes: ["morning"],
    validSeasons: ["winter", "spring"]
  },
  {
    id: 44,
    name: "Berry Snack",
    category: "fruit",
    prescription: "Handful of blueberries in the afternoon.",
    why: "Brain food. Antioxidants for cognitive function.",
    patterns: ["low_ci", "plateau"],
    validTimes: ["morning", "afternoon", "evening"],
    validSeasons: ["summer"]
  },
  {
    id: 45,
    name: "Melon Hydration",
    category: "fruit",
    prescription: "Watermelon when you've been grinding.",
    why: "92% water. When you're too busy to drink, eat your hydration.",
    patterns: ["hustler", "burnout"],
    validTimes: ["anytime"],
    validSeasons: ["summer"]
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
  // BOTTLENECK: Energy (day-aware)
  energy_bottleneck: {
    condition: (p) => p.bottleneck.name === 'energy' && p.raw.energy <= 4,
    label: "⚡ ENERGY CRISIS",
    messages: {
      monday: {
        morning: "Monday morning with empty reserves is a slow motion disaster. The week ahead requires energy you do not have. Before you plan a single thing, answer one question: what drained you last week? Name it. Now protect against it this week. Block recovery time TODAY. Not Friday. Today. A week built on depletion compounds into collapse by Thursday.",
        afternoon: "Monday afternoon already running on fumes. The week just started and you are already in energy debt. Stop. Do not push through. That is how creative death begins. What is the minimum viable Monday? Do only that. Protect tomorrow by not destroying today. One sustainable week beats five burnout cycles.",
        evening: "Monday evening with nothing left. The week barely started. This is not a work ethic problem. Something is fundamentally wrong with how your weeks begin. Before Tuesday, identify one thing: what drained you before the week even started? That thing needs to die. Name it specifically. Then kill it.",
        night: "Monday night and you are empty. The week is four days away from Friday and you are already cooked. Do not set ambitious goals for tomorrow. Set survival goals instead. Sleep is the only task that matters right now. Tomorrow, protect your morning like your career depends on it. It does."
      },
      friday: {
        morning: "Friday morning with no energy. You gave the week everything and it took more. Do not try to finish strong. That is ego talking. Finish smart. What can you cut from today? Cut it. Protect the weekend. Recovery is not a reward for completing the week. It is a requirement for surviving the next one.",
        afternoon: "Friday afternoon on empty. The weekend is close but you might not make it with anything left. Energy depletion is not just tiredness. It is creative death. Lower the bar for today. Way lower. What is the one thing that absolutely must happen before Monday? Do only that. Everything else is negotiable.",
        evening: "Friday evening and you are depleted. The week won this time. But the weekend is yours. Do not fill it with obligations. Do not say yes to anything tonight. Guard the next 48 hours like they are sacred. Because they are. Your next week depends entirely on how you recover this weekend.",
        night: "Friday night and you are running on nothing. The week is over. Stop thinking about it. Whatever did not get done will wait. Your only job now is recovery. Not Netflix recovery. Real recovery. Sleep. Silence. Space. Monday you will need energy you do not currently have. Build it this weekend."
      },
      saturday: {
        morning: "Saturday morning with low energy. The week took too much from you. Today is not for productivity. Today is not for catching up. Today is for restoration. What would actually fill your tank? Not distraction. Genuine restoration. Do that one thing. Nothing else matters today. Protect it.",
        afternoon: "Saturday afternoon still depleted. You are not recovering fast enough. Energy depletion is not just tiredness. It is creative death. What is still draining you? Work thoughts? Obligations? Guilt about resting? Name the specific leak and plug it now. The weekend is half over. Protect what remains fiercely.",
        evening: "Saturday evening and energy still low. Tomorrow is Sunday. Your last day before the cycle restarts. What would make tomorrow genuinely restorative instead of anxious? Plan that now. Not work. Not prep. Actual rest that fills your tank. Your future self needs you to protect tomorrow.",
        night: "Saturday night running on empty. One more day before Monday. You are not recovered yet. Tomorrow needs to be different. No screens in the morning. No obligations until afternoon at least. Guard Sunday like it is the most important day of your week. Because right now, it truly is."
      },
      sunday: {
        morning: "Sunday morning with depleted reserves. This is your last chance to recover before the week begins. Do not waste it on anxiety about Monday. Do not waste it on catching up. What would actually restore you? Not distract you. Genuinely restore you. Do only that today. Protect it fiercely.",
        afternoon: "Sunday afternoon still running low. Monday is coming and you are not ready. But you can not sprint into readiness. You can only rest into it. What would make the next few hours restorative? Not productive. Restorative. The week will demand everything. Give yourself something first.",
        evening: "Sunday evening with nothing in the tank. Monday is tomorrow and you are not recovered. This is a real crisis. Do not prepare for the week. Do not review your calendar. Do one thing: go to bed early. Stupidly early. Sleep is the only intervention that matters now. Everything else can wait.",
        night: "Sunday night and you are empty. Monday is hours away. You can not fix this tonight. But you can stop making it worse. No screens. No planning. No anxiety spiraling. Just rest. Tomorrow will be hard regardless. But it will be much harder if you do not sleep right now. Let go completely."
      },
      midweek: {
        morning: "Midweek morning with no energy. You started the week okay but something drained you. What changed? What happened Monday or Tuesday that emptied your tank? Name it specifically. That pattern will repeat next week unless you identify it now. Protect today fiercely. Find and plug the leak.",
        afternoon: "Midweek afternoon on empty. You are in the middle of the marathon and you have hit the wall. Do not push through. That makes it worse. What is the minimum viable rest of the day? Do only that. Thursday and Friday you will need reserves you do not currently have. Start building them now.",
        evening: "Midweek evening with nothing left. The week is half over but you are fully depleted. Something is fundamentally wrong with how you are working. Too many meetings? Too little recovery? Too much context switching? Identify the specific energy thief tonight. Tomorrow, change one thing.",
        night: "Midweek night running on fumes. You will not make it to Friday at this rate. Not sustainably. Tomorrow morning, protect your first two hours like they are sacred. No meetings. No messages. No demands at all. Just recovery and your single most important task. Everything else can wait."
      }
    }
  },

  // BOTTLENECK: Mental Space (day-aware)
  space_bottleneck: {
    condition: (p) => p.bottleneck.name === 'space' && p.raw.space <= 4,
    label: "🌫 MENTAL OVERLOAD",
    messages: {
      monday: {
        morning: "Monday morning with a cluttered mind. The week has not started and your head is already full. Before you add a single task, get the current noise out. Write down every open loop. Every worry. Every should. All of it. Your mind is for having ideas, not holding them. Empty it before the week fills it more.",
        afternoon: "Monday afternoon with mental overload. The week just started and there is no room for new information. Stop consuming. Stop adding. Spend 15 minutes right now writing down what is occupying your mind. Just writing it creates space. You can not think clearly until you clear the queue.",
        evening: "Monday evening with a full head. The week ahead is invisible because today is blocking the view. No space means no creativity. Before tomorrow, do a complete brain dump. Every task, worry, idea, obligation. Get it out of your head and onto paper. Tuesday needs a clearer mind than today had.",
        night: "Monday night with racing thoughts. The week looms and your brain will not stop processing. Do not fight it. Write it. Every thought that surfaces, capture it. The goal is not to solve anything tonight. The goal is to externalize so your brain can rest. Sleep clears the mental cache. Let it."
      },
      friday: {
        morning: "Friday morning with mental clutter. The week piled up and your head is full of unfinished business. Good news: you do not have to solve it all today. Pick the three things that would haunt you all weekend if they stayed open. Do those. Just those only. Let the rest wait until Monday.",
        afternoon: "Friday afternoon with no mental space. The week is ending but the thoughts are not. Before the weekend, close your open loops. Not all of them. The specific ones that will nag you Saturday morning. Send the message. Make the decision. File the thing. Clear enough space to actually rest.",
        evening: "Friday evening with a crowded mind. The week is over but your brain did not get the memo. Write down everything still spinning. Then physically close your work. Shut the laptop. Leave the room entirely. Your brain needs environmental cues that the week is done. Give them to it clearly.",
        night: "Friday night with thoughts still racing. The week is over. Let it go. Whatever is unfinished will be unfinished whether you think about it or not. Write down the top three things for Monday. Then close the document. You have given your brain permission to release the week. Now rest."
      },
      saturday: {
        morning: "Saturday morning with a busy mind. The week should be behind you but it is still taking up space. This is not about discipline. It is about ritual. Take 10 minutes to write down everything work related that is still in your head. Then put that paper somewhere you can not see it. Reclaim your weekend.",
        afternoon: "Saturday afternoon still mentally cluttered. You are physically free but mentally still at work. What is occupying you? Name it specifically. Is it a task? A worry? A decision? Whatever it is, write it down and tell yourself: Monday. Not today. Monday. Give yourself permission to release it.",
        evening: "Saturday evening with a full mind. Tomorrow is your last free day and you are spending mental energy on things you can not control right now. What would actually give you peace tonight? Not distraction. Genuine peace. Find that thing and do it. The mental clutter will wait. It always does.",
        night: "Saturday night still processing the week. Your brain needs idle time to consolidate and clear. No inputs. No screens. No problems to solve. Just space. Let yourself be bored for once. Boredom is how your brain defragments. You need that defragmentation more than you need entertainment."
      },
      sunday: {
        morning: "Sunday morning with mental overload. The weekend is almost over and your head is still full. Before the week starts, you need space. Not productivity. Space. Take 30 minutes for a complete brain dump. Everything in your head onto paper. Then take a walk with no phone. Let your mind settle.",
        afternoon: "Sunday afternoon with a cluttered mind. Monday is coming and there is no room for it. No space means no creativity. This afternoon is for clearing, not preparing. What thoughts keep intruding? Write them down. Every single one. The act of writing them releases their grip on your attention.",
        evening: "Sunday evening with racing thoughts. The week is about to start and your mind is still full of last week. You need a clean slate. Write down every open loop. Then write down the one thing that would make Monday successful. Just one. Let everything else fade. Simplicity creates clarity.",
        night: "Sunday night with a busy brain. Monday is hours away and you are not mentally ready. Do not try to prepare more. Try to release more. Write down the top three priorities for tomorrow. Then let everything else go. Your brain can not process the new week until it releases the old one."
      },
      midweek: {
        morning: "Midweek morning with no mental space. The week is piling up and your head is full. Before you add anything else, subtract something. Write down everything currently occupying your mind. Then pick one thing to decide right now. One thing to delegate. One thing to delete. Make room before you make progress.",
        afternoon: "Midweek afternoon with mental overload. You are in the thick of the week and your mind is thick with noise. Step outside for 10 minutes. No phone. Let your brain idle. When you return, write down what is actually important versus what is just loud. They are usually different lists.",
        evening: "Midweek evening with a crowded head. The week is half over but the mental load is not half done. Before tomorrow, identify what is actually urgent versus what is just present. Most of what is in your head can wait. Find the two or three things that cannot. Focus only on those tomorrow.",
        night: "Midweek night with racing thoughts. The week will not stop spinning in your head. Write it down. All of it. The brain dump is not optional when your mind is this full. You can not sleep well with this much mental clutter. Externalize it. Tomorrow you can organize it. Tonight, just release it."
      }
    }
  },

  // BOTTLENECK: Optionality (day-aware)
  optionality_bottleneck: {
    condition: (p) => p.bottleneck.name === 'optionality' && p.raw.optionality <= 4,
    label: "🔒 TRAPPED",
    messages: {
      monday: {
        morning: "Monday morning feeling trapped. The week ahead looks like last week. And the week before that. Same constraints, same walls, same lack of options. But Monday is also a reset. One small door you could open this week. Not an escape. A crack. What is it? Name it before the week buries you in routine.",
        afternoon: "Monday afternoon with no options. The week is already taking its predictable shape. But predictability is not destiny. Feeling trapped compounds over time. What is one assumption you are making about your constraints? Question it. Really question it. Most prisons are made of beliefs, not bars.",
        evening: "Monday evening feeling stuck. The week has started and the walls are already visible. Before Tuesday, write down what is actually stopping you from changing direction. Is it real? Financial? Social? Habitual? Be very specific about it today. Vague traps are the hardest to escape.",
        night: "Monday night feeling locked in. The week ahead offers no new paths. Or does it? Options are not found. They are built. What is one small door you could start constructing this week? Not a dramatic escape. A small expansion of possibility. Write it down tonight specifically. Start tomorrow."
      },
      friday: {
        morning: "Friday morning still feeling trapped. The week is ending and nothing changed. But the weekend is different. The weekend is yours. What option could you explore in the next 48 hours? A conversation, a search, a small experiment. The cage has a key. You have to actively look for it.",
        afternoon: "Friday afternoon with no options in sight. The week repeated the same patterns. Again. Feeling trapped compounds over time. Before the weekend, ask yourself: what would you do if you had permission? You might have more permission than you think. The trap might be entirely internal.",
        evening: "Friday evening feeling stuck. Another week in the same place. But weekends are for possibilities. Not escape. Exploration. What is one path you have been afraid to even research? This weekend, research it. Just look at it closely. Information creates options. Knowledge opens doors.",
        night: "Friday night with low optionality. The week is over but the trap remains. Tomorrow is different. Tomorrow you have time to think. Use it to map your constraints. Which are real? Which are assumed? Which could change if you pushed? The weekend is for seeing clearly what the week obscures."
      },
      saturday: {
        morning: "Saturday morning feeling trapped. Even the weekend feels constrained. But today is actually yours. No meetings. No obligations you did not choose. What would you do today if the trap did not exist? Do some version of that thing. Even small freedom is real freedom. Claim it today.",
        afternoon: "Saturday afternoon with no options. The freedom of the weekend should feel expansive but it does not. Feeling trapped compounds over time. Why does it persist? What is constraining you even now? Is it real or is it a story you keep telling yourself? Today, question that story closely.",
        evening: "Saturday evening still feeling stuck. Tomorrow the Sunday anxiety might start. Before it does, write down one option you have been ignoring. Something you could pursue if you decided to. The option exists. You are choosing not to see it. Ask yourself honestly: why is that exactly?",
        night: "Saturday night with low optionality. The weekend is half gone and nothing changed. But change does not require weekends. It requires decisions. What decision have you been avoiding making? Name it specifically. You do not have to make it tonight. Just name it clearly and honestly."
      },
      sunday: {
        morning: "Sunday morning feeling trapped. The week ahead looks like the week behind. But you have today. A full day before the cycle restarts. What would make you feel less stuck? Not a complete escape. A small opening. Find that today. Even just planning an escape is a real form of freedom.",
        afternoon: "Sunday afternoon with no options. Monday is coming and it feels inevitable. But inevitability is a feeling, not a fact. What is one thing you could do differently this week? Not everything. One thing. Small options compound into big changes over time. Start small today. Plan it now.",
        evening: "Sunday evening feeling locked in. The week is about to start and it looks identical to last week. Before you accept that, ask: what would you change if you could change one thing? You probably can change that thing. The trap is usually much smaller than it appears to be from here.",
        night: "Sunday night with low optionality. Monday feels like a cage door closing. But what if this week you did one thing different? Took one meeting you would not normally take. Said no to one thing you always say yes to. Small rebellions create options. Plan one rebellion for this week."
      },
      midweek: {
        morning: "Midweek morning feeling trapped. You are in the middle of the routine and the walls are solid. But routines have cracks in them. What is one small thing you could do differently today? Not a revolution. A crack. Small deviations accumulate into new directions. Find one crack today.",
        afternoon: "Midweek afternoon with no options. The week is half over and nothing has changed. But half the week remains. What is one assumption about your situation that might be wrong? Question it seriously. Options hide behind assumptions we never bother to examine. Look closer today and see.",
        evening: "Midweek evening feeling stuck. The week is taking its usual shape. Feeling trapped compounds over time. Before Thursday, identify one constraint that is actually a choice. Something you think you have to do that you actually decided to do. What if you decided differently now? Consider it.",
        night: "Midweek night with low optionality. The week will end like it began. Unless something changes. You can not change everything. But you can change something. What is the smallest change that would create the most space for you? Identify it tonight specifically. Try it tomorrow morning."
      }
    }
  },

  // BOTTLENECK: Freedom (high constraint) (day-aware)
  constraint_bottleneck: {
    condition: (p) => p.bottleneck.name === 'freedom' && p.raw.constraint >= 7,
    label: "⛓ OBLIGATION OVERLOAD",
    messages: {
      monday: {
        morning: "Monday morning under heavy obligations. The week is already claimed by others before it began. Every yes is a no to something else. Before the avalanche starts, protect one hour. Just one. Put it on the calendar right now. Label it unavailable. Guard it like your creative life depends on it. Because it does.",
        afternoon: "Monday afternoon drowning in obligations. The week just started and you have already given it away. Obligation overload does not just cost time. It costs your soul. What is one thing you could cancel this week? Not should cancel. Could cancel. The world will not end. Your creativity might begin.",
        evening: "Monday evening crushed by constraints. The week took everything today. Every yes to others is a no to yourself. Before Tuesday, look at your calendar. What is one thing that is on there out of habit, not necessity? Question it. Kill it. Make space before the week makes more demands.",
        night: "Monday night overloaded with obligations. The week is four days from over and you are already exhausted by what you owe. This is not just about time. It is about your soul. Tomorrow, say no to one thing. Just one. Not a big no. A small no. Small nos create small spaces. Small spaces become room to breathe."
      },
      friday: {
        morning: "Friday morning still carrying heavy obligations. The week demanded everything and you gave it. Every yes was a no to yourself. Today, take something back. Not permission. You do not need permission. Just take it. One hour that belongs to you. Not to anyone else. You. Set that boundary now.",
        afternoon: "Friday afternoon under the weight of constraints. The weekend is close but obligations are following you. Obligation overload does not just cost time. It costs your soul. Before you leave today, cancel one thing for next week. Create future space. Give next week you a gift that this week you could not have.",
        evening: "Friday evening overloaded. The week took more than it deserved. Every yes to others was a no to yourself. The weekend is yours. Do not let obligations follow you. What commitment could you drop for the next 48 hours? Drop it. Not delay it. Drop it completely. Protect the weekend.",
        night: "Friday night crushed by constraints. The week is over but the obligations are not. This is not just about time. It is about your soul. Draw a line. Everything on the other side of that line is for Monday. Not Sunday. Monday. The weekend is for recovery. Recovery is not negotiable."
      },
      saturday: {
        morning: "Saturday morning and obligations still pressing. Even the weekend is not free. Every yes to others is a no to yourself. What is claiming your Saturday? Is it necessary or just expected? Expectations can be disappointed. Your creative energy cannot be endlessly borrowed. Set one boundary today.",
        afternoon: "Saturday afternoon with too many constraints. The weekend should be open but it is not. Obligation overload does not just cost time. It costs your soul. What could you cancel today? What expectation could you disappoint? Sometimes disappointing others is how you stop disappointing yourself.",
        evening: "Saturday evening still obligated. Tomorrow is Sunday. Your last free day. Protect it fiercely. Every yes to others is a no to yourself. Whatever is trying to claim tomorrow, question whether it has the right. Your time is not infinite. Spend it like it matters. Set that boundary tonight.",
        night: "Saturday night under constraints. Sunday is coming and it needs to be different. Obligation overload does not just cost time. It costs your soul. Before you sleep, decide: what will Sunday be for? Not for obligations. For you. Make that decision now and defend it tomorrow fiercely."
      },
      sunday: {
        morning: "Sunday morning with heavy obligations. Even today is claimed. Every yes is a no to yourself. But by whom? By what? Make a list of everything you think you have to do today. Now cross off everything that is not truly mandatory. How much remains? Probably less than you thought. Reclaim the rest.",
        afternoon: "Sunday afternoon drowning in constraints. Monday is coming and today was supposed to be recovery. Obligation overload does not just cost time. It costs your soul. What stole it? Name the thief. Sometimes naming it is enough to stop giving it your time. What can you reclaim for the next few hours?",
        evening: "Sunday evening overloaded. The week starts tomorrow and you did not get a weekend. This is not sustainable. Every yes is a no to yourself. Before the week begins, identify one obligation for next week that you will not meet. Not can not. Will not. The choice is yours. Set that boundary now.",
        night: "Sunday night crushed by constraints. The week is about to add more weight to what you already carry. But weight can be put down. Obligation overload does not just cost time. It costs your soul. What are you carrying that you could release? Not everything. One thing. What would you set down if you gave yourself permission?"
      },
      midweek: {
        morning: "Midweek morning under heavy obligations. You are in the middle of serving everyone else. Every yes is a no to yourself. When do you serve yourself? Today, protect 30 minutes. Not for work. For you. If you cannot find 30 minutes, that is the problem. That is exactly the problem. Set that boundary.",
        afternoon: "Midweek afternoon drowning in constraints. The week is demanding and you are giving. But giving without replenishing is just draining. Obligation overload does not just cost time. It costs your soul. What would fill you up? Not complete freedom. Just a small refill. Find that today and protect it.",
        evening: "Midweek evening overloaded. The week has taken half your energy for other people. Every yes is a no to yourself. Before Thursday, identify one obligation that does not deserve your energy. You know which one. The one that drains you more than it should. Question why it still exists. Set that boundary.",
        night: "Midweek night crushed by constraints. The week is half over and you have given it all away. Obligation overload does not just cost time. It costs your soul. Tomorrow, take something back. Not a lot. Just something. One hour. One no. One boundary. You are allowed to have boundaries. Start with one."
      }
    }
  },

  // STRENGTH: Energy (but still limited by something else) (day-aware)
  energy_strength: {
    condition: (p) => p.strength.name === 'energy' && p.raw.energy >= 7 && p.average < 7,
    label: "⚡ UNTAPPED POWER",
    messages: {
      monday: {
        morning: "Monday morning with strong energy. This is rare. Most people start the week depleted. You have power. Do not waste it on email. Do not waste it on meetings. Your first two hours belong to your most important creative work. Everything else can wait. Strike while the energy is here.",
        afternoon: "Monday afternoon and you still have energy. This is rare. Most people are depleted by now. The week has not drained you yet. Use this advantage. What is the one thing that would make this week successful? Do it now while you have the fuel. Do not save energy for later. Deploy it on what matters most.",
        evening: "Monday evening with energy reserves. You made it through day one with power to spare. That is rare. Most people are running on fumes by now. Before tomorrow, decide what will receive your best energy Tuesday morning. Do not let it be decided by whoever emails first. You decide. Deploy on worthy targets.",
        night: "Monday night with untapped power. You have more capacity than you used today. This is rare. Most people are exhausted by now. But it is also a question: why did you not use it? What held you back? Whatever it was, do not let it hold you back Tuesday. Energy unused is energy wasted. Deploy it on worthy targets."
      },
      friday: {
        morning: "Friday morning with energy. You made it through the week with fuel to spare. This is rare. Most people are running on fumes by now. You are not. Use this advantage. What could you finish today that would make the weekend feel earned? Do that one thing. Deploy your remaining power on worthy targets.",
        afternoon: "Friday afternoon and you still have power. This is rare. Most people are depleted. The week did not break you. Before you coast into the weekend, ask: what one thing would be satisfying to complete? You have the energy others lack. Use it to close strong. Then rest. You earned it.",
        evening: "Friday evening with energy reserves. The week is over and you are not depleted. That is a win. Most people limp into the weekend empty. You are entering it with fuel. But do not fill the weekend with more work just because you can. Rest while you have the capacity. Store this energy. Let it compound into next week. This is what sustainable creativity looks like.",
        night: "Friday night with untapped power. You made it. The week is done and you still have fuel. This is rare. Most people are completely depleted by now. Enjoy the weekend without guilt. You did not deplete yourself. That is exactly how it should be. This is what sustainable creativity looks like. Protect your sleep tonight and wake up powerful tomorrow."
      },
      saturday: {
        morning: "Saturday morning with strong energy. The weekend stretches ahead and you have power to enjoy it. This is rare. Most people are exhausted after the week. You are not. Do not default to productivity just because you have fuel. What would you do today purely for the joy of it? You have the energy for joy. That is a responsibility. Deploy it on something worthy of your best Saturday self.",
        afternoon: "Saturday afternoon with energy to spare. This is freedom with fuel. A rare combination. Most people are either free but exhausted, or energized but obligated. You have both. What have you been wanting to do but too tired to attempt? Today might be the day. The energy is here. The time is here. Deploy this rare capacity on something worthy of it.",
        evening: "Saturday evening and you still have power. Tomorrow is Sunday. You could start the week rested AND energized. That is a superpower most people never experience. They choose exhaustion. You do not have to. Protect your sleep tonight. Do not burn energy on screens. Let it compound into Sunday. Wake up tomorrow with capacity others lack.",
        night: "Saturday night with untapped energy. You have fuel most people would kill for. This is rare capacity. Do not waste it staying up late for no reason. Channel it into rest. Tomorrow you could wake up powerful. That is a gift. Receive it. The responsibility of having energy is using it on worthy targets. Sleep is part of that strategy."
      },
      sunday: {
        morning: "Sunday morning with strong energy. The week ahead will try to take it all. Before it does, use some for yourself. Most people are depleted before Monday even arrives. You are not. What would fill your cup before the demands begin? You have power now. Invest it in yourself before the week claims it. This morning is yours. Use it wisely.",
        afternoon: "Sunday afternoon with energy reserves. Monday is coming but you are ready for it. That is rare. Most people dread Monday because they are empty. You are not. You have capacity they lack. Use this afternoon for something restorative. Enter the week from a position of strength. The responsibility of having fuel is deploying it on worthy targets. Tomorrow you will.",
        evening: "Sunday evening with power to spare. You are about to start a week with more energy than most people have at their peak. This is rare capacity. Do not squander it on worry about tomorrow. Plan how you will deploy your best energy in the morning. Then rest. The plan will keep. The energy will compound. Wake up ready to strike at what matters.",
        night: "Sunday night with untapped energy. Monday will demand this power. Make sure it goes to the right things. Most people start the week depleted. You will not. What is your highest priority tomorrow? Decide now. Give it your first energy, not your leftover energy. Sleep well. Wake up ready to strike at what matters most."
      },
      midweek: {
        morning: "Midweek morning with strong energy. Most people are dragging by now. You are not. That is an advantage they cannot match. You have capacity they lack. What could you accomplish today that tired you would never attempt? The energy is here. Use it for something that matters. Deploy your power on worthy targets before the week drains it away.",
        afternoon: "Midweek afternoon with energy reserves. You are outpacing the week. Most people are depleted by now. You are not. Do not coast just because you can. What is the most important thing you could do between now and Friday? You have the fuel to do it well. The responsibility of having capacity is deploying it on worthy targets. What deserves your power?",
        evening: "Midweek evening and you still have power. The week is half over and you are not half depleted. That is a win. Most people are running on fumes by now. You have fuel they lack. Before tomorrow, decide how to use this advantage. Energy without direction is just restlessness. Aim it at something worthy of your capacity.",
        night: "Midweek night with untapped energy. You have capacity others do not. Most people are empty by now. But capacity for what? Before you sleep, clarify what deserves your energy tomorrow. Do not let the urgent steal from the important. You have the power to choose what receives your best fuel. Choose well."
      }
    }
  },

  // SHAPE: Soaring (all high) (day-aware)
  soaring: {
    condition: (p) => p.shape === 'soaring',
    label: "✓ FULL AUTONOMY",
    messages: {
      monday: {
        morning: "Monday morning with full autonomy. Energy high, mind clear, options open, constraints light. This is rare. Most people start the week in deficit. You start with surplus. Do not waste this on small tasks. Today is for your most important creative work. Everything else can wait. Strike.",
        afternoon: "Monday afternoon with all systems green. The week has begun and you are thriving. Full autonomy is rare and fragile. Protect this state at all costs. Say no to anything that would disrupt it. The danger now is adding more. Do not add more. This is the compound zone. Every hour here builds on the last. Stay in it.",
        evening: "Monday evening with full autonomy intact. You made it through day one without depletion. That is the model. Full autonomy is rare, precious, and fragile. Before tomorrow, note what you protected. What you said no to. What you prioritized. This is your formula. Repeat it Tuesday. And Wednesday. And every day after that.",
        night: "Monday night with everything working. The week is young and you are strong. Full autonomy is fragile. Do not let late night screens steal tomorrow's energy. Sleep is part of the protection strategy. Tomorrow you could have another day like today. That compounds into a transformed week. Guard your sleep tonight."
      },
      friday: {
        morning: "Friday morning with full autonomy. You made it through the week in the optimal zone. That is exceptional. Full autonomy is rare, precious, and fragile. Today is not for coasting. Today is for leverage. What could you accomplish with this energy that would compound over the weekend? The danger is adding obligations. Instead, protect and deploy.",
        afternoon: "Friday afternoon with everything aligned. The week did not break you. It fed you. Full autonomy is rare and fragile. Before you enter the weekend, document what worked this week. The conditions, the choices, the boundaries. This is your playbook for protection. The danger is adding more. Instead, carry this formula into next week.",
        evening: "Friday evening with all systems green. The week is ending and you are ending strong. That is exactly right. Full autonomy is rare, precious, and fragile. The weekend is your reward. But also your opportunity. Full autonomy continues into Saturday and Sunday. What will you create with it? The danger is adding obligations. Instead, protect the space.",
        night: "Friday night with full autonomy. You won the week. Not by surviving. By thriving. Full autonomy is rare, precious, and fragile. Enjoy this. Rest well. Let the weekend be spacious. You earned space by not depleting yourself. This is the sustainable path. The danger is adding obligations. Instead, protect the space you created."
      },
      saturday: {
        morning: "Saturday morning with everything working. Energy, space, options, freedom. The weekend stretches ahead with no constraints. This is what you have been building toward. Full autonomy is rare, precious, and fragile. Do not fill it with obligations. The danger is adding more. Instead, fill it with whatever calls to you. Protect the space.",
        afternoon: "Saturday afternoon with full autonomy. This is the life you are designing. Not just weekends, but weekdays too. Full autonomy is rare, precious, and fragile. Enjoy it. Notice how it feels. Remember this when you make decisions about what to say yes to. Protect the conditions that created this. The danger is adding more.",
        evening: "Saturday evening with all systems green. Tomorrow is Sunday and you will have another day like today. That is abundance. Full autonomy is rare, precious, and fragile. Do not take it for granted. Also do not waste it on anxiety about Monday. Monday you will be ready. The protection strategy tonight is sleep. Guard it.",
        night: "Saturday night with full autonomy. The weekend is half over but you are not half depleted. You are full. Full autonomy is rare, precious, and fragile. Sleep well. Tomorrow is another day of freedom. Let it be whatever it wants to be. The danger is adding obligations. Instead, protect the spaciousness that makes autonomy possible."
      },
      sunday: {
        morning: "Sunday morning with everything working. Most people spend Sunday anxious about Monday. You do not have to. Your reserves are full. Your mind is clear. Your options are open. Full autonomy is rare, precious, and fragile. Spend today in that abundance. Monday will be fine because you are fine. The protection strategy is enjoying today without adding obligations.",
        afternoon: "Sunday afternoon with full autonomy. The week ahead does not threaten you. You are entering it from strength, not survival. Full autonomy is rare, precious, and fragile. Use this afternoon for something that matters to you. Not preparation. Not anxiety. Something that feeds your soul. The protection strategy is not adding obligations.",
        evening: "Sunday evening with all systems green. Monday is tomorrow and you are ready. Not defensively ready. Offensively ready. Full autonomy is rare, precious, and fragile. You have the energy to create, the space to think, the options to choose, the freedom to act. The protection strategy is guarding your sleep. Tomorrow you deploy.",
        night: "Sunday night with everything aligned. The week is about to begin and you are in the optimal zone. Full autonomy is rare, precious, and fragile. Do not sabotage this with late night scrolling. Protect your sleep. Tomorrow is an opportunity. Full autonomy means you get to use it well. The protection strategy tonight is rest."
      },
      midweek: {
        morning: "Midweek morning with full autonomy. Most people are depleted by now. You are thriving. That is the difference between sustainable systems and willpower. Full autonomy is rare, precious, and fragile. You built the system. Now it is carrying you. The protection strategy is staying the course. Keep doing what you are doing.",
        afternoon: "Midweek afternoon with everything working. The week is half over and you are not half depleted. You are fully charged. Full autonomy is rare, precious, and fragile. What would you attempt if you knew you could not fail? You have the energy to try. The space to think. The freedom to fail. Try something worthy of your capacity.",
        evening: "Midweek evening with all systems green. The week curves toward the weekend and you are riding high. Full autonomy is rare, precious, and fragile. Protect this. What threatened your autonomy earlier this week? What almost drained you? Stay vigilant. The optimal zone requires active defense against obligations.",
        night: "Midweek night with full autonomy. Half the week is done. Half your capacity remains. That is the goal. Not depletion. Capacity. Full autonomy is rare, precious, and fragile. Tomorrow, use it on something that matters. The energy you have is not normal. Guard your sleep tonight and spend it on something important tomorrow."
      }
    }
  },

  // SHAPE: Crashed (all low) (day-aware)
  crashed: {
    condition: (p) => p.shape === 'crashed',
    label: "✗ SYSTEM FAILURE",
    messages: {
      monday: {
        morning: "Monday morning with all systems failing. Energy depleted, mind cluttered, options limited, constraints heavy. This is not laziness. This is collapse. This is not a productivity problem. This is a life problem. Do not try to optimize your way out. Recovery is the only priority. Today is about one thing: what do you need? Give it to yourself.",
        afternoon: "Monday afternoon in system failure. The week just started and everything is already wrong. This is not laziness. This is collapse. Stop pushing. Pushing makes this worse. Recovery is the only priority now. What is the minimum viable Monday? Do only that. Protect whatever remains. Cancel one thing this afternoon.",
        evening: "Monday evening with everything crashing. This is not laziness. This is collapse. The week ahead looks impossible from here. It is not. But you cannot see that yet. Tomorrow will be different if tonight is different. Recovery is the only priority. Rest. Real rest. Not distraction. Rest. Turn off all screens one hour before bed.",
        night: "Monday night with full system failure. This is not laziness. This is collapse. The week is barely started and you are already broken. Do not set goals for tomorrow. Set boundaries. Minimum work. Maximum rest. Recovery is the only priority. Rebuild the foundation before you build anything else. Sleep is the first step. Take it now."
      },
      friday: {
        morning: "Friday morning with all systems down. This is not laziness. This is collapse. You made it to Friday but at what cost. Today is not for catching up. Today is for letting go. Recovery is the only priority. What can you drop? What can wait until next week? Cancel one meeting today. Your only job is to make it to the weekend intact.",
        afternoon: "Friday afternoon in system failure. This is not laziness. This is collapse. The week won. This time. But the weekend is coming. Recovery is the only priority now. Do not fill the weekend with recovery tasks. Fill it with nothing. Emptiness is what you need. Space to breathe. Permission to not perform. Leave work early if you can.",
        evening: "Friday evening with everything crashed. This is not laziness. This is collapse. The week is over. Let it be over. Whatever did not get done is now next week's problem. Recovery is the only priority now. Your problem is recovery. The weekend is not for catching up. It is for healing. Order food instead of cooking tonight.",
        night: "Friday night with full system failure. This is not laziness. This is collapse. The week broke you. Acknowledge that. Do not pretend it did not. Tomorrow is Saturday. You have 48 hours to rebuild. Recovery is the only priority. Sleep is step one. Everything else comes after. Get in bed now. Rest."
      },
      saturday: {
        morning: "Saturday morning with all systems failing. This is not laziness. This is collapse. Even the weekend starts in deficit. Today is not for productivity. Today is for survival. Recovery is the only priority. What do you need that you have not been getting? Rest? Connection? Silence? Give it to yourself. Stay in bed an extra hour if you can.",
        afternoon: "Saturday afternoon in system failure. This is not laziness. This is collapse. The weekend should be restoring you but you are still crashed. Recovery is the only priority. What is blocking recovery? Name it. Is it guilt? Obligation? Anxiety? Name it so you can address it. You cannot heal what you will not acknowledge. Cancel one obligation today.",
        evening: "Saturday evening with everything down. This is not laziness. This is collapse. Tomorrow is your last day before the cycle restarts. You are not recovered. Recovery is the only priority. Tomorrow needs to be different. No obligations. No shoulds. Just whatever actually restores you. Turn off your phone and go to bed early tonight.",
        night: "Saturday night with full system failure. This is not laziness. This is collapse. One day until Monday. You are not ready. That is okay. Ready is not the goal right now. Stable is the goal. Recovery is the only priority. Tomorrow, protect yourself from anything that drains. Only allow what restores. Get in bed now."
      },
      sunday: {
        morning: "Sunday morning with all systems crashed. This is not laziness. This is collapse. The week is about to start and you are broken. Do not try to prepare for the week. Try to survive until the week. Recovery is the only priority. What would actual rest look like today? Not catching up. Resting. Stay in bed and do nothing productive.",
        afternoon: "Sunday afternoon in system failure. This is not laziness. This is collapse. Monday is coming and you have nothing left. Lower every expectation. For today. For tomorrow. For the whole week if needed. Recovery is the only priority. You cannot perform your way out of burnout. You can only rest out of it. Cancel something tomorrow.",
        evening: "Sunday evening with everything down. This is not laziness. This is collapse. Monday is hours away and you are still crashed. This is a crisis. Treat it like one. Recovery is the only priority. What is the absolute minimum you must do tomorrow? Only that. Everything else gets cancelled, delegated, or delayed. Go to bed early tonight.",
        night: "Sunday night with full system failure. This is not laziness. This is collapse. The week starts tomorrow and you are empty. You cannot fix this tonight. But you can stop making it worse. Recovery is the only priority. Sleep. Not screens. Not worry. Sleep. Tomorrow will come either way. Get in bed now and meet it rested."
      },
      midweek: {
        morning: "Midweek morning with all systems failing. This is not laziness. This is collapse. You started the week with something and it is gone. What happened? What drained you? Identify it specifically because it will happen again if you do not. Recovery is the only priority now. Today is damage control. Cancel your first meeting if you can.",
        afternoon: "Midweek afternoon in system failure. This is not laziness. This is collapse. The week has broken you at the halfway point. Do not push to Friday. Push to tonight. Just tonight. Recovery is the only priority. What is the bare minimum to survive until evening? Do that. Only that. Leave early if you possibly can.",
        evening: "Midweek evening with everything crashed. This is not laziness. This is collapse. Tomorrow is another day and you have nothing left for it. The week might be lost. That is okay. Weeks can be lost. You cannot be. Recovery is the only priority. Protect yourself tonight. Order food and go to bed early.",
        night: "Midweek night with full system failure. This is not laziness. This is collapse. The week is half over and you are fully depleted. This is not sustainable. Something fundamental needs to change. But not tonight. Recovery is the only priority. Tonight is for rest. Tomorrow is for deciding what has to change. Get in bed now."
      }
    }
  },

  // SHAPE: Plateau (mid, balanced) (day-aware)
  plateau: {
    condition: (p) => p.shape === 'plateau',
    label: "⚖ HOLDING STEADY",
    messages: {
      monday: {
        morning: "Monday morning on the plateau. Stable but not growing. Holding steady is both safe and dangerous. Safe because nothing breaks. Dangerous because nothing builds. The week ahead will look like last week unless something changes. The choice is between maintaining and pushing. Push one lever today. More energy? More space? Fewer constraints? Pick one.",
        afternoon: "Monday afternoon holding steady. The week has started and it feels familiar. Maybe too familiar. Holding steady is both safe and dangerous. Safe because nothing breaks. Dangerous because nothing builds. The choice is between maintaining and pushing. What would make this week different from last week? Not a revolution. One small change. Implement it before end of day.",
        evening: "Monday evening on the plateau. Day one is ending and it felt like every other day one. Holding steady is both safe and dangerous. The choice is between maintaining and pushing. Before Tuesday, ask yourself: is this where you want to stay? If not, what would you change? You have four days left to make this week different. Commit to one push tomorrow morning.",
        night: "Monday night holding steady. The week is predictable from here. That is safe. It is also stagnant. Holding steady is both safe and dangerous. The choice is between maintaining and pushing. Before you sleep, consider: what risk could you take this week that would break the pattern? Small risks compound. Write down one thing to try tomorrow."
      },
      friday: {
        morning: "Friday morning on the plateau. The week happened. Nothing broke. Nothing grew. Holding steady is both safe and dangerous. Safe because nothing failed. Dangerous because nothing was attempted. Is that enough? The choice is between maintaining and pushing. Before the weekend, ask what would have made this week exceptional. Write that down. Do it Monday.",
        afternoon: "Friday afternoon holding steady. Another week in the middle. Not failing. Not thriving. Holding steady is both safe and dangerous. Safe because you survived. Dangerous because survival is not growth. The choice is between maintaining and pushing. The weekend is coming. Will it be a plateau too? Or will you use it to plan one concrete push for Monday?",
        evening: "Friday evening on the plateau. The week maintained. You maintained. But maintaining is not building. Holding steady is both safe and dangerous. The choice is between maintaining and pushing. The weekend is a reset. Use it to think about what you actually want. Not what is safe. What you want. Write down one thing to push on Monday.",
        night: "Friday night holding steady. The week is over and it felt like every other week. Holding steady is both safe and dangerous. That is either comforting or concerning. Only you know which. The choice is between maintaining and pushing. Before you rest, decide: same thing next week or something different? Write down one concrete push for Monday."
      },
      saturday: {
        morning: "Saturday morning on the plateau. Even the weekend feels stable. Familiar. Holding steady is both safe and dangerous. Safe because nothing disrupts. Dangerous because nothing changes. The choice is between maintaining and pushing. The weekend is for breaking patterns, not repeating them. What would shake things up today? Try one new thing this morning.",
        afternoon: "Saturday afternoon holding steady. The weekend is passing like the weeks pass. Steady. Comfortable. Holding steady is both safe and dangerous. Safe because nothing fails. Dangerous because nothing grows. The choice is between maintaining and pushing. Is steady what you want? If not, what would you change? You have time to experiment. Try one new thing this afternoon.",
        evening: "Saturday evening on the plateau. Tomorrow is Sunday. Another stable day ahead. Unless you decide otherwise. Holding steady is both safe and dangerous. The choice is between maintaining and pushing. What would make tomorrow memorable instead of forgettable? Something is calling to you. What is it? Plan one concrete push for tomorrow morning.",
        night: "Saturday night holding steady. The weekend is half over and nothing has changed. Holding steady is both safe and dangerous. That is fine if you chose it. But did you choose it? Or did you just let it happen? The choice is between maintaining and pushing. Sunday is still available. Plan one concrete push for tomorrow. Use it intentionally."
      },
      sunday: {
        morning: "Sunday morning on the plateau. The week ahead will look like the week behind unless you intervene. Holding steady is both safe and dangerous. Safe because nothing fails. Dangerous because nothing grows. The choice is between maintaining and pushing. Today is your chance to plan the intervention. Not a big one. A small lever that could shift everything. Write it down now.",
        afternoon: "Sunday afternoon holding steady. Monday is coming and it feels predictable. Holding steady is both safe and dangerous. Safe because nothing fails. Dangerous because nothing grows. The choice is between maintaining and pushing. But predictions can be wrong. What would surprise you this week? What would you have to do for that surprise to happen? Write it down. Do it tomorrow.",
        evening: "Sunday evening on the plateau. The week is about to begin and you know exactly how it will go. Holding steady is both safe and dangerous. That certainty might be a prison. The choice is between maintaining and pushing. What if you did one thing differently tomorrow? Just one. Write it down now. See what happens when you actually push.",
        night: "Sunday night holding steady. Monday is hours away and it looks identical to last Monday. Holding steady is both safe and dangerous. But you do not have to accept that. The choice is between maintaining and pushing. Tomorrow morning, do one thing you did not do last week. Write it down now. Break the plateau. Start small but start."
      },
      midweek: {
        morning: "Midweek morning on the plateau. The week is unfolding exactly as expected. No crises. No breakthroughs. Just steady. Holding steady is both safe and dangerous. Safe because nothing fails. Dangerous because nothing grows. Is steady enough? If not, today is your chance to push. The week is half written. Write the second half differently. Try one new thing this morning.",
        afternoon: "Midweek afternoon holding steady. You are in the middle of another average week. Holding steady is both safe and dangerous. Safe because nothing fails. Dangerous because nothing grows. Average is forgettable. The choice is between maintaining and pushing. What would make the rest of this week above average? You have time. Try one new thing this afternoon.",
        evening: "Midweek evening on the plateau. The week will end like it began unless something shifts. Holding steady is both safe and dangerous. Safe because nothing fails. Dangerous because nothing grows. The choice is between maintaining and pushing. What would you regret not trying by Friday? That thing. Write it down. Do it tomorrow. Plateaus break when you push.",
        night: "Midweek night holding steady. Half the week is gone. Half remains. Same as always. Unless you choose differently. Holding steady is both safe and dangerous. The choice is between maintaining and pushing. Before you sleep, pick one thing to do differently tomorrow. Not everything. One thing. Write it down. See what shifts when you actually push."
      }
    }
  },

  // SHAPE: Lopsided (fallback) (day-aware)
  lopsided: {
    condition: (p) => p.shape.startsWith('lopsided'),
    label: "⚖ IMBALANCED",
    messages: {
      monday: {
        morning: "Monday morning with imbalanced autonomy. Strong in some areas, weak in others. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension, not doubling down on strengths. The week will expose the weak spots. What is your lowest score? That is where your attention belongs today. Focus on your weakness first thing.",
        afternoon: "Monday afternoon with uneven autonomy. Your strengths are carrying your weaknesses. Imbalance is exhausting because one dimension is doing all the work. That works short term. It fails long term. The leverage is in fixing the weak dimension. What is draining you that your advantages cannot offset? That is the thing to address. Make one call or send one email to improve it today.",
        evening: "Monday evening imbalanced. The week has begun and the cracks are already showing. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. Before Tuesday, look at where you are weak. Energy? Space? Options? Constraints? Pick the worst one. Tomorrow, spend your first hour there. Not on your strength. On your weakness.",
        night: "Monday night with lopsided autonomy. You made it through day one but something is off. Imbalance is exhausting because one dimension is carrying the others. The imbalance will get worse unless you address it. The leverage is in fixing the weak dimension. What is your weakest link? Write it down. Tomorrow morning, spend your first hour there."
      },
      friday: {
        morning: "Friday morning with imbalanced autonomy. The week is ending and the imbalance is clear. Your strength kept you afloat. Your weakness kept you struggling. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. Before next week, plan how to address the gap. Write down one concrete action for Monday morning.",
        afternoon: "Friday afternoon uneven. The week revealed what is working and what is not. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. The weekend is for recovery, but also for reflection. What needs to change for next week to be more balanced? Before you leave today, write down one action to address your weakness Monday.",
        evening: "Friday evening imbalanced. The week is over and the pattern is clear. One area is strong. Another is failing. Imbalance is exhausting because one dimension is carrying the others. You cannot ignore the failing part forever. The leverage is in fixing the weak dimension. Use the weekend to think about how to shore it up. Plan one action for Monday.",
        night: "Friday night with lopsided autonomy. The week exposed the imbalance. Now you know. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. The question is what you will do about it. Rest tonight. But before next week, make a plan for your weakest area. Write down one concrete action for Monday morning."
      },
      saturday: {
        morning: "Saturday morning with imbalanced autonomy. Even the weekend feels uneven. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. What is your weak spot? Energy? Mental space? Options? Freedom? Today, give some attention to whichever is lowest. Do one thing this morning to address it. Balance requires intention.",
        afternoon: "Saturday afternoon uneven. Your strength is obvious. Your weakness is hidden but present. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. What would address your weakest area today? Not completely fix it. Just address it. Take one small action this afternoon. Small moves toward balance compound.",
        evening: "Saturday evening imbalanced. Tomorrow is Sunday. Another chance to work on balance. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. What would move your lowest score up even slightly? That is your focus for tomorrow. Not your strength. Your weakness. Plan one action for tomorrow morning.",
        night: "Saturday night with lopsided autonomy. The weekend is half over. Have you addressed your weak spot at all? Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. If not, tomorrow is your chance. Balance does not happen by accident. It happens by attention. Plan one action for Sunday morning."
      },
      sunday: {
        morning: "Sunday morning with imbalanced autonomy. The week ahead will stress your weak spots. Imbalance is exhausting because one dimension is carrying the others. Before it does, strengthen them. The leverage is in fixing the weak dimension. What would give you more energy? More space? More options? Less constraint? Pick the one you need most. Do one thing this morning to address it.",
        afternoon: "Sunday afternoon uneven. Monday is coming and your imbalance is coming with it. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. This afternoon is for shoring up your weakest area. Not your whole life. Just the weakest part. Take one action this afternoon. What would help the most?",
        evening: "Sunday evening imbalanced. The week starts tomorrow and your strength will carry you. But your weakness will drag you. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. Before the week begins, do one thing to address your lowest score. Plan your first hour Monday for your weakness, not your strength.",
        night: "Sunday night with lopsided autonomy. You know where you are strong. You know where you are weak. The week will test both. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. Before you sleep, set one intention for addressing your weak spot tomorrow morning. Balance starts with attention."
      },
      midweek: {
        morning: "Midweek morning with imbalanced autonomy. The week is exposing your weak spots exactly as expected. Your strength is holding. Your weakness is showing. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. Today, give attention to what is failing. Spend your first hour on your weakness, not your strength.",
        afternoon: "Midweek afternoon uneven. You are compensating for your weakness with your strength. Imbalance is exhausting because one dimension is doing all the work. That is not sustainable. The leverage is in fixing the weak dimension. What would actually address the imbalance? Not work around it. Address it. Take one action this afternoon.",
        evening: "Midweek evening imbalanced. The week is half over and the pattern is clear. Strong where you are always strong. Weak where you are always weak. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. Tomorrow, try something different. Break the pattern. Spend your first hour on your weakness.",
        night: "Midweek night with lopsided autonomy. Half the week is done. The imbalance persists. It will persist next week too unless you address it. Imbalance is exhausting because one dimension is carrying the others. The leverage is in fixing the weak dimension. Before you sleep, name your weakest area. Tomorrow morning, spend your first hour there."
      }
    }
  }
};

// ============================================================
// Ri PROPHETIC MESSAGES - Resonance pattern-based messaging
// ============================================================

const riPropheticMessages = {
  // SCALE ACHIEVEMENT: Depth at Scale (Ri >= 7 with 1M+ audience)
  scale_achievement: {
    condition: (p) => p.hasScaleAchievement === true,
    label: "🏆 DEPTH AT SCALE",
    messages: {
      monday: {
        morning: "Monday morning with depth at scale. You achieved what most never will: genuine impact at massive reach. Most creators choose one or the other. You have both. The week ahead is not about growing. It is about protecting. What you have is rare and fragile. With this achievement comes responsibility. Guard it. Make something today that proves the depth is still there.",
        afternoon: "Monday afternoon at the peak with both depth and scale. Millions of people and they actually feel your work. Most creators at your reach have lost this. Do not optimize it away. The algorithm will tempt you to water it down for broader appeal. Do not. The depth is the point. The depth is why they stay.",
        evening: "Monday evening with depth at scale. Day one is ending and you are where everyone wants to be. But it is also where it is easiest to lose yourself to optimization and safety. Before tomorrow, remember why this works. Stay true to that truth. Make something tomorrow that your day one fans would recognize.",
        night: "Monday night with rare achievement. The week has four more days and you could coast on these numbers that most creators never reach. But coasting erodes depth. Make something this week that proves you are still an artist, not just a brand. The responsibility of reach is using it for meaning."
      },
      friday: {
        morning: "Friday morning with depth at scale. The week is ending and you maintained the magic that most creators lose at your reach level. That is the job now. Careful maintenance. Not growth. Protection of what matters. The depth is what matters and what they cannot replicate. Keep it carefully.",
        afternoon: "Friday afternoon at the peak. The week went well and you kept both depth and scale intact. But success at this level creates new temptations every single day. Broader appeal. Safer content. Resist them. The depth is why they came. The depth is why they stay. Do not trade it away.",
        evening: "Friday evening with scale and soul intact. The week is over and you made it through without losing yourself to optimization. That is genuine victory at this level of reach. The weekend is for remembering what matters. Not the numbers. The work. The meaning. Protect that carefully.",
        night: "Friday night with depth at scale. The week is done and you have what most creators dream of: reach and resonance together. Are you still making what you would make if no one was watching at all? That question keeps you honest. Keep asking it regularly. Let the answer guide you forward."
      },
      saturday: {
        morning: "Saturday morning with rare achievement. Depth at massive scale. Most creators have one or the other. You have both together. The weekend is not for planning growth. It is for appreciating what you built carefully and recommitting to the truth that built it. What would protect both today?",
        afternoon: "Saturday afternoon at the peak. You could be anywhere doing anything at all. What do you want to make that has nothing to do with performance or metrics at all? That thing is probably important. Consider making it. The depth needs feeding. Performance alone starves it completely.",
        evening: "Saturday evening with depth at scale. Tomorrow is Sunday and the week ahead will bring opportunities to dilute your message for broader appeal. Opportunities to optimize for engagement over meaning. Remember always: the depth is the asset. Everything else is just noise and distraction.",
        night: "Saturday night with scale and soul together. The week ahead does not need more growth at all. It needs continued depth. Before you sleep tonight, ask yourself honestly: what would my younger self think of my current work? Make them proud. That is the responsibility of your reach."
      },
      sunday: {
        morning: "Sunday morning with depth at scale. The week starts tomorrow and you will reach millions of people. Will you genuinely move them? The reach is already handled. The depth requires daily intention. Intend depth this week. Make something that matters beyond just the metrics and numbers.",
        afternoon: "Sunday afternoon at the peak. Monday is coming fast and everyone will want something from you. Before all the noise begins, remember why you started and what made this work in the first place. That reason is still the point. Everything else is distraction. Protect the depth carefully.",
        evening: "Sunday evening with rare achievement. The week ahead is an important opportunity to prove you are still you at your core. Not a brand. Not an algorithm servant. You. Make something this week that reminds everyone including yourself why this matters beyond just the numbers or metrics.",
        night: "Sunday night with depth at scale. Tomorrow you create again. This time, create like the numbers do not matter at all. Because at your level, they truly do not anymore. Legacy matters. Meaning matters. Real impact matters deeply. That is exactly what you protect with this incredible reach."
      },
      midweek: {
        morning: "Midweek morning with depth at scale. Half the week is gone. Have you maintained the depth that makes your reach valuable? Or have you drifted toward safety and comfort? Today, make something genuinely risky. Prove the depth is still there. That is your main responsibility right now.",
        afternoon: "Midweek afternoon at the peak. The week is slipping by in content. Before Friday arrives, create something that has nothing to do with performance at all. Something true and meaningful. The depth is what you protect. Protect it today with real intention. Make something that matters.",
        evening: "Midweek evening with scale and soul together. Tomorrow is another chance to use your reach for meaning instead of metrics. What would you make if the algorithm rewarded depth instead of engagement? Make that anyway. Your audience followed you for depth. They will follow you there.",
        night: "Midweek night with rare achievement. The week is half over and you reached millions of people. Did you genuinely move any of them at all? The remaining days are for depth. One piece that matters deeply is worth far more than ten that perform well but feel like absolutely nothing at all."
      }
    }
  },

  // BOTTLENECK: Impact
  impact_bottleneck: {
    condition: (p) => p.bottleneck.name === 'impact' && p.raw.impact <= 4,
    label: "👁 SEEN NOT FELT",
    messages: {
      monday: {
        morning: "Monday morning with low impact. Your work is being seen but not felt. Views without emotion. This is worse than invisible because it feels like success while being empty. The week ahead offers a chance to change that. Before you create today, ask: what truth have I been avoiding? That truth is where impact lives. Not in polish. In honesty.",
        afternoon: "Monday afternoon and still no resonance. The week is young but you are already making forgettable work. Competent content that no one will remember tomorrow. What would you create if you stopped worrying about how it would perform? If you stopped protecting yourself from judgment? That vulnerable thing you are avoiding. Make that thing today. It is the only thing that matters.",
        evening: "Monday evening with work that does not land. Day one is ending and you played it safe again. Visible but forgettable. Did you make anything that moved you today? If not, tomorrow must be different. Before you sleep, write down one thing you believe that you have not said publicly. One opinion that feels risky. That is where tomorrow starts. That is where impact lives.",
        night: "Monday night with low impact. The week stretches ahead with four more days to create something that matters. What would make you proud regardless of metrics? What would you create if no one was watching? That is the work. Not what performs. What matters. The truth you are avoiding is exactly what your audience needs to hear."
      },
      friday: {
        morning: "Friday morning with low impact. The week is ending and nothing landed despite your effort. Views but no feeling. That is data, not failure. What did you avoid saying this week? What felt too risky to share? What truth did you circle around but never land on? The weekend is for reflection. Find the thing you held back. That thing is next week's priority.",
        afternoon: "Friday afternoon and still not resonating. The week did not produce impact because you protected yourself from vulnerability. Safe work is forgettable work. But the weekend can produce clarity. What would you create if no one would judge you? If you could not be cancelled? Write that down. Maybe make it next week. The fear is the signal.",
        evening: "Friday evening with work that did not land. The week is over and you survived but did not thrive. Let it go but learn from it. What truth did you avoid? What vulnerability did you protect? What opinion did you soften until it said nothing? That unspoken thing is where next week's impact lives. Name it before you rest.",
        night: "Friday night with low resonance. The week is done and nothing broke through. Rest now but this weekend study what moves YOU. What makes you stop scrolling? What do you save? What makes you feel something? That is the standard. Your work needs to meet it. Impact requires being felt not just seen."
      },
      saturday: {
        morning: "Saturday morning with low impact. The weekend is for consuming what resonates and studying it honestly. What makes other work hit? Not the techniques. Not the production quality. The truth underneath. The vulnerability. The specificity. That truth is what your work is missing. Not polish. Honesty.",
        afternoon: "Saturday afternoon reflecting on impact. Your work is competent but forgettable. Visible but not felt. What would make it unforgettable? Not louder. Not more frequent. More true. What truth would make someone stop and feel? What opinion would be controversial? That discomfort is the path to resonance.",
        evening: "Saturday evening thinking about resonance. Tomorrow is Sunday, a day for deeper thinking about what actually matters. What do you believe that you have not said? What experience do you have that you have not shared? What opinion do you hold that might lose you followers? Impact lives in specificity and risk. Not in safety.",
        night: "Saturday night with low impact. The week ahead needs to be different or it will repeat the same forgettable pattern. Before you sleep, consider: who specifically needs your work? Not everyone. Someone in particular. Picture that person and their struggle. What do they need to hear that no one is saying?"
      },
      sunday: {
        morning: "Sunday morning with low impact. The week ahead is unwritten. A blank slate for creating something that matters. What would you say if you only had one piece of content this week? Not the safest thing. The truest thing. The thing you have been avoiding. Consider making only that. Depth over frequency.",
        afternoon: "Sunday afternoon planning for impact. Monday is coming and it will repeat last week unless you change something fundamental. What will be different? Not more content. Different content. What have you been circling around but not saying directly? That is your Monday morning priority. Stop circling. Land.",
        evening: "Sunday evening with resonance on your mind. The week starts tomorrow. You know what safe content looks like. It looks like last week. Competent and forgettable. What would risky content look like? Something that might fail but might matter? Something that reveals more than you usually allow? Consider that.",
        night: "Sunday night thinking about impact. Tomorrow you create again. This time, create something that scares you slightly. Not reckless. Just honest. The fear you feel about sharing something is usually proportional to its importance. What makes your heart beat faster to consider posting? That is probably the thing."
      },
      midweek: {
        morning: "Midweek morning with low impact. Half the week is gone and nothing has landed. Visible but not felt. You still have time to change that but not with more of the same. Today, make one thing that is more vulnerable than usual. Reveal something you normally protect. See what happens when you stop being safe.",
        afternoon: "Midweek afternoon still not resonating. The week is slipping by in forgettable content. Before Friday, create something that reveals more than you normally reveal. Impact requires vulnerability and you have been protecting yourself from judgment. That protection is costing you resonance. Drop it once.",
        evening: "Midweek evening with work that does not land. Tomorrow is another chance to be felt instead of just seen. What would you say if you knew your audience needed to hear exactly one thing? Not what they want to hear. What they need to hear. The truth they have been avoiding. Say that tomorrow.",
        night: "Midweek night with low impact. The week is half over and nothing has broken through yet. Two or three days remain to change that. What could you create by Friday that would actually matter? Not just perform well. Matter deeply to someone. Change how they see the world. Start it tomorrow morning."
      }
    }
  },

  // BOTTLENECK: Identity
  identity_bottleneck: {
    condition: (p) => p.bottleneck.name === 'identity' && p.raw.identity <= 4,
    label: "🎯 NO TARGET",
    messages: {
      monday: {
        morning: "Monday morning with no clear audience. You are creating for everyone, which means no one feels like it is for them. Creating for everyone is creating for no one. The algorithm rewards specificity and so does human connection. Before you make anything today, describe one specific person. Not a demographic. A human being with a name and a struggle. Their frustration. Their secret dream. Make for them alone today.",
        afternoon: "Monday afternoon without a target. The week is starting scattered because you have not decided who you serve. Who specifically would miss your work if you stopped tomorrow? Picture that person clearly. What do they need that no one else is making for them? Make exactly that. Not for everyone. For them.",
        evening: "Monday evening with generic appeal. Day one is ending and you reached everyone, which means you reached no one. Did you make anything for someone specific today? If not, tomorrow must be different. Write down: this is for people who blank but secretly blank. Fill in those blanks honestly. That sentence is your target. That specificity is your power.",
        night: "Monday night with no identity fit. The week has four more days to find your people. Not a large audience. Your audience. Ten people who need exactly what you make and cannot get it elsewhere. Who are they? Name them. Know their struggles. That specificity is the path to resonance."
      },
      friday: {
        morning: "Friday morning with no clear target. The week is ending and your work reached no one specifically because it was aimed at everyone. That diffusion is the problem. The weekend is for getting ruthlessly specific. Who would mourn if you stopped creating? Those ten people who truly need you are your real audience. Everyone else is a bonus.",
        afternoon: "Friday afternoon without a niche. The week scattered into the void because you spoke to everyone generally instead of someone specifically. Before the weekend, write down the one person who needs your work most. Not wants it. Needs it desperately. Make next week entirely for that person. Watch what happens.",
        evening: "Friday evening with generic appeal. The week is over and you reached millions of nobody. Rest now. But this weekend, study your best performing work. What did it have in common? Who specifically responded? That pattern is your audience revealing itself. Follow it instead of fighting it.",
        night: "Friday night with no identity fit. The week is done and the lack of specificity cost you resonance. Use the weekend to get extremely specific. Riches are in niches. Who is your niche? Not everyone. Not most people. A small group who desperately needs what you make. Define them clearly."
      },
      saturday: {
        morning: "Saturday morning thinking about audience. Who specifically needs what you make? Not everyone. Someone in particular. Today, think deeply about that person. Their daily life. Their specific problems. Their secret frustrations that they do not tell anyone. Know them so well you can predict their reactions to everything you make.",
        afternoon: "Saturday afternoon without a target. The weekend is for gaining clarity on who you serve. Write down ten characteristics of your ideal audience member. Not age and location which mean nothing. Fears and dreams which mean everything. That psychological profile is who you make for. Get specific.",
        evening: "Saturday evening considering identity fit. Tomorrow is Sunday, time for deeper thinking. What group of people feels invisible to the mainstream? What do they need that no one is making for them? Maybe you should make it. The smaller the group, the more they will love you for seeing them.",
        night: "Saturday night with no clear audience. The week ahead needs focus that this week lacked. Before you sleep, answer honestly: who would understand my work better than anyone else in the world? That small group is your real audience. Everyone else is a bonus. Serve the core first. Know them deeply."
      },
      sunday: {
        morning: "Sunday morning with identity on your mind. The week starts tomorrow. Who is it for? Not vaguely. Specifically. What would you make if you were making it for exactly one person who desperately needed it and could not find it anywhere else? That extreme specificity produces work that resonates.",
        afternoon: "Sunday afternoon planning for specificity. Monday is coming fast. This week, try creating for a smaller audience. Not broader. Smaller. Deeper. What would you make for just 100 people who would love it completely and share it with everyone they know? That depth beats breadth every time.",
        evening: "Sunday evening thinking about targeting. The week ahead is an opportunity to be specific instead of scattered. What if you niched down radically? Spoke to fewer people but spoke directly to their souls? That might be scarier because rejection becomes personal. It would also be far more effective.",
        night: "Sunday night considering identity fit. Tomorrow you create again. This time, picture one specific person clearly. Give them a name and a face. Know their struggles intimately. Make for them alone. Not the algorithm. Not the masses. One person who needs what you make. That is enough to start."
      },
      midweek: {
        morning: "Midweek morning with no clear target. Half the week is gone and you have been making for everyone again. That means no one felt like it was for them specifically. Today, pick a specific audience. One type of person with real struggles. Make something just for them. See how different it feels.",
        afternoon: "Midweek afternoon without a niche. The week is slipping by in generic content that reaches everyone and moves no one specifically. Before Friday, answer: who is this actually for? Not who might like it. Who needs it desperately. That specificity changes everything about how you create.",
        evening: "Midweek evening with generic appeal. Tomorrow is another chance to be specific. What if you created something that only 50 people in the world would understand but those 50 would feel completely seen? That is worth more than 50000 casual viewers who forget you exist. Depth over breadth.",
        night: "Midweek night with no identity fit. The week is half over and you have been trying to reach everyone which means reaching no one. Try the opposite tomorrow. Make for someone extremely specific. Real. Knowable. Name them in your mind as you create. That is exactly where resonance begins."
      }
    }
  },

  // BOTTLENECK: Boldness
  boldness_bottleneck: {
    condition: (p) => p.bottleneck.name === 'boldness' && p.raw.boldness <= 4,
    label: "🛡 PLAYING SAFE",
    messages: {
      monday: {
        morning: "Monday morning playing it safe again. The week ahead will look exactly like last week if you make the same safe choices. Safe work is forgettable work. No risk means no memorability. What would you create today if no one would judge you? If failure was impossible? If cancellation did not exist? That thing you just thought of. Start that thing today.",
        afternoon: "Monday afternoon still playing safe. The week is young and you have time to take a risk that matters. What opinion do you hold that others in your space do not? What would you say if you were not worried about the reaction or the unfollows? The fear underneath your safety is judgment. Say the thing anyway. See what happens.",
        evening: "Monday evening with low boldness. Day one is ending and you played it safe again. Did you take any creative risks today? If not, tomorrow must be different. Before you sleep, identify the scary project you have been avoiding. The one that makes your stomach tighten. That physical reaction is data. Start it tomorrow morning.",
        night: "Monday night playing it safe. The week has four more days to take a risk that matters. What bold move have you been putting off? The one that makes your stomach tighten when you imagine doing it? That physical fear is pointing exactly where your growth lives. Plan to do it tomorrow."
      },
      friday: {
        morning: "Friday morning still playing safe. The week is ending and you took no risks. That is understandable but it is also why nothing changed and nothing will change. Safe is forgettable. The weekend is for reflection. What risk would you take if you had permission? You have permission. Give it to yourself.",
        afternoon: "Friday afternoon with low boldness. The week played out safely and therefore forgettably. Before the weekend, consider honestly: what would you create if your reputation could not be damaged? If judgment was impossible? That thing you just thought of is probably important. The fear is the signal.",
        evening: "Friday evening playing it safe. The week is over and you survived it. But surviving is not thriving. This weekend, think about what you would make if you stopped being afraid of judgment and cancellation. That fear is pointing somewhere important. Follow it instead of running from it.",
        night: "Friday night with low boldness. The week was safe and therefore forgettable. No one will remember content that takes no risks at all. The weekend is for asking: what scares me creatively? That fear is data. It is showing you exactly where your growth and memorability live. Follow it."
      },
      saturday: {
        morning: "Saturday morning thinking about risk. What would bold look like for you specifically? Not reckless. Bold. The thing that makes you uncomfortable but excited at the same time. The fear underneath is judgment or failure. The weekend is for considering that bold thing seriously. Maybe even starting it today.",
        afternoon: "Saturday afternoon playing it safe. Even your weekend is safe and comfortable. What would you experiment with if the experiment could not fail? If no one was watching? If judgment did not exist? Consider trying that today. The worst case is usually not that bad. The best case changes everything.",
        evening: "Saturday evening with boldness on your mind. Tomorrow is Sunday, a day for deeper reflection. What project have you been talking yourself out of? The one that feels too weird, too personal, too risky for your brand? That is probably the one that would matter most. Fear is a compass pointing to growth.",
        night: "Saturday night thinking about risk. The week ahead could be different from every week before it. Before you sleep, write down one bold thing you could do next week. Not huge. Just bolder than usual. Something that makes your heart beat faster. See if you have the courage to do it."
      },
      sunday: {
        morning: "Sunday morning considering boldness. The week starts tomorrow. Will it be another safe week indistinguishable from last week? Or will you try something different? What is the one risky thing you could do Monday morning? Name it specifically. Commit to it now while the courage is available.",
        afternoon: "Sunday afternoon thinking about risk. Monday is coming fast. You have a choice to make. More of the same safe forgettable content. Or something bold that might fail but might actually matter. What would you create if you knew you could not be cancelled for it? Consider making exactly that thing.",
        evening: "Sunday evening with low boldness. The week ahead is an opportunity you have wasted before by playing it safe. Safe work is forgettable work. What would make you memorable to the right people? Not famous. Memorable. That requires risk. Specifically, the risk of being judged or rejected for who you really are.",
        night: "Sunday night playing it safe as usual. Tomorrow is Monday and the week is unwritten. What if you did one thing this week that scared you creatively? Just one bold move. The resistance you feel right now when you imagine doing it is proportional to its importance. That is how boldness works."
      },
      midweek: {
        morning: "Midweek morning still playing safe. Half the week is gone and you took no risks yet. Safe is forgettable. You still have time to change that pattern. What is one thing you could do today that would be bolder than usual? That makes your stomach tighten slightly? Do that thing. See what happens.",
        afternoon: "Midweek afternoon with low boldness. The week is slipping by safely and therefore forgettably. Before Friday, take one creative risk. Not a big one. A small one. Something that makes your heart beat slightly faster when you imagine posting it. That physical reaction is the signal.",
        evening: "Midweek evening playing it safe. Tomorrow is another chance to be memorable instead of forgettable. What would you post if you were not afraid of judgment? If cancellation was impossible? That thing you just thought of. Consider posting it. The fear is the signal pointing to growth.",
        night: "Midweek night with low boldness. The week is half over and no risks taken yet. Two or three days remain. What could you create by Friday that would genuinely surprise people? Not shock for shock. Surprise with truth. Something true that you have been hiding because you were afraid to share it."
      }
    }
  },

  // BOTTLENECK: Intimacy (large audience dilution)
  audience_dilution: {
    condition: (p) => p.isLargeAudience && p.bottleneck.name === 'intimacy',
    label: "📢 SCALE VS SOUL",
    messages: {
      monday: {
        morning: "Monday morning with a large audience but thinning connection. The trap of scale is more reach but less intimacy. More views but less feeling. The week ahead is a choice: more reach or more depth? Before you create today, remember why they followed you in the first place. Not the algorithm. The original magic you had with your first hundred. Make from there again.",
        afternoon: "Monday afternoon at scale. The numbers are good but the feeling is fading. You started for connection, not metrics. What would you create today if you only had 100 followers who would actually notice? That intimacy you had at the start before you became a broadcast station. Can you recapture it at scale? Try.",
        evening: "Monday evening with mass audience. Day one is ending. Did you connect with anyone specifically today? Not broadcast. Connect. Real human contact. Tomorrow, reach out to one follower personally. Have an actual conversation. Remember they are humans who chose you, not metrics to optimize.",
        night: "Monday night at scale. The week has four more days and you can reach millions of people. But are you actually touching anyone? Before you sleep, remember why you started and who you started for. Depth beats breadth. Always. One person moved deeply matters more than a million people who scrolled past."
      },
      friday: {
        morning: "Friday morning with scale versus soul. The week is ending and you reached many. Who did you actually connect with? Name them. The weekend is for remembering why this matters. Not the numbers. Not the metrics. The impact on real humans who gave you their attention. Did you deserve it?",
        afternoon: "Friday afternoon at mass scale. The week performed well by the numbers. But performance is not connection. Reach is not resonance. Before the weekend, have one real conversation with someone who follows you. Not a broadcast. Not a quick reply. An actual human conversation with depth.",
        evening: "Friday evening with a large audience. The week is over and the metrics look good on paper. But metrics are just shadows of meaning. This weekend, think about what your day one fans would want from you. The ones who found you before you were big. They remember the real you. Make more of that.",
        night: "Friday night at scale. The week is done and you reached more people than most creators will ever reach in their lifetime. Did you move any of them? The weekend is for remembering that one person moved deeply matters more than a million people who scrolled past without feeling anything."
      },
      saturday: {
        morning: "Saturday morning thinking about scale. Your audience is large but is it deep? Do they feel connected or just subscribed? Today, instead of thinking about growth, think about depth. What would make your existing audience feel more connected to you personally? Do that instead of chasing new followers.",
        afternoon: "Saturday afternoon with mass reach. The numbers are impressive but numbers do not feel anything. They do not tell their friends. They do not cry or laugh. What would you create if you wanted someone to cry? To laugh out loud alone at their phone? To send it to their best friend? That is depth.",
        evening: "Saturday evening at scale. Tomorrow is Sunday, time to reflect on what actually matters. Not reach. Resonance. What made your early work resonate before you had an audience? Before you became a content machine? That thing is still the point. Scale should amplify it not replace it.",
        night: "Saturday night with a large audience. The weekend is for perspective on what you have built and why. You have reach most creators dream of. Are you using it for depth or just more reach? For connection or just content? The answer shapes your legacy more than any metric ever will."
      },
      sunday: {
        morning: "Sunday morning with scale on your mind. The week starts tomorrow. Will it be about growing the audience even larger or deepening the connection with who you already have? Both are valid but depth compounds in ways reach cannot. Consider making something intimate instead of viral.",
        afternoon: "Sunday afternoon thinking about connection. Monday is coming and you can broadcast to millions. But what if you created like you were talking to one person who desperately needed to hear it? The best large creators never lost that intimacy despite their scale. Can you find it again?",
        evening: "Sunday evening at mass scale. The week ahead is an opportunity not for more reach but for more meaning. What would your most loyal followers want from you this week? Not the casual ones who will scroll past anyway. The true fans who chose you specifically. Serve them first and deeply.",
        night: "Sunday night with a large audience. Tomorrow you create again and millions might see it. This time, create like you have 100 followers who would notice if you stopped. That intimacy. That care. That personal touch. Scale has not changed what matters. Depth still wins over breadth."
      },
      midweek: {
        morning: "Midweek morning with scale versus soul. Half the week is gone and you have broadcast to many people. But have you connected with anyone specifically? Today, make something for your day one fans. The ones who found you before you were big and loved you anyway. What do they actually need?",
        afternoon: "Midweek afternoon at mass reach. The week is slipping by in broadcasts that reach millions but touch no one specifically. Before Friday, have one real interaction with depth. Reply deeply to someone. Have a real conversation. Remember that behind every follow is a human who chose you.",
        evening: "Midweek evening with a large audience. Tomorrow is another chance to choose depth over breadth. What would you make if metrics did not exist at all? If only the work and the people mattered? That clarity might change what you create. Try making for real connection not performance.",
        night: "Midweek night at scale. The week is half over and you have reached many people. Have you actually moved anyone? The remaining days are a chance to prioritize depth over breadth. One piece that matters deeply to someone is worth more than ten that perform well but feel like nothing."
      }
    }
  },

  // STRENGTH: Small audience advantage
  small_audience_strength: {
    condition: (p) => p.isSmallAudience && p.raw.impact >= 6,
    label: "💎 INTIMATE POWER",
    messages: {
      monday: {
        morning: "Monday morning with a small but powerful audience. You have what large creators would pay millions to get back: you can know each person who follows you. Their names. Their struggles. Their wins. This is not a limitation to overcome. This is an advantage to exploit. The week ahead is for deepening, not broadening. Who can you reach out to personally today? Not to promote. To connect. To learn what they actually need.",
        afternoon: "Monday afternoon with intimate power. Your audience is small and that is a genuine strength that disappears at scale. What do they specifically need that no one else is making for them? Ask them. Literally send a message and ask. You can still do that. Large creators cannot. Use this superpower before it scales away.",
        evening: "Monday evening with a small audience. Day one is ending. Did you talk to any of your followers directly today? You have the ability to know them by name, to remember their struggles, to celebrate their wins. That is worth more than millions of strangers who scroll past. Tomorrow, use this advantage.",
        night: "Monday night with intimate reach. The week has four more days to use your superpower. Your small audience is not a limitation. It is a laboratory. You can experiment boldly, fail quietly, adjust quickly. No one is watching except the people who genuinely care. That freedom is priceless. Use it this week."
      },
      friday: {
        morning: "Friday morning with intimate power. The week is ending and your small audience stayed with you through all of it. That loyalty is everything. Large creators would trade their numbers for it. Before the weekend, thank one person who has been there from early on. Not publicly. Personally. That connection is your edge.",
        afternoon: "Friday afternoon with a small but mighty following. The week showed you exactly who your people are because you can actually see them. The weekend is for appreciating them deeply. Not chasing new followers. Appreciating the real humans who already chose you. That appreciation compounds.",
        evening: "Friday evening with intimate reach. The week is over and your audience is small and real. That combination is rare and genuinely valuable. Protect it. Nurture it carefully. Growth will come from depth, not from chasing breadth. The creators with millions wish they still had what you have right now.",
        night: "Friday night with a small audience. The week is done and you do not have millions but you have something large creators envy deeply: people who genuinely care about you specifically. The weekend is for remembering that quality beats quantity. Always. Depth creates sustainable width."
      },
      saturday: {
        morning: "Saturday morning with intimate power. Your small audience is your superpower not your limitation. Today, think about how you can serve them more deeply. Not reach more people. Serve these specific people better. What would delight them? You can actually find out by asking them directly.",
        afternoon: "Saturday afternoon with a small following. You can reply to everyone who comments. You can know their names and their stories. You can ask what they need and actually respond to each answer. How many large creators wish they had that ability back? Use it today before it scales away.",
        evening: "Saturday evening with intimate reach. Tomorrow is Sunday, a day to reflect. What could you create specifically because one follower asked for it? That is the power of small. You can actually respond to individuals and make them feel seen. That feeling creates the deepest loyalty.",
        night: "Saturday night with a small audience. The week ahead does not need to be about growth at all. It can be entirely about depth. What would make your existing followers feel like founding members of something special? Plan that for next week. The depth creates the foundation for everything."
      },
      sunday: {
        morning: "Sunday morning with intimate power. The week starts tomorrow and you have something precious that most creators lose forever: a small group that chose you specifically. What would you make if you were only making it for them and no one else? Make exactly that. The intimacy is the advantage.",
        afternoon: "Sunday afternoon with a small audience. Monday is coming fast. Instead of chasing growth, what if you chased depth? Made your small audience feel like the most important people in the world? They might actually be. That feeling of being seen creates the strongest foundation for growth.",
        evening: "Sunday evening with intimate reach. The week ahead is an opportunity to deepen before you widen your audience. The depth creates the foundation that scale requires. Without depth, width collapses under its own weight. Serve who you have deeply before chasing who you do not have yet.",
        night: "Sunday night with a small but powerful audience. Tomorrow you create again. Create like these specific people are watching because they are. Not millions of strangers. Your people who chose you. That intimacy is your edge. Large creators would trade their numbers for what you have."
      },
      midweek: {
        morning: "Midweek morning with intimate power. Half the week is gone. Have you used your superpower yet? You can reach out personally to anyone who follows you. You can ask directly what they actually need. You can know your audience by name. That ability disappears at scale. Use it today.",
        afternoon: "Midweek afternoon with a small audience. The week is slipping by quickly. Before Friday arrives, connect with three followers personally. Not broadcast at them. Connect with them directly. Ask what they need. Then actually make it. That responsiveness is impossible at scale. Use it now.",
        evening: "Midweek evening with intimate reach. Tomorrow is another chance to use your advantage fully. What would you create if you knew exactly who was watching? You do know them. Your small audience is completely knowable. Make specifically for them. That specificity creates deep resonance.",
        night: "Midweek night with a small following. The week is half over and your audience is small. That is perfect for now. Depth first. Then width. The large creators who built sustainable careers all started exactly where you are right now. They built deep before they built wide. Do that."
      }
    }
  },

  // STRENGTH: High boldness
  boldness_strength: {
    condition: (p) => p.strength.name === 'boldness' && p.raw.boldness >= 7 && p.average < 7,
    label: "🔥 BOLD BUT UNHEARD",
    messages: {
      monday: {
        morning: "Monday morning bold but unheard. You take risks others avoid but your courage is firing into the void. The bravery is there. The audience is not. Courage without aim is just noise in an empty room. The week ahead needs targeting, not more bravery. Who specifically needs your bold truth? Find where they gather. Aim there.",
        afternoon: "Monday afternoon with boldness to spare. Your work is fearless but it is firing into a void. That courage is wasted without direction. Who would be transformed by your message if they actually heard it? That person exists somewhere right now. Find where they gather and aim your boldness directly at them.",
        evening: "Monday evening bold but unheard. Day one is ending and your courage is not the problem. Your aim is. Bravery without direction is just noise that no one hears. Before tomorrow, get specific: who needs exactly what you are saying? Not everyone. Someone specific. Where do they spend their time?",
        night: "Monday night with untargeted boldness. The week has four more days to aim your courage properly. You have the bravery that most people lack entirely. Now you need the strategy. Who is your audience? Not who might like you. Who desperately needs your uncomfortable truth? Find them this week."
      },
      friday: {
        morning: "Friday morning bold but unheard. The week is ending and your courage did not find its audience again. That is a targeting problem, not a talent problem. Your boldness is rare and genuinely valuable. The weekend is for getting ruthlessly specific. Who exactly is this for? Name them.",
        afternoon: "Friday afternoon with boldness strength. You took real risks this week that others would never take. Did they land? If not, the issue is not the risk or the courage. It is the aim. Before the weekend, define your target more precisely. Courage plus precision is unstoppable combination.",
        evening: "Friday evening bold but unheard. The week is over and your fearlessness is a genuine asset most creators lack entirely. But courage without strategy is just noise in an empty room. This weekend, plan exactly where to aim your boldness. It deserves to land somewhere real and specific.",
        night: "Friday night with untargeted bravery. The week is done and you have exactly what it takes to break through the noise. You just need to find exactly where your boldness is needed most. The weekend is for that important question: who specifically and desperately needs your uncomfortable truth?"
      },
      saturday: {
        morning: "Saturday morning bold but unheard. You have courage that most creators never find in their entire careers. Today, work on aim. Where do people who need your specific message actually gather? What platforms? What communities? What conversations? Your boldness deserves a home. Find it.",
        afternoon: "Saturday afternoon with boldness to spare. The courage is definitely not the problem. The targeting is the issue. What specific group of people is being told comfortable lies that desperately need your uncomfortable truth? Find that group. Aim directly at them. Let your courage land.",
        evening: "Saturday evening bold but unheard. Tomorrow is Sunday, time to think strategically about direction. Your bravery is rare and genuinely valuable. Where would it be most valuable? Not everywhere. Somewhere specific. What community needs to hear exactly what you have the courage to say?",
        night: "Saturday night with untargeted boldness. The week ahead needs to be completely different from this one. Before you sleep, answer honestly: if only one type of person heard my work, who should it be? Aim all of your boldness directly at that specific person next week. That is real targeting."
      },
      sunday: {
        morning: "Sunday morning bold but unheard. The week starts tomorrow and your courage is ready. Is your aim ready? Who specifically are you trying to reach this week? Get precise about it. Boldness plus targeting is unstoppable. Boldness without targeting is just noise floating in the void.",
        afternoon: "Sunday afternoon with boldness strength. Monday is coming fast and you will be brave because that is who you are at your core. But will you be strategic about it? What would actually happen if you aimed all your courage at one specific audience instead of spraying it at everyone?",
        evening: "Sunday evening bold but unheard. The week ahead is an important opportunity not for more boldness but for much better targeting of your message. You have enough courage already. Where does your message need to land specifically? Who is waiting for exactly what you have the bravery to say?",
        night: "Sunday night with untargeted bravery. Tomorrow you create again. This time, aim your courage precisely. Not at everyone out there. At someone specific who desperately needs it. The boldness is not the problem at all. The precision is. Fix that this week. Find your specific people."
      },
      midweek: {
        morning: "Midweek morning bold but unheard. Half the week is gone and your courage is firing but not landing anywhere at all. Today, focus entirely on targeting. One specific audience. One specific message. Aim your boldness directly at the specific people who need it most. Let it land somewhere real.",
        afternoon: "Midweek afternoon with boldness to spare. The week is slipping by quickly without your courage finding its audience. Before Friday arrives, get very specific about who needs your message. Not everyone. The specific people who are waiting for exactly your uncomfortable truth. Name them.",
        evening: "Midweek evening bold but unheard. Tomorrow is another chance to aim your courage directly at the right people. What if you combined your bravery with precision? Bold AND targeted together. That combination is rare in the world. That combination actually works. Try it tomorrow morning.",
        night: "Midweek night with untargeted bravery. The week is half over and your boldness is a genuine asset. Your aim needs serious work though. Before you sleep, write down exactly who needs what you are saying. Tomorrow, reach them directly and specifically. Let your courage finally land."
      }
    }
  },

  // AUDIENCE TIER: Intimate (<1K)
  tier_intimate: {
    condition: (p) => p.audienceTier && p.audienceTier.intimate && p.average >= 5,
    label: "💎 INTIMATE CIRCLE",
    messages: {
      monday: {
        morning: "Monday morning with fewer than 1000 people following you. That is not a limitation. That is a superpower most creators lose and never get back. You can reply to everyone who comments. You can know their actual names. Today, reach out to three followers personally. Not to promote. To connect. To learn what they actually need. This is your unfair advantage.",
        afternoon: "Monday afternoon with an intimate audience. The week is young and you have access that disappears at scale. What do your followers actually need from you? You can ask them directly. Literally send a message and ask. Try that today. The answers will shape your entire week. That is power.",
        evening: "Monday evening with a small circle. Day one is ending. Did you talk to any of your people today? You have the ability to have real conversations with everyone who follows you. Use it before it scales away forever. This stage allows what later stages do not. Tomorrow, reach out personally.",
        night: "Monday night with intimate reach. The week has four more days to use your superpower. Your small audience is a laboratory. You can experiment boldly, fail quietly, adjust quickly without the world watching. That freedom is priceless and temporary. Use it this week before it is gone."
      },
      friday: {
        morning: "Friday morning with fewer than 1000 followers. The week is ending. Did you use your intimacy advantage at all? Before the weekend, reach out to someone who engaged with you this week. Thank them personally. Know their story. That connection is worth more than a thousand passive followers.",
        afternoon: "Friday afternoon with a small audience. The week showed you exactly who your people are because you can actually see each one of them individually. You can know them by name and story. How many large creators wish they had that ability back? Appreciate it deeply this weekend. Use it.",
        evening: "Friday evening with intimate reach. The week is over and your audience is small and real. That combination is rare and genuinely valuable. The weekend is for appreciating what you have before chasing growth. The depth you build now creates the foundation for everything that follows.",
        night: "Friday night with fewer than 1000 people. The week is done and you do not have millions yet. You have something much better right now: people you can actually know personally. Protect that relationship. Deepen it. Large creators would trade their numbers for what you have right now."
      },
      saturday: {
        morning: "Saturday morning with an intimate circle. The weekend is for thinking about these specific people. Not more people. These people who already chose you. What do they actually need from you? What would delight them? You can find out by asking them directly. That access is your edge.",
        afternoon: "Saturday afternoon with a small audience. You have access to your followers that scales away forever at larger numbers. Use the weekend to deepen relationships with specific followers. Not all of them. A few real ones. Know their stories well. That depth compounds into loyalty quickly.",
        evening: "Saturday evening with intimate reach. Tomorrow is Sunday. What could you create specifically because one follower asked for it? That responsiveness is your edge. You can be the creator who actually listens to them and responds directly. That reputation becomes your growth engine.",
        night: "Saturday night with fewer than 1000 followers. The week ahead does not need to be about growth at all. It can be entirely about depth instead. What would make your existing followers feel like true founding members of something genuinely special? Plan that out carefully this weekend."
      },
      sunday: {
        morning: "Sunday morning with an intimate circle. The week starts tomorrow and you have something precious that most creators lose forever: a small group that chose you specifically. Create like you are making it specifically for them alone. Because you are. They notice. They remember everything you do.",
        afternoon: "Sunday afternoon with a small audience. Monday is coming fast. Instead of chasing new followers, what if you served existing ones so well they naturally brought new ones for you? That is sustainable growth. The intimacy you have now makes it entirely possible. Use it today wisely.",
        evening: "Sunday evening with intimate reach. The week ahead is an important opportunity to build the foundation that scale requires. Depth now creates sustainable width later. You can know everyone who follows you by name right now. That ability disappears forever at scale. Use it right now.",
        night: "Sunday night with fewer than 1000 people. Tomorrow you create again. Create like these specific humans are watching because they are. Not strangers at all. Your people who chose you specifically. That intimacy is everything. It is exactly what large creators cannot ever get back."
      },
      midweek: {
        morning: "Midweek morning with an intimate circle. Half the week is gone. Have you used your superpower at all this week? You can message anyone who follows you and they will probably reply quickly. That access disappears forever at scale. Use it today before it is completely gone forever.",
        afternoon: "Midweek afternoon with a small audience. The week is slipping by quickly. Before Friday arrives, ask five followers what they actually need from you. Literally send messages and ask them directly. Then consider making it. That responsiveness is impossible at scale. Use it now wisely.",
        evening: "Midweek evening with intimate reach. Tomorrow is another chance to use your advantage fully. Your small audience is not a problem to solve at all. It is an advantage to use aggressively right now. Every large creator started where you are right now. Use what they cannot get back.",
        night: "Midweek night with fewer than 1000 followers. The week is half over and you have something genuinely valuable right now. Every large creator started exactly where you are right now. The ones who won built deep before they built wide. Do that right now. Depth first. Width follows."
      }
    }
  },

  // AUDIENCE TIER: Growing (1K-10K)
  tier_growing: {
    condition: (p) => p.audienceTier && p.audienceTier.growing && p.average >= 5,
    label: "🌱 BUILDING MOMENTUM",
    messages: {
      monday: {
        morning: "Monday morning in the 1K to 10K zone. Past hobby, not yet career. This is the phase that makes or breaks creative careers. What you do now becomes what you are known for. The temptation is to scatter. Try everything. Chase every platform. Resist that completely. Double down on what is already working. Not what you wish was working. What is actually resonating. Today, identify your best performing content type and do more of that.",
        afternoon: "Monday afternoon building momentum. The week is young and you have traction. Not massive. Real. This phase is crucial because scattering kills more creative careers than lack of talent. The creators who break through are the ones who double down relentlessly on what works. What would it take to double down on your best performing work this afternoon? Do that instead of experimenting with something new.",
        evening: "Monday evening in the growth phase. Day one is ending. Did you lean into what works or scatter into what might work? Most creators at this stage scatter because consistency feels boring. But boring consistency is what builds careers. The thing that got traction deserves more attention tomorrow. Plan to give it that. Focus beats creativity at this stage.",
        night: "Monday night with growing momentum. The week has four more days. This is not the time to pivot or experiment. This is the time to deepen. What made them follow you in the first place? Give them more of exactly that. The 1K to 10K zone rewards consistency over creativity. The creators who stall here are the ones who keep chasing new things instead of deepening what works."
      },
      friday: {
        morning: "Friday morning in the 1K to 10K zone. The week is ending. Did you build on what works or chase what might? This phase is where careers are made or broken by consistency. The weekend is for clarity. Look at your data honestly. What actually grew this week? Do more of that next week. Not what you wish worked. What actually worked.",
        afternoon: "Friday afternoon building momentum. The week showed you what resonates. Before the weekend, write it down. What worked? What did not? That data shapes next week. Most creators ignore this data because they prefer the content they want to make over the content that works. At this stage, that preference kills momentum. Follow what resonates.",
        evening: "Friday evening in the growth phase. The week is over. You are not stuck. You are building something real. Momentum at this stage is fragile and precious. Protect it by staying consistent with what works. The temptation to experiment with something new over the weekend will be strong. Resist it. The creators who break through are the ones who stay boring longer.",
        night: "Friday night with growing audience. The week is done. You have traction that most people never find. The weekend is for appreciating that while planning to build on it. Not reinvent it. Not experiment with new formats. Build on what is already working. That is what separates the creators who stall here from the ones who break through to the next level."
      },
      saturday: {
        morning: "Saturday morning in the 1K to 10K zone. The weekend is for perspective. You are past hobby. Not yet career. What would make this a career? Consistency would. The creators who turn this into a career are the ones who show up consistently with what works. Not the ones who keep experimenting. What commitment to consistency could you make this weekend?",
        afternoon: "Saturday afternoon building momentum. The growth is real but fragile. What would protect it? More of what works. Less experimentation. This phase rewards consistency above all else. The temptation to scatter across platforms and formats is strong at this stage. Resist it aggressively. Double down on your single best performing content type. That focus is what builds careers.",
        evening: "Saturday evening in the growth phase. Tomorrow is Sunday and the week ahead will test your consistency. What commitment could you make right now that would protect your momentum? Consistency beats creativity at this stage. The creators who break through are the ones who do the same thing well over and over. Not the ones who keep trying new things.",
        night: "Saturday night with growing audience. The week ahead matters more than you think. This phase is exactly where most people stall because they scatter instead of focusing. Keep going with what works. The compound effect is coming if you stay consistent. Most of your competitors will experiment themselves out of momentum. You will not. Stay the course relentlessly."
      },
      sunday: {
        morning: "Sunday morning in the 1K to 10K zone. The week starts tomorrow. What will you do that keeps the momentum going? Not new experiments. Consistent execution on what already works. This phase is past hobby but not yet career. The bridge to career is consistency. Plan this week around your best performing content. Nothing else matters as much right now.",
        afternoon: "Sunday afternoon building momentum. Monday is coming fast. You have something most people never get: real traction. Do not squander it chasing novelty or experimenting with new formats. Deepen what works instead. The creators who break through from this phase are the ones who resist the urge to scatter. Be one of those creators. Focus relentlessly.",
        evening: "Sunday evening in the growth phase. The week ahead is for building on your foundation. Not reinventing it. Not experimenting with new platforms. What worked last week? Plan to do more of exactly that. The 1K to 10K zone rewards consistency over creativity. The breakthrough comes from depth, not breadth. Go deeper on what already resonates.",
        night: "Sunday night with growing audience. Tomorrow you create again. This time, create what you know works. Not what you hope might work. The 1K to 10K phase rewards consistency over creativity every single time. The creators who stall here are the ones who keep experimenting. The ones who break through are the ones who stay consistent. Be consistent."
      },
      midweek: {
        morning: "Midweek morning in the 1K to 10K zone. Half the week is gone. Have you been consistent with what works? Or distracted by what might work? The rest of the week needs focus. This phase is where creative careers are built or broken. The difference is consistency. Today, recommit to your best performing content type. Nothing else matters as much.",
        afternoon: "Midweek afternoon building momentum. The week is slipping by. Before Friday arrives, make sure you have done more of what works. Not just experimented with what might work. The creators who break through from this phase are the ones who stay focused when everyone else scatters. Be one of those creators. Do more of what is already resonating.",
        evening: "Midweek evening in the growth phase. Tomorrow is another chance to build momentum. Momentum at this stage requires consistency above all else. What would consistent look like for the rest of this week? Not new experiments. Not new platforms. More of what already works. The compound effect is coming but only if you stay focused.",
        night: "Midweek night with growing audience. The week is half over and the traction you have is real but fragile. Protect it with consistency. The compound effect is coming if you stay the course. Most creators scatter at this stage and lose their momentum. You will not do that. Stay focused on what works. The breakthrough is closer than you think."
      }
    }
  },

  // AUDIENCE TIER: Established (10K-100K)
  tier_established: {
    condition: (p) => p.audienceTier && p.audienceTier.established && p.average >= 5,
    label: "🏛 ESTABLISHED PRESENCE",
    messages: {
      monday: {
        morning: "Monday morning with 10K to 100K followers. You have real traction. People recognize your name. But the algorithm is starting to pressure you toward hollow optimization. Today, resist that pressure. Make something that serves your audience, not the metrics. This is the fork in the road: hollow growth or sustainable depth. Every piece you make is a vote for one path or the other. Choose depth.",
        afternoon: "Monday afternoon with established presence. The week is young and you already feel the pull toward optimization. Resist it completely. The algorithm wants you to water down your voice for broader appeal. That is a trap. What would you make if the algorithm did not exist? Make exactly that this afternoon. Your day one followers followed for your voice, not optimized content.",
        evening: "Monday evening in the established zone. Day one is ending. Did you serve your audience or the algorithm today? This is the question that defines this phase. The algorithm pressure only gets stronger from here. Tomorrow, choose audience. Always choose audience. The creators who survive this phase with their soul intact are the ones who resist optimization relentlessly.",
        night: "Monday night with 10K to 100K followers. The week has four more days. This is the fork in the road where creators either hollow out or deepen. Hollow growth looks like success but feels empty. Sustainable depth looks slower but compounds forever. Every piece you make is a vote for one path or the other. The algorithm wants hollow. Your soul wants depth. Choose wisely."
      },
      friday: {
        morning: "Friday morning with established presence. The week is ending. Did you stay true to what built this? The algorithm pressured you all week to optimize away your soul. Did you resist? The weekend is for remembering why they followed in the first place. Not because of the algorithm. Because of you. Because of your voice. Reconnect with that.",
        afternoon: "Friday afternoon with 10K to 100K followers. The week showed you the tension between growth and truth. That tension never goes away at this level. Before the weekend, recommit to truth. Growth that follows truth is sustainable. Growth that abandons truth is hollow. The algorithm cannot tell the difference but your audience can. And so can you.",
        evening: "Friday evening in the established zone. The week is over and you felt the constant pressure to optimize. Did you resist or did you give in? The weekend is for reconnecting with why this matters beyond the metrics. Your voice got you here. Optimizing it away is the most common mistake at this stage. Protect your voice. It is your only real asset.",
        night: "Friday night with established presence. The week is done and you have something worth protecting. The weekend is for remembering what that something is. Not the numbers. The work. The truth. The voice. The algorithm will pressure you to optimize all of that away for broader appeal. That is the trap. Your depth is worth more than hollow growth ever could be."
      },
      saturday: {
        morning: "Saturday morning with 10K to 100K followers. The weekend is for perspective on where you are. You are at the fork. One path leads to hollow growth where you optimize away everything that made you special. One path leads to sustainable depth where you protect your voice at all costs. Which path are you on? Which path do you want to be on? The difference is your choice.",
        afternoon: "Saturday afternoon with established presence. You have traction that matters. The question is whether you will trade it for algorithm approval. Do not make that trade. The depth is worth more than hollow growth. The algorithm wants you to water down your voice for broader appeal. That is a trap that many creators fall into at this stage. You do not have to.",
        evening: "Saturday evening in the established zone. Tomorrow is Sunday, time to think about what you want to be known for. Not what performs well. What actually matters. Those might be very different things at this stage. The algorithm rewards one thing. Your soul rewards another. The weekend is for deciding which one you will serve in the week ahead.",
        night: "Saturday night with 10K to 100K followers. The week ahead will test you. The algorithm will want one thing. Your soul will want another. They are often opposites at this stage. Decide now which you will serve before the pressure starts. The creators who survive this phase with their soul intact are the ones who decide in advance to resist optimization."
      },
      sunday: {
        morning: "Sunday morning with established presence. The week starts tomorrow and you will feel the pull toward optimization from the first moment. Before it begins, remember this: the voice that got you here is the voice that keeps you here. Optimizing it away for broader appeal is the most common mistake at this stage. Today, recommit to your voice. Protect it.",
        afternoon: "Sunday afternoon with 10K to 100K followers. Monday is coming and the algorithm will pressure you to optimize. Resist that pressure with everything you have. What would your day one followers want? Make for them. Not for the masses. Not for the algorithm. For the people who followed you when you were small because they loved your voice.",
        evening: "Sunday evening in the established zone. The week ahead is an opportunity to stay true to what matters. Not to grow at any cost. To grow in ways that sustain your soul. What would that look like? What would you make if you knew your day one followers were the only ones watching? Make that. That is sustainable growth.",
        night: "Sunday night with established presence. Tomorrow you create again. This time, create like the metrics do not exist at all. They are not why you started. Do not let them become why you continue. The algorithm pressure is real but so is your option to resist. The creators who last are the ones who resist. Be one of those creators."
      },
      midweek: {
        morning: "Midweek morning with 10K to 100K followers. Half the week is gone. Have you stayed true to your voice? Or drifted toward optimization? The rest of the week is a choice you make right now. This is the stage where creators either hollow out or deepen. Today, recommit to depth. Make something true. The algorithm can wait.",
        afternoon: "Midweek afternoon with established presence. The week is slipping by. Before Friday arrives, make something you would have made before you had an audience. Something true. Something that exists because you care about it, not because it performs well. That is how you stay real at this stage. That is how you protect your voice.",
        evening: "Midweek evening in the established zone. Tomorrow is another chance to choose depth over hollow growth. The pressure to optimize never goes away at this stage. But neither does the option to resist. Resist that pressure. Make something true. The creators who last are the ones who protect their voice when everyone else is optimizing theirs away.",
        night: "Midweek night with 10K to 100K followers. The week is half over. You are at the stage where creative careers are built or sold out. Do not sell yours for metrics. Stay true to your voice. The algorithm pressure is real but so is your option to resist it. The remaining days this week are for creating something true. Not something optimized."
      }
    }
  },

  // AUDIENCE TIER: Large (100K-1M)
  tier_large: {
    condition: (p) => p.audienceTier && p.audienceTier.large && p.average >= 5,
    label: "📡 SCALE CHALLENGES",
    messages: {
      monday: {
        morning: "Monday morning with 100K to 1M followers. Real scale. People you have never met are watching. The challenge at this level is maintaining humanity. It is easy to see metrics instead of humans. Today, find one way to make it feel smaller. Reply to someone personally. Make something niche. Remember they are humans who chose you, not numbers.",
        afternoon: "Monday afternoon at scale. The week is young. The numbers are large. But behind every number is a human being who chose you. That is the responsibility of influence. What would you make today if you remembered that they are people, not metrics? Make exactly that. Connection matters more than reach at this stage.",
        evening: "Monday evening with large reach. Day one is ending. Did you connect with anyone specifically? Or just broadcast at an anonymous mass? Tomorrow, find one person to actually talk to. Scale is not an excuse for distance. The best large creators maintain their humanity by remembering that each follower is a real person.",
        night: "Monday night with 100K to 1M followers. The week has four more days. You have influence that most people never get. That influence is a responsibility, not just an achievement. What will you do with it? Not for growth. For actual impact on real people. The numbers are large but the humans behind them matter."
      },
      friday: {
        morning: "Friday morning at scale. The week is ending. You reached many people. Did you connect with any of them as humans? The weekend is for remembering that reach without resonance is just noise. The responsibility of influence is to actually impact the humans behind the metrics. Did you do that this week?",
        afternoon: "Friday afternoon with 100K to 1M followers. The week performed well by the metrics. But performance is not the same as impact. Before the weekend, have one real conversation with an actual follower. Remember why this matters beyond the numbers. The responsibility of scale is maintaining your humanity.",
        evening: "Friday evening with large reach. The week is over and the numbers were good. But were you good? Did you stay true to what built this? Did you remember that followers are humans, not metrics? The weekend is for that question. The responsibility of influence is using it for connection, not just reach.",
        night: "Friday night at scale. The week is done. You influenced many people. Did you serve them? Did you remember they are humans who chose you? The weekend is for remembering that scale is a responsibility, not just an achievement. The numbers are large but the humans behind them are what matter."
      },
      saturday: {
        morning: "Saturday morning with 100K to 1M followers. The weekend is for perspective on what you have. You have what most people dream of. Are you using it well? Not for more growth. For actual impact on real humans. The responsibility of influence is to serve the people who gave you that influence. Are you doing that?",
        afternoon: "Saturday afternoon at scale. You can move markets. Shift conversations. Change how people think. What are you doing with that power? Not what does it earn you. What does it mean? That question matters more at this stage. The responsibility of influence is using it for something that matters beyond metrics.",
        evening: "Saturday evening with large reach. Tomorrow is Sunday, time to think about legacy. Not growth. Legacy. What will you be remembered for? Numbers or impact? The responsibility of influence is to use it for something worth being remembered for. What is that for you? The answer should guide your work.",
        night: "Saturday night with 100K to 1M followers. The week ahead brings pressure. To grow. To optimize. To scale even further. What if you focused on depth instead? What if you focused on serving the humans who already follow you instead of reaching new ones? That is how you maintain your humanity at scale."
      },
      sunday: {
        morning: "Sunday morning at scale. The week starts tomorrow. You will reach many people. Will you actually move them? The reach is already handled. The depth requires daily intention. Intend depth this week. Remember that every metric is a human who chose you. Serve them like humans, not like numbers.",
        afternoon: "Sunday afternoon with 100K to 1M followers. Monday is coming fast. Everyone will want something from you. Before the noise begins, remember what you want. Not what they want. What you want. The responsibility of influence is to stay true to why you started while serving the people who gave you that influence.",
        evening: "Sunday evening with large reach. The week ahead is an opportunity. Not for more reach. For more meaning. For more connection. What would your most loyal followers want from you? Not your casual audience. Your true fans. Serve them specifically. That is the responsibility of influence.",
        night: "Sunday night at scale. Tomorrow you create again. This time, create like you are talking to one person. Not a faceless audience. One human. The best large creators never lose that personal connection. Do not lose it. Scale is not an excuse for distance. Every follower is a human who chose you."
      },
      midweek: {
        morning: "Midweek morning with 100K to 1M followers. Half the week is gone. You broadcast to many. Did you connect with any of them as humans? Today, make something for your true fans. Not the casual ones. The real ones who have been with you. That is the responsibility of influence. Serve the humans who chose you.",
        afternoon: "Midweek afternoon at scale. The week is slipping by. Before Friday arrives, have one real interaction. Not a broadcast. An interaction with an actual human. Remember what personal means at this level. Scale is not an excuse for distance. The responsibility of influence is maintaining your humanity.",
        evening: "Midweek evening with large reach. Tomorrow is another chance to connect like a human instead of broadcasting like a brand. Scale is not an excuse for distance. What would you make if you had to look each follower in the eye? Make that tomorrow. The responsibility of influence is remembering they are people.",
        night: "Midweek night with 100K to 1M followers. The week is half over. You have influence most people never get. Are you using it for something beyond growth? For actual good? For real connection with real humans? The remaining days this week are your chance to use that influence for something that matters."
      }
    }
  },

  // AUDIENCE TIER: Massive (1M-10M)
  tier_massive: {
    condition: (p) => p.audienceTier && p.audienceTier.massive && p.average >= 5,
    label: "🌊 TRUE SCALE",
    messages: {
      monday: {
        morning: "Monday morning with 1M to 10M followers. A different game entirely. You are a small media company now whether you want to be or not. The week ahead is not about growth. It is about meaning. Does your work still matter to you personally? Today, make something that proves it does. Not what performs. What matters to you as an artist.",
        afternoon: "Monday afternoon at true scale. The week is young. Millions are watching. That is both power and pressure. You are a media company now whether you planned for that or not. What would you make if the numbers did not exist? That thing is probably more important than what performs. Make that instead.",
        evening: "Monday evening with massive reach. Day one is ending. Did you make anything that mattered to YOU today? Not what performed well. What mattered to you as an artist. That distinction is what keeps you human at this scale. The question of meaning vs performance never goes away. But you can answer it daily.",
        night: "Monday night with 1M to 10M followers. The week has four more days. You could phone it in and still get views. The machine would keep running. But you would know. Make something this week that reminds you why you started. Something that matters beyond performance. That is how you stay an artist at scale."
      },
      friday: {
        morning: "Friday morning at true scale. The week is ending. Millions engaged with your work. Did any of it actually matter beyond performance? The weekend is for that question. Not what performed well. What mattered to you as an artist. You are a media company now. But you do not have to let that erase the artist you started as.",
        afternoon: "Friday afternoon with 1M to 10M followers. The week performed well by every metric. But performance is not fulfillment. Before the weekend, ask yourself honestly: am I still making what I want to make? Or just what works? You are a media company now. The question of meaning vs performance defines whether you stay an artist.",
        evening: "Friday evening with massive reach. The week is over and the numbers were big. Was the meaning? You are a media company now whether you planned for it or not. The weekend is for reconnecting with why you create beyond the metrics. The artist in you still exists. Does your work reflect that?",
        night: "Friday night at true scale. The week is done. You influenced millions of people. Did you say anything that mattered to you as an artist? The weekend is for remembering that scale is a megaphone, not a message. You still have to supply the message. The question is whether it is yours or the algorithm's."
      },
      saturday: {
        morning: "Saturday morning with 1M to 10M followers. The weekend is for perspective on what you have built. You have reached scale that most creators never touch. What will you do with it? Not for more growth. For legacy. For meaning. You are a media company now. The question is what that company stands for.",
        afternoon: "Saturday afternoon at true scale. You could coast forever on these numbers. The machine would keep running without you pushing. But coasting is not creating. What would you make if metrics were invisible? Consider making that this weekend. You are a media company now. But you can still be an artist.",
        evening: "Saturday evening with massive reach. Tomorrow is Sunday, time for the big questions. What do you want to be known for? What would you regret not making? That is what matters now. Not the metrics. The meaning. You are a media company now. But the question of meaning vs performance is still yours to answer.",
        night: "Saturday night with 1M to 10M followers. The week ahead brings opportunity. Not for more reach. You have reach. For more meaning. For more art. For more of what you actually want to make. What would meaningful look like this week? You are a media company now. What does that company stand for?"
      },
      sunday: {
        morning: "Sunday morning at true scale. The week starts tomorrow. Millions will watch whatever you do. The question is what will you do with that attention. Not what will perform. What will matter. You are a media company now. But you still get to decide what that company creates. Make something that matters to you.",
        afternoon: "Sunday afternoon with 1M to 10M followers. Monday is coming and the machine will want content. What do YOU want? Before the week takes over with its demands, remember what you want as an artist. Not what performs. What you want. You are a media company now. But the artist still gets a vote.",
        evening: "Sunday evening with massive reach. The week ahead is an opportunity to prove you are still you. Not a brand. Not an algorithm's servant. You. The artist who started this. Make something this week that proves you are still in there. You are a media company now. But you do not have to lose yourself.",
        night: "Sunday night at true scale. Tomorrow you create again. This time, create like your younger self is watching. Not the millions. Your younger self who started this whole thing. Make them proud. You are a media company now. But the question of meaning vs performance is still yours to answer every single day."
      },
      midweek: {
        morning: "Midweek morning with 1M to 10M followers. Half the week is gone. Did you make anything that mattered to you as an artist? You still have time. Create something today that has nothing to do with performance. You are a media company now. But you can still be an artist. Today, be an artist.",
        afternoon: "Midweek afternoon at true scale. The week is slipping by. Before Friday arrives, make one thing that would exist even if no one saw it. That is how you stay an artist at this scale. You are a media company now whether you planned for it or not. But the artist still gets to create.",
        evening: "Midweek evening with massive reach. Tomorrow is another chance to choose meaning over performance. What would you make if the algorithm rewarded meaning instead of engagement? Make that anyway. You are a media company now. But the question of meaning vs performance is still yours to answer.",
        night: "Midweek night with 1M to 10M followers. The week is half over. Millions watched your work. Did any of it matter to you as an artist? The remaining days are for meaning. Not performance. Meaning. You are a media company now. Use that power to make something that matters beyond the metrics."
      }
    }
  },

  // AUDIENCE TIER: Superstar (10M+)
  tier_superstar: {
    condition: (p) => p.audienceTier && p.audienceTier.superstar && p.average >= 5,
    label: "⭐ GLOBAL REACH",
    messages: {
      monday: {
        morning: "Monday morning with 10M plus followers. Global reach. Cultural influence. You are not just a creator anymore. You shape how millions think and feel. That is not a metric. That is a responsibility. The week ahead is not about growth. It is about legacy. What will you make today that your younger self would be proud of? Not impressed by numbers. Proud of the work itself.",
        afternoon: "Monday afternoon at superstar scale. The week is young and you have the power to move markets and shift cultural conversations. That is a responsibility, not just an achievement. What are you doing with that power? Not what does it earn you. What does it mean for the millions who see it? Use your influence for something that matters this afternoon.",
        evening: "Monday evening with global reach. Day one is ending. Did you use your influence for something that mattered to you beyond performance? Tomorrow is another chance. The platform is enormous but the message matters more than the metrics. What legacy are you building with this influence? That question should guide everything you create.",
        night: "Monday night with 10M plus followers. The week has four more days. You have already won the reach game that most creators never win. The question now is what you will do with that reach. Not for more growth. For meaning. For legacy. What would you want people to remember you for? Make that."
      },
      friday: {
        morning: "Friday morning at superstar scale. The week is ending and you moved millions of people. Did you move them toward something that mattered? Global reach means cultural responsibility. The weekend is for that question. Not what performed. What mattered. Those are different things at your level.",
        afternoon: "Friday afternoon with global reach. The week performed at enormous scale. But scale is not the point anymore. Impact is. Legacy is. Before the weekend, ask: did any of it matter beyond the metrics? Really matter? The responsibility of influence is using it for something that lasts.",
        evening: "Friday evening with 10M plus followers. The week is over. The numbers were enormous. Was the meaning equally large? Global reach means cultural responsibility. The weekend is for remembering that reach without meaning is just noise at volume. What legacy are you building with this platform?",
        night: "Friday night at superstar scale. The week is done. You influenced more people than live in most cities. Did you say anything worth saying? The responsibility of global reach is using it for something that matters. The weekend is for reflecting on whether this week met that standard."
      },
      saturday: {
        morning: "Saturday morning with 10M plus followers. The weekend is for the big questions that come with global influence. You have cultural reach. What will you do with it? Not what will grow it further. What will matter in ten years? Legacy is the only metric that matters at your level now.",
        afternoon: "Saturday afternoon at superstar scale. You can do anything. Go anywhere. Make anything. The question of legacy is what do you WANT to make? Not what performs well. What matters to you as an artist. What would you make if metrics were invisible? That question is your compass now. Use it.",
        evening: "Saturday evening with global reach. Tomorrow is Sunday, time for legacy thinking. What will people remember about your work? What will outlast the algorithm? That is the only work that matters at your level. The responsibility of influence is building something that lasts beyond the metrics.",
        night: "Saturday night with 10M plus followers. The week ahead is not about more reach. You already have reach. It is about what you do with the reach you have. Legacy. Meaning. Impact. Those are your metrics now. What would you regret not making? Make that this week. Start planning it now."
      },
      sunday: {
        morning: "Sunday morning at superstar scale. The week starts tomorrow. Tens of millions will see whatever you do. The only question is what you will do with that attention. Make it count. Make it matter. Use your influence for something that serves the legacy you want to build, not just the metrics.",
        afternoon: "Sunday afternoon with global reach. Monday is coming and everyone will want something from you. Before the noise begins, remember what you want. Not what they want. Your vision. Your legacy. The responsibility of influence is staying true to what matters beyond the metrics. Protect that.",
        evening: "Sunday evening with 10M plus followers. The week ahead is an opportunity that almost no one ever gets. Do not waste it on performance alone. Use it for meaning. Use it for legacy. What do you want to say that you have not said yet? Global reach means cultural responsibility. Use it.",
        night: "Sunday night at superstar scale. Tomorrow you create again. This time, create like legacy is the only metric that matters. Because at your level, it truly is. The numbers are handled. The meaning is entirely up to you. What exactly would your younger self be proud of? Make exactly that."
      },
      midweek: {
        morning: "Midweek morning with 10M plus followers. Half the week is gone. Did you make anything that mattered beyond performance? You still have time. Global reach means cultural responsibility. Make something meaningful today. Something that serves the legacy you want to build. Start now.",
        afternoon: "Midweek afternoon at superstar scale. The week is slipping by fast. Before Friday, make one thing that would make your younger self proud. Not impressed by the numbers. Proud of the work itself. The responsibility of influence is using it for something that lasts beyond the metrics.",
        evening: "Midweek evening with global reach. Tomorrow is another chance to use your influence for legacy instead of just performance. What would you make if the algorithm measured meaning instead of engagement? Make that anyway. You can afford to. The responsibility of your reach is using it for meaning.",
        night: "Midweek night with 10M plus followers. The week is half over. You reached more people than most countries have citizens. Did you say anything that mattered beyond the metrics? The remaining days are your chance to use your influence for something that lasts. Legacy, not just performance."
      }
    }
  },

  // SHAPE: Soaring
  soaring: {
    condition: (p) => p.shape === 'soaring',
    label: "★ RESONANCE ACHIEVED",
    messages: {
      monday: {
        morning: "Monday morning with resonance achieved. Impact, identity, boldness, intimacy, all aligned. Your work matters to people who matter. This state is rare, precious, and fragile. The week ahead is not about growth. It is about protection. Chasing more reach when you have connection is how you lose connection. Guard this like the precious thing it is.",
        afternoon: "Monday afternoon with full resonance. The week is young and you are genuinely connected to your audience. Do not chase more reach. Deepen what you have. This resonance is rare and fragile. The audience that loves you is worth more than millions who scroll past. Today, create something specifically for your true fans.",
        evening: "Monday evening with everything working. Day one is ending. Did you protect what you have? Or chase what you do not have? This resonance is precious and fragile. Tomorrow, guard the magic instead of chasing more. The job is protection now, not growth. What would deepen the connection you already have?",
        night: "Monday night with resonance achieved. The week has four more days. You solved for connection. Now solve for protection. This state is rare and fragile. What threatens it? Guard against that. What maintains it? Double down on that. The danger is chasing more when protecting what you have is the job."
      },
      friday: {
        morning: "Friday morning with full resonance. The week is ending and the magic held. That is the job now. Maintenance. Not growth. Protection. This connection is rare, precious, and fragile. The depth you have is what matters. Chasing more reach could break what works. Guard what you have carefully this weekend.",
        afternoon: "Friday afternoon with resonance achieved. The week went well and you stayed connected. This state is rare and fragile. Before the weekend, document what worked. The conditions, the choices, the boundaries. This is your formula. Protect it by understanding it. Chasing more is how you lose this.",
        evening: "Friday evening with everything aligned. The week is over and the connection held. That is victory. This resonance is precious and fragile. The weekend is for appreciating what you built. Not chasing more. Appreciating what is. The danger is wanting growth when protection is the job.",
        night: "Friday night with resonance achieved. The week is done. You matter to people who matter. That is rare and precious. Rest in that this weekend. The weekend is for enjoying what sustainable success feels like, not for planning how to get more of what you already have. Guard this carefully."
      },
      saturday: {
        morning: "Saturday morning with full resonance. The weekend stretches ahead and your audience is connected. This state is rare, precious, and fragile. What would deepen that connection today? Not grow it. Deepen it. That is the work now. Chasing more reach when you have connection is how you lose connection.",
        afternoon: "Saturday afternoon with resonance achieved. You have what most creators chase forever but never find. This is rare, precious, and fragile. Enjoy it. Do not optimize it. Do not scale it. Just enjoy what genuine connection feels like. The danger is chasing more when protecting is the job.",
        evening: "Saturday evening with everything working. Tomorrow is Sunday. The week ahead will try to pull you toward growth. Remember: you already won. The connection is the prize. This resonance is fragile. Protect it by not chasing more. What would deepen the connection you already have? Plan that.",
        night: "Saturday night with resonance achieved. The week ahead does not need more reach. It needs you to stay true to what built this. This state is rare, precious, and fragile. Before you sleep, remember exactly why they follow you. Be exactly that. Chasing more is how you lose what you have."
      },
      sunday: {
        morning: "Sunday morning with full resonance. The week starts tomorrow. You will be tempted to optimize and grow. Resist that temptation strongly. What you have is rare, precious, and fragile. The authentic connection. The real impact. Guard it instead of chasing more. Protection is the job now.",
        afternoon: "Sunday afternoon with resonance achieved. Monday is coming. The algorithm will want one thing. Your audience wants another. This connection is fragile. Choose your audience. Always choose your audience over the algorithm. Today, plan how to protect the connection, not how to grow it.",
        evening: "Sunday evening with everything aligned. The week ahead is an opportunity to maintain the magic. Not grow it. Maintain it carefully. This resonance is rare, precious, and fragile. What would protect this connection? Do exactly that this week. Chasing more is how you break what works.",
        night: "Sunday night with resonance achieved. Tomorrow you create again. This time, create from the place that built this. The truth. The specificity. The boldness. That is exactly your formula. This state is fragile. Use the formula that works instead of chasing new approaches. Protect it."
      },
      midweek: {
        morning: "Midweek morning with full resonance. Half the week is gone. Did you protect the connection? Or chase growth? This resonance is rare, precious, and fragile. The rest of the week needs to be about depth. Not reach. What exactly would deepen the connection you already have? Do that today.",
        afternoon: "Midweek afternoon with resonance achieved. The week is slipping by. This state is fragile and precious. Before Friday, make something specifically for your true fans. Not the casual followers. The ones who would notice if you stopped. Protect the connection by serving the people who matter.",
        evening: "Midweek evening with everything working. Tomorrow is another chance to protect what you have. The magic is holding strong. This resonance is rare and fragile. Keep it that way carefully. What would you make if only your best followers would see it? Make exactly that. Protect what works.",
        night: "Midweek night with resonance achieved. The week is half over and the connection held. That is what matters most. This state is precious and fragile. The remaining days are for protecting what you built. Not chasing what you do not have. The danger is wanting more. Guard it carefully."
      }
    }
  },

  // SHAPE: Crashed
  crashed: {
    condition: (p) => p.shape === 'crashed',
    label: "⊘ SIGNAL LOST",
    messages: {
      monday: {
        morning: "Monday morning with signal lost. Impact low, targeting vague, playing safe, connection thin. This is not failure. This is disconnection. The week ahead needs to be different. Forcing connection by working harder makes it worse. Before you create anything, stop and ask: who specifically is this for and what do they need to feel? Answer that first.",
        afternoon: "Monday afternoon with no resonance. The week is young and you have time to change course. Signal lost means disconnection, not failure. Forcing harder will not help. What would you make if you stopped worrying about how it would perform? That might be what connects. Ask yourself: what truth am I avoiding?",
        evening: "Monday evening with crashed resonance. Day one is ending and nothing landed. That is data, not failure. Signal lost means disconnection. Forcing connection makes it worse. What truth are you avoiding? What audience are you not serving? Tomorrow, try the opposite of safe. Ask: what would I make if no one was watching?",
        night: "Monday night with signal lost. The week has four more days. Enough time to find resonance. This is disconnection, not failure. Forcing harder will not work. Before you sleep, write down one thing you believe that you have never said publicly. Start there tomorrow. That truth might be what reconnects."
      },
      friday: {
        morning: "Friday morning with no resonance. The week is ending and nothing connected. That is okay. Signal lost means disconnection, not failure. The weekend is for reflection, not for forcing harder. What is the gap between what you are making and what you believe? Close that gap. Ask: what truth am I avoiding?",
        afternoon: "Friday afternoon with signal lost. The week did not produce connection. Do not despair. This is disconnection, not failure. Forcing harder would make it worse. Use the weekend to study what moves YOU. That is the standard your work needs to meet. Ask: when did my work last truly connect?",
        evening: "Friday evening with crashed resonance. The week is over. Let it go. Signal lost means disconnection, not failure. But before you rest, ask yourself: what truth did I avoid? What vulnerability did I protect? That is where next week's resonance lives. Forcing harder would not have helped at all.",
        night: "Friday night with no resonance. The week is done. Rest. This is disconnection, not failure. Forcing more content would make it worse. But this weekend, consume intentionally. What makes you stop scrolling? What do you save? That is what your work is missing. Follow that clue closely."
      },
      saturday: {
        morning: "Saturday morning with signal lost. The weekend is for clarity, not panic. Signal lost means disconnection, not failure. Forcing harder makes it worse. Why is nothing connecting? Is it impact? Targeting? Boldness? Intimacy? Diagnose the problem before you try to solve it. Ask which dimension is most off.",
        afternoon: "Saturday afternoon with crashed resonance. Something is broken. This is disconnection, not failure. The weekend is for figuring out what is wrong. Not fixing it yet. Understanding it first. What feels off about your current work? Ask: what would I make if I stopped trying to perform?",
        evening: "Saturday evening with no resonance. Tomorrow is Sunday, time for honest assessment. Signal lost is disconnection, not failure. When did your work last truly connect? What was different then? That difference is the clue. Ask yourself: what truth was I telling then that I am avoiding now?",
        night: "Saturday night with signal lost. The week ahead needs to be different. This is disconnection, not failure. Forcing harder makes it worse. Before you sleep, answer honestly: are you making what you want to make? Or what you think you should make? The difference matters greatly here."
      },
      sunday: {
        morning: "Sunday morning with crashed resonance. The week starts tomorrow and it can be different. Signal lost means disconnection, not failure. Forcing harder will not help. What would you make if you only had one piece of content this week? Make it the truest thing you have. Ask: what am I afraid to say?",
        afternoon: "Sunday afternoon with signal lost. Monday is coming fast. Do not repeat last week. This is disconnection, not failure. What will be different this time? Not more content. Different content. Truer content. Plan that now. Ask yourself: what truth have I been circling around but not saying?",
        evening: "Sunday evening with no resonance. The week ahead is an opportunity. This is disconnection, not failure. Forcing harder makes it worse. Not to work harder. To work truer. What have you been circling around but not saying? Say that this week. Ask: what would I make if I stopped being safe?",
        night: "Sunday night with crashed resonance. Tomorrow you create again. Signal lost means disconnection, not failure. This time, create from vulnerability. Not from strategy. The safe approach is not working at all. Try the scary one instead. Ask: what truth would reconnect me to my audience?"
      },
      midweek: {
        morning: "Midweek morning with signal lost. Half the week is gone and nothing has connected. This is disconnection, not failure. Forcing harder makes it worse. You still have time. Today, make one thing that is more vulnerable than usual. See what happens. Ask: what am I protecting myself from saying?",
        afternoon: "Midweek afternoon with crashed resonance. The week is slipping by fast. Signal lost means disconnection, not failure. Before Friday, try something different. Not louder. Not more frequent. More true. What would that actually look like for you? Ask: what truth have I been avoiding?",
        evening: "Midweek evening with no resonance. Tomorrow is another chance. Signal lost is disconnection, not failure. The safe approach failed. Forcing harder would make it worse. What would the risky approach look like? Consider trying that tomorrow. Ask: what would I say if I stopped being careful?",
        night: "Midweek night with signal lost. The week is half over and nothing connected. This is disconnection, not failure. The remaining days are a chance to change that. What would you say if you knew your audience needed to hear exactly one thing? Say that. Ask yourself: what truth reconnects?"
      }
    }
  },

  // SHAPE: Plateau
  plateau: {
    condition: (p) => p.shape === 'plateau',
    label: "📡 SIGNAL STEADY",
    messages: {
      monday: {
        morning: "Monday morning with steady signal. You are connecting but not deeply. Steady is comfortable but limiting. The week ahead is an opportunity to push beyond the plateau. What would make your work unmissable? Not louder. Unmissable. The kind of thing people have to tell someone about. Today, identify one truth you have been holding back.",
        afternoon: "Monday afternoon with plateau resonance. The week is young. Some things land, some do not. Steady is comfortable but it is also limiting. Study the difference between what lands and what does not. What makes your best work hit? Do more of that. Today, take one risk you have been avoiding.",
        evening: "Monday evening with signal steady. Day one is ending. Did anything land hard today? Steady is comfortable but limiting. If nothing broke through, tomorrow is for taking bigger swings. Safe does not break through. What would you say if you stopped holding back? Say that tomorrow. Take the risk.",
        night: "Monday night with plateau resonance. The week has four more days. You could stay steady and comfortable. You could also push beyond the plateau. The choice is entirely yours. What would you say if you stopped holding back? Consider saying it this week. Steady is limiting. Push past it."
      },
      friday: {
        morning: "Friday morning with steady signal. The week is ending and you maintained your usual level. But maintaining is not growing. Steady is comfortable but limiting. The weekend is for asking: what would actually break through? Not just perform well. Break through. What risk would you take if you were braver?",
        afternoon: "Friday afternoon with plateau resonance. The week was steady. Is that enough for you? Steady is comfortable but limiting. Before the weekend, consider what would make next week exceptional. Not more content. Better content. Riskier content. What would you say if you stopped being safe?",
        evening: "Friday evening with signal steady. The week is over and you connected at your usual level. But usual is not exceptional. Steady is comfortable but limiting. The weekend is for planning what exceptional would look like. What truth have you been circling but not saying? Say it next week.",
        night: "Friday night with plateau resonance. The week is done. Steady is sustainable. Steady is also forgettable and limiting. The weekend is for deciding whether you want more than steady. And what more would require from you. What exactly would you have to risk to actually break through?"
      },
      saturday: {
        morning: "Saturday morning with steady signal. The weekend is for perspective on where you are. You are connecting but not breaking through. Steady is comfortable but limiting. What would breakthrough actually require? More risk? More truth? More specificity? Which one are you avoiding right now?",
        afternoon: "Saturday afternoon with plateau resonance. Steady gets steady results. If you want different results, something has to change. Steady is comfortable but limiting. What would you change if you were starting over? What truth would you tell? Consider telling it next week. Take the risk.",
        evening: "Saturday evening with signal steady. Tomorrow is Sunday, time to decide about next week. What would make Monday different from last Monday? Not a small tweak. A real difference. Steady is comfortable but limiting. What truth have you been holding back? Consider releasing it next week.",
        night: "Saturday night with plateau resonance. The week ahead could be another steady week. Or it could be a breakthrough week. Steady is comfortable but limiting. The difference is what you decide to risk. What would you say if you were not worried about how it would perform? Say exactly that."
      },
      sunday: {
        morning: "Sunday morning with steady signal. The week starts tomorrow. Will it be another plateau week? Or will you push beyond steady? Steady is comfortable but limiting. What would pushing look like? More vulnerable. More specific. More bold. Choose one and commit to it today. Take the risk.",
        afternoon: "Sunday afternoon with plateau resonance. Monday is coming. You know how to be steady. Do you know how to break through? Steady is comfortable but limiting. Breakthrough requires saying something you have not said before. What is that thing for you? Plan to say it this week. Commit.",
        evening: "Sunday evening with signal steady. The week ahead is familiar territory. But familiar is not exceptional. Steady is comfortable but limiting. Before the week begins, identify one risk you could take. Then commit to taking it. What truth would you tell if you were braver? Tell it.",
        night: "Sunday night with plateau resonance. Tomorrow you create again. This time, create something that genuinely scares you slightly. The plateau is comfortable but limiting. The edge is where growth lives. What would you make if steady was not an option at all? Make exactly that tomorrow."
      },
      midweek: {
        morning: "Midweek morning with steady signal. Half the week is gone with same steady results. Steady is comfortable but limiting. You still have time to change that. What would exceptional look like for the rest of this week? What risk would you take if you were braver? Take that risk today.",
        afternoon: "Midweek afternoon with plateau resonance. The week is slipping by steadily. Steady is comfortable but limiting. Before Friday arrives, take one real risk. Say one thing you have been holding back. See what happens. What would you say if you stopped being careful? Say that tomorrow.",
        evening: "Midweek evening with signal steady. Tomorrow is another real chance to break through. Steady got you here. Steady will not get you further. It is comfortable but limiting. What exactly would you say if steady was not an option at all? Consider saying that tomorrow. Take the risk.",
        night: "Midweek night with plateau resonance. The week is half over. You are connecting at your usual level. Is that enough for you? Steady is comfortable but limiting. The remaining days are a real chance to find out what pushing past the plateau looks like. What risk would get you there?"
      }
    }
  },

  // SHAPE: Lopsided (fallback)
  lopsided: {
    condition: (p) => p.shape.startsWith('lopsided'),
    label: "📡 UNEVEN SIGNAL",
    messages: {
      monday: {
        morning: "Monday morning with uneven resonance. Strong in some dimensions, weak in others. Your strengths are masking your weaknesses but the imbalance is unstable. The week ahead needs to address the gap. What is your weakest link? Impact? Targeting? Boldness? Intimacy? The leverage is in fixing the weak dimension, not optimizing the strong one.",
        afternoon: "Monday afternoon with lopsided signal. Some things are working. Others are not. The imbalance is unstable because your strengths are masking your weaknesses. Before the week takes over, identify what is failing. That is where your attention belongs. Not your strength. Your weakness. The leverage is in the weak dimension.",
        evening: "Monday evening with uneven resonance. Day one is ending. Did you work on your weak spot? Or lean on your strength again? Your strengths are masking your weaknesses but that is unstable. Tomorrow, focus on what is not working. That is where the leverage is. Ask: which dimension is dragging me down?",
        night: "Monday night with lopsided signal. The week has four more days. Your imbalance will persist unless you address it directly. Strengths masking weaknesses is unstable. What is your weakest dimension? Write it down. Start fixing it tomorrow. The leverage is in the weak spot, not in optimizing the strong one."
      },
      friday: {
        morning: "Friday morning with uneven resonance. The week is ending and the imbalance is clear. Your strengths masked your weaknesses but that is unstable. What worked was always going to work. What failed needs attention. The weekend is for planning how to fix the weak dimension. That is where the leverage is.",
        afternoon: "Friday afternoon with lopsided signal. The week showed you the gap clearly. Your strength carried you. Your weakness dragged you back. Strengths masking weaknesses is unstable. Before the weekend, decide how to address the weak spot. The leverage is there, not in your strong areas.",
        evening: "Friday evening with uneven resonance. The week is over and done. The pattern is clear. One area is strong. Another is failing you. Your strengths are masking weaknesses but that is fundamentally unstable. The weekend is for deciding what changes next week. The leverage is in fixing the weak dimension.",
        night: "Friday night with lopsided signal. The week is done now. Your strength kept you afloat. Your weakness kept you stuck. That imbalance is unstable. The weekend is for making a concrete plan. Which weak spot will you address? The leverage is in fixing the weakness, not optimizing the strength."
      },
      saturday: {
        morning: "Saturday morning with uneven resonance. The weekend is for diagnosis. Why is one area strong and another weak? Your strengths are masking your weaknesses but that is unstable. Understanding the gap is the first step to closing it. The leverage is in fixing the weak dimension. Which one needs attention most?",
        afternoon: "Saturday afternoon with lopsided signal. Your strength is obvious to everyone. Your weakness is hidden but damaging. Strengths masking weaknesses is unstable. What would it take to bring up your lowest score? Think carefully about that today. The leverage is in the weak dimension. Start there.",
        evening: "Saturday evening with uneven resonance. Tomorrow is Sunday, the time to plan for balance. Your strengths are masking weaknesses but that is fundamentally unstable. What would you do differently next week to address your weak spot? Plan it now in detail. The leverage is in fixing the weakness.",
        night: "Saturday night with lopsided signal. The week ahead needs to be far more balanced. Strengths masking weaknesses is fundamentally unstable. Before you sleep, identify your weakest dimension. That is your focus for next week. Not your strength. Your weakness. The leverage is in the weak spot."
      },
      sunday: {
        morning: "Sunday morning with uneven resonance. The week starts tomorrow. Your imbalance will persist unless you intervene. Strengths masking weaknesses is unstable. What is your weakest dimension? Plan to address it first thing Monday. The leverage is in fixing the weakness, not optimizing your strength.",
        afternoon: "Sunday afternoon with lopsided signal. Monday is coming fast. You know what is working. You know what is not. Your strengths mask weaknesses but that is fundamentally unstable. This week, stop optimizing your strength. Start fixing your weakness. The leverage is in the weak dimension.",
        evening: "Sunday evening with uneven resonance. The week ahead is a real opportunity for balance. Strengths masking weaknesses is fundamentally unstable. Not more of what works. Less of what does not. What would that look like specifically for you? The leverage is in addressing your weakest dimension.",
        night: "Sunday night with lopsided signal. Tomorrow you create again. Strengths masking weaknesses is fundamentally unstable. This time, focus deliberately on your weak dimension. The strength will take care of itself. The weakness needs your full attention. That is where all the leverage is."
      },
      midweek: {
        morning: "Midweek morning with uneven resonance. Half the week is gone. Did you address your weak spot? Or ignore it? Strengths masking weaknesses is unstable. The rest of the week needs to be about balance. Not more of what works. Less of what does not. The leverage is in the weak dimension.",
        afternoon: "Midweek afternoon with lopsided signal. The week is slipping by fast. Your strength is doing its job. Your weakness is doing its damage. The imbalance is unstable. Before Friday, give attention to what is failing. The leverage is in fixing the weakness, not optimizing the strength.",
        evening: "Midweek evening with uneven resonance. Tomorrow is another chance to address the imbalance directly. Strengths masking weaknesses is unstable. What is dragging down your resonance? Impact? Targeting? Boldness? Intimacy? Focus there tomorrow. The leverage is in the weak dimension.",
        night: "Midweek night with lopsided signal. The week is half over and the imbalance persists. Strengths masking weaknesses is fundamentally unstable. The remaining days are your chance to address the weak spot directly. Not your strength. Your weakness. That is where all the leverage is."
      }
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
      monday: {
        morning: "Monday morning with no depth. The week ahead requires flow you are not getting. Shallow work does not build skill. Only deep work does. The enemy this morning is the inbox waiting to scatter you. Before you open anything, block ninety minutes. Phone in another room. Notifications off. One task. This is how skills compound. Without this protection, Monday will take everything and give nothing back.",
        afternoon: "Monday afternoon still skimming the surface. Half the day gone and no real depth yet. Your craft is starving while you feed shallow tasks. Every hour without flow is an hour your skills did not grow. Right now, close every tab except one. Put your phone in a drawer. Work on that one thing for forty-five minutes minimum. The shallow work will still be there when you surface.",
        evening: "Monday evening without flow. Day one is ending and you never entered the zone. The shallow work ate your day before real work could begin. Tomorrow morning is your defense. Block time before checking anything. Put your phone in another room until you have created something. The inbox is the enemy of depth. Treat it that way. Start tomorrow protected.",
        night: "Monday night with no depth. No flow today means no skill growth today. That is not neutral. That is falling behind while others advance. Before you sleep, decide what will receive your first focused hour tomorrow. Write it down. Put your phone somewhere you cannot reach it. Make that hour sacred. Your career depends on accumulated deep work, not accumulated shallow tasks."
      },
      friday: {
        morning: "Friday morning with no depth. The week is ending and deep work never happened. Five days of shallow tasks while your skills stagnated. Do not try to cram depth now. But before the weekend, block ninety minutes. One focused session. Phone away. Tabs closed. Prove to yourself you can still enter the zone. That proof matters for next week.",
        afternoon: "Friday afternoon still skimming. The week scattered into shallows and your craft paid the price. Let it go for now. But this weekend, diagnose what keeps interrupting your depth. Meetings? Messages? Your own phone? Name the specific thieves of your attention. Then plan specific defenses. Next week needs protection you did not provide this week.",
        evening: "Friday evening without flow. The week is over and deep work did not happen. That is data about your current structure. What prevented flow? Interruptions you allowed? Time you did not protect? Fear of the difficulty of depth? Diagnose the real cause this weekend. Without diagnosis, next week repeats this one. Something specific needs to change.",
        night: "Friday night with no depth. The week took everything and gave nothing deep back. Your skills are where they were Monday. Rest now because exhaustion makes this worse. But this weekend, plan one protected block for Monday morning. Phone in another room. Calendar blocked. The week does not have to repeat if you build different defenses."
      },
      saturday: {
        morning: "Saturday morning with no flow. Even the weekend starts shallow, scattered by the same forces that scattered the week. What would deep actually feel like today? Not more tasks. Depth. One thing, fully engaged, without your phone nearby. Can you find sixty minutes for that? The weekend is your chance to remember what flow feels like. Try to find it.",
        afternoon: "Saturday afternoon still on the surface. The weekend is for recovery but also for remembering what depth feels like. When did you last lose track of time in focused work? What would you work on if you had no interruptions for two hours? Your phone in another room? Consider creating those conditions now. See what happens when depth becomes possible.",
        evening: "Saturday evening without flow. Tomorrow is Sunday. What would make it a deep day instead of a scattered one? Plan one protected session now. No phone accessible. No notifications possible. Just you and work that matters. The enemy of Sunday depth is the same as every other day: the pull of shallow distractions. Remove them before they win.",
        night: "Saturday night with no depth. The week ahead will repeat this pattern unless you intervene tonight. Before you sleep, plan specifically when you will protect deep work on Monday. Not hope for it. Plan for it. What time? Where will your phone be? What will you work on? Without specific answers, Monday wins before it starts."
      },
      sunday: {
        morning: "Sunday morning with no flow. The week starts tomorrow and it will scatter you unless you protect yourself proactively. Block ninety minutes Monday morning right now. Put it on the calendar with a name like DO NOT MOVE. Guard it like your career depends on it because your skill development does. Phone will be in another room. That is the plan.",
        afternoon: "Sunday afternoon still skimming the surface. Monday is coming and it will bring the same shallow forces that captured last week. What will be different? Not intentions. Structure. When exactly will you do deep work? Where will your phone be? What will be turned off? Plan it specifically now. Vague intentions produce shallow weeks.",
        evening: "Sunday evening without flow. The week ahead needs depth you have not been getting and will not get without preparation. Tonight, prepare for tomorrow's deep session. Clear your desk of distractions. Close browser tabs. Decide where your phone will live during focus time. Set up the conditions for depth before the morning scatters your intentions.",
        night: "Sunday night with no depth. Tomorrow is Monday and you can start differently than last week. First ninety minutes: deep work. No email. No messages. No notifications. Phone in another room. The shallow tasks can wait until you have created something. Depth cannot wait because skills only compound through focused practice."
      },
      midweek: {
        morning: "Midweek morning with no flow. Half the week is gone and you have not entered the zone once. Your skills did not grow while shallow work consumed your days. You still have time to change this week. Today, protect sixty minutes. One thing. Full attention. Phone away. No switching. Start now before the day scatters you again.",
        afternoon: "Midweek afternoon still skimming. The week is slipping into shallows and Friday approaches without depth. Before Friday, you need at least one deep session or this week teaches nothing new. What would it take to protect ninety minutes tomorrow morning? Do whatever that takes. Block the calendar. Hide the phone. Create before you consume.",
        evening: "Midweek evening without flow. Tomorrow is another chance but chances are running out this week. What keeps preventing depth? Meetings you did not decline? Messages you could not ignore? Your own phone pulling at you? Name the specific enemy. Then plan specific defense. Depth requires protection that you have not provided yet.",
        night: "Midweek night with no depth. The week is half over and no flow yet means no skill growth yet. The remaining days do not have to repeat the first half. Tomorrow morning, before anything else, create. Not consume. Create. Phone in another room. One focused hour. This is how you rescue the week. Decide now what you will make."
      }
    }
  },

  // BOTTLENECK: Evolution (fuel)
  evolution_bottleneck: {
    condition: (p) => p.fuelBottleneck.name === 'evolution' && p.raw.evolution <= 4,
    label: "📉 SKILL STAGNATION",
    messages: {
      monday: {
        morning: "Monday morning with stagnant skills. The week ahead will use what you already know but your skills are not growing. Stagnant skills compound negatively. Every week without growth is a week your competition advances while you stand still. Consuming content is not learning. Deliberate practice is. Today, spend thirty minutes on a skill at the edge of your ability. Not watching tutorials. Practicing.",
        afternoon: "Monday afternoon with no evolution. The week is young and you have time to stretch if you start now. What skill would change everything if you mastered it in ninety days? Name it specifically. Not vaguely better. Specifically different. Find one exercise that would stretch that skill. Do it today. Watching videos about the skill does not count. Only practice counts.",
        evening: "Monday evening with skills frozen. Day one is ending and you did not learn anything new. You did the work you could already do. That is maintenance not growth. Tomorrow needs to be different. Identify one skill gap that is actively holding you back. Commit to twenty minutes of deliberate practice on it tomorrow. Not reading about it. Practicing it.",
        night: "Monday night with skill stagnation. The week has four more days and each day you could grow or stay exactly the same. Skills that do not grow eventually become obsolete. Before you sleep, pick one skill to develop this week. Write down specifically how you will practice it. Not consume content about it. Practice it. Then do that thing tomorrow."
      },
      friday: {
        morning: "Friday morning with stagnant skills. The week is ending and you did not stretch beyond what you could already do. That is okay for one week. Not okay for many weeks. Before the weekend, answer one question: what skill would unlock the next level for you? That question is homework. The weekend is for finding resources to develop that skill.",
        afternoon: "Friday afternoon with no evolution. The week repeated what you already knew. Your skills are where they were Monday. That is how careers stagnate. The weekend is for asking: what do I need to learn? Not want. Need. What specific gap is holding you back from the next level? Name it. Then find deliberate practice for it.",
        evening: "Friday evening with skills frozen. The week is over and you survived on existing skills. But survival is not growth. Survival while others grow is relative decline. This weekend, find one specific resource for the skill you need most. Not a course to watch someday. An exercise to practice next week. Consuming is not learning.",
        night: "Friday night with skill stagnation. The week is done and your skills are exactly where they were Monday. Is that acceptable? For how many more weeks? The weekend is for deciding what growth looks like and committing to pursue it. What skill will you deliberately practice next week? Decide before you sleep."
      },
      saturday: {
        morning: "Saturday morning with stagnant skills. The weekend is for growth you cannot fit in the busy week. What skill deserves an hour of deliberate practice today? Not passive consumption. Active practice at the edge of your ability. What would that look like? Watching a tutorial is not practice. Doing the exercises is practice. Choose practice.",
        afternoon: "Saturday afternoon with no evolution. The weekend is open and you have a choice. You could scroll through content about skills. Or you could actually practice one. What would ninety minutes of deliberate practice feel like? Uncomfortable and growth-producing. Consider trying it. The discomfort is the signal that learning is happening.",
        evening: "Saturday evening with skills frozen. Tomorrow is Sunday. What skill would you work on if you treated yourself like a serious student? Because you are always a student whether you act like one or not. The question is whether you are a student who practices or one who only consumes. Plan to practice tomorrow.",
        night: "Saturday night with skill stagnation. The week ahead will demand your skills. Will they be better than last week or the same? That depends entirely on what you do this weekend and next week. Plan something specific. What skill? What practice? When? Vague intentions do not produce skill growth."
      },
      sunday: {
        morning: "Sunday morning with stagnant skills. The week starts tomorrow and your skills will either grow this week or stay the same. What commitment could you make and keep? Twenty minutes daily on one skill? That is enough if the practice is deliberate. Not watching. Practicing. At the edge of your ability. Try it this week.",
        afternoon: "Sunday afternoon with no evolution. Monday is coming and your skills are the same as last Monday. What skill development will you prioritize this week? Not someday. This specific week. Be specific: when will you practice? What will you practice? Deliberate practice means pushing beyond comfort. Plan for that discomfort.",
        evening: "Sunday evening with skills frozen. The week ahead is a chance to grow that you might waste. What would you need to do every day to improve one skill measurably? Fifteen minutes of deliberate practice? Thirty? Make a specific plan for Monday. Not a vague intention. A specific practice session at a specific time.",
        night: "Sunday night with skill stagnation. Tomorrow you work again and you could be better at your craft by Friday or the same. That depends entirely on whether you practice with intention. Consuming content feels like growth but is not. Only deliberate practice produces skill. Decide now what you will practice. Commit to it."
      },
      midweek: {
        morning: "Midweek morning with stagnant skills. Half the week is gone and you have not stretched beyond your existing abilities. Your skills are the same as Monday. You still have time to change that. What skill could you practice for thirty minutes today? Something at the edge of your ability. Not comfortable repetition. Uncomfortable growth.",
        afternoon: "Midweek afternoon with no evolution. The week is slipping by without growth while you consume content that feels productive but produces nothing. Before Friday, practice one thing deliberately. Not going through the motions of work you can already do. Pushing the edge of what you can do. That is the only way skills grow.",
        evening: "Midweek evening with skills frozen. Tomorrow is another chance to grow or stagnate. What would deliberate practice look like for you tomorrow? Not just doing the work you already know how to do. Doing the work that stretches you. The work that makes you uncomfortable. Plan that specific session for tomorrow morning.",
        night: "Midweek night with skill stagnation. The week is half over and your skills are where they were Monday. The remaining days are a chance to change that trajectory. What will you deliberately practice tomorrow? At what time? For how long? Specific plans produce growth. Vague intentions produce more stagnation."
      }
    }
  },

  // BOTTLENECK: Risk (fuel)
  risk_bottleneck: {
    condition: (p) => p.fuelBottleneck.name === 'risk' && p.raw.risk <= 4,
    label: "🔄 REPETITION LOOP",
    messages: {
      monday: {
        morning: "Monday morning stuck in repetition. The week ahead will look like last week unless you break the pattern. Safe work is invisible work. No risk means no memorability. What are you afraid of? Judgment? Failure? Rejection? Name the fear. Then today, start one project where failure is possible. Not reckless. Just uncertain. Uncertainty is where all memorable work lives.",
        afternoon: "Monday afternoon still repeating. The week is young and you have time to try something new if you start now. What are you avoiding making because it might not work? That thing you just thought of. That is probably exactly what you should make. The fear underneath your safety is trying to protect you from judgment. But judgment is the price of impact. Start it today.",
        evening: "Monday evening in the loop. Day one is ending and you played it safe again. Safe work vanishes without trace. Tomorrow, break something on purpose. Try a style you have never tried. Say something you have never said. Risk looking foolish. The fear you feel about looking foolish is the same fear keeping your work forgettable. Face it tomorrow.",
        night: "Monday night stuck in repetition. The week has four more days and each is a chance to experiment or repeat. Before you sleep, write down one creative risk you will take this week. Something that might fail. Something that makes you nervous. The nervousness is the signal that it matters. Safe work does not make you nervous. Or memorable."
      },
      friday: {
        morning: "Friday morning still in the loop. The week is ending and you took no risks. Understandable because risk is scary. But also why nothing changed and why the work was forgettable. Safe work is invisible work. The weekend is for asking: what experiment could I run next week that might fail but would be memorable if it worked?",
        afternoon: "Friday afternoon repeating. The week played out safely. Again. Another week of work that will vanish without trace. Before the weekend, consider honestly: what would you try if you knew no one would judge you? That thing you just thought of deserves a shot. The fear of judgment is keeping your work invisible.",
        evening: "Friday evening in the loop. The week is over. Safe and forgettable. That is the trade you made. Safety for invisibility. This weekend, think seriously about what you would sacrifice for something memorable instead. What risk would you take if failure did not mean judgment? Consider taking that risk next week anyway.",
        night: "Friday night stuck in repetition. The week is done and nothing surprised you because you tried nothing surprising. Safe work produces safe results which means no results anyone remembers. The weekend is for deciding: same forgettable week next week or something different? Different requires risk. Are you willing?"
      },
      saturday: {
        morning: "Saturday morning in the loop. Even your weekend is predictable. What would shake things up? Not drastically. Just enough to remember you can still surprise yourself and others. The fear underneath your safety is fear of judgment. But judgment is the price of being noticed. What would you risk if judgment did not scare you?",
        afternoon: "Saturday afternoon still repeating. The weekend is for risks the busy week will not allow. What would you experiment with if the experiment could not fail? What would you try if no one would judge you? Consider trying it anyway. The judgment you fear is usually much smaller than the invisibility you are choosing instead.",
        evening: "Saturday evening in the loop. Tomorrow is Sunday. What project have you been talking yourself out of? The one that feels too weird, too risky, too likely to fail? That is probably the one that would make you memorable. The resistance you feel is proportional to its importance. Consider starting it tomorrow.",
        night: "Saturday night stuck in repetition. The week ahead could be different from last week. Before you sleep, write down one bold thing you could do. Not huge. Just bolder than your usual safe work. Something that makes you slightly nervous. See if you can do it this week. The nervousness is the signal to proceed."
      },
      sunday: {
        morning: "Sunday morning in the loop. The week starts tomorrow. Will it be another week of greatest hits that no one remembers? Or will you try something new that might fail but might also matter? The choice happens today. What will you risk? What fear will you face? Name it specifically. Then plan to face it.",
        afternoon: "Sunday afternoon still repeating. Monday is coming and you have a choice. More of the same safe, forgettable work. Or something bold that might not work. What would you create if you knew you could not be judged for it? The fear of judgment is the prison. Consider escaping it this week.",
        evening: "Sunday evening in the loop. The week ahead is an opportunity for risk or repetition. Safe work is forgettable work. No one remembers the creator who never took chances. What would make you memorable? Not famous. Memorable. That requires risk. What specific risk will you take this week? Decide now.",
        night: "Sunday night stuck in repetition. Tomorrow is Monday and you could start differently. What if you did one thing this week that scared you? Just one thing. The resistance you feel right now is proportional to its importance. The fear is not a stop sign. It is a signal pointing toward growth."
      },
      midweek: {
        morning: "Midweek morning in the loop. Half the week is gone and you took no risks. Your work this week is safe and therefore forgettable. You still have time to change that. What is one thing you could try today that might not work? Something that makes you nervous. Try it. See what happens. Fear is the compass.",
        afternoon: "Midweek afternoon still repeating. The week is slipping by safely toward forgettable Friday. Before Friday, take one creative risk. Small is fine. Something that makes your heart beat slightly faster. That heartbeat is your body recognizing that you are about to do something that matters. Follow it.",
        evening: "Midweek evening in the loop. Tomorrow is another chance to risk or repeat. What would you post if you were not afraid of judgment? That thing you just thought of. Consider posting it. The fear is not a warning. It is a signal pointing toward work that matters. Follow the fear tomorrow.",
        night: "Midweek night stuck in repetition. The week is half over with no experiments yet. The remaining days are a chance to change that. What could you create by Friday that would surprise people? Something that might fail. Something that makes you nervous. That nervousness is the price of memorable work. Pay it."
      }
    }
  },

  // BOTTLENECK: Admin (drag)
  admin_bottleneck: {
    condition: (p) => p.worstDrag.name === 'admin' && p.raw.admin >= 25,
    label: "📋 ADMIN OVERLOAD",
    messages: {
      monday: {
        morning: "Monday morning drowning in admin. The week ahead is already claimed by logistics before it even begins. This is how creative careers die. Not dramatically. Slowly. Meeting by meeting. Email by email. Before you open anything, answer this: what is your single creative priority today? Write it down. Now block ninety minutes for it before the calendar fills with other people's priorities. That block is sacred.",
        afternoon: "Monday afternoon buried in operations. More managing than making. That is not a creative life. That is a slow death by logistics. What would it cost to hand off five hours of admin this week? Twenty dollars? Fifty? Compare that to the cost of your stalled creative output. Your creative hourly value is higher than admin hourly cost. Do the math. Then delegate.",
        evening: "Monday evening lost to logistics. Day one is ending and you made nothing. You managed things. You answered emails. You scheduled meetings. But you created nothing. Tomorrow has to be different or this week dies creatively. Before you sleep, block creative time for tomorrow morning. First thing. Before admin can claim it.",
        night: "Monday night after admin overload. The week has four more days and if they all look like today, your creative work dies while admin thrives. Before you sleep, decide specifically: what admin will you delegate, automate, or delete this week? Not reduce. Eliminate. Pick one task that does not deserve your time and stop doing it."
      },
      friday: {
        morning: "Friday morning still drowning in admin. The week is ending and logistics won. Again. Your creative work lost to emails, meetings, scheduling. Before the weekend, make a specific list: what three admin tasks drained you most this week? For each one: can you automate it, delegate it, or simply delete it? Something must change.",
        afternoon: "Friday afternoon buried in operations. The week went to logistics and your creative work gathered dust. That is not sustainable. The weekend is for asking hard questions: is this the creative life you wanted? If not, what specifically changes? What admin task will you eliminate permanently? The cost of continuing is creative death.",
        evening: "Friday evening lost to admin. The week is over and you managed instead of made. That is a slow emergency. Admin that feels necessary is often optional. This weekend, plan one admin task to eliminate permanently. Not reduce. Eliminate. What would happen if you simply stopped doing it? Often nothing bad happens.",
        night: "Friday night after admin overload. The week consumed you with logistics while creative work waited. Rest now because exhaustion makes this worse. But this weekend, seriously consider: what would it cost to buy back five hours of admin time? That math might surprise you. Your creative output is worth more than the delegation cost."
      },
      saturday: {
        morning: "Saturday morning thinking about admin. Even now it follows you into the weekend. What would life look like with half the admin you currently do? Not zero. Half. What specific tasks would you cut to get there? Most admin feels mandatory but is actually chosen. What have you chosen that you could unchoose?",
        afternoon: "Saturday afternoon with admin on your mind. The weekend should be free of it but is it? If admin is creeping into Saturday, that is a boundary problem not a time problem. What boundary could you set for next week? What would you refuse to do? What would you delegate? What would you simply stop?",
        evening: "Saturday evening considering your admin load. Tomorrow is Sunday. Can you keep it completely admin free? Monday will bring the inevitable flood of emails and logistics. Let Sunday be clear. Let Sunday be creative. The week needs at least one day where you make things instead of manage things. Protect Sunday from admin.",
        night: "Saturday night after a week of admin overload. The cycle will repeat next week unless you intervene tonight. Before you sleep, pick one specific admin task to eliminate. Not reduce. Eliminate entirely. What task does not actually need to be done? What task could someone else do? Cut it before Monday."
      },
      sunday: {
        morning: "Sunday morning with admin ahead. The week starts tomorrow and the logistics will start with it. Emails will arrive. Meetings will demand. Scheduling will consume. Today, plan your defense. When specifically will you create before admin takes over? Block that time now. Make it immovable.",
        afternoon: "Sunday afternoon thinking about the week. Admin will try to claim Monday morning like it always does. Do not let it win this time. Your first two hours belong to creative work. Non negotiable. No email. No messages. No meetings. Block it now. Defend it tomorrow. That is the only way creative work survives.",
        evening: "Sunday evening preparing for admin. The week ahead will demand logistics you cannot avoid. But you can decide what you will not do. What admin task does not deserve your time this week? What could you skip without real consequence? Cut it before the week starts. Create space for creation.",
        night: "Sunday night before another admin week. Tomorrow the emails come. The scheduling. The logistics. The slow death by management. Before you sleep, commit to one rule: creative work before admin. First thing. Every day. That is the only way creative careers survive. Block the time. Defend it. Create before you manage."
      },
      midweek: {
        morning: "Midweek morning drowning in admin. Half the week is gone to logistics already. Your creative work is dying while admin thrives. You still have time to reclaim some of the week. What admin could you skip today to make something instead? What meeting does not actually need you? What email does not need a response?",
        afternoon: "Midweek afternoon buried in operations. The week is slipping into admin and Friday approaches without creative output. Before Friday, create something. Anything. Prove your week was not entirely consumed by logistics. Block two hours tomorrow. No admin allowed. Create first. Manage later.",
        evening: "Midweek evening lost to admin. Tomorrow is another chance to create or manage. What if you did creative work first tomorrow morning? Before email. Before messages. Before the admin flood claims everything. Try it tomorrow. First ninety minutes: creation only. The admin will wait. Your creativity will not wait.",
        night: "Midweek night after admin overload. The week is half over with more managing than making so far. The remaining days are a choice. Same pattern where admin wins or different where creation wins. You decide tonight. What time will you protect tomorrow morning? What admin task will you refuse to do?"
      }
    }
  },

  // BOTTLENECK: Distraction (drag)
  distraction_bottleneck: {
    condition: (p) => p.worstDrag.name === 'distraction' && p.raw.distraction >= 20,
    label: "📱 ATTENTION LEAK",
    messages: {
      monday: {
        morning: "Monday morning with attention bleeding out through your phone. A billion-dollar algorithm spent years learning exactly how to steal your focus. It is winning. Check your screen time right now. That number is not minutes. It is depth capacity you will never get back. Today, fight back. Put your phone in another room during creative work. Not on silent. In another room. The resistance you feel is proof of how badly you need to do it.",
        afternoon: "Monday afternoon already lost to distraction. Half the day gone to scrolling while a billion-dollar algorithm extracted your attention for profit. Check your screen time right now. Be brutally honest with yourself about the cost. That is depth you cannot recover. Then set one app limit. Just one. The app that steals the most. See if you can beat it for the rest of the day.",
        evening: "Monday evening scattered by distraction. Day one is ending and your attention was everywhere except where it mattered. The cost is not minutes. It is lost depth capacity. Your brain learns to be shallow. Tomorrow, try airplane mode for your first creative hour. The world will survive without you for sixty minutes. Your craft might not survive without that hour.",
        night: "Monday night after distraction won. The week has four more days and each one your phone will try to steal your attention. A billion-dollar algorithm is designed for exactly this. Before you sleep, decide on one specific defense: what app will you limit tomorrow? Set the limit now. The default is losing. You have to choose to win."
      },
      friday: {
        morning: "Friday morning with attention leaking. The week is ending and distraction took too many hours. Hours that belonged to your craft, your growth, your creative legacy. Before the weekend, check your screen time report. Write down the total. Look at it. That is what you traded your creative work for. Was it worth it? The honest answer should motivate change.",
        afternoon: "Friday afternoon scattered. The week gave hours to your phone that belonged to your craft. A billion-dollar algorithm won those hours. The weekend is for asking hard questions: what would you have built with those hours back? What would be different? That question matters because the answer reveals the real cost of distraction.",
        evening: "Friday evening after distraction won again. The week is over and your phone took too many battles. The cost was not just time but depth capacity. Your brain learned to be interrupted. This weekend, delete one app for one week. The resistance you feel right now is proof you should do it. The algorithm owns your attention. Take it back.",
        night: "Friday night with attention depleted. The week is done and your phone won. It is not neutral. It is an adversary with a billion-dollar algorithm designed specifically to steal your focus and sell it to advertisers. The weekend is for planning your defense. What boundaries will you set? What apps will you delete? How will you fight back next week?"
      },
      saturday: {
        morning: "Saturday morning with your phone nearby. Is it already pulling at you? Notice that pull. That is a billion-dollar algorithm extracting your attention for profit. That pull is your depth capacity being stolen. Today, fight back. Try one hour with your phone in another room. Not on silent. In another room. See what your mind does when it is not being harvested.",
        afternoon: "Saturday afternoon with distraction available. A billion-dollar algorithm is waiting for you to pick up your phone. The weekend could go to your phone or to things that actually matter. Which will it be? The choice is happening right now. Every minute you spend scrolling is a minute of depth you will not get back. Choose consciously.",
        evening: "Saturday evening with screens glowing. Tomorrow is Sunday. What would a low-phone Sunday look like? Not zero phone. Low phone. Consider trying it as an experiment. See what you do with the reclaimed attention. See what your mind creates when it is not being constantly interrupted by algorithms designed to addict you.",
        night: "Saturday night with distraction calling. A billion-dollar algorithm wants your attention right now. The week ahead will be a battle for that attention. Before you sleep, decide on one specific boundary. One limit. One app to delete or restrict. Start there. The default is losing. You have to actively choose to protect your depth."
      },
      sunday: {
        morning: "Sunday morning with your phone waiting. A billion-dollar algorithm designed it to be irresistible. The week starts tomorrow. Your attention is the prize everyone wants to steal and sell. Today, practice protecting it. One hour. Phone in another room. See what emerges when your attention belongs to you instead of advertisers.",
        afternoon: "Sunday afternoon with distraction nearby. Monday is coming and it will bring demands on your attention from every direction. A billion-dollar algorithm will compete for every minute. What will you protect? When will your phone be away? Plan your defense now. Without a plan, the algorithm wins by default.",
        evening: "Sunday evening before the week. Tomorrow the battle for your attention begins again. Algorithms, notifications, infinite scroll. All designed to steal your depth. Decide now: when will you be unreachable? When will your phone be in another room? The plan matters because without it you lose automatically.",
        night: "Sunday night with screens dimming. Tomorrow you need focused attention that a billion-dollar algorithm will try to steal. Before you sleep, put your phone somewhere you cannot reach from bed. Do not start the week with the scroll. That first morning scroll sets the pattern for the day. Break the pattern before it starts."
      },
      midweek: {
        morning: "Midweek morning with attention scattered. Half the week lost to distraction already. A billion-dollar algorithm won too many hours. You still have time to reclaim some. Today, phone in another room for two hours minimum. See what you can create when your attention belongs to you instead of being sold to advertisers.",
        afternoon: "Midweek afternoon still leaking attention. The week is slipping through your phone while an algorithm profits. Before Friday, try one full creative session with no phone access. Not silent where you can still grab it. No access. Locked in a drawer or another room. The cost of distraction is not time. It is depth.",
        evening: "Midweek evening after distraction won again. Tomorrow is another chance. What would change if you left your phone in another room until noon? Your brain would relearn depth. Your attention would belong to you. The answer might surprise you. Try it tomorrow. One morning. See what happens.",
        night: "Midweek night with attention depleted. The week is half over and your phone won too many hours. A billion-dollar algorithm took time that belonged to your craft. The remaining days are a chance to win some back. What specific boundary will you try tomorrow? Decide now or the default is more losing."
      }
    }
  },

  // BOTTLENECK: Stagnation (drag)
  stagnation_bottleneck: {
    condition: (p) => p.worstDrag.name === 'stagnation' && p.raw.stagnation >= 7,
    label: "🧊 FROZEN",
    messages: {
      monday: {
        morning: "Monday morning frozen. The big project feels impossible. Here is the lie you are telling yourself: you need to feel ready before you can start. You will never feel ready. Action creates clarity. Clarity does not create action. Forget the big project. What is the smallest possible action you could take in five minutes? Not think about it. A physical action. Write one sentence. Sketch one shape. Do that now.",
        afternoon: "Monday afternoon still stuck. The week is young but paralysis is old and getting older. The longer you wait, the harder it gets. That is how stagnation compounds. Right now, name the project you are avoiding. Say it out loud. Then take one tiny ridiculous step toward it. Send one email. Write one sentence. Movement creates momentum. Thinking creates more thinking.",
        evening: "Monday evening frozen. Day one is ending and nothing moved. The paralysis is compounding because every day you avoid, the avoidance gets stronger. Tomorrow, lower the bar until you can clear it. What is the smallest possible version of progress? Laughably small. Something you could do in two minutes. Do only that. Then the next tiny thing.",
        night: "Monday night stuck. The week has four more days and something is blocked. You have been avoiding looking at it. The longer you avoid, the bigger it grows in your mind. Before you sleep, write down exactly what you are avoiding. Name it. Naming it shrinks it. Tomorrow morning, face it with one tiny action."
      },
      friday: {
        morning: "Friday morning still frozen. The week is ending and the stuck project is exactly where it was Monday. Paralysis compounds. Every day you wait makes the next day harder. Do not try to finish it today. But do one tiny thing. Send one email. Write one paragraph. Move it one inch. Prove you can move it at all.",
        afternoon: "Friday afternoon stuck. The week did not unstick the thing. The longer it stays stuck, the harder unsticking becomes. That is how paralysis works. The weekend is for asking: what is really blocking this? Not the surface answer. The real fear underneath. Name it honestly. You cannot solve what you will not name.",
        evening: "Friday evening frozen. The week is over and paralysis won this round. But paralysis only wins if you let it compound. The weekend is for understanding why you are stuck. What fear is underneath the stuckness? Judgment? Failure? Imperfection? Name it. Then plan one laughably small action for Monday that faces that fear.",
        night: "Friday night still stuck. The week is done and the project is where it was Monday. Every day of avoidance made the avoidance stronger. Rest now. But this weekend, face one real question: do you actually want to finish this? If yes, plan one tiny Monday action. If no, give yourself permission to quit. Both are valid."
      },
      saturday: {
        morning: "Saturday morning frozen. Even the weekend starts stuck. Paralysis followed you here because it compounds. The longer you wait, the bigger the project feels. What is the tiniest possible movement you could make on the stuck thing today? Not finish it. Move it one inch. One tiny push. The action does not need to be big. It needs to happen.",
        afternoon: "Saturday afternoon still stuck. The paralysis followed you into the weekend because that is what paralysis does. It grows. What would unfreeze you? Not motivation. You do not need to feel motivated. You need to act. Action creates motivation. Motivation does not create action. What is the smallest possible action? Do it now.",
        evening: "Saturday evening frozen. Tomorrow is Sunday. The stuck thing is getting bigger in your mind every day you avoid it. What if you gave the stuck project fifteen minutes tomorrow? Not to finish it. Just to touch it. Reconnect with it. Prove it will not bite you. Fifteen minutes. That is all. Would that help?",
        night: "Saturday night still stuck. The week ahead will include this project or exclude it. Every day of exclusion makes it harder to include. Before you sleep, decide consciously: will you face it Monday with one tiny action or keep avoiding it? Avoiding is a choice too. Make the choice deliberately instead of by default."
      },
      sunday: {
        morning: "Sunday morning frozen. The week starts tomorrow and the stuck thing is still stuck. Every day of stuckness made it worse. Today, ask yourself: what would finishing actually look like? Not perfect. Done. Can you picture done? If you cannot picture it, that is the problem. Define done. Then plan one tiny step toward it.",
        afternoon: "Sunday afternoon still stuck. Monday is coming and the paralysis will come with it unless you break it now. What is the single smallest step you could take tomorrow on the frozen project? Make it laughably small. Two minutes of work. Then do it first thing Monday before resistance wakes up fully.",
        evening: "Sunday evening frozen. The week ahead could include progress or more avoidance. Avoidance compounds. Progress compounds too. Tonight, prepare for one tiny action tomorrow. Set it up. Clear the path. Make it so easy to start that not starting would take more effort. Remove every barrier between you and two minutes of action.",
        night: "Sunday night still stuck. Tomorrow is Monday. Write down the project you are avoiding. Writing it makes it smaller. Then write the smallest possible physical action that would move it forward. Not think about it. Move it. Tomorrow, do only that tiny action. Then the next tiny action. That is how paralysis dies."
      },
      midweek: {
        morning: "Midweek morning still frozen. Half the week is gone and the stuck thing is still stuck and getting stickier. Paralysis compounds daily. Today, take one action on it. Any action. Do not think about what to do. Thinking got you stuck. Acting gets you out. What can you do in two minutes? Do that right now.",
        afternoon: "Midweek afternoon stuck. The week is slipping by and every day of avoidance makes Friday harder. Before Friday, touch the frozen project once. Not finish it. Touch it. Open the file. Write one sentence. Prove to yourself it will not bite you. The action can be tiny. It just has to happen.",
        evening: "Midweek evening frozen. Tomorrow is another chance. Every day you avoid makes the avoidance stronger. What if you spent just ten minutes on the stuck thing tomorrow morning? Not to make progress. Just to break the seal. To prove you can touch it. Would ten minutes kill you? Probably not. Try it.",
        night: "Midweek night still stuck. The week is half over and the frozen thing is still frozen but it does not have to stay frozen. Paralysis is not permanent. It is a pattern you can break with tiny action. Tomorrow, before anything else, take one tiny action on it. Just one. Two minutes. That is how patterns break."
      }
    }
  },

  // STRENGTH: Flow (fuel)
  flow_strength: {
    condition: (p) => p.fuelStrength.name === 'flow' && p.raw.flow >= 40 && p.average < 7,
    label: "🔥 DEEP WORK MODE",
    messages: {
      monday: {
        morning: "Monday morning in deep work mode. You are getting serious flow hours. Most people never experience this level of focus. It is rare. It is power. It is also responsibility. The week ahead should protect this capacity at all costs. What threatens your flow? Meetings? Notifications? Obligations? Name the threats specifically. Then defend against them. Your focus is a superpower. Aim it at worthy targets.",
        afternoon: "Monday afternoon with strong flow. You have what most people only dream of: the ability to go deep for hours. That is rare. Most people can barely focus for minutes. This is your advantage. Use it. The week is young. What will you build with all those focused hours? Aim high. You have the capacity for significant work. Do not waste it on small tasks.",
        evening: "Monday evening with deep work intact. Day one is ending and your flow held throughout. That is the template for the week. Most people lost their focus by noon. You did not. Before tomorrow, notice specifically what protected your focus today. The environment. The boundaries. The decisions. Repeat all of them tomorrow.",
        night: "Monday night in flow mode. The week has four more days and your focus is your superpower. Most people do not have this. Before you sleep, plan specifically how to protect it. What meetings could you cancel? What notifications could you disable? What distractions could you eliminate? Your capacity is rare. Guard it fiercely."
      },
      friday: {
        morning: "Friday morning with deep flow intact. The week is ending and your focus held throughout. That is exceptional. Most people scattered by Wednesday. You did not. Before the weekend, document specifically what worked. The conditions. The boundaries. The decisions. This is your formula. You will want to repeat it next week.",
        afternoon: "Friday afternoon in deep work mode. The week gave you serious flow hours that most people never experience. Did you aim them at worthy targets? The weekend is for appreciating what you built with all that rare focused time. What did your focus produce this week? Was it worthy of your capacity?",
        evening: "Friday evening with strong flow intact. The week is over and your focus was your advantage. Most people scattered while you went deep. Rest now. You earned it. But remember specifically what protected your focus this week. You will want to repeat this next week. Document the formula.",
        night: "Friday night in flow mode. The week is done and you had what most people lack: consistent deep work across multiple days. That is rare and genuinely valuable. The weekend is for real recovery so you can do it again next week. Rest deeply tonight. Then next week, aim your superpower at the next worthy target."
      },
      saturday: {
        morning: "Saturday morning with strong flow capacity. Even on the weekend you could go deep if you chose to. Most people cannot access this. Should you use it or rest it? Both are valid choices. What would serve you better today? Sometimes protecting the capacity means resting it. Sometimes it means using it. Choose consciously.",
        afternoon: "Saturday afternoon in deep work mode. You have the ability to focus deeply when others cannot. That is a rare gift. The weekend is your choice. Deep work or deep rest. Both have value. The question is what would serve your creative life better right now. Do not default. Choose deliberately.",
        evening: "Saturday evening with flow strength intact. Tomorrow is Sunday. You could go deep or go easy. The week ahead will need your focus. Consider resting now to protect Monday. Your flow capacity is rare. Sometimes protecting it means not using it. Let yourself recover so Monday starts strong.",
        night: "Saturday night with deep work capacity. The week ahead will demand your focus and you have it. That is an advantage most people do not have. Protect your sleep tonight. Deep sleep protects deep focus. Tomorrow, decide whether to work or rest before Monday. Both are valid ways to protect your superpower."
      },
      sunday: {
        morning: "Sunday morning with strong flow. The week starts tomorrow and your focus is your weapon. Most people do not have this capacity. Today, rest it or use it but do not waste it on shallow distractions like scrolling or passive consumption. You have a rare gift. Honor it with worthy targets or genuine rest.",
        afternoon: "Sunday afternoon in deep work mode. Monday is coming and you will have what others lack: the ability to focus deeply for hours. That is rare and powerful. What will you aim it at this week? Decide now. Your focus deserves a worthy target. Not busywork. Not small tasks. Something significant.",
        evening: "Sunday evening with flow strength. The week ahead is an opportunity and your focus will be your advantage. Most people will scatter while you go deep. Before the week begins, set your targets specifically. What will all those deep hours build? The answer should excite you. Aim high.",
        night: "Sunday night with deep work capacity. Tomorrow you create again and your focus is ready. That is an advantage most people do not have. Before you sleep, clarify your priority. What deserves your first deep hours? Decide now. Do not let morning scatter you. Enter the week with a clear target."
      },
      midweek: {
        morning: "Midweek morning in deep work mode. Half the week is gone. Did you aim your flow at worthy targets? You have more deep hours than most people get in a month. That is a rare and valuable gift. The remaining days should aim this exceptional capacity at what matters most. What deserves your focus today?",
        afternoon: "Midweek afternoon with strong flow. The week is slipping by and your focus is holding strong. That is rare. But focus without aim is just concentration wasted on whatever happens to be in front of you. What is your specific aim for the rest of this week? Something worthy of your rare capacity?",
        evening: "Midweek evening with deep work intact. Tomorrow is another chance and your flow is your advantage. Most people lost their focus days ago. You did not. Before you sleep, decide specifically what deserves your best focused hours tomorrow. Aim your rare superpower at something worthy of it.",
        night: "Midweek night in flow mode. The week is half over and your focus held throughout. That is exceptional. Most people cannot maintain this. The remaining days are a chance to finish what you started. What will you complete by Friday? Your capacity makes significant completion possible."
      }
    }
  },

  // SHAPE: Soaring (high fuel, low drag)
  soaring: {
    condition: (p) => p.shape === 'soaring',
    label: "⚡ CRAFT INTENSITY HIGH",
    messages: {
      monday: {
        morning: "Monday morning with craft intensity soaring. Deep flow, rapid evolution, bold risks, minimal drag. All systems firing together. This is the zone most people never find. The week ahead is not about working harder. It is about staying here. Protecting this state is more important than optimizing it. What threatens it? Meetings? Obligations? Distractions? Name the threats. Then defend ruthlessly.",
        afternoon: "Monday afternoon with everything aligned. Your craft is on fire. All dimensions working together. This is rare and precious. Do not waste this state on small tasks or shallow busywork. Aim at your biggest, most important creative challenge. The one that scares you. You have the intensity for it right now. Tomorrow you might not. Use this.",
        evening: "Monday evening with craft intensity high. Day one is ending and you stayed in the zone throughout. That is the template. Most people never experience this. Before tomorrow, notice specifically what maintained this state. The decisions. The boundaries. The focus. Repeat all of them. Protecting the zone is the job. Not improving it. Protecting it.",
        night: "Monday night soaring. The week has four more days and you are in rare territory. Most creators never reach this intensity. Before you sleep, protect this state with specific actions. Cancel unnecessary meetings. Block deep work time. Eliminate distractions. Guard the intensity like it is precious. It is."
      },
      friday: {
        morning: "Friday morning with craft intensity still soaring. The week is ending and you are still in the zone. That is exceptional. Most people cannot maintain this for a day. You maintained it for a week. Before the weekend, appreciate specifically what you built. Document the conditions. You earned this. Learn from it.",
        afternoon: "Friday afternoon with everything working. Your craft intensity held all week. All systems firing together for five days. That is rare and valuable. The weekend is for real recovery not fake rest while checking email. You can enter this zone again next week if you genuinely rest now. Real rest. Not just time off.",
        evening: "Friday evening with intensity high. The week is over and you stayed in the zone throughout. That is rare. Most people scattered days ago. Let the weekend be genuinely different. Rest deeply. No creative work. No optimization. Return Monday ready to soar again. The intensity will be there if you recover fully.",
        night: "Friday night soaring. The week is done and your craft intensity was exceptional throughout. The weekend is for celebrating what you created and resting so you can create more. Do not squander the weekend on shallow activities. Real recovery. That is what protects the ability to soar again next week."
      },
      saturday: {
        morning: "Saturday morning with high intensity. Even on the weekend you have fire. All systems still aligned. Should you use it or rest it? Both are valid choices. The danger is optimizing when protecting is the job. Listen to what you actually need. Sometimes the answer is rest. Sometimes it is creation. Choose consciously.",
        afternoon: "Saturday afternoon with craft intensity strong. You could create or recover. The week ahead will need this intensity again. Consider protecting it with real rest today rather than depleting it with weekend work. The goal is Monday soaring again. What serves that goal better right now? Probably rest.",
        evening: "Saturday evening still soaring. Tomorrow is Sunday. Your intensity is a gift most people never receive. Use the weekend to protect it rather than deplete it. What would real rest look like tonight? Not screens. Not optimization. Actual rest that rebuilds the capacity for Monday. Consider doing that.",
        night: "Saturday night with high craft intensity. The week ahead will demand this capacity again. Protect it with real sleep tonight. Not shortened sleep. Real sleep. The intensity will be there Monday if you rest now. The danger is treating this state as permanent. It requires protection and recovery."
      },
      sunday: {
        morning: "Sunday morning with craft intensity soaring. The week starts tomorrow and you have what most people never achieve. All systems aligned and firing together. Protect it. Do not take it for granted. This state requires maintenance. What will you aim this rare intensity at tomorrow? The target should be worthy.",
        afternoon: "Sunday afternoon with everything aligned. Monday is coming and your craft intensity is ready. That is an advantage most people do not have. The question is: what deserves this intensity? Set your target before the week scatters your focus. Something significant. Something that justifies this rare capacity.",
        evening: "Sunday evening with intensity high. The week ahead is an opportunity and your craft is on fire. All dimensions working together. Before the week begins, decide specifically: what is your biggest priority? Give it your best hours first. Do not let the week scatter this intensity across small tasks. Focus it.",
        night: "Sunday night soaring. Tomorrow you create again with rare intensity. All systems aligned. Protect your sleep tonight. Tomorrow, aim your focus at what matters most. Nothing less deserves this state. Small tasks do not deserve this intensity. Significant creative challenges do. Choose your target wisely."
      },
      midweek: {
        morning: "Midweek morning with craft intensity soaring. Half the week is gone and you are still in the zone. All systems still firing. That is exceptional. Most people cannot maintain this for hours. You maintained it for days. What will you create with the remaining days? Aim high. Your capacity justifies significant ambition.",
        afternoon: "Midweek afternoon with everything working. Your craft intensity held throughout the week. The week is slipping by. What will you finish by Friday? You have the capacity for something significant. Not incremental progress. Significant completion. What would that look like? Aim for that.",
        evening: "Midweek evening with intensity high. Tomorrow is another chance and you are still in the zone. Most people would have fallen out by now. Before you sleep, set tomorrow's target specifically. Something worthy of your exceptional capacity. Something that justifies this rare state. Aim high.",
        night: "Midweek night soaring. The week is half over and your intensity held throughout. That is exceptional and rare. The remaining days are a chance to finish strong. What would finishing strong look like? Not just maintaining. Completing something significant. Plan that now. Your capacity justifies significant ambition."
      }
    }
  },

  // SHAPE: Lopsided (imbalanced - high fuel, high drag)
  lopsided: {
    condition: (p) => p.shape.startsWith('lopsided'),
    label: "⚖ FIGHTING FRICTION",
    messages: {
      monday: {
        morning: "Monday morning fighting friction. Some craft dimensions are strong but others are dragging hard. This imbalance is exhausting because your strength constantly compensates for your weakness. The leverage is not in more fuel. The leverage is in less drag. What is your worst drag? Admin? Distraction? Stagnation? Name it specifically. Then plan to cut it today. Not manage it. Cut it.",
        afternoon: "Monday afternoon with craft friction. You have fuel but also drag and they are fighting each other. This is exhausting. You push with one hand while the other pulls you back. What is your biggest time thief right now? Name it specifically. Then make a real plan to eliminate it. Not reduce. Eliminate. That is where the leverage actually is.",
        evening: "Monday evening fighting friction. Day one is ending. Your strengths worked hard. Your weaknesses dragged hard. The battle was a tie which means you are exhausted. Tomorrow, focus on reducing drag not increasing fuel. Cutting one source of drag will do more than adding more effort. What drag will you cut tomorrow morning?",
        night: "Monday night with imbalanced craft. The week has four more days of this exhausting battle between strength and weakness. The friction will continue unless you address the drag directly. Before you sleep, name your biggest drag specifically. What steals the most time? Plan to cut it tomorrow. Not manage. Cut."
      },
      friday: {
        morning: "Friday morning still fighting friction. The week is ending and the drag won again. Your strength fought hard but the weakness dragged equally hard. That is exhausting. Before the weekend, identify your worst time thief with complete honesty. What steals the most? Make a real plan to eliminate it next week. Not reduce. Eliminate.",
        afternoon: "Friday afternoon with craft friction. The week showed you the pattern clearly. Fuel versus drag. Strength versus weakness. Exhausting compensation. The weekend is for deciding which drag you will eliminate completely. Not reduce. Not manage. Eliminate. What would you cut if you gave yourself permission to cut it?",
        evening: "Friday evening fighting friction. The week is over and the imbalance persists. The exhausting battle continues. This weekend, think seriously about what you would cut to reduce drag. Not what you would add. What you would stop doing entirely. The leverage is in subtraction not addition.",
        night: "Friday night with imbalanced craft. The week is done and fuel and drag fought to exhausting stalemate again. The weekend is your time for planning how to tip the balance. Not by adding more fuel which you have already tried. By cutting drag. What would you cut? How exactly? Plan that specifically tonight."
      },
      saturday: {
        morning: "Saturday morning with craft friction. Even the weekend feels the imbalance. The drag follows you because it is structural not situational. What is your biggest drag? What would eliminating it entirely look like? Not managing it better. Eliminating it. Think about that today. The answer is probably possible.",
        afternoon: "Saturday afternoon fighting friction. Your craft has strength and weakness. The weakness is winning because drag always wins against equal fuel. What would happen if you just stopped doing your biggest drag entirely? What would break? Probably less than you think. Consider the experiment.",
        evening: "Saturday evening with imbalanced craft. Tomorrow is Sunday and then Monday arrives fast. What drag could you eliminate entirely before the week starts? Not reduce. Eliminate. What would that free up? The math usually surprises people. Cutting drag provides far more leverage than adding fuel. What gets cut?",
        night: "Saturday night fighting friction. The week ahead will repeat the exhausting pattern unless something structural changes. Before you sleep, decide specifically: which drag will you address this week? How exactly will you address it? Not manage it. Cut it entirely. What gets cut and how?"
      },
      sunday: {
        morning: "Sunday morning with craft friction. The week starts tomorrow and your drag will try to win again. It always does. What is your specific plan to stop it this time? Not manage it better. Stop it. What would stopping your biggest drag look like? What would you need to decide to cut?",
        afternoon: "Sunday afternoon fighting friction. Monday is coming and the exhausting battle resumes. You know your strengths. You know your drags. This week, focus on eliminating one drag entirely rather than adding more fuel. Elimination beats compensation. What specific drag will you cut this week?",
        evening: "Sunday evening with imbalanced craft. The week ahead needs less drag not more effort. More effort just compensates for drag. Cutting drag eliminates the need to compensate. Before the week begins, identify one thing to eliminate entirely from your workflow. Cut it before Monday arrives.",
        night: "Sunday night fighting friction. Tomorrow you work again and the friction will return unless you change something structural. What drag will you address first thing tomorrow morning? Not manage. Address directly. What would you stop doing entirely? Decide now so you can execute when tomorrow morning arrives."
      },
      midweek: {
        morning: "Midweek morning fighting friction. Half the week is gone and the drag is winning the battle. Your strength compensated but at exhausting cost. You still have time. What is your biggest time thief today? Can you eliminate it entirely for the rest of the week? Even temporary elimination provides data.",
        afternoon: "Midweek afternoon with craft friction. The week is slipping by in exhausting friction. Your fuel is strong but your drag is stronger. The math never works. Before Friday, cut one source of drag entirely. Not manage it better. Cut it. What would you cut right now if you gave yourself permission?",
        evening: "Midweek evening with imbalanced craft. Tomorrow is another chance. What if you focused only on reducing drag tomorrow? Not creating more fuel. Just removing friction. That might feel less productive but it is actually more leveraged. Try cutting something entirely tomorrow. See what happens.",
        night: "Midweek night fighting friction. The week is half over and the imbalance persists. The exhausting compensation continues. The remaining days are a choice. Same friction pattern or less drag? You decide by what you cut. What would you stop doing entirely to reduce the friction this week?"
      }
    }
  },

  // SHAPE: Crashed (low fuel, high drag)
  crashed: {
    condition: (p) => p.shape === 'crashed',
    label: "💨 CREATIVE DROUGHT",
    messages: {
      monday: {
        morning: "Monday morning in creative drought. No flow, no growth, no risk taking, maximum drag. This is not laziness. This is systemic failure. All the creative systems are empty at once. Forcing it will make it worse. The week ahead cannot repeat last week but pushing harder is not the answer. Give yourself permission to rest. Then ask: what is one tiny creative act you could complete today? Not big. Laughably small. That is enough.",
        afternoon: "Monday afternoon in drought. The week is young but the well is completely dry. This is not a discipline problem. This is a systems problem. Everything is empty at once. Do not force it. Forcing depletes further. What would fill your creative tank? Not drain it more. Fill it. Consider doing that restorative thing instead of pushing through. Rest is productive right now.",
        evening: "Monday evening with creativity crashed. Day one is ending and nothing flowed. That is okay. This is systemic failure not personal failure. Tomorrow can be different but only if you stop forcing. Before you sleep, lower every expectation to laughably small. What is the minimum viable creative act? Something you could do in five minutes. That is tomorrow's only goal.",
        night: "Monday night in creative drought. The week has four more days but do not try to fix everything at once. You cannot force your way out of systemic failure. Fix one tiny thing. What is the smallest improvement you could make tomorrow? One thing. That is enough. Trying to do more will make the drought worse. Permission to do less is the medicine."
      },
      friday: {
        morning: "Friday morning still in drought. The week is ending and creativity did not flow despite effort. That happens. This is not failure. This is information. Before the weekend, ask honestly: what drained me this week? What would have filled me instead? The answers are data for next week. Do not judge yourself. Learn instead.",
        afternoon: "Friday afternoon with creativity crashed. The week was dry and pushing did not help. The weekend is for recovery not catching up. Real recovery. Not productive rest where you do work while calling it rest. What would actually restore your creative energy? Do that. Give yourself full permission to rest without guilt.",
        evening: "Friday evening in drought. The week is over and nothing flowed despite your effort. Let it go. The weekend is for figuring out what went wrong without judging yourself for it. This is systemic failure not character failure. What drained you? What was missing? Understanding the system helps you fix the system.",
        night: "Friday night with creativity empty. The week is done and the drought won. Rest now without guilt. This weekend, do things that genuinely fill you up. Not content consumption that feels like rest but drains you more. Things that actually restore creative energy. Find those things. Do only those things."
      },
      saturday: {
        morning: "Saturday morning in creative drought. Even the weekend starts empty. Today is not for forcing creativity. Forcing makes systemic failure worse. Today is for restoring the conditions that allow creativity to flow. What would genuinely restore you? Not what should restore you. What actually restores you. Do that today.",
        afternoon: "Saturday afternoon with creativity crashed. The weekend should feel different from the week. Not more output squeezed from empty tanks. More input. More genuine rest. More of whatever fills you up. Give yourself permission to do nothing productive. That permission is the first step out of the drought.",
        evening: "Saturday evening in drought. Tomorrow is Sunday. What would make it restorative instead of empty? Not productive. Not efficient. Restorative. What fills your creative well when it is empty? Sleep? Nature? Movement? People? Identify what actually works for you. Plan to do that tomorrow.",
        night: "Saturday night with creativity empty. The week ahead does not have to repeat this one. But it might repeat unless you understand what caused the systemic failure. What specifically drained you? Name it. What was missing? Name that too. These answers are the map out of the drought."
      },
      sunday: {
        morning: "Sunday morning in creative drought. The week starts tomorrow and you could enter it empty again or slightly restored. Before the week begins, ask: what conditions would help creativity flow? Not what you should do. What conditions. Environment. Energy. Rest. What would set you up to create rather than force?",
        afternoon: "Sunday afternoon with creativity crashed. Monday is coming and the drought could continue or begin to end. Ending it does not require heroic effort. It requires stopping something that drains and starting something that fills. Less of what? More of what? Answer those questions specifically. Small changes compound.",
        evening: "Sunday evening in drought. The week ahead is a chance to restart not repeat. Restarting means doing something different not trying harder at the same thing. What would you actually do differently? Be specific. Vague intentions do not change systems. Specific small changes do. Name one change.",
        night: "Sunday night with creativity empty. Tomorrow is Monday. Lower the bar until you can clear it easily. What is the smallest creative act you could complete tomorrow in five minutes? Make that your only goal. Not a big comeback. A tiny spark. That is how droughts end. One tiny spark of proof that you still can."
      },
      midweek: {
        morning: "Midweek morning in creative drought. Half the week is gone and nothing flowed. This is systemic failure not willpower failure. You still have time but not for forcing. What is the smallest creative act you could complete today? Something laughably small. Do only that. Tiny wins rebuild the system.",
        afternoon: "Midweek afternoon with creativity crashed. The week is slipping by empty and forcing is not working. Before Friday, complete one small creative thing. Not big. Laughably small. Something you could finish in ten minutes. Prove to yourself you still can. That proof is the first step out.",
        evening: "Midweek evening in drought. Tomorrow is another chance to try something new. Forcing has not worked so far this week. What would actually help creativity flow instead? Less distraction? More rest? A different environment? Permission to do less? Try something genuinely different tomorrow. Not harder. Different. The solution is almost never more effort.",
        night: "Midweek night with creativity empty. The week is half over and the drought continues despite all your effort. But forcing is making it worse, not better. What is one thing you could change tomorrow? Not add. Change. Maybe do less. Maybe rest more. The drought ends through genuine restoration not through force."
      }
    }
  },

  // SHAPE: Plateau
  plateau: {
    condition: (p) => p.shape === 'plateau' || p.shape === 'functional_high',
    label: "⚖ STEADY CRAFT",
    messages: {
      monday: {
        morning: "Monday morning with steady craft. Not soaring. Not crashing. Just consistent. There is safety in the plateau. There is also stagnation. The week ahead will look exactly like last week unless you choose to push. You could risk something. Try a technique you have never tried. Say something you have never said. What would exceptional look like for you? Not steady. Exceptional. Consider reaching for it.",
        afternoon: "Monday afternoon on the plateau. Functional but not thriving. Comfortable but not growing. The week is young and you have a choice. Maintain the comfortable consistency or push toward something better. What would elevating your craft require this week? More depth? More risk? More learning at the edge of your ability? Choose one and commit.",
        evening: "Monday evening with steady craft. Day one is ending. Nothing broke. Nothing leapt. You maintained. Is maintaining enough? The plateau is comfortable but comfort is where creative careers go to stagnate. If steady is not enough, what would you change tomorrow? One push past the familiar. Consider that now.",
        night: "Monday night on the plateau. The week has four more days. Steady is sustainable. Steady is also forgettable. No one remembers the creator who was consistently adequate. Before you sleep, decide: same comfortable thing tomorrow or something different? Pushing past steady is a choice you have to make consciously."
      },
      friday: {
        morning: "Friday morning with steady craft. The week is ending and nothing exceptional happened. But nothing broke either. That is the plateau bargain: safety for stagnation. The weekend is for asking honestly: do you want more? What would more require? The answer is probably discomfort. The answer is probably risk. Are you willing?",
        afternoon: "Friday afternoon on the plateau. The week was consistent. Adequate. Comfortable. Is consistent enough for you? Before the weekend, consider what would push you out of the comfortable zone. Not what is safe. What would be exceptional. The gap between steady and exceptional is the gap between comfort and growth.",
        evening: "Friday evening with steady craft. The week is over. You maintained. But maintaining is not growing. Maintaining is slowly falling behind while others push. The weekend is for deciding whether you want growth and what you would sacrifice for it. Growth costs comfort. Is that trade worth it to you?",
        night: "Friday night on the plateau. The week is done. Steady and forgettable. Another week of adequate consistency. The weekend is for deciding if that is acceptable for your creative life or if next week should be different. Different requires risk. Different requires doing what you have not done. Would you risk that?"
      },
      saturday: {
        morning: "Saturday morning with steady craft. Even the weekend is consistent. Predictable. Comfortable. What would inconsistent look like? Not chaotic. Ambitious. What would you attempt if you pushed past the familiar? What technique have you avoided because it might not work? Consider trying it. The plateau is where growth goes to die slowly.",
        afternoon: "Saturday afternoon on the plateau. The weekend is for perspective. You are good at consistent. You have mastered adequate. But are you capable of exceptional? What would it take to find out? Probably doing something that makes you uncomfortable. Probably risking failure. That is the price of leaving the plateau.",
        evening: "Saturday evening with steady craft. Tomorrow is Sunday. What would make next week different from this one? Not a small tweak that maintains comfort. A real difference that pushes you. The plateau feels safe but safe is where careers stagnate. Consider what exceptional would require. Consider paying that price.",
        night: "Saturday night on the plateau. The week ahead could be another steady week of comfortable consistency. Or it could be a breakthrough week where you push past familiar. The difference is entirely what you decide to risk. Staying comfortable is easy. Growing requires choosing discomfort. Which will you choose?"
      },
      sunday: {
        morning: "Sunday morning with steady craft. The week starts tomorrow. Will it be another plateau week of comfortable adequacy? Or will you push toward exceptional? What would pushing look like for your craft? Something you have never tried. Something that might fail. Something at the edge of your ability. Consider committing to one push.",
        afternoon: "Sunday afternoon on the plateau. Monday is coming. You know how to be steady. You have mastered consistent. But do you know how to leap? Leaping requires doing something you have not done before. Something uncomfortable. Something with uncertain outcomes. Are you willing to try something new this week?",
        evening: "Sunday evening with steady craft. The week ahead is familiar territory. You know exactly how it will go. But familiar is not exceptional. Familiar is stagnation in disguise. Before the week begins, identify one specific way to push past steady. One risk. One experiment. One thing at your edge. Commit to trying it.",
        night: "Sunday night on the plateau. Tomorrow is Monday. Another chance for steady comfortable adequacy. Or for something more. The craft does not improve by repeating what you already know. Improvement requires pushing into unfamiliar territory. Push tomorrow. Try something that might fail. That is how plateaus end."
      },
      midweek: {
        morning: "Midweek morning with steady craft. Half the week is gone. Consistent as always. Comfortable as always. You still have time to push past the plateau. What would exceptional look like for the rest of this week? Not maintaining. Pushing. What would you try if you were willing to risk failure?",
        afternoon: "Midweek afternoon on the plateau. The week is slipping by steadily and Friday approaches. Before Friday, try one thing at the edge of your ability. Not comfortable. Challenging. Something that might not work. The plateau ends when you stop avoiding discomfort. What would discomfort look like today?",
        evening: "Midweek evening with steady craft. Tomorrow is another chance. Steady got you here but steady will not get you further. Growth requires pushing into unfamiliar territory. What would pushing look like tomorrow? One technique you have avoided. One risk you have declined. Consider taking it.",
        night: "Midweek night on the plateau. The week is half over. You are exactly where you were Monday. Comfortable. Adequate. Is that enough? The remaining days are a chance to find out what more looks like. More requires discomfort. More requires risk. Are you willing to pay that price before Friday?"
      }
    }
  },

  // SHAPE: Struggling (low fuel, low drag but still not working)
  struggling: {
    condition: (p) => p.shape === 'struggling' || p.shape === 'low_fuel_low_drag',
    label: "⚠ LOW OUTPUT",
    messages: {
      morning: "Low output but also low friction. You're not blocked. You're just not moving. The issue isn't obstacles. It's ignition. What would spark you today? Not more planning. More starting. Open the project and make one mark. That's how you start.",
      afternoon: "You're not distracted, not overwhelmed. Just stalled. Sometimes the problem is too little pressure, not too much. Create a deadline. Tell someone what you'll ship. Add stakes. The friction might actually help.",
      evening: "Neither creating nor distracted. Just... stalled. You are not blocked by friction. You are blocked by absence of pull. What would make tomorrow feel urgent? Not fake urgency. Real stakes. A deadline. A promise. A bet. Tell someone what you will ship. Give yourself a consequence for not shipping. Sometimes you need to manufacture pressure to move.",
      night: "Low intensity, low friction. You're coasting in neutral. Is that what you want? If not, decide right now: what will you create tomorrow? Make it specific. Make it small. Make it non-negotiable. Then do it."
    }
  }
};

// ============================================================
// ALPHA PROPHETIC MESSAGES - Composite pattern-based messaging
// ============================================================

const alphaPropheticMessages = {
  // 1. ALL ALIGNED HIGH - most specific positive (check first)
  all_aligned_high: {
    condition: (s) => s.aq >= 7 && s.ri >= 7 && s.ci >= 7,
    label: "✦ ALL SYSTEMS OPTIMAL",
    messages: {
      monday: {
        morning: "Monday morning with all systems optimal. Freedom, connection, and output all above seven. This is the peak. Most creators never reach this state. Most who reach it lose it within weeks by adding more instead of protecting what they have. Today, your only job is defense. Say no to anything that would disturb this equilibrium. The world will offer opportunities. Decline them. What you have is worth more than what you could add.",
        afternoon: "Monday afternoon at peak performance. Everything is working and your instinct will be to optimize further. Resist that instinct. The path from excellence to collapse is paved with improvements. This afternoon, do exactly what you did this morning. No experiments. No new ideas. No saying yes to requests. The goal is tomorrow looking exactly like today. That is harder than it sounds.",
        evening: "Monday evening with all systems high. Day one is ending and the magic held. That is the job now. Maintenance of excellence. Before tomorrow, write down three things you protected today: a boundary you held, a distraction you refused, a temptation you declined. These are your instructions for the rest of the week. Follow them exactly.",
        night: "Monday night at the peak. The week has four more days. Each day in this state is a gift most creators never receive. Before you sleep, ask yourself: what is the single biggest threat to this state? Name it specifically. Then build a wall around it. The threat is probably something that feels productive. Productive threats are the deadliest kind."
      },
      friday: {
        morning: "Friday morning with all systems optimal. The week is ending and excellence held. That is rare and precious. Before the weekend, document everything that worked. Write it down. What you protected, what you refused, what you did consistently. This is not journaling. This is your formula for life. You cracked the code. The only question is whether you will follow it.",
        afternoon: "Friday afternoon at peak performance. The week was exceptional across every dimension. The weekend is for celebrating what you built. But celebration has a shadow: the temptation to reward yourself by loosening the conditions that created this. Do not do that. Celebrate by continuing. The reward for excellence is more excellence.",
        evening: "Friday evening with all systems high. The week is over. You stayed at the peak. That is mastery. The weekend is for deep rest, not productive rest. No side projects. No catching up. No optimization. Just being. The state you are in requires recovery as much as effort. Give yourself permission to do nothing that looks like work.",
        night: "Friday night at the peak. The week is done. Excellence across all dimensions. Most people will never know what this feels like. Some will reach it once and never again. You could be different. The weekend determines whether this becomes a pattern or a memory. Choose pattern. Rest completely so you can return completely."
      },
      saturday: {
        morning: "Saturday morning with all systems optimal. Even the weekend glows with excellence. This is what you built through discipline and protection. Enjoy it without analyzing it. The mind wants to understand what is working so it can optimize further. That analysis is the first step toward destruction. Just be in this state. Do not study it. Live it.",
        afternoon: "Saturday afternoon at peak performance. Freedom, connection, output, all at their best. The weekend is for being in this state, not working on it. Your job today is to do nothing that looks like improvement. No planning. No strategizing. No thinking about next week. The state maintains itself when you stop interfering with it.",
        evening: "Saturday evening with all systems high. Tomorrow is Sunday. The week ahead will present opportunities disguised as progress. New projects, new collaborations, new ideas. Each one is a threat to what you have built. Before the week arrives, decide what you will protect. Write it down. Make it specific. Then defend it against everything, including your own ambition.",
        night: "Saturday night at the peak. The week ahead is an opportunity to extend excellence into something rare: a sustained period of optimal performance. Most people peak and crash. You could peak and plateau. Before you sleep, recommit to the conditions that created this. Sleep, boundaries, focus, protection. The formula is simple. Following it is the hard part."
      },
      sunday: {
        morning: "Sunday morning with all systems optimal. The week starts tomorrow. You enter it at the peak, which is power most people never have. Use it wisely, which means using it defensively. Today, prepare for the week by deciding what you will not do. The to-do list matters less than the not-to-do list. What will you refuse? What meetings will you skip? What requests will you decline?",
        afternoon: "Sunday afternoon at peak performance. Monday is coming. You could maintain excellence or let it slip. Maintaining requires vigilance that feels excessive until you realize how quickly excellence disappears. This afternoon, review your commitments for the week. Cancel anything that is not essential. Reschedule anything that could wait. Protect the conditions that created this state.",
        evening: "Sunday evening with all systems high. The week ahead is an opportunity to continue mastery or to lose it by adding more. Before the week begins, set your intention: protect the peak. Everything else is secondary. Write down one thing you will refuse this week no matter how good it sounds. That refusal is worth more than any opportunity you might accept.",
        night: "Sunday night at the peak. Tomorrow you create again. From abundance. From alignment. From excellence. Before you sleep, appreciate what you have built. Then prepare to defend it. The defense starts with sleep. Go to bed early. Wake up rested. Enter Monday with the energy to say no. That energy is more valuable than any idea you might have."
      },
      midweek: {
        morning: "Midweek morning with all systems optimal. Half the week is gone and you are still at the peak. That is the goal. The remaining days are for continuing excellence, not pushing harder. The temptation will be to leverage this state into something bigger. Resist it. Bigger is not better. Sustained is better. The remaining days should look exactly like the first days.",
        afternoon: "Midweek afternoon at peak performance. The week is slipping by in the best possible way. Everything is working. The question is not how to improve it. The question is what would threaten it. Name that threat specifically. Is it a meeting? A project? A person? A habit? Name it, then avoid it. Protection requires specificity.",
        evening: "Midweek evening with all systems high. Tomorrow is another chance to stay at the peak. Before you sleep, note what is working and what you protected today. Do more of that. Less of everything else. The path to sustained excellence is narrow. It requires doing the same thing repeatedly when your mind wants novelty. Give your mind something else. Give your work consistency.",
        night: "Midweek night at the peak. The week is half over. Excellence held. The remaining days are for protecting what you have achieved, not adding to it. Your mind will generate ideas. Write them down for later. Your inbox will generate requests. Decline them for now. The state you are in is more valuable than any single opportunity. Protect it fiercely."
      }
    }
  },

  // 2. ALL ALIGNED LOW - most specific negative (check second)
  all_aligned_low: {
    condition: (s) => s.aq < 4 && s.ri < 4 && s.ci < 4,
    label: "⊗ ALL SYSTEMS CRITICAL",
    messages: {
      monday: {
        morning: "Monday morning with all systems critical. Freedom, connection, and output all below four. This is a crisis, and crisis has different rules than normal life. The week ahead cannot be about work. It has to be about survival. What do you need right now? Not what should you do. What do you actually need? Water, sleep, food, silence, a walk outside. Start there. The creative work does not exist until you do.",
        afternoon: "Monday afternoon in crisis across all dimensions. Everything is failing and that is terrifying, but trying to fix it makes it worse. Do not try to fix it. Just survive it. What is the absolute minimum you must do today? Write it down. Do only that. Then rest. If someone needs more from you, they can wait. You cannot give what you do not have.",
        evening: "Monday evening with all systems down. Day one is ending and nothing improved. That is expected in crisis. Recovery is not a day. It is not even a week. Lower all expectations for tomorrow. If you accomplish one thing, that is enough. If you accomplish nothing, that is also enough. Survival is the only metric that matters right now.",
        night: "Monday night in full crisis. The week has four more days. Do not plan to fix them. Do not set goals. Do not make lists. Plan to survive them. Minimum output. Maximum self care. Cancel what you can. Postpone what you cannot. The world will not end if you disappear for a week. But you might end if you do not."
      },
      friday: {
        morning: "Friday morning still in full crisis. The week is ending and everything is still failing. That is okay. Some crises take longer than a week. Some take months. Before the weekend, give yourself permission to do nothing except exist. No recovery plans. No strategies. No thinking about how to fix this. Just exist.",
        afternoon: "Friday afternoon with all systems critical. The week did not fix this. Of course it did not. Crisis is not fixed by weeks. It is survived through them. And you survived. That matters more than any work you could have produced. The weekend is not for catching up. It is for continuing to survive. That is enough.",
        evening: "Friday evening in crisis across everything. The week is over. You are still standing. That is victory even if it does not feel like it. The weekend is for nothing. Absolutely nothing. No productive rest. No self-improvement. No recovery activities. Just existence. Let yourself be without producing anything.",
        night: "Friday night with all systems down. The week is done. Everything is still failing. Rest anyway. The weekend is not for recovery strategies or plans to bounce back. It is for existence without demands. You do not need to earn rest by suffering productively. You just need rest. Take it without guilt."
      },
      saturday: {
        morning: "Saturday morning with all systems critical. Even the weekend starts in crisis. That is okay. Today is not for fixing. It is for being. What would just being look like? Maybe it looks like staying in bed. Maybe it looks like staring at the wall. Maybe it looks like crying. All of these are valid. There is no wrong way to survive.",
        afternoon: "Saturday afternoon in full crisis. The emergency continues. Do not fight it. Do not strategize around it. Do not read articles about bouncing back. Just be in it. Sometimes presence is the only option. Sometimes the only way out is through, and through takes longer than you want. That is okay. Keep going.",
        evening: "Saturday evening with all systems down. Tomorrow is Sunday. Another day to simply exist. Not improve. Not recover. Not plan. Exist. What would existing without pressure feel like? You might not remember. Try to find out. Lower the bar until it touches the ground. Then lower it further.",
        night: "Saturday night in crisis across everything. The week ahead does not need your performance. It does not need your strategy. It does not need your best self. It needs you to survive it. That is the only requirement. You can meet that requirement by doing less than you think. Much less. Give yourself permission."
      },
      sunday: {
        morning: "Sunday morning with all systems critical. The week starts tomorrow. Plan a survival week, not a recovery week. There is a difference. Recovery implies goals. Survival implies endurance. What is the absolute minimum you must do this week? Write it down. Now cross off half of it. That is your plan.",
        afternoon: "Sunday afternoon in full crisis. Monday is coming but you do not have to meet it at full strength. You can meet it in crisis mode. A minimal Monday. A protected Monday. Set the lowest possible bar for tomorrow. If you show up, that is enough. If you do one thing, that is a triumph. Survival is the only goal.",
        evening: "Sunday evening with all systems down. The week ahead needs to be protected from your ambitions, not fueled by them. Your ambitions are lying to you right now. They say you should bounce back. They are wrong. Do less. Much less. Protect yourself from the part of you that wants to perform. That part cannot help you right now.",
        night: "Sunday night in crisis across everything. Tomorrow is Monday. It does not have to be a normal Monday. It can be a crisis Monday. Minimum viable existence. Cancel what you can. Postpone what you cannot. Apologize to no one. You are doing what you need to survive. That is not weakness. That is wisdom."
      },
      midweek: {
        morning: "Midweek morning with all systems critical. Half the week is gone and you are still in crisis. That is okay. That is more than okay. You are surviving. That is the only goal right now. Not thriving. Not improving. Surviving. And you are doing it. Keep doing it. One hour at a time if necessary.",
        afternoon: "Midweek afternoon in full crisis. The week is slipping by in survival mode. That is okay. Some weeks are just about getting through. This is one of those weeks. You are getting through. That counts. That counts more than any creative output ever could. Keep getting through. The other side exists.",
        evening: "Midweek evening with all systems down. Tomorrow is another day in crisis. Do not expect improvement. Do not expect breakthrough. Expect continuation. Expect to keep surviving. That is enough. Getting through is enough. The weekend is coming. You will get there. One day at a time. One hour if necessary.",
        night: "Midweek night in crisis across everything. The week is half over. You are still here. That matters more than any metric, more than any output, more than any goal you set before this started. The remaining days are for continued survival. Nothing more. Do not add anything to that requirement. Survival is enough."
      }
    }
  },

  // 3. EMERGENCY - crisis state (alpha < 3)
  emergency: {
    condition: (s) => s.alpha < 3,
    label: "🚨 CREATIVE EMERGENCY",
    messages: {
      monday: {
        morning: "Monday morning in creative emergency. Alpha below three. This is not a productivity problem and treating it like one will make it worse. This is a life problem. Something fundamental is broken: health, relationships, environment, or all three. The week ahead cannot be about output. It has to be about survival. What do you need right now? Not what should you do. What do you need? Give it to yourself without apology.",
        afternoon: "Monday afternoon in crisis. Everything is failing. The temptation is to fix everything at once. That temptation is a trap. Do not try to fix it all. Pick one thing. The most critical thing. The thing that, if it got slightly better, would make everything else slightly more bearable. Address only that. Everything else waits. This is not giving up. This is triage.",
        evening: "Monday evening in emergency. Day one is ending and nothing improved. That is okay. That is expected. Recovery is not instant and expecting it to be is another form of self-harm. Before tomorrow, lower every expectation you have for yourself. Then lower them again. Survival is the goal. Everything else is optional until further notice.",
        night: "Monday night in creative crisis. The week has four more days. Do not set goals for them. Goals are for stable times. Set boundaries instead. Minimum output. Maximum rest. Cancel everything you can cancel. The foundation has to be rebuilt before you can build anything on it. That rebuilding starts with sleep. Get some."
      },
      friday: {
        morning: "Friday morning still in emergency. The week is ending and you are still in crisis. That is okay. That is not failure. Some emergencies take longer than a week. Some take months. The timeline is not up to you. Before the weekend, give yourself permission to do nothing productive. Not reduced productivity. Zero productivity. Just survive.",
        afternoon: "Friday afternoon in crisis. The week did not fix this. Of course it did not. Weeks do not fix this. Rest fixes this. Time fixes this. Removing pressure fixes this. The weekend is not for catching up on what you missed. It is for existing without demands. That might feel wrong. Do it anyway.",
        evening: "Friday evening in emergency. The week is over. You are still in crisis, and that is okay. Let the weekend be empty. Not restorative activities. Not self-care rituals. Empty. Sometimes empty is what heals. Sometimes doing nothing is the most productive thing you can do. Give yourself that permission.",
        night: "Friday night in creative crisis. The week is done. You made it through. That is enough. That is more than enough. The weekend is for nothing. Literally nothing. No plans for recovery. No strategies for bouncing back. Just existence. Let yourself be without producing anything. The production can wait. You cannot."
      },
      saturday: {
        morning: "Saturday morning in emergency. Even the weekend starts in crisis. That is okay. Today is not for recovery strategies or plans to get better. It is for gentleness. What would be gentle with yourself right now? Maybe it is staying in bed. Maybe it is a walk. Maybe it is crying. Do only that. Nothing else is required.",
        afternoon: "Saturday afternoon in crisis. The emergency continues. Do not fight it. Fighting extends it. Do not try to fix it. Fixing requires energy you do not have. Just be in it. Sometimes presence is the only medicine. Be present with yourself. That is not passive. That is active survival.",
        evening: "Saturday evening in emergency. Tomorrow is Sunday. Another day to simply exist. Not improve. Not recover. Not plan. Exist. What would existing without pressure look like? You might not know anymore. Try to find out. Lower every bar you have set for yourself. Then lower them again.",
        night: "Saturday night in creative crisis. The week ahead does not need your performance. It does not need your plans or your ambition. It needs your presence. Before you sleep, release all expectations. Just be. The work will still be there when you are ready. Right now, you are not ready. That is okay."
      },
      sunday: {
        morning: "Sunday morning in emergency. The week starts tomorrow but you are still in crisis. Do not pretend otherwise. Do not plan a normal week. Monday can be minimal. It should be minimal. Set the lowest possible bar for yourself. If you show up, that is victory. If you do one thing, that is triumph. If you do nothing, you are still surviving.",
        afternoon: "Sunday afternoon in crisis. Monday is coming but that does not mean the emergency is over. The emergency continues regardless of the calendar. Plan a survival week, not a productive week. What is the absolute minimum you must do? Write it down. Then cross off half of it. That is your plan.",
        evening: "Sunday evening in emergency. The week ahead needs to be different. Not better. Different. Less. Slower. More protected. What would a protected week look like? Cancel what you can. Postpone what you cannot. Tell people you are unavailable. You do not owe them an explanation. You owe yourself survival.",
        night: "Sunday night in creative crisis. Tomorrow is Monday. It does not have to be a normal Monday. It can be an emergency Monday. Minimum viable existence. One foot in front of the other. That is okay. That is enough. Most people never face what you are facing. You are still standing. That is victory."
      },
      midweek: {
        morning: "Midweek morning in emergency. Half the week is gone and you are still in crisis. That is okay. Some emergencies last longer than a week. Some last longer than a month. The timeline is not failure. Focus on today. Just today. What is the minimum you can do today? Do that. Nothing more.",
        afternoon: "Midweek afternoon in crisis. The week is slipping by in survival mode. That is okay. That is the right mode for right now. Survival is an achievement when everything is failing. You are achieving it. Keep surviving. Keep putting one foot in front of the other. The other side of this exists.",
        evening: "Midweek evening in emergency. Tomorrow is another day in crisis. Do not expect breakthrough. Breakthroughs are for stable times. Expect continuation. Expect to keep surviving. That is enough. Getting through is enough. The weekend is coming. You will get there. One day at a time.",
        night: "Midweek night in creative crisis. The week is half over. You are still here. That matters more than any output, more than any goal, more than any metric. The remaining days do not need to be productive. They need to be survivable. You can make them survivable by doing less. Much less. Keep going."
      }
    }
  },

  // 4. SEVERE IMBALANCE - structural problem (gap > 4)
  severe_imbalance: {
    condition: (s) => Math.max(s.aq, s.ri, s.ci) - Math.min(s.aq, s.ri, s.ci) > 4,
    label: "⚠ SEVERE IMBALANCE",
    messages: {
      monday: {
        morning: "Monday morning with severe imbalance. One score is soaring while another crashes. That gap of more than four points is not just a weakness. It is a structural problem that will eventually bring down your strength. The week ahead needs to address it directly. What is your lowest score? That is where your attention belongs. Not your strength. Your strength will take care of itself. Your weakness needs intervention.",
        afternoon: "Monday afternoon still imbalanced. The gap between your best and worst is too wide to sustain. Your strength cannot carry your weakness forever. Eventually the weakness collapses and takes everything with it. This afternoon, do one thing for your lowest score. Not your highest. What is failing? What is the smallest action that would address it? Do that before the day ends.",
        evening: "Monday evening with severe gap. Day one is ending. Ask yourself honestly: did you work on your weakness or did you lean on your strength? Most people lean on strength. It feels productive but it widens the gap. Tomorrow, focus on what is broken. Not what works. Your strength does not need you. Your weakness does.",
        night: "Monday night severely imbalanced. The week has four more days. The gap will widen unless you intervene because strengths tend to get stronger and weaknesses tend to get weaker without attention. Before you sleep, name your weakest score specifically. Then write down one action you will take tomorrow to address it. Small action. Specific action."
      },
      friday: {
        morning: "Friday morning still severely imbalanced. The week is ending and the gap persists. That is a warning. Before the weekend, acknowledge the problem honestly. You cannot strength your way out of weakness forever. Your strength is impressive. Your weakness is dangerous. The weekend is for deciding which one to focus on. Choose the weakness.",
        afternoon: "Friday afternoon with the gap still wide. Your strength carried the week. You probably produced good work. But carrying is not solving. The foundation is cracked and you are building higher. Eventually it falls. The weekend is not for producing more. It is for planning how to address your lowest score. Make a real plan.",
        evening: "Friday evening severely imbalanced. The week is over. The pattern is clear: one area thrives while another fails. This pattern cannot continue indefinitely. This weekend, decide how to close the gap. Not through optimizing your strength. Through addressing your weakness. What would that look like specifically?",
        night: "Friday night with severe gap. The week is done. Your strength is obvious to everyone. Your weakness is obvious to you. The gap between them is dangerous because it creates an illusion of success while building toward collapse. The weekend is for making a real plan to address the weakness. Not thinking about it. Planning specifically."
      },
      saturday: {
        morning: "Saturday morning with severe imbalance. Even the weekend shows the gap between your best and worst. What is your lowest score? Why is it so low? Not the excuse. The real reason. Understanding precedes fixing. Before you can address the weakness, you have to understand why it is weak. What are you avoiding? What feels too hard?",
        afternoon: "Saturday afternoon still imbalanced. Your strength makes you feel successful. That feeling is a trap. Success in one area does not protect you from failure in another. Your weakness will eventually catch up. The question is whether you address it now or wait for the collapse. What would addressing it look like? Be specific.",
        evening: "Saturday evening with the gap wide. Tomorrow is Sunday. The week ahead is forming in your mind. Before it arrives, think about balance. Not optimization. Balance. What would balanced look like for you? Not perfect balance. Just less gap. Less distance between your best and worst. What would that require?",
        night: "Saturday night severely imbalanced. The week ahead will repeat the pattern unless you change it. You will lean on your strength. You will ignore your weakness. The gap will widen. Before you sleep, commit to working on your weakness. Write down what you will do. Make it specific. Your strength does not need the commitment. Your weakness does."
      },
      sunday: {
        morning: "Sunday morning with severe imbalance. The week starts tomorrow. You have a choice: lean on your strength again or address your weakness. The first is comfortable. The second is necessary. Your strength will continue without your attention. Your weakness will continue too, getting worse. Which one needs you more? Focus there.",
        afternoon: "Sunday afternoon still imbalanced. Monday is coming. You could repeat the pattern or break it. Breaking it requires doing something different, which means focusing on your lowest score instead of your highest. What would Monday look like if you gave your weakness the attention you usually give your strength? Plan that.",
        evening: "Sunday evening with the gap wide. The week ahead is an opportunity. Not to maximize your strength. You do that naturally. To shore up your weakness. You avoid that naturally. What would shoring up look like? One hour a day on your lowest score? One small action every morning? Decide before the week begins.",
        night: "Sunday night severely imbalanced. Tomorrow you work again. This time, give attention to what is failing. Your strength will take care of itself. It always does. Your weakness needs you. It always does. The gap closes only when you focus on the weakness. Before you sleep, decide how you will do that tomorrow."
      },
      midweek: {
        morning: "Midweek morning with severe imbalance. Half the week is gone. Ask yourself honestly: did you address the gap or widen it? Most people widen it without realizing. They lean on strength and ignore weakness. You still have time to change. Focus on your lowest score today. Not tomorrow. Today.",
        afternoon: "Midweek afternoon still imbalanced. Your strength is doing its job. Your weakness is doing its damage. The gap persists because attention flows naturally to what works. Before Friday, give real attention to what is failing. One hour. One focused action. Something that addresses the weakness directly.",
        evening: "Midweek evening with the gap wide. Tomorrow is another chance. The strength does not need you. It will continue performing whether you focus on it or not. The weakness needs you. It will continue failing unless you intervene. Plan to address it tomorrow. Specifically. What will you do?",
        night: "Midweek night severely imbalanced. The week is half over. The gap persists. The remaining days are a choice: same pattern or different pattern. Same means leaning on strength. Different means focusing on weakness. Different is harder. Different is also the only way the gap closes. Choose different."
      }
    }
  },

  // 5. COMPOUNDING - high performance (alpha >= 7)
  compounding: {
    condition: (s) => s.alpha >= 7,
    label: "📈 COMPOUNDING RETURNS",
    messages: {
      monday: {
        morning: "Monday morning with compounding returns. Each day in this zone builds on the last like interest on investment. This is rare and powerful. The week ahead is not about working harder or adding more. It is about protecting this state so the compounding can continue. Your biggest threat today is saying yes to something that feels productive but disrupts the conditions. Guard against it fiercely.",
        afternoon: "Monday afternoon in the compound zone. Everything is working together and the temptation is to chase more. Resist that temptation. More is the enemy of compounding. The magic happens when you do the same thing consistently, not when you add new things. This afternoon, say no to anything that would disrupt this alignment. Protection matters more than optimization.",
        evening: "Monday evening with everything compounding. Day one is ending and the magic held. That is the job now: maintenance of a rare state. Before tomorrow, notice specifically what protected this state today. What did you say no to? What routine did you follow? Write it down. Tomorrow should look exactly like today. That is how compounding works.",
        night: "Monday night in compound mode. The week has four more days. Each day in this zone builds on the last, but only if the conditions remain constant. Before you sleep, ask yourself: what is the single biggest threat to this state? Is it a meeting? A project? A person? Name it specifically, then build your defense against it. The compound is fragile."
      },
      friday: {
        morning: "Friday morning with compounding returns. The week is ending and everything stayed aligned. That is exceptional. Most people who reach this state lose it within days by adding more instead of protecting what they have. Before the weekend, document everything that worked this week. What you protected, what you refused, what you repeated. This is your formula. Follow it.",
        afternoon: "Friday afternoon in the compound zone. The week performed at a high level because each day built on the last. The weekend is for appreciating what you built, not optimizing it. Optimization is a trap. It makes you change things that are working. Do not change things that are working. Appreciate them. Protect them.",
        evening: "Friday evening with everything working. The week is over and the compound held. That is victory. The weekend is for real rest, not productive rest. The threat to compounding is often the weekend when you try to squeeze in more. Do not squeeze in more. Rest completely so you can return Monday with the energy to protect the compound.",
        night: "Friday night in compound mode. The week is done and you stayed in the zone. That is rare. The weekend is for celebrating and recovering. You earned both. But the celebration has a shadow: the temptation to reward yourself by loosening the conditions. Do not loosen the conditions. The compound survives only if the conditions survive."
      },
      saturday: {
        morning: "Saturday morning with compounding returns. Even the weekend feels different when everything is working. This is what sustainable success feels like. Enjoy it without analyzing it too much. The mind wants to understand what is working so it can optimize. That analysis often destroys the thing it is trying to understand. Just be in this state. Do not dissect it.",
        afternoon: "Saturday afternoon in the compound zone. You could work or rest today. Both are valid. The compound will continue if you protect it, regardless of which you choose. What would protection look like today? Maybe it is saying no to a social event. Maybe it is going to bed early. Whatever maintains the conditions, do that.",
        evening: "Saturday evening with everything aligned. Tomorrow is Sunday and the week ahead will try to pull you out of the zone. New opportunities will arrive. Interesting problems will present themselves. Each one is a threat to the compound. Before the week arrives, decide what you will protect. Write it down. Then defend it against everything, including your own ambition.",
        night: "Saturday night in compound mode. The week ahead could continue this streak or break it. Most streaks break because people change what is working instead of protecting it. Before you sleep, recommit to the formula that created this state. Sleep, boundaries, focus, protection. The formula is simple. Following it when the world offers alternatives is the hard part."
      },
      sunday: {
        morning: "Sunday morning with compounding returns. The week starts tomorrow and you have momentum most people never achieve. The only question is whether you will protect it or spend it on something that feels valuable but is not. What would protection look like this week? Decide before the week decides for you. The to-do list matters less than the not-to-do list.",
        afternoon: "Sunday afternoon in the compound zone. Monday is coming and you could lose this state or extend it. The choice is made by what you say yes to and what you say no to. This afternoon, review your commitments for the week. Cancel anything that is not essential. Reschedule anything that could wait. The compound requires protection, not effort.",
        evening: "Sunday evening with everything working. The week ahead is an opportunity to compound further. Not by adding more. By protecting what you have. Before the week begins, write down one thing you will refuse this week no matter how good it sounds. That refusal is worth more than any opportunity you might accept. Guard the conditions that created this state.",
        night: "Sunday night in compound mode. Tomorrow you create again, from abundance, from alignment. Before you sleep, set your intention: protect the compound. Everything else is secondary. The defense starts with sleep. Go to bed early. Wake up rested. Enter Monday with the energy to say no. That energy is more valuable than any idea you might have."
      },
      midweek: {
        morning: "Midweek morning with compounding returns. Half the week is gone and you are still in the zone. That is the goal. The remaining days are for continuing exactly what you have been doing, not pushing harder. The temptation will be to leverage this state into something bigger. Resist it. Bigger is the enemy of compound. Sustained is the ally.",
        afternoon: "Midweek afternoon in the compound zone. The week is slipping by in the best possible way. Everything is working because each day has built on the last. The question is not how to improve this. The question is what would threaten it. Name that threat specifically. Is it a meeting? A project? A distraction? Avoid it.",
        evening: "Midweek evening with everything aligned. Tomorrow is another chance to stay in the zone. Before you sleep, note what is working and what you protected today. Do more of that tomorrow. Less of everything else. The path to sustained compounding is narrow. It requires doing the same thing repeatedly when your mind wants novelty. Give your mind something else.",
        night: "Midweek night in compound mode. The week is half over and the compound held. That is success. The remaining days are for protecting what you have built, not adding to it. Your mind will generate ideas. Write them down for later. Your inbox will generate requests. Decline them for now. The state you are in is more valuable than any single opportunity."
      }
    }
  },

  // 6. BALANCED - healthy state (gap <= 1.5 && alpha >= 5)
  balanced: {
    condition: (s) => Math.max(s.aq, s.ri, s.ci) - Math.min(s.aq, s.ri, s.ci) <= 1.5 && s.alpha >= 5,
    label: "⚖ BALANCED",
    messages: {
      monday: {
        morning: "Monday morning balanced. All three scores within tight range of each other. Most creators never achieve this. The week ahead is not about fixing anything but about growing everything together. Balance is underrated because it lacks drama. But sustainable creative careers are built on exactly this foundation. Choose one small upgrade for each dimension today.",
        afternoon: "Monday afternoon still balanced. No score is dragging the others down. That is exceptionally rare. Most creators have a glaring weakness. You do not. The week is young and balance is your advantage. The choice now: maintain equilibrium while gently pushing all three scores upward together. Growth from balance is the most sustainable kind.",
        evening: "Monday evening with balance intact. Day one is ending with all dimensions aligned. Tomorrow will test whether you can maintain this while still working hard. The trap is focusing so intensely on one dimension that others slip. Before tomorrow, plan how each dimension gets attention. Balance requires intention.",
        night: "Monday night balanced. The week has four more days to grow from this foundation. Balance is not the end goal but it is the right foundation for growth. Before you sleep, identify one thing that maintained each dimension today. Repeat all three tomorrow. Parallel growth beats sequential growth."
      },
      friday: {
        morning: "Friday morning still balanced. An entire week of equilibrium is exceptional. Most creators spike one dimension while another suffers. You maintained all three. Before the weekend, appreciate what this required. Balance means saying no to seductive opportunities that would create imbalance. That discipline is rare.",
        afternoon: "Friday afternoon with balance intact. The week was steady across all dimensions without dramatic highs or concerning lows. The weekend choice: push aggressively and risk imbalance, or appreciate what sustainable creative health feels like. Appreciation is underrated. You earned a weekend of noticing what balance provides.",
        evening: "Friday evening balanced. The week is over and equilibrium held throughout. That is the foundation for long-term creative success. The weekend is for rest that maintains the balance rather than rest that creates debt in one dimension. Enjoy this evening knowing all three dimensions are aligned.",
        night: "Friday night with balance intact. The week is done with all three dimensions aligned. This is what sustainable creative health actually looks like. The weekend is not for optimization but for enjoying what you have built. Before sleep, acknowledge: maintaining balance all week is an accomplishment worth celebrating."
      },
      saturday: {
        morning: "Saturday morning balanced. Even the weekend maintains equilibrium. This is what sustainable creativity looks like and most people never experience it. They oscillate between burnout and recovery. You are in neither. The weekend is for being present in this rare state rather than immediately trying to optimize it.",
        afternoon: "Saturday afternoon with balance intact. Freedom, connection, output, all aligned. The weekend choice is simple: be in this balance without pushing it, or chase one dimension and risk the equilibrium. Being in balance is itself a skill. Practice it today. Notice what it feels like. That feeling is your compass.",
        evening: "Saturday evening balanced. Tomorrow is Sunday and then a new week. You face a choice: maintain this rare equilibrium or pursue aggressive growth that risks imbalance. Both are valid. But know that balance is harder to achieve than imbalance. If you have it, think carefully before disrupting it.",
        night: "Saturday night with balance intact. The week ahead is an opportunity for something rare: growth from equilibrium. Not lopsided growth where one dimension advances while others suffer. Balanced growth. Before sleep, set an intention for the week: grow all three dimensions together. That is the sustainable path."
      },
      sunday: {
        morning: "Sunday morning balanced. The week starts tomorrow and you enter it from equilibrium. That is a genuine gift most creators never receive. They enter weeks with debt in one dimension, playing catch-up. You are not. Protect this foundation. Grow all three dimensions equally. No shortcuts that sacrifice one for another.",
        afternoon: "Sunday afternoon with balance intact. Monday is coming and you face a choice: maintain the balance with steady growth or chase one dimension aggressively. Chasing creates debt. Maintaining compounds gains. The dramatic choice is tempting. The sustainable choice is wiser. Choose sustainability this week.",
        evening: "Sunday evening balanced. The week ahead is an opportunity for something most creators never achieve: sustained balanced growth over multiple weeks. Before the week begins, set specific intentions for all three dimensions. Not just output. Not just connection. Not just freedom. All three together.",
        night: "Sunday night with balance intact. Tomorrow you work again from equilibrium. That is your advantage over creators who start weeks in deficit. Before sleep, note specifically what maintains your balance. Those practices are your formula. Follow them tomorrow and every day this week."
      },
      midweek: {
        morning: "Midweek morning balanced. Half the week is gone and equilibrium held despite the pressure of work. That is exceptional. Most creators lose balance by Wednesday. You did not. The remaining days are for continuing this rare state while growing. Not choosing between balance and growth. Doing both together.",
        afternoon: "Midweek afternoon with balance intact. The week is passing in healthy equilibrium without crisis or drama. That is what sustainable creativity actually looks like. Keep all three dimensions in equal focus. The remaining days are for demonstrating that balance and productivity coexist. They do. You are proving it.",
        evening: "Midweek evening balanced. Tomorrow is another chance to maintain equilibrium while being productive. Before sleep, check honestly: are all three dimensions getting real attention or are you coasting on one while the others drift? True balance requires active maintenance every single day.",
        night: "Midweek night with balance intact. The week is half over and the equilibrium held. The remaining days are an opportunity to show that balanced creators can be productive creators. Before sleep, commit to one specific action for each dimension tomorrow. Not just output. All three."
      }
    }
  },

  // 7. ASCENDING - trend improving
  ascending: {
    condition: (s) => s.alpha >= 5 && s.alpha < 7 && s.trend === 'improving',
    label: "📈 ASCENDING",
    messages: {
      monday: {
        morning: "Monday morning ascending. Alpha is climbing and the trend is your friend. Something you did recently created this upward movement. The week ahead is about identifying that thing and doing more of it. The biggest risk to an ascending trend is changing what works because you do not recognize what is working. Name the change. Protect it.",
        afternoon: "Monday afternoon still ascending. The trend continues upward. Do not disrupt it by changing what works or adding complexity that dilutes focus. What specific action or decision created this rise? Name it explicitly. That is your formula for the rest of the week. Double down on what is working rather than experimenting.",
        evening: "Monday evening on the rise. Day one is ending with the upward trend intact. Tomorrow will test whether you can repeat what worked today. The risk is unconscious success where you improve without knowing why. Before tomorrow, identify specifically what maintained the trend today. Repeat those exact things.",
        night: "Monday night ascending. The week has four more days to continue this climb. Each day you maintain the trend, the gains compound over time. Before sleep, document what worked today. Not vague feelings but specific actions and decisions. Those actions are your playbook for Tuesday. Follow the playbook exactly."
      },
      friday: {
        morning: "Friday morning still ascending. An entire week of upward trend is exceptional. Most creators plateau or decline by Friday. You climbed. Before the weekend, document specifically what worked this week. You will want this record when you try to repeat the success. Write it down while it is fresh.",
        afternoon: "Friday afternoon on the rise. The week improved your creative health steadily. That is rare and valuable. The weekend is for appreciating the climb while protecting the conditions that created it. Do not celebrate by doing things that reverse the trend. Rest in ways that maintain momentum.",
        evening: "Friday evening ascending. The week is over and you rose throughout. That is victory worth acknowledging. The weekend is for rest that protects the trend rather than rest that creates setbacks. Before the weekend truly begins, commit to maintaining at least one practice that fueled the ascent.",
        night: "Friday night on the rise. The week is done with an upward trend intact throughout. The weekend is for celebrating and protecting what you built over five days. Know exactly what created the rise so you can guard those conditions over the next two days. Momentum is always easier to maintain than to rebuild."
      },
      saturday: {
        morning: "Saturday morning ascending. Even the weekend continues the upward trend. You are doing something right and it is important to name it explicitly. What specific practices or decisions created this rise? The weekend is not for coasting on mystery success but for understanding your formula so you can repeat it deliberately.",
        afternoon: "Saturday afternoon on the rise. The trend is up and the weekend is an opportunity to understand why. What would continuing this ascent into next week require? Not hoping it continues. Understanding the mechanism. Name three specific things that fueled the rise. Those are your practices for next week.",
        evening: "Saturday evening ascending. Tomorrow is Sunday and then a new week. The trend could continue or you could accidentally disrupt it. What would continuing require? More of the same. But you need to know what the same is. Before tomorrow, articulate your formula for the ascent clearly.",
        night: "Saturday night on the rise. The week ahead is an opportunity to extend this trend into something significant. Before sleep, recommit to what works. The formula is becoming clear through repetition. Follow it deliberately rather than accidentally. Conscious success is repeatable success."
      },
      sunday: {
        morning: "Sunday morning ascending. The week starts tomorrow with momentum in your favor. That is an advantage most creators do not have. What specific actions will you take Monday to continue the climb? Plan them now while you have perspective. Do not enter the week hoping the trend continues. Enter with a plan.",
        afternoon: "Sunday afternoon on the rise. Monday is coming and you are entering it with upward momentum. Protect that momentum by knowing what created it. What specific changes or practices started the ascent? What threatens those practices this week? Identify the threats now so you can avoid them.",
        evening: "Sunday evening ascending. The week ahead is an opportunity to keep climbing toward creative health. What would stop the ascent? Overcommitment. Distraction. Abandoning what works for shiny alternatives. Identify your specific risks and commit to avoiding them. The trend continues only if you protect it.",
        night: "Sunday night on the rise. Tomorrow is Monday and you have momentum that took effort to build. Before sleep, set a clear intention: continue the trend by repeating what works. Do not experiment this week. Do not optimize. Just repeat the formula that created the ascent. Consistency beats optimization."
      },
      midweek: {
        morning: "Midweek morning ascending. Half the week is gone and you are still climbing. That is exactly the goal. The remaining days are for continuing rather than changing. The temptation is to improve on success. Resist it. What is working should not be optimized. It should be repeated exactly.",
        afternoon: "Midweek afternoon on the rise. The week is passing in the best possible way with steady upward movement. Keep doing exactly what you are doing. It is working. The remaining days are not for experimentation but for repetition. Repeat the formula that got you here. Do not improve it.",
        evening: "Midweek evening ascending. Tomorrow is another opportunity to continue the climb that has defined this week so far. Before sleep, note specifically what worked today and what you will repeat. Do exactly those things tomorrow without variation. The trend continues through repetition of success rather than search for novelty.",
        night: "Midweek night on the rise. The week is half over and the trend held throughout. The remaining days are for extending this streak into something meaningful. What would extending require? The exact same things that worked the first half. Name them. Commit to them. Execute tomorrow."
      }
    }
  },

  // 8. COASTING - trend declining from mid-range
  coasting: {
    condition: (s) => s.alpha >= 5 && s.alpha < 7 && s.trend === 'declining',
    label: "📉 COASTING",
    messages: {
      monday: {
        morning: "Monday morning coasting. Alpha is decent but trending downward. Things feel fine but fine is a lie when the direction is down. The week ahead will continue the decline unless you actively intervene. Coasting feels comfortable but it costs you ground every day. What specific change would arrest the slide? Name it. Do it today.",
        afternoon: "Monday afternoon still coasting. Things are okay but drifting steadily downward. The danger of coasting is that okay becomes not okay so gradually you do not notice until it is a crisis. What would stop the drift? Not maintain it. Actually stop it. Name one intervention for this afternoon.",
        evening: "Monday evening in coast mode. Day one is ending with the downward trend intact. Did anything push against the decline today? Tomorrow needs real intention not just maintenance of the drift. What will you do differently tomorrow? Be specific. Vague intentions produce more coasting.",
        night: "Monday night coasting down. The week has four more days and each one you coast is a day the decline continues. Coasting costs you compound progress that you will never recover. Before sleep, decide specifically what you will change tomorrow. Not this week. Tomorrow. One specific thing."
      },
      friday: {
        morning: "Friday morning still coasting. An entire week passed and the downward drift continued throughout. Before the weekend, be honest with yourself: is coasting a deliberate choice or an accident you are rationalizing? Either way, it leads down. What would reversing the trend require? Name it now.",
        afternoon: "Friday afternoon in coast mode. The week was okay but okay is not sustainable when the underlying trend is downward. The weekend is for asking a hard question: what would up actually require? Not hoping for up. Actively planning for up. What specific changes would reverse the direction? Name them now.",
        evening: "Friday evening coasting. The week is over and things seem fine. But fine is declining in disguise when the underlying trend is down. This weekend, think honestly about what would actually improve things. Not what you hope will happen by itself. What you would need to do differently. Name specific changes.",
        night: "Friday night in coast mode. The week is done and the decline was gentle but real. Gentle decline is still decline and it compounds negatively over time. The weekend is for deciding whether gentle decline is acceptable for your creative career. It usually is not. What would you need to change to reverse this trend?"
      },
      saturday: {
        morning: "Saturday morning coasting. Even the weekend continues the drift downward. What would arresting the decline look like? Not dramatic overnight transformation. Just stopping the slide. One small intervention that pushes back against the trend. Name it. The weekend is an opportunity to plan that intervention.",
        afternoon: "Saturday afternoon in coast mode. Things are comfortable but the comfort is expensive because the underlying trend is down. Comfort is the enemy right now. What uncomfortable thing would reverse the trend? Name the uncomfortable thing explicitly. Commit to doing it this week. Comfort got you into this drift.",
        evening: "Saturday evening coasting. Tomorrow is Sunday and then a new week that will continue the decline unless you decide otherwise. What specific decision would stop it? Not a vague intention to do better. A specific decision about what changes. Make that decision before the week begins.",
        night: "Saturday night in coast mode. The week ahead is a choice between continuing to drift comfortably downward or pushing back against the trend. Pushing back requires changing something specific about how you work. What will you change? Name it tonight so you can execute it first thing Monday morning."
      },
      sunday: {
        morning: "Sunday morning coasting. The week starts tomorrow and it will look exactly like last week unless you actively intervene. What would intervention look like? Not maintenance of the current situation. Actual intervention that reverses the trend. Plan that intervention now while you have perspective.",
        afternoon: "Sunday afternoon in coast mode. Monday is coming and you could coast another week or push against the decline. Pushing is harder than coasting. Pushing is also the only way to reverse the trend. Decide now: will this week be different? If yes, what specifically will be different?",
        evening: "Sunday evening coasting. The week ahead will continue the decline unless something changes. Hoping things improve is not a strategy. Before the week begins, decide specifically what changes. Write it down. A written commitment is harder to ignore than a vague intention to do better.",
        night: "Sunday night in coast mode. Tomorrow is Monday and it will look exactly the same as last Monday unless you make it different. What would different actually look like? Decide specifically right now. Then do that thing tomorrow morning before the day pulls you back into the familiar pattern of comfortable coasting."
      },
      midweek: {
        morning: "Midweek morning coasting. Half the week is gone and the drift continued without resistance. You still have time to change the trajectory before Friday. What would pushing against the decline look like for the rest of this week? Name one specific intervention you can make. Execute it today not tomorrow.",
        afternoon: "Midweek afternoon in coast mode. The week is slipping by comfortably downward and Friday is approaching. Before Friday, do something that pushes against the decline. Not tomorrow. Today. Right now if possible. Coasting through another afternoon costs you ground you will not recover.",
        evening: "Midweek evening coasting. Tomorrow is another chance to coast comfortably or push against the declining trend. The coast is easier in the moment but the push is necessary for your future creative health. What would pushing look like? Name it specifically. Then commit to doing it tomorrow morning first thing.",
        night: "Midweek night in coast mode. The week is half over and the downward trend continued throughout every day. The remaining days are a chance to reverse it before the week is entirely lost to the drift. What would reversal require? One specific change. Name it clearly. Commit to it tonight. Execute first thing tomorrow."
      }
    }
  },

  // 9. FALLING - trend declining from low-range
  falling: {
    condition: (s) => s.alpha >= 3 && s.alpha < 5 && s.trend === 'declining',
    label: "📉 DECLINING",
    messages: {
      monday: {
        morning: "Monday morning falling. Alpha is below five and actively declining. This is not stagnation. This is erosion. The week ahead is critical not for recovery but for stabilization. Stopping the fall is different from reversing it. Focus only on stopping right now. What is causing the decline? Name it specifically before it gets worse. Then do one thing today that addresses that cause directly.",
        afternoon: "Monday afternoon still falling. The decline continues and momentum works against you. Do not try to reverse it today. Just stop it. Stopping and reversing are different goals. What would stopping look like this afternoon? Not improving. Just stopping the slide. Identify the biggest drain on your creative health right now and pause it. Even temporarily.",
        evening: "Monday evening in decline. Day one is ending and the fall continued. Did anything slow it today? Tomorrow needs real intervention not hope or vague intentions. What specific action will you take differently tomorrow? Not generally do better. Specifically change one thing. Name that thing now. Write it down. Execute it first thing tomorrow.",
        night: "Monday night falling. The week has four more days and each day you fall is harder to recover from later. Before sleep, identify the primary cause of the decline. Not the symptoms but the root. Is it exhaustion? Overcommitment? Something you are avoiding? Name it honestly. Then commit to addressing that specific cause tomorrow morning."
      },
      friday: {
        morning: "Friday morning still falling. An entire week passed and the decline continued throughout. Before the weekend, be brutally honest with yourself: what is really wrong? Not the symptoms you complain about but the underlying cause you are avoiding. Name it. The weekend cannot heal what you will not acknowledge. What broke? When did it break? Why?",
        afternoon: "Friday afternoon in decline. The week fell and Friday cannot save it. The weekend is not for productivity. It is for understanding what is actually happening to your creative health. What broke? When did it break? Why did you let it continue? These questions require honest answers before any recovery becomes possible.",
        evening: "Friday evening falling. The week is over and the trend was down throughout. This weekend, do not try to fix anything yet. Try to understand it first. Understanding must come before fixing. What patterns do you notice? What were you avoiding all week? What truth about your situation have you not faced? Face it this weekend.",
        night: "Friday night in decline. The week is done and you fell throughout it. Rest now because exhaustion makes everything worse. But this weekend, think seriously about what is causing this decline. Not surface answers that let you avoid change. Real answers that point to real solutions. What is actually wrong?"
      },
      saturday: {
        morning: "Saturday morning falling. Even the weekend continues the decline because weekends do not automatically heal what weekdays damaged. What is really wrong? Not the excuse you give yourself. The truth you are avoiding. Name it honestly so you can address it. Stabilization begins with accurate diagnosis. What would an honest friend say is happening to you?",
        afternoon: "Saturday afternoon in decline. The fall continues even without work pressure which means this is not a productivity problem. This is something deeper. What is actually causing this? Burnout? Resentment? Fear? Something unprocessed? The weekend is for facing whatever you have been avoiding. Name it. Only then can stabilization begin.",
        evening: "Saturday evening falling. Tomorrow is Sunday and then a new week that could continue the decline or begin stabilization. But stabilization requires understanding what caused the fall. What do you understand about this decline now that you did not understand Monday? If nothing, you are not ready for next week. Think harder.",
        night: "Saturday night in decline. The week ahead will continue falling unless something changes at a fundamental level not a surface level. What is that fundamental thing? Not work harder. Not try more. What structural change would stop the decline? Name it tonight. Commit to it. Without commitment, next week repeats this one."
      },
      sunday: {
        morning: "Sunday morning falling. The week starts tomorrow and the decline could continue or stop. Stopping is the only goal right now. Not reversing. Stopping. Stopping requires knowing what started the fall and what sustains it. What started it? What keeps it going? Answer both questions honestly before planning any intervention.",
        afternoon: "Sunday afternoon in decline. Monday is coming and you could fall another week or finally stabilize. Stabilization requires changing something fundamental about how you work or live. Not trying harder at the same thing. Changing something. What needs to change? Be specific. General intentions produce general results which means continued decline.",
        evening: "Sunday evening falling. The week ahead is dangerous because the trend is down and momentum is against you. Declining systems tend to keep declining without intervention. Before the week begins, decide what changes. Not what adjusts slightly. What actually changes. Name one structural intervention you will make Monday morning.",
        night: "Sunday night in decline. Tomorrow is Monday. It could be another falling day or the beginning of stabilization. Stabilization requires knowing the cause of the decline. Do you know it? Really know it? Name it out loud right now. If you cannot name it clearly, you are not ready to stop it. Spend tonight figuring out the cause."
      },
      midweek: {
        morning: "Midweek morning falling. Half the week is gone and the decline continued throughout. You still have time to stabilize before Friday. Not time to improve. Time to stabilize. Stopping the fall is the only goal right now. What would stopping look like for the rest of this week? Name one thing you will do differently starting today.",
        afternoon: "Midweek afternoon in decline. The week is slipping away downward and Friday approaches. Before Friday, try to at least stop the fall. Not reverse it. Just stop the active decline. What would that require? Probably stopping something that drains you. What is draining you most right now? Stop that thing if you can. Even temporarily.",
        evening: "Midweek evening falling. Tomorrow is another chance but the trend is against you and has been all week. What would tomorrow need to look like to stop the decline? Not to recover. Just to stop falling. Plan that specific tomorrow tonight. What will you do? What will you not do? Both matter equally right now.",
        night: "Midweek night in decline. The week is half over and you fell for the entire first half. The remaining days are critical not for recovery but for stabilization. Recovery comes later. What will stabilize you? Not inspire you. Stabilize you. Name the one intervention that would stop the fall. Commit to it for the remaining days."
      }
    }
  },

  // 10. FREEDOM BOTTLENECK - AQ is weakest (catch-all, excludes all_aligned_low)
  freedom_bottleneck: {
    condition: (s) => s.aq < s.ri && s.aq < s.ci && s.aq < 5 && !(s.aq < 4 && s.ri < 4 && s.ci < 4),
    label: "🔓 FREEDOM IS THE BOTTLENECK",
    messages: {
      monday: {
        morning: "Monday morning with freedom as the bottleneck. Your connection and output are ready to grow but autonomy anchors them to the ground. You have the skills. You have people who care. You do not have the space, time, or options to use them fully. Something constrains you. Money, obligations, a job that drains more than it gives. Name it specifically. What is the smallest expansion of freedom you could create today?",
        afternoon: "Monday afternoon still constrained. Your craft and resonance want to fly but lack of freedom clips the wings. Autonomy is the foundation everything else builds on. Without it, skills and audience mean nothing. What is constraining you this afternoon? Time you do not control? Money you do not have? Obligations you resent? Name it. Then ask: what is one small expansion of freedom I could create right now?",
        evening: "Monday evening with freedom blocking everything else. Day one is ending and your other scores are waiting for autonomy to catch up. Connection and output cannot grow past what freedom allows. Before tomorrow, identify one obligation you could reduce or eliminate. Not all obligations. One. The one that costs more than it gives. Consider refusing it tomorrow.",
        night: "Monday night with autonomy as the limit. The week has four more days and your connection and output will only go as far as freedom allows. What is capping your autonomy right now? Lack of money? Lack of time? Too many commitments you did not choose? Name the constraint. Then plan one specific action for tomorrow that would loosen it even slightly."
      },
      friday: {
        morning: "Friday morning still freedom bottlenecked. The week is ending and autonomy held you back throughout. Your skills and audience were ready but freedom was not. Before the weekend, ask honestly: what would your life look like with twenty percent more freedom? What would you need to cut or change to get there? Name specific obligations that no longer serve you.",
        afternoon: "Friday afternoon constrained. Your craft and resonance outpaced your freedom all week. You had more to give than your circumstances allowed. The weekend is for asking hard questions: what obligations no longer serve your creative life? What commitments drain more than they provide? What would you eliminate if you gave yourself permission? Be honest.",
        evening: "Friday evening with freedom as the limit. The week is over and autonomy was the ceiling on everything else. This weekend, think seriously about what you could eliminate to raise that ceiling. Not what you should add. What you should remove. Freedom grows by subtraction. What commitment, obligation, or expense could you drop to create more space?",
        night: "Friday night with autonomy blocking growth. The week is done and your creative capacity exceeded your creative freedom all week. The weekend is for planning how to change that ratio. Not by trying harder but by cutting something. What takes your time without giving you energy? What costs money without creating value? Consider eliminating it."
      },
      saturday: {
        morning: "Saturday morning thinking about freedom. Your connection and output are strong but constrained by lack of autonomy. What would more freedom actually look like for you? More time you control? More money in reserve? Fewer obligations you did not choose? Get specific. Vague freedom is not actionable. What specific constraint would you remove if you could remove one?",
        afternoon: "Saturday afternoon with freedom as the bottleneck. The weekend is for thinking honestly about constraints. Which ones are genuinely fixed? Which ones are choices you made that you could unmake? You have more choice than you think. Most constraints are chosen then forgotten. What constraint did you choose that you could now unchoose? Consider doing that.",
        evening: "Saturday evening considering autonomy. Tomorrow is Sunday and then a new week where your other scores are ready to grow but only freedom holds them back. What would you change if you gave yourself permission to change it? Not what is realistic. What would you change if realistic did not matter? That answer reveals what you actually want. Consider pursuing it.",
        night: "Saturday night with freedom limiting everything. The week ahead will repeat the same pattern unless you intervene. Your skills and audience will wait while autonomy stays low. What one thing could you do to create more freedom? Not everything. One thing. Decide before you sleep. Then do it this week. Even small expansions of freedom compound over time."
      },
      sunday: {
        morning: "Sunday morning with freedom as the bottleneck. The week starts tomorrow and your craft and connection are ready to grow. Is your autonomy ready to let them? What would make this week different from last week? More space. More options. More time you control. How would you create that? Name one specific constraint you will loosen this week.",
        afternoon: "Sunday afternoon still constrained. Monday is coming and your freedom will limit your other scores again unless something changes. What could change? Be specific. Could you say no to something? Could you renegotiate a commitment? Could you spend less on something that does not matter to fund something that does? Name the change.",
        evening: "Sunday evening with autonomy as the limit. The week ahead needs more freedom than last week gave you or it will produce the same results. Before the week begins, identify one thing to say no to this week. One space to protect from invasion. One hour to reclaim. Freedom grows through small reclamations. Start with one.",
        night: "Sunday night freedom bottlenecked. Tomorrow you create again but only as much as your autonomy allows. No amount of skill or audience matters if you lack the freedom to use them. What would give you more room tomorrow specifically? Saying no to something? Protecting time? Starting before obligations pile up? Do that thing first tomorrow morning."
      },
      midweek: {
        morning: "Midweek morning with freedom as the bottleneck. Half the week is gone and autonomy is still the ceiling on everything else. You have time to change that before Friday. What constraint could you loosen today? Not eliminate completely. Just loosen. Say no to one thing. Protect one hour. Reduce one obligation. Freedom expands through small wins.",
        afternoon: "Midweek afternoon still constrained. Your craft and connection want more than your freedom gives them. They are ready to grow but autonomy holds them back. Before Friday, expand one area of freedom even slightly. Cancel something. Delegate something. Say no to something new. Small expansions of freedom create space for everything else to grow.",
        evening: "Midweek evening with autonomy limiting growth. Tomorrow is another chance and your other scores are waiting for freedom to catch up. What would catching up look like? Probably saying no to something. Probably protecting time that currently gets invaded. Probably spending less on something that does not matter. Plan one of those for tomorrow.",
        night: "Midweek night freedom bottlenecked. The week is half over and your autonomy held everything else back for the entire first half. The remaining days are a chance to change that. What will you do differently? Not try harder. Do differently. What constraint will you loosen? What obligation will you reduce? Decide now and execute tomorrow."
      }
    }
  },

  // 11. CONNECTION BOTTLENECK - Ri is weakest (catch-all, excludes all_aligned_low)
  connection_bottleneck: {
    condition: (s) => s.ri < s.aq && s.ri < s.ci && s.ri < 5 && !(s.aq < 4 && s.ri < 4 && s.ci < 4),
    label: "📡 CONNECTION IS THE BOTTLENECK",
    messages: {
      monday: {
        morning: "Monday morning with connection as the bottleneck. You have the freedom and the craft but no one feels it. Work without impact is noise. The week ahead needs to address resonance before anything else. Who specifically needs what you make? Not everyone. Someone specific. What do they struggle with? What would move them? Start there. Create for that person today.",
        afternoon: "Monday afternoon still disconnected. Your autonomy and intensity are strong but impact is weak. Something blocks the resonance. Are you targeting too broadly? Protecting yourself too much? Being too vague? What would you make today if you knew exactly one person would feel it deeply? Make that thing. Specificity creates connection.",
        evening: "Monday evening with resonance blocking everything. Day one is ending and your freedom and craft are waiting for connection to catch up. Without connection, your skills and autonomy produce noise that no one hears. Before tomorrow, define your audience more specifically. Who are they? What do they need? What truth would move them?",
        night: "Monday night with connection as the limit. The week has four more days and your autonomy and output will only matter if someone cares about what you create. Who cares? Who should care? Why do they not care yet? Is it targeting? Is it vulnerability? Is it specificity? Answer these questions honestly before you sleep."
      },
      friday: {
        morning: "Friday morning still connection bottlenecked. The week is ending and resonance lagged behind your other scores. You created but it did not land. Before the weekend, ask honestly: why is the work not connecting? Is it too safe? Too vague? Too focused on you instead of them? The answer determines what to do differently next week.",
        afternoon: "Friday afternoon disconnected. Your freedom and craft outpaced your impact all week. You had the ability to create and the space to create but what you created did not move anyone. The weekend is for asking hard questions: what truth are you not telling? What vulnerability are you protecting? What specificity are you avoiding?",
        evening: "Friday evening with resonance as the limit. The week is over and connection was the ceiling on everything else. This weekend, study what moves YOU. What stops your scroll? What makes you feel something? That emotional impact is the standard your work needs to meet. Study it. Then figure out how to create it.",
        night: "Friday night with connection blocking growth. The week is done and you have freedom and craft without impact. The weekend is for understanding why. What is missing from the work? Usually it is vulnerability or specificity or both. What would you say if you stopped protecting yourself? Consider saying that next week."
      },
      saturday: {
        morning: "Saturday morning thinking about connection. Your autonomy and intensity are strong but no one feels what you create. What would landing actually look like? Not metrics. Feeling. People moved. Messages that say your work changed something for them. What would you have to make for that to happen? What truth would you have to tell?",
        afternoon: "Saturday afternoon with resonance as the bottleneck. The weekend is for thinking about impact. What do you believe that you have not said publicly? What opinion do you hold that you protect? That unsaid thing might be exactly what connects. People respond to conviction and vulnerability. What conviction are you hiding?",
        evening: "Saturday evening considering connection. Tomorrow is Sunday and then a new week where your other scores are ready to grow but only resonance holds them back. What truth would unlock connection? Not what is safe to say. What truth would actually move people? Consider saying it this week. Resonance requires risk.",
        night: "Saturday night with connection limiting everything. The week ahead will repeat the same pattern unless you intervene. What would make your work unmissable? Not popular. Unmissable. The kind of work that people remember and share and return to. What would that require from you? Probably more truth. Probably more vulnerability."
      },
      sunday: {
        morning: "Sunday morning with connection as the bottleneck. The week starts tomorrow and your freedom and craft are ready to grow. Is your resonance ready to grow with them? What would you say if you stopped protecting yourself? What would you make if you targeted one specific person with a specific need? Consider doing exactly that tomorrow.",
        afternoon: "Sunday afternoon still disconnected. Monday is coming and your connection will limit your other scores again unless something changes. What could change? More vulnerability in what you share. More specificity in who you serve. More truth in what you say. Pick one of those to improve this week. Just one. Focus there.",
        evening: "Sunday evening with resonance as the limit. The week ahead needs more connection than last week gave you or it will produce the same disconnected results. Before the week begins, identify one truth you have been avoiding saying. One vulnerable thing you have been protecting. Consider putting it in your work this week.",
        night: "Sunday night connection bottlenecked. Tomorrow you create again but only as much as your resonance allows. Skill without connection is noise. What would make someone stop scrolling and actually feel something? What would make them remember your work tomorrow? Make that thing first thing in the morning."
      },
      midweek: {
        morning: "Midweek morning with connection as the bottleneck. Half the week is gone and resonance is still the ceiling on everything else. You have time to change that before Friday. What could you say today that would actually land? Not what is safe. What would land. Consider targeting one specific person and telling one specific truth.",
        afternoon: "Midweek afternoon still disconnected. Your freedom and craft want more impact than your connection gives them. They are ready but resonance holds them back. Before Friday, create something vulnerable. Something true. Something that makes you nervous to share. That nervousness usually signals that it will connect.",
        evening: "Midweek evening with resonance limiting growth. Tomorrow is another chance and your other scores are waiting for connection to catch up. What would catching up require? Probably more truth than you have been telling. Probably more specificity than you have been showing. Plan to provide both tomorrow.",
        night: "Midweek night connection bottlenecked. The week is half over and your resonance held everything else back for the entire first half. The remaining days are a chance to change that. What truth will you tell? What vulnerability will you show? What specific person will you serve? Answer at least one of those tonight."
      }
    }
  },

  // 12. OUTPUT BOTTLENECK - Ci is weakest (catch-all, excludes all_aligned_low)
  output_bottleneck: {
    condition: (s) => s.ci < s.aq && s.ci < s.ri && s.ci < 5 && !(s.aq < 4 && s.ri < 4 && s.ci < 4),
    label: "⚡ OUTPUT IS THE BOTTLENECK",
    messages: {
      monday: {
        morning: "Monday morning with output as the bottleneck. You have the freedom and the audience but not the craft intensity to serve them. Freedom and connection without output is wasted potential. The week ahead needs depth. Block ninety minutes today for real creative work. Not planning. Not researching. Creating. What is stealing your creative time? Distractions? Fear? Lack of focus? Name it and guard against it today.",
        afternoon: "Monday afternoon still low output. Your autonomy and resonance are strong but production is weak. You have the space to create and people who want what you make but you are not making enough of it. Something blocks your depth. Is it distractions? Fear of imperfection? Lack of protected time? What would you make today if nothing else mattered? Make that. Everything else can wait.",
        evening: "Monday evening with craft blocking everything. Day one is ending and your freedom and connection are waiting for output to catch up. Without output, freedom and connection are just potential that never becomes real. Before tomorrow, set one creative session that nothing can interrupt. What time? What will you create? Decide now. Protect it fiercely tomorrow.",
        night: "Monday night with output as the limit. The week has four more days and your autonomy and resonance will only go as far as your craft allows. What would deep work look like tomorrow? Not shallow work that feels productive. Deep work that actually creates value. Plan that session now. When will it happen? What will you make? How will you protect it?"
      },
      friday: {
        morning: "Friday morning still output bottlenecked. The week is ending and craft lagged behind your other scores all week. You had the freedom and the audience but did not produce enough. Before the weekend, ask honestly: what kept you from going deep? Distractions? Perfectionism? Fear? Lack of protection? Be honest about the real blockers so you can address them next week.",
        afternoon: "Friday afternoon with low production. Your freedom and connection outpaced your output all week. You could have created more than you did. Something stopped you. The weekend is for asking: what would change if you protected creative time fiercely? What if deep work was non-negotiable? What if distractions were eliminated? Consider making those changes.",
        evening: "Friday evening with craft as the limit. The week is over and output was the ceiling on everything else. Your freedom and audience were ready but your production was not. This weekend, think seriously about what steals your focus. Then plan specifically to stop it next week. What will you eliminate? What will you protect?",
        night: "Friday night with output blocking growth. The week is done and you have freedom and connection without sufficient production. The weekend is for understanding why. What is really blocking your depth? Is it distractions you allow? Fear you indulge? Time you do not protect? Name the real blocker and plan to address it next week."
      },
      saturday: {
        morning: "Saturday morning thinking about output. Your autonomy and resonance are strong but craft lags behind them. What would depth actually look like? Not more hours working. More focus during the hours. More flow. More protection from interruption. What would you need to change to achieve real depth? What distractions would you eliminate? What fear would you face?",
        afternoon: "Saturday afternoon with output as the bottleneck. The weekend is for thinking about production. What would you create if you turned off all distractions for two hours? What if your phone was in another room? What if email was closed? Consider actually doing that. Depth requires elimination. What will you eliminate to create space for deep work?",
        evening: "Saturday evening considering craft. Tomorrow is Sunday and then a new week where your other scores are ready to grow but only output holds them back. What would unlock your creative intensity? Probably eliminating distractions. Probably protecting time. Probably facing whatever fear makes you avoid depth. Which of those will you address?",
        night: "Saturday night with output limiting everything. The week ahead will repeat the same pattern unless you intervene. What would make deep work actually happen? Not wish it would happen. Make it happen. Decide before you sleep: when will you create? What will you create? How will you protect that time from invasion?"
      },
      sunday: {
        morning: "Sunday morning with output as the bottleneck. The week starts tomorrow and your freedom and connection are ready to grow. Is your craft ready to grow with them? What would serious creative output look like this week? When will it happen? What will you make? How will you protect the time from distractions and obligations?",
        afternoon: "Sunday afternoon still low production. Monday is coming and your output will limit your other scores again unless something changes. What could change? More protection for creative time. More focus during that time. More willingness to go deep instead of staying shallow. Pick one of those to improve this week.",
        evening: "Sunday evening with craft as the limit. The week ahead needs more output than last week gave you or it will produce the same results. Before the week begins, block your deep work time on the calendar. Make it sacred. Nothing moves it. Nothing interrupts it. That protection is how output happens. Without it, the week will slip away shallow.",
        night: "Sunday night output bottlenecked. Tomorrow you create again but only as much as your craft allows. Your freedom and audience are ready but waiting. What would help you go deep tomorrow? Set that up tonight. Eliminate a distraction. Prepare your workspace. Commit to a specific creation. Make depth inevitable rather than aspirational."
      },
      midweek: {
        morning: "Midweek morning with output as the bottleneck. Half the week is gone and craft is still the ceiling on everything else. You have time to change that before Friday. Today, protect ninety minutes for nothing but creation. Not planning. Not researching. Not communicating. Creating. When will that session happen? Decide now and guard it fiercely.",
        afternoon: "Midweek afternoon still low production. Your freedom and connection want more than your output gives them. They are ready to grow but lack of depth holds them back. Before Friday, go deep at least once. Really deep. No distractions. No interruptions. Just creation. What would you make if you gave yourself that gift? Give it to yourself today.",
        evening: "Midweek evening with craft limiting growth. Tomorrow is another chance and your other scores are waiting for output to catch up. What would catching up look like? Probably a protected session of real depth. When will that happen tomorrow? What will you create? How will you eliminate distractions? Plan all of that tonight.",
        night: "Midweek night output bottlenecked. The week is half over and your craft held everything else back for the entire first half. The remaining days are a chance to change that. What will you create? When will you create it? How will you protect that time? Answer all three questions before you sleep. Then execute tomorrow."
      }
    }
  }
};
