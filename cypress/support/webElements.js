const elements = {
    homePage: {
      url:'https://www.facebook.com/',
      title:'Facebook - log in or sign up',
      emailAddress: '#email',
      password:'#pass',
      login:'[data-testid="royal_login_button"]',
      forgotPassword:'[href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzI5MTY3NzQ4LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login&next"]',
      createNewAccount: `[data-testid="open-registration-form-button"]`,
      pageForCelebrity:'._8esh'
    },
    signUp: {
      url:'https://www.facebook.com/r.php',
      title:'Sign up for Facebook',  
      firstName: `[name="firstname"]`,
      lastName: `[name="lastname"]`,
      dayInDob: `[name="birthday_day"]`,
      monthInDob: `[name="birthday_month"]`,
      yearInDob: `[name="birthday_year"]`,
      mobileNumber: `[name="reg_email__"]`,
      password: `[data-type="password"]`,
      signUp: '[name="websubmit"]',
      alreadyHaveAnAccount: '._9bq5'
    },
  };

  export{elements};