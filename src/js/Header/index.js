import Preact from 'preact';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/';

import './header.sass';

class Header extends Preact.Component {
  render() {
    return (
      <nav className="header">
        <div className="header__container">
          <Link to="/" className="header__text">Master It!</Link>
          <Avatar
            avatar={ this.props.loggedUser.AvatarUrl }
            username={ this.props.loggedUser.Username }
          />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ( { loggedUser } ) => ( { loggedUser } );

export default connect( mapStateToProps )( Header );
