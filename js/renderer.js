//- Sistema de renderizado para experiencias

/**
 * Renderiza un proyecto individual
 */
function renderProject(project) {
  return `
    <a href="${project.link}" class="project-card">
      <div class="project-image" style="background-image: url('${project.image}');">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
        </div>
        <div class="project-link">
          <iconify-icon icon="material-symbols:arrow-outward"></iconify-icon>
        </div>
      </div>
    </a>
  `;
}

/**
 * Renderiza la galería de proyectos
 */
function renderProjectGallery(projects) {
  if (!projects || projects.length === 0) return '';
  
  const projectsHTML = projects.map(renderProject).join('');
  
  return `
    <div class="projects-links">
      <h4>Selected Projects</h4>
      <div class="project-gallery">
        ${projectsHTML}
      </div>
    </div>
  `;
}

/**
 * Renderiza las responsabilidades
 */
function renderResponsibilities(responsibilities) {
  if (!responsibilities || responsibilities.length === 0) return '';
  
  const responsibilitiesHTML = responsibilities
    .map(resp => `<li>${resp}</li>`)
    .join('');
  
  return `
    <div class="experience-tasks">
      <h4>Key Responsibilities:</h4>
      <ul>
        ${responsibilitiesHTML}
      </ul>
    </div>
  `;
}

/**
 * Renderiza un artículo de experiencia completo
 */
function renderExperienceItem(experience) {
  return `
    <article class="experience-item">
      <div class="experience-header">
        <div class="experience-title-date">
          <h3>${experience.title}</h3>
          <p>
            <time datetime="${experience.period.start}">${experience.period.start}</time> - 
            <time datetime="${experience.period.end}">${experience.period.end}</time>
          </p>
        </div>
        <div class="experience-company">
          <p>${experience.company}</p>
        </div>
      </div>

      <div class="experience-content">
        <p class="experience-description">
          ${experience.description}
        </p>

        ${renderProjectGallery(experience.projects)}
        ${renderResponsibilities(experience.responsibilities)}
      </div>
    </article>
  `;
}

/**
 * Renderiza toda una sección (work o extra)
 */
function renderExperienceSection(experiences, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`No se encontró el contenedor con id: ${containerId}`);
    return;
  }
  
  const html = experiences.map(renderExperienceItem).join('');
  container.innerHTML = html;
}

/**
 * Inicializa todo el contenido
 */
function initExperience() {
  // Verificar que experienceData existe
  if (typeof experienceData === 'undefined') {
    console.error('experienceData no está definido. Asegúrate de cargar data.js antes de renderer.js');
    return;
  }

  // Renderizar experiencia laboral
  renderExperienceSection(experienceData.work, 'tab-work');
  
  // Renderizar proyectos extra
  renderExperienceSection(experienceData.extra, 'tab-extra');

  console.log('✅ Experiencias renderizadas correctamente');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperience);
} else {
  initExperience();
}