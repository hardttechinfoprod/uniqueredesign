import { doctors } from "@/lib/doctors";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function cleanName(raw: string): string {
  return raw.split("\n")[0].trim();
}

function extractCRM(raw: string): string | null {
  const parts = raw.split("\n");
  return parts.length > 1 ? parts[1].replace(/[()]/g, "").trim() : null;
}

export default function DoctorsPremium() {
  return (
    <section id="doctors" className="py-16 lg:py-20 bg-[#FCFAF7] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9B77A] mb-4 font-sans">
            Corpo Clínico
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#123247] leading-[1.18] font-sans mb-2">
            Profissionais com{" "}
            <span className="text-[#D9B77A]">formação de referência.</span>
          </h2>
          <p className="text-sm text-[#667789] max-w-lg font-sans">
            Cada membro da equipe é selecionado pela qualificação técnica,
            experiência clínica e compromisso com o atendimento humanizado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-5">
          {doctors.map((doc, i) => {
            const name = cleanName(doc.name);
            const crm = extractCRM(doc.name);
            return (
              <motion.a
                key={doc.id}
                href={`/doctor/${doc.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
                className="group flex flex-col bg-[#FCFAF7] border border-[#EAE3D9] rounded-[12px] p-2.5 hover:border-[#D9B77A]/50 transition-all duration-400 hover:shadow-[0_8px_24px_rgba(18,50,71,0.06)] hover:-translate-y-1"
              >
                {/* Photo — consistent 4:5 with rounded-[14px] */}
                <div className="relative w-full overflow-hidden bg-[#F7F2EA] rounded-[14px]" style={{ aspectRatio: "4/5" }}>
                  <img
                    src={doc.imageCompressed}
                    alt={name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Specialty label */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#123247]/70 via-[#123247]/25 to-transparent pt-8 pb-3 px-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/90 font-sans">
                      {doc.specialty}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="text-[0.85rem] font-semibold text-[#123247] leading-snug mb-0.5 font-sans group-hover:text-[#0B1F2E] transition-colors">
                    {name}
                  </h3>
                  {crm && (
                    <p className="text-[10px] text-[#667789]/70 font-sans mb-2">{crm}</p>
                  )}
                  <p className="text-[0.75rem] text-[#667789] leading-[1.55] font-sans line-clamp-2 flex-grow">
                    {doc.bio}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-[#EAE3D9]/50 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.15em] text-[#667789] group-hover:text-[#D9B77A] transition-colors font-sans">
                    <span>Ver perfil</span>
                    <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 pt-8 border-t border-[#EAE3D9]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-[#123247] font-sans">
              Quer conhecer a equipe <span className="text-[#D9B77A]">pessoalmente?</span>
            </p>
            <p className="text-sm text-[#667789] font-sans">Agende uma consulta de avaliação.</p>
          </div>
          <a
            href="https://wa.me/5511932202177"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 px-6 bg-[#123247] hover:bg-[#0B1F2E] text-[#FCFAF7] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[6px] transition-all duration-300 font-sans group shrink-0"
          >
            Agendar Consulta
            <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
