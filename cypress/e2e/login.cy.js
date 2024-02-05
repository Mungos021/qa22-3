/// <reference types="Cypress" />

const { loginPage } = require("../page_objects/loginPage");

const email = "markoqa13@gmail.com";
const pass = "Marko123";
let userId;
let galleryId = 211

describe("Login with cy.intercept", () => {
  it("Login with cy.intercept", () => {
    cy.intercept(
      "POST",
      "https://gallery-api.vivifyideas.com/api/auth/login"
    ).as("successfullLogin");

    cy.visit("login");
    loginPage.emailInputField.type(email);
    loginPage.passwordInputField.type(pass);
    loginPage.submitBtn.click();

    cy.wait("@successfullLogin").then((intercept) => {
      const accessToken = intercept.response.body.access_token;
      galleryId = intercept.response.body.id;
      expect(accessToken).to.be.a("string");

      window.localStorage.setItem("token", accessToken);
      cy.log(intercept.response.body.user_id);
    });
  });

  it.only("second test", () => {
    cy.visit(`galleries/${galleryId}`);
    // cy.log(userId)
  });
});
