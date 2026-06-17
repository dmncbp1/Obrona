import type { Question } from "./types";
import {
  WYWIAD_ORTHO,
  OCENA_ORTHO,
  WYWIAD_PULMO,
  WYWIAD_KARDIO,
  WYWIAD_NEURO,
  WYWIAD_REKA,
  BADANIE_ORTHO,
  BADANIE_PULMO,
  BADANIE_KARDIO,
  BADANIE_NEURO_CENTRALNY,
  CELE_NEURO_CENTRALNY,
  CELE_KARDIO,
  PROGRAM_PULMO,
  PROGRAM_KARDIO,
  PROGRAM_NEURO_CENTRALNY,
  PROGRAM_NERW,
  PROGRAM_REUMA,
} from "./templates";

// Treść wiernie według klucza egzaminacyjnego PUM Szczecin.
// base = wspólny szablon bloku, add = treść specyficzna pytania, star = wyróżniki.

export const QUESTIONS: Question[] = [
  // ===================== PEDIATRIA (1-13) =====================
  {
    id: 1,
    section: "pediatria",
    title: "niemowlę z kręczem szyi",
    base: {
      wywiad: [
        "Od kiedy?",
        "Jak długo?",
        "Jaka przyczyna patologii (wrodzona czy nabyta, mięśniowo-pochodna czy kostno-pochodna)?",
        "Czy występuje wada wzroku lub słuchu?",
      ],
      ocena: [],
      badanie: [
        "Wizualna ocena symetrii głowy w leżeniu.",
        "Ocena kontroli głowy w przestrzeni.",
        "Ocena, czy dziecko rotuje głowę w stronę przeciwną.",
        "Palpacyjna ocena napięcia mm. MOS po prawej i lewej stronie szyi.",
        "Sprawdzenie ustawienia barków.",
        "Palpacyjna ocena napięcia m. trapezius cz. zstępująca po stronie prawej i lewej.",
        "Ocena długości mm. MOS po prawej i lewej stronie szyi.",
      ],
      cele: [
        "Normalizacja napięcia m. MOS oraz wzmocnienie rozciągniętego m. MOS po stronie przeciwnej.",
        "Normalizacja napięcia m. trapezius cz. zstępująca po stronie napiętej.",
        "Korekcja ustawienia głowy, powrót do symetrii.",
        "Wydłużenie skróconego m. MOS.",
      ],
      program: [
        "Rozgrzewanie m. MOS i m. trapezius po stronie skróconej (ciepłolecznictwo, fango, sollux, termofor).",
        "Masaż klasyczny m. MOS i m. trapezius po stronie skróconej.",
        "Rozciąganie (biernie i czynnie) m. MOS i m. trapezius po stronie skróconej.",
        "Ćwiczenia czynne oraz czynne wzmacniające m. MOS.",
        "Wprowadzenie zasad pielęgnacji neurorozwojowej (karmienie, noszenie, ubieranie, zabawa) aktywizujących głowę w stronę pomijaną.",
      ],
    },
    star: [
      "Palpacyjna ocena i wydłużenie skróconego m. MOS po stronie skróconej.",
      "Pielęgnacja neurorozwojowa aktywizująca głowę w stronę pomijaną.",
    ],
  },
  {
    id: 2,
    section: "pediatria",
    title: "niemowlę ze zwichnięciem i dysplazją stawu biodrowego",
    base: {
      wywiad: [
        "Jakie ułożenie dziecka w trakcie ciąży oraz porodu?",
        "Jaka masa urodzeniowa dziecka?",
        "Małowodzie?",
        "Wady rozwojowe w rodzinie?",
        "Inne wady kończyn dolnych u dziecka?",
      ],
      ocena: [],
      badanie: [
        "Noworodki: objaw Ortolaniego, objaw Barlowa, ocena długości względnej kkd w pozycji zgięcia 90 st. w biodrach i kolanach.",
        "Porównywanie wysokości kolanek.",
        "Niemowlęta: ocena asymetrii fałdów pachwinowych.",
        "Ocena ograniczenia odwiedzenia od 5 tyg. życia, odwiedzenie poniżej lub równe 60 st.",
        "Ocena asymetrii odwiedzenia, utrudnienie z uczuciem hamowania.",
        "Przemieszczenie krętarza większego kości udowej ku górze.",
        "Nierówność kkd, niewyczuwanie głowy kości udowej w panewce.",
      ],
      cele: [
        "Uzyskanie koncentrycznej repozycji, koncentrycznego ustawienia głowy kości udowej w panewce stawu biodrowego.",
      ],
      program: [
        "Dzieci 0-6 m.ż.: szelki Pavlika (skuteczne do 6 m.ż.) dla właściwego ustawienia stawu.",
        "USG po założeniu szelek w celu kontroli repozycji, kontrole co 7 dni, szelki przez całą dobę.",
        "Czas leczenia stawów niestabilnych nie mniej niż 12 tygodni od stabilnej repozycji.",
        "Poduszka Frejki, szyna odwodząca, szerokie pieluszkowanie.",
        "Dzieci 6-18 m.ż.: leczenie poprzedzone wyciągiem ponad głową, następnie zamknięta repozycja z ewentualnym przezskórnym przecięciem m. przywodziciela długiego.",
      ],
    },
    star: [
      "Objaw Ortolaniego i objaw Barlowa.",
      "Szelki Pavlika skuteczne do 6 m.ż.",
    ],
  },
  {
    id: 3,
    section: "pediatria",
    title: "niemowlę z uszkodzeniem splotu ramiennego",
    base: {
      wywiad: [
        "Powikłanie w trakcie ciąży, okołoporodowe lub poporodowe?",
        "Uraz mechaniczny w trakcie porodu?",
        "Niewłaściwe ułożenie dziecka w brzuchu?",
        "Silne pociągnięcie dziecka za ramię?",
        "Czynniki wysokiego ryzyka, okręcenie pępowiną, złamanie obojczyka?",
        "Poród z użyciem kleszczy?",
      ],
      ocena: [],
      badanie: [
        "Ocena siły mięśniowej.",
        "Ocena zakresu ruchomości.",
        "Ocena czucia powierzchniowego.",
        "Ocena wizualna (obrzęk, zmiana koloru skóry, krwiaki).",
        "Ocena ruchów spontanicznych.",
      ],
      cele: [
        "Doprowadzenie kończyny górnej do jak najwcześniejszej funkcjonalności w czynnościach dnia codziennego.",
        "Zabezpieczenie przed deformacjami i włączenie kończyny do schematu własnego ciała.",
        "Zwiększenie siły mięśniowej i zakresu ruchomości porażonej kończyny.",
        "Poprawa czucia porażonej kończyny górnej.",
      ],
      program: [
        "Zabezpieczenie kg w pozycji spoczynkowej (nieznaczne odwiedzenie w stawie ramiennym, zgięcie łokcia 70 st.).",
        "Pierwsze kilka dni: adaptacja, bez ruchów biernych poza stymulacją dotykową dłoni.",
        "Od 6 dnia: pozycjonowanie ręki wzdłuż ciała, układanie w pozycji krakowiaka i statuy wolności.",
        "Masaż tułowia i kkg, ćwiczenia bierne w 75% zakresu ruchomości.",
        "Naświetlania światłem spolaryzowanym, laseroterapia biostymulująca, okłady cieplne.",
        "Ćwiczenia oparte na metodach neurofizjologicznych (Vojta, NDT-Bobath), mobilizacje okołostawowe.",
      ],
    },
    star: [
      "Układanie kończyny w pozycji krakowiaka i statuy wolności.",
      "Metody neurofizjologiczne: Vojta, NDT-Bobath.",
    ],
  },
  {
    id: 4,
    section: "pediatria",
    title: "dziecko z dystrofią mięśniową",
    base: {
      wywiad: [
        "Poziom enzymów mięśniowych CPK?",
        "Badania genetyczne?",
        "Opóźnienie rozwoju motoryki dużej w pierwszych dwóch latach?",
        "Kiedy dziecko zaczęło chodzić samodzielnie?",
        "Niedowład lub obniżenie napięcia w mm. proksymalnych, zaburzenia oddychania?",
        "Występowanie choroby w rodzinie?",
      ],
      ocena: [],
      badanie: [
        "Ocena siły mięśniowej wg Lovetta, manualny test mięśniowy.",
        "Ocena zakresu ruchomości stawów goniometrem.",
        "Objaw Gowersa.",
        "Ocena rozwoju psychomotorycznego i chodu.",
        "Ocena wydolności układu oddechowego, spirometria w pozycji leżącej i siedzącej.",
        "EMG z zapisem miopatycznym.",
        "Określenie poziomu dystrofiny i kinazy kreatynowej.",
      ],
      cele: [
        "Zachowanie siły mięśniowej oraz kształtowanie właściwej postawy ciała i funkcji ruchowych.",
        "Zachowanie funkcji oddechowej.",
        "Leczenie lub zapobieganie ograniczeniu ruchomości klatki piersiowej i skoliozie.",
        "Opieka wielodyscyplinarna i edukacja rodziców oraz dzieci.",
      ],
      program: [
        "Przeciwdziałanie przykurczom (masaż klasyczny i funkcjonalny, rozciąganie, technika hold-relax, PNF, Bobath, Vojta).",
        "Utrzymanie siły mięśniowej i równowagi między agonistami a antagonistami.",
        "Ćwiczenia zachowujące prawidłowy zakres ruchu i rozciągające.",
        "Ćwiczenia korekcji postawy.",
        "Nauka swobodnego oddychania i wzmacnianie mm. oddechowych.",
      ],
    },
    star: [
      "Objaw Gowersa.",
      "Poziom CPK, dystrofiny i badanie genetyczne.",
      "Męczący trening jest niedopuszczalny.",
    ],
  },
  {
    id: 5,
    section: "pediatria",
    title: "dziecko ze skoliozą",
    base: {
      wywiad: [
        "Od kiedy? Jak długo?",
        "Czy znana jest przyczyna?",
        "Ile stopni ma skolioza i w jakim tempie się powiększa?",
        "Czy występowała skolioza w rodzinie?",
      ],
      ocena: [],
      badanie: [
        "Test Rissera, ocena kąta Cobba, test Adamsa.",
        "Ocena symetrii i wysokości stawów barkowych oraz łopatek.",
        "Ocena symetrii i wielkości kątów taliowych oraz talerzy biodrowych.",
        "Ocena krzywizny kręgosłupa w płaszczyźnie strzałkowej.",
        "Ocena rotacji kręgosłupa skoliometrem, ocena linii wyrostków kolczystych.",
        "Ocena długości kończyn dolnych w leżeniu tyłem.",
      ],
      cele: [
        "Uzyskanie korekcji kręgosłupa (symetrii) i zahamowanie pogłębiania patologii.",
        "Rozluźnienie mięśni nadmiernie napiętych i wzmocnienie nadmiernie rozciągniętych.",
        "Poprawa symetrii klatki piersiowej, łopatek, obręczy barkowej i biodrowej.",
        "Wzmocnienie gorsetu mięśniowego, przygotowanie do ewentualnej operacji.",
      ],
      program: [
        "Wygięcie 10-25 st.: pozycje i ćwiczenia asymetryczne rozciągające przykurczone grupy, ćwiczenia przywracające ruchomość w pł. strzałkowej.",
        "Asymetryczne ćwiczenia wzmacniające mięśnie kręgosłupa i tułowia, nauka nawyku prawidłowej postawy.",
        "Masaż pobudzający mięśnie po stronie wypukłej, rozluźniający po stronie wklęsłej.",
        "Ciepłolecznictwo (sollux, fango, borowina) i elektroterapia.",
        "Wygięcie 25-45 st.: ćwiczenia asymetryczne, gorset, ciepłolecznictwo, masaż klasyczny; przy powiększaniu kwalifikacja do leczenia operacyjnego.",
      ],
    },
    star: [
      "Test Rissera, kąt Cobba, test Adamsa.",
      "Ocena rotacji skoliometrem.",
    ],
  },
  {
    id: 6,
    section: "pediatria",
    title: "dziecko z mukowiscydozą",
    base: {
      wywiad: [
        "Badanie przesiewowe?",
        "Czy występuje przewlekły lub nieefektywny kaszel?",
        "Czy występowały nawracające zapalenia płuc i oskrzelików?",
        "Czy występowały obfite, tłuszczowe stolce?",
        "Czy występowało krwioplucie, palce pałeczkowate, bardzo słony pot?",
      ],
      ocena: [],
      badanie: [
        "Pomiar obwodu klatki piersiowej taśmą centymetrową.",
        "Ocena wymiaru klatki piersiowej (czy jest beczkowata).",
        "Ocena palców (palce pałeczkowate), spirometria.",
        "Próba chlorkowa.",
        "Ocena funkcji przepony.",
      ],
      cele: [
        "Zmniejszenie nasilenia objawów choroby.",
        "Możliwie jak najdłuższe zachowanie prawidłowej funkcji płuc, wydolności fizycznej i dobrego samopoczucia oraz poprawa jakości życia.",
      ],
      program: [
        "Dzieci 0-18 m.ż.: techniki drenażu pozycyjnego wraz z opukiwaniem.",
        "Dzieci 18 m.ż. do 4 r.ż.: ćwiczenia oddechowe w formie zabawy, przygotowanie do technik PEP.",
        "Dzieci powyżej 5 r.ż.: techniki PEP, aktywny cykl oddechowy, technika natężonego wydechu (Huff), drenaż autogeniczny.",
        "Drenaż ułożeniowy (6-10 pozycji w zależności od segmentu), zawsze z oklepywaniem, wstrząsaniem, sprężynowaniem klatki, około 20 minut.",
        "Trening mięśni oddechowych, ćwiczenia ogólnorozwojowe, sport, edukacja.",
      ],
    },
    star: [
      "Próba chlorkowa (potowa).",
      "Drenaż ułożeniowy zawsze z oklepywaniem, techniki PEP.",
    ],
  },
  {
    id: 7,
    section: "pediatria",
    title: "dziecko z rdzeniowym zanikiem mięśni (SMA)",
    base: {
      wywiad: [
        "Badanie genetyczne.",
        "Czy rodzeństwo jest zdrowe?",
        "Jak przebiegał rozwój psychomotoryczny (kiedy dziecko zaczęło siadać, czworakować, wstawać)?",
        "Czy występują upadki, przewracanie się dziecka?",
      ],
      ocena: [],
      badanie: [
        "Test CHOP-INTEND (SMA 1 i 2) lub Hammersmith (SMA 3).",
        "Ocena siły mięśniowej, zakresu ruchomości, przykurczy.",
        "Badanie odruchów ścięgnistych.",
        "Ocena rozwoju psychomotorycznego.",
        "Ocena wizualna (fascykulacje mięśniowe języka i dłoni).",
        "Ocena siły krzyku, płaczu, wydolności układu oddechowego.",
      ],
      cele: [
        "Wsparcie rozwoju psychomotorycznego.",
        "Utrzymanie lub poprawa siły mięśniowej i zakresu ruchomości.",
        "Przeciwdziałanie przykurczom, zniekształceniom i deformacjom.",
        "Poprawa funkcjonowania układu oddechowego, edukacja, zaopatrzenie ortopedyczne.",
        "Nieinwazyjne (NIV) lub inwazyjne (IV) wspomaganie oddechowe.",
      ],
      program: [
        "NDT-Bobath, Vojta, PNF (poprawa rozwoju psychoruchowego).",
        "Ćwiczenia mm. oddechowych (utrzymanie wydolności układu oddechowego).",
        "Czynności pielęgnacyjne, pozycje ułożeniowe.",
        "Stretching mięśni przykurczonych.",
        "Ciepłolecznictwo, masaż klasyczny (rozluźnienie mm. nadmiernie napiętych).",
      ],
    },
    star: [
      "Test CHOP-INTEND (SMA 1 i 2) lub Hammersmith (SMA 3).",
      "Fascykulacje mięśniowe języka i dłoni.",
    ],
  },
  {
    id: 8,
    section: "pediatria",
    title: "dziecko z mózgowym porażeniem dziecięcym o charakterze spastycznym",
    base: {
      wywiad: [
        "Czynniki ryzyka (niedotlenienie, teratogeny, infekcje wrodzone, drgawki noworodkowe, urazy okołoporodowe, używki matki w ciąży, zatrzymanie akcji serca).",
        "Jak przebiegała akcja porodowa?",
      ],
      ocena: [],
      badanie: [
        "Ocena rozwoju psychoruchowego (NDT-Bobath, Vojta, MFDR).",
        "Ocena napięcia mięśniowego, skala Ashworth.",
        "Ocena odruchów pierwotnych i ich wygasania w odpowiednim czasie.",
        "Kamienie milowe rozwoju dziecka, ocena głębokich odruchów ścięgnistych.",
        "Nadwrażliwość na bodźce dźwiękowe, mała spontaniczność ruchowa.",
        "Odgięciowe ułożenie głowy i tułowia, zaciskanie pięści z kciukiem w dłoni, ruchy stereotypowe.",
        "Brak koordynacji ręka-ręka, ręka-buzia.",
      ],
      cele: [
        "Osiągnięcie maksymalnych możliwości funkcjonalnych, zmniejszenie stopnia niepełnosprawności, pełne uczestnictwo w życiu społecznym i jak największa niezależność.",
      ],
      program: [
        "Jak najwcześniejsze rozpoczęcie terapii neurorozwojowej, cele etapowe, zaangażowanie rodziców.",
        "Hamowanie nieprawidłowej aktywności tonicznej i likwidacja blokad funkcjonalnych.",
        "Torowanie reakcji nastawczych i równowagi, normalizacja napięcia przez stymulację proprioceptywną i eksteroceptywną.",
        "Stymulacja poczucia ciała przez zaznaczanie linii środkowej.",
        "Profilaktyka i likwidacja przykurczów, hamowanie spastyczności, dbałość o długość mięśni.",
        "Leczenie przykurczów ostrzyknięciami toksyny botulinowej.",
      ],
    },
    star: [
      "Ocena napięcia w skali Ashworth, odruchy pierwotne.",
      "Hamowanie spastyczności, toksyna botulinowa.",
    ],
  },
  {
    id: 9,
    section: "pediatria",
    title: "niemowlę z asymetrią ułożeniową",
    base: {
      wywiad: [
        "Od kiedy? Co jest powodem?",
        "Czy dziecko potrafi wyjść z niewłaściwego ustawienia i przyjąć identyczne po drugiej stronie ciała?",
        "Czy dziecko urodziło się z obniżonym napięciem w osi głowa-tułów?",
        "Sposób porodu, długość ciąży, ułożenie dziecka w ciąży i porodzie?",
      ],
      ocena: [],
      badanie: [
        "Ocena symetrii ustawienia głowy i tułowia.",
        "Ocena siły mięśni brzucha.",
        "Ocena rotacji głowy w stronę przeciwną.",
        "Ocena długości boków tułowia.",
        "Ocena napięcia mm. po prawej i lewej stronie ciała.",
        "Ocena ustawienia wysokości kolców biodrowych przednich górnych.",
        "Ocena aktywności kkg po stronie dociążonej i odciążonej.",
      ],
      cele: [
        "Rozluźnienie i rozciągnięcie m. MOS po stronie skróconej.",
        "Wzmocnienie rozluźnionych mięśni brzucha, wydłużenie strony skróconej.",
      ],
      program: [
        "Ćwiczenia wzmacniające mięśnie brzucha.",
        "Rozluźnienie napiętego m. MOS po stronie skróconej.",
        "Ćwiczenia wyrównujące asymetrię tułowia (dociążanie i wydłużanie strony skróconej).",
        "Wprowadzenie zasad pielęgnacji neurorozwojowej (karmienie, noszenie, ubieranie, kąpanie, zabawa).",
      ],
    },
    star: [
      "Dziecko potrafi samodzielnie wyjść z ustawienia (odróżnienie od kręczu szyi).",
      "Rozluźnienie m. MOS po stronie skróconej.",
    ],
  },
  {
    id: 10,
    section: "pediatria",
    title: "dziecko z porażeniem nerwu twarzowego",
    base: {
      wywiad: [
        "Od kiedy? Jak długo? Co było przyczyną?",
        "Jednostronnie czy obustronnie?",
        "Czy dziecko ma problemy z wymową lub przełykaniem pokarmów?",
        "Czy dziecko ma problem z zamknięciem oka do snu, czy występuje wysychanie rogówki?",
      ],
      ocena: [],
      badanie: [
        "Asymetria fałdów nosowo-policzkowych, kącików ust, zmarszczek na czole.",
        "Sprawdzenie siły mięśni mimicznych.",
        "Sprawdzenie objawu Bella.",
        "Sprawdzenie funkcji czuciowych i ruchowych języka.",
        "Sprawdzenie czucia na twarzy między prawą a lewą stroną.",
      ],
      cele: [
        "Wzmocnienie siły mięśni odnerwionych.",
        "Powrót do symetrii mięśni twarzy, poprawa artykulacji.",
        "Odżywienie porażonego nerwu.",
        "Poprawa funkcji spożywania pokarmów i płynów.",
      ],
      program: [
        "Bezzwłoczne rozpoczęcie rehabilitacji.",
        "Faza ostra: ćwiczenia mimiczne i języka, sollux niebieski.",
        "Faza przewlekła: ćwiczenia mimiczne i języka, masaż klasyczny mm. twarzy (techniki pobudzające), sollux czerwony.",
        "Galwanizacja K porażonej strony twarzy (elektroda Bergoniego).",
        "Jonoforeza z wit. B12, elektrostymulacja (impuls trójkątny).",
      ],
    },
    star: [
      "Objaw Bella.",
      "Galwanizacja, elektrostymulacja, jonoforeza z wit. B12.",
    ],
  },
  {
    id: 11,
    section: "pediatria",
    title: "dziecko z przepukliną oponowo-rdzeniową w odcinku lędźwiowym",
    base: {
      wywiad: [
        "Jaki poziom kręgosłupa?",
        "Czy było stwierdzone podczas USG w trakcie ciąży?",
        "Czy wiadomo, jaki teratogen zadziałał?",
        "Pęcherz neurogenny, funkcja zwieracza odbytu?",
        "Podwichnięcia stawów biodrowych, koślawość kolan, stopa piętowa?",
        "Wodogłowie, oczopląs, rozszczep podniebienia, mikrocefalia?",
      ],
      ocena: [],
      badanie: [
        "Ocena czucia powierzchniowego i głębokiego.",
        "Ocena siły mięśniowej i zakresu ruchomości w stawach.",
        "Ocena zaburzeń naczynioruchowych i troficznych poniżej uszkodzenia.",
        "Ocena odruchów ścięgnistych, przykurczów i zniekształceń.",
        "Ocena ruchomości spontanicznej kończyn, napięcia mięśniowego, czynności układu zwieraczy.",
      ],
      cele: [
        "Pobudzenie procesów kompensacji i wykorzystanie możliwości adaptacji organizmu.",
        "Normalizacja napięcia posturalnego i stabilizacja tułowia.",
        "Tworzenie automatyzmu pęcherza, poprawa działania zwieraczy pęcherza i odbytu.",
        "Utrzymanie pełnego zakresu ruchu, zapobieganie zniekształceniom i deformacjom osi kończyn i kręgosłupa.",
        "Wzmacnianie nieporażonych mięśni oraz kompensacyjne wzmacnianie obręczy barkowej, kkg i tułowia.",
      ],
      program: [
        "Rozwijanie umiejętności ruchowych zgodnie z sekwencją rozwoju.",
        "Początkowo zmiany pozycji co godzinę, masaże niedowładnych kończyn, prawidłowe układanie nóżek i stóp.",
        "Aktywizacja ocalałych dróg nerwowych, drażnienie skóry i dostarczanie wrażeń czuciowych.",
        "Wczesne wprowadzanie pełzania (uwaga na nadmierną lordozę L), wzmocnienie mm. brzucha.",
        "Pionizacja w łuskach lub odpowiednim obuwiu po uzyskaniu pozycji czworaczej, stopniowe ćwiczenia z obciążeniem.",
        "Vojta jako leczenie z wyboru.",
      ],
    },
    star: [
      "Pęcherz neurogenny, tworzenie automatyzmu pęcherza.",
      "Vojta jako leczenie z wyboru.",
    ],
  },
  {
    id: 12,
    section: "pediatria",
    title: "dziecko ze stopą końsko-szpotawą",
    base: {
      wywiad: [
        "Czy wystąpiły inne wady rozwojowe?",
        "Ułożenie dziecka w brzuchu mamy?",
        "Małowodzie?",
        "Wady rozwojowe w rodzinie?",
        "Ułożenie dziecka w trakcie ciąży i porodu, masa urodzeniowa?",
      ],
      ocena: [],
      badanie: [
        "Ocena wizualna ustawienia kości stopy, różnica długości i wielkości względem stopy zdrowej.",
        "Ocena zakresu ruchomości i siły mięśniowej.",
        "Ustawienie stopy w zgięciu podeszwowym (końsko), szpotawości i rotacji do wewnątrz.",
        "Nieprawidłowe ustawienie przodostopia wobec stępu (przywiedzione, zsupinowane).",
        "Ocena przykurczu torebki i więzadeł, skrócenia ścięgna Achillesa, m. piszczelowego tylnego, zginaczy palucha i palców.",
      ],
      cele: [
        "Korekcja stawów stopy do fizjologicznego ustawienia (wzmocnienie mm. nadmiernie rozciągniętych, rozluźnienie napiętych).",
        "Nauka właściwych funkcji stopy.",
      ],
      program: [
        "Leczenie musi zacząć się jak najszybciej, opóźnienie przedłuża oczekiwany efekt.",
        "Korekcja manualna (trójwymiarowa korekcja manualna z bandażowaniem, metoda Zukunft-Huber).",
        "Metoda Ponsetiego.",
        "Zaopatrzenie ortopedyczne, ćwiczenia korekcyjne, stretching.",
        "Masaż klasyczny i funkcyjny, masaż wirowy, fango, borowina, kinesiology taping, elektrostymulacja mięśni unerwionych przez nerw strzałkowy wspólny.",
      ],
    },
    star: [
      "Metoda Ponsetiego.",
      "Trójwymiarowa korekcja manualna, metoda Zukunft-Huber.",
    ],
  },
  {
    id: 13,
    section: "pediatria",
    title: "niemowlę 4 m. z obniżonym napięciem mięśniowym w osi głowa-tułów",
    base: {
      wywiad: [
        "Poród w terminie czy wczesny?",
        "APGAR?",
        "Cięcie cesarskie czy drogami natury?",
        "Który poród i która ciąża z kolei?",
        "Wiek skorygowany?",
      ],
      ocena: [],
      badanie: [
        "Ocena rozwoju psychomotorycznego (NDT-Bobath, Vojta, MFDR).",
        "Ocena napięcia mięśniowego osi głowa-tułów.",
        "Ocena ruchów spontanicznych kończyn.",
        "Próba trakcji.",
        "Określenie wieku skorygowanego (jeśli konieczne).",
      ],
      cele: [
        "Wzmocnienie mięśni osi głowa-tułów.",
        "Osiągnięcie równomiernego rozwoju psychomotorycznego.",
      ],
      program: [
        "Rozwój kaudalny w pronacji i kranialny w supinacji.",
        "Centrum mobilne i obwód stabilny, po 3 miesiącu centrum stabilne a obwód mobilny.",
        "Ćwiczenia wzmacniające mm. brzucha.",
        "Ćwiczenia elongacji głowy i ćwiczenia do trakcji.",
        "Pielęgnacja neurorozwojowa (karmienie, noszenie, ubieranie, kąpanie, zabawa).",
      ],
    },
    star: [
      "Próba trakcji, ocena wieku skorygowanego.",
      "Rozwój kaudalny w pronacji i kranialny w supinacji.",
    ],
  },

  // ===================== ORTOPEDIA (14-21) =====================
  {
    id: 14,
    section: "ortopedia",
    title: "pacjent po endoprotezoplastyce stawu kolanowego",
    base: {
      wywiad: WYWIAD_ORTHO,
      ocena: OCENA_ORTHO,
      badanie: BADANIE_ORTHO,
      cele: [],
      program: [],
    },
    add: {
      program: [
        "Okres poszpitalny, cel etapowy: przywrócenie możliwie maksymalnej sprawności fizycznej.",
        "Zmniejszenie wzmożonego napięcia mięśniowo-powięziowego w obrębie blizny, kończyny dolnej i tułowia: ćwiczenia czynne i z oporem, terapia manualna blizny, laseroterapia blizny.",
        "Wzmocnienie siły mięśniowej kończyny dolnej i tułowia: ćwiczenia czynne wolne, z oporem, równoważne, propriocepcji, elektrostymulacja mięśni, edukacja pacjenta.",
      ],
    },
    star: [
      "Terapia manualna i laseroterapia blizny.",
      "Ćwiczenia równoważne i propriocepcji kończyny dolnej.",
    ],
  },
  {
    id: 15,
    section: "ortopedia",
    title: "pacjent po endoprotezoplastyce stawu biodrowego",
    base: {
      wywiad: WYWIAD_ORTHO,
      ocena: OCENA_ORTHO,
      badanie: BADANIE_ORTHO,
      cele: [],
      program: [],
    },
    add: {
      program: [
        "Okres pooperacyjny, doba 0, cel nadrzędny: samodzielna lokomocja, cel etapowy: zapobieganie powikłaniom pooperacyjnym.",
        "Zapobieganie powikłaniom zakrzepowo-zatorowym: pozycja leżenia tyłem, pończochy uciskowe, aktywacja pompy mięśniowej (zgięcie grzbietowo-podeszwowe stopy).",
        "Zapobieganie powikłaniom oddechowym: higiena drzewa oskrzelowego, ćwiczenia oddechowe.",
        "Zapobieganie odleżynom: masaż, kształtki, materac przeciwodleżynowy.",
        "Zapobieganie podwichnięciu endoprotezy: prawidłowa pozycja ułożeniowa.",
        "Zapobieganie zanikom mięśniowym: ćwiczenia izometryczne m. czworogłowego uda i mm. pośladkowych.",
      ],
    },
    star: [
      "Zapobieganie podwichnięciu endoprotezy: prawidłowa pozycja ułożeniowa.",
      "Ćwiczenia izometryczne m. czworogłowego i mm. pośladkowych już w dobie 0.",
    ],
  },
  {
    id: 16,
    section: "ortopedia",
    title: "pacjent z przykurczem Dupuytrena",
    base: {
      wywiad: WYWIAD_ORTHO,
      ocena: OCENA_ORTHO,
      badanie: BADANIE_ORTHO,
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Badanie funkcjonalne ręki, testy aktywne, pasywne, oporowe.",
        "Test dodatkowy: ułożenie rąk jak do modlitwy.",
      ],
      program: [
        "Cel nadrzędny: utrzymanie sprawności funkcjonalnej ręki, cel etapowy: spowolnienie rozwoju choroby.",
        "Zmniejszenie napięcia mięśniowo-powięziowego w obrębie troczka zginaczy, rozcięgna dłoniowego, mm. przedramienia i powięzi kg: terapia manualna, terapia mięśniowo-powięziowa, masaż, terapia ultradźwiękowa.",
      ],
    },
    star: [
      "Ułożenie rąk jak do modlitwy (test).",
      "Terapia rozcięgna dłoniowego i troczka zginaczy.",
    ],
  },
  {
    id: 17,
    section: "ortopedia",
    title: "pacjent z zespołem Sudecka",
    base: {
      wywiad: WYWIAD_ORTHO,
      ocena: OCENA_ORTHO,
      badanie: BADANIE_ORTHO,
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Badanie funkcjonalne ręki lub stopy, testy aktywne, pasywne, oporowe.",
        "Palpacja.",
      ],
      program: [
        "Etap hipertroficzny, ostry: zapobieganie zastojom żylnym (delikatne ruchy palców), zmniejszenie bólu (zimne okłady, biostymulacja laserowa, pozycje ułożeniowe).",
        "Etap dystrofii: edukacja w zakresie automasażu, podwodny masaż wirowy w letniej wodzie, laseroterapia, jonoforeza (wapnia lub hydrokortyzonu), elektroterapia prądami impulsowymi, pole magnetyczne małej częstotliwości (6-10 mT), ćwiczenia czynne wolne i oporowe.",
        "Etap zaniku: ćwiczenia czynne wolne i oporowe, pole magnetyczne małej częstotliwości (6-10 mT).",
      ],
    },
    star: [
      "Trzy etapy: hipertroficzny (ostry), dystrofii, zaniku.",
      "Pole magnetyczne małej częstotliwości 6-10 mT.",
    ],
  },
  {
    id: 18,
    section: "ortopedia",
    title: "pacjent z zespołem zamrożonego barku",
    base: {
      wywiad: WYWIAD_ORTHO,
      ocena: OCENA_ORTHO,
      badanie: BADANIE_ORTHO,
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Badanie funkcjonalne barku, testy aktywne, pasywne, oporowe.",
        "Testy dodatkowe: badanie odcinka szyjnego kręgosłupa, test wzruszania.",
      ],
      program: [
        "Cel ogólny: przywrócenie możliwie maksymalnej sprawności kończyny górnej.",
        "Zmniejszenie dolegliwości bólowych: termoterapia, jonoforeza z NLPZ, laseroterapia, terapia UD i fonoforeza, mobilizacja tkanek miękkich.",
        "Zwiększenie zakresu ruchu we wszystkich płaszczyznach: ćwiczenia czynne, wspomagane i bierne ROM, mobilizacja stawu ramienno-łopatkowego i łopatki.",
        "Poprawa siły stożka rotatorów i stabilizatorów łopatki: ćwiczenia wzmacniające, izometryczne, izotoniczne, w łańcuchu otwartym i zamkniętym, wzmacnianie m. naramiennego.",
      ],
    },
    star: [
      "Test wzruszania.",
      "Mobilizacja stawu ramienno-łopatkowego i łopatki.",
    ],
  },
  {
    id: 19,
    section: "ortopedia",
    title: "pacjent z zespołem ciasnoty podbarkowej",
    base: {
      wywiad: WYWIAD_ORTHO,
      ocena: OCENA_ORTHO,
      badanie: BADANIE_ORTHO,
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Badanie funkcjonalne barku, testy aktywne, pasywne, oporowe.",
        "Zestaw testów: Hawkins-Kennedy, Neera, bolesny łuk, empty can (pusta puszka), oporowa rotacja zewnętrzna.",
      ],
      program: [
        "Cel nadrzędny: maksymalna ochrona stawu.",
        "Zmniejszenie stanu zapalnego, bólu i obrzęku: zimnolecznictwo, laseroterapia, elektroterapia, pole magnetyczne.",
        "Poprawa lub utrzymanie elastyczności: terapia manualna (ślizgi), masaż, terapia punktów spustowych.",
        "Opóźnienie zaniku mięśni: ćwiczenia wzmacniające izometryczne submaksymalne.",
      ],
    },
    star: [
      "Testy: Hawkins-Kennedy, Neera, bolesny łuk, empty can.",
      "Oporowa rotacja zewnętrzna.",
    ],
  },
  {
    id: 20,
    section: "ortopedia",
    title: "pacjent z dyskopatią w odcinku szyjnym kręgosłupa",
    base: {
      wywiad: WYWIAD_ORTHO,
      ocena: OCENA_ORTHO,
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Badanie funkcjonalne odcinka szyjnego i kończyn górnych, testy aktywne, pasywne, oporowe.",
        "Badanie czucia i odruchów.",
        "Testy dodatkowe: objaw szczytowy, objaw Spurlinga, testy napięciowe dla kończyny górnej.",
      ],
      program: [
        "Cel nadrzędny: samodzielna sprawna lokomocja.",
        "Zmniejszenie dolegliwości bólowych: laseroterapia, krioterapia, elektroterapia, terapia punktów spustowych, manipulacja lub trakcja odc. szyjnego, techniki McKenzie.",
        "Zmniejszenie wzmożonego napięcia mięśniowego: ćwiczenia rozciągające, poizometryczna relaksacja mięśni.",
        "Zwiększenie siły mięśniowej odc. szyjnego i obręczy barkowej: ćwiczenia czynne wolne, oporowe, izometryczne, elektrostymulacja, edukacja pacjenta.",
      ],
    },
    star: [
      "Objaw Spurlinga, objaw szczytowy, testy napięciowe kg.",
      "Techniki McKenzie, trakcja odcinka szyjnego.",
    ],
  },
  {
    id: 21,
    section: "ortopedia",
    title: "pacjent z dyskopatią w odcinku lędźwiowym kręgosłupa",
    base: {
      wywiad: WYWIAD_ORTHO,
      ocena: OCENA_ORTHO,
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Badanie funkcjonalne odcinka lędźwiowego, stawów krzyżowo-biodrowych (test Lasletta) i kończyn dolnych, testy aktywne, pasywne, oporowe.",
        "Badanie czucia i odruchów.",
        "Testy dodatkowe: objaw Neriego (karkowy), test Goldthwaita, slump test, objaw Lasegue'a, objaw Lasegue'a skrzyżowany (Fajersztajna-Krzemickiego).",
      ],
      program: [
        "Cel nadrzędny: samodzielna sprawna lokomocja.",
        "Zmniejszenie dolegliwości bólowych: laseroterapia, krioterapia, elektroterapia, funkcjonalna stymulacja magnetyczna, pozycje ułożeniowe.",
        "Centralizacja dolegliwości: manipulacja lub trakcja odc. lędźwiowego, techniki McKenzie.",
        "Zmniejszenie napięcia mięśniowego i zwiększenie siły głębokich mm. brzucha i kręgosłupa: ćwiczenia rozciągające, poizometryczna relaksacja, ćwiczenia czynne wolne, oporowe, izometryczne, elektrostymulacja, edukacja pacjenta.",
      ],
    },
    star: [
      "Objaw Lasegue'a i objaw Lasegue'a skrzyżowany (Fajersztajna-Krzemickiego), slump test.",
      "Centralizacja dolegliwości, techniki McKenzie.",
    ],
  },

  // ===================== PULMONOLOGIA (22-32) =====================
  {
    id: 22,
    section: "pulmonologia",
    title: "pacjent z astmą oskrzelową",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      program: ["Ćwiczenia nakierowane na aktywny wydech."],
    },
    star: ["Akcent na aktywny wydech."],
  },
  {
    id: 23,
    section: "pulmonologia",
    title: "pacjent z pylicą płuc",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      wywiad: ["Rodzaj pracy zawodowej (choroba zawodowa)."],
      program: ["Ćwiczenia nakierowane na aktywny wdech."],
    },
    star: ["Akcent na aktywny wdech.", "Choroba zawodowa, rodzaj pracy."],
  },
  {
    id: 24,
    section: "pulmonologia",
    title: "pacjent z przewlekłą obturacyjną chorobą płuc (POChP)",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      program: ["Ćwiczenia nakierowane na aktywny wydech."],
    },
    star: ["Akcent na aktywny wydech."],
  },
  {
    id: 25,
    section: "pulmonologia",
    title: "pacjent z rozedmą płuc",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      wywiad: ["Uraz lub operacja w obrębie klatki piersiowej."],
      program: ["Ćwiczenia z półzamkniętymi ustami."],
    },
    star: ["Ćwiczenia z półzamkniętymi ustami."],
  },
  {
    id: 26,
    section: "pulmonologia",
    title: "pacjent z rozstrzeniami oskrzeli",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    star: ["Nacisk na toaletę drzewa oskrzelowego."],
  },
  {
    id: 27,
    section: "pulmonologia",
    title: "pacjent z zapaleniem płuc",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      program: ["Ćwiczenia nakierowane na aktywny wdech i wydech."],
    },
    star: ["Akcent na aktywny wdech i wydech."],
  },
  {
    id: 28,
    section: "pulmonologia",
    title: "pacjent z odmą",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      program: ["Ćwiczenia nakierowane na aktywny wdech i wydech."],
    },
    star: ["Akcent na aktywny wdech i wydech."],
  },
  {
    id: 29,
    section: "pulmonologia",
    title: "pacjent przed i po operacji torakochirurgicznej",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      program: [
        "Ćwiczenia nakierowane na aktywny wdech i wydech.",
        "Inhalacje.",
      ],
    },
    star: ["Inhalacje.", "Przygotowanie przed i usprawnianie po operacji."],
  },
  {
    id: 30,
    section: "pulmonologia",
    title: "pacjent z nowotworem płuc",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      program: [
        "Ćwiczenia nakierowane na aktywny wdech i wydech.",
        "Inhalacje.",
      ],
    },
    star: ["Inhalacje.", "Akcent na aktywny wdech i wydech."],
  },
  {
    id: 31,
    section: "pulmonologia",
    title: "pacjent z mukowiscydozą",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      program: [
        "Ćwiczenia nakierowane na aktywny i silny wydech.",
        "Inhalacje.",
      ],
    },
    star: ["Akcent na aktywny i silny wydech.", "Inhalacje, priorytet toalety drzewa oskrzelowego."],
  },
  {
    id: 32,
    section: "pulmonologia",
    title: "pacjent z sarkoidozą",
    base: {
      wywiad: WYWIAD_PULMO,
      ocena: [],
      badanie: BADANIE_PULMO,
      cele: [],
      program: PROGRAM_PULMO,
    },
    add: {
      program: [
        "Ćwiczenia nakierowane na aktywny i silny wdech.",
        "Inhalacje.",
      ],
    },
    star: ["Akcent na aktywny i silny wdech.", "Inhalacje."],
  },

  // ===================== KARDIOLOGIA (33-38) =====================
  {
    id: 33,
    section: "kardiologia",
    title: "pacjent po angioplastyce wieńcowej bez zawału mięśnia sercowego",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: CELE_KARDIO,
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: ["Jak przebiegała angioplastyka (kiedy usunięcie mufy z tętnicy udowej)."],
      program: ["Pionizacja po 6-8 godzinach od usunięcia koszulki (mufy) z tętnicy udowej."],
    },
    star: ["Pionizacja po 6-8 h od usunięcia koszulki (mufy)."],
  },
  {
    id: 34,
    section: "kardiologia",
    title: "pacjent po angioplastyce wieńcowej z zawałem mięśnia sercowego",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: CELE_KARDIO,
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: ["Jak przebiegała angioplastyka (kiedy usunięcie mufy z tętnicy udowej)."],
      program: ["Pionizacja po 12-24 godzinach jeśli nie było powikłań, po 24 godzinach jeśli powikłania wystąpiły."],
    },
    star: ["Pionizacja po 12-24 h po zawale (24 h przy powikłaniach)."],
  },
  {
    id: 35,
    section: "kardiologia",
    title: "pacjent z wszczepionym stymulatorem serca",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: [],
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: ["Objawy, jakie towarzyszyły przed wszczepieniem stymulatora.", "Aktywność fizyczna."],
      cele: [
        "Adaptacja do ograniczeń spowodowanych chorobą.",
        "Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej.",
      ],
    },
    star: ["Cel: adaptacja i modyfikacja czynników ryzyka (bez protokołu pionizacji w kluczu)."],
  },
  {
    id: 36,
    section: "kardiologia",
    title: "pacjent z utrwalonym migotaniem przedsionków",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: [],
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: ["Objawy towarzyszące w trakcie występowania migotania przedsionków.", "Aktywność fizyczna."],
      cele: [
        "Adaptacja do ograniczeń spowodowanych chorobą.",
        "Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej.",
      ],
    },
    star: ["Cel: adaptacja do ograniczeń i modyfikacja czynników ryzyka."],
  },
  {
    id: 37,
    section: "kardiologia",
    title: "pacjent z nadciśnieniem tętniczym",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: [],
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: ["Aktywność fizyczna."],
      cele: [
        "Adaptacja do ograniczeń spowodowanych chorobą.",
        "Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej.",
      ],
    },
    star: ["Cel: adaptacja i modyfikacja czynników ryzyka, bez pionizacji."],
  },
  {
    id: 38,
    section: "kardiologia",
    title: "pacjent z przewlekłą niewydolnością krążenia",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: CELE_KARDIO,
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: ["Aktywność fizyczna."],
      program: ["Pionizacja po 12-24 godzinach jeśli nie było powikłań, po 24 godzinach jeśli powikłania wystąpiły."],
    },
    star: ["Duszności spoczynkowe i wysiłkowe.", "Pionizacja po 12-24 h."],
  },

  // ===================== KARDIOCHIRURGIA (39-42) =====================
  {
    id: 39,
    section: "kardiochirurgia",
    title: "pacjent po pomostowaniu tętnic wieńcowych (CABG)",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: CELE_KARDIO,
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: [
        "Jak przebiegała operacja (sternotomia, torakotomia boczna, dojście przez tętnice udowe).",
        "Powikłania śródoperacyjne i pooperacyjne.",
      ],
      badanie: ["Spirometria."],
      program: [
        "Pionizacja w II dobie, po 24 godzinach od operacji.",
        "Ćwiczenia na rotorach kończyn dolnych, oporowanego wdechu i wydechu.",
        "Instruktaż asekuracji rany pooperacyjnej (sternotomia, torakotomia boczna).",
      ],
    },
    star: ["Pionizacja II doba (po 24 h) po kardiochirurgii.", "Asekuracja rany po sternotomii."],
  },
  {
    id: 40,
    section: "kardiochirurgia",
    title: "pacjent po pomostowaniu tętnic wieńcowych z dojściem przez torakotomię lewostronną (MIDCAB)",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: CELE_KARDIO,
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: ["Powikłania śródoperacyjne i pooperacyjne."],
      badanie: ["Spirometria."],
      program: [
        "Pionizacja w II dobie, po 24 godzinach od operacji.",
        "Ćwiczenia na rotorach kończyn dolnych, oporowanego wdechu i wydechu.",
        "Instruktaż asekuracji rany pooperacyjnej (torakotomia boczna).",
      ],
    },
    star: ["Dojście przez torakotomię lewostronną.", "Asekuracja rany po torakotomii bocznej."],
  },
  {
    id: 41,
    section: "kardiochirurgia",
    title: "pacjent po wymianie zastawki aortalnej (AVR)",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: CELE_KARDIO,
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: ["Powikłania śródoperacyjne i pooperacyjne."],
      badanie: ["Spirometria."],
      program: [
        "Pionizacja w II dobie, po 24 godzinach od operacji.",
        "Ćwiczenia na rotorach kończyn dolnych, oddechowe oporowanego wdechu i wydechu.",
        "Instruktaż asekuracji rany pooperacyjnej (sternotomia).",
      ],
    },
    star: ["Pionizacja II doba po 24 h.", "Asekuracja rany po sternotomii."],
  },
  {
    id: 42,
    section: "kardiochirurgia",
    title: "pacjent po wszczepieniu protezy prostej aorty w wyniku tętniaka aorty",
    base: {
      wywiad: WYWIAD_KARDIO,
      ocena: [],
      badanie: BADANIE_KARDIO,
      cele: CELE_KARDIO,
      program: PROGRAM_KARDIO,
    },
    add: {
      wywiad: [
        "Czy doszło do pęknięcia tętniaka lub rozwarstwienia.",
        "Powikłania śródoperacyjne i pooperacyjne.",
      ],
      badanie: ["Spirometria."],
      program: [
        "Pionizacja w II dobie, po 24 godzinach od operacji.",
        "Ćwiczenia na rotorach kończyn dolnych, oddechowe oporowanego wdechu i wydechu.",
        "Instruktaż asekuracji rany pooperacyjnej (sternotomia).",
      ],
    },
    star: ["Czy doszło do pęknięcia lub rozwarstwienia tętniaka.", "Pionizacja II doba po 24 h."],
  },

  // ===================== REUMATOLOGIA (43-47) =====================
  {
    id: 43,
    section: "reumatologia",
    title: "pacjent z reumatoidalnym zapaleniem stawów (RZS)",
    base: {
      wywiad: [],
      ocena: [],
      badanie: [],
      cele: [],
      program: PROGRAM_REUMA,
    },
    add: {
      wywiad: [
        "Czy występuje ból stawów i czy występuje symetrycznie?",
        "Czy stawy są ocieplone i obrzęknięte?",
        "Czy rano występuje sztywność poranna i czy mija po ponad godzinie?",
        "Od jak dawna występuje zapalenie i ile stawów jest bolesnych?",
        "Czy ktoś z rodziny ma lub miał reumatoidalne zapalenie stawów?",
      ],
      badanie: [
        "Test uciskowy stawów śródręczno-paliczkowych.",
        "Test uciskowy stawów śródstopno-paliczkowych.",
        "Sprawdzenie zakresu ruchomości stawów.",
        "Badania: OB, CRP, morfologia, RTG.",
      ],
      program: [
        "Po każdym zaostrzeniu choroby program postępowania powinien być weryfikowany i dostosowywany do aktualnego stanu pacjenta.",
      ],
    },
    star: [
      "Symetryczność zajęcia stawów, sztywność poranna ponad 1 godzina.",
      "Test uciskowy stawów śródręczno- i śródstopno-paliczkowych.",
    ],
  },
  {
    id: 44,
    section: "reumatologia",
    title: "pacjent ze zesztywniającym zapaleniem stawów kręgosłupa (ZZSK)",
    base: {
      wywiad: [],
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Czy występuje ból krzyża promieniujący do pośladków?",
        "Czy ból ma charakter tępy i narastający i czy ustępuje w spoczynku?",
        "Czy występuje ból w górnych partiach kręgosłupa w trakcie kaszlu lub kichania?",
        "Czy występuje częste zmęczenie?",
        "Czy w rodzinie wystąpiło wcześniej ZZSK?",
      ],
      badanie: [
        "Test Schobera.",
        "RTG, MRI, TK.",
        "Badania laboratoryjne: obecność antygenu HLA-B27, OB, CRP, morfologia krwi.",
      ],
      program: [
        "Ćwiczenia ogólnousprawniające, zwiększające zakres ruchu i wzmacniające mięśnie, poprawiające wydolność.",
        "Ćwiczenia oddechowe w celu utrzymania ruchomości klatki piersiowej.",
        "Masaż klasyczny kręgosłupa, zmniejszenie bólu i napięcia mięśniowego.",
        "Fizykoterapia (ultradźwięki, laseroterapia, elektrolecznictwo).",
        "Edukacja pacjenta dotycząca prawidłowego wykonywania ćwiczeń.",
      ],
    },
    star: [
      "Test Schobera.",
      "Antygen HLA-B27, ćwiczenia oddechowe dla ruchomości klatki piersiowej.",
    ],
  },
  {
    id: 45,
    section: "reumatologia",
    title: "pacjent z idiopatycznym młodzieńczym zapaleniem stawów (MIZS)",
    base: {
      wywiad: [],
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "W jakim wieku pojawiły się pierwsze objawy?",
        "Czy występuje gorączka, wysypka, uogólniona limfadenopatia, hepatosplenomegalia, zajęcie błon surowiczych (opłucnej, osierdzia, otrzewnej)?",
        "Jak długo trwa zapalenie stawów i ile stawów jest zajętych?",
        "Przebyte infekcje, ból, ograniczenie ruchomości i obrzęk stawów?",
        "Czy występuje sztywność poranna i brak apetytu?",
      ],
      badanie: [
        "Badanie laboratoryjne (HLA-B27, RF, CRP, OB, morfologia).",
        "Badanie ultrasonograficzne (obraz zmian w błonie maziowej).",
        "RTG (osteoporoza, zwężenie szpar stawowych, geody, nadżerki, zrosty kostne).",
      ],
      program: [
        "Edukacja pacjenta dotycząca prawidłowego wykonywania ćwiczeń w zależności od okresu choroby.",
        "Fizykoterapia w celu zmniejszenia stanu zapalnego i dolegliwości (krioterapia, jonoforeza).",
        "Ćwiczenia ogólnousprawniające utrzymujące ruchomość stawów, zapobiegające zanikom i deformacjom.",
      ],
    },
    star: [
      "Wiek pojawienia się pierwszych objawów.",
      "USG błony maziowej, HLA-B27, RF.",
    ],
  },
  {
    id: 46,
    section: "reumatologia",
    title: "pacjent z chorobą zwyrodnieniową stawu kolanowego",
    base: {
      wywiad: [],
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Od kiedy boli i kiedy pojawia się ból?",
        "Czy występuje ograniczenie ruchomości i obrzęk?",
        "Czy są trudności z wchodzeniem i schodzeniem ze schodów?",
        "Czy występują trzeszczenia, przeskakiwania i chrobotania podczas ruchu?",
        "Czy pacjent uprawiał sport, czy w rodzinie ktoś chorował, czy były urazy lub operacje, czy był uraz łąkotek?",
      ],
      badanie: [
        "RTG, RMI, skala Kellgrena-Lawrence'a.",
        "Ocena wizualna (koślawość, szpotawość).",
        "Sprawdzenie zakresu ruchomości stawu kolanowego (zgięcie i wyprost).",
        "Ocena siły mięśniowej, sprawdzenie oporu końcowego (miękki, twardy).",
        "Badanie palpacyjne stawu kolanowego.",
      ],
      program: [
        "Ćwiczenia wzmacniające mięśnie kkdd w celu zwiększenia siły mięśni stabilizujących staw.",
        "Ćwiczenia poprawiające zakres ruchomości stawów kolanowych.",
        "Ćwiczenia zapobiegające przykurczom i zanikom mięśniowym.",
        "Fizykoterapia (laseroterapia, magnetoterapia, elektrolecznictwo, krioterapia, ultradźwięki).",
        "Ćwiczenia w odciążeniu (np. basen), edukacja pacjenta.",
      ],
    },
    star: [
      "Skala Kellgrena-Lawrence'a.",
      "Trzeszczenia w stawie, ćwiczenia w odciążeniu (basen).",
    ],
  },
  {
    id: 47,
    section: "reumatologia",
    title: "pacjent z chorobą zwyrodnieniową stawu biodrowego",
    base: {
      wywiad: [],
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Od kiedy boli i kiedy pojawia się ból?",
        "Czy występuje ograniczenie ruchomości i obrzęk, trzeszczenia, przeskakiwania?",
        "Czy są trudności z wchodzeniem i schodzeniem ze schodów?",
        "Czy ból promieniuje do pachwiny, pośladka albo kończyny dolnej?",
        "Czy pacjent chodzi o kuli, czy w rodzinie ktoś chorował, czy były urazy lub operacje?",
      ],
      badanie: [
        "RTG, RMI.",
        "Ocena wizualna (przykurcz, utykanie podczas chodu).",
        "Sprawdzenie zakresu ruchomości i siły mięśniowej stawu biodrowego, badanie palpacyjne.",
        "Test Thomasa, test Trendelenburga-Duchenne'a, test Anvila, objaw Drehmanna.",
        "Kwestionariusz Harris Hip Score, kwestionariusz Hip disability and osteoarthritis outcome score.",
      ],
      program: [
        "Ćwiczenia wzmacniające mięśnie kkdd w celu zwiększenia siły mięśni stabilizujących staw.",
        "Ćwiczenia poprawiające zakres ruchomości stawów biodrowych.",
        "Ćwiczenia zapobiegające przykurczom i zanikom mięśniowym.",
        "Fizykoterapia (laseroterapia, magnetoterapia, elektrolecznictwo, krioterapia, ultradźwięki).",
        "Ćwiczenia w odciążeniu (np. basen), edukacja pacjenta.",
      ],
    },
    star: [
      "Test Thomasa, Trendelenburga-Duchenne'a, Anvila, objaw Drehmanna.",
      "Harris Hip Score.",
    ],
  },

  // ===================== GINEKOLOGIA (48-49) =====================
  {
    id: 48,
    section: "ginekologia",
    title: "pacjent z wysiłkowym nietrzymaniem moczu",
    base: {
      wywiad: [],
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "W jakich momentach występuje wyciek moczu?",
        "Wiek, data ostatniej miesiączki.",
        "Jak przebiegały porody (masa urodzeniowa dzieci, długość i rodzaj porodu)?",
        "Jaką aktywność fizyczną i pracę zawodową wykonuje pacjent?",
        "Czy występują zaparcia, zaleganie moczu, infekcje układu moczowego, nietrzymanie stolca, gazów, choroba hemoroidalna?",
        "Choroby współistniejące (cukrzyca, zespoły uciskowe kręgosłupa, nerwów obwodowych) i przebyte operacje w obrębie miednicy mniejszej.",
      ],
      badanie: [
        "Ocena USG położenia narządów miednicy mniejszej, ocena funkcjonalna pracy mięśni dna miednicy.",
        "Ocena palpacyjna mięśni dna miednicy w skali Oxford.",
        "Ocena aktywności elektrycznej mięśni dna miednicy (sEMG).",
        "Ocena położenia struktur dna miednicy pod wpływem parcia (próba Valsalvy) i kaszlu (test kaszlowy) z użyciem wziernika.",
        "Ocena postawy ciała, dzienniczek mikcji, BMI, WHR.",
      ],
      program: [
        "Edukacja w zakresie prawidłowej mikcji, defekacji i doboru korzystnej aktywności fizycznej.",
        "Edukacja w zakresie wykonywania ćwiczeń mięśni dna miednicy.",
        "Dobór ćwiczeń wpływających na poprawę postawy ciała.",
      ],
    },
    star: [
      "Skala Oxford (palpacja mięśni dna miednicy), sEMG.",
      "Próba Valsalvy i test kaszlowy, dzienniczek mikcji.",
    ],
  },
  {
    id: 49,
    section: "ginekologia",
    title: "pacjentka po porodzie naturalnym",
    base: {
      wywiad: [],
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Wiek, data aktualnego porodu, długość trwania porodu, masa urodzeniowa dziecka lub dzieci.",
        "Jak przebiegały wcześniejsze porody?",
        "Czy występuje nietrzymanie moczu, stolca, gazów, obniżenia narządów rodnych?",
        "Czy występuje zaleganie moczu, stolca?",
      ],
      badanie: [
        "Ocena USG położenia narządów miednicy mniejszej, ocena funkcjonalna mięśni dna miednicy.",
        "Ocena palpacyjna mięśni dna miednicy w skali Oxford.",
        "Ocena aktywności elektrycznej mięśni dna miednicy (sEMG).",
        "Ocena położenia struktur dna miednicy pod wpływem parcia (próba Valsalvy) i kaszlu (test kaszlowy).",
        "Ocena postawy ciała oraz położenia mięśnia prostego brzucha, czy występuje rozejście (curl up test).",
      ],
      program: [
        "Edukacja w zakresie prawidłowej mikcji, defekacji i doboru aktywności fizycznej.",
        "Edukacja ćwiczeń mięśni dna miednicy i wspomagających krążenie w kończynach dolnych.",
        "Dobór ćwiczeń poprawiających postawę ciała, w tym rozejście mięśnia prostego brzucha i aktywizację mięśni głębokich tułowia.",
        "Zastosowanie kinesiotapingu na rozejście mięśnia prostego brzucha.",
        "Edukacja w zakresie podnoszenia, dźwigania oraz wspomagania laktacji metodami fizjoterapeutycznymi.",
      ],
    },
    star: [
      "Rozejście mięśnia prostego brzucha, curl up test.",
      "Kinesiotaping na rozejście, wspomaganie laktacji.",
    ],
  },

  // ===================== NEUROLOGIA (50-66) =====================
  {
    id: 50,
    section: "neurologia",
    title: "pacjent po udarze niedokrwiennym mózgu",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: BADANIE_NEURO_CENTRALNY,
      cele: CELE_NEURO_CENTRALNY,
      program: PROGRAM_NEURO_CENTRALNY,
    },
    add: {
      wywiad: ["Okoliczności udaru, pomoc osób trzecich w ciągu dnia, samodzielność."],
    },
    star: [
      "Skale: REPTY, zmodyfikowana Rankina, Barthel, test ręki Frenchay.",
      "Metody NDT-Bobath i PNF.",
    ],
  },
  {
    id: 51,
    section: "neurologia",
    title: "pacjent z chorobą Parkinsona",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Aktualne dolegliwości: stadium choroby, drętwienie, mrowienie, osłabienie siły, zmniejszenie ROM, ból (skala VAS), czynniki łagodzące i nasilające, charakter i lokalizacja bólu.",
      ],
      badanie: [
        "Skala według Schwaba i Englanda (aktywność codzienna).",
        "Próba Romberga, próba Unterberga.",
        "Test Tinetti.",
      ],
      program: [
        "Ćwiczenia zwiększające długość kroków (chodzenie po rozłożonych okręgach).",
        "Ćwiczenia równoważne (chód po linii, wytrącanie z równowagi, unoszenie nogi przy drabince).",
        "Ćwiczenia koordynacyjne, ćwiczenia Frenkla, reedukacja chodu, nauka upadania.",
        "Ćwiczenia motoryki małej, ogólnousprawniające, rozciągające, oddechowe, poprawiające mimikę twarzy.",
        "Masaż, fizykoterapia (peloidoterapia, kąpiele solankowe, zmienne pole elektromagnetyczne niskiej częstotliwości).",
      ],
    },
    star: [
      "Skala Schwaba i Englanda, próba Unterberga, test Tinetti.",
      "Ćwiczenia wydłużające krok, nauka upadania.",
    ],
  },
  {
    id: 52,
    section: "neurologia",
    title: "pacjent z chorobą Alzheimera",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Aktualne dolegliwości: zaburzenia funkcji poznawczych, zmiany osobowości, zaburzenia poczucia czasu i sfery emocjonalnej, od kiedy objawy, kiedy diagnoza, upadki, nagłe wybuchy złości.",
      ],
      badanie: [
        "Ocena wzrokowa postawy ciała, ocena palpacyjna obrzęków, ocieplenia, dolegliwości bólowych.",
        "Ocena zakresu ruchomości i siły mięśniowej (test Lovett), ocena bradykinezji.",
        "Ocena chodu (potknięcia, równowaga, długość i szerokość kroku, naprzemienność).",
        "Skala Tinetti, test wstań i idź, ADL (skala podstawowych czynności życia codziennego).",
        "Test MMSE (funkcje poznawcze), próba Romberga.",
      ],
      program: [
        "Program dostosowany do fazy choroby (zapominanie, dezorientacja, otępienie).",
        "Kinezyterapia: ćwiczenia oddechowe, równoważne, koordynacyjne, przyjmowania prawidłowej postawy, reedukacja chodu, PNF.",
      ],
    },
    star: [
      "Test MMSE, skala Tinetti, ADL.",
      "Program zależny od fazy: zapominanie, dezorientacja, otępienie.",
    ],
  },
  {
    id: 53,
    section: "neurologia",
    title: "pacjent z uszkodzeniem rdzenia kręgowego w odcinku szyjnym",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Skala Lovetta, skala Ashwortha.",
        "Skala oceny funkcji ruchowej Frankela.",
        "Skala ASIA (badanie zaburzeń czucia dotyku i bólu obustronnie w obrębie 28 dermatomów).",
      ],
      program: [
        "Ćwiczenia oddechowe, oklepywanie i pozycje drenażowe.",
        "Normalizacja napięcia mięśniowego (rotacje, wzorce trójpłaszczyznowe, rozciąganie, docisk, elongacja).",
        "Ćwiczenia bierne porażonych kończyn z dociskiem powierzchni stawowych, pozycje ułożeniowe.",
        "Ćwiczenia wg koncepcji neurofizjologicznych (PNF, Bobath, metoda Vojty).",
        "Pionizacja bierna od kąta około 30 st., nauka chodzenia.",
        "Terapia manualna, kinesiotaping, fizykoterapia, masaż, neuromobilizacje, terapia ręki.",
      ],
    },
    star: [
      "Skala ASIA, skala Frankela.",
      "Pionizacja bierna od kąta około 30 st.",
    ],
  },
  {
    id: 54,
    section: "neurologia",
    title: "pacjent ze stwardnieniem rozsianym",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Skala EDSS.",
        "Skala Scripps (SNRS).",
        "MS Impact Scale (MSIS).",
        "Ocena chodu (pomiar czasu przejścia dystansu lub dystansu w jednostce czasu).",
      ],
      program: [
        "Reedukacja nerwowo-mięśniowa (PNF, Bobath, bio-feedback, funkcjonalna elektrostymulacja FES).",
        "Reedukacja chodu (bieżnia z odciążeniem masy ciała, ćwiczenia koordynacyjno-równoważne wg Frenkla).",
        "Reedukacja funkcji ręki (terapia lustrzana, ćwiczenia motoryki małej).",
        "Zabiegi fizykalne: hydroterapia, masaż, elektroterapia (tonoliza, TENS, kąpiele elektryczno-wodne), pole magnetyczne, biostymulacja laserowa, sollux niebieski, krioterapia miejscowa i ogólnoustrojowa.",
      ],
    },
    star: [
      "Skale EDSS, Scripps (SNRS), MSIS.",
      "Funkcjonalna elektrostymulacja FES, terapia lustrzana.",
    ],
  },
  {
    id: 55,
    section: "neurologia",
    title: "pacjent ze stwardnieniem zanikowym bocznym (ALS)",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Skala Lovetta.",
        "Skorygowana Funkcjonalna Skala Stwardnienia Zanikowego Bocznego (ALSFRS-R).",
      ],
      cele: [
        "Jak najdłuższe utrzymanie zdolności samodzielnego przemieszczania się.",
        "Zapobieganie wtórnym skutkom: niedowładom, przykurczom, bólowi, zanikom, duszności, męczliwości.",
      ],
      program: [
        "Ćwiczenia oddechowe, czynne w odciążeniu, wspomagające w basenie.",
        "Ćwiczenia metodą PNF (równowaga, koordynacja, funkcja chodu), ćwiczenia z piłką rehabilitacyjną.",
        "Fizykoterapia: ciepło (kąpiele borowinowe), hydroterapia, relaksacyjny masaż mięśni.",
        "Zapobieganie obrzękom: wyższe układanie kończyn, pończochy uciskowe, ręczny masaż limfatyczny.",
        "Gorsety ortopedyczne, kołnierz stabilizujący osłabione mięśnie, ortezy stabilizujące.",
      ],
    },
    star: [
      "Skala ALSFRS-R.",
      "Kołnierz i ortezy stabilizujące, cel: utrzymanie samodzielnego przemieszczania.",
    ],
  },
  {
    id: 56,
    section: "neurologia",
    title: "pacjent z dystrofią mięśniową Beckera",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Występowanie choroby w rodzinie, badania genetyczne, jak dawno i jakie były pierwsze objawy.",
        "Sytuacja socjalno-bytowa, stadium choroby.",
        "Dolegliwości bólowe (skala VAS, NRS), czynniki łagodzące i nasilające, charakter i lokalizacja bólu.",
        "Inne dolegliwości (drętwienie, mrowienie, osłabienie siły, zmniejszenie ROM), ograniczenia dnia codziennego.",
      ],
      badanie: [
        "Badanie chodu, równowagi, czucia powierzchownego i głębokiego, stabilizacji tułowia, obrzęków.",
        "Badanie zmian pozycji (samodzielnie czy z pomocą), zakresów ruchu, siły mięśniowej.",
        "Ocena wydolności czynnościowej kończyn górnych i obręczy barkowej (np. według Tecklina).",
      ],
      program: [
        "Indywidualne podejście i dobór środków terapii.",
        "Kinezyterapia: ćwiczenia odruchowe, ogólnousprawniające, terapia chodu, pionizacja, ćwiczenia oddechowe, synergistyczne, rozciągające, PIR, PNF, kinesiology taping.",
      ],
    },
    star: [
      "Badania genetyczne, dziedziczenie rodzinne.",
      "Ocena wydolności czynnościowej wg Tecklina.",
    ],
  },
  {
    id: 57,
    section: "neurologia",
    title: "pacjent po krwotoku śródmózgowym",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: BADANIE_NEURO_CENTRALNY,
      cele: CELE_NEURO_CENTRALNY,
      program: PROGRAM_NEURO_CENTRALNY,
    },
    add: {
      wywiad: ["Okoliczności udaru, pomoc osób trzecich w ciągu dnia, samodzielność."],
    },
    star: [
      "Skale: REPTY, Rankina, Barthel, Frenchay (jak po udarze).",
      "Metody NDT-Bobath i PNF.",
    ],
  },
  {
    id: 58,
    section: "neurologia",
    title: "pacjent z uszkodzeniem nerwu strzałkowego",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: BADANIE_NEURO_CENTRALNY,
      cele: CELE_NEURO_CENTRALNY,
      program: PROGRAM_NEURO_CENTRALNY,
    },
    star: [
      "Badanie siły i czucia kończyny dolnej (skale Repty, Rankina, Barthel, Frenchay).",
    ],
  },
  {
    id: 59,
    section: "neurologia",
    title: "pacjent z uszkodzeniem nerwu pośrodkowego",
    base: {
      wywiad: WYWIAD_REKA,
      ocena: [],
      badanie: [],
      cele: [],
      program: PROGRAM_NERW,
    },
    add: {
      badanie: [
        "Zaburzenia ruchowe: utrudnione nawracanie przedramienia, osłabione zginanie ręki i palców, brak przeciwstawiania kciuka, ręka błogosławiąca.",
        "Zaburzenia czuciowe: 2/3 powierzchni dłoniowej ręki, trzy pierwsze palce i promieniowa połowa palca IV.",
        "Zaburzenia wegetatywne: skóra zimna, zasiniona, zaburzenia wzrostu włosów i paznokci.",
        "Badanie kliniczne: test Phalena, odwrócony test Phalena, test Tinela, test butelki Lüthy'ego, test Durkana.",
      ],
    },
    star: [
      "Ręka błogosławiąca.",
      "Testy Phalena, Tinela, Durkana.",
    ],
  },
  {
    id: 60,
    section: "neurologia",
    title: "pacjent z uszkodzeniem nerwu promieniowego",
    base: {
      wywiad: WYWIAD_REKA,
      ocena: [],
      badanie: [],
      cele: [],
      program: PROGRAM_NERW,
    },
    add: {
      badanie: [
        "Zaburzenia ruchowe: niemożliwe prostowanie przedramienia i ręki, zniesione prostowanie w stawach śródręczno-paliczkowych, porażone prostowanie i odwodzenie kciuka, ręka opadająca.",
        "Zaburzenia czuciowe: całkowite znieczulenie na powierzchni grzbietowej ręki między I a II kością śródręcza.",
        "Zaburzenia wegetatywne: niewielkie.",
        "Badanie kliniczne: ręka opada, brak możliwości zgięcia grzbietowego.",
      ],
    },
    star: [
      "Ręka opadająca.",
      "Znieczulenie grzbietu ręki między I a II kością śródręcza.",
    ],
  },
  {
    id: 61,
    section: "neurologia",
    title: "pacjent z uszkodzeniem nerwu łokciowego",
    base: {
      wywiad: WYWIAD_REKA,
      ocena: [],
      badanie: [],
      cele: [],
      program: PROGRAM_NERW,
    },
    add: {
      badanie: [
        "Zaburzenia ruchowe: osłabienie zginania i przywodzenia w nadgarstku, osłabienie zgięcia palców II do V, porażenie odwodzenia i przeciwstawiania palca małego, przywodzenia kciuka, zanik mięśni kłębika, ręka szponiasta.",
        "Zaburzenia czuciowe: dłoniowo palec V i przyśrodkowa część palca IV, grzbietowo palec V i IV oraz część palca III.",
        "Zaburzenia wegetatywne: sucha, sina, odbarwiona skóra, rogowacenie naskórka, zmiany paznokcia palca małego.",
        "Badanie kliniczne: objaw Fromenta, objaw Wartenberga, objaw osłabienia haka łokciowego.",
      ],
    },
    star: [
      "Ręka szponiasta.",
      "Objaw Fromenta, objaw Wartenberga.",
    ],
  },
  {
    id: 62,
    section: "neurologia",
    title: "pacjent z uszkodzeniem splotu ramiennego",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Wywiad chorobowy: kiedy pojawiły się dolegliwości, czynnik sprawczy (może być nieuchwytny), charakter i miejsce bólu, ogólny stan zdrowia.",
      ],
      badanie: [
        "Oględziny: postawa, kolor skóry, symetria, zniekształcenia, zaniki i przykurcze mm., czucie dotyku i temperatury, zaopatrzenie ortopedyczne.",
        "Badanie palpacyjne, badanie ROM i siły kkg (test Lovetta, skala MRC, dynamometr).",
        "Testy funkcjonalne i neurologiczne: testy napięciowe, ocena dermatomów, miotomów, sklerotomów, mięśnie wskaźnikowe, odruchy ścięgniste.",
        "Diagnostyka różnicowa z uszkodzeniem pojedynczych nerwów.",
      ],
      cele: [
        "Normalizacja tonusu mm., zapobieganie przykurczom i atrofii.",
        "Zwiększenie ROM, dążenie do odzyskania funkcji nerwów, zmniejszenie bólu.",
        "Zapobieganie deformacjom i utrwalaniu nieprawidłowej pozycji analgetycznej, edukacja, przygotowanie do zabiegu neurochirurgicznego.",
      ],
      program: [
        "Kinezyterapia: ćwiczenia bierne, czynno-bierne, samowspomagane, oporowane, izometryczne, motoryki małej, automasaż.",
        "Fizykoterapia: ciepłolecznictwo, laser wysokoenergetyczny, jonoforeza, krioterapia, magnetoterapia, TENS, masaż pneumatyczny BOA, elektrostymulacja.",
        "Masaż klasyczny, terapia manualna, metody neurofizjologiczne (PNF, NDT-Bobath), mobilizacje, neuromobilizacje, kinesiotaping, terapia punktów spustowych.",
      ],
    },
    star: [
      "Diagnostyka różnicowa z uszkodzeniem pojedynczych nerwów.",
      "Ocena dermatomów, miotomów, sklerotomów, testy napięciowe.",
    ],
  },
  {
    id: 63,
    section: "neurologia",
    title: "pacjent z zespołem Guillaina-Barrégo",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Czy w ostatnich 2 miesiącach wystąpiło zatrucie pokarmowe, zakażenie dróg oddechowych, mononukleoza, grypa, półpasiec, ospa wietrzna?",
        "Czy występują zaburzenia rytmu serca, ciśnienia, oddychania i połykania, oddawania moczu i stolca, termoregulacji, źreniczne, bóle grzbietu i kończyn?",
        "Wywiad socjalny (warunki mieszkaniowe, pomoc w domu, źródło utrzymania).",
      ],
      badanie: [
        "Ocena postawy, pozycji przeciwbólowej, symetrii, zaników i przykurczów mm., czucia, charakterystyczna symetryczność objawów.",
        "Badanie palpacyjne, ROM (goniometr), siła mięśniowa kkg i kkd (test Lovetta, skala MRC).",
        "Odruchy ścięgniste (kolanowy, ze ścięgna Achillesa, w zespole często osłabione), odruch źreniczny (często brak), badanie czucia.",
      ],
      cele: [
        "Normalizacja tonusu mm., zapobieganie przykurczom i atrofii, zwiększenie ROM, zmniejszenie bólu.",
        "Nauka prawidłowego oddychania, motywowanie do systematyczności (rehabilitacja długotrwała).",
      ],
      program: [
        "Gimnastyka oddechowa, nauka prawidłowego połykania.",
        "Ćwiczenia poprawiające koordynację ruchową, doskonalenie chodu.",
        "Zaburzenia czucia: techniki koncepcji stymulacji bazalnej.",
        "Fizykoterapia, masaż, terapia manualna i specjalistyczna.",
      ],
    },
    star: [
      "Poprzedzające (2 miesiące) zakażenie lub zatrucie pokarmowe.",
      "Symetryczność objawów, osłabienie odruchów ścięgnistych, gimnastyka oddechowa.",
    ],
  },
  {
    id: 64,
    section: "neurologia",
    title: "pacjent z zespołem bólowym odcinka lędźwiowo-krzyżowego kręgosłupa",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Wywiad chorobowy: od kiedy ból, kiedy się nasila lub zmniejsza, pozycje łagodzące (nasilenie przy siedzeniu wskazuje na dyskopatię), charakter i intensywność bólu, badania obrazowe, rodzaj pracy, aktywność fizyczna, uraz.",
      ],
      badanie: [
        "Budowa ogólna, stan skóry i mięśniówki, postawa, deformacje, skoliozy, asymetria miednicy.",
        "Obwody, osie i obrysy kończyn, obserwacja chodu i globalnego ruchu, palpacja.",
        "Punkty wyjścia nerwów, opukowa wrażliwość, kompresja osiowa i trakcja, opór końcowy.",
        "Ocena czucia powierzchownego (dermatomy), test diagnostyczny: slump test.",
      ],
      program: [
        "Zabiegi fizykalne (najczęściej ciepłolecznictwo, przy uszkodzeniach kostnych magnetoterapia).",
        "Ćwiczenia wzmacniające lub rozciągające.",
        "Terapia manualna, masaż powięziowy, terapia punktów spustowych, kinesiotaping.",
      ],
    },
    star: [
      "Slump test.",
      "Punkty wyjścia nerwów, kompresja osiowa i trakcja.",
    ],
  },
  {
    id: 65,
    section: "neurologia",
    title: "pacjent z zespołem bólowym odcinka szyjnego kręgosłupa",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Wywiad chorobowy: od kiedy ból, kiedy się nasila lub zmniejsza, pozycje łagodzące, charakter i intensywność bólu, badania obrazowe, choroby współistniejące, rodzaj pracy, aktywność fizyczna, uraz.",
      ],
      badanie: [
        "Ocena wizualna: symetria, równowaga statyczna, stan skóry, porównanie obrysów szyi, ocena lordozy szyjnej.",
        "Ocena ROM, ocena palpacyjna tkliwości tkanek.",
        "Badanie skriningowe ruchów rotacyjnych odcinka szyjnego, test dystrakcyjny szyjnego odcinka.",
        "Badanie czucia skórnego, odruchów ścięgnistych i siły mięśni wskaźnikowych dla segmentów szyjnych.",
      ],
      program: [
        "Ćwiczenia rozciągające, poprawy ROM, czynne wolne, oporowe, izometryczne, poizometryczna relaksacja mięśni.",
        "Masaż tkanek głębokich.",
        "TENS, sollux.",
      ],
    },
    star: [
      "Test dystrakcyjny szyjnego odcinka kręgosłupa.",
      "Badanie skriningowe ruchów rotacyjnych.",
    ],
  },
  {
    id: 66,
    section: "neurologia",
    title: "pacjent z ataksją tylnosznurową",
    base: {
      wywiad: WYWIAD_NEURO,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Wywiad chorobowy: czy były urazy kręgosłupa lub mózgu, czy są wyniki badania obrazowego, czy pacjent był leczony onkologicznie, czy ma prawidłową gospodarkę hormonalną i dietę.",
      ],
      badanie: [
        "Badanie czucia głębokiego, ocena objawów uszkodzenia nerwów obwodowych lub rdzenia.",
        "Próba Romberga, ocena niezborności ruchowej, drżenia mięśni, brak zdolności oceny położenia ciała w przestrzeni.",
      ],
      cele: [
        "Przywrócenie prawidłowej propriocepcji.",
        "Przywrócenie prawidłowego przewodnictwa nerwowego.",
        "Nauka ergonomicznego chodu.",
      ],
      program: [
        "Ćwiczenia koordynacyjne.",
        "Ćwiczenia wspomagające równowagę.",
        "Ćwiczenia i korekcja chodu.",
      ],
    },
    star: [
      "Zaburzenia czucia głębokiego, dodatnia próba Romberga.",
      "Ćwiczenia koordynacyjne i korekcja chodu.",
    ],
  },

  // ===================== ONKOLOGIA (67) =====================
  {
    id: 67,
    section: "onkologia",
    title: "pacjent po mastektomii",
    base: {
      wywiad: WYWIAD_ORTHO,
      ocena: OCENA_ORTHO,
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Badanie funkcjonalne kończyny górnej, testy aktywne, pasywne, oporowe.",
        "Ocena postawy pacjenta, palpacja, ocena blizny.",
      ],
      program: [
        "Zapobieganie zastojowi chłonki w kończynie i okolicy operacyjnej: edukacja, ćwiczenia czynne, klin przeciwobrzękowy, ćwiczenia oddechowe i rozluźniające, automasaż, terapia blizny.",
        "Zwiększenie zakresu ruchomości w stawie ramiennym strony operowanej: ćwiczenia czynne, samowspomagane, bierne, masaż, masaż tkanek głębokich, kinesiology taping, terapia blizny.",
        "Korygowanie zmian postawy: ćwiczenia przy lustrze.",
        "Utrzymanie lub zwiększenie siły mięśniowej kg strony operowanej: ćwiczenia czynne z obciążeniem.",
        "Poprawa czynności układu oddechowego: ćwiczenia oddechowe.",
        "Zapobieganie rozwojowi obrzęku chłonnego: edukacja, klin przeciwobrzękowy, automasaż, terapia blizny.",
      ],
    },
    star: [
      "Zapobieganie obrzękowi chłonnemu (klin przeciwobrzękowy, automasaż).",
      "Terapia blizny i zakresu ruchu w stawie ramiennym strony operowanej.",
    ],
  },

  // ===================== SPORTOWA (68-69) =====================
  {
    id: 68,
    section: "sportowa",
    title: "pacjent po skręceniu stawu skokowego",
    base: {
      wywiad: [],
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Aktualne objawy oraz kiedy się pojawiły, mechanizm urazu.",
        "Wcześniejsze epizody, dotychczasowe leczenie, choroby towarzyszące.",
      ],
      badanie: [
        "Badanie zakresu ruchomości czynny i bierny, siły mięśniowej, badanie palpacyjne, VAS dla całego urazu.",
        "Ocena obrzęku i krwiaka.",
        "Test szuflady przedniej (więzadło strzałkowo-skokowe przednie).",
        "Test odwrócenia stopy (więzadło strzałkowo-piętowe).",
        "Squeeze test i external rotation test (więzozrost piszczelowo-strzałkowy).",
      ],
      program: [
        "48-72 godziny (faza ostra): zasada PRICE lub POLICE, w razie potrzeby odciążenie, ćwiczenia stabilizacji i zakresu ruchu do granicy bólu.",
        "3-7 dni (faza podostra): mobilizacja tkanek miękkich, aktywne zgięcie podeszwowe i grzbietowe, stretching, stopniowe obciążanie, ćwiczenia stabilizacyjne, trening propriocepcji.",
        "2-4 tygodnie (faza kształtowania): trening aerobowy, stretching, wzmacnianie mięśni łydki i piszczelowych, trening koncentryczny i ekscentryczny stabilizatorów, trening wielopłaszczyznowy propriocepcji.",
      ],
    },
    star: [
      "Test szuflady przedniej, test odwrócenia stopy, squeeze test i external rotation test.",
      "Faza ostra: PRICE lub POLICE, trening propriocepcji.",
    ],
  },
  {
    id: 69,
    section: "sportowa",
    title: "pacjent po zerwaniu więzadła krzyżowego przedniego, przed zabiegiem operacyjnym",
    base: {
      wywiad: [],
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      wywiad: [
        "Aktualne objawy oraz kiedy się pojawiły, jak doszło do urazu.",
        "Wcześniejsze epizody, dotychczasowe leczenie, choroby towarzyszące.",
      ],
      badanie: [
        "Badanie zakresu ruchomości, siły mięśniowej, VAS dla całego urazu.",
        "Test szuflady przedniej.",
        "Test Lachmana.",
      ],
      program: [
        "Prehabilitacja, przygotowanie do zabiegu.",
        "Przywrócenie maksymalnej ruchomości, propriocepcji, siły i koordynacji.",
        "Zmniejszenie lub brak wysięku i bólu podczas aktywności fizycznej.",
      ],
    },
    star: [
      "Test Lachmana i test szuflady przedniej.",
      "Prehabilitacja przed zabiegiem operacyjnym.",
    ],
  },

  // ===================== CHIRURGIA (70-72) =====================
  {
    id: 70,
    section: "chirurgia",
    title: "pacjent po operacjach jamy brzusznej",
    base: {
      wywiad: [
        "Podstawowe dane personalne.",
        "Aktualne dolegliwości.",
        "Choroby współistniejące i przebyte.",
        "Zażywane leki, używki.",
        "Zawód, aktywność zawodowa.",
        "Czas pojawienia się i rodzaj objawów, nasilenie objawów.",
        "Czas zdarzenia, dynamika narastania dolegliwości, dolegliwości bólowe.",
      ],
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Przed ćwiczeniami sprawdzić stan drenów, sond, cewników.",
        "Przy workach Foleya unikać podnoszenia wypełnionych zbiorników powyżej poziomu pęcherza moczowego.",
        "Wenflon nie stanowi problemu w procesie rehabilitacji.",
      ],
      program: [
        "Rehabilitacja przedoperacyjna: ćwiczenia oddechowe, nauka efektywnego kaszlu, stabilizacji okolicy przyszłej rany, ćwiczeń przeciwzakrzepowych, ogólnousprawniających.",
        "Rehabilitacja pooperacyjna: ćwiczenia oddechowe, efektywnego kaszlu, stabilizacja rany podczas kaszlu, ćwiczenia przeciwzakrzepowe.",
        "Pierwsza doba: psychoterapia, ćwiczenia oddechowe odpowiednim torem, efektywny kaszel, stabilizacja rany, pionizacja, spacer, oklepywanie klatki, inhalacje, specjalne techniki oddychania.",
        "Kolejne doby: rozszerzanie zakresu i intensywności ćwiczeń, zwiększanie dystansu spacerów, skręty, skłony boczne, dbałość o bliznę (przesuwanie, masowanie, pielęgnacja).",
      ],
    },
    star: [
      "Nauka efektywnego kaszlu i stabilizacji rany operacyjnej.",
      "Sprawdzenie drenów, sond, cewników, worki Foleya poniżej poziomu pęcherza.",
    ],
  },
  {
    id: 71,
    section: "chirurgia",
    title: "pacjent z przykurczem Dupuytrena leczony operacyjnie",
    base: {
      wywiad: WYWIAD_REKA,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "W badaniu fizykalnym wyczuwalne pasma rozcięgna dłoniowego, test stołu (Houston Table Top Test).",
        "We wczesnych stadiach pomocne badanie ultrasonograficzne (wrzecionowate, ubogoechogeniczne pogrubienia rozcięgna dłoniowego).",
      ],
      program: [
        "Rehabilitacja zginaczy i prostowników.",
        "Fizykoterapia: ultradźwięki, fala uderzeniowa, laseroterapia.",
        "Terapia manualna, terapia ręki.",
      ],
    },
    star: [
      "Test stołu (Houston Table Top Test).",
      "Rehabilitacja zginaczy i prostowników, terapia ręki.",
    ],
  },
  {
    id: 72,
    section: "chirurgia",
    title: "pacjent z zespołem cieśni nadgarstka leczony operacyjnie",
    base: {
      wywiad: WYWIAD_REKA,
      ocena: [],
      badanie: [],
      cele: [],
      program: [],
    },
    add: {
      badanie: [
        "Podstawą diagnostyki jest poprawne badanie przez specjalistę chirurgii ręki i ortopedę.",
        "Badania dodatkowe: badanie przewodnictwa nerwowego nerwu pośrodkowego (EMG), badanie ultrasonograficzne.",
        "Test Phalena, test butelki Luthy'ego, objaw cyrkla, test uciskowy.",
      ],
      program: [
        "Leczenie operacyjne: przecięcie troczka zginaczy.",
        "Fizjoterapia: neuromobilizacje, kinesiology taping, metody neurofizjologiczne, PIR, ćwiczenia stabilizacyjne, terapia ręki, laseroterapia, ciepłolecznictwo, kąpiele wirowe, ultradźwięki, masaż funkcyjny.",
      ],
    },
    star: [
      "Przecięcie troczka zginaczy.",
      "Test Phalena, test butelki Luthy'ego, objaw cyrkla, EMG nerwu pośrodkowego.",
    ],
  },
];
