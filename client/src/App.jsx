import React, { useState, useEffect, useMemo } from 'react'
import Home from "./Pages/Home"
import FirstLoad from "./Pages/FirstLoad"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Landing from "./Pages/Landing"
import Profile from "./Pages/Profile"
import Wishlist from "./Pages/Wishlist"
import PrivateRoute from "./components/PrivateRoute";
import './CSS/style.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom";
import Loading from './components/Loading'
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'
import Shoppingcart from './Pages/Shoppingcart';

function App() {

  const history = useHistory();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const useValue = useMemo(() => ({user, setUser}), [user, setUser]);

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async () => {
    const res = await fetch("/api/user");
    const getUser = await res.json();
    setUser(getUser);
    setIsLoading(false);
    if(!getUser) history.push("/login");
  }

  return (
    <UserContext.Provider value={useValue}>
      {!isLoading ? (
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute exact path="/" component={Home} user={user} />
            <PrivateRoute path="/landing" component={Landing} user={user} />
            <PrivateRoute path="/profile" component={Profile} user={user} />
            <PrivateRoute path="/wishlist" component={Wishlist} user={user} />
            <PrivateRoute path="/products/:id" component={Product} user={user} />
            <PrivateRoute path="/checkout" component={Checkout} user={user} />
            <PrivateRoute path="/shoppingcart" component={Shoppingcart} user={user} />
          </Switch>
        </Router>
      ) : (
        <Loading />
      )}

    </UserContext.Provider>

  )
}

export default App
