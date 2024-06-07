//JQUERY

$(document).ready(function () {
    $(".btn1").click(function () {
        $.ajax({
            url: "./html/page1.html",
            method: "GET",
            success: function (response) {
                $(".content").html(response);
            },
            error: function () {
                alert("Fehler beim Laden der Seite");
            }
        });
    });
});


// JAVASCRIPT
// let btn1 = document.querySelector(".btn1");


// function changePage() {

//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "./html/page1.html", true);
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             let pageContent = xhr.responseText;
//             let page = document.querySelector(".content");
//             page.innerHTML = pageContent;
//         }
//     }
//     xhr.send();
// }
// btn1.onclick = changePage;