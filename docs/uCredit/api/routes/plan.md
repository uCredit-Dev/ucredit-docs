---
sidebar_label: Plan Routes
sidebar_position: 1
---

# Plan Routes

### `GET` `/api/plans/:plan_id`

Gets a plan by id.

|            | Name    | Type     | Description                                             |
| ---------- | ------- | -------- | ------------------------------------------------------- |
| **Params** | plan_id | `String` | plan id                                                 |
| **Output** |         | `Plan`   | The plan corresponding to the id in the request params. |

### `GET` `/api/plansByUser/:user_id`

Gets a list of all plans of a particular user.

|            | Name    | Type     | Description                                                                                                          |
| ---------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| **Params** | user_id | `String` | user id                                                                                                              |
| **Output** |         | `Plan[]` | A list of plans corresponding to the plan ids stored in the user corresponding to the user id in the request params. |

### `POST` `/api/plans/`

Creates a new plan.

|            | Name     | Type     | Description                                                                          |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------ |
| **Body**   | name     | `String` | new plan's name                                                                      |
|            | user_id  | `String` | the new plan's owner id                                                              |
|            | majors   | `String` | the degrees associated with the new plan                                             |
|            | expireAt | `Date`   | the time when the object is supposed to be trash-collected (note: this needs fixing) |
| **Output** |          | `Plan`   | Newly created plan.                                                                  |

### `PATCH` `/api/plans/:plan_id`

Updates a plan corresponding to a given id.

|            | Name    | Type        | Description                                                         |
| ---------- | ------- | ----------- | ------------------------------------------------------------------- |
| **Body**   | plan_id | `String`    | id of plan to update                                                |
|            | majors  | `String[]?` | optional array of degree ids to update the plan's degree array with |
|            | name    | `String?`   | optional new name for the plan                                      |
| **Output** |         | `Plan`      | Updated plan.                                                       |

### `DELETE` `/api/plans/:plan_id`

Deletes a plan corresponding to a given id.

|            | Name    | Type     | Description          |
| ---------- | ------- | -------- | -------------------- |
| **Params** | plan_id | `String` | id of plan to delete |
| **Output** |         | `Plan`   | Deleted plan.        |
