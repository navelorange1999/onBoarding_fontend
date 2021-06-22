import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Login from "./Pages/Login";

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Login/>
      </Route>
    </Router>
  )
}
