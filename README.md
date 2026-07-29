# Unique Instituto de Cirurgia — Redesign Premium

Este é o repositório da landing page e páginas de perfil médico premium da **Unique Instituto de Cirurgia**. O projeto foi construído utilizando React, Tailwind CSS v4, Vite, TypeScript e Wouter para roteamento SPA.

---

## 🛠️ Tecnologias Utilizadas

*   **Vite** — Build tool rápida e otimizada.
*   **React** — Biblioteca para construção das interfaces.
*   **Tailwind CSS v4** — Framework CSS utilitário para design responsivo avançado.
*   **Wouter** — Roteador SPA leve e rápido.
*   **Lucide React** — Biblioteca de íconesss.

---

## 🚀 Como Executar Localmente

Certifique-se de ter o **Node.js** e o gerenciador de pacotes **pnpm** instalados.

1.  **Instalar dependências:**
    ```bash
    pnpm install
    ```

2.  **Iniciar servidor de desenvolvimento:**
    ```bash
    pnpm run dev
    ```
    O site estará disponível por padrão em `http://localhost:3001` ou conforme exibido no terminal.

3.  **Compilar para produção:**
    ```bash
    pnpm run build
    ```

---

## ☁️ Como Fazer Deploy na Vercel

O projeto possui uma configuração oficial (`vercel.json`) na raiz que configura as regras de roteamento SPA e os cabeçalhos de segurança essenciais.

### Método 1: Integração com GitHub (Recomendado)

Esta é a forma mais simples e automatiza deploys a cada novo commit.

1.  **Envie o código para o seu repositório no GitHub:**
    ```bash
    git add .
    git commit -m "feat: redesign premium e responsividade mobile"
    git branch -M main
    git push -u origin main
    ```
2.  Acesse o painel da [Vercel](https://vercel.com) e faça login com sua conta do GitHub.
3.  Clique em **Add New...** > **Project**.
4.  Importe o repositório `uniqueredesign`.
5.  A Vercel lerá o arquivo `vercel.json` automaticamente e configurará as opções de build. As configurações corretas são:
    *   **Framework Preset:** Vite
    *   **Build Command:** `pnpm build`
    *   **Output Directory:** `dist`
    *   **Install Command:** `pnpm install`
6.  Clique em **Deploy**. O site estará no ar em instantes!

---

### Método 2: Vercel CLI (Linha de Comando)

Se preferir publicar diretamente do terminal, utilize a CLI da Vercel.

1.  **Instale a CLI da Vercel globalmente (ou utilize npx):**
    ```bash
    npm install -g vercel
    ```

2.  **Faça login na sua conta Vercel:**
    ```bash
    vercel login
    ```

3.  **Inicie a configuração do deploy na pasta do projeto:**
    ```bash
    vercel
    ```
    Responda às perguntas no terminal:
    *   *Set up and deploy?* `yes`
    *   *Which scope?* (Sua conta pessoal ou de equipe)
    *   *Link to existing project?* `no`
    *   *What's your project's name?* `uniqueredesign`
    *   *In which directory is your code located?* `./`
    *   *Want to modify the settings?* `no` (o arquivo `vercel.json` fará o setup sozinho).

4.  **Publique para produção:**
    ```bash
    vercel --prod
    ```

---

## 🔒 Configuração Vercel (`vercel.json`)

O arquivo [vercel.json](file:///c:/Users/pedro/Downloads/unique-instituto/unique-instituto-main/vercel.json) já está configurado na raiz para assegurar o correto funcionamento da aplicação:

*   **Roteamento SPA (Rewrites):** Redireciona todas as requisições de rotas internas (ex: `/doctor/pediatrician` ou `/old`) para o `index.html` para que o roteador do React (`wouter`) assuma o controle.
*   **Cabeçalhos de Segurança:** Configuração de Content Security Policy (CSP), bloqueio de frames (`X-Frame-Options: DENY`) e prevenção de sniffing de tipo MIME (`X-Content-Type-Options: nosniff`).
