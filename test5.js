/* Set time out */

/*var myMessage = document.getElementById("message");

function showMessage(){

    myMessage.className = "show";

}

setTimeout(showMessage, 3000);*/

/* Set interval - slideer */

var colorChanger = document.getElementById("color-changer");
var colors = ["yellow", "orange", "red", "pink", "violet"];
var counter = 0;

function changeColor(){
    
    if (counter >= colors.length){
    
    counter = 0;

    }

    colorChanger.style.background = colors[counter];
    counter++;

}

var myTimer = setInterval(changeColor, 3000);

/* stops cycling through the colors*/

colorChanger.onclick = function(){

    clearInterval(myTimer);
    colorChanger.innerHTML = "cycle stops";

}