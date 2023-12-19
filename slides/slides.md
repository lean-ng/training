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
