import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "J.S.",
    area: "Cirurgia Bariátrica",
    rating: 5,
    text: "Atendimento excepcional do início ao fim. Os doutores são muito profissionais e dedicados. Senti extrema segurança técnica em todos os momentos e recomendo para toda a família.",
  },
  {
    initials: "M.S.",
    area: "Cirurgia Vascular",
    rating: 5,
    text: "Clínica muito bem estruturada, com ambiente realmente acolhedor. Sentir-me verdadeiramente cuidada e acolhida fez toda a diferença no meu tratamento.",
  },
  {
    initials: "C.O.",
    area: "Cardiologia",
    rating: 5,
    text: "Profissionalismo de primeira qualidade. Explicações claras, sem jargões desnecessários, transmitindo confiança máxima em todas as etapas.",
  },
  {
    initials: "A.C.",
    area: "Psicologia",
    rating: 5,
    text: "Experiência muito positiva. Ambiente elegante e equipe de recepção altamente atenciosa. Um novo padrão de atendimento médico em Jundiaí.",
  },
];

export default function TestimonialsPremium() {
  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-[#0B1F2E] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9B77A] mb-4 font-sans">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.18] font-sans mb-2">
            O que dizem nossos <span className="text-[#D9B77A]">pacientes.</span>
          </h2>
          <p className="text-sm text-white/38 max-w-md font-sans">
            Relatos de pacientes reais. Identidades preservadas por ética médica.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white/[0.04] border border-white/[0.06] rounded-[12px] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={12} className="fill-[#D9B77A] text-[#D9B77A]" />
                  ))}
                </div>
                <p className="text-[0.85rem] text-white/60 leading-[1.7] font-sans mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                <div className="w-9 h-9 rounded-full bg-[#D9B77A]/[0.08] border border-[#D9B77A]/20 flex items-center justify-center text-[10px] font-bold text-[#D9B77A] font-sans select-none">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-white/65 font-sans">Paciente Verificado</p>
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.15em] font-sans">{t.area}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] pt-8">
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-[#D9B77A] text-[#D9B77A]" />
            ))}
            <span className="text-xs text-white/30 font-sans ml-1">Google Meu Negócio</span>
          </div>
          <a
            href="https://share.google/P0KNOGa3IZ53SQZhd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D9B77A] hover:text-white transition-colors font-sans border-b border-[#D9B77A]/20 pb-0.5"
          >
            Ver todos os depoimentos
          </a>
        </div>
      </div>
    </section>
  );
}
