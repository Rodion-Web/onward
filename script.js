// Управление слайдером отзывов
const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.getElementById("testimonials-prev-btn");
const nextBtn = document.getElementById("testimonials-next-btn");

// Определяем ширину одной карточки с учетом отступов
const cardWidth = testimonialCards[0].offsetWidth + 20; // 20px — расстояние между карточками

// Прокрутка назад
prevBtn.addEventListener("click", () => {
  testimonialSlider.scrollLeft -= cardWidth;
});

// Прокрутка вперед
nextBtn.addEventListener("click", () => {
  testimonialSlider.scrollLeft += cardWidth;
});

// Автоматическая прокрутка (опционально, если нужно)
let autoScrollInterval = setInterval(() => {
  if (
    testimonialSlider.scrollLeft + testimonialSlider.offsetWidth >=
    testimonialSlider.scrollWidth
  ) {
    testimonialSlider.scrollLeft = 0; // Возвращаемся к началу, если достигли конца
  } else {
    testimonialSlider.scrollLeft += cardWidth;
  }
}, 5000); // Автопрокрутка каждые 5 секунд

// Остановка автопрокрутки при наведении мыши
testimonialSlider.addEventListener("mouseover", () => {
  clearInterval(autoScrollInterval);
});

// Возобновление автопрокрутки при уходе мыши
testimonialSlider.addEventListener("mouseout", () => {
  autoScrollInterval = setInterval(() => {
    if (
      testimonialSlider.scrollLeft + testimonialSlider.offsetWidth >=
      testimonialSlider.scrollWidth
    ) {
      testimonialSlider.scrollLeft = 0;
    } else {
      testimonialSlider.scrollLeft += cardWidth;
    }
  }, 5000);
});

// Пример других функций (если они нужны для меню или других слайдеров)

// Тоггл для бургер-меню
document.getElementById("burger-menu").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Управление другим слайдером (пример для секции с фото)
const photoSlider = document.querySelector(".photo-slider");

// Если хотите добавить управление для секции фотографий
document.querySelector("#photo-prev-btn")?.addEventListener("click", () => {
  photoSlider.scrollLeft -= photoSlider.offsetWidth;
});

document.querySelector("#photo-next-btn")?.addEventListener("click", () => {
  photoSlider.scrollLeft += photoSlider.offsetWidth;
});
