/// <reference types="Cypress" />

context('Ver Repositórios', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/test_bancos')
  })

  it('redirecionar para repositório javascript', () => {
    cy.get('.info>table>tbody>tr>td>a').eq(0).click({multiple:true});
  })

  it('redirecionar para repositório python', () => {
    cy.get('.info>table>tbody>tr>td>a').eq(1).click({multiple:true});
    cy.window().should('have.property', 'top')
  })


  it('redirecionar para repositório ruby', () => {
    cy.get('.info>table>tbody>tr>td>a').eq(2).click({multiple:true});
    cy.window().should('have.property', 'top')
  })

  it('redirecionar para repositório java', () => {
    cy.get('.info>table>tbody>tr>td>a').eq(3).click({multiple:true});
    cy.window().should('have.property', 'top')
  })

  it('redirecionar para repositório c++', () => {
    cy.get('.info>table>tbody>tr>td>a').eq(4).click({multiple:true});
    cy.window().should('have.property', 'top')
  })


})
