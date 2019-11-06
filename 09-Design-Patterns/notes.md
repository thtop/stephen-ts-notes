# Section 9: Design Patterns with Typescript

## Install

- `npm install -g parcel-bundler`

## Run

`parcel index.html`

## Project Structure
- index.ts
  - Map.ts
  - User.ts
  - Company.ts

## Generating Random Data
- npmjs.com
- 'faker' package
- `npm install faker`

## Type Definition Files
- Definitely Typed Naming Scheme
  - @types/{ library name }
  - @types/faker
- `npm install @types/faker`

## Google Maps integration
- npmjs.com
- '@types/googlemaps' package
- `npm install @types/googlemaps`
- Note: opening manually the **@types/googlemaps/index.d.ts** file. (fix error)

## Exploring Type Definition Files
- Fix map not display
- index.html
  ```html
<style>
      html,
      body {
        height: 100%;
      }
</style>
  ```