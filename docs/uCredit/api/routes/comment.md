---
sidebar_label: Notification Routes
sidebar_position: 2
---

# Thread/Comment Routes

import {comment1, comment2, comment_edit,thread_true, thread_false, threads} from "../sampleObjects";

### `GET` `/api/thread/getByPlan/:plan_id`

Return all threads and their comments(user name populated) of a plan.

|            | Name    | Type       | Description                                                   |
| ---------- | ------- | ---------- | ------------------------------------------------------------- |
| **Params** | plan_id | `String`   |                                                               |
| **Output** |         | `Thread[]` | all threads and their comments(user name populated) of a plan |

#### Sample Output

<samp>
  <pre>{JSON.stringify(threads, null, 2)}</pre>
</samp>

### `POST` `/api/thread/new`

Create a new thread and a comment pointing to that thread.

|            | Name    | Type      | Description                                                         |
| ---------- | ------- | --------- | ------------------------------------------------------------------- |
| **Body**   | thread  | `Object`  | The object must have all the required fields of the Thread schema.  |
|            | comment | `Object`  | The object must have all the required fields of the Comment schema. |
| **Output** |         | `Comment` | The newly created Comment object(note a new Thread is also created) |

#### Sample Output

<samp>
  <pre>{JSON.stringify(comment1, null, 2)}</pre>
</samp>

### `POST` `/api/thread/reply`

Add a new comment(reply) to a specific thread.

|            | Name    | Type      | Description                                                            |
| ---------- | ------- | --------- | ---------------------------------------------------------------------- |
| **Body**   | comment | `Object`  | The object must have all the required fields of the Comment schema.    |
| **Output** |         | `Comment` | The newly created Comment object(note a new Thread is **not** created) |

#### Sample Output

<samp>
  <pre>{JSON.stringify(comment2, null, 2)}</pre>
</samp>

### `PATCH` `/api/thread/resolve`

Resolve a thread.

|            | Name      | Type     | Description                             |
| ---------- | --------- | -------- | --------------------------------------- |
| **Body**   | thread_id | `String` | The object_id of the thread to resolve. |
| **Output** |           | `Thread` | `resolved` field changed to True        |

#### Sample Output

<samp>
  <pre>{JSON.stringify(thread_true, null, 2)}</pre>
</samp>

### `PATCH` `/api/comment`

Edit a specific comment.

|            | Name       | Type      | Description                          |
| ---------- | ---------- | --------- | ------------------------------------ |
| **Body**   | comment_id | `String`  | The Object_id of the comment to edit |
|            | message    | `String`  | The new comment content.             |
| **Output** |            | `Comment` | The updated comment object           |

#### Sample Output

<samp>
  <pre>{JSON.stringify(comment_edit, null, 2)}</pre>
</samp>

### `DELETE` `/api/comment`

Delete a specific comment.

|            | Name       | Type      | Description                            |
| ---------- | ---------- | --------- | -------------------------------------- |
| **Body**   | comment_id | `String`  | The Object_id of the comment to delete |
| **Output** |            | `Comment` | The deleted comment object             |

#### Sample Output

<samp>
  <pre>{JSON.stringify(comment2, null, 2)}</pre>
</samp>

### `DELETE` `/api/thread`

Delete a thread and all comments of that thread.

|            | Name      | Type      | Description                          |
| ---------- | --------- | --------- | ------------------------------------ |
| **Body**   | thread_id | `String`  | The Object_id of the comment to edit |
| **Output** |           | `Comment` | The deleted thread object            |

#### Sample Output

<samp>
  <pre>{JSON.stringify(thread_true, null, 2)}</pre>
</samp>
