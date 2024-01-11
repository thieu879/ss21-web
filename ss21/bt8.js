var weight = parseFloat(prompt("Nhap can nang(kg):"));
var height = parseFloat(prompt("Nhap chieu  ca(m):"));

var bmi = weight / ( height * height )

if(0<bmi && bmi<18.5){
    console.log("Can nang thap:");
}
else if(18.5<=bmi && bmi<=24.9){
    console.log("binh thuong:");
}
else if(25<bmi){
    console.log("thua can:");
    if(25<=bmi && bmi<=29.9){
        console.log("tien beo phi:");
    }
    if(30<=bmi && bmi<=34.9){
        console.log("beo phi do I:");
    }
    if(35<=bmi && bmi<=39.9){
        console.log("beo phi do II:");
    }
    if(40<=bmi){
        console.log("beo phi do III:");
    }
}