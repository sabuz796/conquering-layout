let toggleBtn = document.querySelector(".toggle-btn");
let navList = document.querySelector(".nav-list");
// let navList = document.querySelector(".nav-list");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("menu-show");
});
