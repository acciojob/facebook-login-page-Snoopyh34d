//your JS code here. If required.
describe('Login Form', () => {
    it('should have fields for email/phone and password', () => {
        cy.visit('your-login-page-url');  // Make sure you're visiting the correct page URL
        cy.get('#email').should('be.visible').and('have.attr', 'placeholder', 'Email address or phone number');
        cy.get('#password').should('be.visible').and('have.attr', 'placeholder', 'Password');
    });
});

