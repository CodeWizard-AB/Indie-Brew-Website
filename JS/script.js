// ? ELEMETNS SELECTION -

const navBtn = document.querySelector(".nav__menu");
const headerEl = document.querySelector("header");
const navContainer = document.querySelector(".navigation_section");

// ? FUNCTION -

const navObserver = new IntersectionObserver(
	([e]) => {
		if (!e.isIntersecting) {
			navContainer.classList.add("sticky--nav");
		} else {
			navContainer.classList.remove("sticky--nav");
		}
	},
	{
		root: null,
		threshold: 0.2,
		rootMargin: `-${navContainer.getBoundingClientRect().height}px`,
	}
);
navObserver.observe(headerEl);

// ? EVENT HANDLERS -

navBtn.addEventListener("click", function () {
	headerEl.classList.toggle("nav--open");
});
