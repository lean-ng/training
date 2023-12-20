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
