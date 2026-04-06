import {
  ArrowRight,
  BadgeCheck,
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
        <section className="hero-section editorial-hero">
          <div className="hero-copy">
            <div className="eyebrow">Gestión del talento humano con rigor institucional</div>
            <h1>
              Outsourcing laboral con <span>rostro humano</span> para empresas que necesitan operar con control, cumplimiento y respaldo real.
            </h1>
            <p className="hero-text">
              TrustWork Dominicana acompaña empresas locales e internacionales en contratación, nómina, cumplimiento y gestión integral del talento humano en República Dominicana, con un enfoque ejecutivo, preciso y jurídicamente estructurado.
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
          </div>

          <div className="hero-visual minimal-visual">
            <div className="visual-orb orb-one" />
            <div className="visual-orb orb-two" />
            <div className="visual-panel-line" />
            <div className="visual-panel">
              <div className="visual-kicker">Protección • Cumplimiento • Nómina</div>
              <div className="visual-title">Estructura laboral para crecer sin fricción operativa</div>
              <p>
                Desde operaciones en expansión hasta estructuras multiempresa, la firma ejecuta el back office laboral con estándares institucionales y foco comercial B2B.
              </p>
            </div>
          </div>
        </section>

        <section className="stats-section clean-stats" aria-label="Indicadores principales">
          {stats.map((stat) => (
            <div className="stat-card bare-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="pillars-section clean-section" id="empresa">
          <div className="section-heading">
            <div className="eyebrow">Lo que define a la firma</div>
            <h2>Una operación diseñada para proteger el negocio y liberar a la dirección de la complejidad laboral.</h2>
          </div>
          <div className="pillars-grid clean-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="pillar-card soft-card" key={pillar.title}>
                  <Icon size={24} />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="services-section editorial-services" id="servicios">
          <div className="services-copy">
            <div className="eyebrow">Portafolio de servicios</div>
            <h2>Todo lo necesario para operar personal con orden, trazabilidad y cumplimiento.</h2>
            <p>
              TrustWork Dominicana ejecuta procesos laborales y administrativos que ayudan a las organizaciones a reducir riesgo, ganar eficiencia y sostener crecimiento con una estructura más clara.
            </p>
          </div>
          <div className="services-list simple-surface">
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

        <section className="mission-section simple-surface">
          <div>
            <div className="eyebrow">Misión e intención</div>
            <h2>Ser el socio de confianza que asume la gestión laboral para que el crecimiento no se detenga.</h2>
          </div>
          <p>
            La firma construye relaciones comerciales duraderas basadas en resultados, transparencia y cumplimiento. Cada cliente debe sentir que su operación está respaldada por un equipo que entiende su contexto y actúa en consecuencia.
          </p>
        </section>

        <section className="dominicana-section clean-section">
          <div className="section-heading">
            <div className="eyebrow">Por qué República Dominicana</div>
            <h2>Una plataforma natural para establecer, expandir y estructurar operaciones con alcance regional.</h2>
          </div>
          <div className="reasons-grid clean-grid">
            {reasons.map((reason) => (
              <article className="reason-card soft-card" key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="team-section simple-surface">
          <div className="section-heading left-align">
            <div className="eyebrow">Equipo operativo</div>
            <h2>Especialistas en derecho laboral, nómina, documentación y ejecución institucional.</h2>
          </div>
          <div className="team-grid clean-grid team-minimal">
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

        <section className="sectors-section clean-section" id="sectores">
          <div className="section-heading">
            <div className="eyebrow">Sectores que atendemos</div>
            <h2>Capacidad para acompañar empresas locales, regionales e internacionales en múltiples industrias.</h2>
          </div>
          <ul className="sectors-grid editorial-chips">
            {sectors.map((sector) => (
              <li className="sector-chip" key={sector}>{sector}</li>
            ))}
          </ul>
        </section>

        <section className="credibility-strip simple-surface editorial-strip">
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

        <section className="cta-section simple-surface" id="contacto">
          <div>
            <div className="eyebrow">Contacto comercial</div>
            <h2>Solicita una conversación estratégica para estructurar tu operación laboral con mayor control y cumplimiento.</h2>
            <p>
              TrustWork Dominicana puede convertirse en el respaldo operativo que tu empresa necesita para crecer con menos fricción administrativa y más seguridad jurídica.
            </p>
          </div>
          <div className="contact-grid editorial-contact-grid">
            <a className="contact-card minimal-contact" href="mailto:contacto@trustworkdominicana.com">
              <Mail size={20} />
              <div>
                <strong>Correo</strong>
                <span>contacto@trustworkdominicana.com</span>
              </div>
            </a>
            <a className="contact-card minimal-contact" href="tel:+18295550147">
              <Phone size={20} />
              <div>
                <strong>Teléfono</strong>
                <span>+1 (829) 555-0147</span>
              </div>
            </a>
            <a className="contact-card minimal-contact" href="https://wa.me/18295550147" target="_blank" rel="noreferrer">
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
