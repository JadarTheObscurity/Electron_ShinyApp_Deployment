// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const port = "9191"
const child = require('child_process');
//const cmdStr = ".\\R-Portable\\bin\\RScript.exe -e \"shiny::runApp('shinyApp.R', port="+port+")\"";
//ShinyProjects\MarketSizing\Market_sizing_Cardinal-master-b823f3aa918475f5d56f01aec9763ed860715158\mrktsiz_no_crosstalk
const killStr = "taskkill /im Rscript.exe /f"

var execPath = "RScript"
if(process.patform == "win32"){
  execPath = path.join(app.getAppPath(), "R-Portable", "bin", "RScript.exe" )
}
var appPath = path.join(app.getAppPath(), "app.R" )
appPath = appPath.replace(/\\/g, "\\\\");
const childProcess = child.spawn(execPath, ["-e", "shiny::runApp(file.path('"+appPath+"'), port="+port+")"])
childProcess.stdout.on('data', (data) => {
  console.log(`stdout:${data}`)
})
childProcess.stderr.on('data', (data) => {
  console.log(`stdout:${data}`)
})

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  //  mainWindow = new BrowserWindow({webPreferences:{nodeIntegration:false},width: 800, height: 600})
  //  console.log(process.cwd())
  console.log('create-window')


    let loading = new BrowserWindow({show: false, frame: false})
    //let loading = new BrowserWindow()
    console.log(new Date().toISOString()+'::showing loading');
    loading.loadURL("data:text/html;charset=utf-8;base64,PGh0bWw+DQo8c3R5bGU+DQpib2R5ew0KICBwYWRkaW5nOiAxZW07DQogIGNvbG9yOiAjNzc3Ow0KICB0ZXh0LWFsaWduOiBjZW50ZXI7DQogIGZvbnQtZmFtaWx5OiAiR2lsbCBzYW5zIiwgc2Fucy1zZXJpZjsNCiAgd2lkdGg6IDgwJTsNCiAgbWFyZ2luOiAwIGF1dG87DQp9DQpoMXsNCiAgbWFyZ2luOiAxZW0gMDsNCiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDsNCiAgcGFkZGluZy1ib3R0b206IDFlbTsNCiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7DQp9DQpwew0KICBmb250LXN0eWxlOiBpdGFsaWM7DQp9DQoubG9hZGVyew0KICBtYXJnaW46IDAgMCAyZW07DQogIGhlaWdodDogMTAwcHg7DQogIHdpZHRoOiAyMCU7DQogIHRleHQtYWxpZ246IGNlbnRlcjsNCiAgcGFkZGluZzogMWVtOw0KICBtYXJnaW46IDAgYXV0byAxZW07DQogIGRpc3BsYXk6IGlubGluZS1ibG9jazsNCiAgdmVydGljYWwtYWxpZ246IHRvcDsNCn0NCg0KLyoNCiAgU2V0IHRoZSBjb2xvciBvZiB0aGUgaWNvbg0KKi8NCnN2ZyBwYXRoLA0Kc3ZnIHJlY3R7DQogIGZpbGw6ICNGRjY3MDA7DQp9DQo8L3N0eWxlPg0KPGJvZHk+PCEtLSAzICAtLT4NCjxkaXYgY2xhc3M9ImxvYWRlciBsb2FkZXItLXN0eWxlMyIgdGl0bGU9IjIiPg0KICA8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImxvYWRlci0xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCiAgICAgd2lkdGg9IjgwcHgiIGhlaWdodD0iODBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNNDMuOTM1LDI1LjE0NWMwLTEwLjMxOC04LjM2NC0xOC42ODMtMTguNjgzLTE4LjY4M2MtMTAuMzE4LDAtMTguNjgzLDguMzY1LTE4LjY4MywxOC42ODNoNC4wNjhjMC04LjA3MSw2LjU0My0xNC42MTUsMTQuNjE1LTE0LjYxNWM4LjA3MiwwLDE0LjYxNSw2LjU0MywxNC42MTUsMTQuNjE1SDQzLjkzNXoiPg0KICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCINCiAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSINCiAgICAgIHR5cGU9InJvdGF0ZSINCiAgICAgIGZyb209IjAgMjUgMjUiDQogICAgICB0bz0iMzYwIDI1IDI1Ig0KICAgICAgZHVyPSIwLjZzIg0KICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4NCiAgICA8L3BhdGg+DQogIDwvc3ZnPg0KPC9kaXY+DQo8L2JvZHk+DQo8L2h0bWw+");
    //loading.loadURL("http://www.google.com")
    ///loading.toggleDevTools()

    loading.once('show', () => {
      console.log(new Date().toISOString()+'::show loading')
      mainWindow = new BrowserWindow({webPreferences:{nodeIntegration:false}, show:false, width: 800, height: 600, title:""})

      mainWindow.webContents.once('dom-ready', () => {
        console.log(new Date().toISOString()+'::mainWindow loaded')
        mainWindow.show()
        loading.hide()
        loading.close()
      })
      console.log(port)
      // long loading html
      mainWindow.loadURL('http://127.0.0.1:'+port)
      
      /**
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }))
      **/
    
      mainWindow.webContents.on('did-finish-load', function() {
        console.log(new Date().toISOString()+'::did-finish-load')
      });

      mainWindow.webContents.on('did-start-load', function() {
        console.log(new Date().toISOString()+'::did-start-load')
      });

      mainWindow.webContents.on('did-stop-load', function() {
        console.log(new Date().toISOString()+'::did-stop-load')
      });
      mainWindow.webContents.on('dom-ready', function() {
        console.log(new Date().toISOString()+'::dom-ready')
      });

      // Open the DevTools.
      // mainWindow.webContents.openDevTools()

      // Emitted when the window is closed.
      mainWindow.on('closed', function () {
        console.log(new Date().toISOString()+'::closed')
        cleanUpApplication()
      })
    })

    loading.show()

}

function cleanUpApplication(){
  if(childProcess){
    console.log('window-all-closed   ... going to kill')
    try{
      childProcess.kill();
      console.log('killed.')
      child.execSync(killStr)
    } catch(ex){
      console.log(ex)
    }
  }

  mainWindow = null

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  console.log('EVENT::window-all-closed')
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }

  cleanUpApplication()

})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
