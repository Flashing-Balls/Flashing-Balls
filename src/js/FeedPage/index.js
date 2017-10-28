import Preact from 'preact';
import { connect } from 'react-redux';

class FeedPage extends Preact.Component {
  renderPosts() {
    return this.props.posts.map( ( posts, index ) => {
      const { user, video } = posts;
      return (
        <div key={ `post-${ index }` }>
          <p>{user}</p>
          <p>{video}</p>
        </div>
      );
    } );
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
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
