$(".draggable").draggable({});

function staticSound() {
    const audio = new Audio("audio/static.m4a");
    audio.play(setTimeout);
}

function zuneOn () {
    $(".zune-2").toggleClass("on");
}

function keyboardSound () {
    const audio = new Audio("audio/keyboard.m4a");
    audio.play(setTimeout);
}

// function ispySpin () {
//     $(".ispy").toggleClass("spin");
// }

function pjSam () {
    $(".pjsam").toggleClass("spin");
    const audio = new Audio("audio/pj-sam.m4a");
    audio.play(setTimeout);
}

function carsSong () {
    const audio = new Audio("audio/cars.m4a");
    audio.play(setTimeout);
}

function mouseClick () {
    const audio = new Audio("audio/mouse.m4a");
    audio.play(setTimeout);
}

function alligatorSound () {
    const audio = new Audio("audio/alligator.m4a");
    audio.play(setTimeout);
}

function wheelTurn () {
    $(".wheel").toggleClass("turn");
    const audio = new Audio("audio/item-block.m4a");
    audio.play(setTimeout);
}

function wiimote () {
    $(".wiimote").toggleClass("shake");
    const audio = new Audio("audio/mario.m4a");
    audio.play(setTimeout);
}

function cityfolkSong () {
    const audio = new Audio("audio/city-folk.m4a");
    audio.play(setTimeout);
}

function badLlama () {
    const audio = new Audio("audio/bad-llama.m4a");
    audio.play(setTimeout);
}

function walkieTalkie () {
    const audio = new Audio("audio/walkie-talkie.m4a");
    audio.play(setTimeout);
}