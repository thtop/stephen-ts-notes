# Reusable Code

## Type Definition Files
- `npm install @types/node`


## When to Use Enums
- Follow near-identical syntax rules as normal object
- Creates an object with the same keys and values whep converted from TS to JS
- Primary goal is to signal to other engineers that these are all closely realated values 
- Use whenever we have a small tixed set of values that are all closely related and known at compile time

## Should we use an enum to represent...
- ...primary colors on a color picker? ✔️
- ...the set of movei categories on Netflix? ❌
- ...the titles of all blog posts by a particular user? ❌
- ...sizes of a drink on an ordering menu? ✔️
- ...all years since the year 1750? ❌
- ...the 'read' status of a text message? ✔️


## Generics
- Like function arguments, but for types in class/funciton definitions
- Allows us to define the type of a property/arument/return value at a future point 
- Used heavily when writing reusable code

```js
// Nothing to do white generics
const addOne - (a: number): number => {
  return a + 1;
};

const addTwo = (a: number): number => {
  return a + 2;
}

const addThree = (a: number): number => {
  return a + 3;
}

// Arguments
const add = (a: number, b: number): number => {
  return a + b;
};

add(10, 1);
add(10, 2);
add(10, 3);

```

```js
// Classes
class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'somestring';
```

```js
// Generics
// class HoldAnything<TypeOfData> {
//   data: TypeOfData;
// }

class HoldAnything<T> {
  data: T;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdString = new HoldAnything<string>();
holdString.data = 'somestring';
```

```js
// Generics + Function
class HoldAnything<T> {
  data: T;

  add(a: T): T {
    return a;
  }
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
holdNumber.add(10);

```

## Inheritance vs Composition
- **Inheritance**
  - abscratc class CsvFileReader
    - read(): void
    - mapRow(string[]): MatchData
  - class MatchReader
    - mapRow(string[]): MatchData
  - class MovieReader
    - mapRow(string[]): MovieData
- **Composition**
  - interface DataReader
    - read(): void
    - data: string[][];
  - class MatchReader
    - reader: DataReader
    - load(): void
  - class ApiRreader
    - read(): void
    - data: string[][]
  - class CsvFileReader
    - read(): void
    - data: string[][]

> Inheritance: Characterized by an '**is a**' relationship between two classes
> Composition: characterized by a '**has a**' relationship between classes

## A Huge Misconception Around Composition
- Favor object composition over class inhritance (C++)