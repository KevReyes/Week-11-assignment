window.onload = rotate;
var thePic = 0;
var arrMyPix = new Array("images/bird1.jpg", "images/bird2.jpg", "images/bird3.jpg", "images/bird4.jpg");

function rotate(){
    thePic++;
    if (thePic == arrMyPix.length) {
        thePic = 0;
    }
document.getElementById("myPicture").src = arrMyPix[thePic];
setTimeout(rotate, 2 * 1000);
return false;
}