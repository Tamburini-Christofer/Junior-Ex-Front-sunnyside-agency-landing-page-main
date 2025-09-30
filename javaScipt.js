const bottone = document.querySelector(".menu");
const menu = document.querySelector(".burgerMenu");

bottone.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
});
