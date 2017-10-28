import Preact from 'preact';
import { connect } from 'react-redux';
import Post from './Post';

class FeedPage extends Preact.Component {
  renderPosts() {
    return this.props.posts.map( post => (
      <Post key={ post.id } data={ post } />
    ) );
  }
  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = ( { posts } ) => ( { posts } );

const mapDispatchToProps = () => ( {
  onRefresh: () => {},
} );

export default connect( mapStateToProps, mapDispatchToProps )( FeedPage );
