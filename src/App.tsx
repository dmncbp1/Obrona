import { useMemo, useState } from "react";
import { QUESTIONS } from "./data/questions";
import { SECTIONS } from "./data/sections";
import { useProgress } from "./storage";
import { MetodaView } from "./components/MetodaView";
import { SzablonyView } from "./components/SzablonyView";
import { PytaniaView } from "./components/PytaniaView";
import { FiszkiView } from "./components/FiszkiView";

type Tab = "metoda" | "szablony" | "pytania" | "fiszki";

const TABS: { id: Tab; label: string }[] = [
  { id: "metoda", label: "Metoda" },
  { id: "szablony", label: "Szablony" },
  { id: "pytania", label: "Pytania" },
  { id: "fiszki", label: "Fiszki" },
];

export default function App() {
  const [tab, setTab] = useState<Tab>("metoda");
  const { getStatus, setStatus, reset } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);

  const knownCount = useMemo(
    () => QUESTIONS.filter((q) => getStatus(q.id) === "umiem").length,
    [getStatus],
  );

  const perSection = useMemo(
    () =>
      SECTIONS.map((s) => {
        const qs = QUESTIONS.filter((q) => q.section === s.id);
        const known = qs.filter((q) => getStatus(q.id) === "umiem").length;
        return { section: s, known, total: qs.length };
      }),
    [getStatus],
  );

  return (
    <div className="min-h-full pb-24 sm:pb-8">
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-ink-950/90 backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h1 className="text-sm font-semibold text-neutral-100">
                Obrona fizjo
              </h1>
              <p className="label-tech text-[10px] text-neutral-500">
                Egzamin dyplomowy, PUM Szczecin
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-emerald-400">
                Umiem {knownCount} / {QUESTIONS.length}
              </div>
              <button
                type="button"
                onClick={() => setConfirmReset(true)}
                className="label-tech text-[10px] text-neutral-600 hover:text-neutral-400"
              >
                Reset postępu
              </button>
            </div>
          </div>
          <nav className="mt-3 hidden gap-1 sm:flex">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={[
                  "label-tech rounded-full px-3 py-1.5 text-xs transition-colors",
                  tab === t.id
                    ? "bg-emerald-400/15 text-emerald-300"
                    : "text-neutral-400 hover:text-neutral-200",
                ].join(" ")}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6">
        {tab === "metoda" && (
          <>
            <MetodaView />
            <section className="mx-auto mt-8 max-w-3xl">
              <h3 className="mb-3 text-sm font-semibold text-neutral-200">Postęp per dział</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {perSection.map(({ section, known, total }) => (
                  <div
                    key={section.id}
                    className="rounded-card border border-neutral-800 bg-neutral-900/40 p-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-sm text-neutral-200">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: section.color }}
                        />
                        {section.short}
                      </span>
                      <span className="label-tech text-[10px] text-neutral-500">
                        {known}/{total}
                      </span>
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-neutral-800">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${total > 0 ? (known / total) * 100 : 0}%`,
                          backgroundColor: section.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
        {tab === "szablony" && <SzablonyView />}
        {tab === "pytania" && <PytaniaView getStatus={getStatus} setStatus={setStatus} />}
        {tab === "fiszki" && <FiszkiView getStatus={getStatus} setStatus={setStatus} />}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-10 border-t border-neutral-800 bg-ink-950/95 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-3xl">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={[
                "label-tech flex-1 py-3 text-[10px] transition-colors",
                tab === t.id ? "text-emerald-300" : "text-neutral-500",
              ].join(" ")}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      {confirmReset && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-sm rounded-card border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="text-sm font-semibold text-neutral-100">Zresetować postęp?</h3>
            <p className="mt-1 text-sm text-neutral-400">
              Usuniesz oznaczenia umiem i do powtórki dla wszystkich pytań. Tej operacji nie da się cofnąć.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="flex-1 rounded-card border border-neutral-800 px-4 py-2.5 text-sm text-neutral-300 hover:border-neutral-700"
              >
                Anuluj
              </button>
              <button
                type="button"
                onClick={() => {
                  reset();
                  setConfirmReset(false);
                }}
                className="flex-1 rounded-card border border-red-500/50 bg-red-500/20 px-4 py-2.5 text-sm font-semibold text-red-200 hover:bg-red-500/30"
              >
                Resetuj
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
