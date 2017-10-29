import Preact from 'preact';
import Avatar from '../Avatar/';

import './header.sass';

export default class Header extends Preact.Component {
  render() {
    return (
      <nav className="header">
        <div className="header__container">
          <span className="header__text">Master It!</span>
          <Avatar avatar={ 1 } />
        </div>
      </nav>
    );
  }
}
