// activation of burger menu
function toggleMenu() {
    const navMenu = document.querySelector('.menuList')
    navMenu.classList.toggle('active')
}

// Animation for burger menu
document.querySelector('.burgerMenu').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active')
})

