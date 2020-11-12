import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OnePost = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offers/${id}`
    );
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    // Permet de n'afficher qu'une seule fois dans la condition
    fetchData();
  }, [id]);
  return isLoading ? (
    <div>En cours de chargemment</div>
  ) : (
    <>
      <div>
        <p>{data.product_name}</p>
      </div>
    </>
  );
};

export default OnePost;
