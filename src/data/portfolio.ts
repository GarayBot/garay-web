export interface Project {
  slug: string;
  folder: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  images: string[];
  imageCount: number;
}

export const PROJECTS: Project[] = [
  {
    slug: "adminventa",
    folder: "Adminventa",
    title: "Adminventa",
    description: `Adminventa es el portal de referencia para administradores de fincas en España. Se trata de una plataforma web desarrollada en WordPress que conecta a administradores de fincas con empresas proveedoras de servicios del sector inmobiliario: eficiencia energética, seguros, impermeabilizaciones, vigilancia, aislamientos, mantenimiento de jardines, cubiertas y más de 30 categorías adicionales. El objetivo es crear un ecosistema digital donde los profesionales del sector encuentren proveedores de confianza de forma rápida y organizada.`,
    challenge: `- No existía ninguna plataforma centralizada en España que reuniese a administradores de fincas con proveedores de servicios del sector en un único directorio.
- El cliente necesitaba una solución que fuese fácilmente mantenible sin conocimientos técnicos, ya que el equipo no contaba con desarrolladores propios.
- Se requería un sistema de búsqueda y filtrado avanzado con más de 30 categorías de servicio que no perdiera rendimiento con el crecimiento de registros.
- La web debía transmitir seriedad y confianza para que empresas del sector se registrasen voluntariamente en el directorio.`,
    solution: `- Desarrollo sobre WordPress con tema personalizado, lo que permite al equipo de Adminventa gestionar el contenido del portal de forma autónoma desde el panel de administración.
- Implementación de un plugin de directorio empresarial con sistema de búsqueda multicriteria (categoría, ubicación, tipo de servicio) capaz de filtrar más de 30 categorías sin afectar al rendimiento.
- Fichas de empresa completas con datos de contacto, descripción del servicio, dirección y enlace a su web corporativa.
- Carrusel de empresas colaboradoras destacadas en la home para aumentar la visibilidad de los registros premium.
- Diseño corporativo en tonos verdes que refuerza la credibilidad del portal ante nuevas empresas interesadas en registrarse.
- Sección de actualidad/noticias del sector para mejorar el SEO y aumentar la recurrencia de visitas.`,
    tags: ["WordPress"],
    images: ["/portfolio/Adminventa/1.png", "/portfolio/Adminventa/2.png"],
    imageCount: 2,
  },
  {
    slug: "agetest",
    folder: "Agetest",
    title: "Agetest — Panel de administración empresarial con RBAC",
    description: `Agetest es una plataforma de administración full-stack pensada como base sólida sobre la que construir dashboards empresariales. Incluye autenticación completa, control de acceso granular por roles y permisos (RBAC), gestión de sesiones activas con capacidad de invalidar sesiones remotas, notificaciones in-app, impersonación de usuarios para soporte técnico, gestor de perfiles con foto (conversión automática a WebP) y una extensa librería de componentes UI demo que sirven de referencia visual y de código para acelerar el desarrollo de nuevas funcionalidades.

Stack: Laravel 11 (PHP 8.2+) + Inertia.js + React 18 + TypeScript + Tailwind CSS + NextUI v2 + Spatie Laravel Permission (RBAC) + Laravel Sanctum (auth) + Lab404 Impersonate + Spatie Media Library + Intervention Image + TipTap (WYSIWYG) + ApexCharts + React Pro Sidebar + Framer Motion + Zustand + React Dropzone. Doble layout de dashboard (Corporate y Executive) + 35+ páginas admin.`,
    challenge: `- **Base reutilizable para múltiples proyectos**: el cliente no quería rehacer login/roles/usuarios en cada nueva plataforma.
- **Roles protegidos**: impedir que un administrador normal pudiera editar o borrar al Super Admin (escalada de privilegios accidental o intencionada).
- **Soporte técnico sin compartir contraseñas**: necesitaban ver la plataforma "como" el usuario que tenía un problema, sin conocer su contraseña.
- **Sesiones colgadas**: usuarios que olvidaban cerrar sesión en ordenadores compartidos, sin forma de desconectarlos remotamente.
- **Comunicación interna fragmentada**: avisos en email llegaban tarde o se perdían.
- **Desarrollo lento de nuevas vistas**: cada formulario o tabla se reinventaba.`,
    solution: `- **Arquitectura Inertia.js** que combina Laravel como backend MVC con React 18 + TS como frontend SPA sin necesidad de una API REST separada: un único codebase, un único deploy.
- **Spatie Permission con roles protegidos** (Super Admin, Admin): se marcan como "system" y la lógica de controladores rechaza cualquier mutación sobre ellos desde un admin regular.
- **Impersonación** con \`Lab404/Impersonate\` limitada a Super Admins, con banner permanente que recuerda al soporte que está viendo la app "como" otra persona.
- **Gestión de sesiones** con listado de todas las sesiones activas (IP + User-Agent + última actividad) y botón para revocar sesiones remotas individualmente.
- **Notificaciones in-app** internas entre usuarios/administradores con plantillas reutilizables.
- **Librería demo UI** con 35+ páginas (Accordion, Alerts, Avatar, Breadcrumbs, Buttons, Cards, Badges, Tabs, Modals, Tooltips, Dropdowns, formularios avanzados con WYSIWYG TipTap, tablas TanStack, gráficos ApexCharts, selectores de color, dropzone de imágenes, librería de iconos Remix) que sirven de catálogo vivo y acortan drásticamente el tiempo de desarrollo.
- **Perfil de usuario** completo (nombre, email, teléfono, fecha nacimiento, dirección, cargo, empresa, biografía, foto con conversión automática a WebP via Intervention Image).
- **Sidebar dinámico** filtrado por permisos del usuario (React Pro Sidebar + Framer Motion), de forma que cada rol ve solo lo que puede usar.
- **Dos layouts** (Corporate y Executive) intercambiables para adaptar la plantilla a la identidad visual de cada cliente.`,
    tags: ["React", "Laravel", "TypeScript", "Tailwind CSS", "Inertia.js"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "agro",
    folder: "Agro",
    title: "Agro Industrial Asesores — Web corporativa agroindustrial multilingüe",
    description: `Sitio web corporativo para Agro Industrial Asesores, empresa de asesoría y servicios para el sector agroindustrial. Construido sobre WordPress con el tema premium Agrica (especializado en agricultura orgánica) y un child theme para facilitar actualizaciones. Soporta múltiples idiomas con Polylang, incluye tienda online con WooCommerce para comercializar productos agrícolas, formularios profesionales con Contact Form 7, diseño visual con Elementor Pro y múltiples capas de seguridad (Wordfence, All in One WP Security, Google Authenticator 2FA, Really Simple SSL).

Stack: WordPress + tema Agrica v1.0.1 + Child Theme + Elementor + Elementor Pro + WooCommerce + Polylang + Connect Polylang Elementor + Contact Form 7 + Yoast SEO + Google Analytics + Redux Framework + CMB2. Optimización de imágenes a WebP, Akismet anti-spam y All in One WP Migration para backups.`,
    challenge: `- **Presencia web poco profesional**: la empresa necesitaba transmitir confianza en un sector tradicional.
- **Mercado internacional**: clientes potenciales en distintos países con idiomas diferentes.
- **Comercialización de productos agrícolas**: venta directa online de productos del catálogo.
- **Sector sensible a confianza**: cualquier hackeo o defacement dañaría la reputación.
- **Cumplimiento GDPR**: obligatorio por normativa europea.
- **Captación de leads**: formularios simples que no desanimen al visitante.`,
    solution: `- **Tema premium Agrica + Child Theme**: diseño agroindustrial profesional con campos, tractores, tonos tierra y verdes, sobre una capa de child theme que permite actualizar el padre sin perder personalizaciones.
- **Elementor Pro** para que el cliente pueda editar páginas (inicio, sobre nosotros, servicios, productos, contacto) sin tocar código.
- **Multilingüe con Polylang + Connect Polylang Elementor**: contenido traducido incluyendo templates de Elementor.
- **WooCommerce** como catálogo y carrito para productos agrícolas.
- **Formularios con Contact Form 7** + Akismet para consultas y solicitudes de presupuesto.
- **SEO con Yoast + Google Analytics** con Redux Framework para opciones del tema y CMB2 para metaboxes personalizados.
- **Seguridad en capas**: Wordfence (WAF + escaneo malware), All in One WP Security (firewall + hardening), Google Authenticator (2FA), Really Simple SSL (HTTPS forzado).
- **Cumplimiento GDPR** con plugins dedicados de cookies y política de privacidad.
- **Optimización de imágenes a WebP** para rendimiento y SEO.
- **All in One WP Migration** para respaldos y migraciones entre entornos.`,
    tags: ["WordPress", "WooCommerce", "Elementor"],
    images: ["/portfolio/Agro/1.png", "/portfolio/Agro/2.png", "/portfolio/Agro/3.png", "/portfolio/Agro/4.png", "/portfolio/Agro/5.png", "/portfolio/Agro/6.png", "/portfolio/Agro/7.png", "/portfolio/Agro/8.png", "/portfolio/Agro/9.png", "/portfolio/Agro/10.png"],
    imageCount: 10,
  },
  {
    slug: "alexmago",
    folder: "AlexMago",
    title: "AlexMago — CRM personalizado para gestión de shows y espectáculos",
    description: `CRM completo para Alex Mago, un profesional del entretenimiento y la magia. Construido sobre Perfex CRM (CodeIgniter 3) con 13 módulos personalizados que adaptan el CRM genérico al negocio específico de eventos y espectáculos: gestión de shows con tipo/fecha/ubicación/asistentes/organizador/actividades profesionales vinculadas, clientes con portal propio, facturación, presupuestos, propuestas comerciales, proyectos con tareas e hitos, contratos, suscripciones con facturación recurrente, gastos, notas de crédito, base de conocimiento, leads, emails programados, encuestas automatizadas post-evento con cron, objetivos con notificaciones, planificación de trabajo y exportaciones.

Stack: Perfex CRM (CodeIgniter 3.x) sobre PHP + MySQL/MariaDB. Frontend con Tailwind CSS sobre Bootstrap 3.4 compilado con Laravel Mix (PostCSS + SASS). PHPMailer para email, FPDF para PDFs, Authorize.net + Braintree como pasarelas de pago y Adminer para administración de BD.`,
    challenge: `- **Operativa dispersa**: Alex gestionaba shows, clientes, facturas, presupuestos y personal con Excel, WhatsApp y papel.
- **Eventos con actividades profesionales**: cada show tiene magos, músicos, técnicos asociados, imposible de modelar en un CRM genérico.
- **Encuestas post-evento manuales**: enviar por email una a una tras cada show era inviable y las respuestas se perdían.
- **Objetivos del equipo sin seguimiento**: los colaboradores tenían metas pero nadie medía si se cumplían.
- **Portal de cliente**: los clientes preguntaban constantemente por estado de facturas/propuestas, sin un sitio donde mirarlo.
- **Cumplimiento GDPR**: manejo de datos de clientes exigía consentimientos y exportaciones.`,
    solution: `- **Perfex CRM como base** (potente CRM open-source en CodeIgniter 3) con 13 módulos custom encima, en lugar de desarrollar desde cero.
- **Módulo de Shows/Eventos** (central del negocio): tipo, fecha, ubicación, número de asistentes, organizador, actividades profesionales vinculadas a facturas y presupuestos, seguimiento de rentabilidad por evento.
- **Encuestas automatizadas por cron**: creación de plantillas, envío automático tras el show, tracking con IP y recopilación visual de resultados.
- **Módulo de Objetivos** con widgets de dashboard y notificaciones que avisan al responsable cuando se alcanzan hitos.
- **Planificación de trabajo**: tareas programadas y asignadas al personal/freelance.
- **Portal de cliente** de Perfex para que los clientes vean facturas, presupuestos, propuestas y estado de proyectos sin molestar.
- **13 módulos personalizados**: Shows, Estudiantes/Proveedores con permisos por staff, Encuestas automatizadas, Planificación, Objetivos, Referencias de leads, Estadísticas, Exportaciones, Backups, Configuración de menús, Estilos de tema.
- **RBAC granular de Perfex** + cumplimiento GDPR integrado.
- **Pasarelas Authorize.net + Braintree** para cobros online de suscripciones y facturas.
- **Interfaz actualizada** con Tailwind CSS sobre Bootstrap 3.4 usando Laravel Mix para no romper la base de Perfex.`,
    tags: ["Laravel", "Tailwind CSS", "MySQL", "Bootstrap", "Perfex CRM"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "appbrokers",
    folder: "AppBrokers",
    title: "AppBrokers — Sistema de gestión para brokers de subastas de vehículos",
    description: `Aplicación web para brokers de subastas de vehículos en EE.UU. (Copart, IAA, Manheim) que centraliza la operativa completa: alta de clientes, registro de vehículos con VIN, control de subastas, pagos, documentos, historial y reportes. Implementa roles diferenciados (admin y usuario) donde los administradores gestionan las solicitudes pendientes de aprobación y los brokers operan sobre su cartera.

Stack: React 18 + Vite + React Router v6 + Tailwind CSS + Radix UI + shadcn/ui (button, dialog, dropdown, tabs, toast, etc.) + React Hook Form + Zod + Framer Motion + Supabase JS (como backend opcional) y autenticación vía localStorage.`,
    challenge: `- **Datos dispersos**: cada broker llevaba clientes, vehículos, pagos y documentos en hojas de Excel y WhatsApp, sin trazabilidad ni permisos.
- **Dependencia de varias casas de subasta** con nomenclaturas distintas (Copart vs. IAA vs. Manheim) y flujos propios (tiempos de entrega, documentación requerida).
- **Control documental débil**: los documentos de importación/matriculación se perdían entre correos.
- **Alta de usuarios sin supervisión**: cualquiera podía registrarse y acceder, había que filtrar quién entraba realmente al sistema.
- **Compilación y arranque lentos** con Create React App heredado del proyecto inicial.`,
    solution: `- **Módulos separados por dominio**: Dashboard, Vehículos (con VIN, marca/modelo/año, subasta de origen, precio, estado), Clientes, Pagos, Documentos, Reportes, Historial y Solicitudes (sólo admin), todos bajo un mismo Layout con navegación lateral.
- **Estados semánticos de vehículo** con pills de color (Disponible, Vendido, Entregado, En Tránsito) que permiten saber el estado del stock de un vistazo.
- **Registro con aprobación**: los usuarios nuevos pasan por \`/register\` y aparecen en el panel de Solicitudes, donde el admin los aprueba o rechaza. Hasta entonces no pueden iniciar sesión.
- **\`ProtectedRoute\`** reutilizable con flag \`adminOnly\` para envolver las rutas críticas (Solicitudes) y evitar repetir lógica de permisos.
- **Autenticación con \`AuthContext\` + localStorage** usando un hash simple, suficiente para un MVP interno con fallback admin (\`admin@example.com\`/\`password\`) y extensible a Supabase Auth cuando se escale.
- **Formularios con React Hook Form + Zod** para validar email/VIN/precios y evitar entradas inconsistentes.
- **Migración de CRA a Vite 4** reduciendo el tiempo de arranque de 15-20 s a <1 s y el HMR a instantáneo.
- **shadcn/ui + Radix** como base accesible para diálogos, selects y toasts, manteniendo un theme dark por defecto coherente en todas las pantallas.
- **Cliente de Supabase preparado** en \`lib/supabaseClient.js\` para migrar sin cambiar la UI cuando se necesite persistencia multiusuario real.`,
    tags: ["React", "Tailwind CSS", "Supabase", "Vite", "Framer Motion"],
    images: ["/portfolio/AppBrokers/1.png", "/portfolio/AppBrokers/2.png", "/portfolio/AppBrokers/3.png", "/portfolio/AppBrokers/4.png", "/portfolio/AppBrokers/5.png", "/portfolio/AppBrokers/6.png", "/portfolio/AppBrokers/7.png", "/portfolio/AppBrokers/8.png", "/portfolio/AppBrokers/9.png", "/portfolio/AppBrokers/10.png", "/portfolio/AppBrokers/11.png"],
    imageCount: 11,
  },
  {
    slug: "aqualinks-3d",
    folder: "Aqualinks_3d",
    title: "Aqualinks 3D",
    description: `Landing page inmersiva con animaciones 3D para Aqualinks, empresa de tecnología hídrica de Roquetes (Tarragona). La web presenta su aplicación móvil de gestión inteligente del agua dirigida a municipios, empresas industriales, comunidades de regantes y sector hostelero. El elemento diferenciador es el uso de modelos 3D de gotas de agua animadas mediante scroll-driven animations con React Three Fiber, que acompañan toda la experiencia de navegación y crean un hilo visual coherente a lo largo de la landing. La arquitectura de la web incluye una pantalla de carga previa para asegurar que los assets 3D (modelos GLTF) estén completamente cargados antes de mostrar el contenido.`,
    challenge: `- Aqualinks opera en el sector hidráulico/industrial, un mercado con webs corporativas habitualmente anticuadas. Necesitaban diferenciarse radicalmente con una experiencia visual que transmitiese innovación tecnológica avanzada sin perder credibilidad ante clientes institucionales (ayuntamientos, empresas industriales).
- Implementar scroll-driven animations con Three.js de forma fluida y sin caídas de rendimiento era técnicamente complejo: la escena 3D incluye una gota principal + 8 gotas orbitantes + 12 partículas decorativas, todas animadas simultáneamente con física propia (floating, wobble, pulse).
- Los modelos GLTF de gotas de agua son pesados (~MB) y necesitaban cargarse antes de que el usuario viera la animación, pero el tiempo de carga no debía ser percibido como negativo. Era necesario diseñar una experiencia de loading que también fuese parte de la marca.
- Integrar Lenis (smooth scroll) con React Three Fiber requería sincronizar el sistema de scroll personalizado con el estado de progreso que controla las animaciones 3D, sin que el scroll nativo del navegador interfiriese.
- La extensión GLTF \`KHR_materials_pbrSpecularGlossiness\` usada en los modelos no está soportada de forma nativa en todas las versiones de Three.js GLTFLoader, lo que generaba advertencias y degradación visual en algunos entornos.`,
    solution: `- Desarrollo de sistema de scroll-driven animations con hook \`useScrollProgress\` que devuelve un valor 0-1 basado en la posición de scroll, que se distribuye como prop \`progress\` a todos los componentes de sección para controlar sus animaciones de entrada, posición y opacidad de forma centralizada.
- Implementación de \`LoadingScreen\` como componente independiente que muestra una animación de marca durante la carga de los assets GLTF, convirtiendo el tiempo de espera en una experiencia positiva que genera anticipación en lugar de frustración.
- Integración de Lenis como proveedor de contexto (\`LenisProvider\`) con hook \`useLenis\` para sincronizar el scroll suavizado con el sistema de animaciones, asegurando que los modelos 3D respondan al scroll con la misma suavidad que el contenido HTML.
- Sistema de partículas decorativas con 12 gotas pequeñas posicionadas aleatoriamente y animadas con \`useFrame\` de React Three Fiber, añadiendo profundidad visual sin impacto significativo en el rendimiento gracias al uso de geometrías instanciadas.
- Deploy en Docker + Nginx para garantizar tiempos de respuesta óptimos en producción, con caché de los assets estáticos (modelos GLTF, texturas) configurada en el servidor.`,
    tags: ["React", "Vue", "Docker", "React Three Fiber"],
    images: ["/portfolio/Aqualinks_3d/1.png", "/portfolio/Aqualinks_3d/2.png", "/portfolio/Aqualinks_3d/3.png", "/portfolio/Aqualinks_3d/4.png", "/portfolio/Aqualinks_3d/5.png", "/portfolio/Aqualinks_3d/6.png", "/portfolio/Aqualinks_3d/7.png", "/portfolio/Aqualinks_3d/8.png", "/portfolio/Aqualinks_3d/9.png"],
    imageCount: 9,
  },
  {
    slug: "casermovil",
    folder: "Casermovil",
    title: "Casermovil — E-commerce de carga móvil para vehículos eléctricos",
    description: `Plataforma e-commerce para Casermovil, un servicio de carga móvil de vehículos eléctricos. Construida sobre WordPress + WooCommerce con planes de suscripción, múltiples pasarelas de pago (Stripe, PayPal, Elegro), feeds integrados de redes sociales (Facebook, Instagram, YouTube, Twitter), diseño visual con Elementor Pro y Revolution Slider, soporte multilingüe con GTranslate, cumplimiento GDPR completo y analíticas con Google Analytics.

Stack: WordPress 6.5.4 + WooCommerce + Elementor Pro + tema DetailX con TRX Addons + Revolution Slider + Stripe + PayPal + Elegro Payment + GTranslate + All in One SEO + Mailchimp + Google Analytics + AI Engine. PHP 8.2 + MariaDB 10.4.`,
    challenge: `- **Venta de servicio recurrente**: los planes de carga son suscripción, no producto físico, y WooCommerce por defecto no los modela bien.
- **Múltiples pasarelas**: clientes piden pagar con distintos métodos según país.
- **Presencia social dispersa**: Facebook, Instagram, YouTube y Twitter, sin unificar en la web.
- **Mercado internacional**: audiencia en varios países, idiomas diferentes.
- **GDPR**: obligatorio para el mercado europeo.
- **Identidad visual premium**: servicio tecnológico que debe transmitir modernidad.`,
    solution: `- **WooCommerce + WooCommerce Subscriptions** para modelar planes de carga recurrentes con renovación automática.
- **Tres pasarelas de pago** (Stripe, PayPal, Elegro) para cubrir preferencias de distintos mercados.
- **Tema premium DetailX con TRX Addons** + Elementor Pro + Revolution Slider para un diseño visual potente y completamente editable por el cliente.
- **GTranslate** para soporte multilingüe sin tener que mantener traducciones manuales.
- **Feeds integrados** de Facebook, Instagram, YouTube y Twitter en la home y páginas de servicio para reforzar prueba social.
- **SEO + marketing**: All in One SEO, Mailchimp para captación y campañas, Google Analytics para medición.
- **Cumplimiento GDPR**: Cookie Law Info + WP GDPR Compliance.
- **AI Engine** para funcionalidades de IA integradas (asistente/chat).
- **WPForms Lite + Contact Form 7** para formularios de contacto profesionales.
- **6.000+ archivos multimedia** gestionados dentro del backup WordPress.`,
    tags: ["WordPress", "Stripe", "WooCommerce", "Elementor", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "chefs",
    folder: "Chefs",
    title: "Chefs — Dashboard interno para restaurantes + web pública",
    description: `Sistema dual para un restaurante que combina presencia pública y gestión interna. Por un lado, un **dashboard de administración** basado en el template premium Salero (Bootstrap 5) adaptado al negocio: gestión del interior del restaurante (mesas, zonas, layout), buscador de datos, listado de clientes, checkout/pedidos (e-commerce), facturación, reseñas, calendario de reservas, analíticas con gráficos y perfiles de usuario con login. Por otro lado, un **sitio WordPress** para la web pública del restaurante.

Stack:
- **Dashboard admin**: HTML5 + Bootstrap 5 + JavaScript + jQuery + DataTables + Swiper.js + Bootstrap Datetimepicker + Chart.js / ApexCharts + SCSS.
- **Sitio público**: WordPress.`,
    challenge: `- **Gerencia sin visibilidad**: tiempos de rotación de mesas, pedidos abiertos, facturas y reseñas dispersos en distintas herramientas.
- **Web pública y gestión interna** requieren herramientas muy distintas: WordPress es ideal para la primera, pero pesado para un panel operativo.
- **Interior del restaurante**: el equipo necesitaba ver visualmente mesas ocupadas/libres por zona.
- **Reseñas** (Google, TripAdvisor) dispersas sin monitorización centralizada.
- **Reservas y eventos** gestionados en papel o Excel.
- **Analíticas del negocio**: sin gráficos claros, las decisiones se tomaban por intuición.
- **Checkout integrado**: pedidos online con flujo de facturación completo.`,
    solution: `- **Arquitectura dual**: WordPress para la web pública (rápido de actualizar por marketing) + dashboard Bootstrap 5 como SPA interna para operaciones.
- **Template premium Salero (Bootstrap 5)** como base del dashboard: ligero, moderno, con 35+ páginas y componentes listos que se adaptaron al restaurante.
- **Módulo "Interior del restaurante"**: gestión visual de mesas, zonas y layout del local.
- **Listado y perfiles de clientes** con DataTables (paginación, filtros, búsqueda instantánea).
- **Proceso de checkout/pedidos** con e-commerce (carrito, cálculo de totales, confirmación).
- **Facturación** con generación y gestión de facturas.
- **Sección de reseñas** para monitorizar y responder reseñas.
- **Calendario** con Bootstrap Datetimepicker para gestión de reservas y eventos.
- **Analíticas** con Chart.js / ApexCharts: gráficos de ventas, reservas, clientes recurrentes y KPIs clave.
- **Perfiles de usuario y login** para acceso de gerentes/camareros.
- **Swiper.js** para carruseles en dashboards y vista de productos.
- **SCSS** para personalización de estilos manteniendo la base del template.
- **WordPress** en paralelo para blog, menú público, contacto y SEO, sin mezclar con el panel de gestión.`,
    tags: ["WordPress", "Bootstrap"],
    images: ["/portfolio/Chefs/1.png", "/portfolio/Chefs/2.png", "/portfolio/Chefs/3.png", "/portfolio/Chefs/4.png", "/portfolio/Chefs/5.png", "/portfolio/Chefs/6.png", "/portfolio/Chefs/7.png", "/portfolio/Chefs/8.png", "/portfolio/Chefs/9.png", "/portfolio/Chefs/10.png"],
    imageCount: 10,
  },
  {
    slug: "coagrisan",
    folder: "Coagrisan",
    title: "Coagrisan — Plataforma digital para cooperativa agrícola",
    description: `Plataforma web/móvil para Coagrisan Servicios S.L., una cooperativa agrícola española, que digitaliza sus operaciones diarias: albaranes de entrega con firma digital, pedidos desde catálogo, gestión de socios y fincas, control de técnicos de campo, abonos/pagos y clasificación por sectores agrícolas. Está pensada para uso en campo por técnicos con conectividad limitada, por lo que es PWA instalable y además compilable a iOS/Android con Capacitor.

Stack:
- **Frontend**: Vue 3 (Composition API + TypeScript) + Vite + PrimeVue 4 + Tailwind CSS 4 + Capacitor (app nativa) + Workbox (Service Workers / PWA).
- **Backend**: Express.js + TypeScript + MySQL 8.0+ + Redis 6.0+ + express-session + Docker Compose.
- **Despliegue**: Nginx + PM2 + SSL/TLS (Let's Encrypt) + scripts de deploy automatizados.`,
    challenge: `- **Albaranes y pedidos en papel**: técnicos rellenaban albaranes físicos en campo, los pedidos se hacían por teléfono y las firmas se recogían en hoja.
- **Conectividad limitada en campo**: en muchas fincas no hay buena cobertura 4G, imposible depender de estar online.
- **Formularios largos para albaranes**: datos generales, productos, servicios de mano de obra, datos de riego, firma y seguimiento de abonos — demasiada información para una sola pantalla.
- **Catálogo de productos extenso**: los técnicos tardaban en encontrar el producto correcto al dictar.
- **Pedidos recurrentes**: algunos socios piden casi lo mismo cada semana, duplicar manualmente es error-prone.
- **Integración con sistema externo del cliente** para cerrar los pedidos en su ERP.
- **Firma manuscrita** necesaria para validar albaranes y pedidos.`,
    solution: `- **PWA con Workbox + Capacitor**: misma base de código funciona como web instalable y como app nativa iOS/Android, con soporte offline-first para trabajar en campo sin conexión.
- **Albaranes multi-tab**: datos generales → productos → servicios de mano de obra → datos de riego → firma digital → abonos/pagos. Cada pestaña es un paso mental claro.
- **Duplicar albarán** para pedidos recurrentes: un clic y se copia la estructura.
- **Autocompletado de productos** desde CSV con catálogo central + tabla dinámica que calcula totales automáticamente al añadir líneas.
- **Firma digital en canvas HTML5** con soporte táctil (móvil/tablet), conversión a base64 y vista previa antes de guardar.
- **Sistema de pedidos** con selección de forma de pago (efectivo/transferencia/tarjeta) y envío al API externa del cliente a través del backend Express como proxy seguro (el frontend no conoce las credenciales).
- **Autenticación con express-session + Redis** para persistencia de sesiones distribuidas entre varios PM2 workers.
- **Módulos de socios, fincas, productos, técnicos, abonos y sectores** con CRUD paginado.
- **Despliegue industrial**: Nginx como reverse proxy + PM2 + SSL Let's Encrypt + scripts de deploy automatizados, con Docker Compose para el entorno local de desarrollo.`,
    tags: ["Vue", "TypeScript", "Tailwind CSS", "MySQL", "Docker"],
    images: ["/portfolio/Coagrisan/1.png"],
    imageCount: 1,
  },
  {
    slug: "cursabellvitge",
    folder: "CursaBellvitge",
    title: "Cursa Bellvitge — Plataforma de gestión de carrera popular",
    description: `Plataforma web para gestionar la Cursa Bellvitge, una carrera popular anual organizada en el barrio de Bellvitge (Barcelona). Digitaliza todo el ciclo del evento deportivo: inscripciones online con validación de DNI, categorías por edad (0-6, 7-10, 11-20, 21-50, 50+, discapacidad), clasificaciones filtrables por posición general/categoría/sexo/tiempo, galería de fotos, noticias, sistema de feedback con estrellas y panel de administración. Incluye soporte bilingüe catalán/castellano, envío automático de emails de confirmación y generación de diplomas en PDF.

Stack: PHP 7.3+ custom + MySQL/MariaDB + HTML5 + CSS3 + JavaScript vanilla. PHPMailer para emails, FPDF/FPDI para diplomas, Google Fonts (Raleway) y Font Awesome.`,
    challenge: `- **Inscripciones y clasificaciones manuales**: organizadores gestionaban con papel y Excel, con huecos duplicados y errores de transcripción.
- **Participantes sin acceso rápido a resultados**: al acabar la carrera, los tiempos se publicaban días después por PDF impreso.
- **Validación de DNI**: impedir inscripciones duplicadas o con datos inventados.
- **Barrio bilingüe**: muchos vecinos piden contenido en catalán, pero la organización quiere llegar también a participantes de fuera de Cataluña.
- **Diplomas de participación**: generar cientos tras la carrera consumía horas del voluntariado.
- **Pagos y estado de inscripción**: saber quién ya había pagado y quién no antes del día del evento.`,
    solution: `- **Inscripción online** con formulario que valida DNI, datos personales y asigna automáticamente la categoría por edad (0-6, 7-10, 11-20, 21-50, 50+, discapacidad), con estado de pago.
- **Clasificaciones filtrables**: por posición general, categoría de edad, sexo y tiempo — los participantes consultan su puesto en cualquier corte inmediatamente.
- **Countdown en la landing** al día de la carrera para generar engagement previo.
- **Panel de administración** (con login y sesiones PHP) para gestionar ediciones, inscripciones, subir CSV de tiempos, publicar noticias con foto, galería, ver feedback y exportar CSV de participantes.
- **Emails automáticos** de confirmación de inscripción con PHPMailer (incluyen dorsal y datos de recogida).
- **Diplomas en PDF con FPDF**: generación masiva tras la carrera con nombre, categoría y tiempo personalizados.
- **Feedback con estrellas (1-5) y comentarios** para medir satisfacción y mejorar la edición siguiente.
- **Bilingüe catalán/castellano** con selector visible y textos traducidos.
- **Noticias con foto** para comunicar inscripción abierta, patrocinadores, recorrido y resultados.
- **Estadísticas** en el panel de admin: total inscritos, por categoría, por edad, pagados vs. pendientes.`,
    tags: ["MySQL", "PHP"],
    images: ["/portfolio/CursaBellvitge/1.png", "/portfolio/CursaBellvitge/2.png", "/portfolio/CursaBellvitge/3.png", "/portfolio/CursaBellvitge/4.png", "/portfolio/CursaBellvitge/5.png", "/portfolio/CursaBellvitge/6.png", "/portfolio/CursaBellvitge/7.png"],
    imageCount: 7,
  },
  {
    slug: "descaro",
    folder: "Descaro",
    title: "Descaro — Agencia de Marketing Digital",
    description: `Diseño web completo y propuesta comercial para Descaro, una agencia de marketing digital y desarrollo web. El proyecto comprende el mockup de la landing page corporativa con identidad visual propia, planificación detallada del proyecto y propuesta comercial. La web presenta los servicios de la agencia (marketing digital, diseño web, estrategia de contenidos), su equipo, planes de precios y casos de éxito, con una estética vibrante y diferenciadora que refleja la personalidad creativa de la agencia.`,
    challenge: `- Descaro necesitaba una identidad digital que comunicase de forma inmediata que son una agencia creativa, pero sin sacrificar la percepción de profesionalidad ante clientes corporativos que buscan seriedad en su proveedor.
- La agencia quería diferenciarse visualmente del estándar del sector (webs oscuras y minimalistas de agencias), usando una paleta de color más atrevida que funcionara como argumento de venta en sí misma ("somos distintos por diseño").
- Era necesario presentar tres audiencias con necesidades muy diferentes en la misma landing: empresas que buscan estrategia de marketing, pymes que buscan diseño web y autónomos que necesitan packs asequibles.
- La tabla de precios (4 planes desde 4,99€ hasta 45,95€/mes) debía ser clara, comparativa y que facilitase la decisión de compra sin necesidad de llamar o consultar.`,
    solution: `- Diseño de landing page con paleta de colores vibrante (amarillo, naranja, verde) que rompe con el estándar del sector de las agencias digitales, convirtiéndose en un elemento diferenciador propio del posicionamiento creativo de Descaro.
- Hero section dividida en dos bloques: fotografía real de oficina (para transmitir que son un equipo real) + bloques de color con CTAs prominentes "Empieza ahora", combinando humanidad con energía.
- Sección de estadísticas con contadores animados (500+ proyectos, 10.000+ horas de trabajo, 200+ clientes satisfechos) para construir credibilidad inmediata sin necesidad de mostrar logotipos de clientes.
- Tabla de precios de 4 planes claramente diferenciados con funcionalidades comparativas, facilitando la autosegmentación del visitante según su presupuesto y necesidades, y reduciendo la necesidad de consultas previas.
- Planificación de proyecto (Excel) y propuesta comercial (PPTX) entregados junto al diseño para que el cliente tuviese un roadmap claro del proceso de desarrollo desde el primer día.`,
    tags: [],
    images: ["/portfolio/Descaro/1.jpg", "/portfolio/Descaro/2.png"],
    imageCount: 2,
  },
  {
    slug: "evenhealth",
    folder: "EvenHealth",
    title: "Even Health",
    description: `Even Health es una aplicación móvil (iOS y Android) diseñada para ayudar a las personas a reducir su nivel de azúcar en sangre de forma natural. A través del análisis inteligente de comidas, seguimiento de fibra y carbohidratos, y recomendaciones personalizadas, guía a los usuarios hacia una alimentación más equilibrada sin dietas restrictivas. Con más de 5.000 usuarios activos, la landing page actúa como principal punto de captación de nuevas descargas en App Store y Google Play.`,
    challenge: `- El cliente ya tenía la app funcionando con 5.000 usuarios pero carecía de presencia web que explicase su propuesta de valor con claridad.
- Comunicar un concepto complejo de salud (reducir azúcar en sangre mediante fibra en lugar de contar calorías) de forma simple y visual para un público amplio era el principal reto.
- Era necesario generar confianza suficiente para que los usuarios se descargasen una app de salud de una marca relativamente nueva, sin un historial de valoraciones amplio visible.
- La landing debía redirigir a dos stores distintas (App Store y Google Play) sin friccionar el proceso de descarga.`,
    solution: `- Diseño de una landing page orientada a conversión con un hero visual fuerte, mostrando mockups reales de la app con el análisis de comidas y las recomendaciones nutricionales en pantalla.
- Se sustituyó el discurso técnico por mensajes directos y empáticos: "sin dietas restrictivas", "mejora de hábitos", "soporte sin juicios", que conectan emocionalmente con el usuario objetivo.
- Integración de métricas de social proof reales: 5K+ usuarios, 74% mejoran sus hábitos alimenticios, lo que compensa la juventud de la marca y genera credibilidad.
- Código QR de descarga directa y botones duales App Store / Google Play para minimizar la fricción en la conversión.
- Diseño minimalista en tonos verdes y crema que transmite salud, naturalidad y confianza, alineado con la identidad de una app de wellness.`,
    tags: [],
    images: ["/portfolio/EvenHealth/1.png", "/portfolio/EvenHealth/2.png", "/portfolio/EvenHealth/3.png"],
    imageCount: 3,
  },
  {
    slug: "futdata",
    folder: "FutData",
    title: "FutData — Plataforma de estadísticas y análisis de fútbol",
    description: `Plataforma web de estadísticas y analíticas de fútbol construida sobre WordPress con un tema completamente personalizado. Presenta datos detallados de La Liga y la Premier League con tablas extensas de estadísticas por partido (goles, posesión, córners, tiros a puerta, tarjetas, faltas, fueras de juego, tiros libres), codificación visual por colores (verde victoria, rojo derrota, naranja empate), análisis separado de rendimiento local/visitante y análisis de líneas propuestas por casas de apuestas. Incluye escudos de los 20 equipos de La Liga y Premier.

Stack: WordPress 5.4+ con tema personalizado "futdata" + PHP 5.6+ + MySQL + HTML5 + CSS3 (Bootstrap 3) + JavaScript + jQuery + Slick Slider + FancyBox + AOS (Animate on Scroll) + Font Awesome + LESS. Motor de cálculos propio en JS (\`calculos.js\`, 73 KB).`,
    challenge: `- **Datos de fútbol son visuales**: tablas de números puros son ilegibles; el usuario quiere detectar patrones de un vistazo.
- **Rendimiento local vs. visitante** suele ser muy diferente y WordPress no lo modela por defecto.
- **Casas de apuestas** proponen líneas (goles totales, asiático, hándicap) que hay que cruzar con la media del equipo.
- **20 equipos x 38 jornadas x 10 categorías estadísticas** = miles de celdas a colorear dinámicamente.
- **SEO para nichos deportivos**: competencia feroz, necesita contenido detallado y datos estructurados.
- **Escudos y branding**: uso correcto de logos y colores de cada equipo para reforzar reconocimiento visual.
- **Responsive en móvil**: aficionados consultan desde el móvil durante los partidos.`,
    solution: `- **Tema WordPress personalizado "futdata"**: no se usó un tema genérico sino uno específico para el dominio estadístico.
- **Motor de cálculos propio en JavaScript** (\`calculos.js\`, 73 KB): recorre las tablas, aplica la lógica de negocio (victoria/derrota/empate, local/visitante, media vs. línea propuesta por casa de apuestas) y colorea celdas dinámicamente — verde (victoria), rojo (derrota), naranja (empate).
- **Cálculos separados** local/visitante hasta la jornada 24, permitiendo ver tendencias ocultas en las medias globales.
- **Estadísticas completas por partido**: goles, posesión, córners, tiros a puerta, tarjetas, faltas, fueras de juego, tiros libres.
- **Análisis de líneas de mercado** (casas de apuestas) para identificar oportunidades.
- **Páginas dedicadas** para La Liga y Premier League con mismo nivel de detalle.
- **20 escudos** de equipos de La Liga (Real Madrid, Barcelona, Atlético, etc.) + equipos Premier, con uso correcto de branding.
- **Bootstrap 3 + LESS** para responsive y personalización de estilos.
- **Slick Slider + FancyBox + AOS**: carruseles, lightbox y animaciones scroll para aligerar la densidad de datos.
- **2.411 archivos** en el tema personalizado gestionando assets, templates y scripts del motor de cálculos.`,
    tags: ["WordPress", "MySQL", "Bootstrap", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "gpasoc",
    folder: "GPAsoc",
    title: "Gutiérrez Pujadas & Partners",
    description: `Web corporativa para Gutiérrez Pujadas & Partners, una asesoría internacional fiscal, contable y jurídica con sede en Barcelona. La plataforma digital presenta los servicios del despacho, su equipo de 22 partners y una trayectoria de más de 35 años con más de 1.500 clientes nacionales e internacionales. El objetivo de la web es generar confianza entre potenciales clientes —especialmente autónomos y empresas— y convertirlos en leads cualificados para el despacho.`,
    challenge: `- El despacho tenía una web anticuada que no reflejaba su trayectoria de 35 años ni su posicionamiento como asesoría internacional, lo que generaba pérdida de credibilidad ante potenciales clientes.
- Era necesario comunicar servicios técnicos complejos (asesoría fiscal, contable, laboral, jurídica) de forma comprensible para personas sin conocimientos específicos del sector.
- El público objetivo era doble: empresas que buscan externalizar obligaciones fiscales, y autónomos que necesitan gestión integral. Ambos perfiles requerían mensajes y CTAs diferenciados.
- Integrar las reseñas reales de Google de forma orgánica en el diseño, sin que pareciera un elemento aislado o forzado.`,
    solution: `- Rediseño completo de la web corporativa en WordPress con un diseño elegante en rojo y blanco que proyecta seriedad y profesionalidad, acorde con el posicionamiento premium del despacho.
- Estructura de contenido que destaca métricas de autoridad en el hero: 22 Partners, +35 años de experiencia, más de 1.500 clientes, generando confianza inmediata.
- Páginas de servicio individuales y detalladas (laboral, fiscal, contable, jurídica) con formularios de solicitud de asesoramiento en cada una, facilitando la conversión segmentada por servicio.
- Sección específica para autónomos con CTA diferenciado y formulario propio, reconociendo a este segmento como un mercado clave con necesidades distintas a las empresas.
- Integración natural del widget de Google Reviews con testimonios reales y calificación "Excelente" dentro del flujo de la página, aportando prueba social sin interrumpir la navegación.
- Blog de noticias y actualidad fiscal/legal para reforzar el SEO y posicionar al despacho como referente en el sector.`,
    tags: ["WordPress"],
    images: ["/portfolio/GPAsoc/1.png", "/portfolio/GPAsoc/2.png", "/portfolio/GPAsoc/3.png", "/portfolio/GPAsoc/4.png", "/portfolio/GPAsoc/5.png"],
    imageCount: 5,
  },
  {
    slug: "granda",
    folder: "Granda",
    title: "Granda — Sistema de gestión de concursos online con autenticación social",
    description: `Plataforma web para organizar concursos y competiciones online. Permite a los usuarios registrarse (con más de 20 proveedores sociales vía HybridAuth), inscribirse en concursos, cumplir objetivos, subir vídeos como evidencia de participación, acumular puntos y consultar clasificaciones automáticas. Incluye panel de administración para gestionar usuarios, concursos y rankings, autenticación por tokens JWT para la API, subida de avatares y una versión extendida con exportación de datos.

Stack: PHP (procedural) + MySQL/MariaDB + HTML5 + CSS3 + JavaScript + HybridAuth (Google, Facebook, Twitter, Discord, GitHub, LinkedIn y 20+ proveedores) + Firebase PHP-JWT + PHPSecLib (criptografía) + FontAwesome + AJAX + Composer.`,
    challenge: `- **Registro lento ahuyenta a participantes**: concursos online dependen de que la inscripción sea trivial.
- **Múltiples plataformas sociales**: audiencia fragmentada entre Google, Facebook, Twitter, Discord, GitHub, LinkedIn, etc.
- **Evidencia de participación**: cumplir objetivos no basta, hace falta probarlo con vídeo.
- **Clasificaciones transparentes**: los usuarios deben poder comprobar su puesto y el cálculo sin dudas.
- **Seguridad**: concursos con premios suelen atraer ataques y cuentas falsas.
- **Administración operativa**: los organizadores necesitan gestionar usuarios, concursos y rankings sin tocar la BD.
- **Versión con exportación de datos**: caso de uso avanzado para análisis posterior al concurso.`,
    solution: `- **HybridAuth** con 20+ proveedores sociales (Google, Facebook, Twitter, Discord, GitHub, LinkedIn, etc.): registro en un clic.
- **Objetivos y metas** configurables por concurso: los participantes cumplen y suman puntos automáticamente.
- **Sistema de puntuación** que asigna puntos por objetivos cumplidos y calcula rankings y leaderboards en tiempo real.
- **Subida de vídeos** como evidencia de participación, vinculada al objetivo cumplido.
- **Perfiles de usuario** con avatar, datos personales y estadísticas propias.
- **Autenticación JWT con Firebase PHP-JWT** para tokens seguros en API (móvil o integraciones externas).
- **Criptografía con PHPSecLib** para operaciones sensibles y firmas.
- **Panel de administración** completo: CRUD de usuarios, CRUD de concursos, gestión de clasificaciones y moderación.
- **Inscripciones con AJAX**: el usuario no abandona la página para inscribirse.
- **Dos versiones** del proyecto: base (\`granda.rar\`, 221 archivos) y extendida CONCURSO (\`granda_CONCURSO.rar\`, 238 archivos) con sistema de exportación de datos para análisis post-concurso.
- **Composer** para gestión de dependencias y mantenimiento.`,
    tags: ["MySQL", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "guipix",
    folder: "Guipix",
    title: "Guipix — Branding Completo e Identidad Visual",
    description: `Proyecto integral de branding y diseño de identidad visual para Guipix, una empresa de fotografía y contenido visual para comercios locales (tiendas, restaurantes, negocios). El encargo abarcó la creación completa del sistema de identidad de marca desde cero: guía de estilo, logotipo con variaciones (horizontal, vertical, monocromo, color), favicon personalizado, tipografía corporativa, kit completo de redes sociales, papelería corporativa (stationery kit) y vídeo promocional de la marca. El proyecto incluyó también planificación de proyecto y propuesta comercial.`,
    challenge: `- Guipix partía de cero en identidad de marca. No tenía logotipo, colores definidos, ni ningún activo visual de marca, lo que hacía necesario construir desde los fundamentos un sistema visual que fuese cohesivo, diferenciador y aplicable a todos los soportes posibles (web, redes sociales, impresión, vídeo).
- El sector de la fotografía para comercios tiene mucha competencia visual. Era necesario crear una identidad que destacase y que la empresa pudiera aplicar de forma consistente y autónoma en su comunicación diaria, sin necesidad de consultar al diseñador para cada nueva pieza.
- El logotipo necesitaba ser versátil: funcionar tanto en formatos digitales (favicon 16x16px, avatar de RRSS) como en soportes impresos (tarjetas, carpetas, sobres) y en fondo oscuro y claro.
- Era fundamental entregar el material en formatos listos para uso inmediato (PNG, SVG, PDF) acompañados de una guía de estilo clara para que el equipo de Guipix pudiese aplicar la marca de forma autónoma y consistente.`,
    solution: `- Desarrollo de sistema de identidad de marca completo con guía de estilo (brand guide) que incluye paleta de colores primaria y secundaria, tipografías corporativas, reglas de uso del logotipo y ejemplos de aplicación correcta e incorrecta.
- Diseño de logotipo con 4+ variaciones (horizontal completo, símbolo solo, versión monocroma oscura, versión monocroma clara) para garantizar que el logotipo funcione en todos los contextos: desde un favicon de 16px hasta un banner de gran formato.
- Kit de redes sociales con plantillas para publicaciones e historias en los formatos estándar de las principales plataformas (Instagram, Facebook), permitiendo al equipo de Guipix crear contenido visual coherente con la marca de forma independiente.
- Stationery kit (papelería corporativa) completo: tarjetas de visita, sobres, carpetas y documentos con membrete, todo con la identidad visual aplicada de forma profesional para fortalecer la percepción de marca en cada interacción física con clientes.
- Vídeo promocional de la marca entregado como herramienta de presentación para que Guipix pudiese mostrarse ante nuevos clientes comerciales con un contenido audiovisual de calidad desde el primer día.`,
    tags: [],
    images: ["/portfolio/Guipix/1.png", "/portfolio/Guipix/2.png", "/portfolio/Guipix/3.png"],
    imageCount: 3,
  },
  {
    slug: "habitatche",
    folder: "Habitatche",
    title: "Habitatche (HJB – Habitat Jove Barcelona)",
    description: `Habitatche es una plataforma web de alquiler de pisos y habitaciones para estudiantes en Barcelona. Conecta a estudiantes universitarios, Erasmus, de máster y doctorado con propietarios que ofrecen alojamiento amueblado y equipado, gestionando más de 1.000 alquileres anuales. La plataforma ofrece búsqueda por mapa y zona, categorías diferenciadas (pisos completos, habitaciones, residencias universitarias, estancias cortas) y soporte multiidioma para atraer también a estudiantes internacionales.`,
    challenge: `- El cliente gestionaba un alto volumen de alquileres de forma mayoritariamente manual o con herramientas dispersas, sin una plataforma centralizada que ofreciese la experiencia visual y funcional que los estudiantes esperan.
- La base de usuarios era muy heterogénea: estudiantes nacionales, Erasmus europeos, estudiantes de máster internacionales. Era necesario dar soporte multiidioma (español, catalán, inglés) sin aumentar la complejidad de gestión del contenido.
- Era crítico atraer también a propietarios para que publicasen sus pisos en la plataforma, por lo que la web debía tener una doble vía de captación: estudiantes y propietarios, con mensajes y acciones completamente distintos.
- Los usuarios de dispositivos móviles representan la mayoría del tráfico en este segmento, por lo que el diseño debía ser impecablemente responsive.`,
    solution: `- Desarrollo de plataforma web en WordPress con plugin de listado de propiedades personalizado, que permite a propietarios y al equipo interno publicar y actualizar pisos con filtros de búsqueda por zona, precio y visualización en mapa.
- Sección de propietarios independiente con CTA diferenciado (email, WhatsApp, formulario) para la captación de nueva oferta de viviendas, manteniendo ambas audiencias (estudiantes y propietarios) dentro de la misma plataforma.
- Implementación de sistema multiidioma (español, catalán, inglés) con cambio de idioma visible y accesible desde cualquier página.
- Integración de logos de universidades y escuelas colaboradoras (UAB, IED, Bell School, Movéo, Euroaula, BTS, etc.) como prueba social para generar confianza en estudiantes internacionales nuevos en Barcelona.
- Diseño mobile-first con fichas de pisos que incluyen foto, precio mensual, código de referencia y barrio, optimizadas para decisiones rápidas desde el móvil.`,
    tags: ["WordPress"],
    images: ["/portfolio/Habitatche/1.png", "/portfolio/Habitatche/2.png", "/portfolio/Habitatche/3.png"],
    imageCount: 3,
  },
  {
    slug: "homeforguest",
    folder: "HomeForGuest",
    title: "Home For Guest",
    description: `Home For Guest es una plataforma de alquiler vacacional que ofrece villas, apartamentos y casas rurales. Funciona como un marketplace completo donde los viajeros buscan y reservan alojamientos vacacionales, y los propietarios publican y gestionan sus propiedades. Con presencia en destinos como Gran Canaria, la plataforma ofrece una experiencia de búsqueda y reserva avanzada —con filtros por tipo de alojamiento, categoría (lujo, vista mar, primera línea de playa), características y capacidad— comparable a las grandes OTAs del sector (Airbnb, Booking).`,
    challenge: `- El cliente dependía de plataformas terceras (Airbnb, Booking) para gestionar sus reservas, pagando comisiones elevadas y sin control sobre la relación directa con el huésped.
- Era necesario replicar la experiencia funcional de las grandes OTAs (buscador potente, fichas detalladas, sistema de valoraciones) pero con una marca propia y sin las limitaciones de los marketplaces externos.
- El sistema de reservas debía integrar un selector de fechas, cálculo de precio en tiempo real y proceso de pago seguro, todo dentro de una plataforma propia.
- Los propietarios necesitaban un panel propio para gestionar sus propiedades de forma autónoma, lo que añadía complejidad a la arquitectura de roles y permisos de la plataforma.`,
    solution: `- Desarrollo de plataforma web completa en WordPress con plugin de reservas y gestión de propiedades personalizado, que elimina la dependencia de marketplaces externos y permite al cliente controlar toda la relación con sus huéspedes.
- Buscador avanzado con filtros multicriteria: tipo de alojamiento (apartahotel, bungalow, cabaña, casa rural, chalet, estudio, finca, villa), categoría (campo de golf, ciudad, lujo, primera línea de playa, vista mar), características (piscina, WiFi, AC) y número de personas.
- Fichas de alojamiento completas con galería de fotos, rating numérico y estrellas, lista de servicios con iconos, y pestañas dedicadas a condiciones, mapa, valoraciones y proceso de reserva directa.
- Panel de propietarios con acceso dedicado para publicar, editar y gestionar propiedades de forma autónoma sin intervención del equipo técnico.
- Sistema de favoritos y área de usuario para mejorar la fidelización y la experiencia de vuelta.`,
    tags: ["WordPress", "Vue"],
    images: ["/portfolio/HomeForGuest/1.png", "/portfolio/HomeForGuest/2.png", "/portfolio/HomeForGuest/3.png"],
    imageCount: 3,
  },
  {
    slug: "impakta-jugadores",
    folder: "impakta-jugadores",
    title: "Impakta — Plataforma de Evaluación de Equipos de Alto Rendimiento",
    description: `Impakta es una plataforma SaaS B2B para consultoras de desarrollo organizacional que permite gestionar la evaluación integral de empresas, equipos y jugadores (personas). El sistema soporta múltiples consultoras, empresas cliente, equipos y roles diferenciados (Administrador Global, Consultor, Administrador de Empresa, Supervisor, Líder de Equipo, Evaluador y Visualizador), con circuitos de evaluación, análisis de cultura y reporting ejecutivo.

Construida con Next.js 16 (App Router) + TypeScript + Prisma (SQLite en dev, preparado para PostgreSQL en producción) + NextAuth + Tailwind CSS v4, usa Chart.js/Recharts para la analítica y jsPDF/xlsx para exportaciones.`,
    challenge: `- **Modelo de permisos complejo**: el sistema requería 7 roles con jerarquía, scoping por empresa y por consultora, y visibilidad cruzada cuando un consultor gestiona varias empresas.
- **Multitenancy blando**: las consultoras gestionan varias empresas, pero los admin de empresa no deben ver datos de otras. Había que separar el scope en todas las consultas.
- **Verificación de email + magic links**: onboarding sin fricción manteniendo la validación de identidad, integrado con Resend.
- **Exportación pesada de informes**: los PDFs con gráficos y tablas requerían generación en cliente sin bloquear la UI.
- **Portabilidad de la base de datos**: se desarrollaba en SQLite pero se desplegaba en PostgreSQL (en despliegue el cliente de Prisma se generaba para Windows y rompía en Linux).`,
    solution: `- **Sistema de roles desacoplado** mediante una tabla \`Rol\` con códigos (\`GLOBAL_ADMIN\`, \`CONSULTOR\`, \`COMPANY_ADMIN\`, \`SUPERVISOR\`, \`TEAM_LEAD\`, \`EVALUATOR\`, \`VIEWER\`) y una pivot \`UserRol\` que permite asignaciones múltiples y scoping por \`companyId\`.
- **Helpers de autorización centralizados** (\`canAccessCompany\`, \`canManageTeams\`, \`canCreateEvaluations\`, etc.) en \`lib/auth.ts\` que se consultan tanto en Server Components como en Route Handlers, evitando fugas de datos.
- **NextAuth con Credentials Provider** + JWT, incluyendo en el token los roles, empresas accesibles, flag de Global Admin y consultorId para evitar round-trips a BD en cada request.
- **Flujos de verificación de email y reset de contraseña** con tokens firmados y envío vía Resend usando plantillas HTML propias.
- **Dashboard analítico** con Chart.js (barras de crecimiento mensual) y Recharts (donut de distribución) alimentado por endpoints agregados con Prisma.
- **Generación de informes PDF** en cliente con jspdf + jspdf-autotable para que el servidor no tenga que render gráficos, y export Excel con \`xlsx\` para equipos que prefieren hoja de cálculo.
- **\`binaryTargets\` en Prisma** con \`debian-openssl-3.0.x\` y \`native\` para evitar el error de runtime al cambiar de plataforma entre dev y producción.
- **Scripts de diagnóstico** (\`diagnose_db.py\`, \`diagnose_server.sh\`) incluidos para depuración rápida en el VPS.`,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    images: ["/portfolio/impakta-jugadores/1.png", "/portfolio/impakta-jugadores/2.png", "/portfolio/impakta-jugadores/3.png", "/portfolio/impakta-jugadores/4.png", "/portfolio/impakta-jugadores/5.png", "/portfolio/impakta-jugadores/6.png", "/portfolio/impakta-jugadores/7.png", "/portfolio/impakta-jugadores/8.png", "/portfolio/impakta-jugadores/9.png", "/portfolio/impakta-jugadores/10.png", "/portfolio/impakta-jugadores/11.png", "/portfolio/impakta-jugadores/12.png", "/portfolio/impakta-jugadores/13.png", "/portfolio/impakta-jugadores/14.png", "/portfolio/impakta-jugadores/15.png"],
    imageCount: 15,
  },
  {
    slug: "intellimarketingai",
    folder: "IntelliMarketingAI",
    title: "IntelliMarketing AI",
    description: `IntelliMarketing AI es la web corporativa de una agencia especializada en servicios de Inteligencia Artificial para empresas. La plataforma presenta su oferta de agentes de IA personalizados, consultoría estratégica, contenido optimizado con IA y diseño web inteligente. El diseño dark/futurista con acentos en púrpura y magenta posiciona a la agencia como partner tecnológico diferencial para la transformación digital de empresas de cualquier sector y tamaño.`,
    challenge: `- El cliente ofrecía servicios de IA complejos y técnicos a un público empresarial que mayoritariamente no tiene conocimientos profundos sobre inteligencia artificial, lo que hacía muy difícil comunicar el valor real de sus servicios de forma clara.
- Era necesario diferenciarse visualmente de las webs corporativas tradicionales del sector tecnológico, que suelen ser genéricas y poco memorables, para transmitir innovación auténtica.
- La agencia era relativamente nueva en el mercado, por lo que necesitaba construir credibilidad desde cero: testimonios, casos de éxito, pruebas de expertise con tecnologías reconocidas (Anthropic, Gemini, Copilot).
- Los servicios de IA son percibidos como abstractos o inaccesibles por muchas empresas, por lo que la web debía traducirlos en beneficios de negocio concretos y tangibles.`,
    solution: `- Diseño dark/futurista con efectos visuales 3D y acentos en púrpura/magenta que rompe con el estándar del sector y genera una primera impresión tecnológica potente, diferenciando a la agencia de sus competidores en el primer scroll.
- Estructura de contenido orientada a resultados de negocio: se prescindió del lenguaje técnico y se tradujo cada servicio en 4 beneficios concretos (reducción de costes, decisiones basadas en datos, escalabilidad sin ampliar plantilla, atención 24/7).
- Integración de logos de tecnologías líderes (Anthropic, Gemini, Copilot, Heygen) en el hero como prueba de expertise técnico, generando credibilidad con marcas reconocidas.
- Sección de casos de éxito con testimonios de clientes reales de sectores distintos, humanizando los servicios y demostrando que la IA es aplicable a cualquier tipo de negocio.
- FAQ interactivo expandible para resolver las objeciones más comunes sin necesidad de contactar con el equipo, reduciendo la fricción antes de la conversión.
- Múltiples CTAs estratégicamente distribuidos (consultoría gratis, explorar agentes de IA, newsletter) para capturar leads en distintos momentos del proceso de decisión.`,
    tags: [],
    images: ["/portfolio/IntelliMarketingAI/1.png", "/portfolio/IntelliMarketingAI/2.png", "/portfolio/IntelliMarketingAI/3.png", "/portfolio/IntelliMarketingAI/4.png", "/portfolio/IntelliMarketingAI/5.png"],
    imageCount: 5,
  },
  {
    slug: "juandashboard",
    folder: "JuanDashboard",
    title: "JuanDashboard — Panel corporativo con RBAC y gestor de medios",
    description: `JuanDashboard es un panel de administración corporativo pensado como plataforma de gestión empresarial interna. Incluye gestión completa de usuarios con CRUD y perfil detallado, sistema RBAC con roles protegidos y permisos asignables individualmente, gestión de sesiones con rastreo de IP/User-Agent y revocación remota, impersonación para soporte, notificaciones in-app con plantillas, gestor de medios con subida drag & drop y conversión automática a WebP, catálogo extenso (20+) de componentes UI y 6 layouts distintos de formulario (Classic, Compact, Grouped, Horizontal, Two Columns, Vertical).

Stack: Laravel 11 (PHP 8.2+) + Inertia.js + React 18 + TypeScript + Tailwind CSS + NextUI v2 + Spatie Laravel Permission + Laravel Sanctum + Lab404 Impersonate + Spatie Media Library + Intervention Image + TipTap Pro + ApexCharts + React Pro Sidebar + Framer Motion + Zustand + React Dropzone + Day.js + Numeral.js. Más de 50 páginas/vistas listas para producción.`,
    challenge: `- **Panel corporativo reutilizable**: base para gestionar usuarios, roles, sesiones y notificaciones sin construir desde cero.
- **Aislar Super Admin y Admin**: los roles críticos no deben poder ser modificados ni eliminados por administradores regulares.
- **Cuentas compartidas/comprometidas**: imposible saber quién y desde dónde está conectado, ni revocar accesos remotos sin cambiar contraseña.
- **Soporte técnico a distancia**: el personal de soporte debía poder "ver" la plataforma con los ojos del usuario afectado.
- **Preferencias por usuario**: ajustes que deben persistir entre dispositivos (tema, densidad, orden de columnas, etc.).
- **Desarrollo de nuevas vistas lento**: sin catálogo de componentes, cada pantalla se rehace desde cero.`,
    solution: `- **Inertia.js + React 18 + TS** sobre Laravel: SPA sin API separada, un único despliegue y tipos compartidos.
- **RBAC con Spatie Permission** (3 roles base: User, Admin, Super Admin) + permisos asignables individualmente y roles protegidos no eliminables.
- **Listado de sesiones activas** por usuario con IP, navegador y última actividad + botón de "cerrar sesión remota".
- **Impersonación** para Super Admins con \`Lab404/Impersonate\`.
- **Notificaciones in-app con plantillas**: creación/edición/eliminación, reutilizables en distintos flujos.
- **Gestor de medios completo** (Spatie Media Library + Intervention Image): subida drag & drop con React Dropzone, conversión a WebP, listado con paginación y borrado.
- **Perfil de 5 secciones editables**: básica, contraseña, datos personales, datos profesionales, eliminar cuenta.
- **Preferencias clave-valor** por usuario, persistidas en BD.
- **Catálogo de 20+ componentes UI** (Accordion, Alerts, Avatar, Breadcrumbs, Buttons, Cards, Chips, Drawer, Dropdown, Image, ListBox, Loading, Modal, Pagination, Popover, Progress, Tabs, Toasts, Tooltips) + 8 tipos de input + WYSIWYG TipTap Pro con drag handle + 6 layouts de formulario + tablas con filtros/paginación + ApexCharts con múltiples visualizaciones.
- **Dos layouts** (Corporate y Executive) intercambiables.
- **Configuración a nivel de organización** para ajustes globales.`,
    tags: ["React", "Laravel", "TypeScript", "Tailwind CSS", "Inertia.js"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "keyrambit",
    folder: "Keyrambit",
    title: "Keyrambit (TodoStore) — Tienda online multicanal",
    description: `Tienda online profesional para Keyrambit (todostore.es), un e-commerce multi-producto construido con WordPress + WooCommerce y el tema premium Motta, especializado en tiendas online. Vende a través de múltiples canales: Google Shopping, Pinterest y TikTok, con herramientas avanzadas de comparación de productos, muestras de variaciones (colores/tallas), lista de deseos y marketing automatizado con Mailchimp y MailPoet.

Stack: WordPress 6.8.1 + WooCommerce + tema Motta + Motta Addons + Elementor + Google Listings & Ads + Pinterest for WooCommerce + TikTok for WooCommerce + Yoast SEO + Jetpack + Mailchimp + MailPoet + Google Site Kit + LiteSpeed Cache + Complianz GDPR + Loco Translate. PHP 7.4 + MariaDB 10.6.`,
    challenge: `- **Dependencia de un solo canal**: vender solo desde la web limita el alcance; Google Shopping, Pinterest y TikTok son canales clave para productos de consumo.
- **Catálogo amplio con variaciones**: productos con color/talla/modelo exigen mostrar swatches, no simples desplegables.
- **Carrito abandonado**: lista de deseos es una forma suave de recuperar al usuario que no compra hoy.
- **Dos herramientas de email marketing**: Mailchimp para campañas masivas + MailPoet para newsletter integrada en el admin de WordPress.
- **Rendimiento y SEO**: sin caché ni optimización, una tienda con cientos de productos es lenta y penaliza en Google.
- **GDPR y multilingüe**: obligatorio para el mercado europeo.`,
    solution: `- **Tema premium Motta + Motta Addons**: diseño optimizado para e-commerce con layouts listos para uso.
- **Integraciones multicanal** con Google Listings & Ads, Pinterest for WooCommerce y TikTok for WooCommerce: el mismo catálogo se sincroniza automáticamente a los tres canales.
- **WCBoost Wishlist** para lista de deseos que permite recuperar usuarios indecisos.
- **Swatches de variaciones** (colores/tallas) para una experiencia de compra visual.
- **Comparador de productos** integrado en el tema.
- **Mailchimp + MailPoet** combinados para cubrir campañas externas y newsletter interna.
- **Jetpack + LiteSpeed Cache** para caché, CDN de imágenes y rendimiento general.
- **Yoast SEO + Google Site Kit** para optimización y analíticas unificadas.
- **Complianz GDPR** para cookies, privacidad y consentimientos.
- **Loco Translate** para gestionar traducciones directamente desde WordPress.
- **27 plugins activos** configurados sin conflictos entre sí en un backup de 605 MB.`,
    tags: ["WordPress", "WooCommerce", "Elementor", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "laaguada",
    folder: "LaAguada",
    title: "LaAguada — Portal de contenidos con SEO avanzado",
    description: `Portal web de contenidos editoriales construido sobre WordPress con el tema ligero GeneratePress, enfocado en publicación de artículos con optimización SEO avanzada, cumplimiento legal GDPR y herramientas de engagement (valoraciones con estrellas, posts relacionados, compartición en redes sociales, gestión publicitaria con Ad Inserter). Incluye indexación rápida en Google vía Fast Indexing API y datos estructurados Schema para rich snippets.

Stack: WordPress 6.7.1 + tema GeneratePress + Yoast SEO + Fast Indexing API + Schema and Structured Data for WP + KK Star Ratings + LiteSpeed Cache + Contact Form 7 + Ajax Search Lite + Ad Inserter + Complianz GDPR + Ultimate Social Media Icons + WP Post Real-Time Statistics. PHP 7.4 + MariaDB 10.6.`,
    challenge: `- **Trafico orgánico dependiente de SEO**: sin buen posicionamiento, un portal de contenidos no se sostiene.
- **Indexación lenta en Google**: artículos nuevos tardaban días en aparecer en resultados.
- **Monetización con publicidad**: necesidad de insertar ads sin romper el layout ni cargar el sitio.
- **Engagement**: que el lector valore, comparta y vea artículos relacionados.
- **Cumplimiento legal**: GDPR, política de cookies, avisos legales.
- **Rendimiento**: portal con muchos artículos y ads debe seguir siendo rápido (Core Web Vitals).
- **Búsqueda interna floja**: la búsqueda nativa de WP es lenta y poco útil.`,
    solution: `- **GeneratePress** como tema base: ultraligero, ideal para SEO y Core Web Vitals.
- **Yoast SEO** para optimización on-page + **Schema and Structured Data for WP** para rich snippets (artículos, breadcrumbs, valoraciones).
- **Fast Indexing API** para pingar a Google cada nuevo artículo y acelerar la indexación.
- **KK Star Ratings**: valoraciones de los artículos por los lectores, visibles en snippets.
- **Intelly Related Posts + Related Posts Thumbnails**: contenido relacionado para aumentar páginas por sesión.
- **Ajax Search Lite**: búsqueda instantánea en tiempo real a medida que se escribe.
- **Ad Inserter**: inserción de anuncios en posiciones estratégicas sin tocar las plantillas.
- **Ultimate Social Media Icons** para compartición en redes sociales.
- **Complianz GDPR**: cookies, privacidad y consentimientos con selector geo.
- **LiteSpeed Cache** combinado con GeneratePress para cargas casi instantáneas.
- **WP Post Real-Time Statistics**: estadísticas de consumo de artículos en tiempo real para decisiones editoriales.
- **18 plugins activos** bien escogidos para cubrir SEO + legal + engagement + rendimiento en un backup de 18.2 GB.`,
    tags: ["WordPress", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "luzdegas",
    folder: "LuzDeGas",
    title: "Luz de Gas",
    description: `Sitio web completo para Luz de Gas, una de las salas de conciertos y clubs nocturnos más icónicos de Barcelona. La web abarca 6 secciones principales: landing page, calendario de eventos, página de ambientes musicales (Moods), información del club, Sala B y About Us. El diseño sigue una estética dark/Art Deco sofisticada con tipografía custom que refleja el carácter premium del venue. La implementación es una Single Page Application (SPA) en React con navegación interna entre páginas sin recarga, construida a partir de un diseño Figma con componentes SVG pixel-perfect exportados directamente del archivo de diseño.`,
    challenge: `- El diseño de Luz de Gas tiene una identidad visual muy específica y reconocible (Art Deco, tipografías únicas, paleta oscura) que debía trasladarse al código de forma pixel-perfect, sin margen para interpretaciones o aproximaciones. Cada tipografía, espaciado y detalle visual era parte de la marca.
- La web incluye un calendario de eventos interactivo con múltiples tipos de eventos (Club Session, Live, Events, Charity Concerts) y filtros por categoría. Implementar este calendario con una UX fluida y visualmente impactante era técnicamente complejo.
- El ecosistema de sub-marcas del grupo (Kovo, La Sobremesa, Mimus, Gaslight, Sala B) necesitaba representación propia dentro de la misma web, con páginas "Moods" dedicadas a cada ambiente musical, sin que la navegación fuese confusa para el usuario.
- Como SPA, la navegación interna entre 6 secciones debía ser completamente fluida y sin recargas, manteniendo el estado del usuario y una transición suave entre páginas.`,
    solution: `- Desarrollo de SPA en React + TypeScript con Vite, implementando un sistema de navegación por estado (\`useState\`) que gestiona la página activa sin React Router ni recarga de página, garantizando transiciones instantáneas.
- Traslado pixel-perfect del diseño Figma con importación directa de componentes SVG del archivo de diseño, preservando al máximo fidelidad con la identidad visual Art Deco de la marca sin depender de recreaciones manuales.
- Implementación del calendario de eventos con vista mensual en grid, categorización visual por tipo de evento (Club Session, Live, Events, Charity Concerts) y sistema de hover que muestra el cartel del evento con enlace directo a compra de entradas.
- Página "Moods" con secciones individuales para cada ambiente musical del club (Mimus, Kovo, La Sobremesa, Gaslight), cada una con tipografía y tratamiento visual propio que refuerza la identidad diferenciada de cada sub-marca dentro del mismo venue.
- Componentes UI accesibles con shadcn/ui + Radix UI para garantizar compatibilidad entre navegadores y accesibilidad, manteniendo la estética dark del diseño sin sacrificar la funcionalidad.`,
    tags: ["React", "TypeScript", "Vite", "shadcn/ui", "Radix UI"],
    images: ["/portfolio/LuzDeGas/1.png", "/portfolio/LuzDeGas/2.png", "/portfolio/LuzDeGas/3.png", "/portfolio/LuzDeGas/4.png", "/portfolio/LuzDeGas/5.png", "/portfolio/LuzDeGas/6.png"],
    imageCount: 6,
  },
  {
    slug: "marinaozean",
    folder: "MarinaOzean",
    title: "Marina Ozean — E-commerce y Portfolio Creativo",
    description: `Diseño web completo para Marina Ozean, un e-commerce de productos creativos y de diseño con componente de portfolio visual. El proyecto incluye mockups desktop y responsive completamente detallados, diseño de menú lateral animado y propuesta comercial. La web combina tienda online con vitrina de portfolio, presentando los productos con una estética colorida y moderna. Incluye secciones de productos populares, valoraciones de clientes y formulario de contacto.`,
    challenge: `- Marina Ozean necesitaba una plataforma que funcionase simultáneamente como tienda online y como portfolio creativo, lo cual requería equilibrar la funcionalidad de e-commerce (fichas de producto, carrito, proceso de compra) con la expresividad visual de un portfolio de diseño, sin que uno absorbiera al otro.
- El público objetivo de la marca —personas creativas y amantes del diseño— exigía una estética muy cuidada y diferente al e-commerce convencional, con colores vivos, composiciones atrevidas y fotografía de producto de alta calidad integrada en el diseño.
- La navegación debía ser intuitiva en desktop pero también funcionar perfectamente en móvil, donde el menú lateral animado debía adaptarse sin perder el carácter estético de la versión de escritorio.
- Era necesario mostrar que el sitio tenía valoraciones y clientes satisfechos desde el primer momento, incluso en fase de diseño, para planificar estos elementos como parte de la estructura y no como añadidos posteriores.`,
    solution: `- Hero section con grid de bloques de colores vibrantes (rosa, azul, verde, amarillo) que enmarcan fotografías de producto de moda, creando un primer impacto visual impactante que comunica inmediatamente el posicionamiento creativo de la marca.
- Menú lateral animado con efecto slide-over en rosa que permite navegar por las secciones principales (Inicio, Portfolio, Productos, Valoraciones, Contacto) sin salir de la página, manteniendo la inmersión en la experiencia visual de la web.
- Layout responsive diseñado desde el inicio en versión desktop y móvil simultáneamente, con el grid de productos reorganizándose verticalmente en pantallas pequeñas sin perder la estética colorida de la versión de escritorio.
- Integración de sección "Clientes satisfechos" con estructura de testimonios planificada en el diseño desde el inicio, asegurando que la prueba social forme parte orgánica de la experiencia y no sea un elemento añadido.
- Formulario de contacto "Déjanos un mensaje" como alternativa al proceso de compra online para clientes que prefieren un trato más personalizado antes de comprar.`,
    tags: [],
    images: ["/portfolio/MarinaOzean/1.png", "/portfolio/MarinaOzean/2.png"],
    imageCount: 2,
  },
  {
    slug: "mcortes",
    folder: "MCortes",
    title: "MCORTÉS",
    description: `MCORTÉS es un e-commerce de moda de lujo especializado en bolsos y accesorios de piel artesanales fabricados en su propio atelier. La tienda online presenta las colecciones de la firma con una estética minimalista y premium que refleja la exclusividad de sus productos hechos a mano. El diseño tipo galería de arte, con fotografía editorial integrada y selector de colores visual, ofrece una experiencia de compra acorde al posicionamiento de lujo de la marca.`,
    challenge: `- Los e-commerce convencionales no estaban a la altura del posicionamiento de lujo de MCORTÉS: la mayoría de plantillas y soluciones estándar priorizan la cantidad de productos sobre la experiencia visual, lo cual es incompatible con una marca de autor que vende exclusividad.
- Los productos de piel artesanales tienen muchos detalles que solo se aprecian en fotografía de alta calidad y desde múltiples ángulos. Era necesario un diseño que pusiese la fotografía en el centro sin saturar el espacio.
- La firma vendía a un público internacional, especialmente hispanohablante, y necesitaba soporte multiidioma sin que ello complicase la gestión del catálogo.
- Los compradores de lujo online son especialmente exigentes con la información sobre materiales, origen y proceso de fabricación: la ficha de producto debía incluir secciones de trazabilidad y detalles del proceso artesanal sin recargar el diseño.`,
    solution: `- Desarrollo de e-commerce con diseño minimalista tipo lookbook: fondo blanco, tipografía elegante y espacio en blanco generoso que pone el foco absoluto en el producto, siguiendo los principios estéticos de las grandes casas de moda.
- Fichas de producto con galería múltiple de imágenes (producto sobre fondo blanco + fotografía editorial con modelo en contexto) para mostrar el artículo tanto desde una perspectiva de producto puro como en uso real.
- Selector de colores visual mediante swatches físicos (beige, púrpura, marrón, azul, verde, etc.) para que el cliente elija variante sin necesidad de ver imágenes adicionales, reduciendo la fricción en la selección.
- Secciones expandibles en la ficha de producto organizadas por información: descripción, detalles técnicos, trazabilidad del proceso artesanal, y política de envíos y devoluciones, permitiendo al comprador encontrar exactamente lo que busca sin sobrecargar la vista por defecto.
- Landing page editorial a pantalla completa con lookbook estilo revista de moda de lujo para las temporadas de nueva colección.`,
    tags: [],
    images: ["/portfolio/MCortes/1.png", "/portfolio/MCortes/2.png", "/portfolio/MCortes/3.png", "/portfolio/MCortes/4.png"],
    imageCount: 4,
  },
  {
    slug: "mitravia",
    folder: "MiTravia",
    title: "MiTravia — Portal multilingüe con SEO e importación masiva",
    description: `Portal web multilingüe construido sobre WordPress con el tema Astra, optimizado para rendimiento, SEO y volúmenes grandes de contenido. Soporta múltiples idiomas con selector de banderas, incluye SEO avanzado con Yoast (importable/exportable entre instalaciones), importación masiva de datos con WP All Import, compresión automática de imágenes con WP Smush, gestión profesional de redirecciones, protección anti fuerza bruta con Loginizer y caché con LiteSpeed.

Stack: WordPress 6.0.3 + tema Astra + Yoast SEO + Yoast SEO Settings Import/Export + Language Icons Flags Switcher + WP All Import + WP Smush + Redirection + LiteSpeed Cache + Loginizer + Contact Form 7 + Magic Post Thumbnail + Fast Indexing API + Intelly Related Posts + Ajax Search Lite + Delete Duplicate Posts. PHP 7.4 + MariaDB 10.5.`,
    challenge: `- **Contenido en varios idiomas**: audiencia internacional que cambia de idioma con frecuencia.
- **Miles de artículos a importar** desde fuentes externas (CSV/XML), inviable a mano.
- **Imágenes sin optimizar** consumían banda y degradaban rendimiento.
- **Cambios de URL** tras migraciones rompían SEO si no se redirigían.
- **Ataques de fuerza bruta** constantes contra \`/wp-login.php\`.
- **Miniaturas destacadas** faltaban en muchos posts importados.
- **Duplicados** generados por imports sucesivos.
- **Indexación lenta** y necesidad de buscar internamente de forma ágil.`,
    solution: `- **Astra** como tema base por su rendimiento excepcional y compatibilidad amplia.
- **Language Icons Flags Switcher**: selector multilingüe visual con banderas.
- **Yoast SEO + Settings Import/Export**: optimización on-page y poder replicar la configuración SEO entre entornos (staging/producción) en un clic.
- **WP All Import**: importaciones masivas desde CSV/XML con mapeo visual de campos y previsualización.
- **WP Smush**: compresión automática de imágenes en subida, con conversión a WebP.
- **Magic Post Thumbnail**: miniatura destacada automática para posts sin imagen (busca la primera imagen del contenido o usa fallback).
- **Redirection**: gestión de redirecciones 301/302 con detección automática de 404.
- **Fast Indexing API**: ping a Google al publicar para indexación rápida.
- **Intelly Related Posts + Ajax Search Lite**: engagement y búsqueda instantánea.
- **Delete Duplicate Posts**: limpieza automática de duplicados generados por imports.
- **Loginizer** protege \`/wp-login.php\` contra ataques de fuerza bruta.
- **LiteSpeed Cache** con optimización móvil y WebP.
- **19 plugins activos** cuidadosamente combinados en un backup de 14.3 GB.`,
    tags: ["WordPress", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "mundoctor",
    folder: "Mundoctor",
    title: "Mundoctor — Plataforma de salud digital HIPAA-compliant",
    description: `Plataforma SaaS multi-rol que conecta pacientes con profesionales sanitarios. Tres paneles diferenciados (pacientes, profesionales, administradores), búsqueda avanzada con geolocalización, reservas de citas con verificación de disponibilidad en tiempo real vía Socket.io, procesamiento de pagos y suscripciones con Stripe, notificaciones multicanal (email, SMS, WebSocket), sistema de reseñas, pipeline de validación de credenciales médicas y cumplimiento HIPAA con audit logging de 6 años, encriptación y monitorización de seguridad.

Stack:
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + Radix UI + React Router + Socket.io Client.
- **Backend**: Node.js 20 + Express.js + PostgreSQL (connection pooling) + Socket.io + Clerk (auth + RBAC con webhooks) + Stripe + Twilio (SMS) + Nodemailer + Zod.
- **Infraestructura**: Docker + Docker Compose + Nginx (reverse proxy) + Traefik (load balancer) + Redis (cache).`,
    challenge: `- **Pacientes sin buscador decente**: directorios médicos anticuados, sin filtros por especialidad/ubicación/valoración/precio.
- **Reservas duplicadas**: dos pacientes cogiendo el mismo hueco porque la disponibilidad se consultaba contra cache desactualizada.
- **Validación de credenciales médicas**: recibir un profesional dado de alta sin verificar licencias es un riesgo legal y reputacional.
- **Pagos y suscripciones**: comisiones por cita + planes mensuales Premium, más reembolsos y disputas.
- **Notificaciones fiables**: recordatorios de cita deben llegar por SMS si el email no se lee.
- **HIPAA**: datos médicos obligan a audit trails, encriptación, retención y monitorización de accesos.
- **Moderación de contenido**: reseñas falsas, denuncias de abuso, contenido sensible en perfiles.`,
    solution: `- **Clerk** como proveedor de autenticación + RBAC con sincronización en tiempo real vía webhooks — el backend siempre tiene datos frescos de usuarios y roles.
- **Búsqueda avanzada** con filtros combinables (especialidad, ubicación, valoración, precio, disponibilidad) y geolocalización.
- **Socket.io** para comprobar disponibilidad en tiempo real y bloquear el slot mientras un paciente está cerrando la reserva, evitando dobles bookings.
- **Pipeline de validación** de credenciales: subida de documentos → revisión por admin → aprobación/rechazo con motivo → activación del perfil para reservas.
- **Stripe** para cobros de cita + suscripciones (Free, Basic, Premium, Enterprise) + comisiones + reembolsos + disputas.
- **Twilio (SMS) + Nodemailer (email) + Socket.io (in-app)** para notificaciones multicanal (recordatorio de cita 24h antes, confirmaciones, cancelaciones).
- **Cumplimiento HIPAA**: audit logs con retención 6 años, encriptación en tránsito y en reposo, políticas de retención, monitorización de seguridad, detección de amenazas y eventos de seguridad.
- **Panel de admin** con: CRUD de usuarios y roles, pipeline de validación, analíticas de plataforma (crecimiento, ingresos, rendimiento), tickets de soporte con prioridad, moderación de reseñas/reportes, gestión financiera (pagos, disputas, reembolsos), seguimiento de comisiones y monitor de seguridad.
- **Panel de profesional**: perfil completo (educación, experiencia, especializaciones), agenda con horarios/descansos/festivos/excepciones, servicios con precios y duración, dashboard de ingresos y estadísticas, respuesta a reseñas, gestión de suscripción.
- **Panel de paciente**: búsqueda, reserva, historial médico (alergias, medicamentos, condiciones), reseñas con votación de utilidad, favoritos, historial de citas, contactos de emergencia y datos de seguro.
- **Infraestructura contenedorizada** con Docker Compose + Nginx + Traefik + Redis.`,
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    images: ["/portfolio/Mundoctor/1.png", "/portfolio/Mundoctor/2.png", "/portfolio/Mundoctor/3.png", "/portfolio/Mundoctor/4.png", "/portfolio/Mundoctor/5.png", "/portfolio/Mundoctor/6.png", "/portfolio/Mundoctor/7.png", "/portfolio/Mundoctor/8.png", "/portfolio/Mundoctor/9.png", "/portfolio/Mundoctor/10.png", "/portfolio/Mundoctor/11.png", "/portfolio/Mundoctor/12.png", "/portfolio/Mundoctor/13.png", "/portfolio/Mundoctor/14.png", "/portfolio/Mundoctor/15.png", "/portfolio/Mundoctor/16.png"],
    imageCount: 16,
  },
  {
    slug: "naturterapies",
    folder: "NaturTerapies",
    title: "NaturTerapies — Web para consulta de psicología y terapias naturales",
    description: `Sitio web profesional para una consulta de psicología y terapias naturales, construido sobre WordPress con el tema especializado Mindthera (Psychology & Counseling Theme) y un child theme personalizado. Presenta los servicios terapéuticos con una estética calmada y profesional (paleta verde/natural), navegación avanzada con mega-menu, formularios de captación de clientes con Fluent Form y un diseño completamente editable con Elementor.

Stack: WordPress 6.7.1 + tema Mindthera + Child Theme + Elementor + Fluent Form + RT Mega Menu + RT Elements + Redux Framework + Breadcrumb NavXT. PHP 7.4+ + MySQL/MariaDB.`,
    challenge: `- **Confianza en el sector de salud mental**: el diseño debe transmitir serenidad y profesionalidad, no un gimnasio o una clínica estéril.
- **Captación de clientes**: el visitante suele estar en un momento delicado, los formularios deben ser sencillos y cálidos.
- **Navegación con muchos servicios** (psicología, terapias naturales, talleres, contacto): sin mega-menu se pierde.
- **Cliente no técnico**: la terapeuta debe poder actualizar contenidos sin tocar código.
- **Identidad visual coherente**: colores, tipografías e imágenes alineadas con el mensaje terapéutico.
- **Mobile-first**: muchos usuarios entran desde Instagram y Google en móvil.`,
    solution: `- **Tema Mindthera** + Child Theme: diseñado específicamente para psicología y counseling, con layouts, iconografía y paleta listas para el sector (se personaliza sin perder actualizaciones del padre).
- **Paleta verde/natural** reforzando la identidad "terapias naturales" con imágenes de bienestar y bodegones suaves.
- **Elementor** para que la terapeuta edite páginas visualmente (servicios, precios, sobre mí, blog) sin tocar código.
- **Fluent Form** para captación de clientes: formularios cálidos con validación en tiempo real, campos mínimos imprescindibles y emails de confirmación automáticos.
- **RT Mega Menu + RT Elements** para menú desplegable con varias columnas, ideal para listar servicios y categorías de terapias.
- **Breadcrumb NavXT** para migas de pan en categorías de blog y subpáginas, mejorando la UX y el SEO.
- **Redux Framework** para opciones del tema (colores, tipografías, layout) gestionadas desde el admin.
- **Diseño responsive** optimizado para móvil (el canal principal de entrada).
- **Demo importable** del tema para configurar la web rápidamente y luego personalizar.
- **245+ archivos multimedia** organizados (fotos de sesiones, logos, iconografía).`,
    tags: ["WordPress", "MySQL", "Elementor", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "netissim",
    folder: "Netissim",
    title: "Netissim — Web corporativa multilingüe",
    description: `Sitio web corporativo para Netissim (netissim.es), multilingüe (español, gallego y portugués) con Polylang, construido sobre WordPress con Elementor como constructor visual. Incluye optimización SEO con Yoast, formularios profesionales con WPForms, seguimiento de emails enviados por el sitio, CTA de llamada directa con Call Now Button, protección anti-spam con SI Captcha y gestión de traducciones con Loco Translate.

Stack: WordPress + Elementor + Polylang + Loco Translate + Yoast SEO + WPForms + Email Log + SI Captcha + Call Now Button + Duplicate Page.`,
    challenge: `- **Tres mercados lingüísticos** (España, Galicia, Portugal): clientes potenciales esperan leer el sitio en su idioma.
- **Cliente no técnico**: debe poder actualizar contenidos y traducir sin depender de desarrollo.
- **Emails de formularios perdidos**: consultas importantes se quedaban en spam o sin rastro.
- **Tráfico móvil pide llamada directa**: muchos visitantes prefieren llamar antes que rellenar un formulario.
- **Spam en formularios**: bots rellenando contacto constantemente.
- **SEO en tres idiomas** sin duplicar contenido ni canibalizar keywords.`,
    solution: `- **Polylang** para multilingüe real (URLs por idioma, contenido traducido, meta-tags independientes por idioma) combinado con **Loco Translate** para traducir strings de tema y plugins sin modificar archivos de código.
- **Elementor** como constructor de páginas editable por el cliente.
- **Yoast SEO** configurado por idioma para evitar canibalización y generar sitemaps separados.
- **WPForms** para formularios profesionales con validación y confirmaciones.
- **Email Log** para trazabilidad total: cada email enviado por el sitio queda registrado y se puede reenviar/verificar si el cliente dice "no me ha llegado".
- **Call Now Button**: botón flotante en móvil que llama directamente al teléfono de la empresa con un tap.
- **SI Captcha** en formularios para bloquear spam de bots manteniendo UX fluida.
- **Duplicate Page** para acelerar la creación de páginas similares en los tres idiomas.
- **CTAs por idioma**: llamadas a la acción traducidas, no simple switch de idioma.`,
    tags: ["WordPress", "Elementor"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "nexingenieria",
    folder: "NexIngenieria",
    title: "NEX Ingeniería Consultant S.L.",
    description: `Web corporativa para NEX Ingeniería Consultant S.L., empresa especializada en seguridad industrial, homologación de vehículos y gestión de licencias y actividades. Con más de 25 años de experiencia, 2.520 proyectos realizados y 1.425 clientes, es una de las pocas empresas acreditadas por ENAC en su ámbito. El diseño dark premium con animación 3D en el hero y acentos dorados transmite la seriedad técnica e innovación que caracteriza a la firma, mientras que la estructura de contenido facilita la solicitud de presupuesto a través de formularios por área de servicio.`,
    challenge: `- La web anterior de NEX Ingeniería no transmitía la solvencia técnica de una empresa con más de 25 años y acreditaciones de organismos como ENAC y UCA, lo que generaba desconfianza ante nuevos clientes que llegan por búsqueda online.
- Los servicios de ingeniería industrial (Marcado CE, homologaciones, inspecciones) son técnicamente complejos y variados. Comunicarlos de forma clara y organizada sin abrumar al visitante era un reto mayor.
- La empresa necesitaba diferenciarse visualmente del estándar del sector de la ingeniería industrial, que suele tener webs anticuadas y poco atractivas, para proyectar modernidad e innovación.
- Era necesario mostrar las acreditaciones oficiales (ENAC, UCA) de forma prominente, ya que son una ventaja competitiva clave que muy pocos competidores tienen, pero hacerlo sin que el diseño se volviera un catálogo de logos sin coherencia.`,
    solution: `- Diseño dark premium con detalles dorados y animación 3D de malla de puntos en el hero, que diferencia a NEX Ingeniería del estándar del sector y proyecta innovación técnica de alto nivel.
- Arquitectura de contenido por áreas de servicio claramente diferenciadas: Seguridad Industrial (Marcado CE, Certificación R.D. 1215/1997, inspección de plataformas, estanterías, hinchables) y Homologación de Vehículos, con cards expandibles para cada servicio dentro de cada área.
- Sección de acreditaciones oficiales con logos verificables de ENAC y UCA integrada de forma natural en el flujo de la página, inmediatamente después de las métricas de impacto (25 años, 2.520 proyectos), maximizando la percepción de autoridad.
- Cifras de impacto animadas (21 años, 2.520 proyectos, 1.425 clientes) con fotografía real del equipo completo para combinar datos de confianza con humanidad y cercanía.
- CTA de "Solicitar presupuesto sin compromiso" con formulario propio para cada área de servicio, reduciendo la fricción en la conversión y permitiendo al equipo recibir consultas segmentadas por tipo de proyecto.`,
    tags: [],
    images: ["/portfolio/NexIngenieria/1.png", "/portfolio/NexIngenieria/2.png", "/portfolio/NexIngenieria/3.png", "/portfolio/NexIngenieria/4.png", "/portfolio/NexIngenieria/5.png"],
    imageCount: 5,
  },
  {
    slug: "odda",
    folder: "Odda",
    title: "Odda — Sistema integral de gestión médica y clínica",
    description: `Sistema integral de gestión médica construido con Symfony 7.2 para una clínica. Gestiona citas, historiales de pacientes, tratamientos, servicios, facturación, reportes médicos y comunicación automatizada por email. Incluye dashboards diferenciados por rol (admin, doctor, administrativo, marketing, paciente), calendario visual de citas con FullCalendar, analíticas con 15+ tipos de gráficos ApexCharts, emails transaccionales en español (bienvenida, citas agendadas, recordatorios), sistema de fidelización con puntos, newsletter, subida de documentos médicos y verificación de email con reset de contraseña seguro.

Stack: Symfony 7.2 (PHP 8.2+) + PostgreSQL vía Doctrine ORM + Migrations + Twig (templates + emails) + Bootstrap 5 + Stimulus.js + FullCalendar + ApexCharts (15+ tipos) + CKEditor + Leaflet/Google Maps + Choices.js + Symfony Mailer + Symfony Security Bundle (auth + RBAC) + Docker Compose + Swiper. 12 entidades (User, Report, Service, Treatment, Invoice, Orders, Prize, Newsletter, Files, etc.).`,
    challenge: `- **Cinco roles con necesidades distintas** (admin, doctor, administrativo, marketing, paciente): cada uno ve la app completamente diferente.
- **Citas solapadas o perdidas**: agendas manuales en papel o Excel generaban conflictos y huecos.
- **Comunicación con pacientes**: recordatorios manuales por email/SMS eran inviables con volumen alto.
- **Historiales médicos en papel**: imposible buscar, compartir o respaldar.
- **Fidelización**: pacientes privados necesitan incentivos para volver y recomendar.
- **Facturación integrada** con el resto del sistema, no en una herramienta aparte.
- **Analíticas del negocio** por doctor, servicio y periodo.
- **Cumplimiento normativo**: verificación de email, reset seguro, documentos protegidos.`,
    solution: `- **Symfony 7.2 + Doctrine ORM + PostgreSQL**: stack empresarial sólido con migraciones versionadas para evolución de esquema.
- **RBAC con Symfony Security Bundle** + 5 roles con dashboards personalizados, cada uno con vistas y permisos propios.
- **FullCalendar** para gestión visual de citas: arrastrar, redimensionar, crear de un clic. Evita solapamientos con validación en backend.
- **Emails transaccionales con Symfony Mailer + Twig** en español: bienvenida, cita agendada, recordatorio previo a la visita, reset de contraseña, verificación de email.
- **Historiales médicos** como entidad \`Report\` con diagnósticos, notas, subida de documentos (\`Files\`) y búsqueda.
- **Sistema de fidelización con puntos** (\`Prize\`): pacientes acumulan por citas cumplidas y canjean por descuentos.
- **Facturación integrada** (\`Invoice\`) ligada a servicios y tratamientos con flujo de cobro y reportes.
- **Catálogo de servicios y tratamientos** con CRUD completo.
- **15+ gráficos ApexCharts** para analíticas: ingresos por doctor, distribución de servicios, ocupación de agenda, nuevos pacientes, retención.
- **Verificación de email** obligatoria + flujo seguro de reset de contraseña.
- **Newsletter** con suscripción/desuscripción y campañas.
- **12 entidades** cubriendo todos los dominios (usuarios, reportes, servicios, tratamientos, facturas, pedidos, premios, newsletter, archivos).
- **Frontend con Bootstrap 5 + Stimulus.js** (progressive enhancement sobre Symfony, sin SPA compleja).
- **CKEditor** para redactar diagnósticos y notas clínicas con formato.
- **Leaflet/Google Maps** para ubicaciones de sedes.
- **Choices.js** para selectores avanzados.
- **Swiper** para carruseles.
- **Docker Compose** para despliegue reproducible.
- **Dos snapshots del proyecto**: \`odda.zip\` (58 MB, inicial) y \`odda.garaywebs.com.zip\` (259 MB, producción) con 19.156 archivos, 11 controladores y 130+ templates Twig.`,
    tags: ["PostgreSQL", "Docker", "Symfony", "Bootstrap", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "onplay",
    folder: "Onplay",
    title: "Onplay — Reservas y streaming de partidos de fútbol en clubes",
    description: `Onplay es una plataforma SaaS para clubes y complejos deportivos que permite a los jugadores reservar canchas de fútbol, ver los partidos grabados de sus propias sesiones (con highlights automáticos) y gestionar su agenda. Para el gestor del club ofrece administración de canchas, franjas horarias, precios y un panel de reservas agendadas.

Stack: React 18 + Vite + React Router v6 + Tailwind CSS + Radix UI + shadcn/ui + Framer Motion + Supabase JS (cliente preparado) y autenticación en \`AuthContext\` sobre \`localStorage\`. Incluye \`embla-carousel-react\` para los sliders de partidos destacados y \`date-fns\` para gestión de fechas y disponibilidad.`,
    challenge: `- **Reserva sin información real** de disponibilidad: los usuarios reservaban cancha por WhatsApp y se duplicaban huecos.
- **Dos experiencias distintas**: el usuario necesita reservar rápido y ver sus partidos; el admin del club necesita ver/gestionar TODO. Mezclar las vistas generaba ruido.
- **Partidos grabados pesados**: cada sesión puede generar vídeos largos y clips que deben asociarse al partido correcto y al usuario que reservó.
- **Modelo de precios variable**: tarifas por franja horaria (mañana/noche), día de la semana y duración, difícil de modelar con una tabla plana.
- **Onboarding fácil**: la mayoría de usuarios no son técnicos, así que signup y login tenían que ser triviales y consistentes.`,
    solution: `- **Dos vistas separadas de canchas**: \`/campos-disponibles\` solo lista para usuarios, \`/campos-de-futbol\` con filtros y acciones administrativas (edit/delete) para el admin. Misma base de datos, distinto UX.
- **Guards de ruta** (\`RequireAuth\`, \`PublicOnlyRoute\`, \`AdminRoute\`) que envuelven cada \`Route\`, evitando lógica duplicada y manteniendo la URL intentada para redirigir tras login.
- **Reservas agendadas** como vista principal del usuario logueado, con cards que muestran cancha, fecha, hora, precio y acciones.
- **Página \`/matches\`** con carrusel (embla) para los partidos destacados y \`/matches/:matchId\` con detalle, highlights y descarga.
- **Sistema de precios por franjas** modelado como un objeto por cancha con tarifas \`manana/tarde/noche\` + multiplicadores por día. \`PricingPage\` permite ajustarlo visualmente.
- **AuthContext con rol** (user/admin) y tres usuarios demo sembrados en \`localStorage\` en el primer arranque (\`demo@onplay.com\`, \`admin@onplay.com\`, \`admin@test.com\`), cómodo para demos y tests.
- **Tema oscuro** por defecto con acentos verde/amarillo, alineado con la iconografía del fútbol, y layout responsivo que funciona en móvil (el caso de uso primario).
- **Formularios sin fricción** con Radix primitives estilados con shadcn/ui: placeholders claros, validación en tiempo real con Zod + react-hook-form y feedback vía Toaster.
- **Cliente de Supabase preparado** para migrar de localStorage a persistencia real, manteniendo la misma API.`,
    tags: ["React", "Vue", "Tailwind CSS", "Supabase", "Vite"],
    images: ["/portfolio/Onplay/1.png", "/portfolio/Onplay/2.png"],
    imageCount: 2,
  },
  {
    slug: "osasuncbs",
    folder: "OsasunCBS",
    title: "Ösasun CBD",
    description: `Ösasun es la primera empresa de CBD en el País Vasco, con 7 tiendas físicas en Euskal Herria (Bilbao, Getxo, Barakaldo, Donostia, Laudio, Errenteria, Basauri) y una tienda online. La plataforma web unifica su presencia digital como e-commerce completo (aceites, cremas, flores, resinas) y escaparate de su red de tiendas físicas. El diseño diferenciador con ilustraciones artísticas orgánicas rompe completamente con la estética habitual del sector CBD, transmitiendo bienestar y naturalidad sin connotaciones negativas.`,
    challenge: `- El sector CBD en España tenía en 2020 una reputación ambigua ante el consumidor general. Era necesario construir una imagen de marca que transmitiese profesionalidad, bienestar y naturalidad sin generar rechazo ni asociaciones negativas en un público no familiarizado con el producto.
- El cliente operaba tanto online como en 7 tiendas físicas, y ambos canales necesitaban representación clara en la web para que los usuarios pudiesen elegir su modo preferido de compra sin confusión.
- La categoría CBD tiene restricciones publicitarias en muchas plataformas, lo que hace que la web y el blog educativo sean la principal herramienta de captación orgánica. Era crucial tener un blog de contenido (CBD News) que generase tráfico SEO cualificado.
- La conversión inicial de visitantes en compradores es especialmente difícil en el sector CBD, ya que muchos usuarios llegan con dudas sobre la legalidad, calidad y beneficios del producto.`,
    solution: `- Diseño completamente diferenciador con ilustraciones artísticas de formas orgánicas coloridas (calabaza, aguacate, aloe, frutas) que asocian visualmente el CBD con la naturaleza, la salud y el bienestar, alejando al máximo la web de los estereotipos del sector.
- Popup de captación de email con oferta de 30% de descuento en el primer pedido, activado a la llegada del usuario, para convertir visitantes nuevos en compradores con el mínimo riesgo percibido posible.
- Directorio de las 7 tiendas físicas con fotos reales de cada local, dirección completa y enlace directo a ubicación en maps, para que los clientes locales puedan visitar la tienda más cercana con toda la información en un clic.
- Integración de carrusel de reseñas reales de Google dentro del flujo principal de la landing, aportando prueba social de calidad de producto y atención al cliente que es crítica en un sector con alta desconfianza inicial.
- Blog educativo (CBD News) con artículos sobre cannabis y bienestar para generar tráfico orgánico por búsquedas informativas y posicionar a Ösasun como referente educativo del sector, no solo como tienda.`,
    tags: [],
    images: ["/portfolio/OsasunCBS/1.png", "/portfolio/OsasunCBS/2.png", "/portfolio/OsasunCBS/3.png", "/portfolio/OsasunCBS/4.png", "/portfolio/OsasunCBS/5.png"],
    imageCount: 5,
  },
  {
    slug: "padelprofi",
    folder: "PadelProfi",
    title: "Padel Profi Deutschland",
    description: `Padel Profi Deutschland es un e-commerce especializado en equipamiento de pádel para el mercado alemán. Ofrece un catálogo completo de palas, pelotas, zapatillas, paleteros y accesorios de marcas líderes (Adidas, NOX, Bullpadel, Head), con envío y devolución gratuitos, pago seguro y asesoramiento técnico profesional. La tienda se posiciona como referente en un mercado —el pádel alemán— que está en plena fase de crecimiento, con una experiencia de compra que combina la confianza del rating de Google con el asesoramiento de expertos en el deporte.`,
    challenge: `- El pádel en Alemania estaba en una fase de despegue en el momento del proyecto. Los compradores eran mayoritariamente nuevos en el deporte y necesitaban orientación técnica en la elección de equipamiento, algo que un e-commerce genérico no podía ofrecer.
- El catálogo de palas tiene una enorme variedad de características técnicas (formato, balance, gama, material del marco, forma) que son incomprensibles para un jugador principiante y que dificultaban la decisión de compra si no se filtraban y explicaban bien.
- El mercado alemán es especialmente exigente con la transparencia en políticas de envío, devolución y garantía. Era imprescindible comunicar estas condiciones de forma prominente y clara para generar confianza en una tienda nueva.
- Construir credibilidad y prueba social para una tienda nueva sin historial de reseñas propio.`,
    solution: `- Sistema de categorización por nivel de juego (principiante, intermedio, avanzado) superpuesto al catálogo de productos, para que cualquier comprador —independientemente de su experiencia— pueda filtrar directamente los productos adecuados para él sin necesidad de entender las especificaciones técnicas.
- Filtrado avanzado multicriteria en el catálogo: marca, color, gama, categoría de material, formato, forma, peso, género, tipo de juego y rango de precio. Cada filtro está diseñado para el tipo de búsqueda que haría un jugador real.
- Barra de beneficios persistente en el header (Envío Gratis, Devolución Gratis, Pago Seguro, Asesoramiento Profesional) visible en todas las páginas del proceso de compra, minimizando las objeciones más comunes antes de llegar al checkout.
- Rating de Google "Ausgezeichnet" (Excelente) integrado en el hero de la landing como primer elemento de credibilidad, usando reseñas externas verificables para compensar la falta de historial propio de la tienda.
- Fichas de producto con descripción técnica completa, múltiples imágenes, plazo de entrega estimado y sección de reseñas de producto, para que el comprador tenga toda la información necesaria antes de añadir al carrito.`,
    tags: [],
    images: ["/portfolio/PadelProfi/1.png", "/portfolio/PadelProfi/2.png", "/portfolio/PadelProfi/3.png", "/portfolio/PadelProfi/4.png", "/portfolio/PadelProfi/5.png"],
    imageCount: 5,
  },
  {
    slug: "pecadocarnal",
    folder: "PecadoCarnal",
    title: "PecadoCarnal (Agritek) — ERP multi-almacén para cadena de restaurantes",
    description: `Agritek es la plataforma interna de gestión de inventario, compras y administración para el grupo de restaurantes "Pecado Carnal". Es un ERP SaaS multi-tenant orientado a hostelería que permite llevar control de stock en varios almacenes, digitalizar facturas y albaranes con OCR, generar pedidos automáticos cuando un producto cae por debajo del mínimo, escandallar recetas, conciliar gastos y gestionar al personal y las incidencias del día a día del restaurante.

Stack: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui + Radix UI + TanStack Table + React Hook Form + Zod + Supabase (Auth/Postgres/Storage/RLS) + OpenAI Vision (GPT-4o) para OCR de documentos + Resend para envío de correos + generación de PDFs para pedidos. Todo el dato se aísla por \`organization_id\` vía RLS y tres roles (basic/intermediate/manager) filtran la navegación.`,
    challenge: `- **Control de stock caótico en varios almacenes**: cada local hacía su propio conteo, productos duplicados con nombres distintos y mermas imposibles de rastrear.
- **Facturas en papel**: el equipo dedicaba horas a transcribir facturas y albaranes, con errores en IVA (4%/10%/21%) y en los totales.
- **Pedidos a proveedor reactivos**: se pedía cuando "faltaba", generando roturas de stock y compras urgentes más caras.
- **Escandallos desactualizados**: el coste por plato no se recalculaba cuando subían los precios de materia prima, arruinando márgenes reales.
- **Datos compartidos entre restaurantes del grupo**: imposible mezclar con datos de otros clientes SaaS, pero también necesario aislar por local dentro del mismo grupo.
- **Roles mezclados**: el camarero no debía ver facturación, el responsable de sala no debía ver usuarios.`,
    solution: `- **Arquitectura multi-tenant** con \`organization_id\` en cada tabla y políticas **RLS** en Supabase que bloquean cualquier fuga entre clientes; un trigger \`handle_new_user\` crea automáticamente la organización y el profile al registrar.
- **Módulo de stock con indicadores visuales** (\`StockLevelIndicator\`, \`StockDot\`, \`StockBar\`): 🔴 crítico ≤ 0, 🟡 bajo, 🟢 óptimo, 🔵 sobrestock, visible en catálogo y en la tarjeta "Stock Bajo" del dashboard.
- **OCR con GPT-4o Vision** en \`/api/ocr\` que devuelve JSON fiscal completo (emisor, base imponible, desglose de IVA por líneas, total con recargo de equivalencia) + \`validateInvoiceCoherence()\` para que los totales cuadren antes de guardar.
- **Pedidos automáticos** (\`/pedidos/automaticos\`): lee \`warehouse_stock\` con \`reorder_enabled\`, filtra donde \`current_stock < min_stock\`, agrupa por proveedor/almacén y calcula la cantidad sugerida como \`max_stock − current_stock\`. Envío por WhatsApp, email (Resend) o PDF.
- **Escandallos** con recálculo automático al cambiar precios de materia prima, mostrando margen real por plato.
- **Roles con navegación filtrada** en \`src/lib/constants.ts\`: basic (stock/notificaciones/almacenes), intermediate (+pedidos/entregas/transferencias), manager (todo + productos/proveedores/facturas/usuarios).
- **Dashboard inicial con KPIs**: documentos pendientes, conciliación, incidencias abiertas, stock bajo, resumen financiero mensual con ingresos, gastos, beneficio y gasto por categoría.
- **Componentes de documentos reutilizables**: \`TaxBreakdownCard\`, \`ReviewBanner\`, \`ConfidenceBadge\`, \`TaxRateSelect\`, \`DataSourceIcon\` que distinguen dato extraído por IA vs. editado manualmente.
- **UI en español** con \`date-fns\` + locale \`es\`, notificaciones con \`sonner\`, formularios con React Hook Form + Zod y tablas con TanStack Table.`,
    tags: ["Next.js", "React", "Vue", "TypeScript", "Tailwind CSS"],
    images: ["/portfolio/PecadoCarnal/1.png", "/portfolio/PecadoCarnal/2.png", "/portfolio/PecadoCarnal/3.png", "/portfolio/PecadoCarnal/4.png", "/portfolio/PecadoCarnal/5.png", "/portfolio/PecadoCarnal/6.png", "/portfolio/PecadoCarnal/7.png", "/portfolio/PecadoCarnal/8.png", "/portfolio/PecadoCarnal/9.png", "/portfolio/PecadoCarnal/10.png", "/portfolio/PecadoCarnal/11.png", "/portfolio/PecadoCarnal/12.png", "/portfolio/PecadoCarnal/13.png", "/portfolio/PecadoCarnal/14.png", "/portfolio/PecadoCarnal/15.png", "/portfolio/PecadoCarnal/16.png", "/portfolio/PecadoCarnal/17.png", "/portfolio/PecadoCarnal/18.png", "/portfolio/PecadoCarnal/19.png", "/portfolio/PecadoCarnal/20.png"],
    imageCount: 20,
  },
  {
    slug: "pmmnapoles",
    folder: "Pmmnapoles",
    title: "PMMNAPOLES",
    description: `PMMNAPOLES es un e-commerce generalista orientado al mercado estadounidense con catálogo en múltiples categorías: hogar y cocina, ropa, tecnología, belleza, calzado, accesorios, deportes y cuidado personal. Con envío gratuito en pedidos superiores a $50, checkout seguro y devoluciones fáciles, funciona como un marketplace moderno con nuevos productos añadidos semanalmente. La plataforma incluye seguimiento de pedidos, centro de devoluciones, sistema de "Notify Me" para productos agotados y atención al cliente 24/7.`,
    challenge: `- Montar un e-commerce multimarca y multicategoría orientado al mercado de EE.UU. requería una arquitectura de producto flexible capaz de gestionar variantes (talla, color), múltiples categorías independientes y actualizaciones de catálogo frecuentes (productos nuevos cada semana).
- El checkout en dólares con múltiples métodos de pago y la gestión de envíos internacionales añadían complejidad técnica al setup de la tienda.
- Un marketplace nuevo sin historial necesitaba construir confianza rápidamente. Los compradores americanos son especialmente sensibles a la política de devoluciones y al servicio al cliente antes de comprar en una tienda desconocida.
- Era necesario un sistema de notificación de stock para productos agotados que capturase el interés del comprador antes de que este se fuese a la competencia.`,
    solution: `- Desarrollo sobre Shopify con tema personalizado que permite añadir productos, variantes y categorías de forma ágil sin intervención técnica, haciendo viable la actualización semanal del catálogo.
- Barra de anuncios animada en el header con mensajes rotativos sobre novedades, envío gratuito, checkout seguro y devoluciones, presente en todas las páginas para recordar los beneficios clave durante todo el proceso de compra.
- Sistema "Notify Me" integrado en fichas de productos sin stock, que captura el email del interesado y envía notificación automática cuando el producto vuelve a estar disponible, recuperando ventas que de otro modo se perderían.
- Sección de navegación completa y diferenciada: Home, Categorías, Mis Pedidos, Seguimiento de Pedido, Centro de Devoluciones, Mi Cuenta y Atención al Cliente 24/7, comunicando de forma explícita todas las garantías de servicio post-venta.
- Fichas de producto con botones diferenciados: "Add to Cart" (compra normal), "Subscribe" (compra recurrente con descuento) y "Buy Now" (compra exprés), maximizando las opciones de conversión según el tipo de comprador.`,
    tags: ["Vue", "Shopify"],
    images: ["/portfolio/Pmmnapoles/1.png", "/portfolio/Pmmnapoles/2.png", "/portfolio/Pmmnapoles/3.png"],
    imageCount: 3,
  },
  {
    slug: "railclick",
    folder: "Railclick",
    title: "Railclick — Plataforma de viajes multi-proyecto",
    description: `Proyecto integral de viajes que combina tres subproyectos complementarios: (1) sitio principal Railclick en WordPress con tema personalizado \`railclick-theme\` + WooCommerce para reservas y pagos, (2) guía editorial de viajes también en WordPress, y (3) una landing page moderna de viajes a Italia construida con Next.js 15 (App Router) + React 19 + TypeScript + Tailwind + shadcn/ui (50+ componentes) + Supabase como backend/auth, con rutas \`/login\` y \`/backoffice\` para administración.

Stack:
- **Sitio principal**: WordPress 6.5.4 + WooCommerce + tema personalizado \`railclick-theme\` + Elementor + Jetpack.
- **Guía de viajes**: WordPress 6.8.2.
- **Landing Italia**: Next.js 15.2.4 (App Router) + React 19 + TypeScript + Tailwind CSS 3.4 + shadcn/ui (50+ componentes) + Supabase + React Hook Form + Zod + Recharts + Lucide React.
- PHP 8.2 + MariaDB 10.4.`,
    challenge: `- **Tres necesidades distintas** en un mismo negocio: marca corporativa, contenido editorial y landing de conversión para un mercado específico (Italia).
- **Landing de alto rendimiento**: la landing de Italia debe cargar instantánea para no perder conversiones, WordPress no era la mejor opción.
- **Contenido editorial extenso**: guía de viajes con miles de artículos, WordPress sí es la mejor herramienta.
- **Reservas y pagos**: el sitio principal necesita checkout, inventario y gestión de pedidos.
- **Backoffice separado**: los administradores de la landing Italia no deberían entrar al wp-admin.
- **SEO y branding coherente** entre los tres subproyectos.`,
    solution: `- **Arquitectura poliglota** que usa la herramienta adecuada para cada necesidad: WordPress donde aporta (gestión de contenido) y Next.js donde gana (landing rápida + backoffice moderno).
- **Tema personalizado \`railclick-theme\`** para el sitio principal, con WooCommerce integrado para reservas y pagos.
- **Landing Italia con Next.js 15 + App Router + RSC**: Hero con el Coliseo, galería de destinos (Venecia, Florencia, Milán, Lago Como, Pompeya, Cinque Terre), secciones de paquetes turísticos con ofertas.
- **shadcn/ui con 50+ componentes reutilizables** para acelerar el desarrollo manteniendo consistencia visual.
- **Supabase como backend** de la landing: auth (login en \`/login\`), base de datos, storage de imágenes. Sin servidor propio.
- **Ruta \`/backoffice\`** protegida con guard de Supabase para administración independiente del wp-admin.
- **React Hook Form + Zod** para formularios con validación tipada.
- **Recharts + Lucide React** para gráficos en el backoffice y iconografía consistente.
- **Tailwind 3.4** con contenedores redondeados y gradientes alineados con el branding.
- **Guía de viajes WordPress 6.8.2** como silo editorial enlazado desde el sitio principal, con su propio pool de autores y categorías.`,
    tags: ["Next.js", "React", "WordPress", "TypeScript", "Tailwind CSS"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "rentuki",
    folder: "Rentuki",
    title: "Rentuki — Marketplace multi-vendedor de alquiler",
    description: `Plataforma marketplace multi-vendedor para alquiler de artículos (coches, herramientas, equipamiento, bicicletas, barcos, camping, deportes), construida sobre WordPress + WooCommerce con el motor **Routiz** como sistema de marketplace de alquiler. Incluye sistema de reservas con calendario de disponibilidad por hora, gamificación con GamiPress (puntos, logros, progreso, pagos parciales), pasarelas Stripe y PayPal Express, valoraciones con Rating Widget Premium, notificaciones push con OneSignal, galería por artículo, sistema de payouts a vendedores y seguridad anti-fuerza bruta.

Stack: WordPress 6.2.2 + WooCommerce + Routiz (motor de marketplace) + tema Brikk + Child Theme Rentuki + Elementor + GamiPress + Stripe + PayPal Express Checkout + Rating Widget Premium + OneSignal + All-in-One WP Security & Firewall + LiteSpeed Cache + Loco Translate. PHP 7.4 + MariaDB 10.11.`,
    challenge: `- **Marketplace multi-vendedor**: cada vendedor gestiona su catálogo, precios y calendario; los clientes ven el agregado.
- **Reservas por horas, no por días**: alquileres muy distintos (un coche 3h, una bici 2h, una mesa de camping 2 días).
- **Pagos parciales**: reserva con anticipo + resto al recoger el artículo.
- **Retención de usuarios**: un marketplace con reservas puntuales necesita mecánicas de engagement.
- **Reseñas fiables**: valoraciones de vendedores y artículos que generen confianza.
- **Notificaciones en tiempo real**: aviso a vendedor cuando llega una reserva, aviso a cliente cuando hay cambios.
- **Payouts a vendedores**: calcular y liquidar comisiones correctamente.
- **Seguridad**: marketplace con miles de usuarios es objetivo de ataques.`,
    solution: `- **Routiz** como motor de marketplace de alquiler sobre WooCommerce: gestiona roles (vendedor/cliente), disponibilidad por hora, calendario, payouts y comisiones.
- **Tema Brikk + Child Theme Rentuki**: diseño profesional con personalización propia.
- **Elementor** para landing y páginas estáticas editables por el cliente.
- **Calendario de disponibilidad** con reservas por hora y por cita, bloqueos automáticos para evitar doble booking.
- **Stripe + PayPal Express Checkout** para cobrar anticipos y totales.
- **GamiPress**: puntos, logros, mapa de progreso y pagos parciales — dopamina y fidelización en un marketplace transaccional.
- **Rating Widget Premium** con 73K+ reseñas para construir reputación de vendedores y artículos.
- **OneSignal** para notificaciones push web/móvil en tiempo real.
- **All-in-One WP Security & Firewall** con hardening completo y protección anti fuerza bruta.
- **LiteSpeed Cache** para rendimiento óptimo con un catálogo grande.
- **Loco Translate** para traducir mensajes de Routiz y WooCommerce.
- **7 categorías principales** de alquiler (coches, herramientas, equipos, bicicletas, barcos, camping, deportes) + 120K+ referencias de imágenes en un backup de 641 MB.`,
    tags: ["WordPress", "Stripe", "WooCommerce", "Express", "Elementor"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "sotavento",
    folder: "Sotavento",
    title: "Sotavento — Tienda online con 5 pasarelas de pago",
    description: `Tienda online profesional para Sotavento construida sobre WordPress + WooCommerce con el tema premium Motta. Ofrece experiencia de compra avanzada con comparación de productos, muestras de variaciones (colores/tallas), lista de deseos, chat en vivo con Tidio, cinco pasarelas de pago internacionales (Stripe vía WooPayments, PayPal, Amazon Pay, Klarna, Affirm), soporte multilingüe con TranslatePress + Loco Translate, email marketing con Mailchimp for WP y backups automáticos con Backuply Pro.

Stack: WordPress 6.8.1 + WooCommerce + tema Motta + Motta Addons + Elementor + WooPayments/Stripe + PayPal + Amazon Pay + Klarna + Affirm + WCBoost (compare, variations, wishlist) + Tidio Live Chat + Mailchimp for WP + TranslatePress + Loco Translate + Contact Form 7 + Akismet + Loginizer + Backuply Pro + Meta Box + Kirki. PHP 7.4 + MariaDB 11.4.`,
    challenge: `- **Cinco mercados de pago distintos**: clientes EU quieren Klarna, EEUU quiere Affirm, veteranos quieren PayPal, nuevos prefieren tarjeta (Stripe), usuarios Amazon quieren Amazon Pay.
- **Funcionalidades de e-commerce avanzadas** (comparar, wishlist, variaciones visuales) que no vienen por defecto.
- **Atención al cliente en tiempo real** para dudas de compra.
- **Email marketing** para recuperar carrito abandonado y retener clientes.
- **Multilingüe real** con URLs por idioma, no traducción automática.
- **Backups fiables** frente a fallos o ataques.
- **Modo mantenimiento** para actualizaciones sin romper experiencia del cliente.`,
    solution: `- **5 pasarelas de pago** cubriendo EU, EEUU y Amazon Pay; el cliente paga como quiere.
- **Tema premium Motta + Motta Addons**: diseño optimizado para e-commerce con layouts predefinidos.
- **WCBoost Products Compare, Variations Swatches y Wishlist**: comparador, swatches de color/talla y lista de deseos, todo integrado bajo el mismo ecosistema.
- **Tidio Live Chat** para atención en tiempo real con chatbots y agentes humanos.
- **Mailchimp for WP** para captación y campañas de email marketing.
- **TranslatePress** + **Loco Translate** combinados para traducción visual en front y strings de plugins.
- **Contact Form 7** para formularios de contacto adicionales.
- **Akismet + Loginizer**: anti-spam en comentarios/formularios y anti-fuerza bruta en login.
- **Backuply Pro**: backups automáticos programados con rotación y restauración rápida.
- **CMP Coming Soon**: modo mantenimiento activable cuando hay cambios grandes o se lanza una versión nueva.
- **Meta Box + Kirki**: campos personalizados y opciones de tema para configuración avanzada.
- **LiteSpeed Cache** (configurado, pendiente de activar) para rendimiento.
- **22 plugins activos** coordinados en un backup de 269 MB.`,
    tags: ["WordPress", "Stripe", "WooCommerce", "Elementor", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "spikes",
    folder: "Spikes",
    title: "Spikes — CRM/ERP para empresa de intermediación energética",
    description: `Sistema CRM/ERP integral para Spikes, una empresa B2C de ahorro energético que intermedia contratos de electricidad, gas y telefonía. Cubre todo el ciclo de ventas: captación de leads, gestión de contratos, liquidación de comisiones de agentes, campañas de marketing, canales de distribución, agenda personal, tareas de equipo, drive de archivos compartidos, generación de documentos legales (Justo Título), emisión de facturas, comparativas de tarifas, control horario y chatbot de WhatsApp con IA. Arquitectura de 3 microservicios independientes con 3 niveles de acceso (agente, manager, super admin).

Stack:
- **Frontend**: Next.js 14 (App Router) + React 18 + Tailwind CSS + JWT con jose + @react-pdf/renderer + jsPDF + xlsx + html2canvas.
- **Backend**: Express.js + TypeScript + TypeORM (MySQL) + JWT + bcrypt.
- **Chatbot**: Express.js + TypeScript + OpenAI API + Redis (cache conversacional) + rate limiting.`,
    challenge: `- **Operativa dispersa**: agentes usaban Excel para contratos, email para leads, WhatsApp para comunicarse con clientes y una hoja para liquidaciones — datos perdidos y comisiones mal calculadas.
- **Tres áreas de negocio distintas** (electricidad, gas, telefonía) con formularios y validaciones diferentes.
- **Comisiones complejas**: cada agente tiene una tabla distinta según tipo de contrato, volumen y estado del cliente.
- **Atención inicial al cliente colapsada**: los leads llegaban por WhatsApp y se contestaban con retraso, perdiendo oportunidades.
- **Equipo grande con roles diferentes**: agente no debe ver datos de otros agentes, manager ve su equipo, super admin ve todo.
- **Documentos legales manuales**: el "Justo Título" se redactaba copiando plantillas Word.`,
    solution: `- **Tres microservicios independientes** desacoplados: frontend Next.js como CRM visual, backend REST Express + TypeORM para la lógica de negocio y persistencia, y chatbot Express + OpenAI para atención automatizada por WhatsApp.
- **Formularios especializados** para alta de contratos de energía y telefonía con validaciones específicas.
- **Pipeline de leads** con estados, prioridad y asignación automática a agentes.
- **Liquidaciones automáticas**: el backend calcula comisiones según contrato/agente/estado y las muestra en un panel dedicado.
- **JWT con jose + 3 roles**: agente (contratos/leads/agenda), manager (+usuarios/equipo), super admin (+configuración completa). Navegación dinámica filtrada por permisos.
- **Generación automática de Justo Título** (documento legal de titularidad) con \`@react-pdf/renderer\` + captura con html2canvas para firma visual.
- **Emisión de facturas** en PDF + exportación a Excel con xlsx.
- **Chatbot WhatsApp con OpenAI**: responde consultas iniciales, clasifica leads, guarda contexto conversacional en Redis y rate limiting para evitar abuso.
- **Drive integrado**: archivos compartidos asociados a contratos/leads, accesibles desde el CRM.
- **Comparativas de tarifas energéticas** para que el agente enseñe al cliente el ahorro en tiempo real.
- **Control horario** de jornada laboral por agente, integrado con el resto del sistema.
- **Studio**: herramienta de personalización visual de contratos.
- **Notificaciones** internas configurables por usuario.`,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL"],
    images: ["/portfolio/Spikes/1.png", "/portfolio/Spikes/2.png", "/portfolio/Spikes/3.png", "/portfolio/Spikes/4.png", "/portfolio/Spikes/5.png", "/portfolio/Spikes/6.png", "/portfolio/Spikes/7.png", "/portfolio/Spikes/8.png", "/portfolio/Spikes/9.png", "/portfolio/Spikes/10.png", "/portfolio/Spikes/11.png", "/portfolio/Spikes/12.png", "/portfolio/Spikes/13.png", "/portfolio/Spikes/14.png", "/portfolio/Spikes/15.png", "/portfolio/Spikes/16.png", "/portfolio/Spikes/17.png", "/portfolio/Spikes/18.png", "/portfolio/Spikes/19.png", "/portfolio/Spikes/20.png", "/portfolio/Spikes/21.png", "/portfolio/Spikes/22.png", "/portfolio/Spikes/23.png", "/portfolio/Spikes/24.png"],
    imageCount: 24,
  },
  {
    slug: "sunoapp",
    folder: "SunoApp",
    title: "Suno MVP — Generador de canciones con IA",
    description: `Suno MVP es una aplicación web que envuelve la API de Suno AI para permitir a los usuarios generar canciones originales a partir de un prompt de texto. La interfaz —minimalista, en modo oscuro— ofrece un textarea con contador de caracteres (límite 500), un toggle "Instrumental" para generar pistas sin voz, prompts de ejemplo y una panel lateral con el historial/listado de canciones generadas con reproductor integrado (Plyr).

Stack: Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS + NextUI para componentes + Framer Motion para transiciones + Plyr como reproductor de audio. Consume un backend separado (\`suno_api\`) que actúa de proxy sobre la API no oficial de Suno.`,
    challenge: `- **API de Suno no oficial e inestable**: no existe API pública soportada, hay que usar wrappers que se rompen cuando Suno cambia el endpoint interno.
- **Latencia de generación alta** (30-90 s por canción): bloquear la UI mientras llega la respuesta dejaba al usuario sin feedback y con sensación de que la app estaba rota.
- **Streaming/polling del estado de la canción**: una canción pasa por varios estados (queued, streaming, complete) y había que reflejarlos sin recargar.
- **Reproductor consistente** en todos los navegadores (los controles nativos de \`<audio>\` divergen entre Safari, Chrome y Firefox).
- **Límite de prompt** de 500 caracteres que el usuario superaba sin darse cuenta y la petición se rechazaba sin mensaje claro.`,
    solution: `- **Arquitectura desacoplada frontend/backend** donde el MVP sólo consume un endpoint propio (\`suno_api-main\`), permitiendo cambiar el proveedor sin tocar la UI.
- **Polling incremental** del estado de la canción cada pocos segundos y UI reactiva que muestra placeholder mientras se genera, con transición suave al completarse (Framer Motion).
- **Contador de caracteres en vivo** (0/500) con el input validado en cliente antes del envío, evitando rechazos del backend.
- **Mensajes de error visibles y sin ruido** ("Error al obtener canciones") que no rompen la navegación si el backend no responde.
- **Plyr como reproductor** para tener una UI/UX uniforme entre navegadores, con soporte de playlist, seek bar y metadata.
- **Prompts de ejemplo** clickables para que usuarios nuevos vean qué tipo de input funciona bien y reduzcan el tiempo hasta la primera canción generada.
- **Modo oscuro por defecto** con paleta negra/azul para evitar fatiga visual en sesiones largas de generación y escucha.`,
    tags: ["Next.js", "React", "Vue", "TypeScript", "Tailwind CSS"],
    images: ["/portfolio/SunoApp/1.png"],
    imageCount: 1,
  },
  {
    slug: "tradinglateral",
    folder: "TradingLateral",
    title: "TradingLateral — Plataforma de membresía para educación en trading",
    description: `Plataforma web de membresía para TradingLateral, dedicada a la educación en trading. Construida sobre WordPress con un **plugin personalizado de membresía** (Trading Lateral Membership) que gestiona el registro, niveles de acceso y contenido restringido. Utiliza Elementor para el diseño visual, Contact Form 7 para formularios, LiteSpeed Cache para rendimiento y está alojado en Hostinger con un entorno de staging (\`pre.tradinglateral.com\`) para pruebas seguras antes de publicar cambios.

Stack: WordPress 6.9.1 + plugin personalizado Trading Lateral Membership + Elementor + Contact Form 7 + LiteSpeed Cache + tema TwentyTwentyFive. Hostinger (hosting + Easy Onboarding). PHP 8.3 + MariaDB 11.8.`,
    challenge: `- **Contenido exclusivo para miembros**: vídeos, PDFs y artículos solo accesibles según nivel de membresía.
- **Niveles diferenciados** (gratuito, premium, mentoría, etc.) con reglas específicas de acceso.
- **Plugins de membresía genéricos no encajaban**: el negocio tenía reglas propias (acceso por curso, no solo por plan).
- **Cambios en producción arriesgados**: tocar una web con miembros activos sin romper la experiencia es delicado.
- **Rendimiento en vídeos y lecciones**: sin caché adecuada, la experiencia era lenta.
- **Panel editable por el creador** sin conocimientos técnicos.
- **Hosting estable y con soporte** para negocio de formación online.`,
    solution: `- **Plugin personalizado Trading Lateral Membership**: desarrollado a medida para cubrir los niveles de acceso específicos del negocio (registro, gestión de miembros, restricción de contenido por curso y por nivel).
- **Contenido exclusivo**: páginas y lecciones protegidas, accesibles solo con membresía activa del nivel correspondiente.
- **Elementor** como constructor visual para que el creador actualice landing, páginas de ventas y lecciones sin tocar código.
- **Tema TwentyTwentyFive** como base ligera, personalizado completamente via Elementor.
- **Entorno de staging** \`pre.tradinglateral.com\` en Hostinger: cualquier cambio mayor se prueba antes de subir a producción, minimizando riesgos con miembros activos.
- **LiteSpeed Cache** para optimizar carga de páginas con vídeos y recursos educativos pesados.
- **Contact Form 7** para consultas y soporte antes de la conversión a miembro.
- **Hostinger Easy Onboarding** para despliegue y mantenimiento simplificado con backups automáticos y certificados SSL gestionados.
- **PHP 8.3 + MariaDB 11.8**: stack moderno y eficiente para el tráfico esperado.`,
    tags: ["WordPress", "Elementor", "PHP"],
    images: [],
    imageCount: 0,
  },
  {
    slug: "wintennis",
    folder: "Wintennis",
    title: "Wintennis",
    description: `Wintennis es una plataforma de contenido y recomendación de equipamiento de tenis. La web publica guías comparativas de productos (raquetas, ropa, zapatillas, calcetines, accesorios), cobertura de eventos del circuito profesional y selecciones editoriales de los mejores productos del año. El modelo es el de un media de referencia para el tenista que busca orientación de compra: no vende directamente, sino que guía al lector hacia las mejores opciones del mercado con análisis técnicos y comparativas detalladas.`,
    challenge: `- Crear un sitio de contenido que compita con medios especializados consolidados requería una estructura editorial sólida y un diseño que transmitiese autoridad y expertise en el mundo del tenis desde el primer momento.
- El modelo de negocio basado en contenido y recomendación (sin venta directa) exige un SEO muy bien trabajado desde la arquitectura de la web, ya que el tráfico orgánico es la fuente principal de audiencia.
- Las guías comparativas de producto requieren un formato de presentación que sea fácil de escanear rápidamente —el lector busca la respuesta a "¿qué raqueta me compro?" en segundos— pero también suficientemente detallado para quien quiere leer el análisis completo.
- Era necesario mantener el sitio actualizado con nuevos contenidos de forma regular (events de torneos, nuevos productos temporada) sin que ello requiriese intervención técnica del desarrollador.`,
    solution: `- Desarrollo sobre WordPress con arquitectura de contenido editorial bien definida: categorías por tipo de producto (raquetas, ropa, zapatillas, accesorios), guías comparativas, eventos y selecciones anuales de "mejores productos", todo accesible desde el menú principal.
- Diseño visual con fotografías de alta calidad de jugadores y equipamiento que transmite inmediatamente que el sitio es una fuente de referencia para el tenista serio, no una tienda genérica de artículos deportivos.
- Formato de artículos comparativos optimizado para SEO con titles descriptivos (ej: "Las mejores raquetas de tenis de 2025"), estructura de encabezados H1/H2/H3 consistente y tablas comparativas con puntuaciones para facilitar la lectura en escaneo.
- Sección de eventos con calendario y cobertura de torneos del circuito profesional para generar contenido de actualidad que atrae tráfico por búsquedas estacionales y aumenta la recurrencia de los lectores.
- CMS WordPress que permite al equipo editorial publicar y actualizar contenido, guías y eventos de forma completamente autónoma sin soporte técnico.`,
    tags: ["WordPress"],
    images: ["/portfolio/Wintennis/1.png", "/portfolio/Wintennis/2.png", "/portfolio/Wintennis/3.png", "/portfolio/Wintennis/4.png"],
    imageCount: 4,
  },
];

/** Projects sorted: with images first (by imageCount desc), then without images */
export const PROJECTS_SORTED: Project[] = [
  ...PROJECTS.filter((p) => p.imageCount > 0).sort((a, b) => b.imageCount - a.imageCount),
  ...PROJECTS.filter((p) => p.imageCount === 0),
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  const slugs = ["spikes", "mundoctor", "pecadocarnal", "impakta-jugadores", "chefs"];
  return slugs
    .map((s) => PROJECTS.find((p) => p.slug === s))
    .filter(Boolean) as Project[];
}
