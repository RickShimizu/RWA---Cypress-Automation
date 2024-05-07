//exe1

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    // Implemente os passos do caso de teste aqui
    cy.visit("http://localhost:3000/")
    cy.get('#username').type("Heath93")
    cy.get('#password').type("s3cret")
    //cy.get('.PrivateSwitchBase-input-28').click()
    cy.get("[type='submit']").click()
    cy.get('.MuiButton-label').click()
    cy.get('[data-test="user-list-search-input"]').type("Kristian Bradtke")
    cy.get("[data-test='user-list-item-GjWovtg2hr'] span").should("contain","Kristian Bradtke") 
    cy.get("[data-test='user-list-item-GjWovtg2hr']").click()
    cy.get('#amount').click()
    cy.get('#amount').type("600000")
    cy.get('#transaction-create-description-input').click()
    cy.get('#transaction-create-description-input').type("Fancy Hotel")
    cy.get("[data-test='transaction-create-submit-request']").should("be.enabled")
    cy.get("[data-test='transaction-create-submit-payment']").should("be.enabled")
    cy.get("[data-test='transaction-create-submit-payment']").click()
    cy.get("[role='alert']").should("contain", "Transaction Submitted!")  
    
   
    
  
  });

  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    // Implemente os passos do caso de teste aqui
  });
  
});