import { SKELETON_STEPS } from "../data/types";

interface SkeletonBarProps {
  activeKey?: string;
  compact?: boolean;
}

// Stały element sygnaturowy: pięć kroków szkieletu odpowiedzi.
export function SkeletonBar({ activeKey, compact }: SkeletonBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {SKELETON_STEPS.map((step, index) => {
        const active = activeKey === step.key;
        return (
          <div key={step.key} className="flex items-center gap-1.5 sm:gap-2">
            <span
              className={[
                "label-tech rounded-full border px-2.5 py-1 text-[10px] sm:text-xs transition-colors",
                active
                  ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-300"
                  : "border-neutral-800 bg-neutral-900/60 text-neutral-400",
              ].join(" ")}
            >
              <span className="mr-1 text-neutral-600">{index + 1}</span>
              {compact ? step.short : step.short}
            </span>
            {index < SKELETON_STEPS.length - 1 && (
              <span className="text-neutral-700" aria-hidden>
                {">"}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
