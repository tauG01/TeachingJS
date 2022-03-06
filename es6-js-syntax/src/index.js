import { Programmer } from './programmer';


//var vs let {Scope}

// var ->scoped to the function
function printNumber(){
  for(var i =0; i<5;i++){
    console.log(i);
  }
  console.log(i); // i is accessible from the block above | we dont want this
}

printNumber();

console.log(" ");

// let ->scoped to the block
function printNumber2(){
  for(let i =0; i<5;i++){
    console.log(i);
  }
  //i cannot be accessed from here
}

printNumber2();

//const
const num = 1; // cannot be reassigned

//Objects
const person = {
  name: 'Gombera',
  walk: function(){}, // a function inside an object -> method
  talk(){} //ES6 syntax for method
}

//Accessing object properties
//a. Dot notation
person.talk();

//b. Bracket notation
person['name'] = 'Taurai';

//FUNCTIONS

//Old JS function syntax
function square (number) {
  return number * number;
}

console.log(square(3));

//Old JS function syntax | alternative
const square1 = function(number){
  return number * number;
}

console.log(square1(4));

//Arrow function

const square2 = number => number * number;

console.log(square2(6));

console.log(" ");

//Normal functions and corresponding arrow functions

//function with 2 parameters
function sum (a, b){
  return a + b;
}

let sum2 = (a, b) => a + b;

//function with one parameter
function isPositive(number) {
   return number >= 0;
}

let isPositive2 = number => number >= 0;

//function without parameters
function randomNumber(){
  return Math.random;
}

let randomNumber2 = () => Math.random;

//Anonymous function | function without name
document.addEventListener('click', function () {
  console.log('click');
})

document.addEventListener('click', () => console.log('click'));

//Usefulness of arrow functions

//case 1 | normal function to filter out items
const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
];

//normal function 
const activeJobs = jobs.filter(function(job){
  return job.isActive;
});

console.log(activeJobs);

//case 2 | arrow function to filter out active items
const jobs1 = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
];
//Arrow function 
const activeJobs1 = jobs1.filter(job => job.isActive);

console.log(activeJobs1);

//Array.map() | used to render a list of items
const colors = ['red', 'green', 'blue'];

const items = colors.map(function(color){
  return '<li>' + color + '</li>';
});

console.log(items);

//convert to arrow function
const colors1 = ['yellow', 'brown', 'white'];

const items1 = colors1.map(color => '<li>' + color + '</li>');

console.log(items1);

//use template literal in ES6
const colors2 = ['purple', 'black', 'mauve'];

const items2 = colors2.map(color => `<li>${color}</li>`); //template literal

console.log(items2);

//Object destructuring
const address = {
  street: '',
  city: '',
  counntry: ''
};

//Extract the properties of the address and store them in different variables
 const street = address.street;
 const city = address.city;
 const counntry = address.counntry;

 //Best way -> destructuring
const homeAddress = {
  homeStreet: '',
  homeCity: '',
  homeCounntry: ''
};

const {homeStreet, homeCity, homeCounntry} = homeAddress;

//Spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

//combine the arrays
const combined = first.concat(second);
console.log(combined);

//use spread operater to combine
const combined2 = [...first, ...second];
console.log(combined2);

//Can add elements to spread operator
const combined3 = [...first, 'a', ...second, 'b'];
console.log(combined3);

//clone an array with spread operator
const clone = [...first];
console.log(first);
console.log(clone);

//spread operator on objects
const initial = {name: 'Gombera'};
const last = {job: 'Software Engineer'};

const merge = {...initial, ...last, location: 'Malawi'};
console.log(merge);

//clone an object with spread operator
const cloneInitial = {...initial};
console.log(initial);
console.log(cloneInitial);

//classes
const coolPerson = {
  name: 'Gombera',
  walk(){
    console.log('walk');
  }
}

const coolPerson2 = {
  name: 'Malunga',
  walk(){
    console.log('walk');
  }
}

//Problem with the code above -> duplication of method -> classes come in handy when you have more than one object
class CoolPerson {
  constructor(name){
    this.name = this.name;
  }

  walk(){
    console.log('walk');
  }
}

//Inheritance
class Teacher extends CoolPerson {
  constructor(name, degree){
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log('teach');
  }
}

//create an object
const teacher = new Teacher('Gombera', 'MSc');

//MODULES
//the code above is not modular | We can split same kind of code to multiple files(modules)
//Create two files: Human.js (Contains parent class) and Programmer.js (Contains child class)
//Programmer class inherits properties and methods from Human class
//When you create a module, the objects in that module are private by default
//Make the objects public by exporting the class
//import the class wherever you need to use it e.g first line of this file

//create an object
const programmer = new Programmer('Gombera', 'MSc');
programmer.code();

//NAMED AND DEFAULT EXPORTS

//Default -> import ... from '';
//Named -> import {...} from '';
//Both -> import ..., {...} from '';