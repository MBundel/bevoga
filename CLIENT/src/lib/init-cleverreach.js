import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="https://rest.cleverreach.com/oauth/authorize.php?client_id=as878nghXj&grant=basic&response_type=code&redirect_uri=https://www.cleverreach.com"
    clientId="8SsnqIeuBM5hm0JFtc4AUr5C9Siywh6D"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);