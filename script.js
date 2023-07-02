const nav = document.querySelector(".nav-bar-links");
const links = document.querySelectorAll(".link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");


closeIcon.style.display = 'none';

function toggleMenu() {
    if (nav.classList.contains("showMenu")) {
        nav.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        nav.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)