import Preact from 'preact';
import Video from '../Video';
import Avatar from '../Avatar';
import Comment from './Comment/';
import './post.sass';

export default class Post extends Preact.Component {
  renderComments() {
    return this.props.data.comments.map(
      ( { user, text, id } ) => ( <Comment key={ id } user={ user } text={ text } /> )
    );
  }
  render() {
    const { user, video } = this.props.data;
    return (
      <article className="post">
        <header className="post__header">
          <Avatar avatar={ user } fullname={ user } username={ user } />
        </header>
        <main>
          <section>
            <Video url={ video } />
          </section>
          <section className="comments">
            { this.renderComments() }
          </section>
        </main>
        <input />
      </article>
    );
  }
}
