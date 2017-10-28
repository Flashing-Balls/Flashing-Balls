import Preact from 'preact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'preact/devtools';
import './main.sass';

import store from './store';
import { ON_POSTS_FETCHED } from './actions';

import FeedPage from './FeedPage';
import Header from './Header/';

import getMockedPosts from './restApiMock';

class App extends Preact.Component {
  render() {
    return (
      <Router>
        <Provider store={ store }>
          <div>
            <Header />
            <main className="container">
              <Route
                path="/"
                exact
                component={ () => ( <FeedPage /> ) }
              />
            </main>
          </div>
        </Provider>
      </Router>
    );
  }
}

Preact.render( <App />, document.getElementById( 'app' ) );

getMockedPosts()
  .then( ( data ) => {
    store.dispatch( ON_POSTS_FETCHED( data ) );
  } );
