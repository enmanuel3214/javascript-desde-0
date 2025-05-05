// type conversion = change the datatype of a value to another ( strings, numbers, booleans).

let age = "25";
age = Number(age);
age += 1;


console.log(age, typeof age);

let x;
let y;
let z;

x = "0"
y = "0"
z = ""

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x) //NaN stands for "Not a Number"
console.log(y, typeof y)
console.log(z, typeof z)