# Experiment

A feature experiment.

## Attribute

| Attribute Name        | Type       | Required | Default | Ref | Comments |
| --------------------- | ---------- | -------- | ------- | --- | -------- |
| experimentName        | `String`   | `true`   |         |     |          |
| percent_participating | `String`   | `true`   |         |     |          |
| blacklist             | `String[]` | `true`   |         |     |          |
| active                | `String[]` | `true`   |         |     |          |

## Example

```
{
  _id: { $oid: "61d9be16b579ac5e80991d24" },
  blacklist: [],
  active: ["mtiavis1", "wtong10", "mliu78"],
  experimentName: "White List",
  likes: 0,
  dislikes: 0,
  percent_participating: 43,
  __v: 0,
};
```
