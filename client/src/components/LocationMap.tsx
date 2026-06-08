/* Design: Sofisticação Clássica com Acentos Modernos */
/* Componente de mapa do Google Maps com localização da clínica */

import { MapPin, Clock, Phone } from "lucide-react";
import { useState } from "react";

interface LocationMapProps {
  latitude?: number;
  longitude?: number;
  address?: string;
  phone?: string;
  hours?: string;
}

export default function LocationMap({
  // Coordenadas atualizadas para Jundiaí (Rua Conrado Augusto Offa, 92)
  latitude = -23.1855,
  longitude = -46.8941,
  address = "Rua Conrado Augusto Offa, 92, Centro, Jundiaí - SP",
  phone = "(11) 93220-2177",
  hours = "Segunda a sexta, das 8h às 18h"
}: LocationMapProps) {
  
  // URL do Google Maps configurada especificamente para o endereço de Jundiaí
  const [mapUrl] = useState(
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.123456789!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf269000000000%3A0x0000000000000000!2sRua%20Conrado%20Augusto%20Offa%2C%2092%20-%20Centro%2C%20Jundia%C3%AD%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890`
  );

  return (
    <div className="location-map-container">
      {/* Informações à Esquerda */}
      <div className="location-info">
        <h3 className="location-title" style={{ fontFamily: "var(--font-display)" }}>
          Venha nos visitar!
        </h3>
        
        {/* Endereço */}
        <div className="location-item">
          <div className="location-icon">
            <MapPin size={22} />
          </div>
          <div>
            <p className="location-label">Endereço</p>
            <p className="location-value">{address}</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="location-item">
          <div className="location-icon">
            <Phone size={20} />
          </div>
          <div>
            <p className="location-label">WhatsApp</p>
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="location-value location-link"
            >
              {phone}
            </a>
          </div>
        </div>

        {/* Telefone Fixo */}
        <div className="location-item">
          <div className="location-icon">
            <Phone size={20} />
          </div>
          <div>
            <p className="location-label">Telefone</p>
            <a
              href="tel:1145862755"
              className="location-value location-link"
            >
              (11) 4586-2755
            </a>
          </div>
        </div>

        {/* Horário */}
        <div className="location-item">
          <div className="location-icon">
            <Clock size={22} />
          </div>
          <div>
            <p className="location-label">Horário</p>
            <p className="location-value">{hours}</p>
          </div>
        </div>
      </div>

      {/* Mapa à Direita (Substituído por Card Premium conforme orientação para evitar iframes quebrados/CSP) */}
      <div className="location-map-wrapper flex flex-col items-center justify-center bg-[#0B1F2E] p-6 text-center border border-[#EAE3D9]/10 relative overflow-hidden group">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FCFAF7_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D9B77A]/[0.02] blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#D9B77A]/[0.02] blur-2xl" />

        {/* MapPin Icon container */}
        <div className="relative mb-5 z-10">
          <div className="w-16 h-16 rounded-full bg-[#D9B77A]/10 flex items-center justify-center text-[#D9B77A] animate-pulse">
            <MapPin size={28} />
          </div>
          <div className="absolute inset-0 w-16 h-16 rounded-full border border-[#D9B77A]/30 scale-125 opacity-30 pointer-events-none" />
        </div>

        {/* Text */}
        <h4 className="text-white text-base font-semibold mb-2 z-10 font-sans">
          Localização da Clínica
        </h4>
        <p className="text-white/60 text-xs max-w-[260px] mb-6 leading-relaxed z-10 font-sans font-light">
          Rua Conrado Augusto Offa, 92 <br />
          Centro, Jundiaí - SP <br />
          CEP: 13201-105
        </p>

        {/* Button */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rua+Conrado+Augusto+Offa,+92+-+Centro,+Jundia%C3%AD+-+SP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 h-11 bg-[#D9B77A] hover:bg-[#c9a76a] text-[#0B1F2E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[6px] transition-all duration-300 font-sans shadow-lg shadow-[#D9B77A]/10 z-10"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
}
