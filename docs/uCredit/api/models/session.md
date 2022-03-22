---
sidebar_label: Session
sidebar_position: 8
---

# Session

A login session

## Attributes

| Attribute Name | Type     | Required | Default      | Ref | Comments |
| -------------- | -------- | -------- | ------------ | --- | -------- |
| createdAt      | `Date`   |          | `Date.now()` |     |          |
| \_id           | `String` |          |              |     |          |
| hash           | `String` |          |              |     |          |

## Example

```
{
  "_id":"someStudent42",
  "__v":0,
  "createdAt":{"$date":"2022-03-05T18:41:38.555Z"},
  "hash":"abc123"
}
```
