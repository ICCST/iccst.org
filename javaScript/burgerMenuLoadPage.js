// Buttons functionallity
function toggleButton(event) {
    //prevent the default anchor behavior
    event.preventDefault();

    console.log("IAM IN")
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./html/home.html", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let pageContent = xhr.responseText;
            let page = document.querySelector(".content");
            page.innerHTML = pageContent;
        }
    }
    xhr.send();


    // activation of burger menu
    const navMenu = document.querySelector('.menuList')
    navMenu.classList.toggle('active')

    // Animation for burger menu
    const burgerButton = document.querySelector('.burgerMenu');
    burgerButton.classList.toggle('is-active')

}


