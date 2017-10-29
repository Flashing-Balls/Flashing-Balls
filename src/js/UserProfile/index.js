import Preact from 'preact';
import { connect } from 'react-redux';
import { ON_USER_PROFILE_FETCH_START, ON_USER_PROFILE_FETCHED, ON_VIDEOS_FETCHED } from '../actions';
import { getUserVideos, getUserProfile } from '../restApiMock';
import Grid from './Grid/';
import Skills from './Skills/';

import './user_profile.sass';

import avatarUrl from '../../img/avatar.jpg';

class UserProfile extends Preact.Component {

  constructor() {
    super();
    this.state = {
      activeTab: 'grid',
    };

    this.changeTab = this.changeTab.bind( this );
  }
  componentDidMount() {
    this.props.onUserProfileFetch( this.props.match.params.username );
  }

  changeTab( activeTab ) {
    this.setState( {
      activeTab,
    } );
  }

  render() {
    const username = this.props.match.params.username;
    const isGridActive = this.state.activeTab === 'grid';

    const currentTab = ( isGridActive ) ? <Grid /> : <Skills />;

    return (
      <div className="user-profile">
        <header className="user-profile__header">
          <div className="user-profile__avatar">
            <img src={ avatarUrl } alt={ username } className="user-profile__avatar__img" />
          </div>
          <span className="user-profile__name">Hugo Boss</span>
        </header>

        <main>
          <nav className="user-profile__nav">
            <span
              role="button"
              className={ `user-profile__nav__text${ isGridActive ? ' user-profile__nav__text--active' : '' }` }
              onClick={ () => this.changeTab( 'grid' ) }
              tabIndex={ 0 }
            >
              All videos
            </span>
            <span
              role="button"
              className={ `user-profile__nav__text${ !isGridActive ? ' user-profile__nav__text--active' : '' }` }
              onClick={ () => this.changeTab( 'skills' ) }
              tabIndex={ 0 }
            >
              Skills
            </span>
          </nav>
          { currentTab }
        </main>
      </div>
    );
  }
}

const mapStateToProps = ( { userVideos, userSkills, userProfile,
   userProfileFetched, userVideosFetched, userSkillsFetched } ) =>
( { userVideos,
  userSkills,
  userProfile,
  userProfileFetched,
  userVideosFetched,
  userSkillsFetched } );

const mapDispatchToProps = dispatch => ( {
  onUserProfileFetch: ( username ) => {
    dispatch( ON_USER_PROFILE_FETCH_START() );

    getUserProfile( username )
      .then( ( user ) => {
        dispatch( ON_USER_PROFILE_FETCHED( user ) );
      } );

    getUserVideos()
      .then( ( videos ) => {
        dispatch( ON_VIDEOS_FETCHED( videos ) );
      } );
  },
} );

export default connect( mapStateToProps, mapDispatchToProps )( UserProfile );
