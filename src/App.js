import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Route from "./lib/progress-route";
import Navbar from "./components/navbar";
import Cats from "./screens/cats";
import CreateCat from "./screens/create-cat";
import EditCat from "./screens/edit-cat";
import MapCats from "./screens/map-cats";
import BackgroundImage from "./components/background-image";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/cats" component={Cats} />
        <Route exact path="/cats/:id" component={EditCat} />
        <Route exact path="/create-cat" component={CreateCat} />
        <Route exact path="/map-cats" component={MapCats} />
      </Switch>
      <BackgroundImage />
    </Router>
  );
}

export default App;
