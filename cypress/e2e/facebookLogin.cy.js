const account = {
    firstName: "MyFirst",
    lastName: "MyLast",
    mobileNumber: "+910000000000",
    password: "MySecretPassword",
    dayInDob: "10",
    monthInDob: "Dec",
    yearInDob: "1999",
    gender: "Male",
  };
  const facebook = {
    landingPage: {
      createNewAccount: `[data-testid="open-registration-form-button"]`,
    },
    signUp: {
      firstName: `input[name="firstname"]`,
      lastName: `input[name="lastname"]`,
      mobileNumber: `input[name="reg_email__"]`,
      password: `input[data-type="password"]`,
      dayInDob: `select[name="birthday_day"]`,
      monthInDob: `select[name="birthday_month"]`,
      yearInDob: `select[name="birthday_year"]`,
      signUp: 'button[type="submit"][name="websubmit"]',
    },
  };
  
  describe("Facebook", function () {
    it("Login functionality", function () {
      cy.visit("https://www.facebook.com/");
      cy.get(".fcb > a").click();
      cy.get(facebook.landingPage.createNewAccount).click();
      cy.get(facebook.signUp.firstName).type(account.firstName);
      cy.get(facebook.signUp.lastName).type(account.lastName);
      cy.get(facebook.signUp.mobileNumber).type(account.mobileNumber);
      cy.get(facebook.signUp.monthInDob).type(account.password);
      cy.get(facebook.signUp.dayInDob).select(account.dayInDob);
      cy.get(facebook.signUp.monthInDob).select(account.monthInDob);
      cy.get(facebook.signUp.yearInDob).select(account.yearInDob);
  
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
      cy.get(facebook.signUp.signUp).click();
    });
  });
  