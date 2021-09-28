it('can run a test', () => {
    assert.equal(1,1)
});

it("can navigate pages", () => {
  cy.visit("https://example.cypress.io/");
  cy.contains("within");
});