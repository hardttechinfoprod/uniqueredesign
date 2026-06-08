/* Design: Sofisticação Clássica com Acentos Modernos */
/* Página inicial com hero, galeria de doutores, serviços, depoimentos e contato */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DoctorsGallery from "@/components/DoctorsGallery";
import ServicesSection from "@/components/ServicesSection";
import RentalSection from "@/components/RentalSection"; // <-- PASSO 2: ADICIONAR ESTE IMPORT
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DoctorsGallery />
      <ServicesSection />
      <RentalSection /> {/* <-- PASSO 3: ADICIONAR ESTA TAG AQUI */}
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
