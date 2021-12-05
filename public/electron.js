const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

// import store
const ElectronStore = require("electron-store");

// init the store
const store = new ElectronStore();

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    frame: true,
    webPreferences: {
      devTools: isDev,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);

  mainWindow.webContents.openDevTools();
};

app.on("ready", () => {
  createWindow();

  store.set("test", "Hello World" + Date.now());

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
