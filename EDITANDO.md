# Guia: Onde editar cada parte do site voitechrj

Use este arquivo para achar rapidamente onde mudar textos, imagens e links.  
No Cursor/VS Code: **Ctrl+P** (ou Cmd+P no Mac), digite o caminho do arquivo e Enter para abrir.

---

## Índice rápido (clique para ir à seção)

| O que você quer editar | Seção |
|------------------------|--------|
| [Favicon (ícone da aba do navegador)](#favicon) | Favicon |
| [Logo do site](#seção-0---logo-e-nome-no-topo) | Seção 0 |
| [Menu do topo (Diferenciais, Agenda, Dúvidas Frequentes)](#seção-0---logo-e-nome-no-topo) | Seção 0 |
| [Título "Sua Solução Rápida e Confiável"](#seção-1---hero-sua-solução-rápida-e-confiável) | Seção 1 |
| [Texto de apoio e botão "Agendar pelo WhatsApp"](#seção-1---hero-sua-solução-rápida-e-confiável) | Seção 1 |
| [Fotos dos serviços (SSD, Limpeza, Pasta térmica, Formatação)](#seção-1---hero-sua-solução-rápida-e-confiável) | Seção 1 |
| [Depoimentos / "Por que Nossos Clientes Confiam"](#seção-2---depoimentos) | Seção 2 |
| [Diferenciais (Transparência, Rapidez, etc.)](#seção-3---diferenciais) | Seção 3 |
| [Faixa azul "Mais do que Manutenção" e imagem](#seção-4---benefícios-faixa-azul) | Seção 4 |
| [Formulário de agendamento](#seção-5---formulário-agendar) | Seção 5 |
| [Dúvidas Frequentes (FAQ)](#seção-6---perguntas-frequentes) | Seção 6 |
| [Rodapé: contato, redes, links, política/termos](#seção-7---rodapé) | Seção 7 |
| [Textos dos modais Política de Privacidade e Termos](#modais-política-e-termos) | Modais |

---

## Favicon

**O que aparece:** Ícone na aba do navegador (ao lado do título da página).

| O que editar | Arquivo | Onde no arquivo |
|--------------|---------|------------------|
| **Favicon (ícone da aba)** | `index.html` | Na `<head>`, linha com `<link rel="icon" href="/voitechrj-logo.png" type="image/png" />`. Para trocar o ícone: coloque a nova imagem em **`public/`** e altere o `href` (ex.: `href="/meu-favicon.ico"`). O projeto usa a mesma imagem da logo por padrão. |

**Como abrir:** Ctrl+P → `index.html` → Enter.

---

## Seção 0 — Logo e nome no topo

**O que aparece:** Logo redonda + nome "voitechrj" e o menu (Diferenciais, **Agenda**, Depoimentos, botão azul **Dúvidas Frequentes**).

| O que editar | Arquivo | Onde no arquivo |
|--------------|---------|------------------|
| **Imagem da logo** | `src/components/Logo.tsx` | Linha 7: `src="/voitechrj-logo.png"`. A imagem fica na pasta **`public/`** (ex.: `public/voitechrj-logo.png`). Troque o nome no `src` se usar outro arquivo. |
| **Nome "voitechrj" ao lado da logo** | `src/components/Header.tsx` | Linha 25–27: texto dentro do `<span>`. |
| **Itens do menu (desktop e mobile)** | `src/components/Header.tsx` | Linhas 32–48 (desktop) e 71–88 (mobile): textos dos botões "Diferenciais", **"Agenda"**, "Depoimentos", **"Dúvidas Frequentes"** (botão azul). Para alterar o **tamanho do botão "Dúvidas Frequentes"**, edite a `className` do botão: padding `px-4 py-1.5` e `text-sm` deixam o botão menor. |

**Como abrir:** Ctrl+P → digite `Header.tsx` ou `Logo.tsx` → Enter.

---

## Seção 1 — Hero ("Sua Solução Rápida e Confiável")

**O que aparece:** Título grande, texto de apoio, botão "Agendar pelo WhatsApp" e os 4 cards com fotos (Instalação de SSD, Limpeza Completa, Troca de Pasta Térmica, Formatação).

**Arquivo:** `src/components/Hero.tsx`

| O que editar | Linhas | O que fazer |
|--------------|--------|-------------|
| **Título "Sua Solução Rápida e Confiável."** | 55–56 | Alterar o texto entre `<h1>` e `</h1>`. |
| **Parágrafo de apoio** ("Especialistas em upgrade…") | 58–59 | Alterar o texto dentro do `<p>`. |
| **Texto do botão "Agendar pelo WhatsApp"** | 67–68 | Alterar entre `>` e `</motion.button>`. |
| **Fotos e títulos dos 4 serviços** | 12–32 | Array `services`: cada objeto tem `title`, `desc` e `image`. Para **trocar a foto da Instalação de SSD**, edite o objeto que tem `title: "Instalação de SSD"` e mude o campo **`image`** para uma nova URL ou, se for imagem local, coloque em `public/` e use `image: "/nome-da-sua-foto.png"`. O mesmo vale para os outros três (Limpeza, Pasta térmica, Formatação). |

**Exemplo — trocar só a imagem do SSD:**

- No `Hero.tsx`, por volta da linha 14–16, você verá algo assim:
  ```ts
  { title: "Instalação de SSD", desc: "Até 10x mais velocidade", image: "https://..." }
  ```
- Troque `image` pela URL da nova foto ou por `"/minha-foto-ssd.jpg"` se a imagem estiver em `public/minha-foto-ssd.jpg`.

**Como abrir:** Ctrl+P → `Hero.tsx` → Enter.

---

## Seção 2 — Depoimentos

**O que aparece:** Título "Por que Nossos Clientes Confiam na voitechrj?", botões "Ver Avaliações no Google" e "Avalie-nos no Google", e os cards de depoimentos (nome, estrelas, texto, tempo).

**Arquivo:** `src/components/SocialProof.tsx`

| O que editar | Linhas | O que fazer |
|--------------|--------|-------------|
| **Título da seção** | 35–37 | Texto dentro do `<h2>`. |
| **Link "Ver Avaliações no Google"** | 41–49 | `href` na linha 41; texto "Ver Avaliações no Google" na 48. |
| **Link "Avalie-nos no Google"** | 52–61 | `href` na linha 53; texto na 60. |
| **Depoimentos (nome, texto, tempo)** | 4–29 | Array `testimonials`: cada objeto tem `author_name`, `text`, `rating` (1–5), `relative_time_description`. Edite ou adicione itens nesse array. |

**Como abrir:** Ctrl+P → `SocialProof.tsx` → Enter.

---

## Seção 3 — Diferenciais

**O que aparece:** Título "Nossos Diferenciais", subtítulo e os 5 cards (Transparência, Rapidez e Eficiência, Custo-Benefício, Suporte Técnico, Garantia de Satisfação).

**Arquivo:** `src/components/Features.tsx`

| O que editar | Linhas | O que fazer |
|--------------|--------|-------------|
| **Título "Nossos Diferenciais"** | 36–38 | Texto no `<h2>`. |
| **Subtítulo** | 39–41 | Texto no `<p>` abaixo do título. |
| **Cada card (título + descrição)** | 4–30 | Array `features`: cada objeto tem `title` e `description`. Altere o texto desses campos. (Os ícones vêm do Lucide e podem ser trocados pelos nomes: Shield, Gauge, Coins, Headset, CheckCircle.) |

**Como abrir:** Ctrl+P → `Features.tsx` → Enter.

---

## Seção 4 — Benefícios (faixa azul)

**O que aparece:** Título "Mais do que Manutenção, Oferecemos Tranquilidade", os 3 itens com check e a imagem ao lado.

**Arquivo:** `src/components/Benefits.tsx`

| O que editar | Linhas | O que fazer |
|--------------|--------|-------------|
| **Título da faixa azul** | 22–23 | Texto dentro do `<motion.h2>`. |
| **Os 3 textos com check** | 5–9 | Array `benefits`: são 3 strings; edite cada uma. |
| **Imagem grande à direita** | 55–57 | Atributo `src` da tag `<img>`. Pode ser URL ou, se for local, coloque em `public/` e use `src="/nome-da-imagem.jpg"`. |

**Como abrir:** Ctrl+P → `Benefits.tsx` → Enter.

---

## Seção 5 — Formulário Agendar

**O que aparece:** Título "Agendar", texto de apoio, campos Nome, Sobrenome, Resumo e botão "Agendar via WhatsApp", além da mensagem sobre redirecionamento.

**Arquivo:** `src/components/BookingForm.tsx`

| O que editar | Linhas | O que fazer |
|--------------|--------|-------------|
| **Título "Agendar"** | 37–39 | Texto no `<h2>`. |
| **Texto abaixo do título** | 40–42 | Parágrafo com "Agende a entrega do seu equipamento…". |
| **Rótulos e placeholders (Nome, Sobrenome, Resumo)** | 54–94 | Textos em `label` e `placeholder` de cada campo. |
| **Texto do botão "Agendar via WhatsApp"** | 106–107 | Dentro do `<motion.button>`. |
| **Frase "Ao clicar, você será redirecionado…"** | 110–112 | Texto no `<p>` abaixo do botão. |
| **Número do WhatsApp (lógica)** | 20 | A URL `https://wa.me/5521994472406` — troque o número se precisar. |

**Como abrir:** Ctrl+P → `BookingForm.tsx` → Enter.

---

## Seção 6 — Dúvidas Frequentes (FAQ)

**O que aparece:** Título "Dúvidas Frequentes", subtítulo e as perguntas/respostas que abrem e fecham ao clicar. O mesmo texto é usado no botão azul do Header para manter consistência.

**Arquivo das perguntas e respostas:** `src/data/faqData.ts`  
**Arquivo que exibe (títulos da seção):** `src/components/FAQ.tsx`

| O que editar | Arquivo | O que fazer |
|--------------|---------|-------------|
| **Título "Dúvidas Frequentes"** | `FAQ.tsx` | Linhas 16–18: texto no `<h2>`. |
| **Subtítulo "Tire suas dúvidas…"** | `FAQ.tsx` | Linhas 19–21: texto no `<p>`. |
| **Cada pergunta e resposta** | `faqData.ts` | Array `faqs`: cada objeto tem `question` e `answer`. Edite, remova ou adicione itens nesse array. |

**Como abrir:** Ctrl+P → `faqData.ts` ou `FAQ.tsx` → Enter.

---

## Seção 7 — Rodapé

**O que aparece:** Três colunas (voitechrj + texto + redes; Entre em Contato com telefone, e-mail e local; Links Rápidos), depois a linha com © e os links Política de Privacidade e Termos de Serviço.

**Arquivo:** `src/components/Footer.tsx`

| O que editar | Linhas (aprox.) | O que fazer |
|--------------|------------------|-------------|
| **Nome "voitechrj" na primeira coluna** | 16–18 | Texto no `<h3>`. |
| **Parágrafo "Sua parceira confiável…"** | 20–23 | Texto no `<p>`. |
| **Link do Facebook** | 27 | `href="https://www.facebook.com/voitechrj/"`. |
| **Link do Instagram** | 37 | `href="https://www.instagram.com/voitechrj"`. |
| **Telefone (texto e link)** | 56–60 | Número visível e `href="tel:+5521994472406"`. |
| **E-mail** | 66–70 | Texto e `href="mailto:voitechrj@gmail.com"`. |
| **Link do mapa (Niterói, RJ)** | 76–82 | `href` é a URL do Google Maps; o texto exibido é "Niterói, RJ". |
| **Links rápidos (Início, Diferenciais, etc.)** | 95–113 | Cada `<a href="#...">` e o texto dentro. |
| **Texto do copyright** | 119–121 | "© … voitechrj. Todos os direitos reservados." |
| **"Política de Privacidade" / "Termos de Serviço"** | 124–138 | São botões que abrem os modais; o texto do botão está nas linhas 128 e 136. |

**Como abrir:** Ctrl+P → `Footer.tsx` → Enter.

---

## Modais (Política de Privacidade e Termos)

**O que aparece:** Ao clicar em "Política de Privacidade" ou "Termos de Serviço" no rodapé, abre um pop-up com o texto completo. Esses textos estão no `App.tsx`.

**Arquivo:** `src/App.tsx`

| O que editar | Onde no arquivo |
|--------------|------------------|
| **Todo o texto da Política de Privacidade** | Procure por `Política de Privacidade` (título do modal) e edite os `<p>` e subtítulos seguintes dentro do primeiro `{showPrivacy && (...)}`. |
| **Todo o texto dos Termos de Serviço** | Procure por `Termos de Serviço` (título do modal) e edite os `<p>` e subtítulos dentro do `{showTerms && (...)}`. |

**Como abrir:** Ctrl+P → `App.tsx` → Enter e use Ctrl+F para buscar "Política" ou "Termos".

---

## Resumo: arquivos por tipo de edição

- **Só textos da página:** `Hero.tsx`, `Header.tsx`, `SocialProof.tsx`, `Features.tsx`, `Benefits.tsx`, `BookingForm.tsx`, `FAQ.tsx`, `Footer.tsx`.
- **Perguntas e respostas do FAQ:** `src/data/faqData.ts`.
- **Imagens do Hero (4 cards):** `Hero.tsx` (array `services`, campo `image`).
- **Imagem da faixa azul:** `Benefits.tsx` (atributo `src` da `<img>`).
- **Logo:** `public/voitechrj-logo.png` (trocar o arquivo) e, se mudar o nome do arquivo, `Logo.tsx`.
- **Textos longos (Política e Termos):** `App.tsx`.

Se quiser, na próxima edição dá para incluir exemplos de como trocar uma imagem local (passo a passo com a pasta `public`).
