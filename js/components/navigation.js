/*Navigation System with Scroll Indicator

 @author Pablo Matias Ganne Moreno
 @copyright © 2025 Pablo Matias Ganne Moreno. Todos los derechos reservados.
 @description Sistema de navegación con indicador visual y scroll suave
 @version 1.0
 @license Soy creyente de compartir código para que sea mejorado,
         pero también de una previa charla y reconocimiento.
         
         Contáctame y tras aprobación, ¡eres libre de usarlo!
         Email: gannematias10@gmail.com
*/

const navLinks = document.querySelectorAll('.navbar-content a');
const sections = document.querySelectorAll('main section');
const indicator = document.querySelector('.nav-indicator');

const moveIndicator = (element) => {
    indicator.style.width = `${element.offsetWidth}px`;
    indicator.style.transform = `translateX(${element.offsetLeft}px)`;
};

// IntersectionObserver para activar el botón correspondiente
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => link.classList.remove('active'));
                const activeLink = document.querySelector(`.navbar-content a[data-section="${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    moveIndicator(activeLink);
                }
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    }
);

sections.forEach((section) => observer.observe(section));

// Iniciar posición del indicador en el botón activo
window.addEventListener('load', () => {
    const activeLink = document.querySelector('.navbar-content a.active');
    if (activeLink) {
        moveIndicator(activeLink);
    }
});

window.addEventListener('resize', () => {
    const activeLink = document.querySelector('.navbar-content a.active');
    if (activeLink) {
        moveIndicator(activeLink);
    }
});