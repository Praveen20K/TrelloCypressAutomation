import { trelloLocators } from "./locators";
Cypress.Commands.add('HandleUncaughtExp', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

Cypress.Commands.add('login', (email:string, password: string)=>{
  cy.visit('/')
  cy.get(trelloLocators.loginButton, {timeout: 10000}).eq(0).click()
  cy.get(trelloLocators.loginText).should('have.text','Log in to Trello')
  cy.get(trelloLocators.inputEmailId).type(email)
  cy.get(trelloLocators.continueButton).click()
  cy.origin('https://id.atlassian.com/login', {args: { password } }, ({ password })=>{
    cy.get('input[id="password"]').type(password)
    cy.get('button[id="login-submit"]').click()
    cy.wait(5000)
  })
  cy.visit('/')
})

Cypress.Commands.add('createWorkSpace', (text: string)=>{
  cy.get(trelloLocators.CreateButton).should('be.visible').click()
  cy.get(trelloLocators.createBoard).should('be.visible').click()
  cy.get(trelloLocators.nameBoard).type('TrelloSampleWorkspace')
  cy.get(trelloLocators.createSubmitButton).should('be.visible').click()
  cy.get(trelloLocators.boardTitle).should('have.text', text)
})

Cypress.Commands.add('addListA', (text: string)=>{
  cy.get(trelloLocators.listA).type(text)
  cy.get(trelloLocators.addList).should('be.visible').click()
  cy.get(trelloLocators.listTitle).eq(0).should('have.text', text)
})

Cypress.Commands.add('addListB', (text: string)=>{
  cy.get(trelloLocators.listA).type(text)
  cy.get(trelloLocators.addList).click()
  cy.get(trelloLocators.listTitle).eq(1).should('have.text', text)
  cy.get(trelloLocators.cancelList).click()
})

Cypress.Commands.add('addCardToListA', (text: string)=>{
  cy.get(trelloLocators.addAcard).eq(0).click()
  cy.get(trelloLocators.textArea1, {timeout:10000}).click({force:true}).type(text)
  cy.get(trelloLocators.addCard1).click()
  cy.get(trelloLocators.dragCard).should('have.text', text)
})

Cypress.Commands.add('addCardToListB', (text: string)=>{
  cy.get(trelloLocators.addAcard).eq(1).click()
   cy.get(trelloLocators.textArea2).type(text)
   cy.get(trelloLocators.addCard2).click()  
   cy.get(trelloLocators.cardB).should('have.text', text)
})

Cypress.Commands.add('dragAndDrop', ()=>{
  cy.get(trelloLocators.dragCard).drag(trelloLocators.dropPlace) 
  cy.get(trelloLocators.cardCount).should('have.length', 2)
})

Cypress.Commands.add('logOut', ()=>{
  cy.get(trelloLocators.accountButton).click()
  cy.get(trelloLocators.logoutButton).click()
  cy.origin('https://id.atlassian.com/login', ()=>{
    cy.get('button#logout-submit').click()
  })
  cy.url().should('include','https://trello.com/home')
})
  