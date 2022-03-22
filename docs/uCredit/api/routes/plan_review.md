---
sidebar_label: Plan Review Routes
sidebar_position: 2
---

# Plan Review Routes

### `GET` `/api/planReview/getReviewers`

Return a list of reviews for a specific plan with populated reviewer info.

|            | Name    | Type           | Description                                                          |
| ---------- | ------- | -------------- | -------------------------------------------------------------------- |
| **Query**  | plan_id | `String`       | id of plan to get reviews for                                        |
| **Output** |         | `PlanReview[]` | List of reviews corresponding to this plan with populated user info. |

### `GET` `/api/planReview/plansToReview`

Return a list of reviews for a specific reviewer with populated reviewee info.

|            | Name        | Type           | Description                                                              |
| ---------- | ----------- | -------------- | ------------------------------------------------------------------------ |
| **Query**  | reviewer_id | `String`       | id of reviewer to get reviews for                                        |
| **Output** |             | `PlanReview[]` | List of reviews corresponding to this reviewer with populated user info. |

### `POST` `/api/planReview/request`

Creates a plan review request if a review request hasn't been created.

|            | Name        | Type         | Description                              |
| ---------- | ----------- | ------------ | ---------------------------------------- |
| **Body**   | plan_id     | `String`     | id of plan to create review for          |
|            | reviewee_id | `String`     | id of reviewee user to create review for |
|            | reviewer_id | `String`     | id of reviewer user to create review for |
| **Output** |             | `PlanReview` | Created Plan Review.                     |

### `POST` `/api/planReview/confirm`

Confirms a plan review request.

|            | Name      | Type         | Description                          |
| ---------- | --------- | ------------ | ------------------------------------ |
| **Body**   | review_id | `String`     | id of review to confirm              |
| **Output** |           | `PlanReview` | Review updated with ACCEPTED status. |

### `DELETE` `/api/planReview/removeReview`

Removes a specific review.

|            | Name      | Type         | Description            |
| ---------- | --------- | ------------ | ---------------------- |
| **Query**  | review_id | `String`     | id of review to remove |
| **Output** |           | `PlanReview` | Deleted review         |
