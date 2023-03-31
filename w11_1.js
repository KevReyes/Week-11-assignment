window.onload = rotate;
var thePic = 0;
var arrMyPix = new Array("bird1.jpg", "bird2.jpg", "bird3.jpg", "bird3.jpg");

function rotate(){
    thePic++;
    if (thePic == arrMyPix.length) {
        thePic = 0;
    }
document.getElementById("myPicture").src = arrMyPix[thePic];
setTimeout(rotate, 2 * 1000);
return false;
}