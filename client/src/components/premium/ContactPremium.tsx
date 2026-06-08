import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";

export default function ContactPremium() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário premium enviado:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[#123247] relative overflow-hidden"
    >
      {/* Background visual detail */}
      <div className="absolute left-0 top-0 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-center text-white">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9B77A] mb-4 block font-sans">
              Agendamentos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.2] mb-6 font-sans">
              Fale Conosco <br />
              <span className="text-[#D9B77A] font-medium">e tire suas dúvidas.</span>
            </h2>
            <div className="h-[1px] w-16 bg-[#D9B77A]/50 mb-8" />

            <div className="space-y-6">
              {/* Telefone Fixo */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D9B77A] shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-0.5 font-sans">Telefone Fixo</h4>
                  <a href="tel:1145862755" className="text-sm text-white/80 hover:text-[#D9B77A] transition-colors font-sans">
                    (11) 4586-2755
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D9B77A] shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-0.5 font-sans">WhatsApp</h4>
                  <a href="https://wa.me/5511932202177" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-[#D9B77A] transition-colors font-sans">
                    (11) 93220-2177
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D9B77A] shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-0.5 font-sans">E-mail</h4>
                  <a href="mailto:contato@institutounique.com" className="text-sm text-white/80 hover:text-[#D9B77A] transition-colors font-sans">
                    contato@institutounique.com
                  </a>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D9B77A] shrink-0">
                  <Clock size={14} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-0.5 font-sans">Horário de Funcionamento</h4>
                  <p className="text-sm text-white/80 font-sans">
                    Segunda a sexta das 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Boxed Form */}
          <div className="lg:col-span-7 bg-[#FCFAF7] border border-[#EAE3D9] p-6 sm:p-8 md:p-10 rounded-[12px] shadow-[0_12px_40px_rgba(18,50,71,0.04)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nome */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#123247] mb-2 font-sans">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#EAE3D9] focus:border-[#D9B77A] focus:outline-none transition-colors text-[#123247] placeholder-[#667789]/40 text-sm rounded-[8px] font-sans"
                  placeholder="Como gostaria de ser chamado?"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#123247] mb-2 font-sans">
                  Endereço de E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#EAE3D9] focus:border-[#D9B77A] focus:outline-none transition-colors text-[#123247] placeholder-[#667789]/40 text-sm rounded-[8px] font-sans"
                  placeholder="exemplo@email.com"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#123247] mb-2 font-sans">
                  Telefone para Contato
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#EAE3D9] focus:border-[#D9B77A] focus:outline-none transition-colors text-[#123247] placeholder-[#667789]/40 text-sm rounded-[8px] font-sans"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#123247] mb-2 font-sans">
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-[#EAE3D9] focus:border-[#D9B77A] focus:outline-none transition-colors text-[#123247] placeholder-[#667789]/40 text-sm rounded-[8px] font-sans resize-none"
                  placeholder="Como nossa equipe pode ajudar você?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#123247] hover:bg-[#0B1F2E] text-[#FCFAF7] text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-[6px] flex items-center justify-center gap-2 group font-sans"
              >
                Enviar Mensagem
                <Send size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
