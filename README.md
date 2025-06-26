
# 🧪 Prova Prática - Automação Web com Cypress

Este projeto realiza testes automatizados de interface (E2E) no site **[SauceDemo](https://www.saucedemo.com/v1/)**, utilizando a ferramenta **Cypress**. Os testes estão organizados por funcionalidades, com base em práticas de BDD, cobrindo o fluxo completo de um usuário no sistema: login, visualização de produtos, manipulação do carrinho e checkout.

---

## 📁 Estrutura de Pastas

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

| Funcionalidade | Status | Descrição |
|----------------|--------|-----------|
| Login/Logout   | ✅     | Testes com login válido e inválido, e logout |
| Produtos       | ✅     | Listagem, visualização e ordenação dos produtos |
| Carrinho       | ✅     | Adição, remoção e validação de itens |
| Checkout       | ✅     | Preenchimento de formulário, resumo e finalização da compra |

---

## 🧪 Execução dos Testes

### Pré-requisitos:
- [Node.js](https://nodejs.org/) instalado
- Gerenciador de pacotes `npm` ou `yarn`

### Instalação:

```bash
git clone https://github.com/PedroRomaoDev/teste-cypress.git
cd teste-cypress
npm install
```

### Rodar Cypress no modo interativo:

```bash
npx cypress open
```

### Rodar Cypress no modo headless (linha de comando):

```bash
npx cypress run
```

---

## 📋 Exemplo de Caso de Teste (BDD)

```gherkin
Funcionalidade: Login no sistema

  Cenário: Login com credenciais válidas
    Dado que o usuário acessa a página de login
    Quando ele informa o usuário "standard_user" e a senha "secret_sauce"
    E clica no botão de login
    Então ele deve ser redirecionado para a página de produtos
```

---

## ⚙️ Tecnologias Utilizadas

- ✅ Cypress
- ✅ JavaScript (ES6+)
- ✅ Node.js
- ✅ HTML/CSS (análise de elementos da UI)
- ✅ Gherkin (para descrição dos cenários)

---

## 👨‍💻 Autor

Pedro Romão  
Instrutor de Programação | Desenvolvedor Full Stack  
📧 pedro@email.com  
📎 GitHub: [github.com/PedroRomaoDev](https://github.com/PedroRomaoDev)

---

## 🏁 Considerações Finais

Este projeto foi desenvolvido como parte da **Prova Prática de Teste de Software com Automação Web**. A estrutura modular, a aplicação de boas práticas e a clareza dos testes permitem fácil manutenção e extensão para futuras funcionalidades.
