<div align="center">
  <img src="https://github.com/user-attachments/assets/4237d375-2e4c-4aed-a8dc-dd4f1525a5e4" alt="FX Target Logo" />
</div>

> Um planejador financeiro inteligente focado em metas internacionais, conversão de câmbio em tempo real e tracking ativo com design Mobile-First.

<div align="center">
  <a href="https://youtu.be/fh3A19srT-Y">
    <img src="https://img.shields.io/badge/V%C3%8DDEO_PITCH-Assistir_Agora-red?style=for-the-badge&logo=youtube" alt="Vídeo Pitch">
  </a>
  <a href="https://www.figma.com/design/Hv3Dk6ZfX6YjIEsxRdASWy/FX-Target?node-id=0-1&t=GNUCUhdcWHnRZWgC-1">
    <img src="https://img.shields.io/badge/PROT%C3%9UTIPO-Explorar_no_Figma-blue?style=for-the-badge&logo=figma" alt="Figma Design">
  </a>
</div>

---

## 🎯 O Pitch

Planejar uma viagem, um intercâmbio ou a compra de um bem no exterior utilizando a moeda local é um desafio matemático complexo devido à volatilidade do mercado financeiro. O **FX Target** resolve essa dor de forma direta. 

O sistema projeta o tempo real necessário e ativa um **cronômetro regressivo visual (Active Tracker)**, projetado especificamente para manter o usuário engajado e focado no objetivo diretamente pelo smartphone.

---

## 🧠 Planejamento Estratégico & Estratégia de MVP

Antes de qualquer linha de código, o projeto passou por uma imersão técnica e criativa para garantir previsibilidade e assertividade. 

### 🚀 Escopo do MVP (Minimum Viable Product)
Para garantir uma entrega rápida, consistente e focada na dor principal do usuário, adotei uma estratégia de **MVP estruturado**. Defini que o foco central desta primeira versão será o fluxo crítico de **Criação e Exclusão de Projetos Financeiros ativos**. Recursos secundários, como a edição de metas já existentes e o cronômetro regressivo em tempo real, foram mapeados e priorizados para os próximos ciclos de desenvolvimento (Backlog da *V2*).

### 🎨 Design & Visual Identity
Utilizei o **Milanote** para curadoria de referências visuais e o **Coolors** para a definição de uma paleta de cores equilibrada que transmite confiança e modernidade.

| Referências (Milanote) | Paleta de Cores (Coolors) |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/a0f514ea-4d4f-4e8e-8c18-238103c2f3a3" width="100%" alt="Organizando as Ideas no Milanote" /> | <img src="https://github.com/user-attachments/assets/ee641106-36ff-406d-aeab-e3e57676486b" width="100%" alt="Paleta de Cor do Coolors usada" /> |

### 🛠️ Workflow & Metodologia Ágil
A gestão de tarefas é realizada via **Kanban no Trello**, simulando o fluxo de trabalho de grandes empresas de tecnologia (To Do, Doing, Done).

<div align="center">
  <img src="https://github.com/user-attachments/assets/aac87aac-cc3c-41b0-a159-8b35b638cc24" width="100%" alt="Estrutura Kanban no Trello" />
</div>

---

## 🏗️ Linha do Tempo de Engenharia (The Evolution)

### 🔹 Dia 1: Arquitetura HTML & Semântica
O primeiro ciclo de trabalho focado em código foi destinado a estruturar a aplicação com HTML5 semântico de forma robusta, organizando fluxos de dados com a tag `<form>`, agrupamento correto de inputs de escolha única (`type="radio"`) e tabelas estruturais de dados limpas prontas para renderização.

| Home (`index.html`) | Criação de Metas (`create-goal.html`) | Listagem de Projetos (`projects.html`) |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/42fb0f89-34d8-4853-b374-61da0d525e48" width="100%" alt="Interface da Home Sem Estilo" /> | <img src="https://github.com/user-attachments/assets/b3073ccd-3f27-477f-8ba8-549a0e2fcf5e" width="100%" alt="Interface do Formulário Sem Estilo" /> | <img src="https://github.com/user-attachments/assets/687b4088-0da0-40f2-9bae-d140d225d7dd" width="100%" alt="Interface da Tabela Inicial" /> |

### 🔹 Dia 2: Engenharia de CSS & Refatoração de Layout
No segundo ciclo, a identidade visual do Figma foi trazida à vida através de técnicas modernas de CSS3 (Flexbox, Grid e posicionamento avançado). O layout foi completamente adaptado para o conceito **Mobile-First**, garantindo fluidez e encaixe milimétrico em qualquer smartphone.

#### 🔄 Decisão Crítica de Arquitetura: Substituição de Tabelas por "Key-Value Rows"
Durante a estilização, identifiquei que tabelas HTML tradicionais tornavam-se rígidas e prejudicavam a usabilidade em telas menores. Para solucionar isso, **substituí o modelo clássico de tabelas por uma estrutura dinâmica de cartões em linhas chave-valor (`key-value-rows`)**. 

Para garantir que a mudança não quebrasse os padrões de acessibilidade e SEO, utilizei a semântica de **Description Lists (`<dl>`, `<dt>`, `<dd>`)**. Isso tornou o layout extremamente responsivo, fluido para desktops e celulares, sem adicionar complexidade desnecessária ao código.

Além disso, apliquei técnicas de profundidade como **Glassmorphism** (`backdrop-filter: blur()`) para aumentar o contraste de leitura sobre elementos gráficos.

| Home Mobile Pronta | Criação de Metas Mobile | Interface Dinâmica de Projetos |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/39c8ab23-8161-478c-8c0f-f746eefcea4c" width="100%" alt="Home Pronta Mobile" /> | <img src="https://github.com/user-attachments/assets/400dc16f-30cc-40af-8545-f6d9999d45d2" width="100%" alt="Formulário Customizado Mobile" /> | <img src="https://github.com/user-attachments/assets/85ee8a71-1e68-454d-8bb0-0060daeb5e52" width="100%" alt="Nova Estrutura Key-Value Rows" /> |

| Detalhes Visuais e Bio do Autor |
| :---: |
| <img src="https://github.com/user-attachments/assets/1d90f609-6610-4488-9e1a-15ffe0919869" width="50%" alt="Seção Customizada Sobre o Criador" /> |

---

## 📐 O Diferencial de Engenharia (The Logic)

O motor do sistema realiza cálculos dinâmicos utilizando a taxa de câmbio atualizada no momento da requisição:

$$Tempo_{meses} = \frac{Meta_{Estrangeira} \times Taxa_{Cambio}}{Economia_{MensalLocal}}$$

Se o tempo calculated for menor ou igual ao prazo estipulado pelo usuário, o projeto é marcado como **Viável**. Caso contrário, o sistema calcula automaticamente a quantidade de meses excedentes.

---

## 🛠️ Arquitetura Técnica (Vanilla Stack)

Focado no ecossistema core da web para garantir performance extrema:

- **Frontend:** HTML5 semântico (uso estrito de tags de acessibilidade) e CSS3 avançado (Flexbox/Grid).
- **Metodologia:** Mobile-First real focado na experiência do usuário.
- **Lógica:** JavaScript Vanilla (Sem frameworks, foco em manipulação limpa da DOM).
- **APIs:** Integração assíncrona com `AwesomeAPI` para cotações em tempo real.
- **Persistência:** `Web Storage API` para retenção de dados local.

---

## 📅 Histórico de Progresso (Checklist)

- [x] Imersão criativa e referências visuais (Milanote & Coolors)
- [x] Definição de fluxos e arquitetura Kanban (Trello)
- [x] Estruturação do esqueleto e semântica HTML5 (Dia 1)
- [x] Estilização completa e interface responsiva com CSS3 (Dia 2)
- [x] Adaptação e refatoração Mobile-First da Home principal
- [x] Implementação do Glassmorphism e posicionamentos avançados na tela de cadastro
- [x] Migração de tabelas para estrutura semântica de `key-value rows` (`<dl>`)
- [ ] Integração com JavaScript Core para cálculos assíncronos da AwesomeAPI
- [ ] Implementação de manipulação da DOM para salvar e listar metas no LocalStorage
- [ ] Adicionar funcionalidade para remoção dinâmica de projetos (MVP Core)
- [ ] Implementar cronômetro regressivo ativo (V2 Backlog)
- [ ] Adicionar funcionalidade de edição de projetos (V2 Backlog)
