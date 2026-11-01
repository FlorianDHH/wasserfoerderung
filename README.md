# Wasserförderung – Lange Wegstrecke und Pendelverkehr

Handy-Web-App zur Planung der Löschwasserversorgung nach der HLFS-Lernunterlage „Löschwasserförderung“ (2019). Beim Start wird gewählt: **Lange Wegstrecke** oder **Pendelverkehr** (später über das Logo oben links umschaltbar).

## Pendelverkehr
- Wasserentnahmestelle und Einsatzstelle auf der Karte setzen, Fahrstrecke folgt automatisch den Straßen (oder gerade Linie für Wald-/Feldwege)
- **Ringverkehr:** Rückweg getrennt vom Hinweg planen (Strecke → Ringverkehr → Rückweg bearbeiten). Die App meldet, auf wie vielen Metern sich Hin- und Rückweg doch überschneiden (Gegenverkehr).
- **Fuhrpark:** Daten → Fuhrpark verwalten. Fahrzeuge mit Bezeichnung, Einheit/Halter, Art, Inhalt, max. Pendelgeschwindigkeit, Anfahrtszeit und optional eigenem Füll-/Abgabestrom anlegen (z. B. Traktor mit Wasserfass 12.000 l, 25 km/h). Langsamere Fahrzeuge werden mit ihrer eigenen Geschwindigkeit gerechnet.
- Fahrzeuge aus dem Fuhrpark mit Eintreffzeit einplanen. Jedes Fuhrpark-Fahrzeug kann nur einmal eingeplant werden, die Auswahl zeigt nur freie Fahrzeuge (Standardtypen dürfen mehrfach vorkommen). Reicht der Plan nicht, schlägt die App zuerst freie Fuhrpark-Fahrzeuge zum Nachalarmieren vor. Dazu Bedarf, Geschwindigkeit, Rüstzeit, Füllstrom, Füllstellen, Puffer
- Berechnung nach HLFS-Formel n = Umlaufzeit / Abgabezeit (Fahrzeit hin und zurück)
- Zeitstrahl-Simulation aller Fahrzeuge mit Warte- und Rüstzeiten: stabil ja/nein, Unterbrechungen, fehlende Fahrzeuge
- Höhenprofil der Fahrstrecke, Hinweise zum Pendelverkehr, PDF mit Lageskizze und Zeitstrahl

## Lange Wegstrecke

## Funktionen
- Trasse auf der Karte antippen (Wasserentnahme → Zwischenpunkte → Verteiler), Punkte verschiebbar
- Optional „Wegen folgen“: Trasse wird automatisch entlang von Wegen geführt
- Höhenprofil wird automatisch geladen (Open-Meteo, Copernicus-DEM)
- Pumpenstandorte nach dem grafischen Verfahren (Druckabfalllinie trifft Gelände), Anzeige auf Karte und im Profil
- Einfach-/Doppelleitung, offene/geschlossene Schaltreihe, Pumpendruck, Eingangsdruck, Strahlrohrdruck, Verlegezuschlag
- Material: Pumpen + Reserve (1 je 4), B-Schläuche + Reserve (1 je 100 m)
- Warnungen: > 1.000 l/min je Leitung, > 16 bar durch Gefälle, Pendelverkehr-Hinweis
- Plan per Link teilen, Pläne auf dem Gerät speichern
- Navigation in Google Maps (QR-Codes im PDF und Knöpfe in der App): Lange Wegstrecke = Wasserentnahme, Pumpen abfahren (alle FP als Stopps), Verteiler; Pendelverkehr = Anfahrt Wasserentnahme, Hinweg und Rückweg über die geplante Strecke (wichtigste Abbiegepunkte als Zwischenziele, bis 8 in der Google-Maps-App, 3 im Handy-Browser)
- Kartenarten: OSM, Topo (mit Höhenlinien), Luftbild

## Fuhrpark für alle Geräte (fahrzeuge.csv oder fahrzeuge.json)
Fahrzeuge, die in der App angelegt oder importiert werden, liegen zunächst nur auf dem jeweiligen Gerät. Für einen gemeinsamen Fuhrpark gibt es zwei Wege:

**A) Excel-Liste (empfohlen)**
1. In der App unter Daten → Fuhrpark verwalten → **CSV-Vorlage** speichern (oder `fahrzeuge-vorlage.csv` verwenden).
2. In Excel ausfüllen, eine Zeile pro Fahrzeug, und als **CSV (Trennzeichen-getrennt)** speichern.
3. Die Datei als `fahrzeuge.csv` in den App-Ordner (Webspace oder Synology) legen. Alle Geräte laden sie beim Start (Kennzeichnung „Server-Datei“).

Spalten: Bezeichnung; Einheit; Art; Inhalt (l); Geschwindigkeit (km/h); Anfahrt (min); Füllstrom (l/min); Abgabestrom (l/min); Bemerkung; ID.
Pflicht sind Bezeichnung und Inhalt. Art: Feuerwehr, Landwirtschaft, THW oder Sonstiges (leer = wird aus Bezeichnung/Einheit erkannt).
Fehlt die Geschwindigkeit, gilt 80 km/h (Landwirtschaft 40 km/h). Semikolon, Komma oder Tab als Trennzeichen, deutsche Zahlen wie „12.000“ und Excel-Zeichensatz werden erkannt.
Ein Fahrzeug mit gleicher Bezeichnung und Einheit wird bei erneutem Import aktualisiert, nicht doppelt angelegt.

**B) Export aus der App**
Im Fuhrpark **Export für Server (JSON)** tippen und die Datei als `fahrzeuge.json` in den App-Ordner legen.

Liegen beide Dateien vor, werden sie zusammengeführt (CSV gewinnt bei gleicher ID). Einzelne Geräte können die Liste zusätzlich über **Importieren (CSV/JSON)** übernehmen.

**Datenschutz bei öffentlichem Webspace:** Alles im App-Ordner ist für jeden mit der Adresse abrufbar. Namen von Landwirten oder Telefonnummern deshalb nicht in eine öffentliche `fahrzeuge.csv` schreiben. Stattdessen entweder den Zugang schützen (Cloudflare Access, siehe unten) oder die Fuhrpark-Datei nicht hochladen und auf den Geräten per **Importieren** einspielen.

## Veröffentlichen auf Cloudflare Pages (empfohlen)
1. Kostenloses Konto auf https://dash.cloudflare.com anlegen.
2. Workers & Pages → Erstellen → Pages → **Assets direkt hochladen** (Direct Upload).
3. Projektname vergeben, z. B. `wasserfoerderung` → den Inhalt des Ordners `loeschwasser-app` hochladen (die Dateien, nicht den Ordner selbst).
4. Nach dem Hochladen ist die App unter `https://wasserfoerderung.pages.dev` erreichbar (mit HTTPS).
5. **Update:** Im Projekt → Neue Bereitstellung → geänderte Dateien erneut hochladen. Vorher in `sw.js` die Nummer bei `CACHE` erhöhen.

Optional Zugang schützen: Zero Trust → Access → Anwendung hinzufügen → Self-hosted → Domain `wasserfoerderung.pages.dev` → Regel „E-Mails“ mit den Adressen der Kameraden oder „E-Mail endet auf …“. Bis 50 Nutzer kostenlos; Anmeldung per Einmal-Code per E-Mail.

## Alternative: GitHub Pages
1. Neues Repository anlegen (z. B. `wasserfoerderung`), den Inhalt von `loeschwasser-app` hochladen.
2. Settings → Pages → Branch `main`, Ordner `/ (root)` → Speichern.
3. Nach 1–2 Minuten erreichbar unter `https://<benutzername>.github.io/wasserfoerderung/`.
Bei einem kostenlosen Konto muss das Repository öffentlich sein, der Quelltext und die Fuhrpark-Datei sind dann ebenfalls öffentlich.

## Auf den Geräten installieren
- **Android:** Adresse in Chrome öffnen → Menü ⋮ → „App installieren“.
- **iPhone/iPad:** Adresse in Safari öffnen → Teilen → „Zum Home-Bildschirm“. Danach nur noch über das neue Symbol starten (Safari und Home-Bildschirm-App haben getrennte Speicher für Pläne und Fuhrpark).
- **PC:** Adresse in Edge oder Chrome öffnen → Symbol „App installieren“ in der Adressleiste.
Nach dem ersten Öffnen startet die App auch ohne Netz. Karte, Höhendaten, „Wegen folgen“ und Ortssuche brauchen weiterhin Internet.

## Betrieb auf der Synology (Docker)
1. Ordner z. B. nach `/volume1/docker/wasserfoerderung` kopieren
2. In Container Manager → Projekt → Erstellen, Pfad wählen, `docker-compose.yml` verwenden
3. App läuft auf Port **3500**

**Wichtig: HTTPS.** GPS-Standort und „Zum Startbildschirm hinzufügen“ funktionieren nur über HTTPS.
In DSM unter Systemsteuerung → Anmeldeportal → Erweitert → Reverse Proxy einen Eintrag anlegen
(z. B. `https://wasser.deine-domain.de` → `http://localhost:3500`) und ein Let's-Encrypt-Zertifikat zuweisen.

Alternativ läuft die App auf jedem beliebigen Webspace (nur statische Dateien).

## Hinweise
- Karten, Höhen und Suche brauchen Internet. Die Oberfläche selbst bleibt offline nutzbar.
- Höhenraster ca. 30–90 m: kleine Böschungen werden nicht erfasst. Vor Ort Eingangsdruck an jeder Pumpe kontrollieren.
