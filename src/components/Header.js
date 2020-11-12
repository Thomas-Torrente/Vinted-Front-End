import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png"
          alt=""
        />

        <input type="text" placeholder="Recherche des articles " />
        <button>S'inscrire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </>
  );
};

export default Header;
