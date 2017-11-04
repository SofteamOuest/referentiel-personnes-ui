import { types, process } from "mobx-state-tree";

import Personne from "../models/Personne";

const PersonnesStore = types
  .model("PersonnesStore", {
    personnes: types.optional(types.array(Personne), []),
    fetchingData: types.optional(types.boolean, false)
  })
  .views(self => ({
    get PersonnesCount() {
      return this.personnes.length;
    }
  }))
  .actions(self => ({
    fetchPersonnes: process(function* load() {
      self.personnes = [];
      const personnes = yield fetch(
        "https://meltingpoc.k8.wildwidewest.xyz/api-personnes-mock/personnes"
      ).then(data => data.json());
      self.personnes = personnes;
    }),

    markFecthingData(fetching) {
      self.fetchingData = fetching;
    }
  }));

export default PersonnesStore;
