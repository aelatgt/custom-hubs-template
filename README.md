# custom-hubs-template

## Setup
 
1) Fork this repository!
2) Install dependencies:  `npm install`
3) The `postinstall` script will automatically clone mozilla/hubs and apply patches to make customizations easier. 

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