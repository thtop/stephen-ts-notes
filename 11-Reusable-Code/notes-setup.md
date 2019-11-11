# Reusable Code

## Setup
1. `mkdir stats`
2. `cd stats`
3. `npm init -y`
4. `tsc --init`
5. `npm install nodemon concurrently`
6. `code .`
   
## Create folder
1. src
   - index.ts `console.log('Hi there');`
2.  build

## Config file tsconfig.json
1. `"outDir:" "./build"`
2. `"rootDir": "./src"`

## Config file package.json
```json
"scripts": {
  "start:build": "tsc -w",
  "start:run": "nodemon build/index.js",
  "start": "concurrently npm:start:*"
}
```

## Run 
- `npm start` if error `Ctrl + C`
- Run `npm start` again
