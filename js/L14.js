let div_big = document.querySelector('.big');
let div_big_img = document.querySelector('.big .img img');
div_big.onclick = function () {
    div_big.style.display = 'none';
    div_big_img.src = '';
};

// for (let i = 1; i <= 20; i++) {
//     document.querySelector('.photo' + i).setAttribute("num", i);
//     document.querySelector('.photo' + i).onclick = function () {
//         let myNum = this.getAttribute("num");
//         document.querySelector('.big .img img').src = document.querySelector('.photo' + myNum + ' img').src;
//         div_big.style.display = 'block';
//     };
// }

let data_ary = ['img/photo1.jpg', 'img/photo2.jpg', 'img/photo3.jpg', 'img/photo4.jpg', 'img/photo5.jpg', 'img/photo6.jpg', 'img/photo7.jpg', 'img/photo8.jpg', 'img/photo9.jpg', 'img/photo10.jpg', 'img/photo11.jpg', 'img/photo12.jpg', 'img/photo13.jpg', 'img/photo14.jpg', 'img/photo15.jpg', 'img/photo16.jpg', 'img/photo17.jpg', 'img/photo18.jpg', 'img/photo19.jpg', 'img/photo20.jpg']
for (let i = 1; i <= 20; i++) {
    document.querySelector('.photo' + i + ' img').src = data_ary[i - 1];
    document.querySelector('.photo' + i).setAttribute("num", i);
    document.querySelector('.photo' + i).onclick = function () {
        let myNum = this.getAttribute("num");
        document.querySelector('.big .img img').src = data_ary[myNum - 1];
        div_big.style.display = 'block';
    };
}

