import { motion } from "framer-motion";

const values = [
  {
    id: "01",
    title: "Cuidado integrado",
    description:
      "Cirurgiões, psicólogos e nutricionistas atuam em conjunto para oferecer acompanhamento coordenado antes e depois do procedimento.",
  },
  {
    id: "02",
    title: "Segurança clínica",
    description:
      "Protocolos atualizados, avaliação individualizada e condutas baseadas em evidências para apoiar cada etapa do cuidado.",
  },
  {
    id: "03",
    title: "Estrutura acolhedora",
    description:
      "Um ambiente planejado para receber pacientes com conforto, privacidade e atenção aos detalhes.",
  },
];

export default function ManifestoPremium() {
  return (
    <section id="manifesto" className="py-16 lg:py-20 bg-[#FCFAF7] border-t border-[#EAE3D9]/50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden border border-[#EAE3D9]">
              <img
                src="/unique-1.jpeg"
                alt="Interior do Unique Instituto"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9B77A] mb-4 font-sans">
              O Instituto
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123247] leading-[1.18] font-sans mb-4">
              Medicina de excelência com{" "}
              <span className="text-[#D9B77A]">atendimento humanizado.</span>
            </h2>

            <p className="text-sm text-[#667789] leading-[1.75] mb-4 font-sans">
              No Unique Instituto de Cirurgia, o sucesso de um procedimento
              começa na confiança. Oferecemos uma jornada coordenada de cuidados
              integrativos com equipe multidisciplinar desde a primeira consulta.
            </p>
            <p className="text-sm text-[#667789] leading-[1.75] font-sans">
              Combinamos tecnologia de ponta a uma infraestrutura boutique para
              que cada paciente sinta-se amparado por profissionais que planejam
              e decidem em conjunto cada etapa do tratamento.
            </p>
          </div>
        </div>

        {/* Horizontal gold thin line separator */}
        <div className="w-full h-[1px] bg-[#D9B77A]/40 mt-16 mb-10" />

        {/* Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {values.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex flex-col md:px-8 first:pl-0 last:pr-0 border-b md:border-b-0 border-[#EAE3D9]/50 pb-8 md:pb-0 pt-6 md:pt-0 first:pt-0 last:pb-0 last:border-b-0 ${
                i < 2 ? "md:border-r border-[#EAE3D9]/40" : ""
              }`}
            >
              <span className="text-[1.15rem] font-bold text-[#D9B77A] font-sans mb-3 block tracking-wider">
                {v.id}
              </span>
              <h3 className="text-base font-bold text-[#0B1F2E] mb-2.5 font-sans uppercase tracking-wide">
                {v.title}
              </h3>
              <p className="text-[0.82rem] text-[#667789] leading-[1.65] font-sans">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
