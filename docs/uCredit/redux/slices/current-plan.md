---
sidebar_label: Current Plan Slice
---

# Current Plan Slice

The slice holding information about the current type.

## State

```typescript
type CurrentPlanSlice = {
  plan: Plan;
  distributions: [string, requirements[]][];
  currentPlanCourses: UserCourse[];
  totalCredits: number;
  droppables: DroppableType[];
  importing: boolean;
};
```

## Reducers

## Selectors

