document.addEventListener("DOMContentLoaded", function() {
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const navbarCollapse = document.getElementById('navbar-collapse-with-animation');

    menuToggleButton.addEventListener('click', function() {
        navbarCollapse.classList.toggle('hidden');
    });
});
