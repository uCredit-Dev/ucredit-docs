---
sidebar_label: Search Slice
---

# Current Plan Slice

The slice holding information about the current search, primarily for the ``CourseDisplay`` popup
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

## Reducers

## Selectors
