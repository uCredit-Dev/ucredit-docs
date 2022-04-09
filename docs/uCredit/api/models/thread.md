---
sidebar_label: Thread
sidebar_position: 11
---

# Thread

A Thread schema

## Attributes

| Attribute Name | Type      | Required | Default | Ref  | Comments                                                     |
| -------------- | --------- | -------- | ------- | ---- | ------------------------------------------------------------ |
| \_id           | `String`  |          |         |      |                                                              |
| plan_id        | `String`  | `true`   |         | Plan |                                                              |
| location_type  | `String`  | `true`   |         |      | enum: ["Course", "Semester", "Year", "Plan", "Distribution"] |
| location_id    | `String`  | `true`   |         |      |                                                              |
| resolved       | `Boolean` |          | False   |      |                                                              |

## Example

```js
{
    _id:"624f8bb1ccbfa9214879a4fa",
    plan_id:"623659ddb8316b8b54f77815",
    location_type:"Semester",
    location_id:"623659ddb8316b8b54f77820Intersession"
    resolved:false,
    __v:0
}
```
