# custom-hubs-template

## Setup
 
1) Fork this repository!
2) Install dependencies:  `npm install`
3) The `postinstall` script will automatically clone mozilla/hubs and apply patches to make customizations easier. 

In order to run many of the npm scripts used in this repo, you will need to user either Git Bash or the Windows Subsystem for Linux.

For Git Bash:
   1) Open the project in Visual Studio code
   2) Open a new terminal
   3) In the option menu in the upper righthand corner of the taskbar choose "select default shell"
   4) Select Git Bash
   
For WSL:
   1. In the VS code extensions install Remote - WSL
   2. In the bottom left corner of VS code select open a remote window
   3. Choose "Remote-wsl Reopen Folder in WSL" from dropdown menu
   4. If you don't already have Ubuntu installed, install it and walk through the setup options
   5. run sudo apt-get install nodejs
   6. run sudo apt-get install npm
   7. run sudo npm install


## Development

This template is designed to make it easier to create and maintain a customized Hubs client. 

1) Register components/systems in `hub.inject.js`
2) Start a local development server: `npm run start`

To build and deploy for GitHub Pages (in a `gh-pages` branch):

1) `npm run build-gh`
2) `npm run deploy-gh` 

*Make sure GitHub Pages is configured appropriately in your fork*

## Making new patches

For more complex changes, you can patch Hubs directly without needing to fork it!

1) Make changes to Hubs source in the `hubs` directory (created during installation)
2) Execute `npm run makepatch` to create a new patch file 
3) Rename the patch file saved in `patches/RENAME_ME.patch`