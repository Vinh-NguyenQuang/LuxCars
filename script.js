// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
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
                navLinks.style.display = 'none';
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

// Add CSS for modal and animations
const style = document.createElement('style');
style.textContent = `
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1000;
        justify-content: center;
        align-items: center;
    }
    
    .modal-content {
        background-color: white;
        padding: 2rem;
        border-radius: 10px;
        max-width: 800px;
        width: 90%;
        position: relative;
    }
    
    .close-modal {
        position: absolute;
        right: 1rem;
        top: 1rem;
        font-size: 2rem;
        cursor: pointer;
    }
    
    .modal-body img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
    
    .car-specs {
        margin: 1.5rem 0;
    }
    
    .car-specs ul {
        list-style: none;
        padding: 0;
    }
    
    .car-specs li {
        margin: 0.5rem 0;
    }
    
    .schedule-test-drive {
        display: block;
        width: 100%;
        padding: 1rem;
        background-color: #c0392b;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .schedule-test-drive:hover {
        background-color: #a93226;
    }
    
    .animate {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    header.scroll-down {
        transform: translateY(-100%);
    }
    
    header.scroll-up {
        transform: translateY(0);
    }
    
    header {
        transition: transform 0.3s ease;
    }
`;

document.head.appendChild(style); 