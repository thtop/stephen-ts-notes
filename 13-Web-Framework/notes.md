# Let's Build a Web Framework

## Setup

- `mkdir web`
- `cd web`
- `npm insall -g parcel -bundler` (option)
- web/index.html -> add script to `src/index.ts`
- src/index.ts -> `console.log('Hi there!');`
- `parcel index.html`
- go to http://localhost:1234/

## Web Framework Structure

- Model Classees: Handle data, used to represent Users, Blog Posts, Images, etc.
- View Classes : Handle HTML and events caused by the use (like clicks)
