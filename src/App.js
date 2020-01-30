import React from 'react';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./pages/Navbar";
import Product from "./pages/Product";
import {BrowserRouter as Router,Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:id" component={Product} />
      <Route path="/cart" component={Cart} />
    
    </div>
    </Router>
  );
}

export default App;
