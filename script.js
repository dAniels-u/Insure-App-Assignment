
const hamburger = document.querySelector('.hamburger'); // The hamburger menu
const navLinks = document.querySelector('.nav-links'); // The navigation links
const button = document.querySelector('.view button'); // The button inside .view

// Add click event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle 'active' class for nav-links
    button.classList.toggle('active');   // Toggle 'active' class for the button
});
