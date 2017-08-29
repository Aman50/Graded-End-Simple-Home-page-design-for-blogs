
var j = 0;
var url = new Array();
url[0] = "resources/image1.jpg";
url[1] = "resources/image2.jpg";
url[2] = "resources/image3.jpg";
url[3]="resources/image4.jpg";

function image()
{
   document.slideshow.src = url[j];
   if(j < url.length - 1) 
	   j++; 
   else 
	   j = 0;
   setTimeout("image()",1500);
}
function identify() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("button").style.display = "block";
    } else {
        document.getElementById("button").style.display = "none";
    }
}

function goUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onload=image;
window.onscroll = function() {identify()};
