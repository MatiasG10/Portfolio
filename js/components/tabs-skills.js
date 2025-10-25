
/*Skills Tabs Controller

 @author Pablo Matias Ganne Moreno
 @copyright © 2025 Pablo Matias Ganne Moreno. Todos los derechos reservados.
 @description Controlador de pestañas para sección de habilidades
 @version 1.0
 @license Soy creyente de compartir código para que sea mejorado,
         pero también de una previa charla y reconocimiento.
         
         Contáctame y tras aprobación, ¡eres libre de usarlo!
         Email: gannematias10@gmail.com
 */

const skillsTabs = document.querySelectorAll(".skills-tab-button");
const skillsContents = document.querySelectorAll(".skills-tab-content");

skillsTabs.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.dataset.tab;

        skillsTabs.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        skillsContents.forEach(content => {
            content.classList.toggle("active", content.id === `skills-tab-${target}`);
        });
    });
});