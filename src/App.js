import React, { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter as router permet de transforméer browerRouter en router car c trop long
import Cookies from "js-cookie";

import Home from "./containers/Home";
import Footer from "./components/Footer";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Header from "./components/Header";
import Payement from "./containers/Payement";
function App({ data, setData }) {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookies.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      Cookies.remove("userToken");
      setToken(null);
    }
  };

  return (
    <Router className="contenair">
      <Header token={token} setUser={setUser} />
      <Switch>
        <Route path="/offers/:id">
          {/* apres le offer on dit dans le one post que la parametre de use params c lui qui est dans le lien apres avoir cliquer sur une des cartes */}
          <Offer data={data} setData={setData} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish token={token} setUser={setUser} />
        </Route>
        <Route path="/payement">
          <Payement token={token} setUser={setUser} />
        </Route>
        <Route path="/">
          <Home data={data} setData={setData} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
