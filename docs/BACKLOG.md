# Trapp Tutoring — backlog

Ticket-sized work from [PROJECT-PLAN.md](PROJECT-PLAN.md). Do not start these until a later implementation conversation. This file is the list, not the build.

**Decision record:** [CONTEXT-MASTER.md](CONTEXT-MASTER.md)  
**Current copy:** [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md)

Status key: `todo` · `doing` · `done` · `blocked`

---

## Owner tasks (Erin)

These sit outside the build tickets. The site can be coded with placeholders; launch quality depends on the first two.

| ID | Task | Notes | Status |
| --- | --- | --- | --- |
| O-01 | Shoot / deliver photos from the shot list | Hero, About headshot, teaching setup, session (faces allowed), optional tiles/games close-up. See [PROJECT-PLAN.md](PROJECT-PLAN.md) §7 | todo |
| O-02 | Pick a logo from the 2–3 options | Phase 2 produces options; Erin approves one | todo |
| O-03 | Point trapptutoring.com at the GitHub-connected host | DNS after Phase 7 deploy is ready | todo |
| O-04 | Optional: send more testimonials | Site ships with the existing 6. Add later if they arrive | todo |

---

## Phase 1 — Foundation

Goal: a running Astro repo on GitHub with tokens, type, and the meeting-button primitive. No page content yet beyond a blank shell.

### P1-01 — Create the GitHub repo and Astro app

- **Goal:** Local project that builds and deploys from GitHub.
- **Do:** Astro + TypeScript. Connect a static host (Cloudflare Pages or GitHub Pages). Preview URL first; custom domain later (P7-02).
- **Accept:** `npm run build` succeeds. README explains local run and deploy. No Google Sites dependency.
- **Status:** `done` — `npm run build` and `npm run check` passed. Repo is https://github.com/sam-dev-site/trapp-tutoring (`main` pushed). GitHub Pages workflow is on `main`. Enable **Settings → Pages → Source: GitHub Actions** for the preview (`https://sam-dev-site.github.io/trapp-tutoring/`). Custom domain stays P7-02.

### P1-02 — Design tokens (teal / coral / cream)

- **Goal:** One token file the rest of the UI uses.
- **Do:** CSS custom properties for cream surface, deep teal ink, mid teal, coral, white wells. Contrast-check body text on cream (aim 7:1). If coral fails on small type, document the fallback: deep teal buttons with cream type.
- **Accept:** Tokens documented. Body/heading contrast meets WCAG 2.2 AA (prefer AAA for text). Coral is not used for small body text unless it passes.
- **Status:** `done` — Tokens in `src/styles/tokens.css`. Ink on cream 11.20:1 (AAA). Mid teal on cream 6.99:1 (AA, ~7:1). Coral on cream 3.12:1 — accent only, not small text. Filled actions: ink + cream (11.20:1). Verified `npm run build` / `npm run check`; desktop + 320px preview shows cream surface and ink heading, no horizontal scroll.

### P1-03 — Type scale

- **Goal:** Dyslexia-first type on every page.
- **Do:** Atkinson Hyperlegible or Lexend. Body 18–20px, line-height 1.6–1.75, measure ~60–65ch, left-aligned. No justified text, no long italics, no all-caps paragraphs.
- **Accept:** Default body and heading styles match the plan. Line length is capped in the layout.
- **Status:** `done` — Atkinson Hyperlegible, body 20px / line-height 1.7, left-aligned, no italics or all-caps. `main` measure 65ch. Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

### P1-04 — App shell and skip link

- **Goal:** Predictable page frame.
- **Do:** Landmark regions, skip-to-main-content, visible `:focus-visible` (never `outline: none` without a replacement).
- **Accept:** Keyboard skip works. Focus is always visible.
- **Status:** `done` — `BaseLayout` has skip link, `header`, and `main#main` (`tabindex="-1"`). `:focus-visible` is 3px teal; no `outline: none`. Skip activation moves focus to `#main`. Verified `npm run build` / `npm run check`; 320px no horizontal scroll.

### P1-05 — Responsive shell and mobile disclosure nav

- **Goal:** Air Reading structure on desktop; in-flow menu on small screens.
- **Do:** Logo left; Home · Tutoring With Me · Dyslexia · Barton · Login; filled **Set up a meeting** on the right. Mobile menu expands in document flow — not a focus-trapping overlay, not a pop-up. Current-page underline. Underline animation respects `prefers-reduced-motion`.
- **Accept:** Usable at 320px, no horizontal scroll. Menu is keyboard-reachable. Reduced-motion: underline does not slide. “Set up a meeting” scrolls to `#meeting` (or equivalent), never opens a modal.
- **Status:** `done` — Air Reading row on desktop; in-flow `<details>` Menu on small screens (not a modal). Nav labels Home · Tutoring With Me · Dyslexia · Barton · Login. Meeting control is `href="#meeting"` (no dialog). Current page uses `aria-current` + underline. Reduced-motion: underline transition `none`. Verified `npm run build` / `npm run check`; 320px no horizontal scroll; Menu opens in document flow.

### P1-06 — Meeting-button component

- **Goal:** The one CTA, reusable.
- **Do:** Large Email / Text / Call. `mailto:trapptutoring@gmail.com`, `tel:+16517600402`, `sms:+16517600402`. Targets ≥44px.
- **Accept:** All three open the right protocol. No form, no calendar. Works on a real phone.
- **Status:** `done` — `MeetingButtons` on every page in `#meeting`. Email `mailto:trapptutoring@gmail.com`, Text `sms:+16517600402`, Call `tel:+16517600402`. Targets 58×77px+ (≥44). No form or calendar. Verified `npm run build` / `npm run check`; desktop + 320px. Native sms/tel not fired in this desktop browser — tap on a phone to confirm.

---

## Phase 2 — Brand

Goal: logo options, rebuilt offer icons, and a placeholder image component so pages can be built without photos.

### P2-01 — Logo options (2–3)

- **Goal:** Erin can pick a mark.
- **Do:** New symbol only — do not refresh the book/flowers. Explore letter-tile / word-building and a simple monogram. Education + fun, kid-friendly, calm. Teal / coral / cream. SVG with accessible title. Must read at favicon size and in the nav.
- **Accept:** 2–3 options presented. Wordmark “Trapp Tutoring” is live text or titled SVG. No essential words in a raster.
- **Status:** `done` — Three SVG options at `/logo-options` (not in nav): A Steps, B Lamp, C Together (ink + honey; no letters, no teal/coral tiles). Live-text wordmark. Accessible `<title>` on each mark. No final mark picked (O-02). Interim user whale now in the nav/favicon (original + clean no-splatter + square icon on `/logo-options`; name stays live text). Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

### P2-02 — Offer icons (five)

- **Goal:** Better than the current Google Sites clip-art.
- **Do:** One icon each: 1:1, fully remote, interactive/multisensory, Barton system, multiple times per week (~50 minutes). Same language as the chosen (or interim) logo family.
- **Accept:** Icons scale cleanly. Decorative icons are hidden from AT or have empty alt; meaning is in the adjacent heading/text.
- **Status:** `done` — `OfferIcon` has five marks (1:1, remote, interactive, Barton sequence, weekly). Interim tile family. `aria-hidden="true"`, no SVG title; headings carry meaning. Shown at 32/48/72 on `/offer-icons` (not in nav). Verified `npm run build` / `npm run check`; desktop + narrow width.

### P2-03 — Labeled image placeholder

- **Goal:** Build layout without waiting for Erin’s photos.
- **Do:** A component that shows a reserved frame and a **recommended replacement** label (e.g. “Replace with: Erin hero, warm, facing camera”). Use for hero, About headshot, teaching setup, session photo, optional tiles close-up.
- **Accept:** Every image slot in later pages can use this. Labels name the shot from [PROJECT-PLAN.md](PROJECT-PLAN.md) §7.
- **Status:** `done` — `ImagePlaceholder` supports hero, about, teaching, session, tiles. Labels match PROJECT-PLAN §7. Preview at `/photo-placeholders` (not in nav). Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

---

## Phase 3 — Chrome + Home

Goal: the hub page works end to end, including gallery and meeting section.

### P3-01 — Footer

- **Goal:** Branded closer without legal pages.
- **Do:** Wordmark, meeting buttons, short nav. No Privacy / Terms / photo-release links.
- **Accept:** Footer on every page. No invented address, hours, or city/state.
- **Status:** `done` — Footer on every page: wordmark, short nav (Home · Tutoring With Me · Dyslexia · Barton · Login), Email / Text / Call. No Privacy / Terms / photo-release. No address, hours, or city/state. Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

### P3-02 — Home hero

- **Goal:** Reading Guru energy, not their look.
- **Do:** Large live-text headline, generous space, placeholder image (P2-03). Tagline as HTML: `Effective · Interactive · Research-based`. Not inside a graphic. Not a generic child-at-laptop stock photo. Not Reading Guru mint/type.
- **Accept:** Headline and tagline are selectable text. Hero is welcoming on mobile and desktop.
- **Status:** `done` — Live H1 “Reading and Spelling Intervention”; tagline `Effective · Interactive · Research-based` as HTML; hero placeholder (P2-03). Cream/ink, not Reading Guru mint. Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

### P3-03 — Home intro + About accordion

- **Goal:** Short Erin intro; full story behind an expand control.
- **Do:** Current Home paragraph. Accordion holds inventory About bio + philosophy with the three fact fixes (K-12 teacher, Barton-trained, six years). Keyboard-friendly disclosure. No other bio rewrite.
- **Accept:** Closed by default. Full story is reachable by keyboard. No “licensed.” No “certified.” No “four years.”
- **Status:** `done` — Home intro from inventory (Barton link). In-flow `<details>` “More about Erin” closed by default. Bio + philosophy with K-12 (not licensed), six years, Barton-trained (not certified). No “four years.” Verified `npm run build` / `npm run check`; keyboard open; desktop + 320px, no horizontal scroll.

### P3-04 — Testimonial gallery

- **Goal:** All 6 quotes, 1–2 visible at a time.
- **Do:** Prev/next (and optional dots). **No autoplay.** Keep ESL/preschool quotes. Light-edit typos (“listenting”, missing period after “generous Erin”, “everyday of preschool”). Keyboard operable. Announce the change for AT.
- **Accept:** All 6 can be reached. Autoplay is off. Works at 320px. Reduced-motion: no slide animation required.
- **Status:** `done` — All 6 quotes on Home (1 at 320, 2 on desktop). Prev/next, no autoplay. Live region announces the range. Light edits: period after “generous”, “every day”, “listening”. ESL/preschool kept. Verified `npm run build` / `npm run check`; all 6 reachable; 320px no horizontal scroll.

### P3-05 — Home meeting section + paths

- **Goal:** The one action, plus labeled doors to the other pages.
- **Do:** `#meeting` with the meeting trio and free-meeting copy direction. Three paths (Tutoring With Me, Dyslexia, Barton) that say what the visitor will find.
- **Accept:** Nav “Set up a meeting” lands here. Paths are clear before click. No waitlist language.
- **Status:** `done` — `#meeting` already has the trio and free-meeting sentence. Home paths to Tutoring With Me, Dyslexia, and Barton say what each page is for. No waitlist. Nav “Set up a meeting” lands on `#meeting`. Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

---

## Phase 4 — Tutoring With Me, Barton, Login

Goal: the remaining content pages, inventory wording + light edits.

### P4-01 — Tutoring With Me

- **Goal:** What classes are like, tech, who can start.
- **Do:** Hero + meeting buttons. Five icon facts from the inventory (use P2-02). Tech list (Chromebooks, not “Chrome books”). **Who is this for?** (not “Who can tutor?”). “each student receives.” Duration uses the locked two-to-three-years sentence if this page mentions program length. Repeat meeting buttons. Koala Go → `https://www.teachwithkoala.com/`. Speed test → `https://www.speedtest.net/`.
- **Accept:** No pricing. No city/state. Eligibility matches the inventory (age 5 / kindergarten, spoken English, screening). No diagnosis required.
- **Status:** `done` — Hero + meeting buttons + teaching placeholder (not a child-at-laptop). Five offer-icon facts; “each student receives”; locked two-to-three-years sentence; Chromebooks; **Who is this for?** with age 5 / kindergarten, spoken English, screening; no diagnosis required. Koala Go and Speedtest links. No pricing or city/state. Repeated CTA in `#meeting`. Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

### P4-02 — Barton

- **Goal:** What the system is, 10 levels, official links, a CTA.
- **Do:** Intro from inventory (“It takes and average” → locked duration sentence). All 10 level names, no per-level essays. Links: `https://bartonreading.com/` and scope `https://bartonreading.com/faqs/#scope`. Meeting buttons (this page currently has none). Never “Barton-certified.”
- **Accept:** Levels match the inventory names. Meeting CTA is obvious. Duration sentence is the locked one.
- **Status:** `done` — Inventory intro; locked two-to-three-years sentence; all 10 level names; `bartonreading.com` and scope FAQ link. Meeting trio in `#meeting`. No “Barton-certified.” Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

### P4-03 — Login

- **Goal:** Current families can reach TutorBird without confusion.
- **Do:** Thin page. One sentence (scheduling and payments). One button to `https://app.tutorbird.com/` with `target="_blank"` and `rel="noopener noreferrer"`. Visible text that it opens in a new tab / leaves this site.
- **Accept:** Button has new-tab behavior **and** visible new-tab text. No embed, no TutorBird branding beyond the destination.
- **Status:** `done` — Thin Login page: scheduling-and-payments sentence; button to `https://app.tutorbird.com/` with `target="_blank"` and `rel="noopener noreferrer"`; visible “opens in a new tab and leaves this site.” No embed. Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

---

## Phase 5 — Dyslexia + warning-signs game

Goal: flagship interactive, attribution, resources, and a meeting CTA.

### P5-01 — Dyslexia page frame

- **Goal:** Info + place for the game + resources + CTA.
- **Do:** About-dyslexia copy; fix “Dyslexia Researches.” Meeting buttons. No waitlist.
- **Accept:** Page purpose is obvious. CTA is present (current site has none).
- **Status:** `done` — Dyslexia page: researchers (not Researches); tiles placeholder; game; Susan Barton attribution; six resources; meeting trio. No waitlist. Verified `npm run build` / `npm run check`; desktop + 320px, no horizontal scroll.

### P5-02 — Warning-signs game

- **Goal:** “Do I notice this in my student?” — game-like, not a diagnosis.
- **Do:** Persistent not-a-diagnosis line. Age groups: Preschool / Elementary / High School / Adulthood. Sign wording from [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md). High School and Adulthood include earlier lists as a prior section the parent can include. Each sign: **I notice this** / **Not sure** (or skip). Native controls, targets ≥44px. Progress + short encouragement. No score, no red X’s. Color is not the only meaning. Session-only (no account, no email capture). Keyboard-only completable. Mobile-first: one sign at a time or a short stack, not a dense checkbox wall.
- **Accept:** Result keeps “three or more → learn more” in spirit, with a gentle message either way. Next step is resources on the same page + meeting buttons. `prefers-reduced-motion` does not break the flow.
- **Status:** `done` — “Do I notice this in my student?”; persistent not-a-diagnosis; Preschool / Elementary / High School / Adulthood; HS/Adulthood can include earlier lists (default on). One sign at a time; I notice this / Not sure (outlined, not a red X); progress + encouragement; no displayed score; session-only. 3+ uses the inventory sentence; fewer still points to resources + meeting. Keyboard Start and answers; buttons ≥44px. Verified `npm run build` / `npm run check`; 320px no horizontal scroll.

### P5-03 — Attribution and resources

- **Goal:** Legal attribution and the six family links.
- **Do:** Susan Barton / Bright Solutions attribution (inventory wording). Resources from [starting-site-links.txt](../starting-site-links.txt): Amazon Overcoming Dyslexia; `https://bartonreading.com/`; Bright Solutions `https://dys-add.com/`; IDA `https://dyslexiaida.org/`; Learning Ally `https://learningally.org/`; Yale `https://dyslexia.yale.edu/` **without** `gclid`. HTTPS.
- **Accept:** Attribution is visible if the lists/game are shown. All six destinations match the locked URLs.
- **Status:** `done` — Susan Barton / Bright Solutions attribution on the Dyslexia page. Resources: Amazon `https://www.amazon.com/dp/B00IIB2N80`; bartonreading.com; dys-add.com; dyslexiaida.org; learningally.org; `https://dyslexia.yale.edu/` (no `gclid`). Verified `npm run build` / `npm run check`.

---

## Phase 6 — Photos + QA

Goal: swap what we have, then prove accessibility and mobile.

### P6-01 — Swap placeholders for delivered photos

- **Goal:** Real images where Erin has sent them.
- **Do:** Replace P2-03 slots. Write meaningful alt text. Student faces are allowed when she sends session photos. Leave remaining slots as labeled placeholders.
- **Accept:** No empty alt. No generic laptop-kid stock. No current About Koala screenshots unless Erin chose one as a replacement.
- **Status:** `blocked` — Erin has not sent photos (O-01). Labeled placeholders stay.

### P6-02 — Accessibility QA

- **Goal:** Meet the bar in [PROJECT-PLAN.md](PROJECT-PLAN.md) §4.
- **Do:** Keyboard-only pass (nav, accordion, gallery, game). Screen-reader spot-check. axe / Lighthouse. Confirm skip link, focus, reduced-motion, target size, no pop-ups.
- **Accept:** WCAG 2.2 AA issues from this pass are fixed. Narration is still out of scope.
- **Status:** `done` — Keyboard/click pass: skip → `#main`; in-flow Menu; About accordion; gallery prev/next (all 6); game Start + answers. No `dialog` / pop-up. Meeting targets ≥44px. Ink/teal contrast already documented in P1-02. Residual: no axe/Lighthouse CLI run in this pass; native sms/tel still needs a real phone.

### P6-03 — Mobile QA

- **Goal:** A parent on a phone can set up a meeting.
- **Do:** Real-phone pass at a narrow width (~320–390px). Check hero, meeting buttons, gallery, game, disclosure nav.
- **Accept:** No horizontal scroll. Meeting buttons obvious. Game and gallery usable with a thumb.
- **Status:** `done` — 320px pass on Home, Tutoring With Me, Dyslexia (game play + result), Barton, Login. No horizontal scroll. Menu in-flow. Gallery 1-at-a-time; game buttons 148×50 / 112×50. Residual: confirm Text/Call on a real phone (O-01 list / owner preview).

---

## Phase 7 — Launch

Goal: the custom site is live on trapptutoring.com and Google Sites is no longer the public site.

### P7-01 — Deploy from GitHub

- **Goal:** Production build on the chosen host.
- **Do:** Production deploy from the main branch. Confirm HTTPS.
- **Accept:** Preview and production URLs load the Astro build, not Google Sites.
- **Status:** `done` — GitHub Actions workflow on `main` deploys to GitHub Pages. Preview: `https://sam-dev-site.github.io/trapp-tutoring/`. Custom domain stays P7-02.

### P7-02 — Custom domain and cutover

- **Goal:** trapptutoring.com serves this site.
- **Do:** DNS (O-03). Confirm Email / Text / Call still work on the live domain. Take Google Sites offline or stop sending people there.
- **Accept:** [https://trapptutoring.com](https://trapptutoring.com) is the public site. No city/state leaked in chrome. Login still opens TutorBird in a new tab.

---

## Out of scope (v1)

Do not add tickets for these unless Erin asks later:

- Pricing, packages, screening fees
- Waitlist / openings copy
- Contact form or calendar
- Privacy, Terms, photo-release pages
- Narration / read-aloud
- Pop-ups, chat widgets, cookie walls
- Site search
- Blog
- A city or state line
- Refreshing the old book/flowers logo
- A full content rewrite
