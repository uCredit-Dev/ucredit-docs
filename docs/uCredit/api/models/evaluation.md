---
sidebar_label: Evaluation
sidebar_position: 0
---

# Evaluation

A course evaluation. This is taken from the api of JHUReviews with permission from its owner.

## Attributes

| Attribute Name | Type     | Required | Default | Ref | Comments                                     |
| -------------- | -------- | -------- | ------- | --- | -------------------------------------------- |
| n              | `String` | `true`   |         |     | name                                         |
| num            | `String` | `true`   |         |     | course number                                |
| i              | `Array`  |          |         |     | instructors                                  |
| a              | `String` |          |         |     | area                                         |
| w              | `String` |          |         |     | written intensive                            |
| c              | `String` |          |         |     | credit count                                 |
| d              | `String` |          |         |     | departments                                  |
| o              | `String` |          |         |     | ???                                          |
| e              | `Array`  |          |         |     | emotes (unused by us but used by JHUReviews) |
| rev            | `Array`  |          |         |     | list of reviews                              |

## Example

```js
{
  "_id":{"$oid":"61dde4d2ae28384820740976"},
  "i":["Amy Christine Miranda"],
  "e":[0,0,0,0,0,0],
  "rev":[
    {
      "s":"F18",
      "i":"Amy Miranda",
      "c":"The best aspects of the course included the engaging professor who kept the sessions evenly balanced between lecture and discussion, the varied methods of teaching and grading, and the course structure which provided a foundation of understanding before moving into the chronological information. Some students felt that the readings were very dry and the amount of information covered could be overwhelming. Suggestions for improvement included more recent reading material, more class discussions, and more resources regarding the history of the sculptures.  Prospective students could benefit from an understanding of art history terminology and be prepared to keep up with the readings.",
      "w":"4.80",
      "d":"4.80",
      "l":"4.80",
      "g":"4.80",
      "t":"4.80",
      "b":"1",
      "o":"4.80"
      }
    ],
  "n":"Freshman Seminar: Representing Roman Power: Sculpture as Political Rhetoric from Republic to Empire",
  "num":"AS.010.222",
  "a":"H",
  "w":"N",
  "c":"3.00",
  "d":"AS Classics^AS Dean's Teaching Fellowship Courses^AS Freshman Seminars^AS History of Art^",
  "o":"0",
  "__v":0
}
```
