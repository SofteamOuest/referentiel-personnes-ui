import React from "react";
import { inject, observer } from "mobx-react";
import {
  Card,
  CardActions,
  CardText,
  CardTitle,
  DatePicker,
  FlatButton,
  TextField
} from "material-ui";
import Personne from "../../models/Personne";
import { random } from "lodash";

class PersonneAdd extends React.Component {
  state = {
    personne: Personne.create({ id: random(-1000, 0) })
  };

  render() {
    let { personne } = this.state;
    return (
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm">
          <Card>
            <CardTitle title="Créer une nouvelle personne" />
            <CardText>
              <TextField
                ref={this.state.nom}
                floatingLabelText="Nom"
                fullWidth={true}
                onChange={this.handleChange("nom")}
              />
              <br />
              <TextField
                ref={this.state.prenom}
                floatingLabelText="Prénom"
                fullWidth={true}
                onChange={this.handleChange("prenom")}
              />
              <br />
              <br />
              <DatePicker
                ref={personne.date_naissance}
                hintText="Date de naissance"
                fullWidth={true}
                onChange={this.handleDateChange()}
              />
              <TextField
                ref={personne.photo}
                floatingLabelText="Photo"
                fullWidth={true}
                onChange={this.handleChange("photo")}
              />
              <br />
              <TextField
                ref={personne.mail_pro}
                floatingLabelText="Mail Pro"
                fullWidth={true}
                onChange={this.handleChange("mail_pro")}
              />
              <br />
              <TextField
                ref={personne.mail_perso}
                floatingLabelText="Mail Perso"
                fullWidth={true}
                onChange={this.handleChange("mail_perso")}
              />
              <br />
              <TextField
                ref={personne.tel_pro}
                floatingLabelText="Tel Pro"
                fullWidth={true}
                onChange={this.handleChange("tel_pro")}
              />
              <br />
              <TextField
                ref={personne.tel_perso}
                floatingLabelText="Tel Perso"
                fullWidth={true}
                onChange={this.handleChange("tel_perso")}
              />
              <br />
              <TextField
                ref={personne.poste}
                floatingLabelText="Poste"
                fullWidth={true}
                onChange={this.handleChange("poste")}
              />
              <br />
              <TextField
                ref={personne.description_libre}
                floatingLabelText="Description libre"
                fullWidth={true}
                multiLine={true}
                rows={2}
                onChange={this.handleChange("description_libre")}
              />
            </CardText>
            <CardActions>
              <FlatButton
                label="Valider"
                onClick={() => {
                  this.submitPersonne();
                }}
              />
            </CardActions>
          </Card>
        </div>
        <div className="col-sm" />
      </div>
    );
  }

  handleChange = propertyName => event => {
    const { personne } = this.state;
    const newPersonne = {
      ...personne,
      [propertyName]: event.target.value
    };
    this.setState({ personne: newPersonne });
  };

  handleDateChange = date => event => {
    const { personne } = this.state;
    const newPersonne = {
      ...personne,
      date_de_naissance: date
    };
    this.setState({
      personne: newPersonne
    });
  };

  submitPersonne() {
    const { personne } = this.state;
    const { personnesStore, history } = this.props;
    personnesStore.submitPersonne(personne);
    history.push("/");
  }
}

export default inject("personnesStore")(observer(PersonneAdd));
