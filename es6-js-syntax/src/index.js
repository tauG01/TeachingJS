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
})

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