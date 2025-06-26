
# 🧪 Prova Prática — Automação Web com Cypress

[![Build Status](https://github.com/PedroRomaoDev/teste-cypress/actions/workflows/ci.yml/badge.svg)](https://github.com/PedroRomaoDev/teste-cypress/actions/workflows/ci.yml)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

Este projeto automatiza testes de interface (E2E) no site **[SauceDemo](https://www.saucedemo.com/v1/)** utilizando **Cypress**. Os testes cobrem o fluxo completo do usuário: login, visualização e ordenação de produtos, manipulação do carrinho e finalização do checkout.

---

## 📂 Estrutura do Projeto

```
cypress/
└── e2e/
    ├── 1-login/
    │   └── login.cy.js
    ├── 2-produtos/
    │   └── produtos.cy.js
    ├── 3-carrinho/
    │   └── carrinho.cy.js
    └── 4-checkout/
        └── checkout.cy.js
```

---

## ✅ Funcionalidades Automatizadas

| Funcionalidade  | Status | Descrição                                         |
|-----------------|--------|--------------------------------------------------|
| Login/Logout    | ✅     | Testes de login válido, inválido e logout        |
| Produtos        | ✅     | Listagem, detalhes e ordenação dos produtos      |
| Carrinho        | ✅     | Adição, remoção e validação dos itens no carrinho|
| Checkout        | ✅     | Preenchimento do formulário, resumo e finalização|

---

## ⚙️ Tecnologias Utilizadas

- Cypress
- JavaScript (ES6+)
- Node.js

---

## 🚀 Como Executar os Testes

### Pré-requisitos

- Node.js instalado ([https://nodejs.org/](https://nodejs.org/))
- Gerenciador de pacotes: npm ou yarn

### Passos

```bash
git clone https://github.com/PedroRomaoDev/teste-cypress.git
cd teste-cypress
npm install
```

### Executar em modo interativo (com interface gráfica):

```bash
npm run cy:open
```

### Executar em modo headless (linha de comando):

```bash
npx cypress run
```

---

## 👨‍💻 Sobre o Autor

Pedro Henrique Romão 
📎 GitHub: [github.com/PedroRomaoDev](https://github.com/PedroRomaoDev)

---

## 🏁 Considerações Finais

Este projeto foi desenvolvido como parte da **Prova Prática de Teste de Software com Automação Web**. Uso de boas práticas e a clareza dos testes.
