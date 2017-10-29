import Preact from 'preact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'preact/devtools';

import UserProfile from './UserProfile';
import './main.sass';

import store from './store';

import FeedPage from './FeedPage';
import Header from './Header/';
import VideoUpload from './VideoUpload/';

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
                component={ FeedPage }
              />
              <Route path="/user/:username" component={ UserProfile } />
              <Route path="/upload/" component={ VideoUpload } />
            </main>
          </div>
        </Provider>
      </Router>
    );
  }
}

Preact.render( <App />, document.getElementById( 'app' ) );
