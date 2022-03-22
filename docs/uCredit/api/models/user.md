---
sidebar_label: User
sidebar_position: 11
---

# User

A user schema

## Attributes

| Attribute Name | Type         | Required | Default | Ref    | Comments |
| -------------- | ------------ | -------- | ------- | ------ | -------- |
| \_id           | `String`     |          |         |        |          |
| name           | `String`     |          |         |        |          |
| email          | `String`     |          |         |        |          |
| affiliation    | `String`     |          |         |        |          |
| school         | `String`     |          |         |        |          |
| grade          | `String`     |          |         |        |          |
| plan_ids       | `ObjectId[]` |          | `[]`    | `Plan` |          |

## Example

```
{
  _id: "mockUser",
  plan_ids: [{ $oid: "623659ddb8316b8b54f77815" }],
  name: "mockUser",
  email: "mockUser@fakeemail.com",
  affiliation: "STAFF",
  grade: "AE UG Freshman",
  school: "jooby hooby",
  __v: 0,
};
```
