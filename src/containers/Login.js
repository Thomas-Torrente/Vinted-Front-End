import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setUser, token }) => {
  const history = useHistory();
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
      setUser(sendSignup.data.token);
      history.push("/");

      // console.log(sendSignup.data.token);
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
        />
      </div>
    </>
  );
};

export default Login;
