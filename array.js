var a = 10;

/*aaray to store multiple variable in one container*/

//single dimensional array
var arr = [1, 2, 3, 4, 5];
console.log (arr)

//push add the element at the end of the array
arr.push(6);
console.log(arr)
//pop remove the last element of the array
arr.pop();
console.log(arr)
//shift remove the first element of the array
arr.shift();
console.log(arr)
//unshift add the element at the beginning of the array
arr.unshift(1);
console.log(arr)
//splice remove and add the element at the specific position of the array
arr.splice(0,2,7,8);
console.log(arr)

//multi dimensional array
var m_arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

]
console.log( m_arr)

// For each loop only works on array

var a = [40,50,60,65,70];

a.forEach(function(val){
console.log(val + 5)  
});
