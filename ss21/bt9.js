let n = parseInt(prompt("Nhap so luong:"));
let mbs=[];
for(let i = 0;i<n;i++){
    mbs[i] = parseInt(prompt("Nhap so:",i));
}
mbs.sort(function(a,b){ return a-b;});
for(let i = 0;i<n;i++){
    console.log(mbs[i]);
}