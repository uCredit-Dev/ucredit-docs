---
sidebar_label: TypeScript Readings
sidebar_position: 5
---

# TypeScript Readings

## Introduction to TypeScript

**Goal: Understand what is TypeScript and why it's useful** <br></br>
The TypeScript Handbook Intro! <br></br>
[https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
[https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

**Quick Overview Video** <br></br>
[https://www.youtube.com/watch?v=zQnBQ4tB3ZA](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)

**Knowledge Check:** <ul> <li>What does it mean that TypeScript is a “superset” of JavaScript?</li><li>What does it mean that TypeScript “compiles” to JavaScript?</li><li>Why is TypeScript useful? Why do developers choose to use TypeScript even though it involves writing MORE code than you would with vanilla JavaScript?</li></ul>

## Syntax of Types

**Goal:** Begin to navigate TypeScript syntax <br></br>
[https://www.typescriptlang.org/docs/handbook/2/basic-types.html](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

- Read the following sections

  - [Static type-checking](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking)
  - [Non-exception Failures](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#non-exception-failures)
  - [Types for Tooling](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#types-for-tooling)
  - [Emitting with Errors](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#emitting-with-errors)
  - [Explicit Types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#explicit-types)

[https://www.typescriptlang.org/docs/handbook/2/everyday-types.html](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

- Read the following sections
  - [The primitives: string, number, and boolean](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)
  - [Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
  - [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)
  - [noImplicitAny](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#noimplicitany)
  - [Type Annotations on Variables](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables)
  - [Functions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)
  - [Parameter Type Annotations](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#parameter-type-annotations)
  - [Return Type Annotations](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#return-type-annotations)
  - [Anonymous Functions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#anonymous-functions)
  - [Object Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types)
  - [Optional Properties](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)
  - [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
  - [Defining a Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#defining-a-union-type)
  - [Working with Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#working-with-union-types)
  - [Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
  - [Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)

Take a look at the following;
[https://github.com/uCredit-Dev/ucredit_frontend_typescript/blob/master/lib/resources/commonTypes.tsx](https://github.com/uCredit-Dev/ucredit_frontend_typescript/blob/master/lib/resources/commonTypes.tsx)

- Does the formatting make sense?

## React and TypeScript

[https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)

Note how in a function components, props, and useState hooks are typed are typed. This should look familiar!

[https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks)

Look at the useState hook in particular

[TS Playground Code Snippets](https://www.typescriptlang.org/play?#code/PTAEEEDsE9QSwM6gC4AsCmoAq0AO6BlAYwCc5dlR0EiBDfUIgG1oFcF0A6UATQHtWjWpFDtMw2Mj4BYAFAgqcNOhKgAJuma0S40ByLI4fEXwBmoaANVE+GlH1AAjTGuiRaAWzhFQwtXIUAKVoAN1piMgpQJjgAa3QAGlA+VSlQAHcU2N8SAUg1aLgvZFpDYyQ4EWUAsGQ8TARoBGR0D045GohQAHM+WyEOUFMU3xh4JECCAHkAOVBcbQRK7oAuDtkbSGbQD2gpxwArTUoAXlBJ2c4Fkg4ACgAiAG8AX3uASgBudYUoWA0tHRINI4fARciUNLIEjsSiWVjWWziJDOZadBC0UyYZx0MQWASgWKQPjpHYpcSOASUJTcACiIXQIjg5jQpXGnSJlGaZAMTEk0K4oAAYiN0AAPTy4JiJFCoRCMREZARMAqkWgIVBrWRyXb7I4GTiizjQTgALy+WvkYAAqktIN1RqNYN04PSkHCZeS4DE6vYMmQWvK7Mw+BxUjJLckyM73ExzqFwqRwRklKgPSgSLQNABaMzmMwoep6DHoOrtC0KCTjHasIipmLxXygADkdQY6S9ajoJDUTYystreMEdBEOkltCI6E67bQjoLDFuYonUUg6HpJDevo8tAbxkwraRS267kcUs6kIwyWUJDLcn+LB0Q1YkAMRhEGkcrG6tzCTFY6BWjpvABIR8HAajmre6Afl+9y0HoULLO85rvp+twAEwAMyfJB0G3I88pMCkAH3Cef73KAzzYeWYA0uOqZ0EwsZpCh9pyrQjHEugBTYmwgzujYrDKqAo4sBOHqdJW06psoc6YPmMnaN0rAeAyEIOFuyC1jeEYgoQiZRO2jEoNumCVGk44CZAEIXrgIZKK+yTMhgEkwBUb5MpiOhWUMKQeAgSTDKoYoSlKyYzsogzIKwkrUJ0gVpqYT4vsYORKSpVnaXe2iYIlz5lCICDpPQtyigBADakDKc4JBJFyywALpAaAZV1XaSSVR41X1RBshZQ+mzbAscAkOVEhJBI3VyIVxVDeuPUKFgF4MUxDjTbgVbsYR6RcU4mi8XuF6KcpqlCCIzidBptY7Y4sAieOywJcN2yVpU8y0MNYWph11UuQUMn6MYBQAAYSEDn3wWQdraQoACSzLRVKSDZaAK4kmkcK1eg-5UOKHgxSsUUxQg3zWpAhLEoySN6HAJ4PfuvpjfA5gvUjFKsJytDQKiEb3DDBJEiS6SoKUTbItQyD3EkygiE+5PpJTjZFZIq2c6AvNNh47J8Jy8KYELrJys4zS1Q47orjtkLoEZWAEGm+73J0wV41KKyywLkBZn4WYrmuchAA)
