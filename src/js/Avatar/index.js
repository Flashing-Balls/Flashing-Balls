import Preact from 'preact';
import { Link } from 'react-router-dom';

import avatarUrl from '../../img/avatar.jpg';

import './avatar.sass';

export default class User extends Preact.Component {
  renderAvatar() {
    if ( !this.props.avatar ) {
      return null;
    }

    return (
      <div className="avatar__image-cont">
        {/* <img alt={ `${ this.props.fullname || 'avatar' }` } src={ this.props.avatar } /> */}
        <img alt={ `${ this.props.fullname || 'avatar' }` } src={ avatarUrl } className="avatar__image" />
      </div>
    );
  }

  renderFullname() {
    if ( !this.props.fullname ) {
      return null;
    }
    return (
      <span className="avatar__text">{this.props.fullname}</span>
    );
  }

  render() {
    const username = this.props.username;
    return (
      <Link to={ `user/${ username }` } className="avatar">
        { this.renderAvatar() }
        { this.renderFullname() }
      </Link>
    );
  }
}
