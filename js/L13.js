var btn1 = document.querySelector('.btn1');
btn1.onclick = function () {
    document.querySelector("#ct1").innerHTML = "Hello javaScript";
    alert("T_T");
}
let btn2_1 = document.querySelector(".btn2-1");
btn2_1.onclick = function () {
    document.querySelector("#myImage").src = "https://www.w3schools.com/js/pic_bulboff.gif";
}
let btn2_2 = document.querySelector(".btn2-2");
btn2_2.onclick = function () {
    document.querySelector("#myImage").src = "https://www.w3schools.com/js/pic_bulbon.gif";
}
let btn3_1 = document.querySelector(".btn3-1");
btn3_1.onclick = function () {
    document.querySelector('#ct3').style.fontSize = '12px';
}
let btn3_2 = document.querySelector(".btn3-2");
btn3_2.onclick = function () {
    document.querySelector('#ct3').style.fontSize = '40px';
}
let btn4_1 = document.querySelector(".btn4-1");
btn4_1.onclick = function () {
    document.querySelector('#ct4').style.display = 'none';
}
let btn4_2 = document.querySelector(".btn4-2");
btn4_2.onclick = function () {
    document.querySelector('#ct4').style.display = 'block';
}