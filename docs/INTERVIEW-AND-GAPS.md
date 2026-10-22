# Interview log and open questions

Owner interview conducted during the context-pack step (October 22, 2026), plus written brief from the project kickoff, plus leftovers resolved in the project-plan step (same day). Locked decisions are summarized in [CONTEXT-MASTER.md](CONTEXT-MASTER.md) and [README.md](README.md). The plan and tickets live in [PROJECT-PLAN.md](PROJECT-PLAN.md) and [BACKLOG.md](BACKLOG.md).

---

## Written brief (kickoff)

Erin described the business as private 1:1 tutoring using the Barton Reading & Spelling System for students who struggle with reading due to dyslexia or other learning challenges. She meets students online in an interactive, safe, and positive environment.

Constraints she stated up front:

- No dedicated brand palette
- No access to original assets (photos, logos); rebuild everything except text and linked content
- Dyslexia should drive design: adults seeking help for their kids often have dyslexia themselves
- Inclusive design and accessibility in look, feel, and navigation — not narration
- Current-site content is good and accurate; extract it as source of truth
- The site still needs a redesign

Owner likes / wants (from the same brief):

- Interactive, fun, gamification
- Accordion-style disclosure
- Testimonials
- Warning signs as an interactive Q&A / “Do I notice this in my student?”
- Mix of general Barton info plus external links
- Consolidate Contact, About, and Home if possible
- TutorBird is required for current families (schedules and payments)
- Buttons should replace a long-form email
- New logo
- More eye-catching Home
- Authentic pictures that reflect Erin and what she offers (not the generic laptop-kid stock photo)
- Offer facts with icons, better sizing: online, 50 minutes, interactive and multisensory, multiple times per week
- Top-tab navigation (airreading.com)
- Big playful welcoming Home image (readingguru.com)
- readingguru.com as the favorite layout/energy reference of sites reviewed
- Subtle motion (e.g. nav underline animation)
- No pop-ups

---

## Round 1 — structure and CTA

**Q: What should the primary “Set up a meeting” / “Contact me” button do?**  
**A:** Big **Email / Text / Call** buttons only — no form and no calendar.

**Q: How should we handle visuals, given no original assets?**  
**A:** Erin will **provide new photos of herself**.

**Q: How far should we consolidate Home / About / Contact?**  
**A (owner’s words):** Home becomes the hub: intro, short about (with expandable click for more info showing the full about story), and a strong meeting CTA. Separate pages for tutoring with me, dyslexia, and Barton. Contact is a button/section, not its own page. TutorBird tab stays but call it **“Login”** instead. TutorBird is more of the back-end name for the platform used for payment.

---

## Round 2 — pricing, proof, brand

**Q: Should the new site mention cost?**  
**A:** **No pricing** on the site — discuss fit and cost only in the free meeting.

**Q: How should we handle the existing 6 testimonials?**  
**A:** Reuse the existing 6 quotes, **and we will add some more.**

**Q: What should we do for logo and color?**  
**A:** **Design a new logo** as part of this project (Erin will approve options).

She did not pick a motif or a palette family in this round. Those were decided in the project-plan step (Round 5 below): new symbol (not the book); teal / coral / cream.

---

## Round 3 — warning-signs game and facts

**Q: How far should the warning-signs questionnaire go?**  
**A:** **More game-like** (progress, encouragement, maybe a short result message), still clearly not a diagnosis.

**Q: Which facts are still accurate?**  
Confirmed:

- Email is still `trapptutoring@gmail.com`
- Text/call is still `(651) 760-0402`
- Sessions are fully online; she takes students regardless of location (as long as tech requirements work)
- **Do not mention** a city or state — keep it location-agnostic

Owner corrections (freeform):

- Say **K-12 teacher** — drop “licensed”
- Say **Barton-trained**, not certified
- Update “four years of one-on-one virtual tutoring” to **six**

Waitlist / openings was offered as a choice and **was not selected**. Resolved in the project-plan step: **omit** until Erin asks.

---

## Round 4 — reference sites (layout and elements)

Owner shared screenshots of sites she likes. These are **element and layout** preferences, not a request to copy colors or fonts.

**Q / notes:** From [airreading.com](https://airreading.com/), likes the **tabs up top** (horizontal logo + short link row + filled action). From [readingguru.com](https://readingguru.com/), likes the **big playful welcoming image**. Overall, **readingguru.com is the favorite** of multiple reviewed sites. Does **not like pop-ups**. Likes **some sort of movement**, such as an **underline animation**.

**A (locked from this round):**

- Top-tab navigation, not a left sidebar
- Home hero should feel large, playful, and welcoming (Reading Guru energy)
- Reading Guru is the primary layout/energy reference; Air Reading is the nav-chrome reference
- No pop-ups
- Subtle motion is welcome, especially a nav underline

Do not treat Reading Guru’s mint hero, navy type, stock child photo, or long nav as brand. Do not treat Air Reading’s red as palette.

---

## Round 5 — project plan leftovers (October 22, 2026)

Resolved while writing [PROJECT-PLAN.md](PROJECT-PLAN.md) and [BACKLOG.md](BACKLOG.md).

- **Leave Google Sites.** Custom-coded, local → GitHub → [trapptutoring.com](https://trapptutoring.com). Mobile-friendly required.
- **Stack:** Astro + TypeScript + CSS custom properties; client islands for the game and gallery. Cloudflare Pages or GitHub Pages. (Owner asked us to pick.)
- **Logo motif:** leave the book/flowers. Explore a new kid-friendly calm symbol — letter-tile / word-building and/or a simple monogram. Education + fun, not clinical.
- **Palette:** teal / coral / cream.
- **Photos:** shot list now; labeled placeholders that name the recommended replacement; swap when Erin delivers.
- **Student faces:** allowed (owner has permission). Same placeholder pattern.
- **Testimonials:** ship all 6; gallery shows 1–2 at a time; no autoplay.
- **Waitlist:** omit until Erin asks.
- **Program length:** “It takes most students about two to three years to complete all ten levels, and the pace depends on the student.”
- **URLs:** prefer [starting-site-links.txt](../starting-site-links.txt) — Bright Solutions `https://dys-add.com/`; Barton scope `https://bartonreading.com/faqs/#scope`. HTTPS; Yale without `gclid`.
- **Legal pages:** none in v1.
- **Login:** thin page; button opens TutorBird in a new tab and says it leaves this site.
- **Bio:** no other changes besides licensed → K-12, certified → trained, four → six years.

---

## Decision checklist

| Item | Status | Decision |
| --- | --- | --- |
| Primary CTA | Locked | Email / Text / Call buttons |
| Email | Locked | `trapptutoring@gmail.com` |
| Phone | Locked | `(651) 760-0402` |
| Form or calendar | Locked | Neither |
| Pricing | Locked | None on site |
| Home / About / Contact | Locked | Home hub + About accordion; no Contact page |
| Content pages | Locked | Tutoring With Me, Dyslexia, Barton stay separate |
| TutorBird | Locked | Keep in nav as **Login** |
| Testimonials | Locked | Reuse all 6 in a gallery (1–2 visible); Erin may add more later |
| Logo | Locked (scope) | Design new in this project |
| Logo motif | Locked | New symbol (letter-tile / word-building and/or monogram); not the book/flowers |
| Palette | Locked | Teal / coral / cream |
| Photos | Locked | Erin provides new photos; labeled placeholders until then |
| Student faces | Locked | Allowed (owner has permission); placeholders until session photos arrive |
| Location line | Locked | No city/state |
| Credentials | Locked | K-12 teacher; Barton-trained |
| Years of virtual 1:1 | Locked | 6 |
| Extra bio updates | Locked | None beyond the three fact fixes |
| Warning signs | Locked | Game-like; not a diagnosis; keep attribution |
| Nav chrome | Locked | Horizontal top tabs (airreading.com pattern) |
| Home hero | Locked (pattern) | Big playful welcoming image (readingguru.com energy) |
| Favorite reference site | Locked | readingguru.com — layout/energy only |
| Pop-ups | Locked | None |
| Motion | Locked (direction) | Subtle; underline animation liked |
| Waitlist copy | Locked | Omit until Erin asks |
| Domain / hosting / stack | Locked | Leave Google Sites. Astro + TS. GitHub → trapptutoring.com. Mobile required |
| Photo delivery timing | Open (non-blocking) | No date yet; placeholders in the build |
| Additional testimonials | Locked (launch) | Ship with the existing 6; slot to add more |
| Program length (2 vs 2–3 years) | Locked | About two to three years; pace depends on the student |
| Bright Solutions / Barton URLs | Locked | `https://dys-add.com/`; `https://bartonreading.com/faqs/#scope` |
| Legal pages | Locked (v1) | None |
| Login behavior | Locked | Thin page; TutorBird in a new tab with visible new-tab text |

---

## Leftovers — resolved in the project plan

The fourteen questions that used to live here were answered in Round 5. See the checklist above and [PROJECT-PLAN.md](PROJECT-PLAN.md).

**Still open, not blocking:** Erin’s photo delivery date. The build uses labeled placeholders.

**Recommended defaults from the context-pack step (historical — superseded):** those defaults suggested hiding student faces, a smaller Home quote set, and confirming Bright Solutions before launch. Round 5 replaced them: faces allowed; gallery of all 6; URLs follow [starting-site-links.txt](../starting-site-links.txt); Login is a thin page that opens TutorBird in a new tab.
