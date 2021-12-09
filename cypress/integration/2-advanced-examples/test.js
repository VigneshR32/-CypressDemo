describe('My first test suite', function(){
    it('My first test case',function(){
        cy.visit('https://www.automationexercise.com/login');
        cy.get('div.login-form form input[type="email"]').type("vigneshstallone@protonmail.com")
        cy.get('[type="password"]').type("buslap8181@")
        cy.get('div.login-form form button[type="submit"]').click()
        cy.get('a[href="/logout"]').click()
        cy.get('div.login-form form button[type="submit"]').should('have.text',"Login")
    })
})