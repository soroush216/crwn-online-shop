import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatPage = () => <h1>Hats Page</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
