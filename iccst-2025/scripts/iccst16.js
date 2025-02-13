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
    overlay.appendChild(imageEl)

    //Buttons functionallity
    closeBtn.onclick = () => { overlay.style.display = 'none'; };
    prevBtn.onclick = () => showImage(currentIndex, - 1);
    nextBtn.onclick = () => showImage(currentIndex, 1);


    //Slider functionallity
    let images = document.querySelectorAll('.overlay>img');

    //Setting a correct index form preview pictures array
    let imagesArray = document.querySelectorAll('figure>img');
    let currentIndex = Array.from(imagesArray).indexOf(img);

    // Method show Images
    function showImage(index, delta) {
        index = index + delta;
        if (index >= imagesArray.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = imagesArray.length - 1;
        } else {
            currentIndex = index;
        }

        imageEl.src = imagesArray[currentIndex].src.replace("preview_", "");
        imageEl.alt = imagesArray[currentIndex].alt
    }

    showImage(currentIndex, 0);

    overlay.style.display = 'flex';
}


/*
 * Page loading & menu operation
 */
function toggleMenu() {
    $('.navContainer').toggleClass('navResponsive');
}

function toggleButton(event) {
    //prevent the default anchor behavior
    event.preventDefault();

    // activation of burger menu
    $('.navContainer').addClass('navResponsive');
}

function loadPage(event, page, btnClass, anchor) {
    $.get(page, function(data, status) {
        if (status === "success") {
            $("#CONTENT").html(data);
            toggleButton(event);

            document.body.scrollTop = 0;
            if (anchor !== undefined) {
                document.location.hash = anchor
                window.history.replaceState({path: "/iccst-2025/"}, "", "/iccst-2025/");
            }
        }
    });
}

$().ready(function() {
    let page = document.location.search;
    window.history.replaceState({path: "/iccst-2025/"}, "", "/iccst-2025/");
    if ((page.length < 2) || (!  /^[0-9A-Za-z_]+$/.test(page.substring(1)))) {
        page = "html/home.html";
    } else {
        page = "html/" + page.substring(1) + ".html";
    }
    $.get(page, function(data, status) {
        if (status === "success") {
            $("#CONTENT").html(data);
        }
    }).fail(function(error) {
            console.log("Page load failed: " + page);
            $.get("html/home.html", function(data, status) {
                if (status === "success") {
                    $("#CONTENT").html(data);
                }
        });
    });
});
