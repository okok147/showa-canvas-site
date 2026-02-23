# Showa Spectrum

A high-concept web experience inspired by 1960s-1970s Japanese graphic design.

## What this build includes

- Cinematic hero stage with layered geometric motion
- Interactive artist explorer (Kamekura, Tanaka, Yokoo, Awazu, Ishioka)
- Generative "Poster Lab" with live controls:
  - palette mode
  - shape density
  - layout logic
  - motion toggle
- Timeline scrubber with key moments from 1960-1978
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
