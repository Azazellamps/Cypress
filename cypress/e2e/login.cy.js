
describe("loge page", () => {


  beforeEach(() => {
    cy.visit("/");
  });

  it("should login with valid email and password", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should ('be.visible')
  });

  it("email should not be empty", () => {
    cy.contains("Log in").click();
  cy.get("#mail").type(" ");
  cy.get("#pass").type("test");
  cy.contains("Submit").click();
  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
  cy.get("#mail")
    .then(($el) => $el[0].validationMessage)
    .should("contain", "Заполните это поле");
});

it("password should not be empty", () => {
  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});
});



