function addImageClickListeners() {
    //Event delegation fo dynamic added pages
    document.querySelector('.slider').addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            openImageInOverlay(event.target);
        }
    });
}

function openImageInOverlay(img) {

    // div class="overlay" creation
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    let closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    overlay.appendChild(closeBtn);

    let prevBtn = document.createElement('span');
    prevBtn.classList.add('prev');
    prevBtn.innerHTML = '&#10094;';
    overlay.appendChild(prevBtn);

    let nextBtn = document.createElement('span');
    nextBtn.classList.add('next');
    nextBtn.innerHTML = '&#10095;';
    overlay.appendChild(nextBtn);

    let imageEl = document.createElement('img')
    // imageEl.src = img.src;
    // imageEl.alt = img.alt;
    overlay.appendChild(imageEl)

    //Buttons functionallity 
    closeBtn.onclick = () => { overlay.style.display = 'none'; };
    prevBtn.onclick = () => showImage(currentIndex - 1);
    nextBtn.onclick = () => showImage(currentIndex + 1);


    //Slider functionallity
    let images = document.querySelectorAll('.overlay>img')

    //Setting a correct index form preview pictures array 
    let imagesArray = document.querySelectorAll('figure>img')
    let currentIndex = Array.from(imagesArray).indexOf(img) - 1

    // Method show Images
    function showImage(index) {
        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = index;
        }

        imageEl.src = images[currentIndex].src
        imageEl.alt = images[currentIndex].alt
    }

    showImage(currentIndex);

    overlay.style.display = 'flex';
}


function toggleMenu() {
    const navMenu = document.querySelector('.menuList')
    navMenu.classList.toggle('active')
}

/*
// Animation for burger menu
document.querySelector('.burgerMenu').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active')
})
*/

// Buttons functionallity
function toggleButton(event) {
    //prevent the default anchor behavior
    event.preventDefault();

    // activation of burger menu
    const navMenu = document.querySelector('.menuList');
    navMenu.classList.toggle('active');

    // Animation for burger menu
    const burgerButton = document.querySelector('.burgerMenu');
    burgerButton.classList.toggle('is-active');
}

function loadPage(event, page, btnClass) {
    $.get(page, function(data, status) {
        if (status === "success") {
            $("#CONTENT").html(data);
            toggleButton(event);
        }
    });
}
