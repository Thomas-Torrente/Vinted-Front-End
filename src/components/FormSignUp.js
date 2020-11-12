import React from "react";

const FormSignUp = (props) => {
  const whenSubmit = (event) => {
    event.preventDefault();

    if (!props.username || !props.tel || !props.password) {
      alert("Merci de remplirs tous les champs correctement");
    }
  };
  return (
    <>
      <div>
        <form onSubmit={whenSubmit}>
          <input
            type="email"
            placeholder="Votre adresse Email"
            value={props.email}
            onChange={(event) => {
              props.setEmail(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Username"
            value={props.username}
            onChange={(event) => {
              props.setUsername(event.target.value);
            }}
          />
          <input
            type="phone"
            placeholder="Votre numéro de téléphone"
            value={props.tel}
            onChange={(event) => {
              props.setTel(event.target.value);
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
          <button type="submit"> S'inscrire</button>
        </form>
      </div>
    </>
  );
};

export default FormSignUp;
