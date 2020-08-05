import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
