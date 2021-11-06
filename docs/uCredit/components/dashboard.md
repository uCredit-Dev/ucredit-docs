---
sidebar_label: Dashboard
sidebar_position: 1
---

# Dashboard Components

The page for all Dashboard related components.

## Main Components

### ``Dashboard``

![Dashboard](/img/components/dashboard.png)

The component displaying the user's current plan course list, plan info, plan management options, and popups.

### ``HandleUserEntryDummy``
Handles user entry and login logic. Does not render anything (not visible on page).

**Props**

| Prop       | Type           | Description                                    |
|------------|----------------|------------------------------------------------|
| setLoginId | Function       | Callback used to set login id based on cookies |
| id         | string \| null | ???                                            |

### ``InfoMenu``
Info menu shows degree plan and degree information. Container for ``Distributions`` component.

TODO : image

### ``UserSection``
Top bar containing user greeting and log out button.

**Props**

| Prop    | Type   | Description         |
|---------|--------|---------------------|
| loginId | string | The user's login id |

TODO : image

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

### ``ActionBar``
Top bar used for plan management. Used to add, remove, and switch plans.
Contains ``PlanChoose`` and ``ShareLinksPopup``.

### ``PlanChoose``
Dropdown menu for selecting user plan to display on the dashboard.

### ``ShareLinksPopup``
Popup that displays a sharable link to the current plan. Displayed when the SHARE button on 
``ActionBar`` is clicked

### ``Distributions``
Container for ``DistributionBars`` displaying the current credit fulfilments and degree progression.
Displayed conditionally as a child of ``InfoMenu``

### ``DistributionBars``
Displays the current degree progression based on filled credits. Individual requirements are shown
using ``CourseBar`` components. Has button to open up ``FineDistribution`` displays for more detailed information.

### ``CourseBar``
Displays a specific distribution's current progress and description on hover.

### ``FineDistribution``
Component that displays the fine requirements of a specific distribution.

### ``InfoCards``
Deprecated component.

### ``DistributionPopup``
Deprecated component.