const menuToggle = document.getElementById('menu-toggle');
const mobileLinks = document.getElementById('mobile-links');

menuToggle.addEventListener('click', () => {
    mobileLinks.classList.toggle('hidden');
});
