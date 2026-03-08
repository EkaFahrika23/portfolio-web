document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.className = 'theme-toggle-btn';
    themeToggleBtn.setAttribute('aria-label', 'Toggle Theme');
    themeToggleBtn.innerHTML = `
        <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    `;

    // Add to navbar
    const navActions = document.querySelector('.nav-actions');
    const mobileMenu = document.getElementById('mobile-menu');

    if (navActions) {
        navActions.insertBefore(themeToggleBtn, navActions.firstChild);
    }

    if (mobileMenu) {
        const themeRow = document.createElement('div');
        themeRow.style.display = 'flex';
        themeRow.style.justifyContent = 'space-between';
        themeRow.style.alignItems = 'center';
        themeRow.style.padding = '10px 0';
        themeRow.style.borderTop = '1px solid var(--glass-border)';
        themeRow.style.marginTop = '10px';
        themeRow.innerHTML = '<span style="font-size: 0.9rem; font-weight: 500; color: var(--text-main);">Dark Mode</span>';

        const mobileToggle = themeToggleBtn.cloneNode(true);
        themeRow.appendChild(mobileToggle);
        mobileMenu.appendChild(themeRow);

        mobileToggle.addEventListener('click', () => {
            toggleTheme();
        });
    }

    // Check for saved theme or system preference
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    function toggleTheme() {
        let theme = 'light';
        if (document.documentElement.getAttribute('data-theme') !== 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            theme = 'dark';
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
    }

    themeToggleBtn.addEventListener('click', toggleTheme);

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

    // Handle direct tab navigation via URL hash or parameter
    function handleTabNavigation() {
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');
        const hash = window.location.hash;

        if (tabParam === 'qa' || hash === '#tab-qa' || hash === '#qa') {
            const qaBtn = document.querySelector('.nav-tab-btn[data-target="tab-qa"]');
            if (qaBtn) qaBtn.click();
        } else if (tabParam === 'pm' || hash === '#tab-pm' || hash === '#pm') {
            const pmBtn = document.querySelector('.nav-tab-btn[data-target="tab-pm"]');
            if (pmBtn) pmBtn.click();
        }
    }

    // Run on load
    handleTabNavigation();

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

    // Lightbox Functionality
    const sliderItems = document.querySelectorAll('.slider-item');
    const body = document.body;

    // Create Lightbox Element
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close Lightbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        <img src="" alt="Full size preview">
    `;
    body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    sliderItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const imgAlt = item.querySelector('img').alt;

            lightboxImg.src = imgSrc;
            lightboxImg.alt = imgAlt;
            lightbox.classList.add('active');
            body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        body.style.overflow = ''; // Restore scrolling
    };

    lightboxClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    lightbox.addEventListener('click', closeLightbox);
});
