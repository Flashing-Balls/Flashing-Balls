import Preact from 'preact';
import { connect } from 'react-redux';

class UserProfile extends Preact.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
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

const mapStateToProps = ( { feed } ) => ( { posts: feed.posts } );

const mapDispatchToProps = () => ( {
  onRefresh: () => {},
} );

export default connect( mapStateToProps, mapDispatchToProps )( UserProfile );
