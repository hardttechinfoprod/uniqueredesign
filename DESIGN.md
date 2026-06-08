# Design System — Unique Instituto de Cirurgia

> Documento de referência visual oficial e guia de direção de arte para o redesign da Unique Instituto de Cirurgia.
> Qualquer componente, página ou refatoração visual no projeto deve seguir estritamente estas diretrizes.
> Última atualização: Junho 2026.

---

## 1. Posicionamento e Personalidade

A Unique é um **instituto médico especializado em cirurgia de alta complexidade e saúde multidisciplinar** em Jundiaí, SP. O design do site deve refletir os seguintes valores:

*   **Instituto Médico / Cirúrgico:** Foco claro na seriedade clínica, procedimentos cirúrgicos reais e saúde integrativa.
*   **Autoridade & Segurança:** Passar extrema competência, profissionalismo e conformidade com as normas médicas (CRMs claros, hospitais de atuação e currículo sólido).
*   **Confiança:** O paciente precisa se sentir seguro e amparado para agendar um procedimento cirúrgico.
*   **Sofisticação Discreta (Quiet Luxury):** Visual de clínica boutique premium, porém sóbrio e sério. O luxo está na clareza, no espaçamento e na precisão visual, não no excesso de ornamentos.
*   **Cuidado Humano:** Atendimento humanizado, caloroso e focado no bem-estar individual do paciente.
*   **Estrutura Real:** Valorização das fotos reais da clínica, dos médicos e dos consultórios. Sem imagens genéricas de banco de dados ou renders irreais.

### Diretrizes de Exclusão (O que NÃO ser)
O design deve evitar ativamente as seguintes associações:
*   ❌ **Nada de Tech/SaaS:** Evitar layouts azuis neon, ilustrações 3D genéricas, cards flutuantes ultra-arredondados, botões do tipo "pill" (totalmente arredondados) ou micro-interações elásticas/brincantes.
*   ❌ **Nada de Spa/Hotel de Luxo:** O site não é um retiro espiritual ou resort. O visual precisa de solidez científica e autoridade cirúrgica.
*   ❌ **Nada de Odontologia Futurista:** Evitar gradientes de azul-ciano elétrico, brilhos artificiais, dentes em vetor ou tipografia puramente tecnológica.
*   ❌ **Nada de Editorial de Moda:** Evitar o uso dominante de fontes serifadas itálicas ou layouts puramente focados em estética de revista de design que comprometam a clareza e a acessibilidade médica.
*   ❌ **Nada Experimental Demais:** A usabilidade do paciente (inclusive idosos ou pessoas procurando atendimento rápido) é prioridade. Layouts assimétricos devem ser elegantes, mas perfeitamente navegáveis.

---

## 2. Paleta de Cores Oficial

A paleta de cores é restrita e obrigatória. Não são permitidas cores fora deste espectro ou gradientes artificiais brilhantes.

| Cor | Hex | Função / Aplicação |
| :--- | :--- | :--- |
| **Azul Institucional Profundo** | `#123247` | Cor primária. Usada para fundos de seções de destaque, cabeçalhos, botões primários sobre fundos claros, e elementos de grande importância estrutural. |
| **Azul Quase Preto** | `#0B1F2E` | Cor de máxima profundidade. Fundo de seções de alta sofisticação (como depoimentos e rodapé) e overlays graduais sobre fotos da hero. Nunca usar preto puro (#000000). |
| **Dourado/Bege** | `#D9B77A` | Cor de destaque (accent). Usada em dose homeopática (máximo 10% da tela): linhas decorativas sutis, badges de especialidades, detalhes textuais de ênfase ou botões primários em seções escuras. |
| **Areia Claro** | `#F7F2EA` | Superfície alternativa. Usada como fundo para seções claras secundárias (como a galeria do espaço físico ou manifesto) para quebrar a monotonia do branco. |
| **Branco Quente** | `#FCFAF7` | Superfície principal de leitura. Fundo padrão das seções do site. Mantém a atmosfera acolhedora e editorial humana. Nunca usar branco puro (#FFFFFF) como canvas. |
| **Cinza Texto** | `#667789` | Texto secundário e descritivo. Usada para bios dos médicos, CRMs, parágrafos informativos secundários e menus de navegação. Garante excelente legibilidade sem o contraste duro do preto puro. |

### Princípios de Aplicação de Cor
1.  **Fundo Branco Quente (`#FCFAF7`)**: É o canvas padrão. O branco puro (`#FFFFFF`) é aceito apenas de forma controlada como fundo de cards individuais elevados para se destacarem da superfície `#FCFAF7` ou `#F7F2EA`.
2.  **Ritmo de Alternância de Seções (Claro-Escuro)**: Para dividir as seções do site, use a transição de cores de fundo em vez de linhas ou bordas duras. Exemplo de fluxo visual:
    *   *Hero:* Escuro (Azul Quase Preto `#0B1F2E` + Foto)
    *   *Manifesto / O Instituto:* Claro (Branco Quente `#FCFAF7`)
    *   *Serviços:* Escuro (Azul Institucional `#123247`)
    *   *Equipe Médica:* Claro (Branco Quente `#FCFAF7`)
    *   *Galeria / Espaço:* Claro Alternativo (Areia Claro `#F7F2EA`)
    *   *Depoimentos:* Escuro (Azul Quase Preto `#0B1F2E`)
    *   *Aluguel de Salas:* Claro (Branco Quente `#FCFAF7`)
    *   *Contato:* Escuro (Azul Institucional `#123247`)
    *   *Footer:* Escuro (Azul Quase Preto `#0B1F2E`)

---

## 3. Tipografia

A tipografia deve focar na legibilidade, na precisão técnica e no refinamento clássico, evitando parecer um blog de tendências ou um app SaaS.

### Fontes Recomendadas
*   **Interface e Leitura Principal:** `Plus Jakarta Sans`, `Manrope` ou `Inter` (sempre sans-serif).
    *   *Plus Jakarta Sans* é a fonte oficial padrão do site.
*   **Detalhe Editorial Controlado:** `Cormorant Garamond` ou `Playfair Display` (serifadas).
    *   *Uso Restrito:* Nunca deve ser a fonte dominante dos títulos ou blocos de texto. Pode ser usada apenas para palavras pontuais de destaque dentro de títulos (ex: *"Unique"* ou *"Confiança"*) em formato itálico elegante, ou em números decorativos.
    *   *Se a serifada enfraquecer o peso e a seriedade clínica da seção, substitua-a inteiramente pela sans-serif.*

### Escala e Hierarquia Tipográfica

| Token | Tamanho | Peso (Weight) | Altura de Linha | Espaçamento de Letras (Tracking) | Uso Recomendado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | 36px – 56px | 700 (Bold) | 1.15 | -0.01em | Título principal da Hero (H1). |
| `display-section`| 32px – 40px | 700 (Bold) | 1.20 | -0.005em | Títulos de seções (H2). |
| `title-card` | 16px – 18px | 600 (SemiBold) | 1.30 | 0 | Nome dos médicos, títulos de serviços. |
| `body` | 14px – 15px | 400 (Regular) | 1.65 | 0 | Parágrafos de texto corrido. |
| `body-small` | 12px – 13px | 400 (Regular) | 1.50 | 0 | CRM dos médicos, subtítulos de cards, data de depoimento. |
| `eyebrow` | 10px – 11px | 700 (Bold) | 1.00 | +0.25em (Expandido) | Rótulo/Etiqueta superior de seções (Uppercase). |
| `button` | 11px | 700 (Bold) | 1.00 | +0.20em (Expandido) | Texto dentro de botões de conversão (Uppercase). |
| `nav-link` | 12px | 600 (SemiBold) | 1.00 | +0.15em (Expandido) | Links do menu de cabeçalho (Uppercase). |

### Princípios Tipográficos
*   **Sem Peso Mútuo 500:** Usar peso 700 para títulos, 600 para subtítulos e 400 para textos corridos. O peso 500 é evitado para manter um contraste nítido de leitura.
*   **Tracking Negativo nos Títulos:** Títulos em tamanhos grandes de exibição (ex: H1, H2) devem ter um leve tracking negativo (`-0.01em` a `-0.005em`) para dar coesão e ar de design sob medida.
*   **Uppercase Apenas para Elementos de Interface:** Usar letras maiúsculas e espaçadas somente em botões, links de menu e etiquetas de seção (`eyebrow`). Nunca use em títulos de seções ou parágrafos.

---

## 4. Princípios Extraídos de Marcas de Referência

Para elevar a direção de arte da Unique a um patamar premium de luxo discreto, absorvemos conceitos purificados de três marcas de prestígio, **sem copiar sua identidade visual, paletas ou tipografias**:

### Princípios da Apple (Clareza, Respiro, Fotografia Premium, Simplicidade)
*   **Fotografia como Herói:** O design visual recua e serve de pedestal para fotos reais exuberantes. A clareza das imagens comunica a qualidade do instituto.
*   **O Respiro como Estrutura:** Amplo uso de margens verticais entre seções. O espaço vazio não é ausência de informação, é valorização do conteúdo.
*   **Caminho Direto para a Ação:** Simplicidade de conversão. CTAs diretos e limpos, sem botões barulhentos piscando ou múltiplos links na mesma seção.

### Princípios da BMW (Autoridade, Precisão, Sensação Institucional)
*   **Precisão Angular:** Componentes possuem cantos precisos e ângulos definidos (raio de borda mínimo). Transmite seriedade cirúrgica e rigor técnico.
*   **Tonalidades Escuras Sofisticadas:** O uso de seções escuras profundas (como os tons de azul institucional e azul quase preto) confere solidez institucional, respeito e prestígio ao layout.
*   **Contraste Alto e Direto:** Sem sombras ou decorações desnecessárias; a força reside no contraste cru de texto claro sobre fundo escuro e vice-versa.

### Princípios da Mastercard (Calor, Humanização, Editorial Humano)
*   **Superfícies Quentes:** Substituição de fundos brancos frios e cinzas industriais por tons acolhedores (como o Areia Claro e Branco Quente), que tornam a experiência médica menos estéril e mais humana.
*   **Sofisticação Editorial Discreta:** Organização assimétrica de textos e uso de pequenos marcadores (como a linha horizontal dourada sob o `eyebrow`) para estruturar a leitura de forma editorial e humana.

---

## 5. Espaçamento e Container

O espaçamento deve ser regular, consistente e intencional.

### Escala de Espaçamento
*   `xxs`: 4px (micro-ajustes de ícones/textos próximos)
*   `xs`: 8px (distância de labels e inputs, ou ícones e textos)
*   `sm`: 12px (distância interna de itens secundários em cards)
*   `md`: 16px (margem entre elementos estruturais internos de um card)
*   `lg`: 24px (padding interno de cards)
*   `xl`: 32px (distância entre colunas de grids estruturais)
*   `xxl`: 48px (espaçamento entre blocos principais ou cabeçalho de seção)
*   `section`: 64px – 80px (padding vertical interno de seções no desktop)
*   `section-mobile`: 48px – 56px (padding vertical interno de seções em telas mobile)

### Estrutura de Container
*   **Container Máximo:** O conteúdo estruturado do site deve ser limitado a um `max-width` de **1200px** (`max-w-[1200px]`). Isso evita linhas de texto excessivamente longas e mantém o layout coeso em telas ultra-wide.
*   **Padding Horizontal da Página:** Consistente em todas as seções: `px-6 md:px-10` (24px em celulares e 40px em computadores).

---

## 6. Formas e Radii (Border Radius)

Seguindo o princípio de precisão e autoridade clínica inspirado na BMW, o site adota cantos mais retos e definidos.

*   **Raio Padrão (`rounded-[3px]` / 3px):** Aplicado a botões, cartões dos médicos, inputs de formulário, imagens da galeria e caixas de contato. Transmite precisão cirúrgica e sobriedade.
*   **Raio Nulo (`rounded-none` / 0px):** Utilizado em seções do tipo faixa/hero que ocupam a largura total da tela (`full-bleed`).
*   **Raio Circular (`rounded-full` / 50%):** Restrito estritamente a avatares circulares ou ícones decorativos específicos (como o botão flutuante do WhatsApp).
*   ❌ **Proibido o uso de `rounded-lg`, `rounded-xl`, `rounded-2xl` ou `rounded-full` em botões e cards de conteúdo.** Cantos muito arredondados conferem aspecto amigável de app de entretenimento, diminuindo a percepção cirúrgica de alta complexidade.

---

## 7. Elevação, Sombras e Profundidade

A profundidade no site da Unique deve ser construída por meio do **contraste de superfícies e tons**, e não pelo empilhamento de sombras artificiais.

*   **Sem Sombras Decorativas:** Não aplicar sombras (box-shadow) em botões, cartões padrão de médicos, formulários ou imagens.
*   **Bordas Sutis:** Para destacar cards (ex: fotos de médicos ou consultórios) sobre o fundo claro, utilizar uma borda sutil de 1px: `border border-[#EAE3D9]`.
*   **Elevação de Hover (Sutil):** Somente no estado de *hover* de cartões interativos (ex: médicos) é permitida uma sombra suave de profundidade: `shadow-[0_8px_24px_rgba(18,50,71,0.06)]` combinada com um leve deslocamento vertical.
*   **Blur Fino no Header:** Para o cabeçalho fixo scrollado, usar `backdrop-blur-md` com fundo translúcido `bg-[#FCFAF7]/90` para separar sutilmente a navegação do conteúdo sob ela.

---

## 8. Direção de Arte Fotográfica

O site da Unique apoia-se em **fotografia documental real e de alta qualidade**. 

### Regras de Tratamento e Exibição
*   **Sem Imagens de Banco de Dados:** É estritamente vedado o uso de modelos simulando médicos ou consultórios genéricos. Fotos reais são o ativo de confiança da marca.
*   **Padronização das Fotos de Equipe:**
    *   Proporção fixa: `aspect-[4/5]` (formato vertical de retrato).
    *   Exibição: As fotos devem usar `object-cover object-top` para garantir que o enquadramento do rosto seja consistente em todos os dispositivos.
    *   Tons de Fundo: Para equilibrar as fotos existentes (algumas em estúdio escuro, outras em estúdio claro), os cards devem ter molduras idênticas e tratamentos sutis, mantendo os rostos sempre visíveis.
*   **Galeria do Espaço Físico (Grid Editorial):**
    *   Não usar layouts em grade estilo "tijolos" (masonry) desordenados.
    *   Empregar um grid estruturado e intencional. Por exemplo:
        *   Linha 1: Uma imagem horizontal grande (`col-span-2 aspect-[16/10]`) ao lado de duas imagens verticais empilhadas (`col-span-1`).
        *   Linha 2: Três imagens menores de proporção idêntica (`aspect-[4/3]`).
*   **Overlay no Banner Hero:** A imagem do espaço físico (`/unique-2.jpeg`) deve receber um gradiente escuro de Azul Quase Preto (`#0B1F2E`) com opacidade gradual (ex: `bg-gradient-to-r from-[#0B1F2E]/90 via-[#0B1F2E]/60 to-transparent`), garantindo legibilidade perfeita do título à esquerda, sem apagar por completo a foto da clínica à direita.

---

## 9. Diretrizes dos Componentes Principais

### Botões (CTAs)

1.  **Botão Primário (Sobre Fundo Claro):**
    *   *Estilo:* Fundo Azul Institucional `#123247`, texto Branco Quente `#FCFAF7`.
    *   *Formato:* Retangular com raio de borda de 3px (`rounded-[3px]`), sem sombra.
    *   *Tipografia:* Tipo `button` (Uppercase, Bold, tracking largo `+0.20em`).
    *   *Hover:* Fundo Azul Quase Preto `#0B1F2E` com transição suave.
2.  **Botão Primário (Sobre Fundo Escuro):**
    *   *Estilo:* Fundo Dourado/Bege `#D9B77A`, texto Azul Quase Preto `#0B1F2E`.
    *   *Formato:* Retangular com raio de borda de 3px (`rounded-[3px]`), sem sombra.
    *   *Hover:* Fundo Dourado levemente mais escuro (`#c9a76a`).
3.  **Botão Secundário (Outline):**
    *   *Estilo:* Sem fundo, borda de 1px `border-[#667789]/30` (sobre claro) ou `border-white/20` (sobre escuro). Texto `text-[#123247]` (sobre claro) ou `text-white/80` (sobre escuro).
    *   *Hover:* Borda com opacidade total e fundo sutilmente esmaecido.

### Cartão de Médico (Doctors Gallery)
*   **Estrutura:** Card vertical de borda fina `border-[#EAE3D9]`, raio de borda de 3px, fundo branco puro para se destacar da seção.
*   **Imagem:** Aspecto `4/5` com especialidade escrita em etiqueta sutil sobreposta na parte inferior da foto.
*   **Informações:** Nome do profissional em sans-serif bold `#123247`, CRM visível em tamanho pequeno (`body-small` cinza), breve biografia real de no máximo 2 linhas e um link discreto em estilo dourado ("Ver Perfil Profissional →").
*   **Interações de Hover:** Efeito de zoom lento e sutil na imagem (`scale-102`), deslocamento vertical leve de 4px, e acendimento da cor do link dourado. **Proibido overlays opacos que cubram o rosto do profissional.**

### Grade de Serviços (Accordions Dinâmicos)
*   **Layout:** Em vez de cards comuns de template, os serviços podem ser estruturados em uma lista elegante de Accordions horizontais ou verticais de alto padrão.
*   **Visual:** Separadores de linha finos (`1px solid border-white/10` sobre fundo escuro), com números ordinais estilizados (`01`, `02`, `03`) em dourado destacando cada serviço. O título é em sans-serif bold e a descrição detalhada aparece de forma fluida.

### Cartão de Depoimento (Testimonials)
*   **Visual:** Card com fundo levemente texturizado ou translúcido sobre escuro (`bg-white/5` com borda fina `border-white/10`).
*   **Credibilidade:** Estrelas douradas discretas, texto real do depoimento sem adornos excessivos, e rodapé com as iniciais do paciente em um pequeno círculo dourado, acompanhado do texto "Paciente Verificado". **Sem placeholders repetitivos de logo corporativo nos avatares.**

---

## 10. Diretrizes de Animações e Micro-interações

As animações devem seguir a filosofia da **BMW** e **Apple**: devem ser elegantes, quase imperceptíveis e ágeis. Se uma animação chama atenção para si mesma ao invés do conteúdo, ela deve ser atenuada.

### O que é PERMITIDO e recomendado:
*   **Fade-in-up Suave:** Títulos e blocos de texto entrando com deslocamento vertical mínimo (ex: `y: 16px → 0px`), duração de 500ms a 700ms e uma curva de atenuação elegante (`cubic-bezier(0.25, 1, 0.5, 1)` ou similar).
*   **Transição de Estados de Botão:** Mudança de cor de fundo e borda em `200ms` lineares.
*   **Abertura de Accordion Fluida:** Transição de altura de 0 a auto em `250ms` para expansão de serviços ou perguntas frequentes.
*   **Zoom de Foto (Hover):** Aceleração suave de escala de 1.0 a 1.03 em retratos ou fotos da galeria com duração de `600ms`.

### O que é PROIBIDO:
*   ❌ **Cursores customizados:** Remover qualquer implementação de cursor personalizado físico/mola. Utilizar o cursor nativo do navegador para evitar fadiga visual e problemas de usabilidade.
*   ❌ **Animações de Pulse/Ping:** Sem anéis de animação infinita em botões ou ícones do WhatsApp.
*   ❌ **Parallax Exagerado:** Sem movimentos agressivos de fundo desalinhados da rolagem da página.
*   ❌ **Efeitos de Mola Extremos (Springs):** Evitar saltos mecânicos ou oscilações de layout. As transições devem ser suaves e lineares/amortecidas, transmitindo sobriedade médica.
*   ❌ **Transições Demoradas:** Nenhuma animação de entrada de conteúdo deve durar mais que 800ms.

---

## 11. Checklist de Qualidade do Redesign

Antes de homologar qualquer alteração no site da Unique, responda a este checklist:

*   [ ] **Cores:** Todas as cores da tela mapeiam diretamente aos 6 hexadecimais oficiais?
*   [ ] **Superfície:** O fundo principal da página é Branco Quente `#FCFAF7`? O Areia Claro `#F7F2EA` foi usado como contraste?
*   [ ] **Ritmo Visual:** As seções alternam de forma fluida entre tons claros e escuros?
*   [ ] **Cantos:** O raio de borda (`border-radius`) de todos os cards, botões e inputs é de exatamente 3px?
*   [ ] **Tipografia:** A fonte principal é sans-serif (`Plus Jakarta Sans`, `Manrope` ou `Inter`)? A fonte serifada foi usada apenas para ênfase pontual?
*   [ ] **Legibilidade:** Há contraste ideal e legível em todos os textos sobre imagens ou fundos coloridos?
*   [ ] **Fotos:** Todas as imagens exibidas representam médicos reais, dados reais e ambientes reais da Unique?
*   [ ] **Usabilidade:** O cursor customizado foi desativado e o cursor do navegador funciona normalmente?
*   [ ] **Responsividade:** O grid de médicos se ajusta para 2 colunas em telas de celular (evitando cards amassados ou uma coluna única infinita)?
*   [ ] **Integridade:** A landing page antiga permanece intacta e acessível na rota `/old`?
