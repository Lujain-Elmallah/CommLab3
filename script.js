const horrorCastTitle = document.querySelector('.glowing-text .line');

function startBlinking() {
    horrorCastTitle.classList.add('blink');
}

function stopBlinking() {
    horrorCastTitle.classList.remove('blink');
}

startBlinking();

