import React from "react";
// import Header from "./";
import Post from "../components/Post";

const Home = ({ data, setData }) => {
  return (
    // ca sinon afficher le code normal
    <>
      {/* ci dessous le code normal */}
      <div>
        <Post data={data} setData={setData} />
      </div>
    </>
  );
};

export default Home;
