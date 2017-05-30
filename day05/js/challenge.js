// user clicks the button
// user is prompted to enter their first name
// sames users name and accounts for extra spaces
// pass no parameters
// ensure first character is capped
// remaining are lower case
// pass into another function
// alert welcome message to user
function welcome(name){
    alert(`Welcome to my website ${name}`);

    document.querySelector("button").innerHTML = name;
}


function getUserName(){
    var firstName = prompt("enter your firstname here:").trim();
    firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();

    welcome(firstName);
}
