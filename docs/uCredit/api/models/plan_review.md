---
sidebar_label: Plan Review
sidebar_position: 7
---

# Plan Review

A plan review schema. Plan reviews serve as a way to track the progress of a plan review.

## Attributes

| Attribute Name | Type       | Required | Default | Ref    | Comments                                 |
| -------------- | ---------- | -------- | ------- | ------ | ---------------------------------------- |
| reviewee_id    | `String`   | `true`   |         | `User` |                                          |
| reviewer_id    | `String`   | `true`   |         | `User` |                                          |
| plan_id        | `ObjectId` |          |         | `Plan` |                                          |
| status         | `String`   | `true`   |         |        | Enum: `PENDING`, `ACCEPTED`, `REJECTED`, |
| requestTime    | `Date`     |          |         |        |                                          |

## Example

```
{
  _id: { $oid: "62365a80b8316b8b54f7785e" },
  reviewee_id: "mockUser",
  reviewer_id: "juniorDev",
  plan_id: "623659ddb8316b8b54f77815",
  requestTime: { $date: "2022-03-19T22:34:40.718Z" },
  status: "ACCEPTED",
  __v: 0,
};
```
