import React from 'react';
import './App.css';
import Home from './Containers/Home';
import Product from './Containers/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/p/:id" children={<Product />} />
        <Route path="/" children={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
