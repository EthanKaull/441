function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Disarm The Bomb") {
        document.getElementById("story").innerHTML = "You look at both of the wires. One of them has to be cut. Which one are you choosing?";
        document.getElementById("choice1").innerHTML = "The Blue Wire";
        document.getElementById("choice2").innerHTML = "The Yellow Wire";
    } else if (choice == 2 && answer2 == "Totally Give Up and Cry") {
        document.getElementById("story").innerHTML = "You cower in the corner and accept your fate. Honestly I had more faith in you." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "The Blue Wire") {
        document.getElementById("story").innerHTML = "Whew. It looks like the clock on the front stopped. But wait. You flip the bomb over and there's a SECOND timer?! The First Must've been a decoy. This time there's a lock. What do you try?";
        document.getElementById("choice1").innerHTML = "1234 (Maybe our arch nemesis is dumber than we thought.";
        document.getElementById("choice2").innerHTML = "It's got to be 0916. It's his mother's birthday. We used to be best friends, I would know.";
    } else if (choice == 2 && answer2 == "The Yellow Wire") {
        document.getElementById("story").innerHTML = "The world goes in in a blaze of glory. You should've known our arch nemisis hated the color yellow." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "1234 (Maybe our arch nemesis is dumber than we thought.") {
        document.getElementById("story").innerHTML = "It looks like we underestimated him. The bomb went off." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "It's got to be 0916. It's his mother's birthday. We used to be best friends, I would know.") {
        document.getElementById("story").innerHTML = "Quick thinking. It looks like the lock opened and the sticks of dynamite were able to be removed just in time." +"<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    }
   
}