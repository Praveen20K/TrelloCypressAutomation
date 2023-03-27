import '@4tw/cypress-drag-drop'
describe('Automating Trello Website', ()=>{
    let data: { [key: string]: string };
    before(function() {
    cy.fixture('example.json').then((trello: {[key: string]: string})=>{
        data = trello;
    })
    })
    it('Validate Trello', ()=>{
        cy.HandleUncaughtExp()
        cy.login(data.Email, data.password)
        cy.createWorkSpace(data.WorkSpaceName)
        cy.addListA(data.NameFirstList)
        cy.addListB(data.NameSecondList)
        cy.addCardToListA(data.NameCardA)
        cy.addCardToListB(data.NameCardB)
        cy.dragAndDrop()
        cy.logOut()
    })
})