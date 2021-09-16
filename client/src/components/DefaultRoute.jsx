import React from "react";
import { Redirect, Route } from "react-router-dom";

function DefaultRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Redirect to={{ pathname: "/landing", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default DefaultRoute; 