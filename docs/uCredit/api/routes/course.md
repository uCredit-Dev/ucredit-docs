---
sidebar_label: Course Routes
sidebar_position: 6
---

# Course Routes

### `GET` `/api/coursesByPlan/:plan_id`

Gets a list of courses for a given plan.

|            | Name    | Type       | Description                              |
| ---------- | ------- | ---------- | ---------------------------------------- |
| **Params** | plan_id | `String`   | id of plan for which to get courses from |
| **Output** |         | `Course[]` | list of courses from the specific plan   |

### `GET` `/api/coursesByDistribution/:distribution_id`

Gets a list of courses for a given distribution

|            | Name            | Type       | Description                                      |
| ---------- | --------------- | ---------- | ------------------------------------------------ |
| **Params** | distribution_id | `String`   | id of distribution for which to get courses from |
| **Output** |                 | `Course[]` | list of courses from the specific plan           |

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

### `POST` `/api/courses`

Posts a new course to the database.

|            | Name      | Type        | Description                                  |
| ---------- | --------- | ----------- | -------------------------------------------- |
| **Params** | ...Course | `...Course` | all attributes of the new course to be added |
| **Output** |           | `Course`    | newly added course                           |

### `PATCH` `/api/courses/changeStatus/:course_id`

Updates a taken status of course in the database.

|            | Name      | Type      | Description                         |
| ---------- | --------- | --------- | ----------------------------------- |
| **Params** | course_id | `String`  | id of course to be updated          |
| **Body**   | taken     | `Boolean` | new status of aforementioned course |
| **Output** |           | `Course`  | updated course                      |

### `PATCH` `/api/courses/dragged`

Updates a year and semester of course in the database from previous location to newly dragged location.

|            | Name     | Type     | Description                    |
| ---------- | -------- | -------- | ------------------------------ |
| **Body**   | courseId | `String` | id of course to be updated     |
|            | newYear  | `String` | new year to move course to     |
|            | oldYear  | `String` | old year that course exists in |
|            | newTerm  | `String` | new term of course             |
| **Output** |          | `Course` | updated course                 |

### `DELETE` `/api/courses/:course_id`

Deletes a specific course from the database.

|            | Name      | Type     | Description                |
| ---------- | --------- | -------- | -------------------------- |
| **Params** | course_id | `String` | id of course to be deletes |
| **Output** |           | `Course` | deleted course             |
