/* Design: Sofisticação Clássica com Acentos Modernos */
/* Seção de galeria de fotos do espaço da clínica */

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function GallerySection() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([
    {
      id: 1,
      title: "",
      description: "",
      image: "./unique-1.jpeg"
    },
    {
      id: 2,
      title: "",
      description: "",
      image: "./unique-2.jpeg"
    },
    {
      id: 3,
      title: "",
      description: "",
      image: "./unique-3.jpeg"
    },
    
    {
      id: 4,
      title: "",
      description: "",
      image: "./unique-4.jpeg"
    },
    {
      id: 5,
      title: "",
      description: "",
      image: "./unique-5.jpeg"
    },
    {
      id: 6,
      title: "",
      description: "",
      image: "./unique-6.jpeg"
    },
    {
      id: 7,
      title: "",
      description: "",
      image: "./unique-7.jpeg"
    },
    {
      id: 8,
      title: "",
      description: "",
      image: "./unique-8.jpeg"
    },
    {
      id: 9,
      title: "",
      description: "",
      image: "./unique-10.jpeg"
    },
    {
      id: 10,
      title: "",
      description: "",
      image: "./unique-11.jpeg"
    },
    {
      id: 11,
      title: "",
      description: "",
      image: "./unique-12.jpeg"
    },
    {
      id: 12,
      title: "",
      description: "",
      image: "./unique-13.jpeg"
    },
    {
      id: 13,
      title: "",
      description: "",
      image: "./unique-14.jpeg"
    },
    {
      id: 14,
      title: "",
      description: "",
      image: "./unique-15.jpeg"
    },
    {
      id: 15,
      title: "",
      description: "",
      image: "./unique-16.jpeg"
    },
    {
      id: 16,
      title: "",
      description: "",
      image: "./unique-17.jpeg"
    },
    {
      id: 17,
      title: "",
      description: "",
      image: "./unique-18.jpeg"
    },
    {
      id: 18,
      title: "",
      description: "",
      image: "./unique-19.jpeg"
    },
    {
      id: 19,
      title: "",
      description: "",
      image: "./unique-20.jpeg"
    },
    {
      id: 21,
      title: "",
      description: "",
      image: "./unique-22.jpeg"
    }
    

  ]);

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(galleryImages.indexOf(image));
  };

  const handlePreviousModal = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleNextModal = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        {/* Cabeçalho */}
        <div className="gallery-header">
          <h2 className="gallery-title" style={{ fontFamily: "var(--font-display)" }}>
            Conheça Nosso Espaço
          </h2>
          <p className="gallery-subtitle">
            
          </p>
        </div>

        {/* Grid de Fotos */}
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-card"
              onClick={() => handleImageClick(image)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={image.image}
                  alt={image.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3 className="gallery-card-title">{image.title}</h3>
                    <p className="gallery-card-description">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Visualização */}
      {selectedImage && (
        <div className="gallery-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            {/* Botão Fechar */}
            <button
              className="gallery-modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            {/* Imagem Grande */}
            <div className="gallery-modal-image-wrapper">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="gallery-modal-image"
              />
            </div>

            {/* Informações */}
            <div className="gallery-modal-info">
              <h3 className="gallery-modal-title" style={{ fontFamily: "var(--font-display)" }}>
                {selectedImage.title}
              </h3>
              <p className="gallery-modal-description">{selectedImage.description}</p>
              <p className="gallery-modal-counter">
                {currentIndex + 1} de {galleryImages.length}
              </p>
            </div>

            {/* Navegação */}
            <div className="gallery-modal-navigation">
              <button
                className="gallery-nav-button"
                onClick={handlePreviousModal}
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="gallery-nav-button"
                onClick={handleNextModal}
                aria-label="Próximo"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicadores */}
            <div className="gallery-modal-indicators">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`gallery-indicator ${index === currentIndex ? "active" : ""}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSelectedImage(galleryImages[index]);
                  }}
                  aria-label={`Ir para foto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
