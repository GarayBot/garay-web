export function Footer() {
  const servicios = [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "IA & Chatbots", href: "#servicios" },
    { label: "CRM a Medida", href: "#servicios" },
    { label: "Automatizaciones", href: "#servicios" },
    { label: "E-commerce", href: "#servicios" },
  ];

  const empresa = [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Casos de Éxito", href: "#casos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  const recursos = [
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Kit Digital", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
  ];

  return (
    <footer className="border-t border-[#2a2d3a] bg-[#0f1117]">
      {/* Dotted decorative text */}
      <div className="relative py-20 overflow-hidden">
        <p className="text-center text-[18vw] md:text-[8vw] font-black uppercase tracking-wider leading-none"
           style={{
             color: "transparent",
             backgroundImage: "radial-gradient(circle, #2a2d3a 1px, transparent 1px)",
             backgroundSize: "4px 4px",
             WebkitBackgroundClip: "text",
             backgroundClip: "text",
           }}>
          <span className="block">AUTOMATIZA.</span>
          <span className="block">ESCALA.</span>
          <span className="block">TRIUNFA.</span>
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-2xl font-bold text-white">
              Garay.
            </a>
            <p className="mt-3 text-sm text-[#9ca3af] leading-relaxed">
              Desarrollo web y automatización para empresas que quieren escalar.
            </p>
            <div className="mt-5 flex gap-4">
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/ivangarcia" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/ivangarcia" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-white transition-colors" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="https://twitter.com/ivangarcia" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-white transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-3">
              {servicios.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#9ca3af] hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#9ca3af] hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-3">
              {recursos.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#9ca3af] hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#2a2d3a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6b7280]">
            © {new Date().getFullYear()} Garay. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#6b7280] hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-xs text-[#6b7280] hover:text-white transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
