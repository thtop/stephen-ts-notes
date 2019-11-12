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