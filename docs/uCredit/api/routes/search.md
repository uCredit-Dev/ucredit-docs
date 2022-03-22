---
sidebar_label: Search Routes
sidebar_position: 3
---

# Search Routes

### `GET` `/api/search/all`

Gets SIS courses in given intervals.

|            | Name | Type          | Description             |
| ---------- | ---- | ------------- | ----------------------- |
| **Output** |      | `SISCourse[]` | list of all SIS courses |

### `GET` `/api/search/skip/:num`

Gets all SIS courses in our DB within a specific interval.

|            | Name | Type          | Description                         |
| ---------- | ---- | ------------- | ----------------------------------- |
| **Params** | num  | `Number`      | interval number                     |
| **Query**  | mod  | `Number`      | interval size                       |
| **Output** |      | `SISCourse[]` | an interval list of all SIS courses |

### `GET` `/api/search`

Searches for a list of courses based on a given query and parameters.

|            | Name       | Type          | Description                                                |
| ---------- | ---------- | ------------- | ---------------------------------------------------------- |
| **Query**  | query      | `String`      | search query                                               |
|            | school     | `String`      | school to filter courses with                              |
|            | department | `String`      | department to filter courses with of                       |
|            | term       | `String`      | semester + year combination to filter courses with in      |
|            | areas      | `String`      | areas to filter courses with in                            |
|            | wi         | `String`      | whether course to search for is a written intensive or not |
|            | credits    | `String`      | credit counts to filter courses with                       |
|            | tags       | `String`      | tags to filter courses with                                |
|            | level      | `String`      | course level to filter courses with                        |
| **Output** |            | `SISCourse[]` | searched and filtered list of SIS courses                  |

### `GET` `/api/searchVersion`

Searches for a specific version of a course.

|            | Name    | Type        | Description                                   |
| ---------- | ------- | ----------- | --------------------------------------------- |
| **Query**  | version | `String`    | semester + year version of course to retrieve |
|            | title   | `String`    | title of course to search for                 |
|            | number  | `String`    | number of course to search for                |
| **Output** |         | `SISCourse` | A SIS course with a single queried version.   |
