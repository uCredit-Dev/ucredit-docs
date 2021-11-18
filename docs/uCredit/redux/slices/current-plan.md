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

| Property           | Type                                          | Description                                                   |
|--------------------|-----------------------------------------------|---------------------------------------------------------------|
| plan               | Plan                                          | The current Plan that the user has                            |
| distributions      | Array of a  mapping of string to requirements | Contains requirements that need to be completed for the major |
| currentPlanCourses | Array of UserCourse                           | Contains list of all courses that user took                   |
| totalCredits       | number                                        | Number of credits that the user has                           |
| importing          | boolean                                       | Determines whether the plan was imported                      |

## Reducers

```typescript
updateSelectedPlan: (state: any, action: PayloadAction<Plan>) => {
  state.plan = { ...action.payload };
};
```

Updates all the fields of the state.plan with the new ones given in the payload

```typescript
updateDistributions: (
  state: any,
  action: PayloadAction<[string, requirements[]][]>
) => {
  state.distributions = [...action.payload];
};
```

Updates all the fields of the state.distributions with the new ones given in the payload

```typescript
updateCurrentPlanCourses: (state: any, action: PayloadAction<UserCourse[]>) => {
  state.currentPlanCourses = action.payload;
};
```

Updates the array of currentPlanCourses with the new courses in the payload

```typescript
updateTotalCredits: (state: any, action: PayloadAction<number>) => {
  state.totalCredits = action.payload;
};
```

Updates the number of the credits that the student has taken

```typescript
resetCurrentPlan: (state: any) => {
  state.plan = initialState.plan;
  state.distributions = initialState.distributions;
  state.currentPlanCourses = initialState.currentPlanCourses;
};
```

Reverts Plan back to the original

```typescript
updateDroppables: (state: any, action: PayloadAction<DroppableType>) => {
  let found = false;
  state.droppables.forEach((droppable: DroppableType, index: number) => {
    if (
      droppable.year === action.payload.year &&
      droppable.semester === action.payload.semester
    ) {
      state.droppables[index] = action.payload;
      found = true;
    }
  });
  if (!found) {
    state.droppables.push(action.payload);
  }
};
```

Checks if the same Droppable Object is already in the array and if it is not there then add to array

```typescript
updateImportingStatus: (state: any, action: PayloadAction<boolean>) => {
  state.importing = action.payload;
};
```

Changes the importing flag based on if the user imported the plan

## Selectors

```typescript
const selectPlan = (state: RootState) => state.currentPlan.plan;
```

Retrieves student's plan

```typescript
const selectDistributions = (state: RootState) => state.currentPlan.distributions;
```

Retrives the distributions of a student's plan

```typescript
const selectCurrentPlanCourses = (state: RootState) => state.currentPlan.currentPlanCourses;
```

Retrieves the courses in the student's plan

```typescript
const selectTotalCredits = (state: RootState) => state.currentPlan.totalCredits;
```

Retrieves the total credits that a student has

```typescript
const selectDroppables = (state: RootState) => state.currentPlan.droppables;
```

Retrieves the droppabble courses from the student's plan

```typescript
const selectImportingStatus = (state: RootState) => state.currentPlan.importing;
```

Retrieves the status of whether the plan was imported from somewhere or not

