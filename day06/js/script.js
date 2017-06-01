// hoisting - variable names and function declarations


// write a function that produces a random numbre from 0 - 10
// write a function that returns the random number


// function alertRand(){
//     alert(`your random number ` + getRandNum());
// }
//
// function getRandNum(){
//     return  Math.floor(Math.random() * 11) + 0;
// }

// function asking user for a names

// properCap

// function asking if there are more names

// var names = [];
//
// function properCap(userName){
//     return userName.charAt(0).toUpperCase() + userName.substr(1).toLowerCase();
// }
//
// function askName(){
//     names.push((prompt("What is the name you want to input? ")));
// }
//
// function moreNames(){
//     return confirm("Are there any more names?");
// }
//
// function alertNames(){
//     askName();
//     while(moreNames()){
//         askName();
//     }
//     let i = 0;
//     let nameString = '';
//     while(i < names.length ){
//         nameString += properCap(names[i]) + " ";
//         i++;
//     }
//
//     alert("here are your names " + nameString);
// }

// targeting DOM elements
// getElementById()
// getElementsByTagName()[]
// getElementsByClassName(){[]

// querySelector()
var variable = document.querySelector("")

// var h1 = document.querySelector('form input[type="text"]':not)

var myH1 = document.getElementById("hdr1");
var myP = document.getElementsByTagName('p')[0];

console.log(myP);
console.log(myH1);

myH1.addEventListener("click", function(){
    // this.style.color = '#aed';
    // this.style.paddingTop = "30px";
    // this.style.textAlign = "center";
    // this.style.fontSize = "100px";
    console.log(this);
     myP.classList.toggle("red");
});
