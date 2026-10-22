# Trapp Tutoring — context pack

This folder is the source of truth for the redesign. It documents the current Google Sites site, the owner interview, the decisions that feed the build, and the project plan plus backlog.

The context-pack and planning steps are documentation only. They do not include site code or logo drafts. Implementation starts from [PROJECT-PLAN.md](PROJECT-PLAN.md) and [BACKLOG.md](BACKLOG.md) in a later conversation.

## Reading order

1. **This file** — what is decided, what is still open, and where to look.
2. [CONTEXT-MASTER.md](CONTEXT-MASTER.md) — synthesized brief and **decision record**: business, audience, IA, features, brand, accessibility, and constraints.
3. [PROJECT-PLAN.md](PROJECT-PLAN.md) — actionable plan: IA detail, visual system, accessibility bar, warning-signs game, logo, photo plan, implementation phases.
4. [BACKLOG.md](BACKLOG.md) — ticket-sized work by phase, plus owner tasks.
5. [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md) — verbatim current-site copy, page by page, plus links and known issues.
6. [INTERVIEW-AND-GAPS.md](INTERVIEW-AND-GAPS.md) — interview log. Leftovers from that file are resolved in the plan.

If a later plan or page draft conflicts with these files, treat [CONTEXT-MASTER.md](CONTEXT-MASTER.md) as the decision record and [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md) as the current-copy record. Do not invent new factual claims about Erin, Barton, or the offer.

## Starting-state sources (outside this folder)

- Live site (until cutover): `https://sites.google.com/view/trapptutoring/`
- Public destination: [trapptutoring.com](https://trapptutoring.com)
- Desktop captures: [starting-state-screenshots-desktop](../starting-state-screenshots-desktop)
- Owner-supplied link list: [starting-site-links.txt](../starting-site-links.txt)

Collapsed About testimonials and the Dyslexia Resources list were confirmed on the live site; they are not fully visible in the screenshot set.

## What is already decided

| Topic | Decision |
| --- | --- |
| Primary visitor action | Set up a free meeting with Erin |
| How to contact | Large Email / Text / Call buttons only — no form, no calendar |
| Email | `trapptutoring@gmail.com` |
| Phone | `(651) 760-0402` |
| Site shape | Home is the hub; separate pages for Tutoring With Me, Dyslexia, and Barton |
| About | Short intro on Home, with an expand control for the full story |
| Contact page | Remove as its own page; contact is a button/section |
| Current families | Keep a nav item labeled **Login**. Thin page; button opens TutorBird (`https://app.tutorbird.com/`) in a **new tab** and says it leaves this site |
| Pricing | None on the site |
| Testimonials | Reuse the existing 6 (Erin may add more later). Gallery shows 1–2 at a time; no autoplay |
| Logo | New symbol in this project — not the book/flowers mark. Explore letter-tile / word-building and/or a simple monogram. Education + fun, not clinical |
| Palette | Teal / coral / cream |
| Photos | Erin will provide new photos. Build with labeled placeholders that name the recommended replacement |
| Student faces | Allowed (owner has permission). Same placeholder pattern until photos arrive |
| Location | Fully online, any location; do not mention city or state |
| Credentials | K-12 teacher (not “licensed”); Barton-trained (not certified) |
| Experience line | Six years of one-on-one virtual tutoring (was four) |
| Bio | No other About rewrite beyond those three fact fixes |
| Program length | Most students about two to three years for all ten levels; pace depends on the student |
| Warning signs | Game-like “Do I notice this?” experience; not a diagnosis; keep Susan Barton attribution |
| Resource URLs | Prefer [starting-site-links.txt](../starting-site-links.txt): Bright Solutions `https://dys-add.com/`; Barton scope `https://bartonreading.com/faqs/#scope`. HTTPS; Yale without `gclid` |
| Waitlist | Omit until Erin asks |
| Legal pages | None in v1 |
| Brand feel | Bright but cooler than crayon primaries; educational + fun; simple and accessible |
| Nav chrome | Horizontal top tabs (like airreading.com) — not a left sidebar |
| Home hero | Big, playful, welcoming image (like readingguru.com) |
| Layout reference | readingguru.com is the favorite of sites reviewed — take layout/energy, not colors or fonts |
| Motion | Subtle movement is welcome, especially an underline animation |
| Pop-ups | None |
| Narration | Out of scope |
| Platform | Leave Google Sites. Custom-coded, local → GitHub → trapptutoring.com. Mobile-friendly required |
| Stack | Astro + TypeScript + CSS custom properties; client islands for the game and gallery. Cloudflare Pages or GitHub Pages |

## What is still open (does not block the plan)

- Erin’s photo delivery date (placeholders until then)
- Additional testimonials still to collect (ship with the existing 6)
- Which of the 2–3 logo options Erin picks (Phase 2)
- Exact hex tokens after contrast check (family is locked: teal / coral / cream)

## How to use this pack next

Start implementation from [PROJECT-PLAN.md](PROJECT-PLAN.md) and [BACKLOG.md](BACKLOG.md), Phase 1. Pull exact current wording from [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md). Do not treat screenshot OCR or Google Sites chrome as brand. Do not invent new factual claims.
