// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

// var j = 1;
// while(j <= 10){
//     console.log(j);
//     j++;
// }

// guarenteed to run first time around
// var k = 1;
// do {
//     console.log(k);
//     k++;
// } while( k <= 10);

var names = ["alex", "alex2", "alex3", "alex4", "jeff"];

// foreach loop
names.forEach(function(element, index){
    element = element.toUpperCase();
    if(element === "ALEX3"){
        console.log("this is alex3");
    }
    console.log(index + ":" + element);
});


for(var l = 0; l < names.length; l++){
    if(names[l] === "alex3"){
        break;
    }
        console.log(names[l]);
};

// for... of loop
for(var name of names){
    if(name === "alex3"){
        break;
    }
    console.log(name);
}

var ps = document.querySelector('p');
console.log(ps);

// var is function scope aka global
// let is block scope so it's only available where it's defined

var sample;
console.log(sample);

let sample2;

console.log(sample2);

const SAMPLE_2 = "something"
console.log(SAMPLE_2);

// if statement
var name = "matt"
if(name === "david"){
    // doThis
}
else if(name === "matt"){
    // doThat
}else {
    // ultra fall-back
}
