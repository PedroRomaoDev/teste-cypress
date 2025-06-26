describe('Login', () => {
  const baseUrl = 'https://www.saucedemo.com/v1/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should login successfully with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('should show error with invalid credentials', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('#login-button').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
  });
});
