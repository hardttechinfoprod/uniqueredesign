/* Design: Sofisticação Clássica com Acentos Modernos */
/* Seção de contato com formulário */

import { useState } from "react";

export default function ContactSection() {
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
    console.log("Formulário enviado:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-muted/20">
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
            Entre em Contato
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Dúvidas? Nossa equipe responde e agenda sua consulta.
          </p>
        </div>

        {/* Formulário ocupa toda a largura */}
        <div className="max-w-2xl mx-auto animate-slide-in-up">
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-white rounded-lg shadow-elegant space-y-6"
          >
            {/* Nome */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Seu nome"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="seu@email.com"
              />
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="(11) 91919-9919"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                placeholder="Digite sua mensagem..."
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full btn-elegant"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
