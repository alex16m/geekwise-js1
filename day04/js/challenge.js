// gather info from the user. Specifically the users firstname and lastname. For stylistic purposes, you need the first letter of each to be capitalized and the remaining lowercase. Accomplish this regardless of user input.

// get user first name.
// edge case for extra spaces before and after
// capitilize first letter
// lowercase remaining letters
// concatenate first name to last name.
// alert result

var firstName = prompt("Enter your first Name: ").trim();
firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();

var lastName = prompt("Enter your last Name: ");
lastName = lastName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();
console.log(firstName);

// console.log(firstName);
//
// var firstLetter = firstName.charAt(0);
// console.log(firstLetter);
//
// var filterCap = firstLetter.toUpperCase();
// console.log(filterCap);
//
// var restOfLetters = firstName.substr(1,firstName.length);
// var lowerletters = restOfLetters.toLowerCase();
// console.log(lowerletters);
//
// var lastName = prompt("Enter your Last name: ").trim();
// console.log(lastName);
//
//
// var combinedName = firstLetter.concat(filterCap + lowerletters + lastName);
// alert(combinedName);
