import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header-contenair">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png"
            alt=""
          />
        </Link>

        <input
          type="text"
          placeholder="Recherche des articles "
          className="search-input"
        />
        <Link to="/signup">
          <button className="header-button button-login-signup button-signup">
            S'inscrire
          </button>
        </Link>

        <Link to="login">
          <button className="header-button button-login-signup">
            Se connecter
          </button>
        </Link>
        <button className="header-button button-sold">
          Vends tes articles
        </button>
      </div>
    </>
  );
};

export default Header;
