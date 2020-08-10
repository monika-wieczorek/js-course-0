var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.name.onfocus = function(){
    myForm.name.style.border = "4px solid pink";
};

myForm.name.onblur = function(){
    myForm.name.style.border = "none";
};

myForm.onsubmit = function(){
    
    if (myForm.name.value == ""){

        message.innerHTML = "please enter a name";
        return false; // form is stopped from being submitted

    } else{

        message.innerHTML = "";
        return true;

    }

};