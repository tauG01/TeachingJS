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

//Accessing HTML using JS
var header = document.getElementById("myheader");
header.style = "color: white; background-color:red";

//arrays
var luckyNumbers = [4, 8, 15, 16, "twenty", false];
// indexes:         0  1   2   3      4        5

document.write(luckyNumbers + "<br>");

luckyNumbers[0] = 90;

document.write(luckyNumbers + "<br>");

document.write(luckyNumbers.length + "<br><br>");

//N Dimensional Arrays

var numberGrid =[[1,2],[3,4]];

document.write(numberGrid + "<br>"); //returns all array elements
document.write(numberGrid[0] + "<br>"); //returns 1,2
document.write(numberGrid[0][0] + "<br>"); //returns 1
document.write(numberGrid[1][1] + "<br><br>"); //returns 4

//Array functions
var friends1 = [];
friends1.push("Oscar");
friends1.push("Angella");
friends1.push("John");
friends1.pop("Oscar");

var friends2 = new Array();
friends2.push("Fred");
friends2.push("Tau G");
friends1.push("Rex");
friends1.pop("Tau G");

document.write(friends1 + "<br>");
document.write(friends2 + "<br>");
document.write(friends1.sort() + "<br>");
document.write(friends1.indexOf("Angella")+ "<br><br>");

//Objects
var student = {
    name: "John Doe",
    major: "Computer Science",
    age: 19,
    gpa: 3.75
}

student.name = "Jane Doe";
document.write("Name: " + student.name + "<br>");
document.write("Major: " + student.major + "<br>");
document.write("Age: " + student.age + "<br>");
document.write("GPA: " + student.gpa + "<br><br>");

//Functions
function addNumbers(num1, num2){
    return num1 + num2;
}

//calling the function
document.write(addNumbers(4, 60));

