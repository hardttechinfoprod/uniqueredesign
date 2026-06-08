import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Gallery: 6 photos in a controlled editorial grid.
 * Row 1: 1 hero image (left, larger) + 2 smaller (right, stacked).
 * Row 2: 3 equal images.
 * Clicking opens lightbox.
 */
const featured = [
  { src: "/unique-1.jpeg", title: "Recepção" },
  { src: "/unique-2.jpeg", title: "Entrada Principal" },
  { src: "/unique-3.jpeg", title: "Consultório" },
  { src: "/unique-5.jpeg", title: "Ambiente Integrado" },
  { src: "/unique-7.jpeg", title: "Espaço Café" },
  { src: "/unique-11.jpeg", title: "Sala de Atendimento" },
];

export default function GalleryPremium() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIdx((c) => (c === null ? null : c === 0 ? featured.length - 1 : c - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIdx((c) => (c === null ? null : c === featured.length - 1 ? 0 : c + 1));
  };

  const imgClass = "w-full h-full object-cover cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] rounded-[14px]";

  return (
    <section className="py-16 lg:py-20 bg-[#F7F2EA] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9B77A] mb-4 font-sans">
            Infraestrutura
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#123247] leading-[1.18] font-sans">
            Conheça nosso <span className="text-[#D9B77A]">espaço.</span>
          </h2>
          <p className="text-sm text-[#667789] mt-2 max-w-md font-sans">
            Estrutura planejada para conforto, privacidade e segurança
            em cada atendimento.
          </p>
        </div>

        {/* Mobile Grid (hidden on desktop/tablet) */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {featured.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-[12px] overflow-hidden border border-[#EAE3D9] cursor-pointer"
              style={{ aspectRatio: "4/3" }}
              onClick={() => openLightbox(idx)}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]" loading="lazy" />
              <div className="absolute bottom-2 left-2 bg-[#123247]/70 text-white text-[8px] font-bold uppercase tracking-[0.15em] px-1.5 py-0.5 rounded-[3px] font-sans">
                {img.title}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Editorial Grid / Tablet Grid (hidden on mobile) */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Row 1: Hero left + 2 stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Main large image (hero) */}
            <div
              className="md:col-span-2 relative rounded-[14px] overflow-hidden border border-[#EAE3D9] h-[240px] sm:h-[300px] md:h-[380px]"
              onClick={() => openLightbox(0)}
            >
              <img src={featured[0].src} alt={featured[0].title} className={imgClass} loading="lazy" />
              <div className="absolute bottom-3 left-3 bg-[#123247]/70 text-white text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-[4px] font-sans">
                {featured[0].title}
              </div>
            </div>

            {/* 2 stacked right */}
            <div className="flex flex-col gap-4 md:h-[380px]">
              {[1, 2].map((idx) => (
                <div
                  key={idx}
                  className="relative rounded-[14px] overflow-hidden border border-[#EAE3D9] h-[180px] md:h-[182px]"
                  onClick={() => openLightbox(idx)}
                >
                  <img src={featured[idx].src} alt={featured[idx].title} className={imgClass} loading="lazy" />
                  <div className="absolute bottom-2 left-2 bg-[#123247]/70 text-white text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-[4px] font-sans">
                    {featured[idx].title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: 3 equal columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[3, 4, 5].map((idx) => (
              <div
                key={idx}
                className="relative rounded-[14px] overflow-hidden border border-[#EAE3D9] h-[180px] md:h-[260px]"
                onClick={() => openLightbox(idx)}
              >
                <img src={featured[idx].src} alt={featured[idx].title} className={imgClass} loading="lazy" />
                <div className="absolute bottom-2 left-2 bg-[#123247]/70 text-white text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-[4px] font-sans">
                  {featured[idx].title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0B1F2E]/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white p-2 z-50"
              onClick={closeLightbox}
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 md:left-8 z-40 bg-white/5 border border-white/10 hover:border-[#D9B77A] text-white hover:text-[#D9B77A] p-2.5 rounded-full transition-colors"
              onClick={prev}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              src={featured[lightboxIdx].src}
              alt={featured[lightboxIdx].title}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-[14px]"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 md:right-8 z-40 bg-white/5 border border-white/10 hover:border-[#D9B77A] text-white hover:text-[#D9B77A] p-2.5 rounded-full transition-colors"
              onClick={next}
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold tracking-[0.2em] text-[#D9B77A] font-sans">
              {lightboxIdx + 1} / {featured.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
