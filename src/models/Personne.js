import { capitalize } from "lodash";
import { types } from "mobx-state-tree";

const Personne = types
  .model("Personne", {
    id: types.identifier(types.number),
    nom: types.optional(types.string, ""),
    prenom: types.optional(types.string, ""),
    date_de_naissance: types.optional(types.string, ""),
    photo: types.optional(types.string, ""),
    mail_pro: types.optional(types.string, ""),
    mail_perso: types.optional(types.string, ""),
    tel_pro: types.optional(types.string, ""),
    tel_perso: types.optional(types.string, ""),
    poste: types.optional(types.string, ""),
    description_libre: types.optional(types.string, "")
  })
  .actions(self => ({
    afterCreate: () => {
      self.nom = self.nom.toUpperCase();
      self.prenom = capitalize(self.prenom);
    }
  }));

export default Personne;
