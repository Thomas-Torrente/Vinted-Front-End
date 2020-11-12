import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter as router permet de transforméer browerRouter en router car c trop long
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
function App({ data, setData }) {
  return (
    <Router className="contenair">
      <Header />
      <Switch>
        <Route path="/offer/:id">
          {/* apres le offer on dit dans le one post que la parametre de use params c lui qui est dans le lien apres avoir cliquer sur une des cartes */}
          <Offer data={data} setData={setData} />
        </Route>
        <Route path="/">
          <Home data={data} setData={setData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
