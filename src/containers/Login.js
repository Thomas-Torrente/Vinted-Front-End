import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";

const Login = ({ setUser, token }) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const whenSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      alert("Votre adresse email ou votre mot de passe est incorrect");
    } else {
      const sendSignup = await axios.post(
        "https://vinted-api-thomas.herokuapp.com/user/login",
        {
          email: email,
          password: password,
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
          setPassword={setPasword}
          whenSubmit={whenSubmit}
          setUser={setUser}
          token={token}
        />
      </div>
    </>
  );
};

export default Login;
