$(document).ready(function () {
    

    //Display Message
eel.expose(DisplayMessage)
function DisplayMessage(message) {

    $(".siri-message li:first").text(message);
    $('.siri-message').textillate('start');
}

    // Display hood
    eel.expose(ShowHood)
    function ShowHood() {
        $("#Oval").attr("hidden", false);
        $("#SiriWave").attr("hidden", true);
    }


});