---
sidebar_label: Fine Requirements
sidebar_position: 5
---

# Degree Distribution

A fine requirement of a degree distribution

## Attributes

| Attribute Name   | Type      | Required | Default | Ref | Comments |
| ---------------- | --------- | -------- | ------- | --- | -------- |
| required_credits | `Number`  | `true`   |         |     |          |
| description      | `String`  | `true`   |         |     |          |
| criteria         | `String`  | `true`   |         |     |          |
| exception        | `String`  |          |         |     |          |
| exclusive        | `Boolean` |          | `false` |     |          |

## Example

```js
{
  exclusive: false,
  _id: { $oid: "61ddb0e735517ca56c761925" },
  description:
    "<b>General Physics I</b> <br /> AS.171.101 General Physics: Physical Science Majors I <br /> <i>OR</i> <br /> AS.171.107 General Physics for Physical Sciences Majors I (AL)",
  required_credits: 4,
  criteria: "AS.171.101[C]^OR^AS.171.107[C]",
}
```
