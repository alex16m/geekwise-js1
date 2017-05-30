// if
// == means equal to
// === it's stricter
// != not equal to
// !== strict not equal to
// var age =parseInt(prompt("please insert your age: ").trim());
// // console.log(!!age);
//
// var gender = prompt("Please enter your gender: Male or Female").trim();
//
// if(age > 21 && gender === "male"){
//     console.log("welcome");
// }
// else if(age < 21) {
//     console.log("too young");
// }
// else {
//     //console.log("Exact");
// }
//
// if(!age){
//     console.log("enter your age");
// }


// switch statement
// var today = new Date().getDay();
// console.log(today);
// switch (today) {
//     case 0:
//         console.log("it's not friday yet");
//         break;
//
//     case 1:
//         console.log("bad case of the monday's");
//         break;
//
//     default:
//         console.log("What day is it?");
//
// }

// ternary operator
// var age = parseInt(prompt("what is your age? ").trim());

// age >= 21 ? console.log("welcome") : console.log("leave") ;

// check    runs this if true           runs this if false

// let myMiddleName;
// myMiddleName = "david"
// console.log(myMiddleName);
//
// const MY_LAST_NAME = "constant";
// console.log(MY_LAST_NAME);
//
//
// var dog = 2;
//
// if(dog > 1){
//     let dogYears = 7;
//     console.log(dogYears * dog);
// }

// // Function Declaration
// function myNameAndAge(name, age){
//     // alert(name + " is " + age + " years old");
//     alert(`${name} is ${age} years old`);
// }
//
// var userName = "Alex";
// myNameAndAge("userName", 13);
//
// // function expression
// var myCar = function(car, year){
//     alert(`${car}: ${year}`);
// }('BMW', 2004); // <-- arguements go here
// putting parentheseses after the curly braces makes the function run immediately

// ways to do strings
// ''
// ""
// ``

// Arguments object
// function welcome(){
//     var msg = "welcome";
//     console.log(arguments);
//     for(var arg of arguments){
//         msg += ` ${arg}`;
//     }
//     alert( msg );
// }
//
// // var firstName = prompt("enter your first name here: ").trim();
// // firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();
// //
// // var lastName = prompt("enter your last name here: ").trim();
// // lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1).toLowerCase();
//
// welcome("firstName", "myMiddleName", "lastName");

function changeText(){
    var nameArray = ["hi", "bye"]
    if(document.querySelector("button").innerHTML === "hi"){
        document.querySelector("button").innerHTML = "bye"
    }
    else {
        document.querySelector("button").innerHTML = "hi";
    }
    alert("name");

}

var greet = function(name){
    alert(name);
};
