document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links
    const shareButton = document.getElementById('shareSiteBtn');
    const heroButtons = document.querySelectorAll('.scroll-to-section'); // Select hero buttons
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinksWrapper = document.querySelector('.nav-links-wrapper'); // The wrapper for navigation links

    // Splash Screen Logic: Fades out after 3 seconds
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden';
        mainContent.style.display = 'block'; // Show main content
        // Optional: Trigger a fade-in for main content
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 0.5s ease-in';
        }, 50); // Small delay to allow display:block to take effect
    }, 3000); // 3 seconds splash screen

    // Smooth Scrolling for Navigation Links and Hero Buttons
    function setupSmoothScrolling(elements) {
        elements.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                // Close mobile menu if open
                if (navLinksWrapper.classList.contains('active')) {
                    hamburgerMenu.classList.remove('active');
                    navLinksWrapper.classList.remove('active');
                }

                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Adjust scroll position for fixed header
                    const headerOffset = document.querySelector('header').offsetHeight;
                    const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupSmoothScrolling(navLinks); // Apply to main navigation links
    setupSmoothScrolling(heroButtons); // Apply to hero section buttons

    // Hamburger Menu Toggle: For mobile navigation
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navLinksWrapper.classList.toggle('active');
    });

    // Share Site Button Logic: Uses Web Share API for native sharing
    shareButton.addEventListener('click', async () => {
        const url = window.location.href; // Get current page URL
        const title = document.title;
        const text = `Check out ${title} - a portfolio showcasing sustainable computing!`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: text,
                    url: url,
                });
                console.log('Site shared successfully!');
            } catch (error) {
                console.error('Error sharing site:', error);
                // Fallback message if sharing fails or is cancelled
                alert('Could not share the site. Please try copying the link manually.');
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            // Provides a prompt to copy the URL
            prompt("Your browser does not support native sharing. You can share this site by copying the link:", url);
        }
    });
});
