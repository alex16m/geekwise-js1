var firstName = document.getElementById("firstName");
var middleName = document.getElementsByTagName('button')[1];
var lastName = document.querySelector("li:last-child button");

var combinedName;
var userFirst = "userFirst";
var userMiddle = "userMiddle";
var userLast = "userLast";

function properCap(userName){
    return userName = userName.charAt(0).toUpperCase() + userName.substr(1).toLowerCase();
}

function getName(str){
    return properCap(prompt("enter name here: "))
}

firstName.addEventListener("click",function(){
    userFirst = properCap(prompt("enter first name here please: ").trim());
});



middleName.addEventListener("click",function(){
    userMiddle = properCapp(prompt("enter middle name here please: ").trim());
});

lastName.addEventListener("click",function(){
    userLast = properCap(prompt("enter last name here please: ").trim());
    combinedName = `${userFirst} ${userMiddle} ${userLast}`;
    alert(combinedName);
});
