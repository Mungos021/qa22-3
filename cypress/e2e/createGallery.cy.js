/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";

describe("Create new gallery", () => {
  //before hook - izvrsava se jednom pre svih testova
  before(() => {});
  //izvrsava se pre svakog pojedinacnog testa (it bloka)
  beforeEach(() => {
    cy.visit("login");
    loginPage.loginUser('markoqa13@gmail.com', 'Marko123');
    // KORISCENJE POM-a umesto klasicnih getera
    // cy.get("#email").type("markoqa13@gmail.com");
    // loginPage.emailInputField.type("markoqa13@gmail.com");
    // // cy.get("#password").type("Marko123");
    // loginPage.passwordInputField.type("Marko123");
    // // cy.get("button").contains("Submit").click();
    // loginPage.submitBtn.contains("Submit").click();
  });

  it.only("Succesfully create gallery with one image", () => {
    cy.get('a[href="/create"]').should("be.visible").click();
    cy.get("h1").should("have.text", "Create Gallery");

    cy.get("#title").should("be.visible").type("Nova Galerija 1 - Marko");
    cy.get("#description").should("be.visible").type("Galerija Yamaha");

    cy.get('input[type="url"]').type(
      "https://media.gazetadopovo.com.br/2009/05/f1ec0bfe587fe950b904c4267fb20ca9-gpLarge.jpg"
    );
    cy.contains("Submit").click();
  });

  // izvrsava se posle svakog testa (it bloka)
  afterEach(() => {});

  it("Negative 1 - Succesfully create gallery with one image", () => {
    cy.get('a[href="/create"]').should("be.visible").click();
    cy.get("h1").should("have.text", "Create Gallery");

    cy.get("#title").should("be.visible").type("Nova Galerija 2 - Marko");
    cy.get("#description").should("be.visible").type("Galerija Yamaha");

    cy.get('input[type="url"]').type(
      "https://media.gazetadopovo.com.br/2009/05/f1ec0bfe587fe950b904c4267fb20ca9-gpLarge.jpg"
    );
    cy.contains("Submit").click();
  });

  it("Negative 2 - Succesfully create gallery with one image", () => {
    cy.get('a[href="/create"]').should("be.visible").click();
    cy.get("h1").should("have.text", "Create Gallery");

    cy.get("#title").should("be.visible").type("Nova Galerija 3 - Marko");
    cy.get("#description").should("be.visible").type("Galerija Yamaha");

    cy.get('input[type="url"]').type(
      "https://media.gazetadopovo.com.br/2009/05/f1ec0bfe587fe950b904c4267fb20ca9-gpLarge.jpg"
    );
    cy.contains("Submit").click();
  });
  //izvrsava se samo jednom nakon sto se izvrte svi testovi
  after(() => {});
});
