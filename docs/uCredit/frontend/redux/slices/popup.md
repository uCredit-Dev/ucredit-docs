---
sidebar_label: Popup Slice
---

# Popup Slice

The slice holding information about the current popup being shown.

## State

```typescript
type PopupSlice = {
  deletePlan: boolean;
  addPlan: boolean;
  toAddName: string;
  toAddMajor: Major | null;
  generateAdd: boolean;
  deleteYear: boolean;
  yearToDelete: Year | null;
  deleteCourse: boolean;
  courseToDelete: { course: UserCourse; year: number } | null;
  showCourseInfo: boolean;
  courseToShow: UserCourse | null;
  addingPrereq: boolean;
};
```

| Property           | Type                                                 | Description |
|--------------------|------------------------------------------------------|-------------|
| ``deletePlan``     | ``boolean``                                          | Whether or not the user is currently deleting a plan |
| ``addPlan``        | ``boolean``                                          | Whether or not the user is currently adding a plan |
| ``toAddName``      | ``string``                                           | The name of the plan the user is adding |
| ``toAddMajor``     | ``Major`` \| ``null``                                | The major of the plan the user is adding |
| ``generateAdd``    | ``boolean``                                          | Used to start plan generation |
| ``deleteYear``     | ``boolean``                                          | Whether or not the user is currently deleting a year |
| ``yearToDelete``   | ``Year`` \| ``null``                                 | The year the user is deleting |
| ``deleteCourse``   | ``boolean``                                          | Whether or not the user is currently deleting a course |
| ``courseToDelete`` | ``{ course: UserCourse; year: number }`` \| ``null`` | The information of the course the user is deleting |
| ``showCourseInfo`` | ``boolean``                                          | Whether or not the application is currently showing course info |
| ``addingPrereq``   | ``boolean``                                          |  Whether or not the user is adding a prereq from the course display |

## Reducers

| Reducer                         | Action Payload Type                                | State Affeccted               |
|---------------------------------|----------------------------------------------------|-------------------------------|
| ``updateGeneratePlanAddStatus`` | ``boolean``                                        | ``generateAdd``               |
| ``updateDeleteYearStatus``      | ``boolean``                                        | ``deleteYear``                |
| ``updateYearToDelete``          | ``Year`` \| ``null``                               | ``yearToDelete``              |
| ``clearToAdd``                  |                                                    | ``toAddName``, ``toAddMajor`` |
| ``updateAddingPlanStatus``      | ``boolean``                                        | ``addPlan``                   |
| ``updateToAddName``             | ``string``                                         | ``toAddName``                 |
| ``updateToAddMajor``            | ``Major``                                          | ``toAddMajor``                |
| ``updateDeletePlanStatus``      | ``boolean``                                        | ``deletePlan``                |
| ``updateDeleteCourseStatus``    | ``boolean``                                        | ``deleteCourse``              |
| ``updateCourseToDelete``        | ``{ course: UserCourse; year: Year }`` \| ``null`` | ``courseToDelete``            |
| ``updateShowCourseInfo``        | ``boolean``                                        | ``showCourseInfo``            |
| ``updateCourseToShow``          | ``UserCourse`` \| ``null``                         | ``courseToShow``              |
| ``updateAddingPrereq            | ``boolean``                                        | ``addingPrereq``              |

### updateGeneratePlanAddStatus
Used to update whether a new plan is being created or not.

| Component            | Description                                                                                |
|----------------------|--------------------------------------------------------------------------------------------|
| GenerateNewPlan      | Resets ``generateAdd`` to ``false`` after adding a new plan                                |
| HandleUserEntryDummy | Sets ``generateAdd`` to ``true`` after user login promise in ``afterPromise`` helper       |
| HandleUserEntryDummy | Sets ``generateAdd`` to ``true`` for guest/existing users in ``handleExistingUser`` helper |

### updateDeleteYearStatus
Used to display the DeleteYearPopup component.

| Component            | Description                                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------------------------|
| YearSettingsDropdown | Sets ``deleteYear`` to ``true`` in ``activateDeleteYearPopup`` helper to delete a year from dropdown settings |
| DeleteYearPopup      | Resets ``deleteYear`` to ``false`` in ``activateDeleteYear`` helper a successful delete request to API        |
| DeleteYearPopup      | Resets ``deleteYear`` to ``false`` in ``cancel`` helper to cancel deleting a year                             |

### clearToAdd
| Component       | Description                                                                                   |
|-----------------|-----------------------------------------------------------------------------------------------|
| GenerateNewPlan | Resets ``toAddName`` and ``toAddMajor`` properties after a new plan is successfully generated |

### updateAddingPlanStatus
| Component            | Description                                                                                                           |
|----------------------|-----------------------------------------------------------------------------------------------------------------------|
| HandleUserEntryDummy | Sets ``addPlan`` property to ``true`` when a new guest user is created that doesn't have a plan                       |
| HandleUserEntryDummy | Sets ``addPlan`` property to ``true`` if there are no preexisting plans retrieved in ``processRetrievedPlans`` helper |
| HandleUserEntryDummy | Sets ``addPlan`` property to ``false`` after importing a shared plan's years in ``addImportedYears`` helper           |
| HandleUserEntryDummy | Sets ``addPlan`` property to ``false`` in ``handleFinishAdding`` helper                                               |
| PlanChoose           | Sets ``addPlan`` property to ``true`` in ``handlePlanChange`` helper                                                  |
| PlanAdd              | Sets ``addPlan`` property to ``false`` in ``createNewPlan`` helper                                                    |
| PlanAdd              | Sets ``addPlan`` property to ``false`` in ``createCancel`` helper                                                     |

### updateToAddName
| Component            | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| HandleUserEntryDummy | Updates ``toAddName`` property in ``afterPromise`` helper                   |
| HandleUserEntryDummy | Updates ``toAddName`` property in ``handleExistingUser`` helper             |
| PlanAdd              | Updates ``toAddName`` property in ``handleNameChange`` event handler helper |

### updateToAddMajor
| Component            | Description                                                                  |
|----------------------|------------------------------------------------------------------------------|
| HandleUserEntryDummy | Updates ``toAddMajor`` property in ``afterPromise`` helper                   |
| HandleUserEntryDummy | Updates ``toAddMajor`` property in ``handleExistingUser`` helper             |
| PlanAdd              | Updates ``toAddName`` property in ``handleMajorChange`` event handler helper |

### updateDeletePlanStatus
| Component       | Description                                                               |
|-----------------|---------------------------------------------------------------------------|
| ActionBar       | Sets ``deletePlan`` property to ``true`` in ``activateDeletePlan`` helper |
| DeletePlanPopup | Sets ``deletePlan`` property to ``false`` in ``deleteCurrentPlan`` helper |
| DeletePlanPopup | Sets ``deletePlan`` property to ``false`` in ``cancel`` helper            |

### updateDeleteCourseStatus
| Component         | Description                                                                    |
|-------------------|--------------------------------------------------------------------------------|
| CourseComponent   | Sets ``deleteCourse`` property to ``true`` in ``deleteCourse`` helper          |
| DeleteCoursePopup | Sets ``deleteCourse`` property to ``false`` in ``actiavteDeleteCourse`` helper |
| DeleteCoursePopup | Sets ``deleteCourse`` property to ``false`` in ``cancel`` helper               |

### updateCourseToDelete
| Component         | Description                                                                        |
|-------------------|------------------------------------------------------------------------------------|
| CourseComponent   | Updates ``courseToDelete`` property in ``deleteCourse`` helper                     |
| DeleteCoursePopup | Updates ``courseToDelete`` property to ``null`` in ``actiavteDeleteCourse`` helper |
| DeleteCoursePopup | Updates ``courseToDelete`` property to ``null`` in ``cancel`` helper               |

### updateShowCourseInfo
| Component          | Description                                                                |
|--------------------|----------------------------------------------------------------------------|
| CourseComponent    | Sets ``showCourseInfo`` property to ``true`` in ``displayCourses`` helper  |
| CourseDisplayPopup | Sets ``showCourseInfo`` property to ``false`` in ``postAddCourse`` helper  |
| CourseDisplayPopup | Sets ``showCourseInfo`` property to ``false`` on button click              |
| SisCourse          | Sets ``showCourseInfo`` property to ``false`` in ``addPrereq`` helper      |

### updateCourseToShow
| Component          | Description                                                                      |
|--------------------|----------------------------------------------------------------------------------|
| CourseComponent    | Updates ``courseToShow`` property in ``displayCourses`` helper                   |
| CourseDisplayPopup | Updates ``courseToShow`` property to ``null`` in ``handlePostAddCourse`` helper  |
| CourseDisplayPopup | Updates ``courseToShow`` property to ``null`` on button click                    |
| SisCourse          | Updates ``courseToShow`` property to ``null`` in ``addPrereq`` helper            |

### updateAddingPrereq
| Component         | Description                                                                  |
|-------------------|------------------------------------------------------------------------------|
| Semester          | Sets ``addingPrereq`` property to ``false`` in ``handlePostResponse`` helper |
| AddingPrereqPopup | Sets ``addingPrereq`` property to ``false`` on button click                  |
| SisCourse         | Sets ``addingPrereq`` property to ``true`` in ``addPrereq`` helper           |

## Selectors

| Selector                         | Property           |
|----------------------------------|--------------------|
| ``selecteGeneratePlanAddStatus`` | ``generateAdd``    |
| ``selecteDeleteYearStatus``      | ``deleteYear``     |
| ``selectYearToDelete``           | ``yearToDelete``   |
| ``selectDeletePlanStatus``       | ``deletePlan``     |
| ``selectAddingPlanStatus``       | ``addPlan``        |
| ``selectToAddName``              | ``toAddName``      |
| ``selectToAddMajor``             | ``toAddMajor``     |
| ``selectCourseToDelete``         | ``courseToDelete`` |
| ``selectDeleteCourseStatus``     | ``deleteCourse``   |
| ``selectShowCourseInfo``         | ``showCourseInfo`` |
| ``selectCourseToShow``           | ``courseToShow``   |
| ``selectAddingPrereq``           | ``addingPrereq``   |

### selectGeneratePlanAddStatus
| Component            | Description                                                                          |
|----------------------|--------------------------------------------------------------------------------------|
| GenerateNewPlan      | When toggled to ``true``, generates a new plan and sends appropriate requests to API |
| HandleUserEntryDummy | Used in conditional for plan importing and creation                                  |

### selectDeleteYearStatus
| Component | Description                                           |
|-----------|-------------------------------------------------------|
| index     | Condition for rendering ``DeleteYearPopup`` component |

### selectYearToDelete
| Component       | Description                                                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------------------------------|
| DeleteYearPopup | Used for information in the popup confirmation. Used in ``activateDeleteYear`` helper to send a delete request to API |

### selectDeletePlanStatus
| Component | Description                                           |
|-----------|-------------------------------------------------------|
| index     | Condition for rendering ``DeletePlanPopup`` component |

### selectAddingPlanStatus
| Component | Description                                   |
|-----------|-----------------------------------------------|
| index     | Condition for rendering ``PlanAdd`` popup component |

### selectToAddName
| Component       | Description                                                      |
|-----------------|------------------------------------------------------------------|
| PlanAdd         | Used as default input value for new plan name                    |
| GenerateNewPlan | Used to change the name of the new plan being as it is generated |

### selectToAddMajor
| Component       | Description                                                                                                      |
|-----------------|------------------------------------------------------------------------------------------------------------------|
| PlanAdd         | Used in ``createNewPlan`` helper, displaying an error if ``toAddMajor`` is ``null``                              |
| GenerateNewPlan | Used to create Major distributions for for generating new plans, also as a conditional |

### selectCourseToDelete
| Component         | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| index             | Condition for rendering ``DeleteCoursePopup`` component                     |
| DeleteCoursePopup | Used to determine which course to delete in ``activateDeleteCourse`` helper |

### selectDeleteCourseStatus
No references. Deprecated?

### selectCourseInfoStatus
| Component | Description                                                                                             |
|-----------|---------------------------------------------------------------------------------------------------------|
| index     | Condition for rendering ``CourseDisplayPopup`` component                                                |
| SisCourse | Used in conditionals for ``getAddPrereqButton``, ``getAddCourseUI``, and ``getAddCourseButton`` helpers |

### selectCourseToShow
| Component          | Description                                                                                   |
|--------------------|-----------------------------------------------------------------------------------------------|
| CourseDisplayPopup | Used to many different helpers to display course information (e.g. title, year, credits, etc) |
| PrereqDisplay      | Used in ``getNonStringPrereq`` helper to determine year to check                              |
| Placeholder        | Used for updating courses in ``updateCourse`` and ``handleUpdateResponse`` helpers            |
| SisCourse          | Used for updating courses in ``updateCourse`` and ``handleUpdate`` helpers                    |

### selectAddingPrereqs
| Component     | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| index         | Condition for displaying ``AddingPrereqPopup`` component                    |
| Semester      | Condition for displaying button for ``addCourse`` helper                    |
| YearComponent | Used for formatting CSS of ``Semester`` components inside ``YearComponent`` |
