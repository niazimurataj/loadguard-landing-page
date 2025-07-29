import React, { useState } from "react";

const rootStyles = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#F9FAFB",
  color: "#111827",
};

const formStyles = {
  background: "#fff",
  padding: "2rem 2.5rem",
  borderRadius: "12px",
  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
  minWidth: "320px",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
};

const inputStyles = {
  padding: "0.75rem 1rem",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "1rem",
  background: "#F3F4F6",
  color: "#111827",
};

const buttonStyles = {
  padding: "0.75rem 1rem",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background 0.2s",
};

const errorStyles = {
  color: "#dc2626",
  fontSize: "0.95rem",
  marginTop: "-0.75rem",
  marginBottom: "0.5rem",
  textAlign: "center",
};


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
    <div style={rootStyles}>
      <form style={formStyles} onSubmit={handleSubmit} autoComplete="off">
        <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Login</h2>
        {error && <div style={errorStyles}>{error}</div>}
        <input
          style={inputStyles}
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          autoFocus
        />
        <input
          style={inputStyles}
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          style={{
            ...buttonStyles,
            background: submitting ? "#93c5fd" : buttonStyles.background,
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