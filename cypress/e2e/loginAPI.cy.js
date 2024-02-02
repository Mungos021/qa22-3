/// <reference types="Cypress" />

describe("Login via API", () => {
  it("Successfull login via API", () => {

    cy.request({
      url: "https://gallery-api.vivifyideas.com/api/auth/login",
      method: "POST",
      body: {
        email: "markoqa13@gmail.com",
        password: "Marko123",
      },
    }).its("body").then((resp) => {
        //koristimo log da bi se uverili da smo namapirali tacne podatke koji su nam potrebni
        // cy.log(resp.access_token);
        let respToken = resp.access_token;
        let tokenType = resp.token_type;
        expect(respToken).to.be.a("string");
        expect(tokenType).eq("bearer");
      });
  });
});
