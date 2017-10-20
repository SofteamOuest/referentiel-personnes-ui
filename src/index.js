import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'
import './index.css';
import App from './containers/App';
import PersonnesStore from './stores/personnes';
import registerServiceWorker from './registerServiceWorker';

const personnesStore = PersonnesStore.create();
personnesStore.fetchPersonnes();

const store = {
    personnesStore: personnesStore
};

const router = (
    <Provider {...store}>
        <App/>
    </Provider>
);

ReactDOM.render(
    router,
    document.getElementById('root')
);

registerServiceWorker();
