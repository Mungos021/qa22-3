/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";

let randomEmail
let firstName = faker.person.firstName()
let lastName

describe("Register using Faker", () => {
  it("Register with faker", () => {
    randomEmail = faker.internet.email();
    lastName = faker.person.lastName()
    cy.visit("/register");
    
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type(randomEmail);
    cy.get("#password").type("Marko123");
    cy.get("#password-confirmation").type("Marko123");
    cy.get(".form-check-input").check();
    cy.get("button").click();
});

it("Register with faker", () => {
    randomEmail = faker.internet.email();
    lastName = faker.person.lastName();
    firstName = faker.person.firstName();
    cy.visit("/register");

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type(randomEmail);
    cy.get("#password").type("Marko123");
    cy.get("#password-confirmation").type("Marko123");
    cy.get(".form-check-input").check();
    cy.get("button").click();

    cy.url().should("not.contain", "register");
  });
});
