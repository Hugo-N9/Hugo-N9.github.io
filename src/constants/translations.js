// src/constants/translations.js

export const translations = {
  // Versión en español (la que más te interesa)
  es: {
    // === SECCIÓN PRINCIPAL ===
    name: "Tu Nombre",  // Cambia por tu nombre real
    title: "Estudiante de [Tu Carrera]",  // Ej: "Estudiante de Ingeniería de Sistemas"
    
    // === TEXTO "SOBRE MÍ" (¡Ponle personalidad!) ===
    aboutText1: "Soy estudiante de [carrera] en [universidad] y me encanta [lo que te apasiona].",
    aboutText2: "Este portafolio lo fui armando mientras aprendía React, así que algunos estilos... tienen carácter. 🚀",
    
    // === TUS PROYECTOS (¡lo más importante!) ===
    projects: [
      {
        title: "Mi Primer Proyecto",
        description: "Una app que hice para [resolver X problema]. Aprendí mucho sobre [tecnologías] en el camino.",
        image: "/images/proyecto1.jpg",  // Pon tu captura de pantalla
        githubLink: "https://github.com/tuusuario/mi-proyecto",  // 🔗 Enlace a GitHub
        figmaLink: "https://figma.com/...",  // 🎨 ¡Tu diseño de Figma!
        technologies: ["React", "Tailwind", "Node.js"]
      },
      // Agrega 2-3 proyectos más...
    ],
    
    // === TUS SKILLS (sé honesto, no pongas cosas que no sabes) ===
    skills: [
      "JavaScript (básico/intermedio)",
      "React (aprendiendo)",
      "HTML/CSS",
      "Python",
      "Figma"
    ],
    
    // === CONTACTO ===
    contactEmail: "tuemail@universidad.com",
    githubUsername: "tuusuario",
  },
  
  // También puedes editar la versión en inglés si quieres
  en: {
    // ... mismo formato pero en inglés
  }
};