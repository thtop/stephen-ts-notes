# Section 7: The All-Important Interface

> Interfaces + Classes = How we get really strong code reuse in TS

## Interface

- Creates a new type, describing the property names and value types of an object

## Example

- Interface Reportable
  - summary(): string;
- Objects
  - oldCivic
    - name
    - year
    - broken
    - summary(): string
  - drink
    - color
    - carbonated
    - suger
    - summary(): string
- printSummary Function

```js
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
```

## General Strategy for Reusable Code in TS

- Create functions that accept arguments that are typed with interfaces
- Objects/classes can decide to 'implement' a given interface to work with a function
