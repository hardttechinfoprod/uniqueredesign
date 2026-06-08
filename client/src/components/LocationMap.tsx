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

      {/* Mapa à Direita */}
      <div className="location-map-wrapper">
        <iframe
          title="Localização da Clínica"
          className="location-map"
          src={mapUrl}
          style={{ 
            width: "100%", 
            height: "100%",
            border: "none",
            borderRadius: "16px"
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
