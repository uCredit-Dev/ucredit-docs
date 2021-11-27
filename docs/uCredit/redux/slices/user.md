---
sidebar_label: User Slice
---

# User Slice

The slice holding information about the current user and their plans. Also holds cached
courses.

## State

```typescript
type UserSlice = {
  currentUser: User;
  planList: Plan[];
  courseCache: SISRetrievedCourse[];
  cacheNumbers: String[];
  unfoundNumbers: String[];
  retrievedAll: boolean;
};
```

| Property         | Type                          | Description                                                                                        |
| ---------------- | ----------------------------- | -------------------------------------------------------------------------------------------------- |
| `currentUser`    | `User`                        | Encapsulation of information involving a user                                                      |
| `planList`       | Array of `Plan`               | The list of all plans a user has                                                                   |
| `courseCache`    | Array of `SISRetrievedCourse` | Encapsulation of a course based on SIS information                                                 |
| `cacheNumbers`   | Array of `String`             | Seems to help with determining if a course is cached or not                                        |
| `unfoundNumbers` | Array of `String`             | Seems to help with determining if a course is cached or not - if it is not then pull from database |
| `retrievedAll`   | `boolean`                     | Helps with deciding if all courses for a search have already been cached if not pull from database |

## Reducers

| Reducer                | Action Payload Type           | State Affected                |
| ---------------------- | ----------------------------- | ----------------------------- |
| updateUser             | `User`                        | `currentUser`                 |
| updatePlanList         | Array of `Plan`               | `planList`                    |
| updateGuestPlanIds     | Array of `String`             | `currentUser`                 |
| updateCourseCache      | Array of `SISRetrievedCourse` | `cacheNumbers`, `courseCache` |
| updateUnfoundNumbers   | `String`                      | `unfoundNumbers`              |
| updateAllCoursesCached | Array of `SISRetrievedCourse` | `courseCache`                 |
| updateRetrievedAll     | `Boolean`                     | `retrievedAll`                |
| resetUser              | None                          | `currentUser` and `planList`  |

### updateUser

Used to update the currentUser object

| Component            | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| HandleUserEntryDummy | Used in `login` Update user information when logging in      |
| HandleUserEntryDummy | Used in `useEffect` when trying to retrieve user information |
| HandleUserEntryDummy | Used in `handleExistingUser` if user already exists          |
| DashboardEntry       | Used in `initialLogin` if completely new user                |
| DashboardEntry       | Used in `fetchUser` when retrieving user info based on url   |
| DashboardEntry       | Used in `handleGuest` when user is a guest                   |

### updatePlanList

Used to update the array of plans

| Component            | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| HandleUserEntry      | Used in `processRetrievedPlans` and `processYears` when there's no initial plan |
| HandleUserEntry      | Used in `handleFinishAdding` after plan was imported                            |
| HandleUserEntry      | Used in `getPlans` after sorting the plans                                      |
| CourseList           | Used in `swapCourse` after courses in a Plan were changed                       |
| Semester             | Used in `handlePostResponse` after posting a new plan to the data base          |
| YearSettingsDropdown | Used in `handleYearChange` after a year was updated                             |
| ActionBar            | Used in `updateName` after plan's name was changed                              |
| ActionBar            | Used in `addNewYear` afer a new year was added to a plan                        |
| PlanChoose           | Used in `handlePlanChange` after switching to a different plan                  |
| CourseDisplayPopup   | Used in `handlePostAddCourse` after a new course was added to a plan            |
| DeleteCoursePopup    | Used in `activateDeleteCourse` after a course was deleted                       |
| DeletePlanPopup      | Used in `deleteCurrentPlan` after a plan was deleted                            |
| CourseDisplay        | Used in `updateDistributions` after distribution requirements were met          |
| GenerateNewPlan      | Used in `useEffect` after a new plan was generated                              |

### updateGuestPlanIds

Used to update the currentUser's ids if they are a guest

| Component       | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| GenerateNewPlan | Used in `useEffect` when making a new plan and if the user is a guest |

### updateCourseCache

Used to update which courses have been cached

| Component            | Description                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ |
| App                  | Used in `useEffect` when a new SIS course was added                                  |
| HandleUserEntryDummy | Used in `cache` when caching all courses in a plan                                   |
| Form                 | Used in `find` when successfully finds a course so need to cache it                  |
| Form                 | Used in `performSmartSearch` when searching courses with filters so need to cache it |
| assets               | Used in `getCourse` after retrieving a course from the api                           |

### updateUnfoundNumbers

Used to update the cache numbers that were not able to be retrieved

| Component | Description                                              |
| --------- | -------------------------------------------------------- |
| assets    | Used in `getCourse` if failed to retrieve from data base |

### updateAllCoursesCached

| Component | Description                                            |
| --------- | ------------------------------------------------------ |
| App       | Used in `retrieveData` after receiving all SIS courses |

### updateRetrievedAll

| Component | Description                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| App       | Used in `retrieveData` after receiving all SIS courses and sets `boolean` to true |

### resetUser

| Component   | Description                                              |
| ----------- | -------------------------------------------------------- |
| UserSection | Used to reset the user when going back to the login page |

## Selectors

| Selectors              | Property         |
| ---------------------- | ---------------- |
| `selectUser`           | `currentUser`    |
| `selectPlanList`       | `planList`       |
| `selectCourseCache`    | `courseCache`    |
| `selectRetrievedAll`   | `retrievedAll`   |
| `selectUnfoundNumbers` | `unfoundNumbers` |

### selectUser

| Component            | Description                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| App                  | Used in `useEffect` to check what specifically to render based if the user exists or not        |
| HandleUserEntryDummy | Used in `useEffect` to either make or get plans from a user based on if they are a guest or not |
| UserSection          | Used to help determine if the person is a guest or not                                          |
| Semester             | Used to help determine if the person is a guest or not                                          |
| ActionBar            | Used to help determine if the person is a guest or not                                          |
| PlanChoose           | Used in `PlanChoose` to help determine if the person is a guest or not                          |
| DashboardEntry       | Used in `useEffect` to help determine if the person exists and then log ins based on that       |
| CourseDisplayPopup   | Used in `addCourse` to help determine if the person is a guest or not                           |
| DeleteCoursePopup    | Used the user's id to generate a new plan                                                       |
| DeletePlanPopup      | Used to help determine if a plan should be deleted                                              |
| DeleteYearPopup      | Used the user's id to generate a new plan                                                       |
| CourseDisplay        | Used in `updateDistributions` to help determine if the person is a guest or not                 |
| GenerateNewPlan      | Used to help with developing the plan based on user's information                               |

### selectPlanList

| Component            | Description                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| HandleUserEntryDummy | Used in `handleFinishAdding` after courses finsihed importing so need to update the plans        |
| CourseList           | Used in `swapCourse` to help update the current plan (index 0) in the list                       |
| Semester             | Used in `handlePostResponse` by replacing the plan in the list with the same id                  |
| YearSettingsDropDown | Used in `handleYearChange` by updating the current plan with the new one                         |
| ActionBar            | Used in `updateName` by replacing the plan in the list with the same id                          |
| PlanChoose           | Used in `handlePlanChange` by switching elements in the array so the new plan is the current one |
| CourseDisplayPopup   | Used in `handlePostAddCourse` in updating the current plan in the list based on the id           |
| DeleteCoursePopup    | Used in `activateDeleteCourse` by updating list after deleting course                            |
| DeletePlanPopup      | Used in `deleteCurrentPlan` to see if can delete, can't delete if there is only one plan         |
| PlanAdd              | Used in `handleCancel` and sees if a user has any plans before cancelling, must have one         |
| CourseDisplay        | Used in `updateDistributions` when needing to update the current plan                            |
| GenerateNewPlan      | Used in `useEffect` if needing to generate a new plan so need to add to list                     |

### selectCourseCache

| Component          | Description                                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| App                | Used in `useEffect` in checking if any courses are cached yet                                                                                                                  |
| InfoMenu           | Used in `useEffect` when trying to update the distributions                                                                                                                    |
| CourseComponent    | Used in `useEffect` when checking prerequisites of a course                                                                                                                    |
| CouseList          | Used in `getSISCourse` to send back the SIS course based on user's cache                                                                                                       |
| FineDistribution   | Used in `useEffect` when needing to update the fine distributions                                                                                                              |
| CourseDisplayPopup | Used in `useEffect` when needing to display the information of a course                                                                                                        |
| PrereqDisplay      | Used in `useEffect` when a new course needs to get the pre reqs, in `display` when displaying prereqs, and in `updateInspected` by making a function that can update the cache |
| Form               | Used in `find` when given a search query to help with finding courses                                                                                                          |

### selectRetrievedAll

| Component | Description                                                                         |
|-----------|-------------------------------------------------------------------------------------|
| Form      | Conditional in determining if all courses have been retrieved from the database yet |


### selectUnfoundNumbers

N/A Depreciated?
