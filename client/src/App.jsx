import React, { useState, useEffect, useMemo } from 'react'
import Home from "./Pages/Home"
import FirstLoad from "./Pages/FirstLoad"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Landing from "./Pages/Landing"
import Profile from "./Pages/Profile"
import Wishlist from "./Pages/Wishlist"
import Cart from './Pages/Cart'
import PrivateRoute from "./components/PrivateRoute";
import DefaultRoute from "./components/DefaultRoute";
import './CSS/style.min.css'
import {
  Switch,
  Route
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { NavContext } from "./context/NavContext";
import { useHistory, useLocation } from "react-router-dom";
import Loading from './components/Loading'
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Shoppingcart from './Pages/Shoppingcart';

function App() {

  const [nav, setNav] = useState({path: "/", direction: 0, state: null});
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(false);

  const navValue = useMemo(() => ({ nav, setNav }), [nav, setNav]);
  const useValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    setInitialLoad(true);
    getUser();
  }, [])

  const getUser = async () => {
    const res = await fetch("/api/user");
    const getUser = await res.json();
    setUser(getUser);
    setIsLoading(false);
  }

  // useEffect(() => {
  //   if(user) {
  //     history.location.key = "LOL" // Change key to invoke animation
  //   } 
  // },[user])

  useEffect(() => {
    if(!initialLoad) return;
    history.push({
      pathname: nav.path,
      ...(nav.state && {state: nav.state})
    });
  }, [nav])

  return (
    <NavContext.Provider value={navValue}>
      <UserContext.Provider value={useValue}>
        {!isLoading ? (
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  timeout={400}
                  classNames={nav.direction ? "forward" : "backward"}
                  onEnter={() => {
                    document.documentElement.style.setProperty(
                      "--overflow",
                      "hidden"
                    );
                  }}
                  onExited={() => {
                    window.scrollTo(0,0);
                    document.documentElement.style.setProperty(
                      "--overflow",
                      "unset"
                    );
                  }}
                >
                  <Switch location={location} key={location.pathname}>
                    <DefaultRoute exact path="/" component={FirstLoad} user={user} />
                    <DefaultRoute path="/login" component={Login} user={user} />
                    <DefaultRoute path="/register" component={Register} user={user} />
                    <PrivateRoute path="/home" component={Home} user={user} />
                    <PrivateRoute path="/landing" component={Landing} user={user} />
                    <PrivateRoute path="/profile" component={Profile} user={user} />
                    <PrivateRoute path="/wishlist" component={Wishlist} user={user} />
                    <PrivateRoute path="/products/:id" component={Product} user={user} />
                    <PrivateRoute path="/checkout" component={Checkout} user={user} />
                    <PrivateRoute path="/cart" component={Cart} user={user} />
                  </Switch>
                 </CSSTransition>
               </TransitionGroup>
              )}
            />
        ) : (
          <Loading />
        )}
      </UserContext.Provider>
    </NavContext.Provider>
  )
}

export default App
