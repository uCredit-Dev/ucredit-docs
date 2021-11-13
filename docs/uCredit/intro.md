---
sidebar_label: Intro
sidebar_position: 1
---

# Intro

:::info
Visit the frontend repo at https://github.com/MattLiu-mygit/ucredit_frontend_typescript
:::

:::caution
uCredit is still under active development! Be open to and wary of change!
When in doubt, consult the code directly for implementation details!
:::

These are the docs for the uCredit frontend, featuring information for the React components,
Redux state management, and TypeScript types.

## **Documentation Goals**:
  - Help build a mental model for frontend components on website
  - Help understand repo structure and file organization
  - Component reference
  - TypeScript types reference
  - Redux store, actions, reducers, and selectors reference

**Todo List**
  - TypeScript types descriptions
  - Redux
    - State descriptions
    - Reducer/Action descriptions
    - Selector descriptions
  - Component technical detail descriptions
  - Links between interrelated components

Other misc ideas:
  - Apply for algolia search
  - API documentation
  - Design documentation
  - uCredit tutorial
  - Components in context breakdown
  - GIFs?

:::caution
Be wary of technical details! While having a centralized reference would be ideal,
maintaining an this website as an up-to-date technical reference would be be a monumentous effort
given the rapid pace of uCredit's development.

**The current goal of these docs is to introduce the overall organization of components and
structure of the data, to make the codebase less intimidating.**
Repeating all technical details in these docs would be redundant, especailly given how well
documented the codebase itself is. The best source of information should be reading the code itself.
:::

## Component Documentation Guidelines
General inclusions
  - Picture of component in context (from production website)
  - Description of the purpose of the component
  - Relative context of component (important children, parents, conditions for display, etc)

Technical Details to Consider:
  - File path
  - Underlying data structure
    - Props and type definitinos
    - State and uses
    - Redux stores selected
    - Redux actions dispatched
  - Helper functions
  - Children components/conditions for rendering

## Type Documentation Guidelines
General inclusions
  - Code block of all included types
  - Short description of what type models and how its used

## Redux Documenation Guidelines
**Slices**
  - Code block of state types
  - Overview of purpose of slice
  - Description of what each aspect of state type represents
  - Description of initial state

**Actions/Reducers**
  - Description of payload actions for each reducer
  - Description of how each reducer updates the state
  - Context for where the reducer is called (components which dispatch actions to this reducer)

**Selectors**
  - Description of which state property the selector selects
  - General context for how that property may be used by a component using the selector

## Using Code Blocks
Use the following as reference for codeblocks:

```jsx title="path/to/some/file.tsx"
// Here's my code
const SomeComponent = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <p>This is an example component. Pretty neat.</p>
    </div>
  )
}
```

```typescript
let myNumber: number = 6; // type annotation
let mySum = myNumber + 3; // type inference

myNumber = 'Invalid Assignment'; // the ts compiler will catch this error!
myNumber = 3; // this would be fine though

// type annotations in function signatures
const funnyAdd = (x: number, y: number): number => {
  return x + y; // this is fine!
}

const funnyAdd2 = (x: number, y: number): number => {
  return 'Error'; // compiler will catch this
}

funnyAdd(myNumber, 'Hello'); // compiler will catch this
```
