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

## Test Your Knowledge: Assignment 1

### Part A: Theoretical Questions

1.
2.
3.

### Part B: Application

#### Description

In the next part of this assignment, we will define the Biomedical Engineering major from scratch. You can find the description and requirements for the major [here](https://www.bme.jhu.edu/academics/undergraduate/undergraduate-degree-requirements/).

#### Setup

1. If you have not already, clone the frontend and backend repositories into the same folder.

:::info
You can find the frontend repository at https://github.com/MattLiu-mygit/ucredit_frontend_typescript
You can find the backend repository at https://github.com/uCredit-Dev/uCredit-API
:::

2. Open two new terminal windows, and `cd` into the frontend repository on terminal window 1, and `cd` into the backend repository on terminal window 2.

3. On terminal window 2, run the following commands in the specified order:

```
git checkout dev     \\ Switch over to the dev branch

npm i                \\ Install all required dependencies

npm start            \\ Start the backend server locally
```

4. On terminal window 1, run the following commands in the specified order:

```
git checkout development            \\ Switch over to the development branch

git branch onboard-<YOUR_NAME>      \\ Create a new branch and replace <YOUR_NAME> with your name

git checkout onboard-<YOUR_NAME>    \\ Switch over to the new branch you created

npm i                               \\ Install all required dependencies
```

:::info
This will create a new branch for you unrelated to the currently deployed version of the frontend repository. Feel free to modify and play around with the codebase on this branch. As long as you are checked out into your new branch, any code you push to github will modify your branch only. You can find out more about git branching [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).
:::

:::warning
This new branch is created solely for you to navigate the codebase and practice any onboarding assignments. Do **NOT** submit a pull request from this branch under any circumstances!
:::

5. Open `majors.tsx` found at `lib/resources/majors.tsx` and delete all the code in this file.

6. Copy the code below and paste it into `majors.tsx`

```
import { Major, Minor } from './commonTypes';

// https://www.bme.jhu.edu/academics/undergraduate/undergraduate-degree-requirements/
const bsBME: Major = {
  degree_name: 'B.S. Biomedical Engineering',
  abbrev: 'B.S. BME',
  department: 'EN Biomedical Engineering',
  total_degree_credit: 129,
  wi_credit: 6,
  url: 'https://www.bme.jhu.edu/academics/undergraduate/undergraduate-degree-requirements/',
  distributions: [
    {
      name: 'Basic Sciences',
      required_credits: 18,
      min_credits_per_course: 1,
      description:
        'Students who receive credit for AP Physics I and/or Physics II will receive a waiver for the laboratory course. ' +
        'This will reduce the required number of credits for Basic Sciences by 1 or 2 credits. Students are still required ' +
        'to complete at least 129 total credits for the degree.',
      criteria:
        'AS.171.101[C]^OR^AS.171.107[C]^OR^AS.171.102[C]^OR^AS.171.108[C]^OR^AS.173.111[C]^OR^AS.173.112[C]' +
        '^OR^AS.030.101[C]^OR^AS.030.102[C]^OR^AS.030.105[C]^OR^AS.030.106[C]',
      fine_requirements: [
        {
          description:
            '<b>General Physics I</b> <br /> AS.171.101 General Physics: Physical Science Majors I <br /> <i>OR</i> <br /> AS.171.107 General Physics for Physical Sciences Majors I (AL)',
          required_credits: 4,
          criteria: 'AS.171.101[C]^OR^AS.171.107[C]',
        },
        {
          description:
            '<b>General Physics II</b> <br /> AS.171.102 General Physics: Physical Science Majors II <br /> <i>OR</i> <br /> AS.171.108 General Physics for Physical Sciences Majors II (AL)',
          required_credits: 4,
          criteria: 'AS.171.102[C]^OR^AS.171.108[C]',
        },
        {
          description:
            '<b>General Physics Laboratory I</b> <br /> AS.173.111 General Physics Laboratory I',
          required_credits: 1,
          criteria: 'AS.173.111[C]',
        },
        {
          description:
            '<b>General Physics Laboratory II</b> <br /> AS.173.112 General Physics Laboratory II',
          required_credits: 1,
          criteria: 'AS.173.112[C]',
        },
        {
          description:
            '<b>Introductory Chemistry I</b> <br /> AS.030.101 Introductory Chemistry I',
          required_credits: 3,
          criteria: 'AS.030.101[C]',
        },
        {
          description:
            '<b>Introductory Chemistry II</b> <br /> AS.030.102 Introductory Chemistry II',
          required_credits: 3,
          criteria: 'AS.030.102[C]',
        },
        {
          description:
            '<b>Introductory Chemistry Laboratory I</b> <br /> AS.030.105 Introductory Chemistry Laboratory I',
          required_credits: 1,
          criteria: 'AS.030.105[C]',
        },
        {
          description:
            '<b>Introductory Chemistry Laboratory II</b> <br /> AS.030.106 Introductory Chemistry Laboratory II',
          required_credits: 1,
          criteria: 'AS.030.106[C]',
        },
      ],
    },
    {
      name: 'Computer Programming',
      required_credits: 3,
      min_credits_per_course: 3,
      description:
        'Students are required to take at least one semester of programming from a select set of gateway computing courses.',
      criteria: 'EN.500.112[C]^OR^EN.500.113[T]^OR^EN.500.114[C]',
      fine_requirements: [
        {
          description:
            '<b>Computer Programming</b> <br /> Select one of the following: <br /> EN.500.112 Gateway Computing: JAVA <br /> EN.500.113 Gateway Computing: Python <br />' +
            'EN.500.114 Gateway Computing: MATLAB',
          required_credits: 3,
          criteria: 'EN.500.112^OR^EN.500.113[C]^OR^EN.500.114[C]',
        },
      ],
    },
  ],
};

export function getMajorFromCommonName(name: string) {
  let out: Major | null = null;
  allMajors.forEach((major) => {
    if (major.degree_name === name) {
      out = major;
    }
  });
  if (out === null) {
    throw Error('Major not found');
  }
  return out;
}

export const allMajors: Major[] = [bsBME];
```

:::info
The first line imports the `Major` datatype, which is the construction outlined [here](#layout-of-a-major).

Each major must be defined using the `const` keyword, with the characteristic member fields and corresponding values as shown above. As mentioned previously, each `Major` consists of an array of `DistributionObj` objects belonging to the member field `distributions`, which in turn might have an array of `FineReq` objects belonging to the member field `fine_requirements`.

The function `getMajorFromCommonName` returns the name of the degree if it is valid so that it can be displayed to the user.

The constant `allMajors` on the last line contains a list of variables corresponding to each of the majors which will be visible to the user when they determine their program of study.
:::

#### Task 1: Debugging

:::info
You can execute the command

`npm start`

in terminal window 1 to run the frontend server locally. The "Sciences" distribution has been completed for you. This is the typical structure and presentation of a distribution and all its fine requirements to the user.
:::

The code above was intentionally designed to contain the following bugs:

1. The addition of any course to the user's plan results in a Runtime Error
2. The addition of EN.500.113 Gateway Computing: Python to the plan does not correctly update the degree progress even though it is a course that satisfies the Computer Programming requirement

**Task:** Find the source of the bugs and fix them.

<details>
<summary>Click here for Answer</summary>

The sources of both the bugs lie within the Computer Programming distribution.

1. Recall that each element in a criteria string **MUST** be followed by a valid `[<LETTER>]`. However, the criteria string within the first `fine_requirement` is not structured this way. There is no `[<LETTER>]` following `EN.500.112`. The correct criteria string is shown below:

```
criteria: 'EN.500.112[C]^OR^EN.500.113[C]^OR^EN.500.114[C]',
```

2. Note the criteria string of the overall Computer Programming distribution. The `[<LETTER>]` following `EN.500.113` is `[T]`, which is used to identify a program of study tag. However, `EN.500.113` is a class and so must be followed by a `[C]`. The correct criteria string is shown below:

```
criteria: 'EN.500.112[C]^OR^EN.500.113[C]^OR^EN.500.114[C]',
```

</details>

#### Task 2: Constructing Criteria

<details>
<summary>Click here for Answer</summary>

```

```

</details>

#### Task 3: Defining Distributions

<details>
<summary>Click here for Answer</summary>

```

```

</details>

#### Task 4: Complete the Major!

<details>
<summary>Click here for Answer</summary>

Here is a complete implementation of the BME major:

```
// https://www.bme.jhu.edu/academics/undergraduate/undergraduate-degree-requirements/
const bsBME: Major = {
  degree_name: 'B.S. Biomedical Engineering',
  abbrev: 'B.S. BME',
  department: 'EN Biomedical Engineering',
  total_degree_credit: 129,
  wi_credit: 6,
  url: 'https://www.bme.jhu.edu/academics/undergraduate/undergraduate-degree-requirements/',
  distributions: [
    {
      name: 'Biomedical Core',
      required_credits: 34,
      min_credits_per_course: 1,
      description:
        'Each student must complete a set of core courses which will serve as foundational knowledge in the discipline of Biomedical Engineering. For more information please visit the ' +
        "<a href='https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/biomedical-engineering/biomedical-engineering-bachelor-science/#requirementstext'>" +
        'major degree requirement</a> section on the department website.',
      criteria:
        'EN.580.111[C]^OR^EN.580.151[C]^OR^EN.580.153[C]^OR^EN.580.221[C]^OR^EN.580.241[C]^OR^EN.580.242[C]^OR^EN.580.243[C]^OR^' +
        'EN.580.244[C]^OR^EN.580.246[C]^OR^EN.580.248[C]^OR^EN.580.475[C]^OR^EN.580.477[C]^OR^EN.580.485[C]^OR^EN.580.487[C]^OR^' +
        'EN.580.424[C]^OR^EN.580.427[C]^OR^EN.580.452[C]^OR^EN.580.453[C]^OR^EN.580.454[C]^OR^EN.580.494[C]',
      fine_requirements: [
        {
          description:
            '<b>Biomedical Engineering and Design</b> <br /> EN.580.111 Biomedical Engineering and Design',
          required_credits: 2,
          criteria: 'EN.580.111[C]',
        },
        {
          description:
            '<b>Structural Biology of Cells</b> <br /> EN.580.151 Structural Biology of Cells',
          required_credits: 3,
          criteria: 'EN.580.151[C]',
        },
        {
          description:
            '<b>Structural Biology of Cells Laboratory</b> <br /> EN.580.153 Structural Biology of Cells Laboratory',
          required_credits: 1,
          criteria: 'EN.580.153[C]',
        },
        {
          description:
            '<b>Biochemistry and Molecular Engineering</b> <br /> EN.580.221 Biochemistry and Molecular Engineering',
          required_credits: 4,
          criteria: 'EN.580.221[C]',
        },
        {
          description:
            '<b>Statistical Physics</b> <br /> EN.580.241 Statistical Physics',
          required_credits: 2,
          criteria: 'EN.580.241[C]',
        },
        {
          description:
            '<b>Biological Models and Simulations</b> <br /> EN.580.242 Biological Models and Simulations',
          required_credits: 2,
          criteria: 'EN.580.242[C]',
        },
        {
          description:
            '<b>Linear Signals and Systems</b> <br /> EN.580.243 Linear Signals and Systems',
          required_credits: 2,
          criteria: 'EN.580.243[C]',
        },
        {
          description:
            '<b>Nonlinear Dynamics of Biological Systems</b> <br /> EN.580.244 Nonlinear Dynamics of Biological Systems',
          required_credits: 2,
          criteria: 'EN.580.244[C]',
        },
        {
          description:
            '<b>Systems and Controls</b> <br /> EN.580.246 Systems and Controls',
          required_credits: 2,
          criteria: 'EN.580.246[C]',
        },
        {
          description:
            '<b>Systems Biology of the Cell</b> <br /> EN.580.248 Systems Biology of the Cell',
          required_credits: 2,
          criteria: 'EN.580.248[C]',
        },
        {
          description:
            '<b>Biomedical Data Science</b> <br /> EN.580.475 Biomedical Data Science',
          required_credits: 2,
          criteria: 'EN.580.475[C]',
        },
        {
          description:
            '<b>Biomedical Data Science Laboratory</b> <br /> EN.580.477 Biomedical Data Science Laboratory',
          required_credits: 1,
          criteria: 'EN.580.477[C]',
        },
        {
          description:
            '<b>Computational Medicine: Cardiology</b> <br /> EN.580.485 Computational Medicine: Cardiology',
          required_credits: 2,
          criteria: 'EN.580.485[C]',
        },
        {
          description:
            '<b>Computational Medicine: Cardiology Laboratory</b> <br /> EN.580.487 Computational Medicine: Cardiology Laboratory',
          required_credits: 1,
          criteria: 'EN.580.487[C]',
        },
        {
          description:
            '<b>Core Electives</b> <br /> Select two of the following core electives (Note: These courses cannot be double-counted toward the 21-credit focus area ' +
            'requirement. Courses taken in excess of the 6 credit core elective requirement can be counted in a relevant focus area):' +
            '<br /> EN.580.424 Neuroengineering and Lab <br /> EN.580.427 Microphysiological Systems and Lab <br />' +
            'EN.580.452 Cell and Tissue Engineering Lab <br /> EN.580.453 Immunoengineering Principles and Applications <br />' +
            'EN.580.454 Methods in Nucleic Acid Sequencing Lab <br /> EN.580.494 Build an Imager',
          required_credits: 6,
          criteria:
            'EN.580.424[C]^OR^EN.580.427[C]^OR^EN.580.452[C]^OR^EN.580.453[C]^OR^EN.580.454[C]^OR^EN.580.494[C]',
        },
        {
          description:
            '<b>Career Exploration</b> <br /> Career Exploration in BME is a 0-credit self-identified set of career related events (lectures, panels, journal clubs, etc.) ' +
            'beginning in the spring semester of year one and continuing until graduation. Career Exploration is administered through a ' +
            'Community Blackboard site; students will be enrolled by the department.',
          required_credits: 0,
          criteria: 'EN Career Exploration[D]',
        },
      ],
    },
    {
      name: 'Basic Sciences',
      required_credits: 18,
      min_credits_per_course: 1,
      description:
        'Students who receive credit for AP Physics I and/or Physics II will receive a waiver for the laboratory course. ' +
        'This will reduce the required number of credits for Basic Sciences by 1 or 2 credits. Students are still required ' +
        'to complete at least 129 total credits for the degree.',
      criteria:
        'AS.171.101[C]^OR^AS.171.107[C]^OR^AS.171.102[C]^OR^AS.171.108[C]^OR^AS.173.111[C]^OR^AS.173.112[C]' +
        '^OR^AS.030.101[C]^OR^AS.030.102[C]^OR^AS.030.105[C]^OR^AS.030.106[C]',
      fine_requirements: [
        {
          description:
            '<b>General Physics I</b> <br /> AS.171.101 General Physics: Physical Science Majors I <br /> <i>OR</i> <br /> AS.171.107 General Physics for Physical Sciences Majors I (AL)',
          required_credits: 4,
          criteria: 'AS.171.101[C]^OR^AS.171.107[C]',
        },
        {
          description:
            '<b>General Physics II</b> <br /> AS.171.102 General Physics: Physical Science Majors II <br /> <i>OR</i> <br /> AS.171.108 General Physics for Physical Sciences Majors II (AL)',
          required_credits: 4,
          criteria: 'AS.171.102[C]^OR^AS.171.108[C]',
        },
        {
          description:
            '<b>General Physics Laboratory I</b> <br /> AS.173.111 General Physics Laboratory I',
          required_credits: 1,
          criteria: 'AS.173.111[C]',
        },
        {
          description:
            '<b>General Physics Laboratory II</b> <br /> AS.173.112 General Physics Laboratory II',
          required_credits: 1,
          criteria: 'AS.173.112[C]',
        },
        {
          description:
            '<b>Introductory Chemistry I</b> <br /> AS.030.101 Introductory Chemistry I',
          required_credits: 3,
          criteria: 'AS.030.101[C]',
        },
        {
          description:
            '<b>Introductory Chemistry II</b> <br /> AS.030.102 Introductory Chemistry II',
          required_credits: 3,
          criteria: 'AS.030.102[C]',
        },
        {
          description:
            '<b>Introductory Chemistry Laboratory I</b> <br /> AS.030.105 Introductory Chemistry Laboratory I',
          required_credits: 1,
          criteria: 'AS.030.105[C]',
        },
        {
          description:
            '<b>Introductory Chemistry Laboratory II</b> <br /> AS.030.106 Introductory Chemistry Laboratory II',
          required_credits: 1,
          criteria: 'AS.030.106[C]',
        },
      ],
    },
    {
      name: 'Mathematics',
      required_credits: 19,
      min_credits_per_course: 3,
      description:
        'Students who take an approved math course and receive 3 credits will have a total of 19 credits. Students are ' +
        'still required to complete at least 129 total credits for the degree.',
      criteria:
        'AS.110.108[C]^OR^AS.110.109[C]^OR^AS.110.202[C]^OR^AS.110.211[C]^OR^EN.553.291[C]' +
        '^OR^EN.553.310[C]^OR^EN.553.311[C]^OR^EN.553.413[C]^OR^EN.553.430[C]^OR^EN.553.433[C]^OR^EN.560.348[C]',
      fine_requirements: [
        {
          description:
            '<b>Calculus I</b> <br /> AS.110.108 Calculus I (Physical Sciences & Engineering)',
          required_credits: 4,
          criteria: 'AS.110.108[C]',
        },
        {
          description:
            '<b>Calculus II</b> <br /> AS.110.109 Calculus II (Physical Sciences & Engineering)',
          required_credits: 4,
          criteria: 'AS.110.109[C]',
        },
        {
          description:
            '<b>Calculus III</b> <br /> AS.110.202 Calculus III <br /> <i>OR</i> <br /> AS.110.211 Honors Multivariable Calculus',
          required_credits: 4,
          criteria: 'AS.110.202[C]^OR^AS.110.211[C]',
        },
        {
          description:
            '<b>Linear Algebra and Differential Equations</b> <br /> EN.553.291 Linear Algebra and Differential Equations',
          required_credits: 4,
          criteria: 'EN.553.291[C]',
        },
        {
          description:
            '<b>Probability and Statistics</b> <br /> Select one of the following: <br /> EN.553.310 Probability and Statistics for the Physical Sciences and Engineering <br />' +
            'EN.553.311 Probability and Statistics for the Biological Sciences & Engineering <br /> EN.553.413 Applied Statistics and Data Analysis <br />' +
            'EN.553.430 Introduction to Statistics <br /> EN.553.433 Monte Carlo Methods <br /> EN.560.348 Probability & Statistics in Civil Engineering',
          required_credits: 3,
          criteria:
            'EN.553.310[C]^OR^EN.553.311[C]^OR^EN.553.413[C]^OR^EN.553.430[C]^OR^EN.553.433[C]^OR^EN.560.348[C]',
        },
      ],
    },
    {
      name: 'Computer Programming',
      required_credits: 3,
      min_credits_per_course: 3,
      description:
        'Students are required to take at least one semester of programming from a select set of gateway computing courses.',
      criteria: 'EN.500.112[C]^OR^EN.500.113[C]^OR^EN.500.114[C]',
      fine_requirements: [
        {
          description:
            '<b>Computer Programming</b> <br /> Select one of the following: <br /> EN.500.112 Gateway Computing: JAVA <br /> EN.500.113 Gateway Computing: Python <br />' +
            'EN.500.114 Gateway Computing: MATLAB',
          required_credits: 3,
          criteria: 'EN.500.112[C]^OR^EN.500.113[C]^OR^EN.500.114[C]',
        },
      ],
    },
    {
      name: 'Focus Area',
      required_credits: 21,
      min_credits_per_course: 1,
      pathing: true,
      description:
        'The student must select at least 21 credits from the approved list of courses for a specific focus area. Coordinate with your advisor to' +
        ' determine the best combination of classes for you:',
      criteria:
        'BMED-BDS[T]^OR^BMED-CM[T]^OR^BMED-GSB[T]^OR^BMED-IMD[T]^OR^BMED-IMMU[T]^OR^BMED-NE[T]^OR^BMED-TCTE[T]',
      fine_requirements: [
        {
          description: '<b>Biomedical Data Science</b>',
          required_credits: 21,
          criteria: 'BMED-BDS[T]',
        },
        {
          description: '<b>Computational Medicine</b>',
          required_credits: 21,
          criteria: 'BMED-CM[T]',
        },
        {
          description: '<b>Genomics and Systems Biology</b>',
          required_credits: 21,
          criteria: 'BMED-GSB[T]',
        },
        {
          description: '<b>Imaging and Medical Devices</b>',
          required_credits: 21,
          criteria: 'BMED-IMD[T]',
        },
        {
          description: '<b>Imunoengineering</b>',
          required_credits: 21,
          criteria: 'BMED-IMMU[T]',
        },
        {
          description: '<b>Neuroengineering</b>',
          required_credits: 21,
          criteria: 'BMED-NE[T]',
        },
        {
          description: '<b>Translational Cell and Tissue Engineering</b>',
          required_credits: 21,
          criteria: 'BMED-TCTE[T]',
        },
      ],
    },
    {
      name: 'Design',
      required_credits: 6,
      min_credits_per_course: 3,
      description: 'Select at least one of the following design sequences',
      criteria:
        '(EN.510.433[C]^OR^EN.510.434[C])^OR^(EN.520.462[C]^OR^EN.520.463[C])^OR^' +
        '(EN.520.498[C]^OR^EN.520.499[C])^OR^(EN.540.400[C]^OR^EN.540.421[C])^OR^' +
        '(EN.580.311[C]^OR^EN.580.312[C])^OR^(EN.580.411[C]^OR^EN.580.412[C])^OR^' +
        '(EN.580.456[C]^OR^EN.580.457[C])^OR^(EN.580.471[C]^OR^EN.580.571[C])^OR^' +
        '(EN.580.480[C]^OR^EN.580.481[C])^OR^(EN.580.580[C]^OR^EN.580.581[C])^OR^' +
        '(EN.601.455[C]^OR^EN.601.456[C])^OR^(EN.580.437[C]^OR^EN.580.438[C])',
      pathing: true,
      fine_requirements: [
        {
          description:
            '<b>EN.500.308 and EN.500.309</b> <br /> EN.500.308 Multidisciplinary Engineering Design I <br /> EN.500.309 Advanced Multidisciplinary Design',
          required_credits: 6,
          criteria: 'EN.500.308[C]^OR^EN.500.309[C]',
        },
        {
          description:
            '<b>EN.510.433 and EN.510.434</b> <br /> EN.510.433 Senior Design Research <br /> EN.510.434 Senior Design/Research II <br />' +
            '(This option must be approved by the Materials Science & Engineering Department)',
          required_credits: 6,
          criteria: 'EN.510.433[C]^OR^EN.510.434[C]',
        },
        {
          description:
            '<b>EN.520.462 and EN.520.463</b> <br /> EN.520.462 Leading Innovation Design Team <br /> EN.520.463 Leading Innovation Design Team II',
          required_credits: 6,
          criteria: 'EN.520.462[C]^OR^EN.520.463[C]',
        },
        {
          description:
            '<b>EN.520.498 and EN.520.499</b> <br /> EN.520.498 Senior Design Project <br /> EN.520.499 Senior Design Project II',
          required_credits: 6,
          criteria: 'EN.520.498[C]^OR^EN.520.499[C]',
        },
        {
          description:
            '<b>EN.540.400 and EN.540.421</b> <br /> EN.540.400 Project in Design: Pharmacokinetics <br /> EN.540.421 Project in Design: Pharmacodynamics',
          required_credits: 6,
          criteria: 'EN.540.400[C]^OR^EN.540.421[C]',
        },
        {
          description:
            '<b>EN.580.311 and EN.580.312</b> <br /> EN.580.311 Design Team Health Tech Project I <br /> EN.580.312 Design Team Health Tech Project II',
          required_credits: 6,
          criteria: 'EN.580.311[C]^OR^EN.580.312[C]',
        },
        {
          description:
            '<b>EN.580.411 and EN.580.412</b> <br /> EN.580.411 Design Team Health Tech Project I <br /> EN.580.412 Design Team Health Tech Project II',
          required_credits: 6,
          criteria: 'EN.580.411[C]^OR^EN.580.412[C]',
        },
        {
          description:
            '<b>EN.580.437 and EN.580.438</b> <br /> EN.580.437 Neuro Data Design I <br /> EN.580.438 Neuro Data Design II',
          required_credits: 6,
          criteria: 'EN.580.437[C]^OR^EN.580.438[C]',
        },
        {
          description:
            '<b>EN.580.456 and EN.580.457</b> <br /> EN.580.456 Introduction to Rehabilitation Engineering <br /> EN.580.457 Introduction to Rehabilitation Engineering: Design Lab',
          required_credits: 6,
          criteria: 'EN.580.456[C]^OR^EN.580.457[C]',
        },
        {
          description:
            '<b>EN.580.471 and EN.580.571</b> <br /> EN.580.471 Principles of Design of BME Instrumentation <br /> EN.580.571 Honors Instrumentation',
          required_credits: 6,
          criteria: 'EN.580.471[C]^OR^EN.580.571[C]',
        },
        {
          description:
            '<b>EN.580.480 and EN.580.481</b> <br /> EN.580.480 Precision Care Medicine I <br /> EN.580.481 Precision Care Medicine II',
          required_credits: 6,
          criteria: 'EN.580.480[C]^OR^EN.580.481[C]',
        },
        {
          description:
            '<b>EN.580.580 and EN.580.581</b> <br /> EN.580.580 Senior Design Project I <br /> EN.580.581 Senior Design Project II',
          required_credits: 6,
          criteria: 'EN.580.580[C]^OR^EN.580.581[C]',
        },
        {
          description:
            '<b>EN.601.455 and EN.601.456</b> <br /> EN.601.455 Computer Integrated Surgery I <br /> EN.601.456 Computer Integrated Surgery II',
          required_credits: 6,
          criteria: 'EN.601.455[C]^OR^EN.601.456[C]',
        },
      ],
    },
    {
      name: 'Other Electives',
      required_credits: 9,
      min_credits_per_course: 1,
      description: 'Select 9 credits from any area.',
      criteria: 'H[A]^OR^S[A]^OR^Q[A]^OR^N[A]^OR^E[A]',
      exclusive: true,
    },
    {
      name: 'Humanities and Social Sciences',
      required_credits: 18,
      min_credits_per_course: 3,
      description:
        'Select courses to form a coherent program, relevant to the student’s goals. One course in which ethical and social ' +
        'issues related to technology or medicine is recommended.',
      criteria: 'H[A]^OR^S[A]',
      fine_requirements: [
        {
          description: '<b>One Upper Level class</b>',
          required_credits: 3,
          criteria: '(H[A]^OR^S[A])^AND^(Upper Level[L])',
        },
      ],
    },
    {
      name: 'Writing Intensive',
      required_credits: 6,
      min_credits_per_course: 3,
      double_count: true,
      description:
        'Students are required to fulfill the university’s requirement of two writing intensive courses, ' +
        'each at least 3 credits. Students must receive at least a C- grade or better in these writing courses.',
      criteria: 'Written Intensive[W]',
    },
  ],
};
```

</details>

#### Bonus: AMS major

Try to define the Applied Mathematics and Statistics major by yourself! You can find the requirements for the major [here](https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/applied-mathematics-statistics/applied-mathematics-statistics-bs/#requirementstext).

:::tip
Remember to add the const variable you create to `allMajors` at the end of the file.
:::

<details>
<summary>Click here for Answer</summary>

Here is one way of implementing the AMS major:

```
// https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/applied-mathematics-statistics/applied-mathematics-statistics-bs/#requirementstext
const bsAMS: Major = {
  degree_name: 'B.S. Applied Mathematics & Statistics',
  abbrev: 'B.S. AMS',
  department: 'EN Applied Mathematics & Statistics',
  total_degree_credit: 120,
  wi_credit: 6,
  url: 'https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/applied-mathematics-statistics/applied-mathematics-statistics-bs/#requirementstext',
  distributions: [
    {
      name: 'Math',
      required_credits: 39,
      min_credits_per_course: 3,
      description:
        'All courses used to meet the following departmental requirements must be taken for a letter grade and passed with a grade of C- or higher.',
      criteria:
        'AS.110.108[C]^OR^AS.110.109[C]^OR^AS.110.113[C]^OR^AS.110.202[C]^OR^AS.110.211[C]^OR^AS.110.201[C]^OR^AS.110.212[C]^OR^EN.553.291[C]^OR^' +
        'AS.110.302[C]^OR^EN.553.391[C]^OR^EN.540.468[C]^OR^EN.553.385[C]^OR^EN.553.171[C]^OR^EN.553.172[C]^OR^EN.553.371[C]^OR^EN.553.471[C]^OR^EN.553.472[C]^OR^' +
        'EN.553.420[C]^OR^EN.553.430[C]^OR^EN.553.431[C]^OR^EN.553.361[C]',
      fine_requirements: [
        {
          description:
            '<b>Calculus I</b> <br /> AS.110.108 Calculus I (Physical Sciences & Engineering) <br /> <i>OR</i> <br /> AS.110.113 Honors Single Variable Calculus <br />',
          required_credits: 4,
          criteria: 'AS.110.108[C]',
        },
        {
          description:
            '<b>Calculus II</b> <br /> AS.110.109 Calculus II (Physical Sciences & Engineering) <br /> <i>OR</i> <br /> AS.110.113 Honors Single Variable Calculus',
          required_credits: 4,
          criteria: 'AS.110.109[C]^OR^AS.110.113[C]',
        },
        {
          description:
            '<b>Calculus III</b> <br /> AS.110.202 Calculus III <br /> <i>OR</i> <br /> AS.110.211 Honors Multivariable Calculus',
          required_credits: 4,
          criteria: 'AS.110.202[C]^OR^AS.110.211[C]',
        },
        {
          description:
            '<b>Linear Algebra</b> <br /> Select one of the following: <br /> AS.110.201 Linear Algebra <br /> AS.110.212 Honors Linear Algebra <br /> EN.553.291 Linear Algebra and Differential Equations',
          required_credits: 4,
          criteria: 'AS.110.201[C]^OR^AS.110.212[C]^OR^EN.553.291[C]',
        },
        {
          description:
            '<b>Differential Equations</b> <br /> Select one of the following: <br /> AS.110.302 Differential Equations and Applications <br /> EN.553.391 Dynamical Systems <br /> EN.540.468 Introduction to Nonlinear Dynamics and Chaos',
          required_credits: 3,
          criteria: 'AS.110.302[C]^OR^EN.553.391[C]^OR^EN.540.468[C]',
        },
        {
          description:
            '<b>Numerical Linear Algebra</b> <br /> EN.553.385 Numerical Linear Algebra',
          required_credits: 4,
          criteria: 'EN.553.385[C]',
        },
        {
          description:
            '<b>Discrete Mathematics</b> <br /> Select one of the following: <br /> EN.553.171 Discrete Mathematics <br /> EN.553.172 Honors Discrete Mathematics <br /> EN.553.371 ' +
            'Cryptology and Coding <br /> EN.553.471 Combinatorial Analysis <br /> EN.553.472 Graph Theory',
          required_credits: 4,
          criteria:
            'EN.553.171[C]^OR^EN.553.172[C]^OR^EN.553.371[C]^OR^EN.553.471[C]^OR^EN.553.472[C]',
        },
        {
          description:
            '<b>Probability</b> <br /> EN.553.420 Introduction to Probability',
          required_credits: 4,
          criteria: 'EN.553.420[C]',
        },
        {
          description:
            '<b>Statistics</b> <br /> EN.553.430 Introduction to Statistics <br /> <i>OR</i> <br />' +
            'EN.553.431 Honors Introduction to Statistics',
          required_credits: 4,
          criteria: 'EN.553.430[C]^OR^EN.553.431[C]',
        },
        {
          description:
            '<b>Optimization</b> <br /> EN.553.361 Introduction to Optimization',
          required_credits: 4,
          criteria: 'EN.553.361[C]',
        },
      ],
    },
    {
      name: 'Computer Languages and Programming',
      required_credits: 3,
      min_credits_per_course: 1,
      description:
        'Select one of the following: <br />' +
        'EN.500.112 Gateway Computing: JAVA <br /> EN.500.113 Gateway Computing: Python <br /> EN.500.114 Gateway Computing: Matlab <br />' +
        'AS.250.205 Introduction to Computing <br /> EN.553.281 Introduction to Mathematical Computing <br /> EN.580.242 & EN.580.244 ' +
        'Biological Models and Simulations and Nonlinear Dynamics of Biological Systems <br /> EN.601.220 Intermediate Programming' +
        '. <br /> NOTE: Students are strongly encouraged to fulfill this element of the requirement by taking EN.500.113 Gateway Computing: Python, and to do this in their first semester at Johns Hopkins University.',
      criteria:
        'EN.500.112[C]^OR^EN.500.113[C]^OR^EN.500.114[C]^OR^AS.250.205[C]^OR^EN.553.281[C]^OR^EN.580.242[C]^OR^EN.580.244[C]^OR^' +
        'EN.601.220[C]',
    },
    {
      name: 'Area of Focus',
      required_credits: 6,
      min_credits_per_course: 3,
      pathing: true,
      description:
        'Two courses must be taken within a coherent field of interest. For more detail please visit ' +
        'https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/applied-mathematics-statistics/applied-mathematics-statistics-bs/#requirementstext',
      criteria:
        'AS.110.405[C]^OR^AS.110.445[C]^OR^EN.553.426[C]^OR^EN.553.427[C]^OR^EN.553.433[C]^OR^EN.553.492[C]^OR^' +
        'EN.553.400[C]^OR^EN.553.413[C]^OR^EN.553.414[C]^OR^EN.553.432[C]^OR^EN.553.436[C]^OR^EN.553.439[C]^OR^EN.553.450[C]^OR^' +
        'EN.553.362[C]^OR^EN.553.453[C]^OR^EN.553.463[C]^OR^EN.553.465[C]^OR^EN.553.467[C]^OR^' +
        'AS.110.401[C]^OR^EN.553.371[C]^OR^EN.553.471[C]^OR^EN.553.472[C]^OR^' +
        'EN.553.428[C]^OR^EN.553.441[C]^OR^EN.553.442[C]^OR^EN.553.444[C]^OR^EN.553.445[C]^OR^EN.553.447[C]^OR^EN.553.448[C]^OR^EN.553.449[C]^OR^EN.553.488[C]^OR^' +
        'EN.553.481[C]^OR^EN.553.493[C]',
      fine_requirements: [
        {
          required_credits: 6,
          description: '<b>Probability and Stochastic Processes</b>',
          criteria:
            'AS.110.405[C]^OR^AS.110.445[C]^OR^EN.553.426[C]^OR^EN.553.427[C]^OR^EN.553.433[C]^OR^EN.553.492[C]',
        },
        {
          required_credits: 6,
          description: '<b>Statistics and Statistical Learning</b>',
          criteria:
            'AS.110.445[C]^OR^EN.553.400[C]^OR^EN.553.413[C]^OR^EN.553.414[C]^OR^EN.553.432[C]^OR^EN.553.433[C]' +
            '^OR^EN.553.436[C]^OR^EN.553.439[C]^OR^EN.553.450[C]',
        },
        {
          required_credits: 6,
          description: '<b>Optimization and Operations Research</b>',
          criteria:
            'EN.553.362[C]^OR^EN.553.400[C]^OR^EN.553.453[C]^OR^EN.553.463[C]^OR^EN.553.465[C]^OR^EN.553.467[C]',
        },
        {
          required_credits: 6,
          description: '<b>Discrete Mathematics</b>',
          criteria:
            'AS.110.401[C]^OR^EN.553.371[C]^OR^EN.553.463[C]^OR^EN.553.471[C]^OR^EN.553.472[C]',
        },
        {
          required_credits: 6,
          description: '<b>Financial Mathematics</b>',
          criteria:
            'EN.553.427[C]^OR^EN.553.428[C]^OR^EN.553.441[C]^OR^EN.553.442[C]^OR^EN.553.444[C]^OR^EN.553.445[C]' +
            '^OR^EN.553.447[C]^OR^EN.553.448[C]^OR^EN.553.449[C]^OR^EN.553.488[C]',
        },
        {
          required_credits: 6,
          description: '<b>Computational Mathematics</b>',
          criteria:
            'EN.553.481[C]^OR^AS.110.445[C]^OR^EN.553.433[C]^OR^EN.553.467[C]^OR^EN.553.493[C]',
        },
      ],
    },
    {
      name: 'Scientific Computing',
      required_credits: 3,
      min_credits_per_course: 3,
      description:
        '<b>Select one of the following:</b> <br /> AS.110.445 Mathematical and Computational Foundations of Data Science <br /> EN.553.400 Mathematical Modeling and Consulting' +
        '<br /> EN.553.413 Applied Statistics and Data Analysis <br /> EN.553.432 Bayesian Statistics <br /> EN.553.433 Monte Carlo Methods <br />' +
        'EN.553.436 Introduction to Data Science <br /> EN.553.450 Computational Molecular Medicine <br /> EN.553.463 Network Models in Operations Research <br />' +
        'EN.553.467 Deep Learning in Discrete Optimization <br /> EN.553.481 Numerical Analysis <br /> EN.553.488 Computing for Applied Mathematics <br />' +
        'EN.553.493 Mathematical Image Analysis <br /> EN.553.494 Applied and Computational Multilinear Algebra <br /> EN.601.433 Intro Algorithms <br />' +
        'EN.601.475 Machine Learning <br /> EN.601.482 Machine Learning: Deep Learning',
      criteria:
        'AS.110.445[C]^OR^EN.553.400[C]^OR^EN.553.413[C]^OR^EN.553.432[C]^OR^EN.553.433[C]^OR^EN.553.436[C]' +
        '^OR^EN.553.450[C]^OR^EN.553.463[C]^OR^EN.553.467[C]^OR^EN.553.481[C]^OR^EN.553.488[C]^OR^EN.553.493[C]' +
        '^OR^EN.553.494[C]^OR^EN.601.433[C]^OR^EN.601.475[C]^OR^EN.601.482[C]',
    },
    {
      name: 'Natural Sciences',
      required_credits: 12,
      min_credits_per_course: 1,
      description:
        'Courses coded Natural Sciences. Laboratory courses that accompany Natural Science courses may' +
        ' be used in reaching this total. (Courses used to meet the requirements above may be counted toward this total.)',
      criteria: 'N[A]',
    },
    {
      name: 'Quantitative Studies',
      required_credits: 40,
      min_credits_per_course: 1,
      description:
        'Courses coded Quantitative Studies totaling 40 credits of which at least 18 credits must be in courses ' +
        'numbered 300 or higher. (Courses used to meet the requirements above may be counted toward this total.)',
      criteria: 'Q[A]',
      fine_requirements: [
        {
          description:
            '<b>Upper Level Requirement</b> <br /> At least 18 credits must be in courses numbered 300 or higher.',
          required_credits: 18,
          criteria: 'Upper Level[L]',
        },
      ],
    },
    {
      name: 'Liberal Arts',
      required_credits: 18,
      min_credits_per_course: 3,
      description:
        'These courses must have either an ‘H’ or ‘S’ area designator on them, but can be ' +
        'from any department. At most 2 of these courses may be taken S/U (if not counted towards ' +
        'the writing requirement). Foreign language courses can be counted as well, even if ' +
        'they don’t carry an ‘H’ or ‘S’ designator.',
      criteria:
        'AS Center for Language Education[D]^OR^AS Modern Languages and Literatures[D]^OR^H[A]^OR^S[A]',
    },
    {
      name: 'Writing Intensive',
      required_credits: 6,
      min_credits_per_course: 3,
      double_count: true,
      description:
        'Students are required to fulfill the university’s requirement of two writing intensive courses, ' +
        'each at least 3 credits. Students must receive at least a C- grade or better in these writing courses. ',
      criteria: 'Written Intensive[W]',
      fine_requirements: [
        {
          description:
            '<b>Writing Skills in English</b> <br /> At least one course must be explicitly focused on writing skills in English (eg, courses in professional, ' +
            'fiction or expository writing). These courses may overlap with other requirements.',
          required_credits: 3,
          criteria:
            'AS.060.100[C]^OR^AS.060.113[C]^OR^AS.060.114[C]^OR^AS.180.248[C]^OR^AS.220.105[C]^OR^AS.220.106[C]^OR^AS.220.108[C]^OR^AS.290.303[C]^OR^AS.360.133[C]^OR^EN.661.110[C]^OR^EN.661.111[C]^OR^EN.661.250[C]^OR^EN.661.251[C]^OR^EN.661.315[C]',
        },
      ],
    },
  ],
};
```

</details>

#### Deleting your branch

You can delete your branch directly using Github in your browser.

:::caution
It is highly recommended that you verify your work with a reviewer before deleting your branch. You can reach out to Aryaman Shodhan at ashodha1@jhu.edu or another member of UCredit who is familiar with this part of the codebase for a review. Please use the subject line "UCredit Onboarding Review for Majors".
:::

```

```
