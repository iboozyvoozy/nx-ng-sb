describe('ui-kit', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary'));

  it('should render the component', () => {
    cy.get('my-org-button').should('exist');
  });
});
