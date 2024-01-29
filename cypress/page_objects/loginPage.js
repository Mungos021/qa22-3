class LoginPage {

    get emailInputField() {
        return cy.get("#email");
    }
    get passwordInputField() {
        return cy.get("#password");
    }
    get submitBtn() {
        return cy.get("button");
    }
    
}

export const loginPage = new LoginPage();

cy.get("#first-name")
cy.get("#last-name")
cy.get("#email")
cy.get("#password")
cy.get("#password-confirmation")
cy.get(".form-check-input")