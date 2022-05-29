---
sidebar_label: Basic Web Development Skills Test
sidebar_position: 2
---

# Basic Web Development Skills Test

## Introduction

Can you replicate the website below using HTML, CSS, and JavaScript? When you click the “zzz” button, the website should suggest six best times to wake up based on 6 sleep cycles from the current time.

### SleepTimeApp

![SleepTimeApp](/img/systems/sleeptime-pg2.png)

Deployed version link: https://cs280spring.github.io/sleeptime-app/

## Test Your Knowledge!

<details>
<summary>What is the code behind the first sentence “If you go to bed...wake up at...”?</summary>

```
<p>If you go to bed NOW, you should wake up at...</p>
```

</details>

<details>
<summary>What is the code behind the last four sentences?</summary>

```
<p>It takes the average human fourteen minutes to fall asleep.</p>
<p>If you head to bed right now, you should try to wake up at one of the following times:</p>
<p>11:44 PM or 1:14 AM or 2:44 AM or 4:14 AM or 5:44 AM or 7:14 AM</p>
<p>A good night's sleep consists of 5-6 complete sleep cycles.</p>
```

</details>

<details>
<summary>What is the code to generate a window alert window saying “buzz!” when “zzz” button is clicked?</summary>

```
<button onclick="window.alert('buzz!')">zzz</button>
```

</details>

<details>
<summary>What provides access to the browser’s debugging console?</summary>

```
console.log()
```

</details>

<details>
<summary>How would you write a JavaScript function named handleOnClickEvent() and call it when button is clicked?</summary>

```
<script>
function handleOnClickEvent() {
window.alert('buzz!');
console.log('fizz!');
}
</script>

<button onclick="handleOnClickEvent()">zzz</button>

```

</details>

<details>
<summary>The text color is aliceblue and the background color is darkblue. What is the code to center the body text with specified text color and background color?</summary>

```
<body style="text-align: center;
    color: aliceblue;
    background-color: darkblue;"
>
```

</details>

<details>
<summary>What is the purpose of a div tag in HTML?</summary>
HTML &lt;div&gt; tag defines a division or section in an HTML document.
</details>

<details>
<summary>What method returns the element that has the ID attribute with the specified value?</summary>
getElementById()
</details>

<details>
<summary>What method returns the first element of DOM that matches a specified CSS selector in the document?</summary>
querySelector()
</details>

<details>
<summary>What does DOM stand for?</summary>
DOM stands for Document Object Model. 
</details>

<details>
<summary>How do you separate style from content?</summary>
Use &lt;style&gt; element instead of inline style attributes. Or better, move all styling into a separate file. 
</details>

<details>
<summary>If styling is in separate file, then what code should replace &lt;style&gt; on the index.html file?</summary>

```
<link rel="stylesheet" href="style.css">
```

</details>

<details>
<summary>If scripts are in separate file, then what code should replace &lt;script&gt; on the index.html file?</summary>

```
<script src="script.js"></script>
```

</details>

## Date Object (Step 10)

Step 10 Link: https://cs280spring.github.io/01-sleeptime/step_10.html

### Date.now()

returns the numeric value corresponding to the current time; the number of milliseconds elapsed since 1/1/1970 00:00:00 UTC, with leap seconds ignored.

### Date.prototype.toLocaleTimeString()

returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.

![PrototypeDefinition](/img/systems/prototype_def.png)

## Calculate sleep times (Step 11)

Our goal is to write code that will implement the algorithm described below and add it after the first three lines in the handleOnClickEvent() function.

```
function handleOnClickEvent() {
    let output = document.querySelector(".output");
    output.style.display = "block";
    let hours = document.getElementById('hours');
```

### Algorithm

- When the `zzz` button is clicked, we want to record the current time;
- Allow 14 minutes to fall asleep;
- Create six cycles of 90 minutes each;
- Display the cycles as suggested wake-up times.
  Make sure to use the Date object and functions in your algorithm.

### Answer

<details>
<summary>Click on the toggle to see the solution code</summary>

```
<script>
function handleOnClickEvent() {
    let output = document.querySelector(".output");
    output.style.display = "block";
    let hours = document.getElementById('hours');

    // When the zzz button is clicked, we want to record the current time;
    let now = Date.now();

    // Allow 14 minutes to fall asleep;
    let minute = 60 * 1000; // milliseconds
    now += 14 * minute;

    // Create six cycles of 90 minutes each;
    let hoursString = "";
    for (let c = 1; c <= 6; c++) {
        now += 90 * minute; // a sleep cycle passed!
        let cycle = new Date(now);
        hoursString += cycle.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        });
        if (c < 6) {
        hoursString += ", ";
        }
    }

    // Display the cycles as suggested wake-up times.
    hours.innerText = hoursString;
}
</script>

```

</details>
