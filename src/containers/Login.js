import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const whenSubmit = async (event) => {
    event.preventDefault();

    if (email) {
      alert("Votre adresse email ou votre mot de passe est incorrect");
    } else {
      const sendSignup = await axios.post(
        "https://vinted-api-thomas.herokuapp.com/user/login",
        {
          email: sendSignup.data.email,
          password: sendSignup.data.password,
        }
      );
      console.log(sendSignup.data.token);
    }
  };

  return (
    <>
      <div>
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPasword={setPasword}
          whenSubmit={whenSubmit}
        />
      </div>
    </>
  );
};

export default Login;
