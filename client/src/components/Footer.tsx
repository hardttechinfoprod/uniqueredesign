/* Design: Sofisticação Clássica com Acentos Modernos */
/* Footer elegante com redes sociais e informações */

import { Instagram, Globe, Mail } from "lucide-react";
import LocationMap from "./LocationMap";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/unique_instituto_oficial", label: "Instagram" },
    { icon: Globe, href: "https://share.google/P0KNOGa3IZ53SQZhd", label: "Google" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-top-gold">
      <div className="container py-16">
        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 animate-fade-in-up">
          
          {/* Logo e Descrição */}
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663326837738/iJrANnw4aHJXYPH9pdUbod/un-logo_0ee12565.png"
              alt="Unique Instituto de Cirurgia"
              className="h-16 w-auto object-contain mb-4 transition-transform duration-500 hover:scale-105"
            />
            <p className="text-white/100 text-sm">
              Sua saúde, nossa prioridade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#doctors" className="text-white/70 hover:text-accent transition-colors">Doutores</a></li>
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-accent transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Especialidades
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Cirurgião Geral</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Nutricionista</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Psicóloga</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Cardiologista</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Coloproctologia</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Cirurgia Vascular</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Cirurgia Bariátrica</a></li>
            </ul>
          </div>

          {/* E-mail */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              E-mail
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70 flex items-center gap-3 transition-transform duration-500 hover:translate-x-1">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span>contato@institutounique.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/20 py-8" />

        {/* Redes Sociais e Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up">
          {/* Redes Sociais e Selo SSL */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-circle transition-transform duration-500 hover:scale-110 hover:text-accent"
                    title={link.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
            <img
              src="/ssl-secure.png"
              alt="SSL Secure Connection"
              className="h-9 w-auto object-contain select-none"
            />
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-white/70">
            <p>&copy; {currentYear} Desenvolvido por HardTechInfo Soluções em Ti.</p>
          </div>
        </div>
      </div>

      {/* Mapa de Localização */}
      <div className="bg-white text-foreground animate-fade-in-up">
        <LocationMap
          latitude={-23.1855}
          longitude={-46.8941}
          address="Rua Conrado Augusto Offa, 92, Centro, Jundiaí - SP"
          phone="(11) 93220-2177"
          hours="Segunda a sexta das 8h às 18h"
        />
      </div>
    </footer>
  );
}
