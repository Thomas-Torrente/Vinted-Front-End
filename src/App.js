import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter as router permet de transforméer browerRouter en router car c trop long
import Home from "./containers/Home";
import Offer from "./containers/Offer";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    // Permet de n'afficher qu'une seule fois dans la condition
    fetchData();
  }, []);
  return isLoading ? (
    <div>En cours de chargemment</div>
  ) : (
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
