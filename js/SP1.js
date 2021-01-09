for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
        let i = x + 1 + 5 * y;
        document.querySelector('.btn' + i).style.marginTop = 137 + 87 * y + "px";
        document.querySelector('.btn' + i).style.marginLeft = 20 + 95 * x + "px";
        document.querySelector('.btn' + i + ' img').style.display = "none";
        document.querySelector('.btn' + i).onclick = function () {
            if (document.querySelector('.btn' + i + ' img').style.display == "none") {
                document.querySelector('.btn' + i + ' img').style.display = "block";
            }
            else {
                document.querySelector('.btn' + i + ' img').style.display = "none";
            }
        }
    }
}