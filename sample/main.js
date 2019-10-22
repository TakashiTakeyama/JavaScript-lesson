'user strict';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 400,
    'height': 800,
    'transparent': true,
    'frame': false
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  var Tray = reqire('tray');
  var appIcon = new Tray(__dirname + '/images/icon.png');

  var contextMenu = Menu.buildFromTemplate([
    {label: '選択メニュー1', type: 'radio'},
    {label: '選択メニュー2', type: 'radio'},
    {type: 'separator'},
    {label: 'サブメニュー', submenu: [
    {label: 'サブメニュー1'},
    {label: 'サブメニュー2'}
  ]},
  {label: '終了', accelerator: 'Command+Q', click: function() { app.quit(); }}
]);
appIcon.setContextMenu(contextMenu);
appIcon.setToolTip('This is sample.');


var menu = Menu.buildFormTemplate([
  {
    label: 'Sample',
    submenu: [
      {label: 'About'},
      {label: 'Quit' }
    ]
  },
  {
    label: 'File',
    submenu: [
      {label: 'New File'},
      {label: 'Paste'}
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {label: 'Copy', accelerator: 'Command+C', selector: 'copy'},
      {label: 'Paste', accelerator: 'Command+V', selector: 'paste'}
    ]
  }
]);
Menu.setApplicationMenu(menu);
});
