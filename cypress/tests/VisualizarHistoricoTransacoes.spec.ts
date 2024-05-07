//exe1

describe('visualizar historico de transação', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    // Implemente os passos do caso de teste aqui
    cy.visit('http://localhost:3000/')
    cy.get("[name='username']").type("Heath93")
    cy.get("[name='password']").type("s3cret")
    cy.get("[type='submit']").click()
    cy.get("[href='/personal']").click()
    cy.get("[role='grid']").should("exist")    

  });
    
  it.only('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    // Implemente os passos do caso de teste aqui
    cy.visit('http://localhost:3000/')
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("s3cret")
    cy.get("[type='submit']").click()
    cy.get("[href='/personal']").click()
    cy.get("[role='grid']").should("not.exist")
    cy.get("[data-test='empty-list-header']").should("contain", "No Transactions  ")
  });
    
  



  
});