# Brief — Indira Mind Clinic website

Copy everything below this line and give it to the agent as the task.

---

## The job

Build the **Home page** for a psychiatry clinic website.

Deliver **one self-contained `index.html`** — CSS inside a `<style>` tag, any
JavaScript inside a `<script>` tag. No separate files except images.

## Who it is for

- **Dr. V. U. Karthikeyan, MD (Psychiatry)** — a single consultant psychiatrist
- **Indira Mind Clinic**, India
- Visitors are **patients and their families**, most of them on a phone, many of
  them anxious, tired or worried when they arrive. Some are older. Many arrive
  from a WhatsApp link or a YouTube video.
- The site must make a nervous person feel that this is a safe, competent place
  to take a personal problem.

## Technical rules

- Plain **HTML, CSS and vanilla JavaScript**. Nothing else.
- **No frameworks. No build step. No npm packages. No external libraries.**
- Google Fonts are allowed. Nothing else loaded from outside.
- Must work by opening the file in a browser.

## Sections, in this order

1. **Holiday notice bar** — a thin strip at the very top: "Clinic closed on [DATE]"
2. **Header** — logo, menu, language switch (English / தமிழ்)
3. **Hero** — doctor's name, "MD (Psychiatry)", a one-line introduction, his photo,
   and a WhatsApp button
4. **About the doctor, in brief** — a short bio and a link to a fuller profile
5. **Conditions treated** — six: Depression, Anxiety, OCD, Addiction, Sleep
   Problems, Stress. One card each, with a plain-language description.
6. **Videos** — three videos from the clinic's YouTube channel, plus a link to
   the channel
7. **Testimonials** — three, anonymous, plus a "Read our reviews on Google" link
8. **Clinic location** — address, consultation timings, and a map
9. **Footer** — social links, quick links, privacy policy link, disclaimer, copyright
10. **A floating WhatsApp button**, visible on every screen, at all times

## Content

Use exactly this. **Do not invent anything.**

- Doctor: **Dr. V. U. Karthikeyan — MD (Psychiatry)**
- Clinic: **Indira Mind Clinic**
- YouTube: `https://www.youtube.com/@dr.v.u.karthikeyanmdpsychiatry`
- WhatsApp link format:
  `https://wa.me/[NUMBER]?text=Hello%20Doctor%2C%20I%20would%20like%20to%20know%20about%20consultation%20timings.`
- Footer disclaimer, word for word: *"Information on this website is for general
  awareness and is not a substitute for medical consultation."*
- Footer copyright: *"© [YEAR] Indira Mind Clinic"*

### Details we do not have yet

Every one of these must appear on the page as **visible text in square
brackets**, so nothing gets forgotten:

`[DATE]` · `[One-line intro from doctor]` · `[2–3 lines bio]` · `[NUMBER]` ·
`[ADDRESS]` · `[TIMINGS]` · `[GOOGLE REVIEW LINK]` · `[GOOGLE MAPS EMBED]` ·
`[Video title]` · `[Testimonial 1 — to be supplied]` · `[Month Year]`

**Never guess a phone number, address, timing, qualification or year of
experience.** A visible placeholder is always correct; an invented fact is never
correct.

### Images

- Logo: `assets/img/logo.png`
- Doctor photo: `assets/img/doctor.jpg`

Neither file may exist yet. If a file is missing, show a neat placeholder box in
its place — never a broken image icon.

## Hard rules — these are not preferences

This is a doctor's website in India and it must follow medical advertising ethics.

**Must not appear anywhere:**
- A phone-call button, or any `tel:` link
- An appointment form, or any form at all
- Crisis or helpline numbers
- Patient names, patient photographs, places, or any identifying detail in the
  testimonials — month and year only
- Any statistic, success rate, cure rate or recovery percentage
- The words "best", "No.1", "guaranteed", "100% cure", or anything like them
- Any comparison with another doctor or clinic
- The words "crazy", "mad", or "suffering from"

**Contact happens through WhatsApp only.**

**Language:** simple, warm, never judgmental. Write as though speaking to someone
who is frightened and has not told anyone else yet.

## The look and feel

Do not copy any existing website. Design this from scratch. Choose your own
colours and your own typefaces — but they should produce the following feeling.

**The overall mood**

Warm and welcoming, not cold and clinical. It should feel like a calm, well-kept
private practice — not a hospital, and not a technology startup. Premium, but
never flashy: the expensive feeling should come from space, restraint and
confident proportions, not from decoration.

**Shape**

Soft everywhere. Generously rounded corners on cards and image blocks.
Pill-shaped buttons. Nothing sharp-edged or boxy.

**How sections meet**

Sections should not be separated by hard straight lines. Use curved, flowing
transitions so the page reads as one continuous piece rather than a stack of
boxes.

**Typography**

Headings should feel human and slightly literary — a little warmth and
character, not corporate. Large, with a clear size jump between headings and
body text, and tight, confident letter spacing. Body text should be plain and
highly legible, and should stay quiet so the headings lead.

**Colour**

A very light, warm base throughout, with **one** confident accent colour used
sparingly and deliberately — on buttons, small section labels, and one or two
bold full-width blocks. Include at least one **deep, dark, full-width section**
so the page has contrast and rhythm rather than being uniformly pale.

**Layout**

Build the page around a **large photograph of the doctor.** In at least one
section, let content cards **overlap the photograph**, so the page feels layered
and composed rather than flat. Put content into cards with small illustrations
or icons — never walls of plain text. Generous whitespace, but the page should
feel **full and finished, not sparse**.

**Movement**

Gentle and slow. Sections fade and rise softly as they come into view. A slow
band of light sweeping across an image once as it appears, and again on hover,
is welcome. Hover states everywhere, but subtle — a small lift, a soft shadow, a
line growing. Nothing bounces, spins, flashes or slides quickly.

**Specific components that work well here**

- The header menu should open **dropdown panels** with short descriptions, not
  just flat links
- The video section should show **one large video at a time**, with round arrow
  buttons on either side and dots beneath — not a grid of small thumbnails
- The testimonials should sit in a **swipeable carousel**
- Small hand-drawn style illustrations on the condition cards, rather than plain
  geometric icons

## Quality bar

- **Mobile first.** Must look right at 360px, 768px and 1280px.
- **No sideways scrolling** at any width.
- Body text **16px or larger**. Buttons and tap targets **at least 44px tall**.
- Exactly **one `<h1>`** on the page. Proper heading order below it.
- `alt` text on every image. Keyboard navigable. Visible focus outlines.
- Good colour contrast — this matters, some visitors are older or reading on a
  phone in daylight.
- Respect `prefers-reduced-motion`: when it is set, switch every animation off.
- Fast. Target a Lighthouse mobile score of 90+ across the board.

## What to hand back

1. The finished `index.html`
2. A short list of every `[PLACEHOLDER]` left on the page
3. A note of any decision you made that you would like reviewed

---

*Nothing on this page goes live until the doctor has approved both the design
and every word of the content.*
