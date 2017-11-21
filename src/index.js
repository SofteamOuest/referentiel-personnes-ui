import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./containers/App/App";
import PersonnesStore from "./stores/PersonnesStore";

// Enable MobX Strict Functionality
// mobx.useStrict(true);

const personnesStore = PersonnesStore.create();

const store = {
  personnesStore: personnesStore
};

const main = (
  <Provider {...store}>
    <App />
  </Provider>
);

ReactDOM.render(main, document.getElementById("root"));
