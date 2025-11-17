// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

            behavior: 'smooth'

        
        });
    });
});





// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleBtn.innerHTML = document.body.classList.contains('light-mode') 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Typing Effect
const typingElement = document.getElementById('typing');
const roles = ['Full Stack Developer', 'Software Engineer', 'Web Designer', 'Tech Enthusiast'];
let index = 0, charIndex = 0, currentRole = '', isDeleting = false;

function typeEffect() {
    currentRole = roles[index];
    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
        } else {
            setTimeout(typeEffect, 100);
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, 50);
        }
    }
}
typeEffect();







toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Change icon dynamically
    if (body.classList.contains('light-mode')) {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});



const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-wrapper img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');



function showSlide(n) {
    index = (n + slides.length) % slides.length;
    sliderWrapper.style.transform = `translateX(${-index * 350}px)`;
}

nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));








let currentIndex = 0;
const wrapper = document.getElementById('sliderWrapper');
const totalImages = wrapper.children.length;

function slide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalImages - 1;
    if (currentIndex >= totalImages) currentIndex = 0;
    wrapper.style.transform = `translateX(-${currentIndex * 350}px)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
    slide(1);
}, 3000);












