// Funcionalidad para barra de navegación

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