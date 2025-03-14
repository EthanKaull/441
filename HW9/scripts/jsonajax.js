 $(document).ready(function () {
            $("button").click(function () {
                $("#smashInformation").load("data/smash.json", function(responseText){
                    var smash = JSON.parse(responseText);
                    $("#smashInformation").html("Controller: " + smash.controller 
                + "<br><b>Hours I Have:</b>" + smash.hours + "<br>First Name:" + smash.player.firstName + "<br>Last Name:" 
                + smash.player.lastName + "<br>Mains Available:<br>" +
                smash.mains[0] + "<br>" + smash.mains[1] + "<br>" + smash.mains[2] + "<br>" + smash.mains[3]);
                });
            });
        });