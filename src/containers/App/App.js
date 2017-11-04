import React from "react";
import { inject, observer } from "mobx-react";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import PersonnesList from "../../components/Personnes/PersonnesList";
import {
  blueGrey900,
  blueGrey700,
  blueGrey100
} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey900,
    primary2Color: blueGrey700,
    primary3Color: blueGrey100
  }
});

const App = ({ personnesStore }) =>
  personnesStore.fetchingData
    ? <Loading />
    : <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          {personnesStore.personnes.length
            ? <PersonnesList repos={personnesStore.personnes} />
            : null}
        </div>
      </MuiThemeProvider>;

export default inject("personnesStore")(observer(App));
