let menu = document.querySelector(".menu-link")
let menuBtn = document.querySelector(".menu-icon")
let menuBtnIcon = document.querySelector(".menu-icon svg")

const oppenMenu = document.querySelector(".open__Menu");
const closeMenu = document.querySelector(".close__Menu");
closeMenu.style.display = "none"


menuBtn.addEventListener("click", function () {
    if (menuBtnIcon.classList.contains("open__Menu")) {
        menu.style.left = "0"
        menuBtnIcon.classList = "close__Menu"
        oppenMenu.style.display = "none";
        closeMenu.style.display = "block";
    }
    else {
        menuBtnIcon.classList.contains("close__Menu")
        menu.style.left = "-16rem"
        menuBtnIcon.classList = "open__Menu"
        closeMenu.style.display = "none";
        oppenMenu.style.display = "block";
    }
})