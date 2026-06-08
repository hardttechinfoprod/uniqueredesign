/* Design: Sofisticação Clássica com Acentos Modernos */
/* Hero section com imagem expandida, brilho e call-to-action */

export default function HeroSection() {
  return (
    <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden mt-20">
      {/* Imagem de fundo expandida */}
      <img
        src="/unique-2.jpeg"
        alt="Unique Instituto de Cirurgia"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay Gradiente + Brilho */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay animate-pulse" />

      {/* Conteúdo */}
      <div className="container relative z-10 flex flex-col items-start justify-center h-full max-w-2xl">
        <div className="animate-fade-in-up">
          {/* Linha Decorativa */}
          <div className="divider-gold mb-6" />

          {/* Título */}
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Unique Instituto de Cirurgia
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-white/90 mb-8 font-light max-w-xl">
            Uma equipe completa para cuidar de você.
          </p>

          {/* Linha Decorativa */}
          <div className="divider-gold mb-8" />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511932202177"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elegant inline-block text-center"
            >
              Agendar Consulta
            </a>
            <a
              href="#doctors"
              className="btn-elegant-outline inline-block text-center text-white border-white hover:bg-white hover:text-primary"
            >
              Nossa Equipe Unique Instituto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
