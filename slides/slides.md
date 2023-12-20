---
info: |
  ## Angular Slides
  Präsentation zu [Angular](https://angular.dev) - Work In Progress
---

# Angular Training
<p></p>
Willkommen bei Ihrer Angular Schulung!

---
layout: intro
---

# Michael Buchholz

<div class="leading-8 opacity-80">
Trainer und freiberuflicher Entwickler.<br>
Open Source Enthusiast.<br>
From Backend to Frontend (Web).<br>
</div>

<div class="my-10 flex items-center gap-x-4">
  <ri-github-line class="opacity-50"/>
  <div><a href="https://github.com/lean-stack" target="_blank">lean-stack</a></div>
</div>

<img src="/profile.jpg" class="rounded-full w-40 abs-tr mt-16 mr-12"/>

---

# Setup der Development-Umgebung

1. Node.js
2. Node Paket Manager
3. Angular CLI
4. Guter Editor / IDE
5. Browser
6. Git
7. Terminal

---

# Setup: Node.js

Homepage: https://nodejs.org

Installation entweder über den Standard-Installer [^1] (unter Windows) bzw. über Paketmanger des Betriebssystems.

Für Schulungen bevorzuge ich die LTS-Version (Long Term Support). Zumal aktuell die Current-Version von der Angular CLI offiziell (noch) nicht unterstützt wird.

Alternativ kann die Installation über einen Node-Versionsmanager gemacht werden - insbesondere, wenn man mehrere Node-Versionen unterstützen muss.

[^1]: Bei der Installation über den Installer unter Windows bitte den Haken bei der nativen Tool-Unterstützung nicht(!) setzen.

---

# Setup: Node Paket Manager

Alternativen:

- npm
- yarn
- pnpm

Bei der Windows-Installation kommt normalerweise der Standard-Paketmanager `npm` mit. Für die Schulung bleibe ich auch bei diesem.

---

# Setup: Angular CLI

Die Angular CLI ist ein Kommandozeilen-Tool, dass wir benutzen

- beim Projektstart
- während der Entwicklungszeit
  - als lokaler Server
  - zum Starten der Testumgebung
- zum Erstellen neuer Code-Bausteine
- zum Erstellen eines optimierten Produktions-Build

Während die globale Installation des Tools nicht zwingend notwendig ist, vereinfacht es jedoch den täglichen Gebrauch im Terminal:

```bash
npm install --global @angular/cli@latest
```

---

# Setup: Guter Editor/IDE

Prinzipiell ist jeder Texteditor ausreichend. Empfohlen sind natürlich Editoren bzw. Integrierte Entwicklungsumgebungen, die sich durch eine gute Unterstützung für JavaScript/TypeScript, CSS und schlussendlich HTML auszeichnen.

Idealerweise unterstützt der Editor zusätzlich Angular-Features wie zum Beispiel die Template-Syntax direkt oder über nachinstallierte Plugins.

Empfehlungen:

- [Visual Studio Code](https://code.visualstudio.com/) bzw. [VSCodium](https://vscodium.com/)
- Diverse kommerzielle IDEs (IntelliJ, PhpStorm, WebStorm) aus dem Hause [JetBrains](https://www.jetbrains.com/)
- Kommerzieller Editor [Sublime Text](https://www.sublimetext.com/)
- [Eclipse IDE](https://www.eclipse.org/eclipseide/)

---

# Setup: Visual Studio Code

Schon nach der Installation bietet Microsofts Visual Studio Code die notwendige Unterstützung zum Erstellen von Angular Anwendungen.

Folgende zusätzliche Plugins unterstützen die Developer Experience:

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

---

# Setup: Browser

Bei der Entwicklung einer Angular-Anwendung ist ein aktueller Browser notwendig.
Die Liste der aktuell unterstützten Browser findet man jederzeit in der [Dokumentation](hhttps://angular.dev/reference/versions#browser-support)[^1].

Hilfreich bei der Entwicklung sind die [Angular DevTools](https://angular.dev/tools/devtools) - eine Browser Developer Extension.

Auch setzen mitunter Test-Runner bzw. Test-Frameworks auf den Google Chrome Browser bzw. unterstützen lediglich diesen in der Standard-Konfiguration.

[^1]: Der MS Internet Explorer wird seit Angular 13 in keiner Version mehr unterstützt. Bis zu Angular 12 konnte man die Unterstützung für den IE 11 noch als Opt-In freischalten.

---

# Setup: Git

Homepage: https://git-scm.com/

Git als verteiltes Code-Versionsverwaltungssystem hat sich zum de-facto Standard entwickelt.

Es ist natürlich weder für die Schulung noch für die Entwicklung von eigenen Angular-Applikationen zwingend notwendig.

Allerdings erwartet die Angular CLI ein installiertes Git. Die Git-Initialisierung des Projektes lässt sich aber über eine Kommandozeilen-Option abschalten.

Außerdem sind meine Schulungsbeispiele allesamt Git-Repositories und profitieren von der Versionsverwaltung.

---

# Setup: Terminal

Bei der typischen Entwicklung von Angular Anwendungen werden immer wieder Kommandos auf einer Konsole/Shell ausgeführt.

Zwar bieten Editoren über Plugins bzw. IDEs die Möglichkeiten fast gänzlich ohne die Kommandozeilen-Befehle auszukommen. Dennoch empfehle ich für die Schulung die Verwendung eines geeigneten Terminals.

Alternativen:

- Windows Commandline (cmd)
- Powershell (Classic oder Core)
- Git Bash (kommt mit der Git-Installation)
- WSL-Bash (Windows Subsystem für Linux)

Zum bequemeren Umgang mit den diversen Konsolen und Shells empfiehlt sich der neue [Windows Terminal](https://www.microsoft.com/de-de/p/windows-terminal/9n0dx20hk701).

---

# Setup: Powershell

Beim Einsatz der klassischen Powershell (nicht nötig bei der Powershell Core) ist zu beachten, dass die Ausführungsrechte für Scripte konfiguriert sind:

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

# Setup: Proxy

Falls sich der Entwicklungsrechner hinter einem Firmen-Proxy befindet, müssen u.U. Konfigurationen der verwendeten Tools angepasst werden:

- npm:

  ```bash
  npm config set proxy http://username:password@host:port
  npm config set https-proxy http://username:password@host:port
  ```

- git:

  ```bash
  git config --global http.proxy http://username:password@host:port
  ```

Natürlich muss der Proxy im System selbst eingetragen sein. Diese Einstellungen werden zum Beispiel von Visual Studio Code übernommen.

---

# Hello Angular

- Erzeugen eines ersten Projektes
- Top-Level Projekt Struktur
- Source-Ordner Struktur
- Anwendungs-Struktur
- Building Blocks: Module und Komponenten

---

# Hello Angular: Projekt erzeugen I

Folgendes Kommando bitte in einem Terminal eingeben. Bei den folgenden Fragen zur Projekt-Konfiguration bitte einfach die Default-Werte mit `Enter` übernehmen.

```bash
ng new sample-schulung
```

Obiges Kommando funktioniert natürlich nur mit einer global installierten Angular CLI. Das Projekt wird dann genau gemäß der installierten CLI-Version erstellt.

Etwas flexibler ist man bei der Installation ohne globale CLI:

```bash
npx -p @angular/cli@latest ng new sample-schulung
```

Den Ausdruck `latest` kann man durch eine gewünschte ältere Versionsnummer ersetzen (z.B. 16).

---

# Hello Angular: Projekt erzeugen II

Tatsächlich empfehle ich neue Projekte **immer** mit dem längeren und etwas komplizierteren `npx`-Kommando zu erstellen. Das vermeidet *veraltete* Dateien im erstellten Projekt. Ansonsten wäre zwingend vor jeder Projekterstellung zu prüfen, ob die CLI noch in der aktuellsten bzw. gewünschten Version vorliegt.

Bei dem anschließenden Arbeiten im Projekt ist die globale CLI-Version irrelevant, weil im Projekt immer die lokal installierte genutzt wird.

---

# Hello Angular: Projekt erzeugen III

Das `ng new sample-schulung` Kommando

- erzeugt ein neues Verzeichnis `sample-schulung`
- legt ein Anwendungsgerüst gemäß der gewünschten Angular-Version und den per Schalter angegebenen Optionen an
- installiert die Angular-Pakete und deren Abhängigkeiten

Das ganze dauert je nach Rechner und Netzwerkgeschwindigkeit einige Sekunden ...

---

# Hello Angular: Top-Level Struktur

```
├── package.json und package-lock.json
├── tsconfig*.json
├── angular.json
├── node_modules/
├── src/
```

- `package.json`: Projekt Metadaten (NPM Module, Script-Kommandos, Autor, Lizenz, ...)
- `tsconfig*.json`: TypeScript Konfiguration
- `angular.json`: Angular CLI und Build Konfiguration
- `node_modules`: Verzeichnis mit den NPM Modulen (zur Zeit >400 MB groß)
- `src`: Verzeichnis mit dem Anwendungs-Sourcecode.

<style> pre { margin: 1rem 0 ; } </style>

---

# Hello Angular: Source-Ordner Struktur

```
├── src
│ ├── index.html
│ ├── main.ts
│ ├── styles.css
│ ├── app/
│ ├── assets/
```

- `index.html`: HTML-Startseite der Anwendung
- `main.ts`: Bootstrap-/Start-Script der Anwendung
- `styles.css`: Globale Styles
- `app`: _Unser_ Quellcode-Ordner
- `assets`: Statische Assets (Bilder, Fonts, ...)

<style> pre { margin: 1rem 0 ; } </style>

---

# Hello Angular: App-Ordner Struktur

```
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
```

- `app.config.ts`: Konfiguration der Anwendung (Dienste, Routing, ...)
- `app.routes.ts`: Router-Konfiguration (Mapping Url auf Komponenten)
- `app.component.ts`: Bootstrap-/Haupt-Komponente der Anwendung
- `app.component.html`: HTML-View/Ansicht der Haupt-Komponente
- `app.component.css`: Styles (lokal, gescoped) der Haupt-Komponente
- `app.component.spec.ts`: Test Spec der Haupt-Komponente

<style> pre { margin: 1rem 0 ; } </style>

---

# Hello Angular: Bootstrap / Start

```ts
import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

Zum Starten der Anwendung wird die Plattform-spezifische `bootstrapApplication`-Methode importiert
und mit dieser die Anwenung gestartet. Dazu gehört im ersten Parameter die Haupt- bzw. Wurzelkomponente
und im zweiten das Konfigurationsobjekt.

---
clicks: 7
---

# Hello Angular: Komponenten I

```ts {all|3-9|4|5|6|7,8|10-12|11}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-schulung';
}
```
<div class="flex text-base">
<ul>
  <li v-click="1">Component-Decorator (Metadaten)</li>
  <ul>
    <li v-click="2" class="!ml-8 list-disc">Selektor bestimmt, wie die Komponente eingesetzt wird.</li>
    <li v-click="3" class="!ml-8 list-disc">Standalone-Komponente, kein (legacy) Angular Module nötig.</li>
    <li v-click="4" class="!ml-8 list-disc">Fremd-Module und Komponenten.</li>
    <li v-click="5" class="!ml-8 list-disc">Verweis auf externes Template und Stylesheets</li>
  </ul>
</ul>
<ul>
  <li v-click="6">Component-Class</li>
  <ul>
    <li v-click="7" class="!ml-8 list-disc">Instanz-Daten (Property)</li>
  </ul>
</ul>
</div>

---

# Hello Angular: Komponenten II

```ts {all|6|7}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<h1>{{title}}</h1>', // inline HTML
  styles: ['h1 { font-weight: normal; }'], // inline styles
})
export class AppComponent {
  title = 'Hello Angular';
}
```

Template und Styles können auch inline definiert werden.

---

# Hello Angular: Zusammenfassung

Komponenten sind die Hauptbausteine einer Angular-Anwendung

<v-clicks>

- Sie kapseln Datendarstellung und (zum Teil) Anwendungslogik
- Jede Angular Anwendung hat eine Hauptkomponente, die beim Bootstrap der Anwendung ausgewählt wird.
- Eingesetzt wird diese im globalen `index.html`

</v-clicks>

---

# Hello Angular: Starten der Anwendung

- Start auf der Konsole über `npm start` oder `ng serve`
- Automatisierte Unit-Tests werden ausgeführt mit `npm test` oder `ng test`
- Production-Build erzeugen mit `npm run build` oder `ng build`

---

# Component Instance

Anhand der bisher einzigen Komponente in der Anwendung (der `AppComponent`) beleuchten wir als
Einstieg erste Basics der Komponenten-Programmierung.

---

# Component Instance: Daten und Aktionen I

Wir füllen unsere Komponenten-Instanz mit etwas mehr Code.

```ts
export class AppComponent {
  // Properties
  title = 'Angular Grundkurs';
  learners: { firstname: string; lastname: string }[] = [];
  waitingList = [
    { firstname: 'George', lastname: 'Kalpakas' },
    { firstname: 'Pete', lastname: 'Darwin' },
    { firstname: 'Igor', lastname: 'Minar' },
    { firstname: 'Victor', lastname: 'Savkin' },
  ];
  // Methods
  summary(): string {
    return `${this.learners.length} Teilnehmer, ${this.waitingList.length} in der Warteliste`;
  }
  addFromWaitingList(): void {
    this.learners = [...this.learners, ...this.waitingList.splice(0, 1)];
  }
}
```

---

# Component Instance: Daten und Aktionen II

- Daten die dargestellt werden können: Properties sowie Methoden und ihr Return-Wert[^1]
- Aktionen, die die Daten verändern: Schreibender Zugriff auf Properties sowie Methoden ohne Rückgabe

[^1]: Berechnende Methoden sind normalerweise keine gute Praxis. Wie wir noch sehen werden, wird die Methode unter Umständen sehr oft aufgerufen. Und zwar insbesondere wenn keine weiteren Vorkehrungen getroffen werden.

---

# Component Templates: Display Data I

Es gibt verschiedende Techniken, Daten darzustellen. Erste Variante ist die Interpolation von HTML-Textinhalt.

Syntax: `{{ expression }}`

```html
<h1>{{ title }}</h2>
<p>Zusammenfassung: {{ summary() }}</p>
```

---

# Component Templates: Display Data II

Um Listen bzw. aufzählbare Daten darzustellen kann eine sogenannte Direktive benutzt werden. Generell unterscheidet Angular zwischen Attribut-Direktiven und strukturellen Direktiven. Im Modul `@angular/common` stellt Angular einige Standard-Direktiven bereit - unter anderem die strukturelle Direktive `ngForOf`.[^1]

```html
<ul>
  <li *ngFor="let person of waitingList">
    {{ person.firstname }} {{ person.lastname }}
  </li>
</ul>
```

Die Direktive erzeugt übrigens einen neuen Template-Kontext und in diesem in jedem Schleifendurchlauf eine neue Variable. In diesem Fall `person`

[^1]: Weitere Direktiven sowie eine nähere Bertrachtung der Syntax sowie der Unterschiede zwischen Attribut- und Strukturdirektiven werden im Beispielprojekt [Template-Syntax](https://github.com/lean-ng/edu-template-syntax) beleuchtet.

---

# Component Templates: Display Data III

Eine weitere strukturelle Direktive ist `*ngIf` zum bedingten Darstellen von Inhalten:

```html
<p *ngIf="learners.length === 0">Noch keine Teilnehmer.</p>
```

---

# Component Templates: Trigger Actions

Aktionen aus der Konponenten-Instanz (bzw. auf dem aktuellen Kontext) können u.a. über User-Events im Browser ausgelöst werden. Im Template wird über die Event-Binding Syntax das Event mit einem Template-Statement verknüpft.

Im Gegensatz zu Template-Expressions wird der Code erst mit dem Event evaluiert.

```html
<button (click)="addFromWaitingList()">Von Warteliste</button>
```

Nach der Ausführung des Statements überprüft Angular alle Bindungsausdrücke auf Veränderungen und rendert gegebenenfalls die Ausdrücke neu.

Mehr zu Events sowie zu der sogenannten _Change-Detection_ später.

---

# Component Templates: Display Data IV

Daten können in unterschiedlichster Form verarbeitet werden (nicht nur interpoliert im Textinhalt). Eine weitere gängige Form der Bindungs-Techniken ist das **Property-Binding**.

```html
<button [disabled]="waitingList.length === 0" (click)="addFromWaitingList()">
  Von Warteliste
</button>
```

Bei dieser Form werden Ausdrücke an DOM-Elementproperties gebunden. Ein gewisses Verständnis des HTML-DOM ist also recht hilfreich in der Angular-Programmierung <twemoji-winking-face />

---

# Component Templates: Zusammenfassung

Liste der Techniken:

- Interpolation
- Property Binding
- Attribute, Class and Style Bindings
- Event Binding
- Two-Way Binding
- Directives
- Template Reference Variables
- Template Expression Operators

---

# Component Templates: Links

- Einführendes Kapitel in der Dokumentation: [Templates Introduction](https://angular.io/guide/template-syntax)
- Referenz-Kapitel: [Binding Syntax](https://angular.io/guide/binding-syntax)
- Beispiel-Projekt: [Lean-NG/Template-Syntax](https://github.com/lean-ng/edu-template-syntax)

---

# Component: Basics

Eine Anwendung besteht in der Regel aber aus einem kompletten Komponenten-Baum. Die folgenden Slides
stellen die Schritte zur Erzeugung dieses Baums dar sowie Erläuterungen, wie diese Komponenten miteinander
_kommunizieren_.

1. Wie erzeuge ich eine Komponente?
2. Wie binde ich eine Komponente ein?
3. Wie übergebe ich Daten an eine Komponente?

---

# Component Basics: Generate Components I

Wir verwenden im Beispiel Listen jeweils zur Darstellung der Teilnehmer- und der Warteliste. Wir erzeugen nun einen neue Listen-Komponenent, die die Darstellung kapselt. Die Daten bleiben jedoch in der `AppComponent`.

```bash
ng generate component components/person-list
```

Die CLI erzeugt bzw. modifiziert damit folgende Dateien:

<div class="text-sm">

```
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── person-list
│   │   │   │   ├── person-list.component.css
│   │   │   │   ├── person-list.component.html
│   │   │   │   ├── person-list.component.spec.ts
│   │   │   │   ├── person-list.component.ts
```

</div>

---

# Component Basics: Generate Components II

Die erzeugten Dateien entsprechen denen, die wir schon bei der App-Struktur identifiziert haben (Code, Template, Styles, Test Spec). Der zusätzliche Unterordner `components` ist eine individuelle Entscheidung zur Strukturierung der Anwendung ([Application structure in Angular Docs](https://angular.io/guide/styleguide#application-structure-and-ngmodules)).

Variation des Kommandos mit gleichem Ergebnis:

```bash
ng g c components/personList
```

Mit dem Schalter `--help` lassen sich zudem die möglichen Einstellungen bei der Komponenten-Erzeugung anzeigen:

```bash
ng g c --help
```

---

# Component Basics: Konventionen

- Der Klassenname der Komponente ist: `PersonListComponent`. Alle Komponenten enden auf `Component`.
- Der Selektor `selector` für Komponenten ist in der Regel ein Element-Selektor in _kebab-case_-Schreibweise. Die CLI erzeugt voreingestellt ein Prefix `app`.

Bemerkung: die CLI erzeugten früher eine leere `ngOnInit`-Methode, die einen Lifecycle-Hook bedient. Linter meckern diese leere Lifecycle-Methode sofort an. Zudem ist die Bedeutung dieser (und anderer) Lifecycle-Hooks
in der modernen Angular-Entwicklung stark zurückgegangen. Was in diese gehört, welche anderen Lifecycle-Hooks es noch gibt und was im Konstruktor steht: etwas später ...

---

# Component Basics: Einsetzen einer Komponente

Eine Komponente wird verwendet, in dem im Template einer anderen Komponente ein DOM-Tag erzeugt wird, der dem Selektor der Komponente entspricht:

```html
<app-person-list></app-person-list>
<!-- oder ohne Content -->
<app-person-list />
```

Dazu muss die Komponente allerdings in der Parent-Komponente in den `imports`-Metadaten registriert werden.
Meißt erledigt das der eingesetzte Editor für uns.

---

# Component Basics: Passing Data I

Um Daten an eine Komponente zu übergeben:

1. Erzeuge eine Instanz-Variable in der Komponente
2. Dekoriere mit `@Input()` um die Input-Property zu identifizieren

```ts
import { Component, Input } from '@angular/core';

@Component({
  // ...wie bisher...
})
export class PersonListComponent {
  @Input() heading!: string; // Das Ausrufe-Zeichen ist TypeScript und erlaubt die Nicht-Initialisierung

  // ...wie bisher...
}
```

Die neue Instanz-Variable kann wie bisher im Template verwendet werden.

Bemerkung: Angular Dekoratoren sind Funktionen. Die Aufrufklammern sind zwingend notwending.

---

# Component Basics: Passing Data II

Und übergebe die Daten aus der Elternkomponente im Template:

```html
<app-person-list [heading]="'Teilnehmer'" />
<app-person-list heading="Warteliste" />
```

Beide Varianten sind möglich. Hier werden jeweils statische Strings übergeben. Das ganze geschieht analog zum Setzen von DOM-Properties.

---

# Component Basics: Passing Data III

Natürlich werden in der Regel eigene Variablen übergeben:

```html
<app-person-list heading="Warteliste" [persons]="waitingList" />
```

Hierzu muss natürlich vorher die entsprechende Input-Property in der `PersonListComponent` erzeugt werden.

---

# Components: Handling Events

- Bindung an Events
- Der `$event`-Payload
- Erzeugung eigener Events, zur Kommunikation mit der Eltern-Komponente

---

# Events: Bind to an event

Die Bindung an ein (DOM-) Event erfolgt mit der `(eventName)="action"`-Attributsyntax in einem DOM-Tag.

- `eventName`: An welches Event wird gebunden?
- `action`: Code der ausgeführt wird, wenn das Event ausgelöst wird

`action` ist in den meißten Fällen ein Methodenaufruf. Es können aber auch einfache gültige Anweisungen sein (z.B. eine Property-Zuweisung). Mehrere Anweisungen können mit Semikolons getrennt angegeben werden.

---

# Events: Event-Object, Payload

Jedes Event kann ein Event-Object oder Payload liefern. Auch DOM-Events liefern einen solchen Payload - zum Beispiel das `KeyboardEvent`-Objekt bei den Keyboard-Events.

Auf dieses Event-Objekt kann im Template über die Spezialvariable `$event` in der Event-Aktion zugegriffen werden.

```html
<an-element (event)="handleEvent($event)"></an-element>
```

---

# Events: Keyboard-Event Filtering

Um die DX (Developer Experience) zu verbessern, hat Angular den Keyboard-Events zusätzliche Pseudo-Events spendiert[^1].

```html
<an-element (keyup.enter)="handleEvent()"></an-element>
```

Diese Technik ist isoliert bei den Keyboard-Events eingeführt worden. Netanel Basal hat in seinem Blog mit [Implementing evenet modifiers](https://netbasal.com/implementing-event-modifiers-in-angular-87e1a07969ce) ein Beispiel geliefert, wie dieses Konzept weitergedacht werden könnte.

[^1]: Link in das Docs-Archiv: [User Input](https://angular.io/guide/user-input#key-event-filtering-with-keyenter)
