import { MessageCircle } from "lucide-react";

export default function WhatsAppPremium() {
  return (
    <a
      href="https://wa.me/5511932202177"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 md:right-6 z-40 w-[52px] h-[52px] rounded-full bg-[#123247] text-[#D9B77A] flex items-center justify-center shadow-[0_4px_16px_rgba(18,50,71,0.25)] hover:bg-[#0B1F2E] hover:shadow-[0_6px_24px_rgba(18,50,71,0.35)] transition-all duration-300"
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
      title="WhatsApp — Fale Conosco"
      aria-label="Falar via WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
}
