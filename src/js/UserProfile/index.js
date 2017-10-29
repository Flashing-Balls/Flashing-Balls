import Preact from 'preact';
import { connect } from 'react-redux';
import { ON_USER_PROFILE_FETCH_START, ON_USER_PROFILE_FETCHED, ON_VIDEOS_FETCHED } from '../actions';
import { getUserVideos, getUserProfile } from '../restApiMock';

class UserProfile extends Preact.Component {
  componentDidMount() {
    this.props.onUserProfileFetch( this.props.match.params.username );
  }
  render() {
    return (
      <div>
        <p>{ this.props.match.params.username }</p>
        <img />
        <ul>
          <li>All videos</li>
          <li>Skills</li>
        </ul>
        <div className="video-grid" />
        <div className="skills" />
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
