---
sidebar_label: Major
sidebar_position: 3
---

# Major

A degree schema.

## Attributes

| Attribute Name      | Type                   | Required | Default | Ref | Comments |
| ------------------- | ---------------------- | -------- | ------- | --- | -------- |
| degree_name         | `String`               | `true`   |         |     |          |
| department          | `String`               | `true`   |         |     |          |
| total_degree_credit | `Number`               | `true`   |         |     |          |
| wi_credit           | `Number`               | `true`   |         |     |          |
| url                 | `String`               |          |         |     |          |
| distributions       | `DegreeDistribution[]` |          |         |     |          |

## Example

```js
{
  _id: { $oid: "61ddb0e735517ca56c761912" },
  degree_name: "B.S. Biomedical Engineering",
  department: "EN Biomedical Engineering",
  total_degree_credit: 129,
  wi_credit: 6,
  url: "https://www.bme.jhu.edu/academics/undergraduate/undergraduate-degree-requirements/",
  distributions: [
    {
      pathing: false,
      user_select: false,
      double_count: false,
      _id: { $oid: "61ddb0e735517ca56c761913" },
      name: "Biomedical Core",
      required_credits: 34,
      min_credits_per_course: 1,
      description:
        "Each student must complete a set of core courses which will serve as foundational knowledge in the discipline of Biomedical Engineering. For more information please visit the <a href='https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/biomedical-engineering/biomedical-engineering-bachelor-science/#requirementstext'>major degree requirement</a> section on the department website.",
      criteria:
        "EN.580.111[C]^OR^EN.580.151[C]^OR^EN.580.153[C]^OR^EN.580.221[C]^OR^EN.580.241[C]^OR^EN.580.242[C]^OR^EN.580.243[C]^OR^EN.580.244[C]^OR^EN.580.246[C]^OR^EN.580.248[C]^OR^EN.580.475[C]^OR^EN.580.477[C]^OR^EN.580.485[C]^OR^EN.580.487[C]^OR^EN.580.424[C]^OR^EN.580.427[C]^OR^EN.580.452[C]^OR^EN.580.453[C]^OR^EN.580.454[C]^OR^EN.580.494[C]",
      fine_requirements: [
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761914" },
          description:
            "<b>Biomedical Engineering and Design</b> <br /> EN.580.111 Biomedical Engineering and Design",
          required_credits: 2,
          criteria: "EN.580.111[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761915" },
          description:
            "<b>Structural Biology of Cells</b> <br /> EN.580.151 Structural Biology of Cells",
          required_credits: 3,
          criteria: "EN.580.151[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761916" },
          description:
            "<b>Structural Biology of Cells Laboratory</b> <br /> EN.580.153 Structural Biology of Cells Laboratory",
          required_credits: 1,
          criteria: "EN.580.153[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761917" },
          description:
            "<b>Biochemistry and Molecular Engineering</b> <br /> EN.580.221 Biochemistry and Molecular Engineering",
          required_credits: 4,
          criteria: "EN.580.221[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761918" },
          description:
            "<b>Statistical Physics</b> <br /> EN.580.241 Statistical Physics",
          required_credits: 2,
          criteria: "EN.580.241[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761919" },
          description:
            "<b>Biological Models and Simulations</b> <br /> EN.580.242 Biological Models and Simulations",
          required_credits: 2,
          criteria: "EN.580.242[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76191a" },
          description:
            "<b>Linear Signals and Systems</b> <br /> EN.580.243 Linear Signals and Systems",
          required_credits: 2,
          criteria: "EN.580.243[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76191b" },
          description:
            "<b>Nonlinear Dynamics of Biological Systems</b> <br /> EN.580.244 Nonlinear Dynamics of Biological Systems",
          required_credits: 2,
          criteria: "EN.580.244[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76191c" },
          description:
            "<b>Systems and Controls</b> <br /> EN.580.246 Systems and Controls",
          required_credits: 2,
          criteria: "EN.580.246[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76191d" },
          description:
            "<b>Systems Biology of the Cell</b> <br /> EN.580.248 Systems Biology of the Cell",
          required_credits: 2,
          criteria: "EN.580.248[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76191e" },
          description:
            "<b>Biomedical Data Science</b> <br /> EN.580.475 Biomedical Data Science",
          required_credits: 2,
          criteria: "EN.580.475[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76191f" },
          description:
            "<b>Biomedical Data Science Laboratory</b> <br /> EN.580.477 Biomedical Data Science Laboratory",
          required_credits: 1,
          criteria: "EN.580.477[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761920" },
          description:
            "<b>Computational Medicine: Cardiology</b> <br /> EN.580.485 Computational Medicine: Cardiology",
          required_credits: 2,
          criteria: "EN.580.485[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761921" },
          description:
            "<b>Computational Medicine: Cardiology Laboratory</b> <br /> EN.580.487 Computational Medicine: Cardiology Laboratory",
          required_credits: 1,
          criteria: "EN.580.487[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761922" },
          description:
            "<b>Core Electives</b> <br /> Select two of the following core electives (Note: These courses cannot be double-counted toward the 21-credit focus area requirement. Courses taken in excess of the 6 credit core elective requirement can be counted in a relevant focus area):<br /> EN.580.424 Neuroengineering and Lab <br /> EN.580.427 Microphysiological Systems and Lab <br />EN.580.452 Cell and Tissue Engineering Lab <br /> EN.580.453 Immunoengineering Principles and Applications <br />EN.580.454 Methods in Nucleic Acid Sequencing Lab <br /> EN.580.494 Build an Imager",
          required_credits: 6,
          criteria:
            "EN.580.424[C]^OR^EN.580.427[C]^OR^EN.580.452[C]^OR^EN.580.453[C]^OR^EN.580.454[C]^OR^EN.580.494[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761923" },
          description:
            "<b>Career Exploration</b> <br /> Career Exploration in BME is a 0-credit self-identified set of career related events (lectures, panels, journal clubs, etc.) beginning in the spring semester of year one and continuing until graduation. Career Exploration is administered through a Community Blackboard site; students will be enrolled by the department.",
          required_credits: 0,
          criteria: "EN Career Exploration[D]",
        },
      ],
    },
    {
      pathing: false,
      user_select: false,
      double_count: false,
      _id: { $oid: "61ddb0e735517ca56c761924" },
      name: "Basic Sciences",
      required_credits: 18,
      min_credits_per_course: 1,
      description:
        "Students who receive credit for AP Physics I and/or Physics II will receive a waiver for the laboratory course. This will reduce the required number of credits for Basic Sciences by 1 or 2 credits. Students are still required to complete at least 129 total credits for the degree.",
      criteria:
        "AS.171.101[C]^OR^AS.171.107[C]^OR^AS.171.102[C]^OR^AS.171.108[C]^OR^AS.173.111[C]^OR^AS.173.112[C]^OR^AS.030.101[C]^OR^AS.030.102[C]^OR^AS.030.105[C]^OR^AS.030.106[C]",
      fine_requirements: [
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761925" },
          description:
            "<b>General Physics I</b> <br /> AS.171.101 General Physics: Physical Science Majors I <br /> <i>OR</i> <br /> AS.171.107 General Physics for Physical Sciences Majors I (AL)",
          required_credits: 4,
          criteria: "AS.171.101[C]^OR^AS.171.107[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761926" },
          description:
            "<b>General Physics II</b> <br /> AS.171.102 General Physics: Physical Science Majors II <br /> <i>OR</i> <br /> AS.171.108 General Physics for Physical Sciences Majors II (AL)",
          required_credits: 4,
          criteria: "AS.171.102[C]^OR^AS.171.108[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761927" },
          description:
            "<b>General Physics Laboratory I</b> <br /> AS.173.111 General Physics Laboratory I",
          required_credits: 1,
          criteria: "AS.173.111[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761928" },
          description:
            "<b>General Physics Laboratory II</b> <br /> AS.173.112 General Physics Laboratory II",
          required_credits: 1,
          criteria: "AS.173.112[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761929" },
          description:
            "<b>Introductory Chemistry I</b> <br /> AS.030.101 Introductory Chemistry I",
          required_credits: 3,
          criteria: "AS.030.101[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76192a" },
          description:
            "<b>Introductory Chemistry II</b> <br /> AS.030.102 Introductory Chemistry II",
          required_credits: 3,
          criteria: "AS.030.102[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76192b" },
          description:
            "<b>Introductory Chemistry Laboratory I</b> <br /> AS.030.105 Introductory Chemistry Laboratory I",
          required_credits: 1,
          criteria: "AS.030.105[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76192c" },
          description:
            "<b>Introductory Chemistry Laboratory II</b> <br /> AS.030.106 Introductory Chemistry Laboratory II",
          required_credits: 1,
          criteria: "AS.030.106[C]",
        },
      ],
    },
    {
      pathing: false,
      user_select: false,
      double_count: false,
      _id: { $oid: "61ddb0e735517ca56c76192d" },
      name: "Mathematics",
      required_credits: 19,
      min_credits_per_course: 3,
      description:
        "Students who take an approved math course and receive 3 credits will have a total of 19 credits. Students are still required to complete at least 129 total credits for the degree.",
      criteria:
        "AS.110.108[C]^OR^AS.110.109[C]^OR^AS.110.202[C]^OR^AS.110.211[C]^OR^EN.553.291[C]^OR^EN.553.310[C]^OR^EN.553.311[C]^OR^EN.553.413[C]^OR^EN.553.430[C]^OR^EN.553.433[C]^OR^EN.560.348[C]",
      fine_requirements: [
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76192e" },
          description:
            "<b>Calculus I</b> <br /> AS.110.108 Calculus I (Physical Sciences & Engineering)",
          required_credits: 4,
          criteria: "AS.110.108[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76192f" },
          description:
            "<b>Calculus II</b> <br /> AS.110.109 Calculus II (Physical Sciences & Engineering)",
          required_credits: 4,
          criteria: "AS.110.109[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761930" },
          description:
            "<b>Calculus III</b> <br /> AS.110.202 Calculus III <br /> <i>OR</i> <br /> AS.110.211 Honors Multivariable Calculus",
          required_credits: 4,
          criteria: "AS.110.202[C]^OR^AS.110.211[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761931" },
          description:
            "<b>Linear Algebra and Differential Equations</b> <br /> EN.553.291 Linear Algebra and Differential Equations",
          required_credits: 4,
          criteria: "EN.553.291[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761932" },
          description:
            "<b>Probability and Statistics</b> <br /> Select one of the following: <br /> EN.553.310 Probability and Statistics for the Physical Sciences and Engineering <br />EN.553.311 Probability and Statistics for the Biological Sciences & Engineering <br /> EN.553.413 Applied Statistics and Data Analysis <br />EN.553.430 Introduction to Statistics <br /> EN.553.433 Monte Carlo Methods <br /> EN.560.348 Probability & Statistics in Civil Engineering",
          required_credits: 3,
          criteria:
            "EN.553.310[C]^OR^EN.553.311[C]^OR^EN.553.413[C]^OR^EN.553.430[C]^OR^EN.553.433[C]^OR^EN.560.348[C]",
        },
      ],
    },
    {
      pathing: false,
      user_select: false,
      double_count: false,
      _id: { $oid: "61ddb0e735517ca56c761933" },
      name: "Computer Programming",
      required_credits: 3,
      min_credits_per_course: 3,
      description:
        "Students are required to take at least one semester of programming from a select set of gateway computing courses.",
      criteria: "EN.500.112[C]^OR^EN.500.113[C]^OR^EN.500.114[C]",
      fine_requirements: [
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761934" },
          description:
            "<b>Computer Programming</b> <br /> Select one of the following: <br /> EN.500.112 Gateway Computing: JAVA <br /> EN.500.113 Gateway Computing: Python <br />EN.500.114 Gateway Computing: MATLAB",
          required_credits: 3,
          criteria: "EN.500.112[C]^OR^EN.500.113[C]^OR^EN.500.114[C]",
        },
      ],
    },
    {
      pathing: true,
      user_select: false,
      double_count: false,
      _id: { $oid: "61ddb0e735517ca56c761935" },
      name: "Focus Area",
      required_credits: 21,
      min_credits_per_course: 1,
      description:
        "The student must select at least 21 credits from the approved list of courses for a specific focus area. Coordinate with your advisor to determine the best combination of classes for you:",
      criteria:
        "BMED-BDS[T]^OR^BMED-CM[T]^OR^BMED-GSB[T]^OR^BMED-IMD[T]^OR^BMED-IMMU[T]^OR^BMED-NE[T]^OR^BMED-TCTE[T]",
      fine_requirements: [
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761936" },
          description: "<b>Biomedical Data Science</b>",
          required_credits: 21,
          criteria: "BMED-BDS[T]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761937" },
          description: "<b>Computational Medicine</b>",
          required_credits: 21,
          criteria: "BMED-CM[T]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761938" },
          description: "<b>Genomics and Systems Biology</b>",
          required_credits: 21,
          criteria: "BMED-GSB[T]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761939" },
          description: "<b>Imaging and Medical Devices</b>",
          required_credits: 21,
          criteria: "BMED-IMD[T]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76193a" },
          description: "<b>Imunoengineering</b>",
          required_credits: 21,
          criteria: "BMED-IMMU[T]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76193b" },
          description: "<b>Neuroengineering</b>",
          required_credits: 21,
          criteria: "BMED-NE[T]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76193c" },
          description: "<b>Translational Cell and Tissue Engineering</b>",
          required_credits: 21,
          criteria: "BMED-TCTE[T]",
        },
      ],
    },
    {
      pathing: true,
      user_select: false,
      double_count: false,
      _id: { $oid: "61ddb0e735517ca56c76193d" },
      name: "Design",
      required_credits: 6,
      min_credits_per_course: 3,
      description: "Select at least one of the following design sequences",
      criteria:
        "(EN.510.433[C]^OR^EN.510.434[C])^OR^(EN.520.462[C]^OR^EN.520.463[C])^OR^(EN.520.498[C]^OR^EN.520.499[C])^OR^(EN.540.400[C]^OR^EN.540.421[C])^OR^(EN.580.311[C]^OR^EN.580.312[C])^OR^(EN.580.411[C]^OR^EN.580.412[C])^OR^(EN.580.456[C]^OR^EN.580.457[C])^OR^(EN.580.471[C]^OR^EN.580.571[C])^OR^(EN.580.480[C]^OR^EN.580.481[C])^OR^(EN.580.580[C]^OR^EN.580.581[C])^OR^(EN.601.455[C]^OR^EN.601.456[C])^OR^(EN.580.437[C]^OR^EN.580.438[C])",
      fine_requirements: [
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76193e" },
          description:
            "<b>EN.500.308 and EN.500.309</b> <br /> EN.500.308 Multidisciplinary Engineering Design I <br /> EN.500.309 Advanced Multidisciplinary Design",
          required_credits: 6,
          criteria: "EN.500.308[C]^OR^EN.500.309[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76193f" },
          description:
            "<b>EN.510.433 and EN.510.434</b> <br /> EN.510.433 Senior Design Research <br /> EN.510.434 Senior Design/Research II <br />(This option must be approved by the Materials Science & Engineering Department)",
          required_credits: 6,
          criteria: "EN.510.433[C]^OR^EN.510.434[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761940" },
          description:
            "<b>EN.520.462 and EN.520.463</b> <br /> EN.520.462 Leading Innovation Design Team <br /> EN.520.463 Leading Innovation Design Team II",
          required_credits: 6,
          criteria: "EN.520.462[C]^OR^EN.520.463[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761941" },
          description:
            "<b>EN.520.498 and EN.520.499</b> <br /> EN.520.498 Senior Design Project <br /> EN.520.499 Senior Design Project II",
          required_credits: 6,
          criteria: "EN.520.498[C]^OR^EN.520.499[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761942" },
          description:
            "<b>EN.540.400 and EN.540.421</b> <br /> EN.540.400 Project in Design: Pharmacokinetics <br /> EN.540.421 Project in Design: Pharmacodynamics",
          required_credits: 6,
          criteria: "EN.540.400[C]^OR^EN.540.421[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761943" },
          description:
            "<b>EN.580.311 and EN.580.312</b> <br /> EN.580.311 Design Team Health Tech Project I <br /> EN.580.312 Design Team Health Tech Project II",
          required_credits: 6,
          criteria: "EN.580.311[C]^OR^EN.580.312[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761944" },
          description:
            "<b>EN.580.411 and EN.580.412</b> <br /> EN.580.411 Design Team Health Tech Project I <br /> EN.580.412 Design Team Health Tech Project II",
          required_credits: 6,
          criteria: "EN.580.411[C]^OR^EN.580.412[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761945" },
          description:
            "<b>EN.580.437 and EN.580.438</b> <br /> EN.580.437 Neuro Data Design I <br /> EN.580.438 Neuro Data Design II",
          required_credits: 6,
          criteria: "EN.580.437[C]^OR^EN.580.438[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761946" },
          description:
            "<b>EN.580.456 and EN.580.457</b> <br /> EN.580.456 Introduction to Rehabilitation Engineering <br /> EN.580.457 Introduction to Rehabilitation Engineering: Design Lab",
          required_credits: 6,
          criteria: "EN.580.456[C]^OR^EN.580.457[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761947" },
          description:
            "<b>EN.580.471 and EN.580.571</b> <br /> EN.580.471 Principles of Design of BME Instrumentation <br /> EN.580.571 Honors Instrumentation",
          required_credits: 6,
          criteria: "EN.580.471[C]^OR^EN.580.571[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761948" },
          description:
            "<b>EN.580.480 and EN.580.481</b> <br /> EN.580.480 Precision Care Medicine I <br /> EN.580.481 Precision Care Medicine II",
          required_credits: 6,
          criteria: "EN.580.480[C]^OR^EN.580.481[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c761949" },
          description:
            "<b>EN.580.580 and EN.580.581</b> <br /> EN.580.580 Senior Design Project I <br /> EN.580.581 Senior Design Project II",
          required_credits: 6,
          criteria: "EN.580.580[C]^OR^EN.580.581[C]",
        },
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76194a" },
          description:
            "<b>EN.601.455 and EN.601.456</b> <br /> EN.601.455 Computer Integrated Surgery I <br /> EN.601.456 Computer Integrated Surgery II",
          required_credits: 6,
          criteria: "EN.601.455[C]^OR^EN.601.456[C]",
        },
      ],
    },
    {
      pathing: false,
      user_select: false,
      double_count: false,
      _id: { $oid: "61ddb0e735517ca56c76194b" },
      name: "Other Electives",
      required_credits: 9,
      min_credits_per_course: 1,
      description: "Select 9 credits from any area.",
      criteria: "H[A]^OR^S[A]^OR^Q[A]^OR^N[A]^OR^E[A]",
      fine_requirements: [],
    },
    {
      pathing: false,
      user_select: false,
      double_count: false,
      _id: { $oid: "61ddb0e735517ca56c76194c" },
      name: "Humanities and Social Sciences",
      required_credits: 18,
      min_credits_per_course: 3,
      description:
        "Select courses to form a coherent program, relevant to the student’s goals. One course in which ethical and social issues related to technology or medicine is recommended.",
      criteria: "H[A]^OR^S[A]",
      fine_requirements: [
        {
          exclusive: false,
          _id: { $oid: "61ddb0e735517ca56c76194d" },
          description: "<b>One Upper Level class</b>",
          required_credits: 3,
          criteria: "(H[A]^OR^S[A])^AND^(Upper Level[L])",
        },
      ],
    },
    {
      pathing: false,
      user_select: false,
      double_count: true,
      _id: { $oid: "61ddb0e735517ca56c76194e" },
      name: "Writing Intensive",
      required_credits: 6,
      min_credits_per_course: 3,
      description:
        "Students are required to fulfill the university’s requirement of two writing intensive courses, each at least 3 credits. Students must receive at least a C- grade or better in these writing courses.",
      criteria: "Written Intensive[W]",
      fine_requirements: [],
    },
  ],
  __v: 0,
};
```
