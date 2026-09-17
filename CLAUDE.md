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
Build the **Home page only**, in **5 different luxury styles**, so the doctor can choose one.

| No | Folder | Style | Feel |
|----|--------|-------|------|
| 1 | `prototypes/01-minimalist-luxury/` | Minimalist Luxury | Calm, classy, premium private clinic |
| 2 | `prototypes/02-editorial/` | Editorial (magazine) | Doctor as a confident expert |
| 3 | `prototypes/03-japandi/` | Japandi | Peaceful, natural, very minimal |
| 4 | `prototypes/04-organic-natural/` | Organic / Natural | Healing, wellness retreat |
| 5 | `prototypes/05-glass-bento/` | Glassmorphism + Bento Grid | Modern, fresh, premium tech |

Also build `prototypes/index.html` — a simple chooser page showing 5 cards
(style name, one-line description, "Open" button) so the doctor can compare.

**Prototype rules**
- Home page only, English only.
- Same content in all 5 (Section 6 below) — only the design changes, so the comparison is fair.
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
- Logo: green "walking person with brain" logo (chosen set). Header uses the horizontal version; favicon uses the circle version.

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

## 6. Home page content (use in all 5 prototypes)
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

## 7. What the doctor can edit in Pages CMS (Phase 2)
Keep all editable content in `content/` as JSON files, and describe them in `.pages.yml`.

- Doctor photo, logo
- Short bio (English + Tamil), years of experience, registration number, qualifications
- Clinic timings, address, WhatsApp number, WhatsApp pre-filled message
- Clinic photos
- Holiday notice (text + on/off switch)
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
- Hosting: Netlify. Code: GitHub.
- No database, no login, no backend, no forms, no payments.

## 10. Security (Phase 2)
- No API keys or passwords in code. Never commit `.env`.
- No inline scripts or `onclick=` in the final site (so strict CSP works).
- External links: `rel="noopener noreferrer"`.
- `_headers` file with: Content-Security-Policy (allow self, Google Fonts, youtube-nocookie.com, i.ytimg.com, Google Maps embed, Google Analytics / googletagmanager), Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy.
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
- Big changes on a branch; merge after review.

## 14. Deployment (Phase 2)
1. Deploy to temporary Netlify URL.
2. Gemini test → Lingesh review → doctor approval.
3. Security header check and fixes.
4. Before connecting mindmenderdoctor.com, list current DNS records (especially email/MX) so nothing breaks.

## 15. Out of scope (ask first)
Appointment booking, call button, payments, patient login, stored patient data, chatbots, articles/blog, WordPress.
