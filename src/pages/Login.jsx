import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import styles from './Login.module.css';




// Add AWS authentication here
/*
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'YOUR_USER_POOL_ID',
      userPoolClientId: 'YOUR_USER_POOL_CLIENT_ID',
      loginWith: { // Optional
        oauth: {
          domain: 'YOUR_COGNITO_DOMAIN',
          scopes: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
          redirectSignIn: ['http://localhost:3000/'],
          redirectSignOut: ['http://localhost:3000/login/'],
          responseType: 'code'
        }
      }
    }
  }
});
*/
// TODO: hook this up to AWS Cognito
// TODO: add log in with Google 


// NOTE: To actually use AWS Cognito, you need to install and configure Amplify or AWS SDK.
// Here is a placeholder for the authentication logic. 
// You would replace the handleSubmit logic in the component below with real Cognito calls.

// Example (pseudo-code, not active):
// import { Auth } from 'aws-amplify';
// async function signIn(username, password) {
//   try {
//     await Auth.signIn(username, password);
//     // handle success (redirect, set auth state, etc.)
//   } catch (error) {
//     // handle error
//   }
// }


export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simple validation
    if (!form.username || !form.password) {
      setError("Please enter both username and password.");
      setSubmitting(false);
      return;
    }
    // Simulate login (replace with real logic)
    setTimeout(() => {
      if (form.username === "admin" && form.password === "password") {
        setError("");
        alert("Login successful!");
        // Redirect or set auth state here
      } else {
        setError("Invalid username or password.");
      }
      setSubmitting(false);
    }, 800);
  };

  return (
    <div style={styles.rootStyles}>
      <form style={styles.formStyles} onSubmit={handleSubmit} autoComplete="off">
        <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Login</h2>
        {error && <div style={styles.errorStyles}>{error}</div>}
        <input
          style={styles.inputStyles}
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          autoFocus
        />
        <input
          style={styles.inputStyles}
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          style={{
            ...styles.buttonStyles,
            background: submitting ? "#93c5fd" : styles.buttonStyles.background,
            cursor: submitting ? "not-allowed" : "pointer",
          }}
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}