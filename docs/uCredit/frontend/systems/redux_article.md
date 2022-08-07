---
sidebar_label: Redux Onboarding
sidebar_position: 7
---

# Redux Onboarding

# More Libraries? Really???

<img src="https://c.tenor.com/DiGdttvmynEAAAAd/shirakami-fubuki-fubuki-fail.gif" width="240" height="260" />

Yup. More libraries. After this is NextJS. Ask Matt why our tech stack is so fat. Get ready for a bunch of words.

# Okay, let’s go ahead and get started!

We’ll start off with a quick crash course on Redux!

<iframe width="515" height="290" src="https://www.youtube.com/embed/_shA5Xwe8_4" title="Redux in 100 Seconds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

gFireship goes a little fast! Let’s break things down one by one.

## Managing state between multiple components can be complex

When developing web applications and user interfaces, we often have to keep track of state to make sure the app operates correctly.

Remember DonutClicker?

<img src="/img/systems/poor_donut_crying.png" width="150" height="150"/>
<div class="caption">poor donut crying because he also had to learn redux.</div>
<br></br>
<img src="/img/systems/react_unidirectional_flow.png" width="550" height="450"/>

This is how the relationships play out for a single piece of state with only two levels of components! How would this change if we had multiple different CounterDisplays at different parts of the app? What if we had even more kinds of DonutButtons, or other kinds of desserts we wanted to keep track of? What if we wanted to have a high score board for donuts clicked? This hierarchy would grow quickly!

Now imagine an even more complex app that has to keep track of a lot of different kinds of data for different parts of the UI. What happens when your application has 10 different components? 50? 100? **With more and more components handling more and more state, it can be complicated to manage state between components that have to interact with each other.**

## Redux is a state management solution which adds a global store

Redux tries to solve this problem of complex state management by creating a single application store which keeps track of important state in a predictable way. Technically, you can’t just edit this store directly, though, you have to “dispatch” special objects called “actions” to special functions called “reducers” to update the state immutably. But right now that’s a lot of mumbo jumbo. First, we’ll just focus on why a global store is important!

<img src="/img/systems/redux_store_meme.png" width="600" height="350"/>
<div class="caption">real footage of a redux store, 1627 a.d.</div>
<br></br>
For uCredit, we use Redux because we’re developing a relatively larger-scale application which contains a lot of nested components. For example, when a user wants to add a new course to the dashboard, they first click on “add course” to open the search popup and then type in their query. **Right off the bat, there’s a lot of information we’re keeping track of!** Just for this feature alone, we have to know:

<img src="/img/systems/redux_store_ucredit_feature.png" width="600" height="350"/>

- Whether or not the user is trying to search for courses
- What Semester/Year the user clicked to add the course to
- What the user typed to search
- Any additional search filters the user might have selected
- All the relevant courses to the search (fetched from our API)
- What course is currently selected, and all relevant info about that course (prereqs, tags, terms, credits, etc)

The list goes on and on, and this is just a small slice of our application! But you can already see how each piece of data is used in different part of the app. The Semester/Year is displayed in the top bar of the popup. The relevant courses are used to create card components populating the list on the left column. The currently selected course is used to populate the course display component on the right, which consists of several subcomponents for the course info, prerequisites, course evaluations, etc.

You can also imagine how different components affect each other, too. Typing another keyword into the search bar would retrieve a different set of relevant courses, so we would have to repopulate the search results list on the left and all the appropriate result cards. Clicking a new course would have to update the course display on the right. Even closing the popup would have to redisplay the original dashboard. It’s complicated. And you can imagine how the data is used under the hood to make things operate smoothly, too!

<img src="https://c.tenor.com/dlJSiLUJNmsAAAAS/math-calculate.gif" width="300" height="200"/>
<div class="caption">it be like that</div>
<br></br>

Technically, we could just handle everything using React’s built in hooks, like useState and useEffect, but it’s similar to how we could also technically just ditch React and use vanilla HTML/CSS/JS instead. **Given the context and scale of uCredit, Redux makes things easier in a lot of ways!**

# But how does it work, really?

<img src="/img/systems/bad_things.png" width="400" height="200"/>
<div class="caption">bad things always come in threes 😭</div>
<br></br>

Now we’ve covered Redux at a high level, time to dig into the docs! Read the following articles (this may take some time) <br></br>
[https://redux.js.org/tutorials/essentials/part-1-overview-concepts](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

- Read the entire thing! The “What is Redux” section is what I tried to explain above, but it’s good to hear from the creators of Redux themselves
- It’s important to note that we’re not using Redux directly, we’re also using React-Redux and Redux-Toolkit which make things easier for us in a lot of ways. Don’t worry about it too much, but be aware that there is a distinction between Redux and Redux-Toolkit, which is what we use.

Let’s take a look at this gif again to see if it makes sense:

![this gif haunts my dreams](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
this gif haunts my dreams

The individual aspects of this should make sense! Make sure you understand every part:

- UI events triggered by the user are used to **dispatch** **actions**
- Actions go through **reducers** in the **store** to update **state**
- **State** is used by **selectors** to update the UI

![ive actually never seen this movie before lmao](/img/systems/circle_of_life.png)
ive actually never seen this movie before lmao

## Example Repo Walkthrough

Next, we’re gonna take a look at some Redux code in action! For this, we’re going to be using the default Redux counter app that’s automatically created when you install React-Redux using Create-React-App. CRA is the most common way developers set up React projects.

I’ve made some minor changes (mostly deleting boilerplate code) so instead of using CRA directly, we’re going clone the following repo:

[onboarding-redux-ts](https://github.com/qin-andy/onboarding-redux-ts)

Make sure to run “npm i” to install dependences, then “npm start” to start it up!

In this repo, there are two separate branches for the counter app. First, we’re gonna take a look at the default template that ships with Redux. I set up a branch for it, so run the following command in terminal:

```jsx
git switch counter-default
```

The sidebar should look like this:

![Untitled](/img/systems/redux_sidebar.png)

Read the following article and follow along in the repository. Try playing around with the code a little and see if you can understand the differences

**Note: the above repository is in TypeScript, while the code in the docs are not!** See if you can still follow along, and pay attention to where the TypeScript repo looks different from the code shown in the docs. We’ll get to it later!

Anyways, the article:

[https://redux.js.org/tutorials/essentials/part-2-app-structure#the-react-counter-component](https://redux.js.org/tutorials/essentials/part-2-app-structure#the-react-counter-component)

- Skip the section about the Redux dev-tools. While admittedly very cool, not super important right now.
- Also skip the section on Async Thunk actions. uCredit does most of is Redux-related async stuff differently.
- The counterSlice.ts file might look a little different from how it looks on the docs too! We’ll get to that in a sec.

**Key Takeaways**

- The global **app store** is typically split up into separate **slices** for different features of the app
- In slices, we set up the state we expect and define **reducers** to manipulate the state in predictable, predefined ways
- In our view components, we use **selector** hooks to read parts of the state. When the state changes, components that read state from selectors will “React” and rerender themselves with the updated data!
- In our components, we **dispatch** actions using reducers imported from the slice in order to update the state!

## Some notes on TypeScript

<img src="/img/systems/cow_read.png" width="200" height="500"/>
<div class="caption">dae read this as a kid? just me?</div>
<br></br>

Note how the counterSlice looks slightly different in TypeScript! It contains this extra bit about the CounterState interface and the initial state for the slice.

![Untitled](/img/systems/cow_read_1.png)

This makes sure our redux store is typed correctly, and we don’t accidentally change something to an invalid value!

Imagine if we make a mistake typing the status in initial state, like this:

![Untitled](/img/systems/cow_read_2.png)

Notice how TypeScript highlights the mistake for us! If we hover over it, we see:

![Untitled](/img/systems/cow_read_3.png)

Pretty neat! Generally, TypeScript is a huge buff to intellisense. Try hovering over different variables to see their types, or functions to see their return values and parameters!

Another TypeScript difference is in the counter component, where we have the following code:

![Untitled](/img/systems/cow_read_4.png)

Further down, we can see incrementAmount is of type String that’s used in a controlled component to get the text hte user types. We take the text typed and we use the Number() function to convert it to a number. If that converse fails because the user typed a character instead, the boolean operator turns it into 0 instead. Pretty neat!

## Switching Up the Skeleton

![code skeleton! skeleton! get it?](/img/systems/skeleton.png)
code skeleton! skeleton! get it?

While the example Repo is nice, the uCredit repository is set up slightly differently. Run the following command in terminal to switch branches;

```jsx
git switch counter-reorganized
```

Now the file structure on the side should look like this:

![Untitled](/img/systems/final_file_structure.png)

It’s pretty similar, but this is a lot closer to how uCredit organizes its components. Features aren’t paired with slices directly, so components are located in a different directory. In our frontend, styles are provided through a CSS framework called Tailwind, so we don’t use css modules either, but we’ll roll with what we have.

Take a look around and see if you it makes sense are things are organized.

For an in-codebase example, take a look at our search slice! Take a look at the following code:

[https://github.com/uCredit-Dev/ucredit_frontend_typescript/blob/master/lib/slices/searchSlice.ts](https://github.com/uCredit-Dev/ucredit_frontend_typescript/blob/master/lib/slices/searchSlice.ts)

Does everything make sense? How the state is declared, the reducers, and the selectors?

Then take a look at a component that directly interacts with our searchSlice state:

[https://github.com/uCredit-Dev/ucredit_frontend_typescript/blob/master/lib/components/popups/course-search/query-components/Form.tsx](https://github.com/uCredit-Dev/ucredit_frontend_typescript/blob/master/lib/components/popups/course-search/query-components/Form.tsx)

The above component is the form component which contains all the logic for searching. See if you can trace how the searchFilters are selected and an example of where they’re used in the component!

# And that’s a wrap (sorta)!

<img src="https://c.tenor.com/DWP_0tNBl_wAAAAd/guoba-dance.gif" width="200" height="500"/>
<div class="caption">congrats on getting this far.. im so srory..</div>
<br></br>
We’ve just only begun to scratch the surface of what Redux can do, but hopefully this should be a good surface level dive to understanding how selectors, dispatching actions, and state works!

Good luck out there.. it’s a big world.
