---
sidebar_label: Year
sidebar_position: 12
---

# Year

A plan year schema

## Attributes

| Attribute Name | Type       | Required | Default | Ref      | Comments |
| -------------- | ---------- | -------- | ------- | -------- | -------- |
| name           | `String`   | `true`   |         |          |          |
| courses        | `ObjectId` |          |         | `Course` |          |
| plan_id        | `ObjectId` | `true`   |         | `Plan`   |          |
| user_id        | `String`   | `true`   |         |          |          |
| expireAt       | `Date`     |          |         |          |          |
| uear           | `Number`   | `false`  |         |          |          |

## Example

```js
{
  _id: { $oid: "61cce47ca2ec790004427209" },
  courses: [{ $oid: "61ccf7f4723b840004850ea3" }],
  plan_id: [{ $oid: "61cce47ca2ec790004427200" }],
  name: "Junior",
  user_id: "guestUser",
  year: 2023,
  expireAt: { $date: "2021-12-30T22:43:08.312Z" },
  __v: 0,
};
```
