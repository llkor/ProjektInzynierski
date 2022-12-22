/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/login')
  })

  it('displays two todo items by default', () => {
    let login = cy.get('[name="login"]');
    let password = cy.get('[name="password"]');
    let button = cy.get('button').contains('Zaloguj się');
    login.type('BeataF');
    password.type('123Qwe');
    button.click();
    let header = cy.get('h1').contains('Wszystkie zestawy');
    header.should('be.visible');
  })
})
