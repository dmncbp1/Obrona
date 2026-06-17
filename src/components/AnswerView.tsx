import type { Question, StepKey } from "../data/types";
import { SKELETON_STEPS } from "../data/types";

interface AnswerViewProps {
  question: Question;
  color: string;
}

function StarIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill={color} aria-hidden>
      <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
    </svg>
  );
}

function Badge({ kind }: { kind: "szablon" | "dodatek" }) {
  const styles =
    kind === "szablon"
      ? "border-neutral-700 bg-neutral-800/60 text-neutral-400"
      : "border-sky-500/30 bg-sky-500/10 text-sky-300";
  return (
    <span
      className={`label-tech shrink-0 rounded border px-1.5 py-0.5 text-[9px] leading-none ${styles}`}
    >
      {kind}
    </span>
  );
}

export function AnswerView({ question, color }: AnswerViewProps) {
  return (
    <div className="space-y-3">
      {question.star && question.star.length > 0 && (
        <div
          className="rounded-card border p-4"
          style={{ borderColor: `${color}66`, backgroundColor: `${color}14` }}
        >
          <div className="label-tech mb-2 flex items-center gap-1.5 text-xs" style={{ color }}>
            <StarIcon color={color} />
            Wyróżniki, na których łapie egzaminator
          </div>
          <ul className="space-y-1.5">
            {question.star.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-100">
                <span className="mt-1 shrink-0" style={{ color }}>
                  <StarIcon color={color} />
                </span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {SKELETON_STEPS.map((step, index) => {
        const key = step.key as StepKey;
        const baseItems = question.base[key] ?? [];
        const addItems = question.add?.[key] ?? [];
        const empty = baseItems.length === 0 && addItems.length === 0;
        return (
          <div
            key={step.key}
            className="rounded-card border border-neutral-800 bg-neutral-900/40 p-4"
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className="label-tech flex h-6 w-6 items-center justify-center rounded-full border text-xs"
                style={{ borderColor: `${color}55`, color }}
              >
                {index + 1}
              </span>
              <h4 className="text-sm font-semibold text-neutral-200">{step.label}</h4>
            </div>
            {empty ? (
              <p className="text-sm italic text-neutral-600">
                Nie wyróżniono osobno w kluczu.
              </p>
            ) : (
              <ul className="space-y-2">
                {baseItems.map((item, i) => (
                  <li key={`b-${i}`} className="flex items-start gap-2 text-sm text-neutral-300">
                    <Badge kind="szablon" />
                    <span>{item}</span>
                  </li>
                ))}
                {addItems.map((item, i) => (
                  <li key={`a-${i}`} className="flex items-start gap-2 text-sm text-neutral-100">
                    <Badge kind="dodatek" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
