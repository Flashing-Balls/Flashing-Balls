import Preact from 'preact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'preact/devtools';

import store from './store';

class App extends Preact.Component {
  render() {
    return (
      <Router>
        <Provider store={ store }>
          <div>
            <Route
              path="/"
              exact
              component={ () => ( <div /> ) }
            />
          </div>
        </Provider>
      </Router>
    );
  }
}

Preact.render( <App />, document.getElementById( 'app' ) );
