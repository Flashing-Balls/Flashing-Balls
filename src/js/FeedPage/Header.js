import Preact from 'preact';
import { connect } from 'react-redux';

export default class Header extends Preact.Component {
  renderUser() {
    // TODO: if user logged -- show avatar.
    return (
      <button>Log In</button>
    );
  }

	render() {
    return (
      <div id="header">
        <h1>Master It!</h1>
        {this.renderUser()}
      </div>
    );
	}
}