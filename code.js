//3 DIFFERENT WAYS TO DISPLAY INFORMATION IN JS

//1. printing
document.write("<h4> Hello World <h4>");
document.write("<hr>")

//2. allert
alert("This is an alert");

//3. console
console.log("Logging to the console"); //nothing shows on the page | The code will output in the console | Go to inspect, then console.

//Variables
var Name = "John Doe"; //string with double quotes
var Gender = 'Male'; //string with single quotes

var age = 27; //Integer
var gpa = 3.6; //float

var isTall; //Boolean | true or false value
isTall = true;
document.write("He is tall: " + isTall + "<br> <br>");

//type casting and converting
document.write(125 + Number("25") + "<br>");
document.write(120 + parseInt("20") + "<br>");
document.write(120 + parseFloat("20.6") + "<br> <br>");

//strings
var Greeting = "Hello";
document.write(Greeting.length + "<br>");
document.write(Greeting.charAt(0) + "<br>");
document.write(Greeting.indexOf("llo") + "<br>");
document.write(Greeting.indexOf("z") + "<br> <br>");

//numbers
var num = 100;
num += 100;
document.write(num + "<br> <br>");

//math methods
document.write(Math.pow(2, 3) + "<br>");
document.write(Math.sqrt(36) + "<br>");
document.write(Math.round(3.6) + "<br> <br>")

//Getting user input
var myname = window.prompt("Enter your name: ");
alert("Your name is " + myname);
