// ? ELEMETNS SELECTION -

const navBtn = document.querySelector(".nav__menu");
const navContainer = document.querySelector(".nav_container");

navBtn.addEventListener("click", function () {
	navContainer.classList.toggle("nav--open");
});
