# Obrona fizjo

Jednoplikowa aplikacja webowa do nauki 72 pytań z praktycznej części obrony dyplomowej z fizjoterapii.

## Uruchomienie

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
```

Dane pytań znajdują się w `src/data/questions.ts`, a interfejs i logika nauki w `src/components/`. Postęp fiszek jest zapisywany w `localStorage` pod kluczem `obrona-fizjo-progress` z bezpiecznym fallbackiem do stanu w pamięci.
