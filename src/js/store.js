import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import feedReducer from './FeedPage/reducer';

const excludedTypes = [ 'NEXT_IMAGE', 'IMAGE_LOADED' ];
const logger = createLogger( {
  predicate: ( getState, action ) => excludedTypes.indexOf( action.type ) < 0,
} );

const reducers = combineReducers( { feed: feedReducer } );
const middlewares = applyMiddleware( thunk, logger );

const store = createStore( reducers, composeWithDevTools( middlewares ) );

export default store;
