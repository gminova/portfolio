describe("Site Navigation", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Get about header", function() {
    cy.get(".about__header");
  });
});
