var a = parseFloat(prompt("Nhap a:"));
var b = parseFloat(prompt("Nhap b:"));
var c = parseFloat(prompt("Nhap c:"));
var max;
(a>b? max=a:max=b)>c?max=(a>b? max=a:max=b):max=c;
console.log(max);