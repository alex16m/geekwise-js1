// alert("I hope you are having a nice day!");

// var confirmMessage = confirm("Why must you click me into this world. Why. Cancel me please.");

// var firstName = prompt("Enter your First Name: ");

// var userAge = parseInt( prompt("Enter your age"));
// console.log(userAge + 10);
//
// var myString = "this is a string";
// var myChar = "A";
//
// var myStringObj = new String("this is also a string");
// console.log(myStringObj);
//
//
// var numObj = new Number(7);
// console.log(numObj);
//
// var num = 7;
// console.log(num);
//
// // Type of
//
//
// // Float Objects
// var float = 3.432;
// console.log(typeof float);
//
// // Boolean Objects
// var bool = true;
// console.log( bool);
//
// // arrays
// var arr = ["red", "orange", "green"]
// var numArr = [0, 1, 2, 3]
// console.log(arr[0] + " " + arr[2]);
// console.log(numArr[1] + numArr[2]);
//
// // Object Object
// var myCar = {
//     make: "BMW",
//     model: "330XI",
//     year: "2004"
// };
//
//
// var myConsole = {
//     log: function(data){
//         alert(data);
//     }
// }
//
// console.log(myCar.model);
// console.log(myCar.year);
//
// // Math Object
// //  round to specific decimal
// var num1 = 5.01;
// console.log( Math.round(num1) );
// console.log( Math.floor(num1) );
// console.log( Math.ceil(num1) );

//
// var randNum = Math.random();
// randNum *= 10;
// console.log(Math.ceil(randNum));
//
// console.log( Math.floor( Math.random() * 11) );

// Date Object
var theDate = new Date();
// console.log(theDate.getMonth());
// getHours == time in hours
// getMonth() == month
// getFullYear == year
// getDay == day of the week
// getDate()== day of the week
//
// if( theDate.getDay() === 0){
//     console.log('Sunday');
//     }
//     else if ( theDate.getDay() === 1){
//         console.log('Monday');
//         }
//     else if ( theDate.getDay() === 2){
//         console.log('Tuesday');
//         }
//     else if ( theDate.getDay() === 3){
//         console.log('Wednesday');
//         }
//     else if ( theDate.getDay() === 4){
//         console.log('Thursday');
//         }

var myBday = new Date(1999, 9, 02);
var myDate = theDate.toLocaleString('en-us', {day: '2-digit'});
// console.log(myBday);


var myBdate = myBday.toLocaleString('en-us', {day: 'numeric'});
var myBmon = myBday.toLocaleString('en-us', {month: 'long'});
var myBYear = myBday.toLocaleString('en-us', {year: "numeric"});


// console.log(myBmon + " " + myBdate + ", " + myBYear);// October 2, 1999
// var userAge = parseInt( prompt("Enter your age"));
// console.log(userAge + 10);


// prompt user for 3 individual items
// ask for birth month
// ask for birth day
// ask for birth year
// save each response as variable
// parse each response into a Number
//  for 0 based items, subtract 1
// create a new date instance rep users birthday
//  var myBday = new Date (1999, 9, 02)
// take users birthday obj and parse to console in the following format:
// oct 02, 99
var birthMonth = parseInt(prompt("Enter birth month:(number) "));
var birthDay = parseInt(prompt("Enter birth day:(number) "));
var birthYear = parseInt(prompt("Enter birth year:(number) "));

var userBirth = new Date(birthYear, birthMonth, birthDay);

console.log(birthDay);

var birthDay = userBirth.toLocaleString('en-us', {day: '2-digit'});
var birthMonth = userBirth.toLocaleString('en-us', {month: 'short'});
var birthYear = userBirth.toLocaleString('en-us', {year: "2-digit"});


console.log(birthMonth + " " + birthDay + ", " + birthYear);


// MDN Mozilla Developer Network
