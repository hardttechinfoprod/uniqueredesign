/* Design: Sofisticação Clássica com Acentos Modernos */
/* Seção informativa para aluguel de salas */

import { CheckCircle2, Phone, Building2, Sparkles, MapPin } from "lucide-react";

export default function RentalSection() {
  const features = [
    "Clínica localizada em Jundiaí",
    "Clínica moderna e bem equipada",
    "Salas climatizadas",
    "Recepção acolhedora",
    "Ambiente confortável e profissional",
    "Temos horários flexíveis disponíveis",
  ];

  return (
    <section id="rental" className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Card Principal com Efeito de Sombra e Borda Suave */}
          <div 
            className="relative bg-white rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-700 group border border-accent/20 overflow-hidden"
            style={{
              animation: "fadeInUp 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
            }}
          >
            {/* Faixa Decorativa Superior em Gradiente Dourado */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-accent/50 to-accent" />
            
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Lado Esquerdo - Destaque Visual em Azul Marinho */}
              <div className="md:col-span-2 bg-primary p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                {/* Efeito de brilho radial no fundo */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-accent/30 animate-float">
                    <Building2 className="text-accent" size={32} />
                  </div>
                  <h3 className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Oportunidade</h3>
                  <h2 className="text-white text-3xl font-bold mb-4 leading-tight">Aluguel de Salas</h2>
                  <div className="h-1 w-12 bg-accent mx-auto rounded-full mb-6" />
                  
                  {/* Card de Valor com Efeito de Vidro (Glassmorphism) */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-transform duration-500 group-hover:scale-105">
                    <p className="text-white/60 text-xs uppercase tracking-tighter mb-1">A partir de</p>
                    <p className="text-accent text-3xl font-bold">R$ 80,00</p>
                    <p className="text-white/60 text-xs uppercase tracking-tighter mt-1">por hora</p>
                  </div>
                </div>
              </div>

              {/* Lado Direito - Conteúdo e Benefícios */}
              <div className="md:col-span-3 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-accent" size={18} />
                    <span className="text-primary/60 font-semibold text-xs uppercase tracking-widest">Unique Instituto de Cirurgia</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-primary mb-4 leading-tight">
                    Você busca um espaço moderno e seguro para atender seus pacientes?
                  </h4>
                  
                  {/* Grid de Benefícios com Checkmarks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 group/item">
                        <CheckCircle2 className="text-accent mt-0.5 shrink-0 transition-transform duration-300 group-hover/item:scale-110" size={16} />
                        <span className="text-secondary text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rodapé do Card com Chamada para Ação (CTA) */}
                <div className="pt-6 border-t border-accent/10">
                  <p className="text-primary font-semibold text-sm mb-4 italic">
                    Temos outros planos disponíveis. Vamos agendar uma visita?
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <a 
                      href="https://wa.me/5511932202177" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-accent/20 hover:-translate-y-1"
                    >
                      <Phone size={18} />
                      (11 ) 93220-2177
                    </a>
                    
                    <div className="flex items-center gap-2 text-secondary text-xs">
                      <MapPin size={14} className="text-accent" />
                      <span>Jundiaí - SP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
