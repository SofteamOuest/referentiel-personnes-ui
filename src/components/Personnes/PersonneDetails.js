import React from "react";
import { inject, observer } from "mobx-react";
import { Card, CardMedia, CardTitle } from "material-ui/Card";

const PersonneDetails = ({ personnesStore }) =>
  <div className="row">
    <div className="col-sm" />
    <div className="col-sm">
      <Card>
        <CardMedia
          overlay={
            <CardTitle
              title={
                personnesStore.edited.prenom + " " + personnesStore.edited.nom
              }
              subtitle={personnesStore.edited.description_libre}
            />
          }
        >
          <img src={personnesStore.edited.photo} alt="" />
        </CardMedia>
      </Card>
    </div>
    <div className="col-sm" />
  </div>;

export default inject("personnesStore")(observer(PersonneDetails));
