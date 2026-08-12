/* Design: Sofisticação Clássica com Acentos Modernos */
/* Dados dos doutores com informações completas para galeria e páginas individuais */

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  imageCompressed: string;
  bio: string;
  experience: string;
  education: string;
  certifications: string[];
  languages: string[];
  consultationTypes: string[];
  availability: string;
}

export const doctors: Doctor[] = [
  {
    id: "cardiologist",
    name: "Drº. Felipe Bordinhon Mercante\n(CRM 145916)",
    specialty: "Cirurgia Bariátrica",
    image: "/dr.jpeg",
    imageCompressed: "/dr.jpeg",
    bio: "Felipe Bordinhon Mercante, especialista em cirurgia com ampla experiência em procedimentos de alta complexidade.",
    experience: "\n\nHospitais de atuação:\nHospital Santa Elisa de Jundiaí\n- Hospital Paulo Sacramento de Jundiaí\n- Hospital São Luiz Itaim\n- Hospital São Luiz de Alphaville\n- Hospital São Luiz de Campinas\n- Hospital St. James de Jarinu",
    education: "Formado pela Faculdade de Medicina de Jundiai (FMJ).\nResidência Médica pela Faculdade de Medicina de Jundiai. (FMJ)",
    certifications: [
      "Certificação Internacional IFSO-LAC IQ-I.",
      "Membro da Sociedade Brasileira de Cirurgia Bariátrica e Metabólica.",
      "Membro do Colégio Brasileiro de Cirurgiões."
    ],
    languages: ["Português", "Inglês", "Espanhol"],
    consultationTypes: ["Consulta Presencial", "Telemedicina", "Acompanhamento"],
    availability: "Segunda a Sexta, 8h às 18h"
  }


,
  {
    id: "neurologist",
    name: "Drº. Denis Toshikazu Taniuchi Hatanaka - CRM (168340-SP)",
    specialty: "Cardiologista",
    image: "/denis.jpeg",
    imageCompressed: "/denis.jpeg",
    bio: "Médico cardiologista Dr Denis Hatanaka formado pela Faculdade de Medicina de Jundiaí, com atuação voltada à prevenção, diagnóstico e acompanhamento das doenças cardiovasculares. Realiza atendimento com abordagem clínica criteriosa e acompanhamento contínuo e personalizado, focado na saúde e bem-estar do paciente.",
    experience: "Atuação na área de Cardiologia com foco na prevenção, diagnóstico e tratamento das doenças cardiovasculares, oferecendo acompanhamento clínico individualizado e orientado às necessidades de cada paciente.",
    education: "Graduação em Medicina pela Faculdade de Medicina de Jundiaí (FMJ)\nResidência em Clínica Médica\nEspecialização em Cardiologia pelo Instituto do Coração (InCor) – Hospital das Clínicas da Faculdade de Medicina da USP",
    certifications: [
      "Título de Especialista em Cardiologia pela Sociedade Brasileira de Cardiologia (SBC)",
      "Pós-graduação em Medicina do Esporte",
      
    ],
    languages: ["Português"],
    consultationTypes: ["Consulta médica presencial", "Telemedicina", "Realização de eletrocardiograma"],
    availability: "Segunda a Quinta, 9h às 17h"
  },
  {
    id: "pediatrician",
    name: "Drª. Aline Camargo",
    specialty: "Psicóloga",
    image: "/dr-2.jpeg",
    imageCompressed: "/dr-2.jpeg",
    bio: "Psicóloga clínica integrante da equipe do Instituto Unique, com atuação voltada ao cuidado emocional individualizado. Realiza atendimentos com escuta acolhedora, ética e sensibilidade, oferecendo um espaço seguro para que cada paciente possa compreender suas emoções, fortalecer o autoconhecimento e desenvolver uma relação mais saudável consigo mesmo.",
    experience: "Atuação em psicologia clínica com foco no acompanhamento emocional e no suporte psicológico em processos de mudança e adaptação. Integra a equipe multidisciplinar do Instituto Unique, colaborando para o cuidado integral do paciente com abordagem humanizada e acolhedora.",
    education: "Graduação em Psicologia.\nAtuação clínica com foco em saúde emocional e desenvolvimento pessoal.\nEspecialista na área de Psicologia Bariátrica.",
    certifications: [
      "Terapia Cognitiva Comportamental.",
      "MBA em dependência química.",
      "Membro da Sociedade Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM).",
      "Transtorno Alimentares,Obesidade e Cirurgia Bariátrica.",

    ],
    languages: ["Português", "Inglês"],
    consultationTypes: ["Psicoterapia presencial", "Psicoterapia online", "Avaliação psicológica", "Acompanhamento psicológico pré e pós bariátrica"],
    availability: "Segunda a Sexta, 8h às 18h"
  },
  {
    id: "dermatologist",
    name: "Drª. Marcela Avellaneda Kaminagakura (CRM 150796)",
    specialty: "Cirurgiã Vascular",
    image: "/dr-7.jpeg",
    imageCompressed: "/dr-7.jpeg",
    bio: "Sou médica especialista em cirurgia vascular, com atuação nas principais doenças vasculares, principalmente com atuação no diagnóstico e tratamento de varizes, vasinhos e lipedema. Minha prática é baseada em medicina atualizada, precisão diagnóstica e na utilização de técnicas modernas e minimamente invasivas, que proporcionam tratamentos eficazes, seguros e com recuperação rápida. Acredito que o cuidado com a saúde vascular deve ir além do tratamento da doença. Por isso, busco oferecer uma abordagem completa, que alia excelência técnica, tecnologia e um atendimento cuidadoso e individualizado, respeitando as necessidades e expectativas de cada paciente.",
    experience: "14 anos de experiência em cirurgia vascular.",
    education: "Formada pela Faculdade de Medicina de Jundiaí (FMJ)\nResidência Médica de Cirurgia Geral pela Faculdade de Medicina de Jundiai\nResidência Médica de Cirurgia Vascular pelo Hospital Israelita Albert Einstein",
    certifications: [
      "Título de Especialista em Cirurgia Vascular pela SBACV/AMB",
      "Membro da Sociedade Brasileira de Angiologia e Cirurgia Vascular",
    ],
    languages: ["Português", "Inglês", "Espanhol"],
    consultationTypes: ["Consulta Presencial", "Telemedicina", "Procedimentos como escleroterapia", "Tratamentos com laser transdérmico" ],
    availability: "Segunda a Sexta, 10h às 19h"
  },
  {
    id: "orthopedist",
    name: "Drª. Patricia Silveira",
    specialty: "Coloproctologista",
    image: "/unique-33.jpeg",
    imageCompressed: "/unique-33.jpeg",
    bio: "Médica cirurgiã geral minimamente invasiva com atuação em coloproctologia, saúde intestinal funcional, com abordagem que integra cirurgia minimamente invasiva e gastroenterologia funcional. Atua no diagnóstico e tratamento de doenças anorretais e distúrbios funcionais do aparelho digestivo, combinando técnicas cirúrgicas, exames especializados e estratégias terapêuticas integrativas. Atende pacientes com foco em medicina baseada em evidências aliada à abordagem funcional e personalizada.",
    experience: "Experiência em atendimento especializado em coloproctologia no Hospital Pitangueiras, incluindo atuação em ambulatório da especialidade e cirurgias proctologicas. Atuação hospitalar no Hospital Regional de Osasco, Hospital Unimed Jundiaí e Hospital São Vicente de Paulo (Jundiaí), hospital paulo sacramento em equipes de cirurgia geral e do trauma. Sócia-fundadora do inatituto Unique de cirurgia desde 2017, com atendimento clínico, realização de exames proctológicos e procedimentos minimamente invasivos.",
    education: "Graduada em Medicina em 2013 pela FMJ\nFormação em Cirurgia Geral pela Faculdade de Medicina de Jundiaí, com treinamento em cirurgia avançada do aparelho digestivo no Hospital Pitangueiras.\nPós-graduação em Coloproctologia pelo Hospital Sírio-Libanês.\nPós-graduação em Doenças Funcionais do Aparelho Digestivo pelo Hospital Israelita Albert Einstein.\nPós-graduação em Gastroenterologia Nutricional e Nutrigenômica pela Dra. Denise de Carvalho e especialização em Medicina Integrativa pela Academia Brasileira de Medicina Integrativa",
    certifications: [
      "Membro da Sociedade brasileira de videolaparoscopia (Sobracil)",
      "Membro do colégio brasileiro de cirurgiões.",
      
    ],
    languages: ["Português", "Inglês", "Espanhol"],
    consultationTypes: ["Consulta Presencial", "Cirurgia", "Telemedicina","Consulta Retorno", "Realização de teste respiratório de hidrogênio e metano expirados", "Anuscopia", "Cirurgias proctológicas à laser", "Procedimentos ambulatoriais como ligadura elástica de hemorroidas e aplicação de toxina botulínica para tratamento de doenças anais," ],
    availability: "Segunda a Sexta, 8h às 17h"
  },
  {
    id: "vascular_surgeon",
    name: "Drº  Henrique Yassuhiro Shirane (CRM 155723)",
    specialty: "Cirugião Vascular",
    image: "/dr-8.jpeg",
    imageCompressed: "/dr-8.jpeg",
    bio: "Médico especialista em cirurgia vascular, com foco em tratamento moderno e minimamente invasivo de varizes e vasinhos.",
    experience: "Cirurgião Vascular com mais de 8 anos de experiência em tratamentos modernos e minimamente invasivos de varizes e vasinhos",
    education: "Graduada em Medicina em 2013 pela FMJ\nFormação em Cirurgia Geral pela Faculdade de Medicina de Jundiaí, com treinamento em cirurgia avançada do aparelho digestivo no Hospital Pitangueiras.\nPós-graduação em Coloproctologia pelo Hospital Sírio-Libanês.\nPós-graduação em Doenças Funcionais do Aparelho Digestivo pelo Hospital Israelita Albert Einstein.\nPós-graduação em Gastroenterologia Nutricional e Nutrigenômica pela Dra. Denise de Carvalho e especialização em Medicina Integrativa pela Academia Brasileira de Medicina Integrativa",
    certifications: [
      "Membro da Sociedade brasileira de videolaparoscopia (Sobracil)",
      "Membro do colégio brasileiro de cirurgiões.",
      
    ],
    languages: ["Português", "Inglês",],
    consultationTypes: ["Consulta Presencial","Telemedicina",],
    availability: "Segunda a Sexta, 8h às 17h"
  },
  {
  id: "nutritionist",
  name: "Maria Carolina Netto",
  specialty: "Nutricionista",
  image: "/dr-9.jpeg",
  imageCompressed: "/dr-9.jpeg",
  bio: "Formada pela Universidade Federal de São Paulo (UNIFESP) no ano de 2012, realizou residência em Atenção a Saúde e pós graduação em Transtornos Alimentares, Obesidade e Cirurgia Bariátrica.",
  experience: "Mais de 10 anos atuando no tratamento de obesidade e cirurgia bariatrica",
  education: "Graduação em Nutrição e Técnica Dietética - UNIFESP\nResidência Multiprofissional em Atenção a Saúde- UNIFESP\nMBA em Serviços de Saúde - Faculdade Metropolitanas Unidas\n Pos graduação em Transtornos Alimentares, Obesidade e Cirurgia Bariátrica - Faculdade Futura",
  certifications: [
    "Membro da Sociedade Brasieleira de Cirurgia Bariatrica e Metabolica",
    
  ],
  languages: ["Português", "Espanhol"],
  consultationTypes: ["Presencial", "Acompanhamento", "Telemedicina"],
  availability: "Segunda a Sexta, 8h às 17h"
}
];

export function getDoctorById(id: string): Doctor | undefined {
  return doctors.find(doctor => doctor.id === id);
}

export function getAllDoctors(): Doctor[] {
  return doctors;
}
