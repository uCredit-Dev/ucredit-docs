---
sidebar_label: Degree Distribution
sidebar_position: 4
---

# Degree Distribution

A requirement that must be satisfied for a degree.

## Attributes

| Attribute Name         | Type                | Required | Default | Ref | Comments |
| ---------------------- | ------------------- | -------- | ------- | --- | -------- |
| name                   | `String`            | `true`   |         |     |          |
| required_credits       | `Number`            | `true`   |         |     |          |
| min_credits_per_course | `Number`            | `true`   |         |     |          |
| pathing                | `Boolean`           |          | `false` |     |          |
| description            | `String`            | `true`   |         |     |          |
| criteria               | `String`            | `true`   |         |     |          |
| user_select            | `Boolean`           |          | `false` |     |          |
| double_count           | `Boolean`           |          | `false` |     |          |
| exception              | `String`            |          |         |     |          |
| fine_requirements      | `FineRequirement[]` |          |         |     |          |

## Example

```js
{
  pathing: false,
  user_select: false,
  double_count: false,
  _id: { $oid: "61ddb0e735517ca56c761924" },
  name: "Basic Sciences",
  required_credits: 18,
  min_credits_per_course: 1,
  description:
    "Students who receive credit for AP Physics I and/or Physics II will receive a waiver for the laboratory course. This will reduce the required number of credits for Basic Sciences by 1 or 2 credits. Students are still required to complete at least 129 total credits for the degree.",
  criteria:
    "AS.171.101[C]^OR^AS.171.107[C]^OR^AS.171.102[C]^OR^AS.171.108[C]^OR^AS.173.111[C]^OR^AS.173.112[C]^OR^AS.030.101[C]^OR^AS.030.102[C]^OR^AS.030.105[C]^OR^AS.030.106[C]",
  fine_requirements: [
    {
      exclusive: false,
      _id: { $oid: "61ddb0e735517ca56c761925" },
      description:
        "<b>General Physics I</b> <br /> AS.171.101 General Physics: Physical Science Majors I <br /> <i>OR</i> <br /> AS.171.107 General Physics for Physical Sciences Majors I (AL)",
      required_credits: 4,
      criteria: "AS.171.101[C]^OR^AS.171.107[C]",
    },
    {
      exclusive: false,
      _id: { $oid: "61ddb0e735517ca56c761926" },
      description:
        "<b>General Physics II</b> <br /> AS.171.102 General Physics: Physical Science Majors II <br /> <i>OR</i> <br /> AS.171.108 General Physics for Physical Sciences Majors II (AL)",
      required_credits: 4,
      criteria: "AS.171.102[C]^OR^AS.171.108[C]",
    },
    {
      exclusive: false,
      _id: { $oid: "61ddb0e735517ca56c761927" },
      description:
        "<b>General Physics Laboratory I</b> <br /> AS.173.111 General Physics Laboratory I",
      required_credits: 1,
      criteria: "AS.173.111[C]",
    },
    {
      exclusive: false,
      _id: { $oid: "61ddb0e735517ca56c761928" },
      description:
        "<b>General Physics Laboratory II</b> <br /> AS.173.112 General Physics Laboratory II",
      required_credits: 1,
      criteria: "AS.173.112[C]",
    },
    {
      exclusive: false,
      _id: { $oid: "61ddb0e735517ca56c761929" },
      description:
        "<b>Introductory Chemistry I</b> <br /> AS.030.101 Introductory Chemistry I",
      required_credits: 3,
      criteria: "AS.030.101[C]",
    },
    {
      exclusive: false,
      _id: { $oid: "61ddb0e735517ca56c76192a" },
      description:
        "<b>Introductory Chemistry II</b> <br /> AS.030.102 Introductory Chemistry II",
      required_credits: 3,
      criteria: "AS.030.102[C]",
    },
    {
      exclusive: false,
      _id: { $oid: "61ddb0e735517ca56c76192b" },
      description:
        "<b>Introductory Chemistry Laboratory I</b> <br /> AS.030.105 Introductory Chemistry Laboratory I",
      required_credits: 1,
      criteria: "AS.030.105[C]",
    },
    {
      exclusive: false,
      _id: { $oid: "61ddb0e735517ca56c76192c" },
      description:
        "<b>Introductory Chemistry Laboratory II</b> <br /> AS.030.106 Introductory Chemistry Laboratory II",
      required_credits: 1,
      criteria: "AS.030.106[C]",
    },
  ],
}
```
