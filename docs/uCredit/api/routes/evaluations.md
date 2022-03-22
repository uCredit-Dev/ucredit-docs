---
sidebar_label: Course Routes
sidebar_position: 7
---

# Evaluation Routes

### `GET` `/api/evals/:number`

Gets a list of evaluations for a specific course.

|            | Name   | Type           | Description                             |
| ---------- | ------ | -------------- | --------------------------------------- |
| **Params** | number | `String`       | course number to get evaluation for     |
| **Output** |        | `Evaluation[]` | list of course evaluations for a course |
