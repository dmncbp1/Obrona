import { useCallback, useEffect, useRef, useState } from "react";

export type QuestionStatus = "nieruszone" | "umiem" | "powtorka";

export interface ProgressEntry {
  status: QuestionStatus;
  lastReview?: string;
}

export interface ProgressState {
  [questionId: number]: ProgressEntry;
}

const STORAGE_KEY = "obrona-fizjo-progress";

// Bezpieczny dostęp do localStorage z fallbackiem do pamięci.
function readStorage(): ProgressState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ProgressState;
    if (parsed && typeof parsed === "object") return parsed;
    return {};
  } catch {
    return {};
  }
}

function writeStorage(state: ProgressState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage niedostępny, pozostajemy przy stanie w pamięci.
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => readStorage());
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      return;
    }
    writeStorage(progress);
  }, [progress]);

  const setStatus = useCallback((id: number, status: QuestionStatus) => {
    setProgress((prev) => ({
      ...prev,
      [id]: { status, lastReview: new Date().toISOString() },
    }));
  }, []);

  const reset = useCallback(() => {
    setProgress({});
    writeStorage({});
  }, []);

  const getStatus = useCallback(
    (id: number): QuestionStatus => progress[id]?.status ?? "nieruszone",
    [progress],
  );

  return { progress, setStatus, getStatus, reset };
}
