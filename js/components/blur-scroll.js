/*Blur Effect on Scroll
 
 @author Pablo Matias Ganne Moreno
 @copyright © 2025 Pablo Matias Ganne Moreno. Todos los derechos reservados.
 @description Aplica efecto de desenfoque progresivo al hacer scroll
 @version 1.0
 @license Soy creyente de compartir código para que sea mejorado,
         pero también de una previa charla y reconocimiento.
         
         Contáctame y tras aprobación, ¡eres libre de usarlo!
         Email: gannematias10@gmail.com
*/ 

const mainAfter = document.createElement('style');
document.head.appendChild(mainAfter);

window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
    const scrollY = window.scrollY;

    let blurAmount = 0;

    if (scrollY > homeBottom - window.innerHeight / 2) {
        blurAmount = Math.min((scrollY - homeBottom + window.innerHeight / 2) / 100, 8);
    }

    mainAfter.innerHTML = `
        main::after {
            backdrop-filter: blur(${blurAmount}px);
        }
    `;
});