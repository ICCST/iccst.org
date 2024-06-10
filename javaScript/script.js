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
    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        let closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = '&times;';
        overlay.appendChild(closeBtn);

        closeBtn.onclick = () => {
            overlay.style.display = 'none';
        };
    }

    // Display the overlay with the clicked image
    overlay.innerHTML = `<span class="close">&times;</span><img src="${img.src}" alt="${img.alt}">`;
    overlay.style.display = 'flex';

    // Add close event
    overlay.querySelector('.close').onclick = () => {
        overlay.style.display = 'none';
    };
}


