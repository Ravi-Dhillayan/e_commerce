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
const dynamicText = document.querySelector('.dynamic-text');
const textArray = [
    "Welcome to my About page!",
    "I'm a passionate developer.",
    "I love creating beautiful web applications.",
    "Let's embark on this journey together!"
];
let textIndex = 0;

function changeText() {
    dynamicText.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 3000);

// Photo hover effect
const photo = document.querySelector('.profile-photo');
photo.addEventListener('mouseenter', () => {
    photo.style.transform = 'scale(1.1)';
    photo.style.transition = 'transform 0.3s ease';
});

photo.addEventListener('mouseleave', () => {
    photo.style.transform = 'scale(1)';
});

// Fade in effect for sections
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(el => observer.observe(el));