describe('GitHub Automation', ()=>{

    it('GitHub Login', ()=>{
        cy.visit("https://meshery.layer5.io/login")
        cy.get('button[class="waves-effect waves-light btn github"]').click()
        cy.origin('https://github.com/login', ()=>{
            cy.get('#login_field').type("testemailid@gmail.com")
            cy.get('#password').type('testpassword')
            cy.get('input[class="btn btn-primary btn-block js-sign-in-button"]').click()
            cy.get('div.js-flash-alert').contains('Incorrect username or password.')
        })
    })
})