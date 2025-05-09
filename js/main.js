
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});


let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    
    lastScrollTop = scrollTop;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = navbarHeight;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            
            navLinks.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });
});


const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});


const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        
        console.log('Form submitted:', data);
        
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message Sent!';
        submitBtn.disabled = true;
        
        
        contactForm.reset();
        
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
}


const style = document.createElement('style');
style.textContent = `
    .mobile-menu-btn span.active:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn span.active:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn span.active:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    
    const skillsSlider = document.querySelector('.skills-slider');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    
    if (skillsSlider && prevButton && nextButton) {
        
        const cardWidth = 300; 
        const cardGap = 20;    
        const scrollAmount = cardWidth + cardGap;
        
        
        const cardsToScroll = 1;
        
        prevButton.addEventListener('click', function() {
            skillsSlider.scrollBy({
                left: -scrollAmount * cardsToScroll,
                behavior: 'smooth'
            });
        });
        
        nextButton.addEventListener('click', function() {
            skillsSlider.scrollBy({
                left: scrollAmount * cardsToScroll,
                behavior: 'smooth'
            });
        });
    }
}); 