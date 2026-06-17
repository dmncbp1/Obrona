import type { Block, Question, SectionInfo } from "../data/questions";

const stepLabels: Array<{ key: keyof Block; label: string }> = [
  { key: "wywiad", label: "Wywiad" },
  { key: "ocena", label: "Ocena głównych dolegliwości" },
  { key: "badanie", label: "Badanie podmiotowe i przedmiotowe" },
  { key: "cele", label: "Cele" },
  { key: "program", label: "Program rehabilitacji" }
];

function ListBlock({
  items,
  badge,
  color,
  muted = false
}: {
  items: string[];
  badge: string;
  color: string;
  muted?: boolean;
}) {
  if (!items.length) {
    return null;
  }

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          className={`rounded-2xl border px-3 py-2 text-sm leading-relaxed ${
            muted
              ? "border-neutral-800/80 bg-neutral-950/50 text-neutral-300"
              : "border-neutral-700/70 bg-neutral-900/70 text-neutral-100"
          }`}
          key={`${badge}-${index}-${item.slice(0, 18)}`}
        >
          <span
            className="mb-1 mr-2 inline-flex rounded-full border px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.18em]"
            style={{ borderColor: `${color}66`, color }}
          >
            {badge}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function AnswerView({
  question,
  section
}: {
  question: Question;
  section: SectionInfo;
}) {
  return (
    <div className="space-y-5">
      <div
        className="rounded-[20px] border bg-neutral-950/70 p-4"
        style={{ borderColor: `${section.color}55` }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: section.color }}
          />
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-400">
            Pytanie {question.id} · {section.name}
          </p>
        </div>
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Scharakteryzuj wizytę fizjoterapeutyczną u {question.title}
        </h2>
      </div>

      {question.star?.length ? (
        <section
          className="rounded-[20px] border p-4"
          style={{
            borderColor: `${section.color}88`,
            background: `linear-gradient(135deg, ${section.soft}, rgba(10, 10, 10, 0.82))`
          }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-neutral-300">
            ★ wyróżniki
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {question.star.map((item, index) => (
              <div
                className="rounded-2xl border bg-black/30 p-3 text-sm font-medium text-white"
                key={`${question.id}-star-${index}`}
                style={{ borderColor: `${section.color}55` }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="grid gap-4">
        {stepLabels.map(({ key, label }) => {
          const baseItems = question.base[key] ?? [];
          const addItems = question.add?.[key] ?? [];

          return (
            <section
              className="rounded-[20px] border border-neutral-800/90 bg-neutral-950/70 p-4"
              key={key}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-white">{label}</h3>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500">
                  {baseItems.length + addItems.length} pkt
                </span>
              </div>
              <div className="space-y-3">
                <ListBlock
                  badge="szablon"
                  color={section.color}
                  items={baseItems}
                  muted
                />
                <ListBlock
                  badge="dodatek"
                  color={section.color}
                  items={addItems}
                />
                {!baseItems.length && !addItems.length ? (
                  <p className="rounded-2xl border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm text-neutral-500">
                    W kluczu PDF ten krok nie ma osobnej listy punktów.
                  </p>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
