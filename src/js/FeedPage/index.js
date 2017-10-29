import Preact from 'preact';
import { connect } from 'react-redux';
import Post from './Post';
import RatablePost from './RatablePost';
import FloatingCta from '../FloatingCta';

import { ON_POSTS_FETCHED } from '../actions';
import { getPosts } from '../restApiMock';

class FeedPage extends Preact.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return this.props.posts.map( post => (
      post.IsRatable ?
        <RatablePost key={ post.id } data={ post } /> :
        <Post key={ post.id } data={ post } />
    ) );
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
