# Hausverwaltung – Burchardt & Kollegen

Statische Website für den Bereich **Hausverwaltung** der Kanzlei
Burchardt & Kollegen StBG PartG mbB (Dortmund / Ruhrgebiet).

Die Seite ist als reine HTML/CSS-Website ohne Build-Schritt und ohne externe
JavaScript-Abhängigkeiten umgesetzt. Sämtliches CSS und das wenige JavaScript
(Scroll-Reveal-Effekt) sind direkt in den jeweiligen HTML-Dateien eingebettet.
Einzige externe Ressource sind die Google Fonts (Aleo, Petrona).

## Seitenstruktur

| Datei                          | Inhalt                                      |
| ------------------------------ | ------------------------------------------- |
| `index.html`                   | Startseite                                  |
| `mietverwaltung.html`          | Leistung: Mietverwaltung                    |
| `nebenkostenabrechnung.html`   | Leistung: Nebenkostenabrechnung             |
| `weg-verwaltung.html`          | Leistung: WEG-Verwaltung                    |
| `digitale-hausverwaltung.html` | Leistung: Digitale Hausverwaltung           |
| `ablauf.html`                  | Ablauf der Zusammenarbeit                   |
| `ueber-uns.html`               | Über uns                                    |
| `kontakt.html`                 | Kontakt / Erstgespräch (Formular)           |
| `robots.txt`                   | Crawler-Steuerung                           |
| `sitemap.xml`                  | XML-Sitemap                                 |

## Lokale Vorschau

Da es sich um statische Dateien handelt, genügt ein einfacher Webserver:

```bash
# Python 3
python3 -m http.server 8000
# danach im Browser: http://localhost:8000
```

Alternativ kann `index.html` direkt im Browser geöffnet werden.

## Deployment

Die Website kann auf jedem Static-Hosting bereitgestellt werden
(z. B. GitHub Pages, Netlify, klassisches Webhosting). Die Dateien liegen im
Repository-Wurzelverzeichnis; die internen Links und die `sitemap.xml` gehen
von einer Auslieferung im Root unter der Domain
`https://www.burchardt-hausverwaltung.de/` aus.

## Offene Punkte (vor dem Livegang zu klären)

Diese Punkte sind in der aktuellen Fassung noch offen und sollten vor einer
Veröffentlichung ergänzt bzw. angepasst werden:

- **Impressum & Datenschutzerklärung fehlen.** Alle Seiten verlinken im
  Footer auf `impressum.html` und `datenschutz.html`; diese Dateien existieren
  noch nicht. Beide Seiten sind in Deutschland rechtlich verpflichtend
  (§ 5 DDG / Impressumspflicht, DSGVO-Informationspflichten) und müssen mit
  geprüften, rechtsverbindlichen Inhalten erstellt werden.
- **Kontaktformular ohne Funktion.** Das Formular in `kontakt.html` nutzt
  `action="#"` und versendet keine Daten. Es muss an einen Versand-Endpunkt
  (Formmailer, Backend oder Formular-Dienst) angebunden werden. Dabei sind die
  datenschutzrechtlichen Anforderungen (Einwilligung, Verschlüsselung) zu
  beachten.
- **Platzhalter-Telefonnummer.** Die Nummer `+49 231 0000000` (in
  `kontakt.html` und im strukturierten Daten-Markup) ist ein Platzhalter und
  durch die echte Rufnummer zu ersetzen.
- **Open-Graph-Bild.** Im strukturierten Daten-Markup wird `og.jpg`
  referenziert; eine entsprechende Bilddatei ist noch zu hinterlegen.
