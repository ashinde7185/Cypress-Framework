class LoginPage {
  username = '#username';
  password = '#password';
  loginBtn = '#login';

  enterUsername(user) {
    cy.get(this.username).type(user);
  }

  enterPassword(pass) {
    cy.get(this.password).type(pass);
  }

  clickLogin() {
    cy.get(this.loginBtn).click();
  }
}

export default LoginPage;