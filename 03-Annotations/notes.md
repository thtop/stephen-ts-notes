# Section 3: Type Annotations in Action

## Type annotations

- Code we add to tell Typescript what type of value a variable will refer to
- We (developers) tell Typescript the type

## Type inference

- Typescript tries to figure out what type of value a variable refers to
- Typescript guesses the type

## When to use

- Type annotations
  - When we declare a variable on one line then initialize it later
  - When we want a variable to have a type that can't be inferred
  - When a function returns the `any` type and we need to clarify the value
- Type inference
  - Always!

## The 'Any' Type

- A type, just as 'string' or 'boolean' are
- Means TS has no idea what this is - can't check for correct property references
- Avoid variables with 'any' at all costs
