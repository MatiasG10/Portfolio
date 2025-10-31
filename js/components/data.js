
/*Experience Data Configuration
 
@author Pablo Matias Ganne Moreno
@copyright © 2025 Pablo Matias Ganne Moreno. Todos los derechos reservados.
@description Datos estructurados de experiencia laboral y proyectos
@version 1.0
@license Soy creyente de compartir código para que sea mejorado,
         pero también de una previa charla y reconocimiento.
         
         Contáctame y tras aprobación, ¡eres libre de usarlo!
         Email: gannematias10@gmail.com
*/

const experienceData = {
  work: [
    {
      id: 1,
      title: "Desarrollador Front-End Aptugo",
      period: { start: "2024", end: "Present" },
      company: "Aptugo Agency",
      description: "En Aptugo desempeño el rol de desarrollador Front-End, enfocándome en la maquetación y aplicación de estilos utilizando la herramienta propia de la empresa. Trabajo en distintos proyectos, aplicando los diseños solicitados por los clientes, manteniéndome fiel a sus lineamientos pero también proponiendo pequeñas mejoras cuando lo considero necesario. Desarrollo sitios responsivos, investigo y creo componentes personalizados dentro de la herramienta, y colaboro de forma constante con mis compañeros.",
      projects: [
        {
          title: "3impacto",
          description: "Sitio web para medir y reportar impacto sostenible.",
          image: "assets/img/3impacto.JPG",
          link: "https://3impacto.eco/",
          hasModal: true
        },
        {
          title: "match4room",
          description: "Sitio web para gestionar y conectar alquileres.",
          image: "assets/img/match4room.JPG",
          link: "https://match4room.com/",
          hasModal: true
        }
      ],
      responsibilities: [
        "Desarrollo y mantenimiento de proyectos internos y externos.",
        "Definición de funcionalidades y liderazgo de tareas.",
        "Uso de Trello y Jira básico para gestión de proyectos.",
        "Documentación técnica y pruebas de funcionalidades."
      ]
    },
    {
      id: 2,
      title: "Desarrollador Front-End Aptugo",
      period: { start: "2023", end: "2024" },
      company: "Aptugo Agency",
      description: "Durante mis primeros proyectos reales en Aptugo, participé activamente en tareas de maquetación y aplicación de estilos utilizando la herramienta propia de la empresa. Contribuí en la construcción de interfaces cuidando los detalles visuales y funcionales, asegurándome de respetar los lineamientos de diseño establecidos. Me encargué de cargar correctamente la información necesaria en cada proyecto —como textos, íconos e imágenes— y realicé pruebas en versiones desktop y mobile para garantizar una experiencia fluida en distintos dispositivos.",
      projects: [
        {
          title: "Tasktugo",
          description: "Herramienta de gestión de tareas tipo Trello, simple y enfocada.",
          image: "assets/img/TasktugoLogin.JPG",
          link: "https://tasktugo.aptugo.com/"
        },
        {
          title: "Univerzip",
          description: "Plataforma para conectar estudiantes con alojamientos y servicios universitarios.",
          image: "assets/img/Univerzip.JPG",
          link: "https://univerzip.aptugo.app/"
        }
      ],
      responsibilities: [
        "Aplicación de maquetación responsive utilizando la herramienta Aptugo.",
        "Implementación de estilos visuales coherentes con el diseño propuesto.",
        "Carga estructurada de contenido: textos, imágenes e íconos.",
        "Pruebas y testeo de aplicaciones en entornos desktop y mobile.",
        "Colaboración con otros miembros del equipo en ajustes y mejoras visuales.",
        "Aplicación de pequeñas funcionalidades dentro de la herramienta.",
        "Mayor comprensión del flujo de trabajo en proyectos reales.",
        "Mejora en la organización personal y el seguimiento de tareas."
      ]
    },
    {
      id: 3,
      title: "ACADEMY COACH & DEVELOPER | APTUGO",
      period: { start: "12/2022", end: "08/2023" },
      company: "Aptugo Academy",
      description: "Tutoría técnica y soporte constante a estudiantes. Participación en proyectos internos como desarrollador Front-End, aplicando estilos y estructuras con Aptugo. Desarrollo de sitios responsivos, documentación técnica, testeo y colaboración activa con el equipo.",
      projects: [
        {
          title: "devcitos",
          description: "Proyecto de aprendizaje para transición a rol de Front-End.",
          image: "assets/img/Devcitos.JPG",
          link: "https://devcitos.aptugo.app/"
        }
      ],
      responsibilities: [
        "Tutoría técnica y soporte a estudiantes.",
        "Participación inicial en proyectos internos.",
        "Redacción de materiales y documentación técnica."
      ]
    },
    {
      id: 4,
      title: "Coach - Tutor",
      period: { start: "09/2022", end: "12/2022" },
      company: "Aptugo Academy",
      description: "Asistencia técnica a estudiantes durante las clases. Apoyo en la planificación y mejora de contenidos, además de ofrecer retroalimentación personalizada. Organización de materiales y primeros aportes a la documentación.",
      projects: [
        {
          title: "Portfolio",
          description: "Portfolio inicial para mostrar trabajos usando HTML y CSS.",
          image: "assets/img/miPrimerPort.JPG",
          link: "https://portafoliomatyg.aptugo.app/"
        }
      ],
      responsibilities: [
        "Asistencia técnica a estudiantes.",
        "Planificación y mejora de clases.",
        "Retroalimentación personalizada y organización de materiales."
      ]
    },
    {
      id: 5,
      title: "Intern – Aptugo Academy",
      period: { start: "07/2022", end: "09/2022" },
      company: "Aptugo Academy",
      description: "Entrenamiento intensivo en el uso de la herramienta Aptugo. Resolución de dudas técnicas en la plataforma de estudio y práctica aplicada sobre maquetación y estilos.",
      projects: [
        {
          title: "blog cyberpunk",
          description: "Proyecto final de Aptugo: blog temático cyberpunk.",
          image: "assets/img/proyectoCyberpunk.JPG",
          link: "https://cyberpunk.aptugo.app/"
        }
      ],
      responsibilities: [
        "Entrenamiento intensivo en Aptugo.",
        "Resolución de dudas técnicas en plataforma de estudio.",
        "practica con la herramienta Aptugo."
      ]
    }
  ],
  extra: [
    {
      id: 1,
      title: "Catamarket",
      period: { start: "06/2025", end: "06/2025" },
      company: "Universidad Nacional de Catamarca",
      description: "Durante mis estudios participé en diversos proyectos académicos interdisciplinarios, varios de los cuales fueron premiados a nivel provincial.",
      projects: [
        {
          title: "Catamarket",
          description: "Marketplace de práctica universitario, centrado en diseño y UX.",
          image: "assets/img/catamarket.JPG",
          link: "https://catamarket-original.netlify.app/"
        }
      ],
      responsibilities: []
    },
    {
      id: 2,
      title: "Proyectos de Facultad",
      period: { start: "2021", end: "2023" },
      company: "Universidad Nacional de Catamarca",
      description: "Durante mis estudios participé en diversos proyectos académicos interdisciplinarios, varios de los cuales fueron premiados a nivel provincial.",
      projects: [
        {
          title: "Tutorias UNCA",
          description: "Proyecto de tutorías UNCA para organizar información académica y trámites.",
          image: "assets/img/tutoriasUNCA.JPG",
          link: "https://uncatutorias.aptugo.app/"
        }
      ],
      responsibilities: []
    },
    {
      id: 3,
      title: "Proyectos de Facultad",
      period: { start: "2021", end: "2023" },
      company: "Nodo Tecnológico Catamarca",
      description: "Durante mis estudios participé en diversos proyectos académicos interdisciplinarios, varios de los cuales fueron premiados a nivel provincial.",
      projects: [
        {
          title: "Miauseline",
          description: "Proyecto final del módulo de Fullstack: página web de postres con enfoque UX/UI.",
          image: "assets/img/Image-primary.jpg",
          link: "https://miausseleine.netlify.app/"
        }
      ],
      responsibilities: []
    }
  ]
};