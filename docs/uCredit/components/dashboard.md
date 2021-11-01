---
sidebar_label: Dashboard
sidebar_position: 1
---

# Dashboard Components

The page for all Dashboard related components.

## ``Dashboard``

![Dashboard](/img/components/dashboard.png)

The component displaying the user's current plan course list, plan info, plan management options, and popups.

## Course List Components

### ``CourseList``
![Course List](/img/components/course-list.png)

The container for ``YearDraggable`` and ``YearComponent`` components. Contains drag and drop logic.

### ``YearComponent``
![Year Component](/img/components/year-component.png)

Displays all semesters and courses planned for a year from all semesters (Fall, Winter (Intersession), Spring, Summer).
Holds multiple ``Semester`` components.

### ``YearDraggable``
The [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) wrapper for ``YearComponent``.
Used to enable drag and drop rearrangement of years in the ``CourseList`` component.

### ``YearSettingsDropdown``
![Year Settings Dropdown](/img/components/year-settings-dropdown.png)

Settings dropdown menu for year. Used to perform actions such as renaming, changing years, reselecting terms, or
deleting a year entirely.

### ``Semester``
![Semester](/img/components/semester.png)

A component representing a single semester, displaying all courses planned for that semester. 
Contains functionality to add new courses by opening the search popup.
Holds multiple``CourseComponent`` components.

### ``CourseComponent``
![Course Component](/img/components/course.png)

The course card for a single course, displayed under a ``Semester`` in a ``YearComponent`` in the ``CourseList``. 
On hover, displays buttons for course info, deletion, prereq overriding, and dragging.

### ``CourseDraggable``

The react-beautiful-dnd wrapper for ``CourseComponent``. Used to enable drag and drop rearrangement of
 ``CourseComponent`` components between different ``Semester`` components, even between different years.

### ``OverridePrereqPopup``
![Override Prereq Popup](/img/components/override-prereq-popup.png)

## Right Column Components

### Example Components
Note the ### instead of ##. Here, we would put description for a specific component.

### Another Component
Hopefully the documentation for each component isn't super long. Read the code for implementation details,
the documentation should be a compilation of existing comments, but also putting things in a human readable context.