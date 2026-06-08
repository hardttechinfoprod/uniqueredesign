/* Design: Sofisticação Clássica com Acentos Modernos */
/* Galeria de doutores com cards animados e overlay gradiente */

import { doctors } from "@/lib/doctors";
import { ArrowRight } from "lucide-react";

export default function DoctorsGallery() {
  return (
    <section id="doctors" className="py-20 bg-white border-bottom-gold">
      <div className="container">
        {/* Cabeçalho */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="divider-gold" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nossa Equipe
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Profissionais reconhecidos, preparados para cuidar de você com responsabilidade e confiança.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => {
            const isEven = index % 2 === 0;
            const animationName = isEven ? "revealFromLeft" : "revealFromRight";
            
            return (
              <a
                key={doctor.id}
                href={`/doctor/${doctor.id}`}
                className="card-doctor group cursor-pointer block"
                style={{
                  animation: `${animationName} 700ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                  animationDelay: `${index * 150}ms`,
                  opacity: 0,
                }}
              >
                {/* Imagem */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={doctor.imageCompressed}
                    alt={doctor.name}
                    className="card-doctor-image w-full h-full object-cover object-center"
                  />

                  {/* Overlay Gradiente */}
                  <div className="card-doctor-overlay">
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-4">{doctor.specialty}</p>
                    <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Ver Perfil</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Informações */}
                <div className="p-6 bg-white">
                  <h3
                    className="text-xl font-bold text-primary mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-3">{doctor.specialty}</p>
                  <p className="text-sm text-secondary line-clamp-2">{doctor.bio}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
