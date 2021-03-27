import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Menu from "../components/Menu";
import User from "../components/User";

const App = () => {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={"/users"} component={User} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
