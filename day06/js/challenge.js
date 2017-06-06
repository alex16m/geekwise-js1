var firstName = document.getElementById("firstName");
var secondName = document.getElementsByTagName('button')[1];
var thirdName = document.querySelector("#lastName");

var combinedName;
var userFirst = "userFirst";
var userMiddle = "userMiddle";
var userLast = "userLast";

function properCap(userName){
    return userName = userName.charAt(0).toUpperCase() + userName.substr(1).toLowerCase();
}

firstName.addEventListener("click",function(){
    userFirst = prompt("enter first name here please: ").trim();
    userFirst = properCap(userFirst);
});



middleName.addEventListener("click",function(){
    userMiddle = prompt("enter middle name here please: ").trim();
    userMiddle = properCap(userMiddle);
});

lastName.addEventListener("click",function(){
    userLast = prompt("enter last name here please: ").trim();
    userLast = properCap(userLast);
    combinedName = `${userFirst} ${userMiddle} ${userLast}`;
    alert(combinedName);
});
