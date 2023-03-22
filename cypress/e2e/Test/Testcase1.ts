import '@4tw/cypress-drag-drop'
import { eq } from 'cypress/types/lodash';
let data: { [key: string]: string };
const Email = 'cypress.testing@dignityhealthcd.onmicrosoft.com';
const password = 'Topo8600';
describe('Automating Trello Website', ()=>{
  before(function() {
  
  })
  beforeEach(function() {
    cy.HandleUncaughtExp();
  });
  it('Sample test', ()=>{
    cy.HandleUncaughtExp();
  cy.visit('/')
  cy.get('a[href="/login"]', {timeout: 10000}).eq(0).click()
  cy.get("input[id='user']").type('praveenmythili@gmail.com')
  cy.get('input[id="login"]').click()
  cy.origin('https://id.atlassian.com/login', ()=>{
    cy.get('input[id="password"]').type('testuser')
    cy.get('button[id="login-submit"]').click()
    cy.wait(5000)
  })
  cy.visit('/')
  cy.get('button[aria-label="Create board or Workspace"]').click()
  cy.get('button[data-testid="header-create-board-button"]').click()
  cy.get('input[data-testid="create-board-title-input"]').type('TrelloSampleWorkspace')
  cy.get('button[data-testid="create-board-submit-button"]').click()
  cy.get('input[class="list-name-input"]').type('List A')
  cy.get('input[value="Add list"]').click()
  cy.get('input[class="list-name-input"]').type('List B')
  cy.get('input[value="Add list"]').click()
  cy.get('a[aria-label="Cancel list editing"]').click()
  //List A
  cy.get('span[class="js-add-a-card"]').eq(0).click()
  const textArea = cy.get('textarea[class="list-card-composer-textarea js-card-title"]', {timeout:10000})
  const AddCard = cy.get('input[value="Add card"]')
  const count = 9
   textArea.click({force:true}).type('List A Task 1')
   AddCard.click()
   //List B
   cy.get('span[class="js-add-a-card"]').eq(1).click()
   cy.get('div[class="list-card-details u-clearfix"] textarea').type('List B Task 1')
   cy.get('div[class="cc-controls-section"] input').click()  
   cy.get(':nth-child(1) > .list > .list-cards > .list-card > .list-card-details > .list-card-title').drag(':nth-child(2) > .list > .list-cards')
   let initialPosition;

  cy.get('div[class="list-cards u-fancy-scrollbar u-clearfix js-list-cards js-sortable ui-sortable"] :nth-child(2) span[class="list-card-title js-card-name"]').should('have.css',GeolocationCoordinates).then((btn)=>{
    console.log(btn)
  })
  cy.get('button[aria-label="Open member menu"] span').click()
  cy.get('button[data-testid="account-menu-logout"]').click()
  })
})

