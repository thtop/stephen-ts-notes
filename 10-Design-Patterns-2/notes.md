# Section 10: More on Design Patterns

## Project structure
- sort
  - build
    - index.js (auto)
  - src
    - index.ts
- tsconfig.json

## Configuring the TS Compiler
- `tsc --init`

## Set
- "outDir": "./build"
- "rootDir": "./src" 

## Command
- `tsc`
- `tsc -w`

## Running auto
- `npm init -y`
- `npm install nodemon concurrently`
- package.json file
```json
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
 }
```