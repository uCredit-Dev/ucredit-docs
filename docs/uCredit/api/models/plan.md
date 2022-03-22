---
sidebar_label: Plan
sidebar_position: 6
---

# Plan

A user plan schema.

## Attributes

| Attribute Name   | Type         | Required | Default | Ref            | Comments |
| ---------------- | ------------ | -------- | ------- | -------------- | -------- |
| name             | `String`     | `true`   |         |                |          |
| majors           | `String[]`   |          |         |                |          |
| year_ids         | `ObjectId[]` |          |         | `Year`         |          |
| distribution_ids | `ObjectId[]` |          |         | `Distribution` |          |
| user_id          | `String`     | `true`   |         |                |          |
| expireAt         | `Date`       |          |         |                |          |

## Example

```js
{
  _id: { $oid: "61cce47ca2ec790004427200" },
  majors: ["B.S. Computer Science (OLD - Pre-2021)"],
  year_ids: [
    { $oid: "61cce47ca2ec790004427202" },
    { $oid: "61cce47ca2ec790004427205" },
    { $oid: "61cce47ca2ec790004427207" },
    { $oid: "61cce47ca2ec790004427209" },
    { $oid: "61cce47ca2ec79000442720b" },
  ],
  distribution_ids: [
    { $oid: "61cce47ca2ec790004427210" },
    { $oid: "61cce47ca2ec790004427214" },
    { $oid: "61cce47ca2ec790004427212" },
    { $oid: "61cce47ca2ec790004427216" },
    { $oid: "61cce47ca2ec79000442721c" },
  ],
  name: "Unnamed Pland",
  user_id: "guestUser",
  expireAt: { $date: "2021-12-30T22:43:08.063Z" },
  __v: 2,
  reviewers: [],
};
```
