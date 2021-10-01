import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isMobile } from "../utils/isMobile";

function DefaultRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isMobile() && !user ? (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default DefaultRoute;