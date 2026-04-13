import { ArrowRight, BadgeCheck, Briefcase, CheckCircle2, FileSpreadsheet, Landmark, Mail, ShieldCheck, Users } from 'lucide-react';
import './App.css';

const heroImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80';
const rdImage = '/images/republica-dominicana-playa.webp';
const teamImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80';

const pillars = [
  { title: 'Respaldo y protección empresarial', text: 'Asumimos la responsabilidad laboral en nombre del cliente para reducir exposición operativa y legal.', icon: ShieldCheck },
  { title: 'Confianza y confidencialidad', text: 'Reserva total en el manejo de datos sensibles, procesos internos y documentación laboral.', icon: BadgeCheck },
  { title: 'Eficiencia y resultados', text: 'Procesos precisos, reportería clara y cumplimiento puntal para sostener operaciones estables.', icon: FileSpreadsheet },
  { title: 'Cumplimiento legal ético', text: 'Operación dentro del marco legal vigente en República Dominicana, con rigor institucional.', icon: Landmark },
];

const services = [
  {
    number: '01',
    title: 'Tercerización Laboral',
    text: 'Administración integral del personal en nombre del cliente: contratación bajo el Código de Trabajo dominicano, gestión documental completa y procesos disciplinarios conforme a derecho.',
  },
  {
    number: '02',
    title: 'Administración de Nómina',
    text: 'Cálculo, procesamiento y control de nómina con retenciones legales, contribuciones a la TSS (SFS, AFP, SRL) y reportes administrativos bajo estricta confidencialidad y precisión.',
  },
  {
    number: '03',
    title: 'Reclutamiento y Selección',
    text: 'Procesos especializados, masivos e internacionales con evaluación por competencias, entrevistas estructuradas y presentación de candidatos alineados al perfil requerido.',
  },
  {
    number: '04',
    title: 'Gestión de Seguridad Social',
    text: 'Administración de SFS, AFP y SRL conforme a la Ley 87-01 de Seguridad Social, garantizando cumplimiento, afiliación oportuna del personal y cero contingencias con la TSS.',
  },
  {
    number: '05',
    title: 'Nómina Multimoneda',
    text: 'Pagos en pesos dominicanos, dólares y euros. Ideal para estructuras corporativas regionales e internacionales con personal local bajo contratos en divisas extranjeras.',
  },
  {
    number: '06',
    title: 'Procesos de Desvinculación',
    text: 'Gestión profesional y conforme al Código Laboral de los procesos de salida: liquidaciones, preaviso, actas de descargo y documentación que proteja al cliente de contingencias futuras.',
  },
];

const reasons = [
  { title: 'Posición geográfica estratégica', text: 'República Dominicana conecta naturalmente con América del Norte, América Latina y Europa, con zona horaria favorable para ambos hemisferios.' },
  { title: 'Marco legal estructurado', text: 'El Código Laboral dominicano permite operar con claridad regulatoria, siempre que exista ejecución correcta y cumplimiento riguroso.' },
  { title: 'Talento humano disponible', text: 'Existe una fuerza laboral amplia, joven y adaptable para manufactura, servicios, tecnología, turismo y operaciones especializadas.' },
  { title: 'Infraestructura empresarial activa', text: 'Zonas francas, parques industriales, sector turístico consolidado y ecosistema financiero robusto favorecen la expansión empresarial.' },
];

const sectors = [
  'Manufactura y Zonas Francas', 'Hostelería y Turismo', 'Tecnología y Servicios Digitales', 'Retail y Comercio',
  'Construcción e Infraestructura', 'Salud y Farmacéutico', 'Finanzas y Seguros', 'Logística y Transporte',
  'Educación y Consultoría', 'Agroindustria y Producción', 'Energía y Minería', 'Telecomunicaciones',
  'Servicios Administrativos y BPO', 'Restaurantes y Entretenimiento', 'Mantenimiento y Operaciones', 'Startups y Empresas en Expansión',
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
        <div className="brand-mark"><div className="brand-dot" /><span>TrustWork Dominicana</span></div>
        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#empresa">Empresa</a>
          <a href="#sectores">Sectores</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>
      <main>
        <section className="hero-section editorial-hero with-image">
          <div className="hero-copy">
            <div className="eyebrow">Gestión del talento humano con rigor institucional</div>
            <h1>Outsourcing con <span>rostro humano</span> para empresas que necesitan operar con control, cumplimiento y respaldo real.</h1>
            <p className="hero-text">TrustWork Dominicana acompaña empresas locales e internacionales en contratación, nómina, cumplimiento y gestión integral del talento humano en República Dominicana, con un enfoque ejecutivo, preciso y jurídicamente estructurado.</p>
            <ul className="hero-benefits">
              {differentiators.map((item) => <li key={item}><CheckCircle2 size={18} /><span>{item}</span></li>)}
            </ul>
            <div className="hero-actions">
              <a className="primary-button" href="#contacto">Solicitar conversación estratégica <ArrowRight size={18} /></a>
              <a className="secondary-button" href="https://trustworkdominicana.com/" target="_blank" rel="noreferrer">Ver sitio oficial</a>
            </div>
          </div>
          <div className="hero-image-wrap"><img src={heroImage} alt="Zona Colonial de Santo Domingo, República Dominicana" className="section-image hero-image" /></div>
        </section>

        <section className="stats-section clean-stats" aria-label="Indicadores principales">
          {stats.map((stat) => <div className="stat-card bare-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </section>

        <section className="pillars-section clean-section" id="empresa">
          <div className="section-heading">
            <div className="eyebrow">Lo que define a la firma</div>
            <h2>Una operación diseñada para proteger el negocio y liberar a la dirección de la complejidad laboral.</h2>
          </div>
          <div className="pillars-grid clean-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return <article className="pillar-card soft-card" key={pillar.title}><Icon size={24} /><h3>{pillar.title}</h3><p>{pillar.text}</p></article>;
            })}
          </div>
        </section>

        <section className="services-section services-table-section" id="servicios">
          <div className="services-table-header">
            <h2>Portafolio de Servicios</h2>
            <div className="services-table-divider" />
            <p>
              Asumimos la gestión laboral y administrativa del personal de nuestros clientes,
              permitiéndoles operar con mayor eficiencia, reducir riesgos y concentrarse en su actividad principal.
            </p>
          </div>
          <div className="services-table-grid">
            {services.map((service) => (
              <article className="service-table-card" key={service.number}>
                <div className="service-table-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>


        <section className="profile-focus-section" aria-labelledby="profile-focus-title">
          <div className="profile-focus-eyebrow">ENFOQUES POR PERFIL EMPRESARIAL</div>
          <div className="profile-focus-table">
            <div className="profile-column">
              <div className="profile-column-header">Empresas grandes</div>
              <div className="profile-column-body">
                <h3>Optimización de costos laborales</h3>
                <p>La tercerización transforma costos fijos en estructura variable, reduciendo la carga interna sin sacrificar control ni calidad.</p>
                <ul>
                  <li>Reducción de costos por personal indirecto</li>
                  <li>Eliminación de cargas administrativas internas</li>
                  <li>Estructura laboral flexible y escalable</li>
                  <li>Gestión centralizada de múltiples nóminas</li>
                </ul>
              </div>
            </div>
            <div className="profile-column">
              <div className="profile-column-header">Empresas pequeñas</div>
              <div className="profile-column-body">
                <h3>Cumplimiento legal y protección jurídica</h3>
                <p>Formalizamos y protegemos la relación laboral, evitando contingencias legales y demandas que comprometan la operación.</p>
                <ul>
                  <li>Formalización del personal contratado</li>
                  <li>Cumplimiento de la legislación laboral dominicana</li>
                  <li>Prevención de demandas y contingencias</li>
                  <li>Afiliación y gestión de seguridad social</li>
                </ul>
              </div>
            </div>
            <div className="profile-column">
              <div className="profile-column-header">Empresas internacionales</div>
              <div className="profile-column-body">
                <h3>Entrada al mercado dominicano</h3>
                <p>Facilitamos la contratación legal de personal local sin necesidad de constituir estructura propia desde el inicio.</p>
                <ul>
                  <li>Contratación inmediata bajo marco legal dominicano</li>
                  <li>Nómina en múltiples monedas</li>
                  <li>Sin carga jurídica directa sobre la empresa extranjera</li>
                  <li>Escalabilidad según crecimiento local</li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        <section className="tech-platform-section" aria-labelledby="tech-platform-title">
          <h2 id="tech-platform-title" className="tech-platform-title">Plataforma de gestión y tecnología</h2>
          <div className="tech-platform-divider" />
          <p className="tech-platform-copy">
            TrustWork Dominicana estructura sus procesos mediante herramientas digitales y controles operativos
            que garantizan precisión, trazabilidad y acceso organizado a la información de cada cliente. Cada
            proceso—desde el alta del personal hasta la liquidación mensual— se gestiona bajo estándares de
            control, respaldo documental y seguimiento continuo.
          </p>
          <div className="tech-platform-table">
            <div className="tech-platform-head">Portal del cliente</div>
            <div className="tech-platform-head">Gestión documental</div>
            <div className="tech-platform-head">Nómina digital</div>
            <div className="tech-platform-head">Reportería en tiempo real</div>

            <div className="tech-platform-cell">Acceso coordinado a información clave, reportes y estado de la nómina a través de canales definidos con el cliente.</div>
            <div className="tech-platform-cell">Expedientes organizados con control interno, acceso restringido y resguardo institucional de la documentación laboral.</div>
            <div className="tech-platform-cell">Procesamiento estructurado de nómina con validación de retenciones, contribuciones al TSS y generación de comprobantes.</div>
            <div className="tech-platform-cell">Informes de incidencias, movimientos y cumplimiento normativo entregados en plazos acordados.</div>
          </div>
        </section>



        <section className="onboarding-process-section" aria-labelledby="onboarding-process-title">
          <h2 id="onboarding-process-title" className="tech-platform-title">Cómo funciona — Proceso de vinculación</h2>
          <div className="tech-platform-divider" />
          <div className="onboarding-grid">
            <div className="onboarding-card accent-card">
              <div className="onboarding-number">01</div>
              <h3>Diagnóstico inicial</h3>
              <p>Evaluamos la estructura del cliente: personal activo, contratos vigentes, estado de nómina y situación ante la TSS.</p>
            </div>
            <div className="onboarding-card soft-process-card">
              <div className="onboarding-number">02</div>
              <h3>Propuesta a medida</h3>
              <p>Diseñamos el modelo de servicio según el perfil, tamaño, sector y necesidades específicas de la empresa.</p>
            </div>
            <div className="onboarding-card soft-process-card">
              <div className="onboarding-number">03</div>
              <h3>Formalización</h3>
              <p>Suscripción del acuerdo de servicio y traspaso ordenado de la gestión del personal hacia TrustWork Dominicana.</p>
            </div>
            <div className="onboarding-card accent-card">
              <div className="onboarding-number">04</div>
              <h3>Operación continua</h3>
              <p>Gestión integral, reportería periódica y punto de contacto dedicado para el cliente desde el primer día de operación.</p>
            </div>
          </div>
        </section>



        <section className="operating-model-section" aria-labelledby="operating-model-title">
          <h2 id="operating-model-title" className="tech-platform-title">Modelo de operación</h2>
          <div className="tech-platform-divider" />
          <p className="tech-platform-copy">
            TrustWork Dominicana opera bajo un modelo de servicio completamente externalizado: la firma asume
            la relación laboral formal con el personal del cliente, ejecuta todos los procesos administrativos y
            responde ante las autoridades laborales y de seguridad social en nombre propio. El cliente mantiene el
            control operativo y directivo sobre su equipo sin asumir la carga jurídica.
          </p>
          <div className="operating-model-table">
            <div className="operating-model-head">Clientes que atendemos</div>
            <div className="operating-model-head">Servicios incluidos en el modelo</div>
            <div className="operating-model-cell">
              <ul>
                <li>Empresas locales establecidas</li>
                <li>Empresas internacionales con operación en RD</li>
                <li>Startups en proceso de formalización</li>
                <li>Empresas en fase de expansión o reestructuración</li>
                <li>Operaciones temporales o por proyecto</li>
                <li>Grupos corporativos con múltiples nóminas</li>
              </ul>
            </div>
            <div className="operating-model-cell">
              <ul>
                <li>Contratación y administración del personal</li>
                <li>Gestión documental laboral completa</li>
                <li>Control de procesos disciplinarios</li>
                <li>Procesos de bancarización del personal</li>
                <li>Cumplimiento normativo continuo (Código Laboral y TSS)</li>
                <li>Gestión de incidencias y reportería</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="use-cases-section" aria-labelledby="use-cases-title">
          <h2 id="use-cases-title" className="tech-platform-title">Casos de uso ilustrativos</h2>
          <div className="tech-platform-divider" />
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-head">Empresa grande — Manufactura</div>
              <div className="use-case-body">
                <h4>Contexto</h4>
                <p>Empresa manufacturera con 200+ colaboradores en zona franca: altos costos de administración interna, incidencias sin control y riesgos legales acumulados por inconsistencias en contratos y seguridad social.</p>
                <h4>Solución TWD</h4>
                <p>Transferencia de la gestión a TWD: reducción de estructura administrativa interna, resolución de contingencias laborales pendientes y reportería centralizada para su casa matriz.</p>
              </div>
              <div className="use-case-results">
                <h4>Resultados obtenidos</h4>
                <ul>
                  <li>Reducción de hasta un 35% en costos de administración de personal</li>
                  <li>Contingencias laborales resueltas: 100%</li>
                  <li>Tiempo de implementación: 30 días</li>
                </ul>
              </div>
            </div>
            <div className="use-case-card">
              <div className="use-case-head">Empresa pequeña — Servicios</div>
              <div className="use-case-body">
                <h4>Contexto</h4>
                <p>Empresa de servicios profesionales con 15 empleados operando sin contratos formales, sin afiliación a seguridad social y con riesgo latente de demandas laborales que podían comprometer la continuidad del negocio.</p>
                <h4>Solución TWD</h4>
                <p>Formalización de toda la plantilla, gestión de afiliación al SFS, AFP y SRL, y estructura de nómina que protege legalmente tanto a la empresa como a sus colaboradores.</p>
              </div>
              <div className="use-case-results">
                <h4>Resultados obtenidos</h4>
                <ul>
                  <li>Personal formalizado: 15/15</li>
                  <li>Riesgo de demandas: eliminado</li>
                  <li>Tiempo de implementación: 21 días</li>
                </ul>
              </div>
            </div>
            <div className="use-case-card">
              <div className="use-case-head">Empresa internacional — Tecnología</div>
              <div className="use-case-body">
                <h4>Contexto</h4>
                <p>Firma tecnológica con sede en Europa que necesitaba contratar un equipo local en RD sin constituir entidad legal propia ni asumir directamente la carga laboral dominicana.</p>
                <h4>Solución TWD</h4>
                <p>Contratación de 8 personas bajo marco legal dominicano, con nómina en euros y gestión documental completa, sin necesidad de establecer subsidiaria desde el primer día.</p>
              </div>
              <div className="use-case-results">
                <h4>Resultados obtenidos</h4>
                <ul>
                  <li>Primer contrato operativo: 10 días</li>
                  <li>Nómina en euros desde el día 1</li>
                  <li>Estructura legal propia requerida: No</li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        <section className="comparison-section" aria-labelledby="comparison-title">
          <h2 id="comparison-title" className="tech-platform-title">TWD vs. Departamento de RR.HH. Interno</h2>
          <div className="tech-platform-divider" />
          <div className="comparison-table">
            <div className="comparison-head head-criterion">Criterio</div>
            <div className="comparison-head head-twd">TrustWork Dominicana ✓</div>
            <div className="comparison-head head-internal">RR.HH. interno ✗</div>

            <div className="comparison-cell criterion-cell">Responsabilidad legal laboral</div>
            <div className="comparison-cell">La TWD asume la relación laboral y sus obligaciones</div>
            <div className="comparison-cell">La empresa sigue siendo el empleador; el riesgo no se transfiere</div>

            <div className="comparison-cell criterion-cell">Exposición a demandas laborales</div>
            <div className="comparison-cell">Gestionadas y absorbidas por la TWD</div>
            <div className="comparison-cell">Recaen sobre la empresa y sus representantes legales</div>

            <div className="comparison-cell criterion-cell">Carga administrativa</div>
            <div className="comparison-cell">Eliminada por completo del lado del cliente</div>
            <div className="comparison-cell">Persiste: contratos, expedientes, incidencias, reportes</div>

            <div className="comparison-cell criterion-cell">Cumplimiento normativo</div>
            <div className="comparison-cell">Especialización permanente y actualización continua</div>
            <div className="comparison-cell">Depende del equipo interno; errores generan contingencias</div>

            <div className="comparison-cell criterion-cell">Costo operativo</div>
            <div className="comparison-cell">Variable y controlado según volumen</div>
            <div className="comparison-cell">Fijo: salarios, prestaciones, infraestructura, rotación</div>

            <div className="comparison-cell criterion-cell">Confidencialidad salarial</div>
            <div className="comparison-cell">Gestión externa, sin exposición interna</div>
            <div className="comparison-cell">Estructuras salariales visibles dentro de la organización</div>

            <div className="comparison-cell criterion-cell">Velocidad de implementación</div>
            <div className="comparison-cell">Operativo de inmediato, sin curva de aprendizaje</div>
            <div className="comparison-cell">Requiere contratación, formación y tiempo de adaptación</div>

            <div className="comparison-cell criterion-cell">Escalabilidad</div>
            <div className="comparison-cell">Se ajusta al volumen sin cambios estructurales</div>
            <div className="comparison-cell">Requiere contratar o reducir personal de RR.HH. según demanda</div>
          </div>
        </section>



        <section className="service-guarantees-section" aria-labelledby="service-guarantees-title">
          <h2 id="service-guarantees-title" className="tech-platform-title">Garantías y compromisos de servicio</h2>
          <div className="tech-platform-divider" />
          <div className="mini-grid-table three-columns">
            <div className="mini-head">Punto de contacto dedicado</div>
            <div className="mini-head">Reportería periódica y transparente</div>
            <div className="mini-head">Confidencialidad garantizada</div>
            <div className="mini-cell">Cada cliente cuenta con un oficial de cuenta asignado como interlocutor principal, responsable del seguimiento continuo y la resolución oportuna de cualquier requerimiento.</div>
            <div className="mini-cell">Informes de nómina, incidencias, movimientos de personal y seguridad social entregados en los plazos acordados, con formato claro y trazabilidad completa.</div>
            <div className="mini-cell">Toda la información del cliente —salarial, documental y contractual— se maneja bajo protocolos de acceso restringido y reserva institucional, sin excepciones.</div>
            <div className="mini-head">Cumplimiento normativo continuo</div>
            <div className="mini-head">Gestión ágil de incidencias</div>
            <div className="mini-head">Escalabilidad sin fricciones</div>
            <div className="mini-cell">La TWD monitorea permanentemente los cambios en la legislación laboral dominicana para garantizar que cada operación se mantenga dentro del marco legal vigente.</div>
            <div className="mini-cell">Las solicitudes, ajustes y contingencias del cliente se atienden con tiempos de respuesta definidos, sin demoras que afecten la operación del negocio.</div>
            <div className="mini-cell">El modelo de servicio se adapta al crecimiento o reducción del personal del cliente sin requerir renegociaciones complejas ni cambios estructurales en el esquema acordado.</div>
          </div>
        </section>

        <section className="confidentiality-section" aria-labelledby="confidentiality-title">
          <h2 id="confidentiality-title" className="tech-platform-title">Confidencialidad y manejo de información</h2>
          <div className="tech-platform-divider" />
          <p className="tech-platform-copy">En TrustWork Dominicana, la confidencialidad no es una política complementaria: es la base sobre la que opera toda la firma. El cliente que externaliza su gestión laboral confía en TWD información crítica de su organización. Esa confianza se protege con protocolos estándar de la industria.</p>
          <div className="mini-grid-table three-columns">
            <div className="mini-head">Información salarial</div>
            <div className="mini-head">Datos personales de los colaboradores</div>
            <div className="mini-head">Acuerdos comerciales</div>
            <div className="mini-cell">Las estructuras de compensación, escalas y condiciones individuales se administran externamente, sin exposición dentro de la organización del cliente.</div>
            <div className="mini-cell">La información de los colaboradores se gestiona con privacidad, acceso restringido y protocolos de manejo documental definidos conforme a estándares internacionales.</div>
            <div className="mini-cell">La relación entre la TWD, sus clientes y Directores de Desarrollo de Negocios B2B se rige bajo acuerdos de confidencialidad institucional sin excepción.</div>
          </div>
        </section>



        <section className="client-profile-section" aria-labelledby="client-profile-title">
          <h2 id="client-profile-title" className="tech-platform-title">Perfil de cliente</h2>
          <div className="tech-platform-divider" />
          <div className="client-profile-quote">Un respaldo a su altura.</div>
          <p className="tech-platform-copy">
            TrustWork Dominicana está diseñada para organizaciones que reconocen que la gestión del
            talento humano no es un proceso operativo, sino una ventaja competitiva cuando se gestiona
            correctamente.
          </p>
          <div className="mini-grid-table three-columns">
            <div className="mini-head">Para el Director B2B</div>
            <div className="mini-head">Para el cliente final</div>
            <div className="mini-head">Para el mercado internacional</div>
            <div className="mini-cell">Este material es su herramienta estratégica de presentación. Sus clientes acceden a la firma a través de su recomendación y se vinculan directamente con nuestra estructura operativa bajo su respaldo personal.</div>
            <div className="mini-cell">Cada cliente cuenta con un punto de contacto dedicado y visibilidad total de su operación desde el primer día. La experiencia del servicio es personalizada, no estándar.</div>
            <div className="mini-cell">Operamos en la República Dominicana bajo estándares de gestión alineados con mercados internacionales, facilitando la entrada y escalabilidad de empresas extranjeras en el país.</div>
          </div>
        </section>

        <section className="mission-section simple-surface">
          <div>
            <div className="eyebrow">Misión e intención</div>
            <h2>Ser el socio de confianza que asume la gestión laboral para que el crecimiento no se detenga.</h2>
          </div>
          <p>La firma construye relaciones comerciales duraderas basadas en resultados, transparencia y cumplimiento. Cada cliente debe sentir que su operación está respaldada por un equipo que entiende su contexto y actúa en consecuencia.</p>
        </section>

        <section className="dominicana-section clean-section two-col-section">
          <div>
            <div className="section-heading">
              <div className="eyebrow">Por qué República Dominicana</div>
              <h2>Una plataforma natural para establecer, expandir y estructurar operaciones con alcance regional.</h2>
            </div>
            <div className="reasons-grid clean-grid">
              {reasons.map((reason) => <article className="reason-card soft-card" key={reason.title}><h3>{reason.title}</h3><p>{reason.text}</p></article>)}
            </div>
          </div>
          <div className="image-panel"><img src={rdImage} alt="Vista moderna de República Dominicana y su entorno empresarial" className="section-image" /></div>
        </section>

        <section className="team-section simple-surface two-col-section">
          <div>
            <div className="section-heading left-align">
              <div className="eyebrow">Equipo operativo</div>
              <h2>Especialistas en derecho laboral, nómina, documentación y ejecución institucional.</h2>
            </div>
            <div className="team-grid clean-grid team-minimal">
              <div><Briefcase size={22} /><h3>Operaciones laborales</h3><p>Contratación, expedientes, procesos disciplinarios y desvinculación conforme al Código de Trabajo.</p></div>
              <div><FileSpreadsheet size={22} /><h3>Nómina y cumplimiento</h3><p>Procesamiento de nómina, retenciones, TSS y coordinación administrativa con precisión operativa.</p></div>
              <div><Users size={22} /><h3>Red de Directores B2B</h3><p>Relación comercial cercana, atención personalizada y acceso al servicio con respaldo directo.</p></div>
            </div>
          </div>
          <div className="image-panel"><img src={teamImage} alt="Equipo profesional colaborando en entorno empresarial" className="section-image" /></div>
        </section>

        <section className="sectors-section clean-section" id="sectores">
          <div className="section-heading">
            <div className="eyebrow">Sectores que atendemos</div>
            <h2>Capacidad para acompañar empresas locales, regionales e internacionales en múltiples industrias.</h2>
          </div>
          <ul className="sectors-grid editorial-chips">{sectors.map((sector) => <li className="sector-chip" key={sector}>{sector}</li>)}</ul>
        </section>

        <section className="credibility-strip simple-surface editorial-strip">
          <div><strong>Enfoque institucional</strong><span>Procesos laborales, nómina y cumplimiento ejecutados con rigor y trazabilidad.</span></div>
          <div><strong>Modelo B2B</strong><span>Material pensado para empresas que requieren respaldo, control y continuidad operativa.</span></div>
          <div><strong>República Dominicana</strong><span>Plataforma ideal para operación local con expansión internacional.</span></div>
        </section>

        <section className="cta-section simple-surface" id="contacto">
          <div className="contact-centered">
            <div className="eyebrow">Contacto comercial</div>
            <h2>Favor comunicarse con su Director de Desarrollo de Negocios B2B, de su preferencia.</h2>
            <a className="contact-email-large" href="mailto:alianzas@trustworkdominicana.com">
              <Mail size={28} />
              <span>alianzas@trustworkdominicana.com</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
