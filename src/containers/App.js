import React from "react";
import { inject, observer } from "mobx-react";
import Header from "../components/header/Header";
import Loading from "../components/loading/Loading";
import { MuiThemeProvider } from "material-ui";

const App = ({ personnesStore }) =>
  personnesStore.fetchingData
    ? <Loading />
    : <MuiThemeProvider>
        <Header />
        {personnesStore.personnes.length
          ? <div repos={personnesStore.personnes} />
          : null}
      </MuiThemeProvider>;

export default inject("personnesStore")(observer(App));
