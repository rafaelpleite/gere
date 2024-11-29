// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Get all page sections
    const pages = document.querySelectorAll('.page-section');

    // Function to hide all pages
    function hideAllPages() {
        pages.forEach((page) => {
            page.classList.remove('active');
        });
    }

    // Function to show a page
    function showPage(pageId) {
        document.getElementById(pageId).classList.add('active');
    }

    // Add click event listeners to nav links
    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            hideAllPages();
            showPage(pageId);
            // Optionally update the URL hash
            window.location.hash = pageId;
        });
    });

    // Handle page load with hash
    function loadPageFromHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const pageExists = document.getElementById(hash);
            if (pageExists) {
                hideAllPages();
                showPage(hash);
            }
        } else {
            // Default page
            hideAllPages();
            showPage('home');
        }
    }

    // Load the correct page on initial load
    loadPageFromHash();

    // Handle back/forward buttons
    window.addEventListener('hashchange', loadPageFromHash);
});



document.addEventListener('DOMContentLoaded', function () {
    /* FAQ CONTROLLER EXPANDABLE */
    // Select all FAQ question buttons
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((button) => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling; // Get the next sibling, which is the answer div
            const isExpanded = button.getAttribute("aria-expanded") === "true";

            // Toggle the expanded state
            button.setAttribute("aria-expanded", !isExpanded);
            
            // Show or hide the answer
            if (isExpanded) {
                answer.style.display = "none"; // Hide the answer
            } else {
                answer.style.display = "block"; // Show the answer
            }
        });
    });


    // Mobile menu control
    const mobileOpen = document.getElementById('mobile-open');
    const mobileClose = document.getElementById('mobile-close');
    const mobileNav = document.getElementById('mobile-nav');

    mobileOpen.addEventListener('click', function() {
        mobileNav.style.display = 'block';
        mobileOpen.style.display = 'none';
        mobileClose.style.display = 'block';
    });

    mobileClose.addEventListener('click', function() {
        mobileNav.style.display = 'none';
        mobileOpen.style.display = 'block';
        mobileClose.style.display = 'none';
    });

    // Login modal control
    const loginModal = document.getElementById('login-container');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeButton = document.querySelector('.close-button');
    const loginButtonDesktop = document.getElementById('login-button-desktop');
    const loginButtonMobile = document.getElementById('login-button-mobile');

    function openModal() {
        loginModal.style.display = 'block';
        modalOverlay.style.display = 'block';
    }

    function closeModal() {
        loginModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    }

    if (loginButtonDesktop) {
        loginButtonDesktop.addEventListener('click', function(event) {
            event.preventDefault();
            openModal();
        });
    }

    if (loginButtonMobile) {
        loginButtonMobile.addEventListener('click', function(event) {
            event.preventDefault();
            openModal();
        });
    }

    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Register modal control
    const registerModal = document.getElementById('register-container');
    const registerButton = document.getElementById('register-button');
    const registerCloseButton = document.querySelector('.register-close-button');
    const registerOverlay = document.getElementById('register-overlay');
    const registerButtonMobile = document.getElementById('register-button-mobile');

    if (registerButtonMobile) {
        registerButtonMobile.addEventListener('click', function(event) {
            event.preventDefault();
            openRegisterModal();
        });
    };

    function openRegisterModal() {
        registerModal.style.display = 'block';
        registerOverlay.style.display = 'block';
    }

    function closeRegisterModal() {
        registerModal.style.display = 'none';
        registerOverlay.style.display = 'none';
    }

    registerButton.addEventListener('click', function(event) {
        event.preventDefault();
        openRegisterModal();
    });

    registerCloseButton.addEventListener('click', closeRegisterModal);
    registerOverlay.addEventListener('click', closeRegisterModal);
});


mobileOpen.addEventListener('click', function() {
    mobileNav.classList.add('active');
    mobileOpen.style.display = 'none';
    mobileClose.style.display = 'block';
});

mobileClose.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    mobileOpen.style.display = 'block';
    mobileClose.style.display = 'none';
});