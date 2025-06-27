# 🎫 Sistema de Compra de Ingressos

Este projeto é uma simulação interativa de compra de ingressos para um evento, desenvolvida em **JavaScript puro**, com apoio de HTML e CSS. O usuário pode escolher o tipo de ingresso (pista, inferior ou superior), informar a quantidade desejada e realizar a compra — respeitando o limite disponível.

---

## ✨ Funcionalidades

- 🎟️ **Seleção de Tipo de Ingresso**: O usuário pode escolher entre os setores *Pista*, *Inferior* e *Superior*.
- 🔢 **Controle de Quantidade**: O sistema verifica se a quantidade solicitada está disponível antes de confirmar a compra.
- ✅ **Atualização Dinâmica**: A quantidade de ingressos disponíveis é atualizada na tela em tempo real.
- ⚠️ **Validação e Alertas**: Caso a quantidade pedida exceda a disponível, uma mensagem de erro é exibida.

---

## 🧠 Como Funciona

### Lógica JavaScript

- O botão "Comprar" chama a função `comprar()`, que:
  - Lê o tipo de ingresso e a quantidade inserida.
  - Redireciona para a função responsável por aquele tipo de ingresso.
- Cada tipo (pista, inferior ou superior) tem sua própria função (`comprarPista()`, `comprarInferior()` e `comprarSuperior()`), que:
  - Verifica se há ingressos suficientes.
  - Atualiza a quantidade restante na tela com `textContent`.
  - Exibe um `alert()` informando sucesso ou erro.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura da interface
- **CSS3** — Estilização visual
- **JavaScript (puro)** — Lógica interativa de compra e atualização de valores

---

## 💡 Aprendizados

Durante o desenvolvimento deste projeto, pratiquei:

- Manipulação do DOM com `getElementById`
- Uso de `value` e `textContent` para interagir com inputs e elementos HTML
- Conversão de dados com `parseInt()`
- Controle de fluxo com `if`, `else if` e `else`
- Criação de alertas para interações do usuário

---

## 📚 Projeto Didático

Este projeto foi desenvolvido como exercício prático para treinar **lógica de programação com JavaScript** e interatividade com o DOM. É uma ótima introdução para quem deseja aprender a criar funcionalidades dinâmicas em sites.

---

## 📬 Contato

- 💻 GitHub: [@jessiepsx](https://github.com/jessiepsx)
- 🔗 LinkedIn: [Jéssica Pereira](https://www.linkedin.com/in/jéssica-pereira-bb1202265)

---

> 🚀 Projeto simples, mas poderoso para fixar conceitos de lógica e interatividade com JavaScript!
