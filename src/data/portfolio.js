const pending = {
  en: 'Pending real link',
  es: 'Enlace real pendiente',
};

export const portfolio = {
  settings: {
    defaultLanguage: 'en',
    siteUrl: 'https://matiasmurua.github.io/portafolio-matiasmurua-qa',
    repositoryName: '',
  },
  personal: {
    name: 'Matías Nahuel Murua Martínez',
    shortName: 'Matías Murua',
    title: {
      en: 'QA Engineer | QA Automation Engineer',
      es: 'QA Engineer | QA Automation Engineer',
    },
    summary: {
      en: 'QA Engineer with 5+ years of experience across manual testing, automation, APIs, databases, and CI/CD for e-commerce, SaaS, telecommunications, and analytics products.',
      es: 'QA Engineer con más de 5 años de experiencia en testing manual, automatización, APIs, bases de datos y CI/CD para productos de e-commerce, SaaS, telecomunicaciones y analítica.',
    },
    location: 'Córdoba, Argentina',
    remotePreference: {
      en: 'Remote roles in Argentina, Latin America, or international teams',
      es: 'Posiciones remotas para Argentina, Latinoamérica o equipos internacionales',
    },
    availability: {
      en: 'Open to remote opportunities',
      es: 'Disponible para oportunidades remotas',
    },
    yearsOfExperience: '5+',
    email: 'muruamatias.96@gmail.com',
    linkedin: 'https://www.linkedin.com/in/matiasmurua/',
    github: 'https://github.com/matiasmurua',
    cv: 'cv-matias-murua.pdf',
  },
  navigation: [
    { id: 'top', label: { en: 'Home', es: 'Inicio' } },
    { id: 'experience', label: { en: 'Experience', es: 'Experiencia' } },
    { id: 'projects', label: { en: 'QA Projects', es: 'Proyectos QA' } },
    { id: 'skills', label: { en: 'Skills', es: 'Habilidades' } },
    { id: 'services', label: { en: 'Services', es: 'Servicios' } },
    { id: 'about', label: { en: 'About', es: 'Perfil' } },
  ],
  hero: {
    eyebrow: {
      en: 'Automation & manual testing',
      es: 'Automation y testing manual',
    },
    intro: {
      en: '5+ years improving software quality through Web, API, Database, and Automation testing. I turn product risk into clear coverage, actionable evidence, and reliable release feedback.',
      es: 'Más de 5 años mejorando la calidad mediante testing Web, API, Database y Automation. Convierto riesgos de producto en cobertura clara, evidencia accionable y feedback confiable de release.',
    },
    technologies: ['Cypress', 'JavaScript', 'API Testing', 'SQL', 'GitHub Actions', 'Selenium', 'Playwright'],
  },
  metrics: [
    { value: '5+', label: { en: 'Years in QA', es: 'Años en QA' } },
    { value: 'Web + API + Database', label: { en: 'Testing coverage', es: 'Cobertura de testing' } },
    { value: 'Automation + Manual QA', label: { en: 'Quality approach', es: 'Enfoque de calidad' } },
    { value: 'CI/CD', label: { en: 'Pipeline integration', es: 'Integración en pipelines' } },
  ],
  about: {
    title: { en: 'Quality is a system, not a final checkpoint.', es: 'La calidad es un sistema, no un control final.' },
    paragraphs: [
      {
        en: 'My work begins before execution: I analyze requirements, clarify acceptance criteria, map risk, and shape test scenarios that connect business intent with observable behavior.',
        es: 'Mi trabajo comienza antes de la ejecución: analizo requerimientos, clarifico criterios de aceptación, mapeo riesgos y diseño escenarios que conectan la intención del negocio con comportamientos observables.',
      },
      {
        en: 'I combine exploratory depth with repeatable automation, validating the full path from interface to API and database. I collaborate with developers, Product Owners, and stakeholders throughout the development lifecycle.',
        es: 'Combino profundidad exploratoria con automatización repetible, validando el recorrido completo desde la interfaz hasta la API y la base de datos. Colaboro con developers, Product Owners y stakeholders durante todo el ciclo de desarrollo.',
      },
    ],
  },
  howITest: [
    { number: '01', icon: 'search', title: { en: 'Requirements', es: 'Requerimientos' }, text: { en: 'Clarify users, rules, and acceptance criteria.', es: 'Clarificar usuarios, reglas y criterios de aceptación.' } },
    { number: '02', icon: 'scan', title: { en: 'Risk analysis', es: 'Análisis de riesgo' }, text: { en: 'Prioritize critical paths and failure impact.', es: 'Priorizar flujos críticos e impacto de fallas.' } },
    { number: '03', icon: 'listChecks', title: { en: 'Test design', es: 'Diseño de pruebas' }, text: { en: 'Define scenarios, data, and traceability.', es: 'Definir escenarios, datos y trazabilidad.' } },
    { number: '04', icon: 'layers', title: { en: 'Validate', es: 'Validar' }, text: { en: 'Connect UI, API, integration, and database evidence.', es: 'Conectar evidencia de UI, API, integraciones y base de datos.' } },
    { number: '05', icon: 'workflow', title: { en: 'Automate', es: 'Automatizar' }, text: { en: 'Automate stable, repeatable, high-value flows.', es: 'Automatizar flujos estables, repetibles y de alto valor.' } },
    { number: '06', icon: 'github', title: { en: 'CI/CD', es: 'CI/CD' }, text: { en: 'Run checks where teams build and release.', es: 'Ejecutar controles donde los equipos construyen y liberan.' } },
    { number: '07', icon: 'message', title: { en: 'Report', es: 'Reportar' }, text: { en: 'Communicate risk, evidence, and release signals.', es: 'Comunicar riesgos, evidencia y señales de release.' } },
  ],
  skillGroups: [
    {
      icon: 'scan',
      title: { en: 'Manual & functional QA', es: 'QA manual y funcional' },
      description: { en: 'Business-focused coverage from requirements to release confidence.', es: 'Cobertura orientada al negocio desde requerimientos hasta confianza de release.' },
      items: ['Functional Testing', 'Exploratory Testing', 'Regression Testing', 'E2E Testing', 'Integration Testing', 'Database Testing', 'Cross-browser Testing'],
    },
    {
      icon: 'workflow',
      title: { en: 'Automation engineering', es: 'Ingeniería de automatización' },
      description: { en: 'Maintainable coverage for critical and repeatable product flows.', es: 'Cobertura mantenible para flujos críticos y repetibles del producto.' },
      items: ['Cypress', 'JavaScript', 'Selenium WebDriver', 'Python', 'Cucumber', 'Behave', 'Page Objects', 'Playwright · Learning'],
    },
    {
      icon: 'braces',
      title: { en: 'API & data validation', es: 'Validación de API y datos' },
      description: { en: 'Cross-layer checks that connect requests, responses, business rules, and stored data.', es: 'Validaciones entre capas que conectan requests, responses, reglas de negocio y datos persistidos.' },
      items: ['REST APIs', 'Postman', 'Swagger', 'Cypress API', 'Negative Scenarios', 'Oracle SQL', 'Request / Response Validation'],
    },
    {
      icon: 'fileCheck',
      title: { en: 'Test design & delivery', es: 'Diseño y entrega de pruebas' },
      description: { en: 'Risk-based test assets, actionable defects, and visible quality gates.', es: 'Activos de prueba basados en riesgo, defectos accionables y controles de calidad visibles.' },
      items: ['Test Case Design', 'Risk Analysis', 'Bug Reporting', 'Jira', 'Xray', 'QMetry', 'TestRail', 'GitHub Actions', 'Jenkins'],
    },
  ],
  stack: [
    { label: { en: 'Automation', es: 'Automatización' }, items: ['Cypress', 'JavaScript', 'Selenium WebDriver', 'Python', 'Behave', 'Cucumber', 'Page Object Model', 'Playwright · In progress'] },
    { label: { en: 'API & data', es: 'API y datos' }, items: ['Postman', 'Swagger', 'REST APIs', 'Cypress API automation', 'Oracle SQL', 'DBeaver', 'UI ↔ API ↔ DB validation'] },
    { label: { en: 'Delivery', es: 'Entrega' }, items: ['Git', 'GitHub', 'Bitbucket', 'GitHub Actions', 'Jenkins', 'CI/CD'] },
    { label: { en: 'Management & reporting', es: 'Gestión y reportes' }, items: ['Jira', 'Confluence', 'Xray', 'QMetry', 'TestRail', 'Allure', 'Mochawesome'] },
  ],
  experience: {
    intro: {
      en: '5+ years contributing to quality across complex digital products. The work below is intentionally organized by product context to protect confidential client and company information.',
      es: 'Más de 5 años contribuyendo a la calidad de productos digitales complejos. El trabajo se organiza por contexto de producto para proteger información confidencial de clientes y empresas.',
    },
    engagements: [
      { code: 'ECOM', sector: { en: 'E-commerce', es: 'E-commerce' }, focus: { en: 'Transactional flows', es: 'Flujos transaccionales' }, detail: { en: 'Catalog, promotions, cart, checkout, orders, APIs, and data consistency.', es: 'Catálogo, promociones, carrito, checkout, órdenes, APIs y consistencia de datos.' } },
      { code: 'SAAS', sector: { en: 'Incentive SaaS', es: 'SaaS de incentivos' }, focus: { en: 'Business rules', es: 'Reglas de negocio' }, detail: { en: 'Campaigns, segmentation, points, bonuses, goals, and activation states.', es: 'Campañas, segmentación, puntos, bonos, metas y estados de activación.' } },
      { code: 'TELCO', sector: { en: 'Telecommunications', es: 'Telecomunicaciones' }, focus: { en: 'Integrated systems', es: 'Sistemas integrados' }, detail: { en: 'Cross-layer validation and collaboration in complex delivery environments.', es: 'Validación entre capas y colaboración en entornos complejos de entrega.' } },
      { code: 'BI', sector: { en: 'Enterprise dashboards', es: 'Dashboards empresariales' }, focus: { en: 'Data integrity', es: 'Integridad de datos' }, detail: { en: 'Permissions, filters, rankings, alerts, heatmaps, REST endpoints, and Oracle.', es: 'Permisos, filtros, rankings, alertas, mapas de calor, endpoints REST y Oracle.' } },
    ],
  },
  caseStudies: [
    {
      id: 'ecommerce', number: '01', icon: 'shoppingCart',
      title: { en: 'E-commerce QA & Automation', es: 'E-commerce QA & Automation' },
      role: { en: 'QA Engineer · Manual & Automation', es: 'QA Engineer · Manual y Automation' },
      summary: { en: 'An anonymized professional case covering a purchase journey where catalog, pricing, promotions, checkout, APIs, and order data must stay consistent.', es: 'Caso profesional anonimizado sobre un recorrido de compra donde catálogo, precios, promociones, checkout, APIs y datos de órdenes deben mantenerse consistentes.' },
      challenge: { en: 'Protect the revenue-critical path while tracing failures across the web interface, services, and Oracle data.', es: 'Proteger el flujo crítico de ingresos trazando fallas entre la interfaz web, servicios y datos Oracle.' },
      whatTested: {
        en: ['Catalog and product availability', 'Cart calculations and promotions', 'Pricing and checkout rules', 'Cart and order APIs', 'Oracle database consistency'],
        es: ['Catálogo y disponibilidad de productos', 'Cálculos de carrito y promociones', 'Reglas de precios y checkout', 'APIs de carrito y órdenes', 'Consistencia en base de datos Oracle'],
      },
      approach: { en: 'Risk-based functional, integration, regression, and E2E testing supported by Selenium WebDriver, Python, and Behave automation.', es: 'Testing funcional, de integración, regresión y E2E basado en riesgo, con automatización en Selenium WebDriver, Python y Behave.' },
      impact: { en: 'Produced cross-layer evidence for purchase-critical behavior and repeatable regression coverage without exposing client data.', es: 'Generé evidencia entre capas para comportamientos críticos de compra y cobertura de regresión repetible sin exponer datos del cliente.' },
      tools: ['Python', 'Selenium', 'Behave', 'REST API', 'Oracle SQL'],
      evidence: { label: { en: 'Evidence pending', es: 'Evidencia pendiente' }, url: '', todo: { en: 'TODO: Add an anonymized Selenium/Behave execution or architecture sample.', es: 'TODO: Agregar una ejecución o arquitectura anonimizada de Selenium/Behave.' } },
    },
    {
      id: 'saas', number: '02', icon: 'layers',
      title: { en: 'SaaS Incentives Platform — QA Automation', es: 'Plataforma SaaS de incentivos — QA Automation' },
      role: { en: 'QA Automation Engineer', es: 'QA Automation Engineer' },
      summary: { en: 'An anonymized telecommunications SaaS case where configurable campaigns, segmentation, and business rules determine incentives and activation states.', es: 'Caso SaaS de telecomunicaciones anonimizado donde campañas configurables, segmentación y reglas de negocio determinan incentivos y estados de activación.' },
      challenge: { en: 'Make complex campaign rules observable and protect critical configurations through repeatable regression.', es: 'Hacer observables reglas complejas de campañas y proteger configuraciones críticas mediante regresión repetible.' },
      whatTested: {
        en: ['Campaign creation and activation', 'Audience segmentation', 'Points, bonuses, and goal rules', 'REST APIs and negative scenarios', 'SQL results and application logs'],
        es: ['Creación y activación de campañas', 'Segmentación de audiencias', 'Reglas de puntos, bonos y objetivos', 'APIs REST y escenarios negativos', 'Resultados SQL y logs de aplicación'],
      },
      approach: { en: 'Cypress and Cucumber automation for critical flows, supported by exploratory testing, Postman API checks, SQL validation, and log analysis.', es: 'Automatización con Cypress y Cucumber para flujos críticos, apoyada por testing exploratorio, validaciones API en Postman, SQL y análisis de logs.' },
      impact: { en: 'Created repeatable release evidence around high-risk business rules and campaign state transitions.', es: 'Generé evidencia repetible de release sobre reglas de negocio de alto riesgo y transiciones de estado de campañas.' },
      tools: ['Cypress', 'JavaScript', 'Cucumber', 'Postman', 'SQL'],
      evidence: { label: { en: 'Evidence pending', es: 'Evidencia pendiente' }, url: '', todo: { en: 'TODO: Add an anonymized Cypress regression run or feature file sample.', es: 'TODO: Agregar una ejecución de regresión o feature de Cypress anonimizado.' } },
    },
    {
      id: 'dashboard', number: '03', icon: 'chart',
      title: { en: 'Call Center Analytics Dashboard', es: 'Dashboard analítico de Call Center' },
      role: { en: 'QA Engineer · UI, API & Database', es: 'QA Engineer · UI, API y Database' },
      summary: { en: 'An anonymized analytics case focused on permissions, NPS views, filters, operational alerts, and traceability between dashboards, APIs, and Oracle.', es: 'Caso analítico anonimizado enfocado en permisos, vistas NPS, filtros, alertas operativas y trazabilidad entre dashboards, APIs y Oracle.' },
      challenge: { en: 'Confirm that each profile sees the correct insights and that every analytical value can be traced to its service and database source.', es: 'Confirmar que cada perfil vea la información correcta y que cada valor analítico sea trazable hasta su servicio y fuente de datos.' },
      whatTested: {
        en: ['Roles, permissions, and restricted views', 'NPS summaries and performance dashboards', 'Heatmaps, rankings, alerts, and date filters', 'get-nps-summary and get-performance', 'get-ranking and alerts/{id}/close'],
        es: ['Roles, permisos y vistas restringidas', 'Resúmenes NPS y dashboards de performance', 'Heatmaps, rankings, alertas y filtros de fecha', 'get-nps-summary y get-performance', 'get-ranking y alerts/{id}/close'],
      },
      approach: { en: 'Role-based functional coverage, REST API validation, UI-to-API-to-Oracle comparisons, and Cypress/Cucumber automation for business-critical scenarios.', es: 'Cobertura funcional basada en roles, validación de APIs REST, comparaciones UI-API-Oracle y automatización Cypress/Cucumber para escenarios críticos.' },
      impact: { en: 'Made permission and data-integrity risks visible through traceable evidence across presentation, service, and database layers.', es: 'Hice visibles los riesgos de permisos e integridad de datos mediante evidencia trazable entre presentación, servicios y base de datos.' },
      tools: ['Cypress', 'Cucumber', 'REST API', 'Oracle SQL', 'Role-based testing'],
      evidence: { label: { en: 'Evidence pending', es: 'Evidencia pendiente' }, url: '', todo: { en: 'TODO: Add an anonymized API-to-database validation diagram.', es: 'TODO: Agregar un diagrama anonimizado de validación API-base de datos.' } },
    },
    {
      id: 'automation-framework', number: '04', icon: 'workflow',
      title: { en: 'Cypress Automation Framework', es: 'Framework de automatización Cypress' },
      role: { en: 'Framework design & maintenance', es: 'Diseño y mantenimiento de framework' },
      summary: { en: 'A public automation project that demonstrates how I structure maintainable UI checks and quality gates for continuous delivery.', es: 'Proyecto público de automatización que demuestra cómo estructuro validaciones UI mantenibles y quality gates para entrega continua.' },
      challenge: { en: 'Keep scenarios readable for product stakeholders while preserving reusable, maintainable automation code.', es: 'Mantener escenarios legibles para stakeholders de producto y, al mismo tiempo, código de automatización reutilizable y mantenible.' },
      whatTested: {
        en: ['Critical portfolio user journeys', 'Responsive navigation and language switching', 'Semantic structure and accessible labels', 'Download and contact behavior', 'Build and deployment quality gates'],
        es: ['Recorridos críticos del portfolio', 'Navegación responsive y cambio de idioma', 'Estructura semántica y labels accesibles', 'Comportamiento de descarga y contacto', 'Quality gates de build y despliegue'],
      },
      approach: { en: 'Cypress with Cucumber scenarios, a Page Object layer, centralized selectors, screenshots on failure, environment-aware base paths, and GitHub Actions CI/CD.', es: 'Cypress con escenarios Cucumber, capa Page Object, selectores centralizados, screenshots ante fallas, base paths por entorno y CI/CD con GitHub Actions.' },
      impact: { en: 'The public pipeline currently validates code, content, production build, E2E behavior, and GitHub Pages deployment. API checks and rich report publishing remain explicit next steps.', es: 'El pipeline público valida código, contenido, build productivo, comportamiento E2E y despliegue en GitHub Pages. Las pruebas API y publicación de reportes enriquecidos son próximos pasos explícitos.' },
      tools: ['Cypress', 'Cucumber', 'JavaScript', 'Page Objects', 'GitHub Actions'],
      evidence: { label: { en: 'View repository', es: 'Ver repositorio' }, url: 'https://github.com/matiasmurua/portafolio-matiasmurua-qa', todo: { en: 'TODO: Add a Mochawesome or Allure report after integrating public report publishing.', es: 'TODO: Agregar reporte Mochawesome o Allure luego de integrar su publicación.' } },
    },
  ],
  services: [
    {
      icon: 'scan',
      title: { en: 'Web Application Testing', es: 'Testing de aplicaciones web' },
      summary: { en: 'Find product risks before your users do, with clear evidence your team can act on.', es: 'Detectá riesgos antes que tus usuarios, con evidencia clara y accionable para tu equipo.' },
      includes: {
        en: ['Functional and exploratory testing', 'Cross-browser and responsive checks', 'UX and usability observations', 'Detailed bug reports', 'Screenshot and video evidence'],
        es: ['Testing funcional y exploratorio', 'Validaciones cross-browser y responsive', 'Observaciones de UX y usabilidad', 'Reportes detallados de bugs', 'Evidencia en screenshots y video'],
      },
    },
    {
      icon: 'workflow',
      title: { en: 'Test Automation', es: 'Automatización de pruebas' },
      summary: { en: 'Build maintainable regression coverage around the user journeys that matter most to your product.', es: 'Construí cobertura de regresión mantenible sobre los recorridos más importantes de tu producto.' },
      includes: {
        en: ['Automation framework setup', 'Critical user-flow coverage', 'Regression suite design', 'CI/CD integration', 'Execution reporting'],
        es: ['Configuración de framework', 'Cobertura de flujos críticos', 'Diseño de suite de regresión', 'Integración CI/CD', 'Reportes de ejecución'],
      },
      stack: ['Cypress', 'Playwright', 'Selenium'],
    },
    {
      icon: 'braces',
      title: { en: 'API Testing', es: 'Testing de APIs' },
      summary: { en: 'Validate service behavior and integration risks beyond what the interface alone can reveal.', es: 'Validá comportamiento de servicios y riesgos de integración más allá de lo visible en la interfaz.' },
      includes: {
        en: ['REST API coverage', 'Request and response validation', 'Positive, negative, and boundary scenarios', 'Integration testing', 'Actionable API findings'],
        es: ['Cobertura de APIs REST', 'Validación de requests y responses', 'Escenarios positivos, negativos y de borde', 'Testing de integración', 'Hallazgos accionables de API'],
      },
      stack: ['Postman', 'Cypress API', 'Swagger'],
    },
    {
      icon: 'fileCheck',
      title: { en: 'Pre-launch QA Audit', es: 'Auditoría QA pre-lanzamiento' },
      summary: { en: 'Launching a website or SaaS? I can test your critical flows before your users do.', es: '¿Estás por lanzar un sitio o SaaS? Puedo probar los flujos críticos antes que tus usuarios.' },
      includes: {
        en: ['Test and risk report', 'Bug report with severity', 'Screenshot and video evidence', 'Critical-flow assessment', 'Prioritized recommendations'],
        es: ['Reporte de pruebas y riesgos', 'Reporte de bugs con severidad', 'Evidencia en screenshots y video', 'Evaluación de flujos críticos', 'Recomendaciones priorizadas'],
      },
    },
  ],
  additionalServices: {
    title: { en: 'Additional frontend services', es: 'Servicios frontend adicionales' },
    description: { en: 'For focused, content-driven projects that need a clean and responsive implementation.', es: 'Para proyectos acotados y orientados a contenido que necesiten una implementación limpia y responsive.' },
    items: ['Landing Pages', 'Portfolio Websites', 'Small Business Websites'],
  },
  audiencePaths: [
    {
      type: 'recruiter',
      eyebrow: { en: 'For recruiters & hiring teams', es: 'Para recruiters y equipos de selección' },
      title: { en: 'Looking to hire a QA Engineer?', es: '¿Buscás contratar un QA Engineer?' },
      text: { en: 'Review 5+ years of product-focused QA experience, technical coverage, and public-safe case studies.', es: 'Revisá más de 5 años de experiencia QA, cobertura técnica y casos profesionales anonimizados.' },
      actions: [
        { label: { en: 'View experience', es: 'Ver experiencia' }, href: '#experience' },
        { label: { en: 'Download CV', es: 'Descargar CV' }, href: 'cv', download: true },
      ],
    },
    {
      type: 'client',
      eyebrow: { en: 'For founders & product teams', es: 'Para founders y equipos de producto' },
      title: { en: 'Need QA for your product?', es: '¿Necesitás QA para tu producto?' },
      text: { en: 'Get focused manual testing, automation, API validation, or a pre-launch quality audit.', es: 'Contratá testing manual, automatización, validación de APIs o una auditoría de calidad pre-lanzamiento.' },
      actions: [
        { label: { en: 'View QA services', es: 'Ver servicios QA' }, href: '#services' },
        { label: { en: 'Contact me', es: 'Contactarme' }, href: '#contact' },
      ],
    },
  ],
  evidence: [
    {
      icon: 'github',
      title: { en: 'Cypress framework repository', es: 'Repositorio del framework Cypress' },
      detail: { en: 'Public source with Cucumber scenarios, Page Objects, quality checks, and deployment workflow.', es: 'Código público con escenarios Cucumber, Page Objects, controles de calidad y workflow de despliegue.' },
      url: 'https://github.com/matiasmurua/portafolio-matiasmurua-qa',
      action: { en: 'Open GitHub', es: 'Abrir GitHub' },
    },
    {
      icon: 'workflow',
      title: { en: 'GitHub Actions pipeline', es: 'Pipeline de GitHub Actions' },
      detail: { en: 'Live quality gate covering lint, content validation, build, Cypress, and GitHub Pages deployment.', es: 'Quality gate real con lint, validación de contenido, build, Cypress y despliegue en GitHub Pages.' },
      url: 'https://github.com/matiasmurua/portafolio-matiasmurua-qa/actions',
      action: { en: 'View workflow runs', es: 'Ver ejecuciones' },
    },
    {
      icon: 'play',
      title: { en: 'Cypress regression execution', es: 'Ejecución de regresión Cypress' },
      detail: { en: 'Execution view showing scenarios, browser, duration, and pass/fail state.', es: 'Vista de ejecución con escenarios, navegador, duración y estado.' },
      url: '', status: pending,
      todo: { en: 'TODO: Add screenshot of a Cypress regression execution.', es: 'TODO: Agregar screenshot de una ejecución de regresión Cypress.' },
    },
    {
      icon: 'chart',
      title: { en: 'Allure / Mochawesome report', es: 'Reporte Allure / Mochawesome' },
      detail: { en: 'Readable execution evidence for technical and non-technical stakeholders.', es: 'Evidencia de ejecución legible para stakeholders técnicos y no técnicos.' },
      url: '', status: pending,
      todo: { en: 'TODO: Add a public-safe HTML report screenshot.', es: 'TODO: Agregar screenshot de un reporte HTML apto para publicación.' },
    },
    {
      icon: 'send',
      title: { en: 'Postman & API validation', es: 'Postman y validación de APIs' },
      detail: { en: 'Request, response, assertions, and negative-scenario evidence.', es: 'Evidencia de request, response, assertions y escenarios negativos.' },
      url: '', status: pending,
      todo: { en: 'TODO: Add a sanitized Postman collection run.', es: 'TODO: Agregar una ejecución sanitizada de una colección Postman.' },
    },
    {
      icon: 'database',
      title: { en: 'SQL validation sample', es: 'Ejemplo de validación SQL' },
      detail: { en: 'An anonymized example connecting expected UI/API behavior with stored data.', es: 'Ejemplo anonimizado que conecte comportamiento esperado de UI/API con datos persistidos.' },
      url: '', status: pending,
      todo: { en: 'TODO: Add anonymized SQL and expected-result evidence.', es: 'TODO: Agregar SQL anonimizado y evidencia del resultado esperado.' },
    },
    {
      icon: 'bug',
      title: { en: 'Test case & bug report sample', es: 'Ejemplo de test case y bug report' },
      detail: { en: 'Public-safe examples of structured coverage and actionable defect communication.', es: 'Ejemplos públicos de cobertura estructurada y comunicación accionable de defectos.' },
      url: '', status: pending,
      todo: { en: 'TODO: Add one anonymized test case and bug report.', es: 'TODO: Agregar un test case y bug report anonimizados.' },
    },
    {
      icon: 'route',
      title: { en: 'Framework architecture', es: 'Arquitectura del framework' },
      detail: { en: 'A diagram of specs, step definitions, Page Objects, data, reports, and CI flow.', es: 'Diagrama de specs, step definitions, Page Objects, datos, reportes y flujo CI.' },
      url: '', status: pending,
      todo: { en: 'TODO: Add the Cypress framework architecture diagram.', es: 'TODO: Agregar el diagrama de arquitectura del framework Cypress.' },
    },
  ],
  education: {
    title: { en: 'Software Engineering', es: 'Ingeniería de Software' },
    detail: { en: 'Institution, degree status, and dates pending confirmation.', es: 'Institución, estado del título y fechas pendientes de confirmación.' },
  },
  languages: [
    { code: 'ES', name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
    { code: 'EN', name: { en: 'English', es: 'Inglés' }, level: { en: 'B1 · progressing toward B2', es: 'B1 · avanzando hacia B2' } },
  ],
};

export const hasRealLink = (value) => typeof value === 'string' && /^https?:\/\//.test(value);
