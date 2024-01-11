var toan = parseFloat(prompt("Nhap diem toan:"));
var van = parseFloat(prompt("Nhap diem van:"));
var anh = parseFloat(prompt("Nhap diem anh:"));

var tb = (toan + van + anh)/3;

if(8.0<=tb && tb <=10){
    console.log("gioi");
}else if(6.5 <= tb && tb <=7.9){
    console.log("kha");
}else if(5.0 <= tb && tb <=6.4){
    console.log("trung binh");
}else if(0 <= tb && tb <5.0){
    console.log("yeu");
}else{
    console.log("m dua t a!!!");
}
