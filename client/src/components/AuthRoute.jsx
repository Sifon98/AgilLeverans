import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isMobile } from "../../../server/utils/isMobile";

function AuthRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isMobile() || user ? (
          <Redirect to={{ pathname: "/landing", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default AuthRoute;