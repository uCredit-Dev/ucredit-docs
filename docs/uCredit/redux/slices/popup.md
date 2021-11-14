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
| ``deletePlan``     | ``boolean``                                          |             |
| ``addPlan``        | ``boolean``                                          |             |
| ``toAddName``      | ``string``                                           |             |
| ``toAddMajor``     | ``Major`` \| ``null``                                |             |
| ``generateAdd``    | ``boolean``                                          |             |
| ``deleteYear``     | ``boolean``                                          |             |
| ``yearToDelete``   | ``Year`` \| ``null``                                 |             |
| ``deleteCourse``   | ``boolean``                                          |             |
| ``courseToDelete`` | ``{ course: UserCourse; year: number }`` \| ``null`` |             |
| ``showCourseInfo`` | ``boolean``                                          |             |
| ``addingPrereq``   | ``boolean``                                          |             |

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
| Component                | Description                                                                          |
|--------------------------|--------------------------------------------------------------------------------------|
| GenerateNewPlan.tsx      | When toggled to ``true``, generates a new plan and sends appropriate requests to API |
| HandleUserEntryDummy.tsx | Used in conditional for plan importing and creation                                  |

### selectDeleteYearStatus
| Component | Description                                           |
|-----------|-------------------------------------------------------|
| index.tsx | Condition for rendering ``DeleteYearPopup`` component |

### selectYearToDelete
| Component       | Description                                                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------------------------------|
| DeleteYearPopup | Used for information in the popup confirmation. Used in ``activateDeleteYear`` helper to send a delete request to API |

### selectDeletePlanStatus
| Component | Description                                           |
|-----------|-------------------------------------------------------|
| index.tsx | Condition for rendering ``DeletePlanPopup`` component |

### selectAddingPlanStatus
| Component | Description                                   |
|-----------|-----------------------------------------------|
| index.tsx | Condition for rendering ``PlanAdd`` component |