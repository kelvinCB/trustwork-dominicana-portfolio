import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BadgeCheck, Briefcase, CheckCircle2, FileSpreadsheet, Landmark, Mail, ShieldCheck, Users } from 'lucide-react';
import './App.css';

const heroImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80';
const rdImage = '/images/republica-dominicana-playa.webp';
const teamImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80';

const translations = {
  es: {
    languageLabel: 'Idioma',
    langEs: 'ES',
    langEn: 'EN',
    navAria: 'Navegación principal',
    nav: { services: 'Servicios', company: 'Empresa', sectors: 'Sectores', contact: 'Contacto' },
    hero: {
      eyebrow: 'Gestión del talento humano con rigor institucional',
      title: 'Outsourcing con',
      titleAccent: 'rostro humano',
      titleSuffix: 'para empresas que necesitan operar con control, cumplimiento y respaldo real.',
      text: 'TrustWork Dominicana acompaña empresas locales e internacionales en contratación, nómina, cumplimiento y gestión integral del talento humano en República Dominicana, con un enfoque ejecutivo, preciso y jurídicamente estructurado.',
      ctaPrimary: 'Solicitar conversación estratégica',
      ctaSecondary: 'Ver sitio oficial',
      imageAlt: 'Zona Colonial de Santo Domingo, República Dominicana',
    },
    differentiators: [
      'Reduce carga administrativa interna y riesgo laboral',
      'Facilita expansión formal en República Dominicana',
      'Permite operar con más control, precisión y trazabilidad',
    ],
    stats: [
      { value: 'RD + Global', label: 'Operación local con alcance internacional' },
      { value: '100%', label: 'Enfoque en cumplimiento laboral y nómina' },
      { value: 'B2B', label: 'Pensado para directores y empresas en expansión' },
    ],
    pillarsHeading: {
      eyebrow: 'Lo que define a la firma',
      title: 'Una operación diseñada para proteger el negocio y liberar a la dirección de la complejidad laboral.',
    },
    pillars: [
      { title: 'Respaldo y protección empresarial', text: 'Asumimos la responsabilidad laboral en nombre del cliente para reducir exposición operativa y legal.', icon: ShieldCheck },
      { title: 'Confianza y confidencialidad', text: 'Reserva total en el manejo de datos sensibles, procesos internos y documentación laboral.', icon: BadgeCheck },
      { title: 'Eficiencia y resultados', text: 'Procesos precisos, reportería clara y cumplimiento puntal para sostener operaciones estables.', icon: FileSpreadsheet },
      { title: 'Cumplimiento legal ético', text: 'Operación dentro del marco legal vigente en República Dominicana, con rigor institucional.', icon: Landmark },
    ],
    servicesHeading: {
      title: 'Portafolio de Servicios',
      text: 'Asumimos la gestión laboral y administrativa del personal de nuestros clientes, permitiéndoles operar con mayor eficiencia, reducir riesgos y concentrarse en su actividad principal.',
    },
    services: [
      { number: '01', title: 'Tercerización Laboral', text: 'Administración integral del personal en nombre del cliente: contratación bajo el Código de Trabajo dominicano, gestión documental completa y procesos disciplinarios conforme a derecho.' },
      { number: '02', title: 'Administración de Nómina', text: 'Cálculo, procesamiento y control de nómina con retenciones legales, contribuciones a la TSS (SFS, AFP, SRL) y reportes administrativos bajo estricta confidencialidad y precisión.' },
      { number: '03', title: 'Reclutamiento y Selección', text: 'Procesos especializados, masivos e internacionales con evaluación por competencias, entrevistas estructuradas y presentación de candidatos alineados al perfil requerido.' },
      { number: '04', title: 'Gestión de Seguridad Social', text: 'Administración de SFS, AFP y SRL conforme a la Ley 87-01 de Seguridad Social, garantizando cumplimiento, afiliación oportuna del personal y cero contingencias con la TSS.' },
      { number: '05', title: 'Nómina Multimoneda', text: 'Pagos en pesos dominicanos, dólares y euros. Ideal para estructuras corporativas regionales e internacionales con personal local bajo contratos en divisas extranjeras.' },
      { number: '06', title: 'Procesos de Desvinculación', text: 'Gestión profesional y conforme al Código Laboral de los procesos de salida: liquidaciones, preaviso, actas de descargo y documentación que proteja al cliente de contingencias futuras.' },
    ],
    profile: {
      eyebrow: 'ENFOQUES POR PERFIL EMPRESARIAL',
      columns: [
        {
          header: 'Empresas grandes',
          title: 'Optimización de costos laborales',
          text: 'La tercerización transforma costos fijos en estructura variable, reduciendo la carga interna sin sacrificar control ni calidad.',
          items: ['Reducción de costos por personal indirecto', 'Eliminación de cargas administrativas internas', 'Estructura laboral flexible y escalable', 'Gestión centralizada de múltiples nóminas'],
        },
        {
          header: 'Empresas pequeñas',
          title: 'Cumplimiento legal y protección jurídica',
          text: 'Formalizamos y protegemos la relación laboral, evitando contingencias legales y demandas que comprometan la operación.',
          items: ['Formalización del personal contratado', 'Cumplimiento de la legislación laboral dominicana', 'Prevención de demandas y contingencias', 'Afiliación y gestión de seguridad social'],
        },
        {
          header: 'Empresas internacionales',
          title: 'Entrada al mercado dominicano',
          text: 'Facilitamos la contratación legal de personal local sin necesidad de constituir estructura propia desde el inicio.',
          items: ['Contratación inmediata bajo marco legal dominicano', 'Nómina en múltiples monedas', 'Sin carga jurídica directa sobre la empresa extranjera', 'Escalabilidad según crecimiento local'],
        },
      ],
    },
    tech: {
      title: 'Plataforma de gestión y tecnología',
      text: 'TrustWork Dominicana estructura sus procesos mediante herramientas digitales y controles operativos que garantizan precisión, trazabilidad y acceso organizado a la información de cada cliente. Cada proceso, desde el alta del personal hasta la liquidación mensual, se gestiona bajo estándares de control, respaldo documental y seguimiento continuo.',
      items: [
        { head: 'Portal del cliente', cell: 'Acceso coordinado a información clave, reportes y estado de la nómina a través de canales definidos con el cliente.' },
        { head: 'Gestión documental', cell: 'Expedientes organizados con control interno, acceso restringido y resguardo institucional de la documentación laboral.' },
        { head: 'Nómina digital', cell: 'Procesamiento estructurado de nómina con validación de retenciones, contribuciones al TSS y generación de comprobantes.' },
        { head: 'Reportería en tiempo real', cell: 'Informes de incidencias, movimientos y cumplimiento normativo entregados en plazos acordados.' },
      ],
    },
    onboarding: {
      title: 'Cómo funciona, Proceso de vinculación',
      steps: [
        { number: '01', title: 'Diagnóstico inicial', text: 'Evaluamos la estructura del cliente: personal activo, contratos vigentes, estado de nómina y situación ante la TSS.' },
        { number: '02', title: 'Propuesta a medida', text: 'Diseñamos el modelo de servicio según el perfil, tamaño, sector y necesidades específicas de la empresa.' },
        { number: '03', title: 'Formalización', text: 'Suscripción del acuerdo de servicio y traspaso ordenado de la gestión del personal hacia TrustWork Dominicana.' },
        { number: '04', title: 'Operación continua', text: 'Gestión integral, reportería periódica y punto de contacto dedicado para el cliente desde el primer día de operación.' },
      ],
    },
    operating: {
      title: 'Modelo de operación',
      text: 'TrustWork Dominicana opera bajo un modelo de servicio completamente externalizado: la firma asume la relación laboral formal con el personal del cliente, ejecuta todos los procesos administrativos y responde ante las autoridades laborales y de seguridad social en nombre propio. El cliente mantiene el control operativo y directivo sobre su equipo sin asumir la carga jurídica.',
      items: [
        { head: 'Clientes que atendemos', list: ['Empresas locales establecidas', 'Empresas internacionales con operación en RD', 'Startups en proceso de formalización', 'Empresas en fase de expansión o reestructuración', 'Operaciones temporales o por proyecto', 'Grupos corporativos con múltiples nóminas'] },
        { head: 'Servicios incluidos en el modelo', list: ['Contratación y administración del personal', 'Gestión documental laboral completa', 'Control de procesos disciplinarios', 'Procesos de bancarización del personal', 'Cumplimiento normativo continuo (Código Laboral y TSS)', 'Gestión de incidencias y reportería'] },
      ],
    },
    useCases: {
      title: 'Casos de uso ilustrativos',
      context: 'Contexto',
      solution: 'Solución TWD',
      results: 'Resultados obtenidos',
      cards: [
        {
          head: 'Empresa grande, Manufactura',
          context: 'Empresa manufacturera con 200+ colaboradores en zona franca: altos costos de administración interna, incidencias sin control y riesgos legales acumulados por inconsistencias en contratos y seguridad social.',
          solution: 'Transferencia de la gestión a TWD: reducción de estructura administrativa interna, resolución de contingencias laborales pendientes y reportería centralizada para su casa matriz.',
          results: ['Reducción de hasta un 35% en costos de administración de personal', 'Contingencias laborales resueltas: 100%', 'Tiempo de implementación: 30 días'],
        },
        {
          head: 'Empresa pequeña, Servicios',
          context: 'Empresa de servicios profesionales con 15 empleados operando sin contratos formales, sin afiliación a seguridad social y con riesgo latente de demandas laborales que podían comprometer la continuidad del negocio.',
          solution: 'Formalización de toda la plantilla, gestión de afiliación al SFS, AFP y SRL, y estructura de nómina que protege legalmente tanto a la empresa como a sus colaboradores.',
          results: ['Personal formalizado: 15/15', 'Riesgo de demandas: eliminado', 'Tiempo de implementación: 21 días'],
        },
        {
          head: 'Empresa internacional, Tecnología',
          context: 'Firma tecnológica con sede en Europa que necesitaba contratar un equipo local en RD sin constituir entidad legal propia ni asumir directamente la carga laboral dominicana.',
          solution: 'Contratación de 8 personas bajo marco legal dominicano, con nómina en euros y gestión documental completa, sin necesidad de establecer subsidiaria desde el primer día.',
          results: ['Primer contrato operativo: 10 días', 'Nómina en euros desde el día 1', 'Estructura legal propia requerida: No'],
        },
      ],
    },
    comparison: {
      title: 'TWD vs. Departamento de RR.HH. Interno',
      criterion: 'Criterio',
      twd: 'TrustWork Dominicana ✓',
      internal: 'RR.HH. interno ✗',
      rows: [
        ['Responsabilidad legal laboral', 'La TWD asume la relación laboral y sus obligaciones', 'La empresa sigue siendo el empleador; el riesgo no se transfiere'],
        ['Exposición a demandas laborales', 'Gestionadas y absorbidas por la TWD', 'Recaen sobre la empresa y sus representantes legales'],
        ['Carga administrativa', 'Eliminada por completo del lado del cliente', 'Persiste: contratos, expedientes, incidencias, reportes'],
        ['Cumplimiento normativo', 'Especialización permanente y actualización continua', 'Depende del equipo interno; errores generan contingencias'],
        ['Costo operativo', 'Variable y controlado según volumen', 'Fijo: salarios, prestaciones, infraestructura, rotación'],
        ['Confidencialidad salarial', 'Gestión externa, sin exposición interna', 'Estructuras salariales visibles dentro de la organización'],
        ['Velocidad de implementación', 'Operativo de inmediato, sin curva de aprendizaje', 'Requiere contratación, formación y tiempo de adaptación'],
        ['Escalabilidad', 'Se ajusta al volumen sin cambios estructurales', 'Requiere contratar o reducir personal de RR.HH. según demanda'],
      ],
    },
    guarantees: {
      title: 'Garantías y compromisos de servicio',
      items: [
        { head: 'Punto de contacto dedicado', cell: 'Cada cliente cuenta con un oficial de cuenta asignado como interlocutor principal, responsable del seguimiento continuo y la resolución oportuna de cualquier requerimiento.' },
        { head: 'Reportería periódica y transparente', cell: 'Informes de nómina, incidencias, movimientos de personal y seguridad social entregados en los plazos acordados, con formato claro y trazabilidad completa.' },
        { head: 'Confidencialidad garantizada', cell: 'Toda la información del cliente, salarial, documental y contractual, se maneja bajo protocolos de acceso restringido y reserva institucional, sin excepciones.' },
        { head: 'Cumplimiento normativo continuo', cell: 'La TWD monitorea permanentemente los cambios en la legislación laboral dominicana para garantizar que cada operación se mantenga dentro del marco legal vigente.' },
        { head: 'Gestión ágil de incidencias', cell: 'Las solicitudes, ajustes y contingencias del cliente se atienden con tiempos de respuesta definidos, sin demoras que afecten la operación del negocio.' },
        { head: 'Escalabilidad sin fricciones', cell: 'El modelo de servicio se adapta al crecimiento o reducción del personal del cliente sin requerir renegociaciones complejas ni cambios estructurales en el esquema acordado.' },
      ],
    },
    confidentiality: {
      title: 'Confidencialidad y manejo de información',
      text: 'En TrustWork Dominicana, la confidencialidad no es una política complementaria: es la base sobre la que opera toda la firma. El cliente que externaliza su gestión laboral confía en TWD información crítica de su organización. Esa confianza se protege con protocolos estándar de la industria.',
      items: [
        { head: 'Información salarial', cell: 'Las estructuras de compensación, escalas y condiciones individuales se administran externamente, sin exposición dentro de la organización del cliente.' },
        { head: 'Datos personales de los colaboradores', cell: 'La información de los colaboradores se gestiona con privacidad, acceso restringido y protocolos de manejo documental definidos conforme a estándares internacionales.' },
        { head: 'Acuerdos comerciales', cell: 'La relación entre la TWD, sus clientes y Directores de Desarrollo de Negocios B2B se rige bajo acuerdos de confidencialidad institucional sin excepción.' },
      ],
    },
    clientProfile: {
      title: 'Perfil de cliente',
      quote: 'Un respaldo a su altura.',
      text: 'TrustWork Dominicana está diseñada para organizaciones que reconocen que la gestión del talento humano no es un proceso operativo, sino una ventaja competitiva cuando se gestiona correctamente.',
      items: [
        { head: 'Para el Director B2B', cell: 'Este material es su herramienta estratégica de presentación. Sus clientes acceden a la firma a través de su recomendación y se vinculan directamente con nuestra estructura operativa bajo su respaldo personal.' },
        { head: 'Para el cliente final', cell: 'Cada cliente cuenta con un punto de contacto dedicado y visibilidad total de su operación desde el primer día. La experiencia del servicio es personalizada, no estándar.' },
        { head: 'Para el mercado internacional', cell: 'Operamos en la República Dominicana bajo estándares de gestión alineados con mercados internacionales, facilitando la entrada y escalabilidad de empresas extranjeras en el país.' },
      ],
    },
    mission: {
      eyebrow: 'Misión e intención',
      title: 'Ser el socio de confianza que asume la gestión laboral para que el crecimiento no se detenga.',
    },
    reasons: {
      eyebrow: 'República Dominicana como plataforma',
      title: 'Un entorno favorable para operar, contratar y crecer con respaldo local.',
      imageAlt: 'Vista moderna de República Dominicana y su entorno empresarial',
      items: [
        { title: 'Posición geográfica estratégica', text: 'República Dominicana conecta naturalmente con América del Norte, América Latina y Europa, con zona horaria favorable para ambos hemisferios.' },
        { title: 'Marco legal estructurado', text: 'El Código Laboral dominicano permite operar con claridad regulatoria, siempre que exista ejecución correcta y cumplimiento riguroso.' },
        { title: 'Talento humano disponible', text: 'Existe una fuerza laboral amplia, joven y adaptable para manufactura, servicios, tecnología, turismo y operaciones especializadas.' },
        { title: 'Infraestructura empresarial activa', text: 'Zonas francas, parques industriales, sector turístico consolidado y ecosistema financiero robusto favorecen la expansión empresarial.' },
      ],
    },
    team: {
      eyebrow: 'Equipo operativo',
      title: 'Especialistas en derecho laboral, nómina, documentación y ejecución institucional.',
      imageAlt: 'Equipo profesional colaborando en entorno empresarial',
      items: [
        { title: 'Operaciones laborales', text: 'Contratación, expedientes, procesos disciplinarios y desvinculación conforme al Código de Trabajo.', icon: Briefcase },
        { title: 'Nómina y cumplimiento', text: 'Procesamiento de nómina, retenciones, TSS y coordinación administrativa con precisión operativa.', icon: FileSpreadsheet },
        { title: 'Red de Directores B2B', text: 'Relación comercial cercana, atención personalizada y acceso al servicio con respaldo directo.', icon: Users },
      ],
    },
    sectorsSection: {
      eyebrow: 'Sectores que atendemos',
      title: 'Capacidad para acompañar empresas locales, regionales e internacionales en múltiples industrias.',
      items: ['Manufactura y Zonas Francas', 'Hostelería y Turismo', 'Tecnología y Servicios Digitales', 'Retail y Comercio', 'Construcción e Infraestructura', 'Salud y Farmacéutico', 'Finanzas y Seguros', 'Logística y Transporte', 'Educación y Consultoría', 'Agroindustria y Producción', 'Energía y Minería', 'Telecomunicaciones', 'Servicios Administrativos y BPO', 'Restaurantes y Entretenimiento', 'Mantenimiento y Operaciones', 'Startups y Empresas en Expansión'],
    },
    credibility: [
      { title: 'Enfoque institucional', text: 'Procesos laborales, nómina y cumplimiento ejecutados con rigor y trazabilidad.' },
      { title: 'Modelo B2B', text: 'Material pensado para empresas que requieren respaldo, control y continuidad operativa.' },
      { title: 'República Dominicana', text: 'Plataforma ideal para operación local con expansión internacional.' },
    ],
    contact: {
      eyebrow: 'Contacto comercial',
      title: 'Favor comunicarse con su Director de Desarrollo de Negocios B2B, de su preferencia.',
    },
    meta: {
      htmlLang: 'es-DO',
      title: 'TrustWork Dominicana | Outsourcing laboral y gestión de nómina en República Dominicana',
      description: 'TrustWork Dominicana ofrece outsourcing laboral, administración de nómina y gestión integral del talento humano para empresas locales e internacionales que operan en República Dominicana.',
      ogTitle: 'TrustWork Dominicana | Outsourcing laboral y gestión de nómina',
      ogDescription: 'Firma especializada en outsourcing laboral, nómina y cumplimiento para empresas que necesitan operar con rigor institucional en República Dominicana.',
    },
  },
  en: {
    languageLabel: 'Language',
    langEs: 'ES',
    langEn: 'EN',
    navAria: 'Primary navigation',
    nav: { services: 'Services', company: 'Company', sectors: 'Sectors', contact: 'Contact' },
    hero: {
      eyebrow: 'Human capital management with institutional rigor',
      title: 'Outsourcing with a',
      titleAccent: 'human face',
      titleSuffix: 'for companies that need to operate with control, compliance, and real backing.',
      text: 'TrustWork Dominicana supports local and international companies with hiring, payroll, compliance, and end-to-end human capital management in the Dominican Republic through an executive, precise, and legally structured approach.',
      ctaPrimary: 'Request a strategic conversation',
      ctaSecondary: 'View official site',
      imageAlt: 'Colonial Zone of Santo Domingo, Dominican Republic',
    },
    differentiators: [
      'Reduces internal administrative burden and labor risk',
      'Enables formal expansion in the Dominican Republic',
      'Helps operate with greater control, precision, and traceability',
    ],
    stats: [
      { value: 'DR + Global', label: 'Local operation with international reach' },
      { value: '100%', label: 'Focused on labor compliance and payroll' },
      { value: 'B2B', label: 'Built for directors and scaling companies' },
    ],
    pillarsHeading: {
      eyebrow: 'What defines the firm',
      title: 'An operation designed to protect the business and free leadership from labor complexity.',
    },
    pillars: [
      { title: 'Business protection and support', text: 'We assume labor responsibility on the client’s behalf to reduce operational and legal exposure.', icon: ShieldCheck },
      { title: 'Trust and confidentiality', text: 'Total discretion in handling sensitive data, internal processes, and labor documentation.', icon: BadgeCheck },
      { title: 'Efficiency and results', text: 'Precise processes, clear reporting, and timely compliance to sustain stable operations.', icon: FileSpreadsheet },
      { title: 'Ethical legal compliance', text: 'Operations within the current legal framework of the Dominican Republic, with institutional rigor.', icon: Landmark },
    ],
    servicesHeading: {
      title: 'Service Portfolio',
      text: 'We take over the labor and administrative management of our clients’ workforce, allowing them to operate more efficiently, reduce risk, and stay focused on their core business.',
    },
    services: [
      { number: '01', title: 'Labor Outsourcing', text: 'Comprehensive workforce administration on the client’s behalf: hiring under the Dominican Labor Code, complete document management, and legally compliant disciplinary processes.' },
      { number: '02', title: 'Payroll Administration', text: 'Payroll calculation, processing, and control with legal withholdings, TSS contributions (SFS, AFP, SRL), and administrative reporting under strict confidentiality and precision.' },
      { number: '03', title: 'Recruitment and Selection', text: 'Specialized, high-volume, and international recruitment processes with competency-based assessment, structured interviews, and candidate shortlists aligned with the required profile.' },
      { number: '04', title: 'Social Security Management', text: 'Administration of SFS, AFP, and SRL under Law 87-01, ensuring compliance, timely employee enrollment, and zero contingencies with the TSS.' },
      { number: '05', title: 'Multi-Currency Payroll', text: 'Payments in Dominican pesos, US dollars, and euros. Ideal for regional and international corporate structures with local staff contracted in foreign currencies.' },
      { number: '06', title: 'Employee Offboarding Processes', text: 'Professional, labor-code-compliant handling of separation processes: settlements, notice, release records, and documentation that protects the client from future contingencies.' },
    ],
    profile: {
      eyebrow: 'APPROACHES BY BUSINESS PROFILE',
      columns: [
        {
          header: 'Large companies',
          title: 'Labor cost optimization',
          text: 'Outsourcing turns fixed costs into a variable structure, reducing internal burden without sacrificing control or quality.',
          items: ['Reduced indirect personnel costs', 'Removal of internal administrative burden', 'Flexible and scalable labor structure', 'Centralized management of multiple payrolls'],
        },
        {
          header: 'Small companies',
          title: 'Legal compliance and protection',
          text: 'We formalize and protect the labor relationship, preventing legal contingencies and claims that could compromise operations.',
          items: ['Formalization of contracted staff', 'Compliance with Dominican labor legislation', 'Prevention of claims and contingencies', 'Enrollment and management of social security'],
        },
        {
          header: 'International companies',
          title: 'Entry into the Dominican market',
          text: 'We enable legal hiring of local staff without requiring the company to create its own structure from day one.',
          items: ['Immediate hiring under Dominican legal framework', 'Multi-currency payroll', 'No direct legal burden on the foreign company', 'Scalability according to local growth'],
        },
      ],
    },
    tech: {
      title: 'Management and technology platform',
      text: 'TrustWork Dominicana structures its processes through digital tools and operating controls that guarantee precision, traceability, and organized access to each client’s information. Every process, from employee onboarding to monthly payroll close, is managed under control standards, document backup, and continuous follow-up.',
      items: [
        { head: 'Client portal', cell: 'Coordinated access to key information, reports, and payroll status through channels defined with the client.' },
        { head: 'Document management', cell: 'Organized employee records with internal control, restricted access, and institutional protection of labor documentation.' },
        { head: 'Digital payroll', cell: 'Structured payroll processing with validation of withholdings, TSS contributions, and payslip generation.' },
        { head: 'Real-time reporting', cell: 'Incident, movement, and compliance reports delivered within agreed timelines.' },
      ],
    },
    onboarding: {
      title: 'How it works, onboarding process',
      steps: [
        { number: '01', title: 'Initial assessment', text: 'We evaluate the client’s structure: active staff, current contracts, payroll status, and TSS standing.' },
        { number: '02', title: 'Tailored proposal', text: 'We design the service model according to the company’s profile, size, sector, and specific needs.' },
        { number: '03', title: 'Formalization', text: 'Service agreement execution and orderly transfer of workforce management to TrustWork Dominicana.' },
        { number: '04', title: 'Ongoing operations', text: 'Full management, periodic reporting, and a dedicated point of contact for the client from day one.' },
      ],
    },
    operating: {
      title: 'Operating model',
      text: 'TrustWork Dominicana operates under a fully outsourced model: the firm assumes the formal labor relationship with the client’s workforce, executes all administrative processes, and responds to labor and social security authorities in its own name. The client retains operational and managerial control over the team without taking on the legal burden.',
      items: [
        { head: 'Clients we serve', list: ['Established local companies', 'International companies operating in the DR', 'Startups in the formalization stage', 'Companies expanding or restructuring', 'Temporary or project-based operations', 'Corporate groups with multiple payrolls'] },
        { head: 'Services included in the model', list: ['Hiring and personnel administration', 'Complete labor document management', 'Control of disciplinary processes', 'Employee banking setup processes', 'Ongoing regulatory compliance (Labor Code and TSS)', 'Incident management and reporting'] },
      ],
    },
    useCases: {
      title: 'Illustrative use cases',
      context: 'Context',
      solution: 'TWD solution',
      results: 'Results achieved',
      cards: [
        {
          head: 'Large company, Manufacturing',
          context: 'Manufacturing company with 200+ employees in a free-trade zone: high internal administration costs, uncontrolled incidents, and growing legal risk due to contract and social security inconsistencies.',
          solution: 'Transfer of management to TWD: reduced internal administrative structure, resolution of pending labor contingencies, and centralized reporting for headquarters.',
          results: ['Up to 35% reduction in personnel administration costs', 'Labor contingencies resolved: 100%', 'Implementation time: 30 days'],
        },
        {
          head: 'Small company, Services',
          context: 'Professional services company with 15 employees operating without formal contracts, without social security enrollment, and with latent labor-claim risk that could threaten business continuity.',
          solution: 'Formalization of the entire workforce, enrollment in SFS, AFP, and SRL, and a payroll structure that legally protects both the company and its employees.',
          results: ['Staff formalized: 15/15', 'Claim risk: eliminated', 'Implementation time: 21 days'],
        },
        {
          head: 'International company, Technology',
          context: 'European tech company that needed to hire a local team in the DR without setting up its own legal entity or directly assuming Dominican labor obligations.',
          solution: 'Hiring of 8 people under Dominican law, with payroll in euros and complete document management, without needing to establish a subsidiary from day one.',
          results: ['First active contract: 10 days', 'Payroll in euros from day 1', 'Own legal structure required: No'],
        },
      ],
    },
    comparison: {
      title: 'TWD vs. Internal HR Department',
      criterion: 'Criterion',
      twd: 'TrustWork Dominicana ✓',
      internal: 'Internal HR ✗',
      rows: [
        ['Labor legal responsibility', 'TWD assumes the labor relationship and its obligations', 'The company remains the employer; risk is not transferred'],
        ['Exposure to labor claims', 'Managed and absorbed by TWD', 'Falls on the company and its legal representatives'],
        ['Administrative burden', 'Fully removed from the client side', 'Remains: contracts, files, incidents, reports'],
        ['Regulatory compliance', 'Permanent specialization and continuous updates', 'Depends on the internal team; mistakes create contingencies'],
        ['Operating cost', 'Variable and controlled according to volume', 'Fixed: salaries, benefits, infrastructure, turnover'],
        ['Salary confidentiality', 'External management, no internal exposure', 'Salary structures visible inside the organization'],
        ['Implementation speed', 'Operational immediately, no learning curve', 'Requires hiring, training, and ramp-up time'],
        ['Scalability', 'Adapts to volume without structural changes', 'Requires hiring or reducing HR staff according to demand'],
      ],
    },
    guarantees: {
      title: 'Service guarantees and commitments',
      items: [
        { head: 'Dedicated point of contact', cell: 'Each client has an assigned account officer as the main point of contact, responsible for ongoing follow-up and timely resolution of any requirement.' },
        { head: 'Transparent periodic reporting', cell: 'Payroll, incident, workforce movement, and social security reports delivered within agreed timelines, in a clear format with full traceability.' },
        { head: 'Guaranteed confidentiality', cell: 'All client information, salary, documentation, and contractual data, is handled under restricted-access protocols and institutional confidentiality, without exception.' },
        { head: 'Ongoing regulatory compliance', cell: 'TWD constantly monitors changes in Dominican labor legislation to ensure each operation stays within the current legal framework.' },
        { head: 'Agile incident management', cell: 'Client requests, adjustments, and contingencies are handled with defined response times and no delays that affect business operations.' },
        { head: 'Frictionless scalability', cell: 'The service model adapts to workforce growth or reduction without requiring complex renegotiations or structural changes to the agreed scheme.' },
      ],
    },
    confidentiality: {
      title: 'Confidentiality and information handling',
      text: 'At TrustWork Dominicana, confidentiality is not a supporting policy, it is the foundation of the entire firm. Clients who outsource labor management entrust TWD with critical organizational information. That trust is protected through industry-standard protocols.',
      items: [
        { head: 'Salary information', cell: 'Compensation structures, scales, and individual terms are managed externally, without exposure inside the client organization.' },
        { head: 'Employee personal data', cell: 'Employee information is handled with privacy, restricted access, and documented procedures aligned with international standards.' },
        { head: 'Commercial agreements', cell: 'The relationship between TWD, its clients, and B2B Business Development Directors is governed by institutional confidentiality agreements without exception.' },
      ],
    },
    clientProfile: {
      title: 'Client profile',
      quote: 'Support that matches your level.',
      text: 'TrustWork Dominicana is built for organizations that understand human capital management is not merely an operational process, but a competitive advantage when managed correctly.',
      items: [
        { head: 'For the B2B Director', cell: 'This material is your strategic presentation tool. Clients access the firm through your recommendation and engage directly with our operating structure under your personal endorsement.' },
        { head: 'For the end client', cell: 'Each client gets a dedicated point of contact and full operational visibility from day one. The service experience is personalized, not generic.' },
        { head: 'For the international market', cell: 'We operate in the Dominican Republic under management standards aligned with international markets, facilitating the entry and scalability of foreign companies in the country.' },
      ],
    },
    mission: {
      eyebrow: 'Mission and intent',
      title: 'To be the trusted partner that assumes labor management so growth never stops.',
    },
    reasons: {
      eyebrow: 'Dominican Republic as a platform',
      title: 'A favorable environment to operate, hire, and grow with local backing.',
      imageAlt: 'Modern view of the Dominican Republic and its business environment',
      items: [
        { title: 'Strategic geographic position', text: 'The Dominican Republic naturally connects North America, Latin America, and Europe, with a time zone favorable to both hemispheres.' },
        { title: 'Structured legal framework', text: 'The Dominican Labor Code allows companies to operate with regulatory clarity, provided execution is correct and compliance is rigorous.' },
        { title: 'Available workforce', text: 'There is a broad, young, and adaptable labor force for manufacturing, services, technology, tourism, and specialized operations.' },
        { title: 'Active business infrastructure', text: 'Free-trade zones, industrial parks, a consolidated tourism sector, and a strong financial ecosystem support business expansion.' },
      ],
    },
    team: {
      eyebrow: 'Operations team',
      title: 'Specialists in labor law, payroll, documentation, and institutional execution.',
      imageAlt: 'Professional team collaborating in a business environment',
      items: [
        { title: 'Labor operations', text: 'Hiring, employee files, disciplinary processes, and offboarding in accordance with the Labor Code.', icon: Briefcase },
        { title: 'Payroll and compliance', text: 'Payroll processing, withholdings, TSS, and administrative coordination with operational precision.', icon: FileSpreadsheet },
        { title: 'B2B Director network', text: 'Close commercial relationships, personalized service, and access backed by direct support.', icon: Users },
      ],
    },
    sectorsSection: {
      eyebrow: 'Sectors we serve',
      title: 'Capacity to support local, regional, and international companies across multiple industries.',
      items: ['Manufacturing and Free-Trade Zones', 'Hospitality and Tourism', 'Technology and Digital Services', 'Retail and Commerce', 'Construction and Infrastructure', 'Healthcare and Pharmaceuticals', 'Finance and Insurance', 'Logistics and Transportation', 'Education and Consulting', 'Agro-industry and Production', 'Energy and Mining', 'Telecommunications', 'Administrative Services and BPO', 'Restaurants and Entertainment', 'Maintenance and Operations', 'Startups and Expanding Companies'],
    },
    credibility: [
      { title: 'Institutional focus', text: 'Labor processes, payroll, and compliance executed with rigor and traceability.' },
      { title: 'B2B model', text: 'Material built for companies that require backing, control, and operational continuity.' },
      { title: 'Dominican Republic', text: 'An ideal platform for local operations with international expansion.' },
    ],
    contact: {
      eyebrow: 'Business contact',
      title: 'Please contact the B2B Business Development Director of your preference.',
    },
    meta: {
      htmlLang: 'en',
      title: 'TrustWork Dominicana | Labor outsourcing and payroll management in the Dominican Republic',
      description: 'TrustWork Dominicana provides labor outsourcing, payroll administration, and end-to-end human capital management for local and international companies operating in the Dominican Republic.',
      ogTitle: 'TrustWork Dominicana | Labor outsourcing and payroll management',
      ogDescription: 'A specialized firm in labor outsourcing, payroll, and compliance for companies that need to operate with institutional rigor in the Dominican Republic.',
    },
  },
};

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('twd-language') || 'es');
  const t = useMemo(() => translations[language] || translations.es, [language]);

  useEffect(() => {
    localStorage.setItem('twd-language', language);
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;

    const setMeta = (selector, value, attr = 'content') => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.ogTitle);
    setMeta('meta[property="og:description"]', t.meta.ogDescription);
  }, [language, t]);

  return (
    <div className="app-shell">
      <div className="noise" />
      <header className="site-header">
        <div className="brand-mark brand-mark-textual" aria-label="TrustWork Dominicana">
          <span className="brand-twd">TWD</span>
          <span className="brand-wordmark">Trustwork Dominicana</span>
        </div>
        <div className="header-controls">
          <nav className="site-nav" aria-label={t.navAria}>
            <a href="#servicios">{t.nav.services}</a>
            <a href="#empresa">{t.nav.company}</a>
            <a href="#sectores">{t.nav.sectors}</a>
            <a href="#contacto">{t.nav.contact}</a>
          </nav>
          <div className="language-toggle" aria-label={t.languageLabel}>
            <button type="button" className={language === 'es' ? 'lang-button active' : 'lang-button'} onClick={() => setLanguage('es')}>{t.langEs}</button>
            <button type="button" className={language === 'en' ? 'lang-button active' : 'lang-button'} onClick={() => setLanguage('en')}>{t.langEn}</button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero-section editorial-hero with-image">
          <div className="hero-copy">
            <div className="eyebrow">{t.hero.eyebrow}</div>
            <h1>{t.hero.title} <span>{t.hero.titleAccent}</span> {t.hero.titleSuffix}</h1>
            <p className="hero-text">{t.hero.text}</p>
            <ul className="hero-benefits">
              {t.differentiators.map((item) => <li key={item}><CheckCircle2 size={18} /><span>{item}</span></li>)}
            </ul>
            <div className="hero-actions">
              <a className="primary-button" href="#contacto">{t.hero.ctaPrimary} <ArrowRight size={18} /></a>
              <a className="secondary-button" href="https://trustworkdominicana.com/" target="_blank" rel="noreferrer">{t.hero.ctaSecondary}</a>
            </div>
          </div>
          <div className="hero-image-wrap"><img src={heroImage} alt={t.hero.imageAlt} className="section-image hero-image" /></div>
        </section>

        <section className="stats-section clean-stats" aria-label="Indicadores principales">
          {t.stats.map((stat) => <div className="stat-card bare-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </section>

        <section className="pillars-section clean-section" id="empresa">
          <div className="section-heading">
            <div className="eyebrow">{t.pillarsHeading.eyebrow}</div>
            <h2>{t.pillarsHeading.title}</h2>
          </div>
          <div className="pillars-grid clean-grid">
            {t.pillars.map((pillar) => {
              const Icon = pillar.icon;
              return <article className="pillar-card soft-card" key={pillar.title}><Icon size={24} /><h3>{pillar.title}</h3><p>{pillar.text}</p></article>;
            })}
          </div>
        </section>

        <section className="services-section services-table-section" id="servicios">
          <div className="services-table-header">
            <h2>{t.servicesHeading.title}</h2>
            <div className="services-table-divider" />
            <p>{t.servicesHeading.text}</p>
          </div>
          <div className="services-table-grid">
            {t.services.map((service) => (
              <article className="service-table-card" key={service.number}>
                <div className="service-table-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-focus-section" aria-labelledby="profile-focus-title">
          <div className="profile-focus-eyebrow">{t.profile.eyebrow}</div>
          <div className="profile-focus-table">
            {t.profile.columns.map((column) => (
              <div className="profile-column" key={column.header}>
                <div className="profile-column-header">{column.header}</div>
                <div className="profile-column-body">
                  <h3>{column.title}</h3>
                  <p>{column.text}</p>
                  <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tech-platform-section" aria-labelledby="tech-platform-title">
          <h2 id="tech-platform-title" className="tech-platform-title">{t.tech.title}</h2>
          <div className="tech-platform-divider" />
          <p className="tech-platform-copy">{t.tech.text}</p>
          <div className="tech-platform-table">
            {t.tech.items.map((item) => (
              <div className="tech-platform-item" key={item.head}>
                <div className="tech-platform-head">{item.head}</div>
                <div className="tech-platform-cell">{item.cell}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="onboarding-process-section" aria-labelledby="onboarding-process-title">
          <h2 id="onboarding-process-title" className="tech-platform-title">{t.onboarding.title}</h2>
          <div className="tech-platform-divider" />
          <div className="onboarding-grid">
            {t.onboarding.steps.map((step, index) => (
              <div className={index === 0 || index === 3 ? 'onboarding-card accent-card' : 'onboarding-card soft-process-card'} key={step.number}>
                <div className="onboarding-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="operating-model-section" aria-labelledby="operating-model-title">
          <h2 id="operating-model-title" className="tech-platform-title">{t.operating.title}</h2>
          <div className="tech-platform-divider" />
          <p className="tech-platform-copy">{t.operating.text}</p>
          <div className="operating-model-table">
            {t.operating.items.map((item) => (
              <div className="operating-model-item" key={item.head}>
                <div className="operating-model-head">{item.head}</div>
                <div className="operating-model-cell"><ul>{item.list.map((entry) => <li key={entry}>{entry}</li>)}</ul></div>
              </div>
            ))}
          </div>
        </section>

        <section className="use-cases-section" aria-labelledby="use-cases-title">
          <h2 id="use-cases-title" className="tech-platform-title">{t.useCases.title}</h2>
          <div className="tech-platform-divider" />
          <div className="use-cases-grid">
            {t.useCases.cards.map((card) => (
              <div className="use-case-card" key={card.head}>
                <div className="use-case-head">{card.head}</div>
                <div className="use-case-body">
                  <h4>{t.useCases.context}</h4>
                  <p>{card.context}</p>
                  <h4>{t.useCases.solution}</h4>
                  <p>{card.solution}</p>
                </div>
                <div className="use-case-results">
                  <h4>{t.useCases.results}</h4>
                  <ul>{card.results.map((result) => <li key={result}>{result}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="comparison-section" aria-labelledby="comparison-title">
          <h2 id="comparison-title" className="tech-platform-title">{t.comparison.title}</h2>
          <div className="tech-platform-divider" />
          <div className="comparison-table">
            <div className="comparison-head head-criterion">{t.comparison.criterion}</div>
            <div className="comparison-head head-twd">{t.comparison.twd}</div>
            <div className="comparison-head head-internal">{t.comparison.internal}</div>
            {t.comparison.rows.map(([criterion, twd, internal]) => (
              <>
                <div className="comparison-cell criterion-cell" key={`${criterion}-c`}>{criterion}</div>
                <div className="comparison-cell" key={`${criterion}-t`}>{twd}</div>
                <div className="comparison-cell" key={`${criterion}-i`}>{internal}</div>
              </>
            ))}
          </div>
          <div className="comparison-mobile-list">
            {t.comparison.rows.map(([criterion, twd, internal]) => (
              <article className="comparison-mobile-card" key={criterion}>
                <div className="comparison-mobile-criterion">{criterion}</div>
                <div className="comparison-mobile-side comparison-mobile-twd"><strong>{t.comparison.twd}</strong><span>{twd}</span></div>
                <div className="comparison-mobile-side comparison-mobile-internal"><strong>{t.comparison.internal}</strong><span>{internal}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="service-guarantees-section" aria-labelledby="service-guarantees-title">
          <h2 id="service-guarantees-title" className="tech-platform-title">{t.guarantees.title}</h2>
          <div className="tech-platform-divider" />
          <div className="mini-grid-table three-columns">
            {t.guarantees.items.map((item) => (
              <div className="mini-item" key={item.head}>
                <div className="mini-head">{item.head}</div>
                <div className="mini-cell">{item.cell}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="confidentiality-section" aria-labelledby="confidentiality-title">
          <h2 id="confidentiality-title" className="tech-platform-title">{t.confidentiality.title}</h2>
          <div className="tech-platform-divider" />
          <p className="tech-platform-copy">{t.confidentiality.text}</p>
          <div className="mini-grid-table three-columns">
            {t.confidentiality.items.map((item) => (
              <div className="mini-item" key={item.head}>
                <div className="mini-head">{item.head}</div>
                <div className="mini-cell">{item.cell}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="client-profile-section" aria-labelledby="client-profile-title">
          <h2 id="client-profile-title" className="tech-platform-title">{t.clientProfile.title}</h2>
          <div className="tech-platform-divider" />
          <div className="client-profile-quote">{t.clientProfile.quote}</div>
          <p className="tech-platform-copy">{t.clientProfile.text}</p>
          <div className="mini-grid-table three-columns">
            {t.clientProfile.items.map((item) => (
              <div className="mini-item" key={item.head}>
                <div className="mini-head">{item.head}</div>
                <div className="mini-cell">{item.cell}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mission-section simple-surface">
          <div>
            <div className="eyebrow">{t.mission.eyebrow}</div>
            <h2>{t.mission.title}</h2>
          </div>
        </section>

        <section className="two-col-section clean-section">
          <div>
            <div className="section-heading left-align">
              <div className="eyebrow">{t.reasons.eyebrow}</div>
              <h2>{t.reasons.title}</h2>
            </div>
            <div className="reasons-grid">
              {t.reasons.items.map((reason) => <article className="reason-card soft-card" key={reason.title}><h3>{reason.title}</h3><p>{reason.text}</p></article>)}
            </div>
          </div>
          <div className="image-panel"><img src={rdImage} alt={t.reasons.imageAlt} className="section-image" /></div>
        </section>

        <section className="team-section simple-surface two-col-section">
          <div>
            <div className="section-heading left-align">
              <div className="eyebrow">{t.team.eyebrow}</div>
              <h2>{t.team.title}</h2>
            </div>
            <div className="team-grid clean-grid team-minimal">
              {t.team.items.map((item) => {
                const Icon = item.icon;
                return <div key={item.title}><Icon size={22} /><h3>{item.title}</h3><p>{item.text}</p></div>;
              })}
            </div>
          </div>
          <div className="image-panel"><img src={teamImage} alt={t.team.imageAlt} className="section-image" /></div>
        </section>

        <section className="sectors-section clean-section" id="sectores">
          <div className="section-heading">
            <div className="eyebrow">{t.sectorsSection.eyebrow}</div>
            <h2>{t.sectorsSection.title}</h2>
          </div>
          <ul className="sectors-grid editorial-chips">{t.sectorsSection.items.map((sector) => <li className="sector-chip" key={sector}>{sector}</li>)}</ul>
        </section>

        <section className="credibility-strip simple-surface editorial-strip">
          {t.credibility.map((item) => <div key={item.title}><strong>{item.title}</strong><span>{item.text}</span></div>)}
        </section>

        <section className="cta-section simple-surface" id="contacto">
          <div className="contact-centered">
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <h2>{t.contact.title}</h2>
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
