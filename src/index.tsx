import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";

import App from "./App";
import store, { configureStore } from "./modules/store";
import customHistory from "./history";

const historyStore = configureStore(history);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={historyStore}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
