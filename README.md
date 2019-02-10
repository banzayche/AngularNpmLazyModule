# LazyLoadedModuleThruNpm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

### DESCRIPTION
This brach keeps chages to show how possible use lazy load module from node_modules (compiled bundle).
Unfortunatly this example works only if there is no nested feature modules in lazy loaded module.

### Status
[![Build Status](https://travis-ci.org/banzayche/AngularNpmLazyModule.svg?branch=master)](https://travis-ci.org/banzayche/AngularNpmLazyModule)

### How to see the demo
1. Clone repo and install dependencies
  1. Run `npm i`;
  2. Install local package of the lazy-module-lib `npm i ./projects/lazy-module-lib/lazy-module-lib-0.0.1.tgz`;
2. Run `npm run start` and navigate to `http://localhost:4200/`;

### How can I check that PROD bundles are work
Run `npm run serve.prod.files` and navigate to `http://127.0.0.1:8080`

## Development server
Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run build.prod` flag for a production build.

