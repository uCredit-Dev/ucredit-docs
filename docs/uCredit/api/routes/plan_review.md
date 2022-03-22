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

Creates a plan review request if a review request hasn't been created. Returns 400 if missing Body field, 404 if reviewer is not registered, 409 if reviewer is already added in the reviewers array.

|            | Name        | Type         | Description                                      |
| ---------- | ----------- | ------------ | ------------------------------------------------ |
| **Body**   | plan_id     | `String`     | id of plan to create review for                  |
|            | reviewee_id | `String`     | id of reviewee user to create review for         |
|            | reviewer_id | `String`     | id of reviewer user to create review for         |
| **Output** |             | `PlanReview` | Created planReview object with status “PENDING”. |

### `POST` `/api/planReview/confirm`

Confirms a plan review request. Returns 400 if missing Body field, 409 if plan_id is already added in the reviewer’s whitelisted array.

|            | Name      | Type         | Description                                            |
| ---------- | --------- | ------------ | ------------------------------------------------------ |
| **Body**   | review_id | `String`     | id of review to confirm                                |
| **Output** |           | `PlanReview` | Confirmed review object, status changed to “ACCEPTED”. |

### `DELETE` `/api/planReview/removeReview`

Removes a specific review. Remove the record from both sides(reviewer array & whitelisted array). returns 404 if reviewer does not exist for this plan.

|            | Name      | Type         | Description            |
| ---------- | --------- | ------------ | ---------------------- |
| **Query**  | review_id | `String`     | id of review to remove |
| **Output** |           | `PlanReview` | Deleted review.        |
