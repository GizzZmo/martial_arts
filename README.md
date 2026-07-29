# Martial Arts Literature Guide

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
[![Latest Release](https://img.shields.io/github/v/release/GizzZmo/martial_arts)](https://github.com/GizzZmo/martial_arts/releases)
[![CI](https://github.com/GizzZmo/martial_arts/actions/workflows/ci.yml/badge.svg)](https://github.com/GizzZmo/martial_arts/actions/workflows/ci.yml)
[![Deploy](https://github.com/GizzZmo/martial_arts/actions/workflows/deploy.yml/badge.svg)](https://github.com/GizzZmo/martial_arts/actions/workflows/deploy.yml)
[![Screenshots](https://github.com/GizzZmo/martial_arts/actions/workflows/screenshots.yml/badge.svg)](https://github.com/GizzZmo/martial_arts/actions/workflows/screenshots.yml)

**A comprehensive guide to martial arts libraries, archives, publishers, journals, and essential books.**

The pursuit of knowledge in the martial arts is a journey enriched by its vast and varied literary landscape. This project maps the key resources available to practitioners, researchers, and historians.

![Martial Arts Literature](GeminiAPI-generated-5in1.png)

---

## Quick Start

No installation required. This is a static website.

1. **Clone or download** the repository
2. Open `index.html` in any modern browser

```bash
git clone https://github.com/GizzZmo/martial_arts.git
cd martial_arts
# then open index.html
```

Or browse the [GitHub repository](https://github.com/GizzZmo/martial_arts). After enabling GitHub Pages (see below), the live site will be at:

**https://gizzzmo.github.io/martial_arts/**

---

## Deployment (GitHub Pages)

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### One-time setup
1. Open **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually under the Actions tab)

The workflow packages all `*.html` pages plus root images / optional asset folders into a Pages artifact and deploys it. Relative links between pages continue to work under the `/martial_arts/` path prefix.

### Manual / offline package
Every CI run also uploads a **martial-arts-site** artifact (zip + tar.gz) you can download from the Actions run page for mirrors or local hosting.

---

## CI, assets, artifacts & screenshots

| Workflow | Trigger | What it does |
|----------|---------|----------------|
| **[CI](.github/workflows/ci.yml)** | push / PR to `main` | Validates required pages, HTML sanity checks, inventory of image assets, relative-link warnings; packages site as downloadable artifact |
| **[Deploy](.github/workflows/deploy.yml)** | push to `main` / manual | Builds static package → GitHub Pages |
| **[Screenshots](.github/workflows/screenshots.yml)** | HTML changes, weekly cron, manual | Serves site locally, captures desktop + mobile full-page PNGs with Playwright, uploads **page-screenshots** artifact |

Screenshot script: [`scripts/screenshots.mjs`](scripts/screenshots.mjs).

Local regeneration (optional):

```bash
python3 -m http.server 8080 &
# in another shell, after npm install playwright && npx playwright install chromium
BASE_URL=http://127.0.0.1:8080 node scripts/screenshots.mjs
```

---

## Usage Examples

### 1. Browse the full guide offline
```bash
git clone https://github.com/GizzZmo/martial_arts.git
cd martial_arts
open index.html          # macOS
# or
xdg-open index.html      # Linux
# or just double-click index.html on Windows
```

### 2. Jump straight to a specific section
Open any of these files directly in your browser:

| Goal | Open this file |
|------|----------------|
| Find digital archives + direct primary-source links | [`libraries-archives.html`](libraries-archives.html) |
| Discover specialist publishers | [`publishers.html`](publishers.html) |
| Look up academic journals & bibliographies | [`scholarship.html`](scholarship.html) |
| Browse curated essential books | [`book-compendium.html`](book-compendium.html) |
| Get advice on building a personal collection | [`building-library.html`](building-library.html) |
| Read the industry trends analysis | [`martial_arts_industry_trends.html`](martial_arts_industry_trends.html) |
| Prefer a wiki-style layout | [`wiki.html`](wiki.html) |

### 3. Typical research workflows

**Practitioner wanting foundational texts for their art**  
→ Start with [`book-compendium.html`](book-compendium.html) → filter by art (Karate, Judo, Aikido, HEMA, etc.) → note recommended editions and publishers → cross-check availability via the publishers section.

**Historian / HEMA researcher looking for primary sources**  
→ Go to [`libraries-archives.html`](libraries-archives.html) → use the **Direct Download Links** section (Wiktenauer I.33, Silver *Paradoxes*, HROARR manuals, ChineseLongSword free scans, Internet Archive, etc.) → then consult the historical treatises tables in the book compendium.

**Someone building a personal martial arts library**  
→ Read [`building-library.html`](building-library.html) for strategy → use the publishers and book compendium sections to prioritize purchases → check free digital resources (Wiktenauer, Project Gutenberg, Internet Archive) first.

**Academic writing a paper on martial arts literature**  
→ Use [`scholarship.html`](scholarship.html) for journals and bibliographies → cite the curated lists and tables → explore the industry trends page for broader context.

### 4. Serve it locally (optional)
```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000

# or with Node.js
npx serve .
```

---

## What's Inside

| Section | Description | File |
|---------|-------------|------|
| **Introduction** | The indispensable role of text in martial traditions | [introduction.html](introduction.html) |
| **Libraries & Archives** | Institutional libraries, digital archives, specialized collections, **and selected direct download links for primary sources** | [libraries-archives.html](libraries-archives.html) |
| **Publishers** | Specialist and academic publishers of martial arts texts (Tuttle, Shambhala, Kodansha, Turtle Press, and more) | [publishers.html](publishers.html) |
| **Scholarship** | Academic journals, magazines, and key bibliographies | [scholarship.html](scholarship.html) |
| **Book Compendium** | Curated list of historical treatises, seminal works by masters, scholarly books, and instructional guides | [book-compendium.html](book-compendium.html) |
| **Building Your Library** | Practical recommendations for collecting martial arts literature | [building-library.html](building-library.html) |
| **Conclusion** | Summary and future directions | [conclusion.html](conclusion.html) |
| **Industry Trends** | Analysis of the martial arts literature and publishing landscape | [martial_arts_industry_trends.html](martial_arts_industry_trends.html) |
| **Wiki View** | Alternative wiki-style presentation of the material | [wiki.html](wiki.html) |

The main entry point [`index.html`](index.html) contains the full report with navigation.

---

## Key Resources Covered

### Digital Archives & Primary Sources (highlighted)

| Resource | Focus | Access |
|----------|-------|--------|
| **[Wiktenauer](https://wiktenauer.com)** | HEMA fencing manuals & wrestling treatises (Liechtenauer, Fiore, Talhoffer, I.33, etc.) | Free scans, transcriptions, many translations |
| **[ChineseLongSword.com](https://chineselongsword.com)** | Ming-dynasty Chinese weapon manuals (Long Saber, Spear, Shaolin Staff, etc.) | Free scans + paid English translations |
| **[Shaolin Kung Fu Online Library](https://shaolinkungfulibrary.com)** | 1910s–1950s Shaolin & Chinese texts in English translation | Paid digital & print |
| **[Internet Archive](https://archive.org)** | Scans of out-of-print martial arts books and manuals | Free |
| **[Project Gutenberg](https://gutenberg.org)** | Public-domain English fencing & self-defense texts | Free |
| **[HROARR](https://hroarr.com)** | HEMA manuals & research downloads | Free |
| **[Kodokan Judo Museum & Library](https://kdkjd.org/judo-museum-library/)** | Judo primary materials | Free online catalogs; closed-stack access on site |

**Selected direct links** are in the **Direct Download Links** section of [`libraries-archives.html`](libraries-archives.html).

### Publishers
Turtle Press · Via Media · Shambhala · Kodansha · Tuttle · and major academic presses

### Essential Texts Highlighted
- Classical treatises (*Bubishi*, *Go Rin No Sho*, *Hagakure*, Liechtenauer tradition, Fiore dei Liberi…)
- Foundational works by Funakoshi, Kano, Ueshiba, Bruce Lee, Donn Draeger, and others
- Scholarly encyclopedias and modern research

---

## Suggested improvements (roadmap)

### Content
1. **Sync `index.html` with section pages** — `libraries-archives.html` is ahead of the monolithic `index.html` (e.g. Internet Archive, HROARR, direct download links). Either generate section pages from a single source or periodically diff-merge.
2. **Link health checks in CI** — expand the current relative-link checker with scheduled external URL probing (soft-fail / report-only) for Wiktenauer, IA, publishers, etc.
3. **Structured data** — optional JSON/YAML catalog of books & archives for search, filtering, and future API-ish use.
4. **More primary-source deep links** — Capo Ferro, Mair, Ringeck/Danzig glosses, official federation manuals (AJKF, Kukkiwon catalogs).
5. **Translations / i18n** — at least Norwegian or bilingual summaries for accessibility to non-English readers.

### UX / design
6. **Shared layout component** — extract common header/nav/footer into a small build step (11ty, Nunjucks, or simple includes) so wiki + section pages stay consistent.
7. **Search** — client-side search (Pagefind / Lunr) over the static HTML.
8. **Dark mode** and stronger mobile table UX (card layout for narrow screens).
9. **Move banner image** into `assets/` and compress / provide WebP + fallback.
10. **Pin Tailwind** — replace CDN Tailwind with a built CSS file for offline reliability and reproducibility.

### Ops
11. **GitHub Pages custom domain** (optional) once the default `*.github.io/martial_arts/` URL is verified.
12. **Release workflow** — on tag `v*`, attach the site zip/tar from CI as release assets.
13. **Dependabot** for Actions versions only (no app deps required yet).
14. **CODE_OF_CONDUCT.md** — referenced by CONTRIBUTING but not present yet.

---

## Releases

See the [Releases page](https://github.com/GizzZmo/martial_arts/releases) for versioned snapshots of the guide:

- **v1.5.0** — *The Indispensable Role of Text in Martial Traditions*
- **v1.0.1** — Academics in the form of science & (martial) arts
- **v0.0.1** — Guardians of Tradition & Digital Frontiers

---

## Contributing

Contributions are welcome — whether new resources, corrections, translations, or improvements to the HTML presentation.

Please read **[CONTRIBUTING.md](CONTRIBUTING.md)** for guidelines on content quality, submission process, and technical standards.

Issue templates are available for:
- Content contributions
- Bug reports
- Feature requests
- Questions

---

## License

This work is dedicated to the public domain under **[CC0 1.0 Universal](LICENSE)**.

You are free to copy, modify, distribute, and use the material for any purpose, without restriction.

---

## Author

**Jon-Arve Constantine Grønsberg-Ovesen** ([@GizzZmo](https://github.com/GizzZmo))

Art, science and technology.
