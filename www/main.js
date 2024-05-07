$(document).ready(function () {
    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn",
        },
        out: null
    });

    //siri configuration

    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",  //can easely be switched to ios
        speed: 0.07,
        amplitude: 1,
        autostart: true
      });

      //Siri message animation
        $('.siri-message').textillate({
            loop: true,
            sync: true,
            in: {
                effect: "fadeInUp",
                sync: true,
            },
            out: {
                effect: "fadeOutUp",
                sync: true,
            }
        });

        //mic button pressed
        $("#MicBtn").click(function () { 
            eel.playAssistantSound()
            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.takecommand()()
        });


});

