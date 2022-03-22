---
sidebar_label: SIS Course Version
sidebar_position: 10
---

# SIS Course Version

A specific version of a SIS course at a particular semester for a particular year.

## Attributes

| Attribute Name | Type       | Required | Default       | Ref | Comments |
| -------------- | ---------- | -------- | ------------- | --- | -------- |
| areas          | `String`   | `true`   |               |     |          |
| term           | `String`   | `true`   |               |     |          |
| school         | `String`   | `true`   |               |     |          |
| department     | `String`   |          | `Unspecified` |     |          |
| credits        | `Number`   | `true`   |               |     |          |
| wi             | `Boolean`  | `true`   |               |     |          |
| bio            | `String`   |          |               |     |          |
| level          | `String`   |          |               |     |          |
| tags           | `String[]` |          |               |     |          |
| preReq         | `Array`    |          |               |     |          |
| coReq          | `Array`    |          |               |     |          |
| restrictions   | `Array`    |          |               |     |          |

## Example

```js
{
  department: "AS History of Art",
  tags: ["HART-MED"],
  preReq: [],
  coReq: [],
  restrictions: [{ RestrictionName: "New Freshmen", Description: "" }],
  _id: { $oid: "61d123ac0a0c831b9af9aba6" },
  areas: "H",
  term: "Fall 2018",
  school: "Krieger School of Arts and Sciences",
  credits: 3,
  wi: false,
  level: "Lower Level Undergraduate",
  bio: "This course is about the visual representation of built environments and geographical locations during the Middle Ages: architectural sites, cities, regions of the world, and the world itself. It surveys the full range of medieval modes of mapping, including itineraria (road maps), T-O maps, mappaemundi, and portolan charts; and explores dynamic changes in the conventions for depicting cityscapes and urban topography, from Roman antiquity to ca. 1500. In investigating this material, we will pay special attention to scientific and allegorical representations of places foreign to the culture within which they were made––an illuminated depiction of Venice from late medieval Paris; the fresco with representations of six world rulers at Qasr Amra in Jordan. Students will consider in what ways these images help us to understand pre-modern conceptualizations of geographical space, distance, ethnicity, and otherness. And to what extent did these images help shape these notions? Texts from the period, especially guidebooks and accounts written by medieval travelers, will help guide our discussion. The geographical focus of the course is Europe and the Mediterranean basin, but will include comparisons with the art of East Asia, Persia, and sub-Saharan Africa. The course includes a group visit to the Walters Art Museum.",
},
```
