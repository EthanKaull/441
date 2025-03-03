var myViewFinderArray = new Array();

class ViewFinder {
    constructor(title, imagePath) {
        this.title = title;
        this.imagePath = imagePath;
    }

    toString() {
        return "Title: " + this.title;
    }

    get theTitle() {
        return this.title;
    }

    get theImagePath() {
        return this.imagePath;
    }
}

function initializeArray() {
    var myViewFinder = new ViewFinder(
        "This is a photo of the Inventor of the Computer, Charles Babbage in the mid-1830s.",
        "images/computer.jpg"
    );

    var myViewFinder1 = new ViewFinder(
        "This is a photo of the signing of the Declaration of Independence in 1776.",
        "images/declaration.jpeg"
    );

    var myViewFinder2 = new ViewFinder(
        "This is a photo of Jim Jones, the leader of the Jonestown cult which took place in Guyana, South America in the 1970s.",
        "images/jimjones.webp"
    );

    var myViewFinder3 = new ViewFinder(
        "This is a photo of the original creator of the electric light bulb, Lewis Latimer in 1881.",
        "images/light.jpg"
    );

    var myViewFinder4 = new ViewFinder(
        "This is a photo of Martin Luther King giving the famous I Have A Dream speech in 1963.",
        "images/mlk.jpeg"
    );

    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
}

function accessInformation() {
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    var selectedViewFinder = myViewFinderArray[randomNumber];

    document.getElementById("title").innerHTML = selectedViewFinder.toString();
    document.getElementById("image").src = selectedViewFinder.theImagePath;
}
