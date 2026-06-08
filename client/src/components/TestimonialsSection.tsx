/* Design: Sofisticação Clássica com Acentos Modernos */
/* Seção de depoimentos de pacientes */

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Paciente",
    text: "Atendimento excepcional! Os doutores são muito profissionais e dedicados. Recomendo para todos.",
    rating: 5,
    image: "/un-logo.png", // LOCAL ADIÇÃO DE FOTO - DEPOIMENTOS
  },
  {
    name: "Maria Santos",
    role: "Paciente",
    text: "Clínica muito bem estruturada com ambiente acolhedor. Senti-me muito bem cuidada durante toda consulta.",
    rating: 5,
    image: "/un-logo.png", // LOCAL ADIÇÃO DE FOTO - DEPOIMENTOS
  },
  {
    name: "Carlos Oliveira",
    role: "Paciente",
    text: "Profissionalismo de primeira qualidade. Os doutores explicam tudo com clareza e atenção.",
    rating: 5,
    image: "/un-logo.png", // LOCAL ADIÇÃO DE FOTO - DEPOIMENTOS
  },
  {
    name: "Ana Costa",
    role: "Paciente",
    text: "Experiência maravilhosa! Ambiente elegante e equipe muito atenciosa. Voltarei com certeza.",
    rating: 5,
    image: "/un-logo.png", // LOCAL ADIÇÃO DE FOTO - DEPOIMENTOS
  },
];

export default function TestimonialsSection( ) {
  return (
    <section id="testimonials" className="py-20 bg-white border-top-gold border-bottom-gold">
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
            Feedback
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A satisfação dos nossos pacientes é o reflexo do nosso compromisso.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-muted/10 rounded-lg shadow-elegant hover:shadow-elegant-hover transition-all duration-500 group"
              style={{
                animation: `slideInLeft 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
                animationDelay: `${index * 100}ms`,
                opacity: 0,
              }}
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Texto */}
              <p className="text-secondary text-sm mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Autor com Foto */}
              <div className="border-top-gold pt-4 flex items-center gap-3">
                {/* Foto do Paciente */}
                <div className="w-10 h-10 rounded-full overflow-hidden border border-accent/30 flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <p
                    className="font-bold text-primary text-sm"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
