# Obrona fizjo

Aplikacja do nauki na praktyczną część obrony dyplomowej z fizjoterapii (PUM Szczecin).

Uczy 72 pytań typu "Scharakteryzuj wizytę fizjoterapeutyczną u pacjenta z ..." nie metodą
wkuwania 72 osobnych odpowiedzi, tylko metodą: jeden szkielet, kilka szablonów, krótkie wyróżniki.

## Model mentalny

1. Jeden szkielet na wszystko: wywiad, ocena głównych dolegliwości, badanie podmiotowe i przedmiotowe, cele, program rehabilitacji.
2. Wywiad i program to kilka powtarzalnych szablonów, nie 72.
3. Do zapamiętania na jednostkę chorobową zostają tylko 2 do 3 wyróżniki.

Każda odpowiedź to: szablon bazowy (wspólny dla bloku) + dodatki (pozycje specyficzne) + wyróżnik (1 do 3 rzeczy kluczowych).

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja wystartuje na `http://localhost:5173`.

Budowanie wersji produkcyjnej:

```bash
npm run build
npm run preview
```

## Stack

- React + TypeScript, Vite
- Tailwind CSS
- Brak backendu, wszystko działa lokalnie w przeglądarce
- Postęp nauki zapisywany w `localStorage` (klucz `obrona-fizjo-progress`) z bezpiecznym fallbackiem do pamięci

## Struktura

- `src/data/` dane: typy, działy z kolorami, szablony, wszystkie 72 pytania
- `src/components/` widoki UI
- `src/storage.ts` obsługa postępu i `localStorage`
- `src/App.tsx` główny komponent z nawigacją

## Ekrany

- Metoda: trzy zasady nauki, plan na 10 dni, postęp per dział
- Szablony: rozwijane szablony wywiadu, badania, celów i programu z zakresami pytań
- Pytania: wszystkie 72 pytania pogrupowane po działach, filtr, odpowiedź w pięciu krokach szkieletu z rozróżnieniem szablon, dodatek, wyróżnik
- Fiszki: tryb aktywnego przypominania, ocena Umiem albo Powtórz, losowanie talii per dział lub ze wszystkich pytań, zapis postępu, karty do powtórki wracają częściej w sesji

## Źródło treści

Treść merytoryczna pochodzi wiernie z klucza egzaminacyjnego PUM Szczecin
(Pytania sprawdzające umiejętności praktyczne wraz z kluczem przykładowych odpowiedzi).
