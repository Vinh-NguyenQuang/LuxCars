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

// View Toggle Functionality
const viewButtons = document.querySelectorAll('.view-btn');
const carsGrid = document.querySelector('.cars-grid');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        viewButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Toggle grid/list view
        if (button.dataset.view === 'list') {
            carsGrid.classList.add('list-view');
        } else {
            carsGrid.classList.remove('list-view');
        }
    });
});

// Price Range Slider
const priceRange = document.querySelector('.price-range input[type="range"]');
const minPriceInput = document.querySelector('.price-inputs input:first-child');
const maxPriceInput = document.querySelector('.price-inputs input:last-child');

// Update price inputs when slider changes
priceRange.addEventListener('input', () => {
    const value = priceRange.value;
    maxPriceInput.value = value;
});

// Update slider when price inputs change
minPriceInput.addEventListener('change', () => {
    const min = parseInt(minPriceInput.value);
    const max = parseInt(maxPriceInput.value);
    if (min > max) {
        minPriceInput.value = max;
    }
});

maxPriceInput.addEventListener('change', () => {
    const min = parseInt(minPriceInput.value);
    const max = parseInt(maxPriceInput.value);
    if (max < min) {
        maxPriceInput.value = min;
    }
    priceRange.value = max;
});

// Reset Filters
const resetBtn = document.querySelector('.reset-btn');
const filterSelects = document.querySelectorAll('.filter-group select');

resetBtn.addEventListener('click', () => {
    // Reset all select elements
    filterSelects.forEach(select => {
        if (select.multiple) {
            Array.from(select.options).forEach(option => option.selected = false);
        } else {
            select.selectedIndex = 0;
        }
    });

    // Reset price range
    priceRange.value = 250000;
    minPriceInput.value = '';
    maxPriceInput.value = '';
});

// Pagination
const pageNumbers = document.querySelectorAll('.page-number');
const prevBtn = document.querySelector('.pagination-btn:first-child');
const nextBtn = document.querySelector('.pagination-btn:last-child');

pageNumbers.forEach(number => {
    number.addEventListener('click', () => {
        // Remove active class from all numbers
        pageNumbers.forEach(num => num.classList.remove('active'));
        // Add active class to clicked number
        number.classList.add('active');
    });
});

prevBtn.addEventListener('click', () => {
    const activePage = document.querySelector('.page-number.active');
    const prevPage = activePage.previousElementSibling;
    if (prevPage && prevPage.classList.contains('page-number')) {
        activePage.classList.remove('active');
        prevPage.classList.add('active');
    }
});

nextBtn.addEventListener('click', () => {
    const activePage = document.querySelector('.page-number.active');
    const nextPage = activePage.nextElementSibling;
    if (nextPage && nextPage.classList.contains('page-number')) {
        activePage.classList.remove('active');
        nextPage.classList.add('active');
    }
});

// Book Now Button Animation
const bookNowBtns = document.querySelectorAll('.book-now-btn');

bookNowBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Filter Functionality
const filterGroups = document.querySelectorAll('.filter-group select');

filterGroups.forEach(select => {
    select.addEventListener('change', () => {
        // Here you would typically make an API call to filter the cars
        // For now, we'll just log the selected values
        const selectedValues = Array.from(select.selectedOptions).map(option => option.value);
        console.log(`${select.previousElementSibling.textContent}:`, selectedValues);
    });
}); 