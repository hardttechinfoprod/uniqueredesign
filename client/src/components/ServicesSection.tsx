/* Design: Sofisticação Clássica com Acentos Modernos */
/* Seção de serviços com ícones e descrições */

import { Heart, Brain, Baby, Zap, Bone, Stethoscope, Cherry, CogIcon, CircuitBoard, PillBottle, AsteriskSquare, GrabIcon } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Cardiologista",
    description: "Diagnóstico e tratamento de doenças cardiovasculares com tecnologia avançada.",
  },
  {
    icon: Brain,
    title: "Psicólogo",
    description: "Especialista em saúde emocional e desenvolvimento pessoal, com atuação em Terapia Cognitivo-Comportamental e foco em transtornos alimentares, obesidade e acompanhamento psicológico pré e pós-bariátrica.",
  },
  {
    icon: Stethoscope,
    title: "Cirurgias de doencas do aparelho digestivo e da parede abdominal",
    description: "Tratamento clinico e/ou cirurgico com conducao humanizada e holistica da saúde do paciente.",
  },
  {
    icon: Cherry,
    title: "Nutricionista",
    description: "Especialista em seguimento pré e pós operatório para Cirurgia Bariátrica, tratamento clinico para controle do Sobrepeso e Obesidade. Membro da COESAS pela Sociedade Brasileira de Cirurgia Bariatrica e Metabólica.",
  },
  {
    icon: GrabIcon,
    title: "Cuidados vasculares e estéticos",
    description: "Utilizando tecnologias de ponta como escleroterapia com espuma, escleroterapia a laser. Tratamento da doença venosa com procedimentos minimamente invasivos como, laser transdérmico, radio frequência e termoablação.",
  },
  {
    icon: CogIcon,
    title: "Equipe Multidisciplinar",
    description: "Aqui você encontra uma equipe multidisciplinar que acolhe o paciente em seus vários aspectos multimidais que podem interferir na sua saúde e na qualidade de vida. Agir nas causas de maneira multifatorial e multidisciplinar não é luxo, é necessidade; e oque você precisa, com certeza, você encontra aqui na UNIQUE INSTITUTO DE CIRURGIA!",
  },
  {
    icon: AsteriskSquare,
    title: "Exame teste respiratório",
    description: "Para SIBO e IMO (H2 expirado).",
  },
  {
    icon: PillBottle,
    title: "Reposição de vitaminas",
    description: "Reposição de vitaminas é essencial para manter o equilíbrio do corpo e garantir energia, imunidade e bem-estar.",
  },
  {
    icon: CircuitBoard,
    title: "Eletrocardiograma",
    description: "Um exame simples e rápido que registra a atividade elétrica do coração.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-muted/20">
      <div className="container">
        {/* Cabeçalho */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="divider-gold" />
          </div>
          <h2
            className="text-5xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nossos Serviços
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços médicos especializados para sua saúde.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-elegant hover:shadow-elegant-hover transition-all duration-500 group"
                style={{
                  animation: `fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                {/* Ícone */}
                <div className="icon-circle mb-6">
                  <IconComponent size={24} />
                </div>

                {/* Título */}
                <h3
                  className="text-xl font-bold text-primary mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="text-secondary text-sm leading-relaxed">{service.description}</p>

                {/* Linha Decorativa */}
                <div className="mt-6 h-1 w-8 bg-accent rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
