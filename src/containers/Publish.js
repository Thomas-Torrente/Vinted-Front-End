import React, { useState } from "react";
import FormPublish from "../components/FormPublish";
const Publish = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
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
          set
          price={setPrice}
        />
      </div>
    </>
  );
};

export default Publish;
