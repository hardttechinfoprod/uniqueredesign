import { Instagram, Globe, Mail } from "lucide-react";
import LocationMap from "../LocationMap";

export default function FooterPremium() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/unique_instituto_oficial", label: "Instagram" },
    { icon: Globe, href: "https://share.google/P0KNOGa3IZ53SQZhd", label: "Google" },
  ];

  return (
    <footer className="bg-[#0B1F2E] text-[#FCFAF7] relative overflow-hidden border-t-2 border-[#D9B77A]">
      {/* Background visual detail */}
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-[#D9B77A]/2 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 pt-16 sm:pt-20 pb-12 relative z-10">
        
        {/* Upper Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Logo & Slogan */}
          <div className="md:col-span-4 flex flex-col items-start">
            <img
              src="/logocerta.png"
              alt="Unique Instituto de Cirurgia"
              className="h-11 sm:h-12 w-auto object-contain mb-6"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm text-white/70 max-w-sm leading-relaxed font-light font-sans">
              Segurança técnica, cuidado humanizado e infraestrutura boutique dedicada à sua recuperação e bem-estar.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-2">
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9B77A] mb-6"
            >
              Navegação
            </h4>
            <ul className="space-y-3.5 text-sm font-sans font-light">
              <li><a href="#hero" className="text-white/70 hover:text-[#D9B77A] transition-colors">Início</a></li>
              <li><a href="#manifesto" className="text-white/70 hover:text-[#D9B77A] transition-colors">Manifesto</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#D9B77A] transition-colors">Especialidades</a></li>
              <li><a href="#doctors" className="text-white/70 hover:text-[#D9B77A] transition-colors">Corpo Clínico</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-[#D9B77A] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Column 3: Specialties list */}
          <div className="md:col-span-3">
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9B77A] mb-6"
            >
              Áreas de Atuação
            </h4>
            <ul className="space-y-3.5 text-sm font-sans font-light">
              <li><span className="text-white/70">Cirurgia Bariátrica & Metabólica</span></li>
              <li><span className="text-white/70">Cardiologia Preventiva</span></li>
              <li><span className="text-white/70">Psicologia de Apoio</span></li>
              <li><span className="text-white/70">Gastroenterologia & Cirurgia Geral</span></li>
              <li><span className="text-white/70">Angiologia & Estética Vascular</span></li>
              <li><span className="text-white/70">Nutrição Especializada</span></li>
            </ul>
          </div>

          {/* Column 4: Main Contact info */}
          <div className="md:col-span-3">
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9B77A] mb-6"
            >
              Fale Conosco
            </h4>
            <ul className="space-y-4 text-sm font-sans font-light">
              <li className="flex items-center gap-3 text-white/70 hover:text-[#D9B77A] transition-colors">
                <Mail size={16} className="text-[#D9B77A]" />
                <a href="mailto:contato@institutounique.com">contato@institutounique.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9B77A]" />
                <span>(11) 93220-2177</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9B77A]" />
                <span>(11) 4586-2755</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle map display */}
        <div className="border-t border-white/10 pt-12 pb-8 overflow-hidden rounded-[12px]">
          <LocationMap
            latitude={-23.1855}
            longitude={-46.8941}
            address="Rua Conrado Augusto Offa, 92, Centro, Jundiaí - SP"
            phone="(11) 93220-2177"
            hours="Segunda a sexta das 8h às 18h"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Lower Row: Social media icons, SSL Certificate, and copyrights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social icons e Selo SSL */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-[#D9B77A]/20 hover:border-[#D9B77A] flex items-center justify-center text-white/80 hover:text-[#FCFAF7] transition-all duration-300"
                    title={link.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
            <img
              src="/ssl-secure.png"
              alt="SSL Secure Connection"
              className="h-8 w-auto object-contain select-none opacity-85 hover:opacity-100 transition-opacity"
              title="Conexão Segura SSL"
            />
          </div>

          {/* Copyright text */}
          <div className="text-center sm:text-right text-xs text-white/40 font-sans font-light">
            <p>&copy; {currentYear} Unique Instituto. Desenvolvido por HardTechInfo Soluções em Ti.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
