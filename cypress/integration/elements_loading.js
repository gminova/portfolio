describe("Site Navigation", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Get about header", function() {
    cy.get(".about__header").should("contain", "Gergana Minova");
    expect(".about__header").to.be.a("string");
    cy.get(".menu__button").should("contain", "☰");
  });
});
