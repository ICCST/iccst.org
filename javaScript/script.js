//JQUERY

// $(document).ready(function () {
//     $(".btn1").click(function () {
//         $.ajax({
//             url: "./html/page1.html",
//             method: "GET",
//             success: function (response) {
//                 $(".content").html(response);
//             },
//             error: function () {
//                 alert("Fehler beim Laden der Seite");
//             }
//         });
//     });
// });


// JAVASCRIPT
let btn1 = document.querySelector(".btn1");


function changePage() {

    // Load of page content
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./html/page1.html", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let pageContent = xhr.responseText;
            let page = document.querySelector(".content");
            page.innerHTML = pageContent;

            // Add event listener for images
            addImageClickListeners();


        }
    }
    xhr.send();
}
btn1.onclick = changePage;

function addImageClickListeners() {
    //Event delegation fo dynamic added pages
    document.querySelector('.content').addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            openImageInOverlay(event.target);
        }
    });
}

function openImageInOverlay(img) {

    // generation of overlay view
    let overlay = document.querySelector('.overlay');
    document.body.appendChild(overlay);

    let closeBtn = document.querySelector('.close');
    overlay.appendChild(closeBtn);

    let prevBtn = document.querySelector('.prev');
    overlay.appendChild(prevBtn);

    let nextBtn = document.querySelector('.next');
    overlay.appendChild(nextBtn)

    let imageEl = document.createElement('img')
    imageEl.src = img.src;
    imageEl.alt = img.alt;
    overlay.appendChild(imageEl)

    //Buttons functionallity 
    closeBtn.onclick = () => { overlay.style.display = 'none'; };
    prevBtn.onclick = () => showImage(currentIndex - 1);
    nextBtn.onclick = () => showImage(currentIndex + 1);


    //Slider functionallity
    let images = document.querySelectorAll('.overlay>img')
    console.log(images.length)
    let currentIndex = 0;

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


