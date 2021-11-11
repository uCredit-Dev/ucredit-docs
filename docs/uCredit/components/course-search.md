---
sidebar_label: Course Search
sidebar_position: 2
---

# Course Search
Course search components would go here. There are three different parts to Course Search, though, so this
might be a very long page.

## Query Components

### ``Form``
![PlanAdd](/img/components/course-search/form.png)

The search field component. Parent of ``Filters`` component. Typing in the component
searches for courses in the current year/semester. Contains all course searching related logic.

### ``Filters``
![PlanAdd](/img/components/course-search/filters.png)

Lists all the course search filter options. Changing them dispatches the appropriate
actions to the redux store to adjust the search filters.

### ``SearchList``
![PlanAdd](/img/components/course-search/search-list.png)

Lists all the current searched courses as ``CourseCard`` components. Seperates courses into
different pages, which can be navigated between.

### ``CourseCard``
![PlanAdd](/img/components/course-search/course-card.png)

A single course displayed on the ``SearchList`` component. Clicking a course card updates
the inspected course in the ``CourseDisplay`` component, showing relevant infoabout that course.

## Search Result Components

### ``CourseDisplay``
![PlanAdd](/img/components/course-search/course-display.png)

Contains ``SisCourse`` component, which displays detailed information about a selected course from search.
Also contains logic for adding courses to the plan and updating credit distributions accordingly.

### ``SisCourse``
![PlanAdd](/img/components/course-search/sis-course.png)

Displays all relevant information for a Sis Course from search. Parent of ``CourseVersion``, ``CourseEvalSection``,
and ``CourseEvalCard`` components. Contains logic for year, term, and area dropdown selections, based on course info.

### ``CourseVersion``
![PlanAdd](/img/components/course-search/course-version.png)

A component showing the specific version of the course at a particular semester/year and all relevant information,
including term, number, areas, departments, tags, credits, restrictions, level, and whether or not it is a writing intensive.
Child of ``SisCourse`` component. Parent of ``PrereqDisplay``, ``PrereqDropdown``, ``CourseEvalCard`` and
``CourseEvalSection`` components, which contain more info related to prereqs and course evals.

### ``CourseEvalSection``
![PlanAdd](/img/components/course-search/course-eval-section.png)

Section displaying multiple clickable ``CourseEvalCard`` components which display course evals for specific courses.
Child of ``CourseVersion`` component.

### ``CourseEvalCard``
![PlanAdd](/img/components/course-search/course-eval-card.png)

A single course eval card showing information for student evaluation summaries for a specific course. Displays a number
of stars equivalent to course rating out of 5. Child of ``CourseEvalSection`` component.

### ``Placeholder``
![PlanAdd](/img/components/course-search/placeholder.png)

A menu used to add a placeholder course representing a custom number of credits, tags, and areas. Accessed via the
``CourseDisplay`` popup.

## Prereq Components

### ``PrereqDisplay``
![PlanAdd](/img/components/course-search/prereq-display.png)

A bullet-list display of all the possible prereqs for a course, shown in as part of the course display popup.

Recursively parses prereq text from store to create nested ``PrereqDropdown`` components with correctly
versioned years for prereq courses. Clicking on any of the displayed prereq courses opens that course in
the ``CourseDisplay`` component.

Also determines and displays whether certain prereqs are satisfied or not

### ``PrereqDropdown``
![PlanAdd](/img/components/course-search/prereq-dropdown.png)

An openable-closeable prereq bullet point. Can be recursively nested with more
``PrereqDropdown`` components. Tracks whether or not the current prereq is satisfied.
