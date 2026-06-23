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
| `kontakt.html`                 | Weiterleitung auf die Kontaktseite der Hauptseite |
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

## Anbindung an die Hauptseite

Diese Website ist als Unterauftritt der Kanzlei-Hauptseite
`https://www.burchardt-kollegen.de/` angelegt. Rechtstexte und Kontakt werden
zentral über die Hauptseite abgewickelt:

- **Impressum** → `https://www.burchardt-kollegen.de/impressum/`
- **Datenschutzerklärung** → `https://www.burchardt-kollegen.de/datenschutzerklaerung/`
- **Kontakt** → `https://www.burchardt-kollegen.de/kontakt/`

Alle Footer- und Navigationslinks verweisen direkt auf diese Seiten. Die frühere
Kontaktseite (`kontakt.html`) enthält kein eigenes Formular mehr, sondern leitet
per `meta refresh` auf die Kontaktseite der Hauptseite weiter (`noindex`, damit
sie nicht separat indexiert wird).

## Offene Punkte (vor dem Livegang zu klären)

- **Platzhalter-Telefonnummer.** Die Nummer `+49 231 0000000` im
  strukturierten Daten-Markup (JSON-LD in `index.html`, `ablauf.html`,
  `ueber-uns.html`) ist ein Platzhalter und durch die echte Rufnummer zu
  ersetzen.
- **Open-Graph-Bild.** Im strukturierten Daten-Markup wird `og.jpg`
  referenziert; eine entsprechende Bilddatei ist noch zu hinterlegen.
