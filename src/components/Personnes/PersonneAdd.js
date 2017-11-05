import React from "react";
import { inject, observer } from "mobx-react";
import { Card, CardText, TextField } from "material-ui";

const PersonneAdd = ({ personnesStore }) =>
  <div className="row">
    <div className="col-sm" />
    <div className="col-sm">
      <Card>
        <CardText>
          <TextField
            disabled={true}
            floatingLabelText="ID"
            value={personnesStore.newPersonne.id}
          />
          <br />
          <TextField
            floatingLabelText="Nom"
            fullWidth={true}
            value={personnesStore.newPersonne.nom}
          />
          <br />
          <TextField
            floatingLabelText="Prénom"
            fullWidth={true}
            value={personnesStore.newPersonne.prenom}
          />
          <TextField
            floatingLabelText="Description libre"
            fullWidth={true}
            multiLine={true}
            rows={2}
            value={personnesStore.newPersonne.description_libre}
          />
        </CardText>
      </Card>
    </div>
    <div className="col-sm" />
  </div>;

export default inject("personnesStore")(observer(PersonneAdd));
