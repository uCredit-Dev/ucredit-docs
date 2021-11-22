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

### updateSelectedPlan
Used to update the current plan that a user has

| Component            | Description                                                                                           |
|----------------------|-------------------------------------------------------------------------------------------------------|
| HandleUserEntryDummy | Makes initial plan of user if there are initially none in ``processYears``                            |
| HandleUserEntryDummy | Updates current plan from an imported plan in ``addImportedYears``                                    |
| HandleUserEntryDummy | Updates current plan when courses are finished importing in ``handleFinishAdding``                    |
| HandleUserEntryDummy | After receiving all plans from a user, if there are no plans then initialize a plan in ```getPlans``` |
| CourseList           | Updates years of a plan in ```swapYear```                                                             |
| CourseList           | Updates courses of a plan in ```swapCourse```                                                         |
| Semester             | Updates plan when a new plan is made from the user in ```handlePostResponse```                        |
| YearComponent        | Updates plan with new year names in ```updateName```                                                  |
| YearSettingsDropdown | Updates plan with a new year in ```handleYearChange```                                                |
| ActionBar            | Updates name of plan in ```updateName```                                                              |
| ActionBar            | Updates plan when a year is added to the plan in ```addNewYear```                                     |
| PlanChoose           | Changes current plan to new one user selected in ```handlePlanChange```                               |
| CourseDisplayPopup   | Update plan in ```handlePostAddCourse```                                                              |
| DeleteCoursePopup    | Update plan after deleting course in ```activateDeleteCourse```                                       |
| DeletePlanPopup      | Uses different plan after deleting current plan in ```deleteCurrentPlan```                            |
| DeleteYearPopup      | Updates plan after a year is deleted from it in ```activateDeleteYear```                              |
| CourseDisplay        | Updates plan after years are changed in ```updateDistributions```                                     |
| Placeholder          | Updates plan after years are changed in ```handleUpdateResponse```                                    |
| SisCourse            | Updates plan after years are changed in ```handleUpdate```                                            |
| GenerateNewPlan      | Updates new plan after making distributions                                                           |

### updateDistributions
Used to update the distributions of a plan that a user has

| Component | Description                                                        |
|-----------|--------------------------------------------------------------------|
| InfoMenu  | Used in ```setDistributions``` which is a wrapper for this reducer |

### updateCurrentPlanCourses
Used to update the list of courses that a user is taking in a plan.

| Component            | Description                                                                |
|----------------------|----------------------------------------------------------------------------|
| HandleUserEntryDummy | Used in ```handleFinishAdding``` when courses are finished importing       |
| CourseList           | Used in ```useEffect``` when certain fields are updated                    |
| CourseList           | Used in ```updatePlanCourses``` after dragging semesters                   |
| Semester             | Used in ```handlePostResponse``` after adding a new course                 |
| CourseDisplayPopup   | Used in ```handlePostAddCourse``` after adding a new course                |
| CourseDisplay        | Used in ```updateDistributions``` when a course in a distribution is added |
| Placeholder          | Used in ```handleUpdateResponse``` when updating a course                  |
| SisCourse            | Used in ```handleUpdate``` when deleting old course and adding new         |

### updateTotalCredits
Used to update the total credits a user has

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

