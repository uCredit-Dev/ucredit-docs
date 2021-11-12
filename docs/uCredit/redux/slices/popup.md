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

## Reducers

## Selectors
