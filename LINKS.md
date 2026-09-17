# Links — Indira Mind Clinic website

Everything in one place. Last updated: 17 September 2026.

---

## 1. The live link (this is the one to send the doctor)

https://lingesh94-git.github.io/indira-mind-clinic/

- Shows **prototype 07 — Warm Care** only. The other six designs are not reachable.
- Works on phone, tablet and laptop.
- Hidden from Google (every page carries a `noindex` tag), so it can only be
  opened by someone who has the link. Send it directly, don't post it anywhere.
- This is a **design sample for review**, not the finished clinic website.

When sending it, explain that grey boxes are where the photo and map will go,
and anything in [square brackets] is a detail still to be supplied.

---

## 2. GitHub

| What | Link |
|------|------|
| Repository | https://github.com/lingesh94-git/indira-mind-clinic |
| Pages settings | https://github.com/lingesh94-git/indira-mind-clinic/settings/pages |
| Build status (is it published yet?) | https://github.com/lingesh94-git/indira-mind-clinic/actions |

Pages is set to: branch `main`, folder `/docs`.
That `/docs` setting is what makes only prototype 07 public.

After any change is pushed, the live link updates itself in about 2 minutes.

---

## 3. Local preview (on this computer only)

Open a terminal in the project folder and run **one** of these:

    python -m http.server 8000

    npx serve .

Leave it running. Stop it later with Ctrl + C.

Then open:

| Page | Address |
|------|---------|
| **Chooser — all 8 designs** | http://localhost:8000/prototypes/ |
| 01 Minimalist Luxury | http://localhost:8000/prototypes/01-minimalist-luxury/ |
| 02 Editorial | http://localhost:8000/prototypes/02-editorial/ |
| 03 Japandi | http://localhost:8000/prototypes/03-japandi/ |
| 04 Organic / Natural | http://localhost:8000/prototypes/04-organic-natural/ |
| 05 Glass + Bento | http://localhost:8000/prototypes/05-glass-bento/ |
| 06 Atelier Luxury | http://localhost:8000/prototypes/06-atelier/ |
| 07 Warm Care **(published)** | http://localhost:8000/prototypes/07-warm-care/ |
| 08 Warm Care + Waves | http://localhost:8000/prototypes/08-warm-care-waves/ |
| 07 as published (docs copy) | http://localhost:8000/docs/ |

These addresses only work while the server is running, and only on this
computer. They cannot be sent to anyone.

To check a phone layout: press F12, then Ctrl + Shift + M, and set the width
to 360, then 768, then 1280. Reload after changing the width so the
animations play.

---

## 4. Clinic links

| What | Link |
|------|------|
| YouTube channel | https://www.youtube.com/@dr.v.u.karthikeyanmdpsychiatry |
| Instagram | not supplied yet |
| Facebook | not supplied yet |
| Google reviews | not supplied yet |
| Google Maps | not supplied yet |

---

## 5. Domain

**mindmenderdoctor.com — not connected, and must stay that way for now.**

Before it is connected, the current DNS records have to be listed and checked
(especially MX / email records) so that existing email does not break. That
happens only after the doctor approves the design and the content.

---

## 6. Still needed from the doctor

1. WhatsApp number (with country code)
2. Clinic address
3. Consultation timings
4. One-line introduction
5. Short bio (2–3 lines)
6. Google review link
7. Google Maps link
8. Holiday notice date
9. Instagram and Facebook links
10. Photo of the doctor — save as `docs/assets/img/doctor.jpg`
11. Three testimonials (no names — month and year only)
12. The three figures in the statistics band, or a decision to replace it

Until these arrive they show on the page inside square brackets, so nothing
gets forgotten. Nothing has been invented.

---

## 7. Useful later (Phase 2)

| What | Link |
|------|------|
| Security headers check | https://securityheaders.com |
| Mozilla Observatory | https://developer.mozilla.org/en-US/observatory |
| Netlify (alternative host) | https://app.netlify.com |
| Pages CMS (for the doctor to edit content) | https://pagescms.org |
