// How to accept user input
/* 
    1. Easy Way = window prompt.
    2.PROFESSIONAL WAY = HTML textbox

*/

//let username;

//username = window.prompt("What's your username? ");

/**Professional way */

let username;
document.getElementById('mysubmit').onclick = function(){
    username = document.getElementById('myText').value;
    document.getElementById("myh1").textContent= `Hello ${username}`;
    console.log(username);
}


