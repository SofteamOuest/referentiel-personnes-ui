import React from "react";
import { observer, inject } from "mobx-react";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const PersonneCard = inject("personnesStore")(
  observer(({ personne, personnesStore }) =>
    <div class="col-sm">
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
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    </div>
  )
);

export default PersonneCard;
