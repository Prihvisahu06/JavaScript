//Pillars of dom 

//1.Elements : change or modify 
//2.CSS : change or modify
//3.Event Listeners 


var a = document.querySelector("h1");
console.log(a);
a.innerHTML = 'badal gya' // change an element
a.style.borderRadius = '10px' // style css and change 
a.style.backgroundColor = "black" // css change 

//Adding an element

const b = document.createElement("p");
const input = document.createTextNode("Hello, I am a new paragraph.");
b.appendChild(input);

var c = document.querySelector("h1") 
c.appendChild(b) // add element to h1

//remove an element 
var d = document.querySelector("p");
d.remove(); // remove element from h1

//event listener

var e = document.querySelector("h1"); // select an element 

e.addEventListener("click", function(){ // add event listener
    console.log("badhai ho click ho gya"); // event listener function
    a.innerHTML = 'badal gya hu bro party de' 
    a.style.borderRadius = '30px' 
    a.style.backgroundColor = "yellow"
    a.style.color = 'black'
    }); // event listener function end

    


