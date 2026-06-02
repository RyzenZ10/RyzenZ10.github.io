// Esperamos a que todo el documento HTML (DOM) se cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Selección de elementos del DOM
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.header__nav-link');

    // 2. Evento para abrir/cerrar el menú al hacer clic en el botón (hamburguesa)
    menuBtn.addEventListener('click', () => {
        // 'toggle' añade la clase si no existe, y la quita si ya existe
        navMenu.classList.toggle('header__nav--active');
    });

    // 3. Evento para cerrar el menú automáticamente al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Removemos la clase activa para ocultar el menú
            navMenu.classList.remove('header__nav--active');
        });
    });

});