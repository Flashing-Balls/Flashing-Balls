import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const excludedTypes = [ 'NEXT_IMAGE', 'IMAGE_LOADED' ];
const logger = createLogger( {
  predicate: ( getState, action ) => excludedTypes.indexOf( action.type ) < 0,
} );

const middlewares = applyMiddleware( thunk, logger );

const store = createStore( reducer, composeWithDevTools( middlewares ) );

export default store;
