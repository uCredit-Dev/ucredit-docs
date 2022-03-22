---
sidebar_label: Year Routes
sidebar_position: 5
---

# Year Routes

### `GET` `/api/years/:plan_id`

Gets a list of year objects for a given plan.

|            | Name    | Type     | Description                               |
| ---------- | ------- | -------- | ----------------------------------------- |
| **Params** | plan_id | `String` | id of plan for which to get year ids from |
| **Output** |         | `Year[]` | list of year ids from plan                |

#### Sample output

import {yearList, freshmanYear, sophomoreYear, juniorYear, seniorYear} from "../sampleObjects";

<samp>
  <pre>{JSON.stringify(yearList, null, 2)}</pre>
</samp>

### `POST` `/api/years`

Creates a new year based on a given name, plan_id, user_id, and year number. A year will be automatically added to the end of the year array of the plan object.

|            | Name    | Type     | Description                           |
| ---------- | ------- | -------- | ------------------------------------- |
| **Body**   | name    | `String` | name of year to create                |
|            | plan_id | `String` | id of plan for which to make year for |
|            | user_id | `String` | id of user for which to make year for |
|            | year    | `Number` | numeric year value                    |
| **Output** |         | `Year`   | Newly created year                    |

#### Sample Output

<samp>
  <pre>{JSON.stringify(seniorYear, null, 2)}</pre>
</samp>

### `PATCH` `/api/years/changeOrder`

Creates a new year based on a given name, plan_id, user_id, and year number.

|            | Name     | Type       | Description                                   |
| ---------- | -------- | ---------- | --------------------------------------------- |
| **Body**   | plan_id  | `String`   | id of plan for which to change year order for |
|            | year_ids | `String[]` | array of new year ids order                   |
| **Output** |          | `Plan`     | Newly updated plan                            |

#### Sample Output

<samp>
  <pre>{JSON.stringify([freshmanYear, juniorYear, sophomoreYear, seniorYear], null, 2)}</pre>
</samp>

### `PATCH` `/api/years/updateName`

Updates the name of a specific year. Updates plan name and the year field of its associated courses.

|            | Name    | Type     | Description                   |
| ---------- | ------- | -------- | ----------------------------- |
| **Body**   | name    | `String` | new year name                 |
|            | year_id | `String` | id of year to change name for |
| **Output** |         | `Year`   | Newly updated year            |

#### Sample Output

<samp>
  <pre>{JSON.stringify(seniorYear, null, 2)}</pre>
</samp>

### `DELETE` `/api/years/:year_id`

Deletes a year. By deleting a year, all associated courses are deleted from the database.

|            | Name    | Type     | Description          |
| ---------- | ------- | -------- | -------------------- |
| **Params** | year_id | `String` | id of year to delete |
| **Output** |         | `Year`   | deleted year         |

#### Sample Output

<samp>
  <pre>{JSON.stringify(seniorYear, null, 2)}</pre>
</samp>
