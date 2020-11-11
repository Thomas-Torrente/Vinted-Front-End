import React from "react";
import { Link } from "react-router-dom";

const Post = ({ offre }) => {
  return (
    <>
      return (
      <Link to={`/offer/${offre._id}`}>
        <div key={offre._id}>
          <img src={offre.product_image.secure_url} alt="" />
          <p>{offre.product_price}€</p>
          <p>{offre.product_name}</p>
        </div>
      </Link>
      );
    </>
  );
};

export default Post;
