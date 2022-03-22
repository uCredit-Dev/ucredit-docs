---
sidebar_label: Course Routes
sidebar_position: 6
---

# Course Routes

import {course1, courseList} from "../sampleObjects";

### `GET` `/api/coursesByPlan/:plan_id`

Gets a list of courses for a given plan.

|            | Name    | Type       | Description                              |
| ---------- | ------- | ---------- | ---------------------------------------- |
| **Params** | plan_id | `String`   | id of plan for which to get courses from |
| **Output** |         | `Course[]` | list of courses from the specific plan   |

#### Sample output

<samp>
  <pre>{JSON.stringify(courseList, null, 2)}</pre>
</samp>

### `GET` `/api/coursesByDistribution/:distribution_id`

Gets a list of courses for a given distribution

|            | Name            | Type       | Description                                      |
| ---------- | --------------- | ---------- | ------------------------------------------------ |
| **Params** | distribution_id | `String`   | id of distribution for which to get courses from |
| **Output** |                 | `Course[]` | list of courses from the specific plan           |

#### Sample output

<samp>
  <pre>{JSON.stringify(courseList, null, 2)}</pre>
</samp>
### `GET` `/api/courses/:course_id`

Gets a course by course id.

|            | Name      | Type     | Description              |
| ---------- | --------- | -------- | ------------------------ |
| **Params** | course_id | `String` | id of course to retrieve |
| **Output** |           | `Course` | course to retrieve       |

### `GET` `/api/coursesByTerm/:plan_id`

Gets a list of courses in a plan for a specific term.

|            | Name    | Type       | Description                   |
| ---------- | ------- | ---------- | ----------------------------- |
| **Params** | plan_id | `String`   | id of plan to get courses for |
| **Query**  | year    | `String`   | year of courses to get        |
|            | term    | `String`   | semester of courses to get    |
| **Output** |         | `Course[]` | list of courses to retrieve   |

#### Sample output

<samp>
  <pre>{JSON.stringify(courseList, null, 2)}</pre>
</samp>

### `POST` `/api/courses`

Posts a new course to the database. Associated distributions, plan & year is also updated.

|            | Name            | Type        | Description                                                                              |
| ---------- | --------------- | ----------- | ---------------------------------------------------------------------------------------- |
| **Body**   | title           | `String`    | title of course to add                                                                   |
|            | plan_id         | `String`    | plan the course is part of                                                               |
|            | term            | `String`    | term the course is part of                                                               |
|            | termOffered     | `?String[]` | all terms the course was offered                                                         |
|            | year            | `String`    | year name (ie. "Sophomore"), must match the name of the year associated with the year_id |
|            | version         | `?String`   | version of the course amongst its SIS course versions                                    |
|            | number          | `?String`   | course number                                                                            |
|            | department      | `?String`   | course department                                                                        |
|            | tags            | `?String[]` | an array of course tags                                                                  |
|            | area            | `?String`   | course areas                                                                             |
|            | credits         | `Number`    | course credit count                                                                      |
|            | wi              | `?Boolean`  | whether course is a written intensive                                                    |
|            | taken           | `?Boolean`  | whether course has been taken                                                            |
|            | preReq          | `?Array`    | course prereqs                                                                           |
|            | isPlaceholder   | `?Boolean`  | whether course is a placeholder                                                          |
|            | isTransfer      | `?Boolean`  | whether course is a transfer course                                                      |
|            | ratings         | `?Array`    | course ratings                                                                           |
|            | distributionIds | `String[]`  | course distributions course is part of                                                   |
|            | year_id         | `String`    | year id of year the course is part of                                                    |
|            | user_id         | `String`    | user who owns the plan the course is part of                                             |
|            | forceSatisfied  | `?String`   | jelps determine if course is force-satisfied                                             |
|            | expireAt        | `?Date`     | date course should be deleted by (for guest users)                                       |
| **Output** |                 | `Course`    | newly added course                                                                       |

<samp>
  <pre>{JSON.stringify(course1, null, 2)}</pre>
</samp>

### `PATCH` `/api/courses/changeStatus/:course_id`

Changes the "taken" status of a course, update credits & satisfaction status of the associated distributions.

|            | Name      | Type      | Description                         |
| ---------- | --------- | --------- | ----------------------------------- |
| **Params** | course_id | `String`  | id of course to be updated          |
| **Body**   | taken     | `Boolean` | new status of aforementioned course |
| **Output** |           | `Course`  | updated course                      |

<samp>
  <pre>{JSON.stringify(course1, null, 2)}</pre>
</samp>

### `PATCH` `/api/courses/dragged`

Updates a year and semester of course in the database from previous location to newly dragged location.

|            | Name     | Type     | Description                    |
| ---------- | -------- | -------- | ------------------------------ |
| **Body**   | courseId | `String` | id of course to be updated     |
|            | newYear  | `String` | new year to move course to     |
|            | oldYear  | `String` | old year that course exists in |
|            | newTerm  | `String` | new term of course             |
| **Output** |          | `Course` | updated course                 |

#### Sample output

<samp>
  <pre>{JSON.stringify(course1, null, 2)}</pre>
</samp>

### `DELETE` `/api/courses/:course_id`

Deletes a specific course from the database. Credit & satisfication status of the associated distributions are recalculated.

|            | Name      | Type     | Description                |
| ---------- | --------- | -------- | -------------------------- |
| **Params** | course_id | `String` | id of course to be deletes |
| **Output** |           | `Course` | deleted course             |

<samp>
  <pre>{JSON.stringify(course1, null, 2)}</pre>
</samp>
