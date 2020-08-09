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

link.className //gives current class name
link.className = "Piotr"; // sets new value to the class