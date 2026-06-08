# Production Checklist — Unique Instituto de Cirurgia

Este checklist descreve os procedimentos de limpeza de código, otimizações de performance, melhorias de acessibilidade, SEO e verificação final realizados no projeto para preparação do deploy em produção.

---

## 1. Arquivos Deletados (Limpeza de Código Morto)
*   **Componentes Órfãos (Sem Uso):**
    *   `client/src/components/ManusDialog.tsx`
    *   `client/src/components/Map.tsx` (mapa antigo, substituído pelo `LocationMap.tsx`)
*   **Assets Duplicados:**
    *   `client/src/components/img/` (pasta inteira contendo 49 imagens duplicadas da pasta `client/public/` que não possuíam nenhuma importação direta no código-fonte)
*   **Assets Mortos (Sem Referências):**
    *   `client/public/logonova.png` (887KB, logo antiga gigante)
    *   `client/public/logonavbarbranca.png` (57KB, antiga logo substituída por `logomaior.png`)
    *   `client/public/logosemfundo.png` (46KB, logo antiga)
    *   `client/public/logosemfundo-removebg-preview.png` (57KB, cópia antiga de logo)
    *   `client/public/cursor.svg` (1.6KB, cursor customizado antigo desativado)
    *   `client/public/cursor-click.svg` (1.8KB, cursor customizado antigo desativado)

---

## 2. Arquivos Mantidos por Segurança
*   **Assets e Componentes do /old:**
    *   `client/public/un-logo.png` — Mantido porque é utilizado pelo `TestimonialsSection.tsx` na rota `/old`.
    *   Componentes na pasta `client/src/components/` (`Footer.tsx`, `Header.tsx`, `HeroSection.tsx`, `DoctorsGallery.tsx`, etc.) — Mantidos para garantir o funcionamento completo da rota `/old`.
*   **Shadcn UI Componentes:**
    *   Arquivos na pasta `client/src/components/ui/` — Preservados para manter as dependências locais intactas.

---

## 3. Arquivos Alterados
*   **SEO Técnico:**
    *   `client/index.html` — Atualizado para `lang="pt-BR"`, título otimizado e tags Open Graph (`og:title`, `og:description`, `og:image`, `og:type`) e `robots="index, follow"`.
*   **Acessibilidade (a11y):**
    *   `client/src/components/premium/HeaderPremium.tsx` — Adicionado anel de foco visível via `focus-visible:ring-2` nos botões de controle do menu mobile.
*   **Performance (LCP):**
    *   `client/src/components/premium/HeroPremium.tsx` — Adicionado `fetchPriority="high"` na imagem principal do recepção (LCP da Home).
    *   `client/src/pages/DoctorProfile.tsx` — Adicionado `fetchPriority="high"` na foto principal de perfil do médico (LCP do perfil).
*   **Visual do Mapa & Estilo Premium:**
    *   `client/src/components/LocationMap.tsx` — Substituído o iframe quebrado por um Card Premium de alta fidelidade e botão redirecionamento "Abrir no Google Maps" para evitar erros de CSP.
    *   `client/src/index.css` — Substituídas as cores e hexadecimais legados por variáveis CSS oficiais do Design System Premium.

---

## 4. Comandos Executados e Resultados
1.  **Typecheck (`tsc --noEmit`):**
    *   *Comando:* `pnpm run check`
    *   *Resultado:* **Sucesso.** Nenhuma falha de tipo detectada.
2.  **Build de Produção (`vite build`):**
    *   *Comando:* `pnpm run build`
    *   *Resultado:* **Sucesso.** Todos os assets foram otimizados e comprimidos.
        *   `dist/index.html` (368.43 kB)
        *   `dist/assets/index-D0LdHhzv.css` (166.85 kB) — *Tamanho de estilo reduzido.*
        *   `dist/assets/index-CO1VLenz.js` (585.50 kB)
        *   `dist/index.js` (Server Bundle, 788 B)

---

## 5. Rotas Testadas e Validadas
*   **`/` (HomePremium):** Carregando perfeitamente. Primeira dobra alinhada, sem corte visual ou logo cobrindo elementos, e sem overflow horizontal.
*   **`/old` (Home clássica):** Totalmente preservada e funcional. Todos os componentes antigos renderizam corretamente.
*   **`/doctor/:id` (Perfis dos médicos):** 
    *   `/doctor/cardiologist` (Dr. Felipe)
    *   `/doctor/neurologist` (Dr. Denis)
    *   `/doctor/pediatrician` (Drª. Aline)
    *   `/doctor/dermatologist` (Drª. Marcela)
    *   `/doctor/orthopedist` (Drª. Patricia)
    *   `/doctor/vascular_surgeon` (Dr. Henrique)
    *   `/doctor/nutritionist` (Maria Carolina)
    *   *Status:* Todas renderizando perfeitamente. Proporção vertical de 4:5 corrigida e cabeças dos médicos totalmente visíveis.

---

## 6. Pendências Manuais para Deploy
*   Nenhuma pendência de código. O projeto está pronto para deploy contínuo em servidores como a **Vercel** ou **Netlify**, conectando o repositório git correspondente.
