---
sidebar_label: Evaluation Routes
sidebar_position: 7
---

# Evaluation Routes

### `GET` `/api/evals/:number`

Gets a list of evaluations for a specific course.

|            | Name   | Type           | Description                             |
| ---------- | ------ | -------------- | --------------------------------------- |
| **Params** | number | `String`       | course number to get evaluation for     |
| **Output** |        | `Evaluation[]` | list of course evaluations for a course |

#### Sample output

import {evaluation} from "../sampleObjects";

<samp>
  <pre>{JSON.stringify(evaluation, null, 2)}</pre>
</samp>
