import Preact from 'preact';
import './header.sass';

export default class Header extends Preact.Component {
  render() {
    return (
      <nav className="header">
        <span className="header__text">Master It!</span>
      </nav>
    );
  }
}
