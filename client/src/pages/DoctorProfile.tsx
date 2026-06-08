import { useParams } from "wouter";
import { getDoctorById, doctors } from "@/lib/doctors";
import { ArrowLeft, Clock, FileText, Award, Languages, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import HeaderPremium from "@/components/premium/HeaderPremium";
import FooterPremium from "@/components/premium/FooterPremium";

function cleanName(raw: string): string {
  return raw.split("\n")[0].trim();
}

function extractCRM(raw: string): string | null {
  const parts = raw.split("\n");
  return parts.length > 1 ? parts[1].replace(/[()]/g, "").trim() : null;
}

export default function DoctorProfile() {
  const { id } = useParams<{ id: string }>();
  const doctor = getDoctorById(id || "");

  if (!doctor) {
    return (
      <div className="min-h-screen bg-[#FCFAF7] flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold text-[#123247] mb-4 font-sans">
          Profissional não encontrado
        </h1>
        <a 
          href="/" 
          className="inline-flex items-center justify-center h-12 px-6 bg-[#123247] hover:bg-[#0B1F2E] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-[6px] transition-colors duration-300 font-sans"
        >
          Voltar para a Home
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#667789] font-sans antialiased">
      <HeaderPremium />

      {/* Main Content Area */}
      <main className="pt-28 sm:pt-32 md:pt-36 pb-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
          
          {/* Back Button */}
          <a
            href="/#doctors"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#667789] hover:text-[#123247] transition-all duration-300 mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para Corpo Clínico
          </a>

          {/* Profile Hero (Desktop: 2 Columns, Mobile: Stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full overflow-hidden bg-[#F7F2EA] rounded-[14px] border border-[#EAE3D9] shadow-sm" style={{ aspectRatio: "4/5" }}>
                <img
                  src={doctor.image}
                  alt={cleanName(doctor.name)}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#123247]/40 via-[#123247]/10 to-transparent pt-12 pb-4 px-4 text-white text-[10px] font-bold uppercase tracking-[0.15em] font-sans">
                  {doctor.specialty}
                </div>
              </div>
            </div>

            {/* Right Column: Premium Information Box */}
            <div className="lg:col-span-7 bg-[#123247] text-[#FCFAF7] rounded-[12px] p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-md w-full">
              {/* Gold top highlight bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-[#D9B77A]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D9B77A] mb-3 font-sans">
                Profissional Verificado
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-2 font-sans text-white">
                {cleanName(doctor.name)}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-[#D9B77A]/10 border border-[#D9B77A]/25 text-[#D9B77A] text-[9px] font-bold uppercase tracking-[0.15em] rounded-[4px] font-sans">
                  {doctor.specialty}
                </span>
                {extractCRM(doctor.name) && (
                  <span className="text-xs text-white/50 font-sans">
                    {extractCRM(doctor.name)}
                  </span>
                )}
              </div>

              <div className="h-[1px] bg-white/10 mb-6" />

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <Clock size={16} className="text-[#D9B77A] shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-white/40 mb-0.5">Disponibilidade</p>
                    <p className="text-sm font-sans font-light">{doctor.availability}</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/5511932202177"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 inline-flex items-center justify-center bg-[#D9B77A] hover:bg-[#c9a76a] text-[#0B1F2E] text-[11px] font-bold uppercase tracking-[0.2em] rounded-[6px] transition-colors duration-300 font-sans"
              >
                Agendar Consulta via WhatsApp
              </a>
            </div>
          </div>

          {/* Sub-Layout: Professional Details (Tags left, content right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 pt-12 border-t border-[#EAE3D9]/50">
            
            {/* Left Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Languages */}
              {doctor.languages && doctor.languages.length > 0 && (
                <div className="bg-[#FCFAF7] border border-[#EAE3D9] rounded-[12px] p-6 shadow-sm">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#123247] mb-4 font-sans">
                    Idiomas de Atendimento
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-[#F7F2EA] border border-[#EAE3D9] text-[#123247] text-xs font-semibold rounded-[4px] font-sans"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation Types */}
              {doctor.consultationTypes && doctor.consultationTypes.length > 0 && (
                <div className="bg-[#FCFAF7] border border-[#EAE3D9] rounded-[12px] p-6 shadow-sm">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#123247] mb-4 font-sans">
                    Tipos de Consulta
                  </h4>
                  <div className="space-y-2.5">
                    {doctor.consultationTypes.map((type, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#667789] font-sans">
                        <CheckCircle2 size={13} className="text-[#D9B77A] shrink-0" />
                        <span>{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Main Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Biography / Bio */}
              <section className="space-y-3">
                <h3 className="text-xl font-bold text-[#123247] font-sans">
                  Sobre o Profissional
                </h3>
                <p className="text-sm text-[#667789] leading-[1.75] font-sans font-light whitespace-pre-line">
                  {doctor.bio}
                </p>
              </section>

              {/* Professional Experience */}
              {doctor.experience && doctor.experience.trim().length > 0 && (
                <section className="space-y-3 pt-8 border-t border-[#EAE3D9]/50">
                  <div className="flex items-center gap-2 text-[#123247]">
                    <FileText size={18} className="text-[#D9B77A]" />
                    <h3 className="text-xl font-bold font-sans">
                      Experiência Clínico-Hospitalar
                    </h3>
                  </div>
                  <p className="text-sm text-[#667789] leading-[1.75] font-sans font-light whitespace-pre-line">
                    {doctor.experience.trim()}
                  </p>
                </section>
              )}

              {/* Academic Education */}
              {doctor.education && doctor.education.trim().length > 0 && (
                <section className="space-y-3 pt-8 border-t border-[#EAE3D9]/50">
                  <h3 className="text-xl font-bold text-[#123247] font-sans">
                    Formação Acadêmica
                  </h3>
                  <div className="space-y-3">
                    {doctor.education.split("\n").filter(edu => edu.trim().length > 0).map((edu, index) => (
                      <div key={index} className="flex gap-3 text-sm text-[#667789] font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9B77A] mt-2 flex-shrink-0" />
                        <span className="font-light leading-relaxed">{edu}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Certifications and Associations */}
              {doctor.certifications && doctor.certifications.length > 0 && (
                <section className="space-y-3 pt-8 border-t border-[#EAE3D9]/50">
                  <div className="flex items-center gap-2 text-[#123247]">
                    <Award size={18} className="text-[#D9B77A]" />
                    <h3 className="text-xl font-bold font-sans">
                      Associações & Certificações
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {doctor.certifications.filter(cert => cert.trim().length > 0).map((cert, index) => (
                      <div
                        key={index}
                        className="p-4 bg-[#F7F2EA]/40 border border-[#EAE3D9] rounded-[8px] text-xs text-[#667789] font-sans font-light"
                      >
                        {cert}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Intermediate Call-to-Action Block */}
          <div className="bg-[#F7F2EA] border border-[#EAE3D9]/80 rounded-[12px] p-6 sm:p-8 md:p-10 text-center max-w-3xl mx-auto mb-16 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-[#123247] mb-2 font-sans">
              Deseja agendar uma consulta com o(a) {cleanName(doctor.name)}?
            </h3>
            <p className="text-xs text-[#667789] max-w-md mx-auto mb-6 font-sans">
              Entre em contato com nossa recepção para verificar a disponibilidade de horários e realizar o agendamento de forma rápida e segura.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/5511932202177"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-11 inline-flex items-center justify-center px-6 bg-[#123247] hover:bg-[#0B1F2E] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-[6px] transition-colors duration-300 font-sans"
              >
                Agendar Consulta
              </a>
              <a
                href="https://wa.me/5511932202177"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 px-6 border border-[#123247]/20 hover:border-[#123247]/40 text-[#123247] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[6px] transition-colors duration-300 font-sans"
              >
                <Phone size={13} className="mr-1.5" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Section: Other Professionals */}
          {doctors.filter((doc) => doc.id !== doctor.id).length > 0 && (
            <div className="border-t border-[#EAE3D9]/50 pt-16">
              <div className="mb-8 text-center sm:text-left">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D9B77A] mb-2 font-sans">
                  Corpo Clínico
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#123247] font-sans">
                  Conheça também outros especialistas
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
                {doctors
                  .filter((doc) => doc.id !== doctor.id)
                  .slice(0, 3)
                  .map((otherDoc) => {
                    const nameOnly = cleanName(otherDoc.name);
                    return (
                      <a
                        key={otherDoc.id}
                        href={`/doctor/${otherDoc.id}`}
                        className="group flex flex-col bg-[#FCFAF7] border border-[#EAE3D9] rounded-[12px] p-2.5 hover:border-[#D9B77A]/50 transition-all duration-400 hover:shadow-[0_8px_24px_rgba(18,50,71,0.06)] hover:-translate-y-1"
                      >
                        {/* Portrait Photo */}
                        <div className="relative w-full overflow-hidden bg-[#F7F2EA] rounded-[10px]" style={{ aspectRatio: "4/5" }}>
                          <img
                            src={otherDoc.imageCompressed}
                            alt={nameOnly}
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#123247]/60 via-[#123247]/10 to-transparent pt-6 pb-2 px-2.5 text-white text-[8px] font-bold uppercase tracking-[0.15em] font-sans">
                            {otherDoc.specialty}
                          </div>
                        </div>

                        {/* Name and Action */}
                        <div className="p-2 flex flex-col flex-grow">
                          <h4 className="text-[12px] font-semibold text-[#123247] leading-snug font-sans group-hover:text-[#0B1F2E] transition-colors">
                            {nameOnly}
                          </h4>
                          <div className="mt-2.5 pt-2 border-t border-[#EAE3D9]/50 flex items-center justify-between text-[8px] font-bold uppercase tracking-[0.15em] text-[#667789] group-hover:text-[#D9B77A] transition-colors font-sans">
                            <span>Ver perfil</span>
                            <ChevronRight size={10} />
                          </div>
                        </div>
                      </a>
                    );
                  })}
              </div>
            </div>
          )}

        </div>
      </main>

      <FooterPremium />
    </div>
  );
}
