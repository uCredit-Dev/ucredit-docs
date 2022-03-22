---
sidebar_label: User Routes
sidebar_position: 0
---

# User Routes

### `GET` `/api/user`

Gets a user object based on partial or full name/jhed query and/or affiliation (refer to affiliation type).

|            | Name        | Type              | Description                                                                                                                                     |
| ---------- | ----------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Query**  | username    | `String`          | partial or full user name or JHED                                                                                                               |
|            | affiliation | `String`          | affiliation of user                                                                                                                             |
| **Output** |             | `modified_user[]` | Array of users **without** the sensitive plan_ids field. <br/> People with this route should not have access to a user's sensitive information. |
