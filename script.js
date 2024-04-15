var audio, playButton;
function initAudioPlayer() {
    audio = new Audio();
    audio.src = "buttonintro.mp3";
    audio.loop = false;
    playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function () {
        audio.play();
    });
}

window.addEventListener("load", initAudioPlayer);


document.getElementById("calcu").onclick = function () {
    window.location.href("camcalc.html", "_blank");
};