const {app, BrowserView, BrowserWindow} = require('electron')

app.on('ready', () => {
  let win = new BrowserWindow({width: 1280, height: 720})
  win.on('closed', () => {
    win = null
  })

  let view = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  })
  win.setBrowserView(view)
  view.setBounds({ x: 0, y: 30, width: 1280, height: 720 })
  view.webContents.loadURL('https://kakuyasu-mobile.vercel.app')
  view.setAutoResize({width: true, height: true})
})
