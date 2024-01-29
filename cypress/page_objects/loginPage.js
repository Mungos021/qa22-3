class LoginPage {
  get emailInputField() {
    return cy.get("#email");
  }
  get passwordInputField() {
    return cy.get("#password");
  }
  get submitBtn() {
    return cy.get("button").contains('Submit');
  }

  loginUser(email, pass) {
    this.emailInputField.type(email);
    this.passwordInputField.type(pass);
    this.submitBtn.click();
  }
}

export const loginPage = new LoginPage();