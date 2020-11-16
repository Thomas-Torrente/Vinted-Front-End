import React from "react";
import { Link } from "react-router-dom";
const Header = ({ token, setUser }) => {
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
        {token ? (
          // si le token existe alors afficher :
          <>
            <Link to="publish">
              <button className="header-button button-sold">
                Vends tes articles
              </button>
            </Link>
            <button
              className="header-button button-login-signup"
              onClick={() => {
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
          </>
        ) : (
          <>
            {/* // Sinon afficher ca */}
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
          </>
        )}
      </div>
    </>
  );
};

export default Header;
