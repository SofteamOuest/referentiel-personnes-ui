import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./index.css";
import App from "./containers/App/App";
import PersonnesStore from "./stores/PersonnesStore";
import registerServiceWorker from "./registerServiceWorker";

// Enable MobX Strict Functionality
// mobx.useStrict(true);

// Create React Router Browser History
const history = createBrowserHistory();

const personnesStore = PersonnesStore.create();
personnesStore.fetchPersonnes();

const store = {
  personnesStore: personnesStore
};

const router = (
  <Provider {...store}>
    <Router history={history}>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));

registerServiceWorker();
