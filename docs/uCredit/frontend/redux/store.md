---
sidebar_label: Intro
sidebar_position: 1
---

# Intro

![Redux Data Flow](/img/redux/redux-data-flow.gif)
via https://redux.js.org/tutorials/essentials/part-1-overview-concepts

uCredit is a web application which has a lot of moving parts and interdependent. As a result,
state management is a vital part of the uCredit frontend. It is primarily powered by [Redux](https://redux.js.org/).

:::info
More specifically, uCredit uses [React-Redux](https://react-redux.js.org/) and [Redux-Toolkit](https://redux-toolkit.js.org/).
[Read more about differences here.](https://redux.js.org/redux-toolkit/overview)
:::

Details about plan mangement, course searching, and distribution auditting, in addition to
UI management, like popup logic and hovers are all directly intertwined with uCredit's state mangement.
In order to understand how uCredit handles and organizes state, you must first understand Redux.