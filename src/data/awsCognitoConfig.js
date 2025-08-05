const awsCognitoConfig = {
  Auth: {
    Cognito: {
      region: "us-east-1",
      userPoolId: "us-east-1_7qlLHkaAN",
      userPoolClientId: "1k6q1blfb29b4sfg805rvkd77r",  // NOTE: update key name here!
      oauth: {
        domain: "https://us-east-17qllhkaan.auth.us-east-1.amazoncognito.com",
        scope: ["openid", "email", "profile"],
        redirectSignIn: "http://localhost:5173/",
        redirectSignOut: "http://localhost:5173/",
        responseType: "code",
      },
    }
  }
};
export default awsCognitoConfig;
