---
sidebar_label: Routes
sidebar_position: 2
---

# API Routes

The page for all API routes.

## User Routes

### `GET` `/api/user`

Gets a user object based on partial or full name/jhed query and/or affiliation (refer to affiliation type).

|            | Name        | Type              | Description                                                                                                                                     |
| ---------- | ----------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Query**  | username    | `string`          | partial or full user name or JHED                                                                                                               |
|            | affiliation | `string`          | affiliation of user                                                                                                                             |
| **Output** |             | `modified_user[]` | Array of users **without** the sensitive plan_ids field. <br/> People with this route should not have access to a user's sensitive information. |

## Plan Routes

### `GET` `/api/plans/:plan_id`

Gets a plan by id.

|            | Name    | Type     | Description                                             |
| ---------- | ------- | -------- | ------------------------------------------------------- |
| **Params** | plan_id | `string` | plan id                                                 |
| **Output** |         | `Plan`   | The plan corresponding to the id in the request params. |

### `GET` `/api/plansByUser/:user_id`

Gets a list of all plans of a particular user.

|            | Name    | Type     | Description                                                                                                          |
| ---------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| **Params** | user_id | `string` | user id                                                                                                              |
| **Output** |         | `Plan[]` | A list of plans corresponding to the plan ids stored in the user corresponding to the user id in the request params. |

### `POST` `/api/plans/`

Creates a new plan.

|            | Name     | Type     | Description                                                                          |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------ |
| **Body**   | name     | `string` | new plan's name                                                                      |
|            | user_id  | `string` | the new plan's owner id                                                              |
|            | majors   | `string` | the degrees associated with the new plan                                             |
|            | expireAt | `Date`   | the time when the object is supposed to be trash-collected (note: this needs fixing) |
| **Output** |          | `Plan`   | Newly created plan.                                                                  |

### `PATCH` `/api/plans/:plan_id`

Updates a plan corresponding to a given id.

|            | Name    | Type        | Description                                                         |
| ---------- | ------- | ----------- | ------------------------------------------------------------------- |
| **Body**   | plan_id | `string`    | id of plan to update                                                |
|            | majors  | `string[]?` | optional array of degree ids to update the plan's degree array with |
|            | name    | `string?`   | optional new name for the plan                                      |
| **Output** |         | `Plan`      | Updated plan.                                                       |

### `DELETE` `/api/plans/:plan_id`

Deletes a plan corresponding to a given id.

|            | Name    | Type     | Description          |
| ---------- | ------- | -------- | -------------------- |
| **Params** | plan_id | `string` | id of plan to delete |
| **Output** |         | `Plan`   | Deleted plan.        |
