import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// W trybie produkcyjnym aplikacja jest serwowana z podkatalogu repozytorium na GitHub Pages
// (https://dmncbp1.github.io/Obrona/), dlatego ustawiamy base. W dev zostaje "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/Obrona/" : "/",
  plugins: [react()],
}));
