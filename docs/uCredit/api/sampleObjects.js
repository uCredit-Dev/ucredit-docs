export const plan1 = {
  majors: ["B.S. Computer Science (NEW - 2021 & after)"],
  distribution_ids: [],
  _id: "623659ddb8316b8b54f77815",
  name: "Unnamed Plan",
  user_id: "mockUser",
  __v: 1,
  years: [
    {
      courses: [],
      plan_id: ["623659ddb8316b8b54f77815"],
      _id: "623659ddb8316b8b54f77817",
      name: "AP/Transfer",
      user_id: "mockUser",
      year: 0,
      __v: 0,
    },
    {
      courses: [
        {
          termOffered: [],
          tags: [],
          wi: false,
          taken: false,
          preReq: [],
          isPlaceholder: false,
          isTransfer: false,
          ratings: [],
          distribution_ids: [],
          _id: "62395837daa1f097d4062697",
          user_id: "mockUser",
          year_id: "623659ddb8316b8b54f7781a",
          plan_id: "623659ddb8316b8b54f77815",
          title: "Precalculus",
          term: "fall",
          year: "Freshman",
          credits: 4,
          number: "AS.110.105",
          area: "Q",
          version: "Fall 2021",
          __v: 0,
        },
        {
          termOffered: [],
          tags: [],
          wi: false,
          taken: false,
          preReq: [
            {
              Description:
                "Grade of C- or better in AS.110.107 OR AS.110.109 OR AS.110.113 OR AS.110.201 OR AS.110.212 OR AS.110.302, or a 5 or better on the AP BC exam.",
              Expression:
                "AS.110.107[C]^OR^AS.110.109[C]^OR^AS.110.113[C]^OR^AS.110.201[C]^OR^AS.110.212[C]^OR^AS.110.302[C]",
              IsNegative: "N",
            },
          ],
          isPlaceholder: false,
          isTransfer: false,
          ratings: [],
          distribution_ids: [],
          _id: "6239583cdaa1f097d40626b2",
          user_id: "mockUser",
          year_id: "623659ddb8316b8b54f7781a",
          plan_id: "623659ddb8316b8b54f77815",
          title: "Calculus III",
          term: "spring",
          year: "Freshman",
          credits: 4,
          number: "AS.110.202",
          area: "Q",
          version: "Spring 2022",
          __v: 0,
        },
      ],
      plan_id: ["623659ddb8316b8b54f77815"],
      _id: "623659ddb8316b8b54f7781a",
      name: "Freshman",
      user_id: "mockUser",
      year: 2021,
      __v: 0,
    },
    {
      courses: [],
      plan_id: ["623659ddb8316b8b54f77815"],
      _id: "623659ddb8316b8b54f7781c",
      name: "Sophomore",
      user_id: "mockUser",
      year: 2022,
      __v: 0,
    },
    {
      courses: [],
      plan_id: ["623659ddb8316b8b54f77815"],
      _id: "623659ddb8316b8b54f7781e",
      name: "Junior",
      user_id: "mockUser",
      year: 2023,
      __v: 0,
    },
    {
      courses: [],
      plan_id: ["623659ddb8316b8b54f77815"],
      _id: "623659ddb8316b8b54f77820",
      name: "Senior",
      user_id: "mockUser",
      year: 2024,
      __v: 0,
    },
  ],
};

export const plan2 = {
  _id: { $oid: "6239587fdaa1f097d40626ba" },
  majors: ["B.S. Molecular and Cellular Biology"],
  year_ids: [
    { $oid: "6239587fdaa1f097d40626bc" },
    { $oid: "62395880daa1f097d40626bf" },
    { $oid: "62395880daa1f097d40626c1" },
    { $oid: "62395880daa1f097d40626c3" },
    { $oid: "62395880daa1f097d40626c5" },
  ],
  distribution_ids: [],
  name: "Unnamed Plan",
  user_id: "mockUser",
  __v: 1,
};

export const planList = [plan1, plan2];

export const user1 = {
  _id: "freshmanDev",
  name: "Freshman Dev",
  email: "fakeremail@gmail.com",
  affiliation: "STUDENT",
  school: "Whiting School of Engineering",
  grade: "AE UG Freshman",
};

export const userList = [
  user1,
  {
    _id: "FreshmanDev",
    name: "FreshmanDev",
    email: "FreshmanDev@fakeemail.com",
    affiliation: "STAFF",
    school: "jooby hooby",
    grade: "AE UG Freshman",
  },
];

export const evaluation = {
  _id: "5fb03037b9947393d3d9c61a",
  n: "Freshman Seminar: Representing Roman Power: Sculpture as Political Rhetoric from Republic to Empire",
  num: "AS.010.222", // Number
  i: [
    "Amy Christine Miranda", // Full name of prof
  ], // Instructors
  a: "H", // Area
  w: "N", // Written intensive
  c: "3.00", // Credits
  d: "AS Classics^AS Dean's Teaching Fellowship Courses^AS Freshman Seminars^AS History of Art^",
  o: "0",
  e: [
    // emotes
    0, 0, 0, 0, 0, 0,
  ],
  rev: [
    // reviews
    {
      s: "F18", // When
      i: "Amy Miranda", // Professor
      c: "The best aspects of the course included the engaging professor who kept the sessions evenly balanced between lecture and discussion, the varied methods of teaching and grading, and the course structure which provided a foundation of understanding before moving into the chronological information. Some students felt that the readings were very dry and the amount of information covered could be overwhelming. Suggestions for improvement included more recent reading material, more class discussions, and more resources regarding the history of the sculptures.  Prospective students could benefit from an understanding of art history terminology and be prepared to keep up with the readings.",
      w: "4.80", // workload
      d: "4.80", // difficulty
      l: "4.80",
      g: "4.80", // grading
      t: "4.80",
      b: "1",
      o: "4.80",
    },
  ],
};

export const course1 = {
  _id: { $oid: "61ccf7f4723b840004850ea3" },
  termOffered: [],
  tags: [],
  wi: false,
  taken: false,
  preReq: [
    {
      Description: "Grade of C- or better in (AS.110.201 or AS.110.212)",
      Expression: "AS.110.201[C]^OR^AS.110.212[C]",
      IsNegative: "N",
    },
  ],
  isPlaceholder: false,
  isTransfer: false,
  ratings: [],
  distribution_ids: [
    { $oid: "61cce47ca2ec790004427212" },
    { $oid: "61cce47ca2ec790004427214" },
    { $oid: "61cce47ca2ec790004427210" },
    { $oid: "61cce47ca2ec790004427216" },
    { $oid: "61cce47ca2ec79000442721c" },
  ],
  user_id: "guestUser",
  year_id: { $oid: "61cce47ca2ec790004427209" },
  plan_id: { $oid: "61cce47ca2ec790004427200" },
  title: "Introduction to Abstract Algebra",
  term: "fall",
  year: "Junior",
  credits: 4,
  number: "AS.110.401",
  area: "Q",
  version: "Fall 2021",
  expireAt: { $date: "2021-12-31T00:06:11.259Z" },
  __v: 0,
};

export const course2 = {
  _id: { $oid: "61d1b2eccfd6b0000490b269" },
  termOffered: [],
  tags: [],
  wi: false,
  taken: false,
  preReq: [
    {
      Description:
        "Students must have completed Lab Safety training prior to registering for this class. To access the tutorial, login to myLearning and enter 458083 in the Search box to locate the appropriate module.",
      Expression: "EN.990.100[C]",
      IsNegative: "N",
    },
    {
      Description:
        "((AS.171.101 AND AS.171.102) OR (AS.171.107 AND AS.171.108) OR (AS.171.101 AND AS.171.108) OR (AS.171.107 AND AS.171.102) OR (EN.530.103 AND EN.530.104) OR (EN.530.123 AND EN.530.124)) AND ((AS.110.106 OR AS.110.108) AND AS.110.109 AND (AS.110.202 OR AS.110.211) AND (EN.550.291 OR AS.110.302) AND (EN.530.241 OR (EN.520.230 AND EN.520.231)))",
      Expression:
        "(^(^AS.171.101[C]^AND^AS.171.102[C]^)^OR^(^AS.171.107[C]^AND^AS.171.108[C]^)^OR^(^AS.171.101[C]^AND^AS.171.108[C]^)^OR^(^AS.171.107[C]^AND^AS.171.102[C]^)^OR^(^EN.530.103[C]^AND^EN.530.104[C]^)^OR^(^EN.530.123[C]^AND^EN.530.124[C]^)^)^AND^(^(^AS.110.106[C]^OR^AS.110.108[C]^)^AND^AS.110.109[C]^AND^(^AS.110.202[C]^OR^AS.110.211[C]^)^AND^(^EN.550.291[C]^OR^AS.110.302[C]^)^AND^(^EN.530.241[C]^OR^(^EN.520.230[C]^AND^EN.520.231[C]^)^)^)",
      IsNegative: "N",
    },
  ],
  isPlaceholder: false,
  isTransfer: false,
  ratings: [],
  distribution_ids: [
    { $oid: "61d19cb094752e0004306a65" },
    { $oid: "61d19cb094752e0004306a68" },
    { $oid: "61d19cb094752e0004306a6b" },
    { $oid: "61d19cb094752e0004306a6e" },
    { $oid: "61d19cb194752e0004306a71" },
    { $oid: "61d19cb194752e0004306a73" },
    { $oid: "61d19cb194752e0004306a79" },
  ],
  user_id: "guestUser",
  year_id: { $oid: "61d19caf94752e0004306a5a" },
  plan_id: { $oid: "61d19caf94752e0004306a55" },
  title: "Robot Sensors/Actuators",
  term: "fall",
  year: "Freshman",
  credits: 4,
  number: "EN.530.420",
  area: "E",
  version: "Fall 2021",
  expireAt: { $date: "2022-01-03T14:12:59.876Z" },
  __v: 0,
};

export const courseList = [course1, course2];

export const planReview1 = {
  _id: { $oid: "62365a80b8316b8b54f7785e" },
  reviewee_id: "mockUser",
  reviewer_id: "juniorDev",
  plan_id: "623659ddb8316b8b54f77815",
  requestTime: { $date: "2022-03-19T22:34:40.718Z" },
  status: "PENDING",
  __v: 0,
};

export const planReview2 = {
  _id: { $oid: "62365a80b8316b8b54f7785d" },
  reviewee_id: "mockUser",
  reviewer_id: "freshmanDev",
  plan_id: "623659ddb8316b8b54f77815",
  requestTime: { $date: "2022-03-19T22:34:40.718Z" },
  status: "UNDERREVIEW",
  __v: 0,
};

export const planReview3 = {
  _id: { $oid: "62365a80b8316b8b54f7785d" },
  reviewee_id: "freshmanDev",
  reviewer_id: "juniorDev",
  plan_id: "623659ddb8316b8b54f77815",
  requestTime: { $date: "2022-03-19T22:34:40.718Z" },
  status: "APPROVED",
  __v: 0,
};

export const planReviewList1 = [planReview1, planReview2];
export const planReviewList2 = [planReview1, planReview3];

export const SISCourse1 = {
  terms: [
    "Spring 2022",
    "Fall 2021",
    "Summer 2021",
    "Spring 2021",
    "Fall 2020",
    "Summer 2020",
    "Spring 2020",
    "Fall 2019",
    "Summer 2019",
    "Spring 2019",
    "Fall 2018",
  ],
  _id: "61d123ac0a0c831b9af9ae0f",
  title: "Calculus I (Biology and Social Sciences)",
  number: "AS.110.106",
  versions: [
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d140e04fdb90217b180dcd",
      areas: "Q",
      term: "Spring 2022",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d1409f4fdb90217b180560",
      areas: "Q",
      term: "Fall 2021",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [
        {
          RestrictionName: "ASEN Undergraduate Students only",
          Description: "",
        },
      ],
      _id: "61d140874fdb90217b1803a9",
      areas: "Q",
      term: "Summer 2021",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d140584fdb90217b17fcb1",
      areas: "Q",
      term: "Spring 2021",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d13fde4fdb90217b17f3be",
      areas: "Q",
      term: "Fall 2020",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d13fc84fdb90217b17f209",
      areas: "Q",
      term: "Summer 2020",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d13f9a4fdb90217b17ea41",
      areas: "Q",
      term: "Spring 2020",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d13f554fdb90217b17e042",
      areas: "Q",
      term: "Fall 2019",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d123dc0a0c831b9af9c544",
      areas: "Q",
      term: "Summer 2019",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d123bf0a0c831b9af9ba20",
      areas: "Q",
      term: "Spring 2019",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and\r\nderivatives, introduction to differential equations, functions of several variables, linear systems,\r\napplications for systems of linear differential equations, probability distributions. Many\r\napplications to the biological and social sciences will be discussed.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d123ac0a0c831b9af9ae10",
      areas: "Q",
      term: "Fall 2018",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "Differential and integral calculus. Includes analytic geometry, functions, limits, integrals and derivatives, introduction to differential equations, functions of several variables, linear systems, applications for systems of linear differential equations, probability distributions. Many applications to the biological and social sciences will be discussed.",
    },
  ],
  __v: 10,
};

export const SISCourse2 = {
  terms: ["Fall 2021", "Fall 2020", "Fall 2019", "Fall 2018"],
  _id: "61d123ac0a0c831b9af9ae15",
  title: "Honors Single Variable Calculus",
  number: "AS.110.113",
  versions: [
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d1409f4fdb90217b180564",
      areas: "Q",
      term: "Fall 2021",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "This is an honors alternative to the Calculus sequences AS.110.106-AS.110.107 or AS.110.108-AS.110.109 and meets the general requirement for both Calculus I and Calculus II (although the credit hours count for only one course). It is a more theoretical treatment of one variable differential and integral calculus and is based on our modern understanding of the real number system as explained by Cantor, Dedekind, and Weierstrass. Students who want to know the \"why's and how's\" of Calculus will find this course rewarding. Previous background in Calculus is not assumed. Students will learn differential Calculus (derivatives, differentiation, chain rule, optimization, related rates, etc), the theory of integration, the fundamental theorem(s) of Calculus, applications of integration, and Taylor series. Students should have a strong ability to learn mathematics quickly and on a higher level than that of the regular Calculus sequences.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d13fde4fdb90217b17f3c2",
      areas: "Q",
      term: "Fall 2020",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "This is an honors alternative to the Calculus sequences AS.110.106-AS.110.107 or AS.110.108-AS.110.109 and meets the general requirement for both Calculus I and Calculus II (although the credit hours count for only one course). It is a more theoretical treatment of one variable differential and integral calculus and is based on our modern understanding of the real number system as explained by Cantor, Dedekind, and Weierstrass. Students who want to know the \"why's and how's\" of Calculus will find this course rewarding. Previous background in Calculus is not assumed. Students will learn differential Calculus (derivatives, differentiation, chain rule, optimization, related rates, etc), the theory of integration, the fundamental theorem(s) of Calculus, applications of integration, and Taylor series. Students should have a strong ability to learn mathematics quickly and on a higher level than that of the regular Calculus sequences.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d13f554fdb90217b17e046",
      areas: "Q",
      term: "Fall 2019",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "This is an honors alternative to the Calculus sequences AS.110.106-AS.110.107 or AS.110.108-AS.110.109 and meets the general requirement for both Calculus I and Calculus II (although the credit hours count for only one course). It is a more theoretical treatment of one variable differential and integral calculus and is based on our modern understanding of the real number system as explained by Cantor, Dedekind, and Weierstrass. Students who want to know the \"why's and how's\" of Calculus will find this course rewarding. Previous background in Calculus is not assumed. Students will learn differential Calculus (derivatives, differentiation, chain rule, optimization, related rates, etc), the theory of integration, the fundamental theorem(s) of Calculus, applications of integration, and Taylor series. Students should have a strong ability to learn mathematics quickly and on a higher level than that of the regular Calculus sequences.",
    },
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d123ac0a0c831b9af9ae16",
      areas: "Q",
      term: "Fall 2018",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "This is an honors alternative to the Calculus sequences AS.110.106-AS.110.107 or AS.110.108-AS.110.109 and meets the general requirement for both Calculus I and Calculus II (although the credit hours count for only one course). It is a more theoretical treatment of one variable differential and integral calculus and is based on our modern understanding of the real number system as explained by Cantor, Dedekind, and Weierstrass. Students who want to know the \"why's and how's\" of Calculus will find this course rewarding. Previous background in Calculus is not assumed. Students will learn differential Calculus (derivatives, differentiation, chain rule, optimization, related rates, etc), the theory of integration, the fundamental theorem(s) of Calculus, applications of integration, and Taylor series. Students should have a strong ability to learn mathematics quickly and on a higher level than that of the regular Calculus sequences.",
    },
  ],
  __v: 3,
};

export const SISCourse3 = {
  terms: ["Fall 2021"],
  _id: "61d123ac0a0c831b9af9ae15",
  title: "Honors Single Variable Calculus",
  number: "AS.110.113",
  versions: [
    {
      department: "AS Mathematics",
      tags: [],
      preReq: [],
      coReq: [],
      restrictions: [],
      _id: "61d1409f4fdb90217b180564",
      areas: "Q",
      term: "Fall 2021",
      school: "Krieger School of Arts and Sciences",
      credits: 4,
      wi: false,
      level: "Lower Level Undergraduate",
      bio: "This is an honors alternative to the Calculus sequences AS.110.106-AS.110.107 or AS.110.108-AS.110.109 and meets the general requirement for both Calculus I and Calculus II (although the credit hours count for only one course). It is a more theoretical treatment of one variable differential and integral calculus and is based on our modern understanding of the real number system as explained by Cantor, Dedekind, and Weierstrass. Students who want to know the \"why's and how's\" of Calculus will find this course rewarding. Previous background in Calculus is not assumed. Students will learn differential Calculus (derivatives, differentiation, chain rule, optimization, related rates, etc), the theory of integration, the fundamental theorem(s) of Calculus, applications of integration, and Taylor series. Students should have a strong ability to learn mathematics quickly and on a higher level than that of the regular Calculus sequences.",
    },
  ],
  __v: 3,
};

export const SISCourseList = [SISCourse1, SISCourse2];

export const user = {
  _id: "mockUser",
  plan_ids: [
    { $oid: "623659ddb8316b8b54f77815" },
    { $oid: "6239587fdaa1f097d40626ba" },
  ],
  name: "mockUser",
  email: "mockUser@fakeemail.com",
  affiliation: "STAFF",
  grade: "AE UG Freshman",
  school: "jooby hooby",
  __v: 0,
};

export const freshmanYear = {
  _id: { $oid: "61cce47ca2ec790004427205" },
  courses: [],
  plan_id: [{ $oid: "61cce47ca2ec790004427200" }],
  name: "Freshman",
  user_id: "guestUser",
  year: 2021,
  expireAt: { $date: "2021-12-30T22:43:08.296Z" },
  __v: 0,
};

export const sophomoreYear = {
  _id: { $oid: "61cce47ca2ec790004427207" },
  courses: [],
  plan_id: [{ $oid: "61cce47ca2ec790004427200" }],
  name: "Sophomore",
  user_id: "guestUser",
  year: 2022,
  expireAt: { $date: "2021-12-30T22:43:08.305Z" },
  __v: 0,
};

export const juniorYear = {
  _id: { $oid: "61cce47ca2ec790004427209" },
  courses: [{ $oid: "61ccf7f4723b840004850ea3" }],
  plan_id: [{ $oid: "61cce47ca2ec790004427200" }],
  name: "Junior",
  user_id: "guestUser",
  year: 2023,
  expireAt: { $date: "2021-12-30T22:43:08.312Z" },
  __v: 0,
};

export const seniorYear = {
  _id: { $oid: "61cce47ca2ec79000442720b" },
  courses: [],
  plan_id: [{ $oid: "61cce47ca2ec790004427200" }],
  name: "Senior",
  user_id: "guestUser",
  year: 2024,
  expireAt: { $date: "2021-12-30T22:43:08.321Z" },
  __v: 0,
};

export const APYear = {
  _id: { $oid: "61cd000b723b840004850eb7" },
  courses: [],
  plan_id: [{ $oid: "61cd000b723b840004850eb5" }],
  name: "AP Equivalents",
  user_id: "guestUser",
  year: 2020,
  expireAt: { $date: "2021-12-31T00:40:43.334Z" },
  __v: 0,
};

export const yearList = [
  freshmanYear,
  sophomoreYear,
  juniorYear,
  seniorYear,
  APYear,
];

export const notification1 = {
  user_id: "qwu29",
  message: "You have created a plan!",
  quick_link_id: "61cd000b723b840004850eb5",
  link_type: "PLAN",
  read: false,
  date: "2021-12-31T00:40:43.334Z",
};

export const notification2 = {
  user_id: "qwu29",
  message: "Welcome to uCredit!",
  read: true,
  date: "2021-12-30T22:43:08.305Z",
};

export const notifications = [notification1, notification2];

export const comment1 = {
  _id: "625053fbde54f04374785e6e",
  visible_user_id: ["user1", "user2"],
  date: "2022-04-08T14:19:58.194+00:00",
  commenter_id: "user1",
  message: "Hi how are you?",
  thread_id: "625053fbde54f04374785e6c",
};

export const comment2 = {
  _id: "625053fbde54f04374785e6e",
  visible_user_id: ["user1", "user2"],
  date: "2022-04-09T14:19:58.194+00:00",
  commenter_id: "user2",
  message: "I'm good! How about you?",
  thread_id: "625053fbde54f04374785e6c",
};

export const comment_edit = {
  _id: "625053fbde54f04374785e6e",
  visible_user_id: ["user1", "user2"],
  date: "2022-04-09T14:19:58.194+00:00",
  commenter_id: "user2",
  message: "Just changed the message~",
  thread_id: "625053fbde54f04374785e6c",
};

export const thread_false = {
  _id: "625053fbde54f04374785e6c",
  plan_id: "62505477de54f04374785e93",
  location_type: "Course",
  location_id: "62505477de54f04374da9379",
  resolved: false,
};

export const thread_true = {
  _id: "625053fbde54f04374785e6c",
  plan_id: "62505477de54f04374785e93",
  location_type: "Course",
  location_id: "62505477de54f04374da9379",
  resolved: true,
};

export const threads = [
  {
    resolved: false,
    _id: "624f8bb1ccbfa9214879a4fa",
    plan_id: "623659ddb8316b8b54f77815",
    location_type: "Semester",
    location_id: "623659ddb8316b8b54f77820Intersession",
    __v: 0,
    comments: [
      {
        visible_user_id: ["juniorDev", "mockUser"],
        date: "2022-04-07T17:36:58.451Z",
        _id: "624f8bb1ccbfa9214879a4fc",
        commenter_id: {
          _id: "juniorDev",
          name: "Junior Dev",
        },
        message: "huh????",
        thread_id: "624f8bb1ccbfa9214879a4fa",
        __v: 0,
      },
      {
        visible_user_id: ["juniorDev", "mockUser"],
        date: "2022-04-07T17:36:58.451Z",
        _id: "624f9157ccbfa9214879a563",
        commenter_id: {
          _id: "juniorDev",
          name: "Junior Dev",
        },
        thread_id: "624f8bb1ccbfa9214879a4fa",
        message: "why...",
        __v: 0,
      },
    ],
  },
  {
    resolved: false,
    _id: "625049cdde54f04374785d72",
    plan_id: "623659ddb8316b8b54f77815",
    location_type: "Semester",
    location_id: "623659ddb8316b8b54f7781aFall",
    __v: 0,
    comments: [
      {
        visible_user_id: ["juniorDev", "mockUser"],
        date: "2022-04-08T14:19:58.194Z",
        _id: "625049cdde54f04374785d74",
        commenter_id: {
          _id: "juniorDev",
          name: "Junior Dev",
        },
        message: "new thread!",
        thread_id: "625049cdde54f04374785d72",
        __v: 0,
      },
    ],
  },
];
