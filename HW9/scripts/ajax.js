 $(document).ready(function () {
            $("button").click(function () {
                $("#smashInformation").load("data/smashinfo.txt", fadeText);
            });
        });

        function fadeText()
        {
            $("#smashInformation").fadeOut("slow").fadeIn("slow");
        }