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

const hireButton = document.getElementById("hire-btn");
const jobsButton = document.getElementById("jobs-btn");
const portfolioDisplay = document.getElementById("porfolio-section");
const jobsDisplay = document.getElementById("jobs-section");
const resultsnoDisplay = document.getElementById("results-no");

jobsButton.addEventListener("click", function(event) {
    jobsDisplay.style.display = "block"; // Adjust the display property as needed
    portfolioDisplay.style.display = "none"; // Adjust the display property as needed
    hireButton.style.color = "#8E8E8E"; // Adjust the color
    jobsButton.style.color = "#fff"; // Adjust the color
    resultsnoDisplay.style.display = "none"; // Adjust the display property as needed
    hireButton.style.borderBottom = "none"; // Adjust the border
    jobsButton.style.borderBottom = "1px solid #fff"; // Adjust the border

})

hireButton.addEventListener("click", function(event) {
    portfolioDisplay.style.display = "block"; // Adjust the display property as needed
    jobsDisplay.style.display = "none"; // Adjust the display property as needed
    hireButton.style.color = "#fff"; // Adjust the color
    jobsButton.style.color = "#8E8E8E"; // Adjust the color
    resultsnoDisplay.style.display = "block"; // Adjust the display property as needed
    hireButton.style.borderBottom = "1px solid #fff"; // Adjust the border
    jobsButton.style.borderBottom = "none"; // Adjust the border
})

