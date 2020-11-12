import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OnePost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log("id========>", id);

  const fetchData = async () => {
    const response = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      // On dit que l'on se sert de l'id qu'il y a dans l'url apres avoir cliqué sur un des produits est celui qu'on va utiliser pour voir les données
    );
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    // Permet de n'afficher qu'une seule fois dans la condition
    fetchData();
  }, []);
  return isLoading ? (
    <div>En cours de chargemment</div>
  ) : (
    <>
      <div>
        <p>{data.product_name}</p>
        <p>{data.product_price} euro</p>
        <img src={data.product_image.secure_url} alt={data.product_name} />
        {data.product_details.map((detail, index) => {
          // on fait une boucle sur le tableau product details
          const keys = Object.keys(detail);
          // Le constructeur Object crée un wrapper d'objet pour la valeur donnée. Si la valeur est null ou undefined, il créera et retournera un objet vide, sinon, il retournera un objet du Type qui correspond à la valeur donnée

          return (
            <p>
              {keys[0]} {detail[keys[0]]}
              {/*  et ducoup on affiche chaque élément de chaque tableau avec tous inclus */}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default OnePost;
