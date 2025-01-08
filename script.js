// Burger menu toggle script
document.getElementById("burger-menu").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Прокрутка влево
document.querySelector("#prev-btn").addEventListener("click", () => {
  slider.scrollLeft -= slider.offsetWidth;
});

// Прокрутка вправо
document.querySelector("#next-btn").addEventListener("click", () => {
  slider.scrollLeft += slider.offsetWidth;
});
