// arithmetic operators = operands (values, variables, etc..)
// operators (+ * - /)
//ex. 11 = x + 5;

let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
//students = students **2 ;
//students = students % 3;

// now we wil use what is known as  AUGMENTED ASSIGNMENT OPERATORS to increase a variable (students in this case) by a number.

//students += 1; //31
//students +=2; //32
//students += 3 //33

// now with subtraction

//students -=1; //29

//now with multiplication

//students *= 2; //60

//division

//students /= 2;//15

//exponents

//students **= 2;//900

//modulus

//students %= 2; // 0  no remaining students

//students ++; // increments by one
//students --; // decrements by one as well
//console.log(students);
// lastly we're going to cover operator precedence

/* 
    operator precedence
    1. Parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition and subtraction

*/

let result = 1 + 2 * 3 + 4**2;
console.log(result)

