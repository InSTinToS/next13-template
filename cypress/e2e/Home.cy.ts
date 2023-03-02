describe('Home', () => {
  it('should be able to access Home', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').should('contain', 'InSTinToS')
  })
})
