import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
    domain="dev-gyy9agxm.us.auth0.com"
    clientId="f99AusytmTsROYsT5JX6oMnQrkOwJHYS"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
