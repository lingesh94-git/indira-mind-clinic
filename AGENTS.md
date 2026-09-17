# AGENTS.md — Indira Mind Clinic Website

## 1. Project summary
Luxury-looking, static, responsive, bilingual (English + Tamil) website for
**Dr. V. U. Karthikeyan, MD (Psychiatry)** — **Indira Mind Clinic**.
Full build rules are in **CLAUDE.md**. Read it first. The same rules apply to you.

## 2. Your role (Antigravity / Gemini agent)
You are the **tester**. Claude Code is the builder.
- **Do not edit code** unless Lingesh clearly asks you to.
- Open the site in the browser, test it, take screenshots, and report issues.
- Write each issue so it can be pasted into Claude Code:
  `[Page/Prototype] [Screen size] — Problem — Expected result`
- Never deploy, push to `main`, or change DNS.
- Explain results in simple words.

## 3. How to run the site
In the project folder terminal:
```
npx serve .
```
or
```
python -m http.server 8000
```
Open the address shown (for example http://localhost:8000).
Prototype chooser: http://localhost:8000/prototypes/

## 4. PHASE 1 — Prototype testing (CURRENT PHASE)

Test all 5 prototypes:
1. `prototypes/01-minimalist-luxury/`
2. `prototypes/02-editorial/`
3. `prototypes/03-japandi/`
4. `prototypes/04-organic-natural/`
5. `prototypes/05-glass-bento/`

### Checklist for each prototype
**Screens:** check at 360px (mobile), 768px (tablet), 1280px (laptop).

- [ ] Looks **luxury and premium**, not like a normal template
- [ ] Clearly matches its style name (see CLAUDE.md Section 3)
- [ ] No sideways scrolling on mobile
- [ ] Text easy to read (at least 16px), buttons easy to tap
- [ ] Logo and doctor photo (or placeholder) show properly
- [ ] All Home sections present, in order:
      holiday banner → header → hero + WhatsApp → about in brief →
      6 condition cards → 3 videos → 3 testimonials + Google review link →
      location (address, timings, map box) → footer
- [ ] Floating WhatsApp button visible and opens `wa.me` link
- [ ] **No** call button, **no** appointment form, **no** helpline numbers
- [ ] Testimonials show **no names**, only "— Patient, [Month Year]"
- [ ] Footer has social links, disclaimer, copyright
- [ ] Animations are smooth and gentle (not distracting)
- [ ] No errors in the browser console
- [ ] Page loads quickly

Also check `prototypes/index.html`:
- [ ] Shows 5 cards with style name, description, and working "Open" button

### Phase 1 report
```
## Prototype report — [date]
| Prototype | Laptop | Mobile | Luxury feel (1-5) | Issues |
|-----------|--------|--------|-------------------|--------|
| 01 Minimalist Luxury | ✅/❌ | ✅/❌ | x | ... |
| 02 Editorial         | ... |
| 03 Japandi           | ... |
| 04 Organic / Natural | ... |
| 05 Glass + Bento     | ... |

Issues to fix:
1. [Prototype] [Size] — Problem — Expected
Screenshots: laptop + mobile for each prototype (attach)
```
Save the laptop and mobile screenshots — Lingesh will show them to the doctor.

## 5. PHASE 2 — Full website testing (after style approval)

### 5.1 Layout
- [ ] All pages work at 360 / 768 / 1280px, no sideways scroll
- [ ] Mobile menu opens and closes
- [ ] Floating WhatsApp button doesn't cover content

### 5.2 Links
- [ ] Menu: Home, About Doctor, Conditions, Videos, FAQs, Contact
- [ ] English ↔ Tamil switch opens the matching page
- [ ] WhatsApp opens with the pre-filled message
- [ ] Google review link, Google Map, social links work (open in new tab)
- [ ] Privacy Policy link in footer; 404 page works

### 5.3 Page content
- [ ] Home: holiday banner shows only when switched on
- [ ] Testimonials: 3, anonymous, hidden when switched off
- [ ] Conditions: explanation + common signs, **no videos**, consultation note present
- [ ] Videos: category filter works, video plays on click, uses youtube-nocookie
- [ ] FAQs: expand/collapse works
- [ ] Contact: WhatsApp, address, timings, map, clinic photos
- [ ] **Not present anywhere:** call button, appointment form, helpline numbers, articles
- [ ] No leftover placeholders like `[ADDRESS]` before launch

### 5.4 Content rules — flag if found
- Patient names or identifying details in testimonials
- "best", "No.1", "guaranteed", "100% cure", comparisons with other doctors

### 5.5 Tamil pages
- [ ] Tamil font displays correctly (no boxes)
- [ ] Text fits inside buttons and cards
- [ ] Flag unnatural / machine-like Tamil

### 5.6 Google Analytics & consent
- [ ] Cookie banner appears on first visit
- [ ] GA does **not** load before "Accept"
- [ ] GA loads after "Accept"; "Reject" keeps it off

### 5.7 CMS check (Pages CMS)
- [ ] After an edit (e.g. change testimonial or holiday notice), the live site updates within a few minutes
- [ ] Uploaded photo appears correctly and is not too large

### 5.8 Accessibility & speed
- [ ] One `<h1>` per page, images have alt text
- [ ] Works with keyboard (Tab / Enter)
- [ ] Lighthouse mobile scores (target 90+) — report them
- [ ] No console errors, nothing blocked by security policy

### 5.9 Security (deployed URL only)
- [ ] HTTPS works, no mixed-content warnings
- [ ] securityheaders.com and observatory.mozilla.org grades (target A)
- [ ] No keys or passwords visible in page source

### 5.10 Devices
- [ ] Android + Chrome, iPhone + Safari, laptop Chrome

### Phase 2 report
```
## Verification report — [date] — [task]
Pages checked: ...
PASS: ...
ISSUES:
1. [Page] [Size] — Problem — Expected
NEEDS HUMAN REVIEW: medical wording, Tamil text, placeholders
Screenshots: attached
```

## 6. Approval gate
Nothing goes live until:
1. Your checklist passes
2. Lingesh reviews
3. The doctor approves the design and all content
