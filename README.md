# Hausverwaltung – Burchardt & Kollegen

Statische Website für den Bereich **Hausverwaltung** der Kanzlei
Burchardt & Kollegen GmbH Wirtschaftsprüfungsgesellschaft (Dortmund / Ruhrgebiet).

Inhaltlich ist es eine reine HTML/CSS-Website. Das gemeinsame CSS aller
Inhaltsseiten liegt zentral in **`public/assets/style.css`** und wird per
`<link rel="stylesheet">` eingebunden (eine Quelle statt pro Seite dupliziert);
das wenige JavaScript (Scroll-Reveal-Effekt) ist je Seite eingebettet. Es werden
**keine externen Ressourcen von Dritten** geladen – die Schrift **Petrona** ist
selbst gehostet (`public/fonts/`, eingebunden per `@font-face` mit
`font-display: swap`). Das vermeidet render-blockierende CDN-Anfragen und ist
DSGVO-konform (keine Übertragung von Besucher-IPs an Google Fonts).

Sicherheits-Header (u. a. `X-Content-Type-Options`, `Referrer-Policy`,
`Permissions-Policy`, `Strict-Transport-Security`) liefert die Datei
**`public/.htaccess`** aus (Apache/LiteSpeed – von Hostinger unterstützt).

Damit die Seite auch auf Hosting-Umgebungen mit Framework-Erkennung (z. B.
Hostinger „Web Apps") deploybar ist, liegt ein minimaler **[Vite](https://vitejs.dev/)**-Build
darüber. Der Build transformiert die Seiten nicht inhaltlich – er kopiert die
fertigen HTML-Seiten und die Assets aus `public/` nach `dist/`.

Der HTML-Code ist mit [Prettier](https://prettier.io/) formatiert
(`prettier --print-width 100 --write "*.html"`).

## Seitenstruktur

| Datei                          | Inhalt                                      |
| ------------------------------ | ------------------------------------------- |
| `index.html`                   | Startseite                                  |
| `mietverwaltung.html`          | Leistung: Mietverwaltung                    |
| `nebenkostenabrechnung.html`   | Leistung: Nebenkostenabrechnung             |
| `weg-verwaltung.html`          | Leistung: WEG-Verwaltung                    |
| `digitale-hausverwaltung.html` | Leistung: Digitale Hausverwaltung           |
| `verwaltung-und-steuerberatung.html` | Verzahnung von Hausverwaltung & Steuerberatung (für Kapitalanleger) |
| `technisches-gebaeudemanagement.html` | Leistung: Technisches Gebäudemanagement (Koordination über Netzwerk) |
| `ablauf.html`                  | Ablauf der Zusammenarbeit                   |
| `ueber-uns.html`               | Über uns                                    |
| `kontakt.html`                 | Weiterleitung auf die Kontaktseite der Hauptseite |
| `public/assets/style.css`      | Gemeinsames Stylesheet aller Inhaltsseiten  |
| `public/.htaccess`             | Sicherheits-Header (Apache/LiteSpeed)       |
| `public/robots.txt`            | Crawler-Steuerung (unverändert nach `dist/` kopiert) |
| `public/sitemap.xml`           | XML-Sitemap                                 |
| `public/og.jpg`                | Vorschaubild für Social-Media-Sharing (1200×630) |
| `package.json`, `vite.config.js` | Build-Konfiguration (Vite, mehrseitig)    |

> Alles unter `public/` wird beim Build unverändert ins Wurzelverzeichnis von
> `dist/` übernommen (also z. B. erreichbar als `/og.jpg`, `/robots.txt`).

## Lokale Entwicklung & Build

Voraussetzung: Node.js (18+).

```bash
npm install        # einmalig Abhängigkeiten installieren
npm run dev        # Dev-Server mit Live-Reload (http://localhost:5173)
npm run build      # Produktions-Build nach dist/
npm run preview    # gebauten Stand aus dist/ lokal testen
```

Der Build erzeugt das Verzeichnis `dist/` mit allen Seiten und Assets –
genau das, was ausgeliefert wird.

## Deployment

### Hostinger „Web Apps" (Framework-Deployment)

Hostinger erkennt das Projekt automatisch als Vite-App. Falls Werte manuell
einzutragen sind:

| Feld            | Wert            |
| --------------- | --------------- |
| Branch          | `main`          |
| Install-Befehl  | `npm install`   |
| Build-Befehl    | `npm run build` |
| Ausgabe-/Publish-Verzeichnis | `dist`   |

### Klassisches Static-Hosting (FTP / `public_html`)

`npm run build` ausführen und den **Inhalt von `dist/`** ins Web-Wurzel­verzeichnis
(`public_html`) hochladen. Interne Links und `sitemap.xml` gehen von einer
Auslieferung im Root unter `https://burchardt-hausverwaltung.de/` aus.

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
sie nicht separat indexiert wird). Adresse (Kronenburgallee 2, 44141 Dortmund)
und E-Mail wurden an die Angaben der Hauptseite angeglichen.

## Gestaltung

Farbwelt und Typografie sind an die Hauptseite angeglichen: warmes Gold, Navy
(`#3A5791`), Periwinkle-Blau (`#3f6db2`) und Orange-Rot (`#E94E1B`) als
Akzent, durchgängig die Serifenschrift **Petrona**. Übernommene
Gestaltungselemente der Hauptseite sind der **goldene Footer**, das **weiße
Logo-Banner** im Header und **diagonale Sektionskanten**.

## SEO

Die Seiten folgen gängigen SEO-Best-Practices:

- Pro Seite genau eine `<h1>`, logische Überschriften­hierarchie, semantisches
  HTML (`header`, `main`, `nav`, `section`, `footer`).
- Eigene, längengerechte `<title>` und `meta description` je Seite,
  selbstreferenzierende `canonical`-URL (Startseite kanonisch auf Root `/`,
  konsistent mit der `sitemap.xml`).
- Open-Graph- **und** Twitter-Card-Tags inkl. Vorschaubild (`og.jpg`,
  1200×630) für ansprechende Linkvorschauen.
- Strukturierte Daten (JSON-LD): `ProfessionalService` und `WebSite` auf der
  Startseite, `Service` auf den Leistungsseiten sowie `BreadcrumbList` und
  `FAQPage` auf den Unterseiten.
- `robots.txt` mit Sitemap-Verweis, vollständige `sitemap.xml`,
  `lang="de"`, `theme-color`, Skip-Link und Fokus-Stile.
- Performance: Fonts mit `preconnect` und `display=swap`, kein Render-blocking
  JavaScript, keine externen Frameworks.

## Offene Punkte (vor dem Livegang zu klären)

- **Telefonnummer.** Aktuell ist keine Telefonnummer hinterlegt (der frühere
  Platzhalter wurde aus dem JSON-LD entfernt). Bei Bedarf eine echte Rufnummer
  in den `ProfessionalService`-Daten (`index.html`, `ablauf.html`,
  `ueber-uns.html`) ergänzen.
- **Open-Graph-Bild.** Ein gebrandetes `og.jpg` (1200×630) ist hinterlegt. Es
  kann bei Bedarf durch ein finales Motiv (z. B. mit echtem Foto) ersetzt
  werden – Dateiname und Maße beibehalten.
