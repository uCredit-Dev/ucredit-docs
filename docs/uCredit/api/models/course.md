---
sidebar_label: Course
sidebar_position: 0
---

# Course

A user course object.

## Attributes

| Attribute Name   | Type       | Required | Default | Ref            | Comments                                         |
| ---------------- | ---------- | -------- | ------- | -------------- | ------------------------------------------------ |
| title            | `String`   | `true`   |         |                |                                                  |
| term             | `String`   | `true`   |         |                | Enum: `fall`, `spring`, `summer`, `intersession` |
| termOffered      | `String`   |          |         |                |                                                  |
| year             | `String`   | `true`   |         |                |                                                  |
| version          | `String`   |          |         |                | the version of the SIS course                    |
| number           | `String`   |          |         |                |                                                  |
| department       | `String`   |          |         |                |                                                  |
| department       | `String`   |          |         |                |                                                  |
| tags             | `String`   |          |         |                |                                                  |
| area             | `String`   |          |         |                |                                                  |
| credits          | `Number`   | `true`   |         |                |                                                  |
| wi               | `Boolean`  |          | `false` |                |                                                  |
| taken            | `Boolean`  |          | `false` |                |                                                  |
| preReq           | `Array`    |          |         |                |                                                  |
| isPlaceholder    | `Boolean`  |          | `false` |                |                                                  |
| isTransfer       | `Boolean`  |          | `false` |                |                                                  |
| ratings          | `Boolean`  |          | `false` |                |                                                  |
| distribution_ids | `ObjectId` | `true`   |         | `Distribution` |                                                  |
| year_id          | `ObjectId` | `true`   |         | `Year`         |                                                  |
| plan_id          | `ObjectId` | `true`   |         | `Plan`         |                                                  |
| user_id          | `String`   | `true`   |         |                |                                                  |
| forceSatisfied   | `String`   | `false`  |         |                |                                                  |
| expireAt         | `Date`     |          |         |                |                                                  |

## Example

```
{
  "_id":{"$oid":"61ccf7f4723b840004850ea3"},
  "termOffered":[],
  "tags":[],
  "wi":false,
  "taken":false,
  "preReq":[
      {
        "Description":"Grade of C- or better in (AS.110.201 or AS.110.212)",
        "Expression":"AS.110.201[C]^OR^AS.110.212[C]",
        "IsNegative":"N"
      }
    ],
  "isPlaceholder":false,
  "isTransfer":false,
  "ratings":[],
  "distribution_ids":[
    {"$oid":"61cce47ca2ec790004427212"},
    {"$oid":"61cce47ca2ec790004427214"},
    {"$oid":"61cce47ca2ec790004427210"},
    {"$oid":"61cce47ca2ec790004427216"},
    {"$oid":"61cce47ca2ec79000442721c"}
  ],
  "user_id":"guestUser",
  "year_id":{"$oid":"61cce47ca2ec790004427209"},
  "plan_id":{"$oid":"61cce47ca2ec790004427200"},
  "title":"Introduction to Abstract Algebra",
  "term":"fall",
  "year":"Junior",
  "credits":4,
  "number":"AS.110.401",
  "area":"Q",
  "version":"Fall 2021",
  "expireAt":{"$date":"2021-12-31T00:06:11.259Z"},
  "__v":0
}
```
