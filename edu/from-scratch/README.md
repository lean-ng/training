# Angular from Scratch

> Ziel dieses Projektes ist es, den Aufbau einer Angular-Anwendung von der ersten Datei aus
> bis hin zur kompletten Anwendung darzustellen.

## Task 1: Create a runnable Web App

### Node project configuration

- Add this readme-file
- Add editorconfig
- Initialize node package

### Install the angular toolchain

- Add Angular CLI as build system to dev-time dependencies

First run of `ng serve` errors with

    Error: This command is not available when running the Angular CLI outside a workspace.

Resolving this error and subsequent errors leads to ...

- Add Angular workspace configuration file
- Add Angular devkit to dev-time dependencies and configure project and targets.
- Add index file `src/index.html`
- Add TypeScript to dev-time dependencies and provide minimal configuration
- Add browser entry point `src/main.ts`

### Utilize toolchain features

- Copying static assets (including favicon)
- Add global styles

## Task 2: Make the app an Angular app

### Create the root component

- Add Angular core package to prod dependencies
- Create app component (aka root component) and adjust tsconfig

### Bootstrap the app

- Add Angular platform (browser of course) to prod deps
- Mark component as standalone to create a module-less app
- Add the still required lib `zone.js` to prod deps and configure as polyfill to load it
