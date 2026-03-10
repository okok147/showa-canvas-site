# Showa Spectrum

A responsive archive experience built from legendary Japanese graphic designers and art directors.

## What this build includes

- Cinematic hero stage with layered geometric motion
- Three.js-powered hero scene with live orbital animation modes
- Reactive masters atlas covering:
  - Yusaku Kamekura
  - Ikko Tanaka
  - Tadanori Yokoo
  - Kiyoshi Awazu
  - Eiko Ishioka
  - Kazumasa Nagai
  - Shigeo Fukuda
  - Kohei Sugiura
- Generative "Poster Lab" with live controls:
  - palette mode
  - shape density
  - layout logic
  - 3D motion mode
  - motion toggle
- Timeline scrubber with key moments from 1956-1983
- Source shelf linking primary museum/archive references
- Responsive layout optimized for desktop and mobile

## Local preview

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Deployment

GitHub Pages deployment is automated through:

- `.github/workflows/deploy-pages.yml`

Every push to `main` publishes the latest site.
