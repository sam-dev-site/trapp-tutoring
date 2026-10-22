# Trapp Tutoring — context master

Synthesized source of truth for the redesign. Current-site wording lives in [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md). Interview detail lives in [INTERVIEW-AND-GAPS.md](INTERVIEW-AND-GAPS.md). The actionable plan and tickets live in [PROJECT-PLAN.md](PROJECT-PLAN.md) and [BACKLOG.md](BACKLOG.md).

This file records **decisions and facts** for the new site. Visual tokens, page sections, and implementation tickets belong in the plan and backlog.

---

## 1. Business

**Business name:** Trapp Tutoring  
**Tutor:** Erin Trapp  
**Offer:** Private 1:1 online tutoring using the Barton Reading & Spelling System (Orton-Gillingham influenced) for students who struggle with reading because of dyslexia or other learning challenges.

**Owner’s goal for the site:** Give families a place to understand the tutoring Erin offers, what the program is, and how to contact her.

**Primary customer:** Families of students with dyslexia — mostly younger kids, ages **6 to 15**.

**How people arrive:** Erin directs families here, or she posts the site on social media. Visitors are already interested in her business; this is not a cold-traffic marketing site.

**The one action that matters:** Set up a meeting so Erin can explain the tutoring in more detail.

**What the site must introduce:**

- Erin as the tutor
- The Barton Reading & Spelling System
- What classes with her are like
- What sets her tutoring apart: making the program **fun** and using **a lot of games**
- General information about dyslexia
- Links for families who want to learn more about dyslexia

---

## 2. Offer facts (keep)

These are accurate current-site claims and should remain on the new site unless Erin later revises them.

| Fact | Detail |
| --- | --- |
| Format | One-on-one |
| Location | Fully online / remote; students can join from anywhere the tech works |
| Platform | Koala Go (`https://www.teachwithkoala.com/`). Families do not need an account; Erin sends a classroom link |
| Style | Interactive and multisensory; gamified |
| Frequency | Typically 2–3 times per week so skills are not forgotten |
| Length | Typically 50 minutes; can be modified |
| Program | Barton Reading & Spelling System — structured, sequential, Orton-Gillingham based, 10 levels |
| Duration of program | Most students about **two to three years** to complete all ten levels; the pace depends on the student |
| Diagnosis | No official dyslexia diagnosis required |
| Eligibility | At least 5 years old and in kindergarten; speaks and comprehends spoken English; must pass a short screening Erin administers |
| Tech | Reliable internet (at least 30 Mbps down / 5 Mbps up); computer, Chromebook, or iPad (not iPhone); webcam; headset with mic preferred; mouse preferred |
| Current families | Scheduling and payments through TutorBird at `https://app.tutorbird.com/` |

**Do not publish:** pricing, packages, screening fees, or “investment” ranges. Discuss fit and cost only in the free meeting.

**Do not mention:** city, state, or a geographic service area. Keep the site location-agnostic even though the phone number is a 651 area code.

---

## 3. Erin — bio facts for the new site

Use these **updated** facts, not the stale About-page lines.

- K-12 teacher (**drop** “licensed”)
- BA in Teaching English as a Second Language, Winona State University
- Specialties: Dyslexia, Literacy, ESL, Spanish, and Early Childhood Development
- Teaching experience includes 1st grade, 7th grade literacy, high school Spanish and ESL, Pre-K
- **Six years** of one-on-one virtual tutoring (was “four years”)
- **Barton-trained**, not Barton-certified — say trained, never certified
- Full-time Barton tutor
- Mentor: a Barton tutor with 15+ years of experience (mentor is unnamed; do not invent a name)
- Philosophy: many struggling readers have had humiliating school experiences; sessions should feel safe, comfortable, encouraged, and challenged; fun while mastering skills that felt inaccessible

Short Home version should introduce Erin as the tutor. Full story lives behind an expand control (accordion).

---

## 4. Contact

**Email:** `trapptutoring@gmail.com`  
**Phone:** `(651) 760-0402` — text or call

**Primary CTA pattern:** large **Email**, **Text**, and **Call** buttons. No contact form. No calendar / Calendly / appointment widget. Buttons replace a long email form.

Suggested behaviors (implementation later):

- Email → `mailto:trapptutoring@gmail.com`
- Call → `tel:+16517600402`
- Text → `sms:+16517600402` (or equivalent)

CTA copy direction from current site, to refine later: inquire for a **free meeting** to see if Trapp Tutoring is a good fit.

Contact is a **button/section**, not its own page. Repeat the meeting CTA on Home and wherever families might be ready (especially Tutoring With Me). Educational pages (Dyslexia, Barton) should still make the next step obvious.

---

## 5. Information architecture (new site)

Owner direction: consolidate Home / About / Contact; keep clear pages; make it obvious what each page is for; avoid a clunky feel.

```text
Home            Hub: eye-catching intro, short About + expand, meeting buttons
Tutoring With Me
                What classes are like (icons), tech needs, who can start
Dyslexia        General info, warning-signs game, resource links
Barton          What the system is, 10 levels, links to official Barton material
Login           Current families only → TutorBird (scheduling & payments)
```

**Removed as standalone pages:** About, Contact.

**Nav placement:** Horizontal **top tabs**, not the current Google Sites left sidebar. Pattern to follow (structure only): [airreading.com](https://airreading.com/) — logo left, a short row of text links, and one distinct filled action on the right. Do **not** copy Reading Guru’s long multi-row nav; keep the short label set below so the bar stays scannable.

**Nav labels (working):** Home · Tutoring With Me · Dyslexia · Barton · Login

A filled nav action (e.g. “Set up a meeting”) should sit apart from the text links, in the airreading “Get in touch” position. That action leads to Email / Text / Call — still no form and no calendar.

“The Barton Reading & Spelling System” is too long for a dyslexia-friendly nav. Use a short label (Barton) and a clear page title. “Tutor Bird Login” becomes **Login** — TutorBird is the backend product name, not something new families need to see.

**Home as hub should contain:**

1. Eye-catching hero: large, playful, welcoming image in the spirit of [readingguru.com](https://readingguru.com/) (headline + big photo, generous space). Use Erin’s new photos (placeholders until they arrive) — not a generic stock child, and not Reading Guru’s mint/teal or type. Tagline as live HTML, not inside a graphic.
2. Who Erin is (short)
3. Expandable full About story
4. Testimonial gallery (all 6 quotes, 1–2 visible, no autoplay)
5. Strong meeting CTA (Email / Text / Call)
6. Clear paths into Tutoring With Me, Dyslexia, and Barton — each path labeled so visitors know what they will find

**Login page** stays thin: current families use this link for scheduling and payments. Do not bury it; existing families need it. One sentence + one button to `https://app.tutorbird.com/`. The button opens in a **new tab** and must say that it leaves this site.

**Home also includes** a testimonial gallery (all 6 quotes, 1–2 visible at a time, no autoplay) and labeled paths into the three content pages. Meeting buttons belong on Home, Tutoring With Me, Dyslexia, and Barton.

**Not in v1:** site search, Privacy, Terms, photo-release, waitlist/openings copy.

---

## 6. Must-keep content vs light edits

All current information is considered **good and accurate**. The redesign is visual, structural, and interactive — not a content rewrite. Light edits only where the inventory flags errors or the interview updates facts.

### Keep (substance)

- Home intro paragraph (Barton, online, interactive / safe / positive)
- Five “what learning is like” points, with icons: 1:1, fully remote, interactive/multisensory, Barton system, multiple times per week
- Tech-requirements list
- Eligibility (no diagnosis required + three musts)
- Barton explainer and all 10 level names
- Official Barton links (approach + scope/sequence)
- Warning-signs lists by age group, with Susan Barton attribution
- Dyslexia resource links (clean the URLs; keep the six destinations)
- About bio, origin story, and philosophy
- Existing 6 testimonials
- Koala Go explanation
- TutorBird purpose sentence (reworded under Login)

### Light-edit later (do not invent new claims)

- Typos listed in the inventory
- “Who can tutor?” → student-facing heading (e.g. “Who is this for?”)
- “licensed K-12 teacher” → “K-12 teacher”
- “four years” → “six years”
- Duration: use the locked two-to-three-years sentence (see §2)
- Resource URLs: prefer [starting-site-links.txt](../starting-site-links.txt) — Bright Solutions `https://dys-add.com/`; Barton scope `https://bartonreading.com/faqs/#scope`; HTTPS; drop `gclid` from the Yale URL
- Testimonial punctuation (“generous Erin”, “listenting”, mixed quotes)

### Do not keep as-is

- Generic stock photo of a child at a laptop
- Current logo / book-with-flowers mark (new symbol; do not refresh that family)
- Current About-page Koala Go product screenshots as-is (not the new art direction unless Erin later chooses one)
- Standalone Contact page
- “Tutor Bird Login” as the public label
- Long email-only inquiry with no buttons
- Empty image alt text
- Waitlist / openings copy
- Privacy, Terms, or photo-release pages (none in v1)

---

## 7. New or upgraded features

### Meeting buttons

Replace the email-and-phone text row with obvious Email / Text / Call buttons. Available from Home and as a persistent or repeated CTA. A matching filled control can live in the top nav (airreading-style), but it must not open a pop-up.

### No pop-ups

Owner does not want pop-ups (modals, newsletter intercepts, cookie walls, chat widgets that cover the page, exit-intent, etc.). Use in-page sections, accordions, and normal navigation instead.

### About accordion

Home shows a short Erin introduction. An expand control reveals the full About story (bio + philosophy). Accordion-style disclosure is something the owner already likes.

### Testimonials

Reuse the existing 6 quotes. Erin may add more later; launch does not wait. Show all 6 in a **gallery** that displays 1–2 at a time (prev/next, no autoplay). Two Barton-student quotes already support “games / fun.” ESL and preschool quotes support warmth and patience — keep them. First names + role are how the current site attributes them.

### Warning-signs game

Turn the age-grouped “Signs of Dyslexia” lists into a **game-like** “Do I notice this in my student?” experience:

- Progress and encouragement
- A short result message
- Clearly **not a diagnosis**
- Keep the current “three or more warning signs → learn more” idea in spirit
- Keep the Susan Barton / Bright Solutions attribution
- End with a gentle next step (learn more / set up a meeting)

This is a flagship interactive piece. It must stay simple, readable, and low-stress for parents who may themselves have dyslexia.

### New logo

Designed in this project. Owner will approve options. **Leave the book/flowers mark.** Explore a new kid-friendly, calm symbol: letter-tile / word-building, and/or a simple monogram. Education + fun, not clinical. Drawn in the teal / coral / cream system.

### Authentic pictures

Erin will provide new photos of herself. The current student-at-laptop image is generic and should not return. Build with **labeled placeholders** that name the recommended replacement. **Student faces are allowed** (owner has permission); session photos use the same placeholder pattern until they arrive. Do not ship the current About Koala screenshots as-is unless Erin later chooses one.

### Icons for the offer

Keep the current idea: one icon per offer fact (online, 50 minutes, interactive/multisensory, multiple times per week, 1:1). Rebuild them so sizing and visual quality are better than the current Google Sites clip-art.

---

## 8. Brand direction

There was **no dedicated brand palette** and **no access to original assets** (photos, logos). Rebuild everything except text and linked content. Palette is now **teal / coral / cream**. Logo direction is a **new symbol**, not the book/flowers mark. See [PROJECT-PLAN.md](PROJECT-PLAN.md) for tokens, type, and components.

**Feel the owner asked for:**

- Attractive to kids, with some brighter colors
- Cooler than basic primary / crayon colors
- A mix of education and a fun environment
- Helping kids grow in reading and spelling
- Interactive, fun, gamification — without looking chaotic
- More visually pleasing than the current site; better sizing
- An eye-catching Home with a **big, playful, welcoming image**
- Some movement — especially a **nav underline animation** — without gimmicks

**Reference sites (elements and layout only — not colors or fonts):**

- **[readingguru.com](https://readingguru.com/)** is the **favorite** of multiple sites the owner reviewed. Take the welcoming hero energy: large headline, generous space, a prominent friendly image, a clear primary action. Do not copy their palette, type, stock child photo, crowded nav, or any pop-up behavior.
- **[airreading.com](https://airreading.com/)** is the reference for **top tabs**: clean horizontal bar, few links, one filled CTA on the right. Do not copy their red/white system.

**Motion:** Subtle underline animation on nav (hover / current page) is explicitly liked. Keep motion light and optional (`prefers-reduced-motion`) so it does not fight dyslexia-friendly reading. No pop-ups, no auto-playing video, no attention-grabbing overlays.

**Current visual leftovers (reference only, not the new system):** terracotta banners, cream wells, dusty mauve, teal speech bubble, book-and-flowers line art.

**Logo:** new symbol (letter-tile / word-building and/or monogram). Do not refresh the book/flowers family. Wordmark as live text or titled SVG.

---

## 9. Accessibility and inclusive design

This is a dyslexia-focused site. Adults searching for help for their kids often have dyslexia themselves. Design implications are first-class, not a polish pass.

**Bar (locked in the project plan):** WCAG 2.2 **AA**, plus dyslexia extras. Full checklist lives in [PROJECT-PLAN.md](PROJECT-PLAN.md) §4.

Implications that stay first-class:

- Intuitive, simple look, feel, and navigation (short top-tab bar, not a dense mega-menu)
- Clear page purpose — visitors should know what they will find before they click
- Readable type (size, spacing, line length, contrast)
- Predictable structure; not clunky; not a long undifferentiated scroll
- Obvious meeting CTA
- Keyboard-friendly interactive pieces (accordion, gallery, warning-signs game)
- Meaningful alt text; do not put essential words inside images (current Home tagline lives in a graphic)
- Motion that can be turned down; no pop-ups that steal focus
- Mobile-friendly (320px, no horizontal scroll)
- No narration / audio read-aloud as a requirement

---

## 10. Legal and attribution

- **Warning signs** are reprinted with prior written permission from Susan Barton, Founder of Bright Solutions for Dyslexia and developer of the Barton Reading and Spelling System®. Keep that attribution if the lists are reused or turned into a questionnaire.
- **Barton Reading & Spelling System** is a named program. Use the name accurately. Do not claim Erin is Barton-certified.
- **Student photos:** owner has permission to show student faces. Use labeled placeholders until new session photos arrive. Do not reuse the current About-page Koala screenshots as-is unless Erin later chooses one.
- No original photo/logo files exist; do not scrape or restyle third-party logos beyond fair use of official Barton / Koala / TutorBird marks if those tools are named.
- **Legal pages:** none in v1 (no Privacy, Terms, or photo-release). Revisit later if Erin asks.

---

## 11. What success looks like (this redesign)

A family Erin sends to the site can, without hunting:

1. Understand who Erin is and that classes are online, 1:1, ~50 minutes, interactive, and several times a week
2. Understand Barton at a high level and that games make it fun
3. Optionally explore dyslexia warning signs in a low-stress interactive way
4. Set up a meeting with one tap (email, text, or call)
5. If they are already a student family, find Login

The site should feel simple enough for a parent who struggles with reading the web, and warm enough that a child looking over a parent’s shoulder does not see a sterile clinic. First impression should match the Reading Guru *energy* (big welcome, clear action, top tabs) without copying that site’s colors, type, or stock imagery. No pop-ups.

---

## 12. Platform and hosting

- **Leave Google Sites.** The new site is custom-coded.
- **Workflow:** local → GitHub → [trapptutoring.com](https://trapptutoring.com).
- **Stack:** Astro + TypeScript + CSS custom properties. Small client islands for the warning-signs game and testimonial gallery.
- **Hosting:** GitHub-connected static host (Cloudflare Pages or GitHub Pages) with the custom domain.
- **Mobile-friendly is required.**
- Tickets: [BACKLOG.md](BACKLOG.md). Plan: [PROJECT-PLAN.md](PROJECT-PLAN.md).
