import React, { useState, useEffect } from "react";
import axios from "axios";
// import Header from "./";
import Post from "../components/Post";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
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
      <div className="coverHome">
        <img
          className="formeCoverHome"
          src="https://lereacteur-vinted.netlify.app/static/media/forme.42d6cec6.svg"
          alt=""
        />
      </div>
      {/* // ca sinon afficher le code normal */}

      {/* ci dessous le code normal */}
      <div>
        <Post data={data} setData={setData} />
      </div>
    </>
  );
};

export default Home;
