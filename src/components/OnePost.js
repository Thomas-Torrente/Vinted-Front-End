import React from "react";

const OnePost = ({ data }) => {
  return (
    <>
      {data.offers.map((offre, index) => {
        return (
          <>
            <div>
              <img src={offre.product_image.secure_url} alt="" />
            </div>

            {offre.product_details.map()}
          </>
        );
      })}
    </>
  );
};

export default OnePost;
