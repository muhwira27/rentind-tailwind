// TOGGLE MENU

const navToggle = document.getElementById("nav-toggle"),
    navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("top-14");
    navMenu.classList.toggle("top-[-1000%]");
});