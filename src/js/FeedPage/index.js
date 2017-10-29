import Preact from 'preact';
import { connect } from 'react-redux';
import Post from './Post';
import RatablePost from './RatablePost';
import RoadToSkillPost from './RoadToSkillPost';
import FloatingCta from '../FloatingCta';

import { ON_POSTS_FETCHED } from '../actions';
import { getPosts } from '../restApiMock';

class FeedPage extends Preact.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return this.props.posts.map( ( postArr ) => {
      const post = postArr[ 0 ];
      if ( !post.IsRatable && !post.IsApproved ) {
        return <Post key={ post.Id } data={ post } />;
      } else if ( post.IsRatable && !post.IsApproved ) {
        return <RatablePost key={ post.Id } data={ post } />;
      } else if ( !post.IsRatable && post.IsApproved ) {
        return <RoadToSkillPost key={ post.Id } data={ postArr } />;
      }
      throw new Error( 'Dupa' );
    } );
  }

  render() {
    return (
      <div>
        <main>
          {this.renderPosts()}
        </main>
        <FloatingCta />
      </div>
    );
  }
}

const mapStateToProps = ( { posts } ) => ( { posts } );

const mapDispatchToProps = dispatch => ( {
  onRefresh: () => {},
  getPosts: () => {
    getPosts()
      .then( ( data ) => {
        dispatch( ON_POSTS_FETCHED( data ) );
      } );
  },
} );

export default connect( mapStateToProps, mapDispatchToProps )( FeedPage );
