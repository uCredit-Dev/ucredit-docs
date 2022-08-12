---
sidebar_label: Tailwind Guide
sidebar_position: 4
---

# Tailwind Guide

Tailwind is a CSS framework designed to simplify the process of creating custom user interfaces. To understand more, watch this brief 2 minute
[video](https://www.youtube.com/watch?v=mr15Xzb1Ook&t=2s).

## General Resources

<ul>
<li><a href="https://tailwindcss.com/docs/installation">Tailwind Documentation</a></li>
<li><a href="https://tailwind.build/classes">List of all Tailwind Utility Classes (Look at this to see what you can do with Tailwind!!)</a></li>
<li><a href="https://tailwindcss.com/">Commonly Used Tailwind Utilities (Scroll down for the code samples)</a></li>
</ul>

## Tailwind Tutorials

<ul>
<li><a href="https://medium.com/codingthesmartway-com-blog/tailwind-css-for-absolute-beginners-3e1b5e8fe1a1">Tailwind for Absolute Beginners</a></li>
<li><a href="https://codete.com/blog/tailwind-css-tutorial-and-examples-for-beginners">Examples for Beginners</a></li>
</ul>

## Questions

<details>
<summary>What exactly is Tailwind CSS?</summary>
Tailwind is a utility-first CSS framework. It has a collection of utility classes that can be used to implement stylings like text color, spacing, border, and more. Tailwind uses a component approach, in which utility classes (each class responsible for a single styling element) can be grouped to render components in less code than CSS.
</details>
<details>
<summary>Why do we use Tailwind? (rather than just basic CSS or bootstrap?)</summary>
<ul>
<li>You could customize the UI yourself, but it takes a lot of time and it could make a really big file</li>
<li>The issue with bootstrap is that it’s not flexible</li>
<li>Tailwind has pre-styling that’s helpful to use like bootstrap (so you don't have to guesstimate), and unlike bootstrap, it’s flexible.</li>
<li>Every utility can be applied conditionally, which allows for responsive design.</li>
<li>Tailwind is localized -- you can change styles easily in the same file (without having to make another css file)</li>
<li>We can go to tailwind config to customize pre-styling</li>
</ul>
</details>
<details>
<summary>What are the downsides of Tailwind?</summary>
<ul>
<li>Clutters up HTML files because of lengthy code in-line (makes code less readable)</li>
<li>Code duplication among class names becomes inevitable as more code is written (see Concepts for a solution)</li>
<li>It takes a lot of time and experience to determine which pre-built classes to use and when</li>
<li>- Some features, like buttons, have to be manually added. In frameworks like Bootstrap, these features are provided. However, the lack of pre-built features means more customization is possible</li>
</ul>
</details>
<details>
<summary>What are the primary Tailwind directives that should be placed in the main CSS file?</summary>
<ul>
<li>@tailwind base;</li>
<li>@tailwind components;</li>
<li>@tailwind utilities;</li>
</ul>

</details>

## Concepts

[Fundamentals of Tailwind](https://tailwindcss.com/docs/functions-and-directives)

<ul>
<li>“@tailwind base” injects tailwind base styles and styles associated with manually added plugins</li>
<li>“@tailwind components” injects tailwind component classes and components classes from plugins</li>
<li>“@tailwind utilities” injects tailwind’s utilities and utilities from plugins</li>
<li>“@tailwind variants” allows tailwind to control where certain variants of each class, like hover, dark, focus, responsive, etc.</li>
<li>“@layer” indicates the type of a custom style (options are base, components, and utilities)</li>
<li>“@apply” can be used to extract Tailwind utilities to custom CSS</li>
</ul>

### Code Reuse

![](/img/systems/code_reuse.png)
[A helpful resource for Tailwind Code Reuse](https://tailwindcss.com/docs/reusing-styles)

## Project

Learn the basics of Tailwind CSS by building a Discord-inspired navigation bar from scratch. Specifically, you will be using utility classes to build responsive and animated UI elements faster. (credit to Fireship).

Skip to 1:39 - Set up
[Build a Discord-inspired Animated Navbar](https://www.youtube.com/watch?v=pfaSUYaSgRo&t=1s)
