var myName = "Alexzia Moun";

// console.log(myName);
// // length
// console.log(myName.length);
//
// // charAt
// console.log(myName.charAt(1));
//
// // indexOf
// console.log(myName.indexOf("A"));
//
// // lastIndexOf
// console.log('o', 7);
// // multiple instances
//
// // .concat()
// console.log(myName.concat(' peanuts'));
//
// // substring()
// console.log(myName.substring(0, 3));

// // substr(starts at index #, how many elements are included)
// console.log(myName.substr(4, 3));

// // .toUpperCase()
// console.log(myName.toUpperCase());

// //  .toLowerCase()
// console.log(myName.toLowerCase());

// //  .trim()
// // regular expressions(set preset)
// var newUser = "yoda        master      ds s";
// console.log(newUser.trim());

// // Arrays
// var myArray = ["element0", "element1", "element2"];
// var sodas = ["pepsi", "coke", "mountain dew"]
// console.log(sodas);
// console.log(sodas[1]);
// console.log( Array.isArray(sodas));

// put new element at end of array
var colors = ["red", "orange", "purple"];
var colorLength = colors.push("green");
// console.log(colorLength);
// console.log(colors[3]);

// put new element at start of Array
var arrLength = colors.unshift('pink');
// console.log(colors);
// console.log(arrLength);

// takes out last element of array
var item = colors.pop();
// console.log(item);
// console.log(colors);

// takes out first element of array
item = colors.shift();
// console.log("Item is", item);
// console.log(colors);

// console.log(colors);

// indexOf
// console.log(colors.indexOf("red"));

// lastIndexOf
// console.log("last index of orange in colors array: ", colors.lastIndexOf("orange"));

// splice
var removeItem = colors.splice(1, 1);
// console.log("colors content: ", colors);
// console.log("item removed using splice: ", removeItem);

var addItems = colors.splice(1, 0, "green", "blue");
// console.log("this is add Items contents: ", addItems);
// console.log("color content: ", colors);

var newColors = ["red", "orange", "yellow", "blue", "purple", "green"];

// remove color green and in its place add indigo
// var indexOfGreen = newColors.indexOf("green");
// var addIndigo = newColors.splice(indexOfGreen, 1, "indigo");
// console.log(newColors);

newColors.splice(newColors.indexOf("green"), 1, "indigo");
// console.log("NewColor Content: ", newColors);

// slice (adds to a new variable without removing from original array)
var moreColors = newColors.slice();
// console.log("more Colors content: ", moreColors);

var revColors = newColors.reverse();
// console.log("reversed Color content", revColors);

newColors.sort();
// console.log("contents of newColors: ", newColors);

var names = ["Alex", "alex", "david", "David", "1Alex", "@Alex", " s"];
names.sort();
console.log(names);

var points = [4, 2, 5, 1, 3];
points.sort(function(a, b){
    return a - b;
});
console.log(points);

console.log("newColors Content: ", newColors);
// for loop
// for(var i = 0; i < newColors.length; i++){
//     console.log("my fav color is: ", newColors[i]);
// }

var modColors = newColors.map(function(e, i){
    // console.log(e);
    console.log("my Fave color: ", e);
})

var modPoints = points.map(function(e,i){
    return e * 2;
})
console.log(points);
console.log(modPoints);
