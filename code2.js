//variables
let myName = 'Tau G';
console.log('name:' + myName);

//reasigning a variable
let interestRate = 0.3;
interestRate = 1;
console.log ('Interest Rate: ' + interestRate);

//constants
const intRate = 0.3;
//intRate = 1; //Will give an error
console.log('Int Rate: ' + intRate);

//data types {Primitives/Value Types & Reference Types}

//Primitives or Value Types
//1. String
//2. Number
//3. Boolean
//4. undefined
//5. null

let name = 'Gombera'; // String Literal
let age = 27; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null; // Object

//Reference types
//1. Object
//2. Array
//3. Function

//1. Object

// let name = 'Gombera';
// let age = 27;

let person = {              //Object Literal
    name : 'Gombera',
    age : 27
};

console.log(person);

//Two ways of accessing object properties

//a. Dot Notation 
person.name = 'John Doe';

console.log(person);

//b. Bracket Notation 
person['name'] = 'Jane Doe';

console.log(person);

//2. Arrays | can be used to store a list of objects eg products in a store
let selectedColors = ['red', 'blue']; //Array Literal
selectedColors[2] = 'green';
console.log(selectedColors);

//Accessing array elements
console.log('First Element: ' + selectedColors[0]);
console.log('Second Element: ' +selectedColors[1]);
console.log('Array Length: ' + selectedColors.length);

//3. Functions

//a. Performing a task
function greet(){
    console.log('Hello World');
}

//Envoke | Call the function
greet();

function greetSomeone(name){    //takes a parameter
    console.log('Hello ' + name);
}

//Envoke | Call the function
greetSomeone('John Doe');       //passes arguement to the function

//Reuse the function
greetSomeone('Jane Doe');

//b. Calculating a value
function square(number){
    return number * number;
}

console.log(square(2));
