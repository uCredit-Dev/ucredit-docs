---
sidebar_label: Notification
sidebar_position: 7
---

# Notification

A notification schema.

## Attributes

| Attribute Name | Type       | Required | Default      | Ref    | Comments                                       |
| -------------- | ---------- | -------- | ------------ | ------ | ---------------------------------------------- |
| user_id        | `String`   | `true`   |              | `User` |                                                |
| message        | `String`   | `true`   |              |        |                                                |
| quick_link_id  | `ObjectId` |          |              |        |                                                |
| link_type      | `String`   |          |              |        | Enum: `PLAN`, `REVIEW`, `USER`, `DISTRIBUTION` |
| read           | `Boolean`  |          | `false`      |        |                                                |
| date           | `Date`     |          | `Date.now()` |        |                                                |

## Example

```js
{
  _id: { $oid: "62365a80b8316b8b54f7785e" },
  user_id: "mockUser",
  message:"You have created a new plan!",
  quick_link_id: "623659ddb8316b8b54f77815",
  link_type:"PLAN",
  read:"false"
  date: { $date: "2022-03-19T22:34:40.718Z" },
  __v: 0,
};
```
