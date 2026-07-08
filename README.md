<img width="958" height="539" alt="fx-target-dia-de-html-pagina-de-projetos" src="https://github.com/user-attachments/assets/3f77a2dd-b812-480b-9732-ad1b958149c9" /># 🌍 FX Target

> Um planejador financeiro inteligente focado em metas internacionais, conversão de câmbio em tempo real e tracking ativo com design Mobile-First.

<div align="center">
  <a href="https://youtu.be/fh3A19srT-Y">
    <img src="https://img.shields.io/badge/V%C3%8DDEO_PITCH-Assistir_Agora-red?style=for-the-badge&logo=youtube" alt="Vídeo Pitch">
  </a>
  <a href="https://www.figma.com/design/Hv3Dk6ZfX6YjIEsxRdASWy/FX-Target?node-id=0-1&t=GNUCUhdcWHnRZWgC-1">
    <img src="https://img.shields.io/badge/PROT%C3%93TIPO-Explorar_no_Figma-blue?style=for-the-badge&logo=figma" alt="Figma Design">
  </a>
</div>

---

## 🎯 O Pitch

Planejar uma viagem, um intercâmbio ou a compra de um bem no exterior utilizando a moeda local é um desafio matemático complexo devido à volatilidade do mercado financeiro. O **FX Target** resolve essa dor de forma direta. 

O sistema projeta o tempo real necessário e ativa um **cronômetro regressivo visual (Active Tracker)**, projetado especificamente para manter o usuário engajado e focado no objetivo diretamente pelo smartphone.

---

## 🧠 Planejamento Estratégico (The "Pentagon" Plan)

Antes de qualquer linha de código, o projeto passou por uma imersão técnica e criativa para garantir previsibilidade e assertividade:

### 🎨 Design & Visual Identity
Utilizei o **Milanote** para curadoria de referências visuais e o **Coolors** para a definição de uma paleta de cores equilibrada que transmite confiança e modernidade.

| Referências (Milanote) | Paleta de Cores (Coolors) |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/a0f514ea-4d4f-4e8e-8c18-238103c2f3a3" width="100%" alt="Organizando as Ideias no Milanote" /> | <img src="https://github.com/user-attachments/assets/ee641106-36ff-406d-aeab-e3e57676486b" width="100%" alt="Paleta de Cor do Coolors usada" /> |

### 🛠️ Workflow & Metodologia Ágil
A gestão de tarefas é realizada via **Kanban no Trello**, simulando o fluxo de trabalho de grandes empresas de tecnologia (To Do, Doing, Done).

<div align="center">
  <img src="https://github.com/user-attachments/assets/aac87aac-cc3c-41b0-a159-8b35b638cc24" width="100%" alt="Estrutura Kanban no Trello" />
</div>

### 🏗️ Desenvolvimento & Engenharia Core (Dia 1: Arquitetura HTML & Semântica)
Início oficial do desenvolvimento técnico do projeto. O primeiro ciclo de trabalho focado em código foi destinado a estruturar a aplicação com HTML5 semântico de forma robusta, organizando fluxos de dados com a tag `<form>`, agrupamento correto de inputs de escolha única (`type="radio"`) e tabelas de dados limpas prontas para renderização.

| Home (`index.html`) | Criação de Metas (`create-goal.html`) | Listagem de Projetos (`projects.html`) |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/42fb0f89-34d8-4853-b374-61da0d525e48" width="100%" alt="Interface da Home" /> | <img src="https://github.com/user-attachments/assets/b3073ccd-3f27-477f-8ba8-549a0e2fcf5e" width="100%" alt="Interface do Formulário de Criação" /> | <img src="https://github.com/user-attachments/assets/687b4088-0da0-40f2-9bae-d140d225d7dd" width="100%" alt="Interface da Tabela de Projetos" /> |

---

## 📐 O Diferencial de Engenharia (The Logic)

O motor do sistema realiza cálculos dinâmicos utilizando a taxa de câmbio atualizada no momento da requisição:

$$Tempo_{meses} = \frac{Meta_{Estrangeira} \times Taxa_{Cambio}}{Economia_{MensalLocal}}$$

Se o tempo calculado for menor ou igual ao prazo estipulado pelo usuário, o projeto é marcado como **Viável**. Caso contrário, o sistema calcula automaticamente a quantidade de meses excedentes.

---

## 🛠️ Arquitetura Técnica (Vanilla Stack)

Focado no ecossistema core da web para garantir performance extrema:

- **Frontend:** HTML5 semântico e CSS3 avançado (Flexbox/Grid).
- **Metodologia:** Mobile-First para uso no mundo real.
- **Lógica:** JavaScript Vanilla (Sem frameworks, foco em fundamentos).
- **APIs:** Integração assíncrona com `AwesomeAPI` para cotações em tempo real.
- **Persistência:** `Web Storage API` para retenção de dados local.

---

## 📅 Roadmap de Desenvolvimento
- [x] Concepção da Ideia e Validação de Regras de Negócio
- [x] Estruturação do Pitch e Vídeo de Apresentação
- [x] Curadoria de referências no Milanote e definição de cores no Coolors
- [x] Prototipagem de Alta Fidelidade (Figma)
- [x] Gestão de fluxo via Kanban (Trello)
- [x] Configuração do Ambiente Local e Criação de todos os arquivos HTML estruturais
- [ ] Finalização da Estilização CSS Avançada (Mobile-First)
- [ ] Implementação do Consumo de API (AwesomeAPI)
- [ ] Desenvolvimento da Lógica de Cálculo e Active Tracker
