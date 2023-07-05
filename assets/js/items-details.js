const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    setRating(index + 1);
  });
});

function setRating(rating) {
  // remove active class from all stars
  stars.forEach((star) => star.classList.remove('active'));

  // add active class to selected stars
  const selectedStars = document.querySelectorAll('.star:nth-child(-n+' + rating + ')');
  selectedStars.forEach((star) => star.classList.add('active'));
}
