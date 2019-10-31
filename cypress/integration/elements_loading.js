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

  it("Scrolls to projects on click of arrow down button", function() {
    cy.get(".menu__content")
      .invoke("show")
      .click();
    cy.get(".testid-about").should("be.visible");
    cy.get(".testid-about").should("contain", "About");
    cy.get(".testid-about").click();
    cy.url().should("eq", "http://localhost:3000/#About");
    cy.get(".menu__content").invoke("hide");
  });

  it("Scrolls to projects on click of arrow down button", function() {
    cy.get(".menu__content")
      .invoke("show")
      .click();
    cy.get(".testid-projects").should("be.visible");
    cy.get(".testid-projects").should("contain", "Projects");
    cy.get(".testid-projects").click();
    cy.url().should("eq", "http://localhost:3000/#Projects");
    cy.get(".menu__content").invoke("hide");
  });

  it("Scrolls to projects on click of arrow down button", function() {
    cy.get(".menu__content")
      .invoke("show")
      .click();
    cy.get(".testid-contact").should("be.visible");
    cy.get(".testid-contact").should("contain", "Contact");
    cy.get(".testid-contact").click();
    cy.url().should("eq", "http://localhost:3000/#Contact");
    cy.get(".menu__content").invoke("hide");
  });
});
