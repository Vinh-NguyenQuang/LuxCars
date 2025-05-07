// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.hamburger') && !event.target.closest('.nav-links')) {
        navLinks.classList.remove('active');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Header Scroll Effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Car Details Modal
const carCards = document.querySelectorAll('.car-card');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="modal-body"></div>
    </div>
`;
document.body.appendChild(modal);

carCards.forEach(card => {
    card.querySelector('.details-btn').addEventListener('click', () => {
        const carName = card.querySelector('h3').textContent;
        const carPrice = card.querySelector('p').textContent;
        const carImage = card.querySelector('img').src;
        
        modal.querySelector('.modal-body').innerHTML = `
            <img src="${carImage}" alt="${carName}">
            <h2>${carName}</h2>
            <p>${carPrice}</p>
            <div class="car-specs">
                <h3>Specifications</h3>
                <ul>
                    <li>Engine: V8 Twin-Turbo</li>
                    <li>Horsepower: 496 hp</li>
                    <li>0-60 mph: 4.5 seconds</li>
                    <li>Top Speed: 155 mph</li>
                </ul>
            </div>
            <button class="schedule-test-drive">Schedule Test Drive</button>
        `;
        
        modal.style.display = 'flex';
    });
});

// Close Modal
modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.car-card, .feature, .about-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Brand Carousel
const carouselTrack = document.querySelector('.carousel-track');

// Pause animation on hover
carouselTrack.addEventListener('mouseenter', () => {
    carouselTrack.style.animationPlayState = 'paused';
});

carouselTrack.addEventListener('mouseleave', () => {
    carouselTrack.style.animationPlayState = 'running';
});

// Clone slides for infinite scroll
const slides = document.querySelectorAll('.carousel-slide');
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    carouselTrack.appendChild(clone);
}); 