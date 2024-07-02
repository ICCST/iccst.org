// JAVASCRIPT
let btn2 = document.querySelector(".btn2");


function changePage() {

    // Load of page content
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./html/introduction.html", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let pageContent = xhr.responseText;
            let page = document.querySelector(".content");
            page.innerHTML = pageContent;

        }
    }
    xhr.send();
}
btn2.onclick = changePage;