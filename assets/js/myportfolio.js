const infoBtn = document.getElementById('info--btn');
const workBtn = document.getElementById('work--btn');
const reviewBtn = document.getElementById('review--btn');
const infoDisplay = document.getElementById('myportfolio--info');
const workDisplay = document.getElementById('myportfolio--work');
const reviewDisplay = document.getElementById('myportfolio--review');



workBtn.addEventListener("click", function(event) {
    workDisplay.style.display = "block"; // Adjust the display property as needed
    infoDisplay.style.display = "none"; // Adjust the display property as needed
    reviewDisplay.style.display = "none"; // Adjust the display property as needed
    workBtn.style.borderBottom = "#7600BC solid 4px"; // Adjust the border
    workBtn.style.paddingBottom = ".1rem"; // Adjust the border
    infoBtn.style.borderBottom = "none"; // Adjust the border
    infoBtn.style.paddingBottom = "0"; // Adjust the border
    reviewBtn.style.borderBottom = "none"; // Adjust the border
    reviewBtn.style.paddingBottom = "0"; // Adjust the border
    
})


infoBtn.addEventListener("click", function(event) {
    infoDisplay.style.display = "block"; // Adjust the display property as needed
    workDisplay.style.display = "none"; // Adjust the display property as needed
    reviewDisplay.style.display = "none"; // Adjust the display property as needed
    infoBtn.style.borderBottom = "#7600BC solid 4px"; // Adjust the border
    infoBtn.style.paddingBottom = ".1rem"; // Adjust the border
    workBtn.style.borderBottom = "none"; // Adjust the border
    workBtn.style.paddingBottom = "0"; // Adjust the border
    reviewBtn.style.borderBottom = "none"; // Adjust the border
    reviewBtn.style.paddingBottom = "0"; // Adjust the border
    
})


reviewBtn.addEventListener("click", function(event) {
    infoDisplay.style.display = "none"; // Adjust the display property as needed
    workDisplay.style.display = "none"; // Adjust the display property as needed
    reviewDisplay.style.display = "block"; // Adjust the display property as needed
    infoBtn.style.borderBottom = "none"; // Adjust the border
    infoBtn.style.paddingBottom = "0"; // Adjust the border
    workBtn.style.borderBottom = "none"; // Adjust the border
    workBtn.style.paddingBottom = "0"; // Adjust the border
    reviewBtn.style.borderBottom = "#7600BC solid 4px"; // Adjust the border
    reviewBtn.style.paddingBottom = ".1rem"; // Adjust the border
    
})








// jobsButton.addEventListener("click", function(event) {
//     jobsDisplay.style.display = "block"; // Adjust the display property as needed
//     portfolioDisplay.style.display = "none"; // Adjust the display property as needed
//     hireButton.style.color = "#8E8E8E"; // Adjust the color
//     jobsButton.style.color = "#fff"; // Adjust the color
//     resultsnoDisplay.style.display = "none"; // Adjust the display property as needed
//     hireButton.style.borderBottom = "none"; // Adjust the border
//     jobsButton.style.borderBottom = "1px solid #fff"; // Adjust the border
//     jobsiconDisplay.style.display = "block"; // Display post jobs icon
//     searchiconPadding.style.paddingRight = "2.2rem"; // Adjust search icon
// })

// hireButton.addEventListener("click", function(event) {
//     portfolioDisplay.style.display = "block"; // Adjust the display property as needed
//     jobsDisplay.style.display = "none"; // Adjust the display property as needed
//     hireButton.style.color = "#fff"; // Adjust the color
//     jobsButton.style.color = "#8E8E8E"; // Adjust the color
//     resultsnoDisplay.style.display = "block"; // Adjust the display property as needed
//     hireButton.style.borderBottom = "1px solid #fff"; // Adjust the border
//     jobsButton.style.borderBottom = "none"; // Adjust the border
//     jobsiconDisplay.style.display = "none"; // Display none
//     searchiconPadding.style.paddingRight = "1rem"; // Adjust search icon
// })