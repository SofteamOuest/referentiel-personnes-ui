import React from "react";
import { inject, observer } from "mobx-react";
import {
  Card,
  CardActions,
  CardText,
  FlatButton,
  TextField
} from "material-ui";
import Personne from "../../models/Personne";

class PersonneAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: Personne.create()
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm">
          <Card>
            <CardText>
              <br />
              <TextField
                floatingLabelText="Nom"
                fullWidth={true}
                ref={this.state.personne.nom}
              />
              <br />
              <TextField
                floatingLabelText="Prénom"
                fullWidth={true}
                ref={this.state.personne.prenom}
              />
              <TextField
                floatingLabelText="Description libre"
                fullWidth={true}
                multiLine={true}
                rows={2}
                ref={this.state.personne.description_libre}
              />
            </CardText>
            <CardActions>
              <FlatButton label="Add" />
            </CardActions>
          </Card>
        </div>
        <div className="col-sm" />
      </div>
    );
  }
}

export default inject("personnesStore")(observer(PersonneAdd));
