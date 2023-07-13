# Make a Digital Clock

## Learn and Practice HTML, CSS, and JavaScripts by making a Digital Clock
    
Making a digital clock is a fun and interactive way to show the current time on a web page. With HTML, CSS, and JavaScript, we can build a clock that updates in real-time. This tutorial will guide you through the process of making a digital clock using these technologies.

To see the live demonstration of the Digital Clock, click [here](https://khurramshahzadlali.github.io/digital-clock/). Simply follow the steps provided below to make your own version of the clock.

*Let's get started*

### HTML Section

Begin by creating a new HTML file in your preferred text editor. Open the file and proceed to add the necessary code step by step, following the instructions provided.

#### Step 1: Add Document Type Declaration

Add the document type declaration by including the following code at the beginning of your HTML file:

```html
<!DOCTYPE html>
```

#### Step 2: Create HTML Structure

Create the HTML structure by adding the `<html>` element after the document type declaration. Nest the `<head>` and `<body>` elements within the `<html>` element.

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

#### Step 3: Add Meta Tags

Nest meta tags in the `<head>` element as shown below:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
</head>
```

#### Step 4: Add Title Tag

Nest a `<title>` element in the `<head>` element and give it a title for the HTML page:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
  <title>Digital Clock</title>
</head>
```

#### Step 5: Add Heading

Nest an `<h2>` element with the text "Digital Clock" in the `<body>` element:

```html
<body>
  <h2>Digital Clock</h2>
</body>
```

#### Step 6: Create Clock Container

Nest a`<div>` element with the class "clock" below the `<h2>` element:

```html
<body>
  <h2>Digital Clock</h2>
  <div class="clock"></div>
</body>
```

#### Step 7: Create Clock Segments

Nest four more `<div>` elements within the clock container:

```html
<div class="clock">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### Step 8: Add Clock Digits

Within each of the newly created three `<div>` elements, nest two `<span>` elements and within fouth `div` nest one `span` element:

```html
<div class="clock">
  <div>
    <span></span>
    <span></span>
  </div>
  <div>
    <span></span>
    <span></span>
  </div>
  <div>
    <span></span>
    <span></span>
  </div>
  <div>
    <span></span>
  </div>
</div>
```

#### Step 9: Assign IDs and Classes

Assign the following IDs and classes to the elements:

- Give the first `<span>` element in each of the three `<div>` elements the IDs "hours", "minutes", and "seconds", respectively.
- Give the `<span>` element nested within the fourth `<div>` element the ID "ampm".
- Give the second `<span>` elements nested in the first three `<div>` elements the class "text".
- Give the `<span>` element nested in the fourth `<div>` element the class "text".

```html
<div class="clock">
  <div>
    <span id="hours"></span>
    <span class="text"></span>
  </div>
  <div>
    <span id="minutes"></span>
    <span class="text"></span>
  </div>
  <div>
    <span id="seconds"></span>
    <span class="text"></span>
  </div>
  <div>
    <span id="ampm" class="text"></span>
  </div>
</div>
```

#### Step 10: Set Initial Values

Give the text "00" to each of the first three `<span>` elements with the IDs "hours", "minutes", and "seconds", respectively. Also, give the text "Hours", "Minutes", "Seconds", and "Am" to the `<span>` elements with the class "text" in the respective order.

```html
<div class="clock">
  <div>
    <span id="hours">00</span>
    <span class="text">Hour</span>
  </div>
  <div>
    <span id="minutes">00</span>
    <span class="text">Minutes</span>
  </div>
  <div>
    <span id="seconds">00</span>
    <span class="text">Seconds</span>
  </div>
  <div>
    <span id="ampm" class="text">Am</span>
  </div>
</div>
```

Now we have concluded the HTML section. In the next section, we will proceed with the CSS code to style the clock.

### CSS Section
Creating CSS styling will make the clock look attractive. To achieve this, we'll create a new CSS file called "index.css" and define the necessary styles.

#### Step 1: Link CSS File
Nest a `<link>` element in the `<head>` element and give it the name of the CSS file in the href attribute. Add the `rel` attribute with the value "stylesheet" and the `type` attribute with the value "text/css".

```html
<link href="index.css" rel="stylesheet" type="text/css">
```
#### Step 2: Target the Body Element

Target the body element to style the overall appearance of the clock.

|Property Name|	Property Value|	Styling Purpose|
|---|----|---|
|margin|	0|	Removes default margin|
|display|	flex|	Displays the body as a flex container|
|flex-direction|	column|	Aligns flex items vertically|
|align-items|	center|	Centers flex items horizontally|
|justify-content|	center|	Centers flex items vertically|
|height|	100vh	|Sets the height to 100% of the viewport height|
|background|	linear-gradient(#00bfff, #a5d6a7)	|Sets a gradient background color for the body|
|font-family	|sans-serif|	Specifies the font family for the body text|

```css
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(#00bfff, #a5d6a7);
  font-family: sans-serif;
}
```
#### Step 3: Target the Heading Element
Target the `<h2>` element to style the heading of the digital clock.

|Property Name|	Property Value|	Styling Purpose|
|---|---|---|
|text-transform	|uppercase	|Converts the text to uppercase|
|letter-spacing	|4px	|Adds spacing between characters|
|font-size	|14px	|Sets the font size to 14 pixels|
|text-align	|center|	Centers the text horizontally within the container|
```css
h2 {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 14px;
  text-align: center;
}
```
###2 Step 4: Target the Clock Container
Target the .clock class in the CSS file and set its display property to flex:

```css
.clock {
  display: flex;
}
```
#### Step 5: Target the Clock Segments
Target the .clock div elements in the CSS file and set their margin to 5px:

```css
.clock div {
  margin: 5px;
}
```

#### Step 6: Target the Clock Digits
Target the clock digit elements within the `.clock` class to style the individual digit display.

|Property Name|	Property Value|	Styling Purpose|
|---|---|---|
|width|	100px|	Sets the width of the clock digit element|
height|80px|Sets the height of the clock digit element|
|background-color|	lightgrey	|Sets the background color of the clock digit element|
|opacity|	0.9|	Sets the opacity of the clock digit element|
|display|	flex|Displays the clock digit element as a flex container|
|align-items|center|Centers the content vertically within the container|
|justify-content|center|Centers the content horizontally within the container|
|font-size|50px|Sets the font size of the clock digit|
|text-shadow|2px 2px 4px dimgray|Adds a shadow to the clock digit text|
```css
.clock span {
  width: 100px;
  height: 80px;
  background-color: lightgrey;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  text-shadow: 2px 2px 4px dimgray;
}
```
#### Step 7: Target the Text Elements
Target the text elements within the `.clock` class to style the labels for hours, minutes, seconds, and AM/PM.

|Property Name|	Property Value|	Styling Purpose|
|---|---|---|
|height|30px|Sets the height of the text element|
|opacity|0.7|Sets the opacity of the text element|
|display|flex|Displays the text element as a flex container|
|align-items|center|Centers the content vertically within the container|
|justify-content|center|Centers the content horizontally within the container|
|font-size|14px|Sets the font size of the text element|
|font-weight|400|Sets the font weight of the text element|
|text-transform|uppercase|Converts the text to uppercase|
```css
.clock .text {
  height: 30px;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
}
```
#### Step 8: Target the AM/PM Element
Target the AM/PM indicator element within the `.clock` class to style the AM/PM label.

|Property Name|Property Value|Styling Purpose|
|---|---|---|
|position|relative|Sets the position of the AM/PM element|
|bottom|-80px|Moves the element up by 80 pixels|
|width|50px|Sets the width of the AM/PM element|
```css
.clock #ampm {
  position: relative;
  bottom: -80px;
  width: 50px;
}
```
This concludes the CSS section of the project. In the next section, we will proceed with adding JavaScript code to make the digital clock functional.

### JavaScript Section
In the JavaScript section, we will write the necessary code to make our digital clock functional. JavaScript allows us to interact with HTML elements and update the clock display dynamically in real-time.

To begin, we will create a JavaScript file named "index.js". This file will contain the JavaScript code for our digital clock.

#### Step 1: Link JS File

To link the JavaScript file to our HTML document. Add the following line of code within the <head> or <body> section of your HTML file:

```html
<script src="index.js"></script>
```
#### Step 2: Create a Function
In this step, we will create a function called `updateClock()` that will be responsible for updating the digital clock display with the current time.
```js
function updateClock() {
}
```

#### Step 3: Create Variables
In this step, we will create four variables named `h`, `m`, `s`, and `ampm` within `updateClock()` function. These variables will be used to store the current hours, minutes, seconds, and AM/PM indicator, respectively.

```js
function updateClock() {
  // Create variables to store the current time components
  var h;
  var m;
  var s;
  var ampm;
}
```

#### Step 4: Assign Values to Variables
In this step, we will assign values to the variables h, m, s, and ampm by retrieving the current time using JavaScript's Date() object.
```js
function updateClock() {
  // Assign values to the current time components
  var h = new Date().getHours(),
      m = new Date().getMinutes(),
      s = new Date().getSeconds(),
      ampm; // Declare the ampm variable
  }

#### Step 5: Auto Change AM/PM Indicator
In this step, we will add an if-else logic to automatically update the `ampm` variable based on the value of the `h` variable. If the hour is greater than 12, the ampm variable will be set to "PM". Otherwise, it will be set to "AM".

```js
function updateClock() {
  // Assign values to the current time components
  var h = new Date().getHours(),
      m = new Date().getMinutes(),
      s = new Date().getSeconds(),
      ampm; // Declare the ampm variable
  
  // Auto change AM/PM indicator
  if (h > 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
}
```
#### Step 6: Add Leading Zeroes
In this step, we will use the ternary operator (?) to add a leading zero to the h, m, and s variables if they are less than 10. This will ensure that the digits are displayed properly in the clock.
```js
function updateClock() {
  // Assign values to the current time components
  var h = new Date().getHours(),
      m = new Date().getMinutes(),
      s = new Date().getSeconds(),
      ampm; // Declare the ampm variable
  
  // Auto change AM/PM indicator
  if (h > 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  
  // Add leading zeroes to the variables if necessary
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
}
```
#### Step 7: Manipulate the DOM
In this step, we will use the `getElementById()` method to access the HTML elements with below IDs:

"hours": Represents the element where the hours will be displayed.
"minutes": Represents the element where the minutes will be displayed.
"seconds": Represents the element where the seconds will be displayed.
"ampm": Represents the element where the AM/PM indicator will be displayed.
Update their `innerText` property with the values stored in the variables h, m, s, and ampm. This will update the clock display in the browser.
```js
function updateClock() {
  // Assign values to the current time components
  var h = new Date().getHours(),
      m = new Date().getMinutes(),
      s = new Date().getSeconds(),
      ampm; // Declare the ampm variable
  
  // Auto change AM/PM indicator
  if (h > 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  
  // Add leading zeros to time components if necessary
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  
  // Update the clock display in the browser
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
  document.getElementById("ampm").innerText = ampm;
}
```
#### Step 8: Update Clock Display Every Second
In this final step, we will use the `setInterval()` method to call the `updateClock()` function every second. This will ensure that the clock display is updated in real-time.
```js
// Call the updateClock() function every second
setInterval(updateClock, 1000);
```
By using `setInterval()`, we pass in the updateClock function as the first argument and specify a time interval of 1000 milliseconds (1 second). This will trigger the `updateClock()` function every second, keeping the clock display up to date.

That concludes the JavaScript section of creating a digital clock. The complete code should include all the steps mentioned above.

## Summary

Throughout this project, we have learned and practiced the fundamentals of HTML, CSS, and JavaScript by creating a digital clock. Let's summarize the outcomes achieved in each of these areas:

### HTML:
- Understanding the basic HTML structure and elements.
- Adding the necessary elements to create the layout of the digital clock.
- Using meta tags for character encoding and responsive design.
### CSS:

- Applying styles to the HTML elements to design the visual appearance of the digital clock.
- Using CSS properties like `margin`, `display`, `flexbox`, `background-color`, `font-family`, etc., to achieve the desired layout and styling.
- Selecting and targeting HTML elements using class and ID selectors.
### JavaScript:

- Creating a JavaScript file and linking it to the HTML document.
- Defining and calling functions to update the clock display.
- Retrieving the current time using the `Date()` object.
- Manipulating the DOM to update the clock display dynamically.
- Utilizing conditional (ternary) operator for logical operations.
- Using `setInterval()` to repeatedly call a function at specified intervals.
- By combining these three technologies, we have successfully created a digital clock that shows the current time accurately and updates in real-time. This project has provided hands-on experience in integrating HTML, CSS, and JavaScript to build a functional and interactive web component.

##### Credits
- Project Idea: Inspired by the "50 HTML, CSS, and JavaScript Projects" Udemy course by *Dr. Sahand Ghavidel*.
- Instructions: Written by *Khurram Shahzad*.
- Refinement Assistance: Provided by *ChatGPT*.

Special thanks to *Dr. Sahand Ghavidel* for the project idea and to *ChatGPT* for its valuable contributions in refining the instructions for this project.

>Please note that the code and implementation details provided in this project may have been modified and adapted based on the original idea and the collaborative refinement process.







