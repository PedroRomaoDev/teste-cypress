describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Deve adicionar e remover um item do carrinho', () => {
    cy.get('.btn_inventory').first().click();

    cy.get('.shopping_cart_badge').should('contain', '1');

    cy.get('.inventory_item')
      .first()
      .within(() => {
        cy.contains('button.btn_secondary.btn_inventory', 'REMOVE').click();
      });

    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
