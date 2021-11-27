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

| Reducer                | Action Payload Type               | State Affected                        |
|------------------------|-----------------------------------|---------------------------------------|
| updateUser             | ```User```                        | ```currentUser```                     |
| updatePlanList         | Array of ```Plan```               | ```planList```                        |
| updateGuestPlanIds     | Array of ```String```             | ```currentUser```                     |
| updateCourseCache      | Array of ```SISRetrievedCourse``` | ```cacheNumbers```, ```courseCache``` |
| updateUnfoundNumbers   | ```String```                      | ```unfoundNumbers```                  |
| updateAllCoursesCached | Array of ```SISRetrievedCourse``` | ```courseCache```                     |
| updateRetrievedAll     | ```Boolean```                     | ```retrievedAll```                    |
| resetUser              | None                              | ```currentUser``` and ```planList```  |

### updateUser
Used to update the currentUser object

| Component            | Description                                                      |
|----------------------|------------------------------------------------------------------|
| HandleUserEntryDummy | Used in ```login``` Update user information when logging in      |
| HandleUserEntryDummy | Used in ```useEffect``` when trying to retrieve user information |
| HandleUserEntryDummy | Used in ```handleExistingUser``` if user already exists          |
| DashboardEntry       | Used in ```initialLogin``` if completely new user                |
| DashboardEntry       | Used in ```fetchUser``` when retrieving user info based on url   |
| DashboardEntry       | Used in ```handleGuest``` when user is a guest                   |

### updatePlanList
Used to update the array of plans

| Component            | Description                                                                             |
|----------------------|-----------------------------------------------------------------------------------------|
| HandleUserEntry      | Used in ```processRetrievedPlans``` and ```processYears``` when there's no initial plan |
| HandleUserEntry      | Used in ```handleFinishAdding``` after plan was imported                                |
| HandleUserEntry      | Used in ```getPlans``` after sorting the plans                                          |
| CourseList           | Used in ```swapCourse``` after courses in a Plan were changed                           |
| Semester             | Used in ```handlePostResponse``` after posting a new plan to the data base              |
| YearSettingsDropdown | Used in ```handleYearChange``` after a year was updated                                 |
| ActionBar            | Used in ```updateName``` after plan's name was changed                                  |
| ActionBar            | Used in ```addNewYear``` afer a new year was added to a plan                            |
| PlanChoose           | Used in ```handlePlanChange``` after switching to a different plan                      |
| CourseDisplayPopup   | Used in ```handlePostAddCourse``` after a new course was added to a plan                |
| DeleteCoursePopup    | Used in ```activateDeleteCourse``` after a course was deleted                           |
| DeletePlanPopup      | Used in ```deleteCurrentPlan``` after a plan was deleted                                |
| CourseDisplay        | Used in ```updateDistributions``` after distribution requirements were met              |
| GenerateNewPlan      | Used in ```useEffect``` after a new plan was generated                                  |

### updateGuestPlanIds
Used to update the currentUser's ids if they are a guest

| Component       | Description                                                               |
|-----------------|---------------------------------------------------------------------------|
| GenerateNewPlan | Used in ```useEffect``` when making a new plan and if the user is a guest |

### updateCourseCache
Used to update which courses have been cached

| Component            | Description                                                                              |
|----------------------|------------------------------------------------------------------------------------------|
| App                  | Used in ```useEffect``` when a new SIS course was added                                  |
| HandleUserEntryDummy | Used in ```cache``` when caching all courses in a plan                                   |
| Form                 | Used in ```find``` when successfully finds a course so need to cache it                  |
| Form                 | Used in ```performSmartSearch``` when searching courses with filters so need to cache it |
| assets               | Used in ```getCourse``` after retrieving a course from the api                           |

### updateUnfoundNumbers
Used to update the cache numbers that were not able to be retrieved

| Component | Description                                                  |
|-----------|--------------------------------------------------------------|
| assets    | Used in ```getCourse``` if failed to retrieve from data base |

### updateAllCoursesCached

| Component | Description                                                |
|-----------|------------------------------------------------------------|
| App       | Used in ```retrieveData``` after receiving all SIS courses |

### updateRetrievedAll

| Component | Description                                                                               |
|-----------|-------------------------------------------------------------------------------------------|
| App       | Used in ```retrieveData``` after receiving all SIS courses and sets ```boolean``` to true |

### resetUser

| Component   | Description                                              |
|-------------|----------------------------------------------------------|
| UserSection | Used to reset the user when going back to the login page |

## Selectors
