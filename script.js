document.addEventListener('DOMContentLoaded', () => {
    // Current Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    mobileToggle.addEventListener('click', () => {
        const isActive = mobileMenu.classList.toggle('active');
        // Simple animation for hamburger
        const spans = mobileToggle.querySelectorAll('span');
        if (isActive) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Typewriter Effect
    const roles = ["Project Manager", "Software Quality Assurance"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    const typewriterElement = document.getElementById('typewriter');

    function typeWriter() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // Start typing effect adding a cursor via CSS in JS
    typewriterElement.style.borderRight = "3px solid var(--primary)";
    typewriterElement.style.paddingRight = "4px";

    // blinking cursor effect
    setInterval(() => {
        typewriterElement.style.borderColor = typewriterElement.style.borderColor === 'transparent' ? 'var(--primary)' : 'transparent';
    }, 500);

    typeWriter();

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    function checkReveals() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveals);
    checkReveals(); // Check on load
});
