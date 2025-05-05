// variables = a container that stores a value.
//         Behaves as if it were the value it contains

// 1. declaration let x;
//2. assignment  x = 100;

// let x = 100;
let x;

x = 123;


console.log(x);


let age =25;
let price = 10.99;
let gpa = 2.1;

console.log(price);
console.log(age);
console.log(gpa)

//how to ouput a message with a varible inside the text

console.log(`you are ${age} years old `);
console.log(`the price is $${price}`);
console.log(`your gpa is: ${gpa}`);

//strings
let firstName = "Emmanuel";
let favoriteFood = "Pizza";
let email = "exampleofemail@gmail.com"
console.log(typeof(firstName));
console.log(`your name is ${firstName}`);
console.log(`your favorite food is ${favoriteFood}`);
console.log(`Your email is ${email}`);

//booleans
let online = false;
let forSale= true;
let isStudent = true;

console.log(typeof (online));
console.log(`Bro is online: ${online}`);
console.log(`is this car for Sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

//using variables on html page

// declare 3 variables

let full_name= "Pedro almonte cerano"; //an random example
let age2 = 22;
let student = false;

document.getElementById('p1').textContent= `your name is ${full_name} `;
document.getElementById("p2").textContent = `your are ${age2} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;

