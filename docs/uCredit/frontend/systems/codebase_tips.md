---
sidebar_label: How to start working on large codebase
sidebar_position: 2
---

# How to start working on large codebase

## General advice

**First**, recognize that you CANNOT understand everything in the codebase unless you have LOTS of time to waste.

Set a specific goal: “I want to understand how a specific feature works!”

- Some front end user interactions:
  - I want to understand how we show courses as people type course names/numbers
  - I want to understand how we add course to a specific plan (how do we associate a specific course to a specific year)
  - I want to understand how we track degree progress and display it
  - I want to understand how we check for pre reqs and display warning popups

**Second**, make a diagram of the user’s journey: What steps does the user take to make a 4-year plan on uCredit?

<details>
<summary>Example diagram of uCredit user's journey</summary>

```
1. Main landing page:
    a. Can click “log in” (top right) or “get started” (middle) - both bring user to [https://ucredit.me/login](https://ucredit.me/login)
    b. Can click “contact us” (brings up application form) to join team
2. Click login at homepage → login page
    a. JHU Login
    b. Continue as guest
3. Dashboard
    a. Header
        1. Click on the comments icon (shows comments from other users? It shows up blank for me)
        2. Click on the notifications icon
        3. Click on three bars
            1. Reviewer dashboard (shows reviewees)
            2. Sign out
    b. Year
        1. Toggle year (expand/collapse)
        2. Rename year (all)
        3. Change year (all)
        4. Select terms (all except AP equivalents)
        5. Remove (all except AP equivalents)
    c. Semester
        1. Hover over + sign and click text bubble to add comment
    d. Course
        1. To add new course
            1. Click + sign next to any semester
            2. Shows search bar for courses
            3. Type in course name or number
            4. Click on course
            5. Click “Add Course”
        2. To update course
            1. Click on any course already in the plan
            2. Can update term, year, and area
            3. Click “Update Course”
    e. Click on bar graph icon below the three bars icon
        1. Create new plan
        2. Degree progress
        3. Edit plan
            1. Rename plan
            2. View/Add majors
            3. Share
            4. Add year
            5. Delete plan
        4. Reviewers
            1. Add or remove reviewers
```

</details>

**Third**, read existing code with a specific goal from the first step in mind. Or, you could try to find code that generates certain steps in user’s journey from the second step.

## More Tips!

1. Ctrl-click on an element in VSCode to find its definition
2. Practice top to bottom approach (be able to look at high level feature on website and identify its source code in the codebase)
   <details>
     <summary>Top to bottom example</summary>
     <div>
       <div>
         Website feature: adding a course to fall 2021 semester.
         <br></br>
         <b>Where in the codebase can we locate this function?</b>
         <br></br>
         <img src="/img/systems/top_to_bottom_question.png" />
       </div>
       <br></br>
       <details>
         <summary>Answer</summary>
         <div>
           <b>File location</b>: lib > components > popups > course-search >
           search-results > CourseDisplay.tsx
           <br></br>
           <b>Important code</b>: CourseDisplay function component which contains
           the addCourse function
           <img src="/img/systems/top_to_bottom_answer.png" />
         </div>
       </details>
     </div>
   </details>
3. Practice bottom to top approach (be able to look at any code snippet in the codebase and identify which high level feature or user interaction it generates on the website)
   {" "}
   <details>
     <summary>Bottom to top example</summary>
     <div>
       <div>
         <b>File location</b>: lib > components > dashboard > degree-info >
         DistributionBarsJSX.tsx
         <br></br>
         Which feature on uCredit website does the following code snippet render?
         Feel free to open the file and examine the code.
       </div>
       <br></br>
       <details>
         <summary>Answer</summary>
         <div>
           The code generates the blue distribution bars in Degree Progress.
           <img src="/img/systems/bottom_to_top_answer.png" />
         </div>
       </details>
     </div>
   </details>
4. Use React Developer Tools

### React Developer Tools

React Developer Tools is a Chrome DevTools extension that allows you to inspect the React component hierarchies. It is very helpful in understanding the React code behind ucredit.me and debugging.

1. Install React Developer Tools from Chrome Store.

![](/img/systems/rdt_step1.png)

2. Pin it on the Chrome extensions bar.

![](/img/systems/rdt_step2.png)

3. Right click on local uCredit website > Inspect > Find **Components**.

![](/img/systems/rdt_step3.png)

4. Click on **Components**. Now, you will be able to see names of root React components and their subcomponents.

![](/img/systems/rdt_step4.png)

5. React Developer Tools is useful when practicing bottom to top approach because you can click on any component in the tree and the high level feature it renders will be highlighted on the website. For example, when you click on **YearDraggable**, the corresponding year on the plan gets highlighted.

![](/img/systems/rdt_step5.png)

6. React Developer Tools also shows props, hooks, relations, and even source file for each highlighted component. For example, when you click on the **Semester**, you can see its props.

![](/img/systems/rdt_step6.png)

## Tips from uCredit senior members

### Matt's Overview of frontend codebase

(coming soon)

### Make your own structure director of uCredit codebase (from Andy)

1. Start with a high level feature/functionality breakdown of the uCredit page. What user interactions occur and where and when do they happen? (For example, a user can add courses (user interaction) on the plan dashboard (where) when they click on the plus sign next to the semester, search for the course, and click add course.
2. Open up the codebase and search where the code is located for each feature/functionality. (For example, the files for creating the plan dashboard with years and semesters are located in this directory…)

Example of old structure directory of uCredit (needs to be updated):
![](/img/systems/old_structure_directory.png)

Try making your own first and compare it with the solution.

<details>
<summary>Solution</summary>

<div>
  <b>lib</b>
  <ul>
    <li>appStore</li>
    <li>components</li>
    <ul>
      <li>dashboard</li>
      <ul>
        <li>course-list</li>
        <ul>
          <li>horizontal</li>
          <li>vertical</li>
        </ul>
        <li>degree-info</li>
        <li>menus</li>
        <ul>
          <li>comments</li>
          <li>reviewers</li>
        </ul>
        <li>index.tsx</li>
      </ul>
      <li>landing-page</li>
      <li>popups</li>
      <ul>
        <li>course-search</li>
        <ul>
          <li>cart</li>
          <li>prereqs</li>
          <li>query-components</li>
          <li>search-results</li>
          <li>Cart.tsx</li>
          <li>Search.tsx</li>
        </ul>
        <li>more popup files</li>
      </ul>
      <li>reviewer</li>
    </ul>
    <li>resources</li>
    <ul>
      <li>redux_sample</li>
    </ul>
    <li>slices</li>
    <ul>
      <li>currentPlanSlice.ts</li>
      <li>experimentSlice.ts</li>
      <li>popupSlice.ts</li>
      <li>searchSlice.ts</li>
      <li>userSlice.ts</li>
    </ul>
    <li>index.css</li>
  </ul>
  <b>pages</b>
  <ul>
    <li>login</li>
    <ul>
      <li>[[...token]].tsx</li>
    </ul>
    <li>reviewer</li>
    <ul>
      <li>[[...id].tsx</li>
      <li>Index.tsx</li>
    </ul>
    <li>_app.tsx</li>
    <li>dashboard.tsx</li>
    <li>index.tsx</li>
    <li>share.tsx</li>
  </ul>
  <b>public</b>
  <ul>
    <li>img</li>
    <li>static</li>
    <li>svg</li>
  </ul>
</div>

</details>

### Andy's Codebase Questions

1. How are the Course/Semester/Year components composed in the Dashboard?

   <details>
     <summary>Answer</summary>
     <ul>
       <li>
       Straightforward answer: YearComponent -> Semester -> CourseDraggable -> CourseComponent. Years have multiple semesters which have multiple courses.
       </li>
       <li>Detailed answer (subject to change as codebase develops):</li>
       <ul>
       <li>The Year component (located in YearComponent.tsx) takes courses data from the Redux store and parses them in updateSemesterCourses helper method called in the useEffect hook. It then generates and renders Semester components in the getDisplayedSemesters helper method</li>
       <li>The Semester component (located in Semester.tsx) takes in its courses as props and renders the appropriate CourseDraggable components</li>
       <li>The CourseDraggable component (located in CourseDraggable) wraps the CourseComponent and provides draggable functionality</li>
       <li>Finally, the CourseComponent displays course information</li>
       </ul>
     </ul>
   </details>

2. How are components composed in the CourseSearch popup?

   <details>
     <summary>Answer</summary>
     Split into two main areas: search and course display
     <ul>
       <li>Search related components are located in /search-results and /query-components folders. The search-results directory contains search result display related components (e.g. the results list, individual course result cards), while query-components contains components related to actually searching (e.g. filters, the input form)</li>
       <li>The main CourseDisplay.tsx component is also located in search-results. This is the main information display on the right side which showcases the selected course info, review information, and prerequisites</li>
     </ul>
   </details>

3. Where is the search logic located? Can you generally tell how the search algorithm works? (challenging)
   <details>
     <summary>Answer</summary>
     Search logic is in the course search popup, in Search.tsx, but more specifically, in the query-components directory in the Form and formUtils files.
   </details>
