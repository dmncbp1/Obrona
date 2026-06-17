import type { Section, SectionId } from "./types";

export const SECTIONS: Section[] = [
  { id: "pediatria", name: "Wiek rozwojowy, pediatria", short: "Pediatria", range: "1-13", color: "#34d399" },
  { id: "ortopedia", name: "Ortopedia i traumatologia", short: "Ortopedia", range: "14-21", color: "#60a5fa" },
  { id: "pulmonologia", name: "Pulmonologia", short: "Pulmonologia", range: "22-32", color: "#22d3ee" },
  { id: "kardiologia", name: "Kardiologia", short: "Kardiologia", range: "33-38", color: "#f87171" },
  { id: "kardiochirurgia", name: "Kardiochirurgia", short: "Kardiochirurgia", range: "39-42", color: "#fb7185" },
  { id: "reumatologia", name: "Reumatologia", short: "Reumatologia", range: "43-47", color: "#fbbf24" },
  { id: "ginekologia", name: "Ginekologia i położnictwo", short: "Ginekologia", range: "48-49", color: "#f472b6" },
  { id: "neurologia", name: "Neurologia i neurochirurgia", short: "Neurologia", range: "50-66", color: "#a78bfa" },
  { id: "onkologia", name: "Onkologia", short: "Onkologia", range: "67", color: "#c084fc" },
  { id: "sportowa", name: "Medycyna sportowa", short: "Sportowa", range: "68-69", color: "#4ade80" },
  { id: "chirurgia", name: "Chirurgia, nerwy obwodowe", short: "Chirurgia", range: "70-72", color: "#fb923c" },
];

export const SECTION_MAP: Record<SectionId, Section> = SECTIONS.reduce(
  (acc, section) => {
    acc[section.id] = section;
    return acc;
  },
  {} as Record<SectionId, Section>,
);
