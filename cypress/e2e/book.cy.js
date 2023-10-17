describe("page with books", () => {


  beforeEach(() => {
    cy.visit("/");
  });

describe("Добавить книги", () => {
  it("Аэропорт добавление", () => {
    cy.login("test@test.com", "test");
    cy.addBooks("Аэропорт", "Роман", "Артур Хейли");
    cy.contains("Аэропорт").should("be.visible");
  });

  it("Дневник добавление", () => {
    cy.login("test@test.com", "test");
    cy.addBooks("Дневник", "Роман", "Чак Паланик");
    cy.contains("Дневник").should("be.visible");
  });

  it("Французкий роман добавление", () => {
    cy.login("test@test.com", "test");
    cy.addBooks("Французкий роман", "Роман", "Фредерик Бегбедер");
    cy.contains("Французкий роман").should("be.visible");
  });

  it("Добавить книгу в избранное", () => {
    cy.login("test@test.com", "test");
    cy.contains("Books list").click();
    cy.contains("Дневник").contains("Add to favorite").click();
    cy.contains("Дневник").should("be.visible");
  });

  it("Удалить книгу из избранного", () => {
    cy.login("test@test.com", "test");
    cy.contains("Favorites").click();
    cy.contains("Дневник").contains("Delete from favorite").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
});
});