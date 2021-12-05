# electron-cra-typescript-fs-not-defined
Using `electron-store` in the rendered process yeilds an error as seen below.

### How to reproduce
After you have installed the deps try running the app and you will see an error.
```
npm start
```

### Stack trace

```
Uncaught TypeError: fs.existsSync is not a function
    at getElectronPath (index.js:8)
    at Object.<anonymous> (index.js:21)
    at Object../node_modules/electron/index.js (index.js:21)
    at __webpack_require__ (bootstrap:851)
    at fn (bootstrap:150)
    at Object../node_modules/electron-store/index.js (index.js:3)
    at __webpack_require__ (bootstrap:851)
    at fn (bootstrap:150)
    at Module.<anonymous> (main.chunk.js:16)
    at Module../src/index.tsx (index.tsx:14)
    at __webpack_require__ (bootstrap:851)
    at fn (bootstrap:150)
    at Object.1 (index.tsx:14)
    at __webpack_require__ (bootstrap:851)
    at checkDeferredModules (bootstrap:45)
    at Array.webpackJsonpCallback [as push] (bootstrap:32)
    at main.chunk.js:1
```