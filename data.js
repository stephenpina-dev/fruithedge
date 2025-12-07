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
        afternoon: "Monday afternoon already running on fumes. The week just started and you are already in debt. Stop. Do not push through. What is the minimum viable Monday? Do only that. Protect tomorrow by not destroying today. One sustainable week beats five burnout cycles.",
        evening: "Monday evening with nothing left. The week barely started. This is not a work ethic problem. Something is fundamentally wrong with how your weeks begin. Before Tuesday, identify one thing: what drained you before the week even started? That thing needs to die.",
        night: "Monday night and you are empty. The week is four days away from Friday and you are already cooked. Do not set ambitious goals for tomorrow. Set survival goals. Sleep is the only task that matters right now. Tomorrow, protect your morning like your career depends on it. It does."
      },
      friday: {
        morning: "Friday morning with no energy. You gave the week everything and it took more. Do not try to finish strong. That is ego talking. Finish smart. What can you cut from today? Cut it. Protect the weekend. Recovery is not a reward for completing the week. It is a requirement for surviving the next one.",
        afternoon: "Friday afternoon on empty. The weekend is close but you might not make it with anything left. Lower the bar for today. Way lower. What is the one thing that absolutely must happen before Monday? Do only that. Everything else is negotiable.",
        evening: "Friday evening and you are depleted. The week won. This time. But the weekend is yours. Do not fill it with obligations. Do not say yes to anything. Guard the next 48 hours like they are sacred. Because they are. Your next week depends on how you recover this weekend.",
        night: "Friday night and you are running on nothing. The week is over. Stop thinking about it. Whatever did not get done will wait. Your only job now is recovery. Not Netflix recovery. Real recovery. Sleep. Silence. Space. Monday you will need energy you do not currently have. Build it this weekend."
      },
      saturday: {
        morning: "Saturday morning with low energy. The week took too much. Today is not for productivity. Today is not for catching up. Today is for restoration. What would actually fill your tank? Not distraction. Restoration. Do that thing. Nothing else matters today.",
        afternoon: "Saturday afternoon still depleted. You are not recovering fast enough. What is still draining you? Work thoughts? Obligations? Guilt about resting? Name the leak and plug it. The weekend is half over. Protect what remains.",
        evening: "Saturday evening and energy still low. Tomorrow is Sunday. Your last day before the cycle restarts. What would make tomorrow restorative instead of anxious? Plan that now. Not work. Not prep. Actual rest. Your future self needs you to protect tomorrow.",
        night: "Saturday night running on empty. One more day before Monday. You are not recovered yet. Tomorrow needs to be different. No screens in the morning. No obligations until afternoon. Guard Sunday like it is the most important day of your week. Because right now, it is."
      },
      sunday: {
        morning: "Sunday morning with depleted reserves. This is your last chance to recover before the week begins. Do not waste it on anxiety about Monday. Do not waste it on catching up. What would actually restore you? Not distract you. Restore you. Do only that today.",
        afternoon: "Sunday afternoon still running low. Monday is coming and you are not ready. But you can not sprint into readiness. You can only rest into it. What would make the next few hours restorative? Not productive. Restorative. The week will demand everything. Give yourself something first.",
        evening: "Sunday evening with nothing in the tank. Monday is tomorrow and you are not recovered. This is a crisis. Do not prepare for the week. Do not review your calendar. Do one thing: go to bed early. Stupidly early. Sleep is the only intervention that matters now.",
        night: "Sunday night and you are empty. Monday is hours away. You can not fix this tonight. But you can stop making it worse. No screens. No planning. No anxiety spiraling. Just rest. Tomorrow will be hard. But it will be harder if you do not sleep right now."
      },
      midweek: {
        morning: "Midweek morning with no energy. You started the week okay but something drained you. What changed? What happened Monday or Tuesday that emptied your tank? Name it specifically. That pattern will repeat next week unless you identify it now. Protect today. Find the leak.",
        afternoon: "Midweek afternoon on empty. You are in the middle of the marathon and you have hit the wall. Do not push through. That makes it worse. What is the minimum viable rest of the day? Do only that. Thursday and Friday you will need reserves you do not have. Start building them now.",
        evening: "Midweek evening with nothing left. The week is half over but you are fully depleted. Something is wrong with how you are working. Too many meetings? Too little recovery? Too much context switching? Identify it tonight. Tomorrow, change one thing.",
        night: "Midweek night running on fumes. You will not make it to Friday at this rate. Not sustainably. Tomorrow morning, protect your first two hours like they are sacred. No meetings. No messages. No demands. Just recovery and your single most important task. Everything else can wait."
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
        evening: "Monday evening with a full head. The week ahead is invisible because today is blocking the view. Before tomorrow, do a complete brain dump. Every task, worry, idea, obligation. Get it out of your head and onto paper. Tuesday needs a clearer mind than today had.",
        night: "Monday night with racing thoughts. The week looms and your brain will not stop processing. Do not fight it. Write it. Every thought that surfaces, capture it. The goal is not to solve anything tonight. The goal is to externalize so your brain can rest. Sleep clears the mental cache. Let it."
      },
      friday: {
        morning: "Friday morning with mental clutter. The week piled up and your head is full of unfinished business. Good news: you do not have to solve it all today. Pick the three things that would haunt you all weekend if they stayed open. Do those. Just those. Let the rest wait until Monday.",
        afternoon: "Friday afternoon with no mental space. The week is ending but the thoughts are not. Before the weekend, close your open loops. Not all of them. The ones that will nag you Saturday morning. Send the message. Make the decision. File the thing. Clear enough space to actually rest.",
        evening: "Friday evening with a crowded mind. The week is over but your brain did not get the memo. Write down everything still spinning. Then physically close your work. Shut the laptop. Leave the space. Your brain needs environmental cues that the week is done. Give them to it.",
        night: "Friday night with thoughts still racing. The week is over. Let it go. Whatever is unfinished will be unfinished whether you think about it or not. Write down the top three things for Monday. Then close the document. You have given your brain permission to release the week. Now rest."
      },
      saturday: {
        morning: "Saturday morning with a busy mind. The week should be behind you but it is still taking up space. This is not about discipline. It is about ritual. Take 10 minutes to write down everything work related that is still in your head. Then put that paper somewhere you can not see it. Reclaim your weekend.",
        afternoon: "Saturday afternoon still mentally cluttered. You are physically free but mentally still at work. What is occupying you? Name it specifically. Is it a task? A worry? A decision? Whatever it is, write it down and tell yourself: Monday. Not today. Monday. Give yourself permission to release it.",
        evening: "Saturday evening with a full mind. Tomorrow is your last free day and you are spending mental energy on things you can not control right now. What would actually give you peace tonight? Not distraction. Peace. Find that. The mental clutter will wait. It always does.",
        night: "Saturday night still processing the week. Your brain needs idle time to consolidate and clear. No inputs. No screens. No problems to solve. Just space. Let yourself be bored. Boredom is how your brain defragments. You need that defragmentation more than you need entertainment."
      },
      sunday: {
        morning: "Sunday morning with mental overload. The weekend is almost over and your head is still full. Before the week starts, you need space. Not productivity. Space. Take 30 minutes for a complete brain dump. Everything in your head onto paper. Then take a walk with no phone. Let your mind settle.",
        afternoon: "Sunday afternoon with a cluttered mind. Monday is coming and there is no room for it. This afternoon is for clearing, not preparing. What thoughts keep intruding? Write them down. Every single one. The act of writing them releases their grip on your attention.",
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
        afternoon: "Monday afternoon with no options. The week is already taking its predictable shape. But predictability is not destiny. What is one assumption you are making about your constraints? Question it. Really question it. Most prisons are made of beliefs, not bars.",
        evening: "Monday evening feeling stuck. The week has started and the walls are already visible. Before Tuesday, write down what is actually stopping you from changing direction. Is it real? Financial? Social? Habitual? Be specific. Vague traps are the hardest to escape.",
        night: "Monday night feeling locked in. The week ahead offers no new paths. Or does it? Options are not found. They are built. What is one small door you could start constructing this week? Not a dramatic escape. A small expansion of possibility. Write it down. Start tomorrow."
      },
      friday: {
        morning: "Friday morning still feeling trapped. The week is ending and nothing changed. But the weekend is different. The weekend is yours. What option could you explore in the next 48 hours? A conversation, a search, a small experiment. The cage has a key. You have to look for it.",
        afternoon: "Friday afternoon with no options in sight. The week repeated the same patterns. Again. Before the weekend, ask yourself: what would you do if you had permission? You might have more permission than you think. The trap might be internal.",
        evening: "Friday evening feeling stuck. Another week in the same place. But weekends are for possibilities. Not escape. Exploration. What is one path you have been afraid to even research? This weekend, research it. Just look. Information creates options.",
        night: "Friday night with low optionality. The week is over but the trap remains. Tomorrow is different. Tomorrow you have time to think. Use it to map your constraints. Which are real? Which are assumed? Which could change if you pushed? The weekend is for seeing clearly what the week obscures."
      },
      saturday: {
        morning: "Saturday morning feeling trapped. Even the weekend feels constrained. But today is yours. No meetings. No obligations you did not choose. What would you do today if the trap did not exist? Do some version of that. Even small freedom is freedom.",
        afternoon: "Saturday afternoon with no options. The freedom of the weekend should feel expansive but it does not. Why? What is constraining you even now? Is it real or is it a story you keep telling yourself? Today, question the story.",
        evening: "Saturday evening still feeling stuck. Tomorrow the Sunday anxiety might start. Before it does, write down one option you have been ignoring. Something you could pursue if you decided to. The option exists. You are choosing not to see it. Why?",
        night: "Saturday night with low optionality. The weekend is half gone and nothing changed. But change does not require weekends. It requires decisions. What decision have you been avoiding? Name it. You do not have to make it tonight. Just name it."
      },
      sunday: {
        morning: "Sunday morning feeling trapped. The week ahead looks like the week behind. But you have today. A full day before the cycle restarts. What would make you feel less stuck? Not a complete escape. A small opening. Find that today. Even planning an escape is a form of freedom.",
        afternoon: "Sunday afternoon with no options. Monday is coming and it feels inevitable. But inevitability is a feeling, not a fact. What is one thing you could do differently this week? Not everything. One thing. Small options compound into big changes. Start small.",
        evening: "Sunday evening feeling locked in. The week is about to start and it looks identical to last week. Before you accept that, ask: what would you change if you could change one thing? You probably can change that thing. The trap is usually smaller than it appears.",
        night: "Sunday night with low optionality. Monday feels like a cage door closing. But what if this week you did one thing different? Took one meeting you would not normally take. Said no to one thing you always say yes to. Small rebellions create options. Plan one rebellion for this week."
      },
      midweek: {
        morning: "Midweek morning feeling trapped. You are in the middle of the routine and the walls are solid. But routines have cracks. What is one small thing you could do differently today? Not a revolution. A crack. Small deviations accumulate into new directions.",
        afternoon: "Midweek afternoon with no options. The week is half over and nothing has changed. But half the week remains. What is one assumption about your situation that might be wrong? Question it. Options hide behind assumptions we never examine.",
        evening: "Midweek evening feeling stuck. The week is taking its usual shape. Before Thursday, identify one constraint that is actually a choice. Something you think you have to do that you actually decided to do. What if you decided differently?",
        night: "Midweek night with low optionality. The week will end like it began. Unless something changes. You can not change everything. But you can change something. What is the smallest change that would create the most space? Identify it tonight. Try it tomorrow."
      }
    }
  },

  // BOTTLENECK: Freedom (high constraint) (day-aware)
  constraint_bottleneck: {
    condition: (p) => p.bottleneck.name === 'freedom' && p.raw.constraint >= 7,
    label: "⛓ OBLIGATION OVERLOAD",
    messages: {
      monday: {
        morning: "Monday morning under heavy obligations. The week is already claimed by others before it began. Before the avalanche starts, protect one hour. Just one. Put it on the calendar right now. Label it unavailable. Guard it like your creative life depends on it. Because it does.",
        afternoon: "Monday afternoon drowning in obligations. The week just started and you have already given it away. What is one thing you could cancel this week? Not should cancel. Could cancel. The world will not end. Your creativity might begin.",
        evening: "Monday evening crushed by constraints. The week took everything today. Before Tuesday, look at your calendar. What is one thing that is on there out of habit, not necessity? Question it. Kill it. Make space before the week makes more demands.",
        night: "Monday night overloaded with obligations. The week is four days from over and you are already exhausted by what you owe. Tomorrow, say no to one thing. Just one. Not a big no. A small no. Small nos create small spaces. Small spaces become room to breathe."
      },
      friday: {
        morning: "Friday morning still carrying heavy obligations. The week demanded everything and you gave it. Today, take something back. Not permission. You do not need permission. Just take it. One hour that belongs to you. Not to anyone else. You.",
        afternoon: "Friday afternoon under the weight of constraints. The weekend is close but obligations are following you. Before you leave today, cancel one thing for next week. Create future space. Give next week you a gift that this week you could not have.",
        evening: "Friday evening overloaded. The week took more than it deserved. The weekend is yours. Do not let obligations follow you. What commitment could you drop for the next 48 hours? Drop it. Not delay it. Drop it. Protect the weekend.",
        night: "Friday night crushed by constraints. The week is over but the obligations are not. Draw a line. Everything on the other side of that line is for Monday. Not Sunday. Monday. The weekend is for recovery. Recovery is not negotiable."
      },
      saturday: {
        morning: "Saturday morning and obligations still pressing. Even the weekend is not free. What is claiming your Saturday? Is it necessary or just expected? Expectations can be disappointed. Your creative energy cannot be endlessly borrowed.",
        afternoon: "Saturday afternoon with too many constraints. The weekend should be open but it is not. What could you cancel today? What expectation could you disappoint? Sometimes disappointing others is how you stop disappointing yourself.",
        evening: "Saturday evening still obligated. Tomorrow is Sunday. Your last free day. Protect it. Whatever is trying to claim tomorrow, question whether it has the right. Your time is not infinite. Spend it like it matters.",
        night: "Saturday night under constraints. Sunday is coming and it needs to be different. Before you sleep, decide: what will Sunday be for? Not for obligations. For you. Make that decision now and defend it tomorrow."
      },
      sunday: {
        morning: "Sunday morning with heavy obligations. Even today is claimed. But by whom? By what? Make a list of everything you think you have to do today. Now cross off everything that is not truly mandatory. How much remains? Probably less than you thought.",
        afternoon: "Sunday afternoon drowning in constraints. Monday is coming and today was supposed to be recovery. What stole it? Name the thief. Sometimes naming it is enough to stop giving it your time. What can you reclaim for the next few hours?",
        evening: "Sunday evening overloaded. The week starts tomorrow and you did not get a weekend. This is not sustainable. Before the week begins, identify one obligation for next week that you will not meet. Not can not. Will not. The choice is yours.",
        night: "Sunday night crushed by constraints. The week is about to add more weight to what you already carry. But weight can be put down. What are you carrying that you could release? Not everything. One thing. What would you set down if you gave yourself permission?"
      },
      midweek: {
        morning: "Midweek morning under heavy obligations. You are in the middle of serving everyone else. When do you serve yourself? Today, protect 30 minutes. Not for work. For you. If you cannot find 30 minutes, that is the problem. That is exactly the problem.",
        afternoon: "Midweek afternoon drowning in constraints. The week is demanding and you are giving. But giving without replenishing is just draining. What would fill you up? Not complete freedom. Just a small refill. Find that today.",
        evening: "Midweek evening overloaded. The week has taken half your energy for other people. Before Thursday, identify one obligation that does not deserve your energy. You know which one. The one that drains you more than it should. Question why it still exists.",
        night: "Midweek night crushed by constraints. The week is half over and you have given it all away. Tomorrow, take something back. Not a lot. Just something. One hour. One no. One boundary. You are allowed to have boundaries. Start with one."
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
        afternoon: "Monday afternoon and you still have energy. The week has not drained you yet. Use this. What is the one thing that would make this week successful? Do it now while you have the fuel. Do not save energy for later. Deploy it on what matters.",
        evening: "Monday evening with energy reserves. You made it through day one with power to spare. That is an asset. Before tomorrow, decide what will receive your best energy Tuesday morning. Do not let it be decided by whoever emails first. You decide.",
        night: "Monday night with untapped power. You have more capacity than you used today. That is good for tomorrow. But it is also a question: why did you not use it? What held you back? Whatever it was, do not let it hold you back Tuesday. Energy unused is energy wasted."
      },
      friday: {
        morning: "Friday morning with energy. You made it through the week with fuel to spare. Most people are running on fumes. You are not. Use this advantage. What could you finish today that would make the weekend feel earned? Do that thing.",
        afternoon: "Friday afternoon and you still have power. The week did not break you. Before you coast into the weekend, ask: what one thing would be satisfying to complete? You have the energy. Use it to close strong. Then rest.",
        evening: "Friday evening with energy reserves. The week is over and you are not depleted. That is a win. But do not fill the weekend with more work just because you can. Rest while you have the capacity. Store this energy for next week.",
        night: "Friday night with untapped power. You made it. The week is done and you still have fuel. Enjoy the weekend without guilt. You did not deplete yourself. That is exactly how it should be. This is what sustainable creativity looks like."
      },
      saturday: {
        morning: "Saturday morning with strong energy. The weekend stretches ahead and you have power to enjoy it. Do not default to productivity. What would you do today purely for the joy of it? You have the energy for joy. Use it.",
        afternoon: "Saturday afternoon with energy to spare. This is freedom with fuel. Rare combination. What have you been wanting to do but too tired to attempt? Today might be the day. The energy is here. The time is here. What will you do with it?",
        evening: "Saturday evening and you still have power. Tomorrow is Sunday. You could start the week rested AND energized. That is a superpower. Protect your sleep tonight. Do not burn energy on screens. Let it compound into Sunday.",
        night: "Saturday night with untapped energy. You have fuel most people would kill for. Do not waste it staying up late for no reason. Channel it into rest. Tomorrow you could wake up powerful. That is a gift. Receive it."
      },
      sunday: {
        morning: "Sunday morning with strong energy. The week ahead will try to take it. Before it does, use some for yourself. What would fill your cup before the demands begin? You have power now. Invest it in yourself before the week claims it.",
        afternoon: "Sunday afternoon with energy reserves. Monday is coming but you are ready for it. That is rare. Most people dread Monday because they are empty. You are not. Use this afternoon for something restorative. Enter the week from a position of strength.",
        evening: "Sunday evening with power to spare. You are about to start a week with more energy than most people have at their peak. Do not squander it on worry. Plan how you will deploy your best energy tomorrow. Then rest. The plan will keep.",
        night: "Sunday night with untapped energy. Monday will demand this power. Make sure it goes to the right things. What is your highest priority tomorrow? Decide now. Give it your first energy, not your leftover energy. Sleep well. Wake up ready to strike."
      },
      midweek: {
        morning: "Midweek morning with strong energy. Most people are dragging by now. You are not. That is an advantage. What could you accomplish today that tired you would never attempt? The energy is here. Use it for something that matters.",
        afternoon: "Midweek afternoon with energy reserves. You are outpacing the week. Do not coast. What is the most important thing you could do between now and Friday? You have the fuel to do it well. Deploy your power on your priorities.",
        evening: "Midweek evening and you still have power. The week is half over and you are not half depleted. That is a win. Before tomorrow, decide how to use this advantage. Energy without direction is just restlessness. Aim it.",
        night: "Midweek night with untapped energy. You have capacity others do not. But capacity for what? Before you sleep, clarify what deserves your energy tomorrow. Do not let the urgent steal from the important. You have the power to choose. Choose well."
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
        afternoon: "Monday afternoon with all systems green. The week has begun and you are thriving. Protect this state at all costs. Say no to anything that would disrupt it. This is the compound zone. Every hour here builds on the last. Stay in it.",
        evening: "Monday evening with full autonomy intact. You made it through day one without depletion. That is the model. Before tomorrow, note what you protected. What you said no to. What you prioritized. This is your formula. Repeat it.",
        night: "Monday night with everything working. The week is young and you are strong. Do not let late night screens steal tomorrow's energy. Sleep is part of the strategy. Tomorrow you could have another day like today. That compounds into a transformed week."
      },
      friday: {
        morning: "Friday morning with full autonomy. You made it through the week in the optimal zone. That is exceptional. Today is not for coasting. Today is for leverage. What could you accomplish with this energy that would compound over the weekend? Do that.",
        afternoon: "Friday afternoon with everything aligned. The week did not break you. It fed you. Before you enter the weekend, document what worked this week. The conditions, the choices, the boundaries. This is your playbook. You will want it again.",
        evening: "Friday evening with all systems green. The week is ending and you are ending strong. That is exactly right. The weekend is your reward. But also your opportunity. Full autonomy continues. What will you create with it?",
        night: "Friday night with full autonomy. You won the week. Not by surviving. By thriving. Enjoy this. Rest well. Let the weekend be spacious. You earned space by not depleting yourself. This is the sustainable path."
      },
      saturday: {
        morning: "Saturday morning with everything working. Energy, space, options, freedom. The weekend stretches ahead with no constraints. This is what you have been building toward. Do not fill it with obligations. Fill it with whatever calls to you.",
        afternoon: "Saturday afternoon with full autonomy. This is the life you are designing. Not just weekends, but weekdays too. Enjoy it. Notice how it feels. Remember this feeling when you make decisions about what to say yes to. Protect the conditions that created this.",
        evening: "Saturday evening with all systems green. Tomorrow is Sunday and you will have another day like today. That is abundance. Do not take it for granted. Also do not waste it on anxiety about Monday. Monday you will be ready. Enjoy tonight.",
        night: "Saturday night with full autonomy. The weekend is half over but you are not half depleted. You are full. Sleep well. Tomorrow is another day of freedom. Let it be whatever it wants to be."
      },
      sunday: {
        morning: "Sunday morning with everything working. Most people spend Sunday anxious about Monday. You do not have to. Your reserves are full. Your mind is clear. Your options are open. Spend today in that abundance. Monday will be fine because you are fine.",
        afternoon: "Sunday afternoon with full autonomy. The week ahead does not threaten you. You are entering it from strength, not survival. Use this afternoon for something that matters to you. Not preparation. Not anxiety. Something that feeds your soul.",
        evening: "Sunday evening with all systems green. Monday is tomorrow and you are ready. Not defensively ready. Offensively ready. You have the energy to create, the space to think, the options to choose, the freedom to act. Sleep well. Tomorrow you deploy.",
        night: "Sunday night with everything aligned. The week is about to begin and you are in the optimal zone. Do not sabotage this with late night scrolling. Protect your sleep. Tomorrow is an opportunity. Full autonomy means you get to use it well. Rest."
      },
      midweek: {
        morning: "Midweek morning with full autonomy. Most people are depleted by now. You are thriving. That is the difference between sustainable systems and willpower. You built the system. Now it is carrying you. Keep doing what you are doing.",
        afternoon: "Midweek afternoon with everything working. The week is half over and you are not half depleted. You are fully charged. What would you attempt if you knew you could not fail? You have the energy to try. The space to think. The freedom to fail. Try.",
        evening: "Midweek evening with all systems green. The week curves toward the weekend and you are riding high. Protect this. What threatened your autonomy earlier this week? What almost drained you? Stay vigilant. The optimal zone requires defense.",
        night: "Midweek night with full autonomy. Half the week is done. Half your capacity remains. That is the goal. Not depletion. Capacity. Tomorrow, use it on something that matters. The energy you have is not normal. Spend it on something important."
      }
    }
  },

  // SHAPE: Crashed (all low) (day-aware)
  crashed: {
    condition: (p) => p.shape === 'crashed',
    label: "✗ SYSTEM FAILURE",
    messages: {
      monday: {
        morning: "Monday morning with all systems failing. Energy depleted, mind cluttered, options limited, constraints heavy. This is not a productivity problem. This is a life problem. Do not try to optimize your way out. Today is about one thing: what do you need? Give it to yourself.",
        afternoon: "Monday afternoon in system failure. The week just started and everything is already wrong. Stop pushing. Pushing makes this worse. What is the minimum viable Monday? Do only that. Protect whatever remains. The goal is to survive today, not win it.",
        evening: "Monday evening with everything crashing. The week ahead looks impossible from here. It is not. But you cannot see that yet. Tomorrow will be different if tonight is different. Rest. Real rest. Not distraction. Rest. Everything else waits.",
        night: "Monday night with full system failure. The week is barely started and you are already broken. Do not set goals for tomorrow. Set boundaries. Minimum work. Maximum rest. Rebuild the foundation before you build anything else."
      },
      friday: {
        morning: "Friday morning with all systems down. You made it to Friday but at what cost. Today is not for catching up. Today is for letting go. What can you drop? What can wait until next week? Your only job is to make it to the weekend intact.",
        afternoon: "Friday afternoon in system failure. The week won. This time. But the weekend is coming. Do not fill it with recovery tasks. Fill it with nothing. Emptiness is what you need. Space to breathe. Permission to not perform.",
        evening: "Friday evening with everything crashed. The week is over. Let it be over. Whatever did not get done is now next week's problem. Your problem is recovery. The weekend is not for catching up. It is for healing.",
        night: "Friday night with full system failure. The week broke you. Acknowledge that. Do not pretend it did not. Tomorrow is Saturday. You have 48 hours to rebuild. Sleep is step one. Everything else comes after. Rest."
      },
      saturday: {
        morning: "Saturday morning with all systems failing. Even the weekend starts in deficit. Today is not for productivity. Today is for survival. What do you need that you have not been getting? Rest? Connection? Silence? Give it to yourself. Today. Now.",
        afternoon: "Saturday afternoon in system failure. The weekend should be restoring you but you are still crashed. What is blocking recovery? Name it. Is it guilt? Obligation? Anxiety? Name it so you can address it. You cannot heal what you will not acknowledge.",
        evening: "Saturday evening with everything down. Tomorrow is your last day before the cycle restarts. You are not recovered. Tomorrow needs to be different. No obligations. No shoulds. Just whatever actually restores you. Plan that now.",
        night: "Saturday night with full system failure. One day until Monday. You are not ready. That is okay. Ready is not the goal right now. Stable is the goal. Tomorrow, protect yourself from anything that drains. Only allow what restores. Sleep now."
      },
      sunday: {
        morning: "Sunday morning with all systems crashed. The week is about to start and you are broken. Do not try to prepare for the week. Try to survive until the week. What would actual rest look like today? Not catching up. Resting. Do that.",
        afternoon: "Sunday afternoon in system failure. Monday is coming and you have nothing left. Lower every expectation. For today. For tomorrow. For the whole week if needed. You cannot perform your way out of burnout. You can only rest out of it.",
        evening: "Sunday evening with everything down. Monday is hours away and you are still crashed. This is a crisis. Treat it like one. What is the absolute minimum you must do tomorrow? Only that. Everything else gets cancelled, delegated, or delayed. Survival mode.",
        night: "Sunday night with full system failure. The week starts tomorrow and you are empty. You cannot fix this tonight. But you can stop making it worse. Sleep. Not screens. Not worry. Sleep. Tomorrow will come either way. Meet it rested."
      },
      midweek: {
        morning: "Midweek morning with all systems failing. You started the week with something and it is gone. What happened? What drained you? Identify it specifically because it will happen again if you do not. Today is damage control. Minimum output. Maximum protection.",
        afternoon: "Midweek afternoon in system failure. The week has broken you at the halfway point. Do not push to Friday. Push to tonight. Just tonight. What is the bare minimum to survive until evening? Do that. Only that. Then reassess.",
        evening: "Midweek evening with everything crashed. Tomorrow is another day and you have nothing left for it. The week might be lost. That is okay. Weeks can be lost. You cannot be. Protect yourself tonight. Tomorrow, set the bar as low as it needs to be.",
        night: "Midweek night with full system failure. The week is half over and you are fully depleted. This is not sustainable. Something fundamental needs to change. But not tonight. Tonight is for rest. Tomorrow is for deciding what has to change. One thing at a time."
      }
    }
  },

  // SHAPE: Plateau (mid, balanced) (day-aware)
  plateau: {
    condition: (p) => p.shape === 'plateau',
    label: "⚖ HOLDING STEADY",
    messages: {
      monday: {
        morning: "Monday morning on the plateau. Stable but not growing. The week ahead will look like last week unless something changes. What one lever could you push today? More energy? More space? Fewer constraints? Pick one. Push it. Plateaus do not break themselves.",
        afternoon: "Monday afternoon holding steady. The week has started and it feels familiar. Maybe too familiar. What would make this week different from last week? Not a revolution. A small change. Identify it now while Monday is young.",
        evening: "Monday evening on the plateau. Day one is ending and it felt like every other day one. Before Tuesday, ask yourself: is this where you want to stay? If not, what would you change? You have four days left to make this week different.",
        night: "Monday night holding steady. The week is predictable from here. That is safe. It is also stagnant. Before you sleep, consider: what risk could you take this week that would break the pattern? Small risks compound. What is yours?"
      },
      friday: {
        morning: "Friday morning on the plateau. The week happened. Nothing broke. Nothing grew. Is that enough? Before the weekend, ask what would have made this week exceptional. That answer is your homework for next week.",
        afternoon: "Friday afternoon holding steady. Another week in the middle. Not failing. Not thriving. The weekend is coming. Will it be a plateau too? Or will you use it to prepare for something different next week?",
        evening: "Friday evening on the plateau. The week maintained. You maintained. But maintaining is not building. The weekend is a reset. Use it to think about what you actually want. Not what is safe. What you want.",
        night: "Friday night holding steady. The week is over and it felt like every other week. That is either comforting or concerning. Only you know which. Before you rest, decide: same thing next week or something different?"
      },
      saturday: {
        morning: "Saturday morning on the plateau. Even the weekend feels stable. Familiar. But the weekend is for breaking patterns, not repeating them. What would shake things up today? Not drastically. Just enough to feel different.",
        afternoon: "Saturday afternoon holding steady. The weekend is passing like the weeks pass. Steady. Comfortable. Is that what you want? If not, what would you change? You have time to experiment today.",
        evening: "Saturday evening on the plateau. Tomorrow is Sunday. Another stable day ahead. Unless you decide otherwise. What would make tomorrow memorable instead of forgettable? Something is calling to you. What is it?",
        night: "Saturday night holding steady. The weekend is half over and nothing has changed. That is fine if you chose it. But did you choose it? Or did you just let it happen? Sunday is still available. Use it intentionally."
      },
      sunday: {
        morning: "Sunday morning on the plateau. The week ahead will look like the week behind unless you intervene. Today is your chance to plan the intervention. Not a big one. A small lever that could shift everything. What is it?",
        afternoon: "Sunday afternoon holding steady. Monday is coming and it feels predictable. But predictions can be wrong. What would surprise you this week? What would you have to do for that surprise to happen? Consider doing that.",
        evening: "Sunday evening on the plateau. The week is about to begin and you know exactly how it will go. That certainty might be a prison. What if you did one thing differently tomorrow? Just one. See what happens.",
        night: "Sunday night holding steady. Monday is hours away and it looks identical to last Monday. But you do not have to accept that. Tomorrow morning, do one thing you did not do last week. Break the plateau. Start small."
      },
      midweek: {
        morning: "Midweek morning on the plateau. The week is unfolding exactly as expected. No crises. No breakthroughs. Just steady. Is steady enough? If not, today is your chance to push. The week is half written. Write the second half differently.",
        afternoon: "Midweek afternoon holding steady. You are in the middle of another average week. Average is safe. Average is also forgettable. What would make the rest of this week above average? You have time to change trajectory.",
        evening: "Midweek evening on the plateau. The week will end like it began unless something shifts. What would you regret not trying by Friday? That thing. Consider starting it tomorrow. Plateaus break when you push.",
        night: "Midweek night holding steady. Half the week is gone. Half remains. Same as always. Unless you choose differently. Before you sleep, pick one thing to do differently tomorrow. Not everything. One thing. See what shifts."
      }
    }
  },

  // SHAPE: Lopsided (fallback) (day-aware)
  lopsided: {
    condition: (p) => p.shape.startsWith('lopsided'),
    label: "⚖ IMBALANCED",
    messages: {
      monday: {
        morning: "Monday morning with imbalanced autonomy. Strong in some areas, weak in others. The week will expose the weak spots. Before it does, identify them yourself. What is your lowest score? That is where your attention belongs today. Not your strength. Your weakness.",
        afternoon: "Monday afternoon with uneven autonomy. Your strengths are carrying your weaknesses. That works short term. It fails long term. What is draining you that your advantages cannot offset? That is the thing to address this week.",
        evening: "Monday evening imbalanced. The week has begun and the cracks are already showing. Before Tuesday, look at where you are weak. Energy? Space? Options? Constraints? Pick the worst one. Tomorrow, focus there.",
        night: "Monday night with lopsided autonomy. You made it through day one but something is off. The imbalance will get worse before it gets better unless you address it. What is your weakest link? Write it down. Start fixing it tomorrow."
      },
      friday: {
        morning: "Friday morning with imbalanced autonomy. The week is ending and the imbalance is clear. Your strength kept you afloat. Your weakness kept you struggling. Before next week, plan how to address the gap.",
        afternoon: "Friday afternoon uneven. The week revealed what is working and what is not. The weekend is for recovery, but also for reflection. What needs to change for next week to be more balanced?",
        evening: "Friday evening imbalanced. The week is over and the pattern is clear. One area is strong. Another is failing. You cannot ignore the failing part forever. Use the weekend to think about how to shore it up.",
        night: "Friday night with lopsided autonomy. The week exposed the imbalance. Now you know. The question is what you will do about it. Rest tonight. But before next week, make a plan for your weakest area."
      },
      saturday: {
        morning: "Saturday morning with imbalanced autonomy. Even the weekend feels uneven. What is your weak spot? Energy? Mental space? Options? Freedom? Today, give some attention to whichever is lowest. Balance requires intention.",
        afternoon: "Saturday afternoon uneven. Your strength is obvious. Your weakness is hidden but present. What would address your weakest area today? Not completely fix it. Just address it. Small moves toward balance.",
        evening: "Saturday evening imbalanced. Tomorrow is Sunday. Another chance to work on balance. What would move your lowest score up even slightly? That is your focus for tomorrow. Not your strength. Your weakness.",
        night: "Saturday night with lopsided autonomy. The weekend is half over. Have you addressed your weak spot at all? If not, tomorrow is your chance. Balance does not happen by accident. It happens by attention."
      },
      sunday: {
        morning: "Sunday morning with imbalanced autonomy. The week ahead will stress your weak spots. Before it does, strengthen them. What would give you more energy? More space? More options? Less constraint? Pick the one you need most.",
        afternoon: "Sunday afternoon uneven. Monday is coming and your imbalance is coming with it. This afternoon is for shoring up your weakest area. Not your whole life. Just the weakest part. What would help?",
        evening: "Sunday evening imbalanced. The week starts tomorrow and your strength will carry you. But your weakness will drag you. Before the week begins, do one thing to address your lowest score. Just one thing.",
        night: "Sunday night with lopsided autonomy. You know where you are strong. You know where you are weak. The week will test both. Before you sleep, set one intention for addressing your weak spot tomorrow. Balance starts with attention."
      },
      midweek: {
        morning: "Midweek morning with imbalanced autonomy. The week is exposing your weak spots exactly as expected. Your strength is holding. Your weakness is showing. Today, give attention to what is failing. Not just what is working.",
        afternoon: "Midweek afternoon uneven. You are compensating for your weakness with your strength. That is exhausting. What would actually address the imbalance? Not work around it. Address it. Consider that for the rest of the week.",
        evening: "Midweek evening imbalanced. The week is half over and the pattern is clear. Strong where you are always strong. Weak where you are always weak. Tomorrow, try something different. Break the pattern. Focus on your weakness.",
        night: "Midweek night with lopsided autonomy. Half the week is done. The imbalance persists. It will persist next week too unless you address it. Before you sleep, name your weakest area. Tomorrow, give it more attention than your strength."
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
        morning: "Monday morning with depth at scale. You achieved what most never will: genuine impact at massive reach. The week ahead is not about growing. It is about protecting. What you have is rare and fragile. Guard it.",
        afternoon: "Monday afternoon at the peak. Millions of people and they actually feel your work. Do not optimize this away. The algorithm will tempt you to water it down. Do not. The depth is the point.",
        evening: "Monday evening with depth at scale. Day one is ending. You are where everyone wants to be. But it is also where it is easiest to lose yourself. Before tomorrow, remember why this works. Stay true to that.",
        night: "Monday night with rare achievement. The week has four more days. You could coast on these numbers. But coasting erodes depth. Make something this week that proves you are still an artist, not just a brand."
      },
      friday: {
        morning: "Friday morning with depth at scale. The week is ending and you maintained the magic. That is the job now. Maintenance. Not growth. Protection. The depth is what matters. Keep it.",
        afternoon: "Friday afternoon at the peak. The week went well. But success at this level creates new temptations. Broader appeal. Safer content. Resist. The depth is why they came. The depth is why they stay.",
        evening: "Friday evening with scale and soul intact. The week is over. You made it through without losing yourself. That is victory at this level. The weekend is for remembering what matters. Not the numbers. The work.",
        night: "Friday night with depth at scale. The week is done. You have what most creators dream of. Are you still making what you would make if no one was watching? That question keeps you honest. Keep asking it."
      },
      saturday: {
        morning: "Saturday morning with rare achievement. Depth at massive scale. The weekend is not for planning growth. It is for appreciating what you built. And recommitting to the truth that built it.",
        afternoon: "Saturday afternoon at the peak. You could be anywhere. Do anything. What do you want to make that has nothing to do with performance? That thing is probably important. Consider making it.",
        evening: "Saturday evening with depth at scale. Tomorrow is Sunday. The week ahead will bring opportunities to dilute. Opportunities to optimize. Remember: the depth is the asset. Everything else is noise.",
        night: "Saturday night with scale and soul. The week ahead does not need more growth. It needs more depth. Before you sleep, ask: what would my younger self think of my current work? Make them proud."
      },
      sunday: {
        morning: "Sunday morning with depth at scale. The week starts tomorrow. You will reach millions. Will you move them? The reach is handled. The depth requires intention. Intend depth this week.",
        afternoon: "Sunday afternoon at the peak. Monday is coming. Everyone will want something from you. Before the noise begins, remember why you started. That reason is still the point. Everything else is distraction.",
        evening: "Sunday evening with rare achievement. The week ahead is an opportunity to prove you are still you. Not a brand. Not an algorithm. You. Make something this week that reminds everyone, including yourself.",
        night: "Sunday night with depth at scale. Tomorrow you create again. This time, create like the numbers do not matter. Because at your level, they do not. Legacy matters. Meaning matters. That is what you protect."
      },
      midweek: {
        morning: "Midweek morning with depth at scale. Half the week is gone. Have you maintained the depth? Or have you drifted toward safety? Today, make something risky. Prove the depth is still there.",
        afternoon: "Midweek afternoon at the peak. The week is slipping by. Before Friday, create something that has nothing to do with performance. Something true. The depth is what you protect. Protect it today.",
        evening: "Midweek evening with scale and soul. Tomorrow is another chance. What would you make if the algorithm rewarded depth instead of engagement? Make that anyway. Your audience will follow.",
        night: "Midweek night with rare achievement. The week is half over. You reached millions. Did you move any of them? The remaining days are for depth. One piece that matters more than ten that perform."
      }
    }
  },

  // BOTTLENECK: Impact
  impact_bottleneck: {
    condition: (p) => p.bottleneck.name === 'impact' && p.raw.impact <= 4,
    label: "👁 SEEN NOT FELT",
    messages: {
      monday: {
        morning: "Monday morning with low impact. Your work is being seen but not felt. The week ahead offers a chance to change that. Before you create anything today, ask: what truth have I been avoiding? That truth is where impact lives. Not in polish. In honesty.",
        afternoon: "Monday afternoon and still no resonance. The week is young. You have time to make something that matters. What would you create if you stopped worrying about how it would perform? That thing. Make that thing.",
        evening: "Monday evening with work that does not land. Day one is ending. Did you make anything that moved you today? If not, tomorrow is different. Before you sleep, write down one thing you believe that you have not said publicly. Start there tomorrow.",
        night: "Monday night with low impact. The week stretches ahead. Four more days to create something that matters. What would make you proud regardless of metrics? That is the work. Not what performs. What matters."
      },
      friday: {
        morning: "Friday morning with low impact. The week is ending and nothing landed. That is data, not failure. What did you avoid saying this week? What felt too risky to share? The weekend is for reflection. Find the thing you held back.",
        afternoon: "Friday afternoon and still not resonating. The week did not produce impact. But the weekend can produce clarity. What would you create if no one would judge you? Write that down. Maybe make it next week.",
        evening: "Friday evening with work that did not land. The week is over. Let it go. But before you do, ask: what truth did I avoid? What vulnerability did I protect? That is where next week's impact lives.",
        night: "Friday night with low resonance. The week is done. Rest now. But this weekend, study what moves YOU. What makes you stop scrolling? What do you save? That is the standard. Your work needs to meet it."
      },
      saturday: {
        morning: "Saturday morning with low impact. The weekend is for consuming what resonates. Study it. What makes other work hit? Not the techniques. The truth underneath. That truth is what your work is missing.",
        afternoon: "Saturday afternoon reflecting on impact. Your work is competent but forgettable. What would make it unforgettable? Not louder. Not more frequent. More true. What truth would make someone stop and feel?",
        evening: "Saturday evening thinking about resonance. Tomorrow is Sunday. A day for deeper thinking. What do you believe that you have not said? What experience do you have that you have not shared? Impact lives in specificity.",
        night: "Saturday night with low impact. The week ahead needs to be different. Before you sleep, consider: who specifically needs your work? Not everyone. Someone. Picture that person. What do they need to hear?"
      },
      sunday: {
        morning: "Sunday morning with low impact. The week ahead is unwritten. What would you say if you only had one piece of content this week? Not the safest thing. The truest thing. Consider making only that.",
        afternoon: "Sunday afternoon planning for impact. Monday is coming. What will be different? Not more content. Different content. What have you been circling around but not saying? That is your Monday morning priority.",
        evening: "Sunday evening with resonance on your mind. The week starts tomorrow. You know what safe content looks like. It looks like last week. What would risky content look like? Something that might fail but might matter?",
        night: "Sunday night thinking about impact. Tomorrow you create again. This time, create something that scares you slightly. Not reckless. Just honest. The fear you feel about sharing something is usually proportional to its importance."
      },
      midweek: {
        morning: "Midweek morning with low impact. Half the week is gone and nothing has landed. You have time to change that. Today, make one thing that is more vulnerable than usual. See what happens.",
        afternoon: "Midweek afternoon still not resonating. The week is slipping by. Before Friday, create something that reveals more than you normally reveal. Impact requires vulnerability. You have been protecting yourself.",
        evening: "Midweek evening with work that does not land. Tomorrow is another chance. What would you say if you knew your audience needed to hear exactly one thing? Not what they want. What they need. Say that.",
        night: "Midweek night with low impact. The week is half over. Two or three days remain. What could you create by Friday that would actually matter? Not perform. Matter. Start it tomorrow morning."
      }
    }
  },

  // BOTTLENECK: Identity
  identity_bottleneck: {
    condition: (p) => p.bottleneck.name === 'identity' && p.raw.identity <= 4,
    label: "🎯 NO TARGET",
    messages: {
      monday: {
        morning: "Monday morning with no clear audience. You are creating for everyone, which means no one feels like it is for them. Before you make anything today, describe one specific person. Not a demographic. A human. Their frustration. Their dream. Make for them.",
        afternoon: "Monday afternoon without a target. The week is starting scattered. Who specifically would miss your work if you stopped? Picture that person. What do they need that no one else is making? Make that.",
        evening: "Monday evening with generic appeal. Day one is ending. Did you make anything for someone specific? If not, tomorrow is different. Write down: this is for people who blank but secretly blank. Fill in those blanks. That is your target.",
        night: "Monday night with no identity fit. The week has four more days. You can find your audience in that time. Not a large audience. Your audience. Ten people who need exactly what you make. Who are they?"
      },
      friday: {
        morning: "Friday morning with no clear target. The week is ending and your work reached no one specifically. That is the problem. The weekend is for clarity. Who would mourn if you stopped creating? Those people are your audience.",
        afternoon: "Friday afternoon without a niche. The week scattered into the void. Before the weekend, write down the one person who needs your work most. Not wants. Needs. Make next week for that person.",
        evening: "Friday evening with generic appeal. The week is over. Rest. But this weekend, study your best work. What did it have in common? Who responded? That pattern is your audience. Follow it.",
        night: "Friday night with no identity fit. The week is done. Use the weekend to get specific. Riches are in niches. Who is your niche? Not everyone. Not most people. Your people. Define them."
      },
      saturday: {
        morning: "Saturday morning thinking about audience. Who specifically needs what you make? Not everyone. Someone. Today, think about that person. Their life. Their problems. Their secret frustrations. Know them so well you can predict their reactions.",
        afternoon: "Saturday afternoon without a target. The weekend is for clarity. Write down ten characteristics of your ideal audience member. Not age and location. Fears and dreams. That is who you make for.",
        evening: "Saturday evening considering identity fit. Tomorrow is Sunday. Time for deeper thinking. What group of people feels invisible to the mainstream? What do they need that no one is making? Maybe you should make it.",
        night: "Saturday night with no clear audience. The week ahead needs focus. Before you sleep, answer: who would understand my work better than anyone? That small group is your audience. Everyone else is a bonus."
      },
      sunday: {
        morning: "Sunday morning with identity on your mind. The week starts tomorrow. Who is it for? Not vaguely. Specifically. What would you make if you were making it for exactly one person who desperately needed it?",
        afternoon: "Sunday afternoon planning for specificity. Monday is coming. This week, try creating for a smaller audience. Not broader. Smaller. Deeper. What would you make for just 100 people who would love it completely?",
        evening: "Sunday evening thinking about targeting. The week ahead is an opportunity. What if you niched down radically? Spoke to fewer people but spoke directly to them? That might be scarier. It would also be more effective.",
        night: "Sunday night considering identity fit. Tomorrow you create again. This time, picture one person. Give them a name. Know their struggles. Make for them. Not the algorithm. Not the masses. One person."
      },
      midweek: {
        morning: "Midweek morning with no clear target. Half the week is gone and you have been making for everyone. That means no one. Today, pick a specific audience. Make something just for them. See how it feels.",
        afternoon: "Midweek afternoon without a niche. The week is slipping by. Before Friday, answer: who is this actually for? Not who might like it. Who needs it. That specificity changes everything.",
        evening: "Midweek evening with generic appeal. Tomorrow is another chance. What if you created something that only 50 people would understand but those 50 would feel seen? That is worth more than 5000 casual viewers.",
        night: "Midweek night with no identity fit. The week is half over. You have been trying to reach everyone. Try the opposite. Tomorrow, make for someone specific. Real. Knowable. That is where resonance begins."
      }
    }
  },

  // BOTTLENECK: Boldness
  boldness_bottleneck: {
    condition: (p) => p.bottleneck.name === 'boldness' && p.raw.boldness <= 4,
    label: "🛡 PLAYING SAFE",
    messages: {
      monday: {
        morning: "Monday morning playing it safe. The week ahead will look like last week if you make the same safe choices. What would you create today if no one would judge you? If failure was impossible? That thing. Start that thing.",
        afternoon: "Monday afternoon still playing safe. The week is young. You have time to take a risk. What opinion do you hold that others in your space do not? What would you say if you were not worried about the reaction? Say it.",
        evening: "Monday evening with low boldness. Day one is ending. Did you take any creative risks today? If not, tomorrow is different. Before you sleep, identify the scary project you have been avoiding. Start it tomorrow.",
        night: "Monday night playing it safe. The week has four more days. What bold move have you been putting off? The one that makes your stomach tighten? That is the one that matters. Plan it for tomorrow."
      },
      friday: {
        morning: "Friday morning still playing safe. The week is ending and you took no risks. That is understandable. But it is also why nothing changed. The weekend is for reflection. What risk would you take if you had permission?",
        afternoon: "Friday afternoon with low boldness. The week played out safely. Before the weekend, consider: what would you create if your reputation could not be damaged? That thing is probably important.",
        evening: "Friday evening playing it safe. The week is over. You survived. But surviving is not thriving. This weekend, think about what you would make if you stopped being afraid. That fear is pointing somewhere.",
        night: "Friday night with low boldness. The week was safe. Safe is forgettable. The weekend is for asking: what scares me creatively? That fear is data. It is showing you where your growth lives."
      },
      saturday: {
        morning: "Saturday morning thinking about risk. What would bold look like for you? Not reckless. Bold. The thing that makes you uncomfortable but excited. The weekend is for considering it. Maybe starting it.",
        afternoon: "Saturday afternoon playing it safe. Even your weekend is safe. What would you experiment with if the experiment could not fail? If no one was watching? Consider trying that today.",
        evening: "Saturday evening with boldness on your mind. Tomorrow is Sunday. What project have you been talking yourself out of? The one that feels too weird, too personal, too risky? That is probably the one.",
        night: "Saturday night thinking about risk. The week ahead could be different. Before you sleep, write down one bold thing you could do next week. Not huge. Just bolder than usual. See if you can do it."
      },
      sunday: {
        morning: "Sunday morning considering boldness. The week starts tomorrow. Will it be another safe week? Or will you try something different? What is the one risky thing you could do Monday? Name it.",
        afternoon: "Sunday afternoon thinking about risk. Monday is coming. You have a choice. More of the same. Or something bold. What would you create if you knew you could not be cancelled for it? Consider making that.",
        evening: "Sunday evening with low boldness. The week ahead is an opportunity. Safe work is forgettable work. What would make you memorable? Not famous. Memorable to the right people. That requires risk.",
        night: "Sunday night playing it safe. Tomorrow is Monday. The week is unwritten. What if you did one thing this week that scared you? Just one. The resistance you feel right now is proportional to its importance."
      },
      midweek: {
        morning: "Midweek morning still playing safe. Half the week is gone and you took no risks. You still have time. What is one thing you could do today that would be bolder than usual? Do it. See what happens.",
        afternoon: "Midweek afternoon with low boldness. The week is slipping by safely. Before Friday, take one creative risk. Not a big one. A small one. Something that makes your heart beat slightly faster.",
        evening: "Midweek evening playing it safe. Tomorrow is another chance. What would you post if you were not afraid of judgment? That thing. Consider posting it. The fear is the signal.",
        night: "Midweek night with low boldness. The week is half over. No risks yet. Two or three days remain. What could you create by Friday that would surprise people? Not shock. Surprise. Something true that you have been hiding."
      }
    }
  },

  // BOTTLENECK: Intimacy (large audience dilution)
  audience_dilution: {
    condition: (p) => p.isLargeAudience && p.bottleneck.name === 'intimacy',
    label: "📢 SCALE VS SOUL",
    messages: {
      monday: {
        morning: "Monday morning with a large audience but thinning connection. The week ahead is a choice: more reach or more depth? Before you create today, remember why they followed you in the first place. Not the algorithm. The original magic. Make from there.",
        afternoon: "Monday afternoon at scale. The numbers are good but the feeling is fading. What would you create today if you only had 100 followers? That intimacy you had at the start. Can you recapture it at scale? Try.",
        evening: "Monday evening with mass audience. Day one is ending. Did you connect with anyone specifically today? Not broadcast. Connect. Tomorrow, reach out to one follower personally. Remember they are humans, not metrics.",
        night: "Monday night at scale. The week has four more days. You can reach millions but are you touching anyone? Before you sleep, remember: depth beats breadth. Always. What would depth look like this week?"
      },
      friday: {
        morning: "Friday morning with scale versus soul. The week is ending. You reached many. Who did you actually connect with? The weekend is for remembering why this matters. Not the numbers. The impact on real humans.",
        afternoon: "Friday afternoon at mass scale. The week performed well. But performance is not connection. Before the weekend, have one real conversation with someone who follows you. Not a broadcast. A conversation.",
        evening: "Friday evening with a large audience. The week is over. The metrics look good. But metrics are shadows of meaning. This weekend, think about what your day one fans would want from you. Make more of that.",
        night: "Friday night at scale. The week is done. You reached more people than most will ever reach. Did you move any of them? The weekend is for remembering that one moved person matters more than a million scrollers."
      },
      saturday: {
        morning: "Saturday morning thinking about scale. Your audience is large. Is it deep? Today, instead of thinking about growth, think about depth. What would make your existing audience feel more connected? Do that.",
        afternoon: "Saturday afternoon with mass reach. The numbers are impressive. But numbers do not feel anything. What would you create if you wanted someone to cry? To laugh out loud? To send it to their best friend? That is depth.",
        evening: "Saturday evening at scale. Tomorrow is Sunday. Time to reflect on what matters. Not reach. Resonance. What made your early work resonate? Before you had an audience? That thing is still the point.",
        night: "Saturday night with a large audience. The weekend is for perspective. You have reach most creators dream of. Are you using it for depth or just more reach? The answer shapes your legacy."
      },
      sunday: {
        morning: "Sunday morning with scale on your mind. The week starts tomorrow. Will it be about growing the audience or deepening it? Both are valid. But depth compounds in ways reach cannot. Consider that.",
        afternoon: "Sunday afternoon thinking about connection. Monday is coming. You can broadcast to millions. But what if you created like you were talking to one person? The best large creators never lost that intimacy. Can you find it again?",
        evening: "Sunday evening at mass scale. The week ahead is an opportunity. Not for more reach. For more meaning. What would your most loyal followers want from you? Not the casual ones. The true fans. Serve them.",
        night: "Sunday night with a large audience. Tomorrow you create again. This time, create like you have 100 followers who would notice if you stopped. That intimacy. That care. Scale has not changed what matters. Depth still wins."
      },
      midweek: {
        morning: "Midweek morning with scale versus soul. Half the week is gone. You have broadcast. Have you connected? Today, make something for your day one fans. The ones who found you before you were big. What do they need?",
        afternoon: "Midweek afternoon at mass reach. The week is slipping by in broadcasts. Before Friday, have one real interaction. Reply deeply to someone. Remember that behind every follow is a human who chose you.",
        evening: "Midweek evening with a large audience. Tomorrow is another chance. What would you make if metrics did not exist? If only the work and the people mattered? That clarity might change what you create.",
        night: "Midweek night at scale. The week is half over. You have reached many. Have you moved anyone? The remaining days are a chance to prioritize depth. One piece that matters more than ten that perform."
      }
    }
  },

  // STRENGTH: Small audience advantage
  small_audience_strength: {
    condition: (p) => p.isSmallAudience && p.raw.impact >= 6,
    label: "💎 INTIMATE POWER",
    messages: {
      monday: {
        morning: "Monday morning with a small but powerful audience. You have what large creators envy: you can know each person. The week ahead is for deepening, not broadening. Who can you reach out to personally today? Do that.",
        afternoon: "Monday afternoon with intimate power. Your audience is small and that is a strength. What do they specifically need that no one else is making? Ask them. Literally ask. You can still do that. Use it.",
        evening: "Monday evening with a small audience. Day one is ending. Did you talk to any of your followers directly? You have the ability to know them by name. That is worth more than millions of strangers.",
        night: "Monday night with intimate reach. The week has four more days. Your small audience is not a limitation. It is a laboratory. You can experiment, fail, adjust. No one is watching but the people who care. Use that freedom."
      },
      friday: {
        morning: "Friday morning with intimate power. The week is ending and your small audience stayed with you. That loyalty is everything. Before the weekend, thank one person who has been there. Not publicly. Personally.",
        afternoon: "Friday afternoon with a small but mighty following. The week showed you who your people are. The weekend is for appreciating them. Not chasing new followers. Appreciating the ones you have.",
        evening: "Friday evening with intimate reach. The week is over. Your audience is small and real. That is rare. Protect it. Nurture it. Growth will come from depth, not from chasing breadth.",
        night: "Friday night with a small audience. The week is done. You do not have millions but you have something better: people who genuinely care. The weekend is for remembering that quality beats quantity. Always."
      },
      saturday: {
        morning: "Saturday morning with intimate power. Your small audience is your strength. Today, think about how you can serve them better. Not reach more people. Serve these people more deeply.",
        afternoon: "Saturday afternoon with a small following. You can reply to everyone. You can know their names. You can ask what they need. How many large creators wish they had that? Use it today.",
        evening: "Saturday evening with intimate reach. Tomorrow is Sunday. What could you create specifically because one follower asked for it? That is the power of small. You can actually respond to individuals.",
        night: "Saturday night with a small audience. The week ahead does not need to be about growth. It can be about depth. What would make your existing followers feel seen? Plan that for next week."
      },
      sunday: {
        morning: "Sunday morning with intimate power. The week starts tomorrow. You have something precious: a small group that chose you. What would you make if you were only making it for them? Make that.",
        afternoon: "Sunday afternoon with a small audience. Monday is coming. Instead of chasing growth, what if you chased depth? Made your small audience feel like the most important people in the world? They might be.",
        evening: "Sunday evening with intimate reach. The week ahead is an opportunity to deepen before you widen. The depth creates the foundation. Without depth, width collapses. Serve who you have.",
        night: "Sunday night with a small but powerful audience. Tomorrow you create again. Create like these specific people are watching. Because they are. Not millions of strangers. Your people. That intimacy is your edge."
      },
      midweek: {
        morning: "Midweek morning with intimate power. Half the week is gone. Have you used your superpower? You can reach out personally. You can ask directly. You can know your audience by name. Use that today.",
        afternoon: "Midweek afternoon with a small audience. The week is slipping by. Before Friday, connect with three followers personally. Not broadcast. Connect. Ask what they need. Then make it.",
        evening: "Midweek evening with intimate reach. Tomorrow is another chance. What would you create if you knew exactly who was watching? You do know. Your small audience is knowable. Make for them.",
        night: "Midweek night with a small following. The week is half over. Your audience is small and that is perfect for now. Depth first. Then width. The weekend creators envy you. They just do not know it."
      }
    }
  },

  // STRENGTH: High boldness
  boldness_strength: {
    condition: (p) => p.strength.name === 'boldness' && p.raw.boldness >= 7 && p.average < 7,
    label: "🔥 BOLD BUT UNHEARD",
    messages: {
      monday: {
        morning: "Monday morning bold but unheard. You take risks others avoid. The courage is there. The audience is not. The week ahead needs targeting, not more bravery. Who specifically needs your bold truth? Find them.",
        afternoon: "Monday afternoon with boldness to spare. Your work is fearless but it is firing into the void. Who would be transformed by your message if they heard it? That person exists. Find where they gather.",
        evening: "Monday evening bold but unheard. Day one is ending. Your courage is not the problem. Your aim is. Before tomorrow, get specific: who needs exactly what you are saying? Not everyone. Someone.",
        night: "Monday night with untargeted boldness. The week has four more days. You have the bravery. Now you need the strategy. Who is your audience? Not who might like you. Who needs you? Find them this week."
      },
      friday: {
        morning: "Friday morning bold but unheard. The week is ending and your courage did not find its audience. That is targeting, not talent. The weekend is for getting specific. Who is this for?",
        afternoon: "Friday afternoon with boldness strength. You took risks this week. Did they land? If not, the issue is not the risk. It is the aim. Before the weekend, define your target more precisely.",
        evening: "Friday evening bold but unheard. The week is over. Your fearlessness is an asset most lack. But courage without strategy is just noise. This weekend, plan where to aim your boldness.",
        night: "Friday night with untargeted bravery. The week is done. You have what it takes. You just need to find where it is needed. The weekend is for that question: who specifically needs your boldness?"
      },
      saturday: {
        morning: "Saturday morning bold but unheard. You have courage. Today, work on aim. Where do people who need your message gather? What platforms? What communities? Your boldness needs a home.",
        afternoon: "Saturday afternoon with boldness to spare. The courage is not the problem. The targeting is. What group of people is being told comfortable lies that need your uncomfortable truth? Find them.",
        evening: "Saturday evening bold but unheard. Tomorrow is Sunday. Time to think strategically. Your bravery is rare. Where would it be most valuable? Not everywhere. Somewhere specific.",
        night: "Saturday night with untargeted boldness. The week ahead needs to be different. Before you sleep, answer: if only one type of person heard my work, who should it be? Aim there next week."
      },
      sunday: {
        morning: "Sunday morning bold but unheard. The week starts tomorrow. Your courage is ready. Is your aim ready? Who specifically are you trying to reach? Get precise. Boldness plus targeting is unstoppable.",
        afternoon: "Sunday afternoon with boldness strength. Monday is coming. You will be brave. But will you be strategic? What would happen if you aimed your courage at a specific audience instead of everyone?",
        evening: "Sunday evening bold but unheard. The week ahead is an opportunity. Not for more boldness. For better targeting. Where does your message need to land? Who is waiting for exactly what you say?",
        night: "Sunday night with untargeted bravery. Tomorrow you create again. This time, aim. Not at everyone. At someone. The boldness is not the problem. The precision is. Fix that this week."
      },
      midweek: {
        morning: "Midweek morning bold but unheard. Half the week is gone. Your courage is firing but not landing. Today, focus on targeting. One specific audience. One specific message. Aim your boldness.",
        afternoon: "Midweek afternoon with boldness to spare. The week is slipping by. Before Friday, get specific about who needs your message. Not everyone. The specific people who are waiting for your truth.",
        evening: "Midweek evening bold but unheard. Tomorrow is another chance. What if you combined your courage with precision? Bold AND targeted. That combination is rare. That combination works.",
        night: "Midweek night with untargeted bravery. The week is half over. Your boldness is an asset. Your aim needs work. Before you sleep, write down exactly who needs what you are saying. Tomorrow, reach them."
      }
    }
  },

  // AUDIENCE TIER: Intimate (<1K)
  tier_intimate: {
    condition: (p) => p.audienceTier && p.audienceTier.intimate && p.average >= 5,
    label: "💎 INTIMATE CIRCLE",
    messages: {
      monday: {
        morning: "Monday morning with fewer than 1000 people. That is not a limitation. That is a superpower. You can reply to everyone. You can know their names. Today, reach out to three followers personally. Not to promote. To connect. To learn. This is your unfair advantage.",
        afternoon: "Monday afternoon with an intimate audience. The week is young. What do your followers actually need? You can ask them directly. Literally send a message and ask. Try that today. The answers will shape your week.",
        evening: "Monday evening with a small circle. Day one is ending. Did you talk to any of your people today? You have the ability to have real conversations. Use it before it scales away.",
        night: "Monday night with intimate reach. The week has four more days. Your small audience is a laboratory. You can experiment, fail, adjust without the world watching. That freedom is priceless. Use it this week."
      },
      friday: {
        morning: "Friday morning with fewer than 1000 followers. The week is ending. Did you use your intimacy advantage? Before the weekend, reach out to someone who engaged with you this week. Thank them. Know them.",
        afternoon: "Friday afternoon with a small audience. The week showed you who your people are. You can actually know them. How many large creators wish they had that? Appreciate it.",
        evening: "Friday evening with intimate reach. The week is over. Your audience is small and real. That is rare. The weekend is for appreciating that before chasing growth.",
        night: "Friday night with fewer than 1000 people. The week is done. You do not have millions. You have something better: people you can actually know. Protect that relationship."
      },
      saturday: {
        morning: "Saturday morning with an intimate circle. The weekend is for thinking about these people. Not more people. These people. What do they need? What would delight them? You can find out directly.",
        afternoon: "Saturday afternoon with a small audience. You have access that scales away. Use the weekend to deepen relationships with specific followers. Not all of them. A few real ones.",
        evening: "Saturday evening with intimate reach. Tomorrow is Sunday. What could you create specifically because one follower asked for it? That responsiveness is your edge.",
        night: "Saturday night with fewer than 1000 followers. The week ahead does not need to be about growth. It can be about depth. What would make your existing followers feel like founding members?"
      },
      sunday: {
        morning: "Sunday morning with an intimate circle. The week starts tomorrow. You have something precious: a small group that chose you. Create like you are making it specifically for them. Because you are.",
        afternoon: "Sunday afternoon with a small audience. Monday is coming. Instead of chasing new followers, what if you served existing ones so well they brought new ones? That is sustainable growth.",
        evening: "Sunday evening with intimate reach. The week ahead is an opportunity to build the foundation that scale requires. Depth now creates sustainable width later.",
        night: "Sunday night with fewer than 1000 people. Tomorrow you create again. Create like these specific humans are watching. Because they are. Not strangers. Your people. That intimacy is everything."
      },
      midweek: {
        morning: "Midweek morning with an intimate circle. Half the week is gone. Have you used your superpower? You can message anyone who follows you and they will probably reply. Use that.",
        afternoon: "Midweek afternoon with a small audience. The week is slipping by. Before Friday, ask five followers what they need. Literally ask. Then consider making it.",
        evening: "Midweek evening with intimate reach. Tomorrow is another chance. Your small audience is not a problem to solve. It is an advantage to use. Use it.",
        night: "Midweek night with fewer than 1000 followers. The week is half over. Every large creator started where you are. The ones who won built deep before they built wide. Do that."
      }
    }
  },

  // AUDIENCE TIER: Growing (1K-10K)
  tier_growing: {
    condition: (p) => p.audienceTier && p.audienceTier.growing && p.average >= 5,
    label: "🌱 BUILDING MOMENTUM",
    messages: {
      monday: {
        morning: "Monday morning in the 1K to 10K zone. Past hobby, not yet career. This is the crucial phase. What you do now becomes what you are known for. Today, double down on what is working. Not what you wish was working. What is actually resonating.",
        afternoon: "Monday afternoon building momentum. The week is young. You have traction. Not massive. Real. What would it take to double down on your best performing work? Consider that today.",
        evening: "Monday evening in the growth phase. Day one is ending. Did you lean into what works or scatter into what might work? Tomorrow, focus. The thing that got traction deserves more attention.",
        night: "Monday night with growing momentum. The week has four more days. This is not the time to pivot. This is the time to deepen. What made them follow? Give them more of that."
      },
      friday: {
        morning: "Friday morning in the 1K to 10K zone. The week is ending. Did you build on what works or chase what might? The weekend is for clarity. What actually grew this week? Do more of that.",
        afternoon: "Friday afternoon building momentum. The week showed you what resonates. Before the weekend, note it. What worked? What did not? That data shapes next week.",
        evening: "Friday evening in the growth phase. The week is over. You are not stuck. You are building. Momentum is fragile. Protect it by staying consistent with what works.",
        night: "Friday night with growing audience. The week is done. You have traction that most never find. The weekend is for appreciating that while planning to build on it."
      },
      saturday: {
        morning: "Saturday morning in the 1K to 10K zone. The weekend is for perspective. You are past hobby. Not yet career. What would make this a career? What consistency would that require? Consider it.",
        afternoon: "Saturday afternoon building momentum. The growth is real but fragile. What would protect it? More of what works. Less experimentation. This phase rewards consistency.",
        evening: "Saturday evening in the growth phase. Tomorrow is Sunday. What commitment could you make for next week that would protect your momentum? Consistency beats creativity at this stage.",
        night: "Saturday night with growing audience. The week ahead matters more than you think. This phase is where most people stall. Keep going. The compound is coming if you stay consistent."
      },
      sunday: {
        morning: "Sunday morning in the 1K to 10K zone. The week starts tomorrow. What will you do that keeps the momentum going? Not new experiments. Consistent execution on what already works.",
        afternoon: "Sunday afternoon building momentum. Monday is coming. You have something most people never get: traction. Do not squander it chasing novelty. Deepen what works.",
        evening: "Sunday evening in the growth phase. The week ahead is for building on your foundation. Not reinventing it. What worked last week? Plan to do more of that.",
        night: "Sunday night with growing audience. Tomorrow you create again. This time, create what you know works. The 1K to 10K phase rewards consistency over creativity. Be consistent."
      },
      midweek: {
        morning: "Midweek morning in the 1K to 10K zone. Half the week is gone. Have you been consistent with what works? Or distracted by what might? The rest of the week needs focus.",
        afternoon: "Midweek afternoon building momentum. The week is slipping by. Before Friday, make sure you have done more of what works. Not just experimented with what might.",
        evening: "Midweek evening in the growth phase. Tomorrow is another chance. Momentum requires consistency. What would consistent look like for the rest of this week?",
        night: "Midweek night with growing audience. The week is half over. The traction you have is real but fragile. Protect it with consistency. The compound effect is coming. Stay the course."
      }
    }
  },

  // AUDIENCE TIER: Established (10K-100K)
  tier_established: {
    condition: (p) => p.audienceTier && p.audienceTier.established && p.average >= 5,
    label: "🏛 ESTABLISHED PRESENCE",
    messages: {
      monday: {
        morning: "Monday morning with 10K to 100K followers. You have real traction. People recognize your name. The algorithm is starting to pressure you. Today, resist. Make something that serves your audience, not the metrics.",
        afternoon: "Monday afternoon with established presence. The week is young. You feel the pull toward optimization. Resist it. What would you make if the algorithm did not exist? Make that.",
        evening: "Monday evening in the established zone. Day one is ending. Did you serve your audience or the algorithm today? Tomorrow, choose audience. Always choose audience.",
        night: "Monday night with 10K to 100K followers. The week has four more days. This is the fork in the road. Hollow growth or sustainable depth. Every piece you make is a vote. Choose wisely."
      },
      friday: {
        morning: "Friday morning with established presence. The week is ending. Did you stay true to what built this? The weekend is for remembering why they followed. Not the algorithm. You.",
        afternoon: "Friday afternoon with 10K to 100K followers. The week showed you the tension between growth and truth. Before the weekend, recommit to truth. Growth follows truth. Not the reverse.",
        evening: "Friday evening in the established zone. The week is over. You felt the pressure to optimize. Did you resist? The weekend is for reconnecting with why this matters beyond the metrics.",
        night: "Friday night with established presence. The week is done. You have something worth protecting. The weekend is for remembering what that is. Not the numbers. The work. The truth."
      },
      saturday: {
        morning: "Saturday morning with 10K to 100K followers. The weekend is for perspective. You are at the fork. One path leads to hollow growth. One leads to sustainable depth. Which are you on?",
        afternoon: "Saturday afternoon with established presence. You have traction that matters. The question is whether you will trade it for algorithm approval. Do not. The depth is worth more.",
        evening: "Saturday evening in the established zone. Tomorrow is Sunday. Time to think about what you want to be known for. Not what performs. What matters. Those might be different.",
        night: "Saturday night with 10K to 100K followers. The week ahead will test you. The algorithm will want one thing. Your soul will want another. Decide now which you will serve."
      },
      sunday: {
        morning: "Sunday morning with established presence. The week starts tomorrow. You will feel the pull toward optimization. Before it begins, remember: the voice that got you here is the voice that keeps you here.",
        afternoon: "Sunday afternoon with 10K to 100K followers. Monday is coming. The algorithm will pressure you. Resist. What would your day one followers want? Make for them. Not the masses.",
        evening: "Sunday evening in the established zone. The week ahead is an opportunity to stay true. Not to grow at any cost. To grow in ways that matter. What would that look like?",
        night: "Sunday night with established presence. Tomorrow you create again. This time, create like the metrics do not exist. They are not why you started. Do not let them become why you continue."
      },
      midweek: {
        morning: "Midweek morning with 10K to 100K followers. Half the week is gone. Have you stayed true to your voice? Or drifted toward optimization? The rest of the week is a choice.",
        afternoon: "Midweek afternoon with established presence. The week is slipping by. Before Friday, make something you would have made before you had an audience. Something true.",
        evening: "Midweek evening in the established zone. Tomorrow is another chance. The pressure to optimize never goes away. But neither does the option to resist. Resist.",
        night: "Midweek night with 10K to 100K followers. The week is half over. You are at the stage where careers are built or sold. Do not sell yours for metrics. Stay true."
      }
    }
  },

  // AUDIENCE TIER: Large (100K-1M)
  tier_large: {
    condition: (p) => p.audienceTier && p.audienceTier.large && p.average >= 5,
    label: "📡 SCALE CHALLENGES",
    messages: {
      monday: {
        morning: "Monday morning with 100K to 1M followers. Real scale. People you have never met are watching. Today, find one way to make it feel smaller. Reply to someone. Make something niche. Remember they are humans.",
        afternoon: "Monday afternoon at scale. The week is young. The numbers are large. But behind every number is a person who chose you. What would you make today if you remembered that? Make that.",
        evening: "Monday evening with large reach. Day one is ending. Did you connect with anyone specifically? Or just broadcast? Tomorrow, find one person to actually talk to. Scale is not an excuse for distance.",
        night: "Monday night with 100K to 1M followers. The week has four more days. You have influence most people never get. What will you do with it? Not for growth. For impact."
      },
      friday: {
        morning: "Friday morning at scale. The week is ending. You reached many. Did you connect with any? The weekend is for remembering that reach without resonance is just noise.",
        afternoon: "Friday afternoon with 100K to 1M followers. The week performed well. But performance is not impact. Before the weekend, have one real conversation with a follower. Remember why this matters.",
        evening: "Friday evening with large reach. The week is over. The numbers were good. Were you? Did you stay true to what built this? The weekend is for that question.",
        night: "Friday night at scale. The week is done. You influenced many. Did you serve them? The weekend is for remembering that scale is a responsibility, not just an achievement."
      },
      saturday: {
        morning: "Saturday morning with 100K to 1M followers. The weekend is for perspective. You have what most dream of. Are you using it well? Not for more growth. For actual impact.",
        afternoon: "Saturday afternoon at scale. You can move markets. Shift conversations. What are you doing with that power? Not what does it earn. What does it mean? That question matters.",
        evening: "Saturday evening with large reach. Tomorrow is Sunday. Time to think about legacy. Not growth. Legacy. What will you be remembered for? Numbers or impact?",
        night: "Saturday night with 100K to 1M followers. The week ahead brings pressure. To grow. To optimize. To scale. What if you focused on depth instead? What would that look like?"
      },
      sunday: {
        morning: "Sunday morning at scale. The week starts tomorrow. You will reach many. Will you move them? The reach is handled. The depth requires intention. Intend depth.",
        afternoon: "Sunday afternoon with 100K to 1M followers. Monday is coming. Everyone will want something from you. Before the noise begins, remember what you want. Not what they want. You.",
        evening: "Sunday evening with large reach. The week ahead is an opportunity. Not for more reach. For more meaning. What would your most loyal followers want from you? Serve them.",
        night: "Sunday night at scale. Tomorrow you create again. This time, create like you are talking to one person. The best large creators never lose that. Do not lose it."
      },
      midweek: {
        morning: "Midweek morning with 100K to 1M followers. Half the week is gone. You broadcast. Did you connect? Today, make something for your true fans. Not the casual ones. The real ones.",
        afternoon: "Midweek afternoon at scale. The week is slipping by. Before Friday, have one real interaction. Not a broadcast. An interaction. Remember what personal means.",
        evening: "Midweek evening with large reach. Tomorrow is another chance. Scale is not an excuse for distance. What would you make if you had to look each follower in the eye?",
        night: "Midweek night with 100K to 1M followers. The week is half over. You have influence. Are you using it? Not for growth. For good. The remaining days are your chance."
      }
    }
  },

  // AUDIENCE TIER: Massive (1M-10M)
  tier_massive: {
    condition: (p) => p.audienceTier && p.audienceTier.massive && p.average >= 5,
    label: "🌊 TRUE SCALE",
    messages: {
      monday: {
        morning: "Monday morning with 1M to 10M followers. A different game. You are a small media company now. The week ahead is not about growth. It is about meaning. Does your work still matter to you? Make something today that proves it does.",
        afternoon: "Monday afternoon at true scale. The week is young. Millions are watching. That is power and pressure. What would you make if the numbers did not exist? That thing is probably more important than what performs.",
        evening: "Monday evening with massive reach. Day one is ending. Did you make anything that mattered to YOU today? Not what performed. What mattered. That distinction keeps you human at scale.",
        night: "Monday night with 1M to 10M followers. The week has four more days. You could phone it in and still get views. But you would know. Make something this week that reminds you why you started."
      },
      friday: {
        morning: "Friday morning at true scale. The week is ending. Millions engaged. Did any of it matter? The weekend is for that question. Not what performed. What mattered.",
        afternoon: "Friday afternoon with 1M to 10M followers. The week performed. But performance is not fulfillment. Before the weekend, ask: am I still making what I want to make? Or just what works?",
        evening: "Friday evening with massive reach. The week is over. The numbers were big. Was the meaning? The weekend is for reconnecting with why you create beyond the metrics.",
        night: "Friday night at true scale. The week is done. You influenced millions. Did you say anything that mattered? The weekend is for remembering that scale is a megaphone, not a message."
      },
      saturday: {
        morning: "Saturday morning with 1M to 10M followers. The weekend is for perspective. You have reached scale most never touch. What will you do with it? Not for more growth. For legacy.",
        afternoon: "Saturday afternoon at true scale. You could coast forever on these numbers. But coasting is not creating. What would you make if metrics were invisible? Consider making that.",
        evening: "Saturday evening with massive reach. Tomorrow is Sunday. Time for the big questions. What do you want to be known for? What would you regret not making? That is what matters now.",
        night: "Saturday night with 1M to 10M followers. The week ahead brings opportunity. Not for more reach. You have reach. For more meaning. What would meaningful look like?"
      },
      sunday: {
        morning: "Sunday morning at true scale. The week starts tomorrow. Millions will watch whatever you do. The question is what will you do. Not what will perform. What will matter.",
        afternoon: "Sunday afternoon with 1M to 10M followers. Monday is coming. The machine will want content. What do YOU want? Before the week takes over, remember what you want.",
        evening: "Sunday evening with massive reach. The week ahead is an opportunity to prove you are still you. Not a brand. Not an algorithm. You. Make something this week that proves it.",
        night: "Sunday night at true scale. Tomorrow you create again. This time, create like your younger self is watching. Not the millions. Your younger self. Make them proud."
      },
      midweek: {
        morning: "Midweek morning with 1M to 10M followers. Half the week is gone. Did you make anything that mattered? You have time. Create something today that has nothing to do with performance.",
        afternoon: "Midweek afternoon at true scale. The week is slipping by. Before Friday, make one thing that would exist even if no one saw it. That is how you stay an artist at scale.",
        evening: "Midweek evening with massive reach. Tomorrow is another chance. What would you make if the algorithm rewarded meaning instead of engagement? Make that anyway.",
        night: "Midweek night with 1M to 10M followers. The week is half over. Millions watched. Did it matter? The remaining days are for meaning. Not performance. Meaning."
      }
    }
  },

  // AUDIENCE TIER: Superstar (10M+)
  tier_superstar: {
    condition: (p) => p.audienceTier && p.audienceTier.superstar && p.average >= 5,
    label: "⭐ GLOBAL REACH",
    messages: {
      monday: {
        morning: "Monday morning with 10M plus followers. Global reach. Cultural influence. The week is not about growth. It is about legacy. What will you make today that your younger self would be proud of? Make that.",
        afternoon: "Monday afternoon at superstar scale. The week is young. You can move markets. Shift conversations. What are you doing with that power? Not what does it earn. What does it mean.",
        evening: "Monday evening with global reach. Day one is ending. Did you use your influence for something that mattered? Tomorrow is another chance. The platform is enormous. The message matters more.",
        night: "Monday night with 10M plus followers. The week has four more days. You have won the reach game. The question now is what you will do with it. Not for growth. For meaning."
      },
      friday: {
        morning: "Friday morning at superstar scale. The week is ending. You moved millions. Did you move them toward something that mattered? The weekend is for that question.",
        afternoon: "Friday afternoon with global reach. The week performed at scale. But scale is not the point anymore. Impact is. Before the weekend, ask: did any of it matter? Really matter?",
        evening: "Friday evening with 10M plus followers. The week is over. The numbers were enormous. Was the meaning? The weekend is for remembering that reach without meaning is just noise at volume.",
        night: "Friday night at superstar scale. The week is done. You influenced more people than live in most cities. Did you say anything worth saying? The weekend is for that reflection."
      },
      saturday: {
        morning: "Saturday morning with 10M plus followers. The weekend is for the big questions. You have global reach. What will you do with it? Not what will grow it. What will matter in ten years?",
        afternoon: "Saturday afternoon at superstar scale. You can do anything. Go anywhere. Make anything. What do you WANT to make? Not what performs. What matters. That question is your compass now.",
        evening: "Saturday evening with global reach. Tomorrow is Sunday. Time for legacy thinking. What will people remember? What will outlast the algorithm? That is the only work that matters at your level.",
        night: "Saturday night with 10M plus followers. The week ahead is not about more reach. It is about what you do with the reach you have. Legacy. Meaning. Impact. Those are your metrics now."
      },
      sunday: {
        morning: "Sunday morning at superstar scale. The week starts tomorrow. Tens of millions will see whatever you do. The only question is what you will do. Make it count. Make it matter.",
        afternoon: "Sunday afternoon with global reach. Monday is coming. Everyone will want something from you. Before the noise begins, remember what you want. Not what they want. You. Your vision. Your legacy.",
        evening: "Sunday evening with 10M plus followers. The week ahead is an opportunity that almost no one ever gets. Do not waste it on performance. Use it for meaning. What do you want to say?",
        night: "Sunday night at superstar scale. Tomorrow you create again. This time, create like legacy is the only metric. Because at your level, it is. The numbers are handled. The meaning is up to you."
      },
      midweek: {
        morning: "Midweek morning with 10M plus followers. Half the week is gone. Did you make anything that mattered? Not performed. Mattered. You have time. Make something meaningful today.",
        afternoon: "Midweek afternoon at superstar scale. The week is slipping by. Before Friday, make one thing that would make your younger self proud. Not impressed by the numbers. Proud of the work.",
        evening: "Midweek evening with global reach. Tomorrow is another chance. What would you make if the algorithm measured meaning instead of engagement? Make that anyway. You can afford to.",
        night: "Midweek night with 10M plus followers. The week is half over. You reached more people than most countries have citizens. Did you say anything that mattered? The remaining days are your chance."
      }
    }
  },

  // SHAPE: Soaring
  soaring: {
    condition: (p) => p.shape === 'soaring',
    label: "★ RESONANCE ACHIEVED",
    messages: {
      monday: {
        morning: "Monday morning with resonance achieved. Impact, identity, boldness, intimacy, all aligned. Your work matters to people who matter. The week ahead is not about growth. It is about protection. Guard this connection like the precious thing it is.",
        afternoon: "Monday afternoon with full resonance. The week is young and you are connected. Do not chase more reach. Deepen what you have. The audience that loves you is worth more than millions who scroll past.",
        evening: "Monday evening with everything working. Day one is ending. Did you protect what you have? Or chase what you do not? Tomorrow, guard the magic. It is fragile and rare.",
        night: "Monday night with resonance achieved. The week has four more days. You solved for connection. Now solve for protection. What threatens this state? Guard against it. What maintains it? Double down."
      },
      friday: {
        morning: "Friday morning with full resonance. The week is ending and the magic held. That is the job now. Maintenance. Not growth. Protection. The depth is what matters. Keep it.",
        afternoon: "Friday afternoon with resonance achieved. The week went well. You stayed connected. Before the weekend, document what worked. The conditions, the choices, the boundaries. This is your formula.",
        evening: "Friday evening with everything aligned. The week is over. The connection held. That is victory. The weekend is for appreciating what you built. Not chasing more. Appreciating what is.",
        night: "Friday night with resonance achieved. The week is done. You matter to people who matter. Rest in that. The weekend is for enjoying what sustainable success feels like."
      },
      saturday: {
        morning: "Saturday morning with full resonance. The weekend stretches ahead. Your audience is connected. What would deepen that connection today? Not grow it. Deepen it. That is the work now.",
        afternoon: "Saturday afternoon with resonance achieved. You have what most creators chase forever. Enjoy it. Do not optimize it. Do not scale it. Just enjoy what genuine connection feels like.",
        evening: "Saturday evening with everything working. Tomorrow is Sunday. The week ahead will try to pull you toward growth. Remember: you already won. The connection is the prize. Protect it.",
        night: "Saturday night with resonance achieved. The week ahead does not need more reach. It needs you to stay true to what built this. Before you sleep, remember why they follow. Be that."
      },
      sunday: {
        morning: "Sunday morning with full resonance. The week starts tomorrow. You will be tempted to optimize. Resist. What you have is rare. The authentic connection. The real impact. Guard it.",
        afternoon: "Sunday afternoon with resonance achieved. Monday is coming. The algorithm will want one thing. Your audience wants another. Choose your audience. Always choose your audience.",
        evening: "Sunday evening with everything aligned. The week ahead is an opportunity to maintain the magic. Not grow it. Maintain it. What would protect this connection? Do that.",
        night: "Sunday night with resonance achieved. Tomorrow you create again. This time, create from the place that built this. The truth. The specificity. The boldness. That is your formula. Use it."
      },
      midweek: {
        morning: "Midweek morning with full resonance. Half the week is gone. Did you protect the connection? Or chase growth? The rest of the week needs to be about depth. Not reach.",
        afternoon: "Midweek afternoon with resonance achieved. The week is slipping by. Before Friday, make something specifically for your true fans. Not the casual followers. The ones who would notice if you stopped.",
        evening: "Midweek evening with everything working. Tomorrow is another chance. The magic is holding. Keep it that way. What would you make if only your best followers would see it? Make that.",
        night: "Midweek night with resonance achieved. The week is half over. The connection held. That is what matters. The remaining days are for protecting what you built. Not chasing what you have not."
      }
    }
  },

  // SHAPE: Crashed
  crashed: {
    condition: (p) => p.shape === 'crashed',
    label: "⊘ SIGNAL LOST",
    messages: {
      monday: {
        morning: "Monday morning with signal lost. Impact low, targeting vague, playing safe, connection thin. The week ahead needs to be different. Before you create anything, stop and ask: who is this for and what do they need to feel? Answer that first.",
        afternoon: "Monday afternoon with no resonance. The week is young. You have time to change course. What would you make if you stopped worrying about how it would perform? That might be what connects.",
        evening: "Monday evening with crashed resonance. Day one is ending. Nothing landed. That is data, not failure. What truth are you avoiding? What audience are you not serving? Tomorrow, try the opposite of safe.",
        night: "Monday night with signal lost. The week has four more days. Enough time to find resonance. Before you sleep, write down one thing you believe that you have never said publicly. Start there tomorrow."
      },
      friday: {
        morning: "Friday morning with no resonance. The week is ending and nothing connected. That is okay. The weekend is for reflection. What is the gap between what you are making and what you believe? Close that gap.",
        afternoon: "Friday afternoon with signal lost. The week did not produce connection. Do not despair. Use the weekend to study what moves YOU. That is the standard your work needs to meet.",
        evening: "Friday evening with crashed resonance. The week is over. Let it go. But before you do, ask: what truth did I avoid? What vulnerability did I protect? That is where next week's resonance lives.",
        night: "Friday night with no resonance. The week is done. Rest. But this weekend, consume intentionally. What makes you stop scrolling? What do you save? That is what your work is missing."
      },
      saturday: {
        morning: "Saturday morning with signal lost. The weekend is for clarity. Why is nothing connecting? Is it impact? Targeting? Boldness? Intimacy? Diagnose the problem before you try to solve it.",
        afternoon: "Saturday afternoon with crashed resonance. Something is broken. The weekend is for figuring out what. Not fixing it yet. Understanding it. What feels off about your current work?",
        evening: "Saturday evening with no resonance. Tomorrow is Sunday. Time for honest assessment. When did your work last truly connect? What was different then? That difference is the clue.",
        night: "Saturday night with signal lost. The week ahead needs to be different. Before you sleep, answer honestly: are you making what you want to make? Or what you think you should make? The difference matters."
      },
      sunday: {
        morning: "Sunday morning with crashed resonance. The week starts tomorrow. It can be different. What would you make if you only had one piece of content this week? Make it the truest thing you have.",
        afternoon: "Sunday afternoon with signal lost. Monday is coming. Do not repeat last week. What will be different? Not more content. Different content. Truer content. Plan that now.",
        evening: "Sunday evening with no resonance. The week ahead is an opportunity. Not to work harder. To work truer. What have you been circling around but not saying? Say that this week.",
        night: "Sunday night with crashed resonance. Tomorrow you create again. This time, create from vulnerability. Not from strategy. The safe approach is not working. Try the scary one."
      },
      midweek: {
        morning: "Midweek morning with signal lost. Half the week is gone and nothing has connected. You still have time. Today, make one thing that is more vulnerable than usual. See what happens.",
        afternoon: "Midweek afternoon with crashed resonance. The week is slipping by. Before Friday, try something different. Not louder. Not more frequent. More true. What would that look like?",
        evening: "Midweek evening with no resonance. Tomorrow is another chance. The safe approach failed. What would the risky approach look like? Consider trying that.",
        night: "Midweek night with signal lost. The week is half over. Nothing connected. The remaining days are a chance to change that. What would you say if you knew your audience needed to hear exactly one thing?"
      }
    }
  },

  // SHAPE: Plateau
  plateau: {
    condition: (p) => p.shape === 'plateau',
    label: "📡 SIGNAL STEADY",
    messages: {
      monday: {
        morning: "Monday morning with steady signal. You are connecting but not deeply. The week ahead is an opportunity. What would make your work unmissable? Not louder. Unmissable. The kind of thing people have to tell someone about.",
        afternoon: "Monday afternoon with plateau resonance. The week is young. Some things land, some do not. Study the difference. What makes your best work hit? Do more of whatever that is.",
        evening: "Monday evening with signal steady. Day one is ending. Did anything land hard today? If not, tomorrow is for taking bigger swings. Steady is safe. Safe does not break through.",
        night: "Monday night with plateau resonance. The week has four more days. You could stay steady. You could also push. What would you say if you stopped holding back? Consider saying it this week."
      },
      friday: {
        morning: "Friday morning with steady signal. The week is ending and you maintained. But maintaining is not growing. The weekend is for asking: what would break through? Not perform well. Break through.",
        afternoon: "Friday afternoon with plateau resonance. The week was steady. Is that enough? Before the weekend, consider what would make next week exceptional. Not more content. Better content.",
        evening: "Friday evening with signal steady. The week is over. You connected at your usual level. But usual is not exceptional. The weekend is for planning what exceptional would look like.",
        night: "Friday night with plateau resonance. The week is done. Steady is sustainable. Steady is also forgettable. The weekend is for deciding whether you want more. And what more would require."
      },
      saturday: {
        morning: "Saturday morning with steady signal. The weekend is for perspective. You are connecting but not breaking through. What would breakthrough require? More risk? More truth? More specificity?",
        afternoon: "Saturday afternoon with plateau resonance. Steady gets steady results. If you want different results, something has to change. What would you change if you were starting over?",
        evening: "Saturday evening with signal steady. Tomorrow is Sunday. What would make Monday different from last Monday? Not a small tweak. A real difference. What truth have you been holding back?",
        night: "Saturday night with plateau resonance. The week ahead could be another steady week. Or it could be a breakthrough week. The difference is what you decide to risk."
      },
      sunday: {
        morning: "Sunday morning with steady signal. The week starts tomorrow. Will it be another plateau week? Or will you push? What would pushing look like? More vulnerable. More specific. More bold.",
        afternoon: "Sunday afternoon with plateau resonance. Monday is coming. You know how to be steady. Do you know how to break through? That requires saying something you have not said before.",
        evening: "Sunday evening with signal steady. The week ahead is familiar territory. But familiar is not exceptional. Before the week begins, identify one risk you could take. Then take it.",
        night: "Sunday night with plateau resonance. Tomorrow you create again. This time, create something that scares you slightly. The plateau is comfortable. The edge is where growth lives."
      },
      midweek: {
        morning: "Midweek morning with steady signal. Half the week is gone. Same steady results. You have time to change that. What would exceptional look like for the rest of this week?",
        afternoon: "Midweek afternoon with plateau resonance. The week is slipping by steadily. Before Friday, take one risk. Say one thing you have been holding back. See what happens.",
        evening: "Midweek evening with signal steady. Tomorrow is another chance. Steady got you here. Steady will not get you further. What would you say if steady was not an option?",
        night: "Midweek night with plateau resonance. The week is half over. You are connecting at your usual level. Is that enough? The remaining days are a chance to find out what more looks like."
      }
    }
  },

  // SHAPE: Lopsided (fallback)
  lopsided: {
    condition: (p) => p.shape.startsWith('lopsided'),
    label: "📡 UNEVEN SIGNAL",
    messages: {
      monday: {
        morning: "Monday morning with uneven resonance. Strong in some dimensions, weak in others. The week ahead needs to address the gap. What is your weakest link? Impact? Targeting? Boldness? Intimacy? Start there.",
        afternoon: "Monday afternoon with lopsided signal. Some things are working. Others are not. Before the week takes over, identify what is failing. That is where your attention belongs. Not your strength. Your weakness.",
        evening: "Monday evening with uneven resonance. Day one is ending. Did you work on your weak spot? Or lean on your strength? Tomorrow, focus on what is not working. That is where the leverage is.",
        night: "Monday night with lopsided signal. The week has four more days. Your imbalance will persist unless you address it. What is your weakest dimension? Write it down. Start fixing it tomorrow."
      },
      friday: {
        morning: "Friday morning with uneven resonance. The week is ending and the imbalance is clear. What worked was always going to work. What failed needs attention. The weekend is for planning how to fix it.",
        afternoon: "Friday afternoon with lopsided signal. The week showed you the gap. Your strength carried you. Your weakness dragged you. Before the weekend, decide how to address the weak spot.",
        evening: "Friday evening with uneven resonance. The week is over. The pattern is clear. One area is strong. Another is failing. The weekend is for deciding what changes next week.",
        night: "Friday night with lopsided signal. The week is done. Your strength kept you afloat. Your weakness kept you stuck. The weekend is for making a plan. Which weak spot will you address?"
      },
      saturday: {
        morning: "Saturday morning with uneven resonance. The weekend is for diagnosis. Why is one area strong and another weak? Understanding the gap is the first step to closing it.",
        afternoon: "Saturday afternoon with lopsided signal. Your strength is obvious. Your weakness is hidden but damaging. What would it take to bring up your lowest score? Think about that today.",
        evening: "Saturday evening with uneven resonance. Tomorrow is Sunday. Time to plan for balance. What would you do differently next week to address your weak spot? Plan it now.",
        night: "Saturday night with lopsided signal. The week ahead needs to be more balanced. Before you sleep, identify your weakest dimension. That is your focus for next week. Not your strength. Your weakness."
      },
      sunday: {
        morning: "Sunday morning with uneven resonance. The week starts tomorrow. Your imbalance will persist unless you intervene. What is your weakest dimension? Plan to address it first thing Monday.",
        afternoon: "Sunday afternoon with lopsided signal. Monday is coming. You know what is working. You know what is not. This week, stop optimizing your strength. Start fixing your weakness.",
        evening: "Sunday evening with uneven resonance. The week ahead is an opportunity for balance. Not more of what works. Less of what does not. What would that look like specifically?",
        night: "Sunday night with lopsided signal. Tomorrow you create again. This time, focus on your weak dimension. The strength will take care of itself. The weakness needs your attention."
      },
      midweek: {
        morning: "Midweek morning with uneven resonance. Half the week is gone. Did you address your weak spot? Or ignore it? The rest of the week needs to be about balance. Not more of what works. Less of what does not.",
        afternoon: "Midweek afternoon with lopsided signal. The week is slipping by. Your strength is doing its job. Your weakness is doing its damage. Before Friday, give attention to what is failing.",
        evening: "Midweek evening with uneven resonance. Tomorrow is another chance. What is dragging down your resonance? Impact? Targeting? Boldness? Intimacy? Focus there tomorrow.",
        night: "Midweek night with lopsided signal. The week is half over. The imbalance persists. The remaining days are a chance to address it. Not your strength. Your weakness. That is where the leverage is."
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
