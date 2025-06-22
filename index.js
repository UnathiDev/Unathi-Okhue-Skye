// Utility function to convert hex to RGB for rgba() in CSS variables
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

/* =====================================================================
   GLOBAL JAVASCRIPT LOGIC
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Set RGB variables for rgba() use in CSS (must run after CSS is loaded)
    const updateRgbCssVariables = () => {
        const rootStyle = getComputedStyle(document.documentElement);
        document.documentElement.style.setProperty('--color-bg-primary-rgb', hexToRgb(rootStyle.getPropertyValue('--color-bg-primary').trim()));
        document.documentElement.style.setProperty('--color-bg-secondary-rgb', hexToRgb(rootStyle.getPropertyValue('--color-bg-secondary').trim()));
        document.documentElement.style.setProperty('--color-accent-blue-rgb', hexToRgb(rootStyle.getPropertyValue('--color-accent-blue').trim()));
    };

    updateRgbCssVariables(); // Initial call on load

    // Update current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    /* =====================================================================
       NAVIGATION & ACTIVE LINK LOGIC
       ===================================================================== */
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-links');

    // Handle mobile menu toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', false);
                }
            }
        });
    });

    // Set active class for current page in navigation
    const currentPath = window.location.pathname.split('/').pop(); // e.g., 'index.html', 'projects.html'

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === '' && linkPath === 'index.html') { // Handle root index.html
            link.classList.add('active');
        } else if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    /* =====================================================================
       SHARE PROFILE BUTTON LOGIC (Home/Profile Page Specific)
       ===================================================================== */
    const shareButton = document.getElementById('share-profile-btn');
    if (shareButton) { // Ensure button exists on the current page
        const shareMessage = document.createElement('div');
        shareMessage.classList.add('share-message');
        shareMessage.textContent = 'Link copied to clipboard!';
        shareButton.parentNode.insertBefore(shareMessage, shareButton.nextSibling); // Insert after button

        shareButton.addEventListener('click', async () => {
            try {
                if (navigator.share) {
                    // Web Share API is available
                    await navigator.share({
                        title: document.title,
                        text: `Check out ${document.title}'s professional profile!`,
                        url: window.location.href
                    });
                } else {
                    // Fallback to clipboard copy
                    await navigator.clipboard.writeText(window.location.href);
                    shareMessage.classList.add('show');
                    setTimeout(() => {
                        shareMessage.classList.remove('show');
                    }, 3000); // Hide after 3 seconds
                }
            } catch (error) {
                console.error('Sharing failed:', error);
                // You might want a different message for actual failures
                shareMessage.textContent = 'Failed to share.';
                shareMessage.classList.add('show');
                setTimeout(() => {
                    shareMessage.classList.remove('show');
                }, 3000);
            }
        });
    }

    // =====================================================================
    // PAGE SECTION ANIMATION ON LOAD (for the current page)
    // Applies 'active' class to the section on page load
    // =====================================================================
    const currentPageSection = document.querySelector('.page-section'); // Assumes only one .page-section per HTML file
    if (currentPageSection) {
        // Use a slight delay after DOMContentLoaded to ensure CSS is parsed
        setTimeout(() => {
            currentPageSection.classList.add('active');
        }, 100);
    }
});

/* =====================================================================
   PROJECTS PAGE MODAL LOGIC (Specific to projects.html but in main.js)
   ===================================================================== */
// Utility function to convert hex to RGB for rgba() in CSS variables
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

/* =====================================================================
   GLOBAL JAVASCRIPT LOGIC
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Set RGB variables for rgba() use in CSS (must run after CSS is loaded)
    const updateRgbCssVariables = () => {
        const rootStyle = getComputedStyle(document.documentElement);
        document.documentElement.style.setProperty('--color-bg-primary-rgb', hexToRgb(rootStyle.getPropertyValue('--color-bg-primary').trim()));
        document.documentElement.style.setProperty('--color-bg-secondary-rgb', hexToRgb(rootStyle.getPropertyValue('--color-bg-secondary').trim()));
        document.documentElement.style.setProperty('--color-accent-blue-rgb', hexToRgb(rootStyle.getPropertyValue('--color-accent-blue').trim()));
    };

    updateRgbCssVariables(); // Initial call on load

    // Update current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    /* =====================================================================
       NAVIGATION & ACTIVE LINK LOGIC
       ===================================================================== *
    
    
    
    
    
    
    

    /* =====================================================================
       SHARE PROFILE BUTTON LOGIC (Home/Profile Page Specific)
       ===================================================================== */
    const shareButton = document.getElementById('share-profile-btn');
    if (shareButton) { // Ensure button exists on the current page
        const shareMessage = document.createElement('div');
        shareMessage.classList.add('share-message');
        shareMessage.textContent = 'Link copied to clipboard!';
        shareButton.parentNode.insertBefore(shareMessage, shareButton.nextSibling); // Insert after button

        shareButton.addEventListener('click', async () => {
            try {
                if (navigator.share) {
                    // Web Share API is available
                    await navigator.share({
                        title: document.title,
                        text: `Check out ${document.title}'s professional profile!`,
                        url: window.location.href
                    });
                } else {
                    // Fallback to clipboard copy
                    await navigator.clipboard.writeText(window.location.href);
                    shareMessage.classList.add('show');
                    setTimeout(() => {
                        shareMessage.classList.remove('show');
                    }, 3000); // Hide after 3 seconds
                }
            } catch (error) {
                console.error('Sharing failed:', error);
                // You might want a different message for actual failures
                shareMessage.textContent = 'Failed to share.';
                shareMessage.classList.add('show');
                setTimeout(() => {
                    shareMessage.classList.remove('show');
                }, 3000);
            }
        });
    }

    // =====================================================================
    // PAGE SECTION ANIMATION ON LOAD (for the current page)
    // Applies 'active' class to the section on page load
    // =====================================================================
    const currentPageSection = document.querySelector('.page-section'); // Assumes only one .page-section per HTML file
    if (currentPageSection) {
        // Use a slight delay after DOMContentLoaded to ensure CSS is parsed
        setTimeout(() => {
            currentPageSection.classList.add('active');
        }, 100);
    }


    /* =====================================================================
       PROJECTS PAGE MODAL LOGIC (Specific to projects.html but in main.js)
       ===================================================================== */
    const projectModal = document.getElementById('project-modal');
    const modalCloseButton = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-project-title');
    const modalImage = document.getElementById('modal-project-image');
    const modalDescription = document.getElementById('modal-project-description');
    const modalTechUsed = document.getElementById('modal-project-tech-used');
    const modalGithubLink = document.getElementById('modal-github-link');
    const modalShareButton = document.getElementById('modal-share-button');
    let currentProjectUrl = ''; // To store the URL for sharing

    // Dummy project data (replace with your actual projects)
    const projectsData = [
        {
            id: 'sustainable-farm',
            name: 'Sustainable Farm Management',
            brief: 'Python system for optimizing resource usage in agriculture.',
            image: 'images/project1.jpg', // Placeholder image
            extendedDescription: 'Developed a robust Python-based system utilizing Django for backend logic and PostgreSQL for data management. It integrates with IoT sensors to monitor soil moisture, temperature, and nutrient levels, providing real-time analytics to optimize irrigation and fertilization. The goal is to reduce water consumption by up to 30% and minimize chemical runoff, promoting truly sustainable agricultural practices.',
            technologies: ['Python', 'Django', 'PostgreSQL', 'IoT Integration', 'Data Analytics'],
            github: 'https://github.com/yourusername/sustainable-farm',
            liveDemo: '#'
        },
        {
            id: 'eco-ecommerce',
            name: 'Eco-Friendly E-commerce Backend',
            brief: 'Java Spring Boot backend emphasizing minimal data footprint.',
            image: 'images/project2.jpg', // Placeholder image
            extendedDescription: 'Designed and implemented an energy-efficient backend for an e-commerce platform using Java Spring Boot. Focused on optimizing database queries and API response times to reduce server load and energy consumption. Features include secure user authentication, product catalog management, and order processing, all built with scalability and sustainability in mind.',
            technologies: ['Java', 'Spring Boot', 'REST API', 'MongoDB', 'Microservices'],
            github: 'https://github.com/yourusername/eco-ecommerce',
            liveDemo: '#'
        },
        {
            id: 'ai-waste-sorter',
            name: 'AI-Powered Waste Sorter (Concept)',
            brief: 'Conceptual project using computer vision for waste segregation.',
            image: 'images/project3.jpg', // Placeholder image
            extendedDescription: 'A conceptual research project exploring the feasibility of using computer vision and machine learning (developed with C++ and OpenCV) for automated waste segregation. The system aims to identify different types of waste materials (plastics, paper, glass) to improve recycling efficiency in smart city environments. While conceptual, it highlights a practical application of AI in environmental sustainability.',
            technologies: ['C++', 'OpenCV', 'Machine Learning', 'Computer Vision', 'AI'],
            github: 'https://github.com/yourusername/ai-waste-sorter',
            liveDemo: '#'
        },
        {
            id: 'cloud-cost-optimizer',
            name: 'Cloud Cost Optimizer',
            brief: 'Tool to analyze cloud resource usage for sustainability.',
            image: 'images/project4.jpg', // Placeholder image
            extendedDescription: 'Developed a prototype tool for analyzing cloud resource consumption patterns to identify areas for cost reduction and environmental impact minimization. It provides recommendations for rightsizing instances, optimizing storage, and scheduling workloads to reduce overall energy footprint in cloud environments. Built with Python and leverages cloud provider APIs.',
            technologies: ['Python', 'Cloud APIs (AWS/Azure)', 'Cost Optimization', 'Sustainability'],
            github: 'https://github.com/yourusername/cloud-cost-optimizer',
            liveDemo: '#'
        }
        // Add more projects here
    ];

    // Function to open the project modal
    function openProjectModal(project) {
        modalTitle.textContent = project.name;
        modalImage.src = project.image;
        modalImage.alt = project.name;
        modalDescription.textContent = project.extendedDescription;
        modalGithubLink.href = project.github;
        currentProjectUrl = project.liveDemo === '#' ? project.github : project.liveDemo; // Use live demo if available, else github
        modalShareButton.dataset.projectUrl = currentProjectUrl;

        // Populate technologies
        modalTechUsed.innerHTML = ''; // Clear previous tags
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.classList.add('highlight-tag');
            span.textContent = tech;
            modalTechUsed.appendChild(span);
        });

        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }

    // Function to close the project modal
    function closeProjectModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listener for "Learn More" buttons
    document.querySelectorAll('.project-learn-more-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const projectId = event.target.dataset.projectId;
            const project = projectsData.find(p => p.id === projectId);
            if (project) {
                openProjectModal(project);
            }
        });
    });

    // Event listeners for closing the modal
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', closeProjectModal);
    }
    if (projectModal) {
        projectModal.addEventListener('click', (event) => {
            if (event.target === projectModal) { // Only close if clicking on the overlay itself
                closeProjectModal();
            }
        });
    }

    // Share button inside modal
    if (modalShareButton) {
        const shareProjectMessage = document.createElement('div');
        shareProjectMessage.classList.add('share-message');
        shareProjectMessage.textContent = 'Project link copied!';
        modalShareButton.parentNode.insertBefore(shareProjectMessage, modalShareButton.nextSibling);

        modalShareButton.addEventListener('click', async (event) => {
            const urlToShare = event.target.dataset.projectUrl || window.location.href; // Fallback to current page if no specific project URL
            try {
                if (navigator.share) {
                    await navigator.share({
                        title: modalTitle.textContent,
                        text: `Check out my project: ${modalTitle.textContent} - ${modalDescription.textContent.substring(0, 50)}...`,
                        url: urlToShare
                    });
                } else {
                    await navigator.clipboard.writeText(urlToShare);
                    shareProjectMessage.classList.add('show');
                    setTimeout(() => {
                        shareProjectMessage.classList.remove('show');
                    }, 3000);
                }
            } catch (error) {
                console.error('Project sharing failed:', error);
                shareProjectMessage.textContent = 'Failed to share project.';
                shareProjectMessage.classList.add('show');
                setTimeout(() => {
                    shareProjectMessage.classList.remove('show');
                }, 3000);
            }
        });
    }

});

// --- Project Modal Functionality ---
document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButtons = document.querySelectorAll('.project-learn-more-btn');
    const closeButtons = document.querySelectorAll('.modal .close-button');
    const modalsContainer = document.getElementById('project-modals'); // This isn't strictly needed if we target individual modals, but good to have a handle

    // Open Modal
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            const modalId = `${projectId}-modal`;
            const targetModal = document.getElementById(modalId);

            if (targetModal) {
                targetModal.style.display = 'flex';
                document.body.classList.add('modal-open'); // Add class to body to prevent scrolling
            }
        });
    });

    // Close Modal
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal'); // Find the parent modal
            if (modal) {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open'); // Remove class
            }
        });
    });

    // Close Modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) { // Check if the click was directly on the modal backdrop
            event.target.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });

    // Close Modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="display: block"]');
            if (openModal) {
                openModal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        }
    });
});