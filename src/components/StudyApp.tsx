import { useEffect, useMemo, useState } from "react";
import { AnswerView } from "./AnswerView";
import {
  examTemplates,
  getSection,
  questions,
  questionsBySection,
  sections,
  skeletonSteps,
  type Question,
  type SectionId
} from "../data/questions";

type TabId = "metoda" | "szablony" | "pytania" | "fiszki";
type CardStatus = "new" | "known" | "repeat";
type ProgressState = Record<number, { status: CardStatus; lastSeen?: string }>;

const storageKey = "obrona-fizjo-progress";
const tabs: Array<{ id: TabId; label: string }> = [
  { id: "metoda", label: "Metoda" },
  { id: "szablony", label: "Szablony" },
  { id: "pytania", label: "Pytania" },
  { id: "fiszki", label: "Fiszki" }
];

function safeLoadProgress(): ProgressState {
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as ProgressState) : {};
  } catch {
    return {};
  }
}

function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => safeLoadProgress());

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      // Fallbackiem pozostaje stan React w pamięci bieżącej sesji.
    }
  }, [progress]);

  const mark = (id: number, status: CardStatus) => {
    setProgress((current) => ({
      ...current,
      [id]: { status, lastSeen: new Date().toISOString() }
    }));
  };

  const reset = () => {
    if (window.confirm("Na pewno zresetować cały postęp nauki?")) {
      setProgress({});
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // Stan w pamięci i tak został wyczyszczony.
      }
    }
  };

  return { progress, mark, reset };
}

function classNames(...items: Array<string | false | null | undefined>) {
  return items.filter(Boolean).join(" ");
}

function ProgressPill({ progress }: { progress: ProgressState }) {
  const known = questions.filter((question) => progress[question.id]?.status === "known").length;
  const repeat = questions.filter((question) => progress[question.id]?.status === "repeat").length;
  const percent = Math.round((known / questions.length) * 100);

  return (
    <div className="rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-white">Umiem {known} / {questions.length}</span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
          {percent}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-neutral-800">
        <div
          className="h-full rounded-full bg-emerald-400"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-neutral-500">Do powtórki: {repeat}</p>
    </div>
  );
}

function SkeletonBar() {
  return (
    <div className="sticky top-0 z-30 border-b border-neutral-800/80 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3">
        {skeletonSteps.map((step, index) => (
          <div className="flex shrink-0 items-center gap-2" key={step}>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-emerald-200">
              {step}
            </span>
            {index < skeletonSteps.length - 1 ? (
              <span className="text-neutral-700">/</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MethodTab({ progress }: { progress: ProgressState }) {
  const dayPlan = [
    "Dzień 1: zrozum szkielet: Wywiad, Ocena, Badanie, Cele, Program.",
    "Dzień 2: pulmonologia 22-32, bo jeden szablon pokrywa 11 pytań.",
    "Dzień 3: kardiologia i kardiochirurgia 33-42, szczególnie czasy pionizacji.",
    "Dzień 4: neurologia centralna 50, 57, 58 oraz skale Repty, Rankin, Barthel, Frenchay.",
    "Dzień 5: neurologia pozostała 51-56 i 62-66.",
    "Dzień 6: pediatria 1-13, skupienie na wywiadzie okołoporodowym i rozwojowym.",
    "Dzień 7: ortopedia 14-21 oraz onkologia 67, wspólny schemat OPQRST.",
    "Dzień 8: reumatologia 43-47, ginekologia 48-49 i sport 68-69.",
    "Dzień 9: nerwy ręki 59-61 i chirurgia 70-72, krótkie wyróżniki.",
    "Dzień 10: tylko fiszki z pozycji Powtórz i szybkie przejście przez wyróżniki."
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-5">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-emerald-300">
          model mentalny
        </p>
        <h2 className="text-2xl font-semibold text-white">
          To nie jest 72 osobnych odpowiedzi
        </h2>
        <div className="mt-5 grid gap-3">
          {[
            ["Jeden szkielet", "Każdą odpowiedź mówisz tym samym torem: wywiad, ocena, badanie, cele, program."],
            ["Kilka szablonów", "Pulmo, kardio, neuro, ortho i ręka przykrywają duże bloki pytań."],
            ["Tylko wyróżniki", "Na końcu zapamiętujesz 2-3 rzeczy, po których egzaminator odróżnia jednostkę chorobową."]
          ].map(([title, body]) => (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4" key={title}>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-5">
        <ProgressPill progress={progress} />
        <section className="rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-5">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-neutral-400">
            plan 10 dni
          </p>
          <ol className="space-y-2">
            {dayPlan.map((item) => (
              <li
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300"
                key={item}
              >
                {item}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

function TemplatesTab() {
  const [open, setOpen] = useState<string>(examTemplates[0]?.id ?? "");

  return (
    <div className="grid gap-4">
      {examTemplates.map((template) => {
        const isOpen = open === template.id;
        return (
          <section
            className="overflow-hidden rounded-[20px] border border-neutral-800 bg-neutral-950/70"
            key={template.id}
          >
            <button
              className="flex w-full items-center justify-between gap-4 p-4 text-left"
              onClick={() => setOpen(isOpen ? "" : template.id)}
              type="button"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-300">
                  {template.kind} · pytania {template.range}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">{template.title}</h2>
              </div>
              <span className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300">
                {isOpen ? "Zwiń" : "Rozwiń"}
              </span>
            </button>
            {isOpen ? (
              <ul className="space-y-2 border-t border-neutral-800 p-4">
                {template.items.map((item) => (
                  <li
                    className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm leading-relaxed text-neutral-200"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}

function QuestionsTab({
  progress,
  onMark
}: {
  progress: ProgressState;
  onMark: (id: number, status: CardStatus) => void;
}) {
  const [filter, setFilter] = useState<SectionId | "all">("all");
  const [selectedId, setSelectedId] = useState(questions[0].id);
  const selected = questions.find((question) => question.id === selectedId) ?? questions[0];
  const selectedSection = getSection(selected.section);
  const visible = filter === "all" ? questionsBySection : questionsBySection.filter((group) => group.section.id === filter);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
      <aside className="rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-auto">
        <label className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-400" htmlFor="section-filter">
          filtr działu
        </label>
        <select
          className="mt-2 w-full rounded-2xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white"
          id="section-filter"
          onChange={(event) => setFilter(event.target.value as SectionId | "all")}
          value={filter}
        >
          <option value="all">Wszystkie działy</option>
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.name} ({section.range})
            </option>
          ))}
        </select>

        <div className="mt-4 space-y-4">
          {visible.map(({ section, questions: groupQuestions }) => (
            <section key={section.id}>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: section.color }} />
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-400">
                  {section.name}
                </h3>
              </div>
              <div className="space-y-2">
                {groupQuestions.map((question) => {
                  const status = progress[question.id]?.status ?? "new";
                  return (
                    <button
                      className={classNames(
                        "w-full rounded-2xl border px-3 py-2 text-left text-sm transition",
                        selectedId === question.id
                          ? "border-emerald-400 bg-emerald-400/10 text-white"
                          : "border-neutral-800 bg-neutral-900/50 text-neutral-300 hover:border-neutral-600"
                      )}
                      key={question.id}
                      onClick={() => setSelectedId(question.id)}
                      type="button"
                    >
                      <span className="font-mono text-xs text-neutral-500">#{question.id}</span>{" "}
                      {question.title}
                      <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-neutral-500">
                        {status === "known" ? "umiem" : status === "repeat" ? "powtórz" : "nieruszone"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </aside>

      <main className="space-y-4">
        <div className="flex flex-wrap gap-2 rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-3">
          <button
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-black"
            onClick={() => onMark(selected.id, "known")}
            type="button"
          >
            Umiem
          </button>
          <button
            className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold text-white"
            onClick={() => onMark(selected.id, "repeat")}
            type="button"
          >
            Powtórz
          </button>
        </div>
        <AnswerView question={selected} section={selectedSection} />
      </main>
    </div>
  );
}

function weightedDeck(section: SectionId | "all", progress: ProgressState): Question[] {
  const base = section === "all" ? questions : questions.filter((question) => question.section === section);
  return base.flatMap((question) => {
    const status = progress[question.id]?.status ?? "new";
    const weight = status === "repeat" ? 4 : status === "new" ? 2 : 1;
    return Array.from({ length: weight }, () => question);
  });
}

function FlashcardsTab({
  progress,
  onMark,
  onReset
}: {
  progress: ProgressState;
  onMark: (id: number, status: CardStatus) => void;
  onReset: () => void;
}) {
  const [deckSection, setDeckSection] = useState<SectionId | "all">("all");
  const [currentId, setCurrentId] = useState(questions[0].id);
  const [revealed, setRevealed] = useState(false);
  const current = questions.find((question) => question.id === currentId) ?? questions[0];
  const section = getSection(current.section);

  const drawNext = (nextProgress = progress) => {
    const deck = weightedDeck(deckSection, nextProgress);
    const pick = deck[Math.floor(Math.random() * deck.length)] ?? questions[0];
    setCurrentId(pick.id);
    setRevealed(false);
  };

  const rate = (status: CardStatus) => {
    onMark(current.id, status);
    const nextProgress = {
      ...progress,
      [current.id]: { status, lastSeen: new Date().toISOString() }
    };
    drawNext(nextProgress);
  };

  useEffect(() => {
    drawNext();
  }, [deckSection]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <aside className="space-y-4">
        <ProgressPill progress={progress} />
        <section className="rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-4">
          <label className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-400" htmlFor="deck">
            talia
          </label>
          <select
            className="mt-2 w-full rounded-2xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white"
            id="deck"
            onChange={(event) => setDeckSection(event.target.value as SectionId | "all")}
            value={deckSection}
          >
            <option value="all">Wszystkie pytania</option>
            {sections.map((sectionItem) => (
              <option key={sectionItem.id} value={sectionItem.id}>
                {sectionItem.name}
              </option>
            ))}
          </select>
          <button
            className="mt-3 w-full rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold text-white"
            onClick={() => drawNext()}
            type="button"
          >
            Losuj następną
          </button>
          <button
            className="mt-3 w-full rounded-full border border-red-900/70 px-4 py-2 text-sm text-red-200"
            onClick={onReset}
            type="button"
          >
            Reset postępu
          </button>
        </section>
        <section className="rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-4">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-neutral-400">
            postęp per dział
          </p>
          <div className="space-y-2">
            {sections.map((sectionItem) => {
              const group = questions.filter((question) => question.section === sectionItem.id);
              const known = group.filter((question) => progress[question.id]?.status === "known").length;
              return (
                <div key={sectionItem.id}>
                  <div className="mb-1 flex justify-between gap-2 text-xs text-neutral-400">
                    <span>{sectionItem.name}</span>
                    <span>
                      {known}/{group.length}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-neutral-800">
                    <div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: sectionItem.color,
                        width: `${(known / group.length) * 100}%`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </aside>

      <main
        className="rounded-[20px] border p-5"
        style={{
          borderColor: `${section.color}66`,
          background: `linear-gradient(145deg, ${section.soft}, rgba(10, 10, 10, 0.88))`
        }}
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.2em]"
            style={{ backgroundColor: section.soft, color: section.color }}
          >
            pytanie {current.id}
          </span>
          <span className="rounded-full border border-neutral-700 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            {section.name}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-white">
          Scharakteryzuj wizytę fizjoterapeutyczną u {current.title}
        </h2>
        <p className="mt-3 text-neutral-300">
          Powiedz na głos całą strukturę: wywiad, ocena dolegliwości, badanie, cele, program.
          Dopiero potem odsłoń odpowiedź.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {!revealed ? (
            <button
              className="rounded-full bg-emerald-400 px-5 py-3 font-semibold text-black"
              onClick={() => setRevealed(true)}
              type="button"
            >
              Odsłoń odpowiedź
            </button>
          ) : (
            <>
              <button
                className="rounded-full bg-emerald-400 px-5 py-3 font-semibold text-black"
                onClick={() => rate("known")}
                type="button"
              >
                Umiem
              </button>
              <button
                className="rounded-full border border-neutral-600 px-5 py-3 font-semibold text-white"
                onClick={() => rate("repeat")}
                type="button"
              >
                Powtórz
              </button>
            </>
          )}
        </div>

        {revealed ? (
          <div className="mt-6">
            <AnswerView question={current} section={section} />
          </div>
        ) : (
          <div className="mt-6 rounded-[20px] border border-neutral-800 bg-black/30 p-5 text-sm text-neutral-400">
            Tryb recall: odpowiedź jest ukryta, żeby wymusić aktywne przypominanie.
          </div>
        )}
      </main>
    </div>
  );
}

export function StudyApp() {
  const [activeTab, setActiveTab] = useState<TabId>("metoda");
  const { progress, mark, reset } = useProgress();
  const known = useMemo(
    () => questions.filter((question) => progress[question.id]?.status === "known").length,
    [progress]
  );

  return (
    <div className="min-h-screen text-neutral-100">
      <SkeletonBar />
      <header className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:pt-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-300">
          PUM Szczecin · praktyczna fizjoterapia
        </p>
        <div className="mt-3 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Jeden szkielet, kilka szablonów, krótkie wyróżniki.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
              Aplikacja rozkłada 72 pytania z klucza PDF na działy, szablony bazowe, dodatki i fiszki recall.
            </p>
          </div>
          <div className="rounded-[20px] border border-emerald-400/30 bg-emerald-400/10 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-200">
              postęp
            </p>
            <p className="mt-1 text-3xl font-semibold text-white">{known}/72</p>
          </div>
        </div>
      </header>

      <nav className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-2 rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-2 sm:grid-cols-4">
          {tabs.map((tab) => (
            <button
              className={classNames(
                "rounded-2xl px-4 py-3 text-sm font-semibold transition",
                activeTab === tab.id
                  ? "bg-emerald-400 text-black"
                  : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
              )}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {activeTab === "metoda" ? <MethodTab progress={progress} /> : null}
        {activeTab === "szablony" ? <TemplatesTab /> : null}
        {activeTab === "pytania" ? <QuestionsTab onMark={mark} progress={progress} /> : null}
        {activeTab === "fiszki" ? (
          <FlashcardsTab onMark={mark} onReset={reset} progress={progress} />
        ) : null}
      </main>
    </div>
  );
}
