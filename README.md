# Wasserförderung – Lange Wegstrecke und Pendelverkehr

Handy-Web-App zur Planung der Löschwasserversorgung nach der HLFS-Lernunterlage „Löschwasserförderung“ (2019) und dem Skript „Löschwasserversorgung F4 Zugführer“ der Landesfeuerwehrschule Baden-Württemberg (2026). Beim Start wird gewählt: **Lange Wegstrecke**, **Pendelverkehr** oder **Nur Karte** (später über das Logo oben links umschaltbar).

## Nur Karte (Lagekarte)
Karte ohne Planung mit Waldwegen, Schranken und Rettungspunkten. Antippen eines Weges, einer Schranke oder eines Rettungspunkts zeigt die Details. „Nächster Rettungspunkt“ sucht den nächstgelegenen Rettungspunkt zum eigenen Standort (vorher Standort-Knopf antippen) oder zur Kartenmitte. Die App startet beim nächsten Mal wieder als Lagekarte. Die Legende lässt sich über ihre Überschrift einklappen.

## Pendelverkehr
- Wasserentnahmestelle und Einsatzstelle auf der Karte setzen, Fahrstrecke folgt automatisch den Straßen (oder gerade Linie für Wald-/Feldwege)
- **Ringverkehr:** Rückweg getrennt vom Hinweg planen (Strecke → Ringverkehr → Rückweg bearbeiten). Die App meldet, auf wie vielen Metern sich Hin- und Rückweg doch überschneiden (Gegenverkehr).
- **Fuhrpark:** Daten → Fuhrpark verwalten. Fahrzeuge mit Bezeichnung, Einheit/Halter, Art, Inhalt, max. Pendelgeschwindigkeit, Anfahrtszeit und optional eigenem Füll-/Abgabestrom anlegen (z. B. Traktor mit Wasserfass 12.000 l, 25 km/h). Langsamere Fahrzeuge werden mit ihrer eigenen Geschwindigkeit gerechnet.
- Fahrzeuge aus dem Fuhrpark mit Eintreffzeit einplanen. Jedes Fuhrpark-Fahrzeug kann nur einmal eingeplant werden, die Auswahl zeigt nur freie Fahrzeuge (Standardtypen dürfen mehrfach vorkommen). Reicht der Plan nicht, schlägt die App zuerst freie Fuhrpark-Fahrzeuge zum Nachalarmieren vor. Dazu Bedarf, Geschwindigkeit, Rüstzeit, Füllstrom, Füllstellen, Puffer
- Berechnung n = Umlaufzeit / Abgabezeit (Fahrzeit hin und zurück), geprüft mit dem LFS-BW-Beispiel (33 min / 2,5 min → 14 Fahrzeuge)
- Wasserentnahmestelle mit Hydranten-Faustformel (Unterflur DN × 10, Überflur DN × 15 l/min, max. 2.000 / 3.200 l/min), begrenzt den Füllstrom
- Checkliste Pendelverkehr nach LFS BW (automatisch bewertet: erfüllt / nicht erfüllt / vor Ort prüfen), Puffer an der Einsatzstelle
- Zeitstrahl-Simulation aller Fahrzeuge mit Warte- und Rüstzeiten: stabil ja/nein, Unterbrechungen, fehlende Fahrzeuge
- Höhenprofil der Fahrstrecke, Hinweise zum Pendelverkehr, PDF mit Lageskizze und Zeitstrahl

## Lange Wegstrecke

## Funktionen
- Trasse auf der Karte antippen (Wasserentnahme → Zwischenpunkte → Verteiler), Punkte verschiebbar
- Optional „Wegen folgen“: Trasse wird automatisch entlang von Wegen geführt
- Höhenprofil wird automatisch geladen (Open-Meteo, Copernicus-DEM)
- Pumpenstandorte nach dem grafischen Verfahren (Druckabfalllinie trifft Gelände), Anzeige auf Karte und im Profil
- Einfach-/Doppelleitung, offene/geschlossene Schaltreihe, Pumpendruck, Eingangsdruck, Strahlrohrdruck, Verlegezuschlag
- Ende der Förderstrecke: Brandstellenpumpe (Löschfahrzeug mit Tank, LFS BW) oder Verteiler direkt (HLFS). Geprüft mit dem LFS-Beispiel „Eichelberg – Näherweg“ (5/4/4/3 Pumpen)
- Wasserentnahmestelle mit Hydranten-Faustformel, Behälterinhalt, Trinkwasserschutz-Hinweisen
- Grundsätze der Wasserförderung (LFS BW) als Hinweisliste in App und PDF
- Material: Pumpen + Reserve (1 je 4), B-Schläuche + Reserve (1 je 100 m)
- Warnungen: > 800 und > 1.000 l/min je Leitung, > 16 bar durch Gefälle, Pendelverkehr-Hinweis
- Plan per Link teilen, Pläne auf dem Gerät speichern
- Navigation in Google Maps (QR-Codes im PDF und Knöpfe in der App): Lange Wegstrecke = Wasserentnahme, Pumpen abfahren (alle FP als Stopps), Verteiler; Pendelverkehr = Anfahrt Wasserentnahme, Hinweg und Rückweg über die geplante Strecke (wichtigste Abbiegepunkte als Zwischenziele, bis 8 in der Google-Maps-App, 3 im Handy-Browser)
- Kartenarten (Ebenen-Knopf): OpenStreetMap, OpenTopoMap, Topo-Karte RLP (amtliche DTK25/50/100), Luftbild RLP (DOP 20 cm), TopPlusOpen (BKG), Esri-Luftbild. Die RLP-Karten gibt es nur für Rheinland-Pfalz (© GeoBasis-DE / LVermGeoRP, dl-de/by-2-0). Die gewählte Karte wird auch im PDF verwendet (OSM, OpenTopoMap, RLP-Karten).
- Zusatz-Ebene **Waldwege (OSM)** im Ebenen-Menü: Wald- und Wirtschaftswege aus OpenStreetMap, eingefärbt nach Befahrbarkeit (grün befestigt, gelb überwiegend fest, orange gemischt, rot unbefestigt, grau gestrichelt nicht erfasst), dazu Schranken und Tore. Erscheint ab Zoom 13. „Weg-Info“ in der Legende einschalten und einen Weg antippen zeigt Oberfläche, Gewichtsgrenze, Breite und Zufahrtsregel. Daten kommen über Overpass (das erste Laden eines Gebiets dauert bis zu einer Minute) und werden 30 Tage auf dem Gerät gespeichert, danach sofort und offline verfügbar. Tipp: Das eigene Gebiet einmal bei Zoom 13 mit Netz abfahren. Erscheint auch in der PDF-Lageskizze. Daten © OpenStreetMap-Mitwirkende (ODbL); Befahrbarkeit immer vor Ort prüfen.
- Zusatz-Ebene **Rettungspunkte Forst (OSM)**: Rettungspunkte (Anfahrpunkte für Rettungsfahrzeuge) aus OpenStreetMap mit Nummer, z. B. 5612-123. Antippen zeigt Koordinaten, Prüfdatum und Navigation. „Route in der App berechnen“ zeigt die Fahrstrecke vom eigenen Standort (sonst Kartenmitte) mit Entfernung und Pkw-Fahrzeit; ein letztes Stück ohne Straße wird gestrichelt angezeigt. „Navigation in Google Maps“ bleibt zusätzlich erhalten. Das gilt auch für die eigenen Wasserstellen. In der Suche kann direkt eine Rettungspunkt-Nummer eingegeben werden („5612-123“ oder „RP 5612-123“). Nicht alle Rettungspunkte sind in OSM erfasst; maßgeblich bleibt die Rettungskarte von Landesforsten RLP. Erscheint auch im PDF.

## Eigene Wasserentnahmestellen (wasserstellen.json)
Hydranten, Löschwasserbehälter, Zisternen und offene Gewässer der eigenen Wehr, z. B. aus wasserkarte.info. Im Ebenen-Menü „Wasserstellen-Datei laden“ wählen (JSON oder CSV mit Spalten für Breitengrad/Längengrad bzw. lat/lon, dazu Name, Typ, Nenndurchmesser, Zufluss, Kapazität …). Die Daten bleiben auf dem Gerät. Für alle Geräte die Datei als `wasserstellen.json` in den App-Ordner legen, **aber nur, wenn die Daten öffentlich sein dürfen** (GitHub-Pages ist öffentlich).
Antippen zeigt Leistung, Nennweite, Inhalt, Anschlüsse, Frostsicherheit, Zufahrt und Prüfdatum. „Als Wasserentnahme übernehmen“ setzt die Stelle als ersten Punkt der Planung und überträgt Art und Leistung bzw. Inhalt. In der Lagekarte sucht „Nächste Wasserstelle“ die nächstgelegene.

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
