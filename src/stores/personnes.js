import {types, process} from 'mobx-state-tree';

import Personne from '../models/personne'

const PersonnesStore = types
    .model('PersonnesStore', {
        personnes: types.optional(types.array(Personne), []),
        fetchingData: types.optional(types.boolean, false)
    })
    .views(self => ({
        get PersonnesCount() {
            return this.personnes.length;
        }
    }))
    .actions(self => {
        const fetchPersonnes = process(function* () {
            self.fetchingData = true;
            self.personnes = [];
            self.fetchingData = false;
        });
        return {fetchPersonnes};
    });

export default PersonnesStore;