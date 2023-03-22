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
        cy.Login(data.Email, data.password)
        cy.CreateWorkSpace(data.WorkSpaceName)
        cy.AddListA(data.NameFirstList)
        cy.AddListB(data.NameSecondList)
        cy.AddCardToListA(data.NameCardA)
        cy.AddCardToListB(data.NameCardB)
        cy.dragAndDrop()
        cy.logOut()
    })
})