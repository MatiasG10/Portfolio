
/*Project Modal Management System

 @author Pablo Matias Ganne Moreno
 @copyright © 2025 Pablo Matias Ganne Moreno. Todos los derechos reservados.
 @description Gestión de modales para proyectos con animaciones
 @version 1.0
 @license Soy creyente de compartir código para que sea mejorado,
         pero también de una previa charla y reconocimiento.
         
         Contáctame y tras aprobación, ¡eres libre de usarlo!
         Email: gannematias10@gmail.com
*/

const projectDetails = {
  "3impacto": {
    title: "3impacto",
    description: "Trabajé en el Front End de 3impacto, maquetando interfaces con HTML y CSS, dándoles estilos responsive y agregando funcionalidades con JavaScript. Me encargué de que los datos, imágenes e iconos se cargaran correctamente, optimizando el rendimiento y asegurando una buena experiencia de usuario.",
     image: [
      "assets/img/3impacto.JPG",        // Esta es la principal
      "assets/img/match4room.JPG",      // cambiar luego por imagenes correctas
      "assets/img/TasktugoLogin.JPG"    // cambiar luego por imagenes correctas
    ],
    link: "https://3impacto.eco/",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  "match4room": {
    title: "match4room",
    description: "Desarrollo del frontend para match4room, plataforma de búsqueda de roommates. Implementé interfaces responsivas y funcionalidades de búsqueda avanzada.",
    image: "assets/img/match4room.JPG",
    link: "https://match4room.com/",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"]
  },
  "Tasktugo": {
    title: "Tasktugo",
    description: "Sistema de gestión de tareas desarrollado con Aptugo. Implementación de interfaces y funcionalidades de gestión de proyectos.",
    image: "assets/img/TasktugoLogin.JPG",
    link: "https://tasktugo.aptugo.com/",
    tags: ["Aptugo", "Frontend", "Gestión de tareas"]
  },
  "Univerzip": {
    title: "Univerzip",
    description: "Plataforma educativa desarrollada para gestión de contenido universitario.",
    image: "assets/img/Univerzip.JPG",
    link: "https://univerzip.aptugo.app/",
    tags: ["Aptugo", "Education", "Responsive"]
  },
  "devcitos": {
    title: "devcitos",
    description: "Proyecto de transición a desarrollador frontend.",
    image: "assets/img/Devcitos.JPG",
    link: "https://devcitos.aptugo.app/",
    tags: ["Aptugo", "Frontend", "Training"]
  },
  "Portfolio": {
    title: "Portfolio",
    description: "Mi primer portfolio desarrollado durante la formación.",
    image: "assets/img/miPrimerPort.JPG",
    link: "https://portafoliomatyg.aptugo.app/",
    tags: ["HTML", "CSS", "Portfolio"]
  },
  "blog cyberpunk": {
    title: "blog cyberpunk",
    description: "Proyecto de graduación en Aptugo con temática cyberpunk.",
    image: "assets/img/proyectoCyberpunk.JPG",
    link: "https://cyberpunk.aptugo.app/",
    tags: ["Aptugo", "Blog", "Cyberpunk"]
  },
  "Catamarket": {
    title: "Catamarket",
    description: "Proyecto interdisciplinario universitario con enfoque en eficiencia hídrica y marketplace local.",
    image: "assets/img/catamarket.JPG",
    link: "https://catamarket-original.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Universidad"]
  },
  "Tutorias UNCA": {
    title: "Tutorias UNCA",
    description: "Plataforma de tutorías para la Universidad Nacional de Catamarca.",
    image: "assets/img/tutoriasUNCA.JPG",
    link: "https://uncatutorias.aptugo.app/",
    tags: ["Aptugo", "Education", "Universidad"]
  },
  "Sistema de Riego Automatizado": {
    title: "Sistema de Riego Automatizado",
    description: "Proyecto universitario premiado a nivel provincial para sistema de riego eficiente.",
    image: "assets/img/Image-primary.jpg",
    link: "#",
    tags: ["Arduino", "IoT", "Universidad", "Premiado"]
  }
};