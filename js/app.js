var name = prompt("Enter your name:");
var gender = prompt("Enter your gender:").toLowerCase();
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