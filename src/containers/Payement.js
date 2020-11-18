import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PayementForm from "../components/PayementForm";

const stripPromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
// tant que tu n'as pas fait le backend ici c'est la clé du réacteur
const Payement = () => {
  const location = useLocation();
  console.log(location);

  const { title, price } = location.state;

  return (
    <>
      <h3>Récapitulatif de Commande :</h3>
      Article : {title}
      <br />
      Prix de votre article : {price}€
      <Elements stripe={stripPromise}>
        <PayementForm title={title} price={price} />
      </Elements>
    </>
  );
};

export default Payement;
