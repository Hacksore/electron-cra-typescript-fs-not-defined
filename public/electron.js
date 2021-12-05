// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const ElectronStore = require("electron-store");

const store = new ElectronStore();

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame: false, // removes the frame from the BrowserWindow. It is advised that you either create a custom menu bar or remove this line
    webPreferences: {
      devTools: isDev, // toggles whether devtools are available. to use node write window.require('<node-name>')
      nodeIntegration: true, // turn this off if you don't mean to use node
    },
  });

  // load the index.html of the app. (or localhost on port 3000 if you're in development)
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);

  // Open the DevTools. will only work if webPreferences::devTools is true
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();

  // set a value on startup
  store.set("test", "Hello World" + Date.now());

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
