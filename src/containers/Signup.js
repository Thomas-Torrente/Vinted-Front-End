import React, { useState } from "react";
import FormSignUp from "../components/FormSignUp";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  return (
    <>
      <div>
        <FormSignUp
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          tel={tel}
          setTel={setTel}
        />
      </div>
    </>
  );
};

export default Signup;
