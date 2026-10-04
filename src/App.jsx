import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, BriefcaseBusiness, CheckCircle2, Download,
  ExternalLink, GitBranch, Mail, MapPin, ShieldCheck,
} from 'lucide-react';
import { portfolio, hasRealLink } from './data/portfolio';
import { Header } from './components/Header';
import { Icon } from './components/Icon';
import { SectionHeading } from './components/SectionHeading';
import { CaseStudyCard } from './components/CaseStudyCard';
import { EvidenceCard } from './components/EvidenceCard';
import { ServiceCard } from './components/ServiceCard';
import { ProcessFlow } from './components/ProcessFlow';
import { AudiencePaths } from './components/AudiencePaths';

const copy = {
  en: {
    skip: 'Skip to main content', home: 'home', mainNavigation: 'Main navigation', toggleNavigation: 'Toggle navigation', languageSelector: 'Language selector', contact: 'Contact', cvShort: 'CV',
    projects: 'View QA Projects', cv: 'Download CV', hireMe: 'Hire me / Contact', explore: 'Explore experience', releaseSignal: 'Release signal', riskVisible: 'Risk made visible.',
    metricsLabel: 'Verified professional highlights',
    experienceKicker: 'Professional experience', experienceTitle: '5+ years testing products where quality has business impact.', engagement: 'Product context', focus: 'Primary focus',
    caseKicker: 'QA projects', caseTitle: 'How I approach real quality problems.', caseDescription: 'Anonymized professional cases and one public automation project. Each case explains context, scope, approach, stack, and evidence without exposing confidential information.', contextProblem: 'Context / problem', whatTested: 'What I tested', qaApproach: 'Automation / QA approach', resultsImpact: 'Results / impact', techStack: 'Tech stack', noClientData: 'Client-safe summary',
    skillsKicker: 'QA capabilities', skillsTitle: 'Manual depth, automation discipline, and cross-layer validation.', skillsDescription: 'A product-focused stack used to analyze risk, validate behavior, automate regression, investigate data, and communicate release confidence.', stackKicker: 'Working stack',
    servicesKicker: 'QA services', servicesTitle: 'Practical quality support for products that need to ship with confidence.', servicesDescription: 'Clear scopes and useful deliverables for founders, startups, and product teams — from focused testing to maintainable automation.',
    howKicker: 'How I test', howTitle: 'Quality work from requirement to release signal.', howDescription: 'Testing is not a final checkpoint. I connect product intent, risk, evidence, automation, and delivery throughout the lifecycle.',
    evidenceKicker: 'Work evidence', evidenceTitle: 'Inspect the process, not just the tool list.', evidenceDescription: 'Real public links are active. Missing screenshots remain honest, structured placeholders with the exact artifact still required.',
    aboutKicker: 'About', aboutTitle: 'QA-first, with a software engineering foundation.', profileSnapshot: 'Profile snapshot', base: 'Based in', lookingFor: 'Looking for', languages: 'Languages', collaboration: 'Collaboration', collaborative: 'Cross-functional · Remote', educationKicker: 'Formation', educationTitle: 'Engineering background', languagesKicker: 'Languages', languagesTitle: 'Remote communication',
    contactKicker: 'Contact', contactTitle: 'Let’s make product risk visible before release.', contactText: 'Recruiting for a QA Engineer or need focused QA support for your product? Tell me what you are building, where risk is highest, and what release you are preparing for.', contactEmail: 'Email me', contactCv: 'Download CV',
    emailPending: 'Professional email pending', linkedInPending: 'LinkedIn URL pending', githubPending: 'GitHub URL pending', addDetails: 'Add this link in src/data/portfolio.js', footerNote: 'Designed and tested with the same care I bring to product quality.', availability: 'Available for remote roles and freelance QA',
  },
  es: {
    skip: 'Ir al contenido principal', home: 'inicio', mainNavigation: 'Navegación principal', toggleNavigation: 'Abrir o cerrar navegación', languageSelector: 'Selector de idioma', contact: 'Contacto', cvShort: 'CV',
    projects: 'Ver proyectos QA', cv: 'Descargar CV', hireMe: 'Contratarme / Contacto', explore: 'Explorar experiencia', releaseSignal: 'Señal de release', riskVisible: 'Riesgo visible.',
    metricsLabel: 'Aspectos profesionales verificados',
    experienceKicker: 'Experiencia profesional', experienceTitle: 'Más de 5 años probando productos donde la calidad impacta en el negocio.', engagement: 'Contexto de producto', focus: 'Foco principal',
    caseKicker: 'Proyectos QA', caseTitle: 'Cómo abordo problemas reales de calidad.', caseDescription: 'Casos profesionales anonimizados y un proyecto público de automatización. Cada caso explica contexto, alcance, enfoque, stack y evidencia sin exponer información confidencial.', contextProblem: 'Contexto / problema', whatTested: 'Qué probé', qaApproach: 'Enfoque de QA / automation', resultsImpact: 'Resultados / impacto', techStack: 'Stack técnico', noClientData: 'Resumen seguro',
    skillsKicker: 'Capacidades QA', skillsTitle: 'Profundidad manual, disciplina de automation y validación entre capas.', skillsDescription: 'Stack orientado a producto para analizar riesgo, validar comportamiento, automatizar regresiones, investigar datos y comunicar confianza de release.', stackKicker: 'Stack de trabajo',
    servicesKicker: 'Servicios QA', servicesTitle: 'Soporte práctico de calidad para productos que necesitan liberar con confianza.', servicesDescription: 'Alcances claros y entregables útiles para founders, startups y equipos de producto: desde testing enfocado hasta automatización mantenible.',
    howKicker: 'Cómo trabajo', howTitle: 'Calidad desde el requerimiento hasta la señal de release.', howDescription: 'El testing no es un control final. Conecto intención de producto, riesgo, evidencia, automatización y entrega durante todo el ciclo.',
    evidenceKicker: 'Evidencia de trabajo', evidenceTitle: 'Inspeccioná el proceso, no sólo la lista de herramientas.', evidenceDescription: 'Los enlaces públicos reales están activos. Las capturas faltantes quedan como placeholders honestos con el artefacto exacto requerido.',
    aboutKicker: 'Perfil', aboutTitle: 'QA como identidad principal, con formación en ingeniería de software.', profileSnapshot: 'Resumen profesional', base: 'Ubicación', lookingFor: 'Búsqueda', languages: 'Idiomas', collaboration: 'Colaboración', collaborative: 'Multidisciplinaria · Remota', educationKicker: 'Formación', educationTitle: 'Base de ingeniería', languagesKicker: 'Idiomas', languagesTitle: 'Comunicación remota',
    contactKicker: 'Contacto', contactTitle: 'Hagamos visible el riesgo antes del release.', contactText: '¿Buscás un QA Engineer o necesitás soporte de calidad para tu producto? Contame qué están construyendo, dónde está el mayor riesgo y qué release están preparando.', contactEmail: 'Enviar email', contactCv: 'Descargar CV',
    emailPending: 'Email profesional pendiente', linkedInPending: 'URL de LinkedIn pendiente', githubPending: 'URL de GitHub pendiente', addDetails: 'Agregar este enlace en src/data/portfolio.js', footerNote: 'Diseñado y probado con el mismo criterio que aplico a la calidad de producto.', availability: 'Disponible para roles remotos y servicios QA',
  },
};

function App() {
  const [language, setLanguage] = useState(portfolio.settings.defaultLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const localize = (value) => value[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'en'
      ? 'Matías Murua · QA Engineer | QA Automation Engineer'
      : 'Matías Murua · QA Engineer | QA Automation Engineer';
  }, [language]);

  return (
    <div className={'site-shell'}>
      <a className={'skip-link'} href={'#main'}>{t.skip}</a>
      <Header language={language} setLanguage={setLanguage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} personal={portfolio.personal} navigation={portfolio.navigation} text={t} />

      <main id={'main'}>
        <section className={'hero'} id={'top'} aria-labelledby={'hero-title'}>
          <div className={'hero-copy'}>
            <div className={'availability'}><span aria-hidden={true} />{localize(portfolio.personal.availability)}</div>
            <p className={'eyebrow'}>{localize(portfolio.hero.eyebrow)}</p>
            <h1 id={'hero-title'} data-cy={'hero-name'}>{portfolio.personal.shortName}</h1>
            <p className={'professional-title'} data-cy={'hero-title'}>{localize(portfolio.personal.title)}</p>
            <p className={'hero-intro'}>{localize(portfolio.hero.intro)}</p>
            <ul className={'hero-stack'} aria-label={'Core QA technologies'}>{portfolio.hero.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className={'hero-actions'}>
              <a className={'button button-primary'} href={'#projects'} data-cy={'view-projects'}>{t.projects}<ArrowRight aria-hidden={true} /></a>
              <a className={'button button-secondary'} href={import.meta.env.BASE_URL + portfolio.personal.cv} download data-cy={'cv-download'}>{t.cv}<Download aria-hidden={true} /></a>
              <a className={'button button-ghost'} href={'#contact'}><Mail aria-hidden={true} />{t.hireMe}</a>
            </div>
          </div>

          <aside className={'quality-console'} aria-label={language === 'en' ? 'Quality trace overview' : 'Resumen de trazabilidad de calidad'}>
            <div className={'console-header'}><span>quality_trace.yml</span><span className={'console-status'}><CheckCircle2 aria-hidden={true} /> verified</span></div>
            <div className={'trace-line'}><span>01</span><p><b>requirements</b><em>business intent mapped</em></p></div>
            <div className={'trace-line'}><span>02</span><p><b>risk</b><em>critical paths identified</em></p></div>
            <div className={'trace-line active'}><span>03</span><p><b>coverage</b><em>web + API + database</em></p></div>
            <div className={'trace-line'}><span>04</span><p><b>delivery</b><em>automation + CI/CD</em></p></div>
            <div className={'console-result'}><span>{t.releaseSignal}</span><strong>{t.riskVisible}</strong></div>
          </aside>
          <a className={'scroll-cue'} href={'#experience'}><ArrowDown aria-hidden={true} /><span>{t.explore}</span></a>
        </section>

        <section className={'metrics-section'} aria-label={t.metricsLabel}>
          {portfolio.metrics.map((metric) => <div key={metric.value}><strong>{metric.value}</strong><span>{localize(metric.label)}</span></div>)}
        </section>

        <section className={'section experience-section'} id={'experience'} aria-labelledby={'experience-title'}>
          <SectionHeading id={'experience-title'} kicker={t.experienceKicker} title={t.experienceTitle} description={localize(portfolio.experience.intro)} />
          <div className={'engagement-list'}>
            {portfolio.experience.engagements.map((item, index) => (
              <article className={'engagement'} key={item.code}>
                <span className={'engagement-code'}>{item.code}</span>
                <div><small>{t.engagement} 0{index + 1}</small><h3>{localize(item.sector)}</h3></div>
                <div><small>{t.focus}</small><strong>{localize(item.focus)}</strong><p>{localize(item.detail)}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className={'section projects-section'} id={'projects'} aria-labelledby={'projects-title'}>
          <SectionHeading id={'projects-title'} kicker={t.caseKicker} title={t.caseTitle} description={t.caseDescription} />
          <div className={'case-list'} data-cy={'projects-list'}>{portfolio.caseStudies.map((study) => <CaseStudyCard key={study.id} study={study} language={language} labels={t} />)}</div>
        </section>

        <section className={'section skills-section'} id={'skills'} aria-labelledby={'skills-title'}>
          <SectionHeading id={'skills-title'} kicker={t.skillsKicker} title={t.skillsTitle} description={t.skillsDescription} />
          <div className={'skills-grid'}>
            {portfolio.skillGroups.map((group) => (
              <article className={'skill-card'} key={group.title.en}>
                <Icon name={group.icon} className={'skill-card__icon'} />
                <h3>{localize(group.title)}</h3><p>{localize(group.description)}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className={'stack-heading'}><p className={'section-kicker'}>{t.stackKicker}</p></div>
          <div className={'stack-table'}>
            {portfolio.stack.map((group, index) => (
              <div className={'stack-row'} key={group.label.en}>
                <span className={'stack-index'}>0{index + 1}</span><h3>{localize(group.label)}</h3>
                <div className={'stack-items'}>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={'section services-section'} id={'services'} aria-labelledby={'services-title'}>
          <SectionHeading id={'services-title'} kicker={t.servicesKicker} title={t.servicesTitle} description={t.servicesDescription} />
          <div className={'services-grid'}>{portfolio.services.map((service) => <ServiceCard key={service.title.en} service={service} language={language} />)}</div>
          <aside className={'additional-services'}><div><p className={'mini-label'}>{localize(portfolio.additionalServices.title)}</p><p>{localize(portfolio.additionalServices.description)}</p></div><ul>{portfolio.additionalServices.items.map((item) => <li key={item}>{item}</li>)}</ul></aside>
          <AudiencePaths paths={portfolio.audiencePaths} language={language} cv={portfolio.personal.cv} />
        </section>

        <section className={'section process-section'} id={'how-i-test'} aria-labelledby={'process-title'}>
          <SectionHeading id={'process-title'} kicker={t.howKicker} title={t.howTitle} description={t.howDescription} />
          <ProcessFlow steps={portfolio.howITest} language={language} />
        </section>

        <section className={'section evidence-section'} id={'evidence'} aria-labelledby={'evidence-title'}>
          <SectionHeading id={'evidence-title'} kicker={t.evidenceKicker} title={t.evidenceTitle} description={t.evidenceDescription} />
          <div className={'evidence-grid'}>{portfolio.evidence.map((item) => <EvidenceCard key={item.title.en} item={item} language={language} />)}</div>
        </section>

        <section className={'section about-section'} id={'about'} aria-labelledby={'about-title'}>
          <div className={'about-intro'}>
            <div><p className={'section-kicker'}>{t.aboutKicker}</p><h2 id={'about-title'}>{t.aboutTitle}</h2></div>
            <div className={'about-copy'}>{portfolio.about.paragraphs.map((paragraph) => <p key={paragraph.en}>{localize(paragraph)}</p>)}</div>
          </div>
          <aside className={'profile-strip'}>
            <span className={'profile-strip__title'}>{t.profileSnapshot}</span>
            <dl>
              <div><dt>{t.base}</dt><dd><MapPin aria-hidden={true} />{portfolio.personal.location}</dd></div>
              <div><dt>{t.lookingFor}</dt><dd>{localize(portfolio.personal.remotePreference)}</dd></div>
              <div><dt>{t.languages}</dt><dd>ES · Native / EN · B1 → B2</dd></div>
              <div><dt>{t.collaboration}</dt><dd>{t.collaborative}</dd></div>
            </dl>
          </aside>
          <div className={'credentials-grid credentials-grid--about'}>
            <article className={'credential-panel'} id={'education'} aria-labelledby={'education-title'}>
              <p className={'section-kicker'}>{t.educationKicker}</p><h2 id={'education-title'}>{t.educationTitle}</h2>
              <div className={'education-record'}><Icon name={'bookOpen'} /><div><strong>{localize(portfolio.education.title)}</strong><p>{localize(portfolio.education.detail)}</p></div></div>
            </article>
            <article className={'credential-panel'} id={'languages'} aria-labelledby={'languages-title'}>
              <p className={'section-kicker'}>{t.languagesKicker}</p><h2 id={'languages-title'}>{t.languagesTitle}</h2>
              <div className={'language-records'}>{portfolio.languages.map((item) => <div key={item.code}><span>{item.code}</span><strong>{localize(item.name)}</strong><small>{localize(item.level)}</small></div>)}</div>
            </article>
          </div>
        </section>

        <section className={'contact-section'} id={'contact'} aria-labelledby={'contact-title'}>
          <div className={'contact-main'}>
            <p className={'section-kicker'}>{t.contactKicker}</p><h2 id={'contact-title'}>{t.contactTitle}</h2><p>{t.contactText}</p>
            <div className={'contact-actions'}>
              <a className={'button button-primary'} href={'mailto:' + portfolio.personal.email} data-cy={'contact-button'}><Mail aria-hidden={true} />{t.contactEmail}</a>
              <a className={'button button-secondary'} href={import.meta.env.BASE_URL + portfolio.personal.cv} download><Download aria-hidden={true} />{t.contactCv}</a>
            </div>
          </div>
          <div className={'contact-links'}>
            <ContactLink icon={Mail} label={'Email'} value={portfolio.personal.email} pending={t.emailPending} hint={t.addDetails} />
            <ContactLink icon={BriefcaseBusiness} label={'LinkedIn'} value={portfolio.personal.linkedin} pending={t.linkedInPending} hint={t.addDetails} external />
            <ContactLink icon={GitBranch} label={'GitHub'} value={portfolio.personal.github} pending={t.githubPending} hint={t.addDetails} external />
          </div>
        </section>
      </main>

      <footer className={'site-footer'}>
        <div><span className={'brand-mark'} aria-hidden={true}>MM</span><p>{t.footerNote}</p></div>
        <div><ShieldCheck aria-hidden={true} /><span>{t.availability}</span><small>© {new Date().getFullYear()} {portfolio.personal.shortName}</small></div>
      </footer>
    </div>
  );
}

function ContactLink({ icon: ContactIcon, label, value, pending, hint, external = false }) {
  const isEmail = label === 'Email';
  const valid = isEmail ? Boolean(value) : hasRealLink(value);
  if (valid) {
    return <a className={'contact-link'} href={isEmail ? 'mailto:' + value : value} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}><ContactIcon aria-hidden={true} /><span><small>{label}</small><strong>{value}</strong></span><ExternalLink aria-hidden={true} /></a>;
  }
  return <div className={'contact-link contact-link--pending'}><ContactIcon aria-hidden={true} /><span><small>{label}</small><strong>{pending}</strong><em>{hint}</em></span></div>;
}

export default App;
