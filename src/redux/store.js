import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));