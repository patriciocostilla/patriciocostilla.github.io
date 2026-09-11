const translations = {
  es: {
    location: "Córdoba, Argentina",
    sheet_label: "— Hoja de Personaje —",
    char_race: "Humano",
    char_class: "Arquitecto de la Nube",
    languages_label: "Lenguas conocidas:",
    languages_val: "Español (Nativo) • Inglés (Competencia Profesional)",
    link_email: "Enviar Cuervo",
    role: "DevOps Engineer & Technical Lead | AWS Certified Solutions Architect - Professional",
    bio: "Ingeniero en Sistemas de Información, DevOps Engineer y Technical Lead. Especialista en Cloud e Infraestructura con sólida experiencia diseñando, automatizando y manteniendo arquitecturas Cloud. Con trayectoria previa como Desarrollador Full Stack e investigador en Inteligencia Artificial (CInApTIC - UTN), abordo la infraestructura uniendo ingeniería de software, observabilidad y automatización continua.",
    title_experience: "Gestas Destacadas",
    exp1_date: "Ago 2023 – Presente",
    exp1_1: "Liderazgo técnico e implementación de arquitecturas Cloud escalables e infraestructura como código (IaC).",
    exp1_2: "Gestión y orquestación de clústeres de Kubernetes en AWS (EKS, Karpenter, Auto Mode, KEDA) y flujos GitOps / CI-CD (ArgoCD, GitHub Actions).",
    exp1_3: "Configuración y despliegue de stack completo de observabilidad (Prometheus, Grafana, Loki, Mimir, Tempo).",
    exp2_role: "Desarrollador Full Stack & Mobile",
    exp2_date: "Dic 2021 – Ago 2023",
    exp2_1: "Diseño y desarrollo de aplicaciones web y móviles (Ionic, Angular, .NET Framework, SQL Server).",
    exp2_2: "Desarrollo e integración de pipelines de CI/CD y gestión de infraestructura IT.",
    title_previous_exp: "Aventuras Previas",
    exp3_role: "Software Developer & IT Infrastructure Management",
    exp3_date: "Jul 2019 – Dic 2021",
    exp3_desc: "Diseño, desarrollo y despliegue de software web (Python, Django, DRF, PostgreSQL, Docker). Administración de servidores virtualizados en la nube.",
    exp4_company: "UTN (CInApTIC)",
    exp4_role: "Becario de Investigación en IA",
    exp4_date: "Abr 2020 – Ago 2023",
    exp4_desc: "Diseño de algoritmos inteligentes para análisis de información desestructurada.",
    exp5_company: "Casa de Gobierno (Chaco)",
    exp5_role: "Pasante - Dpto. de Innovación Técnica",
    exp5_date: "Dic 2017 – Nov 2018",
    exp5_desc: "Soporte e innovación en sistemas informáticos gubernamentales.",
    exp6_role: "Pasante - Desarrollador RPG",
    exp6_date: "Sep 2017 – Dic 2017",
    exp6_desc: "Desarrollo y mantenimiento en entorno RPG.",
    title_education: "Grimorios y Estudios",
    edu1_title: "Maestría en Ciencia de Datos e Inteligencia Artificial",
    edu1_sub: "Universidad Camilo José Cela (Oct 2021 – Sep 2022) • Título en trámite",
    edu2_title: "Ingeniería en Sistemas de Información",
    edu2_sub: "Universidad Tecnológica Nacional - FRRe (Mar 2014 – Mar 2021)",
    title_courses: "Pergaminos de Formación Continua",
    course1_title: "Web Application Technologies and Django",
    course1_sub: "University of Michigan (Ago 2021)",
    course2_title: "IBM Cybersecurity Academic Week",
    course2_sub: "Global University Programs (Sep 2021)",
    course3_title: "English for STEM",
    course3_sub: "Coursera (May 2020)",
    course4_title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    course4_sub: "Coursera / Formación Especializada",
    title_certifications: "Insignias y Órdenes",
    title_skills: "Habilidades y Conjuros",
    skill_cat_cloud: "Cloud & Contenedores",
    skill_cat_iac: "IaC & GitOps / CI-CD",
    skill_cat_obs: "Observabilidad",
    skill_cat_dev: "Programación & Mobile",
    skill_cat_data: "Ciencia de Datos, IA & BI",
    skill_cat_db: "Bases de Datos",
    skill_cat_infra: "Infraestructura, Redes & Seguridad",
    skill_server_admin: "Administración de Servidores",
    skill_net_sec: "Redes y Seguridad"
  },
  en: {
    location: "Córdoba, Argentina",
    sheet_label: "— Character Sheet —",
    char_race: "Human",
    char_class: "Cloud Architect",
    languages_label: "Known Languages:",
    languages_val: "Spanish (Native) • English (Professional Working)",
    link_email: "Send a Raven",
    role: "DevOps Engineer & Technical Lead | AWS Certified Solutions Architect - Professional",
    bio: "Information Systems Engineer, DevOps Engineer, and Technical Lead. Cloud and Infrastructure specialist with solid experience designing, automating, and maintaining Cloud architectures. With a background as a Full Stack Developer and AI researcher (CInApTIC - UTN), I approach infrastructure by bridging software engineering, observability, and continuous automation.",
    title_experience: "Legendary Deeds",
    exp1_date: "Aug 2023 – Present",
    exp1_1: "Technical leadership and implementation of scalable Cloud architectures and Infrastructure as Code (IaC).",
    exp1_2: "AWS Kubernetes cluster management (EKS, Karpenter, Auto Mode, KEDA) and GitOps / CI-CD workflows (ArgoCD, GitHub Actions).",
    exp1_3: "Configuration and deployment of full observability stacks (Prometheus, Grafana, Loki, Mimir, Tempo).",
    exp2_role: "Full Stack & Mobile Developer",
    exp2_date: "Dec 2021 – Aug 2023",
    exp2_1: "Design and development of web and mobile applications (Ionic, Angular, .NET Framework, SQL Server).",
    exp2_2: "CI/CD pipeline development/integration and IT infrastructure management.",
    title_previous_exp: "Past Adventures",
    exp3_role: "Software Developer & IT Infrastructure Management",
    exp3_date: "Jul 2019 – Dec 2021",
    exp3_desc: "Web software design, development, and deployment (Python, Django, DRF, PostgreSQL, Docker). Cloud virtualized server administration.",
    exp4_company: "National Technological University (CInApTIC)",
    exp4_role: "AI Research Fellow",
    exp4_date: "Apr 2020 – Aug 2023",
    exp4_desc: "Design of intelligent algorithms for unstructured information analysis.",
    exp5_company: "Government House (Chaco)",
    exp5_role: "Intern - Tech Innovation Dept.",
    exp5_date: "Dec 2017 – Nov 2018",
    exp5_desc: "Support and innovation in governmental IT systems.",
    exp6_role: "Intern - RPG Developer",
    exp6_date: "Sep 2017 – Dec 2017",
    exp6_desc: "Software development and maintenance in an RPG environment.",
    title_education: "Tomes & Studies",
    edu1_title: "Master's Degree in Data Science & Artificial Intelligence",
    edu1_sub: "Camilo José Cela University (Oct 2021 – Sep 2022) • Degree pending",
    edu2_title: "Information Systems Engineering",
    edu2_sub: "National Technological University - FRRe (Mar 2014 – Mar 2021)",
    title_courses: "Continuous Learning Scrolls",
    course1_title: "Web Application Technologies and Django",
    course1_sub: "University of Michigan (Aug 2021)",
    course2_title: "IBM Cybersecurity Academic Week",
    course2_sub: "Global University Programs (Sep 2021)",
    course3_title: "English for STEM",
    course3_sub: "Coursera (May 2020)",
    course4_title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    course4_sub: "Coursera / Specialized Training",
    title_certifications: "Badges & Orders",
    title_skills: "Skills & Spells",
    skill_cat_cloud: "Cloud & Containers",
    skill_cat_iac: "IaC & GitOps / CI-CD",
    skill_cat_obs: "Observability",
    skill_cat_dev: "Software Development & Mobile",
    skill_cat_data: "Data Science, AI & BI",
    skill_cat_db: "Databases",
    skill_cat_infra: "Infrastructure, Networking & Security",
    skill_server_admin: "Server Administration",
    skill_net_sec: "Networking & Security"
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
  
  const activeClass = "px-3 py-1 text-sm font-semibold rounded-md font-display bg-amber-700 text-amber-50 border border-amber-500/50 shadow shadow-black/50";
  const inactiveClass = "px-3 py-1 text-sm font-semibold rounded-md font-display text-amber-200/60 hover:text-amber-100";

  if (lang === 'es') {
    btnEs.className = activeClass;
    btnEn.className = inactiveClass;
  } else {
    btnEn.className = activeClass;
    btnEs.className = inactiveClass;
  }
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const savedLang = localStorage.getItem('preferred_lang') || 'es';
  setLanguage(savedLang);
});