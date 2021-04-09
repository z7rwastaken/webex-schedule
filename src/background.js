'use strict'
import { Client } from "discord-rpc"
import { app, protocol, BrowserWindow  } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = 'production'

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
]);

async function createWindow() {
  const win = new BrowserWindow({
    icon: "./public/favicon.ico",
    webPreferences: {   
      // ! Use pluginOptions.nodeIntegration, leave this alone
      // ! See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  });

  if(process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
  } else {
    createProtocol('app');
    win.loadURL('app://./index.html');
  }

  win.maximize();
  win.setMenu(null);


  const activity = new Client({ transport: "ipc" });
  
  let count = -1;
  
  const states = [
      "Μην",
      "Μην μου",
      "Μην μου σπας",
      "Μην μου σπας τα",
      "Μην μου σπας τα αρχίδια!"
  ];
  
  const sleep = time => {
      return new Promise(resolve => setTimeout(resolve, time));
  }
  
  activity.on("ready", async() => {
      console.log(`Setting presence for user ${activity.user.username}#${activity.user.discriminator}`);
  
      // eslint-disable-next-line no-constant-condition
      while(true) { 
          if(count === 4) count = 0;
          else count++;
  
          await sleep(750);
  
          activity.setActivity({
              state: states[count],
              largeImageKey: "logo",
              largeImageText: "pain.",
  
              smallImageKey: "6240_dnddot",
              smallImageText: "nai exw webex pls.."
          }).catch(console.error);
      }
  });
  
  activity
  .login({ clientId: "830015445486403626" })
  .catch(console.error);

  return win;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', async() => {
  if (BrowserWindow.getAllWindows().length === 0) (await createWindow()).webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });
});

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
      await installExtension(VUEJS_DEVTOOLS).catch(console.error)
  }
  (await createWindow()).webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });
});