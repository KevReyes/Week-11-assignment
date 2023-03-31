window.onload = initImages;  

function initImages() {
    for (var i=0; i<document.images.length; i++) {
        document.images[i].ondblclick = newWindow;
        }
}  

function newWindow() {
    var imgName ="W11 assignment/" + this.src + ".jpg"; 
    var imgWindow = window.open(imgName, "width=320,height=240,scrollbars=no") 

}