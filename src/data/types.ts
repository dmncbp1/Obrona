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

export interface Section {
  id: SectionId;
  name: string;
  short: string;
  range: string;
  color: string;
}

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

export type StepKey = keyof Block;

export interface StepMeta {
  key: StepKey;
  label: string;
  short: string;
}

export const SKELETON_STEPS: StepMeta[] = [
  { key: "wywiad", label: "Wywiad", short: "Wywiad" },
  { key: "ocena", label: "Ocena głównych dolegliwości", short: "Ocena" },
  { key: "badanie", label: "Badanie podmiotowe i przedmiotowe", short: "Badanie" },
  { key: "cele", label: "Cele", short: "Cele" },
  { key: "program", label: "Program rehabilitacji", short: "Program" },
];
