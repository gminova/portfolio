describe("Site Navigation", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Gets about header", function() {
    cy.get(".about__header").should("contain", "Gergana Minova");
    expect(".about__header").to.be.a("string");
  });

  it("Gets menu icon", function() {
    cy.get(".menu__button").should("contain", "☰");
  });

  it("Scrolls to projects on click of arrow down button", function() {
    cy.get(".arrow")
      .should("contain", "↓")
      .click({ force: true });
    cy.url().should("eq", "http://localhost:3000/#Projects");
  });
});
