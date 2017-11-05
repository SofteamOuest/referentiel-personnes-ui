import React from "react";
import { observer, inject } from "mobx-react";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import {withRouter} from "react-router-dom";

const PersonneCard = inject("personnesStore")(
  observer(({ personne, personnesStore, history }) =>
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
          <FlatButton label="Details" onClick={() => history.push("/details/" + personne.id)} />
        </CardActions>
      </Card>
    </div>
  )
);

export default withRouter(PersonneCard);
