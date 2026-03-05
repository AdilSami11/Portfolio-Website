const icon = document.querySelector(".ri-menu-fill");
const menu = document.querySelector(".nav-links-wrapper");
const menu_links = document.querySelectorAll(".nav-links-wrapper a");

icon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// remove the menu when link get triggered
menu_links.forEach((links) => {
  links.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
