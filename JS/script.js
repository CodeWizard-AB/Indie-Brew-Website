// ? ELEMETNS SELECTION -

const navBtn = document.querySelector(".nav__menu");
const headerEl = document.querySelector("header");
const navContainer = document.querySelector(".nav_container");

// ? FUNCTION -

const navObserver = new IntersectionObserver(
	([e]) => {
		if (!e.isIntersecting) {
			navContainer.classList.add("sticky--nav");
			navContainer.classList.remove('container')
		} else {
			navContainer.classList.remove("sticky--nav");
			navContainer.classList.add('container')
			
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
