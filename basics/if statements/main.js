// if statements = if a condition is true, execute some code, if not do something else

//example1
let age = 31;

if(age >= 18){
    console.log("you are old enough to enter this site")
}else{
    console.log('you must be 18+ to enter this site')
}

console.log("--------------------------------------")

//example 2

let time =6;

if (time <12){
    console.log("Good morning!!")
}else{
    console.log("Good afternoon!!")
}

//example 3 booleans

let isStudent = false;

if(isStudent){
    console.log("you are a student")
}else{
    console.log("you are not a student")
}

//example 4: nested if AD

let age2 = 25;
let hasLicense = false;

if(age>=16){
    console.log("you are old enough to drive")
    if(hasLicense){
        console.log('you have your license!')
    }else{
        console.log("you do not have your license yet")
    }
}else{

    console.log(`you must be 16+ to have a license`)
}

//example 5 else if
const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const result = document.getElementById('result')
age = 0;

mySubmit.onclick = function(){
 
    age = myText.value 
    age = Number(age)
    if(age >= 100){
        result.textContent="You are too old to enter this site"
    }else if(age == 0){
        result.textContent="You cant enter, you were just born."
    }else if(age >=18){
        result.textContent="you are old enough to enter this  site"
    }else if(age < 0){
        result.textContent="your age can't be below 0"
    
    }else {
        result.textContent=" you must be 18+ to enter this site"
    }
}