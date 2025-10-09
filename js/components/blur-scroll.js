// Funcionalidad para blur con scroll

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