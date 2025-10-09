
// Animación suave para secciones

const fadeInElements = document.querySelectorAll('[class*="fade-in"]');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Agregar con retardo
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100); // 100ms entre cada uno
        } else {
            // Volver a ocultar para reanimar si se vuelve a la sección
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(el => fadeObserver.observe(el));