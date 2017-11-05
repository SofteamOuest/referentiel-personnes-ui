import React from "react";
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";
import FlatButton from "material-ui/FlatButton";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";

const PersonneCard = ({ personne, personnesStore, history }) =>
  <div className="col-sm">
    <Card>
      <CardMedia
        overlay={
          <CardTitle
            title={personne.prenom + " " + personne.nom}
            subtitle={personne.description_libre}
          />
        }
      >
        <img src={personne.photo} alt="" />
      </CardMedia>
      <CardActions>
        <FlatButton
          label="Details"
          onClick={() => {
            openPersonneDetailsPage(history, personnesStore, personne);
          }}
        />
      </CardActions>
    </Card>
  </div>;

function openPersonneDetailsPage(history, personnesStore, personne) {
  personnesStore.setEdited(personne);
  history.push("/details/" + personne.id);
}

export default inject("personnesStore")(observer(withRouter(PersonneCard)));
