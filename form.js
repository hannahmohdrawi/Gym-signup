let popup = document.getElementById("popup");

//Submitbtn and Popup functions

function displayPopup(){
    popup.classList.add("display-popup");
}

function hidePopup(){
    popup.classList.remove("display-popup");
}

//Resetbtn functions


//Resets one by one - need to be able to reset all buttons
function reset(){
    let radio = document.querySelector('input[type=radio]:checked');
    radio.checked = false;
}


