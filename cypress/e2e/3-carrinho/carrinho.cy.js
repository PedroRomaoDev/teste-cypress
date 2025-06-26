describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Deve adicionar e remover um item do carrinho', () => {
    cy.get('.inventory_item')
      .first()
      .within(() => {
        cy.get('button').contains('ADD TO CART').click();
        cy.get('button').contains('REMOVE').should('be.visible').click();
      });

    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
