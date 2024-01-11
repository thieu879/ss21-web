// Lênh switch case có công dụng giống như lệnh if else đó là đều dùng 
// để rẻ nhánh chương trình, ứng với mỗi nhánh sẽ có một điều kiện cụ thể 
// và điều kiện đó phải sử dụng toán tử so sánh bằng, còn đối với lệnh if 
// else thì bạn có thể truyền vào một mệnh đề bất kì và sử dụng nhiều toán 
// tử khác nhau.

// if/else
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
// switch/case
var month = parseInt(prompt("Nhap thang:"));

switch(month){
    case 1:
        console.log("31 ngay");
        break;
    case 2:
        console.log("28 ngay");
        break;
    case 3:
        console.log("31 ngay");
        break;
    case 4:
        console.log("30 ngay");
        break;
    case 5:
        console.log("31 ngay");
        break;
    case 6:
        console.log("30 ngay");
        break;
    case 7:
        console.log("31 ngay");
        break;
    case 8:
        console.log("31 ngay");
        break;
    case 9:
        console.log("30 ngay");
        break;
    case 10:
        console.log("31 ngay");
        break;
    case 11:
        console.log("30 ngay");
        break;
    case 12:
        console.log("31 ngay");
        break;
    default:
        console.log("m dua t a!!!!");
}