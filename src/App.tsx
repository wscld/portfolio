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
        <Route path="/portfolio/p/:id" children={<Product />} />
        <Route path="/portfolio/" children={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
