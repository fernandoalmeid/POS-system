const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL('http://localhost:5173'); // Assuming frontend runs on Vite's default port
}

app.whenReady().then(createWindow);