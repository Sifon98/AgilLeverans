import React from 'react'
import Home from "./Pages/Home"
import FirstLoad from "./Pages/FirstLoad"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Landing from "./Pages/Landing"
import Profile from "./Pages/Profile"
import Wishlist from "./Pages/Wishlist"
import ProductPage from "./Pages/ProductPage"
import './CSS/style.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/firstload" component={FirstLoad} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/landing" component={Landing} />
          <Route path="/profile" component={Profile} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/products/:id" component={ProductPage} />
        </Switch>
      </Router>
  )
}

export default App
