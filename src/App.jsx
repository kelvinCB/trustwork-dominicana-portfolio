import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Briefcase,
  CheckCircle2,
  FileSpreadsheet,
  Globe2,
  Landmark,
  Mail,
  Phone,
  ShieldCheck,
  Users,
  MessageCircle,
} from 'lucide-react';
import './App.css';

const pillars = [
  {
    title: 'Respaldo y protección empresarial',
    text: 'Asumimos la responsabilidad laboral en nombre del cliente para reducir exposición operativa y legal.',
    icon: ShieldCheck,
  },
  {
    title: 'Confianza y confidencialidad',
    text: 'Reserva total en el manejo de datos sensibles, procesos internos y documentación laboral.',
    icon: BadgeCheck,
  },
  {
    title: 'Eficiencia y resultados',
    text: 'Procesos precisos, reportería clara y cumplimiento puntual para sostener operaciones estables.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Cumplimiento legal ético',
    text: 'Operación dentro del marco legal vigente en República Dominicana, con rigor institucional.',
    icon: Landmark,
  },
];

const services = [
  'Tercerización laboral y outsourcing administrativo',
  'Administración de nómina y estructuras multiempresa',
  'Contratación, expedientes y documentación laboral',
  'Seguridad social, TSS y cumplimiento tributario',
  'Procesos disciplinarios y desvinculación conforme al Código de Trabajo',
  'Acompañamiento para empresas internacionales que operan en RD',
];

const reasons = [
  {
    title: 'Posición geográfica estratégica',
    text: 'República Dominicana conecta naturalmente con América del Norte, América Latina y Europa, con zona horaria favorable para ambos hemisferios.',
  },
  {
    title: 'Marco legal estructurado',
    text: 'El Código Laboral dominicano permite operar con claridad regulatoria, siempre que exista ejecución correcta y cumplimiento riguroso.',
  },
  {
    title: 'Talento humano disponible',
    text: 'Existe una fuerza laboral amplia, joven y adaptable para manufactura, servicios, tecnología, turismo y operaciones especializadas.',
  },
  {
    title: 'Infraestructura empresarial activa',
    text: 'Zonas francas, parques industriales, sector turístico consolidado y ecosistema financiero robusto favorecen la expansión empresarial.',
  },
];

const sectors = [
  'Manufactura y Zonas Francas',
  'Hostelería y Turismo',
  'Tecnología y Servicios Digitales',
  'Retail y Comercio',
  'Construcción e Infraestructura',
  'Salud y Farmacéutico',
  'Finanzas y Seguros',
  'Logística y Transporte',
  'Educación y Consultoría',
  'Agroindustria y Producción',
  'Energía y Minería',
  'Telecomunicaciones',
  'Servicios Administrativos y BPO',
  'Restaurantes y Entretenimiento',
  'Mantenimiento y Operaciones',
  'Startups y Empresas en Expansión',
];

const stats = [
  { value: 'RD + Global', label: 'Operación local con alcance internacional' },
  { value: '100%', label: 'Enfoque en cumplimiento laboral y nómina' },
  { value: 'B2B', label: 'Pensado para directores y empresas en expansión' },
];

const differentiators = [
  'Reduce carga administrativa interna y riesgo laboral',
  'Facilita expansión formal en República Dominicana',
  'Permite operar con más control, precisión y trazabilidad',
];

function App() {
  return (
    <div className="app-shell">
      <div className="noise" />
      <header className="site-header">
        <div className="brand-mark">
          <div className="brand-dot" />
          <span>TrustWork Dominicana</span>
        </div>
        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#empresa">Empresa</a>
          <a href="#sectores">Sectores</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">Gestión del talento humano con rigor institucional</div>
            <h1>
              Outsourcing laboral con <span>rostro humano</span> para empresas que no pueden permitirse improvisar.
            </h1>
            <p className="hero-text">
              TrustWork Dominicana ayuda a empresas locales e internacionales a contratar, administrar nómina y gestionar talento humano en República Dominicana con estructura, cumplimiento y protección operativa real.
            </p>
            <ul className="hero-benefits">
              {differentiators.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="hero-actions">
              <a className="primary-button" href="#contacto">
                Solicitar conversación estratégica <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="https://trustworkdominicana.com/" target="_blank" rel="noreferrer">
                Ver sitio oficial
              </a>
            </div>
            <div className="hero-note">
              Pensado para directores, unidades B2B y empresas que buscan cumplimiento sin fricción operativa.
            </div>
          </div>

          <div className="hero-panel glass-panel">
            <div className="hero-card-grid">
              <div className="hero-card large-card">
                <ShieldCheck size={28} />
                <h3>Protección laboral</h3>
                <p>La carga operativa y laboral se ejecuta con estructura, control documental y trazabilidad.</p>
              </div>
              <div className="hero-card metric-card">
                <Users size={24} />
                <strong>Talento humano</strong>
                <span>Contratación, nómina y gestión completa</span>
              </div>
              <div className="hero-card metric-card">
                <Globe2 size={24} />
                <strong>Empresas internacionales</strong>
                <span>Entrada ordenada al mercado dominicano</span>
              </div>
              <div className="hero-card metric-card">
                <Building2 size={24} />
                <strong>Operación B2B</strong>
                <span>Respaldo para directores y unidades comerciales</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section" aria-label="Indicadores principales">
          {stats.map((stat) => (
            <div className="stat-card glass-panel" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="pillars-section" id="empresa">
          <div className="section-heading">
            <div className="eyebrow">Lo que define a la firma</div>
            <h2>Una operación construida para dar confianza, control y cumplimiento.</h2>
          </div>
          <div className="pillars-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="pillar-card glass-panel" key={pillar.title}>
                  <Icon size={26} />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="services-section" id="servicios">
          <div className="services-copy">
            <div className="eyebrow">Portafolio de servicios</div>
            <h2>Todo lo que una empresa necesita para operar personal con orden y sin improvisación.</h2>
            <p>
              TrustWork Dominicana ejecuta los procesos laborales y administrativos que permiten a las organizaciones optimizar estructura, reducir riesgos y liberar a sus equipos directivos de la complejidad de gestionar personal internamente.
            </p>
          </div>
          <div className="services-list glass-panel">
            <ul>
              {services.map((service) => (
                <li className="service-row" key={service}>
                  <CheckCircle2 size={18} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mission-section glass-panel">
          <div>
            <div className="eyebrow">Misión e intención</div>
            <h2>Ser el socio de confianza que asume la gestión laboral para que el crecimiento no se detenga.</h2>
          </div>
          <p>
            La firma trabaja para construir relaciones comerciales duraderas basadas en resultados, transparencia y cumplimiento. Cada cliente debe sentir que su operación está respaldada por un equipo que entiende su contexto y actúa en consecuencia.
          </p>
        </section>

        <section className="dominicana-section">
          <div className="section-heading">
            <div className="eyebrow">Por qué República Dominicana</div>
            <h2>Una plataforma natural para operar, expandirse y estructurar personal con alcance regional.</h2>
          </div>
          <div className="reasons-grid">
            {reasons.map((reason) => (
              <article className="reason-card glass-panel" key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="team-section glass-panel">
          <div className="section-heading left-align">
            <div className="eyebrow">Equipo operativo</div>
            <h2>Especialistas en derecho laboral, nómina, documentación y ejecución institucional.</h2>
          </div>
          <div className="team-grid">
            <div>
              <Briefcase size={22} />
              <h3>Operaciones laborales</h3>
              <p>Contratación, expedientes, procesos disciplinarios y desvinculación conforme al Código de Trabajo.</p>
            </div>
            <div>
              <FileSpreadsheet size={22} />
              <h3>Nómina y cumplimiento</h3>
              <p>Procesamiento de nómina, retenciones, TSS y coordinación administrativa con precisión operativa.</p>
            </div>
            <div>
              <Users size={22} />
              <h3>Red de Directores B2B</h3>
              <p>Relación comercial cercana, atención personalizada y acceso al servicio con respaldo directo.</p>
            </div>
          </div>
        </section>

        <section className="sectors-section" id="sectores">
          <div className="section-heading">
            <div className="eyebrow">Sectores que atendemos</div>
            <h2>Capacidad para acompañar empresas locales, regionales e internacionales en múltiples industrias.</h2>
          </div>
          <ul className="sectors-grid">
            {sectors.map((sector) => (
              <li className="sector-chip" key={sector}>{sector}</li>
            ))}
          </ul>
        </section>

        <section className="credibility-strip glass-panel">
          <div>
            <strong>Enfoque institucional</strong>
            <span>Procesos laborales, nómina y cumplimiento ejecutados con rigor y trazabilidad.</span>
          </div>
          <div>
            <strong>Modelo B2B</strong>
            <span>Material pensado para empresas que requieren respaldo, control y continuidad operativa.</span>
          </div>
          <div>
            <strong>República Dominicana</strong>
            <span>Plataforma ideal para operación local con expansión internacional.</span>
          </div>
        </section>

        <section className="cta-section glass-panel" id="contacto">
          <div>
            <div className="eyebrow">Contacto comercial</div>
            <h2>Si tu empresa necesita operar personal con más orden, cumplimiento y respaldo, esta conversación vale la pena.</h2>
            <p>
              Solicita una conversación estratégica con TrustWork Dominicana y recibe una orientación inicial para estructurar tu operación laboral con mayor control, cumplimiento y continuidad.
            </p>
          </div>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:contacto@trustworkdominicana.com">
              <Mail size={20} />
              <div>
                <strong>Correo</strong>
                <span>contacto@trustworkdominicana.com</span>
              </div>
            </a>
            <a className="contact-card" href="tel:+18295550147">
              <Phone size={20} />
              <div>
                <strong>Teléfono</strong>
                <span>+1 (829) 555-0147</span>
              </div>
            </a>
            <a className="contact-card" href="https://wa.me/18295550147" target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              <div>
                <strong>WhatsApp</strong>
                <span>Escribir por WhatsApp</span>
              </div>
            </a>
          </div>
          <div className="cta-actions">
            <a className="primary-button" href="mailto:contacto@trustworkdominicana.com?subject=Consulta%20estrat%C3%A9gica%20-%20TrustWork%20Dominicana">
              Solicitar conversación estratégica <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
