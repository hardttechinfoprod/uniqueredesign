import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

export default function HeroPremium() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1F2E]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#0B1F2E]">
        <img
          src="/unique-2.jpeg"
          alt="Unique Instituto de Cirurgia — Recepção"
          className="w-full h-full object-cover opacity-50 sm:opacity-65 object-[25%_center] sm:object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0B1F2E]/98 via-[#0B1F2E]/90 to-[#0B1F2E]/70 lg:from-[#0B1F2E]/95 lg:via-[#0B1F2E]/75 lg:to-[#0B1F2E]/25" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B1F2E]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-[22px] sm:px-6 md:px-10 w-full pt-28 pb-16 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center min-h-screen lg:min-h-screen py-10 lg:py-0">
          <div className="lg:col-span-8 xl:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9B77A] mb-5 font-sans">
                Unique Instituto de Cirurgia — Jundiaí, SP
              </p>

              {/* Headline — sans-serif, forte, médico */}
              <h1 className="text-[1.85rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.8rem] font-bold text-white leading-[1.18] tracking-tight mb-5 font-sans">
                Unique Instituto de Cirurgia
                <span className="block text-[1.1rem] sm:text-[1.35rem] md:text-[1.6rem] lg:text-[1.9rem] font-medium text-[#D9B77A] mt-2">
                  Cirurgia Bariátrica, Vascular e Equipe Multidisciplinar
                </span>
              </h1>

              {/* Subtitle — factual */}
              <p className="text-[15px] sm:text-[16px] md:text-base text-white/80 max-w-xl leading-[1.75] mb-6 sm:mb-8 font-sans">
                Estrutura cirúrgica completa e corpo clínico especializado. 
                Oferecemos acompanhamento integrado com cirurgiões, cardiologistas, 
                psicólogos e nutricionistas para garantir a sua segurança antes, durante e após o procedimento.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
                <a
                  href="https://wa.me/5511932202177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2.5 px-7 bg-[#D9B77A] hover:bg-[#c9a76a] text-[#0B1F2E] text-[11px] font-bold uppercase tracking-[0.18em] rounded-[6px] transition-all duration-300 font-sans group"
                >
                  Agendar Consulta
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2.5 px-7 border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-[11px] font-bold uppercase tracking-[0.18em] rounded-[6px] transition-all duration-300 font-sans"
                >
                  Conhecer Especialidades
                </a>
              </div>

              {/* Trust badges row */}
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-6 text-[12px] text-white/85 font-sans mb-8">
                <div className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-[2px] sm:bg-transparent p-3 sm:p-0 rounded-[8px] border border-white/[0.08] sm:border-transparent">
                  <Phone size={13} className="text-[#D9B77A] shrink-0" />
                  <a href="tel:1145862755" className="hover:text-white transition-colors font-medium">(11) 4586-2755</a>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-[2px] sm:bg-transparent p-3 sm:p-0 rounded-[8px] border border-white/[0.08] sm:border-transparent">
                  <Clock size={13} className="text-[#D9B77A] shrink-0" />
                  <span className="font-medium">Seg a Sex, 8h às 18h</span>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-[2px] sm:bg-transparent p-3 sm:p-0 rounded-[8px] border border-white/[0.08] sm:border-transparent">
                  <MapPin size={13} className="text-[#D9B77A] shrink-0" />
                  <span className="font-medium">Centro, Jundiaí — SP</span>
                </div>
              </div>

              {/* Mobile stats inline */}
              <div className="flex lg:hidden gap-8 border-t border-white/[0.08] pt-5 mt-2">
                {[
                  { v: "7+", l: "Especialistas" },
                  { v: "9", l: "Especialidades" },
                  { v: "2017", l: "Fundação" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-lg font-bold text-[#D9B77A] leading-none mb-1 font-sans">{s.v}</span>
                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/40 font-sans">{s.l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-4 xl:col-span-5 hidden lg:flex justify-end w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-[6px] p-7 w-52"
            >
              {[
                { v: "7+", l: "Especialistas" },
                { v: "9", l: "Especialidades" },
                { v: "2017", l: "Fundado em" },
              ].map((s, i) => (
                <div key={i} className={`flex flex-col ${i < 2 ? "pb-5 mb-5 border-b border-white/[0.07]" : ""}`}>
                  <span className="text-3xl font-bold text-[#D9B77A] leading-none mb-1 font-sans tabular-nums">
                    {s.v}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 font-sans">{s.l}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
