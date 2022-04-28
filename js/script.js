
    var menuItems = document.getElementById("menuItems");
    menuItems.style.maxHeight = "0px";

    function menutoggle() {
        if (menuItems.style.maxHeight == "0px") {
            menuItems.style.maxHeight = "200px";
        } else {
            menuItems.style.maxHeight = "0px";
        }
    };
// Menu Js
 var showcaseImage = document.getElementById("showcaseImage");
 var buttonImage = document.getElementsByClassName("buttonImage")

 buttonImage[0].onclick = function(){
     showcaseImage.src = buttonImage[0].src;
 }

 buttonImage[1].onclick = function(){
    showcaseImage.src = buttonImage[1].src;
}

buttonImage[2].onclick = function(){
    showcaseImage.src = buttonImage[2].src;
}

buttonImage[3].onclick = function(){
    showcaseImage.src = buttonImage[3].src;
}

