# 🌍 FX Target

> Um planejador financeiro inteligente focado em metas internacionais, conversão de câmbio em tempo real e tracking ativo com design Mobile-First.

[![Figma](https://img.shields.io/badge/Figma-Prototipo%20Interativo-F24E1E?logo=figma&logoColor=white)](LINK_DO_SEU_FIGMA_AQUI)
[![Status do Projeto](https://img.shields.io/badge/Status-Planejamento%20%26%20Arquitetura-blue)](#)

---

## 🎯 O Pitch

Planejar uma viagem, um intercâmbio ou a compra de um bem no exterior utilizando a moeda local é um desafio matemático complexo devido à volatilidade do mercado financeiro. A maioria das pessoas não consegue mensurar com precisão quanto precisa poupar em sua moeda local (BRL) para atingir um objetivo cotado em moedas estrangeiras como Dólar (USD) ou Euro (EUR).

O **FX Target** resolve esse problema de forma direta e intuitiva. O usuário define o valor que consegue poupar mensalmente em sua moeda local, estipula a meta na moeda final estrangeira e o prazo desejado. O sistema calcula a viabilidade instantaneamente, projeta o tempo real necessário e ativa um **cronômetro regressivo visual (Active Tracker)**, projetado especificamente para manter o usuário engajado e focado no objetivo diretamente pelo smartphone.

---

## 🛠️ Arquitetura Técnica (Vanilla Stack)

Para garantir máxima performance, carregamento instantâneo e uma base de código sólida, a aplicação foi desenvolvida sem a dependência de frameworks (*No-Framework Architecture*), focando no ecossistema core da web:

### Frontend & Interface
* **Tecnologias Core:** HTML5 semântico e CSS3 avançado, estruturados sob a metodologia **Mobile-First** para garantir que a experiência de uso seja perfeita e responsiva em dispositivos móveis.
* **Lógica e Reatividade (Vanilla JS):** Utilização de JavaScript Puro para manipulação assíncrona da DOM, gerenciamento do estado do cronômetro em tempo real e controle de fluxos sem o overhead de pacotes externos.
* **Persistência Local (Web Storage API):** Implementação de `localStorage` para reter os dados de metas do usuário e o estado ativo do cronômetro sincronizados, mesmo que a página seja atualizada ou fechada.

### Integrações (APIs)
* **Cálculo de Câmbio:** Consumo assíncrono via `fetch()` da `AwesomeAPI` (Economia) para obter as cotações de moedas em tempo real com tratamento de erros robusto (`try/catch`).

---

## 📐 O Diferencial de Engenharia (The Logic)

O motor do sistema realiza cálculos dinâmicos utilizando a taxa de câmbio atualizada no momento da requisição:

$$Tempo_{meses} = \frac{Meta_{Estrangeira} \times Taxa_{Cambio}}{Economia_{MensalLocal}}$$

Se o tempo calculado for menor ou igual ao prazo estipulado pelo usuário, o projeto é marcado como **Viável**. Caso contrário, o sistema calcula automaticamente a quantidade de meses excedentes e exibe uma projeção clara com o valor sugerido de economia extra para cumprir a meta original.

---

## 📅 Próximos Passos (Roadmap de Desenvolvimento)
- [x] Concepção da Ideia e Validação de Regras de Negócio
- [ ] Prototipagem de Alta Fidelidade com foco em Mobile UI (Figma)
- [ ] Configuração do Ambiente de Desenvolvimento Local (Estrutura Base de Arquivos)
- [ ] Implementação de Consumo Assíncrono da API de Câmbio (MVP)
- [ ] Desenvolvimento da Lógica do Cronômetro Regressivo com Persistência em Cache local