import { useState } from "react";
import { TEMPLATE_CATALOG } from "../data/templates";
import type { TemplateInfo } from "../data/templates";

const GROUPS: TemplateInfo["group"][] = ["Wywiad", "Badanie", "Cele", "Program"];

function TemplateCard({ tpl }: { tpl: TemplateInfo }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-card border border-neutral-800 bg-neutral-900/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 p-4 text-left"
      >
        <div>
          <div className="text-sm font-semibold text-neutral-100">{tpl.title}</div>
          <div className="label-tech mt-1 text-[10px] text-neutral-500">{tpl.scope}</div>
        </div>
        <span className="shrink-0 text-neutral-500">{open ? "–" : "+"}</span>
      </button>
      {open && (
        <ul className="space-y-2 border-t border-neutral-800 p-4">
          {tpl.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SzablonyView() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <section>
        <h2 className="text-xl font-semibold text-neutral-100">Szablony</h2>
        <p className="mt-1 text-sm text-neutral-400">
          Reużywalne bloki wywiadu, badania, celów i programu. Przy każdym szablonie widać, których pytań dotyczy.
        </p>
      </section>

      {GROUPS.map((group) => {
        const items = TEMPLATE_CATALOG.filter((t) => t.group === group);
        if (items.length === 0) return null;
        return (
          <section key={group} className="space-y-3">
            <h3 className="label-tech text-xs text-emerald-400">{group}</h3>
            <div className="space-y-2">
              {items.map((tpl) => (
                <TemplateCard key={tpl.id} tpl={tpl} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
