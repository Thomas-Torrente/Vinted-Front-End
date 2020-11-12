import React from "react";
import { Link } from "react-router-dom";

const Post = ({ data }) => {
  return (
    <>
      <div className="contenair-card">
        {data.offers.map((offre, index) => {
          // console.log(offre._id);

          return (
            <Link to={`/offer/${offre._id}`}>
              <div key={offre._id}>
                <div className="card">
                  <img src={offre.product_image.secure_url} alt="" />
                  <span className="priceCards">{offre.product_price} €</span>
                  <span className="nameProduct">{offre.product_name}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Post;
