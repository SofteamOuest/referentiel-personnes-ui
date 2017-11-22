import React from "react";
import { inject, observer } from "mobx-react";
import {
  blueGrey900,
  blueGrey700,
  blueGrey100
} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Route, BrowserRouter as Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import PersonneAdd from "../../components/Personnes/PersonneAdd";
import PersonneDetails from "../../components/Personnes/PersonneDetails";
import PersonnesList from "../../components/Personnes/PersonnesList";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey900,
    primary2Color: blueGrey700,
    primary3Color: blueGrey100
  }
});

// Create React Router Browser History
const history = createBrowserHistory();

const App = ({ personnesStore }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Router history={history} basename={"/referentiel-personnes-ui"}>
        <div>
          <Header />
          {personnesStore.fetchingData ? (
            <Loading />
          ) : (
            <div>
              <Route exact path="/" component={PersonnesList} />
              <Route exact path="/add" component={PersonneAdd} />
              <Route path="/details/:id" component={PersonneDetails} />
            </div>
          )}
        </div>
      </Router>
    </div>
  </MuiThemeProvider>
);

export default inject("personnesStore")(observer(App));
