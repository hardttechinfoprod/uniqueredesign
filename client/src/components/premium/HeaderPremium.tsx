import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "O Instituto", href: "#manifesto" },
  { label: "Especialidades", href: "#services" },
  { label: "Corpo Clínico", href: "#doctors" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Contato", href: "#contact" },
];

export default function HeaderPremium() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-[#FCFAF7]/95 backdrop-blur-sm border-b border-[#EAE3D9]/70 shadow-[0_1px_12px_rgba(18,50,71,0.06)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
          <div className="flex items-center justify-between h-18 md:h-20">

            {/* Logo */}
            <a
              href="#hero"
              aria-label="Unique Instituto — Página inicial"
              className="flex items-center shrink-0"
            >
              <img
                src="/logosemfundo-removebg-preview.png"
                alt="Unique Instituto de Cirurgia"
                className={`w-auto object-contain transition-all duration-400 ${
                  isScrolled ? "h-8 sm:h-9 md:h-10" : "h-9 sm:h-10 md:h-12"
                }`}
                style={!isScrolled ? { filter: "brightness(0) invert(1)" } : {}}
              />
            </a>

            {/* Desktop: Center Nav */}
            <nav className="hidden lg:flex items-center gap-9" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 relative py-1 group ${
                    isScrolled
                      ? "text-[#667789] hover:text-[#123247]"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-[#D9B77A]" : "bg-[#D9B77A]"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Desktop: Right actions */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Phone — visible only when scrolled */}
              <a
                href="tel:1145862755"
                className={`flex items-center gap-2 text-[11px] font-medium tracking-wide transition-all duration-300 ${
                  isScrolled
                    ? "text-[#667789] hover:text-[#123247] opacity-100"
                    : "text-white/60 hover:text-white opacity-0 pointer-events-none"
                }`}
                aria-label="Ligar para o instituto"
              >
                <Phone size={13} className="text-[#D9B77A]" />
                (11) 4586-2755
              </a>

              {/* CTA */}
              <a
                href="https://wa.me/5511932202177"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-[6px] transition-all duration-300 ${
                  isScrolled
                    ? "bg-[#123247] text-[#FCFAF7] hover:bg-[#0B1F2E]"
                    : "bg-[#D9B77A] text-[#0B1F2E] hover:bg-[#c8a568]"
                }`}
              >
                Agendar Consulta
              </a>
            </div>

            {/* Mobile: Menu toggle */}
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className={`lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-[6px] transition-colors duration-200 focus:outline-none ${
                isScrolled ? "text-[#123247]" : "text-white"
              }`}
              aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#FCFAF7] flex flex-col lg:hidden overflow-y-auto"
          >
            {/* Mobile header bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 h-18 border-b border-[#EAE3D9]/60 shrink-0">
              <img
                src="/logosemfundo-removebg-preview.png"
                alt="Unique Instituto"
                className="h-[34px] w-auto object-contain"
              />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#123247] focus:outline-none"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-5 sm:px-6 pt-8 pb-4 gap-1 flex-grow">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05, duration: 0.3 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center py-4 border-b border-[#EAE3D9]/50 text-[#123247] text-base font-medium tracking-wide hover:text-[#D9B77A] transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

             {/* Mobile CTAs */}
            <div className="px-5 sm:px-6 pb-8 flex flex-col gap-3 shrink-0">
              <a
                href="https://wa.me/5511932202177"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="w-full h-12 flex items-center justify-center bg-[#123247] text-[#FCFAF7] rounded-[6px] text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#0B1F2E] transition-colors duration-300"
              >
                Agendar Consulta
              </a>
              <a
                href="tel:1145862755"
                onClick={() => setIsMobileOpen(false)}
                className="w-full h-12 flex items-center justify-center border border-[#EAE3D9] text-[#667789] rounded-[6px] text-[11px] font-semibold tracking-wide gap-2 hover:border-[#D9B77A] hover:text-[#123247] transition-colors duration-300"
              >
                <Phone size={14} className="text-[#D9B77A]" />
                (11) 4586-2755
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
