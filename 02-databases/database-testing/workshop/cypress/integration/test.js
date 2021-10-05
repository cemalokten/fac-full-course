beforeEach(() => {
  cy.task("resetDb");
});

it('Checks if page displays list of users', () => {
  cy.visit('/');
  cy.get('li')
  cy.should('contain', 'Sery1976')
  .and('contain', 'Notne1991')
  .and('contain', 'Moull1990')
  .and('contain', 'Spont1935')
  .and('contain', 'Precand')
})

const data = ['Cemal', 30, 'London'];

it('checks if you can create a new user', () => {
  cy.visit('/users/create');
  cy.get('input[name=username').type(data[0])
  cy.get('input[name=age').type(data[1])
  cy.get('input[name=location').type(data[2])
  cy.get('button[type="submit"]').click();
  cy.get('li').should('contain', data[0])
})


it('checks if you can a user', () => {
  cy.visit('/');
  cy.get('button[value="1"]').click();
  cy.contains('Sery1976').should('not.exist')
})


