// const = a variable that can't be changed

const PI = 3.14159
let radius;



//pi = 420.99 // an error




document.getElementById('mybutton').onclick = function(){
    let circumference;
    radius = document.getElementById('myText').value;
    radius =Number(radius)
    circumference= 2 * PI * radius
    document.getElementById('result').textContent = circumference + 'cm'
}