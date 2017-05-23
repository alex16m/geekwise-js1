var usernameArray = [];
var usernames = "";


function getUser(){
        usernames = prompt("please enter another username: ");

        usernameArray.push(usernames)
        console.log(usernameArray);
}

function removeUser(){
    usernamesArray.shift();
    console.log(usernames);
}
