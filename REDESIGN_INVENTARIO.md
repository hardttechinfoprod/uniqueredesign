# Inventário e Análise de Redesign - Unique Instituto de Cirurgia

Este documento contém o levantamento detalhado do site atual do **Unique Instituto de Cirurgia**, englobando análise visual, mapeamento da estrutura do código, extração de textos, médicos, serviços, contatos, assets e o plano para a transformação em uma landing page premium (nível Behance/Awwwards).

---

## 1. Análise Visual e Problemas Identificados (Prints vs. Design Premium)

Ao analisar os prints da interface e a estilização atual, identificamos os seguintes pontos de atrito visual e oportunidades de melhoria de UI/UX para atingir o nível premium desejado:

1. **Header e Logotipo:** 
   - O logo da clínica é exibido em um bloco escuro quadrado que quebra a fluidez do header branco. Falta integração com o fundo.
   - O botão "Agendar Consulta" no topo possui uma cor de fundo pastel/ouro que carece de contraste e profundidade (sem micro-interações refinadas).
2. **Seção Hero:**
   - A imagem de fundo (`/unique-2.jpeg`) apresenta a recepção, mas a sobreposição de cor azul-marinho (`from-primary/90`) está muito opaca à esquerda, escondendo parte da foto de forma abrupta.
   - A tipografia de "Unique Instituto de Cirurgia" em cima da imagem carece de hierarquia visual e refinamento. Os divisores dourados (`.divider-gold`) são simples linhas estáticas horizontais.
   - Os dois CTAs principais na Hero parecem flutuar no meio da imagem sem um alinhamento ou peso visual adequado.
3. **Seção "Nossa Equipe":**
   - **Inconsistência nos Retratos:** As fotos dos profissionais possuem padrões de iluminação, fundos e enquadramentos totalmente distintos. 
     - O *Dr. Felipe* está em um retrato de estúdio com assinatura.
     - O *Dr. Denis* está em um evento de formatura segurando um canudo de diploma com plateia ao fundo.
     - A *Drª. Aline* está em ambiente doméstico/escritório.
     - O *Dr. Henrique* está em estúdio com fundo escuro.
   - O hover com overlay azul esconde totalmente a foto e mostra o texto com um efeito brusco. Para um site premium, a transição deve ser sutil (ex: zoom lento na foto + entrada elegante das informações em tipografia refinada, sem esconder o rosto do médico).
   - O nome dos médicos nos cards usa quebras de linha (`\n`) que prejudicam o alinhamento dos textos em resoluções diferentes.
4. **Seção "Nossos Serviços":**
   - Grid de 3 colunas simples com cards brancos de cantos levemente arredondados. O visual parece genérico (comum em templates básicos de Bootstrap/Tailwind).
   - Ícones Lucide genéricos dentro de círculos de opacidade baixa. Não há profundidade ou sofisticação.
5. **Seção "Aluguel de Salas":**
   - O card apresenta uma divisão abrupta de blocos: azul-marinho à esquerda e branco à direita.
   - As bordas e sombras carecem do efeito "glassmorphism" ou de acabamentos mais fluidos e orgânicos.
6. **Seção "Feedback" (Depoimentos):**
   - Os depoimentos usam a logo da clínica (`/un-logo.png`) como avatar para todos os pacientes. Isso tira a credibilidade e parece inacabado.
   - O design dos cards de depoimento é simples e sem personalidade.
7. **Interações Gerais (Cursor Customizado):**
   - Há um cursor customizado definido via CSS (`/cursor.svg` e `/cursor-click.svg`). Se a transição não for assistida via JS com suavização física (lerp), pode parecer travada ou desconfortável para o usuário.

---

## 2. Estrutura de Arquivos do Projeto

O projeto está estruturado como um monorepo/app web moderno com a seguinte árvore de diretórios principal:

* **`/client`** - Código do frontend em React.
  * **`/src`**
    * **`/components`** - Componentes de interface.
      * `ContactSection.tsx` - Formulário de contato.
      * `DoctorsGallery.tsx` - Grid com os cards dos médicos.
      * `ErrorBoundary.tsx` - Tratamento de erros.
      * `Footer.tsx` - Rodapé com links e mapa.
      * `GallerySection.tsx` - Galeria de fotos do espaço.
      * `Header.tsx` - Barra de navegação e menu mobile.
      * `HeroSection.tsx` - Banner principal.
      * `LocationMap.tsx` - Componente de integração com mapa.
      * `RentalSection.tsx` - Card de anúncio para aluguel de salas.
      * `ScrollToTop.tsx` - Botão para rolar ao topo.
      * `ServicesSection.tsx` - Lista de especialidades e serviços.
      * `TestimonialsSection.tsx` - Feedbacks de pacientes.
      * `WhatsAppButton.tsx` - Botão flutuante de atendimento.
      * **`/ui`** - Componentes primitivos do Shadcn UI (Accordion, Dialog, Tooltip, etc.).
    * **`/contexts`** - Provedor de contexto global (Ex: `ThemeContext.tsx`).
    * **`/hooks`** - Hooks customizados do React.
    * **`/lib`** - Utilitários e dados estáticos do app.
      * `doctors.ts` - Banco de dados estático dos médicos.
      * `utils.ts` - Funções utilitárias.
    * **`/pages`** - Telas principais da aplicação.
      * `Home.tsx` - Página inicial unificada (Landing Page).
      * `DoctorProfile.tsx` - Página de perfil individual detalhado de cada médico.
      * `NotFound.tsx` - Página 404.
    * `App.tsx` - Configuração de rotas (`wouter`) e Providers.
    * `main.tsx` - Ponto de entrada do React.
    * `index.css` - Estilização global com Tailwind CSS.
  * **`/public`** - Arquivos estáticos (imagens dos médicos, fotos do consultório, ícones e cursores).
* **`/server`** - Backend em Express (provavelmente para servir o app estático e APIs adicionais).
* **`/shared`** - Código compartilhado entre cliente e servidor (constantes, tipos).

---

## 3. Stack Tecnológica Utilizada

- **Core:** React 19 (Frontend) e Express 4 (Backend).
- **Gerenciador de Pacotes:** `pnpm` (configuração concluída com sucesso).
- **Ferramenta de Build/Bundler:** Vite 7.
- **Linguagem:** TypeScript.
- **Roteamento:** `wouter` (leve e eficiente para SPAs).
- **Estilização:** Tailwind CSS v4 + `tw-animate-css` (para animações nativas do Tailwind) + Vanilla CSS (`client/src/index.css`).
- **Animações:** Framer Motion (declarado em `package.json`, pronto para interações premium).
- **Componentes Base:** Radix UI primitives (acessibilidade) e Lucide React (ícones).

---

## 4. Página Principal (Home)

A página principal está localizada em [client/src/pages/Home.tsx](file:///c:/Users/pedro/Downloads/unique-instituto/unique-instituto-main/client/src/pages/Home.tsx). Ela é a agregadora das seções da landing page na seguinte ordem de importação e renderização:

1. `<Header />`
2. `<HeroSection />`
3. `<DoctorsGallery />`
4. `<ServicesSection />`
5. `<RentalSection />`
6. `<TestimonialsSection />`
7. `<GallerySection />`
8. `<ContactSection />`
9. `<Footer />`
10. `<WhatsAppButton />`
11. `<ScrollToTop />`

---

## 5. Lista de Todas as Seções Existentes

1. **Header (Navegação):** Menu fixo com links internos (`Início`, `Doutores`, `Serviços`, `Depoimentos`, `Contato`) e botão de CTA "Agendar Consulta".
2. **Hero Section:** Banner principal com imagem do espaço físico, título da marca, subtítulo e dois botões de conversão.
3. **Doutores (Galeria):** Apresentação dos profissionais com grid de cards que redirecionam para páginas de perfil individual.
4. **Nossos Serviços:** Lista com 9 especialidades médicas, representadas por ícones e resumos textuais.
5. **Aluguel de Salas:** Bloco promocional destacando a infraestrutura de consultórios disponíveis para sublocação por hora.
6. **Feedback (Depoimentos):** Carrossel/grid de testemunhos de satisfação de pacientes reais.
7. **Espaço da Clínica (Galeria):** Galeria interativa de fotos das dependências físicas do instituto com visualização em modal/lightbox.
8. **Contato (Formulário):** Formulário completo de contato (Nome, Email, Telefone, Mensagem).
9. **Footer e Localização:** Rodapé corporativo contendo links rápidos, lista de especialidades, e-mail de contato, direitos autorais e o componente interativo de mapa da região.

---

## 6. Extração de Todos os Textos Reais Existentes

### Textos do Header e Hero
- **Título principal:** `Unique Instituto de Cirurgia`
- **Subtítulo:** `Uma equipe completa para cuidar de você.`
- **Botões CTA:** `Agendar Consulta` | `Nossa Equipe Unique Instituto`

### Textos de Seções
- **Título Equipe:** `Nossa Equipe`
- **Subtítulo Equipe:** `Profissionais reconhecidos, preparados para cuidar de você com responsabilidade e confiança.`
- **Título Serviços:** `Nossos Serviços`
- **Subtítulo Serviços:** `Oferecemos uma ampla gama de serviços médicos especializados para sua saúde.`
- **Título Depoimentos:** `Feedback`
- **Subtítulo Depoimentos:** `A satisfação dos nossos pacientes é o reflexo do nosso compromisso.`
- **Título Galeria:** `Conheça Nosso Espaço`
- **Título Contato:** `Entre em Contato`
- **Subtítulo Contato:** `Dúvidas? Nossa equipe responde e agenda sua consulta.`
- **Rótulos do Formulário:** `Nome Completo`, `Email`, `Telefone`, `Mensagem`, botão `Enviar Mensagem`
- **Footer Slogan:** `Sua saúde, nossa prioridade.`
- **Copyright:** `© [Ano] Desenvolvido por HardTechInfo Soluções em Ti.`

---

## 7. Levantamento dos Médicos (CRM, Especialidade, Bio e Detalhes)

Extraído diretamente do arquivo estático de dados [client/src/lib/doctors.ts](file:///c:/Users/pedro/Downloads/unique-instituto/unique-instituto-main/client/src/lib/doctors.ts):

### 1. Drº. Felipe Bordinhon Mercante (CRM 145916)
- **Especialidade:** Cirurgia Bariátrica
- **Bio:** "Felipe Bordinhon Mercante, especialista em cirurgia com ampla experiência em procedimentos de alta complexidade."
- **Experiência (Hospitais de atuação):**
  - Hospital Santa Elisa de Jundiaí
  - Hospital Paulo Sacramento de Jundiaí
  - Hospital São Luiz Itaim
  - Hospital São Luiz de Alphaville
  - Hospital São Luiz de Campinas
  - Hospital St. James de Jarinu
- **Formação Acadêmica:**
  - Formado pela Faculdade de Medicina de Jundiaí (FMJ).
  - Residência Médica pela Faculdade de Medicina de Jundiaí (FMJ).
- **Certificações:**
  - Certificação Internacional IFSO-LAC IQ-I.
  - Membro da Sociedade Brasileira de Cirurgia Bariátrica e Metabólica.
  - Membro do Colégio Brasileiro de Cirurgiões.
- **Idiomas:** Português, Inglês, Espanhol
- **Tipos de Consulta:** Consulta Presencial, Telemedicina, Acompanhamento
- **Disponibilidade:** Segunda a Sexta, 8h às 18h

### 2. Drº. Denis Toshikazu Taniuchi Hatanaka (CRM 168340-SP)
- **Especialidade:** Cardiologista
- **Bio:** "Médico cardiologista Dr Denis Hatanaka formado pela Faculdade de Medicina de Jundiaí, com atuação voltada à prevenção, diagnóstico e acompanhamento das doenças cardiovasculares. Realiza atendimento com abordagem clínica criteriosa e acompanhamento contínuo e personalizado, focado na saúde e bem-estar do paciente."
- **Experiência:** "Atuação na área de Cardiologia com foco na prevenção, diagnóstico e tratamento das doenças cardiovasculares, oferecendo acompanhamento clínico individualizado e orientado às necessidades de cada paciente."
- **Formação Acadêmica:**
  - Graduação em Medicina pela Faculdade de Medicina de Jundiaí (FMJ)
  - Residência em Clínica Médica
  - Especialização em Cardiologia pelo Instituto do Coração (InCor) – Hospital das Clínicas da Faculdade de Medicina da USP
- **Certificações:**
  - Título de Especialista em Cardiologia pela Sociedade Brasileira de Cardiologia (SBC)
  - Pós-graduação em Medicina do Esporte
- **Idiomas:** Português
- **Tipos de Consulta:** Consulta médica presencial, Telemedicina, Realização de eletrocardiograma
- **Disponibilidade:** Segunda a Quinta, 9h às 17h

### 3. Drª. Aline Camargo
- **Especialidade:** Psicóloga
- **Bio:** "Psicóloga clínica integrante da equipe do Instituto Unique, com atuação voltada ao cuidado emocional individualizado. Realiza atendimentos com escuta acolhedora, ética e sensibilidade, oferecendo um espaço seguro para que cada paciente possa compreender suas emoções, fortalecer o autoconhecimento e desenvolver uma relação mais saudável consigo mesmo."
- **Experiência:** "Atuação em psicologia clínica com foco no acompanhamento emocional e no suporte psicológico em processos de mudança e adaptação. Integra a equipe multidisciplinar do Instituto Unique, colaborando para o cuidado integral do paciente com abordagem humanizada e acolhedora."
- **Formação Acadêmica:**
  - Graduação em Psicologia.
  - Atuação clínica com foco em saúde emocional e desenvolvimento pessoal.
  - Especialista na área de Psicologia Bariátrica.
- **Certificações:**
  - Terapia Cognitiva Comportamental.
  - MBA em dependência química.
  - Membro da Sociedade Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM).
  - Transtorno Alimentares, Obesidade e Cirurgia Bariátrica.
- **Idiomas:** Português, Inglês
- **Tipos de Consulta:** Psicoterapia presencial, Psicoterapia online, Avaliação psicológica, Acompanhamento psicológico pré e pós bariátrica
- **Disponibilidade:** Segunda a Sexta, 8h às 18h

### 4. Drª. Marcela Avellaneda Kaminagakura (CRM 150796)
- **Especialidade:** Cirurgiã Vascular
- **Bio:** "Sou médica especialista em cirurgia vascular, com atuação nas principais doenças vasculares, principalmente com atuação no diagnóstico e tratamento de varizes, vasinhos e lipedema. Minha prática é baseada em medicina atualizada, precisão diagnóstica e na utilização de técnicas modernas e minimamente invasivas, que proporcionam tratamentos eficazes, seguros e com recuperação rápida. Acredito que o cuidado com a saúde vascular deve ir além do tratamento da doença. Por isso, busco oferecer uma abordagem completa, que alia excelência técnica, tecnologia e um atendimento cuidadoso e individualizado, respeitando as necessidades e expectativas de cada paciente."
- **Experiência:** 14 anos de experiência em cirurgia vascular.
- **Formação Acadêmica:**
  - Formada pela Faculdade de Medicina de Jundiaí (FMJ)
  - Residência Médica de Cirurgia Geral pela Faculdade de Medicina de Jundiaí
  - Residência Médica de Cirurgia Vascular pelo Hospital Israelita Albert Einstein
- **Certificações:**
  - Título de Especialista em Cirurgia Vascular pela SBACV/AMB
  - Membro da Sociedade Brasileira de Angiologia e Cirurgia Vascular
- **Idiomas:** Português, Inglês, Espanhol
- **Tipos de Consulta:** Consulta Presencial, Telemedicina, Procedimentos como escleroterapia, Tratamentos com laser transdérmico
- **Disponibilidade:** Segunda a Sexta, 10h às 19h

### 5. Drª. Patricia Silveira
- **Especialidade:** Cirurgiã Geral
- **Bio:** "Médica cirurgiã geral minimamente invasiva com atuação em coloproctologia, saúde intestinal funcional, com abordagem que integra cirurgia minimamente invasiva e gastroenterologia funcional. Atua no diagnóstico e tratamento de doenças anorretais e distúrbios funcionais do aparelho digestivo, combinando técnicas cirúrgicas, exames especializados e estratégias terapêuticas integrativas. Atende pacientes com foco em medicina baseada em evidências aliada à abordagem funcional e personalizada."
- **Experiência:** "Experiência em atendimento especializado em coloproctologia no Hospital Pitangueiras, incluindo atuação em ambulatório da especialidade e cirurgias proctológicas. Atuação hospitalar no Hospital Regional de Osasco, Hospital Unimed Jundiaí e Hospital São Vicente de Paulo (Jundiaí), hospital paulo sacramento em equipes de cirurgia geral e do trauma. Sócia-fundadora do instituto Unique de cirurgia desde 2017, com atendimento clínico, realização de exames proctológicos e procedimentos minimamente invasivos."
- **Formação Acadêmica:**
  - Graduada em Medicina em 2013 pela FMJ
  - Formação em Cirurgia Geral pela Faculdade de Medicina de Jundiaí, com treinamento em cirurgia avançada do aparelho digestivo no Hospital Pitangueiras.
  - Pós-graduação em Coloproctologia pelo Hospital Sírio-Libanês.
  - Pós-graduação em Doenças Funcionais do Aparelho Digestivo pelo Hospital Israelita Albert Einstein.
  - Pós-graduação em Gastroenterologia Nutricional e Nutrigenômica pela Dra. Denise de Carvalho e especialização em Medicina Integrativa pela Academia Brasileira de Medicina Integrativa
- **Certificações:**
  - Membro da Sociedade Brasileira de Videolaparoscopia (Sobracil)
  - Membro do Colégio Brasileiro de Cirurgiões.
- **Idiomas:** Português, Inglês, Espanhol
- **Tipos de Consulta:** Consulta Presencial, Cirurgia, Telemedicina, Consulta Retorno, Realização de teste respiratório de hidrogênio e metano expirados, Anuscopia, Cirurgias proctológicas a laser, Procedimentos ambulatoriais como ligadura elástica de hemorroidas e aplicação de toxina botulínica para tratamento de doenças anais.
- **Disponibilidade:** Segunda a Sexta, 8h às 17h

### 6. Drº Henrique Yassuhiro Shirane (CRM 155723)
- **Especialidade:** Cirurgião Vascular
- **Bio:** "Médico especialista em cirurgia vascular, com foco em tratamento moderno e minimamente invasivo de varizes e vasinhos."
- **Experiência:** "Cirurgião Vascular com mais de 8 anos de experiência em tratamentos modernos e minimamente invasivos de varizes e vasinhos"
- **Formação Acadêmica:**
  - Graduada em Medicina em 2013 pela FMJ
  - Formação em Cirurgia Geral pela Faculdade de Medicina de Jundiaí, com treinamento em cirurgia avançada do aparelho digestivo no Hospital Pitangueiras.
  - Pós-graduação em Coloproctologia pelo Hospital Sírio-Libanês.
  - Pós-graduação em Doenças Funcionais do Aparelho Digestivo pelo Hospital Israelita Albert Einstein.
  - Pós-graduação em Gastroenterologia Nutricional e Nutrigenômica pela Dra. Denise de Carvalho e especialização em Medicina Integrativa pela Academia Brasileira de Medicina Integrativa *(Nota: Esta seção possui textos duplicados da Drª Patricia no código original, deveremos manter ou ajustar sob consulta).*
- **Certificações:**
  - Membro da Sociedade Brasileira de Videolaparoscopia (Sobracil)
  - Membro do Colégio Brasileiro de Cirurgiões.
- **Idiomas:** Português, Inglês
- **Tipos de Consulta:** Consulta Presencial, Telemedicina
- **Disponibilidade:** Segunda a Sexta, 8h às 17h

### 7. Maria Carolina Netto
- **Especialidade:** Nutricionista
- **Bio:** "Formada pela Universidade Federal de São Paulo (UNIFESP) no ano de 2012, realizou residência em Atenção a Saúde e pós graduação em Transtornos Alimentares, Obesidade e Cirurgia Bariátrica."
- **Experiência:** "Mais de 10 anos atuando no tratamento de obesidade e cirurgia bariátrica"
- **Formação Acadêmica:**
  - Graduação em Nutrição e Técnica Dietética - UNIFESP
  - Residência Multiprofissional em Atenção a Saúde - UNIFESP
  - MBA em Serviços de Saúde - Faculdade Metropolitanas Unidas
  - Pós graduação em Transtornos Alimentares, Obesidade e Cirurgia Bariátrica - Faculdade Futura
- **Certificações:**
  - Membro da Sociedade Brasileira de Cirurgia Bariátrica e Metabólica
- **Idiomas:** Português, Espanhol
- **Tipos de Consulta:** Presencial, Acompanhamento, Telemedicina
- **Disponibilidade:** Segunda a Sexta, 8h às 17h

---

## 8. Levantamento de Todos os Serviços

Lista de serviços reais mapeados a partir de [client/src/components/ServicesSection.tsx](file:///c:/Users/pedro/Downloads/unique-instituto/unique-instituto-main/client/src/components/ServicesSection.tsx):

1. **Cardiologista:** Diagnóstico e tratamento de doenças cardiovasculares com tecnologia avançada.
2. **Psicólogo:** Especialista em saúde emocional e desenvolvimento pessoal, com atuação em Terapia Cognitivo-Comportamental e foco em transtornos alimentares, obesidade e acompanhamento psicológico pré e pós-bariátrica.
3. **Cirurgias de doenças do aparelho digestivo e da parede abdominal:** Tratamento clínico e/ou cirúrgico com condução humanizada e holística da saúde do paciente.
4. **Nutricionista:** Especialista em seguimento pré e pós operatório para Cirurgia Bariátrica, tratamento clínico para controle do Sobrepeso e Obesidade. Membro da COESAS pela Sociedade Brasileira de Cirurgia Bariátrica e Metabólica.
5. **Cuidados vasculares e estéticos:** Utilizando tecnologias de ponta como escleroterapia com espuma, escleroterapia a laser. Tratamento da doença venosa com procedimentos minimamente invasivos como laser transdérmico, radiofrequência e termoablação.
6. **Equipe Multidisciplinar:** Acolhimento do paciente em seus vários aspectos multimídias que podem interferir na sua saúde e na qualidade de vida. Agir nas causas de maneira multifatorial e multidisciplinar.
7. **Exame teste respiratório:** Para SIBO e IMO (H2 expirado).
8. **Reposição de vitaminas:** Essencial para manter o equilíbrio do corpo e garantir energia, imunidade e bem-estar.
9. **Eletrocardiograma:** Um exame simples e rápido que registra a atividade elétrica do coração.

---

## 9. Contatos, Endereços, Links e CTAs

- **WhatsApp Principal:** `(11) 93220-2177` (Link: `https://wa.me/5511932202177`)
- **Telefone Fixo:** `(11) 4586-2755`
- **E-mail:** `contato@institutounique.com`
- **Instagram:** [@unique_instituto_oficial](https://www.instagram.com/unique_instituto_oficial)
- **Link do Google Maps:** [Google Location Link](https://share.google/P0KNOGa3IZ53SQZhd)
- **Coordenadas de Localização:** Latitude `-23.1855`, Longitude `-46.8941`
- **Endereço Completo:** Rua Conrado Augusto Offa, 92, Centro, Jundiaí - SP
- **Horário de Funcionamento:** Segunda a sexta, das 8h às 18h
- **Chamadas de Ação (CTAs):**
  - "Agendar Consulta" (direciona para o WhatsApp)
  - "Nossa Equipe Unique Instituto" (âncora para `#doctors`)
  - "Enviar Mensagem" (no formulário de e-mail)

---

## 10. Mapeamento de Imagens e Assets Utilizados

Os arquivos de mídia estão guardados na pasta `/client/public`. Aqui está o inventário de sua utilização no site atual:

- **Logotipo:**
  - URL remota no Header e Footer: `https://d2xsxph8kpxj0f.cloudfront.net/310519663326837738/iJrANnw4aHJXYPH9pdUbod/un-logo_0ee12565.png`
  - Arquivo local equivalente: `/un-logo.png` (usado também nos depoimentos)
- **Retratos dos Médicos:**
  - Dr. Felipe: `/dr.jpeg`
  - Dr. Denis: `/denis.jpeg`
  - Drª. Aline: `/dr-2.jpeg`
  - Drª. Marcela: `/dr-7.jpeg`
  - Drª. Patricia: `/dr-6.jpeg`
  - Dr. Henrique: `/dr-8.jpeg`
  - Nutricionista Maria Carolina: `/dr-9.jpeg`
- **Fotos do Espaço Clínico (Galeria):**
  - `/unique-1.jpeg` a `/unique-8.jpeg`
  - `/unique-10.jpeg` a `/unique-20.jpeg`
  - `/unique-22.jpeg`
- **Banners e Fundo:**
  - Hero Section Fundo: `/unique-2.jpeg`
  - Outros assets de background não utilizados ativamente no layout atual: `/capa.png`, `/clinica-1.jpeg`, `/news-letter-bg.png`, `/project4.jpg`, `/pt-1.jpeg`, `/text-img.jpeg`, `/text-img2.jpeg`.
- **Cursores Customizados:**
  - Padrão: `/cursor.svg`
  - Hover / Clique: `/cursor-click.svg`

---

## 11. Componentes que Podem ser Reaproveitados

1. **`LocationMap.tsx` / `Map.tsx`**: A lógica de renderização do iframe ou integração com mapas do Google com as coordenadas exatas da clínica em Jundiaí.
2. **`ErrorBoundary.tsx`**: Estrutura sólida de captura de exceções no React.
3. **`ScrollToTop.tsx`**: Funcionalidade simples de rolagem com botão.
4. **`WhatsAppButton.tsx`**: A lógica e a ancoragem de contato direto via WhatsApp.

---

## 12. Componentes que Devem ser Substituídos ou Redesenhados

Para elevar o projeto ao nível Awwwards/Behance:

1. **`Header.tsx` (Menu):** Deve se tornar um header dinâmico, preferencialmente transparente que se mistura ao conteúdo de fundo (glassmorphism/blur), com transição suave ao rolar a página. A logo deve ser integrada sem o bloco escuro de fundo.
2. **`HeroSection.tsx`:** Deve ser completamente reconstruído com animações de texto do tipo *split-text* (caractere por caractere ou linha por linha), layouts assimétricos modernos, e uma transição parallax elegante sobre a imagem de fundo.
3. **`DoctorsGallery.tsx`:** O grid de cards precisa de uma diagramação premium. Os overlays escuros devem ser substituídos por efeitos de revelação interativos baseados no movimento do cursor do usuário, e a tipografia dos nomes dos médicos deve ser limpa de quebras de linha manuais, usando um design de grade assimétrica de alta costura.
4. **`ServicesSection.tsx`:** O grid de serviços atual deve ser repensado para um layout interativo de listas expansíveis (Accordions fluidos) ou cards flutuantes interativos que revelam informações ao passar o mouse com efeitos em Framer Motion.
5. **`RentalSection.tsx`:** O layout do card dividido precisa de um redesign focado em minimalismo de alto padrão, utilizando tipografias finas e espaçamento amplo, transformando a oferta em um convite luxuoso para médicos.
6. **`TestimonialsSection.tsx`:** Substituir o grid estático por um slider interativo e luxuoso. Remover os placeholders repetidos de logotipo por iniciais estilizadas dos nomes dos pacientes ou silhuetas artísticas em SVG.
7. **`GallerySection.tsx`:** O grid atual é uma repetição estática de fotos em tamanho uniforme. Deve ser repensado para um mural assimétrico com rolagem horizontal infinita ou transições fluidas de galeria imersiva.
8. **Cursor Customizado (CSS):** Remover a substituição de cursor nativa baseada em CSS estático que causa engasgos visuais, substituindo por um elemento magnético controlado via JavaScript com Framer Motion/Spring.
