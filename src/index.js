import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from 'react-redux';
import { store } from "./store/store";

export const axios = require('axios');

ReactDOM.render(
  <Provider store={ store }>
      <App />
  </Provider>,
  document.getElementById("root"));
