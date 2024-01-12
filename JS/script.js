// ? ELEMETNS SELECTION -

const navBtn = document.querySelector(".nav__menu");
const navContainer = document.querySelector(".nav_container");

// ? EVENT HANDLERS - 

navBtn.addEventListener("click", function () {
	navContainer.classList.toggle("nav--open");
});
