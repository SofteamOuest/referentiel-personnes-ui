import React from "react";
import { inject, observer } from "mobx-react";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import PersonnesList from "../../components/Personnes/PersonnesList";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const App = ({ personnesStore }) =>
  personnesStore.fetchingData
    ? <Loading />
    : <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Header />
          {personnesStore.personnes.length
            ? <PersonnesList repos={personnesStore.personnes} />
            : null}
        </div>
      </MuiThemeProvider>;

export default inject("personnesStore")(observer(App));
