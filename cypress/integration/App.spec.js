describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('number buttons should update the display of the running total', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '123');
  })

  it('should update the display with the result of the arithmatical operation', ()=>{
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '4')
  })

  it('should be able to chain multiple operations together', ()=>{
    cy.get('#number2').click()
    cy.get('#operator_subtract').click()
    cy.get('#number1').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '3')
  })

  //Is the output as expected for a range of numbers 
  // (for example, positive, negative, decimals and very large numbers)?
  it('should output as expected for very large numbers', () => {
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click()
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '5000050')
  })

  it('should output as expected for negative numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-2')
  }) 

  it('should output as expected for decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator_divide').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('should dsiplay "Error", when dividing by 0', () => {
    cy.get('#number3').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error');
  })

})