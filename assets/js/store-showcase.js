let isDown = false;
let startX;
let scrollLeft;

const productsScroll = document.querySelector('.products-scroll');

productsScroll.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - productsScroll.offsetLeft;
  scrollLeft = productsScroll.scrollLeft;
});

productsScroll.addEventListener('mouseleave', () => {
  isDown = false;
});

productsScroll.addEventListener('mouseup', () => {
  isDown = false;
});

productsScroll.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - productsScroll.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed if needed
  productsScroll.scrollLeft = scrollLeft - walk;
});



const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

function showSlide(n) {
  slideIndex = n;
  if (slideIndex >= dots.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = dots.length - 1;
  }
  
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

function plusSlide(n) {
  showSlide(slideIndex + n);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

setInterval(() => plusSlide(1), 3000); // Auto advance every 3 seconds

showSlide(slideIndex);
