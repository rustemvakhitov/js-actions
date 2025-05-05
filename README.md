# js-actions

npm init

node src/action.js

#NCC install
npm i -g @vercel/ncc

#adding script to package.json
"build": "ncc build src/action.js -o dist",

#or to build using terminal 
ncc build src/action.js -o dist

#test it
node dist/index.js




