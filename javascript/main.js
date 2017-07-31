function typewriter() {
    $('.info').typeIt({
        strings: "Computer Engineering, Michigan State University",
        breakLines: false,
        speed: 60,
        autoStart: false,
        callback: function() {
            $(".icon-links").delay(150).fadeIn()
        }
    });
}

$(document).ready(typewriter());
