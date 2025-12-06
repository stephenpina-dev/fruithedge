# FruitHedge Recommendation Replacement Plan

## Summary of Changes

| Action | Item | Replacement | Rationale |
|--------|------|-------------|-----------|
| REPLACE | #33 Naval video | Alex Hormozi on Diary of CEO | Eliminate duplicate, add fresh voice |
| RETAG | #30 Can't Hurt Me | Remove "burnout" pattern | Content mismatch - intensity ≠ recovery |
| REPLACE | #22 Daily Rituals | Atomic Habits | More actionable, better pattern fit |
| REPLACE | #37 Pharrell video | Creative Quest (Questlove) | More substantial, book format |
| ADD | NEW #48 | Perennial Seller | Fill high_ri gap |
| ADD | NEW #49 | Give and Take | Fill connector gap |
| ADD | NEW #50 | Digital Minimalism | Fill monk gap |
| ADD | NEW #51 | Peak Performance | Fill grinder gap |
| ADD | NEW #52 | Mastery | Fill monk + craft gap |

---

## Detailed Replacement Specifications

### 1. REPLACE #33: Naval Video → Alex Hormozi Interview

**REMOVE:**
```javascript
{
  id: 33,
  title: "Naval Ravikant on How to Get Rich",
  creator: "Naval Ravikant",
  type: "video",
  link: "https://www.youtube.com/watch?v=1-TZqOsVCNM",
  duration: "2 hr 17 min",
  patterns: ["low_aq", "underground_gem"],
  why: "Naval explains leverage, equity, and why 'productizing yourself' is the path to freedom..."
}
```

**ADD:**
```javascript
{
  id: 33,
  title: "Alex Hormozi: Turn $100 to $10k (Diary of a CEO)",
  creator: "Alex Hormozi / Steven Bartlett",
  type: "video",
  link: "https://www.youtube.com/watch?v=4XymgXUUeQgoP84Xktq4Vc",
  duration: "3 hr 10 min",
  patterns: ["low_aq", "underground_gem", "grinder", "hustler"],
  why: "Hormozi breaks down the exact formula for business leverage—getting more output for the same input. If you're grinding hard but not seeing freedom, his framework on attention, conversion, and delivery shows where your leverage is leaking."
}
```

| Field | Value |
|-------|-------|
| **Topic** | business |
| **Style** | tactical |
| **Patterns** | low_aq, underground_gem, grinder, hustler |
| **Why change** | Eliminates Naval duplicate (#25 book covers same ground). Hormozi is more tactical and covers leverage from a different angle. Also fills grinder pattern gap. |

---

### 2. RETAG #30: Can't Hurt Me

**CURRENT:**
```javascript
patterns: ["burnout", "low_aq"]
```

**CHANGE TO:**
```javascript
patterns: ["low_ci", "paralyzed", "plateau_walker"]
```

| Field | Value |
|-------|-------|
| **Rationale** | Goggins' "push harder" message is counterproductive for burnout. His content is ideal for people who need a kick—not people who are depleted. |
| **New audience** | People with low craft intensity who are capable but not executing. People paralyzed by comfort, not exhaustion. |
| **Keep everything else** | Same title, creator, link, duration, why text |

---

### 3. REPLACE #22: Daily Rituals → Atomic Habits

**REMOVE:**
```javascript
{
  id: 22,
  title: "Daily Rituals: How Artists Work",
  creator: "Mason Currey",
  type: "book",
  link: "https://www.amazon.com/dp/0307273601",
  duration: "304 pages",
  patterns: ["plateau", "low_ci"],
  why: "161 famous creatives' daily routines, from Kafka to Maya Angelou. You'll realize there's no one 'right' way, and struggling with balance and discipline is totally normal."
}
```

**ADD:**
```javascript
{
  id: 22,
  title: "Atomic Habits",
  creator: "James Clear",
  type: "book",
  link: "https://www.amazon.com/dp/0735211299",
  duration: "320 pages",
  patterns: ["plateau", "low_ci", "grinder", "plateau_walker"],
  why: "You don't rise to the level of your goals—you fall to the level of your systems. If your craft intensity is stuck, Clear's four laws of behavior change give you a practical framework to build consistent creative habits that compound over time."
}
```

| Field | Value |
|-------|-------|
| **Topic** | productivity |
| **Style** | tactical |
| **Patterns** | plateau, low_ci, grinder, plateau_walker |
| **Why change** | Daily Rituals is interesting but not actionable. Atomic Habits is the definitive tactical guide for building systems. 25M+ copies sold. Also fills grinder gap. |

---

### 4. REPLACE #37: Pharrell Video → Creative Quest Book

**REMOVE:**
```javascript
{
  id: 37,
  title: "Pharrell Williams on Creativity and Collaboration",
  creator: "Various",
  type: "video",
  link: "https://www.youtube.com/watch?v=GhCXAiNz9Jo",
  duration: "20 min",
  patterns: ["craftsperson_no_message", "low_ri"],
  why: "Pharrell's approach is pure feeling over formula. If your work is technically proficient but doesn't move people, his philosophy might unlock what's missing."
}
```

**ADD:**
```javascript
{
  id: 37,
  title: "Creative Quest",
  creator: "Questlove",
  type: "book",
  link: "https://www.amazon.com/dp/0062670557",
  duration: "304 pages",
  patterns: ["craftsperson_no_message", "low_ri", "connector", "plateau"],
  why: "Questlove synthesizes creative wisdom from George Clinton, D'Angelo, David Byrne, and decades of collaboration. If your work is technically good but lacking soul, his philosophy on staying creatively restless and learning from others will reconnect you to why you started."
}
```

| Field | Value |
|-------|-------|
| **Topic** | creativity, connection |
| **Style** | philosophical |
| **Patterns** | craftsperson_no_message, low_ri, connector, plateau |
| **Why change** | Pharrell video quality uncertain. Questlove book is more substantial, covers similar ground (feeling over formula), and adds connector pattern coverage. |

---

### 5. ADD #48: Perennial Seller (Fill high_ri Gap)

```javascript
{
  id: 48,
  title: "Perennial Seller",
  creator: "Ryan Holiday",
  type: "book",
  link: "https://www.amazon.com/dp/0143109014",
  duration: "256 pages",
  patterns: ["protect_magic", "high_ri", "high_ci", "tribe_builder"],
  why: "Most creative work disappears. Some lasts decades. Holiday reverse-engineers what makes work endure—from Iron Maiden filling stadiums for 40 years to books that hit bestseller lists a decade after release. If your resonance is high and you want to protect it, this is the blueprint."
}
```

| Field | Value |
|-------|-------|
| **Topic** | connection, business |
| **Style** | tactical |
| **Patterns** | protect_magic, high_ri, high_ci, tribe_builder |
| **Why add** | Only 3 items had high_ri. This directly addresses "how to sustain resonance" which is critical for thriving creators. |

---

### 6. ADD #49: Give and Take (Fill connector Gap)

```javascript
{
  id: 49,
  title: "Give and Take",
  creator: "Adam Grant",
  type: "book",
  link: "https://www.amazon.com/dp/0143124986",
  duration: "320 pages",
  patterns: ["connector", "low_ri", "underground_gem", "tribe_builder"],
  why: "Givers—people who help others without keeping score—dominate both the bottom and top of success. Grant's research shows how to build genuine networks through generosity without becoming a doormat. Essential for connectors who want their relationships to compound."
}
```

| Field | Value |
|-------|-------|
| **Topic** | connection |
| **Style** | scientific |
| **Patterns** | connector, low_ri, underground_gem, tribe_builder |
| **Why add** | Only 1 item had connector pattern (#14 Show Your Work). This fills the gap with research-backed content on relationship building. |

---

### 7. ADD #50: Digital Minimalism (Fill monk Gap)

```javascript
{
  id: 50,
  title: "Digital Minimalism",
  creator: "Cal Newport",
  type: "book",
  link: "https://www.amazon.com/dp/0525536515",
  duration: "304 pages",
  patterns: ["monk", "low_ci", "high_distraction", "plateau"],
  why: "The monk archetype needs solitude to create, but phones shatter focus before deep work can begin. Newport's practical philosophy for intentional technology use clears the path for the concentrated work that matters. If you're a hidden creator drowning in digital noise, this restores the conditions for mastery."
}
```

| Field | Value |
|-------|-------|
| **Topic** | productivity |
| **Style** | tactical |
| **Patterns** | monk, low_ci, high_distraction, plateau |
| **Why add** | Only 1 item had monk pattern. This directly serves deep-focus creators who need to protect their solitude. Complements Deep Work (#2) with the prerequisite step. |

---

### 8. ADD #51: Peak Performance (Fill grinder Gap)

```javascript
{
  id: 51,
  title: "Peak Performance",
  creator: "Brad Stulberg & Steve Magness",
  type: "book",
  link: "https://www.amazon.com/dp/162336793X",
  duration: "240 pages",
  patterns: ["grinder", "hustler", "burnout", "high_ci"],
  why: "Is healthy, sustainable peak performance possible? Stulberg and Magness—a former McKinsey consultant and Olympic coach—answer yes, through cycles of stress and rest. If you're grinding hard and worried about burning out, this is the science of performing at your edge without falling off it."
}
```

| Field | Value |
|-------|-------|
| **Topic** | productivity, recovery |
| **Style** | scientific |
| **Patterns** | grinder, hustler, burnout, high_ci |
| **Why add** | Only 2 items had grinder pattern. This directly addresses "high output without collapse" which is the grinder's core tension. Also appropriate for burnout prevention (unlike Can't Hurt Me). |

---

### 9. ADD #52: Mastery (Fill monk + craft Gap)

```javascript
{
  id: 52,
  title: "Mastery",
  creator: "Robert Greene",
  type: "book",
  link: "https://www.amazon.com/dp/014312417X",
  duration: "352 pages",
  patterns: ["monk", "craftsperson_no_message", "low_ci", "plateau_walker"],
  why: "Greene reverse-engineers mastery through Leonardo da Vinci, Darwin, and Coltrane. The path has three phases: Apprenticeship (deep learning), Creative-Active (developing your voice), and Mastery (intuitive excellence). If you're a solitary craftsperson seeking the long game, this is your roadmap."
}
```

| Field | Value |
|-------|-------|
| **Topic** | craft |
| **Style** | philosophical |
| **Patterns** | monk, craftsperson_no_message, low_ci, plateau_walker |
| **Why add** | Reinforces monk pattern coverage. Directly addresses "mastery through solitude and deliberate practice." Complements Peak (#21) with more philosophical/biographical approach. |

---

## Implementation Checklist

### Step 1: Modify Existing Items
- [ ] Change #33 video (Naval → Hormozi)
- [ ] Retag #30 patterns (remove burnout, add low_ci/paralyzed/plateau_walker)
- [ ] Change #22 book (Daily Rituals → Atomic Habits)
- [ ] Change #37 video→book (Pharrell → Questlove)

### Step 2: Add New Items
- [ ] Add #48 Perennial Seller
- [ ] Add #49 Give and Take
- [ ] Add #50 Digital Minimalism
- [ ] Add #51 Peak Performance
- [ ] Add #52 Mastery

### Step 3: Update Counts
- [ ] Update data.js header comment: "RECOMMENDATIONS (52 total - Books + YouTube Videos + Amazon Films)"
- [ ] Books count: 30 → 35
- [ ] Videos count: 16 → 15

---

## Pattern Coverage After Changes

| Pattern | Before | After | Change |
|---------|--------|-------|--------|
| high_ri | 3 | 4 | +1 (Perennial Seller) |
| connector | 1 | 3 | +2 (Questlove, Give and Take) |
| monk | 1 | 3 | +2 (Digital Minimalism, Mastery) |
| grinder | 2 | 5 | +3 (Hormozi, Atomic Habits, Peak Performance) |
| hustler | 3 | 5 | +2 (Hormozi, Peak Performance) |
| burnout | 6 | 6 | 0 (removed Can't Hurt Me, added Peak Performance) |

---

## Sources

- [Atomic Habits - James Clear](https://jamesclear.com/atomic-habits)
- [Perennial Seller - Ryan Holiday](https://perennialseller.com/)
- [Give and Take - Adam Grant](https://adamgrant.net/book/give-and-take/)
- [Digital Minimalism - Cal Newport](https://calnewport.com/my-new-book-digital-minimalism/)
- [Peak Performance - Brad Stulberg](https://www.bradstulberg.com/books)
- [Creative Quest - Questlove](https://questlove.com/creative-quest-by-questlove/)
- [Mastery - Robert Greene](https://www.goodreads.com/book/show/13589182-mastery)
- [Alex Hormozi on Diary of a CEO](https://open.spotify.com/episode/4XymgXUUeQgoP84Xktq4Vc)

---

*Replacement plan generated: December 2024*
