import Preact from 'preact';
import { connect } from 'react-redux';
import Post from './Post.js';
import Header from './Header.js';

class FeedPage extends Preact.Component {
  renderPosts() {
    return this.props.posts.map( ( post, index ) => {
      return (
        <div key={ `post-${ index }` }>
          <Post data={ post } />
        </div>
      );
    } );
  }
  render() {
    return (
      <div>
        <Header />
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = ( { feed } ) => ( { posts: feed.posts } );

const mapDispatchToProps = () => ( {
  onRefresh: () => {},
} );

export default connect( mapStateToProps, mapDispatchToProps )( FeedPage );
