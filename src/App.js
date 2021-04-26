import React from "react";
import "./style.css";
import Signup from "./Signup";
import Signin from "./Signin";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/in/login" component={Signin} />
        <Route exact path="/in" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}
