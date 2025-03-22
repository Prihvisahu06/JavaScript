var DT = new Date();
var now = DT.getTime();
var day = DT.getDay();
var hour = DT.getHours();
var minute = DT.getMinutes();
var second = DT.getSeconds();
console.log(DT,now,day,hour,minute,second);

DT.setFullYear(2024,9,6);
console.log (DT);
DT.setMonth(1 ,29);
console.log (DT);
var data = DT.toLocaleString(32);

console.log(data);
