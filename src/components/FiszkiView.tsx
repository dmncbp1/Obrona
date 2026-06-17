import { useMemo, useState } from "react";
import { QUESTIONS } from "../data/questions";
import { SECTIONS, SECTION_MAP } from "../data/sections";
import type { SectionId } from "../data/types";
import { AnswerView } from "./AnswerView";
import { SkeletonBar } from "./SkeletonBar";
import type { QuestionStatus } from "../storage";

interface FiszkiViewProps {
  getStatus: (id: number) => QuestionStatus;
  setStatus: (id: number, status: QuestionStatus) => void;
}

type Deck = SectionId | "all";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function FiszkiView({ getStatus, setStatus }: FiszkiViewProps) {
  const [deck, setDeck] = useState<Deck | null>(null);
  const [queue, setQueue] = useState<number[]>([]);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [revealed, setRevealed] = useState(false);

  const deckIds = useMemo(() => {
    if (!deck) return [] as number[];
    return (deck === "all" ? QUESTIONS : QUESTIONS.filter((q) => q.section === deck)).map(
      (q) => q.id,
    );
  }, [deck]);

  function startDeck(d: Deck) {
    const ids = (d === "all" ? QUESTIONS : QUESTIONS.filter((q) => q.section === d)).map((q) => q.id);
    // Karty oznaczone wcześniej "powtórz" trafiają na początek talii.
    const ordered = shuffle(ids).sort((a, b) => {
      const wa = getStatus(a) === "powtorka" ? 0 : 1;
      const wb = getStatus(b) === "powtorka" ? 0 : 1;
      return wa - wb;
    });
    setDeck(d);
    setQueue(ordered);
    setKnown(new Set());
    setRevealed(false);
  }

  function handleKnow(id: number) {
    setStatus(id, "umiem");
    setKnown((prev) => new Set(prev).add(id));
    setQueue((prev) => prev.slice(1));
    setRevealed(false);
  }

  function handleRepeat(id: number) {
    setStatus(id, "powtorka");
    setQueue((prev) => {
      const rest = prev.slice(1);
      // Karta do powtórki wraca w tej samej sesji, kilka kart dalej.
      const pos = Math.min(3, rest.length);
      return [...rest.slice(0, pos), id, ...rest.slice(pos)];
    });
    setRevealed(false);
  }

  // Ekran wyboru talii.
  if (!deck) {
    return (
      <div className="mx-auto max-w-3xl space-y-5">
        <section>
          <h2 className="text-xl font-semibold text-neutral-100">Fiszki</h2>
          <p className="mt-1 text-sm text-neutral-400">
            Tryb aktywnego przypominania. Najpierw powiedz na głos całą strukturę, potem odsłoń odpowiedź i oceń się.
          </p>
        </section>

        <button
          type="button"
          onClick={() => startDeck("all")}
          className="flex w-full items-center justify-between rounded-card border border-emerald-400/40 bg-emerald-400/10 p-5 text-left transition-colors hover:border-emerald-400/70"
        >
          <span>
            <span className="block text-sm font-semibold text-emerald-200">Wszystkie pytania</span>
            <span className="label-tech mt-1 block text-[10px] text-emerald-300/70">72 karty</span>
          </span>
          <span className="text-emerald-300">{">"}</span>
        </button>

        <div className="grid gap-2 sm:grid-cols-2">
          {SECTIONS.map((s) => {
            const count = QUESTIONS.filter((q) => q.section === s.id).length;
            const knownCount = QUESTIONS.filter(
              (q) => q.section === s.id && getStatus(q.id) === "umiem",
            ).length;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => startDeck(s.id)}
                className="flex items-center justify-between gap-3 rounded-card border border-neutral-800 bg-neutral-900/40 p-4 text-left transition-colors hover:border-neutral-700"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-sm text-neutral-200">{s.short}</span>
                </span>
                <span className="label-tech text-[10px] text-neutral-500">
                  {knownCount}/{count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const currentId = queue[0];
  const current = currentId ? QUESTIONS.find((q) => q.id === currentId) ?? null : null;
  const section = deck === "all" ? null : SECTION_MAP[deck];
  const progress = deckIds.length > 0 ? Math.round((known.size / deckIds.length) * 100) : 0;

  // Ekran zakończenia sesji.
  if (!current) {
    return (
      <div className="mx-auto max-w-3xl space-y-5">
        <div className="rounded-card border border-emerald-400/40 bg-emerald-400/10 p-8 text-center">
          <div className="text-3xl">✓</div>
          <h2 className="mt-3 text-lg font-semibold text-emerald-200">Talia skończona</h2>
          <p className="mt-1 text-sm text-emerald-300/80">
            Oznaczyłeś jako umiem {known.size} z {deckIds.length} kart.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => startDeck(deck)}
            className="flex-1 rounded-card border border-neutral-800 bg-neutral-900/80 px-4 py-3 text-sm font-semibold text-neutral-200 hover:border-neutral-700"
          >
            Jeszcze raz
          </button>
          <button
            type="button"
            onClick={() => setDeck(null)}
            className="flex-1 rounded-card border border-neutral-800 bg-neutral-900/80 px-4 py-3 text-sm font-semibold text-neutral-200 hover:border-neutral-700"
          >
            Wybierz talię
          </button>
        </div>
      </div>
    );
  }

  const currentSection = SECTION_MAP[current.section];

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setDeck(null)}
          className="label-tech text-xs text-neutral-400 hover:text-neutral-200"
        >
          {"<"} Talie
        </button>
        <span className="label-tech text-[10px] text-neutral-500">
          {section ? section.short : "Wszystkie"}, umiem {known.size}/{deckIds.length}
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
        <div
          className="h-full rounded-full bg-emerald-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="rounded-card border border-neutral-800 bg-neutral-900/40 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="label-tech text-xs text-neutral-500">Pytanie {current.id}</span>
          <span
            className="label-tech flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px]"
            style={{ borderColor: `${currentSection.color}55`, color: currentSection.color }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: currentSection.color }} />
            {currentSection.short}
          </span>
        </div>
        <h2 className="mt-3 text-lg font-semibold leading-snug text-neutral-100">
          Scharakteryzuj wizytę fizjoterapeutyczną, {current.title}.
        </h2>
        <div className="mt-4">
          <SkeletonBar />
        </div>
        {!revealed && (
          <p className="mt-4 text-sm text-neutral-400">
            Powiedz na głos całą strukturę: wywiad, ocena dolegliwości, badanie, cele, program. Potem odsłoń odpowiedź.
          </p>
        )}
      </div>

      {revealed ? (
        <>
          <AnswerView question={current} color={currentSection.color} />
          <div className="sticky bottom-20 flex gap-2 sm:bottom-4">
            <button
              type="button"
              onClick={() => handleKnow(current.id)}
              className="flex-1 rounded-card border border-emerald-400/50 bg-emerald-400/20 px-4 py-3 text-sm font-semibold text-emerald-100 transition-colors hover:bg-emerald-400/30"
            >
              Umiem
            </button>
            <button
              type="button"
              onClick={() => handleRepeat(current.id)}
              className="flex-1 rounded-card border border-amber-400/50 bg-amber-400/20 px-4 py-3 text-sm font-semibold text-amber-100 transition-colors hover:bg-amber-400/30"
            >
              Powtórz
            </button>
          </div>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="w-full rounded-card border border-neutral-700 bg-neutral-900/80 px-4 py-4 text-sm font-semibold text-neutral-100 transition-colors hover:border-neutral-600"
        >
          Odsłoń odpowiedź
        </button>
      )}
    </div>
  );
}
