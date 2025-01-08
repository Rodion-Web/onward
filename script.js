// Управление слайдером отзывов
const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.getElementById("testimonials-prev-btn");
const nextBtn = document.getElementById("testimonials-next-btn");

// Определяем ширину одной карточки с учетом отступов
const cardWidth = testimonialCards[0]?.offsetWidth + 20; // 20px — расстояние между карточками
if (!cardWidth) {
  console.error("Не удалось вычислить ширину карточек.");
}

// Прокрутка назад
const scrollTestimonials = (direction) => {
  if (cardWidth) {
    testimonialSlider.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth", // Плавная прокрутка
    });
  }
};

prevBtn?.addEventListener("click", () => scrollTestimonials(-1));
nextBtn?.addEventListener("click", () => scrollTestimonials(1));

// Инициализация формы отправки через EmailJS
(function () {
  // Инициализация EmailJS
  emailjs.init("HaJUZiFMfFkdulz9E");

  const form = document.getElementById("contact-form");
  const thankYouMessage = document.querySelector(".thank-you-message");
  const applicationContainer = document.querySelector(".application-container");
  const applicationSection = document.querySelector(".application-section");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Предотвращаем стандартную отправку формы

      // Отправка формы через EmailJS
      emailjs.sendForm("service_wmpraxy", "template_sl99e6e", form).then(
        (response) => {
          // Показать благодарственное сообщение и скрыть форму
          if (thankYouMessage) thankYouMessage.style.display = "block";
          if (applicationContainer) applicationContainer.style.display = "none";
          if (applicationSection)
            applicationSection.style = "display:flex;justify-content:center";
        },
        (error) => {
          console.error("Ошибка отправки формы:", error);
          alert("Упс... Ошибка отправки. Попробуй еще раз.");
        }
      );
    });
  } else {
    console.error("Форма не найдена.");
  }
})();

// Стрелка для прокрутки вниз
const scrollDownBtn = document.getElementById("scrollDown");
const firstBlock = document.querySelector(".condition"); // Первый блок на странице

// Прокрутка вниз при клике на стрелку
scrollDownBtn.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight, // Прокрутить на высоту экрана
    behavior: "smooth", // Плавная прокрутка
  });
});

// Скрыть стрелку после прокрутки до первого блока
window.addEventListener("scroll", () => {
  if (
    firstBlock &&
    window.scrollY >= firstBlock.offsetTop - window.innerHeight
  ) {
    scrollDownBtn.classList.add("hidden"); // Добавляем класс для скрытия стрелки
  } else {
    scrollDownBtn.classList.remove("hidden"); // Убираем класс, если не прокручено до первого блока
  }
});

// Стрелка для прокрутки наверх
const scrollToTopBtn = document.getElementById("scrollToTop");

// Показать/скрыть кнопку в зависимости от прокрутки
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block"; // Показываем кнопку
  } else {
    scrollToTopBtn.style.display = "none"; // Скрываем кнопку
  }
});

// Прокрутка наверх при клике
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная прокрутка
  });
});
