## Week 2: A closer look at your first map
#### *or: exactly what the heck did we do last week?*

### Overview of this week
1. A whirlwind overview of JavaScript, HTML, and CSS.  
    Having been unceremoniously dumped into the middle of a web map last week, I'd like to take a step back and examine what exactly was going on with those wonderful maps you made. 
2. The anatomy of a web map (using Leaflet as our case study).
3. JQuery and what it is in relation to JavaScript.

### Anatomy of a web (map) page
1. In the beginning, there was the DOCTYPE.
  ```html
  <!DOCTYPE html>
  ```
    Any self-respecting `.html` file will begin with a declaration to the world what sort of document it is. While there exists a [wide variety](https://en.wikipedia.org/wiki/Document_type_declaration) of doctypes, the **only one** you need to concern yourself with is just plain old `html`. With the advent of HTML5 (the 5th version of the specification for the markup language HTML), it's not really worth too much of your time thinking about the DOCTYPE. As wikipedia neatly puts it: 'The DOCTYPE is retained in HTML5 as a "mostly useless, but required" header'

2. Following the DOCTYPE, you encounter the `<head>` of your document. Basically, the head element contains metadata about your web page, such as:
  + `<title>`, which is what you see in the browser tab and search results.
  + Various `<meta>` elements with different attributes such as name and content. These include `viewport`, which is *crucial* for mobile web map development, `charset`, which is *crucial* if you are working with diacritics (e.g. á or ö). Those two should be included in just about any web map you make.
  ```html
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
  + `<link>` elements to point to `stylesheets` that tell the browser loading your page how to style the content contained in the HTML. Should the text be red or black? 12px or 100px? The `href` attribute is where you put the URL to the stylesheet in question. Example:
  ```html
    <link rel="stylesheet" href="//cdn.leafletjs.com/leaflet-0.7.5/leaflet.css" />
  ```
  + `<style>` element is a way to use CSS within your HTML, rather than storing it in a CSS file. It's really just a matter of convenience. In general it's a good idea to keep your CSS, HTML, and JS in separate files (if only because it opens up lots of text editor features)
  + `<script>` elements allow you to incorporate JavaScript into your web page. Either directly:
  ```html
  <script>alert("Where in the world is Carmen San Diego?");</script>
  ```
   or by supplying a URL via a `src` attribute (kinda like `<link>`s using the `href` attribute) 

   ```html
   <script src="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.js"></script>
   ```

3. The main attraction of any HTML page is the `<body>`. This is where the actual content of your page goes. You might have a thousand lines of JavaScript  There's [waaaay too much](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to cover in this space, but just know that when making web maps at some point you'll need to create a container of some sort (usually a `<div>` element).


### CSS classes, ids, selectors
For map stuff, you mainly want to get proficient with identifying relevant sections of CSS and modifying existing styles. That said, you'll probably want to get a more holistic CSS educations at some point down the line. One of the more confusing and potentially frustrating aspects of CSS has to do with *selector specificity*, which is the mechanism by which your browser decides which CSS rule to actually use when styling a page. This article from [CSS Tricks](https://css-tricks.com/specifics-on-css-specificity/) can be helpful, but here's an example of what I mean by specificity. Say you have a header element like this:

```html
<h1 id="greeting" class="cowboy-greeting">Howdy</h1>
```

And the following CSS **rules** (think of each pair of { } and the stuff inside it as rules governing the selection that precedes it):

```css
h1.cowboy-greeting{
  color: red;
}

#greeting {
  color:green;
}

.cowboy-greeting {
  color: blue;
}
```

What color do you think the word "Howdy" will look like?

Take a look [here](http://jsbin.com/yiyukequka/edit?html,css,output).

Having a sense of how selectors work and how specificity comes into play will save you *many* headaches down the line.

### JavaScript and JQuery

#### variables 
- create an empty variable using `var <name of variable>;` 
- create and set a value using `var <name of variable> = <value of variable>;`
- you can change the value of a variable anytime, to anything. This isn't legal in some other languages (like Java), but for the most part, it's a big time saver for our purposes.

#### functions
- create them like this `function foobar(){alert("hi")};`
- or like this `var foobar = function(){alert("hi")};`
- [**scope**](http://www.smashingmagazine.com/2009/08/what-you-need-to-know-about-javascript-scope/) is an important concept!
  - most importantly, any variable defined within a function is only "visible" within that function. If you try to access it elsewhere, you'll get an error. This means you really need to be careful about how you assign `var` statements. If you refer to a variable without one, it's implied you wanted to create a *global variable*, which is a variable accessible from anywhere. For example:

```javascript
var fruit = "persimmon";

function imaFunction(){
    var fruit = "ugli fruit";
};

function imanotherFunction(){
    fruit = "kumquat";
};
console.log("1: " + fruit);
imaFunction();
console.log("2: " + fruit);
imanotherFunction();
console.log("3: " + fruit);
//what is going on here?

```
(http://jsfiddle.net/rprmcdo9/5/)


#### [JQuery](http://jquery.com)
##### Tagline: "write less, do more"
JQuery is a swiss army knife for working with JavaScript. An example:

```javascript
#plain old javascript
var ele = document.getElementById("someElement");
ele.style["background-color"] = "red";

#JQuery
$("#someElement").css("background-color", "red");

#these both do the same, but JQuery is a lot more space friendly. The real 
#power comes in with more complicated selections. The $("") clause lets select 
#elements in the DOM using CSS selectors.
```

##### loops
Take an array such as this
```javascript
var fruits = ["apple", "orange", "kiwi", "grapefruit"];
```

To loop through this array using plain javascript, you'd do something like this:

```javascript
for (var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
```

Which is really weird looking. With JQuery, it's more straightforward (once you get a hang of the syntax). JQuery uses:

```javascript
$(fruits).each(function(index, item){
  console.log(item);
});
```

##### Events
JQuery is used a lot to handle *events*. JavaScript is called an *event driven language*, because most of it is written to respond to events such as a user clicking somewhere, or dragging, or typing on the keyboard. JQuery can be used to do something when a user clicks on an element selection. 

```javascript
$("#some-id").click(function(event){ // this function is called a handler
  #do something with the click
  alert("Someone clicked! Red alert!");
  $("body").css("background-color", "red");
})
```

##### AJAX
For our purposes, a really important aspect of JQuery is the ability to make AJAX requests. AJAX originally meant Asynchronous JavaScript and XML, but it now more generally refers to asynchronous JavaScript stuff. Web maps are all examples of asynchronous JavaScript in action.

##### An interlude to talk about JSON and GeoJSON
JSON (and its derivative geofocused cousin GeoJSON) are **data exchange formats** that emphasize human readability and conciseness. JSON is **the** standard on the web for moving data around (having replaced XML), and GeoJSON is quickly getting to that point for spatial data.

Take this table (think of it as a spreadsheet:

Type   | Squishiness      | Color
-------|------------------|-------
apple  | not squishy      | red
banana | very squishy     | yellow
kiwi   | somewhat squishy | brown

If we looked at that as JSON, it would look like this:

```json
{"fruits":[
    {"type":"apple", "squishiness":"not squishy", "color": "red"},
    {"type":"banana", "squishiness":"very squishy", "color": "yellow"},
    {"type":"kiwi", "squishiness":"somewhat squishy", "color": "brown"}
]}
```

JSON allows you to *nest* data, making it far more flexible than a row based spreadsheet or CSV. For example, GeoJSON looks like this:

```json
{
  "type": "Feature",
  "properties": {
    "route_number": "22",
    "category": "bus stop"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      -93.24751138687132,
      44.971249995945435
    ]
  }
}
```

Read more about GeoJSON [here](http://geojson.org/) and [here](http://www.macwright.org/2015/03/23/geojson-second-bite.html). You can make some GeoJSON [here](http://geojson.io/).  It's worth reading a bit about what GeoJSON is and playing around with drawing some. 

##### Back to JQuery

JQuery allows you to request and use data from a remote server in your map. For example, there's some GeoJSON living at this URL.

```
https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson
```

Let's go to http://umn-gis-5574.github.io/week2/2.html and play around.

### Your assignment

#### Optional materials for learning more HTML, CSS, JS, and JQuery
This Khan Academy course is excellent. If you have any doubts about your profiency with this stuff, please complete this course for next week.  
https://www.khanacademy.org/computing/computer-programming/html-css

Same goes for this JavaScript tutorial from the MDN.  
https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics

And a JQuery tutorial. It can do a lot of stuff.  
https://learn.jquery.com/about-jquery/how-jquery-works/

#### A more complicated webpage
Using what we learned today, create a webpage with the following elements.

1. An html page titled `assignment.html` including:
  - DOCTYPE
  - head tag
    + meta tag for charset
    + meta tag for viewport
    + Link tag pointing to leaflet.css
    + Link tag for `style.css`, a file you create where you'll write your CSS code (save the file in the same folder as `assignment.html`)
  - body tag
    + div tag with `id` set to `map-container`
    + div tag with `class` set to `red box`
    + Script tags linking to leaflet and jquery.
    + Script tag pointing to `script.js`, a file you create where you'll write your JS (save the file in the same folder as `assignment.html`)

2. A CSS file called `style.css`
  - a rule for the id `map-container` that sets the `height` to `400px;` and the `width` to `500px;`
  - a rule for the class `box` setting `height` to `200px;` and `width` to `200px;`
  - a rule for the class `red` setting `background-color` to `tomato;` and `border` to `3px double red;` 

3. A JavaScript file called `script.js`
  - create a Leaflet map 
  - set the initial view to 44.971724, -93.243239 and zoom level 16
  - add a basemap using the url `http://{s}.tile.osm.org/{z}/{x}/{y}.png`
  - request GeoJSON from the url `https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson` using JQuery
    + add a GeoJSON based layer to the map using the requested GeoJSON
  - Use JQuery to select the div with `class` set to `red box`
    + Add a click handler that does something in response to a user clicking on the div

#### "Extra Credit"
  - add a button to your html that when clicked will request GeoJSON and add it as a layer to the map
  - add a button to your html that when clicked will announce the current time and date
  - add a layer switcher control to your map and an additional basemap
  - request and add a GeoJSON layer using the relative url `green-line-eastbound.geojson`
  - add more GeoJSON from the url `http://opendata.minneapolismn.gov/datasets/cb8d4b1dbad0470380e5f46f1e75e962_0.geojson` 
    + attach a popup to each feature that displays the station name
    + style each feature to be red circle instead of the default blue marker

#### Some guidelines
You're going to need to read documentation, review what we've done, look at some source code, and ask each other some questions. You can use the "Issues" feature of GitHub to ask questions for the group. I'll answer them, but would really like all of you to feel comfortable contributing as well! Remember the console (ctrl-I or cmd-shift-I (Mac)) is your friend!



