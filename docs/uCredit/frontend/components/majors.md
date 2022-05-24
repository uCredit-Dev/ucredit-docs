---
sidebar_label: Majors
sidebar_position: 3
---

# Majors

## Layout of a `Major`

Each `Major` is defined as a custom JavaScript datatype which is simply a JavaScript `Object` (You can find the documentation of a JavaScript Object [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)) in the `commonTypes.tsx` `(lib/resources/commonTypes.tsx)` file. The `Major` datatype is defined as follows:

```
export type Major = {
    degree_name: string;
    abbrev: string;
    department: string;
    total_degree_credit: number;
    wi_credit: number;
    url: string;
    distributions: DistributionObj[];
};
```

The name of each field is shown on the left, and the datatype of each field is shown on the right. The fields are as follows:

| Field                 | Description                                                                                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `degree_name`         | String representing the full name of the major.                                                                                                                                                                                                               |
| `abbrev`              | String representing a shorter name of the major (Displayed where screen real estate is minimal).                                                                                                                                                              |
| `department`          | String representing the JHU department name offering the major.                                                                                                                                                                                               |
| `total_degree_credit` | Number representing the total number of credits which need to be taken to complete a major.                                                                                                                                                                   |
| `wi_credit`           | Number representing the total number of writing intensive credits required for the major. Note that this would be a subset of the total_degree_credit.                                                                                                        |
| `url`                 | String enclosing the url to the major’s requirements page on the Johns Hopkins website.                                                                                                                                                                       |
| `distributions`       | Custom JavaScript object of type `DistributionObj[]` which is an array of `DistributionObj`’s. These represent the broad requirements for each major, for example Mathematics requirement, Science requirement, Computing requirement, Core requirement, etc. |

## Layout of a `DistributionObj`

Each `DistributionObj` is a custom JavaScript `Object` with its own fields also defined in `commonTypes.tsx`. The definition of a `DistributionObj` is shown below. Some of the member fields contain a `?` immediately after their name. These member fields are optional and are **NOT** required to be present when a new `DistributionObj` is created.

```
export type DistributionObj = {
    name: string;
    required_credits: number;
    min_credits_per_course: number;
    description: string;
    criteria: string;
    fine_requirements?: FineReq[];
    user_select?: boolean;
    double_count?: boolean;
    exception?: string;
    exclusive?: boolean;
    pathing?: boolean;
};
```

Each `DistributionObj` contains the following member fields:

| Field                          | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                         | String representing the name of the Distribution, eg. Mathematics, Core, Science, etc.                                                                                                                                                                                                                                                                                                                                  |
| `required_credits`             | Number representing the required number of credits to satisfy a single distribution within a major.                                                                                                                                                                                                                                                                                                                     |
| `min_credits_per_course`       | Number representing the minimum number of credits each course must be if used to satisfy this distribution.                                                                                                                                                                                                                                                                                                             |
| `description`                  | String representing a short description of the distribution.                                                                                                                                                                                                                                                                                                                                                            |
| `criteria`                     | String representing the criteria to satisfy a single distribution. This could simply be a list of classes, departments whose courses may be taken to satisfy this distribution, the level of classes (upper or lower), etc. The schema for the different criteria, and examples of how the criteria string is structured are at the [end of this page](#schema-and-example-of-criteria-string).                         |
| `fine_requirements` (optional) | Custom JavaScript Object of type `FineReq[]` which is basically an array of `FineReq`’s. These are the classes or sub-requirements of a distribution which must be met in order to mark a distribution as completely satisfied. Note that even if the `required_credits` are met for the distribution but there is a `fine_requirement` which is **NOT** met yet, the distribution will **NOT** be marked as satisfied. |
| `user_select` (optional)       | Boolean value which if true, allows the user to manually mark this distribution as satisfied or unsatisfied through the user interface.                                                                                                                                                                                                                                                                                 |
| `double_count` (optional)      | Boolean value which if true, allows any course satisfying another distribution to **ALSO** satisfy this distribution if it meets the requirements.                                                                                                                                                                                                                                                                      |
| `exception` (optional)         | `// TODO: COMPLETE THIS`                                                                                                                                                                                                                                                                                                                                                                                                |
| `exclusive` (optional)         | Boolean value which if true, does **NOT** allow a course satisfying another distribution to satisfy this distribution.                                                                                                                                                                                                                                                                                                  |
| `pathing` (optional)           | Boolean value which if true, marks this distribution as complete if **ANY** of the fine requirements is satisfied. This flag is useful if there are multiple ways of satisfying a given distribution. In this case, all the alternatives would be listed as separate `FineReq`’s as part of the `fine_requirements`.                                                                                                    |

## Layout of a `FineReq`

Each `FineReq` object is a custom JavaScript Object with its own fields also defined in `commonTypes.tsx`. The definition of a `FineReq` object is shown below and is similar to the definition of a `DistributionObj`. Once again, the `?` after specific member fields indicates that these member fields are optional and **NOT** required when creating a new `FineReq`.

```
export type FineReq = {
    required_credits: number;
    description: string;
    criteria: string;
    exclusive?: boolean;
};
```

Each `FineReq` contains the following member fields:

| Field                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `required_credits`     | Number representing the total number of credits required to satisfy the fine requirement.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `description`          | String representing a brief description of the fine requirement.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `criteria`             | String representing the criteria to satisfy a single `fine_requirement`. This could simply be a list of classes, departments whose courses may be taken to satisfy this distribution, the level of classes (upper or lower), etc. The construction of this string is identical to the criteria of a `DistributionObj`. The schema for the different criteria, and examples of how the criteria string is structured are at the [end of this page](#schema-and-example-of-criteria-string). |
| `exclusive` (optional) | Boolean value which if true, prevents a course from satisfying this fine requirement if it satisfies any other fine requirement within this distribution.                                                                                                                                                                                                                                                                                                                                  |

## Schema and Example of Criteria String

One example of a valid criteria string is shown below:

```
criteria: 'EN.600.104[C]^OR^EN.601.104[C]^OR^(H[A]^AND^S[A])^OR^EN.660.400[C]^OR^EN Computer Science[D]'
```

Note the following in the construction of the criteria string:

- The String is composed of individual elements, each separated by a logical operator. The operator must be constructed exactly as shown below and can be one of the following:
  - `A^OR^B`: Satisfying either **A OR B** will count towards satisfying this requirement.
  - `A^AND^B`: Both **A AND B** must be satisfied to count towards satisfying this requirement.
  - `^NOT^A`: **A** must **NOT** be satisfied to count towards satisfying this requirement.
- Each element in the string is followed by a `[<LETTER>]`, which indicates the type of criteria. These can be any one of the letters shown in the schema below.

```
Criteria Symbol:
    [C] = Course Number
    [D] = Department
    [T] = Program of Study Tags
    [L] = Level (Upper or Lower)
    [A] = Area
    [Y] = Program start term (e.g. Fall 2019)
    [N] = Part of the name of the course
```

:::warning
Every element in the string **MUST** have a valid `[<LETTER>]` following it! This marks termination of the element and the beginning of a new element or boolean expression!
:::
