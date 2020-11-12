import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter as router permet de transforméer browerRouter en router car c trop long
import Home from "./containers/Home";
import Offer from "./containers/Offer";
function App({ data, setData }) {
  return (
    <Router>
      <Switch>
        <Route path="/offer">
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
