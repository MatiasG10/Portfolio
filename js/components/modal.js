
/* Project Modal Management System

 @author Pablo Matias Ganne Moreno
 @copyright © 2025 Pablo Matias Ganne Moreno. Todos los derechos reservados.
 @description Gestión de modales para proyectos con animaciones
 @version 1.0
 @license Soy creyente de compartir código para que sea mejorado,
         pero también de una previa charla y reconocimiento.
         
         Contáctame y tras aprobación, ¡eres libre de usarlo!
         Email: gannematias10@gmail.com
*/

document.addEventListener('click', function (e) {
    const projectCard = e.target.closest('.project-card');
    if (projectCard) {
        const projectTitle = projectCard.getAttribute('data-title');
        const projectData = projectDetails[projectTitle];

        if (projectData) {
            openModal(projectData);
        }
    }
});

// Cerrar modal clickeando fuera
document.getElementById('project-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Apertura del modal
function openModal(projectData) {
    document.getElementById('modal-title').textContent = projectData.title;
    document.getElementById('modal-description').textContent = projectData.description;
    document.getElementById('modal-link').href = projectData.link;

    const images = Array.isArray(projectData.image) ? projectData.image : [projectData.image];
    const sliderContainer = document.getElementById('modal-image-slider');

    sliderContainer.innerHTML = '';

    images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${projectData.title} - Imagen ${index + 1}`;
        img.className = 'modal-image';
        sliderContainer.appendChild(img);
    });

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    projectData.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tech-tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    const modal = document.getElementById('project-modal');
    const dialog = modal.querySelector('.project-modal-dialog');

    dialog.style.scale = '0';
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    dialog.offsetHeight;

    requestAnimationFrame(() => {
        dialog.style.scale = '1';
    });
}

// Función closeModal
function closeModal() {
    const modal = document.getElementById('project-modal');
    const dialog = modal.querySelector('.project-modal-dialog');

    dialog.style.scale = '0';

    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        dialog.style.scale = '1';
    }, 300);
}