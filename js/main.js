const menu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

function toggleMenu() {
  const expanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!expanded));
  navList.classList.toggle("active");
}

menu.addEventListener("click", toggleMenu);
