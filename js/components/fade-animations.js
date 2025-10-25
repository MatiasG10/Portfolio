

/* Fade Animations with Intersection Observer

 @author Pablo Matias Ganne Moreno
 @copyright © 2025 Pablo Matias Ganne Moreno. Todos los derechos reservados.
 @description Sistema de animaciones suaves al hacer scroll
 @version 1.0
 @license Soy creyente de compartir código para que sea mejorado,
         pero también de una previa charla y reconocimiento.
         
         Contáctame y tras aprobación, ¡eres libre de usarlo!
         Email: gannematias10@gmail.com
*/

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