var number = document.querySelector("h1");
var key = document.querySelector("p");

document.addEventListener("keypress", function(evt){
    number.innerHTML = evt.charCode;
    key.innerHTML = evt.key;
    console.clear();
    console.log(evt);
});
