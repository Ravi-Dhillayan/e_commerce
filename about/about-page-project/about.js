// filepath: about-page-project/about-page-project/about.js

// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Dynamic text animation
const journeyText = document.querySelector('.journey-text');
const journeyContent = [
    "Hello! I'm a passionate developer.",
    "I love creating dynamic web applications.",
    "My journey started with a simple HTML page.",
    "Now, I build full-stack applications using modern technologies."
];

let index = 0;

function displayNextText() {
    journeyText.textContent = journeyContent[index];
    index = (index + 1) % journeyContent.length;
}

setInterval(displayNextText, 3000);

// Toggle function for more information
const moreInfoButton = document.getElementById('moreInfoButton');
const moreInfoContent = document.getElementById('moreInfoContent');

moreInfoButton.addEventListener('click', () => {
    moreInfoContent.classList.toggle('visible');
    moreInfoButton.textContent = moreInfoContent.classList.contains('visible') ? 'Show Less' : 'Show More';
});