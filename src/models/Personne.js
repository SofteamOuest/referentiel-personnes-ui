import { types } from "mobx-state-tree";

const Personne = types.model("Personne", {
  id: types.maybe(types.number),
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
});

export default Personne;
