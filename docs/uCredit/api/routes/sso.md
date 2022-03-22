---
sidebar_label: SSO Routes
sidebar_position: 4
---

# SSO Routes

### `GET` `/api/verifyLogin/:hash`

Check if a login session for a session hash is in progress.

|            | Name | Type     | Description                        |
| ---------- | ---- | -------- | ---------------------------------- |
| **Params** | id   | `String` | hash id to check for active sesion |
| **Output** |      | `User`   | Logged in user.                    |

### `GET` `/api/backdoor/verification/:id`

Dev login for a user.

|            | Name | Type     | Description |
| ---------- | ---- | -------- | ----------- |
| **Params** | id   | `String` | user id     |
| **Output** |      | `User`   | user.       |

### `GET` `/api/login`

Redirects to JHU 3rd party login page.

### `GET` `/api/metadata`

Get route used for 3rd party JHU authentication.

### `POST` `/api/login/callback`

A callback route called on successful login from JHU 3rd party login page.

|            | Name        | Type     | Description         |
| ---------- | ----------- | -------- | ------------------- |
| **User**   | displayName | `String` | full user name      |
|            | JHEDid      | `String` | JHED of user        |
|            | email       | `String` | email of user       |
|            | affiliation | `String` | affiliation of user |
|            | grade       | `Number` | year of user        |
|            | school      | `String` | school of user      |
| **Output** |             | `User`   | Logged in user.     |

### `DELETE` `/api/verifyLogin/:hash`

Deleting a login session based on a specific session hash.

|            | Name | Type     | Description                        |
| ---------- | ---- | -------- | ---------------------------------- |
| **Params** | hash | `String` | session hash for session to delete |
| **Output** |      | `User`   | user with deleted login session    |
