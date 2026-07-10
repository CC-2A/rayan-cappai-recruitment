# Rayan Cappai - Official Recruitment Profile

Multilingual football recruitment website for **Rayan Cappai**, a 2006 French central midfielder (6 / 8 / 10).

## Live profile

https://cc-2a.github.io/rayan-cappai-recruitment/

Language-specific links:

- English: `?lang=en`
- Français: `?lang=fr`
- Español: `?lang=es`

## Recruitment flow

The page is deliberately organized for a fast staff review:

1. Current availability and key player facts.
2. Highlights for first screening.
3. Full match for unedited evaluation.
4. Football background and verified recognition.
5. One-page Sport CV and direct contact.

## Files

- `index.html`: semantic page structure, SEO and structured data.
- `style.css`: responsive navy/gold design.
- `app.js`: EN/FR/ES translations, navigation and profile-link copying.
- `Rayan_Cappai_Sport_CV_EN.pdf`: English Sport CV.
- `Rayan_Cappai_CV_Sportif_FR.pdf`: French Sport CV.
- `Rayan_Cappai_CV_Deportivo_ES.pdf`: Spanish Sport CV.
- `tools/generate_cvs.py`: reproducible CV generator.
- `robots.txt` and `sitemap.xml`: search-engine discovery.

## Local review

Open the site through a small local server so all assets and language switching behave as deployed:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Regenerate the CVs

The generator requires ReportLab and DejaVu Sans:

```bash
python3 tools/generate_cvs.py
```

All three PDFs must remain one-page A4 documents and must be visually rendered after any update.
