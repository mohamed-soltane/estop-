import React from 'react';
import { Link} from "react-router-dom";
import CartIcon from "../Components/CartIcon"


export default function Navbar(){
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand text-danger" href="#">eStop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
        <CartIcon />
      </nav>
      </div>
    )
}