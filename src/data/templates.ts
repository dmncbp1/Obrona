// Reużywalne szablony wyodrębnione z klucza egzaminacyjnego.
// Każdy szablon to lista punktów, wspólna dla bloku pytań.
// W kodzie pytań szablony są wstawiane jako "base", a treść specyficzna jako "add".

// ----- WYWIAD -----

// Ortopedia i onkologia narządu ruchu (14-21, 67).
// Wspólna baza wywiadu, ocena dolegliwości w schemacie OPQRST jest osobnym krokiem.
export const WYWIAD_ORTHO: string[] = [
  "Problem, z jakim pacjent przyszedł.",
  "Choroby współistniejące.",
  "Przebyte urazy, operacje.",
  "Dotychczasowe leczenie.",
  "Badania dodatkowe.",
  "Przyjmowane leki.",
  "Czy występują czerwone lub żółte flagi.",
];

// Ocena głównych dolegliwości dla ortopedii, schemat typu OPQRST.
export const OCENA_ORTHO: string[] = [
  "Umiejscowienie?",
  "Początek?",
  "Ewolucja?",
  "Charakterystyka, rodzaj?",
  "Promieniowanie?",
  "Objawy współistniejące?",
  "Przebieg, wzorzec?",
  "Czynniki zaostrzające i łagodzące dolegliwości?",
  "Intensywność?",
];

// Pulmonologia (22-32). Jeden wywiad oddechowy dla całego bloku.
export const WYWIAD_PULMO: string[] = [
  "Choroba główna (od jak dawna, jakie objawy, jak zmieniły się w czasie, co je modyfikuje).",
  "Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie.",
  "Choroby współistniejące, leki, dieta, alkohol, styl życia.",
  "Palenie papierosów.",
  "Sytuacja socjalna i finansowa.",
  "Warunki mieszkaniowe.",
  "Wykonywany zawód, hobby.",
  "Duszność (skala Borga lub inna).",
];

// Kardiologia i kardiochirurgia (33-42). Jeden wywiad sercowo-naczyniowy.
export const WYWIAD_KARDIO: string[] = [
  "Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód.",
  "Objawy, jakie występowały przed zabiegiem.",
  "Duszności (w spoczynku, podczas aktywności).",
  "Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie).",
  "Palenie papierosów.",
  "Aktywność fizyczna przed zabiegiem.",
  "Ból (gdzie, kiedy, natężenie).",
  "Choroby współistniejące.",
  "Przebyte operacje.",
];

// Neurologia (50-66). Wywiad neurologiczny.
export const WYWIAD_NEURO: string[] = [
  "Podstawowe dane personalne.",
  "Aktualne dolegliwości.",
  "Choroby współistniejące i przebyte.",
  "Leczenie (szpitalne i ambulatoryjne).",
  "Zażywane leki, używki.",
  "Wywiad rodzinny i środowiskowy.",
];

// Uszkodzenia nerwów obwodowych ręki (59-61, 70-72).
export const WYWIAD_REKA: string[] = [
  "Podstawowe dane personalne.",
  "Aktualne dolegliwości.",
  "Choroby współistniejące i przebyte.",
  "Zażywane leki.",
  "Używki.",
  "Ręka dominująca.",
  "Zawód, aktywność zawodowa.",
  "Czas pojawienia się i rodzaj objawów, nasilenie objawów.",
  "Czas zdarzenia.",
  "Dynamika narastania dolegliwości.",
  "Dolegliwości bólowe.",
];

// ----- BADANIE -----

// Badanie funkcjonalne wspólne dla ortopedii i onkologii narządu ruchu.
export const BADANIE_ORTHO: string[] = [
  "Badanie funkcjonalne okolicy objętej dolegliwościami, testy aktywne, pasywne, oporowe.",
  "Ocena postawy pacjenta.",
  "Palpacja.",
  "Ocena blizny.",
];

// Badanie oddechowe wspólne dla całej pulmonologii.
export const BADANIE_PULMO: string[] = [
  "Obserwacja: tor oddechowy, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów.",
  "Dotyk: ruchomość klatki piersiowej, ocena potliwości.",
  "Słuch: świst, osłuchiwanie, odgłosy oddechowe.",
  "Czucie: drżenie głosowe, opukiwanie klatki piersiowej.",
];

// Badanie kardiologiczne wspólne dla kardiologii i kardiochirurgii.
export const BADANIE_KARDIO: string[] = [
  "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga.",
  "Test 6-minutowego marszu.",
  "Test Up and Go.",
  "Analiza chodu.",
];

// Badanie neurologiczne centralne (udar, krwotok, neuropatie z oceną skalami).
export const BADANIE_NEURO_CENTRALNY: string[] = [
  "Ocena sylwetki, symetrii ciała, nawykowego ustawienia kręgosłupa i kończyn.",
  "Badanie zakresu ruchomości kończyn górnych i dolnych oraz kręgosłupa (test palce-podłoga).",
  "Badanie siły mięśniowej (test Lovetta, dynamometr).",
  "Badanie napięcia mięśniowego (skala Ashwortha).",
  "Badanie chodu i równowagi (próba Romberga).",
  "Badanie czucia powierzchownego i głębokiego, badanie palpacyjne.",
  "Skala uszkodzeń REPTY (świadomość, orientacja, mowa, siła, czucie).",
  "Zmodyfikowana skala Rankina (zmiany stanu funkcjonalnego).",
  "Skala Barthel (ocena jakości życia).",
  "Test ręki Frenchay (funkcje chwytne i manipulacyjne ręki).",
];

// Badanie kliniczne wspólne dla uszkodzeń nerwów obwodowych ręki.
export const BADANIE_NERW: string[] = [
  "Zaburzenia ruchowe (siła i zakres ruchu objętej okolicy).",
  "Zaburzenia czuciowe (obszar zaopatrzenia nerwu).",
  "Zaburzenia wegetatywne (skóra, wzrost włosów i paznokci).",
];

// ----- CELE -----

export const CELE_NEURO_CENTRALNY: string[] = [
  "Zapobieganie zaburzeniom w obrębie układu ruchu: przykurczom i skostnieniom okołostawowym.",
  "Zapobieganie zaburzeniom w obrębie powłoki wspólnej (skóry), zapobieganie odleżynom.",
  "Reedukacja chodu i czynności życia codziennego.",
];

export const CELE_KARDIO: string[] = [
  "Powrót do normalnego życia, adaptacja do ograniczeń spowodowanych chorobą.",
  "Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej.",
  "Jak najszybsze uruchomienie pacjenta, przeciwdziałanie powikłaniom zakrzepowo-zatorowym i oddechowym.",
  "Utrzymanie efektów zabiegu, podniesienie wydolności fizycznej.",
];

// ----- PROGRAM -----

// Pulmonologia (22-32). Różni się akcentem na fazę wdechu albo wydechu oraz inhalacjami.
export const PROGRAM_PULMO: string[] = [
  "Toaleta drzewa oskrzelowego.",
  "Aktywacja przepony, aktywizacja mięśni oddechowych, ruchomość klatki piersiowej i obręczy barkowej.",
  "Trening oddechowy z użyciem urządzeń (trenażery oddechu).",
];

// Kardiologia i kardiochirurgia (33-42). Różni się głównie czasem i protokołem pionizacji.
export const PROGRAM_KARDIO: string[] = [
  "Trening chodu.",
  "Ćwiczenia ogólnousprawniające.",
  "Ćwiczenia przeciwzakrzepowe.",
  "Ćwiczenia oddechowe.",
  "Monitorowane treningi na cykloergometrach, na bieżni.",
  "Edukacja pacjenta i rodziny.",
];

// Neurologia centralna (50, 57, 58).
export const PROGRAM_NEURO_CENTRALNY: string[] = [
  "Zapobieganie odleżynom: masaż, kąpiele wirowe, ćwiczenia w wannie do hydrogimnastyki, elektrostymulacja mięśni osłabionych.",
  "Ćwiczenia zgodne z założeniami metody NDT-Bobath lub PNF.",
  "Ćwiczenia wspomagane, w odciążeniu, w odciążeniu z obciążeniem, czynne wolne, ćwiczenia ogólnorozwojowe w basenie.",
  "Pionizacja, reedukacja chodu, reedukacja czynności życia codziennego.",
];

// Uszkodzenia nerwów obwodowych (59-61). Niemal identyczny program dla całego bloku.
export const PROGRAM_NERW: string[] = [
  "Masaż.",
  "Fizykoterapia (ciepłolecznictwo, elektrostymulacja, kąpiele wirowe, magnetoterapia, laseroterapia, ultradźwięki).",
  "Ćwiczenia bierne.",
  "Ćwiczenia czynne.",
  "Ćwiczenia samowspomagane.",
  "Metody neurofizjologiczne (np. PNF).",
  "Terapia ręki.",
  "Terapia manualna.",
  "Neuromobilizacja.",
  "Kinesiology taping.",
  "Ortezy.",
];

// Reumatologia (43-47). Wspólny program reumatologiczny.
export const PROGRAM_REUMA: string[] = [
  "Zimnolecznictwo w ostrej fazie choroby.",
  "Fizykoterapia (prądy TENS, jonoforeza, prądy interferencyjne) w celu zmniejszenia stanu zapalnego i dolegliwości bólowych.",
  "Ćwiczenia zwiększające zakres ruchu w stawach.",
  "Terapia tkanek miękkich w celu utrzymania jak największego zakresu ruchomości.",
  "Zapobieganie deformacjom oraz korekcja deformacji już powstałych.",
  "Edukacja pacjenta dotycząca prawidłowego wykonywania i doboru ćwiczeń.",
];

export interface TemplateInfo {
  id: string;
  title: string;
  scope: string;
  group: "Wywiad" | "Badanie" | "Cele" | "Program";
  items: string[];
}

export const TEMPLATE_CATALOG: TemplateInfo[] = [
  { id: "wywiad-ortho", title: "Wywiad ortopedyczny", scope: "Pytania 14-21, 67", group: "Wywiad", items: WYWIAD_ORTHO },
  { id: "ocena-ortho", title: "Ocena dolegliwości (OPQRST)", scope: "Pytania 14-21, 67", group: "Wywiad", items: OCENA_ORTHO },
  { id: "wywiad-pulmo", title: "Wywiad oddechowy", scope: "Pytania 22-32", group: "Wywiad", items: WYWIAD_PULMO },
  { id: "wywiad-kardio", title: "Wywiad sercowo-naczyniowy", scope: "Pytania 33-42", group: "Wywiad", items: WYWIAD_KARDIO },
  { id: "wywiad-neuro", title: "Wywiad neurologiczny", scope: "Pytania 50-66", group: "Wywiad", items: WYWIAD_NEURO },
  { id: "wywiad-reka", title: "Wywiad pod nerwy obwodowe ręki", scope: "Pytania 59-61, 70-72", group: "Wywiad", items: WYWIAD_REKA },
  { id: "badanie-ortho", title: "Badanie funkcjonalne (ortopedia)", scope: "Pytania 14-21, 67", group: "Badanie", items: BADANIE_ORTHO },
  { id: "badanie-pulmo", title: "Badanie oddechowe (obserwacja, dotyk, słuch, czucie)", scope: "Pytania 22-32", group: "Badanie", items: BADANIE_PULMO },
  { id: "badanie-kardio", title: "Badanie kardiologiczne", scope: "Pytania 33-42", group: "Badanie", items: BADANIE_KARDIO },
  { id: "badanie-neuro", title: "Badanie neurologiczne ze skalami (REPTY, Rankin, Barthel, Frenchay)", scope: "Pytania 50, 57, 58", group: "Badanie", items: BADANIE_NEURO_CENTRALNY },
  { id: "cele-kardio", title: "Cele rehabilitacji kardiologicznej", scope: "Pytania 33-42", group: "Cele", items: CELE_KARDIO },
  { id: "cele-neuro", title: "Cele rehabilitacji neurologicznej (centralnej)", scope: "Pytania 50, 57, 58", group: "Cele", items: CELE_NEURO_CENTRALNY },
  { id: "program-pulmo", title: "Program oddechowy", scope: "Pytania 22-32, akcent wdech, wydech, inhalacje", group: "Program", items: PROGRAM_PULMO },
  { id: "program-kardio", title: "Program kardiologiczny", scope: "Pytania 33-42, różni się protokołem pionizacji", group: "Program", items: PROGRAM_KARDIO },
  { id: "program-neuro", title: "Program neurologiczny (centralny), NDT-Bobath, PNF", scope: "Pytania 50, 57, 58", group: "Program", items: PROGRAM_NEURO_CENTRALNY },
  { id: "program-nerw", title: "Program dla nerwu obwodowego", scope: "Pytania 59-61", group: "Program", items: PROGRAM_NERW },
  { id: "program-reuma", title: "Program reumatologiczny", scope: "Pytania 43-47", group: "Program", items: PROGRAM_REUMA },
];
