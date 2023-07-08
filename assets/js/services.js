const clickButton = document.getElementById("search-bar");
const targetElement = document.getElementById("btn-wrap");

clickButton.addEventListener("click", function(event) {
  targetElement.style.display = "none";
  event.stopPropagation(); // Stop the click event from propagating to document
});

// Click event listener for document
document.addEventListener("click", function(event) {
  if (!clickButton.contains(event.target)) {
    targetElement.style.display = "block"; // Adjust the display property as needed
    event.stopPropagation(); // Stop the click event from propagating to document
  }
});



