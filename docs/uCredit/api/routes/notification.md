---
sidebar_label: Notification Routes
sidebar_position: 2
---

# Notification Routes

import {notifications,notification1, notification2} from "../sampleObjects";

### `GET` `/api/notification/:user_id`

Return an array of notifications of a user.

|            | Name    | Type             | Description                                                              |
| ---------- | ------- | ---------------- | ------------------------------------------------------------------------ |
| **Params** | user_id | `String`         | JHED_ID                                                                  |
| **Output** |         | `Notification[]` | Empty if user_id is invalid or the user does not have any notifications. |

#### Sample Output

<samp>
  <pre>{JSON.stringify(notifications, null, 2)}</pre>
</samp>

### `POST` `/api/notification`

Creates a notification.

|            | Name               | Type           | Description                                                               |
| ---------- | ------------------ | -------------- | ------------------------------------------------------------------------- | --- |
| **Body**   | user_id            | `String`       | JHED_ID                                                                   |
|            | message            | `String`       | message to the user                                                       |
|            | quick_link_id(opt) | `String`       | id of an object the message is referred to                                |
|            | link_type(opt)     |                | enum:["PLAN", "REVIEW", "USER"]                                           |     |
| **Output** |                    | `Notification` | Created Notification with `date` as the current time and `read` as false. |

#### Sample Output

<samp>
  <pre>{JSON.stringify(notification1, null, 2)}</pre>
</samp>

### `POST` `/api/notification/read/:notification_id`

Change the status of the `read` field of a notification to true.

|            | Name            | Type           | Description            |
| ---------- | --------------- | -------------- | ---------------------- |
| **Params** | notification_id | `String`       |                        |
| **Output** |                 | `Notification` | `read` becomes `true`. |

#### Sample Output

<samp>
  <pre>{JSON.stringify(notification2, null, 2)}</pre>
</samp>

### `DELETE` `/api/notifications/:notification_id`

Deletes a notification.

|            | Name            | Type           | Description                       |
| ---------- | --------------- | -------------- | --------------------------------- |
| **Params** | notification_id | `String`       |                                   |
| **Output** |                 | `Notification` | `The deleted notification object. |

#### Sample Output

<samp>
  <pre>{JSON.stringify(notification1, null, 2)}</pre>
</samp>
