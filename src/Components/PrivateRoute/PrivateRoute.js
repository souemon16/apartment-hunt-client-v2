import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { usercontext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [userinfo, setUserinfo] = useContext(usercontext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userinfo.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
