//importing
//import {Book} from './book.js';

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
document.write(addNumbers(4, 60) + "<br><br>");

//Event handlers
var header = document.getElementById("myheader");

header.addEventListener("click", function(){
    alert("Clicked "+ header.id);
})

var title = document.getElementById("mytitle");

title.addEventListener("mouseover", function(){
    alert("This is page title "+ title.id);
})

//if else
var year1GPA = window.prompt("Enter your year 1 GPA: ");
var year2GPA = window.prompt("Enter your year 2 GPA: ");
var year3GPA = window.prompt("Enter your year 3 GPA: ");

if (year1GPA > year2GPA && year1GPA > year3GPA){
    alert("You performed well in your first year");
}else if(year2GPA > year1GPA && year2GPA > year3GPA){
    alert("You performed well in your second year");
}else if((year3GPA > year1GPA && year3GPA > year2GPA)){
    alert("You performed well in your third year");
}else{
    alert("Not defined");
}

//Switch statements
var myGrade = window.prompt("Enter your grade: ");

switch (myGrade){
    case "A":
        alert("You got a distinction");
        break;
    case "B":
        alert("You got a credit");
        break;
    case "C":
        alert("You got a pass");
        break;
    case "F":
        alert("You got a fail");
        break;
    default:
        alert(myGrade + " is not defined");
}

//Loops

//While loop
var index1 = 1;

while(index1 <= 5){
    document.write(index1);
    index1 ++;
}

document.write("<br><br>");

//Do while loop
var index2 = 5;

do{
    document.write(index2);
    index2 ++;
}while(index2 <= 9);

document.write("<br><br>");

//for loop
for(var index3=1; index3 <= 5; index3++){
    document.write(index3);
}

document.write("<br><br>");

//forEach
var luckyNums = [4, 8, 15, 16, 23, 42];

luckyNums.forEach(function(luckyNum){
    document.write(luckyNum + " , ")
});

document.write("<br><br>");

//Exception catching
try{
    //throw "Something went wrong"
    var x = y + 9;
}catch(err){
    document.write(err)
}finally{
    //this code always gets executed
}

document.write("<br><br>");

//Classes & Objects

//class
class Book{
    
    //constructor
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    //function
    readBook(){
        document.write("Reading " + this.title + " by " + this.author);
    }
}


//object
var book1 = new Book("Harry Potter", "JK Rowling");

document.write (book1.title + "<br>");
book1.readBook();

document.write("<br><br>");

//inheritance

class Chef{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    makeChicken(){
        document.write("The chef makes chicken <br>");
    }

    makeSalad(){
        document.write("The chef makes salad <br>");
    }

    makeSpecialDish(){
        document.write("The chef makes special dish <br>");
    }
}

class ItalianChef extends Chef{
    constructor(name, age, countryOfOrigin){
        super(name, age);
        this.countryOfOrigin = countryOfOrigin;
    }

    makePasta(){
        document.write("The chef makes pasta <br>");
    }

    //overrridden
    makeSpecialDish(){
        document.write("The chef makes chicken parm <br>");
    }
}

var myChef = new Chef("John Doe", 50);
document.write("Chef: " + myChef.name + "<br>");
document.write("Age: "+ myChef.age + "<br>");
myChef.makeSpecialDish();

document.write("<br><br>");

var myItalianChef = new ItalianChef("Jane Doe", 55, "Italy");
document.write("Chef: " + myItalianChef.name + "<br>");
document.write("Age: "+ myItalianChef.age + "<br>");
document.write("Country of origin: "+ myItalianChef.countryOfOrigin + "<br>");
myItalianChef.makeSpecialDish();


