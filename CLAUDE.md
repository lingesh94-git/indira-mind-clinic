# CLAUDE.md — Indira Mind Clinic Website

## 1. Project summary
Luxury-looking, static, responsive, bilingual (English + Tamil) website for
**Dr. V. U. Karthikeyan, MD (Psychiatry)** — **Indira Mind Clinic**.

- Domain: mindmenderdoctor.com (connect ONLY after the doctor's approval)
- YouTube: https://www.youtube.com/@dr.v.u.karthikeyanmdpsychiatry
- Visitors: patients and families, on both laptop and mobile
- Owner/maintainer: Lingesh (not a professional developer, so explain every change in simple words)

## 2. Your role (Claude Code)
You are the **builder**. You write and edit code.
- Antigravity's Gemini agent **tests** the site in the browser (see AGENTS.md).
- Before any big task, write a short plan and wait for approval.
- After each task, give a summary: files changed, what to test, open questions.
- Nothing goes live without Lingesh's review and the doctor's approval.

## 3. Project phases

### PHASE 1 — Design prototypes (CURRENT PHASE)
Build the **Home page only**, in **8 different styles**, so the doctor can choose one.

| No | Folder | Style | Feel |
|----|--------|-------|------|
| 1 | `prototypes/01-minimalist-luxury/` | Minimalist Luxury | Calm, classy, premium private clinic |
| 2 | `prototypes/02-editorial/` | Editorial (magazine) | Doctor as a confident expert |
| 3 | `prototypes/03-japandi/` | Japandi | Peaceful, natural, very minimal |
| 4 | `prototypes/04-organic-natural/` | Organic / Natural | Healing, wellness retreat |
| 5 | `prototypes/05-glass-bento/` | Glassmorphism + Bento Grid | Modern, fresh, premium tech |
| 6 | `prototypes/06-atelier/` | Atelier Luxury | Fine catalogue, light sweeping over each image |
| 7 | `prototypes/07-warm-care/` | Warm Care | Friendly modern healthcare — **currently published for review** |
| 8 | `prototypes/08-warm-care-waves/` | Warm Care + Waves | Design 07 with curved waves between every section |

Also build `prototypes/index.html` — a simple chooser page showing one card per style
(style name, one-line description, "Open" button) so the doctor can compare.

**Prototype rules**
- Home page only, English only.
- Same content in all of them (Section 6 below) — only the design changes, so the comparison is fair.
- Each prototype is one self-contained `index.html` (CSS inside `<style>`, small JS inside `<script>` is OK **for prototypes only**).
- Google Fonts allowed. No other external libraries.
- Use the logo at `assets/img/logo.png` and doctor photo at `assets/img/doctor.jpg`. If a file is missing, show a neat placeholder box.
- Use placeholder text in `[BRACKETS]` for unknown details. Never invent facts.
- Must look luxury on **both laptop (1280px+) and mobile (360px)**.
- Tasteful animations only (fade-in, soft scroll reveal). Respect `prefers-reduced-motion`.
- Must still be fast and readable. Luxury ≠ heavy.

**Style guide per prototype**

1. **Minimalist Luxury** — cream background (#FAF7F2), deep green (#1F4D3F), thin gold lines (#B89B5E), serif headings (Playfair Display / Cormorant Garamond), sans body (Inter), large white space, slow fades.
2. **Editorial** — off-white (#F4F1EC) + near-black (#141414), green accent, very large serif headlines, big doctor portrait, asymmetric grid, thin rules, pull-quote style testimonials.
3. **Japandi** — warm beige (#EFE9E1), stone grey, muted green, natural textures (subtle paper/wood tone), low-contrast calm layout, rounded soft corners, lots of empty space, simple sans (Jost / Noto Sans).
4. **Organic / Natural** — sage (#A3B18A), sand (#E9E2D0), forest green (#2F4F3E), blob/wave shapes, leaf line-art, rounded cards, gentle parallax.
5. **Glassmorphism + Bento Grid** — soft mint-to-white gradient, frosted-glass cards (backdrop-filter blur), bento-style grid of different-size boxes for sections, clean sans (Manrope / Plus Jakarta Sans), subtle depth.
6. **Atelier Luxury** — ivory (#F6F3EE), charcoal (#232120), bronze (#A87E4F), stone (#7D766B). Cormorant Garamond + Inter. Catalogue tiles with the caption over the image; a band of light sweeps across each tile on hover and once when it first scrolls into view.
7. **Warm Care** — terracotta (#E76943), cream (#FDFBF6), tint (#FFF5F2), forest green (#245B33). Fraunces + Inter. Large rounded cards, pill buttons, header dropdown menus, single-slide video carousel, hand-drawn condition illustrations.
8. **Warm Care + Waves** — design 07 with curved SVG wave dividers between sections. Secondary cream deepened to #F6EFE2 so the curves are visible; the Location band moves onto that sand tone for the same reason.

**Publishing a review link during Phase 1**
The doctor cannot judge a design from a description, so Phase 1 may publish
**one chosen prototype** to a temporary review link. This is a review link, not
a launch — see Section 14. The real launch gate is unchanged.

### PHASE 2 — Full website (AFTER the doctor picks one style)
Build all pages in the chosen style, add Tamil, CMS, analytics, security, then deploy.
Do not start Phase 2 until Lingesh says the style is approved.

## 4. Final decisions (apply in both phases)
- Contact: **WhatsApp button only** (floating on every page, pre-filled message).
- **No** appointment form. **No** call button. **No** crisis helpline numbers.
- **No** Articles/blog section for now.
- Testimonials: **3 anonymous** testimonials (text + month/year only, no names) on the Home page, plus a "Read our reviews on Google" link.
- Conditions: simple explanation + common signs only (**no videos** on this page).
- Analytics: **Google Analytics 4** with a cookie consent banner (load GA only after the visitor accepts). Phase 2 only.
- CMS: **Pages CMS** (Phase 2).
- Logo: green "walking person with brain" logo. **The only file supplied is `assets/img/logo.png` — stacked/vertical, 361x502, transparent, brand green #1D453F.** There is no horizontal version and no circle version. Prototypes crop the mark out of it with CSS for the header and use the full stacked logo in the footer. If a horizontal version and a circle version are produced later, use them for the header and the favicon.

## 5. Final website pages (Phase 2)
Menu: Home | About Doctor | Conditions | Videos | FAQs | Contact | English / தமிழ்

1. **Home** — holiday banner (on/off), header, hero (photo, name, "MD (Psychiatry)", intro, WhatsApp), about in brief, conditions preview (6 cards), latest 3 videos, 3 testimonials + Google review link, clinic location (address, timings, small map), footer
2. **About Doctor** — photo, qualifications, registration number, years of experience, bio, languages, WhatsApp
3. **Conditions** — intro, condition cards (explanation + common signs), "not a substitute for consultation" note, WhatsApp
4. **Videos** — category filter, video grid (lite embed, youtube-nocookie), Subscribe button
5. **FAQs** — expand/collapse questions
6. **Contact** — big WhatsApp button, address + landmark, timings, Google Map, clinic photos
7. **Privacy Policy** — footer link (GA cookies, YouTube & Maps embeds)
8. **404** — Home + WhatsApp buttons
9. Tamil versions of all pages under `/ta/`

Footer on every page: social links (Instagram, Facebook, YouTube), quick links, privacy link, disclaimer, copyright.
- Disclaimer: "Information on this website is for general awareness and is not a substitute for medical consultation."
- Copyright: "© [YEAR] Indira Mind Clinic"

Also: favicon, share image (Open Graph) for WhatsApp/Facebook link previews.

## 6. Home page content (use in all prototypes)
- Holiday banner: "Clinic closed on [DATE]" (show it, so the doctor sees how it looks)
- Name: Dr. V. U. Karthikeyan — MD (Psychiatry)
- Clinic: Indira Mind Clinic
- Intro: "[One-line intro from doctor]"
- About in brief: "[2–3 lines bio]"
- Conditions preview (6): Depression, Anxiety, OCD, Addiction, Sleep Problems, Stress
- Videos: 3 placeholder video cards (thumbnail box + title)
- Testimonials: 3 placeholder quotes, each "— Patient, [Month Year]"
- Link: "Read our reviews on Google" → `[GOOGLE REVIEW LINK]`
- Location: `[ADDRESS]`, `[TIMINGS]`, map placeholder box
- WhatsApp: `https://wa.me/[NUMBER]?text=Hello%20Doctor%2C%20I%20would%20like%20to%20know%20about%20consultation%20timings.`

**Extra blocks used in prototypes 07 and 08**
- **Statistics band** — three figures with a short description under each. **Keep it.**
  Every figure stays as `[FIGURE]` until the doctor supplies a real number.
  **Never invent a statistic.** No success rates, cure rates, recovery percentages
  or patient-satisfaction scores unless the doctor provides the figure and the
  source, and approves it in writing. If he has no data, replace the band with
  facts that are true and verifiable — years in practice, languages spoken,
  conditions treated — or remove it.
- Three "how we care" cards: unhurried consultations / plain language / private and confidential
- A wide call-to-action card ("Not sure where to begin?") with the WhatsApp button
- A contact strip above the footer showing address and timings
- Header dropdown menus listing conditions and video topics

## 7. What the doctor can edit in Pages CMS (Phase 2)
Keep all editable content in `content/` as JSON files, and describe them in `.pages.yml`.

- Doctor photo, logo
- Short bio (English + Tamil), years of experience, registration number, qualifications
- Clinic timings, address, WhatsApp number, WhatsApp pre-filled message
- Clinic photos
- Holiday notice (text + on/off switch)
- The three statistics (figure + description) + on/off switch
- Google Maps link, Google review link
- Conditions (add / edit / remove)
- FAQs
- YouTube videos and video categories
- 3 testimonials (text + month/year) + on/off switch
- Instagram, Facebook, YouTube links

**Not editable by the doctor** (Lingesh only): SEO titles/descriptions, layout, colours, security headers, analytics code.

Rules for CMS:
- Compress uploaded images automatically; limit image size.
- On the testimonial screen, show: "Do not include names, places, or personal details."

## 8. Medical & content rules
- Never invent qualifications, experience, timings, address, phone numbers.
- Missing detail → visible placeholder like `[ADDRESS]`, and list it in your summary.
- No words like "best", "No.1", "guaranteed", "100% cure".
- No comparisons with other doctors.
- Testimonials must never show names, photos, places, or identifying details.
- Simple, warm, non-judgmental language. Avoid "crazy", "mad", "suffering from".
- Mark any sentence with a medical claim: `<!-- REVIEW: doctor -->`.
- Tamil: natural spoken-friendly Tamil. Flag lines that need a human check.

## 9. Tech stack (Phase 2)
- Plain HTML + CSS + vanilla JavaScript. No frameworks, no build step.
- Shared files: `assets/css/style.css`, `assets/js/main.js`
- Hosting: **GitHub Pages** (changed from Netlify). Code: GitHub.
- Repo: `https://github.com/lingesh94-git/indira-mind-clinic` (public).
- Pages serves the **`docs/` folder only**. `prototypes/` stays in the repo but is never published.
- No database, no login, no backend, no forms, no payments.

## 10. Security (Phase 2)
- No API keys or passwords in code. Never commit `.env`.
- No inline scripts or `onclick=` in the final site (so strict CSP works).
- External links: `rel="noopener noreferrer"`.
- `_headers` file with: Content-Security-Policy (allow self, Google Fonts, youtube-nocookie.com, i.ytimg.com, Google Maps embed, Google Analytics / googletagmanager), Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy.
- **GitHub Pages cannot send custom headers**, so a `_headers` file does nothing there
  and grade A is not achievable on Pages. Before launch, either move hosting to
  Netlify or Cloudflare Pages (both support `_headers`), or accept the lower grade.
  **Open decision — see Section 15.**
- Target: grade A on securityheaders.com and Mozilla Observatory.
- 2FA on GitHub, Netlify, domain, Google accounts (Lingesh does this).

## 11. Design quality (all phases)
- Mobile-first. Test at 360px, 768px, 1280px.
- Text at least 16px. Buttons at least 44px tall.
- One `<h1>` per page, alt text on images, good colour contrast, keyboard friendly.
- Images: WebP, compressed, lazy-loaded (except hero).
- Target Lighthouse mobile: 90+.

## 12. SEO (Phase 2)
Unique title + description per page, hreflang (English/Tamil), Open Graph share image, sitemap.xml, robots.txt, Physician/LocalBusiness JSON-LD with placeholders.

## 13. Git
- Small commits: `feat: add japandi prototype`, `fix: mobile menu`.
- During Phase 1, commits go straight to `main` — prototypes are drafts and nothing
  is live except the review link. From Phase 2, big changes go on a branch and merge
  after review.
- **Never commit `amaha screenshots/`** or any other competitor material. It is
  listed in `.gitignore`. The repo is public.

## 14. Deployment

### Review link (Phase 1 — already live)
- Host: **GitHub Pages**, from the `docs/` folder on branch `main`.
- Live: `https://lingesh94-git.github.io/indira-mind-clinic/`
- `docs/` currently contains **prototype 07 only**. The other prototypes return 404.
- Every page carries `noindex`, so search engines will not list it.
- To change which prototype is published, rebuild `docs/index.html` from that
  prototype: rewrite `../../assets/img/` to `assets/img/` and drop the
  "All styles" back link.
- This is a review link for the doctor. **It is not a launch.**

### Launch (Phase 2)
1. Doctor approves the design and every word of the content.
2. Gemini browser test → Lingesh review.
3. Resolve the hosting decision in Section 15 (headers cannot be set on GitHub Pages).
4. Security header check and fixes.
5. Remove every `[PLACEHOLDER]` and the `noindex` tags.
6. Before connecting mindmenderdoctor.com, list current DNS records (especially
   email/MX) so nothing breaks. Connect only after the doctor approves.

## 15. Open decisions
These are unresolved. Do not treat any of them as settled.

1. **Which design wins** — 07 or 08, or another. The doctor has not chosen.
2. **The accent colour in 07/08.** The design is closely modelled on a competitor
   in the same sector and country, at Lingesh's instruction. Code, text and
   illustrations are all original, so copyright exposure is low, but the overall
   look and feel is deliberately close — a trade-dress and reputational risk that
   falls on the doctor. **Recommendation: shift the terracotta #E76943 to a deeper
   rust or clay, and simplify the header dropdown, before launch.** Not yet decided.
3. **Hosting for launch** — stay on GitHub Pages and accept no security headers,
   or move to Netlify / Cloudflare Pages. See Section 10.
4. **The statistics band** — keep the block (decided), but the three figures are
   still `[FIGURE]`. The doctor must supply real numbers or the band gets
   true, non-clinical facts instead.
5. **Testimonial wording and the condition-card questions** — marked
   `<!-- REVIEW: doctor -->` in the code, not yet reviewed.
6. **Should `CLAUDE.md` and `AGENTS.md` stay in the public repo?** They contain no
   secrets, but they are internal working notes.

## 16. Out of scope (ask first)
Appointment booking, call button, payments, patient login, stored patient data, chatbots, articles/blog, WordPress.
