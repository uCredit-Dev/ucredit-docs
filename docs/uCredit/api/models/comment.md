---
sidebar_label: Comment
sidebar_position: 11
---

# Comment

A Comment schema

## Attributes

| Attribute Name  | Type       | Required | Default    | Ref    | Comments |
| --------------- | ---------- | -------- | ---------- | ------ | -------- |
| \_id            | `String`   |          |            |        |          |
| commenter_id    | `String`   | `true`   |            | User   |          |
| visible_user_id | `String[]` | `true`   |            |        |          |
| message         | `String`   | `true`   |            |        |          |
| thread_id       | `String`   | `true`   |            | Thread |          |
| date            | `Date`     |          | Date.now() |        |          |

## Example

```js
{
    _id:"624f8bb1ccbfa9214879a4fa",
    commenter_id:"623659ddb8316b8b54f77815",
    message:"Hello!",
    visible_user_id:["user1", "user2"]
    thread_id:"624f8bb1ccbfa9214879a4fa",
    date:"2022-03-19T22:34:40.718Z"
    __v:0
}
```
