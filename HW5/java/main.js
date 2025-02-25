var imageTags = ["first", "second", "third", "fourth"];
var blankImagePath = "images/back.jpg";
var actualImages = new Array();
    
function cardDeck()
{
    randomArray();
    for(var i = 0; i < imageTags.length; i++)
    { 
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
}

function randomArray()
{
    var actualImagePath = ["images/dragon.jpg", "images/snake.webp"];
    var count = [0,0];
    while(actualImages.length < 4)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }    
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
}