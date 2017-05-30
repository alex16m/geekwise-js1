var names = ["warrior ", "monk ", "healer"];

var warriorWeapons = ["stick ", "greatSword"]

var monkWeapons = ["bare ", "chi"]

var healerWeapons = ["staff ", " rod" ]

var strengthLevel = 10;

function chooseCharQuestion(){
    if(window.confirm("Would you like to choose a character?")){
        document.querySelector("body").style.background="#91a9d3";
        window.alert("Here are your choices: " + names);

        var userChar = prompt("enter the character you'd like to be: ").trim();
        userChar.toLowerCase();
    }
    else if(userChar === "warrior"){

    }
    else if(userChar === "monk"){

    }
    else if(userChar === "healer"){

    }
    else{
        window.alert("You seemed to have mistyped your selection. Please try again.");
        chooseCharQuestion();
    }
}

if(window.confirm("Would you like to choose a character?")){

    document.querySelector("body").style.background="#91a9d3";

    window.alert("Here are your choices: " + names);

    var userChar = prompt("enter the character you'd like to be: ").trim();
    userChar.toLowerCase();

    chooseCharQuestion();

    // if(userChar === "warrior"){
    //     document.querySelector("body").style.background="#857d7d";
    //     window.alert("Pick a weapon: " + warriorWeapons);
    //     var userWeapon = prompt("enter the weapon you'd like to weild: ").trim();
    //     userWeapon.toLowerCase();
    //
    //     if(userWeapon === "stick"){
    //         strengthLevel += 9000;
    //
    //     }
    //     else if( userWeapon === "greatSword"){
    //         strengthLevel += 90;
    //     }
    //
    //     else{
    //         window.alert("You seemed to have mistyped your selection. Please refresh the page to try again.")
    //     }
    //     window.alert("Your strengh stat is at: " + strengthLevel);
    //
    //     document.querySelector("body").style.background="#857d7d";
    // }
    //
    // else if(userChar === "monk"){
    //     document.querySelector("body").style.background="#857d7d";
    //
    //     window.alert("Pick a weapon: " + monkWeapons);
    //     var userWeapon = prompt("enter the weapon you'd like to weild: ").trim();
    //     userWeapon.toLowerCase();
    //
    //     if(userWeapon === "bare"){
    //         strengthLevel += 9000;
    //     }
    //     else if( userWeapon === "chi"){
    //         strengthLevel += 90;
    //     }
    //
    //     else{
    //         window.alert("You seemed to have mistyped your selection. Please refresh the page to try again.")
    //     }
    //     window.alert("Your chackra level is at: " + strengthLevel);
    //
    //     document.querySelector("body").style.background="#857d7d";
    // }
    //
    // else if(userChar === "healer"){
    //     document.querySelector("body").style.background="#857d7d";
    //
    //     window.alert("Pick a weapon: " + healerWeapons);
    //     var userWeapon = prompt("enter the weapon you'd like to weild: ").trim();
    //     userWeapon.toLowerCase();
    //
    //     if(userWeapon === "staff"){
    //         strengthLevel += 9000;
    //     }
    //     else if( userWeapon === "rod"){
    //         strengthLevel += 90;
    //     }
    //
    //     else{
    //         window.alert("You seemed to have mistyped your selection. Please refresh the page to try again.")
    //     }
    //     window.alert("Your awesomeness level is at: " + strengthLevel);
    //
    //     document.querySelector("body").style.background="#857d7d";
    // }
    // else {
    //     window.alert("You appeared to have mistyped the character selection... Refresh the page to try again!")
    // }

}else {
    window.alert("Thanks for particpating anyway.")
}
