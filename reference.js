var a = 10;
var b = a;
console.log( b );
b = 15

var prithvi = [ 10,15,20];

var bhavesh = prithvi;
bhavesh.pop();
console.log(bhavesh);
console.log(prithvi);

var prithvi = [ 10,15,20];

var bhavesh = [...prithvi];
bhavesh.pop();
console.log(bhavesh);
console.log(prithvi);

