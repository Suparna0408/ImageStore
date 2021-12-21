let emodal = document.getElementById("email-click");
console.log(emodal);
let wform = document.getElementById("whatsapp-click");
let econnect = document.getElementById("emailphoto");
let wconnect = document.getElementById("whatsappphoto");
let btn = document.getElementById("showtext");
// let show = document.getElementById("showmobileno");

// btn.addEventListener('click', shownumber);

btn.onclick = function(){
    if(btn.innerHTML == "Show the whatsapp number"){
    btn.innerHTML = "+91-8100453211";
    }
    else{
        btn.innerHTML = "Show the whatsapp number"
    }
}

// If user click on email picture
econnect.onclick = function() {
    emodal.style.display = "block";
}

// If user click on whatsapp picture
wconnect.onclick = function(){
    wform.style.display = "block";
}

// If user click elsewhere
window.onclick = function(e) {
    // event.target means when will dispatched from 
    // The target property of the Event interface is a reference to the object onto which the event was dispatched. 
    if(e.target == emodal) {
        emodal.style.display = "none";
    }
    else if(e.target == wform){
        wform.style.display = "none";
    }
}