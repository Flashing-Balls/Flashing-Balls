import Preact from 'preact';
import { Link } from 'react-router-dom';

export default class User extends Preact.Component {
  renderAvatar() {
    if ( !this.props.avatar ) {
      return null;
    }

    return (
      <img alt={ `${ this.props.fullname || 'avatar' }` } src={ this.props.avatar } />
    );
  }

  renderFullname() {
    if ( !this.props.fullname ) {
      return null;
    }
    return (
      <p>{this.props.fullname}</p>
    );
  }

  render() {
    const username = this.props.username;
    return (
      <Link to={ `user/${ username }` } >
        { this.renderAvatar() }
        { this.renderFullname() }
      </Link>
    );
  }
}
