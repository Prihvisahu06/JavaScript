// for loop

for(var i = 0;i < 100;i++){
    if (i == 50) break //if you want break in the middle of the loop
    console.log("prithvi sahu")
    console.log(i) // see in the number wise output
}

// var and let scope diff

function ab(){
for (var i = 0;i < 5;i++){
    console.log(i)
}
console.log(i);
}
ab();

//while loop

var i = 0
while(i < 5){
    console.log(i)
    i++
}

//do-while loop{}
var i=0
do{
    console.log(i)
    i++
}
while (i<5)
