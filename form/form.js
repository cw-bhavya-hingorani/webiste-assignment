var formsInputStatus = {
    "username": false,
    "email": false,
    "password": false,
    "confirm-password": false
};
document.querySelector(".pop-up").style.display = "none"  

function setButtonActive(){
    for(prop in formsInputStatus){
        if(formsInputStatus[prop] != true){
            // console.log(document.querySelector("#sign-up").disabled)
            if(!(document.querySelector("#sign-up").disabled)){
                // console.log(formsInputStatus[prop]);
                console.log("Button was enabled");
                document.querySelector("#sign-up").toggleAttribute("disabled");
                document.querySelector("#sign-up").classList.add("disabled-button")
            }
            return
        }
    }
    if((document.querySelector("#sign-up").disabled)){
        console.log("Button was disabled");
        document.querySelector("#sign-up").toggleAttribute("disabled");
        document.querySelector("#sign-up").classList.remove("disabled-button")
    }
    // document.querySelector("#sign-up").toggleAttribute("disabled");
}

function validateInputs(bool, place){
    var qs_clas = "." + place + "-input input";
    var sq_id = "#input-error-msg-" + place;

    if(bool){
        document.querySelector(qs_clas).classList.remove('input-incorrect');
        document.querySelector(qs_clas).classList.add('input-correct');
        errorMsg = document.querySelector(sq_id);
        errorMsg.style.display = "none";
        formsInputStatus[place] = true;
        console.log(formsInputStatus)
        setButtonActive();
    }
    else{
        document.querySelector(qs_clas).classList.remove('input-correct');
        document.querySelector(qs_clas).classList.add('input-incorrect');
        errorMsg = document.querySelector(sq_id);
        errorMsg.style.display = "block";
        formsInputStatus[place] = false;
        console.log(formsInputStatus)
        setButtonActive();
    }
}

function validateUsername(){
    var val = document.querySelector(".username-input input").value;

    if(val.length >= 3 && val.length<=25){
        validateInputs(true, "username");
    }
    else{
        validateInputs(false, "username");
    }
}
function validateEmail(){
    var val = document.querySelector(".email-input input").value;

    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(val.match(validRegex)){
        validateInputs(true, "email");
    }
    else{
        validateInputs(false, "email");
    }
}
function validatePassword(){
    var val = document.querySelector(".password-input input").value;

    var validRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/

    if(val.match(validRegex)){
        validateInputs(true, "password");
    }
    else{
        validateInputs(false, "password");
    }
}
function validateConfirmPassword(){
    var val = document.querySelector(".confirm-password-input input").value;

    var valid = document.querySelector(".password-input input").value;

    if(val===valid){
        validateInputs(true, "confirm-password");
    }
    else{
        validateInputs(false, "confirm-password");
    }
}

function PopUp(){
    event.preventDefault()
    console.log("Here")
    // console.log(document.querySelector("#sign-up").getAttribute("disabled"));
    if(document.querySelector(".pop-up").style.display == "none"){
        document.querySelector("div").classList.toggle("overlay")
        document.querySelector(".pop-up").style.display = "flex";
    }
    else{
        document.querySelector(".pop-up").style.display = "none"        
        document.querySelector("div").classList.toggle("overlay")
    }
}

document.querySelector(".username-input input").addEventListener("input", validateUsername);
document.querySelector(".email-input input").addEventListener("input", validateEmail);
document.querySelector(".password-input input").addEventListener("input", validatePassword );
document.querySelector(".confirm-password-input input").addEventListener("input", validateConfirmPassword);

document.querySelector(".pass-eye").addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")  
    this.classList.toggle("fa-eye")
    if(document.querySelector(".password-input input").getAttribute("type") == "password"){
        document.querySelector(".password-input input").setAttribute("type", "text")
    }
    else{
        document.querySelector(".password-input input").setAttribute("type", "password")
    }
})
document.querySelector(".conf-pass-eye").addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    this.classList.toggle("fa-eye")
    if(document.querySelector(".confirm-password-input input").getAttribute("type") == "password"){
        document.querySelector(".confirm-password-input input").setAttribute("type", "text")
    }
    else{
        document.querySelector(".confirm-password-input input").setAttribute("type", "password")
    }
})

document.querySelector(".pop-up button").addEventListener("click", PopUp);
document.querySelector("#sign-up").addEventListener("click", PopUp);