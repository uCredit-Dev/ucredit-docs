---
sidebar_label: Types
sidebar_position: 5
---

# Types

Typescript type descriptions

## Common Types

### ``Restriction``

```typescript
export type Restriction = {
  RestrictionName: string;
  Description: string;
};
```

### ``Course``

```typescript
// For inspected SIS courses
export type Course = {
  title: string;
  number: string;
  areas: string;
  term: String;
  school: string;
  department: string;
  credits: string;
  wi: boolean;
  bio: string;
  tags: string[];
  preReq: string[];
  restrictions: Restriction[];
  version?: string;
  level: string;
};
```

### ``SISRetrievedCourse``

```typescript
export type SISRetrievedCourse = {
  title: string;
  number: string;
  terms: string[];
  versions: {
    areas: string;
    term: string;
    school: string;
    department: string;
    credits: string;
    wi: boolean;
    bio: string;
    level: string;
    tags: string[];
    preReq: string[];
    coReq: string[];
    restrictions: any[];
  }[];
};
```

### ``CourseEvals``

```typescript
// For course Evals
export type CourseEvals = {
  number: string;
  prof: string;
  rating: string;
  summary: string;
  term: string;
};
```

### ``UserCourse``

```typescript
// For User courses, which have extra ids with user-specific info and a single term/area that the user chose.
export type UserCourse = {
  _id: string;
  title: string;
  term: SemesterType;
  number: string;
  department: string;
  tags: string[];
  area: string;
  credits: number;
  wi: boolean;
  taken: boolean;
  ratings: number[];
  distribution_ids: string[];
  plan_id: string;
  user_id: string;
  year_id: string;
  preReq: string[];
  isPlaceholder: boolean;
  version: string;
};
```

### ``Year``

```typescript
export type Year = {
  _id: string;
  name: string;
  courses: string[];
  plan_id: any;
  user_id: string;
  year: number;
};
```

### ``Plan``

```typescript
export type Plan = {
  _id: string;
  name: string;
  majors: string[];
  distribution_ids: string[];
  user_id: string;
  numYears: number;
  years: Year[];
};
```

### ``Affiliation``

```typescript
type Affiliation = "STUDENT" | "FACULTY" | "STAFF";
```

### ``Grade``

```typescript
type Grade =
  | "AE UG Freshman"
  | "AE UG Sophomore"
  | "AE UG Junior"
  | "AE UG Senior"
  | "Research Program Coordinator"
  | "LECTURER"
  | "Student Success Advisor";
```

### ``User``

```typescript
export type User = {
  _id: string; //JHED ID
  name: string;
  email: string;
  affiliation: Affiliation; //STUDENT, FACULTY or STAFF
  school: string;
  grade: Grade;
  plan_ids: string[];
};
```
### ``Filter``

```typescript
export type Filter = {
  area?: string;
  tags?: TagType[];
  department?: string;
  title?: string;
  number?: string | string[];
  wi?: boolean;
  exception?: Filter;
};
```

### ``SearchExtras``

```typescript
export type SearchExtras = {
  query: string;
  credits: string | null;
  areas: AreaType | null;
  tags: TagType | null;
  term: SemesterType;
  year: number;
  department: DepartmentType | null;
  wi: boolean | null;
  levels: string | null;
};
```

### ``Distribution``

```typescript
export type Distribution = {
  _id: string;
  name: string;
  required_credits: number;
  min_credits_per_course: number;
  description: string;
  criteria: string;
  fine_requirements?: FineReq[];
  user_select?: boolean;
  double_count?: boolean;
  exception?: string;
  planned_credits: number;
  courses: string[];
  user_id: string;
  plan_id: string;
};
```

### ``SemesterType``

```typescript
export type SemesterType =
  | "Fall"
  | "Spring"
  | "Summer"
  | "Intersession"
  | "All";
```

### ``DepartmentType``

```typescript
export type DepartmentType = typeof all_deps[number];
```

### ``TagType``

```typescript
export type TagType = typeof course_tags[number];
```

### ``FilterType``

```typescript
export type FilterType =
  | "credits"
  | "distribution"
  | "tags"
  | "term"
  | "year"
  | "department"
  | "wi"
  | "levels";
```

### ``AreaType``

```typescript
export type AreaType = "N" | "S" | "H" | "W" | "E" | "Q";
```

### ``FineReq``

```typescript
export type FineReq = {
  required_credits: number;
  description: string;
  criteria: string;
  exclusive?: boolean;
};
```

### ``DistributionObj``

```typescript
export type DistributionObj = {
  name: string;
  required_credits: number;
  min_credits_per_course: number;
  description: string;
  criteria: string;
  fine_requirements?: FineReq[];
  user_select?: boolean;
  double_count?: boolean;
  exception?: string;
};
```

### ``Major``

```typescript
export type Major = {
  degree_name: string;
  department: string;
  total_degree_credit: number;
  wi_credit: number;
  url: string;
  distributions: DistributionObj[];
};
```

### ``Minor``

```typescript
export type Minor = {
  degree_name: string;
  department: string;
  total_degree_credit: number;
  wi_credit: number;
  url: string;
  distributions: DistributionObj[];
};
```

### ``DroppableType``
```typescript
export type DroppableType = {
  year: string;
  semester: SemesterType;
  courses: UserCourse[];
};
```