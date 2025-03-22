//array vs objects 
var a = {};

var prithvi = {
    name: "Prithvi",
    age: 20,
    gender: "Male",
};
console.log(prithvi);

prithvi.age = 21;
console.log(prithvi.age); //for change the value of the object

//for -In
for (var key in prithvi) {
    console.log(key + " - " + prithvi[key]);
    }

    var b = {...prithvi};
    console.log(b); //for copy the object