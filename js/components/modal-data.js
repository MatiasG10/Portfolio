
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
    description: "Este fue uno de los proyectos más grandes y con mayor cantidad de cambios en los que participé. Desempeñé el rol de desarrollador Front-End utilizando Aptugo, aplicando mis conocimientos en maquetación, estilos y experiencia de usuario. Inicialmente, el proyecto comenzó como una landing page simple, pero evolucionó hasta convertirse en una página de venta de parcelas, lo que implicó múltiples ajustes de diseño y funcionalidad. A lo largo del desarrollo, el cliente solicitó diversas modificaciones, incluyendo tres cambios completos de paleta de colores y tipografías, además de variaciones estructurales y funcionales. Fui responsable de un gran porcentaje de los componentes visuales e interactivos, como tooltips, botones, menús hamburguesa, animaciones y desplazamientos suaves entre secciones, asegurando una navegación fluida y una estética consistente. Gracias a este trabajo, tuve una participación clave en el diseño web del proyecto, aportando tanto en la parte visual como en la experiencia del usuario.",
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
    description: "Participé en este proyecto con el rol de desarrollador Front-End, utilizando Aptugo como herramienta principal. Estuve involucrado en varias etapas del desarrollo, desde la maquetación y aplicación de estilos, hasta la comunicación con el área de diseño, la propuesta de mejoras, la optimización del flujo de usuario, la accesibilidad, el testeo, la carga de datos y la implementación de funcionalidades. Durante la primera etapa, mi trabajo se centró en el desarrollo visual y estructural del sitio. Más adelante, regresé al proyecto para asumir una participación aún más activa, enfocándome en corregir errores funcionales y visuales, así como en mejorar la accesibilidad general del producto. Estas mejoras tuvieron un impacto notable, recibiendo excelentes comentarios por parte de los clientes gracias a la mejora en la experiencia y apariencia del sitio. Además, participé en la definición de nuevos flujos de diseño y en la planificación de mejoras en la experiencia de usuario (UX) para las páginas que se iban incorporando. Actualmente, al 25 de octubre de 2025, el proyecto se encuentra lanzado al mercado, y seguimos trabajando en la incorporación de nuevas mejoras y actualizaciones.",
    image: "assets/img/match4room.JPG",
    link: "https://match4room.com/",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX",]
  },
  "Tasktugo": {
    title: "Tasktugo",
    description: "En Tasktugo desempeñé simultáneamente los roles de desarrollador (Dev) y Project Manager (PM) en este proyecto interno de Aptugo, orientado a replicar funcionalidades de Trello, pero exclusivamente para el uso interno de la empresa. Mi responsabilidad incluyó gestionar el equipo, recopilar requisitos del proyecto y definir las necesidades de Aptugo para optimizar la gestión de tiempos y carga de tareas dentro de la aplicación. Trabajé con un equipo rotativo, coordinando personal de back-end y front-end que se incorporaba al proyecto según las necesidades y luego era asignado a otros desarrollos, garantizando la continuidad y calidad del trabajo. Además, participé activamente en la investigación para implementar mejoras, mantuve comunicación constante con el área de diseño para definir flujos, funcionalidades y entregables, y asumí roles de tester y soporte, resolviendo problemas en front-end y asegurando el correcto funcionamiento de la aplicación. Este proyecto me permitió fortalecer habilidades de liderazgo, gestión de equipos y coordinación de proyectos, mientras seguía desarrollando mis capacidades técnicas en front-end.",
    image: "assets/img/TasktugoLogin.JPG",
    link: "https://tasktugo.aptugo.com/",
    tags: ["Aptugo", "Frontend", "Gestión de tareas"]
  },
  "Univerzip": {
    title: "Univerzip",
    description: "Participé en este proyecto como desarrollador Front-End, utilizando Aptugo como herramienta principal. Este fue mi primer trabajo externo dentro de la empresa, lo que me permitió adquirir una valiosa experiencia en la coordinación y desarrollo de proyectos reales. Mi rol se centró en la maquetación y la implementación de estilos, asegurando que el resultado final respetara fielmente el diseño original planteado por el equipo de diseño. Además, colaboré activamente en gran parte del desarrollo del sitio, incluyendo la creación de un blog completo, siempre manteniendo el enfoque en la coherencia visual, la correcta estructuración del contenido y la calidad en la presentación final.",
    image: "assets/img/Univerzip.JPG",
    link: "https://univerzip.aptugo.app/",
    tags: ["Aptugo", "Education", "Responsive"]
  },
  "devcitos": {
    title: "devcitos",
    description: "Devcitos fue mi primer proyecto interno en Aptugo, realizado antes de pasar de mi rol de tutor/coach al de desarrollador trainee dentro de la empresa. El objetivo del proyecto fue trabajar en equipo junto a otros compañeros para desarrollar una landing page estática, cuidando que el contenido, los estilos y las imágenes respetaran fielmente el diseño original. Además de la página principal, integramos un sistema de logueo utilizando la herramienta Aptugo, que automatizaba ese proceso, y creamos una página adicional con animaciones aplicadas directamente desde la plataforma. También desarrollamos una sección que redireccionaba a nuestros portfolios personales, permitiendo mostrar el trabajo individual de cada integrante del equipo. Este proyecto representó una experiencia clave de colaboración y aprendizaje técnico, donde reforcé buenas prácticas en maquetación, estilos y trabajo en equipo.",
    image: "assets/img/Devcitos.JPG",
    link: "https://devcitos.aptugo.app/",
    tags: ["Aptugo", "Frontend", "Training"]
  },
  "Portfolio": {
    title: "Portfolio",
    description: "Portfolio1 fue mi primer portfolio, desarrollado con conocimientos básicos de HTML y CSS, representando mis primeros pasos en el desarrollo y diseño web. Este proyecto me permitió experimentar con la estructura de páginas, estilos y presentación de contenido, sentando las bases para futuros desarrollos más complejos y profesionales. A través de esta experiencia, pude familiarizarme con la maquetación, organización de secciones y diseño visual, elementos esenciales que consolidaron mi aprendizaje inicial en desarrollo web.",
    image: "assets/img/miPrimerPort.JPG",
    link: "https://portafoliomatyg.aptugo.app/",
    tags: ["HTML", "CSS", "Portfolio"]
  },
  "blog cyberpunk": {
    title: "blog cyberpunk",
    description: "Blog Cyberpunk fue mi proyecto final para la certificación como desarrollador con Aptugo, donde apliqué todos los conocimientos adquiridos durante el cursado y mucho más, combinando técnica, diseño y creatividad. El desafío no solo consistía en demostrar dominio de programación y maquetación, sino también en comprender y aprovechar al máximo la herramienta Aptugo, enlazando correctamente el código con sus funcionalidades y definiendo los estilos de manera precisa. El proyecto incluía seis secciones, cada una con una temática distinta pero manteniendo una ambientación cyberpunk coherente y visualmente atractiva. Esto implicó una exhaustiva búsqueda de referencias, imágenes y recursos gráficos para lograr un resultado final profesional y bien integrado. Este proyecto fue uno de los mejores de mi cursada y de otras cohortes, al punto de que Aptugo Academy lo utiliza actualmente como ejemplo en sus clases, lo cual me llena de orgullo y representa un importante reconocimiento a mi trabajo y dedicación.",
    image: "assets/img/proyectoCyberpunk.JPG",
    link: "https://cyberpunk.aptugo.app/",
    tags: ["Aptugo", "Blog", "Cyberpunk"]
  },
  "Catamarket": {
    title: "Catamarket",
    description: "Catamarket fue un proyecto desarrollado en la Facultad de Ciencia y Tecnología, con el objetivo de demostrar los conocimientos adquiridos en tres materias: Diseño Web (HTML y CSS), Desarrollo de Software con Metodología Ágil y Diseño UX/UI. El proyecto se realizó en equipo, y mi rol incluyó ser diseñador, desarrollador y tester, así como simular la experiencia del usuario para identificar problemas de accesibilidad. El resultado fue un marketplace simple, desarrollado únicamente con HTML y CSS, donde se aplicaron historias de usuario, tareas y épicas según la metodología ágil, además de implementar buenas prácticas de SEO, accesibilidad (WAG) y diseño inclusivo, considerando colores, tipografías y elementos de UX/UI que aseguran la no discriminación de los usuarios. El proyecto fue aprobado exitosamente, reflejando la aplicación práctica de los conocimientos adquiridos en las tres materias y consolidando habilidades en diseño, desarrollo ágil y experiencia de usuario.",
    image: "assets/img/catamarket.JPG",
    link: "https://catamarket-original.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Universidad"]
  },
  "Tutorias UNCA": {
    title: "Tutorias UNCA",
    description: "Uncatutorías fue un proyecto desarrollado para la Facultad de Ciencia y Tecnología de la Universidad Nacional de Catamarca, como parte de una beca recibida. Mi objetivo fue crear una página de tutorías que permitiera a los estudiantes tener a mano toda la información necesaria para sentirse acompañados durante su ingreso y cursado, incluyendo establecimientos, profesores, fechas de exámenes, aulas, documentos, biblioteca, secciones de alumnos, trámites y guías, así como información detallada de materias, correlativas y formularios. El proyecto fue desarrollado en su totalidad por mí, asumiendo además un rol de organizador y gestor de equipo, coordinando colaboradores para la carga de documentos y recopilación de información como nombres de profesores, correos, materias y formularios. Me encargué de llevar un control del progreso del equipo, asegurando la eficiencia y determinando el cumplimiento de la beca. Actualmente, el proyecto está en pausa, con gran parte de la información ya cargada; solo falta mejorar partes estéticas y completar contenido adicional, dado que el apartado de tutorías requiere una gran cantidad de información. El proyecto fue desarrollado utilizando la herramienta Aptugo.",
    image: "assets/img/tutoriasUNCA.JPG",
    link: "https://uncatutorias.aptugo.app/",
    tags: ["Aptugo", "Education", "Universidad"]
  },
  "Miauseline": {
    title: "Miauseline",
    description: "Miauseline fue el proyecto final del primer módulo de la Diplomatura Universitaria en Desarrollo Web Fullstack con JavaScript del Nodo Tecnológico de Catamarca. El objetivo era aplicar los conocimientos adquiridos durante el módulo, utilizando HTML, CSS y Tailwind, y demostrando buenas prácticas en SEO, UX/UI y desarrollo creativo. Para este proyecto, propuse el diseño y desarrollo de una página web para una casa de venta de postres, compuesta por las secciones Inicio, Nosotros, Menú, Galería y Contacto. Cada página fue desarrollada cuidando la estructura, la accesibilidad, el diseño visual y la experiencia del usuario, buscando reflejar un producto final profesional y coherente con los estándares actuales del desarrollo web. Este trabajo representó una muestra integral de mis habilidades técnicas y creativas, combinando estética, funcionalidad y buenas prácticas de código.",
    image: "assets/img/Image-primary.jpg",
    link: "https://miausseleine.netlify.app/",
    tags: ["Arduino", "IoT", "Universidad", "Premiado"]
  }
};