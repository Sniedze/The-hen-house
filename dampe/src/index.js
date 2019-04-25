import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, HashRouter } from "react-router-dom";
import App from "./components/App";
import Process from "./components/Process";
import Photos from "./components/Photos.jsx";
import Team from "./components/Team";


const Routing = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/process" component={Process} />
      <Route path="/photos" component={Photos} />
      <Route path="/team" component={Team} />
    </Switch>
  </HashRouter>
);
ReactDOM.render(<Routing />, document.getElementById("root"));
