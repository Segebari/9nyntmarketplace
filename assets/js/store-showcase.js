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



const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');
const dots = [];

let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].style.opacity = 0;
  currentSlide = index;
  slides[currentSlide].style.opacity = 1;
  updatePagination();
}

function createPagination() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => showSlide(i));
    pagination.appendChild(dot);
    dots.push(dot);
  }
}

function updatePagination() {
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

createPagination();

setInterval(() => {
  let nextSlide = (currentSlide + 1) % slides.length;
  showSlide(nextSlide);
}, 3000); // Change slide every 3 seconds
