let clickableImage = document.querySelector('.clickable')
let overlay = document.querySelector('.overlay');

function start() {
    console.log("function started")
    overlay.style.display = "flex";
}


clickableImage.onclick = start;