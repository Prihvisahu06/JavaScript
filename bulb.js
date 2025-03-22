var bulb = document.querySelector("#bulb");

var btn = document.querySelector("#button");

var a = 0;

btn.addEventListener("click", function() {
    if (a == 0){
        bulb.style.backgroundColor = "yellow";
        console.log("clicked");
        a = 1;
    } else{
        bulb.style.backgroundColor = "transparent";
        console.log("un-clicked");
        a = 0;
    }
})