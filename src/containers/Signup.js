import React, { useState } from "react";
import FormSignUp from "../components/FormSignUp";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUsername] = useState("eudbejejbn");
  const [email, setEmail] = useState("thomas.djjdjejkekj@gmail.clm");
  const [password, setPassword] = useState("kekekekekeke");
  const [tel, setTel] = useState("88888888888");
  const [token, setToken] = useState("");

  const whenSubmit = async (event) => {
    console.log("ejekjekj");
    event.preventDefault();

    if (!username || !tel || !password) {
      alert("Merci de remplirs tous les champs correctement");
    } else {
      console.log("else");
      const sendSignup = await axios.post(
        "https://vinted-api-thomas.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          phone: tel,
          password: password,
        }
      );
      Cookies.set("userToken", sendSignup.data.token, 7);
      console.log(sendSignup.data.token);
      // Cookies.set, créer le cookie, userToken est son nom et token est sa valeur
    }
  };

  return (
    <>
      <div>
        <FormSignUp
          whenSubmit={whenSubmit}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          tel={tel}
          setTel={setTel}
          token={token}
          setToken={setToken}
        />
      </div>
    </>
  );
};

export default Signup;
