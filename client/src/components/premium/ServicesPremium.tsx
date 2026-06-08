import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Cirurgia Bariátrica e Metabólica",
    description:
      "Tratamento cirúrgico da obesidade com protocolos seguros. Acompanhamento pré e pós-operatório integrando cirurgia, nutrição e psicologia.",
  },
  {
    id: "02",
    title: "Cardiologia",
    description:
      "Prevenção, diagnóstico e tratamento de doenças cardiovasculares. Eletrocardiograma e acompanhamento clínico personalizado.",
  },
  {
    id: "03",
    title: "Psicologia Clínica e Bariátrica",
    description:
      "Suporte emocional com TCC. Acompanhamento especializado em transtornos alimentares e fases pré e pós-bariátrica.",
  },
  {
    id: "04",
    title: "Cirurgia do Aparelho Digestivo",
    description:
      "Tratamento de patologias do esôfago, estômago, intestinos e vesícula. Técnicas minimamente invasivas e cuidado integral.",
  },
  {
    id: "05",
    title: "Nutrição Integrativa",
    description:
      "Plano dietoterápico para pré e pós-operatório bariátrico, tratamento de sobrepeso e reeducação alimentar consciente.",
  },
  {
    id: "06",
    title: "Cirurgia Vascular e Estética Vascular",
    description:
      "Tratamento de varizes, vasinhos e lipedema. Escleroterapia, laser transdérmico, radiofrequência e termoablação.",
  },
  {
    id: "07",
    title: "Teste Respiratório de Hidrogênio",
    description:
      "Exame não invasivo para investigação de SIBO e IMO, por análise de H₂ e CH₄ expirados.",
  },
  {
    id: "08",
    title: "Reposição Injetável de Vitaminas",
    description:
      "Terapia endovenosa ou intramuscular personalizada para reposição de vitaminas e minerais, especialmente pós-bariátrica.",
  },
  {
    id: "09",
    title: "Eletrocardiograma (ECG)",
    description:
      "Exame rápido e indolor para registro da atividade elétrica cardíaca. Detecção de arritmias e avaliação cardiovascular.",
  },
];

export default function ServicesPremium() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="services" className="py-20 bg-[#123247] relative overflow-hidden">
      {/* Background detail */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Commercial Editorial Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9B77A] mb-4 font-sans">
              Especialidades
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.18] font-sans mb-4">
              Áreas de atuação do <span className="text-[#D9B77A]">instituto.</span>
            </h2>
            <p className="text-sm text-white/50 mb-8 font-sans leading-relaxed">
              Cada especialidade é conduzida por profissionais especializados, com protocolos integrados e foco na segurança absoluta do paciente.
            </p>

            {/* Medical Trust highlights */}
            <div className="space-y-4 pt-6 border-t border-white/10 hidden lg:block">
              {[
                "Tratamento Integrado e Coordenado",
                "Protocolos Baseados em Evidências",
                "Segurança e Suporte Cirúrgico",
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle size={14} className="text-[#D9B77A] shrink-0" />
                  <span className="text-xs text-white/70 font-sans">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Accordion */}
          <div className="lg:col-span-8 w-full">
            <div className="flex flex-col gap-3">
              {services.map((s, i) => {
                const isOpen = openIdx === i;
                return (
                  <div 
                    key={s.id}
                    className={`transition-all duration-300 border ${
                      isOpen 
                        ? "bg-white/[0.03] border-white/10 rounded-[12px] p-5" 
                        : "bg-transparent border-transparent border-b-white/[0.06] py-3.5 px-2"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left group outline-none focus-visible:ring-1 focus-visible:ring-[#D9B77A]/30"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-5 min-w-0">
                        <span className={`text-[11px] font-bold font-sans tabular-nums shrink-0 w-6 transition-colors duration-200 ${isOpen ? "text-[#D9B77A]" : "text-white/20 group-hover:text-white/35"}`}>
                          {s.id}
                        </span>
                        <span className={`text-base md:text-lg font-semibold font-sans leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-white/70 group-hover:text-white/90"}`}>
                          {s.title}
                        </span>
                      </div>
                      <ChevronDown size={16} className={`shrink-0 transition-all duration-200 ${isOpen ? "text-[#D9B77A] rotate-180" : "text-white/20 group-hover:text-white/35"}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 pl-6 sm:pl-11 pr-4 max-w-xl">
                            <p className="text-[0.85rem] text-white/50 leading-[1.7] font-sans mb-4">
                              {s.description}
                            </p>
                            <a
                              href="https://wa.me/5511932202177"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D9B77A] hover:text-white transition-colors duration-200 font-sans"
                            >
                              Agendar consulta
                              <ArrowRight size={11} />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA block */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-10 pt-8 border-t border-white/10 w-full">
              <p className="text-xs text-white/40 font-sans text-center sm:text-left">
                Dúvidas sobre qual especialidade? Nossa equipe orienta você.
              </p>
              <a
                href="https://wa.me/5511932202177"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 px-6 border border-[#D9B77A]/35 text-[#D9B77A] hover:bg-[#D9B77A] hover:text-[#0B1F2E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[6px] transition-all duration-250 font-sans"
              >
                Falar com a Equipe
                <ArrowRight size={12} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
