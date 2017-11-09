import { capitalize } from "lodash";
import { types } from "mobx-state-tree";

const Personne = types
  .model("Personne", {
    id: types.identifier(types.number),
    nom: types.maybe(types.string),
    prenom: types.maybe(types.string),
    date_de_naissance: types.maybe(types.string),
    photo: types.maybe(types.string),
    mail_pro: types.maybe(types.string),
    mail_perso: types.maybe(types.string),
    tel_pro: types.maybe(types.string),
    tel_perso: types.maybe(types.string),
    poste: types.maybe(types.string),
    description_libre: types.maybe(types.string)
  })
  .actions(self => ({
    afterCreate: () => {
      self.nom = self.nom.toUpperCase();
      self.prenom = capitalize(self.prenom);
    }
  }));

export default Personne;
