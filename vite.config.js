import { defineConfig } from "vite";
import { resolve } from "node:path";

// Mehrseitige statische Website. Jede HTML-Datei ist ein eigener Einstiegspunkt
// und wird unter gleichem Dateinamen nach dist/ gebaut. Inhalte aus public/
// (og.jpg, robots.txt, sitemap.xml) werden unveraendert ins dist/-Wurzelverzeichnis kopiert.
export default defineConfig({
  appType: "mpa",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        mietverwaltung: resolve(__dirname, "mietverwaltung.html"),
        nebenkostenabrechnung: resolve(__dirname, "nebenkostenabrechnung.html"),
        "weg-verwaltung": resolve(__dirname, "weg-verwaltung.html"),
        "digitale-hausverwaltung": resolve(__dirname, "digitale-hausverwaltung.html"),
        "verwaltung-und-steuerberatung": resolve(__dirname, "verwaltung-und-steuerberatung.html"),
        "technisches-gebaeudemanagement": resolve(__dirname, "technisches-gebaeudemanagement.html"),
        ablauf: resolve(__dirname, "ablauf.html"),
        "ueber-uns": resolve(__dirname, "ueber-uns.html"),
        kontakt: resolve(__dirname, "kontakt.html"),
      },
    },
  },
});
