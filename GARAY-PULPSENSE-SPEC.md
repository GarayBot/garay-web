# Garay Web — Clon de PulpSense adaptado a Garay

## Proyecto
Clonar la estructura y diseño de https://www.pulpsense.com/ adaptado para Garay (Iván García, desarrollador web freelance en Barcelona).
Stack: Next.js App Router + TypeScript + Tailwind CSS + MagicUI (24 componentes en src/components/ui/)
Deploy: garay.ivangar.com (Docker + Traefik, puerto 3000, red "proxy")
Idioma: TODO en ESPAÑOL

## Datos empresa
- **Nombre**: Garay
- **Persona**: Iván García — Desarrollador Web Full Stack / Freelance
- **Email**: igarcia@garaywebs.com
- **Cal.com**: https://cal.com/ivangarcia (embed del calendario para agendar consultas)
- **Ubicación**: Barcelona, España

## Diseño global
- Dark theme (fondo #0a0a0f / #111118 con toques de gris oscuro)
- Gradientes sutiles azul-violeta en cards y fondos (como PulpSense)
- Border cards: border-white/5 con hover border-white/15
- Tipografía: Inter (default Next.js)
- Accent color: emerald-400/cyan-400 para CTAs (verde/cyan) 
- Labels/badges: font-mono uppercase tracking-widest

## Secciones (EXACTAMENTE como PulpSense, en este orden):

### 1. HEADER (sticky, glassmorphism)
- Logo "Garay." a la izquierda
- Nav center: Testimonios, Servicios, Casos de Éxito, Proceso, Contacto
- CTA derecha: "Reserva tu llamada" (botón sólido blanco)
- Rounded pill con backdrop-blur
- Mobile: hamburger menu

### 2. HERO
- Badge pill arriba: "⚡ Desarrollo Web a Medida" (AnimatedGradientText)
- Título ENORME (text-7xl+): "Haz crecer tu negocio, no tu nómina."
- Subtítulo: "El camino a 6 cifras empieza con ventas, marketing y el trabajo diario en piloto automático."
- 2 CTAs: "Reserva tu llamada" (botón sólido) + "Ver Servicios" (botón outline)
- AvatarCircles debajo (+50 badge) con "Más de 50 proyectos entregados" y 5 estrellas
- Fondo: gradiente azul-violeta sutil en la parte inferior (como PulpSense)

### 3. LOGO CLOUD
- "CONFÍAN EN NOSOTROS" (uppercase tracking-widest)
- Marquee con nombres de clientes: Spikes Energía, TradingLateral, Impakta, PecadoCarnal, HomeFit22, Aqualinks, HabitRank

### 4. TESTIMONIOS CORTOS (primera sección)
- Título: "Lo que dicen nuestros clientes"
- Subtitle: "Empresas reales que han escalado con nuestras soluciones."
- Marquee horizontal con 4 cards de testimonios (texto corto + avatar + nombre + empresa)
- Cada card tiene borde sutil, hover effect

### 5. SERVICIOS (grid 3x2 de MagicCards)
- Título: "Nuestros Servicios" / "Soluciones completas para eliminar procesos manuales"
- 6 cards con icono, título, descripción y "Click para saber más →"
- Al hacer click: expande mostrando "Ideal para:" + lista de features
- Cards: Desarrollo Web, IA & Chatbots, CRM & Hub Operaciones, Onboarding Automático, Contenido con IA, Dashboards en Tiempo Real

### 6. CTA INTERMEDIO
- "¿Listo para automatizar tus procesos?" + botón "Reserva tu consulta gratis"

### 7. CASOS DE ÉXITO (carousel horizontal)
- Título: "Casos de Éxito" / "Resultados reales de empresas reales"
- Carousel con 3 cards grandes:
  - Card 1: "CRM para Spikes Energía" — tags: CRM, Automatización ventas — historia + métricas (400+ horas manuales eliminadas, 67% reducción equipo VA)
  - Card 2: "Chatbot WhatsApp Luzia" — tags: IA, WhatsApp API — historia + métricas (24/7 disponibilidad, 500+ comparativas/mes)
  - Card 3: "Plataforma Impakta" — tags: Next.js, Prisma — historia + métricas (3x más rápido que Excel, 100+ jugadores gestionados)
- Debajo: "¿Listo para ser nuestro próximo caso de éxito?" + botón

### 8. PROCESO (4 pasos con imagen/video a la derecha)
- Título: "Así conseguimos resultados"
- Subtítulo: "Nuestro proceso probado en 4 pasos..."
- Layout: izquierda steps (tab-style, el seleccionado resalta), derecha una imagen/mockup
- Pasos: 1. Consulta Estratégica, 2. Plan Personalizado, 3. Arranque Inmediato, 4. Escalar y Optimizar
- Cada paso con descripción corta

### 9. INTEGRACIONES (Marquee doble)
- Título: "Conectamos con +100 herramientas"
- Subtítulo: "Integración perfecta con tu stack..."
- Doble Marquee con pills/chips de herramientas
- Nota debajo: "¿No ves tu herramienta? Podemos integrarnos con la tuya."

### 10. FAQ (Accordion largo)
- Título: "Preguntas Frecuentes"
- 10+ preguntas en Accordion (igual estilo que PulpSense)
- Preguntas sobre tipos de web, precios, Kit Digital, plazos, mantenimiento, post-lanzamiento, etc.

### 11. TESTIMONIOS LARGOS (3 columnas Marquee vertical)
- Título: "Empresas que confían en nosotros"
- 3 columnas con Marquee vertical (pauseOnHover)
- Cards con texto largo, avatar con iniciales, nombre, empresa
- Fade top/bottom con gradientes

### 12. SECCIÓN CAL.COM (Reserva tu consulta)
- Título: "Reserva tu consulta estratégica gratuita"
- Subtítulo: "Agenda una videollamada de 30 min..."
- Embed de Cal.com: <iframe src="https://cal.com/ivangarcia" />  
- O usar Cal.com embed script: Cal("inline", { elementOrSelector: "#cal-embed", calLink: "ivangarcia" })
- Debajo: "Qué esperar: ✓ Análisis de procesos · ✓ Plan personalizado · ✓ Proyecciones de ROI"

### 13. CTA FINAL (con fondo gradiente azul-violeta)
- Título ENORME: "¿Listo para escalar tu negocio?"
- Botón: "Reserva tu consulta" 
- Subtítulo: "Agenda una consulta gratuita para descubrir las soluciones que te darán ROI inmediato."
- Fondo: gradiente violeta-azul intenso (como PulpSense)

### 14. FOOTER
- 4 columnas: Logo+tagline+social, Servicios, Empresa, Recursos
- Copyright + Privacy Policy + Terms

## Componentes MagicUI disponibles (src/components/ui/):
animated-gradient-text, animated-grid-pattern, animated-shiny-text, avatar-circles,
badge, blur-fade, border-beam, card, dot-pattern, magic-card, marquee,
number-ticker, particles, rainbow-button, retro-grid, ripple, separator,
shimmer-button, shine-border, sparkles-text, text-animate, word-rotate, accordion, button

## REGLAS
- Usar SOLO componentes MagicUI existentes — NO crear nuevos ni editarlos
- framer-motion para animaciones de entrada (whileInView, stagger)
- Dark theme: className="dark" en html tag
- Crear secciones en src/components/sections/
- Verificar build: npm run build (arreglar TODOS los errores)
- output: "standalone" ya configurado en next.config.ts
- Docker: multi-stage (node:22-alpine), container "garay-web", red "proxy"
- Traefik labels: garay.ivangar.com, port 3000
