import { Check, Phone, MapPin } from "lucide-react";

const features = [
  "Clínica moderna, equipada e regulamentada",
  "Salas climatizadas de alto padrão",
  "Recepção acolhedora com atendente",
  "Estacionamento e localização central",
  "Ambiente profissional de alto prestígio",
  "Horários flexíveis e planos adaptados",
];

export default function RentalPremium() {
  return (
    <section id="rental" className="py-16 lg:py-20 bg-[#FCFAF7] border-t border-[#EAE3D9]/50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Content */}
          <div className="lg:col-span-7 order-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9B77A] mb-4 font-sans">
              Sublocação Médica
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123247] leading-[1.18] font-sans mb-3">
              Consultórios para{" "}
              <span className="text-[#D9B77A]">locação em Jundiaí.</span>
            </h2>
            <p className="text-sm text-[#667789] leading-relaxed mb-8 max-w-lg font-sans">
              Consultórios completos com infraestrutura de alto padrão e gestão
              de atendimento incluída. Ideal para médicos e terapeutas que
              valorizam a imagem profissional.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9B77A]/10 flex items-center justify-center text-[#D9B77A] shrink-0">
                    <Check size={11} />
                  </div>
                  <span className="text-[0.82rem] text-[#667789] font-sans">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-[#EAE3D9]/50">
              <a
                href="https://wa.me/5511932202177"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2.5 px-6 bg-[#123247] hover:bg-[#0B1F2E] text-[#FCFAF7] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[6px] transition-all duration-300 font-sans"
              >
                <Phone size={13} />
                Agendar Visita
              </a>
              <span className="text-xs text-[#667789]/60 font-sans">
                Planos mensais e por turno disponíveis.
              </span>
            </div>
          </div>

          {/* Right: Pricing card */}
          <div className="lg:col-span-5 order-2 w-full">
            <div className="bg-[#123247] text-white rounded-[12px] p-6 sm:p-8 relative overflow-hidden">
              {/* Gold top line */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-[#D9B77A]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D9B77A] mb-3 font-sans">
                Valor por Hora
              </p>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xs text-white/50 font-sans">A partir de</span>
              </div>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-[3.5rem] font-bold leading-none font-sans tabular-nums">
                  R$ 80
                </span>
                <span className="text-sm text-white/50 font-sans">/hora</span>
              </div>

              <div className="h-px bg-white/10 mb-5" />

              <ul className="space-y-2.5 mb-6">
                {["Sala equipada e climatizada", "Recepção e atendente inclusos", "Localização central em Jundiaí"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[0.82rem] text-white/70 font-sans">
                    <Check size={13} className="text-[#D9B77A] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-[11px] text-white/50 font-sans">
                <MapPin size={13} className="text-[#D9B77A]" />
                Rua Conrado Augusto Offa, 92 — Centro, Jundiaí
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
