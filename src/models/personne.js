import {types} from 'mobx-state-tree';

const Personne = types
    .model('Personne', {
        id: types.maybe(types.number),
        name: types.maybe(types.string)
    })
    .views(self => ({}))
    .actions(self => ({}));

export default Personne;