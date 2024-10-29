

$( function() {
    $(".draggable").draggable();
} );



$( function() {
    $( ".resizable" ).resizable();
} );



//OPEN SHORTCUTS

function openFunction() {
    $(".preview").addClass("open");
}

function playFunction() {
    $(".music").addClass("open");
    const audio = new Audio("APT.mp3");
    audio.play();
    musicBringToFront();
}

function websiteFunction() {
	$(".safari").addClass("website");
}



// BRING TO FRONT

function safariBringToFront() {
	document.getElementById('safari').style.zIndex = '20';
	document.getElementById('finder').style.zIndex = 'initial';
	document.getElementById('preview').style.zIndex = 'initial';
    document.getElementById('music').style.zIndex = 'initial';
};
function finderBringToFront() {
	document.getElementById('finder').style.zIndex = '20';
	document.getElementById('safari').style.zIndex = 'initial';
	document.getElementById('preview').style.zIndex = 'initial';
    document.getElementById('music').style.zIndex = 'initial';
};
function previewBringToFront() {
	document.getElementById('preview').style.zIndex = '20';
	document.getElementById('safari').style.zIndex = 'initial';
	document.getElementById('finder').style.zIndex = 'initial';
    document.getElementById('music').style.zIndex = 'initial';
};
function musicBringToFront() {
	document.getElementById('music').style.zIndex = '20';
	document.getElementById('safari').style.zIndex = 'initial';
	document.getElementById('finder').style.zIndex = 'initial';
    document.getElementById('preview').style.zIndex = 'initial';
};



// ICON RAISE

function folderRaise() {
	document.getElementById('folder').style.zIndex = '10';
	document.getElementById('jpg').style.zIndex = 'initial';
	document.getElementById('mp3').style.zIndex = 'initial';
};
function jpgRaise() {
	document.getElementById('jpg').style.zIndex = '10';
	document.getElementById('folder').style.zIndex = 'initial';
	document.getElementById('mp3').style.zIndex = 'initial';
};
function mp3Raise() {
	document.getElementById('mp3').style.zIndex = '10';
	document.getElementById('folder').style.zIndex = 'initial';
	document.getElementById('jpg').style.zIndex = 'initial';
};



// DATE AND TIME

function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);