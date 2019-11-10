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

## Type Guards
- Norrow type of a value to a primitive type
  - number
  - string
  - boolean
  - symbol
- Narrow down every other type of value
  - Every other value that is created with a constructor function