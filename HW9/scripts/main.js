 let smash = {
                "controller" : "Pro Controller",
                "hours" : "3000+",
                "player" : {
                    "firstName" : "Ethan",
                    "lastName" : "Kaull"
                },
                "mains" : [
                    "Chrom",
                    "King K Rool",
                    "Joker",
                    "Falco"
                ]
            }
        
        $(function () {
            $("button").click(function () {
                showSmashInfo();
            });

        });
       
        function showSmashInfo()
            {
                $("#smashInformation").html("<b>Controller I Use:</b> " + smash.controller
                + "<br><b>Hours I Have:</b>" + smash.hours + "<br><b>First Name:</b>" + smash.player.firstName + "<br><b>Last Name:</b>" 
                + smash.player.lastName + "<br><b>Ethan's Mains:</b><br>" +
                smash.mains[0] + "<br>" + smash.mains[1] + "<br>" + smash.mains[2] + "<br>" + smash.mains[3]);
            }