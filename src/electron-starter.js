const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    const startUrl = process.env.ELECTRON_START_URL || new URL(`file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', () => {
        mainWindow = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});
