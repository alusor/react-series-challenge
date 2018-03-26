import { createStore, applyMiddleware, compose } from 'redux';

const reducer = (state, action) => {
    return state;
}

const store = createStore( reducer, {});

export default store;