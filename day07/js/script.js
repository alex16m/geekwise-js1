// var btn = document.querySelector("button");
// var nav = document.querySelector("ul");
//
//
// btn.addEventListener('click', function(evt){
//     console.log(this);
//     console.log(evt.target.innerText);
// });
//
// btn.addEventListener('mouseenter', function(evt){
//     console.log(evt);
//     evt.target.style.color = 'red';
// });
//
// btn.addEventListener('mouseleave', function(evt){
//     console.log(evt);
//     evt.target.style.color = 'black';
// });
//
// window.addEventListener('scroll',function(evt){
    // console.clear();
    // console.log(evt.pageY);
    // if(evt.pageY > 100){
    //     nav.classList.add('vis');
    // }else {
    //     nav.classList.remove('vis');
    // }

// });

// keyDown, keyUp, keyPress
// var setDiv = document.getElementById('set');
// setDiv.innerHTML = '<h1>Here is a line</h1>';
//
// var getDiv = document.getElementById('get');
// console.log(getDiv.innerHTML);


var submitBtn = document.querySelector('input[type="submit"]');
var form = document.querySelector('form');

submitBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    var formVals = [];

    for(var i = 0; i < form.length-1; i++){
        // console.log(form[i]);
        formVals.push(form[i].value);
        console.log(formVals);
    }
});

// "listen to keypress"
// grab the keycode
// textContent or innerHTML to "set" the code to the window
// http://keyCode.info








// add a second input box with the type of password
// capture both values
// alert results
