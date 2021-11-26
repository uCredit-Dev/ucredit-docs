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
Used to update the total credits a user has.

| Component     | Description                                                        |
|---------------|--------------------------------------------------------------------|
| CourseList    | Used in ```useEffect``` when generating year objects               |
| CourseDisplay | Used in ```updateDistributions``` when distributions are fulfilled |

### resetCurrentPlan
Used to reset the plan to an empty state.

| Component   | Description                                        |
|-------------|----------------------------------------------------|
| UserSection | Used when user log ins and needs to reset the plan |

### updateDroppables
Used to edit the drop logic with courses and semesters.

| Component     | Description                                                        |
|---------------|--------------------------------------------------------------------|
| CourseList    | Used in ```useEffect``` when generating year objects               |
| CourseDisplay | Used in ```updateDistributions``` when distributions are fulfilled |

### updateImportingStatus
Used to change the flag of whether something was imported or not.

| Component            | Description                                                                                                            |
|----------------------|------------------------------------------------------------------------------------------------------------------------|
| HandleUserEntryDummy | Used in ```addImportedYears``` and sets to ```false``` if nothing was imported                                         |
| HandleUserEntryDummy | Used in ```handleFinishAdding``` and sets to ```false``` if no newly imported courses were added                       |
| HandleUserEntryDummy | Used in ```useEffect``` on the first time page is loaded and sets to ```true``` when successful in loading user's data |
| HandleUserEntryDummy | Used in ```handleExistingUser``` if failed to load in user's data and sets to ```false```                              |

## Selectors

| Selector                       | Property                 |
|--------------------------------|--------------------------|
| ```selectPlan```               | ```plan```               |
| ```selectDistributions```      | ```distributions```      |
| ```selectCurrentPlanCourses``` | ```currentPlanCourses``` |
| ```selectTotalCredits```       | ```totalCredits```       |
| ```selectDroppables```         | ```droppables```         |
| ```selectImportingStatus```    | ```importing```          |

### selectPlan

| Component            | Description                                                             |
|----------------------|-------------------------------------------------------------------------|
| App                  | Gives starting plan when the website begins                             |
| HandleUserEntryDummy | Gives starting plan when the login begins                               |
| InfoMenu             | Gives starting plan when Info Menu (degree plan and information) begins |
| CourseComponent      | Gives starting plan when a Course is created                            |
| CourseList           | Gives starting plan when CourseList is created                          |
| Semester             | Gives starting plan when Semester is created                            |
| YearComponent        | Gives starting plan when YearComponent is created                       |
| YearSettingsDropdown | Gives starting plan when YearSettingsDropdown is created                |
| ActionBar            | Gives starting plan when ActionBar is created                           |
| PlanChoose           | Gives starting plan when drop down of choosing a plan is created        |
| DeleteCoursePopup    | Gives starting plan when pop up for deleting a course happens           |
| DeletePlanPopup      | Gives starting plan when pop up for deleting a plan happens             |
| DeleteYearPopup      | Gives starting plan when pop up for deleting a year happens             |
| Search               | Gives starting plan when searching for a course happens                 |
| PrereqDisplay        | Gives starting plan when prereqs of a course are shown                  |
| Form                 | Gives starting plan when search form is submitted                       |
| CourseDisplay        | Gives starting plan when selecting a course after searching             |
| PlaceHolder          | Gives starting plan when a placeholder is needed for a plan             |
| SisCourse            | Gives starting plan when looking at a SIS course                        |

### selectDistributions

| Component | Description                                              |
|-----------|----------------------------------------------------------|
| InfoMenu  | Gives distributions when InfoMenu starts                 |
| CourseBar | Gives the distributions when the bar needs to be updated |

### selectCurrentPlanCourses

| Component            | Description                                                                                |
|----------------------|--------------------------------------------------------------------------------------------|
| HandleUserEntryDummy | Used to update the currentCourses a user has when logging in                               |
| InfoMenu             | Used to update the currentCourses a user has fulfilled distributions                       |
| CourseComponent      | Used to determine if a user has the pre reqs completed before adding the course            |
| CourseList           | Used to retrieve a course based on id, to swap courses based on droppables, update courses |
| Semester             | Used to update the databse when a post request is made                                     |
| CourseBar            | Used to help with deciding how to fill up the credit bar                                   |
| FineDistribution     | Used to update the fine distributions bar                                                  |
| CourseDisplayPopup   | Used to update the currentPlanCourses after adding courses                                 |
| PrereqDisplay        | Used to help display pre reqs for courses and whether satisfied                            |
| CourseDisplay        | Used to update the currentPlanCourses after distributions were updated                     |
| PlaceHolder          | Used to update the courses after deleting a course and adding new                          |
| SisCourse            | Used to update the courses after deleting a course and adding new in SIS                   |

### selectTotalCredits



