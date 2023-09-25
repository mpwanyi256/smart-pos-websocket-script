const Service = require('node-windows').Service;

const svc = new Service({
  name: 'smartPOSWebsocketServer',
  description: 'smartPOS Websocket service that powers realtime communications for different smartPOS actions. Once installed, it will automatically run the websocket app.js file which runs the websocket server for you so you do not have to run it manually.',
  script: 'C:\Users\Samuel\Documents\Projects\pos\smart-pos-websocket-server\app.js',
  nodeOptions: ['--harmony', '--max_old_space_size=4096'],
});

svc.on('install', () => {
    svc.start();
});

svc.on('error', (e) => {
    console.error('Service error', e);
});

svc.on('restored', () => {
    console.log('Service has been restored');
})

svc.install();
