
// Check hoobies.html to see and click on image to open the image 

var imgViewer = document.getElementById('imageViewer');
function closeView() {
    imgViewer.style.display = "none";
}
function viewImage(ele) {

    var imgEle = document.getElementById('img');
    imgEle.src = ele.src;
    imgViewer.style.display="block";
}