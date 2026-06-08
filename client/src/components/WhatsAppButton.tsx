/* Design: Sofisticação Clássica com Acentos Modernos */
/* Botão WhatsApp flutuante com design premium e efeitos responsivos */

import { MessageCircle, Send } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511932202177"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button-container"
      title="Conversar no WhatsApp"
    >
      {/* Camadas de Efeito */}
      <div className="whatsapp-pulse-ring" />
      <div className="whatsapp-pulse-ring-2" />
      
      {/* Botão Principal */}
      <div className="whatsapp-button">
        {/* Ícone Customizado */}
        <div className="whatsapp-icon-wrapper">
          <svg
            className="whatsapp-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M9 10h.01" />
            <path d="M13 10h.01" />
            <path d="M17 10h.01" />
          </svg>
          
          {/* Ícone de Envio Secundário */}
          <Send className="whatsapp-send-icon" size={14} />
        </div>
        
        {/* Texto do Botão */}
        <span className="whatsapp-text">Chat</span>
      </div>

      {/* Tooltip Elegante */}
      <div className="whatsapp-tooltip">
        <div className="whatsapp-tooltip-content">
          <p className="font-semibold">-WhatsApp-</p>
          <p className="text-xs opacity-90">Clique para abrir</p>
        </div>
        <div className="whatsapp-tooltip-arrow" />
      </div>

      {/* Efeito de Partículas */}
      <div className="whatsapp-particle" />
      <div className="whatsapp-particle" />
      <div className="whatsapp-particle" />
    </a>
  );
}
