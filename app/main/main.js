import { app, BrowserWindow } from 'electron'
import { optimizer } from '@electron-toolkit/utils'
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

app.whenReady().then(() => {
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
