//exe1


var Chance = require('chance');
var chance = new Chance();


describe('LOGIN - SPEC', () => {
  it('Singup - Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type("Rick")
    cy.get("[name='lastName']").type("Inada")  
    cy.get("[name='username']").type("risname")
    cy.get("[name='password']").type("123456789")
    cy.get("[name='confirmPassword']").type("123456789")
    cy.get("[type='submit']").click()        
  })

  it('Singup - Fail', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type("Rick")
    cy.get("[name='lastName']").type("Inada")  
    cy.get("[name='username']").type("risname")    
    cy.get("[name='confirmPassword']").type("123456789")    
    cy.get("[type='submit']").should('be.disabled')       
  })

  it('Login - Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[name='username']").type("risname")
    cy.get("[name='password']").type("123456789")
    cy.get("[type='submit']").click()
    cy.get(".MuiTypography-h6").eq(2).should("have.text","Get Started with Real World App")      
  })

  it('Login - Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[name='username']").type("Heath93")
    cy.get("[name='password']").type("s3cret")
    cy.get("[type='submit']").click()       
  })

  it.only('Login - Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[name='username']").type("Arvilla_Hegmann")
    cy.get("[name='password']").type("s3cret")
    cy.get("[type='submit']").click()       
  })



  it('Login - Fail', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[name='username']").type("risna2me")
    cy.get("[name='password']").type("12345g6789")
    cy.get("[type='submit']").click()       
    cy.get("[data-test='signin-error']").should('have.text', "Username or password is invalid")
   
  })

  

})