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

    const roles = ["Project Manager", "Software Quality Assurance"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    const typewriterElement = document.getElementById('typewriter');

    if (typewriterElement) {
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
    }

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

    // Tab Switching Logic for Projects
    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    const tabContents = document.querySelectorAll('.project-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.style.display = 'none');

            // Add active class to clicked button
            btn.classList.add('active');

            // Show target content
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).style.display = 'block';

            // Trigger animation
            const targetContent = document.getElementById(targetId);
            targetContent.style.animation = 'none';
            targetContent.offsetHeight; /* trigger reflow */
            targetContent.style.animation = null;
        });
    });

    // View All Projects Toggle
    const viewAllBtns = document.querySelectorAll('.view-all-btn');

    // Initial check: hide View All buttons if no hidden projects exist in that tab
    viewAllBtns.forEach(btn => {
        const tabContent = btn.closest('.project-tab-content');
        const hiddenProjects = tabContent.querySelectorAll('.project-item.hidden-project');
        if (hiddenProjects.length === 0) {
            btn.parentElement.style.display = 'none';
        }
    });

    viewAllBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabContent = btn.closest('.project-tab-content');
            const hiddenProjects = tabContent.querySelectorAll('.project-item.hidden-project');
            const btnSpan = btn.querySelector('span');
            const isExpanding = btnSpan.textContent === 'View All Projects';

            if (isExpanding) {
                hiddenProjects.forEach(project => {
                    project.style.display = 'block';
                    // Trigger reveal for the new items
                    setTimeout(() => project.classList.add('active'), 50);
                });
                btnSpan.textContent = 'Show Less';
                btn.classList.add('active');
            } else {
                hiddenProjects.forEach(project => {
                    project.style.display = 'none';
                    project.classList.remove('active');
                });
                btnSpan.textContent = 'View All Projects';
                btn.classList.remove('active');

                // Scroll back to top of projects section
                tabContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
