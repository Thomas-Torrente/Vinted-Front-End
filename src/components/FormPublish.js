import React from "react";

const FormPublish = (props) => {
  return (
    <>
      <div className="contenair-publish"></div>
      <h2>Vends tes articles</h2>
      <form onSubmit={props.whenSubmit}>
        <input
          type="file"
          onChange={(event) => {
            props.setFile(event.target.files);
          }}
        />

        <input
          type="text"
          value={props.title}
          onChange={(event) => {
            props.setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          value={props.description}
          onChange={(event) => {
            props.setDescription(event.target.value);
          }}
        />
        <input
          type="text"
          value={props.brand}
          onChange={(event) => {
            props.setBrand(event.target.value);
          }}
        />
        <input
          type="text"
          value={props.size}
          onChange={(event) => {
            props.setSize(event.target.value);
          }}
        />
        <input
          type="text"
          value={props.color}
          onChange={(event) => {
            props.setColor(event.target.value);
          }}
        />
        <input
          type="text"
          value={props.condition}
          onChange={(event) => {
            props.setCondition(event.target.value);
          }}
        />
        <input
          type="text"
          value={props.city}
          onChange={(event) => {
            props.setCity(event.target.value);
          }}
        />
        <input
          type="text"
          value={props.price}
          onChange={(event) => {
            props.setPrice(event.target.value);
          }}
        />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default FormPublish;
