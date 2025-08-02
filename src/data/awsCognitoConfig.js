// src/aws-exports.js
const awsCognitoConfig = {
    Auth: {
      region: "us-east-1",                 // e.g., "us-east-1"
      userPoolId: "us-east-1_7qlLHkaAN",       // e.g., "us-east-1_XXXXXXX"
      userPoolWebClientId: "1k6q1blfb29b4sfg805rvkd77r", // e.g., "12345abcde..."
      oauth: {
        domain: "https://us-east-17qllhkaan.auth.us-east-1.amazoncognito.com",       // e.g., "my-app.auth.us-east-1.amazoncognito.com"
        scope: ["openid", "email", "profile"],
        redirectSignIn: "http://localhost:5173/",
        redirectSignOut: "http://localhost:5173/",
        responseType: "code",                  // For Authorization Code Grant
      },
    }
  };
  export default awsCognitoConfig;
  