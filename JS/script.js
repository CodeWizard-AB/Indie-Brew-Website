// ? ELEMETNS SELECTION -

const navBtn = document.querySelector(".nav__menu");
const headerEl = document.querySelector("header");

// ? EVENT HANDLERS -

navBtn.addEventListener("click", function () {
	headerEl.classList.toggle("nav--open");
});
