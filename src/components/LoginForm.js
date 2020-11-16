import React from "react";

const LoginForm = (props) => {
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
          <input className="connectBtn" type="submit" value={"Se connecter"} />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
