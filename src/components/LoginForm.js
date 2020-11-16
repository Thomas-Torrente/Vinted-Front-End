import React from "react";
import { useHistory } from "react-router-dom";
const LoginForm = (props, { setUser, token }) => {
  return (
    <>
      <div className="signupContenair">
        <h2>Se connecter</h2>
        <form onSubmit={props.whenSubmit} className="signupForm">
          <input
            type="email"
            placeholder="Votre adresse Email"
            value={props.email}
            onChange={(event) => {
              props.setEmail(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            value={props.password}
            onChange={(event) => {
              props.setPassword(event.target.value);
            }}
          />
          <button
            onClick={() => {
              setUser(token);
              useHistory.pushState("/");
            }}
          >
            Se connecter
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
