const navToggle = document.querySelector(".nav__toggle");
const navBurger = document.querySelector(".nav__burger");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  navBurger.classList.toggle("active");
  navLinks.classList.toggle("active");
});