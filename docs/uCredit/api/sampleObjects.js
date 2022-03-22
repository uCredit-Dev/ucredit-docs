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
