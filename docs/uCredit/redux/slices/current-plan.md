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

| Property               | Type                                                  | Description                                                   |
|------------------------|-------------------------------------------------------|---------------------------------------------------------------|
| ``plan``               | ``Plan``                                              | The current Plan that the user has                            |
| ``distributions``      | Array of a  mapping of ``string`` to ``requirements`` | Contains requirements that need to be completed for the major |
| ``currentPlanCourses`` | Array of ``UserCourse``                               | Contains list of all courses that user took                   |
| ``totalCredits``       | ``number``                                            | Number of credits that the user has                           |
| ``droppables``         | Array of ``DroppableType``                            |                                                               |
| ``importing``          | ``boolean``                                           | Determines whether the plan was imported                      |

## Reducers

| Reducer                      | Action Payload Type                               | State Affected                                          |
|------------------------------|---------------------------------------------------|---------------------------------------------------------|
| ``updateSelectedPlan``       | ``Plan``                                          | ``plan``                                                |
| ``updateDistributions``      | ``Array of a  mapping of string to requirements`` | ``distributions``                                       |
| ``updateCurrentPlanCourses`` | ``Array of UserCourse``                           | ``currentPlanCourses``                                  |
| ``updateTotalCredits``       | ``number``                                        | ``totalCredits``                                        |
| ``resetCurrentPlan``         | ``None``                                          | ``plan``, ``distributions``, and ``currentPlanCourses`` |
| ``updateDroppables``         | ``DroppableType``                                 | ``droppables``                                          |
| ``updateImportingStatus``    | ``boolean``                                       | ``importing``                                           |

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

