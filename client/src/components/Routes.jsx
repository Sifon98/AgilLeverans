import React from 'react'
import DefaultRoute from './DefaultRoute'
import PrivateRoute from './PrivateRoute'
import AuthRoute from './AuthRoute'
import { Switch } from 'react-router-dom';

// Pages
import FirstLoad from '../Pages/FirstLoad'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import Landing from '../Pages/Landing'
import Profile from '../Pages/Profile'
import Wishlist from '../Pages/Wishlist'
import Product from '../Pages/Product'
import Checkout from '../Pages/Checkout'
import Shoppingcart from '../Pages/Shoppingcart'
import Confirmation from '../Pages/Confirmation'


function Routes({location, user}) {
  return (
    <Switch location={location || null} key={location && location.pathname || null}>
      <AuthRoute exact path="/" component={FirstLoad} user={user} />
      <AuthRoute path="/login" component={Login} user={user} />
      <AuthRoute path="/register" component={Register} user={user} />
      <DefaultRoute path="/home" component={Home} user={user} />
      <DefaultRoute path="/landing" component={Landing} user={user} />
      <DefaultRoute path="/items/:id" component={Product} user={user} />
      <PrivateRoute path="/profile" component={Profile} user={user} />
      <PrivateRoute path="/wishlist" component={Wishlist} user={user} />
      <PrivateRoute path="/checkout" component={Checkout} user={user} />
      <PrivateRoute path="/cart" component={Shoppingcart} user={user} />
      <PrivateRoute path="/confirmation" component={Confirmation} user={user} />
    </Switch>
  );
}

export default Routes
