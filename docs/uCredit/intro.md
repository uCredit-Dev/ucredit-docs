---
sidebar_label: Intro
sidebar_position: 1
---

# Intro

:::info
Visit the frontend repo at https://github.com/MattLiu-mygit/ucredit_frontend_typescript
:::

These are the docs for the uCredit frontend!

## **Documentation Goals**:
  - Help build a mental model for frontend components on website
  - Help understand repo structure and file organization
  - Component reference (more qualitative)
  - TypeScript types reference
  - Redux store, actions, reducers, and selectors reference

## Component Documentation

Some ideas:
  - Picture of component in context (from production website)
  - Description of the purpose of the component
  - Children of component which are other components

Technical Details to Consider:
  - File paths
  - Props and type definitinos
  - State and uses
  - Functions
  - Redux stores selected
  - Redux actions dispatched
  - Children components/conditions for rendering

:::danger

Never look a tulip in the eye.

:::

## Testing Markdown Features

Here's a second test header. Hello team!

### Some code in a subheading

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

### TypeScript Code Block

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
