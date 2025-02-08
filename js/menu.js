// JavaScript for toggling the hamburger menu
function toggleMenu() {
  document.querySelector(".side-menu").classList.toggle("open");
  document.querySelector(".hamburger-menu").classList.toggle("open");
}

let lastScrollTop = 0;
const header = document.querySelector("header");
const sideMenu = document.querySelector(".side-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.classList.add("hidden");
    sideMenu.classList.remove("open");
    hamburgerMenu.classList.remove("open");
  } else if (scrollTop < lastScrollTop) {
    // Scrolling up
    header.classList.remove("hidden");
    header.classList.add("scrolled"); // Add background color
  }

  if (scrollTop === 0) {
    // Reset when back to top
    header.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop;
});
