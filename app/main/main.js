import { app } from 'electron'
import { join } from 'path'

import { installExtensions } from './debug.js'
import { getAppiumSessionFilePath } from './helpers.js'
import { setupMainWindow } from './windows.js'

const isDev = process.env.NODE_ENV === 'development'

export let openFilePath = getAppiumSessionFilePath(process.argv, app.isPackaged, isDev)

function createWindow() {
  if (isDev) {
    require('electron-debug')()
    installExtensions()
  }
  setupMainWindow({
    mainUrl: process.env.ELECTRON_RENDERER_URL,
    splashUrl: join(__dirname, "../../app/renderer/splash.html"),
    isDev
  })
}

app.on('open-file', (event, filePath) => {
  openFilePath = filePath;
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', async () => {
  createWindow()
});
