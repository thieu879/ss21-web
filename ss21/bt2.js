var number = parseInt(prompt("Nhap so muon kiem"));
if(number % 2 == 0){
    console.log("la so chan");
}else if(number % 2 !=0){
    console.log("la so le");
}else if(isNaN(number)){
    console.log("khong hop le");
}else{
    console.log("hop le");
}