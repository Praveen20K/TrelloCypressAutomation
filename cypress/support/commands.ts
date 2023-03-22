import { trelloLocators } from "./locators";
Cypress.Commands.add('HandleUncaughtExp', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

Cypress.Commands.add('Login', (email:string, password: string)=>{
  cy.visit('/')
  cy.get(trelloLocators.loginButton, {timeout: 10000}).eq(0).click()
  cy.get(trelloLocators.inputEmailId).type(email)
  cy.get(trelloLocators.continueButton).click()
  cy.origin('https://id.atlassian.com/login', {args: { password } }, ({ password })=>{
    cy.get('input[id="password"]').type(password)
    cy.get('button[id="login-submit"]').click()
    cy.wait(5000)
  })
  cy.visit('/')
})

Cypress.Commands.add('CreateWorkSpace', (text: string)=>{
  cy.get(trelloLocators.CreateButton).click()
  cy.get(trelloLocators.createBoard).click()
  cy.get(trelloLocators.nameBoard).type('TrelloSampleWorkspace')
  cy.get(trelloLocators.createSubmitButton).click()
})

Cypress.Commands.add('AddListA', (text: string)=>{
  cy.get(trelloLocators.listA).type('List A')
  cy.get(trelloLocators.addList).click()
})

Cypress.Commands.add('AddListB', (text: string)=>{
  cy.get(trelloLocators.listA).type('List B')
  cy.get(trelloLocators.addList).click()
  cy.get(trelloLocators.cancelList).click()
})

Cypress.Commands.add('AddCardToListA', (text: string)=>{
  cy.get(trelloLocators.addAcard).eq(0).click()
  cy.get(trelloLocators.textArea1, {timeout:10000}).click({force:true}).type('List A Task 1')
  cy.get(trelloLocators.addCard1).click()
})

Cypress.Commands.add('AddCardToListB', (text: string)=>{
  cy.get(trelloLocators.addAcard).eq(1).click()
   cy.get(trelloLocators.textArea2).type('List B Task 1')
   cy.get(trelloLocators.addCard2).click()  
})

Cypress.Commands.add('dragAndDrop', ()=>{
  cy.get(trelloLocators.dragCard).drag(trelloLocators.dropCard) 
})

Cypress.Commands.add('logOut', ()=>{
  cy.get(trelloLocators.accountButton).click()
  cy.get(trelloLocators.logoutButton).click()
})
  