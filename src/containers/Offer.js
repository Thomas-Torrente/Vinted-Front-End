import React from "react";
import OnePost from "../components/OnePost";

const Offer = ({ data, token, setUser }) => {
  return (
    <>
      <OnePost data={data} token={token} setUser={setUser} />
    </>
  );
};

export default Offer;
