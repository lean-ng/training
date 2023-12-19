# Angular

Inhaltsverzeichnis

* [Angular Projekt](#offiziell)
* [Blogs](#blogs)
* [Cheat Sheets](#cheat-sheets)
* [CLI Changelog](#cli-changelog)
* [Change Detection](#change-detection)
* [RxJS](#rxjs)
* [Forms](#forms)
* [Testing](#testing)
* [Libraries](#libraries)
* [Resources](#andere-quellen-sammlungen)

## Offiziell

* [Angular Developer Hompage](https://angular.dev)
* [Angular Homepage (Legacy)](https://angular.io)
	- [Dokumentation](https://angular.io/docs)
  - [API](https://angular.io/api)
  - [CLI](https://angular.io/cli)
* [Angular Blog](https://blog.angular.io/)
* [Update Guide](https://update.angular.io/)
* [Angular Material](https://material.angular.io/)

## Blogs

Neben dem offiziellen [Angular Blog](https://blog.angular.io/), der immer zu konsultieren ist bei neuen Releases - aber auch grundsätzliche zukünftige Richtungsänderungen des Angular Universums ankündigt, gibt es einige herausragende Blogger in der Angular Welt.

### Empfehlungen

* [Netanel Basal](https://netbasal.com/)
* [Ninja Squad](https://blog.ninja-squad.com/tags.html#Angular-ref)
* [indepth.dev](https://indepth.dev/angular/)
* [Ultimate Courses Blog](https://ultimatecourses.com/blog/category/angular)
* [Nx Blog](https://blog.nrwl.io/angular/home)
* [Christian Lüdemann](https://christianlydemann.com/blog/)
* [Daniel Kreider](https://danielk.tech/)
* [Angular Experts](https://angularexperts.io/blog)

### Archiv

Die folgenden Blogs sind zum Thema Angular nicht mehr unbedingt aktuell, es werden keine (oder kaum) neue Artikel mehr veröffentlicht. Hier lohnt aber durchaus ein Stöbern im jeweiligen Archiv - insbesondere zu stabilen Themen um Angular und das Ecosystem herum.

* [Rangle.io](https://rangle.io/blog/) Rangle.io scheint ein wenig Richtung React zu kippen. Außerdem hat der Blog den Topic/Tag-Mechanismus entfernt. Ein Stöbern in den Beiträgen startet man am Besten über einen Angular-Beitrag, zum Beispiel den [aktuell letzten Artikel aus dem Mai 2023](https://rangle.io/blog/angular-schematics-for-developers-part-2).
* [Auth0-Blog](https://auth0.com/blog/search/?query=angular)
* [Juri Strumpflohner](https://juristr.com/tags/angular/) Artikel bis April 2021
* [Minko Gechev](https://blog.mgechev.com/) Artikel bis Februar 2021
* [Malcoded](https://malcoded.com/) Artikel bis Februar 2020
* [Thoughtram](https://blog.thoughtram.io) Artikel bis März 2019
* [Angular University](https://blog.angular-university.io/) Achtung: aller Artikel sind datiert auf Januar 2023, sind aber viel älter.
* [Victor Savkin](https://vsavkin.com/) Artikel bis Juli 2016

## Cheat Sheets

* [Angular.io](https://angular.io/guide/cheatsheet)
* [Malcoded](https://malcoded.com/angular-cheat-sheet/)

## Tutorials

* [Angular Challanges](https://github.com/tomalaforge/angular-challenges)

## CLI Changelog

* [GitHub Repo mit Diffs für alle CLI Versionen](https://github.com/cexbrayat/angular-cli-diff)
* [Whats new in CLI x.y?](https://blog.ninja-squad.com/tags.html#Angular%20CLI-ref)

## Change Detection

Der aktuell beste Artikel zum Thema stammt von Max Koretskyi - steigt aber wirklich in die Tiefen von Angular ab. Nicht ganz perfekt aber sehr anschaulich visualisiert die Demo-Anwendung von Daniel Wiehl die Mechanismen und Auswirkungen.

* [Deep Dive von Max Koretskyi](https://indepth.dev/posts/1515/deep-dive-into-the-onpush-change-detection-strategy-in-angular)
* Demo-App von Daniel Wiehl
  - [GitHub Repository](https://github.com/danielwiehl/edu-angular-change-detection)
  - [Anwendung](https://danielwiehl.github.io/edu-angular-change-detection/)

In meinen Empfehlungen waren immer folgende Beiträge gelistet. Sie gehen meißtens nicht
ganz so tief wie der Deep Dive von oben, haben aber alle mehr oder weniger anschaulich
die Mechanismen dargestellt. Leider sind bei einigen die Grafiken mittlerweile *kaputt*,
vielleicht werden sie ja irgendwann nochmal "repariert" ;-)

* [Pascal Precht von Thoughtram](https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html)
* [Angular University - How does Angular CD works](https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/)
* [Michael Hoffmann - The last guide ;-)](https://www.mokkapps.de/blog/the-last-guide-for-angular-change-detection-you-will-ever-need/)
* [Victor Savkin](https://vsavkin.com/change-detection-in-angular-2-4f216b855d4c)
* [Netanel Basal](https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4)
* [Minko Gechev](https://blog.mgechev.com/2017/11/11/faster-angular-applications-onpush-change-detection-immutable-part-1/)

## RxJS

- [Homepage](https://rxjs.dev/)

Die Haupt-Schwierigkeit bei vielen Artikeln und Tutorials ist für uns oft, einzugrenzen
welcher API-Version der jeweilige Autor folgt. Alles vor der RxJS-Version 6 ist definitiv
veraltet (Wechsel im Früjahr 2018 mit Angular 6). Version 7 kam im Frühjahr 2021 heraus,
Angular wechselte im Herbst mit dem 13er Release.

Die mit Angular 16 eingeführten [Signals](https://angular.io/guide/signals) (aktuell noch
Developer Preview) werden sicherlich eine relevante Veränderung in der Nutzung von RxJS
haben. Synchrone reaktive State-Programmierung wird wesentlich einfacher mit Signalen zu
implementieren sein.

### Tutorials

- [Learn RxJS](https://www.learnrxjs.io/)
- [What are Observables? - Artikelserie](https://dev.to/bhagatparwinder/what-are-observables-khb)

### Artikel

Die folgenden Artikel/Beiträge erklären nicht nur die jeweiligen RxJS-Operatoren,
sondern liefern ebenso ein tieferes Verständnis für RxJS allgemein bzw. den einen
oder anderen *Aha*-Moment.

- [Operator share vs shareReplay](https://www.bitovi.com/blog/always-know-when-to-use-share-vs.-sharereplay)
- [Sharing Operators](https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255)
- [RxJs Mapping: switchMap vs mergeMap vs concatMap vs exhaustMap](https://blog.angular-university.io/rxjs-higher-order-mapping/)

Und ein etwas älterer Artikel (API-Version nicht mehr aktuell) über ein
Standard-Problem (Caching von HTTP-Requests) und dessen Lösung mit RxJS zeigt:

* [Advanced Caching with RxJS](https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html)

## Forms

In Angular existieren zwei Ansätze Formulare und deren Handling incl. Validierung
in Komponenten (Template und Code) zu steuern. Während anfänglich die sogenannten
Template-Driven Forms (Import der Direktiven vom `FormsModule` aus `@angular/forms`)
den Standard-Weg darstellten - auch wiedergespiegelt durch eine stärkere Präsenz in
der Dokumentation, galten über viele Jahre und Versionen später die Reactive Forms
- auch Model-Driven Forms genannt - als die mächtigere und zu bevorzugende Variante
(Import der Direktiven vom `ReactiveFormsModule` aus `@angular/forms`). Spätestens
mit Angular 14 und der Einführung der [Typed Forms](https://angular.io/guide/typed-forms)
wurden weitere Unwägbarkeiten adressiert und der zukünftige Fokus schien klar.

Allerdings tendieren in letzter Zeit vermehrt Entwickler dazu, wieder auf die
Template-Forms und ihre Simplizität zu setzen. Unter der Haube verwenden beide APIs
die gleichen internen Klassen und es ist relativ problemlos möglich ein Template Form
mit den üblichen Anforderungen aus dem anderen Ansatz zu erweitern.

### Template vs Model Forms

* [Blog from netanel Basal](https://netbasal.com/why-its-time-to-say-goodbye-to-angular-template-driven-forms-350c11d004b)
* [Article](https://www.ryadel.com/en/angular-forms-template-driven-model-driven-reactive-pros-cons-tutorial-guide/)

### Custom Validators and Controls

* [Best Practice on Defining Validators](https://indepth.dev/posts/1319/the-best-way-to-implement-custom-validators)
* [Control Value Accessor](https://www.tsmean.com/articles/angular/angular-control-value-accessor-example/)

### Renaissance of Template Forms

* [Practical Guide, November 2022](https://timdeschryver.dev/blog/a-practical-guide-to-angular-template-driven-forms)
* [Template Forms with Reactive State](https://blog.simplified.courses/template-driven-or-reactive-forms-in-angular/)
* [Say Goodbye to custom validators](https://blog.simplified.courses/say-goodbye-to-custom-form-validators-in-angular/)

## Testing

Beim Thema Test von Angular Anwendungen ist zunächst wichtig, abzugrenzen welche
Frameworks und Bibliotheken zum Einsatz kommen (sollten):

* Test Runner:
  - Aktuell: [Karma](https://karma-runner.github.io/latest/index.html)
  - Alternative: [Jest](https://jestjs.io/)
* Test Framework:
  - Aktuell: [Jasmine](https://jasmine.github.io/)
  - Alternative: [Jest](https://jestjs.io/)
* Hilfs-Bibliotheken:
  - Aktuell: Angular Testing Utilities/Tools
  - Alternativen: [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro) oder [Spectator](https://ngneat.github.io/spectator/)

Im Bereich E2E-Testing hat Angular schon den Wechsel vollzogen und mit Angular 12 das
veraltete Protractor-Framework aus dem Standard-Template rausgeworfen:
[State of End-To-End Testing](https://blog.angular.io/the-state-of-end-to-end-testing-with-angular-d175f751cb9c)
Beim Unit-Testing gibt es ähnliche Überlegungen zum Wechsel von Karma (seit April 2023 mit dem Status **deprecated**)
/ Jasmine zu Jest: [Moving Angular CLI to Jest](https://blog.angular.io/moving-angular-cli-to-jest-and-web-test-runner-ef85ef69ceca).

### Ebooks/Artikel

* [Testing Ebook (Jasmine, Spectator und Cypress)](https://testing-angular.com/)
* [Angular Testing - Past, Present and Future](https://dev.to/this-is-angular/angular-testing-in-2023-past-present-and-future-j5m)
* [Einfachere Tests mit der Testing Library](https://timdeschryver.dev/blog/good-testing-practices-with-angular-testing-library)

## Libraries

Angular liefert als Framework ein Komplett-Paket mit allem an Bord, um produktive
Anwendungen zu schreiben. Dennoch muss man das Rad nicht komplett neu erfinden und
kann bei bestimmten Themen auf vorgefertigte Hilfs-Bibliotheken oder ganze Libraries
setzen. Oft werden solche Lösungen beim globalen State-Management eingesetzt:

* [Elf](https://ngneat.github.io/elf/)
* [NGRX](https://ngrx.io/)
* [NGXS](https://www.ngxs.io/)
* [Akita](https://opensource.salesforce.com/akita/)
* [RxAngular State](https://www.rx-angular.io/docs/state)

In obiger Liste ist Elf die schlankeste Lösung, NGRX sicherlich die mächtigste - aber
auch komplexeste Variante. Der Rest liegt irgendwo dazwischen.

Als Ausgangspunkt zum Stöbern nach kleineren (und größeren) Lösungen für andere Aufgaben
im Umfeld von Angular Anwendungen empfehle ich als Startpunkt

* [NgNeat](https://github.com/ngneat)

## Angular Server/Universal/Fullstack

* [Analog](https://analogjs.org/)

## Andere Quellen-Sammlungen

Als Ausgangspunkt zum Weiterstöbern können folgende Link-Sammlungen dienen. Achtung:
nicht immer ist dort alles aktuell bzw. noch verfügbar. Beim Awesome-Projekt ist die
verlinkte Webseite definitiv veraltet.

* [Angular Learning Resources](https://github.com/avatsaev/angular-learning-resources)
* [Awesome Angular](https://github.com/PatrickJS/awesome-angular)

## Beispiel-Anwendungen

* [Angular Nordwind mit Material](https://github.com/danielschmitz/my-sales-aapp)
