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
