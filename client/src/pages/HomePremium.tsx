import HeaderPremium from "@/components/premium/HeaderPremium";
import HeroPremium from "@/components/premium/HeroPremium";
import ManifestoPremium from "@/components/premium/ManifestoPremium";
import ServicesPremium from "@/components/premium/ServicesPremium";
import DoctorsPremium from "@/components/premium/DoctorsPremium";
import RentalPremium from "@/components/premium/RentalPremium";
import GalleryPremium from "@/components/premium/GalleryPremium";
import TestimonialsPremium from "@/components/premium/TestimonialsPremium";
import ContactPremium from "@/components/premium/ContactPremium";
import FooterPremium from "@/components/premium/FooterPremium";
import WhatsAppPremium from "@/components/premium/WhatsAppPremium";

export default function HomePremium() {
  return (
    <div className="min-h-screen bg-[var(--premium-background)] text-[var(--premium-text)] font-sans antialiased overflow-x-hidden selection:bg-[var(--premium-accent)] selection:text-[var(--premium-primary)]">
      <HeaderPremium />
      <HeroPremium />
      <ManifestoPremium />
      <ServicesPremium />
      <DoctorsPremium />
      <RentalPremium />
      <GalleryPremium />
      <TestimonialsPremium />
      <ContactPremium />
      <FooterPremium />
      <WhatsAppPremium />
    </div>
  );
}
