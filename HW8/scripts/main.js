var imgSelector = "#daftPunk";
var allImages = new Array();
class DaftPunkInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var daftPunk = new DaftPunkInfo("#daftPunk", "images/daftpunk.jpg");
    allImages.push(daftPunk);

}
function moveSquare()
{
    $("#square").animate({left:2500}).animate({top:400}).animate({left:0}).animate({top:300});
}
function moveSquare()
{
    $("#square1").animate({left:2300}).animate({top:450}).animate({left:50}).animate({top:350});
}
$(document).ready(function(){
    initializeArray();
    console.log(allImages.length);
    console.log(allImages[0].toString());
    console.log(allImages[0].theSelector);
    console.log(allImages[0].theImagePath);
    $(allImages[0].theSelector).attr("src", allImages[0].theImagePath);
    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#paragraph").toggle();
           setInterval(moveSquare, 1000);
        
        $(allImages[0].theSelector).fadeOut().fadeIn();
        
    });
    
});

