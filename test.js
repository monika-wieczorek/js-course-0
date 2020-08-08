alert("Hello, World!");

/*this is two line
comment in js*/

//this is a single line comment

//Basic rules of JavaScript
/*
*JavaScript is case sensitive
*Contains statements ending with ;
*is not sensitive to whitespaces and line breaks
*oneline comments //
*multiple line comments 
*JavaScript runs from top to bottom
*JS has dinamic types as they can change in the single variable - although it might be confusing
*we do not need to specify type of var when we initialize it
*/

//Variables in JS

var myVariable1;
myVariable1 = 10;

var myVariable2 = "Hello";

//Basic Math Operators
var myVar = 5; //assignment operator
5 + 5; //addition operator, may work also as concatenation
10 - 5; // substruction operator
10*5; //multiplication operator
20/10; //division operator
"Hello" + " " + "David";

//short-hand Math Methods
myVar += 5; //take myVar, add 5 to it and assing new number to myVar (myVar += 5) = (myVar = myVar+5)
myVar *= 5; // the same as myVar=myVar*5
myVar /= 5; // the same as myVar=myVar/5
myVar -= 5; // the same as myVar=myVar-5

myVar++; // displays myVar and then add 1 to it
++myVar; // add 1 to myVar and displays the sum

--myVar; // substract 1 from myVar

myVar = "Monika";

/*"document" = object and "write" = method*/ 
document.write(myVar); // prints out the message on a webpage
console.log(myVar); // prints out the message to the console

document.write(100/5);


//booleans in JavaScript
/*are used to check conditions of certains scenarios*/
// single "=" assigns a value to the variable
// double "==" compares two values, acts as equal sign

Boolean(7 > 5); // checks truesy/falsy of certain elements/values
Boolean(0); // is the only number in JS that is false

/* Boolean("hello") = true, but Boolean("") = false*/










