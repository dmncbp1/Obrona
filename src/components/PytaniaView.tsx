import { useMemo, useState } from "react";
import { QUESTIONS } from "../data/questions";
import { SECTIONS, SECTION_MAP } from "../data/sections";
import type { SectionId } from "../data/types";
import { AnswerView } from "./AnswerView";
import { SkeletonBar } from "./SkeletonBar";
import type { QuestionStatus } from "../storage";

interface PytaniaViewProps {
  getStatus: (id: number) => QuestionStatus;
  setStatus: (id: number, status: QuestionStatus) => void;
}

function StatusDot({ status }: { status: QuestionStatus }) {
  const map: Record<QuestionStatus, string> = {
    nieruszone: "#404040",
    umiem: "#34d399",
    powtorka: "#fbbf24",
  };
  return (
    <span
      className="inline-block h-2 w-2 rounded-full"
      style={{ backgroundColor: map[status] }}
      title={status}
    />
  );
}

export function PytaniaView({ getStatus, setStatus }: PytaniaViewProps) {
  const [filter, setFilter] = useState<SectionId | "all">("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? QUESTIONS : QUESTIONS.filter((q) => q.section === filter)),
    [filter],
  );

  const selected = useMemo(
    () => QUESTIONS.find((q) => q.id === selectedId) ?? null,
    [selectedId],
  );

  if (selected) {
    const section = SECTION_MAP[selected.section];
    const status = getStatus(selected.id);
    return (
      <div className="mx-auto max-w-3xl space-y-5">
        <button
          type="button"
          onClick={() => setSelectedId(null)}
          className="label-tech text-xs text-neutral-400 hover:text-neutral-200"
        >
          {"<"} Wróć do listy
        </button>

        <div className="rounded-card border border-neutral-800 bg-neutral-900/40 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="label-tech text-xs text-neutral-500">Pytanie {selected.id}</span>
            <span
              className="label-tech flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px]"
              style={{ borderColor: `${section.color}55`, color: section.color }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: section.color }} />
              {section.short}
            </span>
          </div>
          <h2 className="mt-3 text-lg font-semibold leading-snug text-neutral-100">
            Scharakteryzuj wizytę fizjoterapeutyczną, {selected.title}.
          </h2>
          <div className="mt-4">
            <SkeletonBar />
          </div>
        </div>

        <AnswerView question={selected} color={section.color} />

        <div className="sticky bottom-20 flex gap-2 sm:bottom-4">
          <button
            type="button"
            onClick={() => setStatus(selected.id, "umiem")}
            className={[
              "flex-1 rounded-card border px-4 py-3 text-sm font-semibold transition-colors",
              status === "umiem"
                ? "border-emerald-400/60 bg-emerald-400/20 text-emerald-200"
                : "border-neutral-800 bg-neutral-900/80 text-neutral-300 hover:border-emerald-400/40",
            ].join(" ")}
          >
            Umiem
          </button>
          <button
            type="button"
            onClick={() => setStatus(selected.id, "powtorka")}
            className={[
              "flex-1 rounded-card border px-4 py-3 text-sm font-semibold transition-colors",
              status === "powtorka"
                ? "border-amber-400/60 bg-amber-400/20 text-amber-200"
                : "border-neutral-800 bg-neutral-900/80 text-neutral-300 hover:border-amber-400/40",
            ].join(" ")}
          >
            Powtórz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <section>
        <h2 className="text-xl font-semibold text-neutral-100">Pytania</h2>
        <p className="mt-1 text-sm text-neutral-400">
          Wszystkie 72 pytania pogrupowane po działach. Wejdź w pytanie, aby zobaczyć odpowiedź w pięciu krokach szkieletu.
        </p>
      </section>

      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={[
            "label-tech rounded-full border px-3 py-1 text-[10px] transition-colors",
            filter === "all"
              ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-300"
              : "border-neutral-800 text-neutral-400 hover:text-neutral-200",
          ].join(" ")}
        >
          Wszystkie
        </button>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setFilter(s.id)}
            className="label-tech flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] transition-colors"
            style={
              filter === s.id
                ? { borderColor: `${s.color}99`, color: s.color, backgroundColor: `${s.color}14` }
                : { borderColor: "#262626", color: "#a3a3a3" }
            }
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color }} />
            {s.short}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((q) => {
          const section = SECTION_MAP[q.section];
          const status = getStatus(q.id);
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setSelectedId(q.id)}
              className="flex w-full items-start gap-3 rounded-card border border-neutral-800 bg-neutral-900/40 p-4 text-left transition-colors hover:border-neutral-700"
            >
              <span
                className="label-tech mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs"
                style={{ borderColor: `${section.color}55`, color: section.color }}
              >
                {q.id}
              </span>
              <span className="flex-1">
                <span className="block text-sm text-neutral-200">{q.title}</span>
                <span className="label-tech mt-1 block text-[10px] text-neutral-500">
                  {section.short}
                </span>
              </span>
              <StatusDot status={status} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
