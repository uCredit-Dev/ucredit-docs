---
sidebar_label: Search Slice
---

# Current Plan Slice

The slice holding information about the current search, primarily for the search popup
and relevant children. Holds information such as current searchterm, retrieved courses, and filters.

## State

```typescript
type searchStates = {
  searching: boolean;
  searchTerm: string;
  searchTime: TimeBundle;
  filters: FilterObj;
  retrievedCourses: SISRetrievedCourse[];
  retrievedVerions: number[];
  inspectedVersion: Course | "None";
  inspectedCourse: SISRetrievedCourse | "None";
  placeholder: boolean;
  searchStack: { sis: SISRetrievedCourse; ver: Course }[];
};
```

| Property             | Type                                                | Description |
|----------------------|-----------------------------------------------------|-------------|
|  ``searching``       | ``boolean``                                         | Indicates whether or not the application is actively searching |
| ``searchTerm``       | ``string``                                          | The current user query for searching |
| ``searchTime``       | ``TimeBundle``                                      | The time the user is currently searching in |
| ``filters``          | ``FilterObj``                                       | The active filters being applied to the serach |
| ``retrievedCourses`` | ``SISRetrievedCourse[]``                            | The current list of unfiltered courses matching the query |
| ``retrievedVerions`` | ``number[]``                                        | The list of correct versions fo the retrieved coruses list |
| ``inspectedVersion`` | ``Course`` \| ``"None"``                            | The version of the course being currently inspected in the popup|
| ``inspectedCourse``  | `SISRetrievedCourse` \| `"None"`                    | The course being currently inspected in the popup |
| ``placeholder``      | `boolean`                                           | Whether or not a placeholder is being added |
| ``searchStack``      | Array of `{ sis: SISRetrievedCourse; ver: Course }` | The stack used to track prereq navigation |

## Relevant Types
```typescript
type searchStates = {
  searching: boolean;
  searchTerm: string;
  searchTime: TimeBundle;
  filters: FilterObj;
  retrievedCourses: SISRetrievedCourse[];
  retrievedVerions: number[];
  inspectedVersion: Course | "None";
  inspectedCourse: SISRetrievedCourse | "None";
  placeholder: boolean;
  searchStack: { sis: SISRetrievedCourse; ver: Course }[];
};
```

```typescript
type searchStackUpdate = {
  new: SISRetrievedCourse;
  oldSIS: SISRetrievedCourse;
  oldV: Course;
};
```




## Reducers
| Reducer                | Action Payload Type                | State Affected                                                                             |
|------------------------|------------------------------------|--------------------------------------------------------------------------------------------|
| updateSearchTime       | TimeBundle                         | searchTime.searchYear, searchTime.searchSemester                                           |
| updateSearchTerm       | String                             | searchTerm                                                                                 |
| updateSearchStatus     | boolean                            | searching                                                                                  |
| updateInspectedCourse  | SISRetrievedCourse \| "None"       | inspectedVersion, inspectedCourse                                                          |
| updateInspectedVersion | Course \| "None"                   | inspectedVersion                                                                           |
| clearSearch            |                                    | filters, searchTerm, searchTime, searching, inspectedCourse, retrievedCourses, searchStack |
| updateRetrievedCourses | SISRetrievedCourse[]               | retrievedCourses                                                                           |
| updatePlaceholder      | boolean                            | placeholder                                                                                |
| updateSearchFilters    | { filter: FilterType; value: any } | Properties of ``filter``                                                                   |
| updateSearchStack      | searchStackUpdate                  | `searchStack`, `inspectedCourse`, `inspectedVersion`                                       |
| popSearchStack         |                                    | `searchStack`, `inspectedCourse`, `inspectedVersion`                                       |

### updateSearchTime
| Component       | Description                                                     |
|-----------------|-----------------------------------------------------------------|
| Semester        | Used in ``addCourse`` to set initial semester and years         |
| SisCourse       | Used in ``handleYearChange`` to adjust target year and semester |
| GenerateNewPlan | Used in ``useEffect`` for generating a new plan                 |

### updateSearchTerm
| Component | Description                                                              |
|-----------|--------------------------------------------------------------------------|
| Form      | Used in ``handleSeachTerm`` to update the search term based on use input |

### updateSearchStatus
| Component | Description                                           |
|-----------|-------------------------------------------------------|
| Semester  | Used in ``addCourse`` to update searching state       |
| Search    | Used as an onclick callback to close the search popup |

### updateInspectedCourse
| Component          | Description                                              |
|--------------------|----------------------------------------------------------|
| CourseDisplayPopup | Used in `useEffect` to display correct inspected course  |
| CourseCard         | Used in `handleCourseClick` to inspect a course on click |
| Placeholder        | Used in `clearInspected` to clear the inspected course   |

### updateInspectedVersion
| Component          | Description                                                                      |
|--------------------|----------------------------------------------------------------------------------|
| CourseDisplayPopup | Used in `useEffect` to display correct inspected course version                  |
| CourseDisplayPopup | Used in `useEffect` to display correct inspected course version for placeholders |
| CourseCard         | Used in `handleCourseClick` to display correct course after user click           |
| SearchList         | Used in `onPlaceholderClick` to display placeholder course info                  |
| Placeholder        | Used in ``onPTChange`` to update placeholder course info                         |
| Placeholder        | Used in ``onPCChange`` to update placeholder course info                         |
| Placeholder        | Used in ``onPNChange`` to update placeholder course info                         |
| Placeholder        | Used in ``onPDChange`` to update placeholder course info                         |
| Placeholder        | Used in ``onPTagChange`` to update placeholder course info                       |
| SisCourse          | Used in `handleTermSwitch` to switch the inspected course version                |

### clearSearch
| Component          | Description                                                                              |
|--------------------|------------------------------------------------------------------------------------------|
| Semester           | Used in ``addPrereq`` to clear search after adding prereq                                |
| Semester           | Used in ``handlePostResponse`` to clear search after a successful post                   |
| CourseDisplayPopup | Used in ``handlePostAddCourse`` to clear search after a successful post after course add |
| CourseDisplay      | Used in ``addCourse`` after a course is added                                            |

### updateRetrievedCourses
| Component | Description                                                                        |
|-----------|------------------------------------------------------------------------------------|
| Form      | Used in ``useEffect`` for searching to clear courses if filters/queries are empty  |
| Form      | Used in ``useEffect`` for searching extras                                         |
| Form      | Used in `handleFinishFinding` after processing newly found courses                 |
| Form      | Used in `performSmartSearch` after api search request                              |

### updatePlaceholder
| Component          | Description                                                           |
|--------------------|-----------------------------------------------------------------------|
| CourseDisplayPopup | Used in `useEffect` for showing a non-placeholder course              |
| CourseDisplayPopup | Used in `useEffect` for showing a placeholder course                  |
| CourseDisplayPopup | Used in `handlePostAddCourse` after updating a non-placeholder course |
| CourseCard         | Used in `handleCourseClick` to show a non-placeholder course          |
| SearchList         | Used in `onPlaceholderClick` to activate placeholder on click         |
| SearchList         | Used in `onPlaceholderClick` to deactivate placeholder on click       |

### updateSearchFilters
| Component          | Description                                                                                |
|--------------------|--------------------------------------------------------------------------------------------|
| Filters (multiple) | Used in multiple handle filter change helpers to handle individual filter property changes |
| Form (multiple)    | Used to set default filters for handling adding course to the current or future year       |

### updateSearchStack
| Component     | Description                                                                               |
|---------------|-------------------------------------------------------------------------------------------|
| PrereqDisplay | Used in `updateInspected` to handle inspecting prereqs of a course in order of inspection |

### popSearchStack
| Component | Description                                                                                               |
|-----------|-----------------------------------------------------------------------------------------------------------|
| SisCourse | Used in `getPrevCourseButton` to go back to the last previously inspected course while inspecting prereqs |

## Selectors

| Selector         | Property                    |
|------------------|-----------------------------|
| selectYear             | `searchTime.searchYear`     |
| selectSemester         | `searchTime.searchSemester` |
| selectSearchterm       | `searchTerm`                |
| selectSearchStatus     | `searching`                 |
| selectSearchFilters    | `filters`                   |
| selectRetrievedCourses | `retrievedCourses`          |
| selectInspectedCourse  | `inspectedCourse`           |
| selectPlaceholder      | `placeholder`               |
| selectSearchStack      | `searchStack`               |
| selectVersion          | `inspectedVersion`          |

### selectYear
| Component     | Description                                                 |
|---------------|-------------------------------------------------------------|
| Search        | Used in `getYearName` to display the correct searching year |
| PrereqDisplay | Used in `getYearById` to generate year objects              |
| Form          | Used in `getYearVal` to get the search year if possible     |
| CourseDisplay | Used in `getYear` to get the search year if possible        |
| SisCourse     | Used as the value of the year select input                  |

### selectSemester
| Component     | Description                                                                              |
|---------------|------------------------------------------------------------------------------------------|
| Search        | Used to display the semester current being searched in                                   |
| PrereqDisplay | Used in `getNonStringPrereq` to check prereqs                                            |
| Form          | Used to set default filters and update filters based on semester                         |
| CourseDisplay | Used in `updateDistributions` in the body of the post request as the `term` property     |
| SisCourse     | Used in `handleYearChange` to update search semester and for semester selection dropdown |

### selectSearchterm
| Component | Description                                      |
|-----------|--------------------------------------------------|
| Form      | Used in many places as the user query to search  |

### selectSearchStatus
| Component   | Description                                                            |
|-------------|------------------------------------------------------------------------|
| CourseList  | Used as a `useEffect` dependency for rendering years and their courses |
| index       | Used as a condition for rendering `Search` component popup             |
| Placeholder | Used as a condition showing `addCourse` helper button                  |

### selectSearchFilters
| Component  | Description                                                                    |
|------------|--------------------------------------------------------------------------------|
| Filters    | Used in many places to access and display properties of current search filters |
| Form       | Used in many places to filter search logic based on properties                 |
| SearchList | Used to update pagination based on filtered results                            |

### selectRetrievedCourse
| Component  | Description                                                           |
|------------|-----------------------------------------------------------------------|
| SearchList | Used in many places, processed with filters to display search results |

### selectInspectedCourse
| Component         | Description                                                                                                           |
|-------------------|-----------------------------------------------------------------------------------------------------------------------|
| PrereqDisplay     | Used in `updateInspected` as a condition to updating the search stack for prereqs                                     |
| CourseEvalSection | Used in `useEffect` for updating course evals whenever a new course is inspected, and as a condition for fetching     |
| SisCourse         | Used in many places to determine if certain actions are valid (such as switching target semester for adding a course) |

### selectPlaceholder
| Component          | Description                                                                           |
|--------------------|---------------------------------------------------------------------------------------|
| CourseList         | Used as a `useEffect` dependency for generating and updating year and course displays |
| Semester           | Used in `updateDistributions` to update distributions                                 |
| SearchList         | Used in `onPlaceholderClick` to display add placeholder menu                          |
| CourseDisplayPopup | Used in `addCourse` to update distribution bars after adding a course                 |
| CourseDisplay      | Used in `updateDistributions` to update distribution bars after adding a course       |
| PlaceHolder        | Used as a condition for updating placeholder information                              |

### selectSearchStack
| Component          | Description                                                                       |
|--------------------|-----------------------------------------------------------------------------------|
| SisCourse          | Used as a condition for display UI such as addPrereq and previousCourse buttons   |

### selectVersion
| Component          | Description                                                                       |
|--------------------|-----------------------------------------------------------------------------------|
| Semester           | Used in many places to update the semesters and distributions                     |
| CourseDisplayPopup | Used in many places to display information about the correctly versioned course   |
| PrereqDisplay      | Used in many places to display information about the correctly versioned course   |
| CourseCard         | Used as a condition for showing a clickable course card                           |
| CourseDisplay      | Used in many places to display information about the correctly versioned course   |
| CourseVersion      | Used in many places to display information about the correctly versioned course   |
| Placeholder        | Used to regenerate placeholder information                                        |
| SisCourse          | Used as a condition for certain functionality, such as course adding              |