$(".draggable").draggable({});

function playFunction() {
    const audio = new Audio("audio/fabulous.m4a");
    audio.play(setTimeout);
}

function zuneOn () {
    $(".zune-2").toggleClass("on");
}

function keyboardSound () {
    const audio = new Audio("audio/keyboard.m4a");
    audio.play(setTimeout);
}