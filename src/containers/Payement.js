import React from "react";
import "./App.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PayementForm from "../components/PayementForm";

const Payement = () => {
  const stripPromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  // tant que tu n'as pas fait le backend ici c'est la clé du réacteur
  return (
    <>
      <Elements stripe={stripPromise}>
        <PayementForm />
      </Elements>
    </>
  );
};

export default Payement;
