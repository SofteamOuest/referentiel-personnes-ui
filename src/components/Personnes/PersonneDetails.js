import React from "react";
import { inject, observer } from "mobx-react";
import { Card, CardMedia, CardTitle } from "material-ui/Card";
import { CardText, DatePicker, TextField } from "material-ui";

const PersonneDetails = ({ personnesStore }) => (
  <div className="row">
    <div className="col-xs-3 col-sm-2 col-md-2" />
    <div className="col-xs-6 col-sm-4 col-md-4">
      <Card>
        <CardText>
          <TextField
            value={personnesStore.edited.nom}
            floatingLabelText="Nom"
            fullWidth={true}
          />
          <br />
          <TextField
            value={personnesStore.edited.prenom}
            floatingLabelText="Prénom"
            fullWidth={true}
          />
          <br />
          <br />
          <DatePicker
            value={personnesStore.edited.date_naissance}
            hintText="Date de naissance"
            fullWidth={true}
          />
          <TextField
            value={personnesStore.edited.mail_pro}
            floatingLabelText="Mail Pro"
            fullWidth={true}
          />
          <br />
          <TextField
            ref={personnesStore.edited.mail_perso}
            floatingLabelText="Mail Perso"
            fullWidth={true}
          />
          <br />
          <TextField
            value={personnesStore.edited.tel_pro}
            floatingLabelText="Tel Pro"
            fullWidth={true}
          />
          <br />
          <TextField
            value={personnesStore.edited.tel_perso}
            floatingLabelText="Tel Perso"
            fullWidth={true}
          />
          <br />
          <TextField
            value={personnesStore.edited.poste}
            floatingLabelText="Poste"
            fullWidth={true}
          />
          <br />
          <TextField
            value={personnesStore.edited.description_libre}
            floatingLabelText="Description libre"
            fullWidth={true}
            multiLine={true}
            rows={2}
          />
        </CardText>
      </Card>
    </div>
    <div className="col-sm-4">
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
    <div className="col-xs-3 col-sm-2 col-md-2" />
  </div>
);

export default inject("personnesStore")(observer(PersonneDetails));
