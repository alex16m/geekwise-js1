var fullName = '';

function getName(){
    var user = prompt("enter a name");
    alertName( getMore( properCap(user)));
}

function properCap(str1){
    return str1.charAt(0).toUpperCase() + str1.substr(1).toLowerCase();
}

function getMore(str2){
    fullName += str2 + " ";
    if(confirm("More Names?")){
        getName();
    }else{
        return fullName;
    }
}

function alertName(str){
    if(str.length !== 0){
    alert(str);
    }
}
