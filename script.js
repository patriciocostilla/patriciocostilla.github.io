const translations = {
  es: {
    role: "DevOps Engineer & Technical Lead | AWS Certified Solutions Architect - Professional",
    bio: "Ingeniero en Sistemas de Información, DevOps Engineer y Technical Lead con sólida experiencia diseñando, automatizando y manteniendo arquitecturas Cloud. Mi trayectoria previa como Desarrollador Full Stack me permite abordar la infraestructura desde la perspectiva del desarrollo de software.",
    title_experience: "Experiencia Destacada",
    exp1_date: "Ago 2023 – Presente",
    exp1_1: "Liderazgo técnico e implementación de arquitecturas Cloud escalables e infraestructura como código (IaC).",
    exp1_2: "Gestión y orquestación de clústeres de Kubernetes en AWS (EKS, Karpenter, Auto Mode, KEDA) y flujos GitOps / CI-CD.",
    exp1_3: "Configuración y despliegue de stack completo de observabilidad (Prometheus, Grafana, Loki, Mimir, Tempo).",
    exp2_role: "Desarrollador Full Stack & Mobile",
    exp2_date: "Dic 2021 – Ago 2023",
    exp2_1: "Diseño y desarrollo de aplicaciones web y móviles (Ionic, Angular, .NET Framework, SQL Server).",
    exp2_2: "Desarrollo e integración de pipelines de CI/CD y gestión de infraestructura IT.",
    title_previous_exp: "Experiencia Previa",
    exp3_role: "Software Developer & IT Infrastructure Management",
    exp3_date: "Jul 2019 – Dic 2021",
    exp3_desc: "Diseño, desarrollo y despliegue web en Python, Django, PostgreSQL y Docker.",
    exp4_company: "UTN (CInApTIC)",
    exp4_role: "Becario de Investigación",
    exp4_date: "Abr 2020 – Ago 2023",
    exp4_desc: "Diseño de algoritmos inteligentes para análisis de información desestructurada.",
    exp5_company: "Casa de Gobierno (Chaco)",
    exp5_role: "Pasante - Dpto. de Innovación Técnica",
    exp5_date: "Dic 2017 – Nov 2018",
    exp5_desc: "Soporte e innovación en sistemas informáticos gubernamentales.",
    exp6_role: "Pasante - Desarrollador RPG",
    exp6_date: "Sep 2017 – Dic 2017",
    exp6_desc: "Desarrollo y mantenimiento en entorno RPG.",
    title_education: "Educación",
    edu1_title: "Maestría en Ciencia de Datos e IA",
    edu1_sub: "Universidad Camilo José Cela (2021 - 2022) • Título en trámite",
    edu2_title: "Ingeniería en Sistemas de Información",
    title_certifications: "Certificaciones",
    title_skills: "Habilidades Técnicas"
  },
  en: {
    role: "DevOps Engineer & Technical Lead | AWS Certified Solutions Architect - Professional",
    bio: "Information Systems Engineer, DevOps Engineer, and Technical Lead with solid experience designing, automating, and maintaining Cloud architectures. My background as a Full Stack Developer allows me to approach infrastructure from a software engineering perspective.",
    title_experience: "Key Experience",
    exp1_date: "Aug 2023 – Present",
    exp1_1: "Technical leadership and implementation of scalable Cloud architectures and Infrastructure as Code (IaC).",
    exp1_2: "AWS Kubernetes cluster management (EKS, Karpenter, Auto Mode, KEDA) and GitOps / CI-CD workflows.",
    exp1_3: "Configuration and deployment of full observability stacks (Prometheus, Grafana, Loki, Mimir, Tempo).",
    exp2_role: "Full Stack & Mobile Developer",
    exp2_date: "Dec 2021 – Aug 2023",
    exp2_1: "Design and development of web and mobile applications (Ionic, Angular, .NET Framework, SQL Server).",
    exp2_2: "CI/CD pipeline development/integration and IT infrastructure management.",
    title_previous_exp: "Previous Experience",
    exp3_role: "Software Developer & IT Infrastructure Management",
    exp3_date: "Jul 2019 – Dec 2021",
    exp3_desc: "Software design, development, and deployment using Python, Django, PostgreSQL, and Docker.",
    exp4_company: "National Technological University (CInApTIC)",
    exp4_role: "Research Fellow",
    exp4_date: "Apr 2020 – Aug 2023",
    exp4_desc: "Designed intelligent algorithms for unstructured information analysis.",
    exp5_company: "Government House (Chaco)",
    exp5_role: "Intern - Tech Innovation Dept.",
    exp5_date: "Dec 2017 – Nov 2018",
    exp5_desc: "Support and innovation in governmental IT systems.",
    exp6_role: "Intern - RPG Developer",
    exp6_date: "Sep 2017 – Dec 2017",
    exp6_desc: "Software development and maintenance in an RPG environment.",
    title_education: "Education",
    edu1_title: "Master's Degree in Data Science & AI",
    edu1_sub: "Camilo José Cela University (2021 - 2022) • Degree pending",
    edu2_title: "Information Systems Engineering",
    title_certifications: "Certifications",
    title_skills: "Technical Skills"
  }
};

function setLanguage(lang) {
  localStorage.setItem('preferred_lang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Alternar el estilo del botón activo
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  
  if (lang === 'es') {
    btnEs.className = "px-3 py-1 text-sm font-semibold rounded-md bg-violet-600 text-white shadow shadow-violet-900/50";
    btnEn.className = "px-3 py-1 text-sm font-semibold rounded-md text-violet-300/60 hover:text-white";
  } else {
    btnEn.className = "px-3 py-1 text-sm font-semibold rounded-md bg-violet-600 text-white shadow shadow-violet-900/50";
    btnEs.className = "px-3 py-1 text-sm font-semibold rounded-md text-violet-300/60 hover:text-white";
  }
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const savedLang = localStorage.getItem('preferred_lang') || 'es';
  setLanguage(savedLang);
});