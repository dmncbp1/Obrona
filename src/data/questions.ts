export type SectionId =
  | "pediatria"
  | "ortopedia"
  | "pulmonologia"
  | "kardiologia"
  | "kardiochirurgia"
  | "reumatologia"
  | "ginekologia"
  | "neurologia"
  | "onkologia"
  | "sportowa"
  | "chirurgia";

export interface Block {
  wywiad: string[];
  ocena: string[];
  badanie: string[];
  cele: string[];
  program: string[];
}

export interface Question {
  id: number;
  section: SectionId;
  title: string;
  base: Block;
  add?: Partial<Block>;
  star?: string[];
}

export interface SectionInfo {
  id: SectionId;
  name: string;
  range: string;
  color: string;
  soft: string;
}

export interface TemplateInfo {
  id: string;
  title: string;
  range: string;
  kind: "Wywiad" | "Badanie" | "Program";
  items: string[];
}

export const skeletonSteps = ["Wywiad", "Ocena", "Badanie", "Cele", "Program"] as const;

export const sections: SectionInfo[] = [
  { id: "pediatria", name: "Wiek rozwojowy / pediatria", range: "1-13", color: "#38bdf8", soft: "rgba(56, 189, 248, 0.14)" },
  { id: "ortopedia", name: "Ortopedia", range: "14-21", color: "#a78bfa", soft: "rgba(167, 139, 250, 0.14)" },
  { id: "pulmonologia", name: "Pulmonologia", range: "22-32", color: "#22d3ee", soft: "rgba(34, 211, 238, 0.14)" },
  { id: "kardiologia", name: "Kardiologia", range: "33-38", color: "#fb7185", soft: "rgba(251, 113, 133, 0.14)" },
  { id: "kardiochirurgia", name: "Kardiochirurgia", range: "39-42", color: "#f97316", soft: "rgba(249, 115, 22, 0.14)" },
  { id: "reumatologia", name: "Reumatologia", range: "43-47", color: "#facc15", soft: "rgba(250, 204, 21, 0.14)" },
  { id: "ginekologia", name: "Ginekologia i położnictwo", range: "48-49", color: "#f472b6", soft: "rgba(244, 114, 182, 0.14)" },
  { id: "neurologia", name: "Neurologia", range: "50-66", color: "#60a5fa", soft: "rgba(96, 165, 250, 0.14)" },
  { id: "onkologia", name: "Onkologia", range: "67", color: "#c084fc", soft: "rgba(192, 132, 252, 0.14)" },
  { id: "sportowa", name: "Medycyna sportowa", range: "68-69", color: "#34d399", soft: "rgba(52, 211, 153, 0.14)" },
  { id: "chirurgia", name: "Chirurgia / nerwy obwodowe", range: "70-72", color: "#94a3b8", soft: "rgba(148, 163, 184, 0.14)" }
];

const emptyBlock: Block = { wywiad: [], ocena: [], badanie: [], cele: [], program: [] };

export const interviewTemplates = {
  PEDIATRYCZNY: [
    "Początek, czas trwania, przyczyna patologii i objawy funkcjonalne dziecka.",
    "Wywiad okołoporodowy: przebieg ciąży i porodu, masa urodzeniowa, APGAR, ułożenie dziecka, małowodzie, czynniki ryzyka.",
    "Wywiad rozwojowy: kamienie milowe, rozwój psychomotoryczny, wiek skorygowany, choroby i wady w rodzinie.",
    "Sposób pielęgnacji dziecka i reakcje dziecka w aktywności domowej."
  ],
  ORTHO: [
    "Problem, z jakim pacjent przyszedł.",
    "Choroby współistniejące, przebyte urazy i operacje, dotychczasowe leczenie.",
    "Badania dodatkowe, przyjmowane leki, czerwone i żółte flagi.",
    "Ocena głównych dolegliwości: umiejscowienie, początek, ewolucja, charakter, promieniowanie, objawy współistniejące, przebieg, czynniki zaostrzające i łagodzące, intensywność."
  ],
  PULMO: [
    "Choroba główna: od jak dawna, jakie objawy, zmiana objawów w czasie, co modyfikuje objawy.",
    "Kaszel, wydzielina: kolor i lepkość, odkrztuszanie, świszczący oddech, krwioplucie.",
    "Choroby współistniejące, leki, dieta, alkohol, styl życia i palenie papierosów.",
    "Sytuacja socjalna i finansowa, warunki mieszkaniowe, wykonywany zawód lub hobby.",
    "Duszność oceniana skalą Borga lub inną."
  ],
  KARDIO: [
    "Wiek, warunki socjalno-bytowe, mieszkaniowe i wykonywany zawód.",
    "Objawy przed zabiegiem lub w przebiegu choroby, duszności spoczynkowe i wysiłkowe.",
    "Stan funkcjonalny w ocenie pacjenta, palenie papierosów, aktywność fizyczna.",
    "Ból: gdzie, kiedy i natężenie; choroby współistniejące i przebyte operacje."
  ],
  NEURO: [
    "Podstawowe dane personalne.",
    "Aktualne dolegliwości.",
    "Choroby współistniejące i przebyte oraz leczenie szpitalne i ambulatoryjne.",
    "Zażywane leki i używki.",
    "Wywiad rodzinny i środowiskowy."
  ],
  REKA: [
    "Podstawowe dane personalne i aktualne dolegliwości.",
    "Choroby współistniejące i przebyte, zażywane leki, używki.",
    "Ręka dominująca, zawód i aktywność zawodowa.",
    "Czas pojawienia się i rodzaj objawów, nasilenie, czas zdarzenia, dynamika narastania dolegliwości, ból."
  ]
} as const;

export const examTemplates: TemplateInfo[] = [
  { id: "wywiad-pediatryczny", title: "PEDIATRYCZNY", range: "1-13", kind: "Wywiad", items: [...interviewTemplates.PEDIATRYCZNY] },
  { id: "wywiad-ortho", title: "ORTHO", range: "14-21, 67", kind: "Wywiad", items: [...interviewTemplates.ORTHO] },
  { id: "wywiad-pulmo", title: "PULMO", range: "22-32", kind: "Wywiad", items: [...interviewTemplates.PULMO] },
  { id: "wywiad-kardio", title: "KARDIO", range: "33-42", kind: "Wywiad", items: [...interviewTemplates.KARDIO] },
  { id: "wywiad-neuro", title: "NEURO", range: "50-66", kind: "Wywiad", items: [...interviewTemplates.NEURO] },
  { id: "wywiad-reka", title: "REKA", range: "59-61, 71-72", kind: "Wywiad", items: [...interviewTemplates.REKA] },
  { id: "badanie-pulmo", title: "Badanie oddechowe", range: "22-32", kind: "Badanie", items: ["Obserwacja toru oddechowego, skóry, palców, klatki piersiowej i oddechów.", "Dotyk: ruchomość klatki piersiowej i potliwość.", "Słuch: świst, osłuchiwanie i odgłosy oddechowe.", "Czucie: drżenie głosowe i opukiwanie klatki piersiowej."] },
  { id: "program-pulmo", title: "PULMO oddechowy", range: "22-32", kind: "Program", items: ["Aktywacja przepony, mięśni oddechowych, klatki piersiowej i obręczy barkowej.", "Toaleta drzewa oddechowego.", "Trening oddechowy z trenażerami.", "Akcent: wdech albo wydech oraz obecność inhalacji."] },
  { id: "program-kardio", title: "KARDIO", range: "33-42", kind: "Program", items: ["Powrót do normalnego życia, adaptacja do ograniczeń i modyfikacja czynników ryzyka.", "Szybkie uruchomienie i profilaktyka powikłań zakrzepowo-zatorowych oraz oddechowych.", "Pionizacja: 6-8 h po koszulce, 12-24 h po zawale, II doba po kardiochirurgii.", "Trening chodu, ćwiczenia ogólne, przeciwzakrzepowe, oddechowe, monitorowane treningi i edukacja."] },
  { id: "program-neuro-centralny", title: "NEURO centralny", range: "50, 57, 58", kind: "Program", items: ["Skale Repty, Rankin, Barthel i test ręki Frenchay.", "Profilaktyka przykurczów, skostnień okołostawowych i odleżyn.", "Ćwiczenia NDT-Bobath lub PNF.", "Pionizacja, reedukacja chodu i czynności życia codziennego."] },
  { id: "program-nerw", title: "NERW obwodowy", range: "59-61", kind: "Program", items: ["Fizykoterapia: ciepło, elektrostymulacja, kąpiele wirowe, magnetoterapia, laser, ultradźwięki.", "Ćwiczenia bierne, czynne i samowspomagane.", "PNF, terapia ręki, terapia manualna i neuromobilizacja.", "Kinesiology taping i ortezy."] },
  { id: "program-reuma", title: "REUMA", range: "43-47", kind: "Program", items: ["Fizykoterapia zmniejszająca stan zapalny i ból.", "Ćwiczenia zakresu ruchu i siły mięśni.", "Terapia tkanek miękkich, profilaktyka deformacji i edukacja.", "Program aktualizowany po zaostrzeniach choroby."] }
];

const sourceQuestions = [
  {
    "id": 1,
    "section": "pediatria",
    "title": "niemowląt z kręczem szyi",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Od kiedy? Jak długo? Jaka przyczyna patologii (wrodzona czy nabyta) / (mięśniowo-pochodna czy kostno-pochodna)? Czy występuje wada wzroku i/lub słuchu?"
      ],
      "ocena": [],
      "badanie": [
        "Wizualna ocena symetrii głowy w leżeniu. Ocena kontroli głowy w przestrzeni. Ocena czy dziecko rotuje głowę w stronę przeciwną. Palpacyjna ocena napięcia mm. MOS po prawej i lewej stronie szyi. Sprawdzenie ustawienia barków Palpacyjna ocena napięcia m. Trapezius cz. zstępująca po stronie prawej i lewej Ocena długości mm. MOS po prawej i lewej stronie szyi"
      ],
      "cele": [
        "Normalizacja napięcia m. MOS oraz wzmocnienie rozciągniętego m. MOS po stronie przeciwnej Normalizacja napięcia m. Trapezius cz. Zstępująca po stronie napiętej Korekcja ustawienia głowy - powrót do symetrii Wydłużenie skróconego m. MOS."
      ],
      "program": [
        "Rozgrzewanie m. MOS i m. trapezius cz. zstępująca po stronie skróconej (Ciepłolecznictwo - fango/ Sollux/ Termofor) Masaż klasyczny m. MOS i m. trapezius cz. zstępująca po stronie skróconej Rozciąganie (biernie oraz czynnie) m. MOS i m. Trapezius cz. zstępująca po stronie skróconej Ćwiczenia czynne Ćwiczenia czynne wzmacniające m. MOS Wprowadzenie zasad pielęgnacji neurorozwojowej (właściwe karmienie dziecka, noszenie, ubieranie dziecka, zabawa z dzieckiem) w celu aktywizacji głowy dziecka w stronę pomijaną,"
      ]
    },
    "star": [
      "Rozgrzewanie m. MOS i m. trapezius cz. zstępująca po stronie skróconej (Ciepłolecznictwo - fango/ Sollux/ Termofor) Masaż klasyczny m. MOS i m. trapezius cz. zstępująca p",
      "Wizualna ocena symetrii głowy w leżeniu. Ocena kontroli głowy w przestrzeni. Ocena czy dziecko rotuje głowę w stronę przeciwną. Palpacyjna ocena napięcia mm. MOS po prawe",
      "Normalizacja napięcia m. MOS oraz wzmocnienie rozciągniętego m. MOS po stronie przeciwnej Normalizacja napięcia m. Trapezius cz. Zstępująca po stronie napiętej Korekcja u"
    ]
  },
  {
    "id": 2,
    "section": "pediatria",
    "title": "niemowląt ze zwichnięciem i dysplazją stawu biodrowego",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Jakie ułożenie dziecka w trakcie ciąży oraz porodu? Jaka masa urodzeniowa dziecka? Małowodzie? Wady rozwojowe w rodzinie? Inne wady kkd u dziecka?"
      ],
      "ocena": [],
      "badanie": [
        "Noworodki: objaw Ortolaniego /objaw Barlowa / ocena długości względnej kkd, którą mierzymy w poz. Zgięcia 90 st w biodrach, 90 sst w kolanach Porównywanie wysokości kolanek,",
        "Niemowlęta: Ocena asymetrii fałdów pachwinowych. Ocena ograniczenia odwiedzenia od 5 tyg. życia. Ocena ograniczeni odwiedzenia ≤60şt. Ocena asymetrii odwiedzenia / utrudnienie odwiedzenia z uczuciem hamowania. Przemieszczenie krętarza większego kości udowej ku górze. Nierówność kkd / niewyczuwanie głowy k. udowej w panewce."
      ],
      "cele": [
        "Uzyskanie koncentrycznej repozycji / koncentrycznego ustawienia głowy kości udowej w panewce stawu biodrowego,"
      ],
      "program": [
        "Dzieci od 0 do 6 m. ż. Szelki Pavlika, skuteczne do 6 m. ż., w celu właściwego ustawienia stawu biodrowego. USG po założeniu szelek w celu kontroli repozycji. Czas leczenia stawów niestabilnych nie mniej niż 12 tygodni od uzyskania stabilnej repozycji. Szelki stosowane są przez całą dobę, kontrole co 7 dni. Jeśli stawy są nie stabilne, ale w prawidłowym ustawieniu to stabilizacja powinna nastąpić w ciągu kilku dni bez leczenia, pod warunkiem prawidłowej pielęgnacji Następnie badanie kontrolne w pierwszych 2-4 tygodniach życia. Poduszka Frejki / Szyna odwodząca / Szerokie pieluszkowanie,",
        "Dzieci od 6 do 18 m. ż Leczenie poprzedzone wyciągiem ponad głową - Stawy biodrowe zgięte 110 st., odwiedzenie do około 70 st., Obciążenie w zależności od wagi, ale takie by pośladki lekko się unosiły, Czas około 4-6 tygodni, repozycja musi być potwierdzona przez USG Następnie wykonuje się zamkniętą repozycję z ewentualnym przezskórnym przecięciem m. przywodziciela długiego."
      ]
    },
    "star": [
      "Noworodki: objaw Ortolaniego /objaw Barlowa / ocena długości względnej kkd, którą mierzymy w poz. Zgięcia 90 st w biodrach, 90 sst w kolanach Porównywanie wysokości kolan",
      "Dzieci od 0 do 6 m. ż. Szelki Pavlika, skuteczne do 6 m. ż., w celu właściwego ustawienia stawu biodrowego. USG po założeniu szelek w celu kontroli repozycji. Czas leczen",
      "Dzieci od 6 do 18 m. ż Leczenie poprzedzone wyciągiem ponad głową - Stawy biodrowe zgięte 110 st., odwiedzenie do około 70 st., Obciążenie w zależności od wagi, ale takie"
    ]
  },
  {
    "id": 3,
    "section": "pediatria",
    "title": "niemowląt z uszkodzeniem splotu ramiennego",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Powikłanie w trakcie ciąży/okołoporodowe/poporodowe? Uraz mechaniczny w trakcie porodu? Niewłaściwe ułożenia dziecka w brzuchu? Silne pociągnięcie dziecka za ramię? Czynniki wysokiego ryzyka? Okręcenie pępowiną? Złamanie obojczyka? Poród z użyciem kleszczy? Niewłaściwe badanie lekarskie?"
      ],
      "ocena": [],
      "badanie": [
        "Ocena siły mięśniowej. Ocena zakresu ruchomości. Ocena czucia powierzchniowego. Ocena wizualna (czy występuje obrzęk, zmiana koloru skóry, krwiaki itp.). Ocena ruchów spontanicznych."
      ],
      "cele": [
        "Doprowadzenie KG do jak najwcześniejszej funkcjonalności w czynnościach dnia codziennego. Zabezpieczenie przed deformacjami włączenie kończyny do wyobrażeń pacjenta o schemacie własnego ciała. Zwiększenie siły mięśniowej porażonej kończyny górnej. Zwiększenie zakresu ruchomości kończyny górnej jeśli jest ograniczona przykurczem. Utrzymanie zakresu ruchomości kończyny górnej, aby zapobiegać przykurczom. Poprawa czucia porażonej kończyny górnej."
      ],
      "program": [
        "Systematyczna ocena pacjenta w celu kontroli postępów rehabilitacji. Zabezpieczenie kg (w pozycji spoczynkowej - na wysokości dolnych żeber, w nieznacznym odwiedzeniu w stawie ramiennym, zgięciu w stawie łokciowym 70 st.).",
        "Okres pierwszych kilku dni - czas na adaptację dziecka do nowej sytuacji, wyciszenia stanu pourazowego (wchłanianie się obrzęków czy krwiaków). W tym czasie nie wykonujemy, żadnych ruchów biernych poza stymulacją dotykową dłoni dziecka, Od 6 dnia do 405 tyg. pozycjonowanie ręki wzdłuż ciała w celu umożliwienia wykonywania ruchów spontanicznych. Kg całkowicie niedowładną układamy w pozycji \"krakowiaka\", \"statuy wolności\", Masaż tułowia i kkg, Ćwiczenia bierne w 75% zakresu ruchomości Stymulacja ułożenia tułowia i głowy, kilka razy dziennie około 10-15 min. Naświetlania światłem spolaryzowanym lub podczerwienią/ laseroterapię biostymulującą/ Kg porażona swobodnie układana na klatce piersiowej lub wzdłuż ciała, Ćwiczenia bierne ze stabilizacją stawu, ćwiczenia oparte na met. Neurofizjologicznych (Vojta , NDT - Bobath) Okłady cieplne Ćwiczenia bierne, wspomagane, z dawkowanym oporem, Mobilizacje okołostawowe Nauka lokomocji z jak najdłuższym okresem czworakowania, Wykorzystywanie spontanicznej aktywności dziecka Wykorzystanie łóżek korekcyjnych, ortez, plastrowanie Pływanie, hipoterapia, aktywność rekreacyjna, sportowa"
      ]
    },
    "star": [
      "Okres pierwszych kilku dni - czas na adaptację dziecka do nowej sytuacji, wyciszenia stanu pourazowego (wchłanianie się obrzęków czy krwiaków). W tym czasie nie wykonujem",
      "Ocena siły mięśniowej. Ocena zakresu ruchomości. Ocena czucia powierzchniowego. Ocena wizualna (czy występuje obrzęk, zmiana koloru skóry, krwiaki itp.). Ocena ruchów spo",
      "Systematyczna ocena pacjenta w celu kontroli postępów rehabilitacji. Zabezpieczenie kg (w pozycji spoczynkowej - na wysokości dolnych żeber, w nieznacznym odwiedzeniu w s"
    ]
  },
  {
    "id": 4,
    "section": "pediatria",
    "title": "dzieci z dystrofią mięśniową",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Poziom enzymów mięśniowych CPK? Badania genetyczne? Opóźnienie rozwoju motoryki dużej w ciągu pierwszych dwóch lat? Kiedy dziecko zaczęło chodzić samodzielnie? Niedowład lub obniżenie napięcia w mm. Proksymalnych? Zaburzenia oddychania? Występowanie choroby w rodzinie?"
      ],
      "ocena": [],
      "badanie": [
        "Ocena siły mięśniowej wg Lovetta Ocena zakresu ruchomości stawów goniometrem Objaw Gowersa Ocena rozwoju psychomotorycznego Ocena chodu Ocena wydolności układu oddechowego EMG z zapisem miopatycznym Określenie poziomu dystrofiny Określenie poziomu kinazy kreatynowej Ocenę nawykowej postawy ciała w pozycji siedzącej / stojącej Ocenę ukształtowania kręgosłupa oraz budowy i ruchomości klatki piersiowej, Ocenę sprawności oddechowej w poz. Leżącej i siedzącej - spirometria i przepływ objętości Ocena czynnościowa pacjenta Ocena zakresu ruchomości kręgosłupa Kliniczna ocena siły mięśniowej (manualny test mięśniowy),"
      ],
      "cele": [
        "Zachowanie siły mięśniowej oraz kształtowanie właściwej postawy ciała i funkcji ruchowych Zachowanie funkcji oddechowej Leczenie ograniczenia ruchomości klatki piersiowej i skoliozy lub zapobieganie mu Opieka wielodyscyplinarna i systematyczna Edukacja rodziców i dzieci."
      ],
      "program": [
        "Przeciwdziałanie przykurczom mięśniowym (masaż klasyczny, Masaż funkcjonalny, rozciąganie, technika Hold - relax , PNF, Bobath, Vojta) Utrzymanie odpowiedniej siły mięśniowej oraz równowagi mm. pomiędzy agonistami i antagonistami, Ćwiczenia zachowujące prawidłowy zakres ruchu, Ćwiczenia rozciągające Ćwiczenia korekcji postawy Nauka swobodnego oddychania oraz wzmacniające siłę mm. oddechowych Męczący trening jest niedopuszczalny,"
      ]
    },
    "star": [
      "Ocena siły mięśniowej wg Lovetta Ocena zakresu ruchomości stawów goniometrem Objaw Gowersa Ocena rozwoju psychomotorycznego Ocena chodu Ocena wydolności układu oddechoweg",
      "Przeciwdziałanie przykurczom mięśniowym (masaż klasyczny, Masaż funkcjonalny, rozciąganie, technika Hold - relax , PNF, Bobath, Vojta) Utrzymanie odpowiedniej siły mięśni",
      "Zachowanie siły mięśniowej oraz kształtowanie właściwej postawy ciała i funkcji ruchowych Zachowanie funkcji oddechowej Leczenie ograniczenia ruchomości klatki piersiowej"
    ]
  },
  {
    "id": 5,
    "section": "pediatria",
    "title": "dzieci ze skoliozą",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Od kiedy? Jak długo? Czy znana jest przyczyna? Ile stopni ma skolioza? W jakim tempie się powiększa? Czy występowała skolioza w rodzinie?"
      ],
      "ocena": [],
      "badanie": [
        "Test Rissera Ocena kąta Cobba Test Adamsa Ocena wizualna: ocena symetrii oraz wysokości stawów barkowych Ocena symetrii oraz wysokości łopatek Ocena symetrii i wielkości kątów taliowych Ocena wysokości i symetrii talerzy biodrowych Ocena krzywizny kręgosłupa w płaszczyźnie strzałkowej Ocena rotacji kręgosłupa za pomocą skoliometru, Ocena przebiegu linii wyrostków kolczystych kręgosłupa, Ocena długości kończyn dolnych w pozycji leżenia tyłem"
      ],
      "cele": [
        "Uzyskanie korekcji kręgosłupa (symetrii) Zahamowanie pogłębiania się patologii Rozluźnienie mięśni nadmiernie napiętych Wzmocnienie mięśni nadmiernie rozciągniętych Poprawa symetrii klatki piersiowej, łopatek, obręczy barkowej oraz obręczy biodrowej Przygotowanie do ewentualnej operacji Wzmocnienie gorsetu mięśniowego"
      ],
      "program": [
        "Postępowanie z wygięciem kręgosłupa 10 do 20 - 25 st Ćwiczyć codziennie/ 2 - 3 x w tygodniu pod nadzorem fizjoterapeuty. Pozycje rozciągające aparat torebkowo - więzadłowy k-pa. Asymetryczne pozycje i ćwiczenia rozciągające przykurczone grupy mięśniowo - powięziowe. Ćwiczenia przywracające prawidłową ruchomość kręgosłupa w pł. Strzałkowej. Asymetryczne ćwiczenia wzmacniające mięśnie kręgosłupa, tułowia i stawów obwodowych. Nauka nawyku prawidłowej postawy. Masaż pobudzający na mięśnie osłabione, rozciągnięte (znajdujące się po stronie wypukłej), a na mięśnie napięte, przykurczone (znajdujące się po stronie wklęsłej) powinniśmy zastosować masaż rozluźniający Ciepłolecznictwo (Sollux / okłady z fango lub borowiny na grzbiet). Elektroterapia (mm. napięte f= 100HZ , t<300 us/ mm. rozciągnięte 20-50 HZ fazowy symetryczny)",
        "Postępowanie z wygięciem kręgosłupa 25 - 45 Ćwiczenia asymetryczne wzmacniające mm. Nadmiernie rozciągnięte i rozluźniające mm. Nadmiernie napięte. Gorset. Ciepłolecznictwo (sollux, fango, borowina). Masaż klasyczny. Jeśli skrzywienie będzie się powiększać => kwalifikacja do leczenia operacyjnego."
      ]
    },
    "star": [
      "Test Rissera Ocena kąta Cobba Test Adamsa Ocena wizualna: ocena symetrii oraz wysokości stawów barkowych Ocena symetrii oraz wysokości łopatek Ocena symetrii i wielkości ",
      "Postępowanie z wygięciem kręgosłupa 10 do 20 - 25 st Ćwiczyć codziennie/ 2 - 3 x w tygodniu pod nadzorem fizjoterapeuty. Pozycje rozciągające aparat torebkowo - więzadłow",
      "Postępowanie z wygięciem kręgosłupa 25 - 45 Ćwiczenia asymetryczne wzmacniające mm. Nadmiernie rozciągnięte i rozluźniające mm. Nadmiernie napięte. Gorset. Ciepłolecznict"
    ]
  },
  {
    "id": 6,
    "section": "pediatria",
    "title": "dzieci z mukowiscydozą",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Badanie przesiewowe? Czy występuje przewlekły kaszel? Czy występował nieefektywny kaszel? Czy występowały nawracające zapalenia płuc, oskrzelików? Czy występowały obfite, tłuszczowe stolce? Czy występowało krwioplucie? Palce pałeczkowate? Bardzo słony pot?"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar obwodu klatki piersiowej taśmą centymetrową Ocena wymiaru klatki piersiowej (czy jest beczkowata) Ocena palców (palce pałeczkowate)/ spirometria Próba chlorkowa Ocena funkcji przepony"
      ],
      "cele": [
        "Zmniejszenie nasilenia objawów choroby Możliwie jak najdłuższe zachowanie prawidłowej funkcji płuc, wydolności fizycznej oraz dobrego samopoczucia i poprawa jakości życia,"
      ],
      "program": [
        "Dzieci 0 - 18 m.ż Techniki drenażu pozycyjnego wraz z opukiwaniem",
        "Dzieci od 18 m. ż do 4 r. ż Techniki ćwiczeń oddechowych w formie zabawy (dmuchanie baloników bąbelków, gwizdków) - Przygotowanie do ćwiczeń wydłużonego oddechu oraz technik PEP,",
        "Dzieci pow. 5 r. ż - techniki zatrzymania oddechu oraz przedłużonego wydychania. Stosowane są techniki PEP oraz aktywny cykl oddechowy, Sport Techniki oczyszczania oskrzelowego/ Trening mięśni oddechowych Ćwiczenia kształtujące prawidłowy wzór oddechowy i zwiększające ruchomość klatki piersiowej Ćwiczenia ogólnorozwojowe Edukacja, Techniki oczyszczania oskrzela: technika natężonego wydechu (Huff)/ technika aktywnego cyklu oddechowego/ drenaż autogeniczny/ technika podwyższonego ciśnienia wydechowego/ technika zmiennego ciśnienia oskrzelowego",
        "- Drenaż ułożeniowy /grawitacyjny: 6 -10 odpowiednich pozycji w zależności o tego, który segment płuca chcemy drenować / Zawsze w kombinacji z oklepywaniem, wstrząsaniem, sprężynowaniem klatki piersiowej/ Przeciwwskazania do drenażu ułożeniowego: niewydolność oddechowo - krążeniowa, stan astmatyczny, refluks żołądkowo - przełykowy, odma opłucnowa, krwioplucie/ Czas około 20 minut"
      ]
    },
    "star": [
      "Dzieci 0 - 18 m.ż Techniki drenażu pozycyjnego wraz z opukiwaniem",
      "Dzieci pow. 5 r. ż - techniki zatrzymania oddechu oraz przedłużonego wydychania. Stosowane są techniki PEP oraz aktywny cykl oddechowy, Sport Techniki oczyszczania oskrze",
      "- Drenaż ułożeniowy /grawitacyjny: 6 -10 odpowiednich pozycji w zależności o tego, który segment płuca chcemy drenować / Zawsze w kombinacji z oklepywaniem, wstrząsaniem,"
    ]
  },
  {
    "id": 7,
    "section": "pediatria",
    "title": "dzieci z rdzeniowym zanikiem mięśni",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Badanie genetyczne Czy rodzeństwo jest zdrowe Jak przebiegał rozwój psychomotoryczny (kiedy zaczęło dziecko siadać/ czworakować / wstawać) Czy występują upadki (przewracanie się dziecka),"
      ],
      "ocena": [],
      "badanie": [
        "Test Chop - Intend (SMA 1 i 2) lub HammerSmith (SMA 3) Ocena siły mięśniowej Ocena Zakresu ruchomości Ocena przykurczy Badanie odruchów ścięgnistych Ocena rozwoju psychomotorycznego Ocena wizualna (fascykulacje mięśniowe języka i dłoni) Ocena siły krzyku/ płaczu Ocena wydolności układu oddechowego"
      ],
      "cele": [
        "Wsparcie rozwoju psychomotorycznego Utrzymanie lub poprawa siły mięśniowej Utrzymanie lub poprawa zakresu ruchomości Przeciwdziałanie przykurczom, zniekształceniom i deformacjom Poprawa funkcjonowania układu oddechowego Edukacja Zaopatrzenie ortopedyczne Nieinwazyjne wspomaganie oddechowe -NIV Inwazyjne wspomaganie oddechowe - IV"
      ],
      "program": [
        "NDT - Bobath (poprawa rozwoju psychoruchowego) Vojta (poprawa rozwoju psychoruchowego) PNF( poprawa rozwoju psychoruchowego) Ćwiczenia mm. Oddechowych (utrzymanie wydolności układu oddechowego) Czynności pielęgnacyjne Pozycje ułożeniowe Streaching mięśni przykurczonych (wydłużenie mm. Nadmiernie napiętych) Ciepłolecznictwo (rozluźnienie mięśni i poprawa metaboliki mięśniowej) Masaż klasyczny (rozluźniający mm. Nadmiernie napiętej."
      ]
    },
    "star": [
      "Test Chop - Intend (SMA 1 i 2) lub HammerSmith (SMA 3) Ocena siły mięśniowej Ocena Zakresu ruchomości Ocena przykurczy Badanie odruchów ścięgnistych Ocena rozwoju psychom",
      "NDT - Bobath (poprawa rozwoju psychoruchowego) Vojta (poprawa rozwoju psychoruchowego) PNF( poprawa rozwoju psychoruchowego) Ćwiczenia mm. Oddechowych (utrzymanie wydolno",
      "Wsparcie rozwoju psychomotorycznego Utrzymanie lub poprawa siły mięśniowej Utrzymanie lub poprawa zakresu ruchomości Przeciwdziałanie przykurczom, zniekształceniom i defo"
    ]
  },
  {
    "id": 8,
    "section": "pediatria",
    "title": "dzieci z mózgowym porażeniem dziecięcym o charakterze spastycznym",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Czynniki ryzyka (niedotlenienie, teratogeny: infekcje wrodzone, drgawki noworodkowe, zaburzenia naczynioruchowe, urazy okołoporodowe, matka zażywająca używki w trakcie ciąży, zatrzymanie akcji serca) Jak przebiegała akcja porodowa?"
      ],
      "ocena": [],
      "badanie": [
        "Ocena rozwoju psychoruchowego (NDT Bobath, Vojta, MFDR) Ocena napięcia mięśniowego - skala Ashwoth Ocena odruchów pierwotnych i wygasanie ich w odpowiednim czasie rozwojowym Kamienie milowe rozwoju dziecka Ocena głębokich odruchów ścięgnistych, Nadwrażliwość na bodźce dźwiękowe, Mała spontaniczność ruchowa, Odgięciowe ułożenie głowy i tułowia, Zaciskanie pięści z kciukiem w dłoni, Ruchy stereotypowe, Brak koordynacji Ręka - Ręka, Ręka - Buzia"
      ],
      "cele": [
        "Osiągnięcie maksymalnych możliwości funkcjonalnych przez zmniejszenie stopnia jego niepełnosprawności i umożliwienie mu pełnego uczestnictwa w życiu społecznym oraz uzyskanie jak największej niezależności"
      ],
      "program": [
        "Jak najwcześniejsze rozpoczęcie terapii neurorozwojowej, Określenie realnego do osiągnięcia celu (cele etapowe), Zastosowanie właściwych środków z leczenia ortopedycznego, Właściwe zaangażowanie rodziców i opiekunów, Hamowanie nieprawidłowej aktywności tonicznej i likwidacja blokad funkcjonalnych. Torowanie maksymalnej ilości reakcji nastawczych i równowagi. Normalizacja napięcia poprzez stosowanie dużej ilości stymulacji proprioceptywnej i eksceroceptywnej. Stymulacja prawidłowego poczucia ciała poprzez zaznaczenie linii środkowej (rozpoczynanie ruchu i zakończenie w linii środkowej). Profilaktyka i likwidacja przykurczów i deformacji, hamowanie spastyczności. Dbałość o zachowanie prawidłowej długości mięśni. Wprowadzanie dużej amplitudy ruchu. Wyhamowywanie reakcji stowarzyszonych Leczenie przykurczy ostrzyknięciami z toksyny Botulinowej"
      ]
    },
    "star": [
      "Ocena rozwoju psychoruchowego (NDT Bobath, Vojta, MFDR) Ocena napięcia mięśniowego - skala Ashwoth Ocena odruchów pierwotnych i wygasanie ich w odpowiednim czasie rozwojo",
      "Jak najwcześniejsze rozpoczęcie terapii neurorozwojowej, Określenie realnego do osiągnięcia celu (cele etapowe), Zastosowanie właściwych środków z leczenia ortopedycznego",
      "Osiągnięcie maksymalnych możliwości funkcjonalnych przez zmniejszenie stopnia jego niepełnosprawności i umożliwienie mu pełnego uczestnictwa w życiu społecznym oraz uzysk"
    ]
  },
  {
    "id": 9,
    "section": "pediatria",
    "title": "niemowląt z asymetrią ułożeniową",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Od kiedy? Co jest powodem? Czy dziecko potrafi wyjść z niewłaściwego ustawienia i przyjąć identyczną po drugiej stronie ciała? Czy dziecko urodziło się z obniżonym napięciem mięśniowym w osi głowa - tułów? Sposób porodu? Długość ciąży? Ułożenie dziecka w trakcie ciąży i porodu?"
      ],
      "ocena": [],
      "badanie": [
        "Ocena symetrii ustawienia głowy i tułowia Ocena siły mięśni brzucha Ocena rotacji głowy w stronę przeciwną Ocena długości boków tułowia Ocena napięcia mm. po prawej i lewej stronie ciała Ocena ustawienia wysokości kolców biodrowych przednich górnych względem siebie Ocena aktywności między kończyną górną po stronie dociążonej a kończyną górną po stronie odciążonej"
      ],
      "cele": [
        "Rozluźnienie i rozciągnięcie m. MOS po stronie skróconej Wzmocnienie rozluźnionych mięśni brzucha. wydłużenie strony skróconej"
      ],
      "program": [
        "Ćwiczenia wzmacniające mięśnie brzucha Rozluźnienie napiętego m. MOS po stronie skróconej Ćwiczenia wyrównujące asymetrię tułowia (dociążanie i wydłużanie strony skróconej) Wprowadzenie zasad pielęgnacji neurorozwojowej (odpowiednie zachowania wobec dziecka - karmienie, noszenie, ubieranie, kąpanie, zabawa z dzieckiem)."
      ]
    },
    "star": [
      "Ćwiczenia wzmacniające mięśnie brzucha Rozluźnienie napiętego m. MOS po stronie skróconej Ćwiczenia wyrównujące asymetrię tułowia (dociążanie i wydłużanie strony skrócone",
      "Ocena symetrii ustawienia głowy i tułowia Ocena siły mięśni brzucha Ocena rotacji głowy w stronę przeciwną Ocena długości boków tułowia Ocena napięcia mm. po prawej i lew",
      "Rozluźnienie i rozciągnięcie m. MOS po stronie skróconej Wzmocnienie rozluźnionych mięśni brzucha. wydłużenie strony skróconej"
    ]
  },
  {
    "id": 10,
    "section": "pediatria",
    "title": "dzieci z porażeniem nerwu twarzowego",
    "add": {
      "wywiad": [
        "u i badania Od kiedy? Jak długo? Co było przyczyną? Jednostronnie czy obustronnie? Czy dziecko ma problemy z wymową? fizjoterapeutycznego oraz Czy dziecko ma problem z przełykaniem pokarmów? Czy dziecko ma problem z zamknięciem oka do snu? Czy występuje wysychanie rogówki?"
      ],
      "ocena": [],
      "badanie": [
        "Asymetria fałdów nosowo - policzkowych, kącików ust, zmarszczek na czole Sprawdzenie siły mięśniowej mięśni mimicznych, Sprawdzenie objawu Bella Sprawdzenie funkcji czuciowych i ruchowych języka Sprawdzenie czucia na twarzy między prawą a lewą stroną"
      ],
      "cele": [
        "Wzmocnienie siły mięśniowej mięśni odnerwionych Powrót do symetrii mięśni twarzy/ poprawa artykulacji Odżywienie porażonego nerwu Poprawa funkcji spożywania pokarmów i płynów"
      ],
      "program": [
        "Bezzwłoczne rozpoczęcie rehabilitacji",
        "Faza ostra: Ćwiczenia mimiczne oraz języka Sollux niebieski",
        "Faza przewlekła: Ćwiczenia mimiczne oraz języka Masaż klasyczny mm. Twarzy (techniki pobudzające) Sollux Czerwony Galwanizacja K (porażona strona twarzy (elektroda Bergoniego), Anoda na obwodzie I= 0,02-0,1 mA/cm2 , T= 15 min.) Jonoforeza z Wit. B12 (T=15 min., I= 0,02 - 0,1 mA/cm2) Elektrostymulacja (imp. ∆ , timp= 120 - 150 ms. T przerwy= 500 - 1000 ms)"
      ]
    },
    "star": [
      "Asymetria fałdów nosowo - policzkowych, kącików ust, zmarszczek na czole Sprawdzenie siły mięśniowej mięśni mimicznych, Sprawdzenie objawu Bella Sprawdzenie funkcji czuci",
      "Faza ostra: Ćwiczenia mimiczne oraz języka Sollux niebieski",
      "Faza przewlekła: Ćwiczenia mimiczne oraz języka Masaż klasyczny mm. Twarzy (techniki pobudzające) Sollux Czerwony Galwanizacja K (porażona strona twarzy (elektroda Bergon"
    ]
  },
  {
    "id": 11,
    "section": "pediatria",
    "title": "dzieci z przepukliną oponowo-rdzeniową na poziomie kręgosłupa lędźwiowego",
    "add": {
      "wywiad": [
        "u Jaki poziom kręgosłupa? Czy było stwierdzone podczas USG w trakcie ciąży? Czy wiadomo jaki teratogen zadziałał? Pęcherz neurogenny, funkcja zwieracza odbytu? Podwichnięcia stawów biodrowych/ koślawość kolan, stopa piętowa? Wodogłowie/ oczopląs? i badania fizjoterapeutycznego oraz Zaburzenie czynności przewodu pokarmowego? Upośledzenie trofiki porażonych części ciała? Rozszczep podniebienia? Mikrocefalia?"
      ],
      "ocena": [],
      "badanie": [
        "Ocena czucia powierzchniowego i głębokiego Ocena siły mięśniowej Ocena zakresu ruchomości w stawach Ocena zaburzeń naczynioruchowych i troficznych części ciała poniżej uszkodzenia Ocena Odruchów ścięgnistych Ocena przykurczów i zniekształceń Ocena ruchomości spontanicznej kończyn, napięcia mięśniowego, odruchów fizjologicznych, czynności układu zwieraczy."
      ],
      "cele": [
        "Pobudzenie procesów kompensacji i wykorzystanie możliwości adaptacji organizmu do zaburzeń czynnościowych Zapobieganie nadmiernej spastyczności/wiotkości Zapobieganie powikłaniom, które wynikają z długiego unieruchomienia chorego Normalizację napięcia posturalnego i stabilizację tułowia Poprawę samopoczucia dziecka, Wykorzystywanie \"wszelkich rezerw\" czynnych dróg nerwowych Poprawa zaopatrzenia w krew i substancje odżywcze tkanek w obszarach niedowładnych Intensyfikacja wrażeń czucia powierzchniowego i głębokiego Wzmocnienie tłoczni brzusznej Aktywizacja przepony miednicy Tworzenie automatyzmu pęcherza Poprawa działania zwieraczy pęcherza oraz odbytu Pogłębienie oddechu aktywizując mm. przepony i klatki piersiowej Utrzymanie pełnego zakresu ruchu w stawach Zapobieganie zniekształceniom Zwalczenie deformacji osi kończyn dolnych i kręgosłupa Wzmacnianie nieporażonych mięśni Kompensacyjne wzmacnianie siły mięśni obręcz barkowej, KKG i tułowia."
      ],
      "program": [
        "Rozwijanie umiejętności ruchowych zgodnie z sekwencją rozwoju Poprawa nieprawidłowej kontroli ruchów głowy i tułowia oraz występowanie zaburzeń równowagi Terapia musi być akceptowana przez dziecko, dostosowana do możliwości i potrzeb, zależy od poziomu uszkodzenia rdzenia kręgowego Początkowo zmiany pozycji dziecka co godzinę masaże niedowładnych kończyn i prawidłowym układaniu nóżek i stóp w celu zapobiegania zniekształceniom i zmniejszyć obrzęk tkanek Aktywizacja ocalałych dróg nerwowych Drażnienie skóry i dostarczanie różnorodnych wrażeń czuciowych/ dociskać pow. stawowe, w celu pobudzenia ukrwienia nasad kości Wcześnie wprowadzamy pełzanie, ale musimy uważać, czy nie powodujemy nadmiernej lordozy w odc. L Wzmocnienie mm. brzucha Z wiekiem należy dostosowywać metody do potrzeb pacjenta W momencie uzyskania przez dziecko pozycji czworaczej należy zadecydować o pionizacji w łuskach lub w odpowiednim obuwiu Stopniowo należy wprowadzać ćwiczenia z obciążeniem, z przyrządami, przy drabinkach, drążka, ciężarków, balkonika Vojta jako leczenie \"z wyboru\""
      ]
    },
    "star": [
      "Rozwijanie umiejętności ruchowych zgodnie z sekwencją rozwoju Poprawa nieprawidłowej kontroli ruchów głowy i tułowia oraz występowanie zaburzeń równowagi Terapia musi być",
      "Pobudzenie procesów kompensacji i wykorzystanie możliwości adaptacji organizmu do zaburzeń czynnościowych Zapobieganie nadmiernej spastyczności/wiotkości Zapobieganie pow",
      "u Jaki poziom kręgosłupa? Czy było stwierdzone podczas USG w trakcie ciąży? Czy wiadomo jaki teratogen zadziałał? Pęcherz neurogenny, funkcja zwieracza odbytu? Podwichnię"
    ]
  },
  {
    "id": 12,
    "section": "pediatria",
    "title": "dzieci ze stopą końsko-szpotawą",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Czy wystąpiły inne wady rozwojowe? Ułożenie dziecka w brzuchu mamy Małowodzie? Wady rozwojowe w rodzinie? Ułożenie dziecka w trakcie ciąży oraz porodu, Masa urodzeniowa,"
      ],
      "ocena": [],
      "badanie": [
        "Ocena wizualna ustawienia kości stopy, różnica w długości i wielkości względem stopy zdrowej Ocena zakresu ruchomości Ocena siły mięśniowej Ustawienie stopy w zgięciu podeszwowym (końsko), oraz w szpotawości oraz zrotowana w całości do wewnątrz Nieprawidłowe ustawienie przodostopia wobec stępu (przywiedzione i zsupinowane i ustawione koński wobec stępu) Ocena przykurczu torebki stawowe i więzadła, skróceniu ulega ścięgno Achillesa , m. piszczelowy tylny, m. zginacz długi palucha i palców,"
      ],
      "cele": [
        "Korekcja stawów stopy do otrzymania fizjologicznego ustawienia (wzmanicnie mm. Nadmiernnie rozciągniętych, rozluźnianie nadmiernie napiętych) Nauka właściwych funkcji stopy"
      ],
      "program": [
        "Musi zacząć się jak najszybciej Opóźnienie leczenia skutkuje opóźnianiem i przedłużaniem się oczekiwanego efektu, Leczenie operacyjne powinno być tak zaplanowane aby dziecko przed okresem chodzenia miało już skorygowane stópki Korekcja manualna (np. trójwymiarowa korekcja manualna stóp połączona z bandażowaniem",
        "- metoda Zukunft-Huber) Metoda Ponsetiego Zaopatrzenie ortopedyczne Ćwiczenia korekcyjne Stretching - Ćwiczenia rozciągające Masaż klasyczny/ Masaż funkcyjny Masaż wirowy/ Fango / borowina/ Bandażowanie/ Kinesiology Taping/ elektrostymulacje mięśni unerwionych przez nerw strzałkowy wspólny"
      ]
    },
    "star": [
      "- metoda Zukunft-Huber) Metoda Ponsetiego Zaopatrzenie ortopedyczne Ćwiczenia korekcyjne Stretching - Ćwiczenia rozciągające Masaż klasyczny/ Masaż funkcyjny Masaż wirowy",
      "Ocena wizualna ustawienia kości stopy, różnica w długości i wielkości względem stopy zdrowej Ocena zakresu ruchomości Ocena siły mięśniowej Ustawienie stopy w zgięciu pod",
      "Musi zacząć się jak najszybciej Opóźnienie leczenia skutkuje opóźnianiem i przedłużaniem się oczekiwanego efektu, Leczenie operacyjne powinno być tak zaplanowane aby dzie"
    ]
  },
  {
    "id": 13,
    "section": "pediatria",
    "title": "niemowląt w wieku 4 m. z obniżonym napięciem mięśniowym w osi głowa-tułów",
    "add": {
      "wywiad": [
        "u i badania fizjoterapeutycznego oraz Poród w terminie czy wczesny? APGAR Cięcie Cesarskie czy drogami natury? Który poród z kolei/ która ciąża z kolei? Wiek skorygowany"
      ],
      "ocena": [],
      "badanie": [
        "Ocena rozwoju psychomotorycznego (NDT - Bobath, Vojta, MFDR) Ocena napięcia mięśniowego osi głowa - tułów Ocena ruchów spontanicznych kończyn Próba trakcji Określenie wieku skorygowanego (Jeśli to konieczne)"
      ],
      "cele": [
        "Wzmocnienie mięśni osi głowa - tułów Osiągnięcie równomiernego rozwoju psychomotorycznego"
      ],
      "program": [
        "Rozwój kaudalny w pronacji i kranialny w supinacji Centrum mobilne i obwód stabilny po 3 miesiącu centrum stabilne a obwód mobilny Ćwiczenia wzmacniające mm. Brzucha Ćwiczenia elongacji głowy oraz ćwiczenia do trakcji Pielęgnacja neurorozwojowa (właściwe karmienie, noszenie, ubieranie, kąpania dziecka oraz zabawa z nim) Fizjoterapia kliniczna w dysfunkcjach układu ruchu w ortopedii i traumatologii L.P Pytanie Klucz"
      ]
    },
    "star": [
      "Ocena rozwoju psychomotorycznego (NDT - Bobath, Vojta, MFDR) Ocena napięcia mięśniowego osi głowa - tułów Ocena ruchów spontanicznych kończyn Próba trakcji Określenie wie",
      "Rozwój kaudalny w pronacji i kranialny w supinacji Centrum mobilne i obwód stabilny po 3 miesiącu centrum stabilne a obwód mobilny Ćwiczenia wzmacniające mm. Brzucha Ćwic",
      "Wzmocnienie mięśni osi głowa - tułów Osiągnięcie równomiernego rozwoju psychomotorycznego"
    ]
  },
  {
    "id": 14,
    "section": "ortopedia",
    "title": "pacjenta po endoprotezoplastyce stawu kolanowego",
    "add": {
      "wywiad": [],
      "ocena": [
        "u i Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwone/żółte flagi. Ocena głównych dolegliwości: Umiejscowienie? Charakterystyka/rodzaj? Promieniowanie? Objawy współistniejące? Przebieg/wzorzec? Czynniki zaostrzające/łagodzące dolegliwości? Intensywność?"
      ],
      "badanie": [
        "Badanie funkcjonalne kończyny dolnej - testy aktywne, pasywne, oporowe. Ocena postawy pacjenta. Palpacja. Ocena blizny."
      ],
      "cele": [],
      "program": [
        "OKRES POSZPITALNY",
        "Cel etapowy: przywrócenie możliwie maksymalnej sprawności fizycznej",
        "Cel szczegółowy: zmniejszenie wzmożonego napięcia mięśniowego/powięziowego w obrębie blizny, kończyny dolnej, mięśni tułowia.",
        "Środki: Ćwiczenia czynne i z oporem, terapia manualna blizny, laseroterapia blizny",
        "Cel szczegółowy: wzmocnienie siły mięśniowej w obrębie kończyny dolnej i tułowia.",
        "Środki: Ćwiczenia czynne wolne, ćwiczenia z oporem, ćwiczenia równoważne, propriocepcji, elektrostymulacja mięśni, edukacja pacjenta."
      ]
    },
    "star": [
      "Badanie funkcjonalne kończyny dolnej - testy aktywne, pasywne, oporowe. Ocena postawy pacjenta. Palpacja. Ocena blizny.",
      "Środki: Ćwiczenia czynne i z oporem, terapia manualna blizny, laseroterapia blizny",
      "Środki: Ćwiczenia czynne wolne, ćwiczenia z oporem, ćwiczenia równoważne, propriocepcji, elektrostymulacja mięśni, edukacja pacjenta."
    ]
  },
  {
    "id": 15,
    "section": "ortopedia",
    "title": "pacjenta po endoprotezoplastyce stawu biodrowego",
    "add": {
      "wywiad": [],
      "ocena": [
        "u i Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwone/żółte flagi. Ocena głównych dolegliwości: Umiejscowienie? Charakterystyka/rodzaj? Promieniowanie? Objawy współistniejące? Przebieg/wzorzec? Czynniki zaostrzające/łagodzące dolegliwości? Intensywność?"
      ],
      "badanie": [
        "Badanie funkcjonalne kończyny dolnej - testy aktywne, pasywne, oporowe. Ocena postawy pacjenta. Palpacja. Ocena blizny."
      ],
      "cele": [],
      "program": [
        "OKRES POOPERACYJNY - doba \"0\" po przebudzeniu pacjenta po operacji",
        "Cel nadrzędny: samodzielna lokomocja",
        "Cel etapowy: zapobieganie powikłaniom pooperacyjnym",
        "Cel szczegółowy: zapobieganie powikłaniom zakrzepowo-zatorowym",
        "Środki: pozycja leżenia tyłem + pończochy uciskowe, aktywacja pompy mięśniowej (zgięcie grzbietowe- podeszwowe stopy),",
        "Cel szczegółowy: zapobieganie powikłaniom oddechowym",
        "Środki: higiena drzewa oskrzelowego, ćwiczenia oddechowe.",
        "Cel szczegółowy: zapobieganie powstawaniu odleżyn.",
        "Środki: masaż, kształtki, materac p/odleżynowy.",
        "Cel szczegółowy: zapobieganie podwichnięciu endoprotezy:",
        "Środki: prawidłowa pozycja ułożeniowa.",
        "Cel szczegółowy: zapobieganie zanikom mięśniowym.",
        "Środki: ćwiczenia izometryczne mięśnia czworogłowego uda i mięśni pośladkowych."
      ]
    },
    "star": [
      "Badanie funkcjonalne kończyny dolnej - testy aktywne, pasywne, oporowe. Ocena postawy pacjenta. Palpacja. Ocena blizny.",
      "Środki: higiena drzewa oskrzelowego, ćwiczenia oddechowe.",
      "Środki: ćwiczenia izometryczne mięśnia czworogłowego uda i mięśni pośladkowych."
    ]
  },
  {
    "id": 16,
    "section": "ortopedia",
    "title": "pacjenta z przykurczem Dupuytrena",
    "add": {
      "wywiad": [],
      "ocena": [
        "u i badania Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwone/żółte flagi. Ocena głównych dolegliwości: Umiejscowienie? Początek? Ewolucja? Charakterystyka/rodzaj? Promieniowanie? Objawy współistniejące? Przebieg/wzorzec? Czynniki zaostrzające/łagodzące dolegliwości? Intensywność?"
      ],
      "badanie": [
        "Badanie funkcjonalne ręki - testy aktywne, pasywne, oporowe. Palpacja Testy dodatkowe: Ułożenie rąk jak do modlitwy"
      ],
      "cele": [],
      "program": [
        "Cel nadrzędny: utrzymanie sprawności funkcjonalnej w obrębie ręki.",
        "Cel etapowy: spowolnienie rozwoju choroby",
        "Cel szczegółowy: zmniejszenie wzmożonego napięcia mięśniowego/powięziowego w obrębie troczka zginaczy, rozcięgna dłoniowego, mm.przedramienia i powięzi kończyny górnej.",
        "Środki: terapia manualna, terapia mięśniowo-powięziowa, masaż, terapia ultradźwiękowa"
      ]
    },
    "star": [
      "Badanie funkcjonalne ręki - testy aktywne, pasywne, oporowe. Palpacja Testy dodatkowe: Ułożenie rąk jak do modlitwy",
      "u i badania Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występuj",
      "Cel nadrzędny: utrzymanie sprawności funkcjonalnej w obrębie ręki."
    ]
  },
  {
    "id": 17,
    "section": "ortopedia",
    "title": "pacjenta z zespołem Sudecka",
    "add": {
      "wywiad": [],
      "ocena": [
        "u i badania Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwone/żółte flagi. Ocena głównych dolegliwości: Umiejscowienie? Początek? Ewolucja? Charakterystyka/rodzaj? Promieniowanie? Objawy współistniejące? Przebieg/wzorzec? Czynniki zaostrzające/łagodzące dolegliwości? Intensywność?"
      ],
      "badanie": [
        "Badanie funkcjonalne ręki/stopy - testy aktywne, pasywne, oporowe. Palpacja."
      ],
      "cele": [],
      "program": [
        "ETAP HIPERTROFICZNY - OSTRY",
        "Cel szczegółowy: zapobieganie zastojom żylnym - środki: delikatne ruchy palców.",
        "Cel szczegółowy: zmniejszenie dolegliwości bólowych - środki: zimne okłady, biostymulacja laserowa, pozycje ułożeniowe kończyny",
        "ETAP DYSTROFII",
        "Cel szczegółowy: zmniejszenie dolegliwości bólowych, zapobieganie tworzenia się przykurczy - środki: edukacja pacjenta w zakresie automasażu, podwodny masaż wirowy w letniej wodzie, laseroterapia, jonoforeza (wapnia lub z hydrokortyzonem), elektroterapia prądami impulsowymi, pole magnetyczne małej częstotliwości (natężenie od 6 do 10 mT), ćwiczenia czynne wolne i oporowe dostosowane do możliwości pacjenta",
        "ETAP ZANIKU",
        "Cel szczegółowy: zwiększenie siły i masy mięśniowej, przywrócenie prawidłowego zakresu ruchu - środki: ćwiczenia czynne wolne i oporowe dostosowane do możliwości pacjenta, pole magnetyczne małej częstotliwości (natężenie od 6 do 10 mT)."
      ]
    },
    "star": [
      "Badanie funkcjonalne ręki/stopy - testy aktywne, pasywne, oporowe. Palpacja.",
      "Cel szczegółowy: zmniejszenie dolegliwości bólowych, zapobieganie tworzenia się przykurczy - środki: edukacja pacjenta w zakresie automasażu, podwodny masaż wirowy w letn",
      "Cel szczegółowy: zwiększenie siły i masy mięśniowej, przywrócenie prawidłowego zakresu ruchu - środki: ćwiczenia czynne wolne i oporowe dostosowane do możliwości pacjenta"
    ]
  },
  {
    "id": 18,
    "section": "ortopedia",
    "title": "pacjenta z zespołem zamrożonego barku",
    "add": {
      "wywiad": [],
      "ocena": [
        "u i badania Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwone/żółte flagi. Ocena głównych dolegliwości: Umiejscowienie? Początek? Ewolucja? Charakterystyka/rodzaj? Promieniowanie? Objawy współistniejące? Przebieg/wzorzec? Czynniki zaostrzające/łagodzące dolegliwości? Intensywność?"
      ],
      "badanie": [
        "Badanie funkcjonalne barku - testy aktywne, pasywne, oporowe. Palpacja. Testy dodatkowe: badanie odcinka szyjnego kręgosłupa Test wzruszania."
      ],
      "cele": [],
      "program": [
        "Cel ogólny: przywrócenie możliwie maksymalnej sprawności kończyny górnej",
        "Cel szczegółowy: zmniejszenie dolegliwości bólowych",
        "środki: termoterapia, jonoforeza z NLPZ, laseroterapia, terapia UD i fonoforeza, mobilizacja tkanek miękkich otaczających staw i obręcz barkową",
        "Cel szczegółowy: Zwiększenie zakresu ruchu we wszystkich płaszczyznach",
        "Środki: ćwiczenia czynne, wspomagane i bierne ROM, mobilizacja stawu ramienno-łopatkowego i łopatki",
        "Cel szczegółowy: poprawa siły i wytrzymałości stożka rotatorów i stabilizatorów łopatki:",
        "Środki: ćwiczenia wzmacniające stożek rotatorów, ćwiczenia izometryczne, ćwiczenia wzmacniające w łańcuchu otwartym, ćwiczenia izotoniczne, ćwiczenia wzmacniające stabilizatory łopatki, ćwiczenia wzmacniające w łańcuchu zamkniętym, ćwiczenia wzmacniające mięsień naramienny."
      ]
    },
    "star": [
      "Badanie funkcjonalne barku - testy aktywne, pasywne, oporowe. Palpacja. Testy dodatkowe: badanie odcinka szyjnego kręgosłupa Test wzruszania.",
      "Środki: ćwiczenia czynne, wspomagane i bierne ROM, mobilizacja stawu ramienno-łopatkowego i łopatki",
      "Środki: ćwiczenia wzmacniające stożek rotatorów, ćwiczenia izometryczne, ćwiczenia wzmacniające w łańcuchu otwartym, ćwiczenia izotoniczne, ćwiczenia wzmacniające stabili"
    ]
  },
  {
    "id": 19,
    "section": "ortopedia",
    "title": "pacjenta z zespołem ciasnoty podbarkowej",
    "add": {
      "wywiad": [],
      "ocena": [
        "u i Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwone/żółte flagi. Ocena głównych dolegliwości: Umiejscowienie? Początek? Ewolucja? Charakterystyka/rodzaj? Promieniowanie? Objawy współistniejące? Przebieg/wzorzec? Czynniki zaostrzające/łagodzące dolegliwości? Intensywność?"
      ],
      "badanie": [
        "Badanie funkcjonalne barku - testy aktywne, pasywne, oporowe. Palpacja. Zestaw testów do oceny zespołu cieśni podbarkowej: Test Hawkins Kennedy, Test Neera, Bolesny łuk, Empty can (pusta puszka), Resisted shoulder external rotation (oporowa rotacja zewnętrzna)."
      ],
      "cele": [],
      "program": [
        "Cel nadrzędny: maksymalna ochrona stawu",
        "Cel etapowy: zmniejszenie stanu zapalnego",
        "Cel szczegółowy: zmniejszenie bólu i obrzęku",
        "Środki: zimnolecznictwo, laseroterapia, elektroterapia, pole magnetyczne",
        "Cel etapowy: zapobieganie skutkom ubocznym stanu zapalnego",
        "Cel szczegółowy: poprawa/utrzymanie elastyczności",
        "Środki: terapia manualna - ślizgi, elektroterapia, laseroterapia, masaż, terapia punktów spustowych",
        "Cel szczegółowy: opóźnienie zaniku mięśni",
        "Środki: ćwiczenia wzmacniające - izometryczne - submaksymalne"
      ]
    },
    "star": [
      "Badanie funkcjonalne barku - testy aktywne, pasywne, oporowe. Palpacja. Zestaw testów do oceny zespołu cieśni podbarkowej: Test Hawkins Kennedy, Test Neera, Bolesny łuk, ",
      "Środki: ćwiczenia wzmacniające - izometryczne - submaksymalne",
      "u i Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwo"
    ]
  },
  {
    "id": 20,
    "section": "ortopedia",
    "title": "pacjenta z dyskopatią w odcinku szyjnym kręgosłupa",
    "add": {
      "wywiad": [],
      "ocena": [
        "u i badania Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwone/żółte flagi. Ocena głównych dolegliwości: Umiejscowienie? Początek? Ewolucja? Charakterystyka/rodzaj? Promieniowanie? Objawy współistniejące? Przebieg/wzorzec? Czynniki zaostrzające/łagodzące dolegliwości? Intensywność?"
      ],
      "badanie": [
        "Badanie funkcjonalne odcinka szyjnego, kończyn górnych - testy aktywne, pasywne, oporowe. Badanie czucia i odruchów. Testy dodatkowe: Objaw szczytowy, Objaw Spurlinga, Testy napięciowe dla kończyny górnej,"
      ],
      "cele": [],
      "program": [
        "Cel nadrzędny: Samodzielna sprawna lokomocja.",
        "Cel szczegółowy: Zmniejszenie dolegliwości bólowych, . Środki: laseroterapia, krioterapia, elektroterapia, terapia punktów spustowych, manipulacja lub trakcja odc. szyjnego, techniki z terapii McKenzie.",
        "Cel szczegółowy: Zmniejszenie wzmożonego napięcia mięśniowego. Środki: ćwiczenia rozciągające, poizometryczna relaksacja mięśni,",
        "Cel etapowy: Zapobieganie występowaniu incydentów dyskowych.",
        "Cel szczegółowy: Zmniejszenie wzmożonego napięcia mięśniowego w obrębie odcinka szyjnego kręgosłupa i obręczy barkowej. Środki: ciepłolecznictwo, elektrostymulacja, ćwiczenia rozciągające, piezometryczna reakcja mięśni",
        "Cel szczegółowy: Zwiększenie siły mięśniowej w obrębie odcinka szyjnego kręgosłupa i obręczy barkowej.",
        "Środki: ćwiczenia czynne wolne, oporowe, izometryczne, elektrostymulacja",
        "Cel szczegółowy: Zwiększenie świadomości pacjenta- środki edukacja pacjenta"
      ]
    },
    "star": [
      "Badanie funkcjonalne odcinka szyjnego, kończyn górnych - testy aktywne, pasywne, oporowe. Badanie czucia i odruchów. Testy dodatkowe: Objaw szczytowy, Objaw Spurlinga, Te",
      "Cel szczegółowy: Zmniejszenie wzmożonego napięcia mięśniowego. Środki: ćwiczenia rozciągające, poizometryczna relaksacja mięśni,",
      "Cel szczegółowy: Zmniejszenie wzmożonego napięcia mięśniowego w obrębie odcinka szyjnego kręgosłupa i obręczy barkowej. Środki: ciepłolecznictwo, elektrostymulacja, ćwicz"
    ]
  },
  {
    "id": 21,
    "section": "ortopedia",
    "title": "pacjenta z dyskopatią w odcinku lędźwiowym kręgosłupa",
    "add": {
      "wywiad": [],
      "ocena": [
        "u i badania Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwone/żółte flagi. Ocena głównych objawów: Umiejscowienie? Początek? Ewolucja? Charakterystyka/rodzaj? Promieniowanie? Objawy współistniejące? Przebieg/wzorzec? Czynniki zaostrzające/łagodzące dolegliwości? Intensywność?"
      ],
      "badanie": [
        "Badanie funkcjonalne odcinka lędźwiowego kręgosłupa, stawów krzyżowo-biodrowych (Test Lasletta), kończyn dolnych - testy aktywne, pasywne, oporowe. Badanie czucia. Badanie odruchów. Dodatkowe testy: Objaw Neriego (objaw karkowy), Test Goldthwait'a, Test napięcia opony twardej (tzw. \"slump test\"), Objaw Lasegue'a, Objaw Lasegue'a skrzyżowany (objaw Fajersztajna-Krzemickiego)"
      ],
      "cele": [],
      "program": [
        "Cel nadrzędny: Samodzielna sprawna lokomocja.",
        "Cel etapowy: Zmniejszenie intensywności odczuwanych dolegliwości.",
        "Cel szczegółowy: Zmniejszenie dolegliwości bólowych",
        "środki: laseroterapia, krioterapia, elektroterapia, funkcjonalna stymulacja magnetyczna, pozycje ułożeniowe",
        "Cel szczegółowy: Centralizacja dolegliwości.",
        "środki: manipulacja lub trakcja odc. lędźwiowego, techniki z terapii McKenzie.",
        "Cel szczegółowy: Zmniejszenie wzmożonego napięcia mięśniowego.",
        "Środki: ćwiczenia rozciągające, poizometryczna relaksacja mięśni, elektrostymulacja",
        "Cel etapowy: Zapobieganie występowaniu incydentów dyskowych.",
        "Cel szczegółowy: Zmniejszenie wzmożonego napięcia mięśniowego w obrębie mięśni brzucha oraz uda po stronie przedniej.",
        "Środki: ciepłolecznictwo, elektrostymulacja, ćwiczenia rozciągające, piezometryczna reakcja mięśni",
        "Cel szczegółowy: Zwiększenie siły mięśniowej w obrębie głębokich mięśni brzucha oraz kręgosłupa.",
        "Środki: ćwiczenia czynne wolne, oporowe, izometryczne, elektrostymulacja",
        "Cel szczegółowy: Zwiększenie świadomości pacjenta dotyczącej dyskopatii odcinka lędźwiowego kręgosłupa.",
        "Środki: Edukacja pacjenta Fizjoterapia w chorobach wewnętrznych w pulmonologii"
      ]
    },
    "star": [
      "Badanie funkcjonalne odcinka lędźwiowego kręgosłupa, stawów krzyżowo-biodrowych (Test Lasletta), kończyn dolnych - testy aktywne, pasywne, oporowe. Badanie czucia. Badani",
      "Cel etapowy: Zmniejszenie intensywności odczuwanych dolegliwości.",
      "Środki: ćwiczenia rozciągające, poizometryczna relaksacja mięśni, elektrostymulacja"
    ]
  },
  {
    "id": 22,
    "section": "pulmonologia",
    "title": "pacjenta z astmą oskrzelową",
    "add": {
      "wywiad": [
        "u i badania Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Choroby współistniejące, leki, dieta, alkohol, styl życia Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "Ćwiczenia nakierowane na aktywny wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "Ćwiczenia nakierowane na aktywny wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Trening",
      "u i badania Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszc",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 23,
    "section": "pulmonologia",
    "title": "pacjenta z pylicą płuc",
    "add": {
      "wywiad": [
        "u i Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Rodzaj pracy zawodowej (choroba zawodowa) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Choroby współistniejące, leki, dieta, alkohol, styl życia Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "Ćwiczenia nakierowane na aktywny wdech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "Ćwiczenia nakierowane na aktywny wdech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Trening ",
      "u i Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Rodzaj pracy zawodowej (choroba zawodowa) Kaszel, wydzielina (kolo",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 24,
    "section": "pulmonologia",
    "title": "pacjenta z przewlekłą obturacyjną chorobą płuc",
    "add": {
      "wywiad": [
        "u i Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Choroby współistniejące, leki, dieta, alkohol, styl życia Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "Ćwiczenia nakierowane na aktywny wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "Ćwiczenia nakierowane na aktywny wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Trening",
      "u i Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący odd",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 25,
    "section": "pulmonologia",
    "title": "pacjenta z rozedmą płuc",
    "add": {
      "wywiad": [
        "u i Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Uraz/operacja w obrębie klatki piersiowej Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Choroby współistniejące, leki, dieta, alkohol, styl życia Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Ćwiczenia z półzamkniętymi ustami Toaleta trzewa oddechowego Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Ćwiczenia z półzamkniętymi ustami Toaleta trzewa oddechowego Trening oddech",
      "u i Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Uraz/operacja w obrębie klatki piersiowej Kaszel, wydzielina (kolo",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 26,
    "section": "pulmonologia",
    "title": "pacjenta z rozstrzeniami oskrzeli",
    "add": {
      "wywiad": [
        "u i badania Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Choroby współistniejące, leki, dieta, alkohol, styl życia Palenie papierosów Sytuacja socjalna i finansowa, warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "metody, środki, sposoby odziaływania i podać ich cel) aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "u i badania Choroba główna (od jak dawna, jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszc",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot",
      "metody, środki, sposoby odziaływania i podać ich cel) aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddech"
    ]
  },
  {
    "id": 27,
    "section": "pulmonologia",
    "title": "pacjenta z zapaleniem płuc",
    "add": {
      "wywiad": [
        "u i badania Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "Ćwiczenia nakierowane na aktywny wydech i wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "Ćwiczenia nakierowane na aktywny wydech i wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechoweg",
      "u i badania Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, k",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 28,
    "section": "pulmonologia",
    "title": "pacjenta z odmą",
    "add": {
      "wywiad": [
        "Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) elementy u i badania Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "Ćwiczenia nakierowane na aktywny wydech i wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "Ćwiczenia nakierowane na aktywny wydech i wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechoweg",
      "Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) elementy u i badania Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący ",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 29,
    "section": "pulmonologia",
    "title": "pacjenta przed i po operacji torakochirurgicznej",
    "add": {
      "wywiad": [
        "u i badania Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "Ćwiczenia nakierowane na aktywny wydech i wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Inhalacje Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "Ćwiczenia nakierowane na aktywny wydech i wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechoweg",
      "u i badania Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, k",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 30,
    "section": "pulmonologia",
    "title": "pacjenta z nowotworem płuc",
    "add": {
      "wywiad": [
        "u i badania Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "Ćwiczenia nakierowane na aktywny wydech i wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechowego Inhalacje Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "Ćwiczenia nakierowane na aktywny wydech i wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Toaleta trzewa oddechoweg",
      "u i badania Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, k",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 31,
    "section": "pulmonologia",
    "title": "pacjenta z mukowiscydozą",
    "add": {
      "wywiad": [
        "u i badania Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "Toaleta trzewa oddechowego Ćwiczenia nakierowane na aktywny i silny wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Inhalacje Trening oddechowy z użyciem urządzeń (trenażery oddechu)"
      ]
    },
    "star": [
      "Toaleta trzewa oddechowego Ćwiczenia nakierowane na aktywny i silny wydech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej",
      "u i badania Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, k",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 32,
    "section": "pulmonologia",
    "title": "pacjenta z sarkoidozą",
    "add": {
      "wywiad": [
        "u i Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwioplucie Palenie papierosów Sytuacja socjalna i finansowa Warunki mieszkaniowe Wykonywany zawód/hobby Duszność (skala Borga lub inna)"
      ],
      "ocena": [],
      "badanie": [
        "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena potliwości Słuch: świst, osłuchiwanie, odgłosy oddechowe Czucie: drżenie głosowe, opukiwanie klatki piersiowej"
      ],
      "cele": [],
      "program": [
        "Toaleta trzewa oddechowego Ćwiczenia nakierowane na aktywny i silny wdech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej Inhalacje Trening oddechowy z użyciem urządzeń (trenażery oddechu) Fizjoterapia kliniczna w chorobach wewnętrznych w kardiologii"
      ]
    },
    "star": [
      "Toaleta trzewa oddechowego Ćwiczenia nakierowane na aktywny i silny wdech, aktywacja przepony, aktywizacje mm oddechowych, ruchomość klatki piersiowej i obręczy barkowej ",
      "u i Choroba główna (jakie objawy, jak zmieniły się objawy w czasie, co modyfikuje objawy) Kaszel, wydzielina (kolor, lepkość), odksztuszanie, świszczący oddech, krwiopluc",
      "Obserwacja: Badanie toru oddechowego, kolor skóry, kształt palców, kształt klatki piersiowej, ilość i częstotliwość oddechów Dotyk: ruchomość klatki piersiowej, ocena pot"
    ]
  },
  {
    "id": 33,
    "section": "kardiologia",
    "title": "pacjenta po angioplastyce wieńcowej bez zawału mięśnia sercowego",
    "add": {
      "wywiad": [
        "u i Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie występowały przed angioplastyką, Duszności (w spoczynku, podczas aktywności) Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyczną przed zabiegiem Ból (gdzie, kiedy, natężenie) Jak przebiegała angioplastyka (kiedy usunięcie mufy z tętnicy udowej) Choroby współistniejące Przebyte operacje"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu"
      ],
      "cele": [],
      "program": [
        "Cel rehabilitacji: Powrót do normalnego życia, Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Jak najszybsze uruchomienie pacjenta oraz przeciwdziałanie występowaniu powikłań zakrzepowo-zatorowych, oddechowych. Utrzymanie efektów zabiegu, Podniesienie wydolności fizycznej po zabiegu Pionizacja po 6-8 godzinach od usunięcia koszulki (mufy) z tętnicy udowej. Trening chodu Ćwiczenia ogólno usprawniające Ćwiczenia przeciwzakrzepowe Ćwiczenia oddechowe Monitorowane treningi na cykloergometrach, na bieżni Edukacja pacjenta i rodziny"
      ]
    },
    "star": [
      "Pionizacja po 6-8 godzinach od usunięcia koszulki z tętnicy udowej",
      "Test 6-minutowego marszu i Test Up and Go",
      "Monitorowane treningi na cykloergometrach i bieżni"
    ]
  },
  {
    "id": 34,
    "section": "kardiologia",
    "title": "pacjenta po angioplastyce wieńcowej z zawałem mięśnia sercowego",
    "add": {
      "wywiad": [
        "u i badania Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie występowały przed angioplastyką, Duszności (w spoczynku, podczas aktywności) Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyczną przed zabiegiem Ból (gdzie, kiedy, natężenie) Jak przebiegała angioplastyka (kiedy usunięcie mufy z tętnicy udowej) Choroby współistniejące Przebyte operacje"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu"
      ],
      "cele": [],
      "program": [
        "Cel rehabilitacji: Powrót do normalnego życia, Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Jak najszybsze uruchomienie pacjenta oraz przeciwdziałanie występowaniu powikłań zakrzepowo-zatorowych, oddechowych. Utrzymanie efektów zabiegu, Podniesienie wydolności fizycznej po zabiegu Pionizacja po 12-24 godzinach jeśli nie było powikłań w trakcie zabiegu, po 24 godzinach jeśli występowały powikłania Trening chodu Ćwiczenia ogólno usprawniające Ćwiczenia przeciwzakrzepowe Ćwiczenia oddechowe Monitorowane treningi na cykloergometrach, na bieżni Edukacja pacjenta i rodziny"
      ]
    },
    "star": [
      "Pionizacja po 12-24 godzinach bez powikłań",
      "Po powikłaniach pionizacja po 24 godzinach",
      "Ćwiczenia przeciwzakrzepowe i oddechowe"
    ]
  },
  {
    "id": 35,
    "section": "kardiologia",
    "title": "pacjenta z wszczepionym stymulatorem serca",
    "add": {
      "wywiad": [
        "Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód wszczepionym stymulatorem elementy u i badania Objawy jakie towarzyszyły przed wszczepieniem stymulatora Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyczna Choroby współistniejące Przebyte operacje"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu"
      ],
      "cele": [],
      "program": [
        "Cel rehabilitacji jest: Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Trening chodu Ćwiczenia ogólno usprawniające Ćwiczenia przeciwzakrzepowe Ćwiczenia oddechowe Monitorowane treningi na cykloergometrach, na bieżni Edukacja pacjenta i rodziny"
      ]
    },
    "star": [
      "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu",
      "Cel rehabilitacji jest: Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Trening chodu Ćwiczenia ogóln",
      "Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód wszczepionym stymulatorem elementy u i badania Objawy jakie towarzyszyły przed wszczepieniem stymulatora Sta"
    ]
  },
  {
    "id": 36,
    "section": "kardiologia",
    "title": "pacjenta z utrwalonym migotaniem przedsionków",
    "add": {
      "wywiad": [
        "u i Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie towarzyszyły w trakcie występowania migotania przedsionków Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyczna Choroby współistniejące Przebyte operacje"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu"
      ],
      "cele": [],
      "program": [
        "Cel rehabilitacji jest: Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Trening chodu Ćwiczenia ogólno usprawniające, przeciwzakrzepowe, oddechowe Monitorowane treningi na cykloergometrach, na bieżni Edukacja pacjenta i rodziny"
      ]
    },
    "star": [
      "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu",
      "Cel rehabilitacji jest: Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Trening chodu Ćwiczenia ogóln",
      "u i Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie towarzyszyły w trakcie występowania migotania przedsionków Stan funkcjonalny w ocenie pacje"
    ]
  },
  {
    "id": 37,
    "section": "kardiologia",
    "title": "pacjenta z nadciśnieniem tętniczym",
    "add": {
      "wywiad": [
        "u i badania Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyczna Choroby współistniejące Przebyte operacje"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu"
      ],
      "cele": [],
      "program": [
        "Cel rehabilitacji jest: Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Trening chodu Ćwiczenia ogólno usprawniające Ćwiczenia przeciwzakrzepowe Ćwiczenia oddechowe Monitorowane treningi na cykloergometrach, na bieżni Edukacja pacjenta i rodziny"
      ]
    },
    "star": [
      "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu",
      "Cel rehabilitacji jest: Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Trening chodu Ćwiczenia ogóln",
      "u i badania Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyc"
    ]
  },
  {
    "id": 38,
    "section": "kardiologia",
    "title": "pacjenta z przewlekłą niewydolnością krążenia",
    "add": {
      "wywiad": [
        "Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie występują, Duszności (w spoczynku, podczas aktywności) u i Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyczna Ból (gdzie, kiedy, natężenie) Choroby współistniejące Przebyte operacje"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu"
      ],
      "cele": [],
      "program": [
        "Cel rehabilitacji: Powrót do normalnego życia, Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Jak najszybsze uruchomienie pacjenta oraz przeciwdziałanie występowaniu powikłań zakrzepowo-zatorowych, oddechowych. Utrzymanie efektów zabiegu, Podniesienie wydolności fizycznej po zabiegu Pionizacja po 12-24 godzinach jeśli nie było powikłań w trakcie zabiegu, po 24 godzinach jeśli występowały powikłania Trening chodu Ćwiczenia ogólno usprawniające Ćwiczenia przeciwzakrzepowe Ćwiczenia oddechowe Monitorowane treningi na cykloergometrach, na bieżni Edukacja pacjenta i rodziny Fizjoterapia kliniczna w chorobach wewnętrznych w kardiochirurgii"
      ]
    },
    "star": [
      "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu",
      "Cel rehabilitacji: Powrót do normalnego życia, Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Jak na",
      "Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie występują, Duszności (w spoczynku, podczas aktywności) u i Stan funkcjonalny w ocenie pacjenta "
    ]
  },
  {
    "id": 39,
    "section": "kardiochirurgia",
    "title": "pacjenta po pomostowaniu tętnic wieńcowych (CABG)",
    "add": {
      "wywiad": [
        "u i badania Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie występowały przed zabiegiem, Duszności (w spoczynku, podczas aktywności) Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyczna przed zabiegiem Ból (gdzie, kiedy, natężenie) Jak przebiegała operacja (jakie zastosowano cięcie operacyjne - sternotomia, torakotomia boczna, dojście przez tętnice udowe) Choroby współistniejące Przebyte operacje Powikłania śródoperacyjne, pooperacyjne"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu Spirometria"
      ],
      "cele": [],
      "program": [
        "Cel rehabilitacji: Powrót do normalnego życia, Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Jak najszybsze uruchomienie pacjenta oraz przeciwdziałanie występowaniu powikłań zakrzepowo-zatorowych, oddechowych. Utrzymanie efektów zabiegu, Podniesienie wydolności fizycznej po zabiegu Pionizacja II doba po 24 godzinach po operacji Trening chodu Ćwiczenia ogólnousprawniające, przeciwzakrzepowe, oddechowe (oporowanego wdechu i wydechu, czynne) Ćwiczenia rotorach kończyn dolnych Usprawnianie pracy układu oddechowego Monitorowane treningi na cykloergometrach, na bieżni Instruktaż odnośnie asekuracji rany pooperacyjnej (sternotomia, torakotomia boczna) Edukacja pacjenta i rodziny"
      ]
    },
    "star": [
      "Pionizacja II doba po 24 godzinach po operacji",
      "Instruktaż asekuracji rany po sternotomii lub torakotomii",
      "Spirometria w badaniu"
    ]
  },
  {
    "id": 40,
    "section": "kardiochirurgia",
    "title": "pacjenta po pomostowaniu tętnic wieńcowych z dojściem przez torakotomię lewostronną (MIDCAB)",
    "add": {
      "wywiad": [
        "u i Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie występowały przed zabiegiem, Duszności (w spoczynku, podczas aktywności) Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyczna przed zabiegiem Ból (gdzie, kiedy, natężenie) Choroby współistniejące Przebyte operacje Powikłania śródoperacyjne, pooperacyjne"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu Spirometria"
      ],
      "cele": [],
      "program": [
        "Celem rehabilitacji: Powrót do normalnego życia, Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Jak najszybsze uruchomienie pacjenta oraz przeciwdziałanie występowaniu powikłań zakrzepowo-zatorowych, oddechowych. Utrzymanie efektów zabiegu, Podniesienie wydolności fizycznej po zabiegu Pionizacja II doba po 24 godzinach po operacji Trening chodu Ćwiczenia ogólnousprawniające, przeciwzakrzepowe, oddechowe (oporowanego wdechu i wydechu, czynne) Ćwiczenia na rotorach kończyn dolnych Usprawnianie pracy układu oddechowego Monitorowane treningi na cykloergometrach, na bieżni Instruktaż odnośnie asekuracji rany pooperacyjnej (torakotomia boczna) Edukacja pacjenta i rodziny"
      ]
    },
    "star": [
      "MIDCAB przez torakotomię lewostronną",
      "Pionizacja II doba po 24 godzinach po operacji",
      "Instruktaż asekuracji rany po torakotomii bocznej"
    ]
  },
  {
    "id": 41,
    "section": "kardiochirurgia",
    "title": "pacjenta po wymianie zastawki aortalnej (AVR)",
    "add": {
      "wywiad": [
        "u i badania Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie występowały przed zabiegiem, Duszności (w spoczynku, podczas aktywności) Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Palenie papierosów Aktywność fizyczna przed zabiegiem Ból (gdzie, kiedy, natężenie) Choroby współistniejące Przebyte operacje Powikłania śródoperacyjne, pooperacyjne"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu Spirometria"
      ],
      "cele": [],
      "program": [
        "Cel rehabilitacji: Powrót do normalnego życia, Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Jak najszybsze uruchomienie pacjenta oraz przeciwdziałanie występowaniu powikłań zakrzepowo-zatorowych, oddechowych. Utrzymanie efektów zabiegu, Podniesienie wydolności fizycznej po zabiegu Pionizacja II doba po 24 godzinach po operacji Trening chodu Ćwiczenia ogólno usprawniające Ćwiczenia przeciwzakrzepowe Ćwiczenia na rotorach kończyn dolnych Ćwiczenia oddechowe (oporowanego wdechu i wydechu, czynne) Usprawnianie pracy układu oddechowego Monitorowane treningi na cykloergometrach, na bieżni Instruktaż odnośnie asekuracji rany pooperacyjnej (sternotomia) Edukacja pacjenta i rodziny"
      ]
    },
    "star": [
      "AVR",
      "Pionizacja II doba po 24 godzinach po operacji",
      "Instruktaż asekuracji rany po sternotomii"
    ]
  },
  {
    "id": 42,
    "section": "kardiochirurgia",
    "title": "pacjenta po wszczepieniu protezy prostej aorty w wyniku tętniaka aorty",
    "add": {
      "wywiad": [
        "u i Wiek, warunki socjalno-bytowe, mieszkaniowe, wykonywany zawód Objawy jakie występowały przed zabiegiem, Duszności (w spoczynku, podczas aktywności) Stan funkcjonalny w ocenie pacjenta (czy chodzi samodzielnie) Czy doszło do pęknięcia tętniaka, rozwarstwienia Palenie papierosów Aktywność fizyczna przed zabiegiem Ból (gdzie, kiedy, natężenie) Choroby współistniejące Przebyte operacje Powikłania śródoperacyjne, pooperacyjne"
      ],
      "ocena": [],
      "badanie": [
        "Pomiar ciśnienia tętniczego, tętna, saturacji, zmęczenie w skali Borga Test 6-minutowego marszu Test Up and Go Analiza chodu Spirometria"
      ],
      "cele": [],
      "program": [
        "Cel rehabilitacji: Powrót do normalnego życia, Adaptacja do ograniczeń spowodowanych przez chorobę, Identyfikacja i modyfikacja czynników ryzyka choroby wieńcowej. Jak najszybsze uruchomienie pacjenta oraz przeciwdziałanie występowaniu powikłań zakrzepowo-zatorowych, oddechowych. Utrzymanie efektów zabiegu, Podniesienie wydolności fizycznej po zabiegu Pionizacja II doba po 24 godzinach po operacji Trening chodu Ćwiczenia ogólno usprawniające Ćwiczenia przeciwzakrzepowe Ćwiczenia na rotorach kończyn dolnych Ćwiczenia oddechowe (oporowanego wdechu i wydechu, czynne) Usprawnianie pracy układu oddechowego Monitorowane treningi na cykloergometrach, na bieżni Instruktaż odnośnie asekuracji rany pooperacyjnej (sternotomia) Edukacja pacjenta i rodziny Fizjoterapia kliniczna w dysfunkcjach układu ruchu w reumatologii"
      ]
    },
    "star": [
      "Czy doszło do pęknięcia tętniaka lub rozwarstwienia",
      "Pionizacja II doba po 24 godzinach po operacji",
      "Ćwiczenia na rotorach kończyn dolnych"
    ]
  },
  {
    "id": 43,
    "section": "reumatologia",
    "title": "pacjenta z reumatoidalnym zapaleniem stawów",
    "add": {
      "wywiad": [
        "u i czy występuje ból stawów czy ból występuje symetrycznie czy stawy są ocieplone i obrzęknięte? czy rano występuje sztywność poranna? od jak dawna występuje zapalenie stawów? ile stawów jest bolesnych? czy od momentu obudzenia się rano mija więcej niż 1 godzina zanim stawy poruszają się swobodniej? Czy ktoś z rodziny ma/miał reumatoidalne zapalenie stawów?"
      ],
      "ocena": [],
      "badanie": [
        "test uciskowy stawów śródręczno-paliczkowych test uciskowy stawów śródstopno-paliczkowych sprawdzenie zakresu ruchomości stawów badania: OB., CRP, Morfologia RTG"
      ],
      "cele": [],
      "program": [
        "zimnolecznictwo w ostrej fazie choroby fizykoterapia (prądy TENS, jonoforeza, prądy interferencyjne) w celu zmniejszenia stanu zapalnego i dolegliwości bólowych ćwiczenia zwiększające zakres ruchu w stawach terapia tkanek miękkich w celu utrzymania jak największego zakresu ruchomości zapobieganie deformacjom oraz korekcja deformacji już powstałych po każdym zaostrzeniu choroby program postępowania rehabilitacyjnego powinien być weryfikowany i dostosowywany do aktualnego stanu zdrowia danego pacjenta edukacja pacjenta dotycząca prawidłowego wykonywania ćwiczeń oraz doboru ćwiczeń w zależności od stadium oraz okresu choroby"
      ]
    },
    "star": [
      "test uciskowy stawów śródręczno-paliczkowych test uciskowy stawów śródstopno-paliczkowych sprawdzenie zakresu ruchomości stawów badania: OB., CRP, Morfologia RTG",
      "zimnolecznictwo w ostrej fazie choroby fizykoterapia (prądy TENS, jonoforeza, prądy interferencyjne) w celu zmniejszenia stanu zapalnego i dolegliwości bólowych ćwiczenia",
      "u i czy występuje ból stawów czy ból występuje symetrycznie czy stawy są ocieplone i obrzęknięte? czy rano występuje sztywność poranna? od jak dawna występuje zapalenie s"
    ]
  },
  {
    "id": 44,
    "section": "reumatologia",
    "title": "pacjenta ze zesztywniającym zapaleniem stawów kręgosłupa",
    "add": {
      "wywiad": [
        "czy występuje ból krzyża czy występuje ból promieniujący do pośladków czy ból ma charakter tępy i narastający czy ból ustępuje w spoczynku elementy u i badania czy występuję ból w górnych partiach kręgosłupa w trakcie kaszlu albo kichania czy występuje częste zmęczenie czy w rodzinie wystąpiło wcześniej ZZSK?"
      ],
      "ocena": [],
      "badanie": [
        "Test Schobera RTG, MRI, TK badania laboratoryjne: obecność antygenu HLA B27, OB, CRP, morfologia krwi"
      ],
      "cele": [],
      "program": [
        "ćwiczenia ogólnousprawniające, zwiększające zakres ruchu i wzmacniające mięśnie, poprawiające wydolność ćwiczenia oddechowe w celu utrzymania ruchomości klatki piersiowej masaż klasyczny całego kręgosłupa lub jednego odcinka, którego zadaniem jest zmniejszenie bólu i napięcia mięśniowego w okolicach zmienionych kręgów. fizykoterapia (ultradźwięki, laseroterapia, elektrolecznictwo) edukacja pacjenta dotycząca prawidłowego wykonywania ćwiczeń"
      ]
    },
    "star": [
      "Test Schobera RTG, MRI, TK badania laboratoryjne: obecność antygenu HLA B27, OB, CRP, morfologia krwi",
      "ćwiczenia ogólnousprawniające, zwiększające zakres ruchu i wzmacniające mięśnie, poprawiające wydolność ćwiczenia oddechowe w celu utrzymania ruchomości klatki piersiowej",
      "czy występuje ból krzyża czy występuje ból promieniujący do pośladków czy ból ma charakter tępy i narastający czy ból ustępuje w spoczynku elementy u i badania czy występ"
    ]
  },
  {
    "id": 45,
    "section": "reumatologia",
    "title": "pacjenta z idiopatycznym młodzieńczym zapaleniem stawów",
    "add": {
      "wywiad": [
        "u i badania w jakim wieku pojawiły się pierwsze objawy? czy występuję gorączka, wysypka, zapalenie stawów, uogólniona limfadenopatia, hepatosplenomegalia oraz zajęcie błon surowiczych - opłucnej, osierdzia czy otrzewne jak długo trwa zapalenie stawów ile stawów jest zajętych przebyte infekcje czy występuje ból, ograniczenie ruchomości i obrzęk stawów czy występuje sztywność poranna czy występuje brak apetytu"
      ],
      "ocena": [],
      "badanie": [
        "badanie laboratoryjne (HLA-B27, RF, CRP, OB, morfologia) badanie ultrasonograficzne (dające obraz zmian w błonie maziowej) RTG (czy widoczne są zmiany w postaci osteoporozy, zwężenia szpar stawowych, geod, nadżerek, zrostów kostnych)"
      ],
      "cele": [],
      "program": [
        "metody, środki, sposoby odziaływania i podać ich cel) edukacja pacjenta dotycząca prawidłowego wykonywania ćwiczeń w zależności od okresu choroby fizykoterapia w celu zmniejszenia stanu zapalnego oraz zmniejszenia dolegliwości (krioterapia, jonoforeza) ćwiczenia ogólnousprawniające w celu utrzymania odpowiedniej ruchomości stawów, zapobiegania zanikom mięśniowym i deformacjom."
      ]
    },
    "star": [
      "badanie laboratoryjne (HLA-B27, RF, CRP, OB, morfologia) badanie ultrasonograficzne (dające obraz zmian w błonie maziowej) RTG (czy widoczne są zmiany w postaci osteoporo",
      "metody, środki, sposoby odziaływania i podać ich cel) edukacja pacjenta dotycząca prawidłowego wykonywania ćwiczeń w zależności od okresu choroby fizykoterapia w celu zmn",
      "u i badania w jakim wieku pojawiły się pierwsze objawy? czy występuję gorączka, wysypka, zapalenie stawów, uogólniona limfadenopatia, hepatosplenomegalia oraz zajęcie bło"
    ]
  },
  {
    "id": 46,
    "section": "reumatologia",
    "title": "pacjenta z chorobą zwyrodnieniową stawu kolanowego",
    "add": {
      "wywiad": [
        "u i badania od kiedy boli i kiedy pojawia się ból czy występuje ograniczenie ruchomości i obrzęk czy są trudności z wchodzeniem i schodzeniem ze schodów czy występują trzeszczenia, przeskakiwania i chrobotania w stawie podczas ruchu czy w przeszłości pacjent uprawiał jakiś sport czy w rodzinie ktoś chorował czy w przeszłości były jakieś urazy albo operacje na staw kolanowy czy w przeszłości miał pacjent uraz łąkotek"
      ],
      "ocena": [],
      "badanie": [
        "RTG RMI skala Kellgrena-Lawrence'a ocena wizualna (w celu wykluczenia koślawości albo szpotawości) sprawdzenie zakresu ruchomości stawów kolanowych (zgięcia i wyprostu) ocena siły mięśniowej sprawdzenie oporu końcowego (miękki, twardy) badanie palpacyjne stawu kolanowego"
      ],
      "cele": [],
      "program": [
        "ćwiczenia wzmacniające mięśnie KKDD w celu zwiększenia siły mięśni stabilizujących staw ćwiczenia poprawiające zakres ruchomości stawów kolanowych ćwiczenia zapobiegające przykurczom i zanikom mięśniowym fizykoterapia (laseroterapia, magnetoterapia, elektrolecznictwo, krioterapia, ultradźwięki) w celu zmniejszenia dolegliwości bólowych ćwiczenia w odciążeniu (np. basen) edukacja pacjenta dotycząca poprawności i istotności wykonywania ćwiczeń"
      ]
    },
    "star": [
      "RTG RMI skala Kellgrena-Lawrence'a ocena wizualna (w celu wykluczenia koślawości albo szpotawości) sprawdzenie zakresu ruchomości stawów kolanowych (zgięcia i wyprostu) o",
      "ćwiczenia wzmacniające mięśnie KKDD w celu zwiększenia siły mięśni stabilizujących staw ćwiczenia poprawiające zakres ruchomości stawów kolanowych ćwiczenia zapobiegające",
      "u i badania od kiedy boli i kiedy pojawia się ból czy występuje ograniczenie ruchomości i obrzęk czy są trudności z wchodzeniem i schodzeniem ze schodów czy występują trz"
    ]
  },
  {
    "id": 47,
    "section": "reumatologia",
    "title": "pacjenta z chorobą zwyrodnieniową stawu biodrowego",
    "add": {
      "wywiad": [
        "u i badania od kiedy boli i kiedy pojawia się ból czy występuje ograniczenie ruchomości i obrzęk czy są trudności z wchodzeniem i schodzeniem ze schodów czy występują trzeszczenia, przeskakiwania i chrobotania w stawie podczas ruchu czy w przeszłości pacjent uprawiał jakiś sport czy w rodzinie ktoś chorował czy w przeszłości były jakieś urazy albo operacje na staw kolanowy czy ból promieniuje do pachwiny, pośladka albo KD czy pacjent chodzi o kuli"
      ],
      "ocena": [],
      "badanie": [
        "RTG RMI ocena wizualna (czy występuje przykurcz oraz czy w trakcie chodu pacjent utyka) sprawdzenie zakresu ruchomości stawu biodrowego ocena siły mięśniowej stawu biodrowego badanie palpacyjne Test Thomasa Test Trendelenburga - Duchenne'a Test Anvila Objaw Drehmanna Kwestionariusz Harris Hip Score Kwestionariusz Hip disability and osteoarthritis outcome score"
      ],
      "cele": [],
      "program": [
        "ćwiczenia wzmacniające mięśnie KKDD w celu zwiększenia siły mięśni stabilizujących staw ćwiczenia poprawiające zakres ruchomości stawów biodrowych ćwiczenia zapobiegające przykurczom i zanikom mięśniowym fizykoterapia (laseroterapia, magnetoterapia, elektrolecznictwo, krioterapia, ultradźwięki) w celu zmniejszenia dolegliwości bólowych ćwiczenia w odciążeniu (np. basen) edukacja pacjenta dotycząca poprawności i istotności wykonywania ćwiczeń Fizjoterapia kliniczna w chorobach wewnętrznych w ginekologii i położnictwie"
      ]
    },
    "star": [
      "RTG RMI ocena wizualna (czy występuje przykurcz oraz czy w trakcie chodu pacjent utyka) sprawdzenie zakresu ruchomości stawu biodrowego ocena siły mięśniowej stawu biodro",
      "ćwiczenia wzmacniające mięśnie KKDD w celu zwiększenia siły mięśni stabilizujących staw ćwiczenia poprawiające zakres ruchomości stawów biodrowych ćwiczenia zapobiegające",
      "u i badania od kiedy boli i kiedy pojawia się ból czy występuje ograniczenie ruchomości i obrzęk czy są trudności z wchodzeniem i schodzeniem ze schodów czy występują trz"
    ]
  },
  {
    "id": 48,
    "section": "ginekologia",
    "title": "pacjenta z wysiłkowym nietrzymaniem moczu",
    "add": {
      "wywiad": [
        "u i W jakich momentach występuje wyciek moczu? Wiek, data ostatniej miesiączki Jak przebiegały porody (masa urodzeniowa dzieci, długość porodu, rodzaj porodu) Jaką aktywność fizyczną stosuje pacjent? Jaką pracę zawodowo wykonuje? (fizyczna, siedząca) Czy występują zaparcia, zaleganie moczu, infekcje układu moczowego, nietrzymanie stolca, gazów, choroba hemoroidalna Choroby współistniejące np. cukrzyca, zespoły uciskowe w obrębie kręgosłupa, nerwów obwodowych Przebyte operacje w obrębie miednicy mniejszej ( usunięcie prostaty, usunięcie macicy, w obszarze anorektalnym)"
      ],
      "ocena": [],
      "badanie": [
        "Ocena USG położenia narządów miednicy mniejszej, ocena funkcjonalna pracy mięśni dna miednicy; Ocena palpacyjna struktur dna miednicy, w szczególności mięśni dna miednicy w skali Oxford Ocena aktywności elektrycznej mięśni dna miednicy z użyciem elektromiografii powierzchniowej (sEMG) Ocena położenia struktur dna miednicy pod wpływem parcia (próba Valsalwy) i kaszlu (test kaszlowy) z użyciem wziernika Ocena postawy ciała pod kątem zakresu ruchu w obrębie miednicy i kręgosłupa (położenie miednicy, nadmierna ruchomość stawów, przykurcze) Dzienniczek mikcji BMI, WHR"
      ],
      "cele": [],
      "program": [
        "Edukacja w zakresie prawidłowej mikcji, defekacji, doboru korzystnej aktywności fizycznej Edukacja w zakresie wykonywania ćwiczeń mięśni dna miednicy Dobór ćwiczeń wpływających na poprawę postawy ciała"
      ]
    },
    "star": [
      "Ocena USG położenia narządów miednicy mniejszej, ocena funkcjonalna pracy mięśni dna miednicy; Ocena palpacyjna struktur dna miednicy, w szczególności mięśni dna miednicy",
      "Edukacja w zakresie prawidłowej mikcji, defekacji, doboru korzystnej aktywności fizycznej Edukacja w zakresie wykonywania ćwiczeń mięśni dna miednicy Dobór ćwiczeń wpływa",
      "u i W jakich momentach występuje wyciek moczu? Wiek, data ostatniej miesiączki Jak przebiegały porody (masa urodzeniowa dzieci, długość porodu, rodzaj porodu) Jaką aktywn"
    ]
  },
  {
    "id": 49,
    "section": "ginekologia",
    "title": "pacjentki po porodzie naturalnym",
    "add": {
      "wywiad": [
        "u i badania do pacjentki Wiek, data aktualnego porodu, długość trwania porodu, masa urodzeniowa dziecka/dzieci Jak przebiegały wcześniejsze porody? Czy występuje nietrzymanie moczu, stolca, gazów? Czy występują obniżenia narządów rodnych? Czy występuje zaleganie moczu, stolca?"
      ],
      "ocena": [],
      "badanie": [
        "Ocena USG położenia narządów miednicy mniejszej, ocena funkcjonalna pracy mięśni dna miednicy; Ocena palpacyjna struktur dna miednicy, w szczególności mięśni dna miednicy w skali Oxford Ocena aktywności elektrycznej mięśni dna miednicy z użyciem elektromiografii powierzchniowej (sEMG) Ocena położenia struktur dna miednicy pod wpływem parcia (próba Valsalwy) i kaszlu (test kaszlowy) z użyciem wziernika Ocena postawy ciała pod kątem zakresu ruchu w obrębie miednicy i kręgosłupa (położenie miednicy, nadmierna ruchomość stawów, przykurcze) Ocena położenia mięśnia prostego brzucha. Czy występuje i w jakim nasileniu rozejście mięśnia prostego brzucha? Curl up test"
      ],
      "cele": [],
      "program": [
        "Edukacja w zakresie prawidłowej mikcji, defekacji, doboru korzystnej aktywności fizycznej Edukacja w zakresie wykonywania ćwiczeń mięśni dna miednicy i wspomagających krążenie w kończynach dolnych (zakrzepowe zapalenie żył) Dobór ćwiczeń wpływających na poprawę postawy ciała, w tym na rozejście mięśnia prostego brzucha i aktywizacji mięśni głębokich tułowia Zastosowanie metody kinesiotapingu na rozejście mięśnia prostego brzucha Edukacja w zakresie podnoszenia, dźwigania Edukacja w zakresie wspomagania laktacji metodami fizjoterapeutycznymi: wspomaganie krążenia krwi w obrębie obręczy barkowej, pozycja ciała podczas karmienia, ćwiczenia relaksacyjne Fizjoterapia kliniczna w dysfunkcjach układu ruchu w neurologii i neurochirurgii"
      ]
    },
    "star": [
      "Ocena USG położenia narządów miednicy mniejszej, ocena funkcjonalna pracy mięśni dna miednicy; Ocena palpacyjna struktur dna miednicy, w szczególności mięśni dna miednicy",
      "Edukacja w zakresie prawidłowej mikcji, defekacji, doboru korzystnej aktywności fizycznej Edukacja w zakresie wykonywania ćwiczeń mięśni dna miednicy i wspomagających krą",
      "u i badania do pacjentki Wiek, data aktualnego porodu, długość trwania porodu, masa urodzeniowa dziecka/dzieci Jak przebiegały wcześniejsze porody? Czy występuje nietrzym"
    ]
  },
  {
    "id": 50,
    "section": "neurologia",
    "title": "pacjenta po udarze niedokrwiennym mózgu",
    "add": {
      "wywiad": [
        "u i badania podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny , środowiskowy, okoliczności udaru, pomoc osób trzecich w ciągu dnia, samodzielność"
      ],
      "ocena": [],
      "badanie": [
        "Ocena sylwetki, symetrii ciała, nawykowego ustawienie kręgosłupa i kończyn., Badanie zakresu ruchomości kończyn górnych i dolnych, Badanie zakresu ruchomości kręgosłupa (można posłużyć się testem palce- podłoga), Badanie siły mięśniowej (test Lovetta, dynamometr), Badanie napięcia mięśniowego (ocena oporu przy wykonaniu ruchu biernego- skala Ashwortha), Badanie chodu, Badanie równowagi (próba Romberga)., . Badanie czucia powierzchownego i głębokiego, Badanie palpacyjne. SKALA USZKODZEŃ REPTY - do oceny stopnia świadomości, orientacji, mowy, siły mięśni, czucia, ZMODYFIKOWANA SKALA RANKINA - w celu modyfikowania zmian stanu funkcjonalnego, SKALA BARTHEL - ocena jakości życia, TEST RĘKI FRENCHAY - ocenia funkcje chwytne i manipulacyjne ręki"
      ],
      "cele": [],
      "program": [
        "Zapobieganie zaburzeniom w obrębie układu ruchu: przykurczom i skostnieniom okołostawowym: Zapobieganie zaburzeniom w obrębie powłoki wspólnej (skóry): zapobieganie odleżynom: masaż, kąpiele wirowe, ćwiczenia w wannie do hydrogimnastyki, elektrostymulacja mięśni osłabionych ćwiczenia zgodne z założeniami metody NDT-Bobath lub PNF ćwiczenia wspomagane, w odciążeniu, w odciążeniu z obciążeniem, czynne wolne, ćwiczenia ogólnorozwojowe w basenie Pionizacja, Reedukacja chodu, reedukacja czynności życia codziennego"
      ]
    },
    "star": [
      "Ocena sylwetki, symetrii ciała, nawykowego ustawienie kręgosłupa i kończyn., Badanie zakresu ruchomości kończyn górnych i dolnych, Badanie zakresu ruchomości kręgosłupa (",
      "Zapobieganie zaburzeniom w obrębie układu ruchu: przykurczom i skostnieniom okołostawowym: Zapobieganie zaburzeniom w obrębie powłoki wspólnej (skóry): zapobieganie odleż",
      "u i badania podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny , "
    ]
  },
  {
    "id": 51,
    "section": "neurologia",
    "title": "pacjenta z chorobą Parkinsona",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne aktualne dolegliwości (stadium choroby, drętwienie, mrowienie, osłabienie siły mięśniowej, zmniejszenie ROM, dolegliwości bólowe, skala VAS, czynniki łagodzące ból/nasilające dolegliwości, charakter bólu, lokalizacja bólu) choroby współistniejące, przebyte leczenie (szpitalne i ambulatoryjne) zażywane leki, używki rodzinny i środowiskowy"
      ],
      "ocena": [],
      "badanie": [
        "Skala objawów choroby Parkinsona 1. Skala według Schwaba i Englanda - ocenia aktywność codzienną chorych 2. Próba Romberga 3. Próba Unterberga 4. Test Tinetti"
      ],
      "cele": [],
      "program": [
        "ćwiczenia zwiększające długość kroków - np. chodzenie po rozłożonych na podłodze papierowych okręgach ułożonych od siebie w pewnej odległości wymagającej wydłużenia kroków; ćwiczenia równoważne - chodzenie po namalowanej na podłodze prostej linii przekładając jedną stopę przed drugą, próba utrzymania równowagi podczas wytrącania pacjenta z niej za pomocą rąk fizjoterapeuty, podczas stania bokiem przy drabince unoszenie jednej nogi do góry; ćwiczenia koordynacyjne - w siedzeniu na krześle z oparciem unoszenie lewej nogi i prawej kończyny górnej do góry, ćwiczenia Frenkla. reedukacja chodu nauka upadania ćwiczenia motoryki małej, ogólnousprawniające ćwiczenia rozciągające, oddechowe, poprawiające mimikę twarzy masaż fizykoterapia (peloidoterapia, kąpiele solankowe, kąpiele w wodach leczniczych, zabiegi z wykorzystaniem zmiennego pola elektromagnetycznego niskiej częstotliwości)"
      ]
    },
    "star": [
      "Skala objawów choroby Parkinsona 1. Skala według Schwaba i Englanda - ocenia aktywność codzienną chorych 2. Próba Romberga 3. Próba Unterberga 4. Test Tinetti",
      "ćwiczenia zwiększające długość kroków - np. chodzenie po rozłożonych na podłodze papierowych okręgach ułożonych od siebie w pewnej odległości wymagającej wydłużenia krokó",
      "u i podstawowe dane personalne aktualne dolegliwości (stadium choroby, drętwienie, mrowienie, osłabienie siły mięśniowej, zmniejszenie ROM, dolegliwości bólowe, skala VAS"
    ]
  },
  {
    "id": 52,
    "section": "neurologia",
    "title": "pacjenta z chorobą Alzheimera",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne aktualne dolegliwości (objawy choroby Alzheimera: zaburzenia funkcji poznawczych, zmiany osobowości, zaburzenia poczucia czasu, zaburzenia w sferze emocjonalnej; od kiedy występują objawy, kiedy nastąpiła diagnoza, czy zdarzają się upadki , czy występują szybkie zmiany nastroju, nagłe wybuchy złości, choroby współistniejące) choroby współistniejące, przebyte leczenie (szpitalne i ambulatoryjne) zażywane leki i używki rodzinny i środowiskowy"
      ],
      "ocena": [],
      "badanie": [
        "badanie przedmiotowe: ocena wzrokowa pacjenta: postawa ciała ocena palpacyjna obrzęków, ocieplenia, miejscowych dolegliwości bólowych (porównanie z drugą stroną ciała) ocena zakresu ruchomości bierny i czynny (goniometr) kręgosłupa oraz stawów obwodowych, ocena siły mięśniowej (test Lovett), ocena oporu końcowego, obwód kończyn, ocena bradykinezji ocena chodu pacjenta - czy występują potknięcia, zaburzenia równowagi, długość, szerokość kroku, naprzemienność chodu Skala Tinetti (służy ocenie chodu, równowagi oraz ryzyku upadków) test wstań i idź (ocena równowagi oraz jakości chodu), ADL - Skala Podstawowych Czynności Życia Codziennego. Punkty przyznaje się w konkretnych dziedzinach: kąpiel/mycie się, ubieranie się, toaleta, kontrola zwieraczy,jedzenie, poruszanie się Test MMSE - ocena funkcji poznawczych Próba Romberga"
      ],
      "cele": [],
      "program": [
        "należy dostosować do fazy choroby. Wyróżnia się ich 3: zapominanie, dezorientacja i otępienie Kinezyterapia: ćwiczenia oddechowe, ćwiczenia równoważne, ćwiczenia koordynacyjne, ćwiczenia przyjmowania prawidłowej postawy oraz reedukacja chodu, PNF"
      ]
    },
    "star": [
      "badanie przedmiotowe: ocena wzrokowa pacjenta: postawa ciała ocena palpacyjna obrzęków, ocieplenia, miejscowych dolegliwości bólowych (porównanie z drugą stroną ciała) oc",
      "należy dostosować do fazy choroby. Wyróżnia się ich 3: zapominanie, dezorientacja i otępienie Kinezyterapia: ćwiczenia oddechowe, ćwiczenia równoważne, ćwiczenia koordyna",
      "u i podstawowe dane personalne aktualne dolegliwości (objawy choroby Alzheimera: zaburzenia funkcji poznawczych, zmiany osobowości, zaburzenia poczucia czasu, zaburzenia "
    ]
  },
  {
    "id": 53,
    "section": "neurologia",
    "title": "pacjenta z uszkodzeniem rdzenia kręgowego w odcinku szyjnym kręgosłupa",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne aktualne dolegliwości choroby współistniejące, przebyte leczenie (szpitalne i ambulatoryjne) zażywane leki i używki rodzinny i środowiskowy"
      ],
      "ocena": [],
      "badanie": [
        "Skala Lovetta skala Ashwort'a Skala oceny funkcji ruchowej Frankela Skala ASIA (American Spinal Injury Association)- szczegółowe badanie zaburzeń czucia dotyku i bólu obustronnie w obrębie 28 dermatomów, oceniając je w trzy stopniowej skali 1- brak czucia 2- czucie zaburzone (przeczulica,osłabienie) 3- czucie normalne"
      ],
      "cele": [],
      "program": [
        "Ćwiczenia oddechowe - ułatwiają usuwanie wydzieliny oskrzelowej, wzmacniają mięśnie oddechowe. Oklepywanie i pozycje drenażowe Normalizacja napięcia mięśniowego poprzez zastosowanie rotacji, wzorców trójpłaszczyznowych z przekraczaniem linii środkowej ciała oraz oddziaływaniem na strukturę - rozciąganie, docisk, ucisk, elongacja. Ćwiczenia bierne porażonych kończyn - ruch należy wykonywać w pełnym zakresie z dociskiem powierzchni stawowych (stymulacja proprioceptywna, umożliwienie zachowania pełnego ruchu, zapobieganie przykurczom) Pozycje ułożeniowe - zapobieganie przykurczom Ćwiczenia według koncepcji neurofizjologicznych ( PNF, Bobath, metoda Vojty) Pionizacja - pionizację bierną od kąta ok. 30°. Nauka chodzenia Terapia manualna - zmniejszenie dolegliwości bólowych, poprawa ROM Kinesiotaping- działanie sensoryczne, odciążające oraz stabilizujące, zalecane zwłaszcza w pierwszych dniach po zdjęciu kołnierza bądź gorsetu stabilizującego w celu zmniejszenia ryzyka wystąpienia kontuzji oraz pobudzenia tkanek miękkich do pracy. Fizykoterapia - pole magnetyczne, laseroterapia działanie regenerujące i pobudzające zrost krioterapia - zmniejszenie bólu i obrzęku, sollux, prądy impulsowe, małej częstotliwości - działanie rozluźniające, odżywiające, poprawiające ukrwienie Masaż - obniżenie wzmożonego napięcia, odżywienie tkanek Neuromobilizacje nerwów obwodowych - poprawa elastyczności, usprawniania mechanizmów naprawczych i regeneracyjnych Terapia ręki"
      ]
    },
    "star": [
      "Skala Lovetta skala Ashwort'a Skala oceny funkcji ruchowej Frankela Skala ASIA (American Spinal Injury Association)- szczegółowe badanie zaburzeń czucia dotyku i bólu obu",
      "Ćwiczenia oddechowe - ułatwiają usuwanie wydzieliny oskrzelowej, wzmacniają mięśnie oddechowe. Oklepywanie i pozycje drenażowe Normalizacja napięcia mięśniowego poprzez z",
      "u i podstawowe dane personalne aktualne dolegliwości choroby współistniejące, przebyte leczenie (szpitalne i ambulatoryjne) zażywane leki i używki rodzinny i środowiskowy"
    ]
  },
  {
    "id": 54,
    "section": "neurologia",
    "title": "pacjenta ze stwardnieniem rozsianym",
    "add": {
      "wywiad": [
        "u i badania podstawowe dane personalne aktualne dolegliwości choroby współistniejące, przebyte leczenie (szpitalne i ambulatoryjne) zażywane leki i używki rodzinny i środowiskowy"
      ],
      "ocena": [],
      "badanie": [
        "Skale umożliwiające ewaluację niesprawności, postęp choroby, a także wiarygodną ocenę wyników leczenia: Skala EDSS Skala Scripps (Scripps Neurological Rating Scale - SNRS) MS Impact Scale (MSIS) Ocena chodu - ilościowa ocena chodu polega na wykonywaniu testów pomiaru czasu potrzebnego na przejście wybranego dystansu po równym chodniku lub zmierzeniu dystansu, jaki badany przeszedł w danej jednostce czasu."
      ],
      "cele": [],
      "program": [
        "reedukacja nerwowo-mięśniowa (PNF, Bobath, bio-feedback, funkcjonalna elektrostymulacja (FES) reedukacja chodu (bieżnia ruchoma z zastosowaniem odciążenia masy ciała, ćwiczenia koordynacyjno- równoważne według H.S. Frenkla) reedukacja funkcji ręki (terapia lustrzana, ćwiczenia motoryki małej) zabiegi fizykalne wspomagające rehabilitację (hydroterapia, masaż, fizykoterapia - elektroterapia (tonoliza, TENS, kąpiele elektryczno-wodne dwu- i czterokomorowe zstępujące), pole magnetyczne niskiej częstotliwości, biostymulacja laserowa, promieniowanie podczerwone (lampa sollux filtr niebieski), krioterapia (krioterapia miejscowa, masaż kostkami lodu, kriożele, krioterapia ogólnoustrojowa, kriokomora, kriosauna)"
      ]
    },
    "star": [
      "Skale umożliwiające ewaluację niesprawności, postęp choroby, a także wiarygodną ocenę wyników leczenia: Skala EDSS Skala Scripps (Scripps Neurological Rating Scale - SNRS",
      "reedukacja nerwowo-mięśniowa (PNF, Bobath, bio-feedback, funkcjonalna elektrostymulacja (FES) reedukacja chodu (bieżnia ruchoma z zastosowaniem odciążenia masy ciała, ćwi",
      "u i badania podstawowe dane personalne aktualne dolegliwości choroby współistniejące, przebyte leczenie (szpitalne i ambulatoryjne) zażywane leki i używki rodzinny i środ"
    ]
  },
  {
    "id": 55,
    "section": "neurologia",
    "title": "pacjenta ze stwardnieniem zanikowym bocznym",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne aktualne dolegliwości choroby współistniejące, przebyte leczenie (szpitalne i ambulatoryjne) zażywane leki i używki rodzinny i środowiskowy"
      ],
      "ocena": [],
      "badanie": [
        "skala Lovetta Skorygowana Funkcjonalna Skala Stwardnienia Zanikowego Bocznego - tzw. skala ALSFRS-R"
      ],
      "cele": [],
      "program": [
        "Cele długoterminowe postępowania fizjoterapeutycznego: jak najdłuższe utrzymanie zdolności samodzielnego przemieszczania się, zapobieganie wtórnym skutkom choroby: niedowładom, przykurczom, bólowi, zanikom mięśniowym, duszności, męczliwości. ćwiczenia oddechowe, ćwiczenia czynne w odciążeniu, ćwiczenia wspomagające w basenie, ćwiczenia z wykorzystaniem technik metody PNF w celu poprawy równowagi oraz koordynacji nerwowo- mięśniowej, funkcji chodu, ćwiczenia z wykorzystaniem piłki rehabilitacyjnej fizykoterapia: stosowanie ciepła (np. kąpiele borowinowe), hydroterapia, relaksacyjny masaż mięśni, zapobieganie obrzękom - wyższe układanie kończyn, pończochy uciskowe, ręczny masaż limfatyczny, stosowanie gorsetów ortopedycznych, stosowanie kołnierza stabilizującego osłabione mięśnie stosowanie ortez stabilizujących"
      ]
    },
    "star": [
      "skala Lovetta Skorygowana Funkcjonalna Skala Stwardnienia Zanikowego Bocznego - tzw. skala ALSFRS-R",
      "Cele długoterminowe postępowania fizjoterapeutycznego: jak najdłuższe utrzymanie zdolności samodzielnego przemieszczania się, zapobieganie wtórnym skutkom choroby: niedow",
      "u i podstawowe dane personalne aktualne dolegliwości choroby współistniejące, przebyte leczenie (szpitalne i ambulatoryjne) zażywane leki i używki rodzinny i środowiskowy"
    ]
  },
  {
    "id": 56,
    "section": "neurologia",
    "title": "pacjenta z dystrofią mięśniową Beckera",
    "add": {
      "wywiad": [
        "u i występowanie choroby w rodzinie, badania genetyczne, jak dawo pierwsze objawy, jakie były pierwsze objawy sytuacja socjalno- bytowa stadium choroby występowanie dolegliwości bólowych i ich natężenie (skala VAS, NRS), czynniki łagodzące ból, czynniki nasilające dolegliwości, charakter bólu (kłujący, pulsujący, piekący, itp., lokalizacja bólu występowanie innych dolegliwości (drętwienie, mrowienie, osłabienie siły mięśniowej, zmniejszenie ROM, itp.) ograniczenia dnia codziennego"
      ],
      "ocena": [],
      "badanie": [
        "badanie chodu, równowagi, czucia powierzchownego, głębokiego, stabilizacji tułowia, obrzęków, badania zmian pozycji (czy samodzielnie czy z pomocą), badanie zakresów ruchu, badanie siły mm, Ocena wydolności czynnościowej kończyn górnych i obręczy barkowej (np. według Tecklina)"
      ],
      "cele": [],
      "program": [
        "indywidualne podejście do każdego przypadku i indywidualny dobór środków terapii kinezyterapia: ćwiczenia odruchowe, ćwiczenia ogólnousprawniające, terapia chodu, pionizacja, ćwiczenia oddechowe, ćwiczenia synergistyczne, ćwiczenia rozciągające, PIR, PNF, kinesiology taping"
      ]
    },
    "star": [
      "indywidualne podejście do każdego przypadku i indywidualny dobór środków terapii kinezyterapia: ćwiczenia odruchowe, ćwiczenia ogólnousprawniające, terapia chodu, pioniza",
      "u i występowanie choroby w rodzinie, badania genetyczne, jak dawo pierwsze objawy, jakie były pierwsze objawy sytuacja socjalno- bytowa stadium choroby występowanie doleg",
      "badanie chodu, równowagi, czucia powierzchownego, głębokiego, stabilizacji tułowia, obrzęków, badania zmian pozycji (czy samodzielnie czy z pomocą), badanie zakresów ruch"
    ]
  },
  {
    "id": 57,
    "section": "neurologia",
    "title": "pacjenta po krwotoku śródmózgowym",
    "add": {
      "wywiad": [
        "u i badania podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny , środowiskowy, okoliczności udaru, pomoc osób trzecich w ciągu dnia, samodzielność"
      ],
      "ocena": [],
      "badanie": [
        "Ocena sylwetki, symetrii ciała, nawykowego ustawienie kręgosłupa i kończyn., Badanie zakresu ruchomości kończyn górnych i dolnych, Badanie zakresu ruchomości kręgosłupa (można posłużyć się testem palce- podłoga), Badanie siły mięśniowej (test Lovetta, dynamometr), Badanie napięcia mięśniowego (ocena oporu przy wykonaniu ruchu biernego- skala Ashwortha), Badanie chodu, Badanie równowagi (próba Romberga), badanie czucia powierzchownego i głębokiego, Badanie palpacyjne. SKALA USZKODZEŃ REPTY - do oceny stopnia świadomości, orientacji, mowy, siły mięśni, czucia, ZMODYFIKOWANA SKALA RANKINA - w celu modyfikowania zmian stanu funkcjonalnego, SKALA BARTHEL - ocena jakości życia, TEST RĘKI FRENCHAY - ocenia funkcje chwytne i manipulacyjne ręki"
      ],
      "cele": [],
      "program": [
        "Zapobieganie zaburzeniom w obrębie układu ruchu: przykurczom i skostnieniom okołostawowym: Zapobieganie zaburzeniom w obrębie powłoki wspólnej (skóry): zapobieganie odleżynom: masaż, kąpiele wirowe, ćwiczenia w wannie do hydrogimnastyki, elektrostymulacja mięśni osłabionych ćwiczenia zgodne z założeniami metody NDT-Bobath lub PNF ćwiczenia wspomagane, w odciążeniu, w odciążeniu z obciążeniem, czynne wolne, ćwiczenia ogólnorozwojowe w basenie Pionizacja, Reedukacja chodu, reedukacja czynności życia codziennego"
      ]
    },
    "star": [
      "Ocena sylwetki, symetrii ciała, nawykowego ustawienie kręgosłupa i kończyn., Badanie zakresu ruchomości kończyn górnych i dolnych, Badanie zakresu ruchomości kręgosłupa (",
      "Zapobieganie zaburzeniom w obrębie układu ruchu: przykurczom i skostnieniom okołostawowym: Zapobieganie zaburzeniom w obrębie powłoki wspólnej (skóry): zapobieganie odleż",
      "u i badania podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny , "
    ]
  },
  {
    "id": 58,
    "section": "neurologia",
    "title": "pacjenta z uszkodzeniem nerwu strzałkowego",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny, środowiskowy, okoliczności udaru, pomoc osób trzecich w ciągu dnia, samodzielność"
      ],
      "ocena": [],
      "badanie": [
        "ocena sylwetki, symetrii ciała, nawykowego ustawienie kręgosłupa i kończyn, badanie zakresu ruchomości kończyn górnych i dolnych, kręgosłupa (można posłużyć się testem palce- podłoga), badanie siły mięśniowej (test Lovetta, dynamometr), badanie napięcia mięśniowego (ocena oporu przy wykonaniu ruchu biernego- skala Ashwortha), Badanie chodu, badanie równowagi (próba Romberga), badanie czucia powierzchownego i głębokiego, badanie palpacyjne. Skala uszkodzeń Repty, zmodyfikowana skala Rankina, Skala Barthel, ręki Frenchay"
      ],
      "cele": [],
      "program": [
        "Zapobieganie zaburzeniom w obrębie układu ruchu: przykurczom i skostnieniom okołostawowym: Zapobieganie zaburzeniom w obrębie powłoki wspólnej (skóry): zapobieganie odleżynom: masaż, kąpiele wirowe, ćwiczenia w wannie do hydrogimnastyki, elektrostymulacja mięśni osłabionych ćwiczenia zgodne z założeniami metody NDT-Bobath lub PNF ćwiczenia wspomagane, w odciążeniu, w odciążeniu z obciążeniem, czynne wolne, ćwiczenia ogólnorozwojowe w basenie Pionizacja, Reedukacja chodu, reedukacja czynności życia codziennego"
      ]
    },
    "star": [
      "ocena sylwetki, symetrii ciała, nawykowego ustawienie kręgosłupa i kończyn, badanie zakresu ruchomości kończyn górnych i dolnych, kręgosłupa (można posłużyć się testem pa",
      "Zapobieganie zaburzeniom w obrębie układu ruchu: przykurczom i skostnieniom okołostawowym: Zapobieganie zaburzeniom w obrębie powłoki wspólnej (skóry): zapobieganie odleż",
      "u i podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny, środowisk"
    ]
  },
  {
    "id": 59,
    "section": "neurologia",
    "title": "pacjenta z uszkodzeniem nerwu pośrodkowego",
    "add": {
      "wywiad": [
        "u i Podstawowe dane personalne Aktualne dolegliwości Choroby współistniejące i przebyte Zażywane leki Używki Ręka dominująca Zawód, aktywność zawodowa Czas pojawienia się i rodzaj objawów, nasilenie objawów Czas zdarzenia Dynamika narastania dolegliwości Dolegliwości bólowe"
      ],
      "ocena": [],
      "badanie": [
        "Zaburzenia ruchowe: utrudnione czynne nawracanie przedramienia, osłabione zginanie ręki, utrudnione zginanie palców, upośledzone ruchy kciuka - brak ruchów zginania i przeciwwstawiania, upośledzone zgięcie palca II i częściowo III, występowanie \"ręki błogosławiącej\" Zaburzenia czuciowe: 2/3 powierzchni dłoniowej ręki, powierzchnie trzech pierwszych palców i promieniowa połowa palca IV, po stronie grzbietowej paliczek środkowy i dalszy palca II i III, Zaburzenia wegetatywne: skóra zimna, zasiniona, sina, zaburzenia wzrostu włosów i paznokci. Badanie kliniczne: Test Phalena, odwrócony test Phalena, test Tinela, Test butelki Lüthy'ego, test Durkana"
      ],
      "cele": [],
      "program": [
        ": Fizykoterapia (np. ciepłolecznictwo, elektrostymulacja, kąpiele wirowe, magnetoterapia, laseroterapia, ultradźwięki) Ćwiczenia bierne Ćwiczenia czynne Ćwiczenia samowspomagane",
        "Metody neurofizjologiczne (np. PNF) Terapia ręki Terapia manualna Neuromobilizacja Kinesiologytaping Ortezy"
      ]
    },
    "star": [
      "Ręka błogosławiąca",
      "Test Phalena, Tinela i Durkana",
      "Zaburzenia czucia trzech pierwszych palców"
    ]
  },
  {
    "id": 60,
    "section": "neurologia",
    "title": "pacjenta z uszkodzeniem nerwu promieniowego",
    "add": {
      "wywiad": [
        "u i Podstawowe dane personalne Aktualne dolegliwości Choroby współistniejące i przebyte Zażywane leki Używki Ręka dominująca Zawód, aktywność zawodowa Czas pojawienia się i rodzaj objawów, nasilenie objawów Czas zdarzenia Dynamika narastania dolegliwości Dolegliwości bólowe"
      ],
      "ocena": [],
      "badanie": [
        ": Zaburzenia ruchowe: niemożliwe prostowanie przedramienia, odwracanie przedramienia -możliwe przez m. dwugłowy, niemożliwe prostowanie ręki, zniesione prostowanie w stawach śródręczno-paliczkowych, porażone prostowanie i odwodzenie kciuka, występowanie \" ręki opadającej\" Zaburzenia czuciowe: Całkowite znieczulenie na powierzchni grzbietowej ręki między I a II k. śródręcza Zaburzenia wegetatywne: niewielkie Badanie kliniczne: ręka opada, brak możliwości wykonania zgięcia grzbietowego,"
      ],
      "cele": [],
      "program": [
        ": Masaż Fizykoterapia (np. ciepłolecznictwo, elektrostymulacja, kąpiele wirowe, magnetoterapia, laseroterapia, ultradźwięki) Ćwiczenia bierne Ćwiczenia czynne Ćwiczenia samowspomagane",
        "Metody neurofizjologiczne (np. PNF) Terapia ręki Terapia manualna Neuromobilizacja Kinesiologytaping Ortezy"
      ]
    },
    "star": [
      "Ręka opadająca",
      "Brak możliwości wykonania zgięcia grzbietowego",
      "Znieczulenie na powierzchni grzbietowej między I a II kością śródręcza"
    ]
  },
  {
    "id": 61,
    "section": "neurologia",
    "title": "pacjenta z uszkodzeniem nerwu łokciowego",
    "add": {
      "wywiad": [
        "u i Podstawowe dane personalne Aktualne dolegliwości Choroby współistniejące i przebyte Zażywane leki Używki Ręka dominująca Zawód, aktywność zawodowa Czas pojawienia się i rodzaj objawów, nasilenie objawów Czas zdarzenia Dynamika narastania dolegliwości Dolegliwości bólowe"
      ],
      "ocena": [],
      "badanie": [
        "Zaburzenia ruchowe: osłabienie zginania i przywodzenia w stawie nadgarstkowym, osłabienie zgięcia palców ii do v, porażenie odwodzenia i przeciwstawiania palca małego, porażenie przywodzenia i odwodzenia palców porażenie przywodzenia kciuka, dochodzi do zaniku mięśni kłębka - powstaje \"ręka szponiasta\", Zaburzenia czuciowe: po stronie dłoniowej: palec V, przyśrodkowa część palca IV, po stronie grzbietowej: palec V, IV paliczek bliższy i część paliczka środkowego palca III, Zaburzenia wegetatywne: sucha, sina, odbarwiona skóra, rogowacenie naskórka, zmiany w wyglądzie paznokcia palca małego, Badanie kliniczne: Objaw Fromenta, Objaw Wartenberga, Objaw osłabienia haka łokciowego,"
      ],
      "cele": [],
      "program": [
        ": Masaż Fizykoterapia (np. ciepłolecznictwo, elektrostymulacja, kąpiele wirowe, magnetoterapia, laseroterapia, ultradźwięki) Ćwiczenia bierne Ćwiczenia czynne Ćwiczenia samowspomagane",
        "Metody neurofizjologiczne (np. PNF) Terapia ręki Terapia manualna Neuromobilizacja Kinesiologytapingy Ortezy"
      ]
    },
    "star": [
      "Ręka szponiasta",
      "Objaw Fromenta i Objaw Wartenberga",
      "Zanik mięśni kłębka"
    ]
  },
  {
    "id": 62,
    "section": "neurologia",
    "title": "pacjenta z uszkodzeniem splotu ramiennego",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny, środowiskowy, chorobowy (dolegliwości, kiedy pojawiły się zgłaszane dolegliwości, czynnik sprawczy (może być nieuchwytny), charakter bólu i jego miejsce, inne dolegliwości, ogólny stan zdrowia)."
      ],
      "ocena": [],
      "badanie": [
        "oględziny: postawa ciała, zmiana koloru skóry, ocena symetrii, zniekształcenia, zaniki/przykurcze mm., czucie dotyku/temperatury, środki pomocnicze/zaopatrzenie ortopedyczne badanie palpacyjne badanie sprawdzające ROM i siłę mięśniową kkg (test Lovett'a, skala MRC, dynamometr; ruch bierny/czynny/oporowy) Testy funkcjonalne kliniczne/neurologiczne: testy napięciowe, ocena dermatomów, miotomów, sklerotomów mięśnie wskaźnikowe, odruchy ścięgniste diagnostyka różnicowa z uszkodzeniem pojedynczych nerwów"
      ],
      "cele": [],
      "program": [
        "Cel: przywrócenie utraconych funkcji oraz poprawa stanu funkcjonalnego i jakości życia pacjenta",
        "Cele szczegółowe: normalizacja tonusu mm. /zapobieganie przykurczom, zanikom i atrofii mm. zwiększenie ROM w stawach zapobieganie pogłębianiu się deformacji i utrwalającej się nieprawidłowej pozycji analgetycznej kg pacjenta dążenie do odzyskania całkowitej bądź częściowej funkcji nerwów zmniejszenie dolegliwości bólowych edukacja pacjenta nt. sposobu wykonywania czynności dnia codziennego oraz prawidłowego układania kg za pomocą ortezy w razie konieczności przygotowanie pacjenta do zabiegu neurochirurgicznego",
        "Metody fizjoterapeutyczne: kinezyterapia: ćwiczenia bierne/czynno-bierne/samowspomagane/oporowane/ izometryczne, ćwiczenia motoryki małej, automasaż. fizykoterapia: ciepłolecznictwo; laser wysokoenergetyczny /jonoforeza/krioterapia/magnetoterapia/p.TENS; działanie p/obrzękowe: masaż pneumatyczny BOA/ pobudzenie nerwów do regeneracji oraz mięśni do pracy: elektrostymulacja; masaż: klasyczny terapia manualna/terapie specjalistyczne: metody neurofizjologiczne/reedukacji nerwowo-mięśniowej: np. PNF, NDT-Bobath; mobilizacje, neuromobilizacje, techniki terapii manualnej w obrębie stawu ramiennego, kinesiotaping terapia mięśniowo-powięziowych punktów spustowych, rozluźnianie mięśniowo-powięziowe"
      ]
    },
    "star": [
      "oględziny: postawa ciała, zmiana koloru skóry, ocena symetrii, zniekształcenia, zaniki/przykurcze mm., czucie dotyku/temperatury, środki pomocnicze/zaopatrzenie ortopedyc",
      "Metody fizjoterapeutyczne: kinezyterapia: ćwiczenia bierne/czynno-bierne/samowspomagane/oporowane/ izometryczne, ćwiczenia motoryki małej, automasaż. fizykoterapia: ciepł",
      "Cel: przywrócenie utraconych funkcji oraz poprawa stanu funkcjonalnego i jakości życia pacjenta"
    ]
  },
  {
    "id": 63,
    "section": "neurologia",
    "title": "pacjenta z zespołem Guillaina-Barrego",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny, środowiskowy. chorobowy (dolegliwości, kiedy pojawiły się zgłaszane dolegliwości, czynnik sprawczy bólu i jego miejsce, inne dolegliwości, ogólny stan zdrowia). Dodatkowo: Czy w okresie ostatnich 2 miesięcy wystąpiło zatrucie pokarmowe lub zakażenie dróg oddechowych/ mononukleoza/ grypa/ półpasiec/ ospa wietrzna? Czy występują u Pana/i zaburzenia rytmu serca/problemy z ciśnieniem/ problemy z oddychaniem i połykaniem/zaburzenia oddawania moczu i stolca/zaparcia/zaburzenia termoregulacji/ zaburzenia źreniczne/bóle grzbietu i kończyn? socjalny (warunki mieszkaniowe, czy jest ktoś kto może pomóc w domu, źródło utrzymania)."
      ],
      "ocena": [],
      "badanie": [
        "Ocena: postawa ciała/dewiacja/pozycja przeciwbólowa, siadanie, wyraz twarzy, zmiana koloru skóry, symetrii, zniekształcenia, zaniki/przykurcze mm, czucie dotyku/temperatury, środki pomocnicze/zaopatrzenie ortopedyczne, charakterystyczna symetryczność objawów Badanie palpacyjne Badanie sprawdzające ROM w stawach (goniometr) i siłę mięśniową kkg i kkd (test Lovett'a, skala MRC, dynamometr; ruch bierny/czynny/oporowy) Testy funkcjonalne kliniczne/neurologiczne: mięśnie wskaźnikowe (wzmożone napięcie/lokalne podrażnienie mięśnia, ścięgna/osłabienie odruchów ścięgnistych), odruchy ścięgniste (kolanowy i ze ścięgna Achillesa), obecność odruchu źrenicznego (w zespole często jego brak), badanie czucia powierzchownego/głębokiego/dotyku/temperatury"
      ],
      "cele": [],
      "program": [
        "Cel: przywrócenie utraconych funkcji oraz poprawa stanu funkcjonalnego i jakości życia pacjenta",
        "Cele szczegółowe: normalizacja tonusu mm. /zapobieganie przykurczom, zanikom i atrofii mm. zwiększenie ROM w stawach zapobieganie pogłębianiu się deformacji i utrwalającej się nieprawidłowej pozycji analgetycznej pacjenta zmniejszenie dolegliwości bólowych edukacja pacjenta nt. sposobu wykonywania czynności dnia codziennego uzbrojenie pacjenta w cierpliwość i motywowanie do systematyczności w proces rehabilitacji -> rehabilitacja niestety długotrwała nauka prawidłowego oddychania",
        "Metody fizjoterapeutyczne gimnastyka oddechowa nauka prawidłowego połykania (gdy występuje z tym problem) ćwiczenia poprawiające koordynację ruchową doskonalenie chodu (przyjmowanie właściwego ustawienia tułowia i głowy) zaburzenia czucia -> np. techniki koncepcji Stymulacji Bazalnej fizykoterapia masaż terapia manualna/terapie specjalistyczne"
      ]
    },
    "star": [
      "Ocena: postawa ciała/dewiacja/pozycja przeciwbólowa, siadanie, wyraz twarzy, zmiana koloru skóry, symetrii, zniekształcenia, zaniki/przykurcze mm, czucie dotyku/temperatu",
      "Metody fizjoterapeutyczne gimnastyka oddechowa nauka prawidłowego połykania (gdy występuje z tym problem) ćwiczenia poprawiające koordynację ruchową doskonalenie chodu (p",
      "Cel: przywrócenie utraconych funkcji oraz poprawa stanu funkcjonalnego i jakości życia pacjenta"
    ]
  },
  {
    "id": 64,
    "section": "neurologia",
    "title": "pacjenta z zespołem bólowym odcinka lędźwiowo-krzyżowego kręgosłupa",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny, środowiskowy. chorobowy: od kiedy występuje ból? Kiedy ból się nasila lub zmniejsza? Czy są pozycje, które go zmniejszają? (nasilenie dolegliwości podczas siedzenia ->dyskopatia). Jaki jest charakter bólu? Intensywność dolegliwości bólowych. Badania obrazowe: rezonans/RTG. Choroby współistniejące. Rodzaj pracy zawodowej. Aktywność fizyczna. Uraz"
      ],
      "ocena": [],
      "badanie": [
        "Budowa ogólna, stan skóry, stan mięśniówki, postawa. Deformacje, skoliozy, asymetria miednicy, pion korekcji Th/L. Obwody, osie i obrysy kończyn. Obserwacja chodu i globalnego ruch Palpacja Punkty wyjścia nerwów Opukowa wrażliwość Kompresja osiowa i trakcja Opór końcowy Ocena czucia powierzchownego - dermatomy. Testy diagnostyczne: Slump test"
      ],
      "cele": [],
      "program": [
        "zabiegi fizykalne - najczęściej ciepłolecznictwo, choć w przypadku uszkodzeń kostnych może to być magnetoterapia; ćwiczenia - wzmacniające lub rozciągające, terapię manualną; masaż powięziowy; terapię punktów spustowych; kinesiotaping"
      ]
    },
    "star": [
      "Budowa ogólna, stan skóry, stan mięśniówki, postawa. Deformacje, skoliozy, asymetria miednicy, pion korekcji Th/L. Obwody, osie i obrysy kończyn. Obserwacja chodu i globa",
      "zabiegi fizykalne - najczęściej ciepłolecznictwo, choć w przypadku uszkodzeń kostnych może to być magnetoterapia; ćwiczenia - wzmacniające lub rozciągające, terapię manua",
      "u i podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny, środowisk"
    ]
  },
  {
    "id": 65,
    "section": "neurologia",
    "title": "pacjenta z zespołem bólowym odcinka szyjnego kręgosłupa",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny, środowiskowy chorobowy: Od kiedy występuje ból? Kiedy ból się nasila lub zmniejsza? Czy są pozycje, które go zmniejszają? Jaki jest charakter bólu? Intensywność dolegliwości bólowych? Badania obrazowe: rezonans/RTG? Choroby współistniejące? Rodzaj pracy zawodowej? Aktywność fizyczna? Uraz?"
      ],
      "ocena": [],
      "badanie": [
        "Ocena wizualna: symetria i zachowania równowagi statycznej; stan skóry Porównanie obu stron obrysów szyi i ocena lordozy szyjnej, Ocena ROM Ocena palpacyjna tkliwości tkanek Badanie skriningowe ruchów rotacyjnych odcinka szyjnego Test dystrakcyjny szyjnego odcinka kręgosłupa badanie czucia skórnego, odruchów ścięgnistych i testy siły mięśni wskaźnikowych dla poszczególnych segmentów odcinka szyjnego"
      ],
      "cele": [],
      "program": [
        "Ćwiczenia rozciągające, poprawy zakresu ROM, czynne wolne oporowe i izometryczne, pozimotryczna relaksacja mięśni Masaż tkanek głębokich TENS Sollux"
      ]
    },
    "star": [
      "Ocena wizualna: symetria i zachowania równowagi statycznej; stan skóry Porównanie obu stron obrysów szyi i ocena lordozy szyjnej, Ocena ROM Ocena palpacyjna tkliwości tka",
      "Ćwiczenia rozciągające, poprawy zakresu ROM, czynne wolne oporowe i izometryczne, pozimotryczna relaksacja mięśni Masaż tkanek głębokich TENS Sollux",
      "u i podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny, środowisk"
    ]
  },
  {
    "id": 66,
    "section": "neurologia",
    "title": "pacjenta z ataksją tylnosznurową",
    "add": {
      "wywiad": [
        "u i podstawowe dane personalne, aktualne dolegliwości, choroby współistniejące, przebyte, leczenie (szpitalne i ambulatoryjne), zażywane leki, używki, rodzinny, środowiskowy chorobowy: Czy były urazy kręgosłupa? Czy wystąpił uraz mózgu? Czy pacjent ma wyniki badania obrazowego? Czy pacjent był leczony onkologicznie? Czy pacjent ma prawidłową gospodarkę hormonalną i prawidłową dietę?"
      ],
      "ocena": [],
      "badanie": [
        "badanie: czucia głębokiego, ocena objawów uszkodzenia nerwów obwodowych lub rdzenia kręgowego, próba Romberga, niezborność ruchowa, drżenie mięśni, brak zdolności do oceny położenia własnego ciała w przestrzeni"
      ],
      "cele": [
        "przywrócenie prawidłowej propriocepcji przywrócenie prawidłowego przewodnictwa nerwowego nauka ergonomicznego chodu",
        "Metody: Ćwiczenia koordynacyjne Ćwiczenia wspomagające równowagę Ćwiczenia i korekcja chodu Fizjoterapia w chorobach wewnętrznych w onkologii i medycynie paliatywnej."
      ],
      "program": []
    },
    "star": [
      "badanie: czucia głębokiego, ocena objawów uszkodzenia nerwów obwodowych lub rdzenia kręgowego, próba Romberga, niezborność ruchowa, drżenie mięśni, brak zdolności do ocen",
      "Metody: Ćwiczenia koordynacyjne Ćwiczenia wspomagające równowagę Ćwiczenia i korekcja chodu Fizjoterapia w chorobach wewnętrznych w onkologii i medycynie paliatywnej.",
      "przywrócenie prawidłowej propriocepcji przywrócenie prawidłowego przewodnictwa nerwowego nauka ergonomicznego chodu"
    ]
  },
  {
    "id": 67,
    "section": "onkologia",
    "title": "pacjenta po mastektomii",
    "add": {
      "wywiad": [],
      "ocena": [
        "u i Problem z jakim pacjent przyszedł. Choroby współistniejące. Przebyte urazy/operacje. Dotychczasowe leczenie. Badania dodatkowe. Przyjmowane leki. Czy występują czerwone/żółte flagi. Ocena głównych dolegliwości: Umiejscowienie? Charakterystyka/rodzaj? Promieniowanie? Objawy współistniejące? Przebieg/wzorzec? Czynniki zaostrzające/łagodzące dolegliwości? Intensywność?"
      ],
      "badanie": [
        "Badanie funkcjonalne kończyny górnej - testy aktywne, pasywne, oporowe. Ocena postawy pacjenta. Palpacja. Ocena blizny."
      ],
      "cele": [],
      "program": [
        "Cel etapowy: zapobieganie powikłaniom pooperacyjnym",
        "Cel szczegółowy: zapobieganie zastojowi chłonki w kończynie i okolicy zabiegu operacyjnego.",
        "Środki: edukacja pacjenta, ćwiczenia czynne, klin przeciwobrzękowy, ćwiczenia oddechowe, ćwiczenia rozluźniające, automasaż, terapia blizny.",
        "Cel etapowy: zapobieganie zaburzeniom czynnościowym i przywrócenie prawidłowej funkcji narządów i układów",
        "Cel szczegółowy: zwiększenie zakresu ruchomości w stawie ramiennym strony operowanej",
        "Środki: ćwiczenia czynne, ćwiczenia samowspomagane, ćwiczenia bierne, masaż, masaż tkanek głębokich, kinesiologytaping, terapia blizny.",
        "Cel szczegółowy: korygowanie zmian w postawie i zaburzeń statyce ciała",
        "Środki: ćwiczenia przy lustrze",
        "Cel szczegółowy: Utrzymanie prawidłowej lub zwiększenie obniżonej siły mięśniowej kończyny górnej strony operowanej",
        "Środki: ćwiczenia czynne z obciążeniem.",
        "Cel szczegółowy: poprawa czynności układu oddechowego.",
        "Środki: ćwiczenia oddechowe.",
        "Cel szczegółowy: zapobieganie rozwojowi obrzęku chłonnego.",
        "Środki: edukacja pacjenta, ćwiczenia czynne, klin przeciwobrzękowy, ćwiczenia oddechowe, ćwiczenia rozluźniające, automasaż, terapia blizny. Fizjoterapia kliniczna w dysfunkcjach układu ruchu w medycynie sportowej L.P Pytanie Klucz"
      ]
    },
    "star": [
      "Badanie funkcjonalne kończyny górnej - testy aktywne, pasywne, oporowe. Ocena postawy pacjenta. Palpacja. Ocena blizny.",
      "Środki: edukacja pacjenta, ćwiczenia czynne, klin przeciwobrzękowy, ćwiczenia oddechowe, ćwiczenia rozluźniające, automasaż, terapia blizny.",
      "Środki: ćwiczenia czynne, ćwiczenia samowspomagane, ćwiczenia bierne, masaż, masaż tkanek głębokich, kinesiologytaping, terapia blizny."
    ]
  },
  {
    "id": 68,
    "section": "sportowa",
    "title": "pacjenta po skręceniu stawu skokowego",
    "add": {
      "wywiad": [
        "u i badania Aktualne objawy oraz kiedy się pojawiły, mechanizm urazu Wcześniejsze epizody Dotychczasowe leczenie Choroby towarzyszące"
      ],
      "ocena": [],
      "badanie": [
        "Badanie zakresu ruchomości czynny, bierny Badanie siły mięśniowej badanie palpacyjne VAS dla całego urazu Obrzęk, krwiak test szuflady przedniej (ocena więzadła strzałkowo-skokowego przedniego) test odwrócenia stopy (ocena ciągłości więzadła strzałkowo-piętowego) squeeze test oraz external rotation test (ocena ciągłości więzozrostu piszczelowostrzałkowego)"
      ],
      "cele": [],
      "program": [
        "48 -72 godziny od urazu (faza ostra) - stosowanie zasady PRICE albo POLICE; jeżeli konieczne odciążenie kończyny; ćwiczenia stabilizacji, zakresu ruchomości do granicy bólu i możliwości 3 -7 dni(faza podostra) - mobilizacja tkanek miękkich- kontynuacja aktywnego zgięcia podeszwowego i grzbietowego w stawie skokowogoleniowym, - stretching - stopniowe obciążanie (docisk), - ćwiczenia stabilizacyjne, - trening propriocepcji. 2 -4 tygodnie (faza kształtowania) - trening aerobowy, - stretching (- wzmacnianie mięśnia trójgłowego łydki - wzmacnianie mięśnia piszczelowego przedniego - wzmacnianie mięśnia piszczelowego tylnego - wzmacnianie mięśni , - trening koncentryczny stabilizatorów czynnych, - wzmacnianie mięśni stabilizujących miednicę i tułów, - trening ekscentryczny stabilizatorów czynnych - trening wielopłaszczyznowy propriocepcji"
      ]
    },
    "star": [
      "PRICE albo POLICE w fazie ostrej",
      "Test szuflady przedniej i test odwrócenia stopy",
      "Trening propriocepcji"
    ]
  },
  {
    "id": 69,
    "section": "sportowa",
    "title": "pacjenta po zerwaniu więzadła krzyżowego przedniego przed zabiegiem operacyjnym",
    "add": {
      "wywiad": [
        "u i Aktualne objawy oraz kiedy się pojawiły, jak doszło do urazu Wcześniejsze epizody Dotychczasowe leczenie Choroby towarzyszące"
      ],
      "ocena": [],
      "badanie": [
        "Badanie zakresu ruchomości Badanie siły mięśniowej VAS dla całego urazu Test szuflady przedniej Test Lachmana"
      ],
      "cele": [],
      "program": [
        "Prehabilitacja - przygotowanie do zabiegu, Przywrócenie maksymalnej ruchomości; propriocepcji; siły; koordynacji. Zmniejszenie lub brak wysięku i bólu podczas aktywności fizycznej Fizjoterapia w chorobach wewnętrznych w chirurgii"
      ]
    },
    "star": [
      "Prehabilitacja przed zabiegiem",
      "Test Lachmana i test szuflady przedniej",
      "Przywrócenie ruchomości, propriocepcji, siły i koordynacji"
    ]
  },
  {
    "id": 70,
    "section": "chirurgia",
    "title": "pacjenta po operacjach jamy brzusznej",
    "add": {
      "wywiad": [
        "u i Podstawowe dane personalne Aktualne dolegliwości Choroby współistniejące i przebyte Zażywane leki Używki Zawód, aktywność zawodowa Czas pojawienia się i rodzaj objawów, nasilenie objawów Czas zdarzenia Dynamika narastania dolegliwości Dolegliwości bólowe"
      ],
      "ocena": [],
      "badanie": [
        "Przed przystąpieniem do ćwiczeń należy sprawdzić, jeżeli są, stan drenów, sond, cewników. W przypadku użycia worków Foleyaunikać podnoszenia wypełnionych zbiorników powyżej poziomu pęcherza moczowego. Wenflon nie stanowi problemu w procesie rehabilitacji"
      ],
      "cele": [],
      "program": [
        ": Rehabilitacja przedoperacyjna: Ćwiczenia oddechowe, Nauka ćwiczeń efektywnego kaszlu, Nauka stabilizacji okolicy przyszłej rany operacyjnej, Nauka ćwiczeń przeciwzakrzepowych, Ćwiczenia ogólousprawniające i kondycyjne Rehabilitacja pooperacyjna: Ćwiczenia oddechowe, Ćwiczenia efektywnego kaszlu, Stabilizacji rany podczas kaszlu, Ćwiczenia przeciwzakrzepowe, Pierwsza doba pooperacyjna: Psychoterapia, Ćwiczenia oddechowe -odpowiednim torem do rodzaju operacji, Ćwiczenia efektywnego kaszlu, Stabilizacja rany pooperacyjnej, Zabiegi wspomagające efektywny kaszel, Ćwiczenia przeciwzakrzepowe, Ćwiczenia ogólnousprawniające, Pionizacja, Spacer, Oklepywanie klatki piersiowej -po obu stronach w części bocznej i tylnej, masaż wibracyjny o dużej amplitudzie drgań przez 2,5-3min, Inhalacje -15 min, leki rozszerzające oskrzela, oddechy głębokie, wolne, 5-6 oddechów/min, przerwa 3-5s na szycie wydechu, Nawilżanie, Specjalne techniki oddychania Kolejne doby pooperacyjne: Rozszerzyć zakres i intensywność ćwiczeń ogólnokondycyjnych, Zwiększyć dystansspacerów, Wprowadzić -skręty, skłony boczne, skrętoskłony, Dbałość o bliznę-przesuwanie, masowanie, pielęgnacja"
      ]
    },
    "star": [
      ": Rehabilitacja przedoperacyjna: Ćwiczenia oddechowe, Nauka ćwiczeń efektywnego kaszlu, Nauka stabilizacji okolicy przyszłej rany operacyjnej, Nauka ćwiczeń przeciwzakrze",
      "u i Podstawowe dane personalne Aktualne dolegliwości Choroby współistniejące i przebyte Zażywane leki Używki Zawód, aktywność zawodowa Czas pojawienia się i rodzaj objawó",
      "Przed przystąpieniem do ćwiczeń należy sprawdzić, jeżeli są, stan drenów, sond, cewników. W przypadku użycia worków Foleyaunikać podnoszenia wypełnionych zbiorników powyż"
    ]
  },
  {
    "id": 71,
    "section": "chirurgia",
    "title": "pacjenta z przykurczem Dupuytrena leczonym operacyjnie",
    "add": {
      "wywiad": [
        "u i badania Podstawowe dane personalne Aktualne dolegliwości Choroby współistniejące i przebyte Ręka dominująca Zażywane leki Używki Zawód, aktywność zawodowa Czas pojawienia się i rodzaj objawów, nasilenie objawów Czas zdarzenia Dynamika narastania dolegliwości Dolegliwości bólowe"
      ],
      "ocena": [],
      "badanie": [
        "W badaniu fizykalnym można wyczuć pasma rozcięgna dłoniowego, a także przeprowadzić tzw. \"test stołu\", zwany w piśmiennictwie angielskim jako \"Houston Table Top Test\". We wczesnych stadiach przykurczu pomocne może być badanie ultrasonograficzne, pozwalające na uwidocznienie wrzecionowatych, ubogoechogenicznych (rzadziej izoechogenicznych) guzkowo uformowanych pogrubień struktur rozcięgna dłoniowego."
      ],
      "cele": [],
      "program": [
        ": Rehabilitacja zginaczy i prostowników. Fizykoterapia: ultradźwięki, fala uderzeniowa, laseroterapia) Terapia manualna, Terapia ręki"
      ]
    },
    "star": [
      "W badaniu fizykalnym można wyczuć pasma rozcięgna dłoniowego, a także przeprowadzić tzw. \"test stołu\", zwany w piśmiennictwie angielskim jako \"Houston Table Top Test\". We",
      "u i badania Podstawowe dane personalne Aktualne dolegliwości Choroby współistniejące i przebyte Ręka dominująca Zażywane leki Używki Zawód, aktywność zawodowa Czas pojawi",
      ": Rehabilitacja zginaczy i prostowników. Fizykoterapia: ultradźwięki, fala uderzeniowa, laseroterapia) Terapia manualna, Terapia ręki"
    ]
  },
  {
    "id": 72,
    "section": "chirurgia",
    "title": "pacjenta z zespołem cieśni nadgarstka leczonym operacyjnie",
    "add": {
      "wywiad": [
        "u i badania Podstawowe dane personalne Aktualne dolegliwości Choroby współistniejące i przebyte Ręka dominująca Zażywane leki Używki Zawód, aktywność zawodowa Czas pojawienia się i rodzaj objawów, nasilenie objawów Czas zdarzenia Dynamika narastania dolegliwości Dolegliwości bólowe"
      ],
      "ocena": [],
      "badanie": [
        "Podstawą diagnostyki jest poprawne badanie poprzez specjalistę® chirurgii ręki i ortopedę Badania dodatkowe: badanie przewodnictwa nerwowego nerwu pośrodkowego - EMG, badania ultrasonograficzne, Test Phalena Test butelki Luthy'ego Objaw cyrkla Test uciskowy"
      ],
      "cele": [],
      "program": [
        "Leczenie operacyjne: - przecięcie troczka zginaczy, Fizjoterapia: neuromobilizacje, Kinesiologytapineg, metody neurofizjologiczne, PIR, ćwiczenia stabilizacyjne, terapia ręki, laseroterapia, ciepłolecznictwo, kąpiele wirowe, ultradźwięki, masaż funkcyjny,"
      ]
    },
    "star": [
      "EMG nerwu pośrodkowego",
      "Test Phalena, test butelki Luthyego, objaw cyrkla",
      "Przecięcie troczka zginaczy"
    ]
  }
] satisfies Array<{ id: number; section: SectionId; title: string; add: Block; star: string[] }>;

function blockFrom(partial: Partial<Block>): Block {
  return { ...emptyBlock, ...partial };
}

function templateItems(id: string): string[] {
  return examTemplates.find((template) => template.id === id)?.items ?? [];
}

function baseFor(id: number): Block {
  if (id >= 22 && id <= 32) return blockFrom({ wywiad: [...interviewTemplates.PULMO], badanie: templateItems("badanie-pulmo"), program: templateItems("program-pulmo") });
  if (id >= 33 && id <= 42) return blockFrom({ wywiad: [...interviewTemplates.KARDIO], program: templateItems("program-kardio") });
  if (id >= 14 && id <= 21) return blockFrom({ wywiad: [...interviewTemplates.ORTHO], ocena: [interviewTemplates.ORTHO[3]] });
  if (id === 67) return blockFrom({ wywiad: [...interviewTemplates.ORTHO], ocena: [interviewTemplates.ORTHO[3]] });
  if (id >= 50 && id <= 66) return blockFrom({ wywiad: [...interviewTemplates.NEURO], program: [50, 57, 58].includes(id) ? templateItems("program-neuro-centralny") : [] });
  if ([59, 60, 61, 71, 72].includes(id)) return blockFrom({ wywiad: [...interviewTemplates.REKA], program: id <= 61 ? templateItems("program-nerw") : [] });
  if (id >= 43 && id <= 47) return blockFrom({ program: templateItems("program-reuma") });
  if (id <= 13) return blockFrom({ wywiad: [...interviewTemplates.PEDIATRYCZNY] });
  return blockFrom({});
}

export const questions: Question[] = sourceQuestions.map((question) => ({
  id: question.id,
  section: question.section,
  title: question.title,
  base: baseFor(question.id),
  add: question.add,
  star: question.star
}));

export const questionsBySection = sections.map((section) => ({
  section,
  questions: questions.filter((question) => question.section === section.id)
}));

export function getSection(id: SectionId): SectionInfo {
  return sections.find((section) => section.id === id) ?? sections[0];
}
