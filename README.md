# Hannie Huang — academic website (GitHub Pages ready)

This is a **static academic website**, built with plain HTML, CSS, and a few lines of JavaScript. There are no external fonts, analytics, CDNs, or libraries. The site works on GitHub Pages using the free public-repository option.

## Files

- `index.html` — homepage and biography
- `research.html` — research papers, work in progress, selected presentations
- `teaching.html` — teaching profile and courses
- `cv.html` — web CV, with a Print / Save as PDF button
- `assets/site.css` — colours, typography, layout
- `assets/site.js` — mobile navigation
- `assets/favicon.svg` — site icon
- `.nojekyll` — tells GitHub Pages to serve the static files as-is

## Publish on GitHub Pages (free)

1. Create or sign in to a free GitHub account at https://github.com.
2. Create a **public** repository called `YOURUSERNAME.github.io` (replace `YOURUSERNAME` with your exact GitHub username).
3. Upload **the contents of this folder** to the root of that repository (not an enclosing folder). Make sure `index.html` is at the repository root.
4. Open repository **Settings → Pages**.
5. Select **Deploy from a branch**, then choose **main** and **/(root)**; save.
6. Your address should then be `https://YOURUSERNAME.github.io/` after GitHub finishes publishing.

Official documentation: https://docs.github.com/en/pages/quickstart

## Preview locally

Open `index.html` in a browser, or use a terminal inside the site folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Updating content

Edit the relevant `.html` file. To update the visual design, edit `assets/site.css`.

### Add a photograph later

The homepage currently uses an abstract initials panel (HH), so it does not publish any unapproved likeness. When you supply a headshot, replace the `profile-panel` section in `index.html` with an `<img>` and adjust the panel CSS.

### Add a downloadable CV later

**Important:** The provided `CV.pdf` and `CV_tex.tex` files are example materials belonging to a different academic, and were deliberately **not** uploaded or linked. The original Hannie Huang CV available is older. After finalising an up-to-date CV, put a public-safe PDF in `assets/Hannie-Huang-CV.pdf`, and add a download link to the homepage or `cv.html`. Until then, visitors can use the printable web CV.

### Research papers

Research abstracts are high-level summaries based on the supplied research experience notes and past discussion. Before publishing, verify author spellings, titles, journal statuses, and that any linked paper PDFs are approved for public sharing.

## Mainland China accessibility

This website has no dependency on Google Fonts, Google Analytics, YouTube, or other Google-hosted assets. However, **GitHub Pages itself may not always be reachable from mainland China**. Test the deployed URL from mainland networks before relying on it as universally accessible. Hosting can be changed without rebuilding the site.

## Content review checklist

- [ ] Confirm public name, institutional affiliation and email
- [ ] Confirm research paper titles/coauthors and description of the current research
- [ ] Confirm 'PhD candidate / submitted for examination' wording remains current
- [ ] Add authorised professional headshot if desired
- [ ] Replace web CV with current public PDF when available
- [ ] Decide on Chinese translation if desired
- [ ] Check website on desktop, mobile, and mainland China networks
