# Let's Build a Web Framework

## Setup

- `mkdir web`
- `cd web`
- `npm insall -g parcel -bundler` (option)
- web/index.html -> add script to `src/index.ts`
- src/index.ts -> `console.log('Hi there!');`
- `parcel index.html`
- go to http://localhost:1234/
- Run command: `parcel index.html`

## Web Framework Structure

- Model Classees: Handle data, used to represent Users, Blog Posts, Images, etc.
- View Classes : Handle HTML and events caused by the use (like clicks)

## Adding JSON Server and axios

- `npm install -g json-server`
- open new terminal
  - json-server -w db.json
- `npm install axios`

## Adding script to package.json file

```js
,
  "scripts": {
    "start:db": "json-server -w db.json",
    "start:parcel": "parcel index.html"
  }
```

## REST Convention

| Method | URL        | Description                 |
| ------ | :--------- | :-------------------------- |
| GET    | /posts     | Retrieve all posts          |
| GET    | /posts/:id | Retrieve post with given ID |
| POST   | /posts     | Create a new post           |
| PUT    | /posts/:id | Update a post               |
| DELETE | /posts/:id | Delete a post               |
