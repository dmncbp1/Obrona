import { SkeletonBar } from "./SkeletonBar";

interface Principle {
  no: string;
  title: string;
  text: string;
}

const PRINCIPLES: Principle[] = [
  {
    no: "01",
    title: "Jeden szkielet na wszystko",
    text: "Każda odpowiedź idzie tym samym torem: wywiad, ocena głównych dolegliwości, badanie podmiotowe i przedmiotowe, cele, program rehabilitacji. Nie uczysz się struktury 72 razy, tylko raz.",
  },
  {
    no: "02",
    title: "Kilka szablonów, nie 72",
    text: "Wywiad i program to kilka powtarzalnych szablonów. Pytania grupują się w bloki, w których wywiad jest praktycznie identyczny, a program różni się jednym akcentem.",
  },
  {
    no: "03",
    title: "Tylko wyróżniki do zapamiętania",
    text: "Na konkretną jednostkę chorobową zostają 2 do 3 wyróżniki, które odróżniają ją od reszty bloku. To na nich łapie egzaminator i tylko ich trzeba douczyć.",
  },
];

interface PlanDay {
  day: string;
  focus: string;
  detail: string;
}

const PLAN: PlanDay[] = [
  { day: "Dzień 1", focus: "Szkielet i pulmonologia", detail: "Opanuj pięć kroków szkieletu. Pulmonologia (22-32), jeden wywiad oddechowy, jeden program, różnica to wdech, wydech albo inhalacje." },
  { day: "Dzień 2", focus: "Kardiologia", detail: "Kardiologia (33-38), jeden wywiad i badanie. Wyróżnik to protokół pionizacji." },
  { day: "Dzień 3", focus: "Kardiochirurgia", detail: "Kardiochirurgia (39-42), ten sam blok kardio, pionizacja II doba i asekuracja rany (sternotomia, torakotomia)." },
  { day: "Dzień 4", focus: "Neurologia centralna", detail: "Udar, krwotok, rdzeń, choroby zwyrodnieniowe OUN (50-58), skale REPTY, Rankin, Barthel, Frenchay, metody NDT-Bobath i PNF." },
  { day: "Dzień 5", focus: "Neurologia pozostała", detail: "Zespoły bólowe, GBS, ataksja, splot ramienny (62-66), wspólny wywiad neurologiczny plus wyróżniki." },
  { day: "Dzień 6", focus: "Reumatologia i ginekologia", detail: "Reuma (43-47) ze wspólnym programem, ginekologia (48-49), skala Oxford i rozejście mięśnia prostego brzucha." },
  { day: "Dzień 7", focus: "Pediatria, część 1", detail: "Wiek rozwojowy (1-7), wywiad okołoporodowy i rozwojowy, więcej zmienności niż w innych blokach." },
  { day: "Dzień 8", focus: "Pediatria, część 2", detail: "Wiek rozwojowy (8-13), domknięcie bloku pediatrycznego." },
  { day: "Dzień 9", focus: "Wyróżniki ortopedyczne", detail: "Ortopedia (14-21), onkologia (67), medycyna sportowa (68-69). Pamięć krótkoterminowa, dlatego pod koniec." },
  { day: "Dzień 10", focus: "Nerwy ręki i powtórka", detail: "Nerwy obwodowe i chirurgia ręki (59-61, 70-72), pośrodkowy, promieniowy, łokciowy. Świeże na obronę. Powtórka fiszek do powtórki." },
];

export function MetodaView() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <section>
        <h2 className="text-xl font-semibold text-neutral-100">Metoda nauki</h2>
        <p className="mt-1 text-sm text-neutral-400">
          To nie jest 72 osobnych odpowiedzi. To jeden szkielet, kilka szablonów i krótkie wyróżniki.
        </p>
      </section>

      <section className="rounded-card border border-neutral-800 bg-neutral-900/40 p-5">
        <div className="label-tech mb-3 text-xs text-emerald-400">Szkielet odpowiedzi</div>
        <SkeletonBar />
        <p className="mt-3 text-sm text-neutral-400">
          Ten ciąg pięciu kroków jest stały dla każdego pytania. Powiedz go na głos zanim zaczniesz mówić treść.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <div key={p.no} className="rounded-card border border-neutral-800 bg-neutral-900/40 p-5">
            <div className="label-tech text-2xl font-semibold text-emerald-400">{p.no}</div>
            <h3 className="mt-2 text-sm font-semibold text-neutral-100">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{p.text}</p>
          </div>
        ))}
      </section>

      <section>
        <h3 className="mb-3 text-sm font-semibold text-neutral-200">Plan nauki na 10 dni do obrony</h3>
        <p className="mb-4 text-sm text-neutral-400">
          Najpierw bloki, w których jeden szablon pokrywa najwięcej pytań (pulmonologia, kardiologia, neurologia), bo tam najszybciej zaliczasz dużo materiału. Wyróżniki ortopedyczne i nerwy ręki na sam koniec, bo to czysta pamięć krótkoterminowa i ma być świeża na obronie.
        </p>
        <ol className="space-y-2">
          {PLAN.map((d) => (
            <li
              key={d.day}
              className="flex flex-col gap-1 rounded-card border border-neutral-800 bg-neutral-900/40 p-4 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <span className="label-tech shrink-0 text-xs text-emerald-400 sm:w-20">{d.day}</span>
              <div>
                <div className="text-sm font-semibold text-neutral-100">{d.focus}</div>
                <div className="text-sm text-neutral-400">{d.detail}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
