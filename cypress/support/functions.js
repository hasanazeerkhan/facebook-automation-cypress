import { account } from "../support/credentials";
import { elements } from "../support/webElements";

function login() {
  cy.visit(elements.homePage.url);
  cy.get(".fcb > a").click();
  cy.get(elements.homePage.createNewAccount).click();
  cy.get(elements.signUp.firstName).type(account.firstName);
  cy.get(elements.signUp.lastName).type(account.lastName);
  cy.get(elements.signUp.monthInDob).type(account.monthInDob);
  cy.get(elements.signUp.dayInDob).select(account.dayInDob);
  cy.get(elements.signUp.yearInDob).select(account.yearInDob);
  cy.get(elements.signUp.mobileNumber).type(account.mobileNumber);
  cy.get(elements.signUp.password).type(account.password);
  {
    var selectableGender = account.gender;
    var j = 1;
    switch (selectableGender) {
      case "Female":
        j = 1;
        break;

      case "Male":
        j = 2;
        break;
      case "Custom":
        j = -1;
        break;
    }
  }

  cy.get(
    `span[data-name="gender_wrapper"] span label input[value="${j}"]`
  ).click();
  cy.get(elements.signUp.signUp).click();
}

export { login };
