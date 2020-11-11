import React from "react";

const Post = ({ data }) => {
  return (
    <>
      {data.offers.map((offre, i) => {
        return (
          <>
            <div>
              <img src={offre.product_pictures.secure_url} alt="" />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Post;
