import { createStore } from 'redux';
import { defaultState } from '../server/defaultState';

import 'bootstrap/dist/css/bootstrap.css';

export const store = createStore(
    function reducer(state = defaultState, action) {
        return state;
    }
)
