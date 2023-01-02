/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('testing app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/login')
  })

  it('gets user logged in', () => {
    let login = cy.get('[name="login"]');
    let password = cy.get('[name="password"]');
    let button = cy.get('button').contains('Zaloguj się');
    login.type('BeataB');
    password.type('123Qwe');
    button.click();
    let header = cy.get('h1').contains('Wszystkie zestawy');
    header.should('be.visible');
  })

  it('checks if changing password without inputs shows warning', () => {
    let login = cy.get('[name="login"]');
    let password = cy.get('[name="password"]');
    let button = cy.get('button').contains('Zaloguj się');
    login.type('BeataB');
    password.type('123Qwe');
    button.click();
    let header = cy.get('h1').contains('Wszystkie zestawy');
    header.should('be.visible');
    let menu = cy.get('.mat-focus-indicator.mat-button.mat-button-base').first();
    menu.click();
    let buttonProfile = cy.get('button').contains('Profil');
    buttonProfile.click();
    let buttonPassword = cy.get('button').contains('Zmień hasło');
    buttonPassword.click();
    let oldPassword = cy.get('[name="old_password"]')
    let newPassword = cy.get('[name="new_password1"]')
    let repeatNewPassword = cy.get('[name="new_password2"]')
    oldPassword.should('be.visible');
    newPassword.should('be.visible');
    repeatNewPassword.should('be.visible');
    let buttonChange = cy.get('button').contains('Zmień');
    buttonChange.click();
    let warning = cy.get('p').contains('Brakuje danych');
    warning.should('be.visible');
  })
})
