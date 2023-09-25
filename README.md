### Windows service script
This is a javascript file that defines a service that can be run on windows to automatically start a node.js websocket server (can be used for anything else).

The intended purpose for this is to run the smartPOS websocket server that runs on node.js and mysql to allow for real-time communications for all POS users.

### Setup
- Make sure you have node.js installed on your PC.
- Clone the repo
- Inside the repo directory, run ```yarn``` or ```npm install`` to install dependencies
- Run ```yarn install``` to install the service
- Accept all prompts as required on windows to allow the service installation.
- You might need to restart your computer for the service to start running.
- After restarting. Check your installed windows service to confirm that the service was installed and is running. If not, just hit start to start the service.
- Be sure to replace ```script: 'your-script-location'``` inside ```wsScript.js```
- Run ```yarn uninstall``` to uninstall the service