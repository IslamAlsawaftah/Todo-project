'use strict';
var name = prompt("Enter your name:");
var gender = prompt("Enter your gender:").toLowerCase();
// to avoid the problem of (Uncaught TypeError: Cannot read property 'toLowerCase' of null)
if (gender === null || gender === "") {
    alert('Please enter a gender.');
}
var age = prompt("Enter your age:");

if (age <= 0) {
    alert("your age must be grater than zero");
}
var complete = confirm("do you want to complete");
if (complete == true) {
    if (gender == "male") {
        alert(`Welcome Mr. ${name}`);
    }
    else if (gender == "female") {
        alert(`Welcome Ms. ${name}`);
    }
    else {
        alert(`Welcome ${name}`);
    }
}
var arr = [];
function askPrompt(ans) {
    if (ans == "yes") {
        arr.push(ans);
    }
    else if (ans == "no") {
        arr.push(ans);
    }
    else if (ans == "") {
        arr.push("invalid");
    }
}
console.log(arr);
askPrompt(prompt("Are you a student?"));
askPrompt(prompt("Are you married?"));
askPrompt(prompt("Are you live in Amman?"));