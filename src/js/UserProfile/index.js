import Preact from 'preact';
import { connect } from 'react-redux';
import { ON_USER_PROFILE_FETCH_START, ON_USER_PROFILE_FETCHED, ON_VIDEOS_FETCHED, ON_USER_SKILLS_FETCHED } from '../actions';
import { getUserVideos, getUserProfile, getSkills } from '../restApiMock';
import Grid from './Grid/';
import Skills from './Skills/';

import './user_profile.sass';

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

    const currentTab =
      ( isGridActive ) ?
        <Grid videos={ this.props.userVideos } /> :
        <Skills skills={ this.props.userSkills } />;

    // const props = {
    //   userVideos: this.props.userVideos,
    //   userSkills: this.props.userSkills,
    //   userProfile: this.props.userProfile,
    //   userProfileFetched: this.props.userProfileFetched,
    //   userVideosFetched: this.props.userVideosFetched,
    //   userSkillsFetched: this.props.userSkillsFetched,
    // };

    const user = this.props.userProfile;

    return (
      <div className="user-profile">
        <header className="user-profile__header">
          <div className="user-profile__avatar">
            <img src={ `https://i.imgur.com/${ user.AvatarUrl }.png` } alt={ username } className="user-profile__avatar__img" />
          </div>
          <span className="user-profile__name">{ user.FirstName } { user.LastName }</span>
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

    getSkills()
      .then( ( videos ) => {
        dispatch( ON_USER_SKILLS_FETCHED( videos ) );
      } );
  },
} );

export default connect( mapStateToProps, mapDispatchToProps )( UserProfile );
