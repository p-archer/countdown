const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const debug = false;

let window;

app.commandLine.appendSwitch('enable-transparent-visuals');
app.commandLine.appendSwitch('disable-gpu');
app.on('ready', createWindow);

function createWindow() {
	if (debug) {
		window = new BrowserWindow({width: 800, height: 600});
	} else {
		window = new BrowserWindow({width: 320, height: 132, frame: false});
	}

	window.loadURL(
		url.format({
			pathname: path.join(__dirname + '/index.html'),
			protocol: 'file',
			slashes: true
		})
	);
	window.setMenu(null);

	if (debug) {
		window.webContents.openDevTools();
	}

	window.on('close', () => {
		window = null;
	});
}
