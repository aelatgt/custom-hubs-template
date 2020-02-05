# custom-hubs-template

## Setup
 
1) Fork this repository!
3) Install dependencies:  `npm install`

## Development

By registering custom components/systems, you can easily extend Hubs functionality. 

1) Register components/systems in `hubs.inject.js`
2) Start a development server: `npm run start`
3) To deploy on GitHub Pages in a `gh-pages` branch: `npm run deploy` 
    * Make sure GitHub Pages is configured appropriately in your fork

## Patching Hubs

For more complex changes, you can patch Hubs directly without needing to fork it!

1) Make changes to hubs in `./node_modules/hubs`
2) Execute `npm run patch` to update the patch file
