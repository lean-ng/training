---
info: |
  ## Angular Slides
  Präsentation zu [Angular](https://angular.io) - Work In Progress

  Repository der Slides: [lean-ng/slides](https://github.com/lean-ng/slides)
---

# Angular Kompakt

Willkommen bei Ihrer Angular Schulung!

---

## layout: 'intro'

# Michael Buchholz

<div class="leading-8 opacity-80">
Trainer und freiberuflicher Entwickler.<br>
Open Source Enthusiast.<br>
From Backend to Frontend (Web).<br>
</div>

<div class="my-10 grid grid-cols-[40px,1fr] w-max gap-y-4">
  <ri-github-line class="opacity-50"/>
  <div><a href="https://github.com/lean-stack" target="_blank">lean-stack</a></div>
</div>

<img src="/profile.jpg" class="rounded-full w-40 abs-tr mt-16 mr-12"/>

<!--

# Meine Vision

Our teaching relies on *live coding*.
Instead of presenting slides to learners,
instructors write code as they go along,
using whatever tools they would use in real life.
Live coding's advantages are:

1.  Watching a program being written is more compelling than watching
    someone page through slides that present bits and pieces of the same
    code.

1.  It enables instructors to be more responsive to "what if?"
    questions. Where a slide deck is like a railway track, live coding
    allows instructors to go off road and follow their learners'
    interests.

1.  People learn more than we realize we are teaching by watching
    *how* instructors do things.

1.  It slows the instructor down: if she has to type in the program as
    she goes along, she can only go twice as fast as her learners,
    rather than ten times faster as she could with slides.

1.  Learners get to see instructors' mistakes *and how to diagnose
    and correct them*. Novices are going to spend most of their time
    doing this, but it's left out of most textbooks.

1.  Watching instructors make mistakes shows learners that it's all
    right to make mistakes of their own.  Most people model the behavior of
    their teachers: if the instructor isn't embarrassed about making and
    talking about mistakes, learners will be more comfortable doing so
    too.

Live coding doesn't make slides irrelevant.
Instead, they serve two purposes:

1.  Instructors read them *before* the lesson to be sure they have a
    clear picture of the lesson's flow.

1.  Learners read them *after* the lesson for review and reference.
    They can also be given a printed copy of the slides to mark up
    during the lesson so that they don't have to take notes from
    scratch.

 -->

---

# TypeScript Primer

## Was ist TypeScript?

TypeScript ist modernstes JavaScript - erweitert um statische Typisierung sowie
viele weitere Sprachmittel einer modernen objekt-orientierten Programmiersprache.

Zum Zeitpunkt der Einführung im Jahr 2012 griff TypeScript auf die kommenden
Features der ECMAScript Version 6 (später ECMAScript 2015 oder einfacher
JavaScript 2015) vor.

Aktuell folgt TypeScript in seinen Version der jeweils gültigen JavaScript-Version -
jedoch nicht ohne eigene Weiterentwicklung auf dem Typ-System und den spezifischen
Erweiterungen.

Homepage: [www.typescriptlang.org/](https://www.typescriptlang.org/)

---

# TypeScript: Was ist TypeScript?

```ts
class BaseClass {
  constructor(parA, parB) {
    this.propA = parA;
    this.propB = parB;
  }
  method(parA) {
    return this.propA + this.propB + parA;
  }
}
class SubClass extends BaseClass {
  constructor(parA, parC) {
    super(parA, 17);
    this.probC = parC;
  }
  anotherMethod() {
    return super.method(21) * this.propC;
  }
}
const obj = new SubClass(17, 4);
console.log(obj.method(100));
console.log(obj.anotherMethod());
```

<div v-click class="absolute top-30 right-20 opacity-80 text-red-400 text-xl">
Das nicht, das ist pures JavaScript!
</div>

---

# TypeScript: Statische Typisierung und Properties

```ts
class BaseClass {
  private propA: number;
  public propB: boolean;

  constructor(
    private propC: string,
    propA: number,
    propB: boolean
  ) {
    this.propA = propA;
    this.propB = propB;
  }

  method(par: number): string {
    return `${this.propC}: ${this.propA}`;
  }
}

const obj: BaseClass = new BaseClass('Antwort', 42, true);
```

---

# TypeScript: Types, Interfaces, Enums

```ts
type Person = {
  titel?: string;
  vorname: string;
  nachname: string;
};
type FullnameFn = (person: Person) => string;

interface Firma {
  name: string;
  stammsitz: string;
}
interface MethodSignatur {
  (a: number, b: number): number;
}

enum Filter {
  Alle,
  Aktive,
  Abgeschlossene,
}
```

<div class="text-xs">Types vs Interfaces:
<a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces">Doc</a> bzw. <a href="https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript">Stack Overflow</a>
</div>

---

# TypeScript: Generics

```ts
class Wrapper<T> {
  constructor(public value: T) {}
  hasValue(): boolean {
    return typeof value !== 'undefined' && value !== null;
  }
  getValue(): T {
    if (!hasValue) {
      throw Exception('No value');
    }
    return this.value;
  }
}

const loadFromStorage = <T>(key: string) =>
  JSON.parse(localStorage.getItem(key)) as T;
```

---

# TypeScript: Decorators

Experimentelles Feature in TypeScript, für JavaScript existiert
nur ein Proposal auf dem Stage 2. **Decorators** werden in Angular
aber intensiv genutzt.

```ts
@Component({
  template: '<span>Hooray</span>',
})
class HoorayComponent {}
```

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
npm install --global @angular/cli
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
Die Liste der aktuell unterstützten Browser findet man jederzeit in der [Dokumentation](https://angular.io/guide/browser-support)[^1].

Hilfreich bei der Entwicklung sind die [Angular DevTools](https://angular.io/guide/devtools) - eine Browser Developer Extension für den Google Chrome.

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
- Powershell
- Git Bash (kommt mit der Git-Installation)
- WSL-Bash (Windows Subsystem für Linux)

Zum bequemeren Umgang mit den diversen Konsolen und Shells empfiehlt sich der neue [Windows Terminal](https://www.microsoft.com/de-de/p/windows-terminal/9n0dx20hk701).

---

# Setup: Powershell

Beim Einsatz der Powershell ist zu beachten, dass die Ausführungsrechte für Scripte konfiguriert sind:

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

Obiges Kommando funktioniert natürlich nur mit einer global installierten Angular CLI. Das Projekt wird dann genau gemäß der CLI-Version installiert.

Etwas flexibler ist man bei der Installation ohne globale CLI:

```bash
npx -p @angular/cli@latest ng new sample-schulung
```

Den Ausdruck `latest` kann man durch eine gewünschte Versionsnummer ersetzen (z.B. 10) oder einfach weglassen.

---

# Hello Angular: Projekt erzeugen II

Das `ng new sample-schulung` Kommando

- erzeugt ein neues Verzeichnis `sample-schulung`
- legt ein Anwendungsgerüst gemäß der gewünschten Angular-Version und den per Schalter angegebenen Optionen an
- installiert die Angular-Pakete und deren Abhängigkeiten
- initialisiert die Unit-Test Umgebung

Das ganze dauert je nach Rechner und Netztwerkgeschwindigkeit einige Sekunden ...

---

# Hello Angular: Top-Level Struktur

```
├── package.json
├── tsconfig*.json
├── angular.json
├── karma.conf.js
├── node_modules/
├── src/
```

- `package.json`: Projekt Metadaten (NPM Module, Script-Kommandos, Autor, Lizenz, ...)
- `tsconfig*.json`: TypeScript Konfiguration
- `angular.json`: Angular CLI und Build Konfiguration
- `karma.conf.js`: Karma (Test Runner) Konfiguration
- `node_modules`: Verzeichnis mit den NPM Modulen (zur Zeit >400 MB groß)
- `src`: Verzeichnis mit dem Anwendungs-Sourcecode.

<style> pre { margin: 1rem 0;  } </style>

---

# Hello Angular: Source-Ordner Struktur

```
├── src
│ ├── index.html
│ ├── main.ts
│ ├── polyfills.ts
│ ├── test.ts
│ ├── styles.css
│ ├── app/
│ ├── environments/
│ ├── assets/
```

- `index.html`: HTML-Startseite der Anwendung
- `main.ts`: Bootstrap-/Start-Script der Anwendung
- `polyfills.ts`: Browser-Polyfills (_Moltofill_ für ältere Browser)
- `test.ts`: Start-Script der Unit-Tests
- `styles.css`: Globale Styles
- `app`: _Unser_ Quellcode-Ordner
- `environments`: Die CLI unterstützt Umgebungen (**production**, **development**, **staging**, ...)
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
│   │   ├── app.module.ts
```

- `app.module.ts`: Hauptmodul der Anwendung, Laden der notwendigen weiteren Module sowie Steuerung des Anwendungsstarts
- `app.component.ts`: Bootstrap-/Haupt-Komponente der Anwendung
- `app.component.html`: HTML-View/Ansicht der Haupt-Komponente
- `app.component.css`: Styles (lokal, gescoped) der Haupt-Komponente
- `app.component.spec.ts`: Test Spec der Haupt-Komponente

<style> pre { margin: 1rem 0 ; } </style>

---

# Hello Angular: Hauptmodul I

```ts {all|16}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

<v-after>

Ein Modul wird wie jedes weitere Angular-Artefakt (Component, Directive, Pipe, Service) in einer TypeScript-Datei als Klasse deklariert und exportiert.

</v-after>

---

# Hello Angular: Hauptmodul II

```ts {1-4}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

TypeScript Imports

---

# Hello Angular: Hauptmodul III

```ts {6-15}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

<div class="my-2 text-sm">
TypeScript Decorator - Metadaten für Angular
</div>

<div class="text-sm">

<v-clicks>

- Welche Komponenten deklariert dieses Modul zur Verwendung?
- Welche weiteren Module werden importiert?
- Welche Komponente wird beim Anwendungsstart benötigt?

</v-clicks>

</div>

---

## clicks: 5

# Hello Angular: Komponenten I

```ts {1-10|3-7|4|5,6|8-10|9}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sample-schulung';
}
```

Aufbau einer Komponente

<ul>
  <li v-click="1">Component-Decorator</li>
  <li v-click="2" class="!ml-8">Selektor bestimmt, wie die Komponente eingesetzt wird.</li>
  <li v-click="3" class="!ml-8">Verweis auf externes Template und Stylesheets</li>
  <li v-click="4">Component-Class</li>
  <li v-click="5" class="!ml-8">Instanz-Daten (Property)</li>
</ul>

---

# Hello Angular: Komponenten II

```ts {all|5|6}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1>', // inline HTML
  styles: ['h1 { font-weight: normal; }'], // inline styles
})
export class AppComponent {
  title = 'Hello Angular';
}
```

Template und Styles können auch inline definiert werden.

---

## clicks: 1

# Hello Angular: Template Syntax I

```html {all|13}
<style>
  :host {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
  h1,
  h2 {
    font-weight: 500;
  }
</style>

<h1>Angular Schulung</h1>
<h2>Projekt: {{ title }}</h2>
```

<div v-click="1" class="mt-2">

- `<h2>Projekt: {{title}}</h2>` ist eine _Interpolation_
- Der Ausdruck in `{{...}}` wird ausgewertet und das Ergebnis eingesetzt als Zeichenkette
- Symbole wie hier `title` werden in einem Kontext ausgewertet
- Der Kontext ist in diesem Fall die Componenten-Instanz
- Mehr zur Template-Syntax später ...

</div>

---

# Hello Angular: Template Syntax II

```html {1-10}
<style>
  :host {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
  h1,
  h2 {
    font-weight: 500;
  }
</style>

<h1>Angular Schulung</h1>
<h2>Projekt: {{ title }}</h2>
```

Lokale Styles können auch inline im Template definiert werden.

Der Pseudo-Selektor `:host` bezieht sich dabei auf den äußeren Tag,
der die Komponente einsetzt und instanziiert.

---

# Hello Angular: Zusammenfassung

Komponenten sind die Hauptbausteine einer Angular-Anwendung

<v-clicks>

- Sie kapseln Datendarstellung und (zum Teil) Anwendungslogik
- Komponenenten werden in Modulen organisiert
- Jede Angular Anwendung hat ein Hauptmodul `AppModule` und eine Hauptkomponente, die im Hauptmodul deklariert wird und zum _Bootstrap_ markiert wird.
- Eingesetzt wird diese im globalen `index.html`

</v-clicks>

---

# Hello Angular: Starten der Anwendung

- Start auf der Konsole über `npm start` oder `ng serve`
- Automatisierte Unit-Tests werden ausgeführt mit `npm test` oder `ng test`
- Production-Build erzeugen mit `npm run build` oder `ng build`

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
│   │   ├── app.module.ts
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

In der `app.module.ts` wird die Komponente in der Deklarationsliste aufgenommen. Grundsätzlich müssen alle Komponenten (und später auch Direktiven und Pipes) deklariert werden um verwendet zu werden.

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

Bemerkung: die CLI erzeugt zur Zeit eine leere `ngOnInit`-Methode, die einen Lifecycle-Hook bedient. Linter meckern diese leere Lifecycle-Methode sofort an. Was in diese gehört, welche anderen Lifecycle-Hooks es noch gibt und was im Konstruktor steht: etwas später ...

---

# Component Basics: Einsetzen einer Komponente

Eine Komponente wird verwendet, in dem im Template einer anderen Komponente ein DOM-Tag erzeugt wird, der dem Selektor der Komponente entspricht:

```html
<app-person-list></app-person-list>
<!-- oder ohne Content -->
<app-person-list />
```

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

---

# Services / Dependency Injection

- Was ist ein Dienst?
- Wie erzeuge ich einen Dienst?
- Wie nutze ich einen Dienst?

---

# Services: What is a service?

- _Etwas_ das Funktionalität bereitstellt.
  - Oft als Singleton implementiert
  - Beispiele: API-Wrapper, HTTP-Wrapper, Business-Logik
- Nicht gekoppelt an einen View bzw. eine Komponente

---

# Services: What is an Angular Service?

Ein Service in der Angular-Welt ist meißt eine Instanz einer Klasse.

```ts
import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {}
```

Die Dekopration als `@Injectable` ist theoretisch optional. Sie bedeutet(e), dass der eventuelle Konstruktor des Services weitere Service verlangen darf und dass der Dependency-Injection Container diese auflöst. Er bedeutet also primär nicht, dass dieser Service injezierbar in andere Klassen ist.

---

# Service: How do I create a service?

- Ich erstelle eine Klasse ;-)
- `ng generate service service-name`

---

# Service: How do I provide a service?

Ein Service muss in der Angular-Welt im Dependency Injection-Container registriert werden.

Best-Practice aktuell ist, dass der Service im `@Injectable`-Dekorator sich _selbst_ bereitstellt.

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {}
```

---

# Service: How did I provide services?

Vor Angular 6 musste der Service im `provides`-Array eines `NgModule` oder eines `Component`-Dekorators bereitgestellt werden.
Letzteres konnte benutzt werden, um mehrere Service-Instanzen in einer Anwendung vorzuhalten (pro Component-Subtree).

Dazu gab es verschiedene Varianten: [DI Providers](https://angular.io/guide/dependency-injection-providers)

Diese Technik sollte nur noch bewusst und in Ausnahme-/Spezialfällen angewendet werden.

---

# Service: How do I consume a Service?

Ein Service wird vom DI-Container _verlangt_ durch Konstruktor-Injektion. D.h. unser Konstruktor hat einen Parameter vom Service-Typ:

```ts
export class SomeComponentOrSomethingElse {
  constructor(private persistenceSvc: PersistenceService) {}
}
```

In manchen Spezialfällen braucht man am Konstruktorargument einen `@Inject`-Dekorator am Argument.

---

# Tooling

Was gehört zu den Werkzeugen bei der Code-Entwicklung?

- Code-Versionierungssystem
- Entwicklungsserver
- Erstellen des Produktions-Build
- Automatisiertes Testen (Unit- und E2E-Tests)
- Code-Kontrolle (Syntax, Styleguide, Best Practices)
- Continuous Integration
- Debugging

Versionierungssystem und CI sind weitgehend _framework-agnostic_ und werden hier nicht weiter beleuchtet.

---

# Tooling: CLI

Das wichtigste Werkzeug bei der Angular-Entwicklung ist das CLI. Es orchestriert die verschiedenen Techniken unter der Haube.

In der aktuellen Version (Angular 12+) deckt sie _out-of-the-box_ die Bereiche Entwicklungsserver, Produktions-Build und automatisierte Unit-Tests ab.

Über sogenannte CLI Builder sind diese Prozesse anpassbar bzw. erweiterbar.

---

# Tooling: Build

Das Angular CLI verwendet aktuell zum Build immer noch im Wesentlichen [Webpack](https://webpack.js.org/). Die Vorverarbeitung des Quellcodes geschieht über den Angular Compiler.

---

# Tooling: Unit Tests

Die aktuelle Standard-Konfiguration des CLI verwendet und orchestriert den Test-Runner [Karma](https://karma-runner.github.io/) und das Test-Framework [Jasmine](https://jasmine.github.io/).

Zur (nicht-offiziellen) Verwendung von [Jest](https://jestjs.io/) siehe:

- https://github.com/briebug/jest-schematic
- https://github.com/just-jeb/angular-builders/tree/master/packages/jest
- https://github.com/thymikee/jest-preset-angular

---

# Tooling: E2E Tests

Bis hin zu Angular 11 unterstütze die Angular CLI das E2E Testframwork [Protractor](https://www.protractortest.org/).

Da Protractor selbst Ende 2022 nicht mehr weiterentwickelt wird (siehe [Issue 5502](https://github.com/angular/protractor/issues/5502)), wird seit Angular 12 auch kein Code mehr in neuen Projekten erzeugt.

Als Alternative kann stattdessen auf [Cypress](https://www.cypress.io/) oder andere E2E Test-Frameworks gesetzt werden.

Anweisungen zu Migration: [Cypress Docs](https://docs.cypress.io/guides/migrating-to-cypress/protractor#Getting-Started)

---

# Tooling: Linting

Die Code-Kontrolle übernahm (ebenfalls bis zur Angular Version 11) vorkonfiguriert das Projekt [tslint](https://palantir.github.io/tslint/). Allerdings war dieses schon seit 2019 _deprecated_ und es wurde seitens _tslint_ schon lange auf [ESLint](https://eslint.org/) verwiesen.

Standard Angular 12 Projekte bringen tatsächlich zunächst überhaupt keinen vorkonfigurierten Linter mit. `ng lint` empfiehlt die Verwendung von ESLint mit [Angular ESLint](https://github.com/angular-eslint/angular-eslint).

---

# Tooling: Debugging

Hier spielt die CLI nur eine untergeordnete Rolle. Sie stellt natürlich über den Entwicklungs-Build eine debug-fähige Variante unserer Anwendung bereit.

Wichtigste Werkzeuge im Browser:

- [Angular DevTools](https://angular.io/guide/devtools) - haben das jetzt veraltete [Augury](https://augury.rangle.io/) abgelöst.
- Debugging über Sources View (und Source Maps)
- Die Browser DevTool Konsole
  - Bis Angular 8: https://juristr.com/blog/2016/02/debugging-angular2-console/
  - Ab Angular 9+: https://juristr.com/blog/2019/09/debugging-angular-ivy-console/

Wichtigste Extension im VS Code:

- Chrome Debugger (mittlerweile integriert)
