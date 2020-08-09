/* DOCUMENT OBJECT MODEL = DOM
* The DOM is an application programming interface
* We can use the DOM when we interact with webpage

    - add content to HTML document
    - delete content from HTML document
    - change content on HTML document

* DOM = HTML document
* Every HTML element in a document is an object e.g.
* <head></head>, <p></p>, etc. in an object in the eyes of DOM
* Nodes - everything that we can change in the document e.g.:
    - elements
    - text within elements
    - HTML attributes
*/

//document.getElementsByClassName("content");

/* textContent property:

var myTitle = document.getElementById("page-title");

myTitle.textContent = "and... another new title";
*/

/* innerHTML property:

var myTag = document.getElementsByTagName("p");

myTag[0].innerHTML = "<p>I want to change you to a new content</p>";
*/

/* getAttribute() method:

var link = document.getElementById("test");
​
link.getAttribute("href");
link.getAttribute("id");
link.getAttribute("class");
*/

/* setAttribute() method - sets new value to an attribute:

link.setAttribute("class", "Monika");
*/

//link.className - gives current class name
//link.className = "Piotr"; - sets new value to the class

/* setting a style with the use of JS

var title = document.getElementById("page-title");

title.setAttribute("style", "font-size: 50px; text-align: center");
 */

// OR

/* alternatively styles can be setup using below

title.style.fontSize = "35px";
title.style.color = "blue";
title.style.backgroundColor = "red";

*/

/* inserting elements into HTML

var newLi = document.createElement("li"); // creating new element
var newA = document.createElement("a");
​
var menu = document.getElementById("bullets").getElementsByTagName("ul")[0]; // coming to the place where we would like to reach

menu.appendChild(newLi); //adding new Li at the end
newLi.appendChild(newA);
newA.innerHTML = "This is a completly new link" // changing content

menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]); //adding new Li in the beginning

*/

/* removing and appending elements

var parent = document.getElementById("bullets").getElementsByTagName("ul")[0];
var child = parent.getElementsByTagName("li")[1];

parent.removeChild(child); // removes child definitely

var child1 = parent.getElementsByTagName("li")[2];

var removed = parent.removeChild(child1); // removes child but stores it somewhere

parent.appendChild(removed); //append removed child

*/

/* JS events
var title = document.getElementById("page-title");

title.onclick = function(){};
ƒ (){}
title.onclick = function(){
    alert("you ve clicked me!");
};
 */