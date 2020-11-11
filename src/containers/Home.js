import React from "react";
// import Header from "./";
import Post from "../components/Post";

const Home = ({ data, setData }) => {
  {
    data.offers.map((offre, index) => {
      return <Post offre={offre} />;
    });
  }
};

export default Home;
