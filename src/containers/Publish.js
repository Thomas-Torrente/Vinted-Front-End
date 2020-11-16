import React, { useState } from "react";
import FormPublish from "../components/FormPublish";
import axios from "axios";
const Publish = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState();

  const whenSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("files", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("price", price);

    if (
      !title &&
      !file &&
      !description &&
      !brand &&
      !size &&
      !color &&
      !condition &&
      !city &&
      !price
    ) {
      alert("Merci de remplirs correctement TOUS LES CHAMPS");
    } else {
      const sendPublish = await axios.post(
        "https://vinted-api-thomas.herokuapp.com/offer/publish",
        formData
      );
    }
  };
  return (
    <>
      <div>
        <FormPublish
          file={file}
          setFile={setFile}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          brand={brand}
          setBrand={setBrand}
          size={size}
          setSize={setSize}
          color={color}
          setColor={setColor}
          condition={condition}
          setCondition={setCondition}
          city={city}
          setCity={setCity}
          price={price}
          setPrice={setPrice}
          whenSubmit={whenSubmit}
        />
      </div>
    </>
  );
};

export default Publish;
