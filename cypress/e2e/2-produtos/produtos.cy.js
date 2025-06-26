describe('Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Deve exibir a lista de produtos', () => {
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
  });

  it('Deve visualizar os detalhes de um produto', () => {
    cy.get('.inventory_item_name').first().click();
    cy.get('.inventory_details_name').should('be.visible');
  });

  it('Deve ordenar os produtos por nome (Z a A)', () => {
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.get('.inventory_item_name').first().should('be.visible');
  });
});
