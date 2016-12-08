# component

A [jspm](http://jspm.io/) project for dynamically loading React components from npm. 

## Structure

* `jspm_packages`: jspm dependecies such as react, react-dom, etc.
* `lib`: Built library consumed by the Jupyter extension
* `src`: Source code
  * index.js: Exports `asyncReactDOM` which behaves like `ReactDOM` except that it can dynamically load React components from npm and mount them to a DOM node once loaded
  * test.js: Test `index.js` with different remote React components
* `test`: Navigate to this directory in your browser to test `src/test.js`

## Install

* Install npm dependencies: `npm install`
* Install jspm dependencies: `npm run jspm:install`

## Build

* Build `src/index.js` to `lib/index.js`: `npm run jspm:build`

## Test

Start a web server (`http-server .` using [http-server](https://www.npmjs.com/package/http-server)) in this directory and navigate to [http://localhost:8080/test/](http://localhost:8080/test/) (or whichever port your web server is serving from) to test components in isolation before building this library for the Jupyter extension.
