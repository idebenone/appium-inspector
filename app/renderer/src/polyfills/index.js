// let log,
//   settings,
//   clipboard,
//   shell,
//   remote,
//   ipcRenderer,
//   i18NextBackend,
//   i18NextBackendOptions,
//   fs,
//   util;

// function buildForBrowser() {
//   if (process.env.BUILD_BROWSER) {
//     return true;
//   }

//   if (typeof navigator !== 'undefined' && !/electron/i.test(navigator.userAgent)) {
//     return true;
//   }

//   return false;
// }

// if (buildForBrowser()) {
//   ({
//     log,
//     settings,
//     clipboard,
//     shell,
//     remote,
//     ipcRenderer,
//     i18NextBackend,
//     i18NextBackendOptions,
//     fs,
//     util,
//   } = import('./browser'));
// } else {
//   ({
//     log,
//     settings,
//     clipboard,
//     shell,
//     remote,
//     ipcRenderer,
//     i18NextBackend,
//     i18NextBackendOptions,
//     fs,
//     util,
//   } = import('./electron'));
// }

// export {
//   log,
//   clipboard,
//   shell,
//   remote,
//   ipcRenderer,
//   settings,
//   i18NextBackend,
//   i18NextBackendOptions,
//   fs,
//   util,
// };


import { clipboard, shell } from 'electron';
import ipcRenderer from 'electron';
import remote from '@electron/remote/main';
// import { log as log2 } from 'electron-log';
import settings from 'electron-settings';
import fs from 'fs';
import i18NextBackend from 'i18next-fs-backend';
import path from 'path';
import util from 'util';

const i18NextBackendOptions = {
  loadPath: path.join(__dirname, '{{lng}}/{{ns}}.json'),
  addPath: path.join(__dirname, '{{lng}}/{{ns}}.json'),
  jsonIndent: 2,
};

const log = console

export {
  log,
  clipboard,
  shell,
  remote,
  ipcRenderer,
  settings,
  i18NextBackend,
  i18NextBackendOptions,
  fs,
  util,
};
