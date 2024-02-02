/// <reference types="Cypress" />

describe("Create Gllery", () => {
  beforeEach(() => {

    //funkciju login-a preko BE, smo izmestili u command.js file kao custom komandu
    // cy.request({
    //   url: "https://gallery-api.vivifyideas.com/api/auth/login",
    //   method: "POST",
    //   body: {
    //     email: "markoqa13@gmail.com",
    //     password: "Marko123",
    //   },
    // })
    //   .its("body")
    //   .then((resp) => {
    //     let respToken = resp.access_token;
    //     let tokenType = resp.token_type;
    //     expect(respToken).to.be.a("string");
    //     expect(tokenType).eq("bearer");

    //     // cuvanje vrednosti u localStorage-u
    //     window.localStorage.setItem("token", respToken);
    //   });
      cy.loginViaApi();
      cy.visit('')
  });

  it("Succesfully create gallery with one image", () => {
    cy.get('a[href="/create"]').should("be.visible").click();
    cy.get("h1").should("have.text", "Create Gallery");

    cy.get("#title").should("be.visible").type("Nova Galerija 1 - Marko");
    cy.get("#description").should("be.visible").type("Galerija Yamaha");

    cy.get('input[type="url"]').type(
      "https://media.gazetadopovo.com.br/2009/05/f1ec0bfe587fe950b904c4267fb20ca9-gpLarge.jpg"
    );
    cy.contains("Submit").click();
  });

  it("Succesfully create gallery with one image - 2", () => {
    cy.get('a[href="/create"]').should("be.visible").click();
    cy.get("h1").should("have.text", "Create Gallery");

    cy.get("#title").should("be.visible").type("Nova Galerija 2 - Marko");
    cy.get("#description").should("be.visible").type("Galerija Yamaha");

    cy.get('input[type="url"]').type(
      "https://media.gazetadopovo.com.br/2009/05/f1ec0bfe587fe950b904c4267fb20ca9-gpLarge.jpg"
    );
    cy.contains("Submit").click();
  });
});
