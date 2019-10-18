import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import withAthCheck from './PrivateRoute/PrivateRoute'
import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Route path='/colors' render={props => withAthCheck(BubblePage, props)} />
      </div>
    </Router>
  );
}

export default App;
