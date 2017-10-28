import Preact from 'preact';
import Avatar from '../Avatar/';

import './header.sass';

export default class Header extends Preact.Component {
  render() {
    return (
      <nav className="header">
        <span className="header__text">Master It!</span>
        <Avatar avatar={ 1 } />
      </nav>
    );
  }
}
