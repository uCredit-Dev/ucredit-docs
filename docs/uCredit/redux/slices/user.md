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

## Reducers

## Selectors
