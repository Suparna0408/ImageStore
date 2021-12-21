let hide = document.getElementById("hide-id");
let hidebtn = document.getElementById("hide-btn");
hidebtn.addEventListener('click', hidevideos);

function hidevideos() {
    if(hide.style.display == "none"){
    hide.style.display = "block";
    hidebtn.innerHTML = "Show less";
    }
    else{
    hide.style.display = "none";
    hidebtn.innerHTML = "Show more";
    }
}

