menuBtn = document.querySelector(".hamburger");
menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function() {
  menuBtn.classList.toggle("click");
  menu.classList.toggle("open");
});
