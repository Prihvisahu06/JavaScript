// functions 

/*
when you want to use a function in a class, you need to use the scope resolution operator (::) to access

when you want to reuse codw , you can use functions, but when you want to reuse data, you can use classes

when you want to run your with diff data

*/

// type of functions

//traditional functions

function add(a, b) {
    return a + b;
    }
    console.log(add(5, 7)); 

// anonymos functions 

let ad = function(a,b){
    return a+b;
}
console.log(ad(5,8));

// arrow functions

let bd = (a,b) => {
    return a+b;
    }
    console.log(bd(5,10));

    // function expression

function add (a,b){
    return a + b ;
}

let sum = add(45,37);
console.log(sum);

let sum1 = add("surjoy","peter")
console.log(sum1);
 
