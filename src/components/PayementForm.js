import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const PayementForm = () => {
  const [succed, setSucced] = useState(false);
  // Succed est en false de base car on a pas encore payer
  const stripe = useStripe();
  // on dit juste que stripe est = a useStripe donc on peut utiliser dans les prochaines lignes justes stripe
  const elements = useElements();
  // on dit juste que elements est = a useElements donc on peut utiliser dans les prochaines lignes justes elements
  const whenSubmit = async (event) => {
    event.preventDefault();
    try {
      const CardElement = elements.getElements(CardElement);
      // Ici on demande à stripe de récupéré les donner bancaire rentrer par le user

      const stripeResponse = await stripe.createToken(CardElement, {
        name: "'{id de l'acheteur}'",
        // Demander la création d'un token via l'API Stripe
      });

      const stripeToken = stripeResponse.token.id;
      //  on dit que stripToken est le token envoyer par stripe
      const sendResponse = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        // On envoie une requete aux back
        {
          stripeToken: stripeToken,
        }
      );
      if (response.data.status === "ggMan") {
        // Si le payement a été acepter
        setSucced(true);
        // passer setSecced en true
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {succed ? (
        <p>Payement validé man</p>
      ) : (
        // si true alors afficher ca donc si le form payement a été accepter
        <form onSubmit={whenSubmit}>
          <CardElement />
          {/* DOnné par stripe ca créer le form pour rentrer les numéro de carte ccv expiration */}
          <button type="submit">Valider le Payement</button>
        </form>
        // DAns tous les autres cas afficher le form pour payer
      )}
    </div>
  );
};

export default PayementForm;
