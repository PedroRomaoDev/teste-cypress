describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Deve adicionar e remover um item do carrinho', () => {
    // Adiciona o primeiro produto
    cy.get('.btn_inventory').first().click();
    // Confirma que o carrinho tem 1 item
    cy.get('.shopping_cart_badge').should('contain', '1');

    // Agora clica no botão REMOVE (que tem classe diferente!)
    cy.get('.inventory_item')
      .first()
      .within(() => {
        cy.contains('button.btn_secondary.btn_inventory', 'REMOVE').click();
      });

    // Confirma que o badge do carrinho sumiu
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
